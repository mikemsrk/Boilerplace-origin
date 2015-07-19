var addThread = function(title,body,callback) {
  return $.ajax({
    type: 'POST',
    url: '/createForumThread',
    data: JSON.stringify({
      "title": title,
      "body": body
    }),
    crossDomain: true,
    success: function(resp) {
      console.log('success',resp);
      return callback(resp);
    },
    error: function(resp) {
      // TODO: Fix this, this always goes to error - not sure.
      // Found out - jQuery 1.4.2 works with current go server, but breaks with newer ver.
      console.log('error',resp);
      if(resp.responseText === ""){ // if no error msg
        callback(resp);
      }else{         // if error msg
        callback(null);
      }
    }
  });
};

var fetchThread = function(callback) {
  $.ajax({
    type: 'GET',
    url: '/getUserInfo',
    crossDomain: true,
    success: function(resp) { // WORKING for fetchuser?
      // console.log('success',resp);
      callback(resp);
    },
    error: function(resp) {
      // TODO: Fix this, this always goes to error - not sure.
      // Found out - jQuery 1.4.2 works with current go server, but breaks with newer ver.
      console.log('error',resp);
      callback(null);
    }
  });
};

var updateThread = function(bio,avatar,callback) {
  return $.ajax({
    type: 'POST',
    url: '/updateUserInfo',
    data: JSON.stringify({
      "bio": bio,
      "avatar_link": avatar
    }),
    crossDomain: true,
    success: function(resp) {
      console.log('success',resp);
      return callback(resp);
    },
    error: function(resp) {
      // TODO: Fix this, this always goes to error - not sure.
      // Found out - jQuery 1.4.2 works with current go server, but breaks with newer ver.
      console.log('error',resp);
      if(resp.responseText === ""){ // if no error msg
        callback(resp);
      }else{         // if error msg
        callback(null);
      }
    }
  });
};

var Thread = {
  fetch: function(callback) {
    var that = this;
    fetchThread((function(res) {
        if (callback) {
          callback(res);
        }
        that.onChange(res);
    }));
  },

  add: function(title, body, callback) {
    var that = this;

    addThread(title, body, function(res) {
      if (callback) {
        callback(res);
      }
      that.onChange(res);
    });

  },
  
  update: function(bio, avatar, callback) {
    var that = this;
    updateThread(bio, avatar, function(res) {
      if (callback) {
        callback(res);
      }
      that.onChange(res);
    });
  },

  delete: function(callback) {
    if (callback) {
      callback();
    }
    this.onChange(false);
  },

  onChange: function() {}
};

module.exports = Thread;