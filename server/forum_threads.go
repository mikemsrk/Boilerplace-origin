package main

import (
  "fmt"
  "log"
  "net/http"
  "encoding/json"
  "io/ioutil"
  "database/sql"
  _ "github.com/go-sql-driver/mysql"
  "github.com/gorilla/sessions"  
  "strconv"  
  "time"
)


//TODO: handle panics/errors, as unhandled panics/errors will shut down the server
//TODO: make a checkerr function
//TODO: put duplicated code into functions


//TODO: Return correct status and message if session is invalid
//TODO: Return correct status and message if insert failed
//TODO: format retrieved datetime to javascript datetime
func createForumThread(w http.ResponseWriter, r *http.Request, db *sql.DB, store *sessions.CookieStore) { 

  fmt.Println("Creating forum thread...")

  //add headers to response
  w.Header()["access-control-allow-origin"] = []string{"http://localhost:8080"} //TODO: fix this?                                                           
  w.Header()["access-control-allow-methods"] = []string{"GET, POST, OPTIONS"}
  w.Header()["Content-Type"] = []string{"application/json"}

  //ignore options requests
  if r.Method == "OPTIONS" {
    fmt.Println("options request received")
    w.WriteHeader(http.StatusTemporaryRedirect)
    return
  }

  //check for session to see if client is authenticated
  session, err := store.Get(r, "flash-session")
  if err != nil {
    http.Error(w, err.Error(), http.StatusInternalServerError)
  }
  fm := session.Flashes("message")
  if fm == nil {
    fmt.Println("Trying to create a thread as an invalid user")
    fmt.Fprint(w, "No flash messages")
    return
  }
  //session.Save(r, w)

  //get the user id and username from the cookie
  userid := session.Values["id"].(int)
  //username := session.Values["username"].(string)

  //parse the body of the request into a string
  body, err := ioutil.ReadAll(r.Body)
  if err != nil {
    panic(err)
  }
  //fmt.Println(string(body))
  
  //parse the JSON string body to get the forum thread info
  byt := body
  var dat map[string]interface{}
  if err := json.Unmarshal(byt, &dat); err != nil {
    panic(err)
  }
  thread_title := dat["title"].(string)
  thread_body := dat["body"].(string)

  //insert forum thread into database
  stmt, err := db.Prepare("insert into forum_threads (creator_user_id, title, body) values (?, ?, ?)")
  if err != nil {
    log.Fatal(err)
  }
  res, err := stmt.Exec(userid, thread_title, thread_body)
  if err != nil {
    log.Fatal(err)
  }
  lastId, err := res.LastInsertId()
  if err != nil {
    log.Fatal(err)
  }
  rowCnt, err := res.RowsAffected()
  if err != nil {
    log.Fatal(err)
  }
  fmt.Printf("Inserted thread " + thread_title + " into database. Last inserted ID = %d, rows affected = %d\n", lastId, rowCnt)

  //return 200 status to indicate success
  fmt.Println("about to write 200 header")
  w.Write([]byte("{\"thread_id\" : " + strconv.FormatInt(lastId, 10) + "}"))
}

//option: 0 - by user id, 1 - by rating, 2 - by datetime
//TODO: Return correct status and message if session is invalid
//TODO: Return correct status and message if query failed
func getForumThread(w http.ResponseWriter, r *http.Request, db *sql.DB, store *sessions.CookieStore, option int) {

  fmt.Println("Getting forum thread...")

  //add headers to response
  w.Header()["access-control-allow-origin"] = []string{"http://localhost:8080"} //TODO: fix this?                                                           
  w.Header()["access-control-allow-methods"] = []string{"GET, POST, OPTIONS"}
  w.Header()["Content-Type"] = []string{"application/json"}

  //ignore options requests
  if r.Method == "OPTIONS" {
    fmt.Println("options request received")
    w.WriteHeader(http.StatusTemporaryRedirect)
    return
  }

  //check for session to see if client is authenticated
  session, err := store.Get(r, "flash-session")
  if err != nil {
    http.Error(w, err.Error(), http.StatusInternalServerError)
  }
  fm := session.Flashes("message")
  if fm == nil {
    fmt.Println("Trying to get forum thread info as an invalid user")
    fmt.Fprint(w, "No flash messages")
    return
  }
  //session.Save(r, w)

  //parse the body of the request into a string
  body, err := ioutil.ReadAll(r.Body)
  if err != nil {
    panic(err)
  }
  //fmt.Println(string(body))
  
  //parse the JSON string body to get the page number
  byt := body
  var dat map[string]interface{}
  if err := json.Unmarshal(byt, &dat); err != nil {
    panic(err)
  }
  page_number := int(dat["page_number"].(float64))

  //only get 25 threads per query, and get records based on page number
  limit := 25
  offset := (page_number - 1) * limit

  //variable(s) to hold the returned values from the query
  var (
    queried_thread_id int
    queried_creator_user_id int
    queried_title string
    queried_body string
    queried_rating int
    queried_creation_time time.Time
    queried_last_update_time time.Time
  )

  //change query based on option
  var dbQuery string 
  if option == 0 { //find forum threads created by the user
    //get the user from the cookie
    userid := session.Values["id"].(int)

    //thread_id, creator_user_id, title, body, rating, creation_time, last_update_time
    dbQuery = "select * from forum_threads where creator_user_id = " + strconv.Itoa(userid) + " limit " + strconv.Itoa(limit) + " offset " + strconv.Itoa(offset)
  } else if option == 1 { //find the most popular forum threads
    dbQuery = "select * from forum_threads order by rating desc limit " + strconv.Itoa(limit) + " offset " + strconv.Itoa(offset)
  } else { //find the most recent forum threads
    dbQuery = "select * from forum_threads order by creation_time desc limit " + strconv.Itoa(limit) + " offset " + strconv.Itoa(offset)
  }

  //perform query and check for errors
  rows, err := db.Query(dbQuery)
  if err != nil {
    panic(err)
  } 

  //outbound object containing a collection of outbound objects for each forum thread
  forumThreadCollectionOutbound := ForumThreadCollectionOutbound{ForumThreads: make([]*ForumThreadInfoOutbound, 0)}

  //iterate through results of query
  for rows.Next() {
    //get the relevant information from the query results
    err = rows.Scan(&queried_thread_id, &queried_creator_user_id, &queried_title, &queried_body, &queried_rating, &queried_creation_time, &queried_last_update_time)
    if err != nil {
      panic(err)
    }

    //create outbound object for each row
    forumThreadInfoOutbound := ForumThreadInfoOutbound{Thread_id: queried_thread_id, Creator_user_id: queried_creator_user_id, Title: queried_title, 
      Body: queried_body, Rating: queried_rating, Creation_time: queried_creation_time, Last_update_time: queried_last_update_time}

    //add each outbound object to the collection outbound object
    forumThreadCollectionOutbound.ForumThreads = append(forumThreadCollectionOutbound.ForumThreads, &forumThreadInfoOutbound)
  }

  //json stringify the data
  jsonString, err := json.Marshal(forumThreadCollectionOutbound)
  if err != nil {
    panic(err)
  }
  fmt.Println(string(jsonString))      

  //return 200 status to indicate success
  fmt.Println("about to write 200 header")
  w.Write(jsonString)

}


//TODO: Return correct status and message if session is invalid
//TODO: Return correct status and message if query failed
func scoreForumThread(w http.ResponseWriter, r *http.Request, db *sql.DB, store *sessions.CookieStore) {

  fmt.Println("Score forum thread...")

  //add headers to response
  w.Header()["access-control-allow-origin"] = []string{"http://localhost:8080"} //TODO: fix this?                                                           
  w.Header()["access-control-allow-methods"] = []string{"GET, POST, OPTIONS"}
  w.Header()["Content-Type"] = []string{"application/json"}

  //ignore options requests
  if r.Method == "OPTIONS" {
    fmt.Println("options request received")
    w.WriteHeader(http.StatusTemporaryRedirect)
    return
  }

  //check for session to see if client is authenticated
  session, err := store.Get(r, "flash-session")
  if err != nil {
    http.Error(w, err.Error(), http.StatusInternalServerError)
  }
  fm := session.Flashes("message")
  if fm == nil {
    fmt.Println("Trying to vote on forum thread as an invalid user")
    fmt.Fprint(w, "No flash messages")
    return
  }
  //session.Save(r, w)

  //parse the body of the request into a string
  body, err := ioutil.ReadAll(r.Body)
  if err != nil {
    panic(err)
  }
  //fmt.Println(string(body))
  
  //parse the JSON string body to get the thread to update and the score to update the thread with
  byt := body
  var dat map[string]interface{}
  if err := json.Unmarshal(byt, &dat); err != nil {
    panic(err)
  }
  score := int(dat["score"].(float64))
  thread_id := int(dat["thread_id"].(float64))

  //update the forum thread by the score
  stmt, err := db.Prepare("update forum_threads set rating=rating+? where thread_id=?")
  if err != nil {
    log.Fatal(err)
  }
  res, err := stmt.Exec(score, thread_id)
  if err != nil {
    log.Fatal(err)
  }
  rowCnt, err := res.RowsAffected()
  if err != nil {
    log.Fatal(err)
  }
  fmt.Printf("Updated score of thread " + strconv.Itoa(thread_id) + ". Rows affected = %d\n", rowCnt)

  //return 200 status to indicate success
  fmt.Println("about to write 200 header")
  w.WriteHeader(http.StatusOK)

}


