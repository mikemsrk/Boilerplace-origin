package main


//structs to be json stringified and sent as outbound messages to the client(s)


//struct containing an array of player positions
type PlayerPositionListOutbound struct {
  Players []*PlayerPositionOutbound `json:"players"`
}

//struct containing a player's position and identifiers
type PlayerPositionOutbound struct {
  Id int `json:"id"`
  Username string `json:"username"`

  BodyPosition *BodyPosition `json:"bodyPosition"`
  HeadPosition *HeadPosition `json:"headPosition"`
}

//struct containing a player's body position and identifiers
type PlayerBodyPositionOutbound struct {
  Id int `json:"id"`
  Username string `json:"username"`

  BodyPosition *BodyPosition `json:"bodyPosition"`
}

//struct containing a player's head position and identifiers
type PlayerHeadPositionOutbound struct {
  Id int `json:"id"`
  Username string `json:"username"`

  HeadPosition *HeadPosition `json:"headPosition"`
}

//struct containing a player's message and identifiers
type PlayerMessageOutbound struct {
  Id int `json:"id"`
  Username string `json:"username"`

  Message string `json:"message"`
}

//struct containing a user's info
type UserInfoOutbound struct {
  Id int `json:"id"`
  User_name string `json:"user_name"`
  First_name string `json:"first_name"`
  Last_name string `json:"last_name"`
  Bio string `json:"bio"`
  Rep int `json:"rep"`
  Avatar_link string `json:"avatar_link"`
}

//struct containing a forum thread's info
type ForumThreadInfoOutbound struct {
  Thread_id int `json:"thread_id"`
  Creator_user_id int `json:"creator_user_id"`
  Title string `json:"title"`
  Body string `json:"body"`
  Rating int `json:"rating"`
  Creation_time string `json:"creation_time"`
  Last_update_time string `json:"last_update_time"`
}

//struct containing an array of forum threads
type ForumThreadCollectionOutbound struct {
  ForumThreads []*ForumThreadInfoOutbound `json:"forumThreads"`
}


