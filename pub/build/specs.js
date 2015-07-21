(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/mikemsrk/goflux/pub/app/App.js":[function(require,module,exports){
var React = require('react');
var Router = require('react-router');

var Navbar = require('./components/navbar/navbar');
var Profile = require('./components/profile/profile');
var Front = require('./components/front/front');
var Login = require('./components/login/login');
var Logout = require('./components/logout/logout');
var Signup = require('./components/signup/signup');
var NewThread = require('./components/thread/new');
var Thread = require('./components/thread/thread');

var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;
var Navigation = Router.Navigation;
var Link = Router.Link;

var App = React.createClass({displayName: "App",

  getInitialState: function(){
    return {
      // loggedIn: Auth.loggedIn()
    };
  },

  setStateOnAuth: function(loggedIn){
    // this.setState({
    //   loggedIn: loggedIn
    // });
  },

  componentWillMount: function(){
    // Auth.onChange = this.setStateOnAuth;
  },
  
  render: function(){
    return (
      React.createElement("div", {className: "container-fluid"}, 
        React.createElement(Navbar, null), 
        React.createElement(RouteHandler, null)
      )
    );
  }
});

var routes = (
  React.createElement(Route, {path: "/", handler: App}, 
    React.createElement(DefaultRoute, {handler: Front}), 
    React.createElement(Route, {path: "profile", handler: Profile}), 
    React.createElement(Route, {path: "login", handler: Login}), 
    React.createElement(Route, {path: "logout", handler: Logout}), 
    React.createElement(Route, {path: "signup", handler: Signup}), 
    React.createElement(Route, {path: "new", handler: NewThread})
  )
);


Router.run(routes, Router.HashLocation, function(Root){
  React.render(React.createElement(Root, null), document.getElementById('app'));
});
	
module.exports = App;

},{"./components/front/front":"/Users/mikemsrk/goflux/pub/app/components/front/front.js","./components/login/login":"/Users/mikemsrk/goflux/pub/app/components/login/login.js","./components/logout/logout":"/Users/mikemsrk/goflux/pub/app/components/logout/logout.js","./components/navbar/navbar":"/Users/mikemsrk/goflux/pub/app/components/navbar/navbar.js","./components/profile/profile":"/Users/mikemsrk/goflux/pub/app/components/profile/profile.js","./components/signup/signup":"/Users/mikemsrk/goflux/pub/app/components/signup/signup.js","./components/thread/new":"/Users/mikemsrk/goflux/pub/app/components/thread/new.js","./components/thread/thread":"/Users/mikemsrk/goflux/pub/app/components/thread/thread.js","react":"react","react-router":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/index.js"}],"/Users/mikemsrk/goflux/pub/app/actions/AuthActions.js":[function(require,module,exports){
var AppDispatcher = require('../dispatchers/AppDispatcher');
var AuthConstants = require('../constants/AuthConstants');

var AuthActions = {
  signup: function(data){
    AppDispatcher.handleAction({
      actionType: AuthConstants.SIGNUP,
      data: data
    });
  },
  login: function(data){
    AppDispatcher.handleAction({
      actionType: AuthConstants.LOGIN,
      data: data
    });
  },
  logout: function(){
    AppDispatcher.handleAction({
      actionType: AuthConstants.LOGOUT,
      data: null
    });
  }
};

module.exports = AuthActions;
},{"../constants/AuthConstants":"/Users/mikemsrk/goflux/pub/app/constants/AuthConstants.js","../dispatchers/AppDispatcher":"/Users/mikemsrk/goflux/pub/app/dispatchers/AppDispatcher.js"}],"/Users/mikemsrk/goflux/pub/app/actions/CommentActions.js":[function(require,module,exports){
var AppDispatcher = require('../dispatchers/AppDispatcher');
var CommentConstants = require('../constants/CommentConstants');

var CommentActions = {
  add: function(data){
    AppDispatcher.handleAction({
      actionType: CommentConstants.POST_ADD,
      data: data
    });
  },
  // Fetches a page of Comments
  fetchPage: function(data){
    AppDispatcher.handleAction({
      actionType: CommentConstants.POST_FETCHPAGE,
      data: data
    });
  },

  fetchUserPage: function(data){
    AppDispatcher.handleAction({
      actionType: CommentConstants.POST_FETCHUSERPAGE,
      data: data
    });
  },

  // Fetches one Comment only
  fetchComment: function(data){
    AppDispatcher.handleAction({
      actionType: CommentConstants.POST_FETCHCOMMENT,
      data: data
    });
  },
  // Rate a Comment up or down
  vote: function(data){
    AppDispatcher.handleAction({
      actionType: CommentConstants.POST_VOTE,
      data: data
    });
  }

};

module.exports = CommentActions;
},{"../constants/CommentConstants":"/Users/mikemsrk/goflux/pub/app/constants/CommentConstants.js","../dispatchers/AppDispatcher":"/Users/mikemsrk/goflux/pub/app/dispatchers/AppDispatcher.js"}],"/Users/mikemsrk/goflux/pub/app/actions/ProfileActions.js":[function(require,module,exports){
var AppDispatcher = require('../dispatchers/AppDispatcher');
var ProfileConstants = require('../constants/ProfileConstants');

var ProfileActions = {
  fetch: function(){
    AppDispatcher.handleAction({
      actionType: ProfileConstants.FETCH
    });
  },
  update: function(data){
    AppDispatcher.handleAction({
      actionType: ProfileConstants.UPDATE,
      data: data
    });
  },
  delete: function(){
    AppDispatcher.handleAction({
      actionType: ProfileConstants.DELETE,
      data: null
    });
  }
};

module.exports = ProfileActions;
},{"../constants/ProfileConstants":"/Users/mikemsrk/goflux/pub/app/constants/ProfileConstants.js","../dispatchers/AppDispatcher":"/Users/mikemsrk/goflux/pub/app/dispatchers/AppDispatcher.js"}],"/Users/mikemsrk/goflux/pub/app/actions/ThreadActions.js":[function(require,module,exports){
var AppDispatcher = require('../dispatchers/AppDispatcher');
var ThreadConstants = require('../constants/ThreadConstants');

var ThreadActions = {
  add: function(data){
    AppDispatcher.handleAction({
      actionType: ThreadConstants.ADD,
      data: data
    });
  },
  // Fetches a page of threads
  fetchPage: function(data){
    AppDispatcher.handleAction({
      actionType: ThreadConstants.FETCHPAGE,
      data: data
    });
  },

  fetchUserPage: function(data){
    AppDispatcher.handleAction({
      actionType: ThreadConstants.FETCHUSERPAGE,
      data: data
    });
  },

  // Fetches one thread only
  fetchThread: function(data){
    AppDispatcher.handleAction({
      actionType: ThreadConstants.FETCHTHREAD,
      data: data
    });
  },
  // Rate a thread up or down
  vote: function(data){
    AppDispatcher.handleAction({
      actionType: ThreadConstants.VOTE,
      data: data
    });
  }

};

module.exports = ThreadActions;
},{"../constants/ThreadConstants":"/Users/mikemsrk/goflux/pub/app/constants/ThreadConstants.js","../dispatchers/AppDispatcher":"/Users/mikemsrk/goflux/pub/app/dispatchers/AppDispatcher.js"}],"/Users/mikemsrk/goflux/pub/app/components/comment/comment-input.js":[function(require,module,exports){
var React = require('react');
var CommentStore = require('../../stores/CommentStore');
var CommentActions = require('../../actions/CommentActions');
var AuthStore = require('../../stores/AuthStore');

var NewComment = React.createClass({displayName: "NewComment",

  addComment: function(e){

    e.preventDefault();
    // Send action to update user information
    var body = React.findDOMNode(this.refs.body).value.trim();

    if(!body){
      return;
    }

    this.props.onAddComment(body);
    React.findDOMNode(this.refs.body).value = '';

  },

  render: function() {
    return (
      React.createElement("div", {className: "newComment"}, 
        React.createElement("form", {onSubmit: this.addComment}, 
          React.createElement("input", {type: "textarea", className: "form-control", placeholder: "comment...", ref: "body"}), 
          React.createElement("button", {type: "submit", className: "btn btn-success", value: "Submit"}, "Submit")
        )
      )
    );
  }
});

module.exports = NewComment;
},{"../../actions/CommentActions":"/Users/mikemsrk/goflux/pub/app/actions/CommentActions.js","../../stores/AuthStore":"/Users/mikemsrk/goflux/pub/app/stores/AuthStore.js","../../stores/CommentStore":"/Users/mikemsrk/goflux/pub/app/stores/CommentStore.js","react":"react"}],"/Users/mikemsrk/goflux/pub/app/components/comment/comment-item.js":[function(require,module,exports){
var React = require('react');
var ReactIntl = require('react-intl');
var FormattedRelative = ReactIntl.FormattedRelative;
var FormattedDate = ReactIntl.FormattedDate;

// MySQL Date -> JS Date
var formatDate = function(str){
  var dateParts = str.split("-");
  var times = dateParts[2].split(":");
  var hour = times[0].substr(3);
  var minutes = times[1];
  var seconds = times[2].substr(0,2);

  return new Date(dateParts[0], dateParts[1] - 1, dateParts[2].substr(0,2),hour,minutes,seconds);
};

// Shortens the body to fit in the table
var formatBody = function(str){
  var shortStr = str.substr(0,40);
  if(str.length >= 40){
    shortStr += '...';
  }
  return shortStr;
};

//  Thread comment item
var CommentItem = React.createClass({displayName: "CommentItem",

  upVote: function(){
    this.props.onUpVote(this.props.item.comment_id);
    React.findDOMNode(this.refs.up).className = '';
    React.findDOMNode(this.refs.down).className="glyphicon glyphicon-chevron-down"
    this.props.item.rating++;
  },

  downVote: function(){
    this.props.onDownVote(this.props.item.comment_id);
    React.findDOMNode(this.refs.down).className = '';
    React.findDOMNode(this.refs.up).className = "glyphicon glyphicon-chevron-up";
    this.props.item.rating--;
  },

  render: function() {
    var created = formatDate(this.props.item.creation_time);
    var updated = formatDate(this.props.item.last_update_time);

    return (
      React.createElement("tr", null, 
        React.createElement("td", null, 
          React.createElement("a", {href: "#", ref: "down", className: "glyphicon glyphicon-chevron-down", "aria-hidden": "true", onClick: this.downVote}), " ", this.props.item.rating, " ", React.createElement("a", {href: "#", ref: "up", className: "glyphicon glyphicon-chevron-up", "aria-hidden": "true", onClick: this.upVote})), 
        React.createElement("td", null, this.props.item.contents), 
        React.createElement("td", null, "User: ", this.props.item.user_id), 

        React.createElement("td", null, 
          React.createElement(FormattedDate, {
            value: created, 
            day: "numeric", 
            month: "long", 
            year: "numeric"})
        ), 

        React.createElement("td", null, 
        React.createElement(FormattedRelative, {
            value: updated})
        )

      )
    );
  }
});

module.exports = CommentItem;
},{"react":"react","react-intl":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/index.js"}],"/Users/mikemsrk/goflux/pub/app/components/comment/comment-list.js":[function(require,module,exports){
var React = require('react');
var CommentStore = require('../../stores/CommentStore');
var CommentActions = require('../../actions/CommentActions');
var CommentItem = require('./comment-item');
var NewComment = require('./comment-input');

// Front page Comments
// Fetch Comments by rating by page

var CommentList = React.createClass({displayName: "CommentList",
  getInitialState: function(){
    return {
      page: 1,
      comments: [{
        body: 'fake body',
        rating: 5,
        creation_time: "2015-07-19T10:31:04Z",
        last_update_time: "2015-07-20T12:31:00Z",
        comment_id: 4,
        user_id: 1
      }]
    };
  },

  componentDidMount: function(){
    CommentActions.fetchPage({threadId: this.props.threadId, page:this.state.page});
    CommentStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function(){
    CommentStore.removeChangeListener(this._onChange);
  },

  _onChange: function(){
    this.setState({
      comments: CommentStore.getComments().threadPosts
    });
  },

  addComment: function(body){
    CommentActions.add({threadId:this.props.threadId, body:body});
    CommentActions.fetchPage({threadId: this.props.threadId, page:this.state.page});
  },

  upVote: function(id){
    // TODO: call Comment action to upvote
    // CommentActions.vote({comment_id:id,score:1});
  },

  downVote: function(id){
    // TODO: call Comment action to downvote
    // CommentActions.vote({comment_id:id,score:-1});
  },

  render: function() {
    return (
      React.createElement("div", {className: "Comments"}, 
        
          React.createElement(NewComment, {onAddComment: this.addComment}), 
          React.createElement("h3", null, "Comments"), 
          React.createElement("table", {className: "table table-hover"}, 
          
            React.createElement("thead", null, 
              React.createElement("tr", null, 
                React.createElement("th", null, "Rating"), 
                React.createElement("th", null, "Body"), 
                React.createElement("th", null, "Submitted"), 
                React.createElement("th", null, "Created"), 
                React.createElement("th", null, "Updated")
              )
            ), 

            React.createElement("tbody", null, 
              
                this.state.comments.map(function(item){
                  return (
                    React.createElement(CommentItem, {
                      ref: "comment", 
                      onGoThread: this.goThread, 
                      onUpVote: this.upVote, 
                      onDownVote: this.downVote, 
                      key: item.post_id, 
                      item: item})
                  );
                },this)
              
            )

          )
          
      )
    );
  }
});

module.exports = CommentList;
},{"../../actions/CommentActions":"/Users/mikemsrk/goflux/pub/app/actions/CommentActions.js","../../stores/CommentStore":"/Users/mikemsrk/goflux/pub/app/stores/CommentStore.js","./comment-input":"/Users/mikemsrk/goflux/pub/app/components/comment/comment-input.js","./comment-item":"/Users/mikemsrk/goflux/pub/app/components/comment/comment-item.js","react":"react"}],"/Users/mikemsrk/goflux/pub/app/components/front/front-threaditem.js":[function(require,module,exports){
var React = require('react');
var ReactIntl = require('react-intl');
var FormattedRelative = ReactIntl.FormattedRelative;
var FormattedDate = ReactIntl.FormattedDate;

// MySQL Date -> JS Date
var formatDate = function(str){
  var dateParts = str.split("-");
  var times = dateParts[2].split(":");
  var hour = times[0].substr(3);
  var minutes = times[1];
  var seconds = times[2].substr(0,2);

  return new Date(dateParts[0], dateParts[1] - 1, dateParts[2].substr(0,2),hour,minutes,seconds);
};

// Shortens the body to fit in the table
var formatBody = function(str){
  var shortStr = str.substr(0,40);
  if(str.length >= 40){
    shortStr += '...';
  }
  return shortStr;
};

// Front page thread list
var ThreadItem = React.createClass({displayName: "ThreadItem",

  upVote: function(){
    this.props.onUpVote(this.props.item.thread_id);
    React.findDOMNode(this.refs.up).className = '';
    React.findDOMNode(this.refs.down).className="glyphicon glyphicon-chevron-down"
    this.props.item.rating++;
  },

  downVote: function(){
    this.props.onDownVote(this.props.item.thread_id);
    React.findDOMNode(this.refs.down).className = '';
    React.findDOMNode(this.refs.up).className = "glyphicon glyphicon-chevron-up";
    this.props.item.rating--;
  },

  render: function() {
    // TODO: Clicking on title takes you to individual thread page
    var created = formatDate(this.props.item.creation_time);
    var updated = formatDate(this.props.item.last_update_time);
    var body = formatBody(this.props.item.body);

    return (
      React.createElement("tr", null, 
        React.createElement("td", null, 
          React.createElement("a", {href: "#", ref: "down", className: "glyphicon glyphicon-chevron-down", "aria-hidden": "true", onClick: this.downVote}), " ", this.props.item.rating, " ", React.createElement("a", {href: "#", ref: "up", className: "glyphicon glyphicon-chevron-up", "aria-hidden": "true", onClick: this.upVote})), 
        React.createElement("td", null, React.createElement("a", {href: "#/thread/"+this.props.item.thread_id}, this.props.item.title)), 
        React.createElement("td", null, body), 
        React.createElement("td", null, "User: ", this.props.item.user_id), 

        React.createElement("td", null, 
          React.createElement(FormattedDate, {
            value: created, 
            day: "numeric", 
            month: "long", 
            year: "numeric"})
        ), 

        React.createElement("td", null, 
        React.createElement(FormattedRelative, {
            value: updated})
        )

      )
    );
  }
});

module.exports = ThreadItem;
},{"react":"react","react-intl":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/index.js"}],"/Users/mikemsrk/goflux/pub/app/components/front/front-threads.js":[function(require,module,exports){
var React = require('react');
var ThreadStore = require('../../stores/ThreadStore');
var ThreadActions = require('../../actions/ThreadActions');
var ThreadItem = require('./front-threaditem');

// Front page threads
// Fetch threads by rating by page

var Threads = React.createClass({displayName: "Threads",
  getInitialState: function(){
    return {
      page: 1,
      threads: []
    };
  },

  componentDidMount: function(){
    ThreadActions.fetchPage({page:this.state.page});
    ThreadStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function(){
    ThreadStore.removeChangeListener(this._onChange);
  },

  _onChange: function(){
    this.setState({
      threads: ThreadStore.getThreads().forumThreads
    });
    console.log(this.state.threads);
  },

  upVote: function(id){
    // TODO: call thread action to upvote
    ThreadActions.vote({thread_id:id,score:1});
  },

  downVote: function(id){
    // TODO: call thread action to downvote
    ThreadActions.vote({thread_id:id,score:-1});
  },

  goThread: function(id){
    console.log('transitioning to...thread',id);
  },

  render: function() {
    return (
      React.createElement("div", {className: "threads"}, 
        
          React.createElement("h3", null, "Front Page"), 
          React.createElement("table", {className: "table table-hover"}, 
            React.createElement("thead", null, 
              React.createElement("tr", null, 
                React.createElement("th", null, "Rating"), 
                React.createElement("th", null, "Title"), 
                React.createElement("th", null, "Body"), 
                React.createElement("th", null, "Submitted"), 
                React.createElement("th", null, "Created"), 
                React.createElement("th", null, "Updated")
              )
            ), 

            React.createElement("tbody", null, 
              
                this.state.threads.map(function(item){
                  return (
                    React.createElement(ThreadItem, {
                      ref: "thread", 
                      onGoThread: this.goThread, 
                      onUpVote: this.upVote, 
                      onDownVote: this.downVote, 
                      key: item.thread_id, 
                      item: item})
                  );
                },this)
              
            )

          )
          
      )
    );
  }
});

module.exports = Threads;
},{"../../actions/ThreadActions":"/Users/mikemsrk/goflux/pub/app/actions/ThreadActions.js","../../stores/ThreadStore":"/Users/mikemsrk/goflux/pub/app/stores/ThreadStore.js","./front-threaditem":"/Users/mikemsrk/goflux/pub/app/components/front/front-threaditem.js","react":"react"}],"/Users/mikemsrk/goflux/pub/app/components/front/front.js":[function(require,module,exports){
var React = require('react');
var Threads = require('./front-threads');
var Link = require('react-router').Link;
var AuthStore = require('../../stores/AuthStore');

var Front = React.createClass({displayName: "Front",

  getInitialState: function(){
    return {
      loggedIn: AuthStore.loggedIn()
    };
  },

  componentWillMount: function(){
    AuthStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function(){
    AuthStore.removeChangeListener(this._onChange);
  },

  _onChange: function(){
    this.setState({
      loggedIn: AuthStore.loggedIn()
    });
  },

  render: function() {
    return (
      React.createElement("div", {className: "col-md-12"}, 
        this.state.loggedIn ? (
        React.createElement(Link, {className: "btn btn-info", to: "/new"}, "New")
        ): null, 
        React.createElement(Threads, null)
      )
    );
  }
});

module.exports = Front;
},{"../../stores/AuthStore":"/Users/mikemsrk/goflux/pub/app/stores/AuthStore.js","./front-threads":"/Users/mikemsrk/goflux/pub/app/components/front/front-threads.js","react":"react","react-router":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/index.js"}],"/Users/mikemsrk/goflux/pub/app/components/login/login-form.js":[function(require,module,exports){
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var LoginForm = React.createClass({displayName: "LoginForm",
  handleSubmit: function(e){
    e.preventDefault();
    var username = React.findDOMNode(this.refs.username).value.trim();
    var password = React.findDOMNode(this.refs.password).value.trim();
    if(!username || !password){
      return;
    }
    // Send request back up to Login
    this.props.onLoginSubmit({username: username, password: password});
    
    React.findDOMNode(this.refs.username).value = '';
    React.findDOMNode(this.refs.password).value = '';
    return;
  },
  render: function(){
    return (
      React.createElement("form", {className: "loginForm", onSubmit: this.handleSubmit}, 
        React.createElement("input", {type: "text", className: "form-control", placeholder: "Username", ref: "username"}), 
        React.createElement("input", {type: "password", className: "form-control", placeholder: "Password", ref: "password"}), 
        React.createElement(Link, {className: "btn btn-info", to: "/signup"}, "Register"), 
        React.createElement("button", {type: "submit", className: "btn btn-success", value: "Submit"}, "Submit")
      )
    );
  }
});

module.exports = LoginForm;
},{"react":"react","react-router":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/index.js"}],"/Users/mikemsrk/goflux/pub/app/components/login/login.js":[function(require,module,exports){
var React = require('react');
var LoginForm = require('./login-form');
var AuthActions = require('../../actions/AuthActions');
var AuthStore = require('../../stores/AuthStore');

var Login = React.createClass({displayName: "Login",
  getInitialState: function(){
    return {
      loggedIn: AuthStore.loggedIn(),
      error: AuthStore.error()
    };
  },

  componentWillMount: function(){
    AuthStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function(){
    AuthStore.removeChangeListener(this._onChange);
  },

  _onChange: function(){
    this.setState({
      loggedIn: AuthStore.loggedIn(),
      error: AuthStore.error()
    });
    if(this.state.loggedIn){
      location.hash = '/';
    }
  },

  handleLoginSubmit: function(user){
    AuthActions.login({username:user.username,pass:user.password});
  },

  render: function() {
    return (
      React.createElement("div", {className: "Auth center-block"}, 
        React.createElement("h2", null, "Login"), 
        this.state.loggedIn ? (
            React.createElement("p", null, " You are already logged in ")
          ) : (
            React.createElement(LoginForm, {onLoginSubmit: this.handleLoginSubmit})
          ), 
        this.state.error && (React.createElement("p", {className: "error"}, "Bad login information"))
      )
    );
  }
});

module.exports = Login;
},{"../../actions/AuthActions":"/Users/mikemsrk/goflux/pub/app/actions/AuthActions.js","../../stores/AuthStore":"/Users/mikemsrk/goflux/pub/app/stores/AuthStore.js","./login-form":"/Users/mikemsrk/goflux/pub/app/components/login/login-form.js","react":"react"}],"/Users/mikemsrk/goflux/pub/app/components/logout/logout.js":[function(require,module,exports){
var React = require('react');

var Logout = React.createClass({displayName: "Logout",
  getInitialState: function(){
    // TODO: Move to Auth Store?
    // if(Auth.loggedIn()){
    //   Auth.logout(function(){
    //     location.hash = '/login';
    //   });
    // }
    return {
      // loggedIn: Auth.loggedIn()
    };
  },
  render: function() {
    return (
      React.createElement("div", {className: "Auth center-block"}, 
          React.createElement("p", null, "Logout Successful.")
      )
    );
  }
});

module.exports = Logout;
},{"react":"react"}],"/Users/mikemsrk/goflux/pub/app/components/navbar/navbar.js":[function(require,module,exports){
var React = require('react');
var Router = require('react-router');
var AuthActions = require('../../actions/AuthActions');
var AuthStore = require('../../stores/AuthStore');
var Link = Router.Link;

// TODO - factor out navbar login form

var Navbar = React.createClass({displayName: "Navbar",

  getInitialState: function(){
    return {
      loggedIn: AuthStore.loggedIn()
    };
  },

  componentWillMount: function(){
    // _onChange is cb function.
    AuthStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function(){
    AuthStore.removeChangeListener(this._onChange);
  },

  _onChange: function(){
    this.setState({
      loggedIn: AuthStore.loggedIn()
    });
    if(this.state.loggedIn){
      location.hash = '/';
    }
  },

  navlogout: function(){
    AuthActions.logout();
  },

  handleSubmit: function(e){
    e.preventDefault();
    var username = React.findDOMNode(this.refs.username).value.trim();
    var password = React.findDOMNode(this.refs.password).value.trim();
    if(!username || !password){
      return;
    }
    // TODO: send request to server
    this.handleLoginSubmit({username: username, password: password});
    React.findDOMNode(this.refs.username).value = '';
    React.findDOMNode(this.refs.password).value = '';
    return;
  },

  handleLoginSubmit: function(user){
    AuthActions.login({username:user.username,pass:user.password});
  },

  render: function(){
    return (
    React.createElement("nav", {className: "navbar navbar-inverse"}, 
      React.createElement("div", {className: "container-fluid"}, 

        React.createElement("div", {className: "navbar-header"}, 
          React.createElement("button", {type: "button", className: "navbar-toggle collapsed", "data-toggle": "collapse", "data-target": "#bs-example-navbar-collapse-1", "aria-expanded": "false"}, 
            React.createElement("span", {className: "sr-only"}, "Toggle navigation"), 
            React.createElement("span", {className: "icon-bar"}), 
            React.createElement("span", {className: "icon-bar"}), 
            React.createElement("span", {className: "icon-bar"})
          ), 
          React.createElement("a", {className: "navbar-brand", href: "#"}, "App")
        ), 
        
        React.createElement("div", {className: "collapse navbar-collapse", id: "bs-example-navbar-collapse-1"}, 
          React.createElement("ul", {className: "nav navbar-nav navbar-right"}, 

          this.state.loggedIn ? (
            React.createElement("form", {className: "navbar-form navbar-right", role: "login"}, 
              React.createElement("div", {className: "form-group"}, 
                React.createElement(Link, {className: "btn btn-warning", to: "/logout", onClick: this.navlogout}, "Log out")
              )
            )
          ) : (
            React.createElement("form", {className: "navbar-form navbar-right", role: "login", onSubmit: this.handleSubmit}, 
              React.createElement("div", {className: "form-group"}, 
                React.createElement("input", {type: "text", className: "form-control", placeholder: "Username", ref: "username"}), 
                React.createElement("input", {type: "text", className: "form-control", placeholder: "Password", ref: "password"}), 
                React.createElement("button", {type: "submit", className: "btn btn-success hidden", value: "Submit"}, "Submit")
              )
            )
          ), 

            React.createElement("li", {className: "dropdown"}, 
              React.createElement("a", {href: "#", className: "dropdown-toggle", "data-toggle": "dropdown", role: "button", "aria-haspopup": "true", "aria-expanded": "false"}, "Dropdown ", React.createElement("span", {className: "caret"})), 
              React.createElement("ul", {className: "dropdown-menu"}, 
                React.createElement("li", null, React.createElement("a", {href: "#"}, "Action")), 
                React.createElement("li", null, React.createElement("a", {href: "#"}, "Another action")), 
                React.createElement("li", null, React.createElement("a", {href: "#"}, "Something else here")), 
                React.createElement("li", {role: "separator", className: "divider"}), 
                React.createElement("li", null, React.createElement("a", {href: "#"}, "Separated link")), 
                React.createElement("li", {role: "separator", className: "divider"}), 
                React.createElement("li", null, React.createElement("a", {href: "#"}, "One more separated link"))
              )
            ), 
            this.state.loggedIn ? (
              null
            ) : (
              React.createElement("li", null, React.createElement(Link, {to: "/signup"}, "Register"))
            ), 

            this.state.loggedIn ? (
              React.createElement("li", null, React.createElement(Link, {to: "/profile"}, "Profile"))
            ) : (
              React.createElement("li", null, React.createElement(Link, {to: "/login"}, "Login"))
            )

          )
        )

      )
    )
    )
  }
});

module.exports = Navbar;
},{"../../actions/AuthActions":"/Users/mikemsrk/goflux/pub/app/actions/AuthActions.js","../../stores/AuthStore":"/Users/mikemsrk/goflux/pub/app/stores/AuthStore.js","react":"react","react-router":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/index.js"}],"/Users/mikemsrk/goflux/pub/app/components/profile/profile-bio.js":[function(require,module,exports){
var React = require('react');

var Bio = React.createClass({displayName: "Bio",
  // TODO: Incorporate Later when Auth is in.

  getInitialState: function(){
    return {
      editing: false
    };
  },

  // TODO: Bubble this up to profile parent
  enableEdit: function(){
    // make the bio field editable
      // replace it with a form.
    this.setState({
      editing: true
    })
  },

  cancelEdit: function(){
    // make the bio field editable
      // replace it with a form.
    this.setState({
      editing: false
    })
  },

  saveEdit: function(){
    var avatar = React.findDOMNode(this.refs.avatar).value.trim();
    var bio = React.findDOMNode(this.refs.bio).value.trim();

    var data = this.props.item;
    data.avatar_link = avatar;
    data.bio = bio;

    // Bubble up request to parent
    this.props.onEditSubmit(data);

    this.setState({
      editing: false
    })
  },

  render: function() {
    return (
      React.createElement("div", {className: "col-md-3"}, 
        React.createElement("h3", null, this.props.item.user_name), 
        React.createElement("h3", null, this.props.item.first_name, " ", this.props.item.last_name), 

        !this.state.editing ? (
          React.createElement("img", {src: this.props.item.avatar_link, className: "img-thumbnail"})
        ) : (
          React.createElement("p", null, "Avatar Link: ", React.createElement("input", {type: "text", ref: "avatar"}))
        ), 

        React.createElement("p", null, "Rep: ", this.props.item.rep), 
        React.createElement("p", null, "Id: ", this.props.item.user_id), 

        !this.state.editing ? (
          React.createElement("p", null, "Bio: ", this.props.item.bio)
        ) : (
          React.createElement("p", null, "Bio: ", React.createElement("input", {type: "text", ref: "bio"}))
        ), 
        
        !this.state.editing ? (
          React.createElement("a", {className: "btn btn-warning", onClick: this.enableEdit}, "Edit")
        ) : (
          React.createElement("a", {className: "btn btn-success", onClick: this.saveEdit}, "Save")
        ), 

        !this.state.editing ? (
          React.createElement("a", {className: "btn btn-success hidden"})
        ) : (
          React.createElement("a", {className: "btn btn-info", onClick: this.cancelEdit}, "Cancel")
        )

      )
    );
  }
});

module.exports = Bio;
},{"react":"react"}],"/Users/mikemsrk/goflux/pub/app/components/profile/profile-threaditem.js":[function(require,module,exports){
var React = require('react');
var ReactIntl = require('react-intl');
var FormattedRelative = ReactIntl.FormattedRelative;
var FormattedDate = ReactIntl.FormattedDate;

// MySQL Date -> JS Date
var formatDate = function(str){
  var dateParts = str.split("-");
  var times = dateParts[2].split(":");
  var hour = times[0].substr(3);
  var minutes = times[1];
  var seconds = times[2].substr(0,2);

  return new Date(dateParts[0], dateParts[1] - 1, dateParts[2].substr(0,2),hour,minutes,seconds);
};

// Shortens the body to fit in the table
var formatBody = function(str){
  var shortStr = str.substr(0,40);
  if(str.length >= 40){
    shortStr += '...';
  }
  return shortStr;
};

// Front page thread list
var ProfileThreadItem = React.createClass({displayName: "ProfileThreadItem",

  render: function() {
    // TODO: Clicking on title takes you to individual thread.
    var created = formatDate(this.props.item.creation_time);
    var updated = formatDate(this.props.item.last_update_time);
    var body = formatBody(this.props.item.body);

    return (
      React.createElement("tr", null, 
        React.createElement("td", null, this.props.item.rating), 
        React.createElement("td", null, React.createElement("a", {href: "#/thread/"+this.props.item.thread_id}, this.props.item.title)), 
        React.createElement("td", null, body), 
        React.createElement("td", null, "User: ", this.props.item.user_id), 
        
        React.createElement("td", null, 
          React.createElement(FormattedDate, {
            value: created, 
            day: "numeric", 
            month: "long", 
            year: "numeric"})
        ), 

        React.createElement("td", null, 
          React.createElement(FormattedRelative, {
            value: updated})
        )

      )
    );
  }
});

module.exports = ProfileThreadItem;
},{"react":"react","react-intl":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/index.js"}],"/Users/mikemsrk/goflux/pub/app/components/profile/profile-threads.js":[function(require,module,exports){
var React = require('react');
var ThreadStore = require('../../stores/ThreadStore');
var ThreadActions = require('../../actions/ThreadActions');
var ProfileThreadItem = require('./profile-threaditem');

var BioThreads = React.createClass({displayName: "BioThreads",
  // TODO: Incorporate Later when Auth is in.

  getInitialState: function(){
    return {
      page: 1,
      threads: []
    };
  },

  componentDidMount: function(){
    ThreadActions.fetchUserPage({page:this.state.page});
    ThreadStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function(){
    ThreadStore.removeChangeListener(this._onChange);
  },

  _onChange: function(){
    this.setState({
      threads: ThreadStore.getUserThreads().forumThreads
    });
    console.log(this.state.threads);
  },

  render: function() {
    return (
      React.createElement("div", {className: "col-md-9"}, 
        React.createElement("h3", null, "My Threads"), 
        React.createElement("table", {className: "table table-hover"}, 
          React.createElement("thead", null, 
            React.createElement("tr", null, 
              React.createElement("th", null, "Rating"), 
              React.createElement("th", null, "Title"), 
              React.createElement("th", null, "Body"), 
              React.createElement("th", null, "Submitted"), 
              React.createElement("th", null, "Created"), 
              React.createElement("th", null, "Updated")
            )
          ), 

          React.createElement("tbody", null, 
            this.state.threads.map(function(item){
              return (
                React.createElement(ProfileThreadItem, {key: item.thread_id, item: item})
              );
            })
          )

        )
      )
    );
  }
});

module.exports = BioThreads;
},{"../../actions/ThreadActions":"/Users/mikemsrk/goflux/pub/app/actions/ThreadActions.js","../../stores/ThreadStore":"/Users/mikemsrk/goflux/pub/app/stores/ThreadStore.js","./profile-threaditem":"/Users/mikemsrk/goflux/pub/app/components/profile/profile-threaditem.js","react":"react"}],"/Users/mikemsrk/goflux/pub/app/components/profile/profile.js":[function(require,module,exports){
var React = require('react');
var AuthStore = require('../../stores/AuthStore');
var ProfileStore = require('../../stores/ProfileStore');
var ProfileActions = require('../../actions/ProfileActions');
var Bio = require('./profile-bio');
var BioThreads = require('./profile-threads');

var Profile = React.createClass({displayName: "Profile",
  // TODO: Incorporate Later when Auth is in.

  getInitialState: function(){
    if(!AuthStore.loggedIn()){
      location.hash = '/login';
    }
    return {
      avatar_link: "",
      bio: "",
      first_name: "",
      last_name: "",
      user_name: "",
      id: 0,
      rep: 0
    };
  },

  componentDidMount: function(){
    ProfileActions.fetch();
    ProfileStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function(){
    ProfileStore.removeChangeListener(this._onChange);
  },

  editProfile: function(data){
    // Send action to update user information
    ProfileActions.update({
      avatar_link: data.avatar_link,
      bio: data.bio
    });
  },

  _onChange: function(){
      this.setState({
        first_name: ProfileStore.getBio().first_name,
        last_name: ProfileStore.getBio().last_name,
        user_name: ProfileStore.getBio().user_name,
        bio: ProfileStore.getBio().bio,
        avatar_link: ProfileStore.getBio().avatar_link,
        rep: ProfileStore.getBio().rep
      });
  },

  render: function() {
    return (
      React.createElement("div", {className: "profile"}, 
        React.createElement(Bio, {onEditSubmit: this.editProfile, item: this.state}), 
        React.createElement(BioThreads, null)
      )
    );
  }
});

module.exports = Profile;
},{"../../actions/ProfileActions":"/Users/mikemsrk/goflux/pub/app/actions/ProfileActions.js","../../stores/AuthStore":"/Users/mikemsrk/goflux/pub/app/stores/AuthStore.js","../../stores/ProfileStore":"/Users/mikemsrk/goflux/pub/app/stores/ProfileStore.js","./profile-bio":"/Users/mikemsrk/goflux/pub/app/components/profile/profile-bio.js","./profile-threads":"/Users/mikemsrk/goflux/pub/app/components/profile/profile-threads.js","react":"react"}],"/Users/mikemsrk/goflux/pub/app/components/signup/signup-form.js":[function(require,module,exports){
var React = require('react');

var SignupForm = React.createClass({displayName: "SignupForm",
  handleSubmit: function(e){
    e.preventDefault();
    var firstname = React.findDOMNode(this.refs.firstname).value.trim();
    var lastname = React.findDOMNode(this.refs.lastname).value.trim();
    var username = React.findDOMNode(this.refs.username).value.trim();
    var password = React.findDOMNode(this.refs.password).value.trim();
    var passconf = React.findDOMNode(this.refs.passconf).value.trim();

    var error = false;
    if(!firstname || !lastname || !username || !password || !passconf){
      error = true;
    }
    if(passconf !== password){
      error = true;
    }
    // Bubble this up to parent
    this.props.onSignupSubmit({firstname: firstname, lastname: lastname, username: username, password: password, error: error});
    
    React.findDOMNode(this.refs.firstname).value = '';
    React.findDOMNode(this.refs.lastname).value = '';
    React.findDOMNode(this.refs.username).value = '';
    React.findDOMNode(this.refs.password).value = '';
    React.findDOMNode(this.refs.passconf).value = '';
    return;
  },
  render: function(){
    return (
      React.createElement("form", {className: "signupForm", onSubmit: this.handleSubmit}, 
        React.createElement("div", {className: "nameField"}, 
          React.createElement("input", {name: "first", type: "text", className: "form-control", placeholder: "First", ref: "firstname"}), 
          React.createElement("input", {name: "last", type: "text", className: "form-control", placeholder: "Last", ref: "lastname"})
        ), 
        React.createElement("input", {type: "text", className: "form-control", placeholder: "Username", ref: "username"}), 
        React.createElement("input", {type: "password", className: "form-control", placeholder: "Password", ref: "password"}), 
        React.createElement("input", {type: "password", className: "form-control", placeholder: "Confirm", ref: "passconf"}), 
        React.createElement("button", {type: "submit", className: "btn btn-success", value: "Submit"}, "Submit")
      )
    );
  }
});

module.exports = SignupForm;
},{"react":"react"}],"/Users/mikemsrk/goflux/pub/app/components/signup/signup.js":[function(require,module,exports){
var React = require('react');
var SignupForm = require('./signup-form');
var AuthActions = require('../../actions/AuthActions');
var AuthStore = require('../../stores/AuthStore');

var Signup = React.createClass({displayName: "Signup",
  getInitialState: function(){
    return {
      loggedIn: AuthStore.loggedIn(),
      error: AuthStore.error()
    };
  },

  componentWillMount: function(){
    AuthStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function(){
    AuthStore.removeChangeListener(this._onChange);
  },

  _onChange: function(){
    this.setState({
      loggedIn: AuthStore.loggedIn(),
      error: AuthStore.error()
    });
    if(this.state.loggedIn){
      location.hash = '/';
    }
  },

  handleSignupSubmit: function(user){
    AuthActions.signup({
      firstname: user.firstname, 
      lastname: user.lastname, 
      username: user.username, 
      password: user.password, 
      error: user.error
    });
  },

  render: function() {
    return (
      React.createElement("div", {className: "Auth center-block"}, 
        React.createElement("h2", null, "Sign up"), 
          React.createElement(SignupForm, {onSignupSubmit: this.handleSignupSubmit}), 
          this.state.error && (React.createElement("p", {className: "error"}, "Bad signup information"))
      )
    );
  }
});

module.exports = Signup;
},{"../../actions/AuthActions":"/Users/mikemsrk/goflux/pub/app/actions/AuthActions.js","../../stores/AuthStore":"/Users/mikemsrk/goflux/pub/app/stores/AuthStore.js","./signup-form":"/Users/mikemsrk/goflux/pub/app/components/signup/signup-form.js","react":"react"}],"/Users/mikemsrk/goflux/pub/app/components/thread/new.js":[function(require,module,exports){
var React = require('react');
var ThreadStore = require('../../stores/ThreadStore');
var ThreadActions = require('../../actions/ThreadActions');
var AuthStore = require('../../stores/AuthStore');

var NewThread = React.createClass({displayName: "NewThread",
  getInitialState: function(){
    if(!AuthStore.loggedIn()){
      location.hash = '/login';
    }
    return {
      success: false
    };
  },

  componentDidMount: function(){
    ThreadStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function(){
    ThreadStore.removeChangeListener(this._onChange);
  },

  addThread: function(){
    // Send action to update user information
    var title = React.findDOMNode(this.refs.title).value.trim();
    var body = React.findDOMNode(this.refs.body).value.trim();

    if(!title || !body){
      return;
    }

    ThreadActions.add({
      title: title,
      body: body
    });

  },

  _onChange: function(){
    location.hash = '/';
  },


  render: function() {
    return (
      React.createElement("div", {className: "col-md-12"}, 
        React.createElement("h3", null, "New Thread"), 
        React.createElement("div", {className: "newThread center-block"}, 
            React.createElement("form", {onSubmit: this.addThread}, 
              React.createElement("input", {type: "text", className: "form-control", placeholder: "Title", ref: "title"}), 
              React.createElement("input", {type: "textarea", className: "form-control", placeholder: "Body", ref: "body"}), 
              React.createElement("button", {type: "submit", className: "btn btn-success", value: "Submit"}, "Submit")
            )
        )
      )
    );
  }
});

module.exports = NewThread;
},{"../../actions/ThreadActions":"/Users/mikemsrk/goflux/pub/app/actions/ThreadActions.js","../../stores/AuthStore":"/Users/mikemsrk/goflux/pub/app/stores/AuthStore.js","../../stores/ThreadStore":"/Users/mikemsrk/goflux/pub/app/stores/ThreadStore.js","react":"react"}],"/Users/mikemsrk/goflux/pub/app/components/thread/thread.js":[function(require,module,exports){
var React = require('react');
var ThreadStore = require('../../stores/ThreadStore');
var ThreadActions = require('../../actions/ThreadActions');

var CommentList = require('../comment/comment-list');
var CommentInput = require('../comment/comment-input');

var Thread = React.createClass({displayName: "Thread",

  getInitialState: function(){
    return {
      id:this.props.params.id,
      title: '',
      body: '',
      rating: null
    };
  },

  componentDidMount: function(){
    ThreadActions.fetchThread({id:this.state.id});
    ThreadStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function(){
    ThreadStore.removeChangeListener(this._onChange);
  },

  _onChange: function(){
    this.setState({
      title: ThreadStore.getThread().forumThreads[0].title,
      body: ThreadStore.getThread().forumThreads[0].body,
      rating: ThreadStore.getThread().forumThreads[0].rating
    });
  },

  render: function() {
    return (
      React.createElement("div", {className: "col-md-12"}, 
        React.createElement("h3", null, " ", this.state.title, " "), 
        React.createElement("div", {className: "card"}, 
          React.createElement("p", null, " ", this.state.body, " ")
        ), 
        React.createElement("p", null, " Rating: ", this.state.rating, " "), 

        React.createElement(CommentList, {threadId: this.state.id})
      )
    );
  }
});

module.exports = Thread;
},{"../../actions/ThreadActions":"/Users/mikemsrk/goflux/pub/app/actions/ThreadActions.js","../../stores/ThreadStore":"/Users/mikemsrk/goflux/pub/app/stores/ThreadStore.js","../comment/comment-input":"/Users/mikemsrk/goflux/pub/app/components/comment/comment-input.js","../comment/comment-list":"/Users/mikemsrk/goflux/pub/app/components/comment/comment-list.js","react":"react"}],"/Users/mikemsrk/goflux/pub/app/constants/AuthConstants.js":[function(require,module,exports){
var AuthConstants = {
  SIGNUP: 'SIGNUP',
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT'
};

module.exports = AuthConstants;
},{}],"/Users/mikemsrk/goflux/pub/app/constants/CommentConstants.js":[function(require,module,exports){
var CommentConstants = {
  POST_ADD: 'POST_ADD',
  POST_FETCHPAGE: 'POST_FETCHPAGE',
  POST_FETCHUSERPAGE: 'POST_FETCHUSERPAGE',
  POST_VOTE: 'POST_VOTE',
  POST_UPDATE: 'POST_UPDATE',
  POST_DELETE: 'POST_DELETE'
};

module.exports = CommentConstants;
},{}],"/Users/mikemsrk/goflux/pub/app/constants/ProfileConstants.js":[function(require,module,exports){
var ProfileConstants = {
  FETCH: 'FETCH', // fetches user data to display on view
  UPDATE: 'UPDATE', // updates user data
  DELETE: 'DELETE' // TODO: delete account
};

module.exports = ProfileConstants;
},{}],"/Users/mikemsrk/goflux/pub/app/constants/ThreadConstants.js":[function(require,module,exports){
var ThreadConstants = {
  ADD: 'ADD',
  FETCHTHREAD: 'FETCHTHREAD',
  FETCHPAGE: 'FETCHPAGE',
  FETCHUSERPAGE: 'FETCHUSERPAGE',
  VOTE: 'VOTE',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE'
};

module.exports = ThreadConstants;
},{}],"/Users/mikemsrk/goflux/pub/app/dispatchers/AppDispatcher.js":[function(require,module,exports){
var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();

AppDispatcher.handleAction = function(action) {
  this.dispatch({
    source: 'VIEW_ACTION',
    action: action
  });
}

module.exports = AppDispatcher;
},{"flux":"/Users/mikemsrk/goflux/pub/node_modules/flux/index.js"}],"/Users/mikemsrk/goflux/pub/app/services/AuthService.js":[function(require,module,exports){
var authenticateUser = function(username, password, callback) {
  $.ajax({
    type: 'POST',
    url: '/authenticate',
    data: JSON.stringify({
      username: username,
      password: password
    }),
    crossDomain: true,
    success: function(resp) { // NOT WORKING
      console.log('success',resp);
      callback({
        authenticated: true,
        token: resp.auth_token
      });
    },
    error: function(resp) {
      // TODO: Fix this, this always goes to error - not sure.
      // Found out - jQuery 1.4.2 works with current go server, but breaks with newer ver.
      console.log('error',resp);
      if(resp.responseText === ""){
        callback({
          authenticated: true,
          token: resp.auth_token
        });
      }else{
        callback({
          authenticated: false
        });
      }
    }
  });
};

var createUser = function(username, password, firstname, lastname, callback) {
  return $.ajax({
    type: 'POST',
    url: '/createUser',
    data: JSON.stringify({
      "username": username,
      "password": password,
      "firstname": firstname,
      "lastname": lastname
    }),
    crossDomain: true,
    success: function(resp) {
      console.log('success',resp);
      return callback({
        authenticated: true,
        token: resp.auth_token
      });
    },
    error: function(resp) {
      // TODO: Fix this, this always goes to error - not sure.
      // Found out - jQuery 1.4.2 works with current go server, but breaks with newer ver.
      console.log('error',resp);
      if(resp.responseText === ""){ // if no error msg
        callback({
          authenticated: true,
          token: resp.auth_token
        });
      }else{         // if error msg
        callback({
          authenticated: false
        });
      }
    }
  });
};

var Auth = {
  login: function(username, pass, callback) {
    var that = this;

    if (this.loggedIn()) {
      // console.log('already logged in');
      // if (callback) {
      //   callback(true);
      // }
      // this.onChange(true);
      // return;
    }
    authenticateUser(username, pass, (function(res) {
        var authenticated = false;
        if (res.authenticated) {
          console.log('login successful');
          authenticated = true;
        }
        if (callback) {
          callback(authenticated);
        }
        that.onChange(authenticated);
    }));
  },
  signup: function(username, password, firstname, lastname, callback) {
    var that = this;
    
    if (this.loggedIn()) {
      // if (callback) {
      //   callback(true);
      // }
      // this.onChange(true);
      // return;
    }
    createUser(username, password, firstname, lastname, function(res) {
        var authenticated = false;
        if (res.authenticated) {
          console.log('signup and login successful!');
          authenticated = true;
        }
        if (callback) {
          callback(authenticated);
        }
        that.onChange(authenticated);
    });
  },

  logout: function(callback) {
    deleteAllCookies();

    function deleteAllCookies() {
      var cookies = document.cookie.split(";");

      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
      }
    };

    if (callback) {
      callback();
    }
    this.onChange(false);
  },

  loggedIn: function() {
    // check the flash session cookie
    var good = false;
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("flash-session=");
      if(eqPos > -1) good = true;
    }

    return good;
  },

  onChange: function() {}
};

module.exports = Auth;
},{}],"/Users/mikemsrk/goflux/pub/app/services/CommentService.js":[function(require,module,exports){
var addComment = function(threadId,body,callback) {
  return $.ajax({
    type: 'POST',
    url: '/createThreadPost',
    data: JSON.stringify({
      "thread_id": parseInt(threadId),
      "contents": body
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


var fetchComment = function(id,callback) {
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

// Grabs Comments for page number
var fetchPage = function(threadId, page, callback) {
  $.ajax({
    type: 'POST',
    url: '/getThreadPostsByRating',
    data: JSON.stringify({"thread_id": parseInt(threadId), "page_number" : parseInt(page)}),
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

var fetchUserPage = function(page, callback) {
  
  $.ajax({
    type: 'POST',
    url: '/getForumThreadsByUserId',
    data: JSON.stringify({"page_number" : page}),
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

var updateComment = function(bio,avatar,callback) {
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

var vote = function(comment_id, score, callback) {
  
  $.ajax({
    type: 'POST',
    url: '/scoreForumComment',
    data: JSON.stringify({"comment_id" : comment_id, "score" : score}),
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

var Comment = {

  fetchPage: function(threadId, page, callback) {
    var that = this;
    fetchPage(threadId, page ,function(res) {
        if (callback) {
          callback(res);
        }
        that.onChange(res);
    });
  },

  fetchUserPage: function(page,callback) {
    var that = this;
    fetchUserPage(page,function(res) {
        if (callback) {
          callback(res);
        }
        that.onChange(res);
    });
  },

  add: function(threadId, body, callback) {
    var that = this;

    addComment(threadId, body, function(res) {
      if (callback) {
        callback(res);
      }
      that.onChange(res);
    });

  },
  
  update: function(bio, avatar, callback) {
    var that = this;
    updateComment(bio, avatar, function(res) {
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

  vote: function(Comment_id,score,callback){
    var that = this;

    vote(Comment_id, score, function(res) {
      if (callback) {
        callback(res);
      }
      that.onChange(res);
    });

  },

  onChange: function() {}
};

module.exports = Comment;
},{}],"/Users/mikemsrk/goflux/pub/app/services/ProfileService.js":[function(require,module,exports){
var fetchUser = function(callback) {
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

var updateUser = function(bio,avatar,callback) {
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

var Profile = {
  fetch: function(callback) {
    var that = this;
    fetchUser((function(res) {
        if (callback) {
          callback(res);
        }
        that.onChange(res);
    }));
  },
  
  update: function(bio, avatar, callback) {
    var that = this;
    console.log(JSON.stringify({bio:bio,avatar_link:avatar}));
    updateUser(bio, avatar, function(res) {
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

module.exports = Profile;
},{}],"/Users/mikemsrk/goflux/pub/app/services/ThreadService.js":[function(require,module,exports){
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


var fetchThread = function(id,callback) {
  $.ajax({
    type: 'POST',
    url: '/getForumThreadsByThreadId',
    data: JSON.stringify({"thread_id" : parseInt(id), "page_number" : 1}),
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

// Grabs threads for page number
var fetchPage = function(page, callback) {
  
  $.ajax({
    type: 'POST',
    url: '/getForumThreadsByRating',
    data: JSON.stringify({"page_number" : page}),
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

var fetchUserPage = function(page, callback) {
  
  $.ajax({
    type: 'POST',
    url: '/getForumThreadsByUserId',
    data: JSON.stringify({"page_number" : page}),
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

var vote = function(thread_id, score, callback) {
  
  $.ajax({
    type: 'POST',
    url: '/scoreForumThread',
    data: JSON.stringify({"thread_id" : thread_id, "score" : score}),
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

var Thread = {
  fetchThread: function(id,callback) {
    var that = this;
    fetchThread(id,function(res) {
        if (callback) {
          callback(res);
        }
        that.onChange(res);
    });
  },

  fetchPage: function(page,callback) {
    var that = this;
    fetchPage(page,function(res) {
        if (callback) {
          callback(res);
        }
        that.onChange(res);
    });
  },

  fetchUserPage: function(page,callback) {
    var that = this;
    fetchUserPage(page,function(res) {
        if (callback) {
          callback(res);
        }
        that.onChange(res);
    });
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

  vote: function(thread_id,score,callback){
    var that = this;

    vote(thread_id, score, function(res) {
      if (callback) {
        callback(res);
      }
      that.onChange(res);
    });

  },

  onChange: function() {}
};

module.exports = Thread;
},{}],"/Users/mikemsrk/goflux/pub/app/stores/AuthStore.js":[function(require,module,exports){
var AppDispatcher = require('../dispatchers/AppDispatcher');
var AuthConstants = require('../constants/AuthConstants');
var Auth = require('../services/AuthService');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _user = null;
var _loggedIn = null;
var _error = null;

var AuthStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
     this.emit(CHANGE_EVENT);
   },

  error: function(){
    return _error;
  },

  login: function(username,pass){
    var that = this;
    _error = false;
    Auth.login(username,pass,function(success){

      if(success){
        _loggedIn = true;
      }else{
        _loggedIn = false;
        _error = true;
      }
      that.emitChange();

    });
  },
  // log out user
  logout: function() {
    var that = this;
    Auth.logout(function(){
      _loggedIn = false;
      that.emitChange();
    });
  },

  loggedIn: function() {
    return Auth.loggedIn();
  },

  signup: function(username,password,firstname,lastname){
    var that = this;
    _error = false;
    Auth.signup(username, password, firstname, lastname, function(success) {

      if(success){
        _loggedIn = true;
      }else{
        _loggedIn = false;
        _error = true;
      }
      that.emitChange();

    });
  },

  addChangeListener: function(cb) {
    this.on(CHANGE_EVENT, cb)
  },

  removeChangeListener: function(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  }
});


AppDispatcher.register(function(payload){
  var action = payload.action;

  switch(action.actionType){
    case AuthConstants.SIGNUP:
      AuthStore.signup(action.data.username,action.data.password,action.data.firstname,action.data.lastname);
      AuthStore.emitChange();
      break;
    case AuthConstants.LOGIN:
      AuthStore.login(action.data.username,action.data.pass);
      AuthStore.emitChange();
      break;
    case AuthConstants.LOGOUT:
      AuthStore.logout();
      // RouterContainer.get().transitionTo('/login');
      break;
    default:
      return true;
  }

  AuthStore.emitChange();
  return true;
});

module.exports = AuthStore;
},{"../constants/AuthConstants":"/Users/mikemsrk/goflux/pub/app/constants/AuthConstants.js","../dispatchers/AppDispatcher":"/Users/mikemsrk/goflux/pub/app/dispatchers/AppDispatcher.js","../services/AuthService":"/Users/mikemsrk/goflux/pub/app/services/AuthService.js","events":"/Users/mikemsrk/goflux/pub/node_modules/browserify/node_modules/events/events.js","object-assign":"/Users/mikemsrk/goflux/pub/node_modules/object-assign/index.js"}],"/Users/mikemsrk/goflux/pub/app/stores/CommentStore.js":[function(require,module,exports){
var AppDispatcher = require('../dispatchers/AppDispatcher');
var CommentConstants = require('../constants/CommentConstants');
var Comment = require('../services/CommentService');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _comments = [];
var _userComments = [];
var _comment = null;

var CommentStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
     this.emit(CHANGE_EVENT);
   },

  getComment: function(){
    return _comment;
  },

  getComments: function(){
    return _comments;
  },

  getUserComments: function(){
    return _userComments;
  },

  fetchPage: function(threadId, page){
    var that = this;
    Comment.fetchPage(threadId, page, function(data){
      _comments = data;
      that.emitChange();
    });
  },

  fetchUserPage: function(page){
    var that = this;
    Comment.fetchUserPage(page, function(data){
      _userComments = data;
      that.emitChange();
    });
  },

  add: function(threadId,body){
    var that = this;
    Comment.add(threadId,body,function(data){
      that.emitChange();
    });
  },

  vote: function(Comment_id,score){
    var that = this;
    Comment.vote(Comment_id,score,function(data){
      that.emitChange();
    });
  },

  update: function(bio,avatar){
    // var that = this;
    // Comment.update(bio,avatar,function(data){
    //   console.log('update successful');
    //   that.fetch();
    // });
  },

  delete: function(){


  },

  addChangeListener: function(cb) {
    this.on(CHANGE_EVENT, cb)
  },

  removeChangeListener: function(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  }
});


AppDispatcher.register(function(payload){
  var action = payload.action;

  switch(action.actionType){
    case CommentConstants.POST_FETCHPAGE:
      CommentStore.fetchPage(action.data.threadId, action.data.page);
      CommentStore.emitChange();
      break;
    case CommentConstants.POST_FETCHUSERPAGE:
      CommentStore.fetchUserPage(action.data.page);
      CommentStore.emitChange();
      break;
    case CommentConstants.POST_ADD:
      CommentStore.add(action.data.threadId,action.data.body);
      break;
    case CommentConstants.POST_UPDATE:
      // TODO: Updating a Comment

      break;
    case CommentConstants.POST_DELETE:
      // TODO: Deleting a Comment

      break;
    case CommentConstants.POST_VOTE:
      CommentStore.vote(action.data.Comment_id,action.data.score);
      break;

    default:
      return true;
  }

  CommentStore.emitChange();
  return true;
});

module.exports = CommentStore;
},{"../constants/CommentConstants":"/Users/mikemsrk/goflux/pub/app/constants/CommentConstants.js","../dispatchers/AppDispatcher":"/Users/mikemsrk/goflux/pub/app/dispatchers/AppDispatcher.js","../services/CommentService":"/Users/mikemsrk/goflux/pub/app/services/CommentService.js","events":"/Users/mikemsrk/goflux/pub/node_modules/browserify/node_modules/events/events.js","object-assign":"/Users/mikemsrk/goflux/pub/node_modules/object-assign/index.js"}],"/Users/mikemsrk/goflux/pub/app/stores/ProfileStore.js":[function(require,module,exports){
var AppDispatcher = require('../dispatchers/AppDispatcher');
var ProfileConstants = require('../constants/ProfileConstants');
var Profile = require('../services/ProfileService');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _store = {
  avatar_link: "",
  bio: "",
  first_name: "",
  last_name: "",
  user_name: "",
  id: 0,
  rep: 0
};

var ProfileStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
     this.emit(CHANGE_EVENT);
   },

  getBio: function(){
    return _store;
  },

  fetch: function(){
    var that = this;
    Profile.fetch(function(data){
      _store = data;
      that.emitChange();
    });
  },

  update: function(bio,avatar){
    var that = this;
    Profile.update(bio,avatar,function(data){
      console.log('update successful');
      that.fetch();
    });
  },

  delete: function(){


  },

  addChangeListener: function(cb) {
    this.on(CHANGE_EVENT, cb)
  },

  removeChangeListener: function(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  }
});


AppDispatcher.register(function(payload){
  var action = payload.action;

  switch(action.actionType){
    case ProfileConstants.FETCH:
      ProfileStore.fetch();
      ProfileStore.emitChange();
      break;
    case ProfileConstants.UPDATE:
      ProfileStore.update(action.data.bio,action.data.avatar_link);
      ProfileStore.emitChange();
      break;
    case ProfileStore.DELETE:
      ProfileStore.delete();
      break;
    default:
      return true;
  }

  ProfileStore.emitChange();
  return true;
});

module.exports = ProfileStore;
},{"../constants/ProfileConstants":"/Users/mikemsrk/goflux/pub/app/constants/ProfileConstants.js","../dispatchers/AppDispatcher":"/Users/mikemsrk/goflux/pub/app/dispatchers/AppDispatcher.js","../services/ProfileService":"/Users/mikemsrk/goflux/pub/app/services/ProfileService.js","events":"/Users/mikemsrk/goflux/pub/node_modules/browserify/node_modules/events/events.js","object-assign":"/Users/mikemsrk/goflux/pub/node_modules/object-assign/index.js"}],"/Users/mikemsrk/goflux/pub/app/stores/ThreadStore.js":[function(require,module,exports){
var AppDispatcher = require('../dispatchers/AppDispatcher');
var ThreadConstants = require('../constants/ThreadConstants');
var Thread = require('../services/ThreadService');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _threads = [];
var _userThreads = [];
var _thread = null;

var ThreadStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
     this.emit(CHANGE_EVENT);
   },

  getThread: function(){
    return _thread;
  },

  getThreads: function(){
    return _threads;
  },

  getUserThreads: function(){
    return _userThreads;
  },

  fetchThread: function(id){
    var that = this;
    Thread.fetchThread(id, function(data){
      _thread = data;
      that.emitChange();
    });
  },

  fetchPage: function(page){
    var that = this;
    Thread.fetchPage(page, function(data){
      _threads = data;
      that.emitChange();
    });
  },

  fetchUserPage: function(page){
    var that = this;
    Thread.fetchUserPage(page, function(data){
      _userThreads = data;
      that.emitChange();
    });
  },

  add: function(title,body){
    var that = this;
    Thread.add(title,body,function(data){
      that.emitChange();
    });
  },

  vote: function(thread_id,score){
    var that = this;
    Thread.vote(thread_id,score,function(data){
      that.emitChange();
    });
  },

  update: function(bio,avatar){
    // var that = this;
    // Thread.update(bio,avatar,function(data){
    //   console.log('update successful');
    //   that.fetch();
    // });
  },

  delete: function(){


  },

  addChangeListener: function(cb) {
    this.on(CHANGE_EVENT, cb)
  },

  removeChangeListener: function(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  }
});


AppDispatcher.register(function(payload){
  var action = payload.action;

  switch(action.actionType){
    case ThreadConstants.FETCHPAGE:
      ThreadStore.fetchPage(action.data.page);
      ThreadStore.emitChange();
      break;
    case ThreadConstants.FETCHUSERPAGE:
      ThreadStore.fetchUserPage(action.data.page);
      ThreadStore.emitChange();
      break;
    case ThreadConstants.FETCHTHREAD:
      ThreadStore.fetchThread(action.data.id);
      ThreadStore.emitChange();
      break;
    case ThreadConstants.ADD:
      ThreadStore.add(action.data.title,action.data.body);
      break;
    case ThreadConstants.UPDATE:
      // TODO: Updating a thread

      break;
    case ThreadConstants.DELETE:
      // TODO: Deleting a thread

      break;
    case ThreadConstants.VOTE:
      ThreadStore.vote(action.data.thread_id,action.data.score);
      break;

    default:
      return true;
  }

  ThreadStore.emitChange();
  return true;
});

module.exports = ThreadStore;
},{"../constants/ThreadConstants":"/Users/mikemsrk/goflux/pub/app/constants/ThreadConstants.js","../dispatchers/AppDispatcher":"/Users/mikemsrk/goflux/pub/app/dispatchers/AppDispatcher.js","../services/ThreadService":"/Users/mikemsrk/goflux/pub/app/services/ThreadService.js","events":"/Users/mikemsrk/goflux/pub/node_modules/browserify/node_modules/events/events.js","object-assign":"/Users/mikemsrk/goflux/pub/node_modules/object-assign/index.js"}],"/Users/mikemsrk/goflux/pub/node_modules/browserify/node_modules/browser-resolve/empty.js":[function(require,module,exports){

},{}],"/Users/mikemsrk/goflux/pub/node_modules/browserify/node_modules/events/events.js":[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      }
      throw TypeError('Uncaught, unspecified "error" event.');
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        len = arguments.length;
        args = new Array(len - 1);
        for (i = 1; i < len; i++)
          args[i - 1] = arguments[i];
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    len = arguments.length;
    args = new Array(len - 1);
    for (i = 1; i < len; i++)
      args[i - 1] = arguments[i];

    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    var m;
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.listenerCount = function(emitter, type) {
  var ret;
  if (!emitter._events || !emitter._events[type])
    ret = 0;
  else if (isFunction(emitter._events[type]))
    ret = 1;
  else
    ret = emitter._events[type].length;
  return ret;
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}

},{}],"/Users/mikemsrk/goflux/pub/node_modules/browserify/node_modules/process/browser.js":[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            currentQueue[queueIndex].run();
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],"/Users/mikemsrk/goflux/pub/node_modules/flux/index.js":[function(require,module,exports){
/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

module.exports.Dispatcher = require('./lib/Dispatcher')

},{"./lib/Dispatcher":"/Users/mikemsrk/goflux/pub/node_modules/flux/lib/Dispatcher.js"}],"/Users/mikemsrk/goflux/pub/node_modules/flux/lib/Dispatcher.js":[function(require,module,exports){
/*
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Dispatcher
 * @typechecks
 */

"use strict";

var invariant = require('./invariant');

var _lastID = 1;
var _prefix = 'ID_';

/**
 * Dispatcher is used to broadcast payloads to registered callbacks. This is
 * different from generic pub-sub systems in two ways:
 *
 *   1) Callbacks are not subscribed to particular events. Every payload is
 *      dispatched to every registered callback.
 *   2) Callbacks can be deferred in whole or part until other callbacks have
 *      been executed.
 *
 * For example, consider this hypothetical flight destination form, which
 * selects a default city when a country is selected:
 *
 *   var flightDispatcher = new Dispatcher();
 *
 *   // Keeps track of which country is selected
 *   var CountryStore = {country: null};
 *
 *   // Keeps track of which city is selected
 *   var CityStore = {city: null};
 *
 *   // Keeps track of the base flight price of the selected city
 *   var FlightPriceStore = {price: null}
 *
 * When a user changes the selected city, we dispatch the payload:
 *
 *   flightDispatcher.dispatch({
 *     actionType: 'city-update',
 *     selectedCity: 'paris'
 *   });
 *
 * This payload is digested by `CityStore`:
 *
 *   flightDispatcher.register(function(payload) {
 *     if (payload.actionType === 'city-update') {
 *       CityStore.city = payload.selectedCity;
 *     }
 *   });
 *
 * When the user selects a country, we dispatch the payload:
 *
 *   flightDispatcher.dispatch({
 *     actionType: 'country-update',
 *     selectedCountry: 'australia'
 *   });
 *
 * This payload is digested by both stores:
 *
 *    CountryStore.dispatchToken = flightDispatcher.register(function(payload) {
 *     if (payload.actionType === 'country-update') {
 *       CountryStore.country = payload.selectedCountry;
 *     }
 *   });
 *
 * When the callback to update `CountryStore` is registered, we save a reference
 * to the returned token. Using this token with `waitFor()`, we can guarantee
 * that `CountryStore` is updated before the callback that updates `CityStore`
 * needs to query its data.
 *
 *   CityStore.dispatchToken = flightDispatcher.register(function(payload) {
 *     if (payload.actionType === 'country-update') {
 *       // `CountryStore.country` may not be updated.
 *       flightDispatcher.waitFor([CountryStore.dispatchToken]);
 *       // `CountryStore.country` is now guaranteed to be updated.
 *
 *       // Select the default city for the new country
 *       CityStore.city = getDefaultCityForCountry(CountryStore.country);
 *     }
 *   });
 *
 * The usage of `waitFor()` can be chained, for example:
 *
 *   FlightPriceStore.dispatchToken =
 *     flightDispatcher.register(function(payload) {
 *       switch (payload.actionType) {
 *         case 'country-update':
 *           flightDispatcher.waitFor([CityStore.dispatchToken]);
 *           FlightPriceStore.price =
 *             getFlightPriceStore(CountryStore.country, CityStore.city);
 *           break;
 *
 *         case 'city-update':
 *           FlightPriceStore.price =
 *             FlightPriceStore(CountryStore.country, CityStore.city);
 *           break;
 *     }
 *   });
 *
 * The `country-update` payload will be guaranteed to invoke the stores'
 * registered callbacks in order: `CountryStore`, `CityStore`, then
 * `FlightPriceStore`.
 */

  function Dispatcher() {
    this.$Dispatcher_callbacks = {};
    this.$Dispatcher_isPending = {};
    this.$Dispatcher_isHandled = {};
    this.$Dispatcher_isDispatching = false;
    this.$Dispatcher_pendingPayload = null;
  }

  /**
   * Registers a callback to be invoked with every dispatched payload. Returns
   * a token that can be used with `waitFor()`.
   *
   * @param {function} callback
   * @return {string}
   */
  Dispatcher.prototype.register=function(callback) {
    var id = _prefix + _lastID++;
    this.$Dispatcher_callbacks[id] = callback;
    return id;
  };

  /**
   * Removes a callback based on its token.
   *
   * @param {string} id
   */
  Dispatcher.prototype.unregister=function(id) {
    invariant(
      this.$Dispatcher_callbacks[id],
      'Dispatcher.unregister(...): `%s` does not map to a registered callback.',
      id
    );
    delete this.$Dispatcher_callbacks[id];
  };

  /**
   * Waits for the callbacks specified to be invoked before continuing execution
   * of the current callback. This method should only be used by a callback in
   * response to a dispatched payload.
   *
   * @param {array<string>} ids
   */
  Dispatcher.prototype.waitFor=function(ids) {
    invariant(
      this.$Dispatcher_isDispatching,
      'Dispatcher.waitFor(...): Must be invoked while dispatching.'
    );
    for (var ii = 0; ii < ids.length; ii++) {
      var id = ids[ii];
      if (this.$Dispatcher_isPending[id]) {
        invariant(
          this.$Dispatcher_isHandled[id],
          'Dispatcher.waitFor(...): Circular dependency detected while ' +
          'waiting for `%s`.',
          id
        );
        continue;
      }
      invariant(
        this.$Dispatcher_callbacks[id],
        'Dispatcher.waitFor(...): `%s` does not map to a registered callback.',
        id
      );
      this.$Dispatcher_invokeCallback(id);
    }
  };

  /**
   * Dispatches a payload to all registered callbacks.
   *
   * @param {object} payload
   */
  Dispatcher.prototype.dispatch=function(payload) {
    invariant(
      !this.$Dispatcher_isDispatching,
      'Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch.'
    );
    this.$Dispatcher_startDispatching(payload);
    try {
      for (var id in this.$Dispatcher_callbacks) {
        if (this.$Dispatcher_isPending[id]) {
          continue;
        }
        this.$Dispatcher_invokeCallback(id);
      }
    } finally {
      this.$Dispatcher_stopDispatching();
    }
  };

  /**
   * Is this Dispatcher currently dispatching.
   *
   * @return {boolean}
   */
  Dispatcher.prototype.isDispatching=function() {
    return this.$Dispatcher_isDispatching;
  };

  /**
   * Call the callback stored with the given id. Also do some internal
   * bookkeeping.
   *
   * @param {string} id
   * @internal
   */
  Dispatcher.prototype.$Dispatcher_invokeCallback=function(id) {
    this.$Dispatcher_isPending[id] = true;
    this.$Dispatcher_callbacks[id](this.$Dispatcher_pendingPayload);
    this.$Dispatcher_isHandled[id] = true;
  };

  /**
   * Set up bookkeeping needed when dispatching.
   *
   * @param {object} payload
   * @internal
   */
  Dispatcher.prototype.$Dispatcher_startDispatching=function(payload) {
    for (var id in this.$Dispatcher_callbacks) {
      this.$Dispatcher_isPending[id] = false;
      this.$Dispatcher_isHandled[id] = false;
    }
    this.$Dispatcher_pendingPayload = payload;
    this.$Dispatcher_isDispatching = true;
  };

  /**
   * Clear bookkeeping used for dispatching.
   *
   * @internal
   */
  Dispatcher.prototype.$Dispatcher_stopDispatching=function() {
    this.$Dispatcher_pendingPayload = null;
    this.$Dispatcher_isDispatching = false;
  };


module.exports = Dispatcher;

},{"./invariant":"/Users/mikemsrk/goflux/pub/node_modules/flux/lib/invariant.js"}],"/Users/mikemsrk/goflux/pub/node_modules/flux/lib/invariant.js":[function(require,module,exports){
/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule invariant
 */

"use strict";

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (false) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        'Invariant Violation: ' +
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

},{}],"/Users/mikemsrk/goflux/pub/node_modules/object-assign/index.js":[function(require,module,exports){
'use strict';
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function ToObject(val) {
	if (val == null) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function ownEnumerableKeys(obj) {
	var keys = Object.getOwnPropertyNames(obj);

	if (Object.getOwnPropertySymbols) {
		keys = keys.concat(Object.getOwnPropertySymbols(obj));
	}

	return keys.filter(function (key) {
		return propIsEnumerable.call(obj, key);
	});
}

module.exports = Object.assign || function (target, source) {
	var from;
	var keys;
	var to = ToObject(target);

	for (var s = 1; s < arguments.length; s++) {
		from = arguments[s];
		keys = ownEnumerableKeys(Object(from));

		for (var i = 0; i < keys.length; i++) {
			to[keys[i]] = from[keys[i]];
		}
	}

	return to;
};

},{}],"/Users/mikemsrk/goflux/pub/node_modules/react-intl/index.js":[function(require,module,exports){
(function (global){
/* jshint node:true */
'use strict';

// Expose `React` as a global, because the ReactIntlMixin assumes it's global.
var oldReact = global.React;
global.React = require('react');

// Require the lib and add all locale data to `ReactIntl`. This module will be
// ignored when bundling for the browser with Browserify/Webpack.
var ReactIntl = require('./lib/react-intl');
require('./lib/locales');

// Export the Mixin as the default export for back-compat with v1.0.0. This will
// be changed to simply re-exporting `ReactIntl` as the default export in v2.0.
exports = module.exports = ReactIntl.IntlMixin;

// Define non-enumerable expandos for each named export on the default export --
// which is the Mixin for back-compat with v1.0.0.
Object.keys(ReactIntl).forEach(function (namedExport) {
    Object.defineProperty(exports, namedExport, {
        enumerable: true,
        value     : ReactIntl[namedExport]
    });
});

// Put back `global.React` to how it was.
if (oldReact) {
    global.React = oldReact;
} else {
    // IE < 9 will throw when trying to delete something off the global object,
    // `window`, so this does the next best thing as sets it to `undefined`.
    try {
        delete global.React;
    } catch (e) {
        global.React = undefined;
    }
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./lib/locales":"/Users/mikemsrk/goflux/pub/node_modules/browserify/node_modules/browser-resolve/empty.js","./lib/react-intl":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/react-intl.js","react":"react"}],"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/components/date.js":[function(require,module,exports){
/* jshint esnext:true */

// TODO: Use `import React from "react";` when external modules are supported.
"use strict";
var src$react$$ = require("../react"), src$mixin$$ = require("../mixin");

var FormattedDate = src$react$$["default"].createClass({
    displayName: 'FormattedDate',
    mixins     : [src$mixin$$["default"]],

    statics: {
        formatOptions: [
            'localeMatcher', 'timeZone', 'hour12', 'formatMatcher', 'weekday',
            'era', 'year', 'month', 'day', 'hour', 'minute', 'second',
            'timeZoneName'
        ]
    },

    propTypes: {
        format: src$react$$["default"].PropTypes.string,
        value : src$react$$["default"].PropTypes.any.isRequired
    },

    render: function () {
        var props    = this.props;
        var value    = props.value;
        var format   = props.format;
        var defaults = format && this.getNamedFormat('date', format);
        var options  = FormattedDate.filterFormatOptions(props, defaults);

        return src$react$$["default"].DOM.span(null, this.formatDate(value, options));
    }
});

exports["default"] = FormattedDate;


},{"../mixin":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/mixin.js","../react":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/react.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/components/html-message.js":[function(require,module,exports){
/* jshint esnext:true */

// TODO: Use `import React from "react";` when external modules are supported.
"use strict";
var src$react$$ = require("../react"), src$escape$$ = require("../escape"), src$mixin$$ = require("../mixin");

var FormattedHTMLMessage = src$react$$["default"].createClass({
    displayName: 'FormattedHTMLMessage',
    mixins     : [src$mixin$$["default"]],

    propTypes: {
        tagName: src$react$$["default"].PropTypes.string,
        message: src$react$$["default"].PropTypes.string.isRequired
    },

    getDefaultProps: function () {
        return {tagName: 'span'};
    },

    render: function () {
        var props   = this.props;
        var tagName = props.tagName;
        var message = props.message;

        // Process all the props before they are used as values when formatting
        // the ICU Message string. Since the formatted message will be injected
        // via `innerHTML`, all String-based values need to be HTML-escaped. Any
        // React Elements that are passed as props will be rendered to a static
        // markup string that is presumed to be safe.
        var values = Object.keys(props).reduce(function (values, name) {
            var value = props[name];

            if (typeof value === 'string') {
                value = src$escape$$["default"](value);
            } else if (src$react$$["default"].isValidElement(value)) {
                value = src$react$$["default"].renderToStaticMarkup(value);
            }

            values[name] = value;
            return values;
        }, {});

        // Since the message presumably has HTML in it, we need to set
        // `innerHTML` in order for it to be rendered and not escaped by React.
        // To be safe, all string prop values were escaped before formatting the
        // message. It is assumed that the message is not UGC, and came from
        // the developer making it more like a template.
        //
        // Note: There's a perf impact of using this component since there's no
        // way for React to do its virtual DOM diffing.
        return src$react$$["default"].DOM[tagName]({
            dangerouslySetInnerHTML: {
                __html: this.formatMessage(message, values)
            }
        });
    }
});

exports["default"] = FormattedHTMLMessage;


},{"../escape":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/escape.js","../mixin":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/mixin.js","../react":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/react.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/components/message.js":[function(require,module,exports){
/* jshint esnext:true */

// TODO: Use `import React from "react";` when external modules are supported.
"use strict";
var src$react$$ = require("../react"), src$mixin$$ = require("../mixin");

var FormattedMessage = src$react$$["default"].createClass({
    displayName: 'FormattedMessage',
    mixins     : [src$mixin$$["default"]],

    propTypes: {
        tagName: src$react$$["default"].PropTypes.string,
        message: src$react$$["default"].PropTypes.string.isRequired
    },

    getDefaultProps: function () {
        return {tagName: 'span'};
    },

    render: function () {
        var props   = this.props;
        var tagName = props.tagName;
        var message = props.message;

        // Creates a token with a random guid that should not be guessable or
        // conflict with other parts of the `message` string.
        var guid       = Math.floor(Math.random() * 0x10000000000).toString(16);
        var tokenRegex = new RegExp('(@__ELEMENT-' + guid + '-\\d+__@)', 'g');
        var elements   = {};

        var generateToken = (function () {
            var counter = 0;
            return function () {
                return '@__ELEMENT-' + guid + '-' + (counter += 1) + '__@';
            };
        }());

        // Iterates over the `props` to keep track of any React Element values
        // so they can be represented by the `token` as a placeholder when the
        // `message` is formatted. This allows the formatted message to then be
        // broken-up into parts with references to the React Elements inserted
        // back in.
        var values = Object.keys(props).reduce(function (values, name) {
            var value = props[name];
            var token;

            if (src$react$$["default"].isValidElement(value)) {
                token           = generateToken();
                values[name]    = token;
                elements[token] = value;
            } else {
                values[name] = value;
            }

            return values;
        }, {});

        // Formats the `message` with the `values`, including the `token`
        // placeholders for React Element values.
        var formattedMessage = this.formatMessage(message, values);

        // Split the message into parts so the React Element values captured
        // above can be inserted back into the rendered message. This
        // approach allows messages to render with React Elements while keeping
        // React's virtual diffing working properly.
        var children = formattedMessage.split(tokenRegex)
            .filter(function (part) {
                // Ignore empty string parts.
                return !!part;
            })
            .map(function (part) {
                // When the `part` is a token, get a ref to the React Element.
                return elements[part] || part;
            });

        var elementArgs = [tagName, null].concat(children);
        return src$react$$["default"].createElement.apply(null, elementArgs);
    }
});

exports["default"] = FormattedMessage;


},{"../mixin":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/mixin.js","../react":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/react.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/components/number.js":[function(require,module,exports){
/* jshint esnext:true */

// TODO: Use `import React from "react";` when external modules are supported.
"use strict";
var src$react$$ = require("../react"), src$mixin$$ = require("../mixin");

var FormattedNumber = src$react$$["default"].createClass({
    displayName: 'FormattedNumber',
    mixins     : [src$mixin$$["default"]],

    statics: {
        formatOptions: [
            'localeMatcher', 'style', 'currency', 'currencyDisplay',
            'useGrouping', 'minimumIntegerDigits', 'minimumFractionDigits',
            'maximumFractionDigits', 'minimumSignificantDigits',
            'maximumSignificantDigits'
        ]
    },

    propTypes: {
        format: src$react$$["default"].PropTypes.string,
        value : src$react$$["default"].PropTypes.any.isRequired
    },

    render: function () {
        var props    = this.props;
        var value    = props.value;
        var format   = props.format;
        var defaults = format && this.getNamedFormat('number', format);
        var options  = FormattedNumber.filterFormatOptions(props, defaults);

        return src$react$$["default"].DOM.span(null, this.formatNumber(value, options));
    }
});

exports["default"] = FormattedNumber;


},{"../mixin":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/mixin.js","../react":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/react.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/components/relative.js":[function(require,module,exports){
/* jshint esnext:true */

// TODO: Use `import React from "react";` when external modules are supported.
"use strict";
var src$react$$ = require("../react"), src$mixin$$ = require("../mixin");

var FormattedRelative = src$react$$["default"].createClass({
    displayName: 'FormattedRelative',
    mixins     : [src$mixin$$["default"]],

    statics: {
        formatOptions: [
            'style', 'units'
        ]
    },

    propTypes: {
        format: src$react$$["default"].PropTypes.string,
        value : src$react$$["default"].PropTypes.any.isRequired,
        now   : src$react$$["default"].PropTypes.any
    },

    render: function () {
        var props    = this.props;
        var value    = props.value;
        var format   = props.format;
        var defaults = format && this.getNamedFormat('relative', format);
        var options  = FormattedRelative.filterFormatOptions(props, defaults);

        var formattedRelativeTime = this.formatRelative(value, options, {
            now: props.now
        });

        return src$react$$["default"].DOM.span(null, formattedRelativeTime);
    }
});

exports["default"] = FormattedRelative;


},{"../mixin":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/mixin.js","../react":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/react.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/components/time.js":[function(require,module,exports){
/* jshint esnext:true */

// TODO: Use `import React from "react";` when external modules are supported.
"use strict";
var src$react$$ = require("../react"), src$mixin$$ = require("../mixin");

var FormattedTime = src$react$$["default"].createClass({
    displayName: 'FormattedTime',
    mixins     : [src$mixin$$["default"]],

    statics: {
        formatOptions: [
            'localeMatcher', 'timeZone', 'hour12', 'formatMatcher', 'weekday',
            'era', 'year', 'month', 'day', 'hour', 'minute', 'second',
            'timeZoneName'
        ]
    },

    propTypes: {
        format: src$react$$["default"].PropTypes.string,
        value : src$react$$["default"].PropTypes.any.isRequired
    },

    render: function () {
        var props    = this.props;
        var value    = props.value;
        var format   = props.format;
        var defaults = format && this.getNamedFormat('time', format);
        var options  = FormattedTime.filterFormatOptions(props, defaults);

        return src$react$$["default"].DOM.span(null, this.formatTime(value, options));
    }
});

exports["default"] = FormattedTime;


},{"../mixin":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/mixin.js","../react":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/react.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/en.js":[function(require,module,exports){
// GENERATED FILE
"use strict";
exports["default"] = {"locale":"en","pluralRuleFunction":function (n,ord){var s=String(n).split("."),v0=!s[1],t0=Number(s[0])==n,n10=t0&&s[0].slice(-1),n100=t0&&s[0].slice(-2);if(ord)return n10==1&&n100!=11?"one":n10==2&&n100!=12?"two":n10==3&&n100!=13?"few":"other";return n==1&&v0?"one":"other"},"fields":{"year":{"displayName":"Year","relative":{"0":"this year","1":"next year","-1":"last year"},"relativeTime":{"future":{"one":"in {0} year","other":"in {0} years"},"past":{"one":"{0} year ago","other":"{0} years ago"}}},"month":{"displayName":"Month","relative":{"0":"this month","1":"next month","-1":"last month"},"relativeTime":{"future":{"one":"in {0} month","other":"in {0} months"},"past":{"one":"{0} month ago","other":"{0} months ago"}}},"day":{"displayName":"Day","relative":{"0":"today","1":"tomorrow","-1":"yesterday"},"relativeTime":{"future":{"one":"in {0} day","other":"in {0} days"},"past":{"one":"{0} day ago","other":"{0} days ago"}}},"hour":{"displayName":"Hour","relativeTime":{"future":{"one":"in {0} hour","other":"in {0} hours"},"past":{"one":"{0} hour ago","other":"{0} hours ago"}}},"minute":{"displayName":"Minute","relativeTime":{"future":{"one":"in {0} minute","other":"in {0} minutes"},"past":{"one":"{0} minute ago","other":"{0} minutes ago"}}},"second":{"displayName":"Second","relative":{"0":"now"},"relativeTime":{"future":{"one":"in {0} second","other":"in {0} seconds"},"past":{"one":"{0} second ago","other":"{0} seconds ago"}}}}};


},{}],"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/escape.js":[function(require,module,exports){
/* jshint esnext:true */

/*
HTML escaping implementation is the same as React's (on purpose.) Therefore, it
has the following Copyright and Licensing:

Copyright 2013-2014, Facebook, Inc.
All rights reserved.

This source code is licensed under the BSD-style license found in the LICENSE
file in the root directory of React's source tree.
*/
"use strict";
var ESCAPED_CHARS = {
    '&' : '&amp;',
    '>' : '&gt;',
    '<' : '&lt;',
    '"' : '&quot;',
    '\'': '&#x27;'
};

var UNSAFE_CHARS_REGEX = /[&><"']/g;

exports["default"] = function (str) {
    return ('' + str).replace(UNSAFE_CHARS_REGEX, function (match) {
        return ESCAPED_CHARS[match];
    });
};


},{}],"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/mixin.js":[function(require,module,exports){
/* jshint esnext:true */

// TODO: Use `import React from "react";` when external modules are supported.
"use strict";
var src$react$$ = require("./react"), intl$messageformat$$ = require("intl-messageformat"), intl$relativeformat$$ = require("intl-relativeformat"), intl$format$cache$$ = require("intl-format-cache");

// -----------------------------------------------------------------------------

var typesSpec = {
    locales: src$react$$["default"].PropTypes.oneOfType([
        src$react$$["default"].PropTypes.string,
        src$react$$["default"].PropTypes.array
    ]),

    formats : src$react$$["default"].PropTypes.object,
    messages: src$react$$["default"].PropTypes.object
};

function assertIsDate(date, errMsg) {
    // Determine if the `date` is valid by checking if it is finite, which is
    // the same way that `Intl.DateTimeFormat#format()` checks.
    if (!isFinite(date)) {
        throw new TypeError(errMsg);
    }
}

exports["default"] = {
    statics: {
        filterFormatOptions: function (obj, defaults) {
            if (!defaults) { defaults = {}; }

            return (this.formatOptions || []).reduce(function (opts, name) {
                if (obj.hasOwnProperty(name)) {
                    opts[name] = obj[name];
                } else if (defaults.hasOwnProperty(name)) {
                    opts[name] = defaults[name];
                }

                return opts;
            }, {});
        }
    },

    propTypes        : typesSpec,
    contextTypes     : typesSpec,
    childContextTypes: typesSpec,

    getNumberFormat  : intl$format$cache$$["default"](Intl.NumberFormat),
    getDateTimeFormat: intl$format$cache$$["default"](Intl.DateTimeFormat),
    getMessageFormat : intl$format$cache$$["default"](intl$messageformat$$["default"]),
    getRelativeFormat: intl$format$cache$$["default"](intl$relativeformat$$["default"]),

    getChildContext: function () {
        var context = this.context;
        var props   = this.props;

        return {
            locales:  props.locales  || context.locales,
            formats:  props.formats  || context.formats,
            messages: props.messages || context.messages
        };
    },

    formatDate: function (date, options) {
        date = new Date(date);
        assertIsDate(date, 'A date or timestamp must be provided to formatDate()');
        return this._format('date', date, options);
    },

    formatTime: function (date, options) {
        date = new Date(date);
        assertIsDate(date, 'A date or timestamp must be provided to formatTime()');
        return this._format('time', date, options);
    },

    formatRelative: function (date, options, formatOptions) {
        date = new Date(date);
        assertIsDate(date, 'A date or timestamp must be provided to formatRelative()');
        return this._format('relative', date, options, formatOptions);
    },

    formatNumber: function (num, options) {
        return this._format('number', num, options);
    },

    formatMessage: function (message, values) {
        var locales = this.props.locales || this.context.locales;
        var formats = this.props.formats || this.context.formats;

        // When `message` is a function, assume it's an IntlMessageFormat
        // instance's `format()` method passed by reference, and call it. This
        // is possible because its `this` will be pre-bound to the instance.
        if (typeof message === 'function') {
            return message(values);
        }

        if (typeof message === 'string') {
            message = this.getMessageFormat(message, locales, formats);
        }

        return message.format(values);
    },

    getIntlMessage: function (path) {
        var messages  = this.props.messages || this.context.messages;
        var pathParts = path.split('.');

        var message;

        try {
            message = pathParts.reduce(function (obj, pathPart) {
                return obj[pathPart];
            }, messages);
        } finally {
            if (message === undefined) {
                throw new ReferenceError('Could not find Intl message: ' + path);
            }
        }

        return message;
    },

    getNamedFormat: function (type, name) {
        var formats = this.props.formats || this.context.formats;
        var format  = null;

        try {
            format = formats[type][name];
        } finally {
            if (!format) {
                throw new ReferenceError(
                    'No ' + type + ' format named: ' + name
                );
            }
        }

        return format;
    },

    _format: function (type, value, options, formatOptions) {
        var locales = this.props.locales || this.context.locales;

        if (options && typeof options === 'string') {
            options = this.getNamedFormat(type, options);
        }

        switch(type) {
            case 'date':
            case 'time':
                return this.getDateTimeFormat(locales, options).format(value);
            case 'number':
                return this.getNumberFormat(locales, options).format(value);
            case 'relative':
                return this.getRelativeFormat(locales, options).format(value, formatOptions);
            default:
                throw new Error('Unrecognized format type: ' + type);
        }
    }
};


},{"./react":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/react.js","intl-format-cache":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-format-cache/index.js","intl-messageformat":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-messageformat/index.js","intl-relativeformat":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-relativeformat/index.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/react-intl.js":[function(require,module,exports){
/* jshint esnext: true */

"use strict";
exports.__addLocaleData = __addLocaleData;
var intl$messageformat$$ = require("intl-messageformat"), intl$relativeformat$$ = require("intl-relativeformat"), src$en$$ = require("./en"), src$mixin$$ = require("./mixin"), src$components$date$$ = require("./components/date"), src$components$time$$ = require("./components/time"), src$components$relative$$ = require("./components/relative"), src$components$number$$ = require("./components/number"), src$components$message$$ = require("./components/message"), src$components$html$message$$ = require("./components/html-message");
function __addLocaleData(data) {
    intl$messageformat$$["default"].__addLocaleData(data);
    intl$relativeformat$$["default"].__addLocaleData(data);
}

__addLocaleData(src$en$$["default"]);
exports.IntlMixin = src$mixin$$["default"], exports.FormattedDate = src$components$date$$["default"], exports.FormattedTime = src$components$time$$["default"], exports.FormattedRelative = src$components$relative$$["default"], exports.FormattedNumber = src$components$number$$["default"], exports.FormattedMessage = src$components$message$$["default"], exports.FormattedHTMLMessage = src$components$html$message$$["default"];


},{"./components/date":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/components/date.js","./components/html-message":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/components/html-message.js","./components/message":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/components/message.js","./components/number":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/components/number.js","./components/relative":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/components/relative.js","./components/time":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/components/time.js","./en":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/en.js","./mixin":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/mixin.js","intl-messageformat":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-messageformat/index.js","intl-relativeformat":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-relativeformat/index.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/react.js":[function(require,module,exports){
/* global React */
/* jshint esnext:true */

// TODO: Remove the global `React` binding lookup once the ES6 Module Transpiler
// supports external modules. This is a hack for now that provides the local
// modules a referece to React.
"use strict";
exports["default"] = React;


},{}],"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-format-cache/index.js":[function(require,module,exports){
'use strict';

exports = module.exports = require('./lib/memoizer')['default'];
exports['default'] = exports;

},{"./lib/memoizer":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-format-cache/lib/memoizer.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-format-cache/lib/es5.js":[function(require,module,exports){
"use strict";

// Purposely using the same implementation as the Intl.js `Intl` polyfill.
// Copyright 2013 Andy Earnshaw, MIT License

var hop = Object.prototype.hasOwnProperty;

var realDefineProp = (function () {
    try { return !!Object.defineProperty({}, 'a', {}); }
    catch (e) { return false; }
})();

var es3 = !realDefineProp && !Object.prototype.__defineGetter__;

var defineProperty = realDefineProp ? Object.defineProperty :
        function (obj, name, desc) {

    if ('get' in desc && obj.__defineGetter__) {
        obj.__defineGetter__(name, desc.get);
    } else if (!hop.call(obj, name) || 'value' in desc) {
        obj[name] = desc.value;
    }
};

var objCreate = Object.create || function (proto, props) {
    var obj, k;

    function F() {}
    F.prototype = proto;
    obj = new F();

    for (k in props) {
        if (hop.call(props, k)) {
            defineProperty(obj, k, props[k]);
        }
    }

    return obj;
};
exports.defineProperty = defineProperty, exports.objCreate = objCreate;


},{}],"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-format-cache/lib/memoizer.js":[function(require,module,exports){
"use strict";
var src$es5$$ = require("./es5");
exports["default"] = createFormatCache;

// -----------------------------------------------------------------------------

function createFormatCache(FormatConstructor) {
    var cache = src$es5$$.objCreate(null);

    return function () {
        var args    = Array.prototype.slice.call(arguments);
        var cacheId = getCacheId(args);
        var format  = cacheId && cache[cacheId];

        if (!format) {
            format = src$es5$$.objCreate(FormatConstructor.prototype);
            FormatConstructor.apply(format, args);

            if (cacheId) {
                cache[cacheId] = format;
            }
        }

        return format;
    };
}

// -- Utilities ----------------------------------------------------------------

function getCacheId(inputs) {
    // When JSON is not available in the runtime, we will not create a cache id.
    if (typeof JSON === 'undefined') { return; }

    var cacheId = [];

    var i, len, input;

    for (i = 0, len = inputs.length; i < len; i += 1) {
        input = inputs[i];

        if (input && typeof input === 'object') {
            cacheId.push(orderedProps(input));
        } else {
            cacheId.push(input);
        }
    }

    return JSON.stringify(cacheId);
}

function orderedProps(obj) {
    var props = [],
        keys  = [];

    var key, i, len, prop;

    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            keys.push(key);
        }
    }

    var orderedKeys = keys.sort();

    for (i = 0, len = orderedKeys.length; i < len; i += 1) {
        key  = orderedKeys[i];
        prop = {};

        prop[key] = obj[key];
        props[i]  = prop;
    }

    return props;
}


},{"./es5":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-format-cache/lib/es5.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-messageformat/index.js":[function(require,module,exports){
/* jshint node:true */

'use strict';

var IntlMessageFormat = require('./lib/main')['default'];

// Add all locale data to `IntlMessageFormat`. This module will be ignored when
// bundling for the browser with Browserify/Webpack.
require('./lib/locales');

// Re-export `IntlMessageFormat` as the CommonJS default exports with all the
// locale data registered, and with English set as the default locale. Define
// the `default` prop for use with other compiled ES6 Modules.
exports = module.exports = IntlMessageFormat;
exports['default'] = exports;

},{"./lib/locales":"/Users/mikemsrk/goflux/pub/node_modules/browserify/node_modules/browser-resolve/empty.js","./lib/main":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-messageformat/lib/main.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-messageformat/lib/compiler.js":[function(require,module,exports){
/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/

/* jslint esnext: true */

"use strict";
exports["default"] = Compiler;

function Compiler(locales, formats, pluralFn) {
    this.locales  = locales;
    this.formats  = formats;
    this.pluralFn = pluralFn;
}

Compiler.prototype.compile = function (ast) {
    this.pluralStack        = [];
    this.currentPlural      = null;
    this.pluralNumberFormat = null;

    return this.compileMessage(ast);
};

Compiler.prototype.compileMessage = function (ast) {
    if (!(ast && ast.type === 'messageFormatPattern')) {
        throw new Error('Message AST is not of type: "messageFormatPattern"');
    }

    var elements = ast.elements,
        pattern  = [];

    var i, len, element;

    for (i = 0, len = elements.length; i < len; i += 1) {
        element = elements[i];

        switch (element.type) {
            case 'messageTextElement':
                pattern.push(this.compileMessageText(element));
                break;

            case 'argumentElement':
                pattern.push(this.compileArgument(element));
                break;

            default:
                throw new Error('Message element does not have a valid type');
        }
    }

    return pattern;
};

Compiler.prototype.compileMessageText = function (element) {
    // When this `element` is part of plural sub-pattern and its value contains
    // an unescaped '#', use a `PluralOffsetString` helper to properly output
    // the number with the correct offset in the string.
    if (this.currentPlural && /(^|[^\\])#/g.test(element.value)) {
        // Create a cache a NumberFormat instance that can be reused for any
        // PluralOffsetString instance in this message.
        if (!this.pluralNumberFormat) {
            this.pluralNumberFormat = new Intl.NumberFormat(this.locales);
        }

        return new PluralOffsetString(
                this.currentPlural.id,
                this.currentPlural.format.offset,
                this.pluralNumberFormat,
                element.value);
    }

    // Unescape the escaped '#'s in the message text.
    return element.value.replace(/\\#/g, '#');
};

Compiler.prototype.compileArgument = function (element) {
    var format = element.format;

    if (!format) {
        return new StringFormat(element.id);
    }

    var formats  = this.formats,
        locales  = this.locales,
        pluralFn = this.pluralFn,
        options;

    switch (format.type) {
        case 'numberFormat':
            options = formats.number[format.style];
            return {
                id    : element.id,
                format: new Intl.NumberFormat(locales, options).format
            };

        case 'dateFormat':
            options = formats.date[format.style];
            return {
                id    : element.id,
                format: new Intl.DateTimeFormat(locales, options).format
            };

        case 'timeFormat':
            options = formats.time[format.style];
            return {
                id    : element.id,
                format: new Intl.DateTimeFormat(locales, options).format
            };

        case 'pluralFormat':
            options = this.compileOptions(element);
            return new PluralFormat(
                element.id, format.ordinal, format.offset, options, pluralFn
            );

        case 'selectFormat':
            options = this.compileOptions(element);
            return new SelectFormat(element.id, options);

        default:
            throw new Error('Message element does not have a valid format type');
    }
};

Compiler.prototype.compileOptions = function (element) {
    var format      = element.format,
        options     = format.options,
        optionsHash = {};

    // Save the current plural element, if any, then set it to a new value when
    // compiling the options sub-patterns. This conforms the spec's algorithm
    // for handling `"#"` syntax in message text.
    this.pluralStack.push(this.currentPlural);
    this.currentPlural = format.type === 'pluralFormat' ? element : null;

    var i, len, option;

    for (i = 0, len = options.length; i < len; i += 1) {
        option = options[i];

        // Compile the sub-pattern and save it under the options's selector.
        optionsHash[option.selector] = this.compileMessage(option.value);
    }

    // Pop the plural stack to put back the original current plural value.
    this.currentPlural = this.pluralStack.pop();

    return optionsHash;
};

// -- Compiler Helper Classes --------------------------------------------------

function StringFormat(id) {
    this.id = id;
}

StringFormat.prototype.format = function (value) {
    if (!value) {
        return '';
    }

    return typeof value === 'string' ? value : String(value);
};

function PluralFormat(id, useOrdinal, offset, options, pluralFn) {
    this.id         = id;
    this.useOrdinal = useOrdinal;
    this.offset     = offset;
    this.options    = options;
    this.pluralFn   = pluralFn;
}

PluralFormat.prototype.getOption = function (value) {
    var options = this.options;

    var option = options['=' + value] ||
            options[this.pluralFn(value - this.offset, this.useOrdinal)];

    return option || options.other;
};

function PluralOffsetString(id, offset, numberFormat, string) {
    this.id           = id;
    this.offset       = offset;
    this.numberFormat = numberFormat;
    this.string       = string;
}

PluralOffsetString.prototype.format = function (value) {
    var number = this.numberFormat.format(value - this.offset);

    return this.string
            .replace(/(^|[^\\])#/g, '$1' + number)
            .replace(/\\#/g, '#');
};

function SelectFormat(id, options) {
    this.id      = id;
    this.options = options;
}

SelectFormat.prototype.getOption = function (value) {
    var options = this.options;
    return options[value] || options.other;
};


},{}],"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-messageformat/lib/core.js":[function(require,module,exports){
/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/

/* jslint esnext: true */

"use strict";
var src$utils$$ = require("./utils"), src$es5$$ = require("./es5"), src$compiler$$ = require("./compiler"), intl$messageformat$parser$$ = require("intl-messageformat-parser");
exports["default"] = MessageFormat;

// -- MessageFormat --------------------------------------------------------

function MessageFormat(message, locales, formats) {
    // Parse string messages into an AST.
    var ast = typeof message === 'string' ?
            MessageFormat.__parse(message) : message;

    if (!(ast && ast.type === 'messageFormatPattern')) {
        throw new TypeError('A message must be provided as a String or AST.');
    }

    // Creates a new object with the specified `formats` merged with the default
    // formats.
    formats = this._mergeFormats(MessageFormat.formats, formats);

    // Defined first because it's used to build the format pattern.
    src$es5$$.defineProperty(this, '_locale',  {value: this._resolveLocale(locales)});

    // Compile the `ast` to a pattern that is highly optimized for repeated
    // `format()` invocations. **Note:** This passes the `locales` set provided
    // to the constructor instead of just the resolved locale.
    var pluralFn = this._findPluralRuleFunction(this._locale);
    var pattern  = this._compilePattern(ast, locales, formats, pluralFn);

    // "Bind" `format()` method to `this` so it can be passed by reference like
    // the other `Intl` APIs.
    var messageFormat = this;
    this.format = function (values) {
        return messageFormat._format(pattern, values);
    };
}

// Default format options used as the prototype of the `formats` provided to the
// constructor. These are used when constructing the internal Intl.NumberFormat
// and Intl.DateTimeFormat instances.
src$es5$$.defineProperty(MessageFormat, 'formats', {
    enumerable: true,

    value: {
        number: {
            'currency': {
                style: 'currency'
            },

            'percent': {
                style: 'percent'
            }
        },

        date: {
            'short': {
                month: 'numeric',
                day  : 'numeric',
                year : '2-digit'
            },

            'medium': {
                month: 'short',
                day  : 'numeric',
                year : 'numeric'
            },

            'long': {
                month: 'long',
                day  : 'numeric',
                year : 'numeric'
            },

            'full': {
                weekday: 'long',
                month  : 'long',
                day    : 'numeric',
                year   : 'numeric'
            }
        },

        time: {
            'short': {
                hour  : 'numeric',
                minute: 'numeric'
            },

            'medium':  {
                hour  : 'numeric',
                minute: 'numeric',
                second: 'numeric'
            },

            'long': {
                hour        : 'numeric',
                minute      : 'numeric',
                second      : 'numeric',
                timeZoneName: 'short'
            },

            'full': {
                hour        : 'numeric',
                minute      : 'numeric',
                second      : 'numeric',
                timeZoneName: 'short'
            }
        }
    }
});

// Define internal private properties for dealing with locale data.
src$es5$$.defineProperty(MessageFormat, '__localeData__', {value: src$es5$$.objCreate(null)});
src$es5$$.defineProperty(MessageFormat, '__addLocaleData', {value: function (data) {
    if (!(data && data.locale)) {
        throw new Error(
            'Locale data provided to IntlMessageFormat is missing a ' +
            '`locale` property'
        );
    }

    MessageFormat.__localeData__[data.locale.toLowerCase()] = data;
}});

// Defines `__parse()` static method as an exposed private.
src$es5$$.defineProperty(MessageFormat, '__parse', {value: intl$messageformat$parser$$["default"].parse});

// Define public `defaultLocale` property which defaults to English, but can be
// set by the developer.
src$es5$$.defineProperty(MessageFormat, 'defaultLocale', {
    enumerable: true,
    writable  : true,
    value     : undefined
});

MessageFormat.prototype.resolvedOptions = function () {
    // TODO: Provide anything else?
    return {
        locale: this._locale
    };
};

MessageFormat.prototype._compilePattern = function (ast, locales, formats, pluralFn) {
    var compiler = new src$compiler$$["default"](locales, formats, pluralFn);
    return compiler.compile(ast);
};

MessageFormat.prototype._findPluralRuleFunction = function (locale) {
    var localeData = MessageFormat.__localeData__;
    var data       = localeData[locale.toLowerCase()];

    // The locale data is de-duplicated, so we have to traverse the locale's
    // hierarchy until we find a `pluralRuleFunction` to return.
    while (data) {
        if (data.pluralRuleFunction) {
            return data.pluralRuleFunction;
        }

        data = data.parentLocale && localeData[data.parentLocale.toLowerCase()];
    }

    throw new Error(
        'Locale data added to IntlMessageFormat is missing a ' +
        '`pluralRuleFunction` for :' + locale
    );
};

MessageFormat.prototype._format = function (pattern, values) {
    var result = '',
        i, len, part, id, value;

    for (i = 0, len = pattern.length; i < len; i += 1) {
        part = pattern[i];

        // Exist early for string parts.
        if (typeof part === 'string') {
            result += part;
            continue;
        }

        id = part.id;

        // Enforce that all required values are provided by the caller.
        if (!(values && src$utils$$.hop.call(values, id))) {
            throw new Error('A value must be provided for: ' + id);
        }

        value = values[id];

        // Recursively format plural and select parts' option — which can be a
        // nested pattern structure. The choosing of the option to use is
        // abstracted-by and delegated-to the part helper object.
        if (part.options) {
            result += this._format(part.getOption(value), values);
        } else {
            result += part.format(value);
        }
    }

    return result;
};

MessageFormat.prototype._mergeFormats = function (defaults, formats) {
    var mergedFormats = {},
        type, mergedType;

    for (type in defaults) {
        if (!src$utils$$.hop.call(defaults, type)) { continue; }

        mergedFormats[type] = mergedType = src$es5$$.objCreate(defaults[type]);

        if (formats && src$utils$$.hop.call(formats, type)) {
            src$utils$$.extend(mergedType, formats[type]);
        }
    }

    return mergedFormats;
};

MessageFormat.prototype._resolveLocale = function (locales) {
    if (typeof locales === 'string') {
        locales = [locales];
    }

    // Create a copy of the array so we can push on the default locale.
    locales = (locales || []).concat(MessageFormat.defaultLocale);

    var localeData = MessageFormat.__localeData__;
    var i, len, localeParts, data;

    // Using the set of locales + the default locale, we look for the first one
    // which that has been registered. When data does not exist for a locale, we
    // traverse its ancestors to find something that's been registered within
    // its hierarchy of locales. Since we lack the proper `parentLocale` data
    // here, we must take a naive approach to traversal.
    for (i = 0, len = locales.length; i < len; i += 1) {
        localeParts = locales[i].toLowerCase().split('-');

        while (localeParts.length) {
            data = localeData[localeParts.join('-')];
            if (data) {
                // Return the normalized locale string; e.g., we return "en-US",
                // instead of "en-us".
                return data.locale;
            }

            localeParts.pop();
        }
    }

    var defaultLocale = locales.pop();
    throw new Error(
        'No locale data has been added to IntlMessageFormat for: ' +
        locales.join(', ') + ', or the default locale: ' + defaultLocale
    );
};


},{"./compiler":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-messageformat/lib/compiler.js","./es5":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-messageformat/lib/es5.js","./utils":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-messageformat/lib/utils.js","intl-messageformat-parser":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-messageformat/node_modules/intl-messageformat-parser/index.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-messageformat/lib/en.js":[function(require,module,exports){
// GENERATED FILE
"use strict";
exports["default"] = {"locale":"en","pluralRuleFunction":function (n,ord){var s=String(n).split("."),v0=!s[1],t0=Number(s[0])==n,n10=t0&&s[0].slice(-1),n100=t0&&s[0].slice(-2);if(ord)return n10==1&&n100!=11?"one":n10==2&&n100!=12?"two":n10==3&&n100!=13?"few":"other";return n==1&&v0?"one":"other"}};


},{}],"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-messageformat/lib/es5.js":[function(require,module,exports){
/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/

/* jslint esnext: true */

"use strict";
var src$utils$$ = require("./utils");

// Purposely using the same implementation as the Intl.js `Intl` polyfill.
// Copyright 2013 Andy Earnshaw, MIT License

var realDefineProp = (function () {
    try { return !!Object.defineProperty({}, 'a', {}); }
    catch (e) { return false; }
})();

var es3 = !realDefineProp && !Object.prototype.__defineGetter__;

var defineProperty = realDefineProp ? Object.defineProperty :
        function (obj, name, desc) {

    if ('get' in desc && obj.__defineGetter__) {
        obj.__defineGetter__(name, desc.get);
    } else if (!src$utils$$.hop.call(obj, name) || 'value' in desc) {
        obj[name] = desc.value;
    }
};

var objCreate = Object.create || function (proto, props) {
    var obj, k;

    function F() {}
    F.prototype = proto;
    obj = new F();

    for (k in props) {
        if (src$utils$$.hop.call(props, k)) {
            defineProperty(obj, k, props[k]);
        }
    }

    return obj;
};
exports.defineProperty = defineProperty, exports.objCreate = objCreate;


},{"./utils":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-messageformat/lib/utils.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-messageformat/lib/main.js":[function(require,module,exports){
/* jslint esnext: true */

"use strict";
var src$core$$ = require("./core"), src$en$$ = require("./en");

src$core$$["default"].__addLocaleData(src$en$$["default"]);
src$core$$["default"].defaultLocale = 'en';

exports["default"] = src$core$$["default"];


},{"./core":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-messageformat/lib/core.js","./en":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-messageformat/lib/en.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-messageformat/lib/utils.js":[function(require,module,exports){
/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/

/* jslint esnext: true */

"use strict";
exports.extend = extend;
var hop = Object.prototype.hasOwnProperty;

function extend(obj) {
    var sources = Array.prototype.slice.call(arguments, 1),
        i, len, source, key;

    for (i = 0, len = sources.length; i < len; i += 1) {
        source = sources[i];
        if (!source) { continue; }

        for (key in source) {
            if (hop.call(source, key)) {
                obj[key] = source[key];
            }
        }
    }

    return obj;
}
exports.hop = hop;


},{}],"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-messageformat/node_modules/intl-messageformat-parser/index.js":[function(require,module,exports){
'use strict';

exports = module.exports = require('./lib/parser')['default'];
exports['default'] = exports;

},{"./lib/parser":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-messageformat/node_modules/intl-messageformat-parser/lib/parser.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-messageformat/node_modules/intl-messageformat-parser/lib/parser.js":[function(require,module,exports){
"use strict";

exports["default"] = (function() {
  /*
   * Generated by PEG.js 0.8.0.
   *
   * http://pegjs.majda.cz/
   */

  function peg$subclass(child, parent) {
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
  }

  function SyntaxError(message, expected, found, offset, line, column) {
    this.message  = message;
    this.expected = expected;
    this.found    = found;
    this.offset   = offset;
    this.line     = line;
    this.column   = column;

    this.name     = "SyntaxError";
  }

  peg$subclass(SyntaxError, Error);

  function parse(input) {
    var options = arguments.length > 1 ? arguments[1] : {},

        peg$FAILED = {},

        peg$startRuleFunctions = { start: peg$parsestart },
        peg$startRuleFunction  = peg$parsestart,

        peg$c0 = [],
        peg$c1 = function(elements) {
                return {
                    type    : 'messageFormatPattern',
                    elements: elements
                };
            },
        peg$c2 = peg$FAILED,
        peg$c3 = function(text) {
                var string = '',
                    i, j, outerLen, inner, innerLen;

                for (i = 0, outerLen = text.length; i < outerLen; i += 1) {
                    inner = text[i];

                    for (j = 0, innerLen = inner.length; j < innerLen; j += 1) {
                        string += inner[j];
                    }
                }

                return string;
            },
        peg$c4 = function(messageText) {
                return {
                    type : 'messageTextElement',
                    value: messageText
                };
            },
        peg$c5 = /^[^ \t\n\r,.+={}#]/,
        peg$c6 = { type: "class", value: "[^ \\t\\n\\r,.+={}#]", description: "[^ \\t\\n\\r,.+={}#]" },
        peg$c7 = "{",
        peg$c8 = { type: "literal", value: "{", description: "\"{\"" },
        peg$c9 = null,
        peg$c10 = ",",
        peg$c11 = { type: "literal", value: ",", description: "\",\"" },
        peg$c12 = "}",
        peg$c13 = { type: "literal", value: "}", description: "\"}\"" },
        peg$c14 = function(id, format) {
                return {
                    type  : 'argumentElement',
                    id    : id,
                    format: format && format[2]
                };
            },
        peg$c15 = "number",
        peg$c16 = { type: "literal", value: "number", description: "\"number\"" },
        peg$c17 = "date",
        peg$c18 = { type: "literal", value: "date", description: "\"date\"" },
        peg$c19 = "time",
        peg$c20 = { type: "literal", value: "time", description: "\"time\"" },
        peg$c21 = function(type, style) {
                return {
                    type : type + 'Format',
                    style: style && style[2]
                };
            },
        peg$c22 = "plural",
        peg$c23 = { type: "literal", value: "plural", description: "\"plural\"" },
        peg$c24 = function(pluralStyle) {
                return {
                    type   : pluralStyle.type,
                    ordinal: false,
                    offset : pluralStyle.offset || 0,
                    options: pluralStyle.options
                };
            },
        peg$c25 = "selectordinal",
        peg$c26 = { type: "literal", value: "selectordinal", description: "\"selectordinal\"" },
        peg$c27 = function(pluralStyle) {
                return {
                    type   : pluralStyle.type,
                    ordinal: true,
                    offset : pluralStyle.offset || 0,
                    options: pluralStyle.options
                }
            },
        peg$c28 = "select",
        peg$c29 = { type: "literal", value: "select", description: "\"select\"" },
        peg$c30 = function(options) {
                return {
                    type   : 'selectFormat',
                    options: options
                };
            },
        peg$c31 = "=",
        peg$c32 = { type: "literal", value: "=", description: "\"=\"" },
        peg$c33 = function(selector, pattern) {
                return {
                    type    : 'optionalFormatPattern',
                    selector: selector,
                    value   : pattern
                };
            },
        peg$c34 = "offset:",
        peg$c35 = { type: "literal", value: "offset:", description: "\"offset:\"" },
        peg$c36 = function(number) {
                return number;
            },
        peg$c37 = function(offset, options) {
                return {
                    type   : 'pluralFormat',
                    offset : offset,
                    options: options
                };
            },
        peg$c38 = { type: "other", description: "whitespace" },
        peg$c39 = /^[ \t\n\r]/,
        peg$c40 = { type: "class", value: "[ \\t\\n\\r]", description: "[ \\t\\n\\r]" },
        peg$c41 = { type: "other", description: "optionalWhitespace" },
        peg$c42 = /^[0-9]/,
        peg$c43 = { type: "class", value: "[0-9]", description: "[0-9]" },
        peg$c44 = /^[0-9a-f]/i,
        peg$c45 = { type: "class", value: "[0-9a-f]i", description: "[0-9a-f]i" },
        peg$c46 = "0",
        peg$c47 = { type: "literal", value: "0", description: "\"0\"" },
        peg$c48 = /^[1-9]/,
        peg$c49 = { type: "class", value: "[1-9]", description: "[1-9]" },
        peg$c50 = function(digits) {
            return parseInt(digits, 10);
        },
        peg$c51 = /^[^{}\\\0-\x1F \t\n\r]/,
        peg$c52 = { type: "class", value: "[^{}\\\\\\0-\\x1F \\t\\n\\r]", description: "[^{}\\\\\\0-\\x1F \\t\\n\\r]" },
        peg$c53 = "\\#",
        peg$c54 = { type: "literal", value: "\\#", description: "\"\\\\#\"" },
        peg$c55 = function() { return '\\#'; },
        peg$c56 = "\\{",
        peg$c57 = { type: "literal", value: "\\{", description: "\"\\\\{\"" },
        peg$c58 = function() { return '\u007B'; },
        peg$c59 = "\\}",
        peg$c60 = { type: "literal", value: "\\}", description: "\"\\\\}\"" },
        peg$c61 = function() { return '\u007D'; },
        peg$c62 = "\\u",
        peg$c63 = { type: "literal", value: "\\u", description: "\"\\\\u\"" },
        peg$c64 = function(digits) {
                return String.fromCharCode(parseInt(digits, 16));
            },
        peg$c65 = function(chars) { return chars.join(''); },

        peg$currPos          = 0,
        peg$reportedPos      = 0,
        peg$cachedPos        = 0,
        peg$cachedPosDetails = { line: 1, column: 1, seenCR: false },
        peg$maxFailPos       = 0,
        peg$maxFailExpected  = [],
        peg$silentFails      = 0,

        peg$result;

    if ("startRule" in options) {
      if (!(options.startRule in peg$startRuleFunctions)) {
        throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
      }

      peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
    }

    function text() {
      return input.substring(peg$reportedPos, peg$currPos);
    }

    function offset() {
      return peg$reportedPos;
    }

    function line() {
      return peg$computePosDetails(peg$reportedPos).line;
    }

    function column() {
      return peg$computePosDetails(peg$reportedPos).column;
    }

    function expected(description) {
      throw peg$buildException(
        null,
        [{ type: "other", description: description }],
        peg$reportedPos
      );
    }

    function error(message) {
      throw peg$buildException(message, null, peg$reportedPos);
    }

    function peg$computePosDetails(pos) {
      function advance(details, startPos, endPos) {
        var p, ch;

        for (p = startPos; p < endPos; p++) {
          ch = input.charAt(p);
          if (ch === "\n") {
            if (!details.seenCR) { details.line++; }
            details.column = 1;
            details.seenCR = false;
          } else if (ch === "\r" || ch === "\u2028" || ch === "\u2029") {
            details.line++;
            details.column = 1;
            details.seenCR = true;
          } else {
            details.column++;
            details.seenCR = false;
          }
        }
      }

      if (peg$cachedPos !== pos) {
        if (peg$cachedPos > pos) {
          peg$cachedPos = 0;
          peg$cachedPosDetails = { line: 1, column: 1, seenCR: false };
        }
        advance(peg$cachedPosDetails, peg$cachedPos, pos);
        peg$cachedPos = pos;
      }

      return peg$cachedPosDetails;
    }

    function peg$fail(expected) {
      if (peg$currPos < peg$maxFailPos) { return; }

      if (peg$currPos > peg$maxFailPos) {
        peg$maxFailPos = peg$currPos;
        peg$maxFailExpected = [];
      }

      peg$maxFailExpected.push(expected);
    }

    function peg$buildException(message, expected, pos) {
      function cleanupExpected(expected) {
        var i = 1;

        expected.sort(function(a, b) {
          if (a.description < b.description) {
            return -1;
          } else if (a.description > b.description) {
            return 1;
          } else {
            return 0;
          }
        });

        while (i < expected.length) {
          if (expected[i - 1] === expected[i]) {
            expected.splice(i, 1);
          } else {
            i++;
          }
        }
      }

      function buildMessage(expected, found) {
        function stringEscape(s) {
          function hex(ch) { return ch.charCodeAt(0).toString(16).toUpperCase(); }

          return s
            .replace(/\\/g,   '\\\\')
            .replace(/"/g,    '\\"')
            .replace(/\x08/g, '\\b')
            .replace(/\t/g,   '\\t')
            .replace(/\n/g,   '\\n')
            .replace(/\f/g,   '\\f')
            .replace(/\r/g,   '\\r')
            .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(ch) { return '\\x0' + hex(ch); })
            .replace(/[\x10-\x1F\x80-\xFF]/g,    function(ch) { return '\\x'  + hex(ch); })
            .replace(/[\u0180-\u0FFF]/g,         function(ch) { return '\\u0' + hex(ch); })
            .replace(/[\u1080-\uFFFF]/g,         function(ch) { return '\\u'  + hex(ch); });
        }

        var expectedDescs = new Array(expected.length),
            expectedDesc, foundDesc, i;

        for (i = 0; i < expected.length; i++) {
          expectedDescs[i] = expected[i].description;
        }

        expectedDesc = expected.length > 1
          ? expectedDescs.slice(0, -1).join(", ")
              + " or "
              + expectedDescs[expected.length - 1]
          : expectedDescs[0];

        foundDesc = found ? "\"" + stringEscape(found) + "\"" : "end of input";

        return "Expected " + expectedDesc + " but " + foundDesc + " found.";
      }

      var posDetails = peg$computePosDetails(pos),
          found      = pos < input.length ? input.charAt(pos) : null;

      if (expected !== null) {
        cleanupExpected(expected);
      }

      return new SyntaxError(
        message !== null ? message : buildMessage(expected, found),
        expected,
        found,
        pos,
        posDetails.line,
        posDetails.column
      );
    }

    function peg$parsestart() {
      var s0;

      s0 = peg$parsemessageFormatPattern();

      return s0;
    }

    function peg$parsemessageFormatPattern() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parsemessageFormatElement();
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parsemessageFormatElement();
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c1(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parsemessageFormatElement() {
      var s0;

      s0 = peg$parsemessageTextElement();
      if (s0 === peg$FAILED) {
        s0 = peg$parseargumentElement();
      }

      return s0;
    }

    function peg$parsemessageText() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$currPos;
      s3 = peg$parse_();
      if (s3 !== peg$FAILED) {
        s4 = peg$parsechars();
        if (s4 !== peg$FAILED) {
          s5 = peg$parse_();
          if (s5 !== peg$FAILED) {
            s3 = [s3, s4, s5];
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$c2;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$c2;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$c2;
      }
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$currPos;
          s3 = peg$parse_();
          if (s3 !== peg$FAILED) {
            s4 = peg$parsechars();
            if (s4 !== peg$FAILED) {
              s5 = peg$parse_();
              if (s5 !== peg$FAILED) {
                s3 = [s3, s4, s5];
                s2 = s3;
              } else {
                peg$currPos = s2;
                s2 = peg$c2;
              }
            } else {
              peg$currPos = s2;
              s2 = peg$c2;
            }
          } else {
            peg$currPos = s2;
            s2 = peg$c2;
          }
        }
      } else {
        s1 = peg$c2;
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c3(s1);
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parsews();
        if (s1 !== peg$FAILED) {
          s1 = input.substring(s0, peg$currPos);
        }
        s0 = s1;
      }

      return s0;
    }

    function peg$parsemessageTextElement() {
      var s0, s1;

      s0 = peg$currPos;
      s1 = peg$parsemessageText();
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c4(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parseargument() {
      var s0, s1, s2;

      s0 = peg$parsenumber();
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = [];
        if (peg$c5.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c6); }
        }
        if (s2 !== peg$FAILED) {
          while (s2 !== peg$FAILED) {
            s1.push(s2);
            if (peg$c5.test(input.charAt(peg$currPos))) {
              s2 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s2 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c6); }
            }
          }
        } else {
          s1 = peg$c2;
        }
        if (s1 !== peg$FAILED) {
          s1 = input.substring(s0, peg$currPos);
        }
        s0 = s1;
      }

      return s0;
    }

    function peg$parseargumentElement() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 123) {
        s1 = peg$c7;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c8); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseargument();
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$currPos;
              if (input.charCodeAt(peg$currPos) === 44) {
                s6 = peg$c10;
                peg$currPos++;
              } else {
                s6 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c11); }
              }
              if (s6 !== peg$FAILED) {
                s7 = peg$parse_();
                if (s7 !== peg$FAILED) {
                  s8 = peg$parseelementFormat();
                  if (s8 !== peg$FAILED) {
                    s6 = [s6, s7, s8];
                    s5 = s6;
                  } else {
                    peg$currPos = s5;
                    s5 = peg$c2;
                  }
                } else {
                  peg$currPos = s5;
                  s5 = peg$c2;
                }
              } else {
                peg$currPos = s5;
                s5 = peg$c2;
              }
              if (s5 === peg$FAILED) {
                s5 = peg$c9;
              }
              if (s5 !== peg$FAILED) {
                s6 = peg$parse_();
                if (s6 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 125) {
                    s7 = peg$c12;
                    peg$currPos++;
                  } else {
                    s7 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c13); }
                  }
                  if (s7 !== peg$FAILED) {
                    peg$reportedPos = s0;
                    s1 = peg$c14(s3, s5);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$c2;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$c2;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c2;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c2;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c2;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c2;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c2;
      }

      return s0;
    }

    function peg$parseelementFormat() {
      var s0;

      s0 = peg$parsesimpleFormat();
      if (s0 === peg$FAILED) {
        s0 = peg$parsepluralFormat();
        if (s0 === peg$FAILED) {
          s0 = peg$parseselectOrdinalFormat();
          if (s0 === peg$FAILED) {
            s0 = peg$parseselectFormat();
          }
        }
      }

      return s0;
    }

    function peg$parsesimpleFormat() {
      var s0, s1, s2, s3, s4, s5, s6;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 6) === peg$c15) {
        s1 = peg$c15;
        peg$currPos += 6;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c16); }
      }
      if (s1 === peg$FAILED) {
        if (input.substr(peg$currPos, 4) === peg$c17) {
          s1 = peg$c17;
          peg$currPos += 4;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c18); }
        }
        if (s1 === peg$FAILED) {
          if (input.substr(peg$currPos, 4) === peg$c19) {
            s1 = peg$c19;
            peg$currPos += 4;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c20); }
          }
        }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 44) {
            s4 = peg$c10;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c11); }
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parse_();
            if (s5 !== peg$FAILED) {
              s6 = peg$parsechars();
              if (s6 !== peg$FAILED) {
                s4 = [s4, s5, s6];
                s3 = s4;
              } else {
                peg$currPos = s3;
                s3 = peg$c2;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$c2;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$c2;
          }
          if (s3 === peg$FAILED) {
            s3 = peg$c9;
          }
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c21(s1, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c2;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c2;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c2;
      }

      return s0;
    }

    function peg$parsepluralFormat() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 6) === peg$c22) {
        s1 = peg$c22;
        peg$currPos += 6;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c23); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 44) {
            s3 = peg$c10;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c11); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$parsepluralStyle();
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c24(s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$c2;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c2;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c2;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c2;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c2;
      }

      return s0;
    }

    function peg$parseselectOrdinalFormat() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 13) === peg$c25) {
        s1 = peg$c25;
        peg$currPos += 13;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c26); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 44) {
            s3 = peg$c10;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c11); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$parsepluralStyle();
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c27(s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$c2;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c2;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c2;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c2;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c2;
      }

      return s0;
    }

    function peg$parseselectFormat() {
      var s0, s1, s2, s3, s4, s5, s6;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 6) === peg$c28) {
        s1 = peg$c28;
        peg$currPos += 6;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c29); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 44) {
            s3 = peg$c10;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c11); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = [];
              s6 = peg$parseoptionalFormatPattern();
              if (s6 !== peg$FAILED) {
                while (s6 !== peg$FAILED) {
                  s5.push(s6);
                  s6 = peg$parseoptionalFormatPattern();
                }
              } else {
                s5 = peg$c2;
              }
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c30(s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$c2;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c2;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c2;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c2;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c2;
      }

      return s0;
    }

    function peg$parseselector() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 61) {
        s2 = peg$c31;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c32); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsenumber();
        if (s3 !== peg$FAILED) {
          s2 = [s2, s3];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$c2;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$c2;
      }
      if (s1 !== peg$FAILED) {
        s1 = input.substring(s0, peg$currPos);
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$parsechars();
      }

      return s0;
    }

    function peg$parseoptionalFormatPattern() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8;

      s0 = peg$currPos;
      s1 = peg$parse_();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseselector();
        if (s2 !== peg$FAILED) {
          s3 = peg$parse_();
          if (s3 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 123) {
              s4 = peg$c7;
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c8); }
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$parse_();
              if (s5 !== peg$FAILED) {
                s6 = peg$parsemessageFormatPattern();
                if (s6 !== peg$FAILED) {
                  s7 = peg$parse_();
                  if (s7 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 125) {
                      s8 = peg$c12;
                      peg$currPos++;
                    } else {
                      s8 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c13); }
                    }
                    if (s8 !== peg$FAILED) {
                      peg$reportedPos = s0;
                      s1 = peg$c33(s2, s6);
                      s0 = s1;
                    } else {
                      peg$currPos = s0;
                      s0 = peg$c2;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$c2;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$c2;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c2;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c2;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c2;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c2;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c2;
      }

      return s0;
    }

    function peg$parseoffset() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 7) === peg$c34) {
        s1 = peg$c34;
        peg$currPos += 7;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c35); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$parsenumber();
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c36(s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c2;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c2;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c2;
      }

      return s0;
    }

    function peg$parsepluralStyle() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      s1 = peg$parseoffset();
      if (s1 === peg$FAILED) {
        s1 = peg$c9;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$parseoptionalFormatPattern();
          if (s4 !== peg$FAILED) {
            while (s4 !== peg$FAILED) {
              s3.push(s4);
              s4 = peg$parseoptionalFormatPattern();
            }
          } else {
            s3 = peg$c2;
          }
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c37(s1, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c2;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c2;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c2;
      }

      return s0;
    }

    function peg$parsews() {
      var s0, s1;

      peg$silentFails++;
      s0 = [];
      if (peg$c39.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c40); }
      }
      if (s1 !== peg$FAILED) {
        while (s1 !== peg$FAILED) {
          s0.push(s1);
          if (peg$c39.test(input.charAt(peg$currPos))) {
            s1 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c40); }
          }
        }
      } else {
        s0 = peg$c2;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c38); }
      }

      return s0;
    }

    function peg$parse_() {
      var s0, s1, s2;

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parsews();
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parsews();
      }
      if (s1 !== peg$FAILED) {
        s1 = input.substring(s0, peg$currPos);
      }
      s0 = s1;
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c41); }
      }

      return s0;
    }

    function peg$parsedigit() {
      var s0;

      if (peg$c42.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c43); }
      }

      return s0;
    }

    function peg$parsehexDigit() {
      var s0;

      if (peg$c44.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c45); }
      }

      return s0;
    }

    function peg$parsenumber() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 48) {
        s1 = peg$c46;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c47); }
      }
      if (s1 === peg$FAILED) {
        s1 = peg$currPos;
        s2 = peg$currPos;
        if (peg$c48.test(input.charAt(peg$currPos))) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c49); }
        }
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$parsedigit();
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$parsedigit();
          }
          if (s4 !== peg$FAILED) {
            s3 = [s3, s4];
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$c2;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$c2;
        }
        if (s2 !== peg$FAILED) {
          s2 = input.substring(s1, peg$currPos);
        }
        s1 = s2;
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c50(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parsechar() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      if (peg$c51.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c52); }
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 2) === peg$c53) {
          s1 = peg$c53;
          peg$currPos += 2;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c54); }
        }
        if (s1 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c55();
        }
        s0 = s1;
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          if (input.substr(peg$currPos, 2) === peg$c56) {
            s1 = peg$c56;
            peg$currPos += 2;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c57); }
          }
          if (s1 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c58();
          }
          s0 = s1;
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 2) === peg$c59) {
              s1 = peg$c59;
              peg$currPos += 2;
            } else {
              s1 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c60); }
            }
            if (s1 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c61();
            }
            s0 = s1;
            if (s0 === peg$FAILED) {
              s0 = peg$currPos;
              if (input.substr(peg$currPos, 2) === peg$c62) {
                s1 = peg$c62;
                peg$currPos += 2;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c63); }
              }
              if (s1 !== peg$FAILED) {
                s2 = peg$currPos;
                s3 = peg$currPos;
                s4 = peg$parsehexDigit();
                if (s4 !== peg$FAILED) {
                  s5 = peg$parsehexDigit();
                  if (s5 !== peg$FAILED) {
                    s6 = peg$parsehexDigit();
                    if (s6 !== peg$FAILED) {
                      s7 = peg$parsehexDigit();
                      if (s7 !== peg$FAILED) {
                        s4 = [s4, s5, s6, s7];
                        s3 = s4;
                      } else {
                        peg$currPos = s3;
                        s3 = peg$c2;
                      }
                    } else {
                      peg$currPos = s3;
                      s3 = peg$c2;
                    }
                  } else {
                    peg$currPos = s3;
                    s3 = peg$c2;
                  }
                } else {
                  peg$currPos = s3;
                  s3 = peg$c2;
                }
                if (s3 !== peg$FAILED) {
                  s3 = input.substring(s2, peg$currPos);
                }
                s2 = s3;
                if (s2 !== peg$FAILED) {
                  peg$reportedPos = s0;
                  s1 = peg$c64(s2);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$c2;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c2;
              }
            }
          }
        }
      }

      return s0;
    }

    function peg$parsechars() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parsechar();
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parsechar();
        }
      } else {
        s1 = peg$c2;
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c65(s1);
      }
      s0 = s1;

      return s0;
    }

    peg$result = peg$startRuleFunction();

    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
      return peg$result;
    } else {
      if (peg$result !== peg$FAILED && peg$currPos < input.length) {
        peg$fail({ type: "end", description: "end of input" });
      }

      throw peg$buildException(null, peg$maxFailExpected, peg$maxFailPos);
    }
  }

  return {
    SyntaxError: SyntaxError,
    parse:       parse
  };
})();


},{}],"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-relativeformat/index.js":[function(require,module,exports){
/* jshint node:true */

'use strict';

var IntlRelativeFormat = require('./lib/main')['default'];

// Add all locale data to `IntlRelativeFormat`. This module will be ignored when
// bundling for the browser with Browserify/Webpack.
require('./lib/locales');

// Re-export `IntlRelativeFormat` as the CommonJS default exports with all the
// locale data registered, and with English set as the default locale. Define
// the `default` prop for use with other compiled ES6 Modules.
exports = module.exports = IntlRelativeFormat;
exports['default'] = exports;

},{"./lib/locales":"/Users/mikemsrk/goflux/pub/node_modules/browserify/node_modules/browser-resolve/empty.js","./lib/main":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-relativeformat/lib/main.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-relativeformat/lib/core.js":[function(require,module,exports){
/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/

/* jslint esnext: true */

"use strict";
var intl$messageformat$$ = require("intl-messageformat"), src$diff$$ = require("./diff"), src$es5$$ = require("./es5");
exports["default"] = RelativeFormat;

// -----------------------------------------------------------------------------

var FIELDS = ['second', 'minute', 'hour', 'day', 'month', 'year'];
var STYLES = ['best fit', 'numeric'];

// -- RelativeFormat -----------------------------------------------------------

function RelativeFormat(locales, options) {
    options = options || {};

    // Make a copy of `locales` if it's an array, so that it doesn't change
    // since it's used lazily.
    if (src$es5$$.isArray(locales)) {
        locales = locales.concat();
    }

    src$es5$$.defineProperty(this, '_locale', {value: this._resolveLocale(locales)});
    src$es5$$.defineProperty(this, '_options', {value: {
        style: this._resolveStyle(options.style),
        units: this._isValidUnits(options.units) && options.units
    }});

    src$es5$$.defineProperty(this, '_locales', {value: locales});
    src$es5$$.defineProperty(this, '_fields', {value: this._findFields(this._locale)});
    src$es5$$.defineProperty(this, '_messages', {value: src$es5$$.objCreate(null)});

    // "Bind" `format()` method to `this` so it can be passed by reference like
    // the other `Intl` APIs.
    var relativeFormat = this;
    this.format = function format(date, options) {
        return relativeFormat._format(date, options);
    };
}

// Define internal private properties for dealing with locale data.
src$es5$$.defineProperty(RelativeFormat, '__localeData__', {value: src$es5$$.objCreate(null)});
src$es5$$.defineProperty(RelativeFormat, '__addLocaleData', {value: function (data) {
    if (!(data && data.locale)) {
        throw new Error(
            'Locale data provided to IntlRelativeFormat is missing a ' +
            '`locale` property value'
        );
    }

    RelativeFormat.__localeData__[data.locale.toLowerCase()] = data;

    // Add data to IntlMessageFormat.
    intl$messageformat$$["default"].__addLocaleData(data);
}});

// Define public `defaultLocale` property which can be set by the developer, or
// it will be set when the first RelativeFormat instance is created by
// leveraging the resolved locale from `Intl`.
src$es5$$.defineProperty(RelativeFormat, 'defaultLocale', {
    enumerable: true,
    writable  : true,
    value     : undefined
});

// Define public `thresholds` property which can be set by the developer, and
// defaults to relative time thresholds from moment.js.
src$es5$$.defineProperty(RelativeFormat, 'thresholds', {
    enumerable: true,

    value: {
        second: 45,  // seconds to minute
        minute: 45,  // minutes to hour
        hour  : 22,  // hours to day
        day   : 26,  // days to month
        month : 11   // months to year
    }
});

RelativeFormat.prototype.resolvedOptions = function () {
    return {
        locale: this._locale,
        style : this._options.style,
        units : this._options.units
    };
};

RelativeFormat.prototype._compileMessage = function (units) {
    // `this._locales` is the original set of locales the user specified to the
    // constructor, while `this._locale` is the resolved root locale.
    var locales        = this._locales;
    var resolvedLocale = this._locale;

    var field        = this._fields[units];
    var relativeTime = field.relativeTime;
    var future       = '';
    var past         = '';
    var i;

    for (i in relativeTime.future) {
        if (relativeTime.future.hasOwnProperty(i)) {
            future += ' ' + i + ' {' +
                relativeTime.future[i].replace('{0}', '#') + '}';
        }
    }

    for (i in relativeTime.past) {
        if (relativeTime.past.hasOwnProperty(i)) {
            past += ' ' + i + ' {' +
                relativeTime.past[i].replace('{0}', '#') + '}';
        }
    }

    var message = '{when, select, future {{0, plural, ' + future + '}}' +
                                 'past {{0, plural, ' + past + '}}}';

    // Create the synthetic IntlMessageFormat instance using the original
    // locales value specified by the user when constructing the the parent
    // IntlRelativeFormat instance.
    return new intl$messageformat$$["default"](message, locales);
};

RelativeFormat.prototype._getMessage = function (units) {
    var messages = this._messages;

    // Create a new synthetic message based on the locale data from CLDR.
    if (!messages[units]) {
        messages[units] = this._compileMessage(units);
    }

    return messages[units];
};

RelativeFormat.prototype._getRelativeUnits = function (diff, units) {
    var field = this._fields[units];

    if (field.relative) {
        return field.relative[diff];
    }
};

RelativeFormat.prototype._findFields = function (locale) {
    var localeData = RelativeFormat.__localeData__;
    var data       = localeData[locale.toLowerCase()];

    // The locale data is de-duplicated, so we have to traverse the locale's
    // hierarchy until we find `fields` to return.
    while (data) {
        if (data.fields) {
            return data.fields;
        }

        data = data.parentLocale && localeData[data.parentLocale.toLowerCase()];
    }

    throw new Error(
        'Locale data added to IntlRelativeFormat is missing `fields` for :' +
        locale
    );
};

RelativeFormat.prototype._format = function (date, options) {
    var now = options && options.now !== undefined ? options.now : src$es5$$.dateNow();

    if (date === undefined) {
        date = now;
    }

    // Determine if the `date` and optional `now` values are valid, and throw a
    // similar error to what `Intl.DateTimeFormat#format()` would throw.
    if (!isFinite(now)) {
        throw new RangeError(
            'The `now` option provided to IntlRelativeFormat#format() is not ' +
            'in valid range.'
        );
    }

    if (!isFinite(date)) {
        throw new RangeError(
            'The date value provided to IntlRelativeFormat#format() is not ' +
            'in valid range.'
        );
    }

    var diffReport  = src$diff$$["default"](now, date);
    var units       = this._options.units || this._selectUnits(diffReport);
    var diffInUnits = diffReport[units];

    if (this._options.style !== 'numeric') {
        var relativeUnits = this._getRelativeUnits(diffInUnits, units);
        if (relativeUnits) {
            return relativeUnits;
        }
    }

    return this._getMessage(units).format({
        '0' : Math.abs(diffInUnits),
        when: diffInUnits < 0 ? 'past' : 'future'
    });
};

RelativeFormat.prototype._isValidUnits = function (units) {
    if (!units || src$es5$$.arrIndexOf.call(FIELDS, units) >= 0) {
        return true;
    }

    if (typeof units === 'string') {
        var suggestion = /s$/.test(units) && units.substr(0, units.length - 1);
        if (suggestion && src$es5$$.arrIndexOf.call(FIELDS, suggestion) >= 0) {
            throw new Error(
                '"' + units + '" is not a valid IntlRelativeFormat `units` ' +
                'value, did you mean: ' + suggestion
            );
        }
    }

    throw new Error(
        '"' + units + '" is not a valid IntlRelativeFormat `units` value, it ' +
        'must be one of: "' + FIELDS.join('", "') + '"'
    );
};

RelativeFormat.prototype._resolveLocale = function (locales) {
    if (typeof locales === 'string') {
        locales = [locales];
    }

    // Create a copy of the array so we can push on the default locale.
    locales = (locales || []).concat(RelativeFormat.defaultLocale);

    var localeData = RelativeFormat.__localeData__;
    var i, len, localeParts, data;

    // Using the set of locales + the default locale, we look for the first one
    // which that has been registered. When data does not exist for a locale, we
    // traverse its ancestors to find something that's been registered within
    // its hierarchy of locales. Since we lack the proper `parentLocale` data
    // here, we must take a naive approach to traversal.
    for (i = 0, len = locales.length; i < len; i += 1) {
        localeParts = locales[i].toLowerCase().split('-');

        while (localeParts.length) {
            data = localeData[localeParts.join('-')];
            if (data) {
                // Return the normalized locale string; e.g., we return "en-US",
                // instead of "en-us".
                return data.locale;
            }

            localeParts.pop();
        }
    }

    var defaultLocale = locales.pop();
    throw new Error(
        'No locale data has been added to IntlRelativeFormat for: ' +
        locales.join(', ') + ', or the default locale: ' + defaultLocale
    );
};

RelativeFormat.prototype._resolveStyle = function (style) {
    // Default to "best fit" style.
    if (!style) {
        return STYLES[0];
    }

    if (src$es5$$.arrIndexOf.call(STYLES, style) >= 0) {
        return style;
    }

    throw new Error(
        '"' + style + '" is not a valid IntlRelativeFormat `style` value, it ' +
        'must be one of: "' + STYLES.join('", "') + '"'
    );
};

RelativeFormat.prototype._selectUnits = function (diffReport) {
    var i, l, units;

    for (i = 0, l = FIELDS.length; i < l; i += 1) {
        units = FIELDS[i];

        if (Math.abs(diffReport[units]) < RelativeFormat.thresholds[units]) {
            break;
        }
    }

    return units;
};


},{"./diff":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-relativeformat/lib/diff.js","./es5":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-relativeformat/lib/es5.js","intl-messageformat":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-messageformat/index.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-relativeformat/lib/diff.js":[function(require,module,exports){
/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/

/* jslint esnext: true */

"use strict";

var round = Math.round;

function daysToYears(days) {
    // 400 years have 146097 days (taking into account leap year rules)
    return days * 400 / 146097;
}

exports["default"] = function (from, to) {
    // Convert to ms timestamps.
    from = +from;
    to   = +to;

    var millisecond = round(to - from),
        second      = round(millisecond / 1000),
        minute      = round(second / 60),
        hour        = round(minute / 60),
        day         = round(hour / 24),
        week        = round(day / 7);

    var rawYears = daysToYears(day),
        month    = round(rawYears * 12),
        year     = round(rawYears);

    return {
        millisecond: millisecond,
        second     : second,
        minute     : minute,
        hour       : hour,
        day        : day,
        week       : week,
        month      : month,
        year       : year
    };
};


},{}],"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-relativeformat/lib/en.js":[function(require,module,exports){
arguments[4]["/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/en.js"][0].apply(exports,arguments)
},{}],"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-relativeformat/lib/es5.js":[function(require,module,exports){
/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/

/* jslint esnext: true */

"use strict";

// Purposely using the same implementation as the Intl.js `Intl` polyfill.
// Copyright 2013 Andy Earnshaw, MIT License

var hop = Object.prototype.hasOwnProperty;
var toString = Object.prototype.toString;

var realDefineProp = (function () {
    try { return !!Object.defineProperty({}, 'a', {}); }
    catch (e) { return false; }
})();

var es3 = !realDefineProp && !Object.prototype.__defineGetter__;

var defineProperty = realDefineProp ? Object.defineProperty :
        function (obj, name, desc) {

    if ('get' in desc && obj.__defineGetter__) {
        obj.__defineGetter__(name, desc.get);
    } else if (!hop.call(obj, name) || 'value' in desc) {
        obj[name] = desc.value;
    }
};

var objCreate = Object.create || function (proto, props) {
    var obj, k;

    function F() {}
    F.prototype = proto;
    obj = new F();

    for (k in props) {
        if (hop.call(props, k)) {
            defineProperty(obj, k, props[k]);
        }
    }

    return obj;
};

var arrIndexOf = Array.prototype.indexOf || function (search, fromIndex) {
    /*jshint validthis:true */
    var arr = this;
    if (!arr.length) {
        return -1;
    }

    for (var i = fromIndex || 0, max = arr.length; i < max; i++) {
        if (arr[i] === search) {
            return i;
        }
    }

    return -1;
};

var isArray = Array.isArray || function (obj) {
    return toString.call(obj) === '[object Array]';
};

var dateNow = Date.now || function () {
    return new Date().getTime();
};
exports.defineProperty = defineProperty, exports.objCreate = objCreate, exports.arrIndexOf = arrIndexOf, exports.isArray = isArray, exports.dateNow = dateNow;


},{}],"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-relativeformat/lib/main.js":[function(require,module,exports){
arguments[4]["/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-messageformat/lib/main.js"][0].apply(exports,arguments)
},{"./core":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-relativeformat/lib/core.js","./en":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-relativeformat/lib/en.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/Cancellation.js":[function(require,module,exports){
/**
 * Represents a cancellation caused by navigating away
 * before the previous transition has fully resolved.
 */
"use strict";

function Cancellation() {}

module.exports = Cancellation;
},{}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/History.js":[function(require,module,exports){
'use strict';

var invariant = require('react/lib/invariant');
var canUseDOM = require('react/lib/ExecutionEnvironment').canUseDOM;

var History = {

  /**
   * The current number of entries in the history.
   *
   * Note: This property is read-only.
   */
  length: 1,

  /**
   * Sends the browser back one entry in the history.
   */
  back: function back() {
    invariant(canUseDOM, 'Cannot use History.back without a DOM');

    // Do this first so that History.length will
    // be accurate in location change listeners.
    History.length -= 1;

    window.history.back();
  }

};

module.exports = History;
},{"react/lib/ExecutionEnvironment":"/Users/mikemsrk/goflux/pub/node_modules/react/lib/ExecutionEnvironment.js","react/lib/invariant":"/Users/mikemsrk/goflux/pub/node_modules/react/lib/invariant.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/Match.js":[function(require,module,exports){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

/* jshint -W084 */
var PathUtils = require('./PathUtils');

function deepSearch(route, pathname, query) {
  // Check the subtree first to find the most deeply-nested match.
  var childRoutes = route.childRoutes;
  if (childRoutes) {
    var match, childRoute;
    for (var i = 0, len = childRoutes.length; i < len; ++i) {
      childRoute = childRoutes[i];

      if (childRoute.isDefault || childRoute.isNotFound) continue; // Check these in order later.

      if (match = deepSearch(childRoute, pathname, query)) {
        // A route in the subtree matched! Add this route and we're done.
        match.routes.unshift(route);
        return match;
      }
    }
  }

  // No child routes matched; try the default route.
  var defaultRoute = route.defaultRoute;
  if (defaultRoute && (params = PathUtils.extractParams(defaultRoute.path, pathname))) {
    return new Match(pathname, params, query, [route, defaultRoute]);
  } // Does the "not found" route match?
  var notFoundRoute = route.notFoundRoute;
  if (notFoundRoute && (params = PathUtils.extractParams(notFoundRoute.path, pathname))) {
    return new Match(pathname, params, query, [route, notFoundRoute]);
  } // Last attempt: check this route.
  var params = PathUtils.extractParams(route.path, pathname);
  if (params) {
    return new Match(pathname, params, query, [route]);
  }return null;
}

var Match = (function () {
  function Match(pathname, params, query, routes) {
    _classCallCheck(this, Match);

    this.pathname = pathname;
    this.params = params;
    this.query = query;
    this.routes = routes;
  }

  _createClass(Match, null, [{
    key: 'findMatch',

    /**
     * Attempts to match depth-first a route in the given route's
     * subtree against the given path and returns the match if it
     * succeeds, null if no match can be made.
     */
    value: function findMatch(routes, path) {
      var pathname = PathUtils.withoutQuery(path);
      var query = PathUtils.extractQuery(path);
      var match = null;

      for (var i = 0, len = routes.length; match == null && i < len; ++i) match = deepSearch(routes[i], pathname, query);

      return match;
    }
  }]);

  return Match;
})();

module.exports = Match;
},{"./PathUtils":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/PathUtils.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/Navigation.js":[function(require,module,exports){
'use strict';

var PropTypes = require('./PropTypes');

/**
 * A mixin for components that modify the URL.
 *
 * Example:
 *
 *   var MyLink = React.createClass({
 *     mixins: [ Router.Navigation ],
 *     handleClick(event) {
 *       event.preventDefault();
 *       this.transitionTo('aRoute', { the: 'params' }, { the: 'query' });
 *     },
 *     render() {
 *       return (
 *         <a onClick={this.handleClick}>Click me!</a>
 *       );
 *     }
 *   });
 */
var Navigation = {

  contextTypes: {
    router: PropTypes.router.isRequired
  },

  /**
   * Returns an absolute URL path created from the given route
   * name, URL parameters, and query values.
   */
  makePath: function makePath(to, params, query) {
    return this.context.router.makePath(to, params, query);
  },

  /**
   * Returns a string that may safely be used as the href of a
   * link to the route with the given name.
   */
  makeHref: function makeHref(to, params, query) {
    return this.context.router.makeHref(to, params, query);
  },

  /**
   * Transitions to the URL specified in the arguments by pushing
   * a new URL onto the history stack.
   */
  transitionTo: function transitionTo(to, params, query) {
    this.context.router.transitionTo(to, params, query);
  },

  /**
   * Transitions to the URL specified in the arguments by replacing
   * the current URL in the history stack.
   */
  replaceWith: function replaceWith(to, params, query) {
    this.context.router.replaceWith(to, params, query);
  },

  /**
   * Transitions to the previous URL.
   */
  goBack: function goBack() {
    return this.context.router.goBack();
  }

};

module.exports = Navigation;
},{"./PropTypes":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/PropTypes.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/PathUtils.js":[function(require,module,exports){
'use strict';

var invariant = require('react/lib/invariant');
var assign = require('object-assign');
var qs = require('qs');

var paramCompileMatcher = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|[*.()\[\]\\+|{}^$]/g;
var paramInjectMatcher = /:([a-zA-Z_$][a-zA-Z0-9_$?]*[?]?)|[*]/g;
var paramInjectTrailingSlashMatcher = /\/\/\?|\/\?\/|\/\?/g;
var queryMatcher = /\?(.*)$/;

var _compiledPatterns = {};

function compilePattern(pattern) {
  if (!(pattern in _compiledPatterns)) {
    var paramNames = [];
    var source = pattern.replace(paramCompileMatcher, function (match, paramName) {
      if (paramName) {
        paramNames.push(paramName);
        return '([^/?#]+)';
      } else if (match === '*') {
        paramNames.push('splat');
        return '(.*?)';
      } else {
        return '\\' + match;
      }
    });

    _compiledPatterns[pattern] = {
      matcher: new RegExp('^' + source + '$', 'i'),
      paramNames: paramNames
    };
  }

  return _compiledPatterns[pattern];
}

var PathUtils = {

  /**
   * Returns true if the given path is absolute.
   */
  isAbsolute: function isAbsolute(path) {
    return path.charAt(0) === '/';
  },

  /**
   * Joins two URL paths together.
   */
  join: function join(a, b) {
    return a.replace(/\/*$/, '/') + b;
  },

  /**
   * Returns an array of the names of all parameters in the given pattern.
   */
  extractParamNames: function extractParamNames(pattern) {
    return compilePattern(pattern).paramNames;
  },

  /**
   * Extracts the portions of the given URL path that match the given pattern
   * and returns an object of param name => value pairs. Returns null if the
   * pattern does not match the given path.
   */
  extractParams: function extractParams(pattern, path) {
    var _compilePattern = compilePattern(pattern);

    var matcher = _compilePattern.matcher;
    var paramNames = _compilePattern.paramNames;

    var match = path.match(matcher);

    if (!match) {
      return null;
    }var params = {};

    paramNames.forEach(function (paramName, index) {
      params[paramName] = match[index + 1];
    });

    return params;
  },

  /**
   * Returns a version of the given route path with params interpolated. Throws
   * if there is a dynamic segment of the route path for which there is no param.
   */
  injectParams: function injectParams(pattern, params) {
    params = params || {};

    var splatIndex = 0;

    return pattern.replace(paramInjectMatcher, function (match, paramName) {
      paramName = paramName || 'splat';

      // If param is optional don't check for existence
      if (paramName.slice(-1) === '?') {
        paramName = paramName.slice(0, -1);

        if (params[paramName] == null) return '';
      } else {
        invariant(params[paramName] != null, 'Missing "%s" parameter for path "%s"', paramName, pattern);
      }

      var segment;
      if (paramName === 'splat' && Array.isArray(params[paramName])) {
        segment = params[paramName][splatIndex++];

        invariant(segment != null, 'Missing splat # %s for path "%s"', splatIndex, pattern);
      } else {
        segment = params[paramName];
      }

      return segment;
    }).replace(paramInjectTrailingSlashMatcher, '/');
  },

  /**
   * Returns an object that is the result of parsing any query string contained
   * in the given path, null if the path contains no query string.
   */
  extractQuery: function extractQuery(path) {
    var match = path.match(queryMatcher);
    return match && qs.parse(match[1]);
  },

  /**
   * Returns a version of the given path without the query string.
   */
  withoutQuery: function withoutQuery(path) {
    return path.replace(queryMatcher, '');
  },

  /**
   * Returns a version of the given path with the parameters in the given
   * query merged into the query string.
   */
  withQuery: function withQuery(path, query) {
    var existingQuery = PathUtils.extractQuery(path);

    if (existingQuery) query = query ? assign(existingQuery, query) : existingQuery;

    var queryString = qs.stringify(query, { arrayFormat: 'brackets' });

    if (queryString) {
      return PathUtils.withoutQuery(path) + '?' + queryString;
    }return PathUtils.withoutQuery(path);
  }

};

module.exports = PathUtils;
},{"object-assign":"/Users/mikemsrk/goflux/pub/node_modules/react-router/node_modules/object-assign/index.js","qs":"/Users/mikemsrk/goflux/pub/node_modules/react-router/node_modules/qs/index.js","react/lib/invariant":"/Users/mikemsrk/goflux/pub/node_modules/react/lib/invariant.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/PropTypes.js":[function(require,module,exports){
'use strict';

var assign = require('react/lib/Object.assign');
var ReactPropTypes = require('react').PropTypes;
var Route = require('./Route');

var PropTypes = assign({}, ReactPropTypes, {

  /**
   * Indicates that a prop should be falsy.
   */
  falsy: function falsy(props, propName, componentName) {
    if (props[propName]) {
      return new Error('<' + componentName + '> should not have a "' + propName + '" prop');
    }
  },

  /**
   * Indicates that a prop should be a Route object.
   */
  route: ReactPropTypes.instanceOf(Route),

  /**
   * Indicates that a prop should be a Router object.
   */
  //router: ReactPropTypes.instanceOf(Router) // TODO
  router: ReactPropTypes.func

});

module.exports = PropTypes;
},{"./Route":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/Route.js","react":"react","react/lib/Object.assign":"/Users/mikemsrk/goflux/pub/node_modules/react/lib/Object.assign.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/Redirect.js":[function(require,module,exports){
/**
 * Encapsulates a redirect to the given route.
 */
"use strict";

function Redirect(to, params, query) {
  this.to = to;
  this.params = params;
  this.query = query;
}

module.exports = Redirect;
},{}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/Route.js":[function(require,module,exports){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var assign = require('react/lib/Object.assign');
var invariant = require('react/lib/invariant');
var warning = require('react/lib/warning');
var PathUtils = require('./PathUtils');

var _currentRoute;

var Route = (function () {
  function Route(name, path, ignoreScrollBehavior, isDefault, isNotFound, onEnter, onLeave, handler) {
    _classCallCheck(this, Route);

    this.name = name;
    this.path = path;
    this.paramNames = PathUtils.extractParamNames(this.path);
    this.ignoreScrollBehavior = !!ignoreScrollBehavior;
    this.isDefault = !!isDefault;
    this.isNotFound = !!isNotFound;
    this.onEnter = onEnter;
    this.onLeave = onLeave;
    this.handler = handler;
  }

  _createClass(Route, [{
    key: 'appendChild',

    /**
     * Appends the given route to this route's child routes.
     */
    value: function appendChild(route) {
      invariant(route instanceof Route, 'route.appendChild must use a valid Route');

      if (!this.childRoutes) this.childRoutes = [];

      this.childRoutes.push(route);
    }
  }, {
    key: 'toString',
    value: function toString() {
      var string = '<Route';

      if (this.name) string += ' name="' + this.name + '"';

      string += ' path="' + this.path + '">';

      return string;
    }
  }], [{
    key: 'createRoute',

    /**
     * Creates and returns a new route. Options may be a URL pathname string
     * with placeholders for named params or an object with any of the following
     * properties:
     *
     * - name                     The name of the route. This is used to lookup a
     *                            route relative to its parent route and should be
     *                            unique among all child routes of the same parent
     * - path                     A URL pathname string with optional placeholders
     *                            that specify the names of params to extract from
     *                            the URL when the path matches. Defaults to `/${name}`
     *                            when there is a name given, or the path of the parent
     *                            route, or /
     * - ignoreScrollBehavior     True to make this route (and all descendants) ignore
     *                            the scroll behavior of the router
     * - isDefault                True to make this route the default route among all
     *                            its siblings
     * - isNotFound               True to make this route the "not found" route among
     *                            all its siblings
     * - onEnter                  A transition hook that will be called when the
     *                            router is going to enter this route
     * - onLeave                  A transition hook that will be called when the
     *                            router is going to leave this route
     * - handler                  A React component that will be rendered when
     *                            this route is active
     * - parentRoute              The parent route to use for this route. This option
     *                            is automatically supplied when creating routes inside
     *                            the callback to another invocation of createRoute. You
     *                            only ever need to use this when declaring routes
     *                            independently of one another to manually piece together
     *                            the route hierarchy
     *
     * The callback may be used to structure your route hierarchy. Any call to
     * createRoute, createDefaultRoute, createNotFoundRoute, or createRedirect
     * inside the callback automatically uses this route as its parent.
     */
    value: function createRoute(options, callback) {
      options = options || {};

      if (typeof options === 'string') options = { path: options };

      var parentRoute = _currentRoute;

      if (parentRoute) {
        warning(options.parentRoute == null || options.parentRoute === parentRoute, 'You should not use parentRoute with createRoute inside another route\'s child callback; it is ignored');
      } else {
        parentRoute = options.parentRoute;
      }

      var name = options.name;
      var path = options.path || name;

      if (path && !(options.isDefault || options.isNotFound)) {
        if (PathUtils.isAbsolute(path)) {
          if (parentRoute) {
            invariant(path === parentRoute.path || parentRoute.paramNames.length === 0, 'You cannot nest path "%s" inside "%s"; the parent requires URL parameters', path, parentRoute.path);
          }
        } else if (parentRoute) {
          // Relative paths extend their parent.
          path = PathUtils.join(parentRoute.path, path);
        } else {
          path = '/' + path;
        }
      } else {
        path = parentRoute ? parentRoute.path : '/';
      }

      if (options.isNotFound && !/\*$/.test(path)) path += '*'; // Auto-append * to the path of not found routes.

      var route = new Route(name, path, options.ignoreScrollBehavior, options.isDefault, options.isNotFound, options.onEnter, options.onLeave, options.handler);

      if (parentRoute) {
        if (route.isDefault) {
          invariant(parentRoute.defaultRoute == null, '%s may not have more than one default route', parentRoute);

          parentRoute.defaultRoute = route;
        } else if (route.isNotFound) {
          invariant(parentRoute.notFoundRoute == null, '%s may not have more than one not found route', parentRoute);

          parentRoute.notFoundRoute = route;
        }

        parentRoute.appendChild(route);
      }

      // Any routes created in the callback
      // use this route as their parent.
      if (typeof callback === 'function') {
        var currentRoute = _currentRoute;
        _currentRoute = route;
        callback.call(route, route);
        _currentRoute = currentRoute;
      }

      return route;
    }
  }, {
    key: 'createDefaultRoute',

    /**
     * Creates and returns a route that is rendered when its parent matches
     * the current URL.
     */
    value: function createDefaultRoute(options) {
      return Route.createRoute(assign({}, options, { isDefault: true }));
    }
  }, {
    key: 'createNotFoundRoute',

    /**
     * Creates and returns a route that is rendered when its parent matches
     * the current URL but none of its siblings do.
     */
    value: function createNotFoundRoute(options) {
      return Route.createRoute(assign({}, options, { isNotFound: true }));
    }
  }, {
    key: 'createRedirect',

    /**
     * Creates and returns a route that automatically redirects the transition
     * to another route. In addition to the normal options to createRoute, this
     * function accepts the following options:
     *
     * - from         An alias for the `path` option. Defaults to *
     * - to           The path/route/route name to redirect to
     * - params       The params to use in the redirect URL. Defaults
     *                to using the current params
     * - query        The query to use in the redirect URL. Defaults
     *                to using the current query
     */
    value: function createRedirect(options) {
      return Route.createRoute(assign({}, options, {
        path: options.path || options.from || '*',
        onEnter: function onEnter(transition, params, query) {
          transition.redirect(options.to, options.params || params, options.query || query);
        }
      }));
    }
  }]);

  return Route;
})();

module.exports = Route;
},{"./PathUtils":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/PathUtils.js","react/lib/Object.assign":"/Users/mikemsrk/goflux/pub/node_modules/react/lib/Object.assign.js","react/lib/invariant":"/Users/mikemsrk/goflux/pub/node_modules/react/lib/invariant.js","react/lib/warning":"/Users/mikemsrk/goflux/pub/node_modules/react/lib/warning.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/ScrollHistory.js":[function(require,module,exports){
'use strict';

var invariant = require('react/lib/invariant');
var canUseDOM = require('react/lib/ExecutionEnvironment').canUseDOM;
var getWindowScrollPosition = require('./getWindowScrollPosition');

function shouldUpdateScroll(state, prevState) {
  if (!prevState) {
    return true;
  } // Don't update scroll position when only the query has changed.
  if (state.pathname === prevState.pathname) {
    return false;
  }var routes = state.routes;
  var prevRoutes = prevState.routes;

  var sharedAncestorRoutes = routes.filter(function (route) {
    return prevRoutes.indexOf(route) !== -1;
  });

  return !sharedAncestorRoutes.some(function (route) {
    return route.ignoreScrollBehavior;
  });
}

/**
 * Provides the router with the ability to manage window scroll position
 * according to its scroll behavior.
 */
var ScrollHistory = {

  statics: {

    /**
     * Records curent scroll position as the last known position for the given URL path.
     */
    recordScrollPosition: function recordScrollPosition(path) {
      if (!this.scrollHistory) this.scrollHistory = {};

      this.scrollHistory[path] = getWindowScrollPosition();
    },

    /**
     * Returns the last known scroll position for the given URL path.
     */
    getScrollPosition: function getScrollPosition(path) {
      if (!this.scrollHistory) this.scrollHistory = {};

      return this.scrollHistory[path] || null;
    }

  },

  componentWillMount: function componentWillMount() {
    invariant(this.constructor.getScrollBehavior() == null || canUseDOM, 'Cannot use scroll behavior without a DOM');
  },

  componentDidMount: function componentDidMount() {
    this._updateScroll();
  },

  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
    this._updateScroll(prevState);
  },

  _updateScroll: function _updateScroll(prevState) {
    if (!shouldUpdateScroll(this.state, prevState)) {
      return;
    }var scrollBehavior = this.constructor.getScrollBehavior();

    if (scrollBehavior) scrollBehavior.updateScrollPosition(this.constructor.getScrollPosition(this.state.path), this.state.action);
  }

};

module.exports = ScrollHistory;
},{"./getWindowScrollPosition":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/getWindowScrollPosition.js","react/lib/ExecutionEnvironment":"/Users/mikemsrk/goflux/pub/node_modules/react/lib/ExecutionEnvironment.js","react/lib/invariant":"/Users/mikemsrk/goflux/pub/node_modules/react/lib/invariant.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/State.js":[function(require,module,exports){
'use strict';

var PropTypes = require('./PropTypes');

/**
 * A mixin for components that need to know the path, routes, URL
 * params and query that are currently active.
 *
 * Example:
 *
 *   var AboutLink = React.createClass({
 *     mixins: [ Router.State ],
 *     render() {
 *       var className = this.props.className;
 *
 *       if (this.isActive('about'))
 *         className += ' is-active';
 *
 *       return React.DOM.a({ className: className }, this.props.children);
 *     }
 *   });
 */
var State = {

  contextTypes: {
    router: PropTypes.router.isRequired
  },

  /**
   * Returns the current URL path.
   */
  getPath: function getPath() {
    return this.context.router.getCurrentPath();
  },

  /**
   * Returns the current URL path without the query string.
   */
  getPathname: function getPathname() {
    return this.context.router.getCurrentPathname();
  },

  /**
   * Returns an object of the URL params that are currently active.
   */
  getParams: function getParams() {
    return this.context.router.getCurrentParams();
  },

  /**
   * Returns an object of the query params that are currently active.
   */
  getQuery: function getQuery() {
    return this.context.router.getCurrentQuery();
  },

  /**
   * Returns an array of the routes that are currently active.
   */
  getRoutes: function getRoutes() {
    return this.context.router.getCurrentRoutes();
  },

  /**
   * A helper method to determine if a given route, params, and query
   * are active.
   */
  isActive: function isActive(to, params, query) {
    return this.context.router.isActive(to, params, query);
  }

};

module.exports = State;
},{"./PropTypes":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/PropTypes.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/Transition.js":[function(require,module,exports){
/* jshint -W058 */

'use strict';

var Cancellation = require('./Cancellation');
var Redirect = require('./Redirect');

/**
 * Encapsulates a transition to a given path.
 *
 * The willTransitionTo and willTransitionFrom handlers receive
 * an instance of this class as their first argument.
 */
function Transition(path, retry) {
  this.path = path;
  this.abortReason = null;
  // TODO: Change this to router.retryTransition(transition)
  this.retry = retry.bind(this);
}

Transition.prototype.abort = function (reason) {
  if (this.abortReason == null) this.abortReason = reason || 'ABORT';
};

Transition.prototype.redirect = function (to, params, query) {
  this.abort(new Redirect(to, params, query));
};

Transition.prototype.cancel = function () {
  this.abort(new Cancellation());
};

Transition.from = function (transition, routes, components, callback) {
  routes.reduce(function (callback, route, index) {
    return function (error) {
      if (error || transition.abortReason) {
        callback(error);
      } else if (route.onLeave) {
        try {
          route.onLeave(transition, components[index], callback);

          // If there is no callback in the argument list, call it automatically.
          if (route.onLeave.length < 3) callback();
        } catch (e) {
          callback(e);
        }
      } else {
        callback();
      }
    };
  }, callback)();
};

Transition.to = function (transition, routes, params, query, callback) {
  routes.reduceRight(function (callback, route) {
    return function (error) {
      if (error || transition.abortReason) {
        callback(error);
      } else if (route.onEnter) {
        try {
          route.onEnter(transition, params, query, callback);

          // If there is no callback in the argument list, call it automatically.
          if (route.onEnter.length < 4) callback();
        } catch (e) {
          callback(e);
        }
      } else {
        callback();
      }
    };
  }, callback)();
};

module.exports = Transition;
},{"./Cancellation":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/Cancellation.js","./Redirect":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/Redirect.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/actions/LocationActions.js":[function(require,module,exports){
/**
 * Actions that modify the URL.
 */
'use strict';

var LocationActions = {

  /**
   * Indicates a new location is being pushed to the history stack.
   */
  PUSH: 'push',

  /**
   * Indicates the current location should be replaced.
   */
  REPLACE: 'replace',

  /**
   * Indicates the most recent entry should be removed from the history stack.
   */
  POP: 'pop'

};

module.exports = LocationActions;
},{}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/behaviors/ImitateBrowserBehavior.js":[function(require,module,exports){
'use strict';

var LocationActions = require('../actions/LocationActions');

/**
 * A scroll behavior that attempts to imitate the default behavior
 * of modern browsers.
 */
var ImitateBrowserBehavior = {

  updateScrollPosition: function updateScrollPosition(position, actionType) {
    switch (actionType) {
      case LocationActions.PUSH:
      case LocationActions.REPLACE:
        window.scrollTo(0, 0);
        break;
      case LocationActions.POP:
        if (position) {
          window.scrollTo(position.x, position.y);
        } else {
          window.scrollTo(0, 0);
        }
        break;
    }
  }

};

module.exports = ImitateBrowserBehavior;
},{"../actions/LocationActions":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/actions/LocationActions.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/behaviors/ScrollToTopBehavior.js":[function(require,module,exports){
/**
 * A scroll behavior that always scrolls to the top of the page
 * after a transition.
 */
"use strict";

var ScrollToTopBehavior = {

  updateScrollPosition: function updateScrollPosition() {
    window.scrollTo(0, 0);
  }

};

module.exports = ScrollToTopBehavior;
},{}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/components/ContextWrapper.js":[function(require,module,exports){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

/**
 * This component is necessary to get around a context warning
 * present in React 0.13.0. It sovles this by providing a separation
 * between the "owner" and "parent" contexts.
 */

var React = require('react');

var ContextWrapper = (function (_React$Component) {
  function ContextWrapper() {
    _classCallCheck(this, ContextWrapper);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(ContextWrapper, _React$Component);

  _createClass(ContextWrapper, [{
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return ContextWrapper;
})(React.Component);

module.exports = ContextWrapper;
},{"react":"react"}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/components/DefaultRoute.js":[function(require,module,exports){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var PropTypes = require('../PropTypes');
var RouteHandler = require('./RouteHandler');
var Route = require('./Route');

/**
 * A <DefaultRoute> component is a special kind of <Route> that
 * renders when its parent matches but none of its siblings do.
 * Only one such route may be used at any given level in the
 * route hierarchy.
 */

var DefaultRoute = (function (_Route) {
  function DefaultRoute() {
    _classCallCheck(this, DefaultRoute);

    if (_Route != null) {
      _Route.apply(this, arguments);
    }
  }

  _inherits(DefaultRoute, _Route);

  return DefaultRoute;
})(Route);

// TODO: Include these in the above class definition
// once we can use ES7 property initializers.
// https://github.com/babel/babel/issues/619

DefaultRoute.propTypes = {
  name: PropTypes.string,
  path: PropTypes.falsy,
  children: PropTypes.falsy,
  handler: PropTypes.func.isRequired
};

DefaultRoute.defaultProps = {
  handler: RouteHandler
};

module.exports = DefaultRoute;
},{"../PropTypes":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/PropTypes.js","./Route":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/components/Route.js","./RouteHandler":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/components/RouteHandler.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/components/Link.js":[function(require,module,exports){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var React = require('react');
var assign = require('react/lib/Object.assign');
var PropTypes = require('../PropTypes');

function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

/**
 * <Link> components are used to create an <a> element that links to a route.
 * When that route is active, the link gets an "active" class name (or the
 * value of its `activeClassName` prop).
 *
 * For example, assuming you have the following route:
 *
 *   <Route name="showPost" path="/posts/:postID" handler={Post}/>
 *
 * You could use the following component to link to that route:
 *
 *   <Link to="showPost" params={{ postID: "123" }} />
 *
 * In addition to params, links may pass along query string parameters
 * using the `query` prop.
 *
 *   <Link to="showPost" params={{ postID: "123" }} query={{ show:true }}/>
 */

var Link = (function (_React$Component) {
  function Link() {
    _classCallCheck(this, Link);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(Link, _React$Component);

  _createClass(Link, [{
    key: 'handleClick',
    value: function handleClick(event) {
      var allowTransition = true;
      var clickResult;

      if (this.props.onClick) clickResult = this.props.onClick(event);

      if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
        return;
      }if (clickResult === false || event.defaultPrevented === true) allowTransition = false;

      event.preventDefault();

      if (allowTransition) this.context.router.transitionTo(this.props.to, this.props.params, this.props.query);
    }
  }, {
    key: 'getHref',

    /**
     * Returns the value of the "href" attribute to use on the DOM element.
     */
    value: function getHref() {
      return this.context.router.makeHref(this.props.to, this.props.params, this.props.query);
    }
  }, {
    key: 'getClassName',

    /**
     * Returns the value of the "class" attribute to use on the DOM element, which contains
     * the value of the activeClassName property when this <Link> is active.
     */
    value: function getClassName() {
      var className = this.props.className;

      if (this.getActiveState()) className += ' ' + this.props.activeClassName;

      return className;
    }
  }, {
    key: 'getActiveState',
    value: function getActiveState() {
      return this.context.router.isActive(this.props.to, this.props.params, this.props.query);
    }
  }, {
    key: 'render',
    value: function render() {
      var props = assign({}, this.props, {
        href: this.getHref(),
        className: this.getClassName(),
        onClick: this.handleClick.bind(this)
      });

      if (props.activeStyle && this.getActiveState()) props.style = props.activeStyle;

      return React.DOM.a(props, this.props.children);
    }
  }]);

  return Link;
})(React.Component);

// TODO: Include these in the above class definition
// once we can use ES7 property initializers.
// https://github.com/babel/babel/issues/619

Link.contextTypes = {
  router: PropTypes.router.isRequired
};

Link.propTypes = {
  activeClassName: PropTypes.string.isRequired,
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.route]).isRequired,
  params: PropTypes.object,
  query: PropTypes.object,
  activeStyle: PropTypes.object,
  onClick: PropTypes.func
};

Link.defaultProps = {
  activeClassName: 'active',
  className: ''
};

module.exports = Link;
},{"../PropTypes":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/PropTypes.js","react":"react","react/lib/Object.assign":"/Users/mikemsrk/goflux/pub/node_modules/react/lib/Object.assign.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/components/NotFoundRoute.js":[function(require,module,exports){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var PropTypes = require('../PropTypes');
var RouteHandler = require('./RouteHandler');
var Route = require('./Route');

/**
 * A <NotFoundRoute> is a special kind of <Route> that
 * renders when the beginning of its parent's path matches
 * but none of its siblings do, including any <DefaultRoute>.
 * Only one such route may be used at any given level in the
 * route hierarchy.
 */

var NotFoundRoute = (function (_Route) {
  function NotFoundRoute() {
    _classCallCheck(this, NotFoundRoute);

    if (_Route != null) {
      _Route.apply(this, arguments);
    }
  }

  _inherits(NotFoundRoute, _Route);

  return NotFoundRoute;
})(Route);

// TODO: Include these in the above class definition
// once we can use ES7 property initializers.
// https://github.com/babel/babel/issues/619

NotFoundRoute.propTypes = {
  name: PropTypes.string,
  path: PropTypes.falsy,
  children: PropTypes.falsy,
  handler: PropTypes.func.isRequired
};

NotFoundRoute.defaultProps = {
  handler: RouteHandler
};

module.exports = NotFoundRoute;
},{"../PropTypes":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/PropTypes.js","./Route":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/components/Route.js","./RouteHandler":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/components/RouteHandler.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/components/Redirect.js":[function(require,module,exports){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var PropTypes = require('../PropTypes');
var Route = require('./Route');

/**
 * A <Redirect> component is a special kind of <Route> that always
 * redirects to another route when it matches.
 */

var Redirect = (function (_Route) {
  function Redirect() {
    _classCallCheck(this, Redirect);

    if (_Route != null) {
      _Route.apply(this, arguments);
    }
  }

  _inherits(Redirect, _Route);

  return Redirect;
})(Route);

// TODO: Include these in the above class definition
// once we can use ES7 property initializers.
// https://github.com/babel/babel/issues/619

Redirect.propTypes = {
  path: PropTypes.string,
  from: PropTypes.string, // Alias for path.
  to: PropTypes.string,
  handler: PropTypes.falsy
};

// Redirects should not have a default handler
Redirect.defaultProps = {};

module.exports = Redirect;
},{"../PropTypes":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/PropTypes.js","./Route":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/components/Route.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/components/Route.js":[function(require,module,exports){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var React = require('react');
var invariant = require('react/lib/invariant');
var PropTypes = require('../PropTypes');
var RouteHandler = require('./RouteHandler');

/**
 * <Route> components specify components that are rendered to the page when the
 * URL matches a given pattern.
 *
 * Routes are arranged in a nested tree structure. When a new URL is requested,
 * the tree is searched depth-first to find a route whose path matches the URL.
 * When one is found, all routes in the tree that lead to it are considered
 * "active" and their components are rendered into the DOM, nested in the same
 * order as they are in the tree.
 *
 * The preferred way to configure a router is using JSX. The XML-like syntax is
 * a great way to visualize how routes are laid out in an application.
 *
 *   var routes = [
 *     <Route handler={App}>
 *       <Route name="login" handler={Login}/>
 *       <Route name="logout" handler={Logout}/>
 *       <Route name="about" handler={About}/>
 *     </Route>
 *   ];
 *   
 *   Router.run(routes, function (Handler) {
 *     React.render(<Handler/>, document.body);
 *   });
 *
 * Handlers for Route components that contain children can render their active
 * child route using a <RouteHandler> element.
 *
 *   var App = React.createClass({
 *     render: function () {
 *       return (
 *         <div class="application">
 *           <RouteHandler/>
 *         </div>
 *       );
 *     }
 *   });
 *
 * If no handler is provided for the route, it will render a matched child route.
 */

var Route = (function (_React$Component) {
  function Route() {
    _classCallCheck(this, Route);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(Route, _React$Component);

  _createClass(Route, [{
    key: 'render',
    value: function render() {
      invariant(false, '%s elements are for router configuration only and should not be rendered', this.constructor.name);
    }
  }]);

  return Route;
})(React.Component);

// TODO: Include these in the above class definition
// once we can use ES7 property initializers.
// https://github.com/babel/babel/issues/619

Route.propTypes = {
  name: PropTypes.string,
  path: PropTypes.string,
  handler: PropTypes.func,
  ignoreScrollBehavior: PropTypes.bool
};

Route.defaultProps = {
  handler: RouteHandler
};

module.exports = Route;
},{"../PropTypes":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/PropTypes.js","./RouteHandler":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/components/RouteHandler.js","react":"react","react/lib/invariant":"/Users/mikemsrk/goflux/pub/node_modules/react/lib/invariant.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/components/RouteHandler.js":[function(require,module,exports){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var React = require('react');
var ContextWrapper = require('./ContextWrapper');
var assign = require('react/lib/Object.assign');
var PropTypes = require('../PropTypes');

var REF_NAME = '__routeHandler__';

/**
 * A <RouteHandler> component renders the active child route handler
 * when routes are nested.
 */

var RouteHandler = (function (_React$Component) {
  function RouteHandler() {
    _classCallCheck(this, RouteHandler);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(RouteHandler, _React$Component);

  _createClass(RouteHandler, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        routeDepth: this.context.routeDepth + 1
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._updateRouteComponent(this.refs[REF_NAME]);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this._updateRouteComponent(this.refs[REF_NAME]);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._updateRouteComponent(null);
    }
  }, {
    key: '_updateRouteComponent',
    value: function _updateRouteComponent(component) {
      this.context.router.setRouteComponentAtDepth(this.getRouteDepth(), component);
    }
  }, {
    key: 'getRouteDepth',
    value: function getRouteDepth() {
      return this.context.routeDepth;
    }
  }, {
    key: 'createChildRouteHandler',
    value: function createChildRouteHandler(props) {
      var route = this.context.router.getRouteAtDepth(this.getRouteDepth());

      if (route == null) {
        return null;
      }var childProps = assign({}, props || this.props, {
        ref: REF_NAME,
        params: this.context.router.getCurrentParams(),
        query: this.context.router.getCurrentQuery()
      });

      return React.createElement(route.handler, childProps);
    }
  }, {
    key: 'render',
    value: function render() {
      var handler = this.createChildRouteHandler();
      // <script/> for things like <CSSTransitionGroup/> that don't like null
      return handler ? React.createElement(
        ContextWrapper,
        null,
        handler
      ) : React.createElement('script', null);
    }
  }]);

  return RouteHandler;
})(React.Component);

// TODO: Include these in the above class definition
// once we can use ES7 property initializers.
// https://github.com/babel/babel/issues/619

RouteHandler.contextTypes = {
  routeDepth: PropTypes.number.isRequired,
  router: PropTypes.router.isRequired
};

RouteHandler.childContextTypes = {
  routeDepth: PropTypes.number.isRequired
};

module.exports = RouteHandler;
},{"../PropTypes":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/PropTypes.js","./ContextWrapper":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/components/ContextWrapper.js","react":"react","react/lib/Object.assign":"/Users/mikemsrk/goflux/pub/node_modules/react/lib/Object.assign.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/createRouter.js":[function(require,module,exports){
(function (process){
/* jshint -W058 */
'use strict';

var React = require('react');
var warning = require('react/lib/warning');
var invariant = require('react/lib/invariant');
var canUseDOM = require('react/lib/ExecutionEnvironment').canUseDOM;
var LocationActions = require('./actions/LocationActions');
var ImitateBrowserBehavior = require('./behaviors/ImitateBrowserBehavior');
var HashLocation = require('./locations/HashLocation');
var HistoryLocation = require('./locations/HistoryLocation');
var RefreshLocation = require('./locations/RefreshLocation');
var StaticLocation = require('./locations/StaticLocation');
var ScrollHistory = require('./ScrollHistory');
var createRoutesFromReactChildren = require('./createRoutesFromReactChildren');
var isReactChildren = require('./isReactChildren');
var Transition = require('./Transition');
var PropTypes = require('./PropTypes');
var Redirect = require('./Redirect');
var History = require('./History');
var Cancellation = require('./Cancellation');
var Match = require('./Match');
var Route = require('./Route');
var supportsHistory = require('./supportsHistory');
var PathUtils = require('./PathUtils');

/**
 * The default location for new routers.
 */
var DEFAULT_LOCATION = canUseDOM ? HashLocation : '/';

/**
 * The default scroll behavior for new routers.
 */
var DEFAULT_SCROLL_BEHAVIOR = canUseDOM ? ImitateBrowserBehavior : null;

function hasProperties(object, properties) {
  for (var propertyName in properties) if (properties.hasOwnProperty(propertyName) && object[propertyName] !== properties[propertyName]) {
    return false;
  }return true;
}

function hasMatch(routes, route, prevParams, nextParams, prevQuery, nextQuery) {
  return routes.some(function (r) {
    if (r !== route) return false;

    var paramNames = route.paramNames;
    var paramName;

    // Ensure that all params the route cares about did not change.
    for (var i = 0, len = paramNames.length; i < len; ++i) {
      paramName = paramNames[i];

      if (nextParams[paramName] !== prevParams[paramName]) return false;
    }

    // Ensure the query hasn't changed.
    return hasProperties(prevQuery, nextQuery) && hasProperties(nextQuery, prevQuery);
  });
}

function addRoutesToNamedRoutes(routes, namedRoutes) {
  var route;
  for (var i = 0, len = routes.length; i < len; ++i) {
    route = routes[i];

    if (route.name) {
      invariant(namedRoutes[route.name] == null, 'You may not have more than one route named "%s"', route.name);

      namedRoutes[route.name] = route;
    }

    if (route.childRoutes) addRoutesToNamedRoutes(route.childRoutes, namedRoutes);
  }
}

function routeIsActive(activeRoutes, routeName) {
  return activeRoutes.some(function (route) {
    return route.name === routeName;
  });
}

function paramsAreActive(activeParams, params) {
  for (var property in params) if (String(activeParams[property]) !== String(params[property])) {
    return false;
  }return true;
}

function queryIsActive(activeQuery, query) {
  for (var property in query) if (String(activeQuery[property]) !== String(query[property])) {
    return false;
  }return true;
}

/**
 * Creates and returns a new router using the given options. A router
 * is a ReactComponent class that knows how to react to changes in the
 * URL and keep the contents of the page in sync.
 *
 * Options may be any of the following:
 *
 * - routes           (required) The route config
 * - location         The location to use. Defaults to HashLocation when
 *                    the DOM is available, "/" otherwise
 * - scrollBehavior   The scroll behavior to use. Defaults to ImitateBrowserBehavior
 *                    when the DOM is available, null otherwise
 * - onError          A function that is used to handle errors
 * - onAbort          A function that is used to handle aborted transitions
 *
 * When rendering in a server-side environment, the location should simply
 * be the URL path that was used in the request, including the query string.
 */
function createRouter(options) {
  options = options || {};

  if (isReactChildren(options)) options = { routes: options };

  var mountedComponents = [];
  var location = options.location || DEFAULT_LOCATION;
  var scrollBehavior = options.scrollBehavior || DEFAULT_SCROLL_BEHAVIOR;
  var state = {};
  var nextState = {};
  var pendingTransition = null;
  var dispatchHandler = null;

  if (typeof location === 'string') location = new StaticLocation(location);

  if (location instanceof StaticLocation) {
    warning(!canUseDOM || process.env.NODE_ENV === 'test', 'You should not use a static location in a DOM environment because ' + 'the router will not be kept in sync with the current URL');
  } else {
    invariant(canUseDOM || location.needsDOM === false, 'You cannot use %s without a DOM', location);
  }

  // Automatically fall back to full page refreshes in
  // browsers that don't support the HTML history API.
  if (location === HistoryLocation && !supportsHistory()) location = RefreshLocation;

  var Router = React.createClass({

    displayName: 'Router',

    statics: {

      isRunning: false,

      cancelPendingTransition: function cancelPendingTransition() {
        if (pendingTransition) {
          pendingTransition.cancel();
          pendingTransition = null;
        }
      },

      clearAllRoutes: function clearAllRoutes() {
        Router.cancelPendingTransition();
        Router.namedRoutes = {};
        Router.routes = [];
      },

      /**
       * Adds routes to this router from the given children object (see ReactChildren).
       */
      addRoutes: function addRoutes(routes) {
        if (isReactChildren(routes)) routes = createRoutesFromReactChildren(routes);

        addRoutesToNamedRoutes(routes, Router.namedRoutes);

        Router.routes.push.apply(Router.routes, routes);
      },

      /**
       * Replaces routes of this router from the given children object (see ReactChildren).
       */
      replaceRoutes: function replaceRoutes(routes) {
        Router.clearAllRoutes();
        Router.addRoutes(routes);
        Router.refresh();
      },

      /**
       * Performs a match of the given path against this router and returns an object
       * with the { routes, params, pathname, query } that match. Returns null if no
       * match can be made.
       */
      match: function match(path) {
        return Match.findMatch(Router.routes, path);
      },

      /**
       * Returns an absolute URL path created from the given route
       * name, URL parameters, and query.
       */
      makePath: function makePath(to, params, query) {
        var path;
        if (PathUtils.isAbsolute(to)) {
          path = to;
        } else {
          var route = to instanceof Route ? to : Router.namedRoutes[to];

          invariant(route instanceof Route, 'Cannot find a route named "%s"', to);

          path = route.path;
        }

        return PathUtils.withQuery(PathUtils.injectParams(path, params), query);
      },

      /**
       * Returns a string that may safely be used as the href of a link
       * to the route with the given name, URL parameters, and query.
       */
      makeHref: function makeHref(to, params, query) {
        var path = Router.makePath(to, params, query);
        return location === HashLocation ? '#' + path : path;
      },

      /**
       * Transitions to the URL specified in the arguments by pushing
       * a new URL onto the history stack.
       */
      transitionTo: function transitionTo(to, params, query) {
        var path = Router.makePath(to, params, query);

        if (pendingTransition) {
          // Replace so pending location does not stay in history.
          location.replace(path);
        } else {
          location.push(path);
        }
      },

      /**
       * Transitions to the URL specified in the arguments by replacing
       * the current URL in the history stack.
       */
      replaceWith: function replaceWith(to, params, query) {
        location.replace(Router.makePath(to, params, query));
      },

      /**
       * Transitions to the previous URL if one is available. Returns true if the
       * router was able to go back, false otherwise.
       *
       * Note: The router only tracks history entries in your application, not the
       * current browser session, so you can safely call this function without guarding
       * against sending the user back to some other site. However, when using
       * RefreshLocation (which is the fallback for HistoryLocation in browsers that
       * don't support HTML5 history) this method will *always* send the client back
       * because we cannot reliably track history length.
       */
      goBack: function goBack() {
        if (History.length > 1 || location === RefreshLocation) {
          location.pop();
          return true;
        }

        warning(false, 'goBack() was ignored because there is no router history');

        return false;
      },

      handleAbort: options.onAbort || function (abortReason) {
        if (location instanceof StaticLocation) throw new Error('Unhandled aborted transition! Reason: ' + abortReason);

        if (abortReason instanceof Cancellation) {
          return;
        } else if (abortReason instanceof Redirect) {
          location.replace(Router.makePath(abortReason.to, abortReason.params, abortReason.query));
        } else {
          location.pop();
        }
      },

      handleError: options.onError || function (error) {
        // Throw so we don't silently swallow async errors.
        throw error; // This error probably originated in a transition hook.
      },

      handleLocationChange: function handleLocationChange(change) {
        Router.dispatch(change.path, change.type);
      },

      /**
       * Performs a transition to the given path and calls callback(error, abortReason)
       * when the transition is finished. If both arguments are null the router's state
       * was updated. Otherwise the transition did not complete.
       *
       * In a transition, a router first determines which routes are involved by beginning
       * with the current route, up the route tree to the first parent route that is shared
       * with the destination route, and back down the tree to the destination route. The
       * willTransitionFrom hook is invoked on all route handlers we're transitioning away
       * from, in reverse nesting order. Likewise, the willTransitionTo hook is invoked on
       * all route handlers we're transitioning to.
       *
       * Both willTransitionFrom and willTransitionTo hooks may either abort or redirect the
       * transition. To resolve asynchronously, they may use the callback argument. If no
       * hooks wait, the transition is fully synchronous.
       */
      dispatch: function dispatch(path, action) {
        Router.cancelPendingTransition();

        var prevPath = state.path;
        var isRefreshing = action == null;

        if (prevPath === path && !isRefreshing) {
          return;
        } // Nothing to do!

        // Record the scroll position as early as possible to
        // get it before browsers try update it automatically.
        if (prevPath && action === LocationActions.PUSH) Router.recordScrollPosition(prevPath);

        var match = Router.match(path);

        warning(match != null, 'No route matches path "%s". Make sure you have <Route path="%s"> somewhere in your routes', path, path);

        if (match == null) match = {};

        var prevRoutes = state.routes || [];
        var prevParams = state.params || {};
        var prevQuery = state.query || {};

        var nextRoutes = match.routes || [];
        var nextParams = match.params || {};
        var nextQuery = match.query || {};

        var fromRoutes, toRoutes;
        if (prevRoutes.length) {
          fromRoutes = prevRoutes.filter(function (route) {
            return !hasMatch(nextRoutes, route, prevParams, nextParams, prevQuery, nextQuery);
          });

          toRoutes = nextRoutes.filter(function (route) {
            return !hasMatch(prevRoutes, route, prevParams, nextParams, prevQuery, nextQuery);
          });
        } else {
          fromRoutes = [];
          toRoutes = nextRoutes;
        }

        var transition = new Transition(path, Router.replaceWith.bind(Router, path));
        pendingTransition = transition;

        var fromComponents = mountedComponents.slice(prevRoutes.length - fromRoutes.length);

        Transition.from(transition, fromRoutes, fromComponents, function (error) {
          if (error || transition.abortReason) return dispatchHandler.call(Router, error, transition); // No need to continue.

          Transition.to(transition, toRoutes, nextParams, nextQuery, function (error) {
            dispatchHandler.call(Router, error, transition, {
              path: path,
              action: action,
              pathname: match.pathname,
              routes: nextRoutes,
              params: nextParams,
              query: nextQuery
            });
          });
        });
      },

      /**
       * Starts this router and calls callback(router, state) when the route changes.
       *
       * If the router's location is static (i.e. a URL path in a server environment)
       * the callback is called only once. Otherwise, the location should be one of the
       * Router.*Location objects (e.g. Router.HashLocation or Router.HistoryLocation).
       */
      run: function run(callback) {
        invariant(!Router.isRunning, 'Router is already running');

        dispatchHandler = function (error, transition, newState) {
          if (error) Router.handleError(error);

          if (pendingTransition !== transition) return;

          pendingTransition = null;

          if (transition.abortReason) {
            Router.handleAbort(transition.abortReason);
          } else {
            callback.call(Router, Router, nextState = newState);
          }
        };

        if (!(location instanceof StaticLocation)) {
          if (location.addChangeListener) location.addChangeListener(Router.handleLocationChange);

          Router.isRunning = true;
        }

        // Bootstrap using the current path.
        Router.refresh();
      },

      refresh: function refresh() {
        Router.dispatch(location.getCurrentPath(), null);
      },

      stop: function stop() {
        Router.cancelPendingTransition();

        if (location.removeChangeListener) location.removeChangeListener(Router.handleLocationChange);

        Router.isRunning = false;
      },

      getLocation: function getLocation() {
        return location;
      },

      getScrollBehavior: function getScrollBehavior() {
        return scrollBehavior;
      },

      getRouteAtDepth: function getRouteAtDepth(routeDepth) {
        var routes = state.routes;
        return routes && routes[routeDepth];
      },

      setRouteComponentAtDepth: function setRouteComponentAtDepth(routeDepth, component) {
        mountedComponents[routeDepth] = component;
      },

      /**
       * Returns the current URL path + query string.
       */
      getCurrentPath: function getCurrentPath() {
        return state.path;
      },

      /**
       * Returns the current URL path without the query string.
       */
      getCurrentPathname: function getCurrentPathname() {
        return state.pathname;
      },

      /**
       * Returns an object of the currently active URL parameters.
       */
      getCurrentParams: function getCurrentParams() {
        return state.params;
      },

      /**
       * Returns an object of the currently active query parameters.
       */
      getCurrentQuery: function getCurrentQuery() {
        return state.query;
      },

      /**
       * Returns an array of the currently active routes.
       */
      getCurrentRoutes: function getCurrentRoutes() {
        return state.routes;
      },

      /**
       * Returns true if the given route, params, and query are active.
       */
      isActive: function isActive(to, params, query) {
        if (PathUtils.isAbsolute(to)) {
          return to === state.path;
        }return routeIsActive(state.routes, to) && paramsAreActive(state.params, params) && (query == null || queryIsActive(state.query, query));
      }

    },

    mixins: [ScrollHistory],

    propTypes: {
      children: PropTypes.falsy
    },

    childContextTypes: {
      routeDepth: PropTypes.number.isRequired,
      router: PropTypes.router.isRequired
    },

    getChildContext: function getChildContext() {
      return {
        routeDepth: 1,
        router: Router
      };
    },

    getInitialState: function getInitialState() {
      return state = nextState;
    },

    componentWillReceiveProps: function componentWillReceiveProps() {
      this.setState(state = nextState);
    },

    componentWillUnmount: function componentWillUnmount() {
      Router.stop();
    },

    render: function render() {
      var route = Router.getRouteAtDepth(0);
      return route ? React.createElement(route.handler, this.props) : null;
    }

  });

  Router.clearAllRoutes();

  if (options.routes) Router.addRoutes(options.routes);

  return Router;
}

module.exports = createRouter;
}).call(this,require('_process'))

},{"./Cancellation":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/Cancellation.js","./History":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/History.js","./Match":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/Match.js","./PathUtils":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/PathUtils.js","./PropTypes":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/PropTypes.js","./Redirect":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/Redirect.js","./Route":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/Route.js","./ScrollHistory":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/ScrollHistory.js","./Transition":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/Transition.js","./actions/LocationActions":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/actions/LocationActions.js","./behaviors/ImitateBrowserBehavior":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/behaviors/ImitateBrowserBehavior.js","./createRoutesFromReactChildren":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/createRoutesFromReactChildren.js","./isReactChildren":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/isReactChildren.js","./locations/HashLocation":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/locations/HashLocation.js","./locations/HistoryLocation":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/locations/HistoryLocation.js","./locations/RefreshLocation":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/locations/RefreshLocation.js","./locations/StaticLocation":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/locations/StaticLocation.js","./supportsHistory":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/supportsHistory.js","_process":"/Users/mikemsrk/goflux/pub/node_modules/browserify/node_modules/process/browser.js","react":"react","react/lib/ExecutionEnvironment":"/Users/mikemsrk/goflux/pub/node_modules/react/lib/ExecutionEnvironment.js","react/lib/invariant":"/Users/mikemsrk/goflux/pub/node_modules/react/lib/invariant.js","react/lib/warning":"/Users/mikemsrk/goflux/pub/node_modules/react/lib/warning.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/createRoutesFromReactChildren.js":[function(require,module,exports){
/* jshint -W084 */
'use strict';

var React = require('react');
var assign = require('react/lib/Object.assign');
var warning = require('react/lib/warning');
var DefaultRoute = require('./components/DefaultRoute');
var NotFoundRoute = require('./components/NotFoundRoute');
var Redirect = require('./components/Redirect');
var Route = require('./Route');

function checkPropTypes(componentName, propTypes, props) {
  componentName = componentName || 'UnknownComponent';

  for (var propName in propTypes) {
    if (propTypes.hasOwnProperty(propName)) {
      var error = propTypes[propName](props, propName, componentName);

      if (error instanceof Error) warning(false, error.message);
    }
  }
}

function createRouteOptions(props) {
  var options = assign({}, props);
  var handler = options.handler;

  if (handler) {
    options.onEnter = handler.willTransitionTo;
    options.onLeave = handler.willTransitionFrom;
  }

  return options;
}

function createRouteFromReactElement(element) {
  if (!React.isValidElement(element)) {
    return;
  }var type = element.type;
  var props = assign({}, type.defaultProps, element.props);

  if (type.propTypes) checkPropTypes(type.displayName, type.propTypes, props);

  if (type === DefaultRoute) {
    return Route.createDefaultRoute(createRouteOptions(props));
  }if (type === NotFoundRoute) {
    return Route.createNotFoundRoute(createRouteOptions(props));
  }if (type === Redirect) {
    return Route.createRedirect(createRouteOptions(props));
  }return Route.createRoute(createRouteOptions(props), function () {
    if (props.children) createRoutesFromReactChildren(props.children);
  });
}

/**
 * Creates and returns an array of routes created from the given
 * ReactChildren, all of which should be one of <Route>, <DefaultRoute>,
 * <NotFoundRoute>, or <Redirect>, e.g.:
 *
 *   var { createRoutesFromReactChildren, Route, Redirect } = require('react-router');
 *
 *   var routes = createRoutesFromReactChildren(
 *     <Route path="/" handler={App}>
 *       <Route name="user" path="/user/:userId" handler={User}>
 *         <Route name="task" path="tasks/:taskId" handler={Task}/>
 *         <Redirect from="todos/:taskId" to="task"/>
 *       </Route>
 *     </Route>
 *   );
 */
function createRoutesFromReactChildren(children) {
  var routes = [];

  React.Children.forEach(children, function (child) {
    if (child = createRouteFromReactElement(child)) routes.push(child);
  });

  return routes;
}

module.exports = createRoutesFromReactChildren;
},{"./Route":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/Route.js","./components/DefaultRoute":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/components/DefaultRoute.js","./components/NotFoundRoute":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/components/NotFoundRoute.js","./components/Redirect":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/components/Redirect.js","react":"react","react/lib/Object.assign":"/Users/mikemsrk/goflux/pub/node_modules/react/lib/Object.assign.js","react/lib/warning":"/Users/mikemsrk/goflux/pub/node_modules/react/lib/warning.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/getWindowScrollPosition.js":[function(require,module,exports){
'use strict';

var invariant = require('react/lib/invariant');
var canUseDOM = require('react/lib/ExecutionEnvironment').canUseDOM;

/**
 * Returns the current scroll position of the window as { x, y }.
 */
function getWindowScrollPosition() {
  invariant(canUseDOM, 'Cannot get current scroll position without a DOM');

  return {
    x: window.pageXOffset || document.documentElement.scrollLeft,
    y: window.pageYOffset || document.documentElement.scrollTop
  };
}

module.exports = getWindowScrollPosition;
},{"react/lib/ExecutionEnvironment":"/Users/mikemsrk/goflux/pub/node_modules/react/lib/ExecutionEnvironment.js","react/lib/invariant":"/Users/mikemsrk/goflux/pub/node_modules/react/lib/invariant.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/index.js":[function(require,module,exports){
'use strict';

exports.DefaultRoute = require('./components/DefaultRoute');
exports.Link = require('./components/Link');
exports.NotFoundRoute = require('./components/NotFoundRoute');
exports.Redirect = require('./components/Redirect');
exports.Route = require('./components/Route');
exports.ActiveHandler = require('./components/RouteHandler');
exports.RouteHandler = exports.ActiveHandler;

exports.HashLocation = require('./locations/HashLocation');
exports.HistoryLocation = require('./locations/HistoryLocation');
exports.RefreshLocation = require('./locations/RefreshLocation');
exports.StaticLocation = require('./locations/StaticLocation');
exports.TestLocation = require('./locations/TestLocation');

exports.ImitateBrowserBehavior = require('./behaviors/ImitateBrowserBehavior');
exports.ScrollToTopBehavior = require('./behaviors/ScrollToTopBehavior');

exports.History = require('./History');
exports.Navigation = require('./Navigation');
exports.State = require('./State');

exports.createRoute = require('./Route').createRoute;
exports.createDefaultRoute = require('./Route').createDefaultRoute;
exports.createNotFoundRoute = require('./Route').createNotFoundRoute;
exports.createRedirect = require('./Route').createRedirect;
exports.createRoutesFromReactChildren = require('./createRoutesFromReactChildren');

exports.create = require('./createRouter');
exports.run = require('./runRouter');
},{"./History":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/History.js","./Navigation":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/Navigation.js","./Route":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/Route.js","./State":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/State.js","./behaviors/ImitateBrowserBehavior":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/behaviors/ImitateBrowserBehavior.js","./behaviors/ScrollToTopBehavior":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/behaviors/ScrollToTopBehavior.js","./components/DefaultRoute":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/components/DefaultRoute.js","./components/Link":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/components/Link.js","./components/NotFoundRoute":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/components/NotFoundRoute.js","./components/Redirect":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/components/Redirect.js","./components/Route":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/components/Route.js","./components/RouteHandler":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/components/RouteHandler.js","./createRouter":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/createRouter.js","./createRoutesFromReactChildren":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/createRoutesFromReactChildren.js","./locations/HashLocation":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/locations/HashLocation.js","./locations/HistoryLocation":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/locations/HistoryLocation.js","./locations/RefreshLocation":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/locations/RefreshLocation.js","./locations/StaticLocation":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/locations/StaticLocation.js","./locations/TestLocation":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/locations/TestLocation.js","./runRouter":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/runRouter.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/isReactChildren.js":[function(require,module,exports){
'use strict';

var React = require('react');

function isValidChild(object) {
  return object == null || React.isValidElement(object);
}

function isReactChildren(object) {
  return isValidChild(object) || Array.isArray(object) && object.every(isValidChild);
}

module.exports = isReactChildren;
},{"react":"react"}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/locations/HashLocation.js":[function(require,module,exports){
'use strict';

var LocationActions = require('../actions/LocationActions');
var History = require('../History');

var _listeners = [];
var _isListening = false;
var _actionType;

function notifyChange(type) {
  if (type === LocationActions.PUSH) History.length += 1;

  var change = {
    path: HashLocation.getCurrentPath(),
    type: type
  };

  _listeners.forEach(function (listener) {
    listener.call(HashLocation, change);
  });
}

function ensureSlash() {
  var path = HashLocation.getCurrentPath();

  if (path.charAt(0) === '/') {
    return true;
  }HashLocation.replace('/' + path);

  return false;
}

function onHashChange() {
  if (ensureSlash()) {
    // If we don't have an _actionType then all we know is the hash
    // changed. It was probably caused by the user clicking the Back
    // button, but may have also been the Forward button or manual
    // manipulation. So just guess 'pop'.
    var curActionType = _actionType;
    _actionType = null;
    notifyChange(curActionType || LocationActions.POP);
  }
}

/**
 * A Location that uses `window.location.hash`.
 */
var HashLocation = {

  addChangeListener: function addChangeListener(listener) {
    _listeners.push(listener);

    // Do this BEFORE listening for hashchange.
    ensureSlash();

    if (!_isListening) {
      if (window.addEventListener) {
        window.addEventListener('hashchange', onHashChange, false);
      } else {
        window.attachEvent('onhashchange', onHashChange);
      }

      _isListening = true;
    }
  },

  removeChangeListener: function removeChangeListener(listener) {
    _listeners = _listeners.filter(function (l) {
      return l !== listener;
    });

    if (_listeners.length === 0) {
      if (window.removeEventListener) {
        window.removeEventListener('hashchange', onHashChange, false);
      } else {
        window.removeEvent('onhashchange', onHashChange);
      }

      _isListening = false;
    }
  },

  push: function push(path) {
    _actionType = LocationActions.PUSH;
    window.location.hash = path;
  },

  replace: function replace(path) {
    _actionType = LocationActions.REPLACE;
    window.location.replace(window.location.pathname + window.location.search + '#' + path);
  },

  pop: function pop() {
    _actionType = LocationActions.POP;
    History.back();
  },

  getCurrentPath: function getCurrentPath() {
    return decodeURI(
    // We can't use window.location.hash here because it's not
    // consistent across browsers - Firefox will pre-decode it!
    window.location.href.split('#')[1] || '');
  },

  toString: function toString() {
    return '<HashLocation>';
  }

};

module.exports = HashLocation;
},{"../History":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/History.js","../actions/LocationActions":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/actions/LocationActions.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/locations/HistoryLocation.js":[function(require,module,exports){
'use strict';

var LocationActions = require('../actions/LocationActions');
var History = require('../History');

var _listeners = [];
var _isListening = false;

function notifyChange(type) {
  var change = {
    path: HistoryLocation.getCurrentPath(),
    type: type
  };

  _listeners.forEach(function (listener) {
    listener.call(HistoryLocation, change);
  });
}

function onPopState(event) {
  if (event.state === undefined) {
    return;
  } // Ignore extraneous popstate events in WebKit.

  notifyChange(LocationActions.POP);
}

/**
 * A Location that uses HTML5 history.
 */
var HistoryLocation = {

  addChangeListener: function addChangeListener(listener) {
    _listeners.push(listener);

    if (!_isListening) {
      if (window.addEventListener) {
        window.addEventListener('popstate', onPopState, false);
      } else {
        window.attachEvent('onpopstate', onPopState);
      }

      _isListening = true;
    }
  },

  removeChangeListener: function removeChangeListener(listener) {
    _listeners = _listeners.filter(function (l) {
      return l !== listener;
    });

    if (_listeners.length === 0) {
      if (window.addEventListener) {
        window.removeEventListener('popstate', onPopState, false);
      } else {
        window.removeEvent('onpopstate', onPopState);
      }

      _isListening = false;
    }
  },

  push: function push(path) {
    window.history.pushState({ path: path }, '', path);
    History.length += 1;
    notifyChange(LocationActions.PUSH);
  },

  replace: function replace(path) {
    window.history.replaceState({ path: path }, '', path);
    notifyChange(LocationActions.REPLACE);
  },

  pop: History.back,

  getCurrentPath: function getCurrentPath() {
    return decodeURI(window.location.pathname + window.location.search);
  },

  toString: function toString() {
    return '<HistoryLocation>';
  }

};

module.exports = HistoryLocation;
},{"../History":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/History.js","../actions/LocationActions":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/actions/LocationActions.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/locations/RefreshLocation.js":[function(require,module,exports){
'use strict';

var HistoryLocation = require('./HistoryLocation');
var History = require('../History');

/**
 * A Location that uses full page refreshes. This is used as
 * the fallback for HistoryLocation in browsers that do not
 * support the HTML5 history API.
 */
var RefreshLocation = {

  push: function push(path) {
    window.location = path;
  },

  replace: function replace(path) {
    window.location.replace(path);
  },

  pop: History.back,

  getCurrentPath: HistoryLocation.getCurrentPath,

  toString: function toString() {
    return '<RefreshLocation>';
  }

};

module.exports = RefreshLocation;
},{"../History":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/History.js","./HistoryLocation":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/locations/HistoryLocation.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/locations/StaticLocation.js":[function(require,module,exports){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var invariant = require('react/lib/invariant');

function throwCannotModify() {
  invariant(false, 'You cannot modify a static location');
}

/**
 * A location that only ever contains a single path. Useful in
 * stateless environments like servers where there is no path history,
 * only the path that was used in the request.
 */

var StaticLocation = (function () {
  function StaticLocation(path) {
    _classCallCheck(this, StaticLocation);

    this.path = path;
  }

  _createClass(StaticLocation, [{
    key: 'getCurrentPath',
    value: function getCurrentPath() {
      return this.path;
    }
  }, {
    key: 'toString',
    value: function toString() {
      return '<StaticLocation path="' + this.path + '">';
    }
  }]);

  return StaticLocation;
})();

// TODO: Include these in the above class definition
// once we can use ES7 property initializers.
// https://github.com/babel/babel/issues/619

StaticLocation.prototype.push = throwCannotModify;
StaticLocation.prototype.replace = throwCannotModify;
StaticLocation.prototype.pop = throwCannotModify;

module.exports = StaticLocation;
},{"react/lib/invariant":"/Users/mikemsrk/goflux/pub/node_modules/react/lib/invariant.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/locations/TestLocation.js":[function(require,module,exports){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var invariant = require('react/lib/invariant');
var LocationActions = require('../actions/LocationActions');
var History = require('../History');

/**
 * A location that is convenient for testing and does not require a DOM.
 */

var TestLocation = (function () {
  function TestLocation(history) {
    _classCallCheck(this, TestLocation);

    this.history = history || [];
    this.listeners = [];
    this._updateHistoryLength();
  }

  _createClass(TestLocation, [{
    key: 'needsDOM',
    get: function () {
      return false;
    }
  }, {
    key: '_updateHistoryLength',
    value: function _updateHistoryLength() {
      History.length = this.history.length;
    }
  }, {
    key: '_notifyChange',
    value: function _notifyChange(type) {
      var change = {
        path: this.getCurrentPath(),
        type: type
      };

      for (var i = 0, len = this.listeners.length; i < len; ++i) this.listeners[i].call(this, change);
    }
  }, {
    key: 'addChangeListener',
    value: function addChangeListener(listener) {
      this.listeners.push(listener);
    }
  }, {
    key: 'removeChangeListener',
    value: function removeChangeListener(listener) {
      this.listeners = this.listeners.filter(function (l) {
        return l !== listener;
      });
    }
  }, {
    key: 'push',
    value: function push(path) {
      this.history.push(path);
      this._updateHistoryLength();
      this._notifyChange(LocationActions.PUSH);
    }
  }, {
    key: 'replace',
    value: function replace(path) {
      invariant(this.history.length, 'You cannot replace the current path with no history');

      this.history[this.history.length - 1] = path;

      this._notifyChange(LocationActions.REPLACE);
    }
  }, {
    key: 'pop',
    value: function pop() {
      this.history.pop();
      this._updateHistoryLength();
      this._notifyChange(LocationActions.POP);
    }
  }, {
    key: 'getCurrentPath',
    value: function getCurrentPath() {
      return this.history[this.history.length - 1];
    }
  }, {
    key: 'toString',
    value: function toString() {
      return '<TestLocation>';
    }
  }]);

  return TestLocation;
})();

module.exports = TestLocation;
},{"../History":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/History.js","../actions/LocationActions":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/actions/LocationActions.js","react/lib/invariant":"/Users/mikemsrk/goflux/pub/node_modules/react/lib/invariant.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/runRouter.js":[function(require,module,exports){
'use strict';

var createRouter = require('./createRouter');

/**
 * A high-level convenience method that creates, configures, and
 * runs a router in one shot. The method signature is:
 *
 *   Router.run(routes[, location ], callback);
 *
 * Using `window.location.hash` to manage the URL, you could do:
 *
 *   Router.run(routes, function (Handler) {
 *     React.render(<Handler/>, document.body);
 *   });
 * 
 * Using HTML5 history and a custom "cursor" prop:
 * 
 *   Router.run(routes, Router.HistoryLocation, function (Handler) {
 *     React.render(<Handler cursor={cursor}/>, document.body);
 *   });
 *
 * Returns the newly created router.
 *
 * Note: If you need to specify further options for your router such
 * as error/abort handling or custom scroll behavior, use Router.create
 * instead.
 *
 *   var router = Router.create(options);
 *   router.run(function (Handler) {
 *     // ...
 *   });
 */
function runRouter(routes, location, callback) {
  if (typeof location === 'function') {
    callback = location;
    location = null;
  }

  var router = createRouter({
    routes: routes,
    location: location
  });

  router.run(callback);

  return router;
}

module.exports = runRouter;
},{"./createRouter":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/createRouter.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/supportsHistory.js":[function(require,module,exports){
'use strict';

function supportsHistory() {
  /*! taken from modernizr
   * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
   * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
   * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
   */
  var ua = navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
    return false;
  }
  return window.history && 'pushState' in window.history;
}

module.exports = supportsHistory;
},{}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/node_modules/object-assign/index.js":[function(require,module,exports){
'use strict';

function ToObject(val) {
	if (val == null) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

module.exports = Object.assign || function (target, source) {
	var from;
	var keys;
	var to = ToObject(target);

	for (var s = 1; s < arguments.length; s++) {
		from = arguments[s];
		keys = Object.keys(Object(from));

		for (var i = 0; i < keys.length; i++) {
			to[keys[i]] = from[keys[i]];
		}
	}

	return to;
};

},{}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/node_modules/qs/index.js":[function(require,module,exports){
module.exports = require('./lib/');

},{"./lib/":"/Users/mikemsrk/goflux/pub/node_modules/react-router/node_modules/qs/lib/index.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/node_modules/qs/lib/index.js":[function(require,module,exports){
// Load modules

var Stringify = require('./stringify');
var Parse = require('./parse');


// Declare internals

var internals = {};


module.exports = {
    stringify: Stringify,
    parse: Parse
};

},{"./parse":"/Users/mikemsrk/goflux/pub/node_modules/react-router/node_modules/qs/lib/parse.js","./stringify":"/Users/mikemsrk/goflux/pub/node_modules/react-router/node_modules/qs/lib/stringify.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/node_modules/qs/lib/parse.js":[function(require,module,exports){
// Load modules

var Utils = require('./utils');


// Declare internals

var internals = {
    delimiter: '&',
    depth: 5,
    arrayLimit: 20,
    parameterLimit: 1000
};


internals.parseValues = function (str, options) {

    var obj = {};
    var parts = str.split(options.delimiter, options.parameterLimit === Infinity ? undefined : options.parameterLimit);

    for (var i = 0, il = parts.length; i < il; ++i) {
        var part = parts[i];
        var pos = part.indexOf(']=') === -1 ? part.indexOf('=') : part.indexOf(']=') + 1;

        if (pos === -1) {
            obj[Utils.decode(part)] = '';
        }
        else {
            var key = Utils.decode(part.slice(0, pos));
            var val = Utils.decode(part.slice(pos + 1));

            if (Object.prototype.hasOwnProperty(key)) {
                continue;
            }

            if (!obj.hasOwnProperty(key)) {
                obj[key] = val;
            }
            else {
                obj[key] = [].concat(obj[key]).concat(val);
            }
        }
    }

    return obj;
};


internals.parseObject = function (chain, val, options) {

    if (!chain.length) {
        return val;
    }

    var root = chain.shift();

    var obj = {};
    if (root === '[]') {
        obj = [];
        obj = obj.concat(internals.parseObject(chain, val, options));
    }
    else {
        var cleanRoot = root[0] === '[' && root[root.length - 1] === ']' ? root.slice(1, root.length - 1) : root;
        var index = parseInt(cleanRoot, 10);
        var indexString = '' + index;
        if (!isNaN(index) &&
            root !== cleanRoot &&
            indexString === cleanRoot &&
            index >= 0 &&
            index <= options.arrayLimit) {

            obj = [];
            obj[index] = internals.parseObject(chain, val, options);
        }
        else {
            obj[cleanRoot] = internals.parseObject(chain, val, options);
        }
    }

    return obj;
};


internals.parseKeys = function (key, val, options) {

    if (!key) {
        return;
    }

    // The regex chunks

    var parent = /^([^\[\]]*)/;
    var child = /(\[[^\[\]]*\])/g;

    // Get the parent

    var segment = parent.exec(key);

    // Don't allow them to overwrite object prototype properties

    if (Object.prototype.hasOwnProperty(segment[1])) {
        return;
    }

    // Stash the parent if it exists

    var keys = [];
    if (segment[1]) {
        keys.push(segment[1]);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while ((segment = child.exec(key)) !== null && i < options.depth) {

        ++i;
        if (!Object.prototype.hasOwnProperty(segment[1].replace(/\[|\]/g, ''))) {
            keys.push(segment[1]);
        }
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return internals.parseObject(keys, val, options);
};


module.exports = function (str, options) {

    if (str === '' ||
        str === null ||
        typeof str === 'undefined') {

        return {};
    }

    options = options || {};
    options.delimiter = typeof options.delimiter === 'string' || Utils.isRegExp(options.delimiter) ? options.delimiter : internals.delimiter;
    options.depth = typeof options.depth === 'number' ? options.depth : internals.depth;
    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : internals.arrayLimit;
    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : internals.parameterLimit;

    var tempObj = typeof str === 'string' ? internals.parseValues(str, options) : str;
    var obj = {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0, il = keys.length; i < il; ++i) {
        var key = keys[i];
        var newObj = internals.parseKeys(key, tempObj[key], options);
        obj = Utils.merge(obj, newObj);
    }

    return Utils.compact(obj);
};

},{"./utils":"/Users/mikemsrk/goflux/pub/node_modules/react-router/node_modules/qs/lib/utils.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/node_modules/qs/lib/stringify.js":[function(require,module,exports){
// Load modules

var Utils = require('./utils');


// Declare internals

var internals = {
    delimiter: '&',
    arrayPrefixGenerators: {
        brackets: function (prefix, key) {
            return prefix + '[]';
        },
        indices: function (prefix, key) {
            return prefix + '[' + key + ']';
        },
        repeat: function (prefix, key) {
            return prefix;
        }
    }
};


internals.stringify = function (obj, prefix, generateArrayPrefix) {

    if (Utils.isBuffer(obj)) {
        obj = obj.toString();
    }
    else if (obj instanceof Date) {
        obj = obj.toISOString();
    }
    else if (obj === null) {
        obj = '';
    }

    if (typeof obj === 'string' ||
        typeof obj === 'number' ||
        typeof obj === 'boolean') {

        return [encodeURIComponent(prefix) + '=' + encodeURIComponent(obj)];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys = Object.keys(obj);
    for (var i = 0, il = objKeys.length; i < il; ++i) {
        var key = objKeys[i];
        if (Array.isArray(obj)) {
            values = values.concat(internals.stringify(obj[key], generateArrayPrefix(prefix, key), generateArrayPrefix));
        }
        else {
            values = values.concat(internals.stringify(obj[key], prefix + '[' + key + ']', generateArrayPrefix));
        }
    }

    return values;
};


module.exports = function (obj, options) {

    options = options || {};
    var delimiter = typeof options.delimiter === 'undefined' ? internals.delimiter : options.delimiter;

    var keys = [];

    if (typeof obj !== 'object' ||
        obj === null) {

        return '';
    }

    var arrayFormat;
    if (options.arrayFormat in internals.arrayPrefixGenerators) {
        arrayFormat = options.arrayFormat;
    }
    else if ('indices' in options) {
        arrayFormat = options.indices ? 'indices' : 'repeat';
    }
    else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = internals.arrayPrefixGenerators[arrayFormat];

    var objKeys = Object.keys(obj);
    for (var i = 0, il = objKeys.length; i < il; ++i) {
        var key = objKeys[i];
        keys = keys.concat(internals.stringify(obj[key], key, generateArrayPrefix));
    }

    return keys.join(delimiter);
};

},{"./utils":"/Users/mikemsrk/goflux/pub/node_modules/react-router/node_modules/qs/lib/utils.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/node_modules/qs/lib/utils.js":[function(require,module,exports){
// Load modules


// Declare internals

var internals = {};


exports.arrayToObject = function (source) {

    var obj = {};
    for (var i = 0, il = source.length; i < il; ++i) {
        if (typeof source[i] !== 'undefined') {

            obj[i] = source[i];
        }
    }

    return obj;
};


exports.merge = function (target, source) {

    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (Array.isArray(target)) {
            target.push(source);
        }
        else {
            target[source] = true;
        }

        return target;
    }

    if (typeof target !== 'object') {
        target = [target].concat(source);
        return target;
    }

    if (Array.isArray(target) &&
        !Array.isArray(source)) {

        target = exports.arrayToObject(target);
    }

    var keys = Object.keys(source);
    for (var k = 0, kl = keys.length; k < kl; ++k) {
        var key = keys[k];
        var value = source[key];

        if (!target[key]) {
            target[key] = value;
        }
        else {
            target[key] = exports.merge(target[key], value);
        }
    }

    return target;
};


exports.decode = function (str) {

    try {
        return decodeURIComponent(str.replace(/\+/g, ' '));
    } catch (e) {
        return str;
    }
};


exports.compact = function (obj, refs) {

    if (typeof obj !== 'object' ||
        obj === null) {

        return obj;
    }

    refs = refs || [];
    var lookup = refs.indexOf(obj);
    if (lookup !== -1) {
        return refs[lookup];
    }

    refs.push(obj);

    if (Array.isArray(obj)) {
        var compacted = [];

        for (var i = 0, il = obj.length; i < il; ++i) {
            if (typeof obj[i] !== 'undefined') {
                compacted.push(obj[i]);
            }
        }

        return compacted;
    }

    var keys = Object.keys(obj);
    for (i = 0, il = keys.length; i < il; ++i) {
        var key = keys[i];
        obj[key] = exports.compact(obj[key], refs);
    }

    return obj;
};


exports.isRegExp = function (obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};


exports.isBuffer = function (obj) {

    if (obj === null ||
        typeof obj === 'undefined') {

        return false;
    }

    return !!(obj.constructor &&
        obj.constructor.isBuffer &&
        obj.constructor.isBuffer(obj));
};

},{}],"/Users/mikemsrk/goflux/pub/node_modules/react/lib/ExecutionEnvironment.js":[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ExecutionEnvironment
 */

/*jslint evil: true */

"use strict";

var canUseDOM = !!(
  (typeof window !== 'undefined' &&
  window.document && window.document.createElement)
);

/**
 * Simple, lightweight module assisting with the detection and context of
 * Worker. Helps avoid circular dependencies and allows code to reason about
 * whether or not they are in a Worker, even if they never include the main
 * `ReactWorker` dependency.
 */
var ExecutionEnvironment = {

  canUseDOM: canUseDOM,

  canUseWorkers: typeof Worker !== 'undefined',

  canUseEventListeners:
    canUseDOM && !!(window.addEventListener || window.attachEvent),

  canUseViewport: canUseDOM && !!window.screen,

  isInWorker: !canUseDOM // For now, this is true - might change in the future.

};

module.exports = ExecutionEnvironment;

},{}],"/Users/mikemsrk/goflux/pub/node_modules/react/lib/Object.assign.js":[function(require,module,exports){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Object.assign
 */

// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.assign

'use strict';

function assign(target, sources) {
  if (target == null) {
    throw new TypeError('Object.assign target cannot be null or undefined');
  }

  var to = Object(target);
  var hasOwnProperty = Object.prototype.hasOwnProperty;

  for (var nextIndex = 1; nextIndex < arguments.length; nextIndex++) {
    var nextSource = arguments[nextIndex];
    if (nextSource == null) {
      continue;
    }

    var from = Object(nextSource);

    // We don't currently support accessors nor proxies. Therefore this
    // copy cannot throw. If we ever supported this then we must handle
    // exceptions and side-effects. We don't support symbols so they won't
    // be transferred.

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
  }

  return to;
}

module.exports = assign;

},{}],"/Users/mikemsrk/goflux/pub/node_modules/react/lib/emptyFunction.js":[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule emptyFunction
 */

function makeEmptyFunction(arg) {
  return function() {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
function emptyFunction() {}

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function() { return this; };
emptyFunction.thatReturnsArgument = function(arg) { return arg; };

module.exports = emptyFunction;

},{}],"/Users/mikemsrk/goflux/pub/node_modules/react/lib/invariant.js":[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule invariant
 */

"use strict";

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if ("production" !== process.env.NODE_ENV) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        'Invariant Violation: ' +
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

}).call(this,require('_process'))

},{"_process":"/Users/mikemsrk/goflux/pub/node_modules/browserify/node_modules/process/browser.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react/lib/warning.js":[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule warning
 */

"use strict";

var emptyFunction = require("./emptyFunction");

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if ("production" !== process.env.NODE_ENV) {
  warning = function(condition, format ) {for (var args=[],$__0=2,$__1=arguments.length;$__0<$__1;$__0++) args.push(arguments[$__0]);
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || /^[s\W]*$/.test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function()  {return args[argIndex++];});
      console.warn(message);
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;

}).call(this,require('_process'))

},{"./emptyFunction":"/Users/mikemsrk/goflux/pub/node_modules/react/lib/emptyFunction.js","_process":"/Users/mikemsrk/goflux/pub/node_modules/browserify/node_modules/process/browser.js"}],"/Users/mikemsrk/goflux/pub/specs/App-spec.js":[function(require,module,exports){
var App = require('./../app/App.js');
var TestUtils = require('react-addons').TestUtils;

describe("App", function() {

  it("should be wrapped with a div", function() {
    var app = TestUtils.renderIntoDocument(App());
    expect(app.getDOMNode().tagName).toEqual('DIV');
  });

});
},{"./../app/App.js":"/Users/mikemsrk/goflux/pub/app/App.js","react-addons":"react-addons"}]},{},["/Users/mikemsrk/goflux/pub/specs/App-spec.js"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvQXBwLmpzIiwiYXBwL2FjdGlvbnMvQXV0aEFjdGlvbnMuanMiLCJhcHAvYWN0aW9ucy9Db21tZW50QWN0aW9ucy5qcyIsImFwcC9hY3Rpb25zL1Byb2ZpbGVBY3Rpb25zLmpzIiwiYXBwL2FjdGlvbnMvVGhyZWFkQWN0aW9ucy5qcyIsImFwcC9jb21wb25lbnRzL2NvbW1lbnQvY29tbWVudC1pbnB1dC5qcyIsImFwcC9jb21wb25lbnRzL2NvbW1lbnQvY29tbWVudC1pdGVtLmpzIiwiYXBwL2NvbXBvbmVudHMvY29tbWVudC9jb21tZW50LWxpc3QuanMiLCJhcHAvY29tcG9uZW50cy9mcm9udC9mcm9udC10aHJlYWRpdGVtLmpzIiwiYXBwL2NvbXBvbmVudHMvZnJvbnQvZnJvbnQtdGhyZWFkcy5qcyIsImFwcC9jb21wb25lbnRzL2Zyb250L2Zyb250LmpzIiwiYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4tZm9ybS5qcyIsImFwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmpzIiwiYXBwL2NvbXBvbmVudHMvbG9nb3V0L2xvZ291dC5qcyIsImFwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuanMiLCJhcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUtYmlvLmpzIiwiYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLXRocmVhZGl0ZW0uanMiLCJhcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUtdGhyZWFkcy5qcyIsImFwcC9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5qcyIsImFwcC9jb21wb25lbnRzL3NpZ251cC9zaWdudXAtZm9ybS5qcyIsImFwcC9jb21wb25lbnRzL3NpZ251cC9zaWdudXAuanMiLCJhcHAvY29tcG9uZW50cy90aHJlYWQvbmV3LmpzIiwiYXBwL2NvbXBvbmVudHMvdGhyZWFkL3RocmVhZC5qcyIsImFwcC9jb25zdGFudHMvQXV0aENvbnN0YW50cy5qcyIsImFwcC9jb25zdGFudHMvQ29tbWVudENvbnN0YW50cy5qcyIsImFwcC9jb25zdGFudHMvUHJvZmlsZUNvbnN0YW50cy5qcyIsImFwcC9jb25zdGFudHMvVGhyZWFkQ29uc3RhbnRzLmpzIiwiYXBwL2Rpc3BhdGNoZXJzL0FwcERpc3BhdGNoZXIuanMiLCJhcHAvc2VydmljZXMvQXV0aFNlcnZpY2UuanMiLCJhcHAvc2VydmljZXMvQ29tbWVudFNlcnZpY2UuanMiLCJhcHAvc2VydmljZXMvUHJvZmlsZVNlcnZpY2UuanMiLCJhcHAvc2VydmljZXMvVGhyZWFkU2VydmljZS5qcyIsImFwcC9zdG9yZXMvQXV0aFN0b3JlLmpzIiwiYXBwL3N0b3Jlcy9Db21tZW50U3RvcmUuanMiLCJhcHAvc3RvcmVzL1Byb2ZpbGVTdG9yZS5qcyIsImFwcC9zdG9yZXMvVGhyZWFkU3RvcmUuanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1yZXNvbHZlL2VtcHR5LmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2V2ZW50cy9ldmVudHMuanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL2ZsdXgvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZmx1eC9saWIvRGlzcGF0Y2hlci5qcyIsIm5vZGVfbW9kdWxlcy9mbHV4L2xpYi9pbnZhcmlhbnQuanMiLCJub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1pbnRsL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWludGwvbGliL2NvbXBvbmVudHMvZGF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1pbnRsL2xpYi9jb21wb25lbnRzL2h0bWwtbWVzc2FnZS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1pbnRsL2xpYi9jb21wb25lbnRzL21lc3NhZ2UuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtaW50bC9saWIvY29tcG9uZW50cy9udW1iZXIuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtaW50bC9saWIvY29tcG9uZW50cy9yZWxhdGl2ZS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1pbnRsL2xpYi9jb21wb25lbnRzL3RpbWUuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtaW50bC9saWIvZW4uanMiLCJub2RlX21vZHVsZXMvcmVhY3QtaW50bC9saWIvZXNjYXBlLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWludGwvbGliL21peGluLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWludGwvbGliL3JlYWN0LWludGwuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtaW50bC9saWIvcmVhY3QuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtaW50bC9ub2RlX21vZHVsZXMvaW50bC1mb3JtYXQtY2FjaGUvaW5kZXguanMiLCJub2RlX21vZHVsZXMvcmVhY3QtaW50bC9ub2RlX21vZHVsZXMvaW50bC1mb3JtYXQtY2FjaGUvbGliL2VzNS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1pbnRsL25vZGVfbW9kdWxlcy9pbnRsLWZvcm1hdC1jYWNoZS9saWIvbWVtb2l6ZXIuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtaW50bC9ub2RlX21vZHVsZXMvaW50bC1tZXNzYWdlZm9ybWF0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWludGwvbm9kZV9tb2R1bGVzL2ludGwtbWVzc2FnZWZvcm1hdC9saWIvY29tcGlsZXIuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtaW50bC9ub2RlX21vZHVsZXMvaW50bC1tZXNzYWdlZm9ybWF0L2xpYi9jb3JlLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWludGwvbm9kZV9tb2R1bGVzL2ludGwtbWVzc2FnZWZvcm1hdC9saWIvZW4uanMiLCJub2RlX21vZHVsZXMvcmVhY3QtaW50bC9ub2RlX21vZHVsZXMvaW50bC1tZXNzYWdlZm9ybWF0L2xpYi9lczUuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtaW50bC9ub2RlX21vZHVsZXMvaW50bC1tZXNzYWdlZm9ybWF0L2xpYi9tYWluLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWludGwvbm9kZV9tb2R1bGVzL2ludGwtbWVzc2FnZWZvcm1hdC9saWIvdXRpbHMuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtaW50bC9ub2RlX21vZHVsZXMvaW50bC1tZXNzYWdlZm9ybWF0L25vZGVfbW9kdWxlcy9pbnRsLW1lc3NhZ2Vmb3JtYXQtcGFyc2VyL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWludGwvbm9kZV9tb2R1bGVzL2ludGwtbWVzc2FnZWZvcm1hdC9ub2RlX21vZHVsZXMvaW50bC1tZXNzYWdlZm9ybWF0LXBhcnNlci9saWIvcGFyc2VyLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWludGwvbm9kZV9tb2R1bGVzL2ludGwtcmVsYXRpdmVmb3JtYXQvaW5kZXguanMiLCJub2RlX21vZHVsZXMvcmVhY3QtaW50bC9ub2RlX21vZHVsZXMvaW50bC1yZWxhdGl2ZWZvcm1hdC9saWIvY29yZS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1pbnRsL25vZGVfbW9kdWxlcy9pbnRsLXJlbGF0aXZlZm9ybWF0L2xpYi9kaWZmLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWludGwvbm9kZV9tb2R1bGVzL2ludGwtcmVsYXRpdmVmb3JtYXQvbGliL2VzNS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL0NhbmNlbGxhdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL0hpc3RvcnkuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9NYXRjaC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL05hdmlnYXRpb24uanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9QYXRoVXRpbHMuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9Qcm9wVHlwZXMuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9SZWRpcmVjdC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL1JvdXRlLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvU2Nyb2xsSGlzdG9yeS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL1N0YXRlLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvVHJhbnNpdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2FjdGlvbnMvTG9jYXRpb25BY3Rpb25zLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvYmVoYXZpb3JzL0ltaXRhdGVCcm93c2VyQmVoYXZpb3IuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9iZWhhdmlvcnMvU2Nyb2xsVG9Ub3BCZWhhdmlvci5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2NvbXBvbmVudHMvQ29udGV4dFdyYXBwZXIuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9jb21wb25lbnRzL0RlZmF1bHRSb3V0ZS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2NvbXBvbmVudHMvTGluay5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2NvbXBvbmVudHMvTm90Rm91bmRSb3V0ZS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2NvbXBvbmVudHMvUmVkaXJlY3QuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9jb21wb25lbnRzL1JvdXRlLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvY29tcG9uZW50cy9Sb3V0ZUhhbmRsZXIuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9jcmVhdGVSb3V0ZXIuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9jcmVhdGVSb3V0ZXNGcm9tUmVhY3RDaGlsZHJlbi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2dldFdpbmRvd1Njcm9sbFBvc2l0aW9uLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9pc1JlYWN0Q2hpbGRyZW4uanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9sb2NhdGlvbnMvSGFzaExvY2F0aW9uLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvbG9jYXRpb25zL0hpc3RvcnlMb2NhdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2xvY2F0aW9ucy9SZWZyZXNoTG9jYXRpb24uanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9sb2NhdGlvbnMvU3RhdGljTG9jYXRpb24uanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9sb2NhdGlvbnMvVGVzdExvY2F0aW9uLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvcnVuUm91dGVyLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvc3VwcG9ydHNIaXN0b3J5LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbm9kZV9tb2R1bGVzL3FzL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9ub2RlX21vZHVsZXMvcXMvbGliL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9ub2RlX21vZHVsZXMvcXMvbGliL3BhcnNlLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9ub2RlX21vZHVsZXMvcXMvbGliL3N0cmluZ2lmeS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbm9kZV9tb2R1bGVzL3FzL2xpYi91dGlscy5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC9saWIvRXhlY3V0aW9uRW52aXJvbm1lbnQuanMiLCJub2RlX21vZHVsZXMvcmVhY3QvbGliL09iamVjdC5hc3NpZ24uanMiLCJub2RlX21vZHVsZXMvcmVhY3QvbGliL2VtcHR5RnVuY3Rpb24uanMiLCJub2RlX21vZHVsZXMvcmVhY3QvbGliL2ludmFyaWFudC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC9saWIvd2FybmluZy5qcyIsInNwZWNzL0FwcC1zcGVjLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsSUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3U0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzV6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUMxRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdk1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDM0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDamdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSb3V0ZXIgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKTtcblxudmFyIE5hdmJhciA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyJyk7XG52YXIgUHJvZmlsZSA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUnKTtcbnZhciBGcm9udCA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9mcm9udC9mcm9udCcpO1xudmFyIExvZ2luID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2xvZ2luL2xvZ2luJyk7XG52YXIgTG9nb3V0ID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2xvZ291dC9sb2dvdXQnKTtcbnZhciBTaWdudXAgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvc2lnbnVwL3NpZ251cCcpO1xudmFyIE5ld1RocmVhZCA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy90aHJlYWQvbmV3Jyk7XG52YXIgVGhyZWFkID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL3RocmVhZC90aHJlYWQnKTtcblxudmFyIFJvdXRlID0gUm91dGVyLlJvdXRlO1xudmFyIERlZmF1bHRSb3V0ZSA9IFJvdXRlci5EZWZhdWx0Um91dGU7XG52YXIgUm91dGVIYW5kbGVyID0gUm91dGVyLlJvdXRlSGFuZGxlcjtcbnZhciBOYXZpZ2F0aW9uID0gUm91dGVyLk5hdmlnYXRpb247XG52YXIgTGluayA9IFJvdXRlci5MaW5rO1xuXG52YXIgQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIkFwcFwiLFxuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4ge1xuICAgICAgLy8gbG9nZ2VkSW46IEF1dGgubG9nZ2VkSW4oKVxuICAgIH07XG4gIH0sXG5cbiAgc2V0U3RhdGVPbkF1dGg6IGZ1bmN0aW9uKGxvZ2dlZEluKXtcbiAgICAvLyB0aGlzLnNldFN0YXRlKHtcbiAgICAvLyAgIGxvZ2dlZEluOiBsb2dnZWRJblxuICAgIC8vIH0pO1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxNb3VudDogZnVuY3Rpb24oKXtcbiAgICAvLyBBdXRoLm9uQ2hhbmdlID0gdGhpcy5zZXRTdGF0ZU9uQXV0aDtcbiAgfSxcbiAgXG4gIHJlbmRlcjogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gKFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImNvbnRhaW5lci1mbHVpZFwifSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTmF2YmFyLCBudWxsKSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGVIYW5kbGVyLCBudWxsKVxuICAgICAgKVxuICAgICk7XG4gIH1cbn0pO1xuXG52YXIgcm91dGVzID0gKFxuICBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7cGF0aDogXCIvXCIsIGhhbmRsZXI6IEFwcH0sIFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGVmYXVsdFJvdXRlLCB7aGFuZGxlcjogRnJvbnR9KSwgXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwge3BhdGg6IFwicHJvZmlsZVwiLCBoYW5kbGVyOiBQcm9maWxlfSksIFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHtwYXRoOiBcImxvZ2luXCIsIGhhbmRsZXI6IExvZ2lufSksIFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHtwYXRoOiBcImxvZ291dFwiLCBoYW5kbGVyOiBMb2dvdXR9KSwgXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwge3BhdGg6IFwic2lnbnVwXCIsIGhhbmRsZXI6IFNpZ251cH0pLCBcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7cGF0aDogXCJuZXdcIiwgaGFuZGxlcjogTmV3VGhyZWFkfSlcbiAgKVxuKTtcblxuXG5Sb3V0ZXIucnVuKHJvdXRlcywgUm91dGVyLkhhc2hMb2NhdGlvbiwgZnVuY3Rpb24oUm9vdCl7XG4gIFJlYWN0LnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KFJvb3QsIG51bGwpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xufSk7XG5cdFxubW9kdWxlLmV4cG9ydHMgPSBBcHA7XG4iLCJ2YXIgQXBwRGlzcGF0Y2hlciA9IHJlcXVpcmUoJy4uL2Rpc3BhdGNoZXJzL0FwcERpc3BhdGNoZXInKTtcbnZhciBBdXRoQ29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzL0F1dGhDb25zdGFudHMnKTtcblxudmFyIEF1dGhBY3Rpb25zID0ge1xuICBzaWdudXA6IGZ1bmN0aW9uKGRhdGEpe1xuICAgIEFwcERpc3BhdGNoZXIuaGFuZGxlQWN0aW9uKHtcbiAgICAgIGFjdGlvblR5cGU6IEF1dGhDb25zdGFudHMuU0lHTlVQLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pO1xuICB9LFxuICBsb2dpbjogZnVuY3Rpb24oZGF0YSl7XG4gICAgQXBwRGlzcGF0Y2hlci5oYW5kbGVBY3Rpb24oe1xuICAgICAgYWN0aW9uVHlwZTogQXV0aENvbnN0YW50cy5MT0dJTixcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KTtcbiAgfSxcbiAgbG9nb3V0OiBmdW5jdGlvbigpe1xuICAgIEFwcERpc3BhdGNoZXIuaGFuZGxlQWN0aW9uKHtcbiAgICAgIGFjdGlvblR5cGU6IEF1dGhDb25zdGFudHMuTE9HT1VULFxuICAgICAgZGF0YTogbnVsbFxuICAgIH0pO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEF1dGhBY3Rpb25zOyIsInZhciBBcHBEaXNwYXRjaGVyID0gcmVxdWlyZSgnLi4vZGlzcGF0Y2hlcnMvQXBwRGlzcGF0Y2hlcicpO1xudmFyIENvbW1lbnRDb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMvQ29tbWVudENvbnN0YW50cycpO1xuXG52YXIgQ29tbWVudEFjdGlvbnMgPSB7XG4gIGFkZDogZnVuY3Rpb24oZGF0YSl7XG4gICAgQXBwRGlzcGF0Y2hlci5oYW5kbGVBY3Rpb24oe1xuICAgICAgYWN0aW9uVHlwZTogQ29tbWVudENvbnN0YW50cy5QT1NUX0FERCxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KTtcbiAgfSxcbiAgLy8gRmV0Y2hlcyBhIHBhZ2Ugb2YgQ29tbWVudHNcbiAgZmV0Y2hQYWdlOiBmdW5jdGlvbihkYXRhKXtcbiAgICBBcHBEaXNwYXRjaGVyLmhhbmRsZUFjdGlvbih7XG4gICAgICBhY3Rpb25UeXBlOiBDb21tZW50Q29uc3RhbnRzLlBPU1RfRkVUQ0hQQUdFLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pO1xuICB9LFxuXG4gIGZldGNoVXNlclBhZ2U6IGZ1bmN0aW9uKGRhdGEpe1xuICAgIEFwcERpc3BhdGNoZXIuaGFuZGxlQWN0aW9uKHtcbiAgICAgIGFjdGlvblR5cGU6IENvbW1lbnRDb25zdGFudHMuUE9TVF9GRVRDSFVTRVJQQUdFLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pO1xuICB9LFxuXG4gIC8vIEZldGNoZXMgb25lIENvbW1lbnQgb25seVxuICBmZXRjaENvbW1lbnQ6IGZ1bmN0aW9uKGRhdGEpe1xuICAgIEFwcERpc3BhdGNoZXIuaGFuZGxlQWN0aW9uKHtcbiAgICAgIGFjdGlvblR5cGU6IENvbW1lbnRDb25zdGFudHMuUE9TVF9GRVRDSENPTU1FTlQsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSk7XG4gIH0sXG4gIC8vIFJhdGUgYSBDb21tZW50IHVwIG9yIGRvd25cbiAgdm90ZTogZnVuY3Rpb24oZGF0YSl7XG4gICAgQXBwRGlzcGF0Y2hlci5oYW5kbGVBY3Rpb24oe1xuICAgICAgYWN0aW9uVHlwZTogQ29tbWVudENvbnN0YW50cy5QT1NUX1ZPVEUsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSk7XG4gIH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb21tZW50QWN0aW9uczsiLCJ2YXIgQXBwRGlzcGF0Y2hlciA9IHJlcXVpcmUoJy4uL2Rpc3BhdGNoZXJzL0FwcERpc3BhdGNoZXInKTtcbnZhciBQcm9maWxlQ29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzL1Byb2ZpbGVDb25zdGFudHMnKTtcblxudmFyIFByb2ZpbGVBY3Rpb25zID0ge1xuICBmZXRjaDogZnVuY3Rpb24oKXtcbiAgICBBcHBEaXNwYXRjaGVyLmhhbmRsZUFjdGlvbih7XG4gICAgICBhY3Rpb25UeXBlOiBQcm9maWxlQ29uc3RhbnRzLkZFVENIXG4gICAgfSk7XG4gIH0sXG4gIHVwZGF0ZTogZnVuY3Rpb24oZGF0YSl7XG4gICAgQXBwRGlzcGF0Y2hlci5oYW5kbGVBY3Rpb24oe1xuICAgICAgYWN0aW9uVHlwZTogUHJvZmlsZUNvbnN0YW50cy5VUERBVEUsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSk7XG4gIH0sXG4gIGRlbGV0ZTogZnVuY3Rpb24oKXtcbiAgICBBcHBEaXNwYXRjaGVyLmhhbmRsZUFjdGlvbih7XG4gICAgICBhY3Rpb25UeXBlOiBQcm9maWxlQ29uc3RhbnRzLkRFTEVURSxcbiAgICAgIGRhdGE6IG51bGxcbiAgICB9KTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm9maWxlQWN0aW9uczsiLCJ2YXIgQXBwRGlzcGF0Y2hlciA9IHJlcXVpcmUoJy4uL2Rpc3BhdGNoZXJzL0FwcERpc3BhdGNoZXInKTtcbnZhciBUaHJlYWRDb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMvVGhyZWFkQ29uc3RhbnRzJyk7XG5cbnZhciBUaHJlYWRBY3Rpb25zID0ge1xuICBhZGQ6IGZ1bmN0aW9uKGRhdGEpe1xuICAgIEFwcERpc3BhdGNoZXIuaGFuZGxlQWN0aW9uKHtcbiAgICAgIGFjdGlvblR5cGU6IFRocmVhZENvbnN0YW50cy5BREQsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSk7XG4gIH0sXG4gIC8vIEZldGNoZXMgYSBwYWdlIG9mIHRocmVhZHNcbiAgZmV0Y2hQYWdlOiBmdW5jdGlvbihkYXRhKXtcbiAgICBBcHBEaXNwYXRjaGVyLmhhbmRsZUFjdGlvbih7XG4gICAgICBhY3Rpb25UeXBlOiBUaHJlYWRDb25zdGFudHMuRkVUQ0hQQUdFLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pO1xuICB9LFxuXG4gIGZldGNoVXNlclBhZ2U6IGZ1bmN0aW9uKGRhdGEpe1xuICAgIEFwcERpc3BhdGNoZXIuaGFuZGxlQWN0aW9uKHtcbiAgICAgIGFjdGlvblR5cGU6IFRocmVhZENvbnN0YW50cy5GRVRDSFVTRVJQQUdFLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pO1xuICB9LFxuXG4gIC8vIEZldGNoZXMgb25lIHRocmVhZCBvbmx5XG4gIGZldGNoVGhyZWFkOiBmdW5jdGlvbihkYXRhKXtcbiAgICBBcHBEaXNwYXRjaGVyLmhhbmRsZUFjdGlvbih7XG4gICAgICBhY3Rpb25UeXBlOiBUaHJlYWRDb25zdGFudHMuRkVUQ0hUSFJFQUQsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSk7XG4gIH0sXG4gIC8vIFJhdGUgYSB0aHJlYWQgdXAgb3IgZG93blxuICB2b3RlOiBmdW5jdGlvbihkYXRhKXtcbiAgICBBcHBEaXNwYXRjaGVyLmhhbmRsZUFjdGlvbih7XG4gICAgICBhY3Rpb25UeXBlOiBUaHJlYWRDb25zdGFudHMuVk9URSxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KTtcbiAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRocmVhZEFjdGlvbnM7IiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBDb21tZW50U3RvcmUgPSByZXF1aXJlKCcuLi8uLi9zdG9yZXMvQ29tbWVudFN0b3JlJyk7XG52YXIgQ29tbWVudEFjdGlvbnMgPSByZXF1aXJlKCcuLi8uLi9hY3Rpb25zL0NvbW1lbnRBY3Rpb25zJyk7XG52YXIgQXV0aFN0b3JlID0gcmVxdWlyZSgnLi4vLi4vc3RvcmVzL0F1dGhTdG9yZScpO1xuXG52YXIgTmV3Q29tbWVudCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJOZXdDb21tZW50XCIsXG5cbiAgYWRkQ29tbWVudDogZnVuY3Rpb24oZSl7XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gU2VuZCBhY3Rpb24gdG8gdXBkYXRlIHVzZXIgaW5mb3JtYXRpb25cbiAgICB2YXIgYm9keSA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmcy5ib2R5KS52YWx1ZS50cmltKCk7XG5cbiAgICBpZighYm9keSl7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5vbkFkZENvbW1lbnQoYm9keSk7XG4gICAgUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzLmJvZHkpLnZhbHVlID0gJyc7XG5cbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAoXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwibmV3Q29tbWVudFwifSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIHtvblN1Ym1pdDogdGhpcy5hZGRDb21tZW50fSwgXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHt0eXBlOiBcInRleHRhcmVhXCIsIGNsYXNzTmFtZTogXCJmb3JtLWNvbnRyb2xcIiwgcGxhY2Vob2xkZXI6IFwiY29tbWVudC4uLlwiLCByZWY6IFwiYm9keVwifSksIFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwge3R5cGU6IFwic3VibWl0XCIsIGNsYXNzTmFtZTogXCJidG4gYnRuLXN1Y2Nlc3NcIiwgdmFsdWU6IFwiU3VibWl0XCJ9LCBcIlN1Ym1pdFwiKVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTmV3Q29tbWVudDsiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJlYWN0SW50bCA9IHJlcXVpcmUoJ3JlYWN0LWludGwnKTtcbnZhciBGb3JtYXR0ZWRSZWxhdGl2ZSA9IFJlYWN0SW50bC5Gb3JtYXR0ZWRSZWxhdGl2ZTtcbnZhciBGb3JtYXR0ZWREYXRlID0gUmVhY3RJbnRsLkZvcm1hdHRlZERhdGU7XG5cbi8vIE15U1FMIERhdGUgLT4gSlMgRGF0ZVxudmFyIGZvcm1hdERhdGUgPSBmdW5jdGlvbihzdHIpe1xuICB2YXIgZGF0ZVBhcnRzID0gc3RyLnNwbGl0KFwiLVwiKTtcbiAgdmFyIHRpbWVzID0gZGF0ZVBhcnRzWzJdLnNwbGl0KFwiOlwiKTtcbiAgdmFyIGhvdXIgPSB0aW1lc1swXS5zdWJzdHIoMyk7XG4gIHZhciBtaW51dGVzID0gdGltZXNbMV07XG4gIHZhciBzZWNvbmRzID0gdGltZXNbMl0uc3Vic3RyKDAsMik7XG5cbiAgcmV0dXJuIG5ldyBEYXRlKGRhdGVQYXJ0c1swXSwgZGF0ZVBhcnRzWzFdIC0gMSwgZGF0ZVBhcnRzWzJdLnN1YnN0cigwLDIpLGhvdXIsbWludXRlcyxzZWNvbmRzKTtcbn07XG5cbi8vIFNob3J0ZW5zIHRoZSBib2R5IHRvIGZpdCBpbiB0aGUgdGFibGVcbnZhciBmb3JtYXRCb2R5ID0gZnVuY3Rpb24oc3RyKXtcbiAgdmFyIHNob3J0U3RyID0gc3RyLnN1YnN0cigwLDQwKTtcbiAgaWYoc3RyLmxlbmd0aCA+PSA0MCl7XG4gICAgc2hvcnRTdHIgKz0gJy4uLic7XG4gIH1cbiAgcmV0dXJuIHNob3J0U3RyO1xufTtcblxuLy8gIFRocmVhZCBjb21tZW50IGl0ZW1cbnZhciBDb21tZW50SXRlbSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJDb21tZW50SXRlbVwiLFxuXG4gIHVwVm90ZTogZnVuY3Rpb24oKXtcbiAgICB0aGlzLnByb3BzLm9uVXBWb3RlKHRoaXMucHJvcHMuaXRlbS5jb21tZW50X2lkKTtcbiAgICBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnMudXApLmNsYXNzTmFtZSA9ICcnO1xuICAgIFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmcy5kb3duKS5jbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLWNoZXZyb24tZG93blwiXG4gICAgdGhpcy5wcm9wcy5pdGVtLnJhdGluZysrO1xuICB9LFxuXG4gIGRvd25Wb3RlOiBmdW5jdGlvbigpe1xuICAgIHRoaXMucHJvcHMub25Eb3duVm90ZSh0aGlzLnByb3BzLml0ZW0uY29tbWVudF9pZCk7XG4gICAgUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzLmRvd24pLmNsYXNzTmFtZSA9ICcnO1xuICAgIFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmcy51cCkuY2xhc3NOYW1lID0gXCJnbHlwaGljb24gZ2x5cGhpY29uLWNoZXZyb24tdXBcIjtcbiAgICB0aGlzLnByb3BzLml0ZW0ucmF0aW5nLS07XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgY3JlYXRlZCA9IGZvcm1hdERhdGUodGhpcy5wcm9wcy5pdGVtLmNyZWF0aW9uX3RpbWUpO1xuICAgIHZhciB1cGRhdGVkID0gZm9ybWF0RGF0ZSh0aGlzLnByb3BzLml0ZW0ubGFzdF91cGRhdGVfdGltZSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRyXCIsIG51bGwsIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgbnVsbCwgXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwge2hyZWY6IFwiI1wiLCByZWY6IFwiZG93blwiLCBjbGFzc05hbWU6IFwiZ2x5cGhpY29uIGdseXBoaWNvbi1jaGV2cm9uLWRvd25cIiwgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiwgb25DbGljazogdGhpcy5kb3duVm90ZX0pLCBcIiBcIiwgdGhpcy5wcm9wcy5pdGVtLnJhdGluZywgXCIgXCIsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtocmVmOiBcIiNcIiwgcmVmOiBcInVwXCIsIGNsYXNzTmFtZTogXCJnbHlwaGljb24gZ2x5cGhpY29uLWNoZXZyb24tdXBcIiwgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiwgb25DbGljazogdGhpcy51cFZvdGV9KSksIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgbnVsbCwgdGhpcy5wcm9wcy5pdGVtLmNvbnRlbnRzKSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBudWxsLCBcIlVzZXI6IFwiLCB0aGlzLnByb3BzLml0ZW0udXNlcl9pZCksIFxuXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBudWxsLCBcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1hdHRlZERhdGUsIHtcbiAgICAgICAgICAgIHZhbHVlOiBjcmVhdGVkLCBcbiAgICAgICAgICAgIGRheTogXCJudW1lcmljXCIsIFxuICAgICAgICAgICAgbW9udGg6IFwibG9uZ1wiLCBcbiAgICAgICAgICAgIHllYXI6IFwibnVtZXJpY1wifSlcbiAgICAgICAgKSwgXG5cbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIG51bGwsIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1hdHRlZFJlbGF0aXZlLCB7XG4gICAgICAgICAgICB2YWx1ZTogdXBkYXRlZH0pXG4gICAgICAgIClcblxuICAgICAgKVxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1lbnRJdGVtOyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgQ29tbWVudFN0b3JlID0gcmVxdWlyZSgnLi4vLi4vc3RvcmVzL0NvbW1lbnRTdG9yZScpO1xudmFyIENvbW1lbnRBY3Rpb25zID0gcmVxdWlyZSgnLi4vLi4vYWN0aW9ucy9Db21tZW50QWN0aW9ucycpO1xudmFyIENvbW1lbnRJdGVtID0gcmVxdWlyZSgnLi9jb21tZW50LWl0ZW0nKTtcbnZhciBOZXdDb21tZW50ID0gcmVxdWlyZSgnLi9jb21tZW50LWlucHV0Jyk7XG5cbi8vIEZyb250IHBhZ2UgQ29tbWVudHNcbi8vIEZldGNoIENvbW1lbnRzIGJ5IHJhdGluZyBieSBwYWdlXG5cbnZhciBDb21tZW50TGlzdCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJDb21tZW50TGlzdFwiLFxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhZ2U6IDEsXG4gICAgICBjb21tZW50czogW3tcbiAgICAgICAgYm9keTogJ2Zha2UgYm9keScsXG4gICAgICAgIHJhdGluZzogNSxcbiAgICAgICAgY3JlYXRpb25fdGltZTogXCIyMDE1LTA3LTE5VDEwOjMxOjA0WlwiLFxuICAgICAgICBsYXN0X3VwZGF0ZV90aW1lOiBcIjIwMTUtMDctMjBUMTI6MzE6MDBaXCIsXG4gICAgICAgIGNvbW1lbnRfaWQ6IDQsXG4gICAgICAgIHVzZXJfaWQ6IDFcbiAgICAgIH1dXG4gICAgfTtcbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKXtcbiAgICBDb21tZW50QWN0aW9ucy5mZXRjaFBhZ2Uoe3RocmVhZElkOiB0aGlzLnByb3BzLnRocmVhZElkLCBwYWdlOnRoaXMuc3RhdGUucGFnZX0pO1xuICAgIENvbW1lbnRTdG9yZS5hZGRDaGFuZ2VMaXN0ZW5lcih0aGlzLl9vbkNoYW5nZSk7XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uKCl7XG4gICAgQ29tbWVudFN0b3JlLnJlbW92ZUNoYW5nZUxpc3RlbmVyKHRoaXMuX29uQ2hhbmdlKTtcbiAgfSxcblxuICBfb25DaGFuZ2U6IGZ1bmN0aW9uKCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjb21tZW50czogQ29tbWVudFN0b3JlLmdldENvbW1lbnRzKCkudGhyZWFkUG9zdHNcbiAgICB9KTtcbiAgfSxcblxuICBhZGRDb21tZW50OiBmdW5jdGlvbihib2R5KXtcbiAgICBDb21tZW50QWN0aW9ucy5hZGQoe3RocmVhZElkOnRoaXMucHJvcHMudGhyZWFkSWQsIGJvZHk6Ym9keX0pO1xuICAgIENvbW1lbnRBY3Rpb25zLmZldGNoUGFnZSh7dGhyZWFkSWQ6IHRoaXMucHJvcHMudGhyZWFkSWQsIHBhZ2U6dGhpcy5zdGF0ZS5wYWdlfSk7XG4gIH0sXG5cbiAgdXBWb3RlOiBmdW5jdGlvbihpZCl7XG4gICAgLy8gVE9ETzogY2FsbCBDb21tZW50IGFjdGlvbiB0byB1cHZvdGVcbiAgICAvLyBDb21tZW50QWN0aW9ucy52b3RlKHtjb21tZW50X2lkOmlkLHNjb3JlOjF9KTtcbiAgfSxcblxuICBkb3duVm90ZTogZnVuY3Rpb24oaWQpe1xuICAgIC8vIFRPRE86IGNhbGwgQ29tbWVudCBhY3Rpb24gdG8gZG93bnZvdGVcbiAgICAvLyBDb21tZW50QWN0aW9ucy52b3RlKHtjb21tZW50X2lkOmlkLHNjb3JlOi0xfSk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcIkNvbW1lbnRzXCJ9LCBcbiAgICAgICAgXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChOZXdDb21tZW50LCB7b25BZGRDb21tZW50OiB0aGlzLmFkZENvbW1lbnR9KSwgXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgzXCIsIG51bGwsIFwiQ29tbWVudHNcIiksIFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiLCB7Y2xhc3NOYW1lOiBcInRhYmxlIHRhYmxlLWhvdmVyXCJ9LCBcbiAgICAgICAgICBcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0aGVhZFwiLCBudWxsLCBcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRyXCIsIG51bGwsIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiLCBudWxsLCBcIlJhdGluZ1wiKSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRoXCIsIG51bGwsIFwiQm9keVwiKSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRoXCIsIG51bGwsIFwiU3VibWl0dGVkXCIpLCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGhcIiwgbnVsbCwgXCJDcmVhdGVkXCIpLCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGhcIiwgbnVsbCwgXCJVcGRhdGVkXCIpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICksIFxuXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIiwgbnVsbCwgXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY29tbWVudHMubWFwKGZ1bmN0aW9uKGl0ZW0pe1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb21tZW50SXRlbSwge1xuICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJjb21tZW50XCIsIFxuICAgICAgICAgICAgICAgICAgICAgIG9uR29UaHJlYWQ6IHRoaXMuZ29UaHJlYWQsIFxuICAgICAgICAgICAgICAgICAgICAgIG9uVXBWb3RlOiB0aGlzLnVwVm90ZSwgXG4gICAgICAgICAgICAgICAgICAgICAgb25Eb3duVm90ZTogdGhpcy5kb3duVm90ZSwgXG4gICAgICAgICAgICAgICAgICAgICAga2V5OiBpdGVtLnBvc3RfaWQsIFxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW06IGl0ZW19KVxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9LHRoaXMpXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgKVxuICAgICAgICAgIFxuICAgICAgKVxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1lbnRMaXN0OyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RJbnRsID0gcmVxdWlyZSgncmVhY3QtaW50bCcpO1xudmFyIEZvcm1hdHRlZFJlbGF0aXZlID0gUmVhY3RJbnRsLkZvcm1hdHRlZFJlbGF0aXZlO1xudmFyIEZvcm1hdHRlZERhdGUgPSBSZWFjdEludGwuRm9ybWF0dGVkRGF0ZTtcblxuLy8gTXlTUUwgRGF0ZSAtPiBKUyBEYXRlXG52YXIgZm9ybWF0RGF0ZSA9IGZ1bmN0aW9uKHN0cil7XG4gIHZhciBkYXRlUGFydHMgPSBzdHIuc3BsaXQoXCItXCIpO1xuICB2YXIgdGltZXMgPSBkYXRlUGFydHNbMl0uc3BsaXQoXCI6XCIpO1xuICB2YXIgaG91ciA9IHRpbWVzWzBdLnN1YnN0cigzKTtcbiAgdmFyIG1pbnV0ZXMgPSB0aW1lc1sxXTtcbiAgdmFyIHNlY29uZHMgPSB0aW1lc1syXS5zdWJzdHIoMCwyKTtcblxuICByZXR1cm4gbmV3IERhdGUoZGF0ZVBhcnRzWzBdLCBkYXRlUGFydHNbMV0gLSAxLCBkYXRlUGFydHNbMl0uc3Vic3RyKDAsMiksaG91cixtaW51dGVzLHNlY29uZHMpO1xufTtcblxuLy8gU2hvcnRlbnMgdGhlIGJvZHkgdG8gZml0IGluIHRoZSB0YWJsZVxudmFyIGZvcm1hdEJvZHkgPSBmdW5jdGlvbihzdHIpe1xuICB2YXIgc2hvcnRTdHIgPSBzdHIuc3Vic3RyKDAsNDApO1xuICBpZihzdHIubGVuZ3RoID49IDQwKXtcbiAgICBzaG9ydFN0ciArPSAnLi4uJztcbiAgfVxuICByZXR1cm4gc2hvcnRTdHI7XG59O1xuXG4vLyBGcm9udCBwYWdlIHRocmVhZCBsaXN0XG52YXIgVGhyZWFkSXRlbSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJUaHJlYWRJdGVtXCIsXG5cbiAgdXBWb3RlOiBmdW5jdGlvbigpe1xuICAgIHRoaXMucHJvcHMub25VcFZvdGUodGhpcy5wcm9wcy5pdGVtLnRocmVhZF9pZCk7XG4gICAgUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzLnVwKS5jbGFzc05hbWUgPSAnJztcbiAgICBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnMuZG93bikuY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1jaGV2cm9uLWRvd25cIlxuICAgIHRoaXMucHJvcHMuaXRlbS5yYXRpbmcrKztcbiAgfSxcblxuICBkb3duVm90ZTogZnVuY3Rpb24oKXtcbiAgICB0aGlzLnByb3BzLm9uRG93blZvdGUodGhpcy5wcm9wcy5pdGVtLnRocmVhZF9pZCk7XG4gICAgUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzLmRvd24pLmNsYXNzTmFtZSA9ICcnO1xuICAgIFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmcy51cCkuY2xhc3NOYW1lID0gXCJnbHlwaGljb24gZ2x5cGhpY29uLWNoZXZyb24tdXBcIjtcbiAgICB0aGlzLnByb3BzLml0ZW0ucmF0aW5nLS07XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAvLyBUT0RPOiBDbGlja2luZyBvbiB0aXRsZSB0YWtlcyB5b3UgdG8gaW5kaXZpZHVhbCB0aHJlYWQgcGFnZVxuICAgIHZhciBjcmVhdGVkID0gZm9ybWF0RGF0ZSh0aGlzLnByb3BzLml0ZW0uY3JlYXRpb25fdGltZSk7XG4gICAgdmFyIHVwZGF0ZWQgPSBmb3JtYXREYXRlKHRoaXMucHJvcHMuaXRlbS5sYXN0X3VwZGF0ZV90aW1lKTtcbiAgICB2YXIgYm9keSA9IGZvcm1hdEJvZHkodGhpcy5wcm9wcy5pdGVtLmJvZHkpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0clwiLCBudWxsLCBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIG51bGwsIFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtocmVmOiBcIiNcIiwgcmVmOiBcImRvd25cIiwgY2xhc3NOYW1lOiBcImdseXBoaWNvbiBnbHlwaGljb24tY2hldnJvbi1kb3duXCIsIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIG9uQ2xpY2s6IHRoaXMuZG93blZvdGV9KSwgXCIgXCIsIHRoaXMucHJvcHMuaXRlbS5yYXRpbmcsIFwiIFwiLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7aHJlZjogXCIjXCIsIHJlZjogXCJ1cFwiLCBjbGFzc05hbWU6IFwiZ2x5cGhpY29uIGdseXBoaWNvbi1jaGV2cm9uLXVwXCIsIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIG9uQ2xpY2s6IHRoaXMudXBWb3RlfSkpLCBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtocmVmOiBcIiMvdGhyZWFkL1wiK3RoaXMucHJvcHMuaXRlbS50aHJlYWRfaWR9LCB0aGlzLnByb3BzLml0ZW0udGl0bGUpKSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBudWxsLCBib2R5KSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBudWxsLCBcIlVzZXI6IFwiLCB0aGlzLnByb3BzLml0ZW0udXNlcl9pZCksIFxuXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBudWxsLCBcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1hdHRlZERhdGUsIHtcbiAgICAgICAgICAgIHZhbHVlOiBjcmVhdGVkLCBcbiAgICAgICAgICAgIGRheTogXCJudW1lcmljXCIsIFxuICAgICAgICAgICAgbW9udGg6IFwibG9uZ1wiLCBcbiAgICAgICAgICAgIHllYXI6IFwibnVtZXJpY1wifSlcbiAgICAgICAgKSwgXG5cbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIG51bGwsIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1hdHRlZFJlbGF0aXZlLCB7XG4gICAgICAgICAgICB2YWx1ZTogdXBkYXRlZH0pXG4gICAgICAgIClcblxuICAgICAgKVxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRocmVhZEl0ZW07IiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBUaHJlYWRTdG9yZSA9IHJlcXVpcmUoJy4uLy4uL3N0b3Jlcy9UaHJlYWRTdG9yZScpO1xudmFyIFRocmVhZEFjdGlvbnMgPSByZXF1aXJlKCcuLi8uLi9hY3Rpb25zL1RocmVhZEFjdGlvbnMnKTtcbnZhciBUaHJlYWRJdGVtID0gcmVxdWlyZSgnLi9mcm9udC10aHJlYWRpdGVtJyk7XG5cbi8vIEZyb250IHBhZ2UgdGhyZWFkc1xuLy8gRmV0Y2ggdGhyZWFkcyBieSByYXRpbmcgYnkgcGFnZVxuXG52YXIgVGhyZWFkcyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJUaHJlYWRzXCIsXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4ge1xuICAgICAgcGFnZTogMSxcbiAgICAgIHRocmVhZHM6IFtdXG4gICAgfTtcbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKXtcbiAgICBUaHJlYWRBY3Rpb25zLmZldGNoUGFnZSh7cGFnZTp0aGlzLnN0YXRlLnBhZ2V9KTtcbiAgICBUaHJlYWRTdG9yZS5hZGRDaGFuZ2VMaXN0ZW5lcih0aGlzLl9vbkNoYW5nZSk7XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uKCl7XG4gICAgVGhyZWFkU3RvcmUucmVtb3ZlQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25DaGFuZ2UpO1xuICB9LFxuXG4gIF9vbkNoYW5nZTogZnVuY3Rpb24oKXtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRocmVhZHM6IFRocmVhZFN0b3JlLmdldFRocmVhZHMoKS5mb3J1bVRocmVhZHNcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnRocmVhZHMpO1xuICB9LFxuXG4gIHVwVm90ZTogZnVuY3Rpb24oaWQpe1xuICAgIC8vIFRPRE86IGNhbGwgdGhyZWFkIGFjdGlvbiB0byB1cHZvdGVcbiAgICBUaHJlYWRBY3Rpb25zLnZvdGUoe3RocmVhZF9pZDppZCxzY29yZToxfSk7XG4gIH0sXG5cbiAgZG93blZvdGU6IGZ1bmN0aW9uKGlkKXtcbiAgICAvLyBUT0RPOiBjYWxsIHRocmVhZCBhY3Rpb24gdG8gZG93bnZvdGVcbiAgICBUaHJlYWRBY3Rpb25zLnZvdGUoe3RocmVhZF9pZDppZCxzY29yZTotMX0pO1xuICB9LFxuXG4gIGdvVGhyZWFkOiBmdW5jdGlvbihpZCl7XG4gICAgY29uc29sZS5sb2coJ3RyYW5zaXRpb25pbmcgdG8uLi50aHJlYWQnLGlkKTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAoXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwidGhyZWFkc1wifSwgXG4gICAgICAgIFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoM1wiLCBudWxsLCBcIkZyb250IFBhZ2VcIiksIFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiLCB7Y2xhc3NOYW1lOiBcInRhYmxlIHRhYmxlLWhvdmVyXCJ9LCBcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0aGVhZFwiLCBudWxsLCBcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRyXCIsIG51bGwsIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiLCBudWxsLCBcIlJhdGluZ1wiKSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRoXCIsIG51bGwsIFwiVGl0bGVcIiksIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiLCBudWxsLCBcIkJvZHlcIiksIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiLCBudWxsLCBcIlN1Ym1pdHRlZFwiKSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRoXCIsIG51bGwsIFwiQ3JlYXRlZFwiKSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRoXCIsIG51bGwsIFwiVXBkYXRlZFwiKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApLCBcblxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRib2R5XCIsIG51bGwsIFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnRocmVhZHMubWFwKGZ1bmN0aW9uKGl0ZW0pe1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUaHJlYWRJdGVtLCB7XG4gICAgICAgICAgICAgICAgICAgICAgcmVmOiBcInRocmVhZFwiLCBcbiAgICAgICAgICAgICAgICAgICAgICBvbkdvVGhyZWFkOiB0aGlzLmdvVGhyZWFkLCBcbiAgICAgICAgICAgICAgICAgICAgICBvblVwVm90ZTogdGhpcy51cFZvdGUsIFxuICAgICAgICAgICAgICAgICAgICAgIG9uRG93blZvdGU6IHRoaXMuZG93blZvdGUsIFxuICAgICAgICAgICAgICAgICAgICAgIGtleTogaXRlbS50aHJlYWRfaWQsIFxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW06IGl0ZW19KVxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9LHRoaXMpXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgKVxuICAgICAgICAgIFxuICAgICAgKVxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRocmVhZHM7IiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBUaHJlYWRzID0gcmVxdWlyZSgnLi9mcm9udC10aHJlYWRzJyk7XG52YXIgTGluayA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpLkxpbms7XG52YXIgQXV0aFN0b3JlID0gcmVxdWlyZSgnLi4vLi4vc3RvcmVzL0F1dGhTdG9yZScpO1xuXG52YXIgRnJvbnQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiRnJvbnRcIixcblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxvZ2dlZEluOiBBdXRoU3RvcmUubG9nZ2VkSW4oKVxuICAgIH07XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbE1vdW50OiBmdW5jdGlvbigpe1xuICAgIEF1dGhTdG9yZS5hZGRDaGFuZ2VMaXN0ZW5lcih0aGlzLl9vbkNoYW5nZSk7XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uKCl7XG4gICAgQXV0aFN0b3JlLnJlbW92ZUNoYW5nZUxpc3RlbmVyKHRoaXMuX29uQ2hhbmdlKTtcbiAgfSxcblxuICBfb25DaGFuZ2U6IGZ1bmN0aW9uKCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBsb2dnZWRJbjogQXV0aFN0b3JlLmxvZ2dlZEluKClcbiAgICB9KTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAoXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiY29sLW1kLTEyXCJ9LCBcbiAgICAgICAgdGhpcy5zdGF0ZS5sb2dnZWRJbiA/IChcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7Y2xhc3NOYW1lOiBcImJ0biBidG4taW5mb1wiLCB0bzogXCIvbmV3XCJ9LCBcIk5ld1wiKVxuICAgICAgICApOiBudWxsLCBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUaHJlYWRzLCBudWxsKVxuICAgICAgKVxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZyb250OyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUm91dGVyID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJyk7XG52YXIgTGluayA9IFJvdXRlci5MaW5rO1xuXG52YXIgTG9naW5Gb3JtID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIkxvZ2luRm9ybVwiLFxuICBoYW5kbGVTdWJtaXQ6IGZ1bmN0aW9uKGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgdXNlcm5hbWUgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnMudXNlcm5hbWUpLnZhbHVlLnRyaW0oKTtcbiAgICB2YXIgcGFzc3dvcmQgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnMucGFzc3dvcmQpLnZhbHVlLnRyaW0oKTtcbiAgICBpZighdXNlcm5hbWUgfHwgIXBhc3N3b3JkKXtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gU2VuZCByZXF1ZXN0IGJhY2sgdXAgdG8gTG9naW5cbiAgICB0aGlzLnByb3BzLm9uTG9naW5TdWJtaXQoe3VzZXJuYW1lOiB1c2VybmFtZSwgcGFzc3dvcmQ6IHBhc3N3b3JkfSk7XG4gICAgXG4gICAgUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzLnVzZXJuYW1lKS52YWx1ZSA9ICcnO1xuICAgIFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmcy5wYXNzd29yZCkudmFsdWUgPSAnJztcbiAgICByZXR1cm47XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gKFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImZvcm1cIiwge2NsYXNzTmFtZTogXCJsb2dpbkZvcm1cIiwgb25TdWJtaXQ6IHRoaXMuaGFuZGxlU3VibWl0fSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7dHlwZTogXCJ0ZXh0XCIsIGNsYXNzTmFtZTogXCJmb3JtLWNvbnRyb2xcIiwgcGxhY2Vob2xkZXI6IFwiVXNlcm5hbWVcIiwgcmVmOiBcInVzZXJuYW1lXCJ9KSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7dHlwZTogXCJwYXNzd29yZFwiLCBjbGFzc05hbWU6IFwiZm9ybS1jb250cm9sXCIsIHBsYWNlaG9sZGVyOiBcIlBhc3N3b3JkXCIsIHJlZjogXCJwYXNzd29yZFwifSksIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHtjbGFzc05hbWU6IFwiYnRuIGJ0bi1pbmZvXCIsIHRvOiBcIi9zaWdudXBcIn0sIFwiUmVnaXN0ZXJcIiksIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHt0eXBlOiBcInN1Ym1pdFwiLCBjbGFzc05hbWU6IFwiYnRuIGJ0bi1zdWNjZXNzXCIsIHZhbHVlOiBcIlN1Ym1pdFwifSwgXCJTdWJtaXRcIilcbiAgICAgIClcbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBMb2dpbkZvcm07IiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBMb2dpbkZvcm0gPSByZXF1aXJlKCcuL2xvZ2luLWZvcm0nKTtcbnZhciBBdXRoQWN0aW9ucyA9IHJlcXVpcmUoJy4uLy4uL2FjdGlvbnMvQXV0aEFjdGlvbnMnKTtcbnZhciBBdXRoU3RvcmUgPSByZXF1aXJlKCcuLi8uLi9zdG9yZXMvQXV0aFN0b3JlJyk7XG5cbnZhciBMb2dpbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJMb2dpblwiLFxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxvZ2dlZEluOiBBdXRoU3RvcmUubG9nZ2VkSW4oKSxcbiAgICAgIGVycm9yOiBBdXRoU3RvcmUuZXJyb3IoKVxuICAgIH07XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbE1vdW50OiBmdW5jdGlvbigpe1xuICAgIEF1dGhTdG9yZS5hZGRDaGFuZ2VMaXN0ZW5lcih0aGlzLl9vbkNoYW5nZSk7XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uKCl7XG4gICAgQXV0aFN0b3JlLnJlbW92ZUNoYW5nZUxpc3RlbmVyKHRoaXMuX29uQ2hhbmdlKTtcbiAgfSxcblxuICBfb25DaGFuZ2U6IGZ1bmN0aW9uKCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBsb2dnZWRJbjogQXV0aFN0b3JlLmxvZ2dlZEluKCksXG4gICAgICBlcnJvcjogQXV0aFN0b3JlLmVycm9yKClcbiAgICB9KTtcbiAgICBpZih0aGlzLnN0YXRlLmxvZ2dlZEluKXtcbiAgICAgIGxvY2F0aW9uLmhhc2ggPSAnLyc7XG4gICAgfVxuICB9LFxuXG4gIGhhbmRsZUxvZ2luU3VibWl0OiBmdW5jdGlvbih1c2VyKXtcbiAgICBBdXRoQWN0aW9ucy5sb2dpbih7dXNlcm5hbWU6dXNlci51c2VybmFtZSxwYXNzOnVzZXIucGFzc3dvcmR9KTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAoXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiQXV0aCBjZW50ZXItYmxvY2tcIn0sIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDJcIiwgbnVsbCwgXCJMb2dpblwiKSwgXG4gICAgICAgIHRoaXMuc3RhdGUubG9nZ2VkSW4gPyAoXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBcIiBZb3UgYXJlIGFscmVhZHkgbG9nZ2VkIGluIFwiKVxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExvZ2luRm9ybSwge29uTG9naW5TdWJtaXQ6IHRoaXMuaGFuZGxlTG9naW5TdWJtaXR9KVxuICAgICAgICAgICksIFxuICAgICAgICB0aGlzLnN0YXRlLmVycm9yICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCB7Y2xhc3NOYW1lOiBcImVycm9yXCJ9LCBcIkJhZCBsb2dpbiBpbmZvcm1hdGlvblwiKSlcbiAgICAgIClcbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBMb2dpbjsiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgTG9nb3V0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIkxvZ291dFwiLFxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG4gICAgLy8gVE9ETzogTW92ZSB0byBBdXRoIFN0b3JlP1xuICAgIC8vIGlmKEF1dGgubG9nZ2VkSW4oKSl7XG4gICAgLy8gICBBdXRoLmxvZ291dChmdW5jdGlvbigpe1xuICAgIC8vICAgICBsb2NhdGlvbi5oYXNoID0gJy9sb2dpbic7XG4gICAgLy8gICB9KTtcbiAgICAvLyB9XG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIGxvZ2dlZEluOiBBdXRoLmxvZ2dlZEluKClcbiAgICB9O1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAoXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiQXV0aCBjZW50ZXItYmxvY2tcIn0sIFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiTG9nb3V0IFN1Y2Nlc3NmdWwuXCIpXG4gICAgICApXG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTG9nb3V0OyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUm91dGVyID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJyk7XG52YXIgQXV0aEFjdGlvbnMgPSByZXF1aXJlKCcuLi8uLi9hY3Rpb25zL0F1dGhBY3Rpb25zJyk7XG52YXIgQXV0aFN0b3JlID0gcmVxdWlyZSgnLi4vLi4vc3RvcmVzL0F1dGhTdG9yZScpO1xudmFyIExpbmsgPSBSb3V0ZXIuTGluaztcblxuLy8gVE9ETyAtIGZhY3RvciBvdXQgbmF2YmFyIGxvZ2luIGZvcm1cblxudmFyIE5hdmJhciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJOYXZiYXJcIixcblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxvZ2dlZEluOiBBdXRoU3RvcmUubG9nZ2VkSW4oKVxuICAgIH07XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbE1vdW50OiBmdW5jdGlvbigpe1xuICAgIC8vIF9vbkNoYW5nZSBpcyBjYiBmdW5jdGlvbi5cbiAgICBBdXRoU3RvcmUuYWRkQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25DaGFuZ2UpO1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbigpe1xuICAgIEF1dGhTdG9yZS5yZW1vdmVDaGFuZ2VMaXN0ZW5lcih0aGlzLl9vbkNoYW5nZSk7XG4gIH0sXG5cbiAgX29uQ2hhbmdlOiBmdW5jdGlvbigpe1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbG9nZ2VkSW46IEF1dGhTdG9yZS5sb2dnZWRJbigpXG4gICAgfSk7XG4gICAgaWYodGhpcy5zdGF0ZS5sb2dnZWRJbil7XG4gICAgICBsb2NhdGlvbi5oYXNoID0gJy8nO1xuICAgIH1cbiAgfSxcblxuICBuYXZsb2dvdXQ6IGZ1bmN0aW9uKCl7XG4gICAgQXV0aEFjdGlvbnMubG9nb3V0KCk7XG4gIH0sXG5cbiAgaGFuZGxlU3VibWl0OiBmdW5jdGlvbihlKXtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIHVzZXJuYW1lID0gUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzLnVzZXJuYW1lKS52YWx1ZS50cmltKCk7XG4gICAgdmFyIHBhc3N3b3JkID0gUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzLnBhc3N3b3JkKS52YWx1ZS50cmltKCk7XG4gICAgaWYoIXVzZXJuYW1lIHx8ICFwYXNzd29yZCl7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIFRPRE86IHNlbmQgcmVxdWVzdCB0byBzZXJ2ZXJcbiAgICB0aGlzLmhhbmRsZUxvZ2luU3VibWl0KHt1c2VybmFtZTogdXNlcm5hbWUsIHBhc3N3b3JkOiBwYXNzd29yZH0pO1xuICAgIFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmcy51c2VybmFtZSkudmFsdWUgPSAnJztcbiAgICBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnMucGFzc3dvcmQpLnZhbHVlID0gJyc7XG4gICAgcmV0dXJuO1xuICB9LFxuXG4gIGhhbmRsZUxvZ2luU3VibWl0OiBmdW5jdGlvbih1c2VyKXtcbiAgICBBdXRoQWN0aW9ucy5sb2dpbih7dXNlcm5hbWU6dXNlci51c2VybmFtZSxwYXNzOnVzZXIucGFzc3dvcmR9KTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibmF2XCIsIHtjbGFzc05hbWU6IFwibmF2YmFyIG5hdmJhci1pbnZlcnNlXCJ9LCBcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJjb250YWluZXItZmx1aWRcIn0sIFxuXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJuYXZiYXItaGVhZGVyXCJ9LCBcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHt0eXBlOiBcImJ1dHRvblwiLCBjbGFzc05hbWU6IFwibmF2YmFyLXRvZ2dsZSBjb2xsYXBzZWRcIiwgXCJkYXRhLXRvZ2dsZVwiOiBcImNvbGxhcHNlXCIsIFwiZGF0YS10YXJnZXRcIjogXCIjYnMtZXhhbXBsZS1uYXZiYXItY29sbGFwc2UtMVwiLCBcImFyaWEtZXhwYW5kZWRcIjogXCJmYWxzZVwifSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7Y2xhc3NOYW1lOiBcInNyLW9ubHlcIn0sIFwiVG9nZ2xlIG5hdmlnYXRpb25cIiksIFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge2NsYXNzTmFtZTogXCJpY29uLWJhclwifSksIFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge2NsYXNzTmFtZTogXCJpY29uLWJhclwifSksIFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge2NsYXNzTmFtZTogXCJpY29uLWJhclwifSlcbiAgICAgICAgICApLCBcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7Y2xhc3NOYW1lOiBcIm5hdmJhci1icmFuZFwiLCBocmVmOiBcIiNcIn0sIFwiQXBwXCIpXG4gICAgICAgICksIFxuICAgICAgICBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiLCBpZDogXCJicy1leGFtcGxlLW5hdmJhci1jb2xsYXBzZS0xXCJ9LCBcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwge2NsYXNzTmFtZTogXCJuYXYgbmF2YmFyLW5hdiBuYXZiYXItcmlnaHRcIn0sIFxuXG4gICAgICAgICAgdGhpcy5zdGF0ZS5sb2dnZWRJbiA/IChcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIHtjbGFzc05hbWU6IFwibmF2YmFyLWZvcm0gbmF2YmFyLXJpZ2h0XCIsIHJvbGU6IFwibG9naW5cIn0sIFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiZm9ybS1ncm91cFwifSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7Y2xhc3NOYW1lOiBcImJ0biBidG4td2FybmluZ1wiLCB0bzogXCIvbG9nb3V0XCIsIG9uQ2xpY2s6IHRoaXMubmF2bG9nb3V0fSwgXCJMb2cgb3V0XCIpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImZvcm1cIiwge2NsYXNzTmFtZTogXCJuYXZiYXItZm9ybSBuYXZiYXItcmlnaHRcIiwgcm9sZTogXCJsb2dpblwiLCBvblN1Ym1pdDogdGhpcy5oYW5kbGVTdWJtaXR9LCBcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImZvcm0tZ3JvdXBcIn0sIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7dHlwZTogXCJ0ZXh0XCIsIGNsYXNzTmFtZTogXCJmb3JtLWNvbnRyb2xcIiwgcGxhY2Vob2xkZXI6IFwiVXNlcm5hbWVcIiwgcmVmOiBcInVzZXJuYW1lXCJ9KSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHt0eXBlOiBcInRleHRcIiwgY2xhc3NOYW1lOiBcImZvcm0tY29udHJvbFwiLCBwbGFjZWhvbGRlcjogXCJQYXNzd29yZFwiLCByZWY6IFwicGFzc3dvcmRcIn0pLCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHt0eXBlOiBcInN1Ym1pdFwiLCBjbGFzc05hbWU6IFwiYnRuIGJ0bi1zdWNjZXNzIGhpZGRlblwiLCB2YWx1ZTogXCJTdWJtaXRcIn0sIFwiU3VibWl0XCIpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApLCBcblxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtjbGFzc05hbWU6IFwiZHJvcGRvd25cIn0sIFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7aHJlZjogXCIjXCIsIGNsYXNzTmFtZTogXCJkcm9wZG93bi10b2dnbGVcIiwgXCJkYXRhLXRvZ2dsZVwiOiBcImRyb3Bkb3duXCIsIHJvbGU6IFwiYnV0dG9uXCIsIFwiYXJpYS1oYXNwb3B1cFwiOiBcInRydWVcIiwgXCJhcmlhLWV4cGFuZGVkXCI6IFwiZmFsc2VcIn0sIFwiRHJvcGRvd24gXCIsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtjbGFzc05hbWU6IFwiY2FyZXRcIn0pKSwgXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7Y2xhc3NOYW1lOiBcImRyb3Bkb3duLW1lbnVcIn0sIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7aHJlZjogXCIjXCJ9LCBcIkFjdGlvblwiKSksIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7aHJlZjogXCIjXCJ9LCBcIkFub3RoZXIgYWN0aW9uXCIpKSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtocmVmOiBcIiNcIn0sIFwiU29tZXRoaW5nIGVsc2UgaGVyZVwiKSksIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7cm9sZTogXCJzZXBhcmF0b3JcIiwgY2xhc3NOYW1lOiBcImRpdmlkZXJcIn0pLCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwge2hyZWY6IFwiI1wifSwgXCJTZXBhcmF0ZWQgbGlua1wiKSksIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7cm9sZTogXCJzZXBhcmF0b3JcIiwgY2xhc3NOYW1lOiBcImRpdmlkZXJcIn0pLCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwge2hyZWY6IFwiI1wifSwgXCJPbmUgbW9yZSBzZXBhcmF0ZWQgbGlua1wiKSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSwgXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmxvZ2dlZEluID8gKFxuICAgICAgICAgICAgICBudWxsXG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7dG86IFwiL3NpZ251cFwifSwgXCJSZWdpc3RlclwiKSlcbiAgICAgICAgICAgICksIFxuXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmxvZ2dlZEluID8gKFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7dG86IFwiL3Byb2ZpbGVcIn0sIFwiUHJvZmlsZVwiKSlcbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHt0bzogXCIvbG9naW5cIn0sIFwiTG9naW5cIikpXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICApXG4gICAgICAgIClcblxuICAgICAgKVxuICAgIClcbiAgICApXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5hdmJhcjsiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgQmlvID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIkJpb1wiLFxuICAvLyBUT0RPOiBJbmNvcnBvcmF0ZSBMYXRlciB3aGVuIEF1dGggaXMgaW4uXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpe1xuICAgIHJldHVybiB7XG4gICAgICBlZGl0aW5nOiBmYWxzZVxuICAgIH07XG4gIH0sXG5cbiAgLy8gVE9ETzogQnViYmxlIHRoaXMgdXAgdG8gcHJvZmlsZSBwYXJlbnRcbiAgZW5hYmxlRWRpdDogZnVuY3Rpb24oKXtcbiAgICAvLyBtYWtlIHRoZSBiaW8gZmllbGQgZWRpdGFibGVcbiAgICAgIC8vIHJlcGxhY2UgaXQgd2l0aCBhIGZvcm0uXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBlZGl0aW5nOiB0cnVlXG4gICAgfSlcbiAgfSxcblxuICBjYW5jZWxFZGl0OiBmdW5jdGlvbigpe1xuICAgIC8vIG1ha2UgdGhlIGJpbyBmaWVsZCBlZGl0YWJsZVxuICAgICAgLy8gcmVwbGFjZSBpdCB3aXRoIGEgZm9ybS5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGVkaXRpbmc6IGZhbHNlXG4gICAgfSlcbiAgfSxcblxuICBzYXZlRWRpdDogZnVuY3Rpb24oKXtcbiAgICB2YXIgYXZhdGFyID0gUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzLmF2YXRhcikudmFsdWUudHJpbSgpO1xuICAgIHZhciBiaW8gPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnMuYmlvKS52YWx1ZS50cmltKCk7XG5cbiAgICB2YXIgZGF0YSA9IHRoaXMucHJvcHMuaXRlbTtcbiAgICBkYXRhLmF2YXRhcl9saW5rID0gYXZhdGFyO1xuICAgIGRhdGEuYmlvID0gYmlvO1xuXG4gICAgLy8gQnViYmxlIHVwIHJlcXVlc3QgdG8gcGFyZW50XG4gICAgdGhpcy5wcm9wcy5vbkVkaXRTdWJtaXQoZGF0YSk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGVkaXRpbmc6IGZhbHNlXG4gICAgfSlcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAoXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiY29sLW1kLTNcIn0sIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDNcIiwgbnVsbCwgdGhpcy5wcm9wcy5pdGVtLnVzZXJfbmFtZSksIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDNcIiwgbnVsbCwgdGhpcy5wcm9wcy5pdGVtLmZpcnN0X25hbWUsIFwiIFwiLCB0aGlzLnByb3BzLml0ZW0ubGFzdF9uYW1lKSwgXG5cbiAgICAgICAgIXRoaXMuc3RhdGUuZWRpdGluZyA/IChcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHtzcmM6IHRoaXMucHJvcHMuaXRlbS5hdmF0YXJfbGluaywgY2xhc3NOYW1lOiBcImltZy10aHVtYm5haWxcIn0pXG4gICAgICAgICkgOiAoXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgXCJBdmF0YXIgTGluazogXCIsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7dHlwZTogXCJ0ZXh0XCIsIHJlZjogXCJhdmF0YXJcIn0pKVxuICAgICAgICApLCBcblxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBcIlJlcDogXCIsIHRoaXMucHJvcHMuaXRlbS5yZXApLCBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgXCJJZDogXCIsIHRoaXMucHJvcHMuaXRlbS51c2VyX2lkKSwgXG5cbiAgICAgICAgIXRoaXMuc3RhdGUuZWRpdGluZyA/IChcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBcIkJpbzogXCIsIHRoaXMucHJvcHMuaXRlbS5iaW8pXG4gICAgICAgICkgOiAoXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgXCJCaW86IFwiLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwge3R5cGU6IFwidGV4dFwiLCByZWY6IFwiYmlvXCJ9KSlcbiAgICAgICAgKSwgXG4gICAgICAgIFxuICAgICAgICAhdGhpcy5zdGF0ZS5lZGl0aW5nID8gKFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtjbGFzc05hbWU6IFwiYnRuIGJ0bi13YXJuaW5nXCIsIG9uQ2xpY2s6IHRoaXMuZW5hYmxlRWRpdH0sIFwiRWRpdFwiKVxuICAgICAgICApIDogKFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtjbGFzc05hbWU6IFwiYnRuIGJ0bi1zdWNjZXNzXCIsIG9uQ2xpY2s6IHRoaXMuc2F2ZUVkaXR9LCBcIlNhdmVcIilcbiAgICAgICAgKSwgXG5cbiAgICAgICAgIXRoaXMuc3RhdGUuZWRpdGluZyA/IChcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7Y2xhc3NOYW1lOiBcImJ0biBidG4tc3VjY2VzcyBoaWRkZW5cIn0pXG4gICAgICAgICkgOiAoXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwge2NsYXNzTmFtZTogXCJidG4gYnRuLWluZm9cIiwgb25DbGljazogdGhpcy5jYW5jZWxFZGl0fSwgXCJDYW5jZWxcIilcbiAgICAgICAgKVxuXG4gICAgICApXG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQmlvOyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RJbnRsID0gcmVxdWlyZSgncmVhY3QtaW50bCcpO1xudmFyIEZvcm1hdHRlZFJlbGF0aXZlID0gUmVhY3RJbnRsLkZvcm1hdHRlZFJlbGF0aXZlO1xudmFyIEZvcm1hdHRlZERhdGUgPSBSZWFjdEludGwuRm9ybWF0dGVkRGF0ZTtcblxuLy8gTXlTUUwgRGF0ZSAtPiBKUyBEYXRlXG52YXIgZm9ybWF0RGF0ZSA9IGZ1bmN0aW9uKHN0cil7XG4gIHZhciBkYXRlUGFydHMgPSBzdHIuc3BsaXQoXCItXCIpO1xuICB2YXIgdGltZXMgPSBkYXRlUGFydHNbMl0uc3BsaXQoXCI6XCIpO1xuICB2YXIgaG91ciA9IHRpbWVzWzBdLnN1YnN0cigzKTtcbiAgdmFyIG1pbnV0ZXMgPSB0aW1lc1sxXTtcbiAgdmFyIHNlY29uZHMgPSB0aW1lc1syXS5zdWJzdHIoMCwyKTtcblxuICByZXR1cm4gbmV3IERhdGUoZGF0ZVBhcnRzWzBdLCBkYXRlUGFydHNbMV0gLSAxLCBkYXRlUGFydHNbMl0uc3Vic3RyKDAsMiksaG91cixtaW51dGVzLHNlY29uZHMpO1xufTtcblxuLy8gU2hvcnRlbnMgdGhlIGJvZHkgdG8gZml0IGluIHRoZSB0YWJsZVxudmFyIGZvcm1hdEJvZHkgPSBmdW5jdGlvbihzdHIpe1xuICB2YXIgc2hvcnRTdHIgPSBzdHIuc3Vic3RyKDAsNDApO1xuICBpZihzdHIubGVuZ3RoID49IDQwKXtcbiAgICBzaG9ydFN0ciArPSAnLi4uJztcbiAgfVxuICByZXR1cm4gc2hvcnRTdHI7XG59O1xuXG4vLyBGcm9udCBwYWdlIHRocmVhZCBsaXN0XG52YXIgUHJvZmlsZVRocmVhZEl0ZW0gPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiUHJvZmlsZVRocmVhZEl0ZW1cIixcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIC8vIFRPRE86IENsaWNraW5nIG9uIHRpdGxlIHRha2VzIHlvdSB0byBpbmRpdmlkdWFsIHRocmVhZC5cbiAgICB2YXIgY3JlYXRlZCA9IGZvcm1hdERhdGUodGhpcy5wcm9wcy5pdGVtLmNyZWF0aW9uX3RpbWUpO1xuICAgIHZhciB1cGRhdGVkID0gZm9ybWF0RGF0ZSh0aGlzLnByb3BzLml0ZW0ubGFzdF91cGRhdGVfdGltZSk7XG4gICAgdmFyIGJvZHkgPSBmb3JtYXRCb2R5KHRoaXMucHJvcHMuaXRlbS5ib2R5KTtcblxuICAgIHJldHVybiAoXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidHJcIiwgbnVsbCwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBudWxsLCB0aGlzLnByb3BzLml0ZW0ucmF0aW5nKSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7aHJlZjogXCIjL3RocmVhZC9cIit0aGlzLnByb3BzLml0ZW0udGhyZWFkX2lkfSwgdGhpcy5wcm9wcy5pdGVtLnRpdGxlKSksIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgbnVsbCwgYm9keSksIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgbnVsbCwgXCJVc2VyOiBcIiwgdGhpcy5wcm9wcy5pdGVtLnVzZXJfaWQpLCBcbiAgICAgICAgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBudWxsLCBcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1hdHRlZERhdGUsIHtcbiAgICAgICAgICAgIHZhbHVlOiBjcmVhdGVkLCBcbiAgICAgICAgICAgIGRheTogXCJudW1lcmljXCIsIFxuICAgICAgICAgICAgbW9udGg6IFwibG9uZ1wiLCBcbiAgICAgICAgICAgIHllYXI6IFwibnVtZXJpY1wifSlcbiAgICAgICAgKSwgXG5cbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIG51bGwsIFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybWF0dGVkUmVsYXRpdmUsIHtcbiAgICAgICAgICAgIHZhbHVlOiB1cGRhdGVkfSlcbiAgICAgICAgKVxuXG4gICAgICApXG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvZmlsZVRocmVhZEl0ZW07IiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBUaHJlYWRTdG9yZSA9IHJlcXVpcmUoJy4uLy4uL3N0b3Jlcy9UaHJlYWRTdG9yZScpO1xudmFyIFRocmVhZEFjdGlvbnMgPSByZXF1aXJlKCcuLi8uLi9hY3Rpb25zL1RocmVhZEFjdGlvbnMnKTtcbnZhciBQcm9maWxlVGhyZWFkSXRlbSA9IHJlcXVpcmUoJy4vcHJvZmlsZS10aHJlYWRpdGVtJyk7XG5cbnZhciBCaW9UaHJlYWRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIkJpb1RocmVhZHNcIixcbiAgLy8gVE9ETzogSW5jb3Jwb3JhdGUgTGF0ZXIgd2hlbiBBdXRoIGlzIGluLlxuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4ge1xuICAgICAgcGFnZTogMSxcbiAgICAgIHRocmVhZHM6IFtdXG4gICAgfTtcbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKXtcbiAgICBUaHJlYWRBY3Rpb25zLmZldGNoVXNlclBhZ2Uoe3BhZ2U6dGhpcy5zdGF0ZS5wYWdlfSk7XG4gICAgVGhyZWFkU3RvcmUuYWRkQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25DaGFuZ2UpO1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbigpe1xuICAgIFRocmVhZFN0b3JlLnJlbW92ZUNoYW5nZUxpc3RlbmVyKHRoaXMuX29uQ2hhbmdlKTtcbiAgfSxcblxuICBfb25DaGFuZ2U6IGZ1bmN0aW9uKCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0aHJlYWRzOiBUaHJlYWRTdG9yZS5nZXRVc2VyVGhyZWFkcygpLmZvcnVtVGhyZWFkc1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUudGhyZWFkcyk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImNvbC1tZC05XCJ9LCBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgzXCIsIG51bGwsIFwiTXkgVGhyZWFkc1wiKSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiLCB7Y2xhc3NOYW1lOiBcInRhYmxlIHRhYmxlLWhvdmVyXCJ9LCBcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGhlYWRcIiwgbnVsbCwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidHJcIiwgbnVsbCwgXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiLCBudWxsLCBcIlJhdGluZ1wiKSwgXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiLCBudWxsLCBcIlRpdGxlXCIpLCBcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRoXCIsIG51bGwsIFwiQm9keVwiKSwgXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiLCBudWxsLCBcIlN1Ym1pdHRlZFwiKSwgXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiLCBudWxsLCBcIkNyZWF0ZWRcIiksIFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGhcIiwgbnVsbCwgXCJVcGRhdGVkXCIpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSwgXG5cbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIiwgbnVsbCwgXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnRocmVhZHMubWFwKGZ1bmN0aW9uKGl0ZW0pe1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUHJvZmlsZVRocmVhZEl0ZW0sIHtrZXk6IGl0ZW0udGhyZWFkX2lkLCBpdGVtOiBpdGVtfSlcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBCaW9UaHJlYWRzOyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgQXV0aFN0b3JlID0gcmVxdWlyZSgnLi4vLi4vc3RvcmVzL0F1dGhTdG9yZScpO1xudmFyIFByb2ZpbGVTdG9yZSA9IHJlcXVpcmUoJy4uLy4uL3N0b3Jlcy9Qcm9maWxlU3RvcmUnKTtcbnZhciBQcm9maWxlQWN0aW9ucyA9IHJlcXVpcmUoJy4uLy4uL2FjdGlvbnMvUHJvZmlsZUFjdGlvbnMnKTtcbnZhciBCaW8gPSByZXF1aXJlKCcuL3Byb2ZpbGUtYmlvJyk7XG52YXIgQmlvVGhyZWFkcyA9IHJlcXVpcmUoJy4vcHJvZmlsZS10aHJlYWRzJyk7XG5cbnZhciBQcm9maWxlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIlByb2ZpbGVcIixcbiAgLy8gVE9ETzogSW5jb3Jwb3JhdGUgTGF0ZXIgd2hlbiBBdXRoIGlzIGluLlxuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKXtcbiAgICBpZighQXV0aFN0b3JlLmxvZ2dlZEluKCkpe1xuICAgICAgbG9jYXRpb24uaGFzaCA9ICcvbG9naW4nO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgYXZhdGFyX2xpbms6IFwiXCIsXG4gICAgICBiaW86IFwiXCIsXG4gICAgICBmaXJzdF9uYW1lOiBcIlwiLFxuICAgICAgbGFzdF9uYW1lOiBcIlwiLFxuICAgICAgdXNlcl9uYW1lOiBcIlwiLFxuICAgICAgaWQ6IDAsXG4gICAgICByZXA6IDBcbiAgICB9O1xuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpe1xuICAgIFByb2ZpbGVBY3Rpb25zLmZldGNoKCk7XG4gICAgUHJvZmlsZVN0b3JlLmFkZENoYW5nZUxpc3RlbmVyKHRoaXMuX29uQ2hhbmdlKTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24oKXtcbiAgICBQcm9maWxlU3RvcmUucmVtb3ZlQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25DaGFuZ2UpO1xuICB9LFxuXG4gIGVkaXRQcm9maWxlOiBmdW5jdGlvbihkYXRhKXtcbiAgICAvLyBTZW5kIGFjdGlvbiB0byB1cGRhdGUgdXNlciBpbmZvcm1hdGlvblxuICAgIFByb2ZpbGVBY3Rpb25zLnVwZGF0ZSh7XG4gICAgICBhdmF0YXJfbGluazogZGF0YS5hdmF0YXJfbGluayxcbiAgICAgIGJpbzogZGF0YS5iaW9cbiAgICB9KTtcbiAgfSxcblxuICBfb25DaGFuZ2U6IGZ1bmN0aW9uKCl7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZmlyc3RfbmFtZTogUHJvZmlsZVN0b3JlLmdldEJpbygpLmZpcnN0X25hbWUsXG4gICAgICAgIGxhc3RfbmFtZTogUHJvZmlsZVN0b3JlLmdldEJpbygpLmxhc3RfbmFtZSxcbiAgICAgICAgdXNlcl9uYW1lOiBQcm9maWxlU3RvcmUuZ2V0QmlvKCkudXNlcl9uYW1lLFxuICAgICAgICBiaW86IFByb2ZpbGVTdG9yZS5nZXRCaW8oKS5iaW8sXG4gICAgICAgIGF2YXRhcl9saW5rOiBQcm9maWxlU3RvcmUuZ2V0QmlvKCkuYXZhdGFyX2xpbmssXG4gICAgICAgIHJlcDogUHJvZmlsZVN0b3JlLmdldEJpbygpLnJlcFxuICAgICAgfSk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInByb2ZpbGVcIn0sIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJpbywge29uRWRpdFN1Ym1pdDogdGhpcy5lZGl0UHJvZmlsZSwgaXRlbTogdGhpcy5zdGF0ZX0pLCBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCaW9UaHJlYWRzLCBudWxsKVxuICAgICAgKVxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2ZpbGU7IiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIFNpZ251cEZvcm0gPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiU2lnbnVwRm9ybVwiLFxuICBoYW5kbGVTdWJtaXQ6IGZ1bmN0aW9uKGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgZmlyc3RuYW1lID0gUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzLmZpcnN0bmFtZSkudmFsdWUudHJpbSgpO1xuICAgIHZhciBsYXN0bmFtZSA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmcy5sYXN0bmFtZSkudmFsdWUudHJpbSgpO1xuICAgIHZhciB1c2VybmFtZSA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmcy51c2VybmFtZSkudmFsdWUudHJpbSgpO1xuICAgIHZhciBwYXNzd29yZCA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmcy5wYXNzd29yZCkudmFsdWUudHJpbSgpO1xuICAgIHZhciBwYXNzY29uZiA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmcy5wYXNzY29uZikudmFsdWUudHJpbSgpO1xuXG4gICAgdmFyIGVycm9yID0gZmFsc2U7XG4gICAgaWYoIWZpcnN0bmFtZSB8fCAhbGFzdG5hbWUgfHwgIXVzZXJuYW1lIHx8ICFwYXNzd29yZCB8fCAhcGFzc2NvbmYpe1xuICAgICAgZXJyb3IgPSB0cnVlO1xuICAgIH1cbiAgICBpZihwYXNzY29uZiAhPT0gcGFzc3dvcmQpe1xuICAgICAgZXJyb3IgPSB0cnVlO1xuICAgIH1cbiAgICAvLyBCdWJibGUgdGhpcyB1cCB0byBwYXJlbnRcbiAgICB0aGlzLnByb3BzLm9uU2lnbnVwU3VibWl0KHtmaXJzdG5hbWU6IGZpcnN0bmFtZSwgbGFzdG5hbWU6IGxhc3RuYW1lLCB1c2VybmFtZTogdXNlcm5hbWUsIHBhc3N3b3JkOiBwYXNzd29yZCwgZXJyb3I6IGVycm9yfSk7XG4gICAgXG4gICAgUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzLmZpcnN0bmFtZSkudmFsdWUgPSAnJztcbiAgICBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnMubGFzdG5hbWUpLnZhbHVlID0gJyc7XG4gICAgUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzLnVzZXJuYW1lKS52YWx1ZSA9ICcnO1xuICAgIFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmcy5wYXNzd29yZCkudmFsdWUgPSAnJztcbiAgICBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnMucGFzc2NvbmYpLnZhbHVlID0gJyc7XG4gICAgcmV0dXJuO1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIHtjbGFzc05hbWU6IFwic2lnbnVwRm9ybVwiLCBvblN1Ym1pdDogdGhpcy5oYW5kbGVTdWJtaXR9LCBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcIm5hbWVGaWVsZFwifSwgXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHtuYW1lOiBcImZpcnN0XCIsIHR5cGU6IFwidGV4dFwiLCBjbGFzc05hbWU6IFwiZm9ybS1jb250cm9sXCIsIHBsYWNlaG9sZGVyOiBcIkZpcnN0XCIsIHJlZjogXCJmaXJzdG5hbWVcIn0pLCBcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwge25hbWU6IFwibGFzdFwiLCB0eXBlOiBcInRleHRcIiwgY2xhc3NOYW1lOiBcImZvcm0tY29udHJvbFwiLCBwbGFjZWhvbGRlcjogXCJMYXN0XCIsIHJlZjogXCJsYXN0bmFtZVwifSlcbiAgICAgICAgKSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7dHlwZTogXCJ0ZXh0XCIsIGNsYXNzTmFtZTogXCJmb3JtLWNvbnRyb2xcIiwgcGxhY2Vob2xkZXI6IFwiVXNlcm5hbWVcIiwgcmVmOiBcInVzZXJuYW1lXCJ9KSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7dHlwZTogXCJwYXNzd29yZFwiLCBjbGFzc05hbWU6IFwiZm9ybS1jb250cm9sXCIsIHBsYWNlaG9sZGVyOiBcIlBhc3N3b3JkXCIsIHJlZjogXCJwYXNzd29yZFwifSksIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwge3R5cGU6IFwicGFzc3dvcmRcIiwgY2xhc3NOYW1lOiBcImZvcm0tY29udHJvbFwiLCBwbGFjZWhvbGRlcjogXCJDb25maXJtXCIsIHJlZjogXCJwYXNzY29uZlwifSksIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHt0eXBlOiBcInN1Ym1pdFwiLCBjbGFzc05hbWU6IFwiYnRuIGJ0bi1zdWNjZXNzXCIsIHZhbHVlOiBcIlN1Ym1pdFwifSwgXCJTdWJtaXRcIilcbiAgICAgIClcbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBTaWdudXBGb3JtOyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgU2lnbnVwRm9ybSA9IHJlcXVpcmUoJy4vc2lnbnVwLWZvcm0nKTtcbnZhciBBdXRoQWN0aW9ucyA9IHJlcXVpcmUoJy4uLy4uL2FjdGlvbnMvQXV0aEFjdGlvbnMnKTtcbnZhciBBdXRoU3RvcmUgPSByZXF1aXJlKCcuLi8uLi9zdG9yZXMvQXV0aFN0b3JlJyk7XG5cbnZhciBTaWdudXAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiU2lnbnVwXCIsXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4ge1xuICAgICAgbG9nZ2VkSW46IEF1dGhTdG9yZS5sb2dnZWRJbigpLFxuICAgICAgZXJyb3I6IEF1dGhTdG9yZS5lcnJvcigpXG4gICAgfTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsTW91bnQ6IGZ1bmN0aW9uKCl7XG4gICAgQXV0aFN0b3JlLmFkZENoYW5nZUxpc3RlbmVyKHRoaXMuX29uQ2hhbmdlKTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24oKXtcbiAgICBBdXRoU3RvcmUucmVtb3ZlQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25DaGFuZ2UpO1xuICB9LFxuXG4gIF9vbkNoYW5nZTogZnVuY3Rpb24oKXtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGxvZ2dlZEluOiBBdXRoU3RvcmUubG9nZ2VkSW4oKSxcbiAgICAgIGVycm9yOiBBdXRoU3RvcmUuZXJyb3IoKVxuICAgIH0pO1xuICAgIGlmKHRoaXMuc3RhdGUubG9nZ2VkSW4pe1xuICAgICAgbG9jYXRpb24uaGFzaCA9ICcvJztcbiAgICB9XG4gIH0sXG5cbiAgaGFuZGxlU2lnbnVwU3VibWl0OiBmdW5jdGlvbih1c2VyKXtcbiAgICBBdXRoQWN0aW9ucy5zaWdudXAoe1xuICAgICAgZmlyc3RuYW1lOiB1c2VyLmZpcnN0bmFtZSwgXG4gICAgICBsYXN0bmFtZTogdXNlci5sYXN0bmFtZSwgXG4gICAgICB1c2VybmFtZTogdXNlci51c2VybmFtZSwgXG4gICAgICBwYXNzd29yZDogdXNlci5wYXNzd29yZCwgXG4gICAgICBlcnJvcjogdXNlci5lcnJvclxuICAgIH0pO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJBdXRoIGNlbnRlci1ibG9ja1wifSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMlwiLCBudWxsLCBcIlNpZ24gdXBcIiksIFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2lnbnVwRm9ybSwge29uU2lnbnVwU3VibWl0OiB0aGlzLmhhbmRsZVNpZ251cFN1Ym1pdH0pLCBcbiAgICAgICAgICB0aGlzLnN0YXRlLmVycm9yICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCB7Y2xhc3NOYW1lOiBcImVycm9yXCJ9LCBcIkJhZCBzaWdudXAgaW5mb3JtYXRpb25cIikpXG4gICAgICApXG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2lnbnVwOyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgVGhyZWFkU3RvcmUgPSByZXF1aXJlKCcuLi8uLi9zdG9yZXMvVGhyZWFkU3RvcmUnKTtcbnZhciBUaHJlYWRBY3Rpb25zID0gcmVxdWlyZSgnLi4vLi4vYWN0aW9ucy9UaHJlYWRBY3Rpb25zJyk7XG52YXIgQXV0aFN0b3JlID0gcmVxdWlyZSgnLi4vLi4vc3RvcmVzL0F1dGhTdG9yZScpO1xuXG52YXIgTmV3VGhyZWFkID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIk5ld1RocmVhZFwiLFxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG4gICAgaWYoIUF1dGhTdG9yZS5sb2dnZWRJbigpKXtcbiAgICAgIGxvY2F0aW9uLmhhc2ggPSAnL2xvZ2luJztcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlXG4gICAgfTtcbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKXtcbiAgICBUaHJlYWRTdG9yZS5hZGRDaGFuZ2VMaXN0ZW5lcih0aGlzLl9vbkNoYW5nZSk7XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uKCl7XG4gICAgVGhyZWFkU3RvcmUucmVtb3ZlQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25DaGFuZ2UpO1xuICB9LFxuXG4gIGFkZFRocmVhZDogZnVuY3Rpb24oKXtcbiAgICAvLyBTZW5kIGFjdGlvbiB0byB1cGRhdGUgdXNlciBpbmZvcm1hdGlvblxuICAgIHZhciB0aXRsZSA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmcy50aXRsZSkudmFsdWUudHJpbSgpO1xuICAgIHZhciBib2R5ID0gUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzLmJvZHkpLnZhbHVlLnRyaW0oKTtcblxuICAgIGlmKCF0aXRsZSB8fCAhYm9keSl7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgVGhyZWFkQWN0aW9ucy5hZGQoe1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgYm9keTogYm9keVxuICAgIH0pO1xuXG4gIH0sXG5cbiAgX29uQ2hhbmdlOiBmdW5jdGlvbigpe1xuICAgIGxvY2F0aW9uLmhhc2ggPSAnLyc7XG4gIH0sXG5cblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAoXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiY29sLW1kLTEyXCJ9LCBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgzXCIsIG51bGwsIFwiTmV3IFRocmVhZFwiKSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJuZXdUaHJlYWQgY2VudGVyLWJsb2NrXCJ9LCBcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIHtvblN1Ym1pdDogdGhpcy5hZGRUaHJlYWR9LCBcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHt0eXBlOiBcInRleHRcIiwgY2xhc3NOYW1lOiBcImZvcm0tY29udHJvbFwiLCBwbGFjZWhvbGRlcjogXCJUaXRsZVwiLCByZWY6IFwidGl0bGVcIn0pLCBcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHt0eXBlOiBcInRleHRhcmVhXCIsIGNsYXNzTmFtZTogXCJmb3JtLWNvbnRyb2xcIiwgcGxhY2Vob2xkZXI6IFwiQm9keVwiLCByZWY6IFwiYm9keVwifSksIFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHt0eXBlOiBcInN1Ym1pdFwiLCBjbGFzc05hbWU6IFwiYnRuIGJ0bi1zdWNjZXNzXCIsIHZhbHVlOiBcIlN1Ym1pdFwifSwgXCJTdWJtaXRcIilcbiAgICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5ld1RocmVhZDsiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFRocmVhZFN0b3JlID0gcmVxdWlyZSgnLi4vLi4vc3RvcmVzL1RocmVhZFN0b3JlJyk7XG52YXIgVGhyZWFkQWN0aW9ucyA9IHJlcXVpcmUoJy4uLy4uL2FjdGlvbnMvVGhyZWFkQWN0aW9ucycpO1xuXG52YXIgQ29tbWVudExpc3QgPSByZXF1aXJlKCcuLi9jb21tZW50L2NvbW1lbnQtbGlzdCcpO1xudmFyIENvbW1lbnRJbnB1dCA9IHJlcXVpcmUoJy4uL2NvbW1lbnQvY29tbWVudC1pbnB1dCcpO1xuXG52YXIgVGhyZWFkID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIlRocmVhZFwiLFxuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6dGhpcy5wcm9wcy5wYXJhbXMuaWQsXG4gICAgICB0aXRsZTogJycsXG4gICAgICBib2R5OiAnJyxcbiAgICAgIHJhdGluZzogbnVsbFxuICAgIH07XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCl7XG4gICAgVGhyZWFkQWN0aW9ucy5mZXRjaFRocmVhZCh7aWQ6dGhpcy5zdGF0ZS5pZH0pO1xuICAgIFRocmVhZFN0b3JlLmFkZENoYW5nZUxpc3RlbmVyKHRoaXMuX29uQ2hhbmdlKTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24oKXtcbiAgICBUaHJlYWRTdG9yZS5yZW1vdmVDaGFuZ2VMaXN0ZW5lcih0aGlzLl9vbkNoYW5nZSk7XG4gIH0sXG5cbiAgX29uQ2hhbmdlOiBmdW5jdGlvbigpe1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdGl0bGU6IFRocmVhZFN0b3JlLmdldFRocmVhZCgpLmZvcnVtVGhyZWFkc1swXS50aXRsZSxcbiAgICAgIGJvZHk6IFRocmVhZFN0b3JlLmdldFRocmVhZCgpLmZvcnVtVGhyZWFkc1swXS5ib2R5LFxuICAgICAgcmF0aW5nOiBUaHJlYWRTdG9yZS5nZXRUaHJlYWQoKS5mb3J1bVRocmVhZHNbMF0ucmF0aW5nXG4gICAgfSk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImNvbC1tZC0xMlwifSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoM1wiLCBudWxsLCBcIiBcIiwgdGhpcy5zdGF0ZS50aXRsZSwgXCIgXCIpLCBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImNhcmRcIn0sIFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiIFwiLCB0aGlzLnN0YXRlLmJvZHksIFwiIFwiKVxuICAgICAgICApLCBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgXCIgUmF0aW5nOiBcIiwgdGhpcy5zdGF0ZS5yYXRpbmcsIFwiIFwiKSwgXG5cbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb21tZW50TGlzdCwge3RocmVhZElkOiB0aGlzLnN0YXRlLmlkfSlcbiAgICAgIClcbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBUaHJlYWQ7IiwidmFyIEF1dGhDb25zdGFudHMgPSB7XG4gIFNJR05VUDogJ1NJR05VUCcsXG4gIExPR0lOOiAnTE9HSU4nLFxuICBMT0dPVVQ6ICdMT0dPVVQnXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEF1dGhDb25zdGFudHM7IiwidmFyIENvbW1lbnRDb25zdGFudHMgPSB7XG4gIFBPU1RfQUREOiAnUE9TVF9BREQnLFxuICBQT1NUX0ZFVENIUEFHRTogJ1BPU1RfRkVUQ0hQQUdFJyxcbiAgUE9TVF9GRVRDSFVTRVJQQUdFOiAnUE9TVF9GRVRDSFVTRVJQQUdFJyxcbiAgUE9TVF9WT1RFOiAnUE9TVF9WT1RFJyxcbiAgUE9TVF9VUERBVEU6ICdQT1NUX1VQREFURScsXG4gIFBPU1RfREVMRVRFOiAnUE9TVF9ERUxFVEUnXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1lbnRDb25zdGFudHM7IiwidmFyIFByb2ZpbGVDb25zdGFudHMgPSB7XG4gIEZFVENIOiAnRkVUQ0gnLCAvLyBmZXRjaGVzIHVzZXIgZGF0YSB0byBkaXNwbGF5IG9uIHZpZXdcbiAgVVBEQVRFOiAnVVBEQVRFJywgLy8gdXBkYXRlcyB1c2VyIGRhdGFcbiAgREVMRVRFOiAnREVMRVRFJyAvLyBUT0RPOiBkZWxldGUgYWNjb3VudFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm9maWxlQ29uc3RhbnRzOyIsInZhciBUaHJlYWRDb25zdGFudHMgPSB7XG4gIEFERDogJ0FERCcsXG4gIEZFVENIVEhSRUFEOiAnRkVUQ0hUSFJFQUQnLFxuICBGRVRDSFBBR0U6ICdGRVRDSFBBR0UnLFxuICBGRVRDSFVTRVJQQUdFOiAnRkVUQ0hVU0VSUEFHRScsXG4gIFZPVEU6ICdWT1RFJyxcbiAgVVBEQVRFOiAnVVBEQVRFJyxcbiAgREVMRVRFOiAnREVMRVRFJ1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBUaHJlYWRDb25zdGFudHM7IiwidmFyIERpc3BhdGNoZXIgPSByZXF1aXJlKCdmbHV4JykuRGlzcGF0Y2hlcjtcbnZhciBBcHBEaXNwYXRjaGVyID0gbmV3IERpc3BhdGNoZXIoKTtcblxuQXBwRGlzcGF0Y2hlci5oYW5kbGVBY3Rpb24gPSBmdW5jdGlvbihhY3Rpb24pIHtcbiAgdGhpcy5kaXNwYXRjaCh7XG4gICAgc291cmNlOiAnVklFV19BQ1RJT04nLFxuICAgIGFjdGlvbjogYWN0aW9uXG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFwcERpc3BhdGNoZXI7IiwidmFyIGF1dGhlbnRpY2F0ZVVzZXIgPSBmdW5jdGlvbih1c2VybmFtZSwgcGFzc3dvcmQsIGNhbGxiYWNrKSB7XG4gICQuYWpheCh7XG4gICAgdHlwZTogJ1BPU1QnLFxuICAgIHVybDogJy9hdXRoZW50aWNhdGUnLFxuICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcbiAgICAgIHBhc3N3b3JkOiBwYXNzd29yZFxuICAgIH0pLFxuICAgIGNyb3NzRG9tYWluOiB0cnVlLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3ApIHsgLy8gTk9UIFdPUktJTkdcbiAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzJyxyZXNwKTtcbiAgICAgIGNhbGxiYWNrKHtcbiAgICAgICAgYXV0aGVudGljYXRlZDogdHJ1ZSxcbiAgICAgICAgdG9rZW46IHJlc3AuYXV0aF90b2tlblxuICAgICAgfSk7XG4gICAgfSxcbiAgICBlcnJvcjogZnVuY3Rpb24ocmVzcCkge1xuICAgICAgLy8gVE9ETzogRml4IHRoaXMsIHRoaXMgYWx3YXlzIGdvZXMgdG8gZXJyb3IgLSBub3Qgc3VyZS5cbiAgICAgIC8vIEZvdW5kIG91dCAtIGpRdWVyeSAxLjQuMiB3b3JrcyB3aXRoIGN1cnJlbnQgZ28gc2VydmVyLCBidXQgYnJlYWtzIHdpdGggbmV3ZXIgdmVyLlxuICAgICAgY29uc29sZS5sb2coJ2Vycm9yJyxyZXNwKTtcbiAgICAgIGlmKHJlc3AucmVzcG9uc2VUZXh0ID09PSBcIlwiKXtcbiAgICAgICAgY2FsbGJhY2soe1xuICAgICAgICAgIGF1dGhlbnRpY2F0ZWQ6IHRydWUsXG4gICAgICAgICAgdG9rZW46IHJlc3AuYXV0aF90b2tlblxuICAgICAgICB9KTtcbiAgICAgIH1lbHNle1xuICAgICAgICBjYWxsYmFjayh7XG4gICAgICAgICAgYXV0aGVudGljYXRlZDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG5cbnZhciBjcmVhdGVVc2VyID0gZnVuY3Rpb24odXNlcm5hbWUsIHBhc3N3b3JkLCBmaXJzdG5hbWUsIGxhc3RuYW1lLCBjYWxsYmFjaykge1xuICByZXR1cm4gJC5hamF4KHtcbiAgICB0eXBlOiAnUE9TVCcsXG4gICAgdXJsOiAnL2NyZWF0ZVVzZXInLFxuICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIFwidXNlcm5hbWVcIjogdXNlcm5hbWUsXG4gICAgICBcInBhc3N3b3JkXCI6IHBhc3N3b3JkLFxuICAgICAgXCJmaXJzdG5hbWVcIjogZmlyc3RuYW1lLFxuICAgICAgXCJsYXN0bmFtZVwiOiBsYXN0bmFtZVxuICAgIH0pLFxuICAgIGNyb3NzRG9tYWluOiB0cnVlLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3ApIHtcbiAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzJyxyZXNwKTtcbiAgICAgIHJldHVybiBjYWxsYmFjayh7XG4gICAgICAgIGF1dGhlbnRpY2F0ZWQ6IHRydWUsXG4gICAgICAgIHRva2VuOiByZXNwLmF1dGhfdG9rZW5cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZXJyb3I6IGZ1bmN0aW9uKHJlc3ApIHtcbiAgICAgIC8vIFRPRE86IEZpeCB0aGlzLCB0aGlzIGFsd2F5cyBnb2VzIHRvIGVycm9yIC0gbm90IHN1cmUuXG4gICAgICAvLyBGb3VuZCBvdXQgLSBqUXVlcnkgMS40LjIgd29ya3Mgd2l0aCBjdXJyZW50IGdvIHNlcnZlciwgYnV0IGJyZWFrcyB3aXRoIG5ld2VyIHZlci5cbiAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicscmVzcCk7XG4gICAgICBpZihyZXNwLnJlc3BvbnNlVGV4dCA9PT0gXCJcIil7IC8vIGlmIG5vIGVycm9yIG1zZ1xuICAgICAgICBjYWxsYmFjayh7XG4gICAgICAgICAgYXV0aGVudGljYXRlZDogdHJ1ZSxcbiAgICAgICAgICB0b2tlbjogcmVzcC5hdXRoX3Rva2VuXG4gICAgICAgIH0pO1xuICAgICAgfWVsc2V7ICAgICAgICAgLy8gaWYgZXJyb3IgbXNnXG4gICAgICAgIGNhbGxiYWNrKHtcbiAgICAgICAgICBhdXRoZW50aWNhdGVkOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufTtcblxudmFyIEF1dGggPSB7XG4gIGxvZ2luOiBmdW5jdGlvbih1c2VybmFtZSwgcGFzcywgY2FsbGJhY2spIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy5sb2dnZWRJbigpKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnYWxyZWFkeSBsb2dnZWQgaW4nKTtcbiAgICAgIC8vIGlmIChjYWxsYmFjaykge1xuICAgICAgLy8gICBjYWxsYmFjayh0cnVlKTtcbiAgICAgIC8vIH1cbiAgICAgIC8vIHRoaXMub25DaGFuZ2UodHJ1ZSk7XG4gICAgICAvLyByZXR1cm47XG4gICAgfVxuICAgIGF1dGhlbnRpY2F0ZVVzZXIodXNlcm5hbWUsIHBhc3MsIChmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgdmFyIGF1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKHJlcy5hdXRoZW50aWNhdGVkKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2xvZ2luIHN1Y2Nlc3NmdWwnKTtcbiAgICAgICAgICBhdXRoZW50aWNhdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjayhhdXRoZW50aWNhdGVkKTtcbiAgICAgICAgfVxuICAgICAgICB0aGF0Lm9uQ2hhbmdlKGF1dGhlbnRpY2F0ZWQpO1xuICAgIH0pKTtcbiAgfSxcbiAgc2lnbnVwOiBmdW5jdGlvbih1c2VybmFtZSwgcGFzc3dvcmQsIGZpcnN0bmFtZSwgbGFzdG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIFxuICAgIGlmICh0aGlzLmxvZ2dlZEluKCkpIHtcbiAgICAgIC8vIGlmIChjYWxsYmFjaykge1xuICAgICAgLy8gICBjYWxsYmFjayh0cnVlKTtcbiAgICAgIC8vIH1cbiAgICAgIC8vIHRoaXMub25DaGFuZ2UodHJ1ZSk7XG4gICAgICAvLyByZXR1cm47XG4gICAgfVxuICAgIGNyZWF0ZVVzZXIodXNlcm5hbWUsIHBhc3N3b3JkLCBmaXJzdG5hbWUsIGxhc3RuYW1lLCBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgdmFyIGF1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKHJlcy5hdXRoZW50aWNhdGVkKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3NpZ251cCBhbmQgbG9naW4gc3VjY2Vzc2Z1bCEnKTtcbiAgICAgICAgICBhdXRoZW50aWNhdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjayhhdXRoZW50aWNhdGVkKTtcbiAgICAgICAgfVxuICAgICAgICB0aGF0Lm9uQ2hhbmdlKGF1dGhlbnRpY2F0ZWQpO1xuICAgIH0pO1xuICB9LFxuXG4gIGxvZ291dDogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICBkZWxldGVBbGxDb29raWVzKCk7XG5cbiAgICBmdW5jdGlvbiBkZWxldGVBbGxDb29raWVzKCkge1xuICAgICAgdmFyIGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7XCIpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvb2tpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNvb2tpZSA9IGNvb2tpZXNbaV07XG4gICAgICAgIHZhciBlcVBvcyA9IGNvb2tpZS5pbmRleE9mKFwiPVwiKTtcbiAgICAgICAgdmFyIG5hbWUgPSBlcVBvcyA+IC0xID8gY29va2llLnN1YnN0cigwLCBlcVBvcykgOiBjb29raWU7XG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyBcIj07ZXhwaXJlcz1UaHUsIDAxIEphbiAxOTcwIDAwOjAwOjAwIEdNVFwiO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxuICAgIHRoaXMub25DaGFuZ2UoZmFsc2UpO1xuICB9LFxuXG4gIGxvZ2dlZEluOiBmdW5jdGlvbigpIHtcbiAgICAvLyBjaGVjayB0aGUgZmxhc2ggc2Vzc2lvbiBjb29raWVcbiAgICB2YXIgZ29vZCA9IGZhbHNlO1xuICAgIHZhciBjb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KFwiO1wiKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29va2llcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNvb2tpZSA9IGNvb2tpZXNbaV07XG4gICAgICB2YXIgZXFQb3MgPSBjb29raWUuaW5kZXhPZihcImZsYXNoLXNlc3Npb249XCIpO1xuICAgICAgaWYoZXFQb3MgPiAtMSkgZ29vZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdvb2Q7XG4gIH0sXG5cbiAgb25DaGFuZ2U6IGZ1bmN0aW9uKCkge31cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQXV0aDsiLCJ2YXIgYWRkQ29tbWVudCA9IGZ1bmN0aW9uKHRocmVhZElkLGJvZHksY2FsbGJhY2spIHtcbiAgcmV0dXJuICQuYWpheCh7XG4gICAgdHlwZTogJ1BPU1QnLFxuICAgIHVybDogJy9jcmVhdGVUaHJlYWRQb3N0JyxcbiAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBcInRocmVhZF9pZFwiOiBwYXJzZUludCh0aHJlYWRJZCksXG4gICAgICBcImNvbnRlbnRzXCI6IGJvZHlcbiAgICB9KSxcbiAgICBjcm9zc0RvbWFpbjogdHJ1ZSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwKSB7XG4gICAgICBjb25zb2xlLmxvZygnc3VjY2VzcycscmVzcCk7XG4gICAgICByZXR1cm4gY2FsbGJhY2socmVzcCk7XG4gICAgfSxcbiAgICBlcnJvcjogZnVuY3Rpb24ocmVzcCkge1xuICAgICAgLy8gVE9ETzogRml4IHRoaXMsIHRoaXMgYWx3YXlzIGdvZXMgdG8gZXJyb3IgLSBub3Qgc3VyZS5cbiAgICAgIC8vIEZvdW5kIG91dCAtIGpRdWVyeSAxLjQuMiB3b3JrcyB3aXRoIGN1cnJlbnQgZ28gc2VydmVyLCBidXQgYnJlYWtzIHdpdGggbmV3ZXIgdmVyLlxuICAgICAgY29uc29sZS5sb2coJ2Vycm9yJyxyZXNwKTtcbiAgICAgIGlmKHJlc3AucmVzcG9uc2VUZXh0ID09PSBcIlwiKXsgLy8gaWYgbm8gZXJyb3IgbXNnXG4gICAgICAgIGNhbGxiYWNrKHJlc3ApO1xuICAgICAgfWVsc2V7ICAgICAgICAgLy8gaWYgZXJyb3IgbXNnXG4gICAgICAgIGNhbGxiYWNrKG51bGwpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59O1xuXG5cbnZhciBmZXRjaENvbW1lbnQgPSBmdW5jdGlvbihpZCxjYWxsYmFjaykge1xuICAkLmFqYXgoe1xuICAgIHR5cGU6ICdHRVQnLFxuICAgIHVybDogJy9nZXRVc2VySW5mbycsXG4gICAgY3Jvc3NEb21haW46IHRydWUsXG4gICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcCkgeyAvLyBXT1JLSU5HIGZvciBmZXRjaHVzZXI/XG4gICAgICAvLyBjb25zb2xlLmxvZygnc3VjY2VzcycscmVzcCk7XG4gICAgICBjYWxsYmFjayhyZXNwKTtcbiAgICB9LFxuICAgIGVycm9yOiBmdW5jdGlvbihyZXNwKSB7XG4gICAgICAvLyBUT0RPOiBGaXggdGhpcywgdGhpcyBhbHdheXMgZ29lcyB0byBlcnJvciAtIG5vdCBzdXJlLlxuICAgICAgLy8gRm91bmQgb3V0IC0galF1ZXJ5IDEuNC4yIHdvcmtzIHdpdGggY3VycmVudCBnbyBzZXJ2ZXIsIGJ1dCBicmVha3Mgd2l0aCBuZXdlciB2ZXIuXG4gICAgICBjb25zb2xlLmxvZygnZXJyb3InLHJlc3ApO1xuICAgICAgY2FsbGJhY2sobnVsbCk7XG4gICAgfVxuICB9KTtcbn07XG5cbi8vIEdyYWJzIENvbW1lbnRzIGZvciBwYWdlIG51bWJlclxudmFyIGZldGNoUGFnZSA9IGZ1bmN0aW9uKHRocmVhZElkLCBwYWdlLCBjYWxsYmFjaykge1xuICAkLmFqYXgoe1xuICAgIHR5cGU6ICdQT1NUJyxcbiAgICB1cmw6ICcvZ2V0VGhyZWFkUG9zdHNCeVJhdGluZycsXG4gICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1widGhyZWFkX2lkXCI6IHBhcnNlSW50KHRocmVhZElkKSwgXCJwYWdlX251bWJlclwiIDogcGFyc2VJbnQocGFnZSl9KSxcbiAgICBjcm9zc0RvbWFpbjogdHJ1ZSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwKSB7IC8vIFdPUktJTkcgZm9yIGZldGNodXNlcj9cbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzdWNjZXNzJyxyZXNwKTtcbiAgICAgIGNhbGxiYWNrKHJlc3ApO1xuICAgIH0sXG4gICAgZXJyb3I6IGZ1bmN0aW9uKHJlc3ApIHtcbiAgICAgIC8vIFRPRE86IEZpeCB0aGlzLCB0aGlzIGFsd2F5cyBnb2VzIHRvIGVycm9yIC0gbm90IHN1cmUuXG4gICAgICAvLyBGb3VuZCBvdXQgLSBqUXVlcnkgMS40LjIgd29ya3Mgd2l0aCBjdXJyZW50IGdvIHNlcnZlciwgYnV0IGJyZWFrcyB3aXRoIG5ld2VyIHZlci5cbiAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicscmVzcCk7XG4gICAgICBjYWxsYmFjayhudWxsKTtcbiAgICB9XG4gIH0pO1xuXG59O1xuXG52YXIgZmV0Y2hVc2VyUGFnZSA9IGZ1bmN0aW9uKHBhZ2UsIGNhbGxiYWNrKSB7XG4gIFxuICAkLmFqYXgoe1xuICAgIHR5cGU6ICdQT1NUJyxcbiAgICB1cmw6ICcvZ2V0Rm9ydW1UaHJlYWRzQnlVc2VySWQnLFxuICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcInBhZ2VfbnVtYmVyXCIgOiBwYWdlfSksXG4gICAgY3Jvc3NEb21haW46IHRydWUsXG4gICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcCkgeyAvLyBXT1JLSU5HIGZvciBmZXRjaHVzZXI/XG4gICAgICAvLyBjb25zb2xlLmxvZygnc3VjY2VzcycscmVzcCk7XG4gICAgICBjYWxsYmFjayhyZXNwKTtcbiAgICB9LFxuICAgIGVycm9yOiBmdW5jdGlvbihyZXNwKSB7XG4gICAgICAvLyBUT0RPOiBGaXggdGhpcywgdGhpcyBhbHdheXMgZ29lcyB0byBlcnJvciAtIG5vdCBzdXJlLlxuICAgICAgLy8gRm91bmQgb3V0IC0galF1ZXJ5IDEuNC4yIHdvcmtzIHdpdGggY3VycmVudCBnbyBzZXJ2ZXIsIGJ1dCBicmVha3Mgd2l0aCBuZXdlciB2ZXIuXG4gICAgICBjb25zb2xlLmxvZygnZXJyb3InLHJlc3ApO1xuICAgICAgY2FsbGJhY2sobnVsbCk7XG4gICAgfVxuICB9KTtcbn07XG5cbnZhciB1cGRhdGVDb21tZW50ID0gZnVuY3Rpb24oYmlvLGF2YXRhcixjYWxsYmFjaykge1xuICByZXR1cm4gJC5hamF4KHtcbiAgICB0eXBlOiAnUE9TVCcsXG4gICAgdXJsOiAnL3VwZGF0ZVVzZXJJbmZvJyxcbiAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBcImJpb1wiOiBiaW8sXG4gICAgICBcImF2YXRhcl9saW5rXCI6IGF2YXRhclxuICAgIH0pLFxuICAgIGNyb3NzRG9tYWluOiB0cnVlLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3ApIHtcbiAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzJyxyZXNwKTtcbiAgICAgIHJldHVybiBjYWxsYmFjayhyZXNwKTtcbiAgICB9LFxuICAgIGVycm9yOiBmdW5jdGlvbihyZXNwKSB7XG4gICAgICAvLyBUT0RPOiBGaXggdGhpcywgdGhpcyBhbHdheXMgZ29lcyB0byBlcnJvciAtIG5vdCBzdXJlLlxuICAgICAgLy8gRm91bmQgb3V0IC0galF1ZXJ5IDEuNC4yIHdvcmtzIHdpdGggY3VycmVudCBnbyBzZXJ2ZXIsIGJ1dCBicmVha3Mgd2l0aCBuZXdlciB2ZXIuXG4gICAgICBjb25zb2xlLmxvZygnZXJyb3InLHJlc3ApO1xuICAgICAgaWYocmVzcC5yZXNwb25zZVRleHQgPT09IFwiXCIpeyAvLyBpZiBubyBlcnJvciBtc2dcbiAgICAgICAgY2FsbGJhY2socmVzcCk7XG4gICAgICB9ZWxzZXsgICAgICAgICAvLyBpZiBlcnJvciBtc2dcbiAgICAgICAgY2FsbGJhY2sobnVsbCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG5cbnZhciB2b3RlID0gZnVuY3Rpb24oY29tbWVudF9pZCwgc2NvcmUsIGNhbGxiYWNrKSB7XG4gIFxuICAkLmFqYXgoe1xuICAgIHR5cGU6ICdQT1NUJyxcbiAgICB1cmw6ICcvc2NvcmVGb3J1bUNvbW1lbnQnLFxuICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcImNvbW1lbnRfaWRcIiA6IGNvbW1lbnRfaWQsIFwic2NvcmVcIiA6IHNjb3JlfSksXG4gICAgY3Jvc3NEb21haW46IHRydWUsXG4gICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcCkgeyAvLyBXT1JLSU5HIGZvciBmZXRjaHVzZXI/XG4gICAgICAvLyBjb25zb2xlLmxvZygnc3VjY2VzcycscmVzcCk7XG4gICAgICBjYWxsYmFjayhyZXNwKTtcbiAgICB9LFxuICAgIGVycm9yOiBmdW5jdGlvbihyZXNwKSB7XG4gICAgICAvLyBUT0RPOiBGaXggdGhpcywgdGhpcyBhbHdheXMgZ29lcyB0byBlcnJvciAtIG5vdCBzdXJlLlxuICAgICAgLy8gRm91bmQgb3V0IC0galF1ZXJ5IDEuNC4yIHdvcmtzIHdpdGggY3VycmVudCBnbyBzZXJ2ZXIsIGJ1dCBicmVha3Mgd2l0aCBuZXdlciB2ZXIuXG4gICAgICBjb25zb2xlLmxvZygnZXJyb3InLHJlc3ApO1xuICAgICAgY2FsbGJhY2sobnVsbCk7XG4gICAgfVxuICB9KTtcblxufTtcblxudmFyIENvbW1lbnQgPSB7XG5cbiAgZmV0Y2hQYWdlOiBmdW5jdGlvbih0aHJlYWRJZCwgcGFnZSwgY2FsbGJhY2spIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgZmV0Y2hQYWdlKHRocmVhZElkLCBwYWdlICxmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgY2FsbGJhY2socmVzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGF0Lm9uQ2hhbmdlKHJlcyk7XG4gICAgfSk7XG4gIH0sXG5cbiAgZmV0Y2hVc2VyUGFnZTogZnVuY3Rpb24ocGFnZSxjYWxsYmFjaykge1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICBmZXRjaFVzZXJQYWdlKHBhZ2UsZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGNhbGxiYWNrKHJlcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhhdC5vbkNoYW5nZShyZXMpO1xuICAgIH0pO1xuICB9LFxuXG4gIGFkZDogZnVuY3Rpb24odGhyZWFkSWQsIGJvZHksIGNhbGxiYWNrKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gICAgYWRkQ29tbWVudCh0aHJlYWRJZCwgYm9keSwgZnVuY3Rpb24ocmVzKSB7XG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2socmVzKTtcbiAgICAgIH1cbiAgICAgIHRoYXQub25DaGFuZ2UocmVzKTtcbiAgICB9KTtcblxuICB9LFxuICBcbiAgdXBkYXRlOiBmdW5jdGlvbihiaW8sIGF2YXRhciwgY2FsbGJhY2spIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgdXBkYXRlQ29tbWVudChiaW8sIGF2YXRhciwgZnVuY3Rpb24ocmVzKSB7XG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2socmVzKTtcbiAgICAgIH1cbiAgICAgIHRoYXQub25DaGFuZ2UocmVzKTtcbiAgICB9KTtcbiAgfSxcblxuICBkZWxldGU6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH1cbiAgICB0aGlzLm9uQ2hhbmdlKGZhbHNlKTtcbiAgfSxcblxuICB2b3RlOiBmdW5jdGlvbihDb21tZW50X2lkLHNjb3JlLGNhbGxiYWNrKXtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgICB2b3RlKENvbW1lbnRfaWQsIHNjb3JlLCBmdW5jdGlvbihyZXMpIHtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjayhyZXMpO1xuICAgICAgfVxuICAgICAgdGhhdC5vbkNoYW5nZShyZXMpO1xuICAgIH0pO1xuXG4gIH0sXG5cbiAgb25DaGFuZ2U6IGZ1bmN0aW9uKCkge31cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tbWVudDsiLCJ2YXIgZmV0Y2hVc2VyID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgJC5hamF4KHtcbiAgICB0eXBlOiAnR0VUJyxcbiAgICB1cmw6ICcvZ2V0VXNlckluZm8nLFxuICAgIGNyb3NzRG9tYWluOiB0cnVlLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3ApIHsgLy8gV09SS0lORyBmb3IgZmV0Y2h1c2VyP1xuICAgICAgLy8gY29uc29sZS5sb2coJ3N1Y2Nlc3MnLHJlc3ApO1xuICAgICAgY2FsbGJhY2socmVzcCk7XG4gICAgfSxcbiAgICBlcnJvcjogZnVuY3Rpb24ocmVzcCkge1xuICAgICAgLy8gVE9ETzogRml4IHRoaXMsIHRoaXMgYWx3YXlzIGdvZXMgdG8gZXJyb3IgLSBub3Qgc3VyZS5cbiAgICAgIC8vIEZvdW5kIG91dCAtIGpRdWVyeSAxLjQuMiB3b3JrcyB3aXRoIGN1cnJlbnQgZ28gc2VydmVyLCBidXQgYnJlYWtzIHdpdGggbmV3ZXIgdmVyLlxuICAgICAgY29uc29sZS5sb2coJ2Vycm9yJyxyZXNwKTtcbiAgICAgIGNhbGxiYWNrKG51bGwpO1xuICAgIH1cbiAgfSk7XG59O1xuXG52YXIgdXBkYXRlVXNlciA9IGZ1bmN0aW9uKGJpbyxhdmF0YXIsY2FsbGJhY2spIHtcbiAgcmV0dXJuICQuYWpheCh7XG4gICAgdHlwZTogJ1BPU1QnLFxuICAgIHVybDogJy91cGRhdGVVc2VySW5mbycsXG4gICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgXCJiaW9cIjogYmlvLFxuICAgICAgXCJhdmF0YXJfbGlua1wiOiBhdmF0YXJcbiAgICB9KSxcbiAgICBjcm9zc0RvbWFpbjogdHJ1ZSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwKSB7XG4gICAgICBjb25zb2xlLmxvZygnc3VjY2VzcycscmVzcCk7XG4gICAgICByZXR1cm4gY2FsbGJhY2socmVzcCk7XG4gICAgfSxcbiAgICBlcnJvcjogZnVuY3Rpb24ocmVzcCkge1xuICAgICAgLy8gVE9ETzogRml4IHRoaXMsIHRoaXMgYWx3YXlzIGdvZXMgdG8gZXJyb3IgLSBub3Qgc3VyZS5cbiAgICAgIC8vIEZvdW5kIG91dCAtIGpRdWVyeSAxLjQuMiB3b3JrcyB3aXRoIGN1cnJlbnQgZ28gc2VydmVyLCBidXQgYnJlYWtzIHdpdGggbmV3ZXIgdmVyLlxuICAgICAgY29uc29sZS5sb2coJ2Vycm9yJyxyZXNwKTtcbiAgICAgIGlmKHJlc3AucmVzcG9uc2VUZXh0ID09PSBcIlwiKXsgLy8gaWYgbm8gZXJyb3IgbXNnXG4gICAgICAgIGNhbGxiYWNrKHJlc3ApO1xuICAgICAgfWVsc2V7ICAgICAgICAgLy8gaWYgZXJyb3IgbXNnXG4gICAgICAgIGNhbGxiYWNrKG51bGwpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59O1xuXG52YXIgUHJvZmlsZSA9IHtcbiAgZmV0Y2g6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIGZldGNoVXNlcigoZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGNhbGxiYWNrKHJlcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhhdC5vbkNoYW5nZShyZXMpO1xuICAgIH0pKTtcbiAgfSxcbiAgXG4gIHVwZGF0ZTogZnVuY3Rpb24oYmlvLCBhdmF0YXIsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHtiaW86YmlvLGF2YXRhcl9saW5rOmF2YXRhcn0pKTtcbiAgICB1cGRhdGVVc2VyKGJpbywgYXZhdGFyLCBmdW5jdGlvbihyZXMpIHtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjayhyZXMpO1xuICAgICAgfVxuICAgICAgdGhhdC5vbkNoYW5nZShyZXMpO1xuICAgIH0pO1xuICB9LFxuXG4gIGRlbGV0ZTogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxuICAgIHRoaXMub25DaGFuZ2UoZmFsc2UpO1xuICB9LFxuXG4gIG9uQ2hhbmdlOiBmdW5jdGlvbigpIHt9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2ZpbGU7IiwidmFyIGFkZFRocmVhZCA9IGZ1bmN0aW9uKHRpdGxlLGJvZHksY2FsbGJhY2spIHtcbiAgcmV0dXJuICQuYWpheCh7XG4gICAgdHlwZTogJ1BPU1QnLFxuICAgIHVybDogJy9jcmVhdGVGb3J1bVRocmVhZCcsXG4gICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgXCJ0aXRsZVwiOiB0aXRsZSxcbiAgICAgIFwiYm9keVwiOiBib2R5XG4gICAgfSksXG4gICAgY3Jvc3NEb21haW46IHRydWUsXG4gICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcCkge1xuICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3MnLHJlc3ApO1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKHJlc3ApO1xuICAgIH0sXG4gICAgZXJyb3I6IGZ1bmN0aW9uKHJlc3ApIHtcbiAgICAgIC8vIFRPRE86IEZpeCB0aGlzLCB0aGlzIGFsd2F5cyBnb2VzIHRvIGVycm9yIC0gbm90IHN1cmUuXG4gICAgICAvLyBGb3VuZCBvdXQgLSBqUXVlcnkgMS40LjIgd29ya3Mgd2l0aCBjdXJyZW50IGdvIHNlcnZlciwgYnV0IGJyZWFrcyB3aXRoIG5ld2VyIHZlci5cbiAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicscmVzcCk7XG4gICAgICBpZihyZXNwLnJlc3BvbnNlVGV4dCA9PT0gXCJcIil7IC8vIGlmIG5vIGVycm9yIG1zZ1xuICAgICAgICBjYWxsYmFjayhyZXNwKTtcbiAgICAgIH1lbHNleyAgICAgICAgIC8vIGlmIGVycm9yIG1zZ1xuICAgICAgICBjYWxsYmFjayhudWxsKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufTtcblxuXG52YXIgZmV0Y2hUaHJlYWQgPSBmdW5jdGlvbihpZCxjYWxsYmFjaykge1xuICAkLmFqYXgoe1xuICAgIHR5cGU6ICdQT1NUJyxcbiAgICB1cmw6ICcvZ2V0Rm9ydW1UaHJlYWRzQnlUaHJlYWRJZCcsXG4gICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1widGhyZWFkX2lkXCIgOiBwYXJzZUludChpZCksIFwicGFnZV9udW1iZXJcIiA6IDF9KSxcbiAgICBjcm9zc0RvbWFpbjogdHJ1ZSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwKSB7XG4gICAgICBjb25zb2xlLmxvZygnc3VjY2VzcycscmVzcCk7XG4gICAgICByZXR1cm4gY2FsbGJhY2socmVzcCk7XG4gICAgfSxcbiAgICBlcnJvcjogZnVuY3Rpb24ocmVzcCkge1xuICAgICAgLy8gVE9ETzogRml4IHRoaXMsIHRoaXMgYWx3YXlzIGdvZXMgdG8gZXJyb3IgLSBub3Qgc3VyZS5cbiAgICAgIC8vIEZvdW5kIG91dCAtIGpRdWVyeSAxLjQuMiB3b3JrcyB3aXRoIGN1cnJlbnQgZ28gc2VydmVyLCBidXQgYnJlYWtzIHdpdGggbmV3ZXIgdmVyLlxuICAgICAgY29uc29sZS5sb2coJ2Vycm9yJyxyZXNwKTtcbiAgICAgIGlmKHJlc3AucmVzcG9uc2VUZXh0ID09PSBcIlwiKXsgLy8gaWYgbm8gZXJyb3IgbXNnXG4gICAgICAgIGNhbGxiYWNrKHJlc3ApO1xuICAgICAgfWVsc2V7ICAgICAgICAgLy8gaWYgZXJyb3IgbXNnXG4gICAgICAgIGNhbGxiYWNrKG51bGwpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59O1xuXG4vLyBHcmFicyB0aHJlYWRzIGZvciBwYWdlIG51bWJlclxudmFyIGZldGNoUGFnZSA9IGZ1bmN0aW9uKHBhZ2UsIGNhbGxiYWNrKSB7XG4gIFxuICAkLmFqYXgoe1xuICAgIHR5cGU6ICdQT1NUJyxcbiAgICB1cmw6ICcvZ2V0Rm9ydW1UaHJlYWRzQnlSYXRpbmcnLFxuICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcInBhZ2VfbnVtYmVyXCIgOiBwYWdlfSksXG4gICAgY3Jvc3NEb21haW46IHRydWUsXG4gICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcCkgeyAvLyBXT1JLSU5HIGZvciBmZXRjaHVzZXI/XG4gICAgICAvLyBjb25zb2xlLmxvZygnc3VjY2VzcycscmVzcCk7XG4gICAgICBjYWxsYmFjayhyZXNwKTtcbiAgICB9LFxuICAgIGVycm9yOiBmdW5jdGlvbihyZXNwKSB7XG4gICAgICAvLyBUT0RPOiBGaXggdGhpcywgdGhpcyBhbHdheXMgZ29lcyB0byBlcnJvciAtIG5vdCBzdXJlLlxuICAgICAgLy8gRm91bmQgb3V0IC0galF1ZXJ5IDEuNC4yIHdvcmtzIHdpdGggY3VycmVudCBnbyBzZXJ2ZXIsIGJ1dCBicmVha3Mgd2l0aCBuZXdlciB2ZXIuXG4gICAgICBjb25zb2xlLmxvZygnZXJyb3InLHJlc3ApO1xuICAgICAgY2FsbGJhY2sobnVsbCk7XG4gICAgfVxuICB9KTtcbn07XG5cbnZhciBmZXRjaFVzZXJQYWdlID0gZnVuY3Rpb24ocGFnZSwgY2FsbGJhY2spIHtcbiAgXG4gICQuYWpheCh7XG4gICAgdHlwZTogJ1BPU1QnLFxuICAgIHVybDogJy9nZXRGb3J1bVRocmVhZHNCeVVzZXJJZCcsXG4gICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1wicGFnZV9udW1iZXJcIiA6IHBhZ2V9KSxcbiAgICBjcm9zc0RvbWFpbjogdHJ1ZSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwKSB7IC8vIFdPUktJTkcgZm9yIGZldGNodXNlcj9cbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzdWNjZXNzJyxyZXNwKTtcbiAgICAgIGNhbGxiYWNrKHJlc3ApO1xuICAgIH0sXG4gICAgZXJyb3I6IGZ1bmN0aW9uKHJlc3ApIHtcbiAgICAgIC8vIFRPRE86IEZpeCB0aGlzLCB0aGlzIGFsd2F5cyBnb2VzIHRvIGVycm9yIC0gbm90IHN1cmUuXG4gICAgICAvLyBGb3VuZCBvdXQgLSBqUXVlcnkgMS40LjIgd29ya3Mgd2l0aCBjdXJyZW50IGdvIHNlcnZlciwgYnV0IGJyZWFrcyB3aXRoIG5ld2VyIHZlci5cbiAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicscmVzcCk7XG4gICAgICBjYWxsYmFjayhudWxsKTtcbiAgICB9XG4gIH0pO1xufTtcblxudmFyIHVwZGF0ZVRocmVhZCA9IGZ1bmN0aW9uKGJpbyxhdmF0YXIsY2FsbGJhY2spIHtcbiAgcmV0dXJuICQuYWpheCh7XG4gICAgdHlwZTogJ1BPU1QnLFxuICAgIHVybDogJy91cGRhdGVVc2VySW5mbycsXG4gICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgXCJiaW9cIjogYmlvLFxuICAgICAgXCJhdmF0YXJfbGlua1wiOiBhdmF0YXJcbiAgICB9KSxcbiAgICBjcm9zc0RvbWFpbjogdHJ1ZSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwKSB7XG4gICAgICBjb25zb2xlLmxvZygnc3VjY2VzcycscmVzcCk7XG4gICAgICByZXR1cm4gY2FsbGJhY2socmVzcCk7XG4gICAgfSxcbiAgICBlcnJvcjogZnVuY3Rpb24ocmVzcCkge1xuICAgICAgLy8gVE9ETzogRml4IHRoaXMsIHRoaXMgYWx3YXlzIGdvZXMgdG8gZXJyb3IgLSBub3Qgc3VyZS5cbiAgICAgIC8vIEZvdW5kIG91dCAtIGpRdWVyeSAxLjQuMiB3b3JrcyB3aXRoIGN1cnJlbnQgZ28gc2VydmVyLCBidXQgYnJlYWtzIHdpdGggbmV3ZXIgdmVyLlxuICAgICAgY29uc29sZS5sb2coJ2Vycm9yJyxyZXNwKTtcbiAgICAgIGlmKHJlc3AucmVzcG9uc2VUZXh0ID09PSBcIlwiKXsgLy8gaWYgbm8gZXJyb3IgbXNnXG4gICAgICAgIGNhbGxiYWNrKHJlc3ApO1xuICAgICAgfWVsc2V7ICAgICAgICAgLy8gaWYgZXJyb3IgbXNnXG4gICAgICAgIGNhbGxiYWNrKG51bGwpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59O1xuXG52YXIgdm90ZSA9IGZ1bmN0aW9uKHRocmVhZF9pZCwgc2NvcmUsIGNhbGxiYWNrKSB7XG4gIFxuICAkLmFqYXgoe1xuICAgIHR5cGU6ICdQT1NUJyxcbiAgICB1cmw6ICcvc2NvcmVGb3J1bVRocmVhZCcsXG4gICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1widGhyZWFkX2lkXCIgOiB0aHJlYWRfaWQsIFwic2NvcmVcIiA6IHNjb3JlfSksXG4gICAgY3Jvc3NEb21haW46IHRydWUsXG4gICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcCkgeyAvLyBXT1JLSU5HIGZvciBmZXRjaHVzZXI/XG4gICAgICAvLyBjb25zb2xlLmxvZygnc3VjY2VzcycscmVzcCk7XG4gICAgICBjYWxsYmFjayhyZXNwKTtcbiAgICB9LFxuICAgIGVycm9yOiBmdW5jdGlvbihyZXNwKSB7XG4gICAgICAvLyBUT0RPOiBGaXggdGhpcywgdGhpcyBhbHdheXMgZ29lcyB0byBlcnJvciAtIG5vdCBzdXJlLlxuICAgICAgLy8gRm91bmQgb3V0IC0galF1ZXJ5IDEuNC4yIHdvcmtzIHdpdGggY3VycmVudCBnbyBzZXJ2ZXIsIGJ1dCBicmVha3Mgd2l0aCBuZXdlciB2ZXIuXG4gICAgICBjb25zb2xlLmxvZygnZXJyb3InLHJlc3ApO1xuICAgICAgY2FsbGJhY2sobnVsbCk7XG4gICAgfVxuICB9KTtcblxufTtcblxudmFyIFRocmVhZCA9IHtcbiAgZmV0Y2hUaHJlYWQ6IGZ1bmN0aW9uKGlkLGNhbGxiYWNrKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIGZldGNoVGhyZWFkKGlkLGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjayhyZXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoYXQub25DaGFuZ2UocmVzKTtcbiAgICB9KTtcbiAgfSxcblxuICBmZXRjaFBhZ2U6IGZ1bmN0aW9uKHBhZ2UsY2FsbGJhY2spIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgZmV0Y2hQYWdlKHBhZ2UsZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGNhbGxiYWNrKHJlcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhhdC5vbkNoYW5nZShyZXMpO1xuICAgIH0pO1xuICB9LFxuXG4gIGZldGNoVXNlclBhZ2U6IGZ1bmN0aW9uKHBhZ2UsY2FsbGJhY2spIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgZmV0Y2hVc2VyUGFnZShwYWdlLGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjayhyZXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoYXQub25DaGFuZ2UocmVzKTtcbiAgICB9KTtcbiAgfSxcblxuICBhZGQ6IGZ1bmN0aW9uKHRpdGxlLCBib2R5LCBjYWxsYmFjaykge1xuICAgIHZhciB0aGF0ID0gdGhpcztcblxuICAgIGFkZFRocmVhZCh0aXRsZSwgYm9keSwgZnVuY3Rpb24ocmVzKSB7XG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2socmVzKTtcbiAgICAgIH1cbiAgICAgIHRoYXQub25DaGFuZ2UocmVzKTtcbiAgICB9KTtcblxuICB9LFxuICBcbiAgdXBkYXRlOiBmdW5jdGlvbihiaW8sIGF2YXRhciwgY2FsbGJhY2spIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgdXBkYXRlVGhyZWFkKGJpbywgYXZhdGFyLCBmdW5jdGlvbihyZXMpIHtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjayhyZXMpO1xuICAgICAgfVxuICAgICAgdGhhdC5vbkNoYW5nZShyZXMpO1xuICAgIH0pO1xuICB9LFxuXG4gIGRlbGV0ZTogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxuICAgIHRoaXMub25DaGFuZ2UoZmFsc2UpO1xuICB9LFxuXG4gIHZvdGU6IGZ1bmN0aW9uKHRocmVhZF9pZCxzY29yZSxjYWxsYmFjayl7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gICAgdm90ZSh0aHJlYWRfaWQsIHNjb3JlLCBmdW5jdGlvbihyZXMpIHtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjayhyZXMpO1xuICAgICAgfVxuICAgICAgdGhhdC5vbkNoYW5nZShyZXMpO1xuICAgIH0pO1xuXG4gIH0sXG5cbiAgb25DaGFuZ2U6IGZ1bmN0aW9uKCkge31cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVGhyZWFkOyIsInZhciBBcHBEaXNwYXRjaGVyID0gcmVxdWlyZSgnLi4vZGlzcGF0Y2hlcnMvQXBwRGlzcGF0Y2hlcicpO1xudmFyIEF1dGhDb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMvQXV0aENvbnN0YW50cycpO1xudmFyIEF1dGggPSByZXF1aXJlKCcuLi9zZXJ2aWNlcy9BdXRoU2VydmljZScpO1xudmFyIEV2ZW50RW1pdHRlciA9IHJlcXVpcmUoJ2V2ZW50cycpLkV2ZW50RW1pdHRlcjtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBDSEFOR0VfRVZFTlQgPSAnY2hhbmdlJztcblxudmFyIF91c2VyID0gbnVsbDtcbnZhciBfbG9nZ2VkSW4gPSBudWxsO1xudmFyIF9lcnJvciA9IG51bGw7XG5cbnZhciBBdXRoU3RvcmUgPSBhc3NpZ24oe30sIEV2ZW50RW1pdHRlci5wcm90b3R5cGUsIHtcblxuICBlbWl0Q2hhbmdlOiBmdW5jdGlvbigpIHtcbiAgICAgdGhpcy5lbWl0KENIQU5HRV9FVkVOVCk7XG4gICB9LFxuXG4gIGVycm9yOiBmdW5jdGlvbigpe1xuICAgIHJldHVybiBfZXJyb3I7XG4gIH0sXG5cbiAgbG9naW46IGZ1bmN0aW9uKHVzZXJuYW1lLHBhc3Mpe1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICBfZXJyb3IgPSBmYWxzZTtcbiAgICBBdXRoLmxvZ2luKHVzZXJuYW1lLHBhc3MsZnVuY3Rpb24oc3VjY2Vzcyl7XG5cbiAgICAgIGlmKHN1Y2Nlc3Mpe1xuICAgICAgICBfbG9nZ2VkSW4gPSB0cnVlO1xuICAgICAgfWVsc2V7XG4gICAgICAgIF9sb2dnZWRJbiA9IGZhbHNlO1xuICAgICAgICBfZXJyb3IgPSB0cnVlO1xuICAgICAgfVxuICAgICAgdGhhdC5lbWl0Q2hhbmdlKCk7XG5cbiAgICB9KTtcbiAgfSxcbiAgLy8gbG9nIG91dCB1c2VyXG4gIGxvZ291dDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIEF1dGgubG9nb3V0KGZ1bmN0aW9uKCl7XG4gICAgICBfbG9nZ2VkSW4gPSBmYWxzZTtcbiAgICAgIHRoYXQuZW1pdENoYW5nZSgpO1xuICAgIH0pO1xuICB9LFxuXG4gIGxvZ2dlZEluOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gQXV0aC5sb2dnZWRJbigpO1xuICB9LFxuXG4gIHNpZ251cDogZnVuY3Rpb24odXNlcm5hbWUscGFzc3dvcmQsZmlyc3RuYW1lLGxhc3RuYW1lKXtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgX2Vycm9yID0gZmFsc2U7XG4gICAgQXV0aC5zaWdudXAodXNlcm5hbWUsIHBhc3N3b3JkLCBmaXJzdG5hbWUsIGxhc3RuYW1lLCBmdW5jdGlvbihzdWNjZXNzKSB7XG5cbiAgICAgIGlmKHN1Y2Nlc3Mpe1xuICAgICAgICBfbG9nZ2VkSW4gPSB0cnVlO1xuICAgICAgfWVsc2V7XG4gICAgICAgIF9sb2dnZWRJbiA9IGZhbHNlO1xuICAgICAgICBfZXJyb3IgPSB0cnVlO1xuICAgICAgfVxuICAgICAgdGhhdC5lbWl0Q2hhbmdlKCk7XG5cbiAgICB9KTtcbiAgfSxcblxuICBhZGRDaGFuZ2VMaXN0ZW5lcjogZnVuY3Rpb24oY2IpIHtcbiAgICB0aGlzLm9uKENIQU5HRV9FVkVOVCwgY2IpXG4gIH0sXG5cbiAgcmVtb3ZlQ2hhbmdlTGlzdGVuZXI6IGZ1bmN0aW9uKGNiKSB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcihDSEFOR0VfRVZFTlQsIGNiKTtcbiAgfVxufSk7XG5cblxuQXBwRGlzcGF0Y2hlci5yZWdpc3RlcihmdW5jdGlvbihwYXlsb2FkKXtcbiAgdmFyIGFjdGlvbiA9IHBheWxvYWQuYWN0aW9uO1xuXG4gIHN3aXRjaChhY3Rpb24uYWN0aW9uVHlwZSl7XG4gICAgY2FzZSBBdXRoQ29uc3RhbnRzLlNJR05VUDpcbiAgICAgIEF1dGhTdG9yZS5zaWdudXAoYWN0aW9uLmRhdGEudXNlcm5hbWUsYWN0aW9uLmRhdGEucGFzc3dvcmQsYWN0aW9uLmRhdGEuZmlyc3RuYW1lLGFjdGlvbi5kYXRhLmxhc3RuYW1lKTtcbiAgICAgIEF1dGhTdG9yZS5lbWl0Q2hhbmdlKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIEF1dGhDb25zdGFudHMuTE9HSU46XG4gICAgICBBdXRoU3RvcmUubG9naW4oYWN0aW9uLmRhdGEudXNlcm5hbWUsYWN0aW9uLmRhdGEucGFzcyk7XG4gICAgICBBdXRoU3RvcmUuZW1pdENoYW5nZSgpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBBdXRoQ29uc3RhbnRzLkxPR09VVDpcbiAgICAgIEF1dGhTdG9yZS5sb2dvdXQoKTtcbiAgICAgIC8vIFJvdXRlckNvbnRhaW5lci5nZXQoKS50cmFuc2l0aW9uVG8oJy9sb2dpbicpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgQXV0aFN0b3JlLmVtaXRDaGFuZ2UoKTtcbiAgcmV0dXJuIHRydWU7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBdXRoU3RvcmU7IiwidmFyIEFwcERpc3BhdGNoZXIgPSByZXF1aXJlKCcuLi9kaXNwYXRjaGVycy9BcHBEaXNwYXRjaGVyJyk7XG52YXIgQ29tbWVudENvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cy9Db21tZW50Q29uc3RhbnRzJyk7XG52YXIgQ29tbWVudCA9IHJlcXVpcmUoJy4uL3NlcnZpY2VzL0NvbW1lbnRTZXJ2aWNlJyk7XG52YXIgRXZlbnRFbWl0dGVyID0gcmVxdWlyZSgnZXZlbnRzJykuRXZlbnRFbWl0dGVyO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIENIQU5HRV9FVkVOVCA9ICdjaGFuZ2UnO1xuXG52YXIgX2NvbW1lbnRzID0gW107XG52YXIgX3VzZXJDb21tZW50cyA9IFtdO1xudmFyIF9jb21tZW50ID0gbnVsbDtcblxudmFyIENvbW1lbnRTdG9yZSA9IGFzc2lnbih7fSwgRXZlbnRFbWl0dGVyLnByb3RvdHlwZSwge1xuXG4gIGVtaXRDaGFuZ2U6IGZ1bmN0aW9uKCkge1xuICAgICB0aGlzLmVtaXQoQ0hBTkdFX0VWRU5UKTtcbiAgIH0sXG5cbiAgZ2V0Q29tbWVudDogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gX2NvbW1lbnQ7XG4gIH0sXG5cbiAgZ2V0Q29tbWVudHM6IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIF9jb21tZW50cztcbiAgfSxcblxuICBnZXRVc2VyQ29tbWVudHM6IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIF91c2VyQ29tbWVudHM7XG4gIH0sXG5cbiAgZmV0Y2hQYWdlOiBmdW5jdGlvbih0aHJlYWRJZCwgcGFnZSl7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIENvbW1lbnQuZmV0Y2hQYWdlKHRocmVhZElkLCBwYWdlLCBmdW5jdGlvbihkYXRhKXtcbiAgICAgIF9jb21tZW50cyA9IGRhdGE7XG4gICAgICB0aGF0LmVtaXRDaGFuZ2UoKTtcbiAgICB9KTtcbiAgfSxcblxuICBmZXRjaFVzZXJQYWdlOiBmdW5jdGlvbihwYWdlKXtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgQ29tbWVudC5mZXRjaFVzZXJQYWdlKHBhZ2UsIGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgX3VzZXJDb21tZW50cyA9IGRhdGE7XG4gICAgICB0aGF0LmVtaXRDaGFuZ2UoKTtcbiAgICB9KTtcbiAgfSxcblxuICBhZGQ6IGZ1bmN0aW9uKHRocmVhZElkLGJvZHkpe1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICBDb21tZW50LmFkZCh0aHJlYWRJZCxib2R5LGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgdGhhdC5lbWl0Q2hhbmdlKCk7XG4gICAgfSk7XG4gIH0sXG5cbiAgdm90ZTogZnVuY3Rpb24oQ29tbWVudF9pZCxzY29yZSl7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIENvbW1lbnQudm90ZShDb21tZW50X2lkLHNjb3JlLGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgdGhhdC5lbWl0Q2hhbmdlKCk7XG4gICAgfSk7XG4gIH0sXG5cbiAgdXBkYXRlOiBmdW5jdGlvbihiaW8sYXZhdGFyKXtcbiAgICAvLyB2YXIgdGhhdCA9IHRoaXM7XG4gICAgLy8gQ29tbWVudC51cGRhdGUoYmlvLGF2YXRhcixmdW5jdGlvbihkYXRhKXtcbiAgICAvLyAgIGNvbnNvbGUubG9nKCd1cGRhdGUgc3VjY2Vzc2Z1bCcpO1xuICAgIC8vICAgdGhhdC5mZXRjaCgpO1xuICAgIC8vIH0pO1xuICB9LFxuXG4gIGRlbGV0ZTogZnVuY3Rpb24oKXtcblxuXG4gIH0sXG5cbiAgYWRkQ2hhbmdlTGlzdGVuZXI6IGZ1bmN0aW9uKGNiKSB7XG4gICAgdGhpcy5vbihDSEFOR0VfRVZFTlQsIGNiKVxuICB9LFxuXG4gIHJlbW92ZUNoYW5nZUxpc3RlbmVyOiBmdW5jdGlvbihjYikge1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoQ0hBTkdFX0VWRU5ULCBjYik7XG4gIH1cbn0pO1xuXG5cbkFwcERpc3BhdGNoZXIucmVnaXN0ZXIoZnVuY3Rpb24ocGF5bG9hZCl7XG4gIHZhciBhY3Rpb24gPSBwYXlsb2FkLmFjdGlvbjtcblxuICBzd2l0Y2goYWN0aW9uLmFjdGlvblR5cGUpe1xuICAgIGNhc2UgQ29tbWVudENvbnN0YW50cy5QT1NUX0ZFVENIUEFHRTpcbiAgICAgIENvbW1lbnRTdG9yZS5mZXRjaFBhZ2UoYWN0aW9uLmRhdGEudGhyZWFkSWQsIGFjdGlvbi5kYXRhLnBhZ2UpO1xuICAgICAgQ29tbWVudFN0b3JlLmVtaXRDaGFuZ2UoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgQ29tbWVudENvbnN0YW50cy5QT1NUX0ZFVENIVVNFUlBBR0U6XG4gICAgICBDb21tZW50U3RvcmUuZmV0Y2hVc2VyUGFnZShhY3Rpb24uZGF0YS5wYWdlKTtcbiAgICAgIENvbW1lbnRTdG9yZS5lbWl0Q2hhbmdlKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIENvbW1lbnRDb25zdGFudHMuUE9TVF9BREQ6XG4gICAgICBDb21tZW50U3RvcmUuYWRkKGFjdGlvbi5kYXRhLnRocmVhZElkLGFjdGlvbi5kYXRhLmJvZHkpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBDb21tZW50Q29uc3RhbnRzLlBPU1RfVVBEQVRFOlxuICAgICAgLy8gVE9ETzogVXBkYXRpbmcgYSBDb21tZW50XG5cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgQ29tbWVudENvbnN0YW50cy5QT1NUX0RFTEVURTpcbiAgICAgIC8vIFRPRE86IERlbGV0aW5nIGEgQ29tbWVudFxuXG4gICAgICBicmVhaztcbiAgICBjYXNlIENvbW1lbnRDb25zdGFudHMuUE9TVF9WT1RFOlxuICAgICAgQ29tbWVudFN0b3JlLnZvdGUoYWN0aW9uLmRhdGEuQ29tbWVudF9pZCxhY3Rpb24uZGF0YS5zY29yZSk7XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIENvbW1lbnRTdG9yZS5lbWl0Q2hhbmdlKCk7XG4gIHJldHVybiB0cnVlO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tbWVudFN0b3JlOyIsInZhciBBcHBEaXNwYXRjaGVyID0gcmVxdWlyZSgnLi4vZGlzcGF0Y2hlcnMvQXBwRGlzcGF0Y2hlcicpO1xudmFyIFByb2ZpbGVDb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMvUHJvZmlsZUNvbnN0YW50cycpO1xudmFyIFByb2ZpbGUgPSByZXF1aXJlKCcuLi9zZXJ2aWNlcy9Qcm9maWxlU2VydmljZScpO1xudmFyIEV2ZW50RW1pdHRlciA9IHJlcXVpcmUoJ2V2ZW50cycpLkV2ZW50RW1pdHRlcjtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBDSEFOR0VfRVZFTlQgPSAnY2hhbmdlJztcblxudmFyIF9zdG9yZSA9IHtcbiAgYXZhdGFyX2xpbms6IFwiXCIsXG4gIGJpbzogXCJcIixcbiAgZmlyc3RfbmFtZTogXCJcIixcbiAgbGFzdF9uYW1lOiBcIlwiLFxuICB1c2VyX25hbWU6IFwiXCIsXG4gIGlkOiAwLFxuICByZXA6IDBcbn07XG5cbnZhciBQcm9maWxlU3RvcmUgPSBhc3NpZ24oe30sIEV2ZW50RW1pdHRlci5wcm90b3R5cGUsIHtcblxuICBlbWl0Q2hhbmdlOiBmdW5jdGlvbigpIHtcbiAgICAgdGhpcy5lbWl0KENIQU5HRV9FVkVOVCk7XG4gICB9LFxuXG4gIGdldEJpbzogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gX3N0b3JlO1xuICB9LFxuXG4gIGZldGNoOiBmdW5jdGlvbigpe1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICBQcm9maWxlLmZldGNoKGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgX3N0b3JlID0gZGF0YTtcbiAgICAgIHRoYXQuZW1pdENoYW5nZSgpO1xuICAgIH0pO1xuICB9LFxuXG4gIHVwZGF0ZTogZnVuY3Rpb24oYmlvLGF2YXRhcil7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIFByb2ZpbGUudXBkYXRlKGJpbyxhdmF0YXIsZnVuY3Rpb24oZGF0YSl7XG4gICAgICBjb25zb2xlLmxvZygndXBkYXRlIHN1Y2Nlc3NmdWwnKTtcbiAgICAgIHRoYXQuZmV0Y2goKTtcbiAgICB9KTtcbiAgfSxcblxuICBkZWxldGU6IGZ1bmN0aW9uKCl7XG5cblxuICB9LFxuXG4gIGFkZENoYW5nZUxpc3RlbmVyOiBmdW5jdGlvbihjYikge1xuICAgIHRoaXMub24oQ0hBTkdFX0VWRU5ULCBjYilcbiAgfSxcblxuICByZW1vdmVDaGFuZ2VMaXN0ZW5lcjogZnVuY3Rpb24oY2IpIHtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKENIQU5HRV9FVkVOVCwgY2IpO1xuICB9XG59KTtcblxuXG5BcHBEaXNwYXRjaGVyLnJlZ2lzdGVyKGZ1bmN0aW9uKHBheWxvYWQpe1xuICB2YXIgYWN0aW9uID0gcGF5bG9hZC5hY3Rpb247XG5cbiAgc3dpdGNoKGFjdGlvbi5hY3Rpb25UeXBlKXtcbiAgICBjYXNlIFByb2ZpbGVDb25zdGFudHMuRkVUQ0g6XG4gICAgICBQcm9maWxlU3RvcmUuZmV0Y2goKTtcbiAgICAgIFByb2ZpbGVTdG9yZS5lbWl0Q2hhbmdlKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFByb2ZpbGVDb25zdGFudHMuVVBEQVRFOlxuICAgICAgUHJvZmlsZVN0b3JlLnVwZGF0ZShhY3Rpb24uZGF0YS5iaW8sYWN0aW9uLmRhdGEuYXZhdGFyX2xpbmspO1xuICAgICAgUHJvZmlsZVN0b3JlLmVtaXRDaGFuZ2UoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgUHJvZmlsZVN0b3JlLkRFTEVURTpcbiAgICAgIFByb2ZpbGVTdG9yZS5kZWxldGUoKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIFByb2ZpbGVTdG9yZS5lbWl0Q2hhbmdlKCk7XG4gIHJldHVybiB0cnVlO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvZmlsZVN0b3JlOyIsInZhciBBcHBEaXNwYXRjaGVyID0gcmVxdWlyZSgnLi4vZGlzcGF0Y2hlcnMvQXBwRGlzcGF0Y2hlcicpO1xudmFyIFRocmVhZENvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cy9UaHJlYWRDb25zdGFudHMnKTtcbnZhciBUaHJlYWQgPSByZXF1aXJlKCcuLi9zZXJ2aWNlcy9UaHJlYWRTZXJ2aWNlJyk7XG52YXIgRXZlbnRFbWl0dGVyID0gcmVxdWlyZSgnZXZlbnRzJykuRXZlbnRFbWl0dGVyO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIENIQU5HRV9FVkVOVCA9ICdjaGFuZ2UnO1xuXG52YXIgX3RocmVhZHMgPSBbXTtcbnZhciBfdXNlclRocmVhZHMgPSBbXTtcbnZhciBfdGhyZWFkID0gbnVsbDtcblxudmFyIFRocmVhZFN0b3JlID0gYXNzaWduKHt9LCBFdmVudEVtaXR0ZXIucHJvdG90eXBlLCB7XG5cbiAgZW1pdENoYW5nZTogZnVuY3Rpb24oKSB7XG4gICAgIHRoaXMuZW1pdChDSEFOR0VfRVZFTlQpO1xuICAgfSxcblxuICBnZXRUaHJlYWQ6IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIF90aHJlYWQ7XG4gIH0sXG5cbiAgZ2V0VGhyZWFkczogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gX3RocmVhZHM7XG4gIH0sXG5cbiAgZ2V0VXNlclRocmVhZHM6IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIF91c2VyVGhyZWFkcztcbiAgfSxcblxuICBmZXRjaFRocmVhZDogZnVuY3Rpb24oaWQpe1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICBUaHJlYWQuZmV0Y2hUaHJlYWQoaWQsIGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgX3RocmVhZCA9IGRhdGE7XG4gICAgICB0aGF0LmVtaXRDaGFuZ2UoKTtcbiAgICB9KTtcbiAgfSxcblxuICBmZXRjaFBhZ2U6IGZ1bmN0aW9uKHBhZ2Upe1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICBUaHJlYWQuZmV0Y2hQYWdlKHBhZ2UsIGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgX3RocmVhZHMgPSBkYXRhO1xuICAgICAgdGhhdC5lbWl0Q2hhbmdlKCk7XG4gICAgfSk7XG4gIH0sXG5cbiAgZmV0Y2hVc2VyUGFnZTogZnVuY3Rpb24ocGFnZSl7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIFRocmVhZC5mZXRjaFVzZXJQYWdlKHBhZ2UsIGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgX3VzZXJUaHJlYWRzID0gZGF0YTtcbiAgICAgIHRoYXQuZW1pdENoYW5nZSgpO1xuICAgIH0pO1xuICB9LFxuXG4gIGFkZDogZnVuY3Rpb24odGl0bGUsYm9keSl7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIFRocmVhZC5hZGQodGl0bGUsYm9keSxmdW5jdGlvbihkYXRhKXtcbiAgICAgIHRoYXQuZW1pdENoYW5nZSgpO1xuICAgIH0pO1xuICB9LFxuXG4gIHZvdGU6IGZ1bmN0aW9uKHRocmVhZF9pZCxzY29yZSl7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIFRocmVhZC52b3RlKHRocmVhZF9pZCxzY29yZSxmdW5jdGlvbihkYXRhKXtcbiAgICAgIHRoYXQuZW1pdENoYW5nZSgpO1xuICAgIH0pO1xuICB9LFxuXG4gIHVwZGF0ZTogZnVuY3Rpb24oYmlvLGF2YXRhcil7XG4gICAgLy8gdmFyIHRoYXQgPSB0aGlzO1xuICAgIC8vIFRocmVhZC51cGRhdGUoYmlvLGF2YXRhcixmdW5jdGlvbihkYXRhKXtcbiAgICAvLyAgIGNvbnNvbGUubG9nKCd1cGRhdGUgc3VjY2Vzc2Z1bCcpO1xuICAgIC8vICAgdGhhdC5mZXRjaCgpO1xuICAgIC8vIH0pO1xuICB9LFxuXG4gIGRlbGV0ZTogZnVuY3Rpb24oKXtcblxuXG4gIH0sXG5cbiAgYWRkQ2hhbmdlTGlzdGVuZXI6IGZ1bmN0aW9uKGNiKSB7XG4gICAgdGhpcy5vbihDSEFOR0VfRVZFTlQsIGNiKVxuICB9LFxuXG4gIHJlbW92ZUNoYW5nZUxpc3RlbmVyOiBmdW5jdGlvbihjYikge1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoQ0hBTkdFX0VWRU5ULCBjYik7XG4gIH1cbn0pO1xuXG5cbkFwcERpc3BhdGNoZXIucmVnaXN0ZXIoZnVuY3Rpb24ocGF5bG9hZCl7XG4gIHZhciBhY3Rpb24gPSBwYXlsb2FkLmFjdGlvbjtcblxuICBzd2l0Y2goYWN0aW9uLmFjdGlvblR5cGUpe1xuICAgIGNhc2UgVGhyZWFkQ29uc3RhbnRzLkZFVENIUEFHRTpcbiAgICAgIFRocmVhZFN0b3JlLmZldGNoUGFnZShhY3Rpb24uZGF0YS5wYWdlKTtcbiAgICAgIFRocmVhZFN0b3JlLmVtaXRDaGFuZ2UoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgVGhyZWFkQ29uc3RhbnRzLkZFVENIVVNFUlBBR0U6XG4gICAgICBUaHJlYWRTdG9yZS5mZXRjaFVzZXJQYWdlKGFjdGlvbi5kYXRhLnBhZ2UpO1xuICAgICAgVGhyZWFkU3RvcmUuZW1pdENoYW5nZSgpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBUaHJlYWRDb25zdGFudHMuRkVUQ0hUSFJFQUQ6XG4gICAgICBUaHJlYWRTdG9yZS5mZXRjaFRocmVhZChhY3Rpb24uZGF0YS5pZCk7XG4gICAgICBUaHJlYWRTdG9yZS5lbWl0Q2hhbmdlKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFRocmVhZENvbnN0YW50cy5BREQ6XG4gICAgICBUaHJlYWRTdG9yZS5hZGQoYWN0aW9uLmRhdGEudGl0bGUsYWN0aW9uLmRhdGEuYm9keSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFRocmVhZENvbnN0YW50cy5VUERBVEU6XG4gICAgICAvLyBUT0RPOiBVcGRhdGluZyBhIHRocmVhZFxuXG4gICAgICBicmVhaztcbiAgICBjYXNlIFRocmVhZENvbnN0YW50cy5ERUxFVEU6XG4gICAgICAvLyBUT0RPOiBEZWxldGluZyBhIHRocmVhZFxuXG4gICAgICBicmVhaztcbiAgICBjYXNlIFRocmVhZENvbnN0YW50cy5WT1RFOlxuICAgICAgVGhyZWFkU3RvcmUudm90ZShhY3Rpb24uZGF0YS50aHJlYWRfaWQsYWN0aW9uLmRhdGEuc2NvcmUpO1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBUaHJlYWRTdG9yZS5lbWl0Q2hhbmdlKCk7XG4gIHJldHVybiB0cnVlO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVGhyZWFkU3RvcmU7IixudWxsLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuZnVuY3Rpb24gRXZlbnRFbWl0dGVyKCkge1xuICB0aGlzLl9ldmVudHMgPSB0aGlzLl9ldmVudHMgfHwge307XG4gIHRoaXMuX21heExpc3RlbmVycyA9IHRoaXMuX21heExpc3RlbmVycyB8fCB1bmRlZmluZWQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcblxuLy8gQmFja3dhcmRzLWNvbXBhdCB3aXRoIG5vZGUgMC4xMC54XG5FdmVudEVtaXR0ZXIuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHMgPSB1bmRlZmluZWQ7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9tYXhMaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG5cbi8vIEJ5IGRlZmF1bHQgRXZlbnRFbWl0dGVycyB3aWxsIHByaW50IGEgd2FybmluZyBpZiBtb3JlIHRoYW4gMTAgbGlzdGVuZXJzIGFyZVxuLy8gYWRkZWQgdG8gaXQuIFRoaXMgaXMgYSB1c2VmdWwgZGVmYXVsdCB3aGljaCBoZWxwcyBmaW5kaW5nIG1lbW9yeSBsZWFrcy5cbkV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzID0gMTA7XG5cbi8vIE9idmlvdXNseSBub3QgYWxsIEVtaXR0ZXJzIHNob3VsZCBiZSBsaW1pdGVkIHRvIDEwLiBUaGlzIGZ1bmN0aW9uIGFsbG93c1xuLy8gdGhhdCB0byBiZSBpbmNyZWFzZWQuIFNldCB0byB6ZXJvIGZvciB1bmxpbWl0ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnNldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uKG4pIHtcbiAgaWYgKCFpc051bWJlcihuKSB8fCBuIDwgMCB8fCBpc05hTihuKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ24gbXVzdCBiZSBhIHBvc2l0aXZlIG51bWJlcicpO1xuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIGVyLCBoYW5kbGVyLCBsZW4sIGFyZ3MsIGksIGxpc3RlbmVycztcblxuICBpZiAoIXRoaXMuX2V2ZW50cylcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcblxuICAvLyBJZiB0aGVyZSBpcyBubyAnZXJyb3InIGV2ZW50IGxpc3RlbmVyIHRoZW4gdGhyb3cuXG4gIGlmICh0eXBlID09PSAnZXJyb3InKSB7XG4gICAgaWYgKCF0aGlzLl9ldmVudHMuZXJyb3IgfHxcbiAgICAgICAgKGlzT2JqZWN0KHRoaXMuX2V2ZW50cy5lcnJvcikgJiYgIXRoaXMuX2V2ZW50cy5lcnJvci5sZW5ndGgpKSB7XG4gICAgICBlciA9IGFyZ3VtZW50c1sxXTtcbiAgICAgIGlmIChlciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIHRocm93IGVyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICAgICAgfVxuICAgICAgdGhyb3cgVHlwZUVycm9yKCdVbmNhdWdodCwgdW5zcGVjaWZpZWQgXCJlcnJvclwiIGV2ZW50LicpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZXIgPSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgaWYgKGlzVW5kZWZpbmVkKGhhbmRsZXIpKVxuICAgIHJldHVybiBmYWxzZTtcblxuICBpZiAoaXNGdW5jdGlvbihoYW5kbGVyKSkge1xuICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgLy8gZmFzdCBjYXNlc1xuICAgICAgY2FzZSAxOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgYXJndW1lbnRzWzFdKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8gc2xvd2VyXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICBhcmdzID0gbmV3IEFycmF5KGxlbiAtIDEpO1xuICAgICAgICBmb3IgKGkgPSAxOyBpIDwgbGVuOyBpKyspXG4gICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIGhhbmRsZXIuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KGhhbmRsZXIpKSB7XG4gICAgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBhcmdzID0gbmV3IEFycmF5KGxlbiAtIDEpO1xuICAgIGZvciAoaSA9IDE7IGkgPCBsZW47IGkrKylcbiAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuXG4gICAgbGlzdGVuZXJzID0gaGFuZGxlci5zbGljZSgpO1xuICAgIGxlbiA9IGxpc3RlbmVycy5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKVxuICAgICAgbGlzdGVuZXJzW2ldLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIG07XG5cbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuXG4gIC8vIFRvIGF2b2lkIHJlY3Vyc2lvbiBpbiB0aGUgY2FzZSB0aGF0IHR5cGUgPT09IFwibmV3TGlzdGVuZXJcIiEgQmVmb3JlXG4gIC8vIGFkZGluZyBpdCB0byB0aGUgbGlzdGVuZXJzLCBmaXJzdCBlbWl0IFwibmV3TGlzdGVuZXJcIi5cbiAgaWYgKHRoaXMuX2V2ZW50cy5uZXdMaXN0ZW5lcilcbiAgICB0aGlzLmVtaXQoJ25ld0xpc3RlbmVyJywgdHlwZSxcbiAgICAgICAgICAgICAgaXNGdW5jdGlvbihsaXN0ZW5lci5saXN0ZW5lcikgP1xuICAgICAgICAgICAgICBsaXN0ZW5lci5saXN0ZW5lciA6IGxpc3RlbmVyKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICAvLyBPcHRpbWl6ZSB0aGUgY2FzZSBvZiBvbmUgbGlzdGVuZXIuIERvbid0IG5lZWQgdGhlIGV4dHJhIGFycmF5IG9iamVjdC5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0gPSBsaXN0ZW5lcjtcbiAgZWxzZSBpZiAoaXNPYmplY3QodGhpcy5fZXZlbnRzW3R5cGVdKSlcbiAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IGdvdCBhbiBhcnJheSwganVzdCBhcHBlbmQuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdLnB1c2gobGlzdGVuZXIpO1xuICBlbHNlXG4gICAgLy8gQWRkaW5nIHRoZSBzZWNvbmQgZWxlbWVudCwgbmVlZCB0byBjaGFuZ2UgdG8gYXJyYXkuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdID0gW3RoaXMuX2V2ZW50c1t0eXBlXSwgbGlzdGVuZXJdO1xuXG4gIC8vIENoZWNrIGZvciBsaXN0ZW5lciBsZWFrXG4gIGlmIChpc09iamVjdCh0aGlzLl9ldmVudHNbdHlwZV0pICYmICF0aGlzLl9ldmVudHNbdHlwZV0ud2FybmVkKSB7XG4gICAgdmFyIG07XG4gICAgaWYgKCFpc1VuZGVmaW5lZCh0aGlzLl9tYXhMaXN0ZW5lcnMpKSB7XG4gICAgICBtID0gdGhpcy5fbWF4TGlzdGVuZXJzO1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gICAgfVxuXG4gICAgaWYgKG0gJiYgbSA+IDAgJiYgdGhpcy5fZXZlbnRzW3R5cGVdLmxlbmd0aCA+IG0pIHtcbiAgICAgIHRoaXMuX2V2ZW50c1t0eXBlXS53YXJuZWQgPSB0cnVlO1xuICAgICAgY29uc29sZS5lcnJvcignKG5vZGUpIHdhcm5pbmc6IHBvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgJyArXG4gICAgICAgICAgICAgICAgICAgICdsZWFrIGRldGVjdGVkLiAlZCBsaXN0ZW5lcnMgYWRkZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAnVXNlIGVtaXR0ZXIuc2V0TWF4TGlzdGVuZXJzKCkgdG8gaW5jcmVhc2UgbGltaXQuJyxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRzW3R5cGVdLmxlbmd0aCk7XG4gICAgICBpZiAodHlwZW9mIGNvbnNvbGUudHJhY2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gbm90IHN1cHBvcnRlZCBpbiBJRSAxMFxuICAgICAgICBjb25zb2xlLnRyYWNlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIHZhciBmaXJlZCA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGcoKSB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBnKTtcblxuICAgIGlmICghZmlyZWQpIHtcbiAgICAgIGZpcmVkID0gdHJ1ZTtcbiAgICAgIGxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgZy5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICB0aGlzLm9uKHR5cGUsIGcpO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLy8gZW1pdHMgYSAncmVtb3ZlTGlzdGVuZXInIGV2ZW50IGlmZiB0aGUgbGlzdGVuZXIgd2FzIHJlbW92ZWRcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgbGlzdCwgcG9zaXRpb24sIGxlbmd0aCwgaTtcblxuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMgfHwgIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICByZXR1cm4gdGhpcztcblxuICBsaXN0ID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuICBsZW5ndGggPSBsaXN0Lmxlbmd0aDtcbiAgcG9zaXRpb24gPSAtMTtcblxuICBpZiAobGlzdCA9PT0gbGlzdGVuZXIgfHxcbiAgICAgIChpc0Z1bmN0aW9uKGxpc3QubGlzdGVuZXIpICYmIGxpc3QubGlzdGVuZXIgPT09IGxpc3RlbmVyKSkge1xuICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgaWYgKHRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0ZW5lcik7XG5cbiAgfSBlbHNlIGlmIChpc09iamVjdChsaXN0KSkge1xuICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tID4gMDspIHtcbiAgICAgIGlmIChsaXN0W2ldID09PSBsaXN0ZW5lciB8fFxuICAgICAgICAgIChsaXN0W2ldLmxpc3RlbmVyICYmIGxpc3RbaV0ubGlzdGVuZXIgPT09IGxpc3RlbmVyKSkge1xuICAgICAgICBwb3NpdGlvbiA9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwb3NpdGlvbiA8IDApXG4gICAgICByZXR1cm4gdGhpcztcblxuICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgbGlzdC5sZW5ndGggPSAwO1xuICAgICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGlzdC5zcGxpY2UocG9zaXRpb24sIDEpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdGVuZXIpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIGtleSwgbGlzdGVuZXJzO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHJldHVybiB0aGlzO1xuXG4gIC8vIG5vdCBsaXN0ZW5pbmcgZm9yIHJlbW92ZUxpc3RlbmVyLCBubyBuZWVkIHRvIGVtaXRcbiAgaWYgKCF0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMClcbiAgICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuICAgIGVsc2UgaWYgKHRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBlbWl0IHJlbW92ZUxpc3RlbmVyIGZvciBhbGwgbGlzdGVuZXJzIG9uIGFsbCBldmVudHNcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICBmb3IgKGtleSBpbiB0aGlzLl9ldmVudHMpIHtcbiAgICAgIGlmIChrZXkgPT09ICdyZW1vdmVMaXN0ZW5lcicpIGNvbnRpbnVlO1xuICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoa2V5KTtcbiAgICB9XG4gICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoJ3JlbW92ZUxpc3RlbmVyJyk7XG4gICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgaWYgKGlzRnVuY3Rpb24obGlzdGVuZXJzKSkge1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBMSUZPIG9yZGVyXG4gICAgd2hpbGUgKGxpc3RlbmVycy5sZW5ndGgpXG4gICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyc1tsaXN0ZW5lcnMubGVuZ3RoIC0gMV0pO1xuICB9XG4gIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIHJldDtcbiAgaWYgKCF0aGlzLl9ldmVudHMgfHwgIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICByZXQgPSBbXTtcbiAgZWxzZSBpZiAoaXNGdW5jdGlvbih0aGlzLl9ldmVudHNbdHlwZV0pKVxuICAgIHJldCA9IFt0aGlzLl9ldmVudHNbdHlwZV1dO1xuICBlbHNlXG4gICAgcmV0ID0gdGhpcy5fZXZlbnRzW3R5cGVdLnNsaWNlKCk7XG4gIHJldHVybiByZXQ7XG59O1xuXG5FdmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uKGVtaXR0ZXIsIHR5cGUpIHtcbiAgdmFyIHJldDtcbiAgaWYgKCFlbWl0dGVyLl9ldmVudHMgfHwgIWVtaXR0ZXIuX2V2ZW50c1t0eXBlXSlcbiAgICByZXQgPSAwO1xuICBlbHNlIGlmIChpc0Z1bmN0aW9uKGVtaXR0ZXIuX2V2ZW50c1t0eXBlXSkpXG4gICAgcmV0ID0gMTtcbiAgZWxzZVxuICAgIHJldCA9IGVtaXR0ZXIuX2V2ZW50c1t0eXBlXS5sZW5ndGg7XG4gIHJldHVybiByZXQ7XG59O1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZnVuY3Rpb24gaXNOdW1iZXIoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnbnVtYmVyJztcbn1cblxuZnVuY3Rpb24gaXNPYmplY3QoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJiBhcmcgIT09IG51bGw7XG59XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09PSB2b2lkIDA7XG59XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBzZXRUaW1lb3V0KGRyYWluUXVldWUsIDApO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxuLy8gVE9ETyhzaHR5bG1hbilcbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cy5EaXNwYXRjaGVyID0gcmVxdWlyZSgnLi9saWIvRGlzcGF0Y2hlcicpXG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIERpc3BhdGNoZXJcbiAqIEB0eXBlY2hlY2tzXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCcuL2ludmFyaWFudCcpO1xuXG52YXIgX2xhc3RJRCA9IDE7XG52YXIgX3ByZWZpeCA9ICdJRF8nO1xuXG4vKipcbiAqIERpc3BhdGNoZXIgaXMgdXNlZCB0byBicm9hZGNhc3QgcGF5bG9hZHMgdG8gcmVnaXN0ZXJlZCBjYWxsYmFja3MuIFRoaXMgaXNcbiAqIGRpZmZlcmVudCBmcm9tIGdlbmVyaWMgcHViLXN1YiBzeXN0ZW1zIGluIHR3byB3YXlzOlxuICpcbiAqICAgMSkgQ2FsbGJhY2tzIGFyZSBub3Qgc3Vic2NyaWJlZCB0byBwYXJ0aWN1bGFyIGV2ZW50cy4gRXZlcnkgcGF5bG9hZCBpc1xuICogICAgICBkaXNwYXRjaGVkIHRvIGV2ZXJ5IHJlZ2lzdGVyZWQgY2FsbGJhY2suXG4gKiAgIDIpIENhbGxiYWNrcyBjYW4gYmUgZGVmZXJyZWQgaW4gd2hvbGUgb3IgcGFydCB1bnRpbCBvdGhlciBjYWxsYmFja3MgaGF2ZVxuICogICAgICBiZWVuIGV4ZWN1dGVkLlxuICpcbiAqIEZvciBleGFtcGxlLCBjb25zaWRlciB0aGlzIGh5cG90aGV0aWNhbCBmbGlnaHQgZGVzdGluYXRpb24gZm9ybSwgd2hpY2hcbiAqIHNlbGVjdHMgYSBkZWZhdWx0IGNpdHkgd2hlbiBhIGNvdW50cnkgaXMgc2VsZWN0ZWQ6XG4gKlxuICogICB2YXIgZmxpZ2h0RGlzcGF0Y2hlciA9IG5ldyBEaXNwYXRjaGVyKCk7XG4gKlxuICogICAvLyBLZWVwcyB0cmFjayBvZiB3aGljaCBjb3VudHJ5IGlzIHNlbGVjdGVkXG4gKiAgIHZhciBDb3VudHJ5U3RvcmUgPSB7Y291bnRyeTogbnVsbH07XG4gKlxuICogICAvLyBLZWVwcyB0cmFjayBvZiB3aGljaCBjaXR5IGlzIHNlbGVjdGVkXG4gKiAgIHZhciBDaXR5U3RvcmUgPSB7Y2l0eTogbnVsbH07XG4gKlxuICogICAvLyBLZWVwcyB0cmFjayBvZiB0aGUgYmFzZSBmbGlnaHQgcHJpY2Ugb2YgdGhlIHNlbGVjdGVkIGNpdHlcbiAqICAgdmFyIEZsaWdodFByaWNlU3RvcmUgPSB7cHJpY2U6IG51bGx9XG4gKlxuICogV2hlbiBhIHVzZXIgY2hhbmdlcyB0aGUgc2VsZWN0ZWQgY2l0eSwgd2UgZGlzcGF0Y2ggdGhlIHBheWxvYWQ6XG4gKlxuICogICBmbGlnaHREaXNwYXRjaGVyLmRpc3BhdGNoKHtcbiAqICAgICBhY3Rpb25UeXBlOiAnY2l0eS11cGRhdGUnLFxuICogICAgIHNlbGVjdGVkQ2l0eTogJ3BhcmlzJ1xuICogICB9KTtcbiAqXG4gKiBUaGlzIHBheWxvYWQgaXMgZGlnZXN0ZWQgYnkgYENpdHlTdG9yZWA6XG4gKlxuICogICBmbGlnaHREaXNwYXRjaGVyLnJlZ2lzdGVyKGZ1bmN0aW9uKHBheWxvYWQpIHtcbiAqICAgICBpZiAocGF5bG9hZC5hY3Rpb25UeXBlID09PSAnY2l0eS11cGRhdGUnKSB7XG4gKiAgICAgICBDaXR5U3RvcmUuY2l0eSA9IHBheWxvYWQuc2VsZWN0ZWRDaXR5O1xuICogICAgIH1cbiAqICAgfSk7XG4gKlxuICogV2hlbiB0aGUgdXNlciBzZWxlY3RzIGEgY291bnRyeSwgd2UgZGlzcGF0Y2ggdGhlIHBheWxvYWQ6XG4gKlxuICogICBmbGlnaHREaXNwYXRjaGVyLmRpc3BhdGNoKHtcbiAqICAgICBhY3Rpb25UeXBlOiAnY291bnRyeS11cGRhdGUnLFxuICogICAgIHNlbGVjdGVkQ291bnRyeTogJ2F1c3RyYWxpYSdcbiAqICAgfSk7XG4gKlxuICogVGhpcyBwYXlsb2FkIGlzIGRpZ2VzdGVkIGJ5IGJvdGggc3RvcmVzOlxuICpcbiAqICAgIENvdW50cnlTdG9yZS5kaXNwYXRjaFRva2VuID0gZmxpZ2h0RGlzcGF0Y2hlci5yZWdpc3RlcihmdW5jdGlvbihwYXlsb2FkKSB7XG4gKiAgICAgaWYgKHBheWxvYWQuYWN0aW9uVHlwZSA9PT0gJ2NvdW50cnktdXBkYXRlJykge1xuICogICAgICAgQ291bnRyeVN0b3JlLmNvdW50cnkgPSBwYXlsb2FkLnNlbGVjdGVkQ291bnRyeTtcbiAqICAgICB9XG4gKiAgIH0pO1xuICpcbiAqIFdoZW4gdGhlIGNhbGxiYWNrIHRvIHVwZGF0ZSBgQ291bnRyeVN0b3JlYCBpcyByZWdpc3RlcmVkLCB3ZSBzYXZlIGEgcmVmZXJlbmNlXG4gKiB0byB0aGUgcmV0dXJuZWQgdG9rZW4uIFVzaW5nIHRoaXMgdG9rZW4gd2l0aCBgd2FpdEZvcigpYCwgd2UgY2FuIGd1YXJhbnRlZVxuICogdGhhdCBgQ291bnRyeVN0b3JlYCBpcyB1cGRhdGVkIGJlZm9yZSB0aGUgY2FsbGJhY2sgdGhhdCB1cGRhdGVzIGBDaXR5U3RvcmVgXG4gKiBuZWVkcyB0byBxdWVyeSBpdHMgZGF0YS5cbiAqXG4gKiAgIENpdHlTdG9yZS5kaXNwYXRjaFRva2VuID0gZmxpZ2h0RGlzcGF0Y2hlci5yZWdpc3RlcihmdW5jdGlvbihwYXlsb2FkKSB7XG4gKiAgICAgaWYgKHBheWxvYWQuYWN0aW9uVHlwZSA9PT0gJ2NvdW50cnktdXBkYXRlJykge1xuICogICAgICAgLy8gYENvdW50cnlTdG9yZS5jb3VudHJ5YCBtYXkgbm90IGJlIHVwZGF0ZWQuXG4gKiAgICAgICBmbGlnaHREaXNwYXRjaGVyLndhaXRGb3IoW0NvdW50cnlTdG9yZS5kaXNwYXRjaFRva2VuXSk7XG4gKiAgICAgICAvLyBgQ291bnRyeVN0b3JlLmNvdW50cnlgIGlzIG5vdyBndWFyYW50ZWVkIHRvIGJlIHVwZGF0ZWQuXG4gKlxuICogICAgICAgLy8gU2VsZWN0IHRoZSBkZWZhdWx0IGNpdHkgZm9yIHRoZSBuZXcgY291bnRyeVxuICogICAgICAgQ2l0eVN0b3JlLmNpdHkgPSBnZXREZWZhdWx0Q2l0eUZvckNvdW50cnkoQ291bnRyeVN0b3JlLmNvdW50cnkpO1xuICogICAgIH1cbiAqICAgfSk7XG4gKlxuICogVGhlIHVzYWdlIG9mIGB3YWl0Rm9yKClgIGNhbiBiZSBjaGFpbmVkLCBmb3IgZXhhbXBsZTpcbiAqXG4gKiAgIEZsaWdodFByaWNlU3RvcmUuZGlzcGF0Y2hUb2tlbiA9XG4gKiAgICAgZmxpZ2h0RGlzcGF0Y2hlci5yZWdpc3RlcihmdW5jdGlvbihwYXlsb2FkKSB7XG4gKiAgICAgICBzd2l0Y2ggKHBheWxvYWQuYWN0aW9uVHlwZSkge1xuICogICAgICAgICBjYXNlICdjb3VudHJ5LXVwZGF0ZSc6XG4gKiAgICAgICAgICAgZmxpZ2h0RGlzcGF0Y2hlci53YWl0Rm9yKFtDaXR5U3RvcmUuZGlzcGF0Y2hUb2tlbl0pO1xuICogICAgICAgICAgIEZsaWdodFByaWNlU3RvcmUucHJpY2UgPVxuICogICAgICAgICAgICAgZ2V0RmxpZ2h0UHJpY2VTdG9yZShDb3VudHJ5U3RvcmUuY291bnRyeSwgQ2l0eVN0b3JlLmNpdHkpO1xuICogICAgICAgICAgIGJyZWFrO1xuICpcbiAqICAgICAgICAgY2FzZSAnY2l0eS11cGRhdGUnOlxuICogICAgICAgICAgIEZsaWdodFByaWNlU3RvcmUucHJpY2UgPVxuICogICAgICAgICAgICAgRmxpZ2h0UHJpY2VTdG9yZShDb3VudHJ5U3RvcmUuY291bnRyeSwgQ2l0eVN0b3JlLmNpdHkpO1xuICogICAgICAgICAgIGJyZWFrO1xuICogICAgIH1cbiAqICAgfSk7XG4gKlxuICogVGhlIGBjb3VudHJ5LXVwZGF0ZWAgcGF5bG9hZCB3aWxsIGJlIGd1YXJhbnRlZWQgdG8gaW52b2tlIHRoZSBzdG9yZXMnXG4gKiByZWdpc3RlcmVkIGNhbGxiYWNrcyBpbiBvcmRlcjogYENvdW50cnlTdG9yZWAsIGBDaXR5U3RvcmVgLCB0aGVuXG4gKiBgRmxpZ2h0UHJpY2VTdG9yZWAuXG4gKi9cblxuICBmdW5jdGlvbiBEaXNwYXRjaGVyKCkge1xuICAgIHRoaXMuJERpc3BhdGNoZXJfY2FsbGJhY2tzID0ge307XG4gICAgdGhpcy4kRGlzcGF0Y2hlcl9pc1BlbmRpbmcgPSB7fTtcbiAgICB0aGlzLiREaXNwYXRjaGVyX2lzSGFuZGxlZCA9IHt9O1xuICAgIHRoaXMuJERpc3BhdGNoZXJfaXNEaXNwYXRjaGluZyA9IGZhbHNlO1xuICAgIHRoaXMuJERpc3BhdGNoZXJfcGVuZGluZ1BheWxvYWQgPSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIGNhbGxiYWNrIHRvIGJlIGludm9rZWQgd2l0aCBldmVyeSBkaXNwYXRjaGVkIHBheWxvYWQuIFJldHVybnNcbiAgICogYSB0b2tlbiB0aGF0IGNhbiBiZSB1c2VkIHdpdGggYHdhaXRGb3IoKWAuXG4gICAqXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIERpc3BhdGNoZXIucHJvdG90eXBlLnJlZ2lzdGVyPWZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgdmFyIGlkID0gX3ByZWZpeCArIF9sYXN0SUQrKztcbiAgICB0aGlzLiREaXNwYXRjaGVyX2NhbGxiYWNrc1tpZF0gPSBjYWxsYmFjaztcbiAgICByZXR1cm4gaWQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYSBjYWxsYmFjayBiYXNlZCBvbiBpdHMgdG9rZW4uXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpZFxuICAgKi9cbiAgRGlzcGF0Y2hlci5wcm90b3R5cGUudW5yZWdpc3Rlcj1mdW5jdGlvbihpZCkge1xuICAgIGludmFyaWFudChcbiAgICAgIHRoaXMuJERpc3BhdGNoZXJfY2FsbGJhY2tzW2lkXSxcbiAgICAgICdEaXNwYXRjaGVyLnVucmVnaXN0ZXIoLi4uKTogYCVzYCBkb2VzIG5vdCBtYXAgdG8gYSByZWdpc3RlcmVkIGNhbGxiYWNrLicsXG4gICAgICBpZFxuICAgICk7XG4gICAgZGVsZXRlIHRoaXMuJERpc3BhdGNoZXJfY2FsbGJhY2tzW2lkXTtcbiAgfTtcblxuICAvKipcbiAgICogV2FpdHMgZm9yIHRoZSBjYWxsYmFja3Mgc3BlY2lmaWVkIHRvIGJlIGludm9rZWQgYmVmb3JlIGNvbnRpbnVpbmcgZXhlY3V0aW9uXG4gICAqIG9mIHRoZSBjdXJyZW50IGNhbGxiYWNrLiBUaGlzIG1ldGhvZCBzaG91bGQgb25seSBiZSB1c2VkIGJ5IGEgY2FsbGJhY2sgaW5cbiAgICogcmVzcG9uc2UgdG8gYSBkaXNwYXRjaGVkIHBheWxvYWQuXG4gICAqXG4gICAqIEBwYXJhbSB7YXJyYXk8c3RyaW5nPn0gaWRzXG4gICAqL1xuICBEaXNwYXRjaGVyLnByb3RvdHlwZS53YWl0Rm9yPWZ1bmN0aW9uKGlkcykge1xuICAgIGludmFyaWFudChcbiAgICAgIHRoaXMuJERpc3BhdGNoZXJfaXNEaXNwYXRjaGluZyxcbiAgICAgICdEaXNwYXRjaGVyLndhaXRGb3IoLi4uKTogTXVzdCBiZSBpbnZva2VkIHdoaWxlIGRpc3BhdGNoaW5nLidcbiAgICApO1xuICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCBpZHMubGVuZ3RoOyBpaSsrKSB7XG4gICAgICB2YXIgaWQgPSBpZHNbaWldO1xuICAgICAgaWYgKHRoaXMuJERpc3BhdGNoZXJfaXNQZW5kaW5nW2lkXSkge1xuICAgICAgICBpbnZhcmlhbnQoXG4gICAgICAgICAgdGhpcy4kRGlzcGF0Y2hlcl9pc0hhbmRsZWRbaWRdLFxuICAgICAgICAgICdEaXNwYXRjaGVyLndhaXRGb3IoLi4uKTogQ2lyY3VsYXIgZGVwZW5kZW5jeSBkZXRlY3RlZCB3aGlsZSAnICtcbiAgICAgICAgICAnd2FpdGluZyBmb3IgYCVzYC4nLFxuICAgICAgICAgIGlkXG4gICAgICAgICk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaW52YXJpYW50KFxuICAgICAgICB0aGlzLiREaXNwYXRjaGVyX2NhbGxiYWNrc1tpZF0sXG4gICAgICAgICdEaXNwYXRjaGVyLndhaXRGb3IoLi4uKTogYCVzYCBkb2VzIG5vdCBtYXAgdG8gYSByZWdpc3RlcmVkIGNhbGxiYWNrLicsXG4gICAgICAgIGlkXG4gICAgICApO1xuICAgICAgdGhpcy4kRGlzcGF0Y2hlcl9pbnZva2VDYWxsYmFjayhpZCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBEaXNwYXRjaGVzIGEgcGF5bG9hZCB0byBhbGwgcmVnaXN0ZXJlZCBjYWxsYmFja3MuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwYXlsb2FkXG4gICAqL1xuICBEaXNwYXRjaGVyLnByb3RvdHlwZS5kaXNwYXRjaD1mdW5jdGlvbihwYXlsb2FkKSB7XG4gICAgaW52YXJpYW50KFxuICAgICAgIXRoaXMuJERpc3BhdGNoZXJfaXNEaXNwYXRjaGluZyxcbiAgICAgICdEaXNwYXRjaC5kaXNwYXRjaCguLi4pOiBDYW5ub3QgZGlzcGF0Y2ggaW4gdGhlIG1pZGRsZSBvZiBhIGRpc3BhdGNoLidcbiAgICApO1xuICAgIHRoaXMuJERpc3BhdGNoZXJfc3RhcnREaXNwYXRjaGluZyhwYXlsb2FkKTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgaWQgaW4gdGhpcy4kRGlzcGF0Y2hlcl9jYWxsYmFja3MpIHtcbiAgICAgICAgaWYgKHRoaXMuJERpc3BhdGNoZXJfaXNQZW5kaW5nW2lkXSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuJERpc3BhdGNoZXJfaW52b2tlQ2FsbGJhY2soaWQpO1xuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLiREaXNwYXRjaGVyX3N0b3BEaXNwYXRjaGluZygpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogSXMgdGhpcyBEaXNwYXRjaGVyIGN1cnJlbnRseSBkaXNwYXRjaGluZy5cbiAgICpcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIERpc3BhdGNoZXIucHJvdG90eXBlLmlzRGlzcGF0Y2hpbmc9ZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuJERpc3BhdGNoZXJfaXNEaXNwYXRjaGluZztcbiAgfTtcblxuICAvKipcbiAgICogQ2FsbCB0aGUgY2FsbGJhY2sgc3RvcmVkIHdpdGggdGhlIGdpdmVuIGlkLiBBbHNvIGRvIHNvbWUgaW50ZXJuYWxcbiAgICogYm9va2tlZXBpbmcuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpZFxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIERpc3BhdGNoZXIucHJvdG90eXBlLiREaXNwYXRjaGVyX2ludm9rZUNhbGxiYWNrPWZ1bmN0aW9uKGlkKSB7XG4gICAgdGhpcy4kRGlzcGF0Y2hlcl9pc1BlbmRpbmdbaWRdID0gdHJ1ZTtcbiAgICB0aGlzLiREaXNwYXRjaGVyX2NhbGxiYWNrc1tpZF0odGhpcy4kRGlzcGF0Y2hlcl9wZW5kaW5nUGF5bG9hZCk7XG4gICAgdGhpcy4kRGlzcGF0Y2hlcl9pc0hhbmRsZWRbaWRdID0gdHJ1ZTtcbiAgfTtcblxuICAvKipcbiAgICogU2V0IHVwIGJvb2trZWVwaW5nIG5lZWRlZCB3aGVuIGRpc3BhdGNoaW5nLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gcGF5bG9hZFxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIERpc3BhdGNoZXIucHJvdG90eXBlLiREaXNwYXRjaGVyX3N0YXJ0RGlzcGF0Y2hpbmc9ZnVuY3Rpb24ocGF5bG9hZCkge1xuICAgIGZvciAodmFyIGlkIGluIHRoaXMuJERpc3BhdGNoZXJfY2FsbGJhY2tzKSB7XG4gICAgICB0aGlzLiREaXNwYXRjaGVyX2lzUGVuZGluZ1tpZF0gPSBmYWxzZTtcbiAgICAgIHRoaXMuJERpc3BhdGNoZXJfaXNIYW5kbGVkW2lkXSA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLiREaXNwYXRjaGVyX3BlbmRpbmdQYXlsb2FkID0gcGF5bG9hZDtcbiAgICB0aGlzLiREaXNwYXRjaGVyX2lzRGlzcGF0Y2hpbmcgPSB0cnVlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDbGVhciBib29ra2VlcGluZyB1c2VkIGZvciBkaXNwYXRjaGluZy5cbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuICBEaXNwYXRjaGVyLnByb3RvdHlwZS4kRGlzcGF0Y2hlcl9zdG9wRGlzcGF0Y2hpbmc9ZnVuY3Rpb24oKSB7XG4gICAgdGhpcy4kRGlzcGF0Y2hlcl9wZW5kaW5nUGF5bG9hZCA9IG51bGw7XG4gICAgdGhpcy4kRGlzcGF0Y2hlcl9pc0Rpc3BhdGNoaW5nID0gZmFsc2U7XG4gIH07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBEaXNwYXRjaGVyO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgaW52YXJpYW50XG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICpcbiAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAqIGV4cGVjdGluZy5cbiAqXG4gKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICovXG5cbnZhciBpbnZhcmlhbnQgPSBmdW5jdGlvbihjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICBpZiAoZmFsc2UpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH1cblxuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHZhciBlcnJvcjtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICAnTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArXG4gICAgICAgICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLidcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhcmdzID0gW2EsIGIsIGMsIGQsIGUsIGZdO1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICAnSW52YXJpYW50IFZpb2xhdGlvbjogJyArXG4gICAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107IH0pXG4gICAgICApO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIFRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09IG51bGwpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBvd25FbnVtZXJhYmxlS2V5cyhvYmopIHtcblx0dmFyIGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopO1xuXG5cdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0a2V5cyA9IGtleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqKSk7XG5cdH1cblxuXHRyZXR1cm4ga2V5cy5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuXHRcdHJldHVybiBwcm9wSXNFbnVtZXJhYmxlLmNhbGwob2JqLCBrZXkpO1xuXHR9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIGtleXM7XG5cdHZhciB0byA9IFRvT2JqZWN0KHRhcmdldCk7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gYXJndW1lbnRzW3NdO1xuXHRcdGtleXMgPSBvd25FbnVtZXJhYmxlS2V5cyhPYmplY3QoZnJvbSkpO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR0b1trZXlzW2ldXSA9IGZyb21ba2V5c1tpXV07XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcbiIsIi8qIGpzaGludCBub2RlOnRydWUgKi9cbid1c2Ugc3RyaWN0JztcblxuLy8gRXhwb3NlIGBSZWFjdGAgYXMgYSBnbG9iYWwsIGJlY2F1c2UgdGhlIFJlYWN0SW50bE1peGluIGFzc3VtZXMgaXQncyBnbG9iYWwuXG52YXIgb2xkUmVhY3QgPSBnbG9iYWwuUmVhY3Q7XG5nbG9iYWwuUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG4vLyBSZXF1aXJlIHRoZSBsaWIgYW5kIGFkZCBhbGwgbG9jYWxlIGRhdGEgdG8gYFJlYWN0SW50bGAuIFRoaXMgbW9kdWxlIHdpbGwgYmVcbi8vIGlnbm9yZWQgd2hlbiBidW5kbGluZyBmb3IgdGhlIGJyb3dzZXIgd2l0aCBCcm93c2VyaWZ5L1dlYnBhY2suXG52YXIgUmVhY3RJbnRsID0gcmVxdWlyZSgnLi9saWIvcmVhY3QtaW50bCcpO1xucmVxdWlyZSgnLi9saWIvbG9jYWxlcycpO1xuXG4vLyBFeHBvcnQgdGhlIE1peGluIGFzIHRoZSBkZWZhdWx0IGV4cG9ydCBmb3IgYmFjay1jb21wYXQgd2l0aCB2MS4wLjAuIFRoaXMgd2lsbFxuLy8gYmUgY2hhbmdlZCB0byBzaW1wbHkgcmUtZXhwb3J0aW5nIGBSZWFjdEludGxgIGFzIHRoZSBkZWZhdWx0IGV4cG9ydCBpbiB2Mi4wLlxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gUmVhY3RJbnRsLkludGxNaXhpbjtcblxuLy8gRGVmaW5lIG5vbi1lbnVtZXJhYmxlIGV4cGFuZG9zIGZvciBlYWNoIG5hbWVkIGV4cG9ydCBvbiB0aGUgZGVmYXVsdCBleHBvcnQgLS1cbi8vIHdoaWNoIGlzIHRoZSBNaXhpbiBmb3IgYmFjay1jb21wYXQgd2l0aCB2MS4wLjAuXG5PYmplY3Qua2V5cyhSZWFjdEludGwpLmZvckVhY2goZnVuY3Rpb24gKG5hbWVkRXhwb3J0KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWVkRXhwb3J0LCB7XG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlICAgICA6IFJlYWN0SW50bFtuYW1lZEV4cG9ydF1cbiAgICB9KTtcbn0pO1xuXG4vLyBQdXQgYmFjayBgZ2xvYmFsLlJlYWN0YCB0byBob3cgaXQgd2FzLlxuaWYgKG9sZFJlYWN0KSB7XG4gICAgZ2xvYmFsLlJlYWN0ID0gb2xkUmVhY3Q7XG59IGVsc2Uge1xuICAgIC8vIElFIDwgOSB3aWxsIHRocm93IHdoZW4gdHJ5aW5nIHRvIGRlbGV0ZSBzb21ldGhpbmcgb2ZmIHRoZSBnbG9iYWwgb2JqZWN0LFxuICAgIC8vIGB3aW5kb3dgLCBzbyB0aGlzIGRvZXMgdGhlIG5leHQgYmVzdCB0aGluZyBhcyBzZXRzIGl0IHRvIGB1bmRlZmluZWRgLlxuICAgIHRyeSB7XG4gICAgICAgIGRlbGV0ZSBnbG9iYWwuUmVhY3Q7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBnbG9iYWwuUmVhY3QgPSB1bmRlZmluZWQ7XG4gICAgfVxufVxuIiwiLyoganNoaW50IGVzbmV4dDp0cnVlICovXG5cbi8vIFRPRE86IFVzZSBgaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO2Agd2hlbiBleHRlcm5hbCBtb2R1bGVzIGFyZSBzdXBwb3J0ZWQuXG5cInVzZSBzdHJpY3RcIjtcbnZhciBzcmMkcmVhY3QkJCA9IHJlcXVpcmUoXCIuLi9yZWFjdFwiKSwgc3JjJG1peGluJCQgPSByZXF1aXJlKFwiLi4vbWl4aW5cIik7XG5cbnZhciBGb3JtYXR0ZWREYXRlID0gc3JjJHJlYWN0JCRbXCJkZWZhdWx0XCJdLmNyZWF0ZUNsYXNzKHtcbiAgICBkaXNwbGF5TmFtZTogJ0Zvcm1hdHRlZERhdGUnLFxuICAgIG1peGlucyAgICAgOiBbc3JjJG1peGluJCRbXCJkZWZhdWx0XCJdXSxcblxuICAgIHN0YXRpY3M6IHtcbiAgICAgICAgZm9ybWF0T3B0aW9uczogW1xuICAgICAgICAgICAgJ2xvY2FsZU1hdGNoZXInLCAndGltZVpvbmUnLCAnaG91cjEyJywgJ2Zvcm1hdE1hdGNoZXInLCAnd2Vla2RheScsXG4gICAgICAgICAgICAnZXJhJywgJ3llYXInLCAnbW9udGgnLCAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcsXG4gICAgICAgICAgICAndGltZVpvbmVOYW1lJ1xuICAgICAgICBdXG4gICAgfSxcblxuICAgIHByb3BUeXBlczoge1xuICAgICAgICBmb3JtYXQ6IHNyYyRyZWFjdCQkW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICB2YWx1ZSA6IHNyYyRyZWFjdCQkW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuYW55LmlzUmVxdWlyZWRcbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBwcm9wcyAgICA9IHRoaXMucHJvcHM7XG4gICAgICAgIHZhciB2YWx1ZSAgICA9IHByb3BzLnZhbHVlO1xuICAgICAgICB2YXIgZm9ybWF0ICAgPSBwcm9wcy5mb3JtYXQ7XG4gICAgICAgIHZhciBkZWZhdWx0cyA9IGZvcm1hdCAmJiB0aGlzLmdldE5hbWVkRm9ybWF0KCdkYXRlJywgZm9ybWF0KTtcbiAgICAgICAgdmFyIG9wdGlvbnMgID0gRm9ybWF0dGVkRGF0ZS5maWx0ZXJGb3JtYXRPcHRpb25zKHByb3BzLCBkZWZhdWx0cyk7XG5cbiAgICAgICAgcmV0dXJuIHNyYyRyZWFjdCQkW1wiZGVmYXVsdFwiXS5ET00uc3BhbihudWxsLCB0aGlzLmZvcm1hdERhdGUodmFsdWUsIG9wdGlvbnMpKTtcbiAgICB9XG59KTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBGb3JtYXR0ZWREYXRlO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRlLmpzLm1hcCIsIi8qIGpzaGludCBlc25leHQ6dHJ1ZSAqL1xuXG4vLyBUT0RPOiBVc2UgYGltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtgIHdoZW4gZXh0ZXJuYWwgbW9kdWxlcyBhcmUgc3VwcG9ydGVkLlxuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgc3JjJHJlYWN0JCQgPSByZXF1aXJlKFwiLi4vcmVhY3RcIiksIHNyYyRlc2NhcGUkJCA9IHJlcXVpcmUoXCIuLi9lc2NhcGVcIiksIHNyYyRtaXhpbiQkID0gcmVxdWlyZShcIi4uL21peGluXCIpO1xuXG52YXIgRm9ybWF0dGVkSFRNTE1lc3NhZ2UgPSBzcmMkcmVhY3QkJFtcImRlZmF1bHRcIl0uY3JlYXRlQ2xhc3Moe1xuICAgIGRpc3BsYXlOYW1lOiAnRm9ybWF0dGVkSFRNTE1lc3NhZ2UnLFxuICAgIG1peGlucyAgICAgOiBbc3JjJG1peGluJCRbXCJkZWZhdWx0XCJdXSxcblxuICAgIHByb3BUeXBlczoge1xuICAgICAgICB0YWdOYW1lOiBzcmMkcmVhY3QkJFtcImRlZmF1bHRcIl0uUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgbWVzc2FnZTogc3JjJHJlYWN0JCRbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuICAgIH0sXG5cbiAgICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHt0YWdOYW1lOiAnc3Bhbid9O1xuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHByb3BzICAgPSB0aGlzLnByb3BzO1xuICAgICAgICB2YXIgdGFnTmFtZSA9IHByb3BzLnRhZ05hbWU7XG4gICAgICAgIHZhciBtZXNzYWdlID0gcHJvcHMubWVzc2FnZTtcblxuICAgICAgICAvLyBQcm9jZXNzIGFsbCB0aGUgcHJvcHMgYmVmb3JlIHRoZXkgYXJlIHVzZWQgYXMgdmFsdWVzIHdoZW4gZm9ybWF0dGluZ1xuICAgICAgICAvLyB0aGUgSUNVIE1lc3NhZ2Ugc3RyaW5nLiBTaW5jZSB0aGUgZm9ybWF0dGVkIG1lc3NhZ2Ugd2lsbCBiZSBpbmplY3RlZFxuICAgICAgICAvLyB2aWEgYGlubmVySFRNTGAsIGFsbCBTdHJpbmctYmFzZWQgdmFsdWVzIG5lZWQgdG8gYmUgSFRNTC1lc2NhcGVkLiBBbnlcbiAgICAgICAgLy8gUmVhY3QgRWxlbWVudHMgdGhhdCBhcmUgcGFzc2VkIGFzIHByb3BzIHdpbGwgYmUgcmVuZGVyZWQgdG8gYSBzdGF0aWNcbiAgICAgICAgLy8gbWFya3VwIHN0cmluZyB0aGF0IGlzIHByZXN1bWVkIHRvIGJlIHNhZmUuXG4gICAgICAgIHZhciB2YWx1ZXMgPSBPYmplY3Qua2V5cyhwcm9wcykucmVkdWNlKGZ1bmN0aW9uICh2YWx1ZXMsIG5hbWUpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHByb3BzW25hbWVdO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gc3JjJGVzY2FwZSQkW1wiZGVmYXVsdFwiXSh2YWx1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNyYyRyZWFjdCQkW1wiZGVmYXVsdFwiXS5pc1ZhbGlkRWxlbWVudCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHNyYyRyZWFjdCQkW1wiZGVmYXVsdFwiXS5yZW5kZXJUb1N0YXRpY01hcmt1cCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhbHVlc1tuYW1lXSA9IHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICAgICAgfSwge30pO1xuXG4gICAgICAgIC8vIFNpbmNlIHRoZSBtZXNzYWdlIHByZXN1bWFibHkgaGFzIEhUTUwgaW4gaXQsIHdlIG5lZWQgdG8gc2V0XG4gICAgICAgIC8vIGBpbm5lckhUTUxgIGluIG9yZGVyIGZvciBpdCB0byBiZSByZW5kZXJlZCBhbmQgbm90IGVzY2FwZWQgYnkgUmVhY3QuXG4gICAgICAgIC8vIFRvIGJlIHNhZmUsIGFsbCBzdHJpbmcgcHJvcCB2YWx1ZXMgd2VyZSBlc2NhcGVkIGJlZm9yZSBmb3JtYXR0aW5nIHRoZVxuICAgICAgICAvLyBtZXNzYWdlLiBJdCBpcyBhc3N1bWVkIHRoYXQgdGhlIG1lc3NhZ2UgaXMgbm90IFVHQywgYW5kIGNhbWUgZnJvbVxuICAgICAgICAvLyB0aGUgZGV2ZWxvcGVyIG1ha2luZyBpdCBtb3JlIGxpa2UgYSB0ZW1wbGF0ZS5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gTm90ZTogVGhlcmUncyBhIHBlcmYgaW1wYWN0IG9mIHVzaW5nIHRoaXMgY29tcG9uZW50IHNpbmNlIHRoZXJlJ3Mgbm9cbiAgICAgICAgLy8gd2F5IGZvciBSZWFjdCB0byBkbyBpdHMgdmlydHVhbCBET00gZGlmZmluZy5cbiAgICAgICAgcmV0dXJuIHNyYyRyZWFjdCQkW1wiZGVmYXVsdFwiXS5ET01bdGFnTmFtZV0oe1xuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHtcbiAgICAgICAgICAgICAgICBfX2h0bWw6IHRoaXMuZm9ybWF0TWVzc2FnZShtZXNzYWdlLCB2YWx1ZXMpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0pO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEZvcm1hdHRlZEhUTUxNZXNzYWdlO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1odG1sLW1lc3NhZ2UuanMubWFwIiwiLyoganNoaW50IGVzbmV4dDp0cnVlICovXG5cbi8vIFRPRE86IFVzZSBgaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO2Agd2hlbiBleHRlcm5hbCBtb2R1bGVzIGFyZSBzdXBwb3J0ZWQuXG5cInVzZSBzdHJpY3RcIjtcbnZhciBzcmMkcmVhY3QkJCA9IHJlcXVpcmUoXCIuLi9yZWFjdFwiKSwgc3JjJG1peGluJCQgPSByZXF1aXJlKFwiLi4vbWl4aW5cIik7XG5cbnZhciBGb3JtYXR0ZWRNZXNzYWdlID0gc3JjJHJlYWN0JCRbXCJkZWZhdWx0XCJdLmNyZWF0ZUNsYXNzKHtcbiAgICBkaXNwbGF5TmFtZTogJ0Zvcm1hdHRlZE1lc3NhZ2UnLFxuICAgIG1peGlucyAgICAgOiBbc3JjJG1peGluJCRbXCJkZWZhdWx0XCJdXSxcblxuICAgIHByb3BUeXBlczoge1xuICAgICAgICB0YWdOYW1lOiBzcmMkcmVhY3QkJFtcImRlZmF1bHRcIl0uUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgbWVzc2FnZTogc3JjJHJlYWN0JCRbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuICAgIH0sXG5cbiAgICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHt0YWdOYW1lOiAnc3Bhbid9O1xuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHByb3BzICAgPSB0aGlzLnByb3BzO1xuICAgICAgICB2YXIgdGFnTmFtZSA9IHByb3BzLnRhZ05hbWU7XG4gICAgICAgIHZhciBtZXNzYWdlID0gcHJvcHMubWVzc2FnZTtcblxuICAgICAgICAvLyBDcmVhdGVzIGEgdG9rZW4gd2l0aCBhIHJhbmRvbSBndWlkIHRoYXQgc2hvdWxkIG5vdCBiZSBndWVzc2FibGUgb3JcbiAgICAgICAgLy8gY29uZmxpY3Qgd2l0aCBvdGhlciBwYXJ0cyBvZiB0aGUgYG1lc3NhZ2VgIHN0cmluZy5cbiAgICAgICAgdmFyIGd1aWQgICAgICAgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAweDEwMDAwMDAwMDAwKS50b1N0cmluZygxNik7XG4gICAgICAgIHZhciB0b2tlblJlZ2V4ID0gbmV3IFJlZ0V4cCgnKEBfX0VMRU1FTlQtJyArIGd1aWQgKyAnLVxcXFxkK19fQCknLCAnZycpO1xuICAgICAgICB2YXIgZWxlbWVudHMgICA9IHt9O1xuXG4gICAgICAgIHZhciBnZW5lcmF0ZVRva2VuID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBjb3VudGVyID0gMDtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdAX19FTEVNRU5ULScgKyBndWlkICsgJy0nICsgKGNvdW50ZXIgKz0gMSkgKyAnX19AJztcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0oKSk7XG5cbiAgICAgICAgLy8gSXRlcmF0ZXMgb3ZlciB0aGUgYHByb3BzYCB0byBrZWVwIHRyYWNrIG9mIGFueSBSZWFjdCBFbGVtZW50IHZhbHVlc1xuICAgICAgICAvLyBzbyB0aGV5IGNhbiBiZSByZXByZXNlbnRlZCBieSB0aGUgYHRva2VuYCBhcyBhIHBsYWNlaG9sZGVyIHdoZW4gdGhlXG4gICAgICAgIC8vIGBtZXNzYWdlYCBpcyBmb3JtYXR0ZWQuIFRoaXMgYWxsb3dzIHRoZSBmb3JtYXR0ZWQgbWVzc2FnZSB0byB0aGVuIGJlXG4gICAgICAgIC8vIGJyb2tlbi11cCBpbnRvIHBhcnRzIHdpdGggcmVmZXJlbmNlcyB0byB0aGUgUmVhY3QgRWxlbWVudHMgaW5zZXJ0ZWRcbiAgICAgICAgLy8gYmFjayBpbi5cbiAgICAgICAgdmFyIHZhbHVlcyA9IE9iamVjdC5rZXlzKHByb3BzKS5yZWR1Y2UoZnVuY3Rpb24gKHZhbHVlcywgbmFtZSkge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gcHJvcHNbbmFtZV07XG4gICAgICAgICAgICB2YXIgdG9rZW47XG5cbiAgICAgICAgICAgIGlmIChzcmMkcmVhY3QkJFtcImRlZmF1bHRcIl0uaXNWYWxpZEVsZW1lbnQodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdG9rZW4gICAgICAgICAgID0gZ2VuZXJhdGVUb2tlbigpO1xuICAgICAgICAgICAgICAgIHZhbHVlc1tuYW1lXSAgICA9IHRva2VuO1xuICAgICAgICAgICAgICAgIGVsZW1lbnRzW3Rva2VuXSA9IHZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXNbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICAgICAgfSwge30pO1xuXG4gICAgICAgIC8vIEZvcm1hdHMgdGhlIGBtZXNzYWdlYCB3aXRoIHRoZSBgdmFsdWVzYCwgaW5jbHVkaW5nIHRoZSBgdG9rZW5gXG4gICAgICAgIC8vIHBsYWNlaG9sZGVycyBmb3IgUmVhY3QgRWxlbWVudCB2YWx1ZXMuXG4gICAgICAgIHZhciBmb3JtYXR0ZWRNZXNzYWdlID0gdGhpcy5mb3JtYXRNZXNzYWdlKG1lc3NhZ2UsIHZhbHVlcyk7XG5cbiAgICAgICAgLy8gU3BsaXQgdGhlIG1lc3NhZ2UgaW50byBwYXJ0cyBzbyB0aGUgUmVhY3QgRWxlbWVudCB2YWx1ZXMgY2FwdHVyZWRcbiAgICAgICAgLy8gYWJvdmUgY2FuIGJlIGluc2VydGVkIGJhY2sgaW50byB0aGUgcmVuZGVyZWQgbWVzc2FnZS4gVGhpc1xuICAgICAgICAvLyBhcHByb2FjaCBhbGxvd3MgbWVzc2FnZXMgdG8gcmVuZGVyIHdpdGggUmVhY3QgRWxlbWVudHMgd2hpbGUga2VlcGluZ1xuICAgICAgICAvLyBSZWFjdCdzIHZpcnR1YWwgZGlmZmluZyB3b3JraW5nIHByb3Blcmx5LlxuICAgICAgICB2YXIgY2hpbGRyZW4gPSBmb3JtYXR0ZWRNZXNzYWdlLnNwbGl0KHRva2VuUmVnZXgpXG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChwYXJ0KSB7XG4gICAgICAgICAgICAgICAgLy8gSWdub3JlIGVtcHR5IHN0cmluZyBwYXJ0cy5cbiAgICAgICAgICAgICAgICByZXR1cm4gISFwYXJ0O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHBhcnQpIHtcbiAgICAgICAgICAgICAgICAvLyBXaGVuIHRoZSBgcGFydGAgaXMgYSB0b2tlbiwgZ2V0IGEgcmVmIHRvIHRoZSBSZWFjdCBFbGVtZW50LlxuICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50c1twYXJ0XSB8fCBwYXJ0O1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIGVsZW1lbnRBcmdzID0gW3RhZ05hbWUsIG51bGxdLmNvbmNhdChjaGlsZHJlbik7XG4gICAgICAgIHJldHVybiBzcmMkcmVhY3QkJFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudC5hcHBseShudWxsLCBlbGVtZW50QXJncyk7XG4gICAgfVxufSk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gRm9ybWF0dGVkTWVzc2FnZTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWVzc2FnZS5qcy5tYXAiLCIvKiBqc2hpbnQgZXNuZXh0OnRydWUgKi9cblxuLy8gVE9ETzogVXNlIGBpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7YCB3aGVuIGV4dGVybmFsIG1vZHVsZXMgYXJlIHN1cHBvcnRlZC5cblwidXNlIHN0cmljdFwiO1xudmFyIHNyYyRyZWFjdCQkID0gcmVxdWlyZShcIi4uL3JlYWN0XCIpLCBzcmMkbWl4aW4kJCA9IHJlcXVpcmUoXCIuLi9taXhpblwiKTtcblxudmFyIEZvcm1hdHRlZE51bWJlciA9IHNyYyRyZWFjdCQkW1wiZGVmYXVsdFwiXS5jcmVhdGVDbGFzcyh7XG4gICAgZGlzcGxheU5hbWU6ICdGb3JtYXR0ZWROdW1iZXInLFxuICAgIG1peGlucyAgICAgOiBbc3JjJG1peGluJCRbXCJkZWZhdWx0XCJdXSxcblxuICAgIHN0YXRpY3M6IHtcbiAgICAgICAgZm9ybWF0T3B0aW9uczogW1xuICAgICAgICAgICAgJ2xvY2FsZU1hdGNoZXInLCAnc3R5bGUnLCAnY3VycmVuY3knLCAnY3VycmVuY3lEaXNwbGF5JyxcbiAgICAgICAgICAgICd1c2VHcm91cGluZycsICdtaW5pbXVtSW50ZWdlckRpZ2l0cycsICdtaW5pbXVtRnJhY3Rpb25EaWdpdHMnLFxuICAgICAgICAgICAgJ21heGltdW1GcmFjdGlvbkRpZ2l0cycsICdtaW5pbXVtU2lnbmlmaWNhbnREaWdpdHMnLFxuICAgICAgICAgICAgJ21heGltdW1TaWduaWZpY2FudERpZ2l0cydcbiAgICAgICAgXVxuICAgIH0sXG5cbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgZm9ybWF0OiBzcmMkcmVhY3QkJFtcImRlZmF1bHRcIl0uUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgdmFsdWUgOiBzcmMkcmVhY3QkJFtcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkXG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcHJvcHMgICAgPSB0aGlzLnByb3BzO1xuICAgICAgICB2YXIgdmFsdWUgICAgPSBwcm9wcy52YWx1ZTtcbiAgICAgICAgdmFyIGZvcm1hdCAgID0gcHJvcHMuZm9ybWF0O1xuICAgICAgICB2YXIgZGVmYXVsdHMgPSBmb3JtYXQgJiYgdGhpcy5nZXROYW1lZEZvcm1hdCgnbnVtYmVyJywgZm9ybWF0KTtcbiAgICAgICAgdmFyIG9wdGlvbnMgID0gRm9ybWF0dGVkTnVtYmVyLmZpbHRlckZvcm1hdE9wdGlvbnMocHJvcHMsIGRlZmF1bHRzKTtcblxuICAgICAgICByZXR1cm4gc3JjJHJlYWN0JCRbXCJkZWZhdWx0XCJdLkRPTS5zcGFuKG51bGwsIHRoaXMuZm9ybWF0TnVtYmVyKHZhbHVlLCBvcHRpb25zKSk7XG4gICAgfVxufSk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gRm9ybWF0dGVkTnVtYmVyO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1udW1iZXIuanMubWFwIiwiLyoganNoaW50IGVzbmV4dDp0cnVlICovXG5cbi8vIFRPRE86IFVzZSBgaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO2Agd2hlbiBleHRlcm5hbCBtb2R1bGVzIGFyZSBzdXBwb3J0ZWQuXG5cInVzZSBzdHJpY3RcIjtcbnZhciBzcmMkcmVhY3QkJCA9IHJlcXVpcmUoXCIuLi9yZWFjdFwiKSwgc3JjJG1peGluJCQgPSByZXF1aXJlKFwiLi4vbWl4aW5cIik7XG5cbnZhciBGb3JtYXR0ZWRSZWxhdGl2ZSA9IHNyYyRyZWFjdCQkW1wiZGVmYXVsdFwiXS5jcmVhdGVDbGFzcyh7XG4gICAgZGlzcGxheU5hbWU6ICdGb3JtYXR0ZWRSZWxhdGl2ZScsXG4gICAgbWl4aW5zICAgICA6IFtzcmMkbWl4aW4kJFtcImRlZmF1bHRcIl1dLFxuXG4gICAgc3RhdGljczoge1xuICAgICAgICBmb3JtYXRPcHRpb25zOiBbXG4gICAgICAgICAgICAnc3R5bGUnLCAndW5pdHMnXG4gICAgICAgIF1cbiAgICB9LFxuXG4gICAgcHJvcFR5cGVzOiB7XG4gICAgICAgIGZvcm1hdDogc3JjJHJlYWN0JCRbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHZhbHVlIDogc3JjJHJlYWN0JCRbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgICAgICAgbm93ICAgOiBzcmMkcmVhY3QkJFtcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmFueVxuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHByb3BzICAgID0gdGhpcy5wcm9wcztcbiAgICAgICAgdmFyIHZhbHVlICAgID0gcHJvcHMudmFsdWU7XG4gICAgICAgIHZhciBmb3JtYXQgICA9IHByb3BzLmZvcm1hdDtcbiAgICAgICAgdmFyIGRlZmF1bHRzID0gZm9ybWF0ICYmIHRoaXMuZ2V0TmFtZWRGb3JtYXQoJ3JlbGF0aXZlJywgZm9ybWF0KTtcbiAgICAgICAgdmFyIG9wdGlvbnMgID0gRm9ybWF0dGVkUmVsYXRpdmUuZmlsdGVyRm9ybWF0T3B0aW9ucyhwcm9wcywgZGVmYXVsdHMpO1xuXG4gICAgICAgIHZhciBmb3JtYXR0ZWRSZWxhdGl2ZVRpbWUgPSB0aGlzLmZvcm1hdFJlbGF0aXZlKHZhbHVlLCBvcHRpb25zLCB7XG4gICAgICAgICAgICBub3c6IHByb3BzLm5vd1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gc3JjJHJlYWN0JCRbXCJkZWZhdWx0XCJdLkRPTS5zcGFuKG51bGwsIGZvcm1hdHRlZFJlbGF0aXZlVGltZSk7XG4gICAgfVxufSk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gRm9ybWF0dGVkUmVsYXRpdmU7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlbGF0aXZlLmpzLm1hcCIsIi8qIGpzaGludCBlc25leHQ6dHJ1ZSAqL1xuXG4vLyBUT0RPOiBVc2UgYGltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtgIHdoZW4gZXh0ZXJuYWwgbW9kdWxlcyBhcmUgc3VwcG9ydGVkLlxuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgc3JjJHJlYWN0JCQgPSByZXF1aXJlKFwiLi4vcmVhY3RcIiksIHNyYyRtaXhpbiQkID0gcmVxdWlyZShcIi4uL21peGluXCIpO1xuXG52YXIgRm9ybWF0dGVkVGltZSA9IHNyYyRyZWFjdCQkW1wiZGVmYXVsdFwiXS5jcmVhdGVDbGFzcyh7XG4gICAgZGlzcGxheU5hbWU6ICdGb3JtYXR0ZWRUaW1lJyxcbiAgICBtaXhpbnMgICAgIDogW3NyYyRtaXhpbiQkW1wiZGVmYXVsdFwiXV0sXG5cbiAgICBzdGF0aWNzOiB7XG4gICAgICAgIGZvcm1hdE9wdGlvbnM6IFtcbiAgICAgICAgICAgICdsb2NhbGVNYXRjaGVyJywgJ3RpbWVab25lJywgJ2hvdXIxMicsICdmb3JtYXRNYXRjaGVyJywgJ3dlZWtkYXknLFxuICAgICAgICAgICAgJ2VyYScsICd5ZWFyJywgJ21vbnRoJywgJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLFxuICAgICAgICAgICAgJ3RpbWVab25lTmFtZSdcbiAgICAgICAgXVxuICAgIH0sXG5cbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgZm9ybWF0OiBzcmMkcmVhY3QkJFtcImRlZmF1bHRcIl0uUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgdmFsdWUgOiBzcmMkcmVhY3QkJFtcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkXG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcHJvcHMgICAgPSB0aGlzLnByb3BzO1xuICAgICAgICB2YXIgdmFsdWUgICAgPSBwcm9wcy52YWx1ZTtcbiAgICAgICAgdmFyIGZvcm1hdCAgID0gcHJvcHMuZm9ybWF0O1xuICAgICAgICB2YXIgZGVmYXVsdHMgPSBmb3JtYXQgJiYgdGhpcy5nZXROYW1lZEZvcm1hdCgndGltZScsIGZvcm1hdCk7XG4gICAgICAgIHZhciBvcHRpb25zICA9IEZvcm1hdHRlZFRpbWUuZmlsdGVyRm9ybWF0T3B0aW9ucyhwcm9wcywgZGVmYXVsdHMpO1xuXG4gICAgICAgIHJldHVybiBzcmMkcmVhY3QkJFtcImRlZmF1bHRcIl0uRE9NLnNwYW4obnVsbCwgdGhpcy5mb3JtYXRUaW1lKHZhbHVlLCBvcHRpb25zKSk7XG4gICAgfVxufSk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gRm9ybWF0dGVkVGltZTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGltZS5qcy5tYXAiLCIvLyBHRU5FUkFURUQgRklMRVxuXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHtcImxvY2FsZVwiOlwiZW5cIixcInBsdXJhbFJ1bGVGdW5jdGlvblwiOmZ1bmN0aW9uIChuLG9yZCl7dmFyIHM9U3RyaW5nKG4pLnNwbGl0KFwiLlwiKSx2MD0hc1sxXSx0MD1OdW1iZXIoc1swXSk9PW4sbjEwPXQwJiZzWzBdLnNsaWNlKC0xKSxuMTAwPXQwJiZzWzBdLnNsaWNlKC0yKTtpZihvcmQpcmV0dXJuIG4xMD09MSYmbjEwMCE9MTE/XCJvbmVcIjpuMTA9PTImJm4xMDAhPTEyP1widHdvXCI6bjEwPT0zJiZuMTAwIT0xMz9cImZld1wiOlwib3RoZXJcIjtyZXR1cm4gbj09MSYmdjA/XCJvbmVcIjpcIm90aGVyXCJ9LFwiZmllbGRzXCI6e1wieWVhclwiOntcImRpc3BsYXlOYW1lXCI6XCJZZWFyXCIsXCJyZWxhdGl2ZVwiOntcIjBcIjpcInRoaXMgeWVhclwiLFwiMVwiOlwibmV4dCB5ZWFyXCIsXCItMVwiOlwibGFzdCB5ZWFyXCJ9LFwicmVsYXRpdmVUaW1lXCI6e1wiZnV0dXJlXCI6e1wib25lXCI6XCJpbiB7MH0geWVhclwiLFwib3RoZXJcIjpcImluIHswfSB5ZWFyc1wifSxcInBhc3RcIjp7XCJvbmVcIjpcInswfSB5ZWFyIGFnb1wiLFwib3RoZXJcIjpcInswfSB5ZWFycyBhZ29cIn19fSxcIm1vbnRoXCI6e1wiZGlzcGxheU5hbWVcIjpcIk1vbnRoXCIsXCJyZWxhdGl2ZVwiOntcIjBcIjpcInRoaXMgbW9udGhcIixcIjFcIjpcIm5leHQgbW9udGhcIixcIi0xXCI6XCJsYXN0IG1vbnRoXCJ9LFwicmVsYXRpdmVUaW1lXCI6e1wiZnV0dXJlXCI6e1wib25lXCI6XCJpbiB7MH0gbW9udGhcIixcIm90aGVyXCI6XCJpbiB7MH0gbW9udGhzXCJ9LFwicGFzdFwiOntcIm9uZVwiOlwiezB9IG1vbnRoIGFnb1wiLFwib3RoZXJcIjpcInswfSBtb250aHMgYWdvXCJ9fX0sXCJkYXlcIjp7XCJkaXNwbGF5TmFtZVwiOlwiRGF5XCIsXCJyZWxhdGl2ZVwiOntcIjBcIjpcInRvZGF5XCIsXCIxXCI6XCJ0b21vcnJvd1wiLFwiLTFcIjpcInllc3RlcmRheVwifSxcInJlbGF0aXZlVGltZVwiOntcImZ1dHVyZVwiOntcIm9uZVwiOlwiaW4gezB9IGRheVwiLFwib3RoZXJcIjpcImluIHswfSBkYXlzXCJ9LFwicGFzdFwiOntcIm9uZVwiOlwiezB9IGRheSBhZ29cIixcIm90aGVyXCI6XCJ7MH0gZGF5cyBhZ29cIn19fSxcImhvdXJcIjp7XCJkaXNwbGF5TmFtZVwiOlwiSG91clwiLFwicmVsYXRpdmVUaW1lXCI6e1wiZnV0dXJlXCI6e1wib25lXCI6XCJpbiB7MH0gaG91clwiLFwib3RoZXJcIjpcImluIHswfSBob3Vyc1wifSxcInBhc3RcIjp7XCJvbmVcIjpcInswfSBob3VyIGFnb1wiLFwib3RoZXJcIjpcInswfSBob3VycyBhZ29cIn19fSxcIm1pbnV0ZVwiOntcImRpc3BsYXlOYW1lXCI6XCJNaW51dGVcIixcInJlbGF0aXZlVGltZVwiOntcImZ1dHVyZVwiOntcIm9uZVwiOlwiaW4gezB9IG1pbnV0ZVwiLFwib3RoZXJcIjpcImluIHswfSBtaW51dGVzXCJ9LFwicGFzdFwiOntcIm9uZVwiOlwiezB9IG1pbnV0ZSBhZ29cIixcIm90aGVyXCI6XCJ7MH0gbWludXRlcyBhZ29cIn19fSxcInNlY29uZFwiOntcImRpc3BsYXlOYW1lXCI6XCJTZWNvbmRcIixcInJlbGF0aXZlXCI6e1wiMFwiOlwibm93XCJ9LFwicmVsYXRpdmVUaW1lXCI6e1wiZnV0dXJlXCI6e1wib25lXCI6XCJpbiB7MH0gc2Vjb25kXCIsXCJvdGhlclwiOlwiaW4gezB9IHNlY29uZHNcIn0sXCJwYXN0XCI6e1wib25lXCI6XCJ7MH0gc2Vjb25kIGFnb1wiLFwib3RoZXJcIjpcInswfSBzZWNvbmRzIGFnb1wifX19fX07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVuLmpzLm1hcCIsIi8qIGpzaGludCBlc25leHQ6dHJ1ZSAqL1xuXG4vKlxuSFRNTCBlc2NhcGluZyBpbXBsZW1lbnRhdGlvbiBpcyB0aGUgc2FtZSBhcyBSZWFjdCdzIChvbiBwdXJwb3NlLikgVGhlcmVmb3JlLCBpdFxuaGFzIHRoZSBmb2xsb3dpbmcgQ29weXJpZ2h0IGFuZCBMaWNlbnNpbmc6XG5cbkNvcHlyaWdodCAyMDEzLTIwMTQsIEZhY2Vib29rLCBJbmMuXG5BbGwgcmlnaHRzIHJlc2VydmVkLlxuXG5UaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGUgTElDRU5TRVxuZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgUmVhY3QncyBzb3VyY2UgdHJlZS5cbiovXG5cInVzZSBzdHJpY3RcIjtcbnZhciBFU0NBUEVEX0NIQVJTID0ge1xuICAgICcmJyA6ICcmYW1wOycsXG4gICAgJz4nIDogJyZndDsnLFxuICAgICc8JyA6ICcmbHQ7JyxcbiAgICAnXCInIDogJyZxdW90OycsXG4gICAgJ1xcJyc6ICcmI3gyNzsnXG59O1xuXG52YXIgVU5TQUZFX0NIQVJTX1JFR0VYID0gL1smPjxcIiddL2c7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKHN0cikge1xuICAgIHJldHVybiAoJycgKyBzdHIpLnJlcGxhY2UoVU5TQUZFX0NIQVJTX1JFR0VYLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIEVTQ0FQRURfQ0hBUlNbbWF0Y2hdO1xuICAgIH0pO1xufTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXNjYXBlLmpzLm1hcCIsIi8qIGpzaGludCBlc25leHQ6dHJ1ZSAqL1xuXG4vLyBUT0RPOiBVc2UgYGltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtgIHdoZW4gZXh0ZXJuYWwgbW9kdWxlcyBhcmUgc3VwcG9ydGVkLlxuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgc3JjJHJlYWN0JCQgPSByZXF1aXJlKFwiLi9yZWFjdFwiKSwgaW50bCRtZXNzYWdlZm9ybWF0JCQgPSByZXF1aXJlKFwiaW50bC1tZXNzYWdlZm9ybWF0XCIpLCBpbnRsJHJlbGF0aXZlZm9ybWF0JCQgPSByZXF1aXJlKFwiaW50bC1yZWxhdGl2ZWZvcm1hdFwiKSwgaW50bCRmb3JtYXQkY2FjaGUkJCA9IHJlcXVpcmUoXCJpbnRsLWZvcm1hdC1jYWNoZVwiKTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxudmFyIHR5cGVzU3BlYyA9IHtcbiAgICBsb2NhbGVzOiBzcmMkcmVhY3QkJFtcImRlZmF1bHRcIl0uUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgIHNyYyRyZWFjdCQkW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBzcmMkcmVhY3QkJFtcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmFycmF5XG4gICAgXSksXG5cbiAgICBmb3JtYXRzIDogc3JjJHJlYWN0JCRbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5vYmplY3QsXG4gICAgbWVzc2FnZXM6IHNyYyRyZWFjdCQkW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMub2JqZWN0XG59O1xuXG5mdW5jdGlvbiBhc3NlcnRJc0RhdGUoZGF0ZSwgZXJyTXNnKSB7XG4gICAgLy8gRGV0ZXJtaW5lIGlmIHRoZSBgZGF0ZWAgaXMgdmFsaWQgYnkgY2hlY2tpbmcgaWYgaXQgaXMgZmluaXRlLCB3aGljaCBpc1xuICAgIC8vIHRoZSBzYW1lIHdheSB0aGF0IGBJbnRsLkRhdGVUaW1lRm9ybWF0I2Zvcm1hdCgpYCBjaGVja3MuXG4gICAgaWYgKCFpc0Zpbml0ZShkYXRlKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGVyck1zZyk7XG4gICAgfVxufVxuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHtcbiAgICBzdGF0aWNzOiB7XG4gICAgICAgIGZpbHRlckZvcm1hdE9wdGlvbnM6IGZ1bmN0aW9uIChvYmosIGRlZmF1bHRzKSB7XG4gICAgICAgICAgICBpZiAoIWRlZmF1bHRzKSB7IGRlZmF1bHRzID0ge307IH1cblxuICAgICAgICAgICAgcmV0dXJuICh0aGlzLmZvcm1hdE9wdGlvbnMgfHwgW10pLnJlZHVjZShmdW5jdGlvbiAob3B0cywgbmFtZSkge1xuICAgICAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0c1tuYW1lXSA9IG9ialtuYW1lXTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRlZmF1bHRzLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdHNbbmFtZV0gPSBkZWZhdWx0c1tuYW1lXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0cztcbiAgICAgICAgICAgIH0sIHt9KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBwcm9wVHlwZXMgICAgICAgIDogdHlwZXNTcGVjLFxuICAgIGNvbnRleHRUeXBlcyAgICAgOiB0eXBlc1NwZWMsXG4gICAgY2hpbGRDb250ZXh0VHlwZXM6IHR5cGVzU3BlYyxcblxuICAgIGdldE51bWJlckZvcm1hdCAgOiBpbnRsJGZvcm1hdCRjYWNoZSQkW1wiZGVmYXVsdFwiXShJbnRsLk51bWJlckZvcm1hdCksXG4gICAgZ2V0RGF0ZVRpbWVGb3JtYXQ6IGludGwkZm9ybWF0JGNhY2hlJCRbXCJkZWZhdWx0XCJdKEludGwuRGF0ZVRpbWVGb3JtYXQpLFxuICAgIGdldE1lc3NhZ2VGb3JtYXQgOiBpbnRsJGZvcm1hdCRjYWNoZSQkW1wiZGVmYXVsdFwiXShpbnRsJG1lc3NhZ2Vmb3JtYXQkJFtcImRlZmF1bHRcIl0pLFxuICAgIGdldFJlbGF0aXZlRm9ybWF0OiBpbnRsJGZvcm1hdCRjYWNoZSQkW1wiZGVmYXVsdFwiXShpbnRsJHJlbGF0aXZlZm9ybWF0JCRbXCJkZWZhdWx0XCJdKSxcblxuICAgIGdldENoaWxkQ29udGV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY29udGV4dCA9IHRoaXMuY29udGV4dDtcbiAgICAgICAgdmFyIHByb3BzICAgPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsb2NhbGVzOiAgcHJvcHMubG9jYWxlcyAgfHwgY29udGV4dC5sb2NhbGVzLFxuICAgICAgICAgICAgZm9ybWF0czogIHByb3BzLmZvcm1hdHMgIHx8IGNvbnRleHQuZm9ybWF0cyxcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBwcm9wcy5tZXNzYWdlcyB8fCBjb250ZXh0Lm1lc3NhZ2VzXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIGZvcm1hdERhdGU6IGZ1bmN0aW9uIChkYXRlLCBvcHRpb25zKSB7XG4gICAgICAgIGRhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICAgICAgYXNzZXJ0SXNEYXRlKGRhdGUsICdBIGRhdGUgb3IgdGltZXN0YW1wIG11c3QgYmUgcHJvdmlkZWQgdG8gZm9ybWF0RGF0ZSgpJyk7XG4gICAgICAgIHJldHVybiB0aGlzLl9mb3JtYXQoJ2RhdGUnLCBkYXRlLCBvcHRpb25zKTtcbiAgICB9LFxuXG4gICAgZm9ybWF0VGltZTogZnVuY3Rpb24gKGRhdGUsIG9wdGlvbnMpIHtcbiAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICAgICAgICBhc3NlcnRJc0RhdGUoZGF0ZSwgJ0EgZGF0ZSBvciB0aW1lc3RhbXAgbXVzdCBiZSBwcm92aWRlZCB0byBmb3JtYXRUaW1lKCknKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Zvcm1hdCgndGltZScsIGRhdGUsIG9wdGlvbnMpO1xuICAgIH0sXG5cbiAgICBmb3JtYXRSZWxhdGl2ZTogZnVuY3Rpb24gKGRhdGUsIG9wdGlvbnMsIGZvcm1hdE9wdGlvbnMpIHtcbiAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICAgICAgICBhc3NlcnRJc0RhdGUoZGF0ZSwgJ0EgZGF0ZSBvciB0aW1lc3RhbXAgbXVzdCBiZSBwcm92aWRlZCB0byBmb3JtYXRSZWxhdGl2ZSgpJyk7XG4gICAgICAgIHJldHVybiB0aGlzLl9mb3JtYXQoJ3JlbGF0aXZlJywgZGF0ZSwgb3B0aW9ucywgZm9ybWF0T3B0aW9ucyk7XG4gICAgfSxcblxuICAgIGZvcm1hdE51bWJlcjogZnVuY3Rpb24gKG51bSwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5fZm9ybWF0KCdudW1iZXInLCBudW0sIG9wdGlvbnMpO1xuICAgIH0sXG5cbiAgICBmb3JtYXRNZXNzYWdlOiBmdW5jdGlvbiAobWVzc2FnZSwgdmFsdWVzKSB7XG4gICAgICAgIHZhciBsb2NhbGVzID0gdGhpcy5wcm9wcy5sb2NhbGVzIHx8IHRoaXMuY29udGV4dC5sb2NhbGVzO1xuICAgICAgICB2YXIgZm9ybWF0cyA9IHRoaXMucHJvcHMuZm9ybWF0cyB8fCB0aGlzLmNvbnRleHQuZm9ybWF0cztcblxuICAgICAgICAvLyBXaGVuIGBtZXNzYWdlYCBpcyBhIGZ1bmN0aW9uLCBhc3N1bWUgaXQncyBhbiBJbnRsTWVzc2FnZUZvcm1hdFxuICAgICAgICAvLyBpbnN0YW5jZSdzIGBmb3JtYXQoKWAgbWV0aG9kIHBhc3NlZCBieSByZWZlcmVuY2UsIGFuZCBjYWxsIGl0LiBUaGlzXG4gICAgICAgIC8vIGlzIHBvc3NpYmxlIGJlY2F1c2UgaXRzIGB0aGlzYCB3aWxsIGJlIHByZS1ib3VuZCB0byB0aGUgaW5zdGFuY2UuXG4gICAgICAgIGlmICh0eXBlb2YgbWVzc2FnZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2UodmFsdWVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgbWVzc2FnZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSB0aGlzLmdldE1lc3NhZ2VGb3JtYXQobWVzc2FnZSwgbG9jYWxlcywgZm9ybWF0cyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWVzc2FnZS5mb3JtYXQodmFsdWVzKTtcbiAgICB9LFxuXG4gICAgZ2V0SW50bE1lc3NhZ2U6IGZ1bmN0aW9uIChwYXRoKSB7XG4gICAgICAgIHZhciBtZXNzYWdlcyAgPSB0aGlzLnByb3BzLm1lc3NhZ2VzIHx8IHRoaXMuY29udGV4dC5tZXNzYWdlcztcbiAgICAgICAgdmFyIHBhdGhQYXJ0cyA9IHBhdGguc3BsaXQoJy4nKTtcblxuICAgICAgICB2YXIgbWVzc2FnZTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbWVzc2FnZSA9IHBhdGhQYXJ0cy5yZWR1Y2UoZnVuY3Rpb24gKG9iaiwgcGF0aFBhcnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqW3BhdGhQYXJ0XTtcbiAgICAgICAgICAgIH0sIG1lc3NhZ2VzKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGlmIChtZXNzYWdlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIEludGwgbWVzc2FnZTogJyArIHBhdGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgfSxcblxuICAgIGdldE5hbWVkRm9ybWF0OiBmdW5jdGlvbiAodHlwZSwgbmFtZSkge1xuICAgICAgICB2YXIgZm9ybWF0cyA9IHRoaXMucHJvcHMuZm9ybWF0cyB8fCB0aGlzLmNvbnRleHQuZm9ybWF0cztcbiAgICAgICAgdmFyIGZvcm1hdCAgPSBudWxsO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3JtYXQgPSBmb3JtYXRzW3R5cGVdW25hbWVdO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKCFmb3JtYXQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICdObyAnICsgdHlwZSArICcgZm9ybWF0IG5hbWVkOiAnICsgbmFtZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZm9ybWF0O1xuICAgIH0sXG5cbiAgICBfZm9ybWF0OiBmdW5jdGlvbiAodHlwZSwgdmFsdWUsIG9wdGlvbnMsIGZvcm1hdE9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGxvY2FsZXMgPSB0aGlzLnByb3BzLmxvY2FsZXMgfHwgdGhpcy5jb250ZXh0LmxvY2FsZXM7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBvcHRpb25zID0gdGhpcy5nZXROYW1lZEZvcm1hdCh0eXBlLCBvcHRpb25zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdkYXRlJzpcbiAgICAgICAgICAgIGNhc2UgJ3RpbWUnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldERhdGVUaW1lRm9ybWF0KGxvY2FsZXMsIG9wdGlvbnMpLmZvcm1hdCh2YWx1ZSk7XG4gICAgICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldE51bWJlckZvcm1hdChsb2NhbGVzLCBvcHRpb25zKS5mb3JtYXQodmFsdWUpO1xuICAgICAgICAgICAgY2FzZSAncmVsYXRpdmUnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFJlbGF0aXZlRm9ybWF0KGxvY2FsZXMsIG9wdGlvbnMpLmZvcm1hdCh2YWx1ZSwgZm9ybWF0T3B0aW9ucyk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5yZWNvZ25pemVkIGZvcm1hdCB0eXBlOiAnICsgdHlwZSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1taXhpbi5qcy5tYXAiLCIvKiBqc2hpbnQgZXNuZXh0OiB0cnVlICovXG5cblwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5fX2FkZExvY2FsZURhdGEgPSBfX2FkZExvY2FsZURhdGE7XG52YXIgaW50bCRtZXNzYWdlZm9ybWF0JCQgPSByZXF1aXJlKFwiaW50bC1tZXNzYWdlZm9ybWF0XCIpLCBpbnRsJHJlbGF0aXZlZm9ybWF0JCQgPSByZXF1aXJlKFwiaW50bC1yZWxhdGl2ZWZvcm1hdFwiKSwgc3JjJGVuJCQgPSByZXF1aXJlKFwiLi9lblwiKSwgc3JjJG1peGluJCQgPSByZXF1aXJlKFwiLi9taXhpblwiKSwgc3JjJGNvbXBvbmVudHMkZGF0ZSQkID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9kYXRlXCIpLCBzcmMkY29tcG9uZW50cyR0aW1lJCQgPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL3RpbWVcIiksIHNyYyRjb21wb25lbnRzJHJlbGF0aXZlJCQgPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL3JlbGF0aXZlXCIpLCBzcmMkY29tcG9uZW50cyRudW1iZXIkJCA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvbnVtYmVyXCIpLCBzcmMkY29tcG9uZW50cyRtZXNzYWdlJCQgPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL21lc3NhZ2VcIiksIHNyYyRjb21wb25lbnRzJGh0bWwkbWVzc2FnZSQkID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9odG1sLW1lc3NhZ2VcIik7XG5mdW5jdGlvbiBfX2FkZExvY2FsZURhdGEoZGF0YSkge1xuICAgIGludGwkbWVzc2FnZWZvcm1hdCQkW1wiZGVmYXVsdFwiXS5fX2FkZExvY2FsZURhdGEoZGF0YSk7XG4gICAgaW50bCRyZWxhdGl2ZWZvcm1hdCQkW1wiZGVmYXVsdFwiXS5fX2FkZExvY2FsZURhdGEoZGF0YSk7XG59XG5cbl9fYWRkTG9jYWxlRGF0YShzcmMkZW4kJFtcImRlZmF1bHRcIl0pO1xuZXhwb3J0cy5JbnRsTWl4aW4gPSBzcmMkbWl4aW4kJFtcImRlZmF1bHRcIl0sIGV4cG9ydHMuRm9ybWF0dGVkRGF0ZSA9IHNyYyRjb21wb25lbnRzJGRhdGUkJFtcImRlZmF1bHRcIl0sIGV4cG9ydHMuRm9ybWF0dGVkVGltZSA9IHNyYyRjb21wb25lbnRzJHRpbWUkJFtcImRlZmF1bHRcIl0sIGV4cG9ydHMuRm9ybWF0dGVkUmVsYXRpdmUgPSBzcmMkY29tcG9uZW50cyRyZWxhdGl2ZSQkW1wiZGVmYXVsdFwiXSwgZXhwb3J0cy5Gb3JtYXR0ZWROdW1iZXIgPSBzcmMkY29tcG9uZW50cyRudW1iZXIkJFtcImRlZmF1bHRcIl0sIGV4cG9ydHMuRm9ybWF0dGVkTWVzc2FnZSA9IHNyYyRjb21wb25lbnRzJG1lc3NhZ2UkJFtcImRlZmF1bHRcIl0sIGV4cG9ydHMuRm9ybWF0dGVkSFRNTE1lc3NhZ2UgPSBzcmMkY29tcG9uZW50cyRodG1sJG1lc3NhZ2UkJFtcImRlZmF1bHRcIl07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlYWN0LWludGwuanMubWFwIiwiLyogZ2xvYmFsIFJlYWN0ICovXG4vKiBqc2hpbnQgZXNuZXh0OnRydWUgKi9cblxuLy8gVE9ETzogUmVtb3ZlIHRoZSBnbG9iYWwgYFJlYWN0YCBiaW5kaW5nIGxvb2t1cCBvbmNlIHRoZSBFUzYgTW9kdWxlIFRyYW5zcGlsZXJcbi8vIHN1cHBvcnRzIGV4dGVybmFsIG1vZHVsZXMuIFRoaXMgaXMgYSBoYWNrIGZvciBub3cgdGhhdCBwcm92aWRlcyB0aGUgbG9jYWxcbi8vIG1vZHVsZXMgYSByZWZlcmVjZSB0byBSZWFjdC5cblwidXNlIHN0cmljdFwiO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBSZWFjdDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVhY3QuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9tZW1vaXplcicpWydkZWZhdWx0J107XG5leHBvcnRzWydkZWZhdWx0J10gPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIFB1cnBvc2VseSB1c2luZyB0aGUgc2FtZSBpbXBsZW1lbnRhdGlvbiBhcyB0aGUgSW50bC5qcyBgSW50bGAgcG9seWZpbGwuXG4vLyBDb3B5cmlnaHQgMjAxMyBBbmR5IEVhcm5zaGF3LCBNSVQgTGljZW5zZVxuXG52YXIgaG9wID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIHJlYWxEZWZpbmVQcm9wID0gKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkgeyByZXR1cm4gISFPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywge30pOyB9XG4gICAgY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9XG59KSgpO1xuXG52YXIgZXMzID0gIXJlYWxEZWZpbmVQcm9wICYmICFPYmplY3QucHJvdG90eXBlLl9fZGVmaW5lR2V0dGVyX187XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlYWxEZWZpbmVQcm9wID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDpcbiAgICAgICAgZnVuY3Rpb24gKG9iaiwgbmFtZSwgZGVzYykge1xuXG4gICAgaWYgKCdnZXQnIGluIGRlc2MgJiYgb2JqLl9fZGVmaW5lR2V0dGVyX18pIHtcbiAgICAgICAgb2JqLl9fZGVmaW5lR2V0dGVyX18obmFtZSwgZGVzYy5nZXQpO1xuICAgIH0gZWxzZSBpZiAoIWhvcC5jYWxsKG9iaiwgbmFtZSkgfHwgJ3ZhbHVlJyBpbiBkZXNjKSB7XG4gICAgICAgIG9ialtuYW1lXSA9IGRlc2MudmFsdWU7XG4gICAgfVxufTtcblxudmFyIG9iakNyZWF0ZSA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gKHByb3RvLCBwcm9wcykge1xuICAgIHZhciBvYmosIGs7XG5cbiAgICBmdW5jdGlvbiBGKCkge31cbiAgICBGLnByb3RvdHlwZSA9IHByb3RvO1xuICAgIG9iaiA9IG5ldyBGKCk7XG5cbiAgICBmb3IgKGsgaW4gcHJvcHMpIHtcbiAgICAgICAgaWYgKGhvcC5jYWxsKHByb3BzLCBrKSkge1xuICAgICAgICAgICAgZGVmaW5lUHJvcGVydHkob2JqLCBrLCBwcm9wc1trXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xufTtcbmV4cG9ydHMuZGVmaW5lUHJvcGVydHkgPSBkZWZpbmVQcm9wZXJ0eSwgZXhwb3J0cy5vYmpDcmVhdGUgPSBvYmpDcmVhdGU7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVzNS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBzcmMkZXM1JCQgPSByZXF1aXJlKFwiLi9lczVcIik7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGNyZWF0ZUZvcm1hdENhY2hlO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBjcmVhdGVGb3JtYXRDYWNoZShGb3JtYXRDb25zdHJ1Y3Rvcikge1xuICAgIHZhciBjYWNoZSA9IHNyYyRlczUkJC5vYmpDcmVhdGUobnVsbCk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyAgICA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgICAgIHZhciBjYWNoZUlkID0gZ2V0Q2FjaGVJZChhcmdzKTtcbiAgICAgICAgdmFyIGZvcm1hdCAgPSBjYWNoZUlkICYmIGNhY2hlW2NhY2hlSWRdO1xuXG4gICAgICAgIGlmICghZm9ybWF0KSB7XG4gICAgICAgICAgICBmb3JtYXQgPSBzcmMkZXM1JCQub2JqQ3JlYXRlKEZvcm1hdENvbnN0cnVjdG9yLnByb3RvdHlwZSk7XG4gICAgICAgICAgICBGb3JtYXRDb25zdHJ1Y3Rvci5hcHBseShmb3JtYXQsIGFyZ3MpO1xuXG4gICAgICAgICAgICBpZiAoY2FjaGVJZCkge1xuICAgICAgICAgICAgICAgIGNhY2hlW2NhY2hlSWRdID0gZm9ybWF0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZvcm1hdDtcbiAgICB9O1xufVxuXG4vLyAtLSBVdGlsaXRpZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBnZXRDYWNoZUlkKGlucHV0cykge1xuICAgIC8vIFdoZW4gSlNPTiBpcyBub3QgYXZhaWxhYmxlIGluIHRoZSBydW50aW1lLCB3ZSB3aWxsIG5vdCBjcmVhdGUgYSBjYWNoZSBpZC5cbiAgICBpZiAodHlwZW9mIEpTT04gPT09ICd1bmRlZmluZWQnKSB7IHJldHVybjsgfVxuXG4gICAgdmFyIGNhY2hlSWQgPSBbXTtcblxuICAgIHZhciBpLCBsZW4sIGlucHV0O1xuXG4gICAgZm9yIChpID0gMCwgbGVuID0gaW5wdXRzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgIGlucHV0ID0gaW5wdXRzW2ldO1xuXG4gICAgICAgIGlmIChpbnB1dCAmJiB0eXBlb2YgaW5wdXQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjYWNoZUlkLnB1c2gob3JkZXJlZFByb3BzKGlucHV0KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZUlkLnB1c2goaW5wdXQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGNhY2hlSWQpO1xufVxuXG5mdW5jdGlvbiBvcmRlcmVkUHJvcHMob2JqKSB7XG4gICAgdmFyIHByb3BzID0gW10sXG4gICAgICAgIGtleXMgID0gW107XG5cbiAgICB2YXIga2V5LCBpLCBsZW4sIHByb3A7XG5cbiAgICBmb3IgKGtleSBpbiBvYmopIHtcbiAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBvcmRlcmVkS2V5cyA9IGtleXMuc29ydCgpO1xuXG4gICAgZm9yIChpID0gMCwgbGVuID0gb3JkZXJlZEtleXMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAga2V5ICA9IG9yZGVyZWRLZXlzW2ldO1xuICAgICAgICBwcm9wID0ge307XG5cbiAgICAgICAgcHJvcFtrZXldID0gb2JqW2tleV07XG4gICAgICAgIHByb3BzW2ldICA9IHByb3A7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BzO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1tZW1vaXplci5qcy5tYXAiLCIvKiBqc2hpbnQgbm9kZTp0cnVlICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIEludGxNZXNzYWdlRm9ybWF0ID0gcmVxdWlyZSgnLi9saWIvbWFpbicpWydkZWZhdWx0J107XG5cbi8vIEFkZCBhbGwgbG9jYWxlIGRhdGEgdG8gYEludGxNZXNzYWdlRm9ybWF0YC4gVGhpcyBtb2R1bGUgd2lsbCBiZSBpZ25vcmVkIHdoZW5cbi8vIGJ1bmRsaW5nIGZvciB0aGUgYnJvd3NlciB3aXRoIEJyb3dzZXJpZnkvV2VicGFjay5cbnJlcXVpcmUoJy4vbGliL2xvY2FsZXMnKTtcblxuLy8gUmUtZXhwb3J0IGBJbnRsTWVzc2FnZUZvcm1hdGAgYXMgdGhlIENvbW1vbkpTIGRlZmF1bHQgZXhwb3J0cyB3aXRoIGFsbCB0aGVcbi8vIGxvY2FsZSBkYXRhIHJlZ2lzdGVyZWQsIGFuZCB3aXRoIEVuZ2xpc2ggc2V0IGFzIHRoZSBkZWZhdWx0IGxvY2FsZS4gRGVmaW5lXG4vLyB0aGUgYGRlZmF1bHRgIHByb3AgZm9yIHVzZSB3aXRoIG90aGVyIGNvbXBpbGVkIEVTNiBNb2R1bGVzLlxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gSW50bE1lc3NhZ2VGb3JtYXQ7XG5leHBvcnRzWydkZWZhdWx0J10gPSBleHBvcnRzO1xuIiwiLypcbkNvcHlyaWdodCAoYykgMjAxNCwgWWFob28hIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbkNvcHlyaWdodHMgbGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgTGljZW5zZS5cblNlZSB0aGUgYWNjb21wYW55aW5nIExJQ0VOU0UgZmlsZSBmb3IgdGVybXMuXG4qL1xuXG4vKiBqc2xpbnQgZXNuZXh0OiB0cnVlICovXG5cblwidXNlIHN0cmljdFwiO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBDb21waWxlcjtcblxuZnVuY3Rpb24gQ29tcGlsZXIobG9jYWxlcywgZm9ybWF0cywgcGx1cmFsRm4pIHtcbiAgICB0aGlzLmxvY2FsZXMgID0gbG9jYWxlcztcbiAgICB0aGlzLmZvcm1hdHMgID0gZm9ybWF0cztcbiAgICB0aGlzLnBsdXJhbEZuID0gcGx1cmFsRm47XG59XG5cbkNvbXBpbGVyLnByb3RvdHlwZS5jb21waWxlID0gZnVuY3Rpb24gKGFzdCkge1xuICAgIHRoaXMucGx1cmFsU3RhY2sgICAgICAgID0gW107XG4gICAgdGhpcy5jdXJyZW50UGx1cmFsICAgICAgPSBudWxsO1xuICAgIHRoaXMucGx1cmFsTnVtYmVyRm9ybWF0ID0gbnVsbDtcblxuICAgIHJldHVybiB0aGlzLmNvbXBpbGVNZXNzYWdlKGFzdCk7XG59O1xuXG5Db21waWxlci5wcm90b3R5cGUuY29tcGlsZU1lc3NhZ2UgPSBmdW5jdGlvbiAoYXN0KSB7XG4gICAgaWYgKCEoYXN0ICYmIGFzdC50eXBlID09PSAnbWVzc2FnZUZvcm1hdFBhdHRlcm4nKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01lc3NhZ2UgQVNUIGlzIG5vdCBvZiB0eXBlOiBcIm1lc3NhZ2VGb3JtYXRQYXR0ZXJuXCInKTtcbiAgICB9XG5cbiAgICB2YXIgZWxlbWVudHMgPSBhc3QuZWxlbWVudHMsXG4gICAgICAgIHBhdHRlcm4gID0gW107XG5cbiAgICB2YXIgaSwgbGVuLCBlbGVtZW50O1xuXG4gICAgZm9yIChpID0gMCwgbGVuID0gZWxlbWVudHMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgZWxlbWVudCA9IGVsZW1lbnRzW2ldO1xuXG4gICAgICAgIHN3aXRjaCAoZWxlbWVudC50eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdtZXNzYWdlVGV4dEVsZW1lbnQnOlxuICAgICAgICAgICAgICAgIHBhdHRlcm4ucHVzaCh0aGlzLmNvbXBpbGVNZXNzYWdlVGV4dChlbGVtZW50KSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ2FyZ3VtZW50RWxlbWVudCc6XG4gICAgICAgICAgICAgICAgcGF0dGVybi5wdXNoKHRoaXMuY29tcGlsZUFyZ3VtZW50KGVsZW1lbnQpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01lc3NhZ2UgZWxlbWVudCBkb2VzIG5vdCBoYXZlIGEgdmFsaWQgdHlwZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhdHRlcm47XG59O1xuXG5Db21waWxlci5wcm90b3R5cGUuY29tcGlsZU1lc3NhZ2VUZXh0ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAvLyBXaGVuIHRoaXMgYGVsZW1lbnRgIGlzIHBhcnQgb2YgcGx1cmFsIHN1Yi1wYXR0ZXJuIGFuZCBpdHMgdmFsdWUgY29udGFpbnNcbiAgICAvLyBhbiB1bmVzY2FwZWQgJyMnLCB1c2UgYSBgUGx1cmFsT2Zmc2V0U3RyaW5nYCBoZWxwZXIgdG8gcHJvcGVybHkgb3V0cHV0XG4gICAgLy8gdGhlIG51bWJlciB3aXRoIHRoZSBjb3JyZWN0IG9mZnNldCBpbiB0aGUgc3RyaW5nLlxuICAgIGlmICh0aGlzLmN1cnJlbnRQbHVyYWwgJiYgLyhefFteXFxcXF0pIy9nLnRlc3QoZWxlbWVudC52YWx1ZSkpIHtcbiAgICAgICAgLy8gQ3JlYXRlIGEgY2FjaGUgYSBOdW1iZXJGb3JtYXQgaW5zdGFuY2UgdGhhdCBjYW4gYmUgcmV1c2VkIGZvciBhbnlcbiAgICAgICAgLy8gUGx1cmFsT2Zmc2V0U3RyaW5nIGluc3RhbmNlIGluIHRoaXMgbWVzc2FnZS5cbiAgICAgICAgaWYgKCF0aGlzLnBsdXJhbE51bWJlckZvcm1hdCkge1xuICAgICAgICAgICAgdGhpcy5wbHVyYWxOdW1iZXJGb3JtYXQgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQodGhpcy5sb2NhbGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgUGx1cmFsT2Zmc2V0U3RyaW5nKFxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBsdXJhbC5pZCxcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQbHVyYWwuZm9ybWF0Lm9mZnNldCxcbiAgICAgICAgICAgICAgICB0aGlzLnBsdXJhbE51bWJlckZvcm1hdCxcbiAgICAgICAgICAgICAgICBlbGVtZW50LnZhbHVlKTtcbiAgICB9XG5cbiAgICAvLyBVbmVzY2FwZSB0aGUgZXNjYXBlZCAnIydzIGluIHRoZSBtZXNzYWdlIHRleHQuXG4gICAgcmV0dXJuIGVsZW1lbnQudmFsdWUucmVwbGFjZSgvXFxcXCMvZywgJyMnKTtcbn07XG5cbkNvbXBpbGVyLnByb3RvdHlwZS5jb21waWxlQXJndW1lbnQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHZhciBmb3JtYXQgPSBlbGVtZW50LmZvcm1hdDtcblxuICAgIGlmICghZm9ybWF0KSB7XG4gICAgICAgIHJldHVybiBuZXcgU3RyaW5nRm9ybWF0KGVsZW1lbnQuaWQpO1xuICAgIH1cblxuICAgIHZhciBmb3JtYXRzICA9IHRoaXMuZm9ybWF0cyxcbiAgICAgICAgbG9jYWxlcyAgPSB0aGlzLmxvY2FsZXMsXG4gICAgICAgIHBsdXJhbEZuID0gdGhpcy5wbHVyYWxGbixcbiAgICAgICAgb3B0aW9ucztcblxuICAgIHN3aXRjaCAoZm9ybWF0LnR5cGUpIHtcbiAgICAgICAgY2FzZSAnbnVtYmVyRm9ybWF0JzpcbiAgICAgICAgICAgIG9wdGlvbnMgPSBmb3JtYXRzLm51bWJlcltmb3JtYXQuc3R5bGVdO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpZCAgICA6IGVsZW1lbnQuaWQsXG4gICAgICAgICAgICAgICAgZm9ybWF0OiBuZXcgSW50bC5OdW1iZXJGb3JtYXQobG9jYWxlcywgb3B0aW9ucykuZm9ybWF0XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIGNhc2UgJ2RhdGVGb3JtYXQnOlxuICAgICAgICAgICAgb3B0aW9ucyA9IGZvcm1hdHMuZGF0ZVtmb3JtYXQuc3R5bGVdO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpZCAgICA6IGVsZW1lbnQuaWQsXG4gICAgICAgICAgICAgICAgZm9ybWF0OiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChsb2NhbGVzLCBvcHRpb25zKS5mb3JtYXRcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgY2FzZSAndGltZUZvcm1hdCc6XG4gICAgICAgICAgICBvcHRpb25zID0gZm9ybWF0cy50aW1lW2Zvcm1hdC5zdHlsZV07XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlkICAgIDogZWxlbWVudC5pZCxcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvY2FsZXMsIG9wdGlvbnMpLmZvcm1hdFxuICAgICAgICAgICAgfTtcblxuICAgICAgICBjYXNlICdwbHVyYWxGb3JtYXQnOlxuICAgICAgICAgICAgb3B0aW9ucyA9IHRoaXMuY29tcGlsZU9wdGlvbnMoZWxlbWVudCk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFBsdXJhbEZvcm1hdChcbiAgICAgICAgICAgICAgICBlbGVtZW50LmlkLCBmb3JtYXQub3JkaW5hbCwgZm9ybWF0Lm9mZnNldCwgb3B0aW9ucywgcGx1cmFsRm5cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgY2FzZSAnc2VsZWN0Rm9ybWF0JzpcbiAgICAgICAgICAgIG9wdGlvbnMgPSB0aGlzLmNvbXBpbGVPcHRpb25zKGVsZW1lbnQpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTZWxlY3RGb3JtYXQoZWxlbWVudC5pZCwgb3B0aW9ucyk7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWVzc2FnZSBlbGVtZW50IGRvZXMgbm90IGhhdmUgYSB2YWxpZCBmb3JtYXQgdHlwZScpO1xuICAgIH1cbn07XG5cbkNvbXBpbGVyLnByb3RvdHlwZS5jb21waWxlT3B0aW9ucyA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgdmFyIGZvcm1hdCAgICAgID0gZWxlbWVudC5mb3JtYXQsXG4gICAgICAgIG9wdGlvbnMgICAgID0gZm9ybWF0Lm9wdGlvbnMsXG4gICAgICAgIG9wdGlvbnNIYXNoID0ge307XG5cbiAgICAvLyBTYXZlIHRoZSBjdXJyZW50IHBsdXJhbCBlbGVtZW50LCBpZiBhbnksIHRoZW4gc2V0IGl0IHRvIGEgbmV3IHZhbHVlIHdoZW5cbiAgICAvLyBjb21waWxpbmcgdGhlIG9wdGlvbnMgc3ViLXBhdHRlcm5zLiBUaGlzIGNvbmZvcm1zIHRoZSBzcGVjJ3MgYWxnb3JpdGhtXG4gICAgLy8gZm9yIGhhbmRsaW5nIGBcIiNcImAgc3ludGF4IGluIG1lc3NhZ2UgdGV4dC5cbiAgICB0aGlzLnBsdXJhbFN0YWNrLnB1c2godGhpcy5jdXJyZW50UGx1cmFsKTtcbiAgICB0aGlzLmN1cnJlbnRQbHVyYWwgPSBmb3JtYXQudHlwZSA9PT0gJ3BsdXJhbEZvcm1hdCcgPyBlbGVtZW50IDogbnVsbDtcblxuICAgIHZhciBpLCBsZW4sIG9wdGlvbjtcblxuICAgIGZvciAoaSA9IDAsIGxlbiA9IG9wdGlvbnMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgb3B0aW9uID0gb3B0aW9uc1tpXTtcblxuICAgICAgICAvLyBDb21waWxlIHRoZSBzdWItcGF0dGVybiBhbmQgc2F2ZSBpdCB1bmRlciB0aGUgb3B0aW9ucydzIHNlbGVjdG9yLlxuICAgICAgICBvcHRpb25zSGFzaFtvcHRpb24uc2VsZWN0b3JdID0gdGhpcy5jb21waWxlTWVzc2FnZShvcHRpb24udmFsdWUpO1xuICAgIH1cblxuICAgIC8vIFBvcCB0aGUgcGx1cmFsIHN0YWNrIHRvIHB1dCBiYWNrIHRoZSBvcmlnaW5hbCBjdXJyZW50IHBsdXJhbCB2YWx1ZS5cbiAgICB0aGlzLmN1cnJlbnRQbHVyYWwgPSB0aGlzLnBsdXJhbFN0YWNrLnBvcCgpO1xuXG4gICAgcmV0dXJuIG9wdGlvbnNIYXNoO1xufTtcblxuLy8gLS0gQ29tcGlsZXIgSGVscGVyIENsYXNzZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gU3RyaW5nRm9ybWF0KGlkKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xufVxuXG5TdHJpbmdGb3JtYXQucHJvdG90eXBlLmZvcm1hdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gdmFsdWUgOiBTdHJpbmcodmFsdWUpO1xufTtcblxuZnVuY3Rpb24gUGx1cmFsRm9ybWF0KGlkLCB1c2VPcmRpbmFsLCBvZmZzZXQsIG9wdGlvbnMsIHBsdXJhbEZuKSB7XG4gICAgdGhpcy5pZCAgICAgICAgID0gaWQ7XG4gICAgdGhpcy51c2VPcmRpbmFsID0gdXNlT3JkaW5hbDtcbiAgICB0aGlzLm9mZnNldCAgICAgPSBvZmZzZXQ7XG4gICAgdGhpcy5vcHRpb25zICAgID0gb3B0aW9ucztcbiAgICB0aGlzLnBsdXJhbEZuICAgPSBwbHVyYWxGbjtcbn1cblxuUGx1cmFsRm9ybWF0LnByb3RvdHlwZS5nZXRPcHRpb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblxuICAgIHZhciBvcHRpb24gPSBvcHRpb25zWyc9JyArIHZhbHVlXSB8fFxuICAgICAgICAgICAgb3B0aW9uc1t0aGlzLnBsdXJhbEZuKHZhbHVlIC0gdGhpcy5vZmZzZXQsIHRoaXMudXNlT3JkaW5hbCldO1xuXG4gICAgcmV0dXJuIG9wdGlvbiB8fCBvcHRpb25zLm90aGVyO1xufTtcblxuZnVuY3Rpb24gUGx1cmFsT2Zmc2V0U3RyaW5nKGlkLCBvZmZzZXQsIG51bWJlckZvcm1hdCwgc3RyaW5nKSB7XG4gICAgdGhpcy5pZCAgICAgICAgICAgPSBpZDtcbiAgICB0aGlzLm9mZnNldCAgICAgICA9IG9mZnNldDtcbiAgICB0aGlzLm51bWJlckZvcm1hdCA9IG51bWJlckZvcm1hdDtcbiAgICB0aGlzLnN0cmluZyAgICAgICA9IHN0cmluZztcbn1cblxuUGx1cmFsT2Zmc2V0U3RyaW5nLnByb3RvdHlwZS5mb3JtYXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB2YXIgbnVtYmVyID0gdGhpcy5udW1iZXJGb3JtYXQuZm9ybWF0KHZhbHVlIC0gdGhpcy5vZmZzZXQpO1xuXG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nXG4gICAgICAgICAgICAucmVwbGFjZSgvKF58W15cXFxcXSkjL2csICckMScgKyBudW1iZXIpXG4gICAgICAgICAgICAucmVwbGFjZSgvXFxcXCMvZywgJyMnKTtcbn07XG5cbmZ1bmN0aW9uIFNlbGVjdEZvcm1hdChpZCwgb3B0aW9ucykge1xuICAgIHRoaXMuaWQgICAgICA9IGlkO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG59XG5cblNlbGVjdEZvcm1hdC5wcm90b3R5cGUuZ2V0T3B0aW9uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgcmV0dXJuIG9wdGlvbnNbdmFsdWVdIHx8IG9wdGlvbnMub3RoZXI7XG59O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21waWxlci5qcy5tYXAiLCIvKlxuQ29weXJpZ2h0IChjKSAyMDE0LCBZYWhvbyEgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuQ29weXJpZ2h0cyBsaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBMaWNlbnNlLlxuU2VlIHRoZSBhY2NvbXBhbnlpbmcgTElDRU5TRSBmaWxlIGZvciB0ZXJtcy5cbiovXG5cbi8qIGpzbGludCBlc25leHQ6IHRydWUgKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgc3JjJHV0aWxzJCQgPSByZXF1aXJlKFwiLi91dGlsc1wiKSwgc3JjJGVzNSQkID0gcmVxdWlyZShcIi4vZXM1XCIpLCBzcmMkY29tcGlsZXIkJCA9IHJlcXVpcmUoXCIuL2NvbXBpbGVyXCIpLCBpbnRsJG1lc3NhZ2Vmb3JtYXQkcGFyc2VyJCQgPSByZXF1aXJlKFwiaW50bC1tZXNzYWdlZm9ybWF0LXBhcnNlclwiKTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gTWVzc2FnZUZvcm1hdDtcblxuLy8gLS0gTWVzc2FnZUZvcm1hdCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBNZXNzYWdlRm9ybWF0KG1lc3NhZ2UsIGxvY2FsZXMsIGZvcm1hdHMpIHtcbiAgICAvLyBQYXJzZSBzdHJpbmcgbWVzc2FnZXMgaW50byBhbiBBU1QuXG4gICAgdmFyIGFzdCA9IHR5cGVvZiBtZXNzYWdlID09PSAnc3RyaW5nJyA/XG4gICAgICAgICAgICBNZXNzYWdlRm9ybWF0Ll9fcGFyc2UobWVzc2FnZSkgOiBtZXNzYWdlO1xuXG4gICAgaWYgKCEoYXN0ICYmIGFzdC50eXBlID09PSAnbWVzc2FnZUZvcm1hdFBhdHRlcm4nKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBIG1lc3NhZ2UgbXVzdCBiZSBwcm92aWRlZCBhcyBhIFN0cmluZyBvciBBU1QuJyk7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlcyBhIG5ldyBvYmplY3Qgd2l0aCB0aGUgc3BlY2lmaWVkIGBmb3JtYXRzYCBtZXJnZWQgd2l0aCB0aGUgZGVmYXVsdFxuICAgIC8vIGZvcm1hdHMuXG4gICAgZm9ybWF0cyA9IHRoaXMuX21lcmdlRm9ybWF0cyhNZXNzYWdlRm9ybWF0LmZvcm1hdHMsIGZvcm1hdHMpO1xuXG4gICAgLy8gRGVmaW5lZCBmaXJzdCBiZWNhdXNlIGl0J3MgdXNlZCB0byBidWlsZCB0aGUgZm9ybWF0IHBhdHRlcm4uXG4gICAgc3JjJGVzNSQkLmRlZmluZVByb3BlcnR5KHRoaXMsICdfbG9jYWxlJywgIHt2YWx1ZTogdGhpcy5fcmVzb2x2ZUxvY2FsZShsb2NhbGVzKX0pO1xuXG4gICAgLy8gQ29tcGlsZSB0aGUgYGFzdGAgdG8gYSBwYXR0ZXJuIHRoYXQgaXMgaGlnaGx5IG9wdGltaXplZCBmb3IgcmVwZWF0ZWRcbiAgICAvLyBgZm9ybWF0KClgIGludm9jYXRpb25zLiAqKk5vdGU6KiogVGhpcyBwYXNzZXMgdGhlIGBsb2NhbGVzYCBzZXQgcHJvdmlkZWRcbiAgICAvLyB0byB0aGUgY29uc3RydWN0b3IgaW5zdGVhZCBvZiBqdXN0IHRoZSByZXNvbHZlZCBsb2NhbGUuXG4gICAgdmFyIHBsdXJhbEZuID0gdGhpcy5fZmluZFBsdXJhbFJ1bGVGdW5jdGlvbih0aGlzLl9sb2NhbGUpO1xuICAgIHZhciBwYXR0ZXJuICA9IHRoaXMuX2NvbXBpbGVQYXR0ZXJuKGFzdCwgbG9jYWxlcywgZm9ybWF0cywgcGx1cmFsRm4pO1xuXG4gICAgLy8gXCJCaW5kXCIgYGZvcm1hdCgpYCBtZXRob2QgdG8gYHRoaXNgIHNvIGl0IGNhbiBiZSBwYXNzZWQgYnkgcmVmZXJlbmNlIGxpa2VcbiAgICAvLyB0aGUgb3RoZXIgYEludGxgIEFQSXMuXG4gICAgdmFyIG1lc3NhZ2VGb3JtYXQgPSB0aGlzO1xuICAgIHRoaXMuZm9ybWF0ID0gZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICByZXR1cm4gbWVzc2FnZUZvcm1hdC5fZm9ybWF0KHBhdHRlcm4sIHZhbHVlcyk7XG4gICAgfTtcbn1cblxuLy8gRGVmYXVsdCBmb3JtYXQgb3B0aW9ucyB1c2VkIGFzIHRoZSBwcm90b3R5cGUgb2YgdGhlIGBmb3JtYXRzYCBwcm92aWRlZCB0byB0aGVcbi8vIGNvbnN0cnVjdG9yLiBUaGVzZSBhcmUgdXNlZCB3aGVuIGNvbnN0cnVjdGluZyB0aGUgaW50ZXJuYWwgSW50bC5OdW1iZXJGb3JtYXRcbi8vIGFuZCBJbnRsLkRhdGVUaW1lRm9ybWF0IGluc3RhbmNlcy5cbnNyYyRlczUkJC5kZWZpbmVQcm9wZXJ0eShNZXNzYWdlRm9ybWF0LCAnZm9ybWF0cycsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuXG4gICAgdmFsdWU6IHtcbiAgICAgICAgbnVtYmVyOiB7XG4gICAgICAgICAgICAnY3VycmVuY3knOiB7XG4gICAgICAgICAgICAgICAgc3R5bGU6ICdjdXJyZW5jeSdcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICdwZXJjZW50Jzoge1xuICAgICAgICAgICAgICAgIHN0eWxlOiAncGVyY2VudCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBkYXRlOiB7XG4gICAgICAgICAgICAnc2hvcnQnOiB7XG4gICAgICAgICAgICAgICAgbW9udGg6ICdudW1lcmljJyxcbiAgICAgICAgICAgICAgICBkYXkgIDogJ251bWVyaWMnLFxuICAgICAgICAgICAgICAgIHllYXIgOiAnMi1kaWdpdCdcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICdtZWRpdW0nOiB7XG4gICAgICAgICAgICAgICAgbW9udGg6ICdzaG9ydCcsXG4gICAgICAgICAgICAgICAgZGF5ICA6ICdudW1lcmljJyxcbiAgICAgICAgICAgICAgICB5ZWFyIDogJ251bWVyaWMnXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAnbG9uZyc6IHtcbiAgICAgICAgICAgICAgICBtb250aDogJ2xvbmcnLFxuICAgICAgICAgICAgICAgIGRheSAgOiAnbnVtZXJpYycsXG4gICAgICAgICAgICAgICAgeWVhciA6ICdudW1lcmljJ1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgJ2Z1bGwnOiB7XG4gICAgICAgICAgICAgICAgd2Vla2RheTogJ2xvbmcnLFxuICAgICAgICAgICAgICAgIG1vbnRoICA6ICdsb25nJyxcbiAgICAgICAgICAgICAgICBkYXkgICAgOiAnbnVtZXJpYycsXG4gICAgICAgICAgICAgICAgeWVhciAgIDogJ251bWVyaWMnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgdGltZToge1xuICAgICAgICAgICAgJ3Nob3J0Jzoge1xuICAgICAgICAgICAgICAgIGhvdXIgIDogJ251bWVyaWMnLFxuICAgICAgICAgICAgICAgIG1pbnV0ZTogJ251bWVyaWMnXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAnbWVkaXVtJzogIHtcbiAgICAgICAgICAgICAgICBob3VyICA6ICdudW1lcmljJyxcbiAgICAgICAgICAgICAgICBtaW51dGU6ICdudW1lcmljJyxcbiAgICAgICAgICAgICAgICBzZWNvbmQ6ICdudW1lcmljJ1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgJ2xvbmcnOiB7XG4gICAgICAgICAgICAgICAgaG91ciAgICAgICAgOiAnbnVtZXJpYycsXG4gICAgICAgICAgICAgICAgbWludXRlICAgICAgOiAnbnVtZXJpYycsXG4gICAgICAgICAgICAgICAgc2Vjb25kICAgICAgOiAnbnVtZXJpYycsXG4gICAgICAgICAgICAgICAgdGltZVpvbmVOYW1lOiAnc2hvcnQnXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAnZnVsbCc6IHtcbiAgICAgICAgICAgICAgICBob3VyICAgICAgICA6ICdudW1lcmljJyxcbiAgICAgICAgICAgICAgICBtaW51dGUgICAgICA6ICdudW1lcmljJyxcbiAgICAgICAgICAgICAgICBzZWNvbmQgICAgICA6ICdudW1lcmljJyxcbiAgICAgICAgICAgICAgICB0aW1lWm9uZU5hbWU6ICdzaG9ydCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG4vLyBEZWZpbmUgaW50ZXJuYWwgcHJpdmF0ZSBwcm9wZXJ0aWVzIGZvciBkZWFsaW5nIHdpdGggbG9jYWxlIGRhdGEuXG5zcmMkZXM1JCQuZGVmaW5lUHJvcGVydHkoTWVzc2FnZUZvcm1hdCwgJ19fbG9jYWxlRGF0YV9fJywge3ZhbHVlOiBzcmMkZXM1JCQub2JqQ3JlYXRlKG51bGwpfSk7XG5zcmMkZXM1JCQuZGVmaW5lUHJvcGVydHkoTWVzc2FnZUZvcm1hdCwgJ19fYWRkTG9jYWxlRGF0YScsIHt2YWx1ZTogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBpZiAoIShkYXRhICYmIGRhdGEubG9jYWxlKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAnTG9jYWxlIGRhdGEgcHJvdmlkZWQgdG8gSW50bE1lc3NhZ2VGb3JtYXQgaXMgbWlzc2luZyBhICcgK1xuICAgICAgICAgICAgJ2Bsb2NhbGVgIHByb3BlcnR5J1xuICAgICAgICApO1xuICAgIH1cblxuICAgIE1lc3NhZ2VGb3JtYXQuX19sb2NhbGVEYXRhX19bZGF0YS5sb2NhbGUudG9Mb3dlckNhc2UoKV0gPSBkYXRhO1xufX0pO1xuXG4vLyBEZWZpbmVzIGBfX3BhcnNlKClgIHN0YXRpYyBtZXRob2QgYXMgYW4gZXhwb3NlZCBwcml2YXRlLlxuc3JjJGVzNSQkLmRlZmluZVByb3BlcnR5KE1lc3NhZ2VGb3JtYXQsICdfX3BhcnNlJywge3ZhbHVlOiBpbnRsJG1lc3NhZ2Vmb3JtYXQkcGFyc2VyJCRbXCJkZWZhdWx0XCJdLnBhcnNlfSk7XG5cbi8vIERlZmluZSBwdWJsaWMgYGRlZmF1bHRMb2NhbGVgIHByb3BlcnR5IHdoaWNoIGRlZmF1bHRzIHRvIEVuZ2xpc2gsIGJ1dCBjYW4gYmVcbi8vIHNldCBieSB0aGUgZGV2ZWxvcGVyLlxuc3JjJGVzNSQkLmRlZmluZVByb3BlcnR5KE1lc3NhZ2VGb3JtYXQsICdkZWZhdWx0TG9jYWxlJywge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgd3JpdGFibGUgIDogdHJ1ZSxcbiAgICB2YWx1ZSAgICAgOiB1bmRlZmluZWRcbn0pO1xuXG5NZXNzYWdlRm9ybWF0LnByb3RvdHlwZS5yZXNvbHZlZE9wdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gVE9ETzogUHJvdmlkZSBhbnl0aGluZyBlbHNlP1xuICAgIHJldHVybiB7XG4gICAgICAgIGxvY2FsZTogdGhpcy5fbG9jYWxlXG4gICAgfTtcbn07XG5cbk1lc3NhZ2VGb3JtYXQucHJvdG90eXBlLl9jb21waWxlUGF0dGVybiA9IGZ1bmN0aW9uIChhc3QsIGxvY2FsZXMsIGZvcm1hdHMsIHBsdXJhbEZuKSB7XG4gICAgdmFyIGNvbXBpbGVyID0gbmV3IHNyYyRjb21waWxlciQkW1wiZGVmYXVsdFwiXShsb2NhbGVzLCBmb3JtYXRzLCBwbHVyYWxGbik7XG4gICAgcmV0dXJuIGNvbXBpbGVyLmNvbXBpbGUoYXN0KTtcbn07XG5cbk1lc3NhZ2VGb3JtYXQucHJvdG90eXBlLl9maW5kUGx1cmFsUnVsZUZ1bmN0aW9uID0gZnVuY3Rpb24gKGxvY2FsZSkge1xuICAgIHZhciBsb2NhbGVEYXRhID0gTWVzc2FnZUZvcm1hdC5fX2xvY2FsZURhdGFfXztcbiAgICB2YXIgZGF0YSAgICAgICA9IGxvY2FsZURhdGFbbG9jYWxlLnRvTG93ZXJDYXNlKCldO1xuXG4gICAgLy8gVGhlIGxvY2FsZSBkYXRhIGlzIGRlLWR1cGxpY2F0ZWQsIHNvIHdlIGhhdmUgdG8gdHJhdmVyc2UgdGhlIGxvY2FsZSdzXG4gICAgLy8gaGllcmFyY2h5IHVudGlsIHdlIGZpbmQgYSBgcGx1cmFsUnVsZUZ1bmN0aW9uYCB0byByZXR1cm4uXG4gICAgd2hpbGUgKGRhdGEpIHtcbiAgICAgICAgaWYgKGRhdGEucGx1cmFsUnVsZUZ1bmN0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YS5wbHVyYWxSdWxlRnVuY3Rpb247XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhID0gZGF0YS5wYXJlbnRMb2NhbGUgJiYgbG9jYWxlRGF0YVtkYXRhLnBhcmVudExvY2FsZS50b0xvd2VyQ2FzZSgpXTtcbiAgICB9XG5cbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdMb2NhbGUgZGF0YSBhZGRlZCB0byBJbnRsTWVzc2FnZUZvcm1hdCBpcyBtaXNzaW5nIGEgJyArXG4gICAgICAgICdgcGx1cmFsUnVsZUZ1bmN0aW9uYCBmb3IgOicgKyBsb2NhbGVcbiAgICApO1xufTtcblxuTWVzc2FnZUZvcm1hdC5wcm90b3R5cGUuX2Zvcm1hdCA9IGZ1bmN0aW9uIChwYXR0ZXJuLCB2YWx1ZXMpIHtcbiAgICB2YXIgcmVzdWx0ID0gJycsXG4gICAgICAgIGksIGxlbiwgcGFydCwgaWQsIHZhbHVlO1xuXG4gICAgZm9yIChpID0gMCwgbGVuID0gcGF0dGVybi5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgICBwYXJ0ID0gcGF0dGVybltpXTtcblxuICAgICAgICAvLyBFeGlzdCBlYXJseSBmb3Igc3RyaW5nIHBhcnRzLlxuICAgICAgICBpZiAodHlwZW9mIHBhcnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gcGFydDtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWQgPSBwYXJ0LmlkO1xuXG4gICAgICAgIC8vIEVuZm9yY2UgdGhhdCBhbGwgcmVxdWlyZWQgdmFsdWVzIGFyZSBwcm92aWRlZCBieSB0aGUgY2FsbGVyLlxuICAgICAgICBpZiAoISh2YWx1ZXMgJiYgc3JjJHV0aWxzJCQuaG9wLmNhbGwodmFsdWVzLCBpZCkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgdmFsdWUgbXVzdCBiZSBwcm92aWRlZCBmb3I6ICcgKyBpZCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YWx1ZSA9IHZhbHVlc1tpZF07XG5cbiAgICAgICAgLy8gUmVjdXJzaXZlbHkgZm9ybWF0IHBsdXJhbCBhbmQgc2VsZWN0IHBhcnRzJyBvcHRpb24g4oCUIHdoaWNoIGNhbiBiZSBhXG4gICAgICAgIC8vIG5lc3RlZCBwYXR0ZXJuIHN0cnVjdHVyZS4gVGhlIGNob29zaW5nIG9mIHRoZSBvcHRpb24gdG8gdXNlIGlzXG4gICAgICAgIC8vIGFic3RyYWN0ZWQtYnkgYW5kIGRlbGVnYXRlZC10byB0aGUgcGFydCBoZWxwZXIgb2JqZWN0LlxuICAgICAgICBpZiAocGFydC5vcHRpb25zKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdGhpcy5fZm9ybWF0KHBhcnQuZ2V0T3B0aW9uKHZhbHVlKSwgdmFsdWVzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBwYXJ0LmZvcm1hdCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuTWVzc2FnZUZvcm1hdC5wcm90b3R5cGUuX21lcmdlRm9ybWF0cyA9IGZ1bmN0aW9uIChkZWZhdWx0cywgZm9ybWF0cykge1xuICAgIHZhciBtZXJnZWRGb3JtYXRzID0ge30sXG4gICAgICAgIHR5cGUsIG1lcmdlZFR5cGU7XG5cbiAgICBmb3IgKHR5cGUgaW4gZGVmYXVsdHMpIHtcbiAgICAgICAgaWYgKCFzcmMkdXRpbHMkJC5ob3AuY2FsbChkZWZhdWx0cywgdHlwZSkpIHsgY29udGludWU7IH1cblxuICAgICAgICBtZXJnZWRGb3JtYXRzW3R5cGVdID0gbWVyZ2VkVHlwZSA9IHNyYyRlczUkJC5vYmpDcmVhdGUoZGVmYXVsdHNbdHlwZV0pO1xuXG4gICAgICAgIGlmIChmb3JtYXRzICYmIHNyYyR1dGlscyQkLmhvcC5jYWxsKGZvcm1hdHMsIHR5cGUpKSB7XG4gICAgICAgICAgICBzcmMkdXRpbHMkJC5leHRlbmQobWVyZ2VkVHlwZSwgZm9ybWF0c1t0eXBlXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVyZ2VkRm9ybWF0cztcbn07XG5cbk1lc3NhZ2VGb3JtYXQucHJvdG90eXBlLl9yZXNvbHZlTG9jYWxlID0gZnVuY3Rpb24gKGxvY2FsZXMpIHtcbiAgICBpZiAodHlwZW9mIGxvY2FsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGxvY2FsZXMgPSBbbG9jYWxlc107XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIGEgY29weSBvZiB0aGUgYXJyYXkgc28gd2UgY2FuIHB1c2ggb24gdGhlIGRlZmF1bHQgbG9jYWxlLlxuICAgIGxvY2FsZXMgPSAobG9jYWxlcyB8fCBbXSkuY29uY2F0KE1lc3NhZ2VGb3JtYXQuZGVmYXVsdExvY2FsZSk7XG5cbiAgICB2YXIgbG9jYWxlRGF0YSA9IE1lc3NhZ2VGb3JtYXQuX19sb2NhbGVEYXRhX187XG4gICAgdmFyIGksIGxlbiwgbG9jYWxlUGFydHMsIGRhdGE7XG5cbiAgICAvLyBVc2luZyB0aGUgc2V0IG9mIGxvY2FsZXMgKyB0aGUgZGVmYXVsdCBsb2NhbGUsIHdlIGxvb2sgZm9yIHRoZSBmaXJzdCBvbmVcbiAgICAvLyB3aGljaCB0aGF0IGhhcyBiZWVuIHJlZ2lzdGVyZWQuIFdoZW4gZGF0YSBkb2VzIG5vdCBleGlzdCBmb3IgYSBsb2NhbGUsIHdlXG4gICAgLy8gdHJhdmVyc2UgaXRzIGFuY2VzdG9ycyB0byBmaW5kIHNvbWV0aGluZyB0aGF0J3MgYmVlbiByZWdpc3RlcmVkIHdpdGhpblxuICAgIC8vIGl0cyBoaWVyYXJjaHkgb2YgbG9jYWxlcy4gU2luY2Ugd2UgbGFjayB0aGUgcHJvcGVyIGBwYXJlbnRMb2NhbGVgIGRhdGFcbiAgICAvLyBoZXJlLCB3ZSBtdXN0IHRha2UgYSBuYWl2ZSBhcHByb2FjaCB0byB0cmF2ZXJzYWwuXG4gICAgZm9yIChpID0gMCwgbGVuID0gbG9jYWxlcy5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgICBsb2NhbGVQYXJ0cyA9IGxvY2FsZXNbaV0udG9Mb3dlckNhc2UoKS5zcGxpdCgnLScpO1xuXG4gICAgICAgIHdoaWxlIChsb2NhbGVQYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGRhdGEgPSBsb2NhbGVEYXRhW2xvY2FsZVBhcnRzLmpvaW4oJy0nKV07XG4gICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIC8vIFJldHVybiB0aGUgbm9ybWFsaXplZCBsb2NhbGUgc3RyaW5nOyBlLmcuLCB3ZSByZXR1cm4gXCJlbi1VU1wiLFxuICAgICAgICAgICAgICAgIC8vIGluc3RlYWQgb2YgXCJlbi11c1wiLlxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhLmxvY2FsZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbG9jYWxlUGFydHMucG9wKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgZGVmYXVsdExvY2FsZSA9IGxvY2FsZXMucG9wKCk7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnTm8gbG9jYWxlIGRhdGEgaGFzIGJlZW4gYWRkZWQgdG8gSW50bE1lc3NhZ2VGb3JtYXQgZm9yOiAnICtcbiAgICAgICAgbG9jYWxlcy5qb2luKCcsICcpICsgJywgb3IgdGhlIGRlZmF1bHQgbG9jYWxlOiAnICsgZGVmYXVsdExvY2FsZVxuICAgICk7XG59O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb3JlLmpzLm1hcCIsIi8vIEdFTkVSQVRFRCBGSUxFXG5cInVzZSBzdHJpY3RcIjtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0ge1wibG9jYWxlXCI6XCJlblwiLFwicGx1cmFsUnVsZUZ1bmN0aW9uXCI6ZnVuY3Rpb24gKG4sb3JkKXt2YXIgcz1TdHJpbmcobikuc3BsaXQoXCIuXCIpLHYwPSFzWzFdLHQwPU51bWJlcihzWzBdKT09bixuMTA9dDAmJnNbMF0uc2xpY2UoLTEpLG4xMDA9dDAmJnNbMF0uc2xpY2UoLTIpO2lmKG9yZClyZXR1cm4gbjEwPT0xJiZuMTAwIT0xMT9cIm9uZVwiOm4xMD09MiYmbjEwMCE9MTI/XCJ0d29cIjpuMTA9PTMmJm4xMDAhPTEzP1wiZmV3XCI6XCJvdGhlclwiO3JldHVybiBuPT0xJiZ2MD9cIm9uZVwiOlwib3RoZXJcIn19O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1lbi5qcy5tYXAiLCIvKlxuQ29weXJpZ2h0IChjKSAyMDE0LCBZYWhvbyEgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuQ29weXJpZ2h0cyBsaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBMaWNlbnNlLlxuU2VlIHRoZSBhY2NvbXBhbnlpbmcgTElDRU5TRSBmaWxlIGZvciB0ZXJtcy5cbiovXG5cbi8qIGpzbGludCBlc25leHQ6IHRydWUgKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgc3JjJHV0aWxzJCQgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcblxuLy8gUHVycG9zZWx5IHVzaW5nIHRoZSBzYW1lIGltcGxlbWVudGF0aW9uIGFzIHRoZSBJbnRsLmpzIGBJbnRsYCBwb2x5ZmlsbC5cbi8vIENvcHlyaWdodCAyMDEzIEFuZHkgRWFybnNoYXcsIE1JVCBMaWNlbnNlXG5cbnZhciByZWFsRGVmaW5lUHJvcCA9IChmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHsgcmV0dXJuICEhT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHt9KTsgfVxuICAgIGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfVxufSkoKTtcblxudmFyIGVzMyA9ICFyZWFsRGVmaW5lUHJvcCAmJiAhT2JqZWN0LnByb3RvdHlwZS5fX2RlZmluZUdldHRlcl9fO1xuXG52YXIgZGVmaW5lUHJvcGVydHkgPSByZWFsRGVmaW5lUHJvcCA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6XG4gICAgICAgIGZ1bmN0aW9uIChvYmosIG5hbWUsIGRlc2MpIHtcblxuICAgIGlmICgnZ2V0JyBpbiBkZXNjICYmIG9iai5fX2RlZmluZUdldHRlcl9fKSB7XG4gICAgICAgIG9iai5fX2RlZmluZUdldHRlcl9fKG5hbWUsIGRlc2MuZ2V0KTtcbiAgICB9IGVsc2UgaWYgKCFzcmMkdXRpbHMkJC5ob3AuY2FsbChvYmosIG5hbWUpIHx8ICd2YWx1ZScgaW4gZGVzYykge1xuICAgICAgICBvYmpbbmFtZV0gPSBkZXNjLnZhbHVlO1xuICAgIH1cbn07XG5cbnZhciBvYmpDcmVhdGUgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIChwcm90bywgcHJvcHMpIHtcbiAgICB2YXIgb2JqLCBrO1xuXG4gICAgZnVuY3Rpb24gRigpIHt9XG4gICAgRi5wcm90b3R5cGUgPSBwcm90bztcbiAgICBvYmogPSBuZXcgRigpO1xuXG4gICAgZm9yIChrIGluIHByb3BzKSB7XG4gICAgICAgIGlmIChzcmMkdXRpbHMkJC5ob3AuY2FsbChwcm9wcywgaykpIHtcbiAgICAgICAgICAgIGRlZmluZVByb3BlcnR5KG9iaiwgaywgcHJvcHNba10pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbn07XG5leHBvcnRzLmRlZmluZVByb3BlcnR5ID0gZGVmaW5lUHJvcGVydHksIGV4cG9ydHMub2JqQ3JlYXRlID0gb2JqQ3JlYXRlO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1lczUuanMubWFwIiwiLyoganNsaW50IGVzbmV4dDogdHJ1ZSAqL1xuXG5cInVzZSBzdHJpY3RcIjtcbnZhciBzcmMkY29yZSQkID0gcmVxdWlyZShcIi4vY29yZVwiKSwgc3JjJGVuJCQgPSByZXF1aXJlKFwiLi9lblwiKTtcblxuc3JjJGNvcmUkJFtcImRlZmF1bHRcIl0uX19hZGRMb2NhbGVEYXRhKHNyYyRlbiQkW1wiZGVmYXVsdFwiXSk7XG5zcmMkY29yZSQkW1wiZGVmYXVsdFwiXS5kZWZhdWx0TG9jYWxlID0gJ2VuJztcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBzcmMkY29yZSQkW1wiZGVmYXVsdFwiXTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWFpbi5qcy5tYXAiLCIvKlxuQ29weXJpZ2h0IChjKSAyMDE0LCBZYWhvbyEgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuQ29weXJpZ2h0cyBsaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBMaWNlbnNlLlxuU2VlIHRoZSBhY2NvbXBhbnlpbmcgTElDRU5TRSBmaWxlIGZvciB0ZXJtcy5cbiovXG5cbi8qIGpzbGludCBlc25leHQ6IHRydWUgKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLmV4dGVuZCA9IGV4dGVuZDtcbnZhciBob3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5mdW5jdGlvbiBleHRlbmQob2JqKSB7XG4gICAgdmFyIHNvdXJjZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLFxuICAgICAgICBpLCBsZW4sIHNvdXJjZSwga2V5O1xuXG4gICAgZm9yIChpID0gMCwgbGVuID0gc291cmNlcy5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgICBzb3VyY2UgPSBzb3VyY2VzW2ldO1xuICAgICAgICBpZiAoIXNvdXJjZSkgeyBjb250aW51ZTsgfVxuXG4gICAgICAgIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgICAgaWYgKGhvcC5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgICAgICAgIG9ialtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xufVxuZXhwb3J0cy5ob3AgPSBob3A7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWxzLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvcGFyc2VyJylbJ2RlZmF1bHQnXTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSAoZnVuY3Rpb24oKSB7XG4gIC8qXG4gICAqIEdlbmVyYXRlZCBieSBQRUcuanMgMC44LjAuXG4gICAqXG4gICAqIGh0dHA6Ly9wZWdqcy5tYWpkYS5jei9cbiAgICovXG5cbiAgZnVuY3Rpb24gcGVnJHN1YmNsYXNzKGNoaWxkLCBwYXJlbnQpIHtcbiAgICBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH1cbiAgICBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7XG4gICAgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIFN5bnRheEVycm9yKG1lc3NhZ2UsIGV4cGVjdGVkLCBmb3VuZCwgb2Zmc2V0LCBsaW5lLCBjb2x1bW4pIHtcbiAgICB0aGlzLm1lc3NhZ2UgID0gbWVzc2FnZTtcbiAgICB0aGlzLmV4cGVjdGVkID0gZXhwZWN0ZWQ7XG4gICAgdGhpcy5mb3VuZCAgICA9IGZvdW5kO1xuICAgIHRoaXMub2Zmc2V0ICAgPSBvZmZzZXQ7XG4gICAgdGhpcy5saW5lICAgICA9IGxpbmU7XG4gICAgdGhpcy5jb2x1bW4gICA9IGNvbHVtbjtcblxuICAgIHRoaXMubmFtZSAgICAgPSBcIlN5bnRheEVycm9yXCI7XG4gIH1cblxuICBwZWckc3ViY2xhc3MoU3ludGF4RXJyb3IsIEVycm9yKTtcblxuICBmdW5jdGlvbiBwYXJzZShpbnB1dCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB7fSxcblxuICAgICAgICBwZWckRkFJTEVEID0ge30sXG5cbiAgICAgICAgcGVnJHN0YXJ0UnVsZUZ1bmN0aW9ucyA9IHsgc3RhcnQ6IHBlZyRwYXJzZXN0YXJ0IH0sXG4gICAgICAgIHBlZyRzdGFydFJ1bGVGdW5jdGlvbiAgPSBwZWckcGFyc2VzdGFydCxcblxuICAgICAgICBwZWckYzAgPSBbXSxcbiAgICAgICAgcGVnJGMxID0gZnVuY3Rpb24oZWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlICAgIDogJ21lc3NhZ2VGb3JtYXRQYXR0ZXJuJyxcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudHM6IGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIHBlZyRjMiA9IHBlZyRGQUlMRUQsXG4gICAgICAgIHBlZyRjMyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3RyaW5nID0gJycsXG4gICAgICAgICAgICAgICAgICAgIGksIGosIG91dGVyTGVuLCBpbm5lciwgaW5uZXJMZW47XG5cbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwLCBvdXRlckxlbiA9IHRleHQubGVuZ3RoOyBpIDwgb3V0ZXJMZW47IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICBpbm5lciA9IHRleHRbaV07XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChqID0gMCwgaW5uZXJMZW4gPSBpbm5lci5sZW5ndGg7IGogPCBpbm5lckxlbjsgaiArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmcgKz0gaW5uZXJbal07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gc3RyaW5nO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgcGVnJGM0ID0gZnVuY3Rpb24obWVzc2FnZVRleHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlIDogJ21lc3NhZ2VUZXh0RWxlbWVudCcsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBtZXNzYWdlVGV4dFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LFxuICAgICAgICBwZWckYzUgPSAvXlteIFxcdFxcblxcciwuKz17fSNdLyxcbiAgICAgICAgcGVnJGM2ID0geyB0eXBlOiBcImNsYXNzXCIsIHZhbHVlOiBcIlteIFxcXFx0XFxcXG5cXFxcciwuKz17fSNdXCIsIGRlc2NyaXB0aW9uOiBcIlteIFxcXFx0XFxcXG5cXFxcciwuKz17fSNdXCIgfSxcbiAgICAgICAgcGVnJGM3ID0gXCJ7XCIsXG4gICAgICAgIHBlZyRjOCA9IHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIntcIiwgZGVzY3JpcHRpb246IFwiXFxcIntcXFwiXCIgfSxcbiAgICAgICAgcGVnJGM5ID0gbnVsbCxcbiAgICAgICAgcGVnJGMxMCA9IFwiLFwiLFxuICAgICAgICBwZWckYzExID0geyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiLFwiLCBkZXNjcmlwdGlvbjogXCJcXFwiLFxcXCJcIiB9LFxuICAgICAgICBwZWckYzEyID0gXCJ9XCIsXG4gICAgICAgIHBlZyRjMTMgPSB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJ9XCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJ9XFxcIlwiIH0sXG4gICAgICAgIHBlZyRjMTQgPSBmdW5jdGlvbihpZCwgZm9ybWF0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSAgOiAnYXJndW1lbnRFbGVtZW50JyxcbiAgICAgICAgICAgICAgICAgICAgaWQgICAgOiBpZCxcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBmb3JtYXQgJiYgZm9ybWF0WzJdXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIHBlZyRjMTUgPSBcIm51bWJlclwiLFxuICAgICAgICBwZWckYzE2ID0geyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwibnVtYmVyXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJudW1iZXJcXFwiXCIgfSxcbiAgICAgICAgcGVnJGMxNyA9IFwiZGF0ZVwiLFxuICAgICAgICBwZWckYzE4ID0geyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiZGF0ZVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiZGF0ZVxcXCJcIiB9LFxuICAgICAgICBwZWckYzE5ID0gXCJ0aW1lXCIsXG4gICAgICAgIHBlZyRjMjAgPSB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJ0aW1lXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJ0aW1lXFxcIlwiIH0sXG4gICAgICAgIHBlZyRjMjEgPSBmdW5jdGlvbih0eXBlLCBzdHlsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgOiB0eXBlICsgJ0Zvcm1hdCcsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiBzdHlsZSAmJiBzdHlsZVsyXVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LFxuICAgICAgICBwZWckYzIyID0gXCJwbHVyYWxcIixcbiAgICAgICAgcGVnJGMyMyA9IHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcInBsdXJhbFwiLCBkZXNjcmlwdGlvbjogXCJcXFwicGx1cmFsXFxcIlwiIH0sXG4gICAgICAgIHBlZyRjMjQgPSBmdW5jdGlvbihwbHVyYWxTdHlsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgICA6IHBsdXJhbFN0eWxlLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgIG9yZGluYWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQgOiBwbHVyYWxTdHlsZS5vZmZzZXQgfHwgMCxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogcGx1cmFsU3R5bGUub3B0aW9uc1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LFxuICAgICAgICBwZWckYzI1ID0gXCJzZWxlY3RvcmRpbmFsXCIsXG4gICAgICAgIHBlZyRjMjYgPSB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJzZWxlY3RvcmRpbmFsXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJzZWxlY3RvcmRpbmFsXFxcIlwiIH0sXG4gICAgICAgIHBlZyRjMjcgPSBmdW5jdGlvbihwbHVyYWxTdHlsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgICA6IHBsdXJhbFN0eWxlLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgIG9yZGluYWw6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldCA6IHBsdXJhbFN0eWxlLm9mZnNldCB8fCAwLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBwbHVyYWxTdHlsZS5vcHRpb25zXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgcGVnJGMyOCA9IFwic2VsZWN0XCIsXG4gICAgICAgIHBlZyRjMjkgPSB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJzZWxlY3RcIiwgZGVzY3JpcHRpb246IFwiXFxcInNlbGVjdFxcXCJcIiB9LFxuICAgICAgICBwZWckYzMwID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgICA6ICdzZWxlY3RGb3JtYXQnLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIHBlZyRjMzEgPSBcIj1cIixcbiAgICAgICAgcGVnJGMzMiA9IHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIj1cIiwgZGVzY3JpcHRpb246IFwiXFxcIj1cXFwiXCIgfSxcbiAgICAgICAgcGVnJGMzMyA9IGZ1bmN0aW9uKHNlbGVjdG9yLCBwYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSAgICA6ICdvcHRpb25hbEZvcm1hdFBhdHRlcm4nLFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3Rvcjogc2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlICAgOiBwYXR0ZXJuXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIHBlZyRjMzQgPSBcIm9mZnNldDpcIixcbiAgICAgICAgcGVnJGMzNSA9IHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIm9mZnNldDpcIiwgZGVzY3JpcHRpb246IFwiXFxcIm9mZnNldDpcXFwiXCIgfSxcbiAgICAgICAgcGVnJGMzNiA9IGZ1bmN0aW9uKG51bWJlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBudW1iZXI7XG4gICAgICAgICAgICB9LFxuICAgICAgICBwZWckYzM3ID0gZnVuY3Rpb24ob2Zmc2V0LCBvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSAgIDogJ3BsdXJhbEZvcm1hdCcsXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldCA6IG9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogb3B0aW9uc1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LFxuICAgICAgICBwZWckYzM4ID0geyB0eXBlOiBcIm90aGVyXCIsIGRlc2NyaXB0aW9uOiBcIndoaXRlc3BhY2VcIiB9LFxuICAgICAgICBwZWckYzM5ID0gL15bIFxcdFxcblxccl0vLFxuICAgICAgICBwZWckYzQwID0geyB0eXBlOiBcImNsYXNzXCIsIHZhbHVlOiBcIlsgXFxcXHRcXFxcblxcXFxyXVwiLCBkZXNjcmlwdGlvbjogXCJbIFxcXFx0XFxcXG5cXFxccl1cIiB9LFxuICAgICAgICBwZWckYzQxID0geyB0eXBlOiBcIm90aGVyXCIsIGRlc2NyaXB0aW9uOiBcIm9wdGlvbmFsV2hpdGVzcGFjZVwiIH0sXG4gICAgICAgIHBlZyRjNDIgPSAvXlswLTldLyxcbiAgICAgICAgcGVnJGM0MyA9IHsgdHlwZTogXCJjbGFzc1wiLCB2YWx1ZTogXCJbMC05XVwiLCBkZXNjcmlwdGlvbjogXCJbMC05XVwiIH0sXG4gICAgICAgIHBlZyRjNDQgPSAvXlswLTlhLWZdL2ksXG4gICAgICAgIHBlZyRjNDUgPSB7IHR5cGU6IFwiY2xhc3NcIiwgdmFsdWU6IFwiWzAtOWEtZl1pXCIsIGRlc2NyaXB0aW9uOiBcIlswLTlhLWZdaVwiIH0sXG4gICAgICAgIHBlZyRjNDYgPSBcIjBcIixcbiAgICAgICAgcGVnJGM0NyA9IHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIjBcIiwgZGVzY3JpcHRpb246IFwiXFxcIjBcXFwiXCIgfSxcbiAgICAgICAgcGVnJGM0OCA9IC9eWzEtOV0vLFxuICAgICAgICBwZWckYzQ5ID0geyB0eXBlOiBcImNsYXNzXCIsIHZhbHVlOiBcIlsxLTldXCIsIGRlc2NyaXB0aW9uOiBcIlsxLTldXCIgfSxcbiAgICAgICAgcGVnJGM1MCA9IGZ1bmN0aW9uKGRpZ2l0cykge1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KGRpZ2l0cywgMTApO1xuICAgICAgICB9LFxuICAgICAgICBwZWckYzUxID0gL15bXnt9XFxcXFxcMC1cXHgxRn8gXFx0XFxuXFxyXS8sXG4gICAgICAgIHBlZyRjNTIgPSB7IHR5cGU6IFwiY2xhc3NcIiwgdmFsdWU6IFwiW157fVxcXFxcXFxcXFxcXDAtXFxcXHgxRn8gXFxcXHRcXFxcblxcXFxyXVwiLCBkZXNjcmlwdGlvbjogXCJbXnt9XFxcXFxcXFxcXFxcMC1cXFxceDFGfyBcXFxcdFxcXFxuXFxcXHJdXCIgfSxcbiAgICAgICAgcGVnJGM1MyA9IFwiXFxcXCNcIixcbiAgICAgICAgcGVnJGM1NCA9IHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlxcXFwjXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJcXFxcXFxcXCNcXFwiXCIgfSxcbiAgICAgICAgcGVnJGM1NSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gJ1xcXFwjJzsgfSxcbiAgICAgICAgcGVnJGM1NiA9IFwiXFxcXHtcIixcbiAgICAgICAgcGVnJGM1NyA9IHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlxcXFx7XCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJcXFxcXFxcXHtcXFwiXCIgfSxcbiAgICAgICAgcGVnJGM1OCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gJ1xcdTAwN0InOyB9LFxuICAgICAgICBwZWckYzU5ID0gXCJcXFxcfVwiLFxuICAgICAgICBwZWckYzYwID0geyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiXFxcXH1cIiwgZGVzY3JpcHRpb246IFwiXFxcIlxcXFxcXFxcfVxcXCJcIiB9LFxuICAgICAgICBwZWckYzYxID0gZnVuY3Rpb24oKSB7IHJldHVybiAnXFx1MDA3RCc7IH0sXG4gICAgICAgIHBlZyRjNjIgPSBcIlxcXFx1XCIsXG4gICAgICAgIHBlZyRjNjMgPSB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJcXFxcdVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiXFxcXFxcXFx1XFxcIlwiIH0sXG4gICAgICAgIHBlZyRjNjQgPSBmdW5jdGlvbihkaWdpdHMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludChkaWdpdHMsIDE2KSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICBwZWckYzY1ID0gZnVuY3Rpb24oY2hhcnMpIHsgcmV0dXJuIGNoYXJzLmpvaW4oJycpOyB9LFxuXG4gICAgICAgIHBlZyRjdXJyUG9zICAgICAgICAgID0gMCxcbiAgICAgICAgcGVnJHJlcG9ydGVkUG9zICAgICAgPSAwLFxuICAgICAgICBwZWckY2FjaGVkUG9zICAgICAgICA9IDAsXG4gICAgICAgIHBlZyRjYWNoZWRQb3NEZXRhaWxzID0geyBsaW5lOiAxLCBjb2x1bW46IDEsIHNlZW5DUjogZmFsc2UgfSxcbiAgICAgICAgcGVnJG1heEZhaWxQb3MgICAgICAgPSAwLFxuICAgICAgICBwZWckbWF4RmFpbEV4cGVjdGVkICA9IFtdLFxuICAgICAgICBwZWckc2lsZW50RmFpbHMgICAgICA9IDAsXG5cbiAgICAgICAgcGVnJHJlc3VsdDtcblxuICAgIGlmIChcInN0YXJ0UnVsZVwiIGluIG9wdGlvbnMpIHtcbiAgICAgIGlmICghKG9wdGlvbnMuc3RhcnRSdWxlIGluIHBlZyRzdGFydFJ1bGVGdW5jdGlvbnMpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbid0IHN0YXJ0IHBhcnNpbmcgZnJvbSBydWxlIFxcXCJcIiArIG9wdGlvbnMuc3RhcnRSdWxlICsgXCJcXFwiLlwiKTtcbiAgICAgIH1cblxuICAgICAgcGVnJHN0YXJ0UnVsZUZ1bmN0aW9uID0gcGVnJHN0YXJ0UnVsZUZ1bmN0aW9uc1tvcHRpb25zLnN0YXJ0UnVsZV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdGV4dCgpIHtcbiAgICAgIHJldHVybiBpbnB1dC5zdWJzdHJpbmcocGVnJHJlcG9ydGVkUG9zLCBwZWckY3VyclBvcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb2Zmc2V0KCkge1xuICAgICAgcmV0dXJuIHBlZyRyZXBvcnRlZFBvcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaW5lKCkge1xuICAgICAgcmV0dXJuIHBlZyRjb21wdXRlUG9zRGV0YWlscyhwZWckcmVwb3J0ZWRQb3MpLmxpbmU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29sdW1uKCkge1xuICAgICAgcmV0dXJuIHBlZyRjb21wdXRlUG9zRGV0YWlscyhwZWckcmVwb3J0ZWRQb3MpLmNvbHVtbjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBleHBlY3RlZChkZXNjcmlwdGlvbikge1xuICAgICAgdGhyb3cgcGVnJGJ1aWxkRXhjZXB0aW9uKFxuICAgICAgICBudWxsLFxuICAgICAgICBbeyB0eXBlOiBcIm90aGVyXCIsIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbiB9XSxcbiAgICAgICAgcGVnJHJlcG9ydGVkUG9zXG4gICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVycm9yKG1lc3NhZ2UpIHtcbiAgICAgIHRocm93IHBlZyRidWlsZEV4Y2VwdGlvbihtZXNzYWdlLCBudWxsLCBwZWckcmVwb3J0ZWRQb3MpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBlZyRjb21wdXRlUG9zRGV0YWlscyhwb3MpIHtcbiAgICAgIGZ1bmN0aW9uIGFkdmFuY2UoZGV0YWlscywgc3RhcnRQb3MsIGVuZFBvcykge1xuICAgICAgICB2YXIgcCwgY2g7XG5cbiAgICAgICAgZm9yIChwID0gc3RhcnRQb3M7IHAgPCBlbmRQb3M7IHArKykge1xuICAgICAgICAgIGNoID0gaW5wdXQuY2hhckF0KHApO1xuICAgICAgICAgIGlmIChjaCA9PT0gXCJcXG5cIikge1xuICAgICAgICAgICAgaWYgKCFkZXRhaWxzLnNlZW5DUikgeyBkZXRhaWxzLmxpbmUrKzsgfVxuICAgICAgICAgICAgZGV0YWlscy5jb2x1bW4gPSAxO1xuICAgICAgICAgICAgZGV0YWlscy5zZWVuQ1IgPSBmYWxzZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGNoID09PSBcIlxcclwiIHx8IGNoID09PSBcIlxcdTIwMjhcIiB8fCBjaCA9PT0gXCJcXHUyMDI5XCIpIHtcbiAgICAgICAgICAgIGRldGFpbHMubGluZSsrO1xuICAgICAgICAgICAgZGV0YWlscy5jb2x1bW4gPSAxO1xuICAgICAgICAgICAgZGV0YWlscy5zZWVuQ1IgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZXRhaWxzLmNvbHVtbisrO1xuICAgICAgICAgICAgZGV0YWlscy5zZWVuQ1IgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHBlZyRjYWNoZWRQb3MgIT09IHBvcykge1xuICAgICAgICBpZiAocGVnJGNhY2hlZFBvcyA+IHBvcykge1xuICAgICAgICAgIHBlZyRjYWNoZWRQb3MgPSAwO1xuICAgICAgICAgIHBlZyRjYWNoZWRQb3NEZXRhaWxzID0geyBsaW5lOiAxLCBjb2x1bW46IDEsIHNlZW5DUjogZmFsc2UgfTtcbiAgICAgICAgfVxuICAgICAgICBhZHZhbmNlKHBlZyRjYWNoZWRQb3NEZXRhaWxzLCBwZWckY2FjaGVkUG9zLCBwb3MpO1xuICAgICAgICBwZWckY2FjaGVkUG9zID0gcG9zO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGVnJGNhY2hlZFBvc0RldGFpbHM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGVnJGZhaWwoZXhwZWN0ZWQpIHtcbiAgICAgIGlmIChwZWckY3VyclBvcyA8IHBlZyRtYXhGYWlsUG9zKSB7IHJldHVybjsgfVxuXG4gICAgICBpZiAocGVnJGN1cnJQb3MgPiBwZWckbWF4RmFpbFBvcykge1xuICAgICAgICBwZWckbWF4RmFpbFBvcyA9IHBlZyRjdXJyUG9zO1xuICAgICAgICBwZWckbWF4RmFpbEV4cGVjdGVkID0gW107XG4gICAgICB9XG5cbiAgICAgIHBlZyRtYXhGYWlsRXhwZWN0ZWQucHVzaChleHBlY3RlZCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGVnJGJ1aWxkRXhjZXB0aW9uKG1lc3NhZ2UsIGV4cGVjdGVkLCBwb3MpIHtcbiAgICAgIGZ1bmN0aW9uIGNsZWFudXBFeHBlY3RlZChleHBlY3RlZCkge1xuICAgICAgICB2YXIgaSA9IDE7XG5cbiAgICAgICAgZXhwZWN0ZWQuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgaWYgKGEuZGVzY3JpcHRpb24gPCBiLmRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgfSBlbHNlIGlmIChhLmRlc2NyaXB0aW9uID4gYi5kZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgd2hpbGUgKGkgPCBleHBlY3RlZC5sZW5ndGgpIHtcbiAgICAgICAgICBpZiAoZXhwZWN0ZWRbaSAtIDFdID09PSBleHBlY3RlZFtpXSkge1xuICAgICAgICAgICAgZXhwZWN0ZWQuc3BsaWNlKGksIDEpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGJ1aWxkTWVzc2FnZShleHBlY3RlZCwgZm91bmQpIHtcbiAgICAgICAgZnVuY3Rpb24gc3RyaW5nRXNjYXBlKHMpIHtcbiAgICAgICAgICBmdW5jdGlvbiBoZXgoY2gpIHsgcmV0dXJuIGNoLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7IH1cblxuICAgICAgICAgIHJldHVybiBzXG4gICAgICAgICAgICAucmVwbGFjZSgvXFxcXC9nLCAgICdcXFxcXFxcXCcpXG4gICAgICAgICAgICAucmVwbGFjZSgvXCIvZywgICAgJ1xcXFxcIicpXG4gICAgICAgICAgICAucmVwbGFjZSgvXFx4MDgvZywgJ1xcXFxiJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXHQvZywgICAnXFxcXHQnKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcbi9nLCAgICdcXFxcbicpXG4gICAgICAgICAgICAucmVwbGFjZSgvXFxmL2csICAgJ1xcXFxmJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXHIvZywgICAnXFxcXHInKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1tcXHgwMC1cXHgwN1xceDBCXFx4MEVcXHgwRl0vZywgZnVuY3Rpb24oY2gpIHsgcmV0dXJuICdcXFxceDAnICsgaGV4KGNoKTsgfSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC9bXFx4MTAtXFx4MUZcXHg4MC1cXHhGRl0vZywgICAgZnVuY3Rpb24oY2gpIHsgcmV0dXJuICdcXFxceCcgICsgaGV4KGNoKTsgfSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC9bXFx1MDE4MC1cXHUwRkZGXS9nLCAgICAgICAgIGZ1bmN0aW9uKGNoKSB7IHJldHVybiAnXFxcXHUwJyArIGhleChjaCk7IH0pXG4gICAgICAgICAgICAucmVwbGFjZSgvW1xcdTEwODAtXFx1RkZGRl0vZywgICAgICAgICBmdW5jdGlvbihjaCkgeyByZXR1cm4gJ1xcXFx1JyAgKyBoZXgoY2gpOyB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBleHBlY3RlZERlc2NzID0gbmV3IEFycmF5KGV4cGVjdGVkLmxlbmd0aCksXG4gICAgICAgICAgICBleHBlY3RlZERlc2MsIGZvdW5kRGVzYywgaTtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZXhwZWN0ZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBleHBlY3RlZERlc2NzW2ldID0gZXhwZWN0ZWRbaV0uZGVzY3JpcHRpb247XG4gICAgICAgIH1cblxuICAgICAgICBleHBlY3RlZERlc2MgPSBleHBlY3RlZC5sZW5ndGggPiAxXG4gICAgICAgICAgPyBleHBlY3RlZERlc2NzLnNsaWNlKDAsIC0xKS5qb2luKFwiLCBcIilcbiAgICAgICAgICAgICAgKyBcIiBvciBcIlxuICAgICAgICAgICAgICArIGV4cGVjdGVkRGVzY3NbZXhwZWN0ZWQubGVuZ3RoIC0gMV1cbiAgICAgICAgICA6IGV4cGVjdGVkRGVzY3NbMF07XG5cbiAgICAgICAgZm91bmREZXNjID0gZm91bmQgPyBcIlxcXCJcIiArIHN0cmluZ0VzY2FwZShmb3VuZCkgKyBcIlxcXCJcIiA6IFwiZW5kIG9mIGlucHV0XCI7XG5cbiAgICAgICAgcmV0dXJuIFwiRXhwZWN0ZWQgXCIgKyBleHBlY3RlZERlc2MgKyBcIiBidXQgXCIgKyBmb3VuZERlc2MgKyBcIiBmb3VuZC5cIjtcbiAgICAgIH1cblxuICAgICAgdmFyIHBvc0RldGFpbHMgPSBwZWckY29tcHV0ZVBvc0RldGFpbHMocG9zKSxcbiAgICAgICAgICBmb3VuZCAgICAgID0gcG9zIDwgaW5wdXQubGVuZ3RoID8gaW5wdXQuY2hhckF0KHBvcykgOiBudWxsO1xuXG4gICAgICBpZiAoZXhwZWN0ZWQgIT09IG51bGwpIHtcbiAgICAgICAgY2xlYW51cEV4cGVjdGVkKGV4cGVjdGVkKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBTeW50YXhFcnJvcihcbiAgICAgICAgbWVzc2FnZSAhPT0gbnVsbCA/IG1lc3NhZ2UgOiBidWlsZE1lc3NhZ2UoZXhwZWN0ZWQsIGZvdW5kKSxcbiAgICAgICAgZXhwZWN0ZWQsXG4gICAgICAgIGZvdW5kLFxuICAgICAgICBwb3MsXG4gICAgICAgIHBvc0RldGFpbHMubGluZSxcbiAgICAgICAgcG9zRGV0YWlscy5jb2x1bW5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGVnJHBhcnNlc3RhcnQoKSB7XG4gICAgICB2YXIgczA7XG5cbiAgICAgIHMwID0gcGVnJHBhcnNlbWVzc2FnZUZvcm1hdFBhdHRlcm4oKTtcblxuICAgICAgcmV0dXJuIHMwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBlZyRwYXJzZW1lc3NhZ2VGb3JtYXRQYXR0ZXJuKCkge1xuICAgICAgdmFyIHMwLCBzMSwgczI7XG5cbiAgICAgIHMwID0gcGVnJGN1cnJQb3M7XG4gICAgICBzMSA9IFtdO1xuICAgICAgczIgPSBwZWckcGFyc2VtZXNzYWdlRm9ybWF0RWxlbWVudCgpO1xuICAgICAgd2hpbGUgKHMyICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgIHMxLnB1c2goczIpO1xuICAgICAgICBzMiA9IHBlZyRwYXJzZW1lc3NhZ2VGb3JtYXRFbGVtZW50KCk7XG4gICAgICB9XG4gICAgICBpZiAoczEgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgcGVnJHJlcG9ydGVkUG9zID0gczA7XG4gICAgICAgIHMxID0gcGVnJGMxKHMxKTtcbiAgICAgIH1cbiAgICAgIHMwID0gczE7XG5cbiAgICAgIHJldHVybiBzMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwZWckcGFyc2VtZXNzYWdlRm9ybWF0RWxlbWVudCgpIHtcbiAgICAgIHZhciBzMDtcblxuICAgICAgczAgPSBwZWckcGFyc2VtZXNzYWdlVGV4dEVsZW1lbnQoKTtcbiAgICAgIGlmIChzMCA9PT0gcGVnJEZBSUxFRCkge1xuICAgICAgICBzMCA9IHBlZyRwYXJzZWFyZ3VtZW50RWxlbWVudCgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gczA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGVnJHBhcnNlbWVzc2FnZVRleHQoKSB7XG4gICAgICB2YXIgczAsIHMxLCBzMiwgczMsIHM0LCBzNTtcblxuICAgICAgczAgPSBwZWckY3VyclBvcztcbiAgICAgIHMxID0gW107XG4gICAgICBzMiA9IHBlZyRjdXJyUG9zO1xuICAgICAgczMgPSBwZWckcGFyc2VfKCk7XG4gICAgICBpZiAoczMgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgczQgPSBwZWckcGFyc2VjaGFycygpO1xuICAgICAgICBpZiAoczQgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICBzNSA9IHBlZyRwYXJzZV8oKTtcbiAgICAgICAgICBpZiAoczUgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgIHMzID0gW3MzLCBzNCwgczVdO1xuICAgICAgICAgICAgczIgPSBzMztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMjtcbiAgICAgICAgICAgIHMyID0gcGVnJGMyO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwZWckY3VyclBvcyA9IHMyO1xuICAgICAgICAgIHMyID0gcGVnJGMyO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwZWckY3VyclBvcyA9IHMyO1xuICAgICAgICBzMiA9IHBlZyRjMjtcbiAgICAgIH1cbiAgICAgIGlmIChzMiAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICB3aGlsZSAoczIgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICBzMS5wdXNoKHMyKTtcbiAgICAgICAgICBzMiA9IHBlZyRjdXJyUG9zO1xuICAgICAgICAgIHMzID0gcGVnJHBhcnNlXygpO1xuICAgICAgICAgIGlmIChzMyAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgczQgPSBwZWckcGFyc2VjaGFycygpO1xuICAgICAgICAgICAgaWYgKHM0ICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICAgIHM1ID0gcGVnJHBhcnNlXygpO1xuICAgICAgICAgICAgICBpZiAoczUgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgICAgICBzMyA9IFtzMywgczQsIHM1XTtcbiAgICAgICAgICAgICAgICBzMiA9IHMzO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBlZyRjdXJyUG9zID0gczI7XG4gICAgICAgICAgICAgICAgczIgPSBwZWckYzI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBlZyRjdXJyUG9zID0gczI7XG4gICAgICAgICAgICAgIHMyID0gcGVnJGMyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwZWckY3VyclBvcyA9IHMyO1xuICAgICAgICAgICAgczIgPSBwZWckYzI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzMSA9IHBlZyRjMjtcbiAgICAgIH1cbiAgICAgIGlmIChzMSAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICBwZWckcmVwb3J0ZWRQb3MgPSBzMDtcbiAgICAgICAgczEgPSBwZWckYzMoczEpO1xuICAgICAgfVxuICAgICAgczAgPSBzMTtcbiAgICAgIGlmIChzMCA9PT0gcGVnJEZBSUxFRCkge1xuICAgICAgICBzMCA9IHBlZyRjdXJyUG9zO1xuICAgICAgICBzMSA9IHBlZyRwYXJzZXdzKCk7XG4gICAgICAgIGlmIChzMSAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgIHMxID0gaW5wdXQuc3Vic3RyaW5nKHMwLCBwZWckY3VyclBvcyk7XG4gICAgICAgIH1cbiAgICAgICAgczAgPSBzMTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHMwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBlZyRwYXJzZW1lc3NhZ2VUZXh0RWxlbWVudCgpIHtcbiAgICAgIHZhciBzMCwgczE7XG5cbiAgICAgIHMwID0gcGVnJGN1cnJQb3M7XG4gICAgICBzMSA9IHBlZyRwYXJzZW1lc3NhZ2VUZXh0KCk7XG4gICAgICBpZiAoczEgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgcGVnJHJlcG9ydGVkUG9zID0gczA7XG4gICAgICAgIHMxID0gcGVnJGM0KHMxKTtcbiAgICAgIH1cbiAgICAgIHMwID0gczE7XG5cbiAgICAgIHJldHVybiBzMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwZWckcGFyc2Vhcmd1bWVudCgpIHtcbiAgICAgIHZhciBzMCwgczEsIHMyO1xuXG4gICAgICBzMCA9IHBlZyRwYXJzZW51bWJlcigpO1xuICAgICAgaWYgKHMwID09PSBwZWckRkFJTEVEKSB7XG4gICAgICAgIHMwID0gcGVnJGN1cnJQb3M7XG4gICAgICAgIHMxID0gW107XG4gICAgICAgIGlmIChwZWckYzUudGVzdChpbnB1dC5jaGFyQXQocGVnJGN1cnJQb3MpKSkge1xuICAgICAgICAgIHMyID0gaW5wdXQuY2hhckF0KHBlZyRjdXJyUG9zKTtcbiAgICAgICAgICBwZWckY3VyclBvcysrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHMyID0gcGVnJEZBSUxFRDtcbiAgICAgICAgICBpZiAocGVnJHNpbGVudEZhaWxzID09PSAwKSB7IHBlZyRmYWlsKHBlZyRjNik7IH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoczIgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICB3aGlsZSAoczIgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgIHMxLnB1c2goczIpO1xuICAgICAgICAgICAgaWYgKHBlZyRjNS50ZXN0KGlucHV0LmNoYXJBdChwZWckY3VyclBvcykpKSB7XG4gICAgICAgICAgICAgIHMyID0gaW5wdXQuY2hhckF0KHBlZyRjdXJyUG9zKTtcbiAgICAgICAgICAgICAgcGVnJGN1cnJQb3MrKztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHMyID0gcGVnJEZBSUxFRDtcbiAgICAgICAgICAgICAgaWYgKHBlZyRzaWxlbnRGYWlscyA9PT0gMCkgeyBwZWckZmFpbChwZWckYzYpOyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHMxID0gcGVnJGMyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzMSAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgIHMxID0gaW5wdXQuc3Vic3RyaW5nKHMwLCBwZWckY3VyclBvcyk7XG4gICAgICAgIH1cbiAgICAgICAgczAgPSBzMTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHMwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBlZyRwYXJzZWFyZ3VtZW50RWxlbWVudCgpIHtcbiAgICAgIHZhciBzMCwgczEsIHMyLCBzMywgczQsIHM1LCBzNiwgczcsIHM4O1xuXG4gICAgICBzMCA9IHBlZyRjdXJyUG9zO1xuICAgICAgaWYgKGlucHV0LmNoYXJDb2RlQXQocGVnJGN1cnJQb3MpID09PSAxMjMpIHtcbiAgICAgICAgczEgPSBwZWckYzc7XG4gICAgICAgIHBlZyRjdXJyUG9zKys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzMSA9IHBlZyRGQUlMRUQ7XG4gICAgICAgIGlmIChwZWckc2lsZW50RmFpbHMgPT09IDApIHsgcGVnJGZhaWwocGVnJGM4KTsgfVxuICAgICAgfVxuICAgICAgaWYgKHMxICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgIHMyID0gcGVnJHBhcnNlXygpO1xuICAgICAgICBpZiAoczIgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICBzMyA9IHBlZyRwYXJzZWFyZ3VtZW50KCk7XG4gICAgICAgICAgaWYgKHMzICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICBzNCA9IHBlZyRwYXJzZV8oKTtcbiAgICAgICAgICAgIGlmIChzNCAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgICBzNSA9IHBlZyRjdXJyUG9zO1xuICAgICAgICAgICAgICBpZiAoaW5wdXQuY2hhckNvZGVBdChwZWckY3VyclBvcykgPT09IDQ0KSB7XG4gICAgICAgICAgICAgICAgczYgPSBwZWckYzEwO1xuICAgICAgICAgICAgICAgIHBlZyRjdXJyUG9zKys7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgczYgPSBwZWckRkFJTEVEO1xuICAgICAgICAgICAgICAgIGlmIChwZWckc2lsZW50RmFpbHMgPT09IDApIHsgcGVnJGZhaWwocGVnJGMxMSk7IH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoczYgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgICAgICBzNyA9IHBlZyRwYXJzZV8oKTtcbiAgICAgICAgICAgICAgICBpZiAoczcgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgICAgICAgIHM4ID0gcGVnJHBhcnNlZWxlbWVudEZvcm1hdCgpO1xuICAgICAgICAgICAgICAgICAgaWYgKHM4ICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICAgICAgICAgIHM2ID0gW3M2LCBzNywgczhdO1xuICAgICAgICAgICAgICAgICAgICBzNSA9IHM2O1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGVnJGN1cnJQb3MgPSBzNTtcbiAgICAgICAgICAgICAgICAgICAgczUgPSBwZWckYzI7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHBlZyRjdXJyUG9zID0gczU7XG4gICAgICAgICAgICAgICAgICBzNSA9IHBlZyRjMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGVnJGN1cnJQb3MgPSBzNTtcbiAgICAgICAgICAgICAgICBzNSA9IHBlZyRjMjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoczUgPT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgICAgICBzNSA9IHBlZyRjOTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoczUgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgICAgICBzNiA9IHBlZyRwYXJzZV8oKTtcbiAgICAgICAgICAgICAgICBpZiAoczYgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChpbnB1dC5jaGFyQ29kZUF0KHBlZyRjdXJyUG9zKSA9PT0gMTI1KSB7XG4gICAgICAgICAgICAgICAgICAgIHM3ID0gcGVnJGMxMjtcbiAgICAgICAgICAgICAgICAgICAgcGVnJGN1cnJQb3MrKztcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHM3ID0gcGVnJEZBSUxFRDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBlZyRzaWxlbnRGYWlscyA9PT0gMCkgeyBwZWckZmFpbChwZWckYzEzKTsgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYgKHM3ICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICAgICAgICAgIHBlZyRyZXBvcnRlZFBvcyA9IHMwO1xuICAgICAgICAgICAgICAgICAgICBzMSA9IHBlZyRjMTQoczMsIHM1KTtcbiAgICAgICAgICAgICAgICAgICAgczAgPSBzMTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICAgICAgICAgICAgICAgIHMwID0gcGVnJGMyO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICAgICAgICAgICAgczAgPSBwZWckYzI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICAgICAgICAgICAgczAgPSBwZWckYzI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICAgICAgICAgIHMwID0gcGVnJGMyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICAgICAgczAgPSBwZWckYzI7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICAgICAgczAgPSBwZWckYzI7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICAgIHMwID0gcGVnJGMyO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gczA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGVnJHBhcnNlZWxlbWVudEZvcm1hdCgpIHtcbiAgICAgIHZhciBzMDtcblxuICAgICAgczAgPSBwZWckcGFyc2VzaW1wbGVGb3JtYXQoKTtcbiAgICAgIGlmIChzMCA9PT0gcGVnJEZBSUxFRCkge1xuICAgICAgICBzMCA9IHBlZyRwYXJzZXBsdXJhbEZvcm1hdCgpO1xuICAgICAgICBpZiAoczAgPT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICBzMCA9IHBlZyRwYXJzZXNlbGVjdE9yZGluYWxGb3JtYXQoKTtcbiAgICAgICAgICBpZiAoczAgPT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgIHMwID0gcGVnJHBhcnNlc2VsZWN0Rm9ybWF0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwZWckcGFyc2VzaW1wbGVGb3JtYXQoKSB7XG4gICAgICB2YXIgczAsIHMxLCBzMiwgczMsIHM0LCBzNSwgczY7XG5cbiAgICAgIHMwID0gcGVnJGN1cnJQb3M7XG4gICAgICBpZiAoaW5wdXQuc3Vic3RyKHBlZyRjdXJyUG9zLCA2KSA9PT0gcGVnJGMxNSkge1xuICAgICAgICBzMSA9IHBlZyRjMTU7XG4gICAgICAgIHBlZyRjdXJyUG9zICs9IDY7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzMSA9IHBlZyRGQUlMRUQ7XG4gICAgICAgIGlmIChwZWckc2lsZW50RmFpbHMgPT09IDApIHsgcGVnJGZhaWwocGVnJGMxNik7IH1cbiAgICAgIH1cbiAgICAgIGlmIChzMSA9PT0gcGVnJEZBSUxFRCkge1xuICAgICAgICBpZiAoaW5wdXQuc3Vic3RyKHBlZyRjdXJyUG9zLCA0KSA9PT0gcGVnJGMxNykge1xuICAgICAgICAgIHMxID0gcGVnJGMxNztcbiAgICAgICAgICBwZWckY3VyclBvcyArPSA0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHMxID0gcGVnJEZBSUxFRDtcbiAgICAgICAgICBpZiAocGVnJHNpbGVudEZhaWxzID09PSAwKSB7IHBlZyRmYWlsKHBlZyRjMTgpOyB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHMxID09PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgaWYgKGlucHV0LnN1YnN0cihwZWckY3VyclBvcywgNCkgPT09IHBlZyRjMTkpIHtcbiAgICAgICAgICAgIHMxID0gcGVnJGMxOTtcbiAgICAgICAgICAgIHBlZyRjdXJyUG9zICs9IDQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHMxID0gcGVnJEZBSUxFRDtcbiAgICAgICAgICAgIGlmIChwZWckc2lsZW50RmFpbHMgPT09IDApIHsgcGVnJGZhaWwocGVnJGMyMCk7IH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzMSAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICBzMiA9IHBlZyRwYXJzZV8oKTtcbiAgICAgICAgaWYgKHMyICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgczMgPSBwZWckY3VyclBvcztcbiAgICAgICAgICBpZiAoaW5wdXQuY2hhckNvZGVBdChwZWckY3VyclBvcykgPT09IDQ0KSB7XG4gICAgICAgICAgICBzNCA9IHBlZyRjMTA7XG4gICAgICAgICAgICBwZWckY3VyclBvcysrO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzNCA9IHBlZyRGQUlMRUQ7XG4gICAgICAgICAgICBpZiAocGVnJHNpbGVudEZhaWxzID09PSAwKSB7IHBlZyRmYWlsKHBlZyRjMTEpOyB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzNCAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgczUgPSBwZWckcGFyc2VfKCk7XG4gICAgICAgICAgICBpZiAoczUgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgICAgczYgPSBwZWckcGFyc2VjaGFycygpO1xuICAgICAgICAgICAgICBpZiAoczYgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgICAgICBzNCA9IFtzNCwgczUsIHM2XTtcbiAgICAgICAgICAgICAgICBzMyA9IHM0O1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBlZyRjdXJyUG9zID0gczM7XG4gICAgICAgICAgICAgICAgczMgPSBwZWckYzI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBlZyRjdXJyUG9zID0gczM7XG4gICAgICAgICAgICAgIHMzID0gcGVnJGMyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwZWckY3VyclBvcyA9IHMzO1xuICAgICAgICAgICAgczMgPSBwZWckYzI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzMyA9PT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgczMgPSBwZWckYzk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzMyAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgcGVnJHJlcG9ydGVkUG9zID0gczA7XG4gICAgICAgICAgICBzMSA9IHBlZyRjMjEoczEsIHMzKTtcbiAgICAgICAgICAgIHMwID0gczE7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICAgICAgICBzMCA9IHBlZyRjMjtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgICBzMCA9IHBlZyRjMjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgczAgPSBwZWckYzI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwZWckcGFyc2VwbHVyYWxGb3JtYXQoKSB7XG4gICAgICB2YXIgczAsIHMxLCBzMiwgczMsIHM0LCBzNTtcblxuICAgICAgczAgPSBwZWckY3VyclBvcztcbiAgICAgIGlmIChpbnB1dC5zdWJzdHIocGVnJGN1cnJQb3MsIDYpID09PSBwZWckYzIyKSB7XG4gICAgICAgIHMxID0gcGVnJGMyMjtcbiAgICAgICAgcGVnJGN1cnJQb3MgKz0gNjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHMxID0gcGVnJEZBSUxFRDtcbiAgICAgICAgaWYgKHBlZyRzaWxlbnRGYWlscyA9PT0gMCkgeyBwZWckZmFpbChwZWckYzIzKTsgfVxuICAgICAgfVxuICAgICAgaWYgKHMxICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgIHMyID0gcGVnJHBhcnNlXygpO1xuICAgICAgICBpZiAoczIgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICBpZiAoaW5wdXQuY2hhckNvZGVBdChwZWckY3VyclBvcykgPT09IDQ0KSB7XG4gICAgICAgICAgICBzMyA9IHBlZyRjMTA7XG4gICAgICAgICAgICBwZWckY3VyclBvcysrO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzMyA9IHBlZyRGQUlMRUQ7XG4gICAgICAgICAgICBpZiAocGVnJHNpbGVudEZhaWxzID09PSAwKSB7IHBlZyRmYWlsKHBlZyRjMTEpOyB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzMyAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgczQgPSBwZWckcGFyc2VfKCk7XG4gICAgICAgICAgICBpZiAoczQgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgICAgczUgPSBwZWckcGFyc2VwbHVyYWxTdHlsZSgpO1xuICAgICAgICAgICAgICBpZiAoczUgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgICAgICBwZWckcmVwb3J0ZWRQb3MgPSBzMDtcbiAgICAgICAgICAgICAgICBzMSA9IHBlZyRjMjQoczUpO1xuICAgICAgICAgICAgICAgIHMwID0gczE7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgICAgICAgICBzMCA9IHBlZyRjMjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgICAgICAgczAgPSBwZWckYzI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICAgICAgICBzMCA9IHBlZyRjMjtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgICBzMCA9IHBlZyRjMjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgczAgPSBwZWckYzI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwZWckcGFyc2VzZWxlY3RPcmRpbmFsRm9ybWF0KCkge1xuICAgICAgdmFyIHMwLCBzMSwgczIsIHMzLCBzNCwgczU7XG5cbiAgICAgIHMwID0gcGVnJGN1cnJQb3M7XG4gICAgICBpZiAoaW5wdXQuc3Vic3RyKHBlZyRjdXJyUG9zLCAxMykgPT09IHBlZyRjMjUpIHtcbiAgICAgICAgczEgPSBwZWckYzI1O1xuICAgICAgICBwZWckY3VyclBvcyArPSAxMztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHMxID0gcGVnJEZBSUxFRDtcbiAgICAgICAgaWYgKHBlZyRzaWxlbnRGYWlscyA9PT0gMCkgeyBwZWckZmFpbChwZWckYzI2KTsgfVxuICAgICAgfVxuICAgICAgaWYgKHMxICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgIHMyID0gcGVnJHBhcnNlXygpO1xuICAgICAgICBpZiAoczIgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICBpZiAoaW5wdXQuY2hhckNvZGVBdChwZWckY3VyclBvcykgPT09IDQ0KSB7XG4gICAgICAgICAgICBzMyA9IHBlZyRjMTA7XG4gICAgICAgICAgICBwZWckY3VyclBvcysrO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzMyA9IHBlZyRGQUlMRUQ7XG4gICAgICAgICAgICBpZiAocGVnJHNpbGVudEZhaWxzID09PSAwKSB7IHBlZyRmYWlsKHBlZyRjMTEpOyB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzMyAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgczQgPSBwZWckcGFyc2VfKCk7XG4gICAgICAgICAgICBpZiAoczQgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgICAgczUgPSBwZWckcGFyc2VwbHVyYWxTdHlsZSgpO1xuICAgICAgICAgICAgICBpZiAoczUgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgICAgICBwZWckcmVwb3J0ZWRQb3MgPSBzMDtcbiAgICAgICAgICAgICAgICBzMSA9IHBlZyRjMjcoczUpO1xuICAgICAgICAgICAgICAgIHMwID0gczE7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgICAgICAgICBzMCA9IHBlZyRjMjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgICAgICAgczAgPSBwZWckYzI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICAgICAgICBzMCA9IHBlZyRjMjtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgICBzMCA9IHBlZyRjMjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgczAgPSBwZWckYzI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwZWckcGFyc2VzZWxlY3RGb3JtYXQoKSB7XG4gICAgICB2YXIgczAsIHMxLCBzMiwgczMsIHM0LCBzNSwgczY7XG5cbiAgICAgIHMwID0gcGVnJGN1cnJQb3M7XG4gICAgICBpZiAoaW5wdXQuc3Vic3RyKHBlZyRjdXJyUG9zLCA2KSA9PT0gcGVnJGMyOCkge1xuICAgICAgICBzMSA9IHBlZyRjMjg7XG4gICAgICAgIHBlZyRjdXJyUG9zICs9IDY7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzMSA9IHBlZyRGQUlMRUQ7XG4gICAgICAgIGlmIChwZWckc2lsZW50RmFpbHMgPT09IDApIHsgcGVnJGZhaWwocGVnJGMyOSk7IH1cbiAgICAgIH1cbiAgICAgIGlmIChzMSAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICBzMiA9IHBlZyRwYXJzZV8oKTtcbiAgICAgICAgaWYgKHMyICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgaWYgKGlucHV0LmNoYXJDb2RlQXQocGVnJGN1cnJQb3MpID09PSA0NCkge1xuICAgICAgICAgICAgczMgPSBwZWckYzEwO1xuICAgICAgICAgICAgcGVnJGN1cnJQb3MrKztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgczMgPSBwZWckRkFJTEVEO1xuICAgICAgICAgICAgaWYgKHBlZyRzaWxlbnRGYWlscyA9PT0gMCkgeyBwZWckZmFpbChwZWckYzExKTsgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoczMgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgIHM0ID0gcGVnJHBhcnNlXygpO1xuICAgICAgICAgICAgaWYgKHM0ICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICAgIHM1ID0gW107XG4gICAgICAgICAgICAgIHM2ID0gcGVnJHBhcnNlb3B0aW9uYWxGb3JtYXRQYXR0ZXJuKCk7XG4gICAgICAgICAgICAgIGlmIChzNiAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgICAgIHdoaWxlIChzNiAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgICAgICAgczUucHVzaChzNik7XG4gICAgICAgICAgICAgICAgICBzNiA9IHBlZyRwYXJzZW9wdGlvbmFsRm9ybWF0UGF0dGVybigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzNSA9IHBlZyRjMjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoczUgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgICAgICBwZWckcmVwb3J0ZWRQb3MgPSBzMDtcbiAgICAgICAgICAgICAgICBzMSA9IHBlZyRjMzAoczUpO1xuICAgICAgICAgICAgICAgIHMwID0gczE7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgICAgICAgICBzMCA9IHBlZyRjMjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgICAgICAgczAgPSBwZWckYzI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICAgICAgICBzMCA9IHBlZyRjMjtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgICBzMCA9IHBlZyRjMjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgczAgPSBwZWckYzI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwZWckcGFyc2VzZWxlY3RvcigpIHtcbiAgICAgIHZhciBzMCwgczEsIHMyLCBzMztcblxuICAgICAgczAgPSBwZWckY3VyclBvcztcbiAgICAgIHMxID0gcGVnJGN1cnJQb3M7XG4gICAgICBpZiAoaW5wdXQuY2hhckNvZGVBdChwZWckY3VyclBvcykgPT09IDYxKSB7XG4gICAgICAgIHMyID0gcGVnJGMzMTtcbiAgICAgICAgcGVnJGN1cnJQb3MrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHMyID0gcGVnJEZBSUxFRDtcbiAgICAgICAgaWYgKHBlZyRzaWxlbnRGYWlscyA9PT0gMCkgeyBwZWckZmFpbChwZWckYzMyKTsgfVxuICAgICAgfVxuICAgICAgaWYgKHMyICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgIHMzID0gcGVnJHBhcnNlbnVtYmVyKCk7XG4gICAgICAgIGlmIChzMyAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgIHMyID0gW3MyLCBzM107XG4gICAgICAgICAgczEgPSBzMjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwZWckY3VyclBvcyA9IHMxO1xuICAgICAgICAgIHMxID0gcGVnJGMyO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwZWckY3VyclBvcyA9IHMxO1xuICAgICAgICBzMSA9IHBlZyRjMjtcbiAgICAgIH1cbiAgICAgIGlmIChzMSAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICBzMSA9IGlucHV0LnN1YnN0cmluZyhzMCwgcGVnJGN1cnJQb3MpO1xuICAgICAgfVxuICAgICAgczAgPSBzMTtcbiAgICAgIGlmIChzMCA9PT0gcGVnJEZBSUxFRCkge1xuICAgICAgICBzMCA9IHBlZyRwYXJzZWNoYXJzKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwZWckcGFyc2VvcHRpb25hbEZvcm1hdFBhdHRlcm4oKSB7XG4gICAgICB2YXIgczAsIHMxLCBzMiwgczMsIHM0LCBzNSwgczYsIHM3LCBzODtcblxuICAgICAgczAgPSBwZWckY3VyclBvcztcbiAgICAgIHMxID0gcGVnJHBhcnNlXygpO1xuICAgICAgaWYgKHMxICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgIHMyID0gcGVnJHBhcnNlc2VsZWN0b3IoKTtcbiAgICAgICAgaWYgKHMyICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgczMgPSBwZWckcGFyc2VfKCk7XG4gICAgICAgICAgaWYgKHMzICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICBpZiAoaW5wdXQuY2hhckNvZGVBdChwZWckY3VyclBvcykgPT09IDEyMykge1xuICAgICAgICAgICAgICBzNCA9IHBlZyRjNztcbiAgICAgICAgICAgICAgcGVnJGN1cnJQb3MrKztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHM0ID0gcGVnJEZBSUxFRDtcbiAgICAgICAgICAgICAgaWYgKHBlZyRzaWxlbnRGYWlscyA9PT0gMCkgeyBwZWckZmFpbChwZWckYzgpOyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoczQgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgICAgczUgPSBwZWckcGFyc2VfKCk7XG4gICAgICAgICAgICAgIGlmIChzNSAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgICAgIHM2ID0gcGVnJHBhcnNlbWVzc2FnZUZvcm1hdFBhdHRlcm4oKTtcbiAgICAgICAgICAgICAgICBpZiAoczYgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgICAgICAgIHM3ID0gcGVnJHBhcnNlXygpO1xuICAgICAgICAgICAgICAgICAgaWYgKHM3ICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbnB1dC5jaGFyQ29kZUF0KHBlZyRjdXJyUG9zKSA9PT0gMTI1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgczggPSBwZWckYzEyO1xuICAgICAgICAgICAgICAgICAgICAgIHBlZyRjdXJyUG9zKys7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgczggPSBwZWckRkFJTEVEO1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChwZWckc2lsZW50RmFpbHMgPT09IDApIHsgcGVnJGZhaWwocGVnJGMxMyk7IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoczggIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBwZWckcmVwb3J0ZWRQb3MgPSBzMDtcbiAgICAgICAgICAgICAgICAgICAgICBzMSA9IHBlZyRjMzMoczIsIHM2KTtcbiAgICAgICAgICAgICAgICAgICAgICBzMCA9IHMxO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICAgICAgICAgICAgICAgICAgczAgPSBwZWckYzI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICAgICAgICAgICAgICAgIHMwID0gcGVnJGMyO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICAgICAgICAgICAgczAgPSBwZWckYzI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICAgICAgICAgICAgczAgPSBwZWckYzI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICAgICAgICAgIHMwID0gcGVnJGMyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICAgICAgczAgPSBwZWckYzI7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICAgICAgczAgPSBwZWckYzI7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICAgIHMwID0gcGVnJGMyO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gczA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGVnJHBhcnNlb2Zmc2V0KCkge1xuICAgICAgdmFyIHMwLCBzMSwgczIsIHMzO1xuXG4gICAgICBzMCA9IHBlZyRjdXJyUG9zO1xuICAgICAgaWYgKGlucHV0LnN1YnN0cihwZWckY3VyclBvcywgNykgPT09IHBlZyRjMzQpIHtcbiAgICAgICAgczEgPSBwZWckYzM0O1xuICAgICAgICBwZWckY3VyclBvcyArPSA3O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgczEgPSBwZWckRkFJTEVEO1xuICAgICAgICBpZiAocGVnJHNpbGVudEZhaWxzID09PSAwKSB7IHBlZyRmYWlsKHBlZyRjMzUpOyB9XG4gICAgICB9XG4gICAgICBpZiAoczEgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgczIgPSBwZWckcGFyc2VfKCk7XG4gICAgICAgIGlmIChzMiAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgIHMzID0gcGVnJHBhcnNlbnVtYmVyKCk7XG4gICAgICAgICAgaWYgKHMzICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICBwZWckcmVwb3J0ZWRQb3MgPSBzMDtcbiAgICAgICAgICAgIHMxID0gcGVnJGMzNihzMyk7XG4gICAgICAgICAgICBzMCA9IHMxO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICAgICAgczAgPSBwZWckYzI7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICAgICAgczAgPSBwZWckYzI7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICAgIHMwID0gcGVnJGMyO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gczA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGVnJHBhcnNlcGx1cmFsU3R5bGUoKSB7XG4gICAgICB2YXIgczAsIHMxLCBzMiwgczMsIHM0O1xuXG4gICAgICBzMCA9IHBlZyRjdXJyUG9zO1xuICAgICAgczEgPSBwZWckcGFyc2VvZmZzZXQoKTtcbiAgICAgIGlmIChzMSA9PT0gcGVnJEZBSUxFRCkge1xuICAgICAgICBzMSA9IHBlZyRjOTtcbiAgICAgIH1cbiAgICAgIGlmIChzMSAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICBzMiA9IHBlZyRwYXJzZV8oKTtcbiAgICAgICAgaWYgKHMyICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgczMgPSBbXTtcbiAgICAgICAgICBzNCA9IHBlZyRwYXJzZW9wdGlvbmFsRm9ybWF0UGF0dGVybigpO1xuICAgICAgICAgIGlmIChzNCAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgd2hpbGUgKHM0ICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICAgIHMzLnB1c2goczQpO1xuICAgICAgICAgICAgICBzNCA9IHBlZyRwYXJzZW9wdGlvbmFsRm9ybWF0UGF0dGVybigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzMyA9IHBlZyRjMjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHMzICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICBwZWckcmVwb3J0ZWRQb3MgPSBzMDtcbiAgICAgICAgICAgIHMxID0gcGVnJGMzNyhzMSwgczMpO1xuICAgICAgICAgICAgczAgPSBzMTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgICAgIHMwID0gcGVnJGMyO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICAgIHMwID0gcGVnJGMyO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICBzMCA9IHBlZyRjMjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHMwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBlZyRwYXJzZXdzKCkge1xuICAgICAgdmFyIHMwLCBzMTtcblxuICAgICAgcGVnJHNpbGVudEZhaWxzKys7XG4gICAgICBzMCA9IFtdO1xuICAgICAgaWYgKHBlZyRjMzkudGVzdChpbnB1dC5jaGFyQXQocGVnJGN1cnJQb3MpKSkge1xuICAgICAgICBzMSA9IGlucHV0LmNoYXJBdChwZWckY3VyclBvcyk7XG4gICAgICAgIHBlZyRjdXJyUG9zKys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzMSA9IHBlZyRGQUlMRUQ7XG4gICAgICAgIGlmIChwZWckc2lsZW50RmFpbHMgPT09IDApIHsgcGVnJGZhaWwocGVnJGM0MCk7IH1cbiAgICAgIH1cbiAgICAgIGlmIChzMSAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICB3aGlsZSAoczEgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICBzMC5wdXNoKHMxKTtcbiAgICAgICAgICBpZiAocGVnJGMzOS50ZXN0KGlucHV0LmNoYXJBdChwZWckY3VyclBvcykpKSB7XG4gICAgICAgICAgICBzMSA9IGlucHV0LmNoYXJBdChwZWckY3VyclBvcyk7XG4gICAgICAgICAgICBwZWckY3VyclBvcysrO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzMSA9IHBlZyRGQUlMRUQ7XG4gICAgICAgICAgICBpZiAocGVnJHNpbGVudEZhaWxzID09PSAwKSB7IHBlZyRmYWlsKHBlZyRjNDApOyB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzMCA9IHBlZyRjMjtcbiAgICAgIH1cbiAgICAgIHBlZyRzaWxlbnRGYWlscy0tO1xuICAgICAgaWYgKHMwID09PSBwZWckRkFJTEVEKSB7XG4gICAgICAgIHMxID0gcGVnJEZBSUxFRDtcbiAgICAgICAgaWYgKHBlZyRzaWxlbnRGYWlscyA9PT0gMCkgeyBwZWckZmFpbChwZWckYzM4KTsgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gczA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGVnJHBhcnNlXygpIHtcbiAgICAgIHZhciBzMCwgczEsIHMyO1xuXG4gICAgICBwZWckc2lsZW50RmFpbHMrKztcbiAgICAgIHMwID0gcGVnJGN1cnJQb3M7XG4gICAgICBzMSA9IFtdO1xuICAgICAgczIgPSBwZWckcGFyc2V3cygpO1xuICAgICAgd2hpbGUgKHMyICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgIHMxLnB1c2goczIpO1xuICAgICAgICBzMiA9IHBlZyRwYXJzZXdzKCk7XG4gICAgICB9XG4gICAgICBpZiAoczEgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgczEgPSBpbnB1dC5zdWJzdHJpbmcoczAsIHBlZyRjdXJyUG9zKTtcbiAgICAgIH1cbiAgICAgIHMwID0gczE7XG4gICAgICBwZWckc2lsZW50RmFpbHMtLTtcbiAgICAgIGlmIChzMCA9PT0gcGVnJEZBSUxFRCkge1xuICAgICAgICBzMSA9IHBlZyRGQUlMRUQ7XG4gICAgICAgIGlmIChwZWckc2lsZW50RmFpbHMgPT09IDApIHsgcGVnJGZhaWwocGVnJGM0MSk7IH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHMwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBlZyRwYXJzZWRpZ2l0KCkge1xuICAgICAgdmFyIHMwO1xuXG4gICAgICBpZiAocGVnJGM0Mi50ZXN0KGlucHV0LmNoYXJBdChwZWckY3VyclBvcykpKSB7XG4gICAgICAgIHMwID0gaW5wdXQuY2hhckF0KHBlZyRjdXJyUG9zKTtcbiAgICAgICAgcGVnJGN1cnJQb3MrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHMwID0gcGVnJEZBSUxFRDtcbiAgICAgICAgaWYgKHBlZyRzaWxlbnRGYWlscyA9PT0gMCkgeyBwZWckZmFpbChwZWckYzQzKTsgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gczA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGVnJHBhcnNlaGV4RGlnaXQoKSB7XG4gICAgICB2YXIgczA7XG5cbiAgICAgIGlmIChwZWckYzQ0LnRlc3QoaW5wdXQuY2hhckF0KHBlZyRjdXJyUG9zKSkpIHtcbiAgICAgICAgczAgPSBpbnB1dC5jaGFyQXQocGVnJGN1cnJQb3MpO1xuICAgICAgICBwZWckY3VyclBvcysrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgczAgPSBwZWckRkFJTEVEO1xuICAgICAgICBpZiAocGVnJHNpbGVudEZhaWxzID09PSAwKSB7IHBlZyRmYWlsKHBlZyRjNDUpOyB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwZWckcGFyc2VudW1iZXIoKSB7XG4gICAgICB2YXIgczAsIHMxLCBzMiwgczMsIHM0LCBzNTtcblxuICAgICAgczAgPSBwZWckY3VyclBvcztcbiAgICAgIGlmIChpbnB1dC5jaGFyQ29kZUF0KHBlZyRjdXJyUG9zKSA9PT0gNDgpIHtcbiAgICAgICAgczEgPSBwZWckYzQ2O1xuICAgICAgICBwZWckY3VyclBvcysrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgczEgPSBwZWckRkFJTEVEO1xuICAgICAgICBpZiAocGVnJHNpbGVudEZhaWxzID09PSAwKSB7IHBlZyRmYWlsKHBlZyRjNDcpOyB9XG4gICAgICB9XG4gICAgICBpZiAoczEgPT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgczEgPSBwZWckY3VyclBvcztcbiAgICAgICAgczIgPSBwZWckY3VyclBvcztcbiAgICAgICAgaWYgKHBlZyRjNDgudGVzdChpbnB1dC5jaGFyQXQocGVnJGN1cnJQb3MpKSkge1xuICAgICAgICAgIHMzID0gaW5wdXQuY2hhckF0KHBlZyRjdXJyUG9zKTtcbiAgICAgICAgICBwZWckY3VyclBvcysrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHMzID0gcGVnJEZBSUxFRDtcbiAgICAgICAgICBpZiAocGVnJHNpbGVudEZhaWxzID09PSAwKSB7IHBlZyRmYWlsKHBlZyRjNDkpOyB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHMzICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgczQgPSBbXTtcbiAgICAgICAgICBzNSA9IHBlZyRwYXJzZWRpZ2l0KCk7XG4gICAgICAgICAgd2hpbGUgKHM1ICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICBzNC5wdXNoKHM1KTtcbiAgICAgICAgICAgIHM1ID0gcGVnJHBhcnNlZGlnaXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHM0ICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICBzMyA9IFtzMywgczRdO1xuICAgICAgICAgICAgczIgPSBzMztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMjtcbiAgICAgICAgICAgIHMyID0gcGVnJGMyO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwZWckY3VyclBvcyA9IHMyO1xuICAgICAgICAgIHMyID0gcGVnJGMyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzMiAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgIHMyID0gaW5wdXQuc3Vic3RyaW5nKHMxLCBwZWckY3VyclBvcyk7XG4gICAgICAgIH1cbiAgICAgICAgczEgPSBzMjtcbiAgICAgIH1cbiAgICAgIGlmIChzMSAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICBwZWckcmVwb3J0ZWRQb3MgPSBzMDtcbiAgICAgICAgczEgPSBwZWckYzUwKHMxKTtcbiAgICAgIH1cbiAgICAgIHMwID0gczE7XG5cbiAgICAgIHJldHVybiBzMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwZWckcGFyc2VjaGFyKCkge1xuICAgICAgdmFyIHMwLCBzMSwgczIsIHMzLCBzNCwgczUsIHM2LCBzNztcblxuICAgICAgaWYgKHBlZyRjNTEudGVzdChpbnB1dC5jaGFyQXQocGVnJGN1cnJQb3MpKSkge1xuICAgICAgICBzMCA9IGlucHV0LmNoYXJBdChwZWckY3VyclBvcyk7XG4gICAgICAgIHBlZyRjdXJyUG9zKys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzMCA9IHBlZyRGQUlMRUQ7XG4gICAgICAgIGlmIChwZWckc2lsZW50RmFpbHMgPT09IDApIHsgcGVnJGZhaWwocGVnJGM1Mik7IH1cbiAgICAgIH1cbiAgICAgIGlmIChzMCA9PT0gcGVnJEZBSUxFRCkge1xuICAgICAgICBzMCA9IHBlZyRjdXJyUG9zO1xuICAgICAgICBpZiAoaW5wdXQuc3Vic3RyKHBlZyRjdXJyUG9zLCAyKSA9PT0gcGVnJGM1Mykge1xuICAgICAgICAgIHMxID0gcGVnJGM1MztcbiAgICAgICAgICBwZWckY3VyclBvcyArPSAyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHMxID0gcGVnJEZBSUxFRDtcbiAgICAgICAgICBpZiAocGVnJHNpbGVudEZhaWxzID09PSAwKSB7IHBlZyRmYWlsKHBlZyRjNTQpOyB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHMxICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgcGVnJHJlcG9ydGVkUG9zID0gczA7XG4gICAgICAgICAgczEgPSBwZWckYzU1KCk7XG4gICAgICAgIH1cbiAgICAgICAgczAgPSBzMTtcbiAgICAgICAgaWYgKHMwID09PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgczAgPSBwZWckY3VyclBvcztcbiAgICAgICAgICBpZiAoaW5wdXQuc3Vic3RyKHBlZyRjdXJyUG9zLCAyKSA9PT0gcGVnJGM1Nikge1xuICAgICAgICAgICAgczEgPSBwZWckYzU2O1xuICAgICAgICAgICAgcGVnJGN1cnJQb3MgKz0gMjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgczEgPSBwZWckRkFJTEVEO1xuICAgICAgICAgICAgaWYgKHBlZyRzaWxlbnRGYWlscyA9PT0gMCkgeyBwZWckZmFpbChwZWckYzU3KTsgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoczEgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgIHBlZyRyZXBvcnRlZFBvcyA9IHMwO1xuICAgICAgICAgICAgczEgPSBwZWckYzU4KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHMwID0gczE7XG4gICAgICAgICAgaWYgKHMwID09PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICBzMCA9IHBlZyRjdXJyUG9zO1xuICAgICAgICAgICAgaWYgKGlucHV0LnN1YnN0cihwZWckY3VyclBvcywgMikgPT09IHBlZyRjNTkpIHtcbiAgICAgICAgICAgICAgczEgPSBwZWckYzU5O1xuICAgICAgICAgICAgICBwZWckY3VyclBvcyArPSAyO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgczEgPSBwZWckRkFJTEVEO1xuICAgICAgICAgICAgICBpZiAocGVnJHNpbGVudEZhaWxzID09PSAwKSB7IHBlZyRmYWlsKHBlZyRjNjApOyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoczEgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgICAgcGVnJHJlcG9ydGVkUG9zID0gczA7XG4gICAgICAgICAgICAgIHMxID0gcGVnJGM2MSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgczAgPSBzMTtcbiAgICAgICAgICAgIGlmIChzMCA9PT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgICBzMCA9IHBlZyRjdXJyUG9zO1xuICAgICAgICAgICAgICBpZiAoaW5wdXQuc3Vic3RyKHBlZyRjdXJyUG9zLCAyKSA9PT0gcGVnJGM2Mikge1xuICAgICAgICAgICAgICAgIHMxID0gcGVnJGM2MjtcbiAgICAgICAgICAgICAgICBwZWckY3VyclBvcyArPSAyO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHMxID0gcGVnJEZBSUxFRDtcbiAgICAgICAgICAgICAgICBpZiAocGVnJHNpbGVudEZhaWxzID09PSAwKSB7IHBlZyRmYWlsKHBlZyRjNjMpOyB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHMxICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICAgICAgczIgPSBwZWckY3VyclBvcztcbiAgICAgICAgICAgICAgICBzMyA9IHBlZyRjdXJyUG9zO1xuICAgICAgICAgICAgICAgIHM0ID0gcGVnJHBhcnNlaGV4RGlnaXQoKTtcbiAgICAgICAgICAgICAgICBpZiAoczQgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgICAgICAgIHM1ID0gcGVnJHBhcnNlaGV4RGlnaXQoKTtcbiAgICAgICAgICAgICAgICAgIGlmIChzNSAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgICAgICAgICBzNiA9IHBlZyRwYXJzZWhleERpZ2l0KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzNiAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgICAgICAgICAgIHM3ID0gcGVnJHBhcnNlaGV4RGlnaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoczcgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHM0ID0gW3M0LCBzNSwgczYsIHM3XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMzID0gczQ7XG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlZyRjdXJyUG9zID0gczM7XG4gICAgICAgICAgICAgICAgICAgICAgICBzMyA9IHBlZyRjMjtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMztcbiAgICAgICAgICAgICAgICAgICAgICBzMyA9IHBlZyRjMjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMztcbiAgICAgICAgICAgICAgICAgICAgczMgPSBwZWckYzI7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHBlZyRjdXJyUG9zID0gczM7XG4gICAgICAgICAgICAgICAgICBzMyA9IHBlZyRjMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHMzICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICAgICAgICBzMyA9IGlucHV0LnN1YnN0cmluZyhzMiwgcGVnJGN1cnJQb3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzMiA9IHMzO1xuICAgICAgICAgICAgICAgIGlmIChzMiAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgICAgICAgcGVnJHJlcG9ydGVkUG9zID0gczA7XG4gICAgICAgICAgICAgICAgICBzMSA9IHBlZyRjNjQoczIpO1xuICAgICAgICAgICAgICAgICAgczAgPSBzMTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgICAgICAgICAgIHMwID0gcGVnJGMyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICAgICAgICAgIHMwID0gcGVnJGMyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwZWckcGFyc2VjaGFycygpIHtcbiAgICAgIHZhciBzMCwgczEsIHMyO1xuXG4gICAgICBzMCA9IHBlZyRjdXJyUG9zO1xuICAgICAgczEgPSBbXTtcbiAgICAgIHMyID0gcGVnJHBhcnNlY2hhcigpO1xuICAgICAgaWYgKHMyICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgIHdoaWxlIChzMiAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgIHMxLnB1c2goczIpO1xuICAgICAgICAgIHMyID0gcGVnJHBhcnNlY2hhcigpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzMSA9IHBlZyRjMjtcbiAgICAgIH1cbiAgICAgIGlmIChzMSAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICBwZWckcmVwb3J0ZWRQb3MgPSBzMDtcbiAgICAgICAgczEgPSBwZWckYzY1KHMxKTtcbiAgICAgIH1cbiAgICAgIHMwID0gczE7XG5cbiAgICAgIHJldHVybiBzMDtcbiAgICB9XG5cbiAgICBwZWckcmVzdWx0ID0gcGVnJHN0YXJ0UnVsZUZ1bmN0aW9uKCk7XG5cbiAgICBpZiAocGVnJHJlc3VsdCAhPT0gcGVnJEZBSUxFRCAmJiBwZWckY3VyclBvcyA9PT0gaW5wdXQubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gcGVnJHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHBlZyRyZXN1bHQgIT09IHBlZyRGQUlMRUQgJiYgcGVnJGN1cnJQb3MgPCBpbnB1dC5sZW5ndGgpIHtcbiAgICAgICAgcGVnJGZhaWwoeyB0eXBlOiBcImVuZFwiLCBkZXNjcmlwdGlvbjogXCJlbmQgb2YgaW5wdXRcIiB9KTtcbiAgICAgIH1cblxuICAgICAgdGhyb3cgcGVnJGJ1aWxkRXhjZXB0aW9uKG51bGwsIHBlZyRtYXhGYWlsRXhwZWN0ZWQsIHBlZyRtYXhGYWlsUG9zKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIFN5bnRheEVycm9yOiBTeW50YXhFcnJvcixcbiAgICBwYXJzZTogICAgICAgcGFyc2VcbiAgfTtcbn0pKCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnNlci5qcy5tYXAiLCIvKiBqc2hpbnQgbm9kZTp0cnVlICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIEludGxSZWxhdGl2ZUZvcm1hdCA9IHJlcXVpcmUoJy4vbGliL21haW4nKVsnZGVmYXVsdCddO1xuXG4vLyBBZGQgYWxsIGxvY2FsZSBkYXRhIHRvIGBJbnRsUmVsYXRpdmVGb3JtYXRgLiBUaGlzIG1vZHVsZSB3aWxsIGJlIGlnbm9yZWQgd2hlblxuLy8gYnVuZGxpbmcgZm9yIHRoZSBicm93c2VyIHdpdGggQnJvd3NlcmlmeS9XZWJwYWNrLlxucmVxdWlyZSgnLi9saWIvbG9jYWxlcycpO1xuXG4vLyBSZS1leHBvcnQgYEludGxSZWxhdGl2ZUZvcm1hdGAgYXMgdGhlIENvbW1vbkpTIGRlZmF1bHQgZXhwb3J0cyB3aXRoIGFsbCB0aGVcbi8vIGxvY2FsZSBkYXRhIHJlZ2lzdGVyZWQsIGFuZCB3aXRoIEVuZ2xpc2ggc2V0IGFzIHRoZSBkZWZhdWx0IGxvY2FsZS4gRGVmaW5lXG4vLyB0aGUgYGRlZmF1bHRgIHByb3AgZm9yIHVzZSB3aXRoIG90aGVyIGNvbXBpbGVkIEVTNiBNb2R1bGVzLlxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gSW50bFJlbGF0aXZlRm9ybWF0O1xuZXhwb3J0c1snZGVmYXVsdCddID0gZXhwb3J0cztcbiIsIi8qXG5Db3B5cmlnaHQgKGMpIDIwMTQsIFlhaG9vISBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5Db3B5cmlnaHRzIGxpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIExpY2Vuc2UuXG5TZWUgdGhlIGFjY29tcGFueWluZyBMSUNFTlNFIGZpbGUgZm9yIHRlcm1zLlxuKi9cblxuLyoganNsaW50IGVzbmV4dDogdHJ1ZSAqL1xuXG5cInVzZSBzdHJpY3RcIjtcbnZhciBpbnRsJG1lc3NhZ2Vmb3JtYXQkJCA9IHJlcXVpcmUoXCJpbnRsLW1lc3NhZ2Vmb3JtYXRcIiksIHNyYyRkaWZmJCQgPSByZXF1aXJlKFwiLi9kaWZmXCIpLCBzcmMkZXM1JCQgPSByZXF1aXJlKFwiLi9lczVcIik7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFJlbGF0aXZlRm9ybWF0O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG52YXIgRklFTERTID0gWydzZWNvbmQnLCAnbWludXRlJywgJ2hvdXInLCAnZGF5JywgJ21vbnRoJywgJ3llYXInXTtcbnZhciBTVFlMRVMgPSBbJ2Jlc3QgZml0JywgJ251bWVyaWMnXTtcblxuLy8gLS0gUmVsYXRpdmVGb3JtYXQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gUmVsYXRpdmVGb3JtYXQobG9jYWxlcywgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgLy8gTWFrZSBhIGNvcHkgb2YgYGxvY2FsZXNgIGlmIGl0J3MgYW4gYXJyYXksIHNvIHRoYXQgaXQgZG9lc24ndCBjaGFuZ2VcbiAgICAvLyBzaW5jZSBpdCdzIHVzZWQgbGF6aWx5LlxuICAgIGlmIChzcmMkZXM1JCQuaXNBcnJheShsb2NhbGVzKSkge1xuICAgICAgICBsb2NhbGVzID0gbG9jYWxlcy5jb25jYXQoKTtcbiAgICB9XG5cbiAgICBzcmMkZXM1JCQuZGVmaW5lUHJvcGVydHkodGhpcywgJ19sb2NhbGUnLCB7dmFsdWU6IHRoaXMuX3Jlc29sdmVMb2NhbGUobG9jYWxlcyl9KTtcbiAgICBzcmMkZXM1JCQuZGVmaW5lUHJvcGVydHkodGhpcywgJ19vcHRpb25zJywge3ZhbHVlOiB7XG4gICAgICAgIHN0eWxlOiB0aGlzLl9yZXNvbHZlU3R5bGUob3B0aW9ucy5zdHlsZSksXG4gICAgICAgIHVuaXRzOiB0aGlzLl9pc1ZhbGlkVW5pdHMob3B0aW9ucy51bml0cykgJiYgb3B0aW9ucy51bml0c1xuICAgIH19KTtcblxuICAgIHNyYyRlczUkJC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnX2xvY2FsZXMnLCB7dmFsdWU6IGxvY2FsZXN9KTtcbiAgICBzcmMkZXM1JCQuZGVmaW5lUHJvcGVydHkodGhpcywgJ19maWVsZHMnLCB7dmFsdWU6IHRoaXMuX2ZpbmRGaWVsZHModGhpcy5fbG9jYWxlKX0pO1xuICAgIHNyYyRlczUkJC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnX21lc3NhZ2VzJywge3ZhbHVlOiBzcmMkZXM1JCQub2JqQ3JlYXRlKG51bGwpfSk7XG5cbiAgICAvLyBcIkJpbmRcIiBgZm9ybWF0KClgIG1ldGhvZCB0byBgdGhpc2Agc28gaXQgY2FuIGJlIHBhc3NlZCBieSByZWZlcmVuY2UgbGlrZVxuICAgIC8vIHRoZSBvdGhlciBgSW50bGAgQVBJcy5cbiAgICB2YXIgcmVsYXRpdmVGb3JtYXQgPSB0aGlzO1xuICAgIHRoaXMuZm9ybWF0ID0gZnVuY3Rpb24gZm9ybWF0KGRhdGUsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHJlbGF0aXZlRm9ybWF0Ll9mb3JtYXQoZGF0ZSwgb3B0aW9ucyk7XG4gICAgfTtcbn1cblxuLy8gRGVmaW5lIGludGVybmFsIHByaXZhdGUgcHJvcGVydGllcyBmb3IgZGVhbGluZyB3aXRoIGxvY2FsZSBkYXRhLlxuc3JjJGVzNSQkLmRlZmluZVByb3BlcnR5KFJlbGF0aXZlRm9ybWF0LCAnX19sb2NhbGVEYXRhX18nLCB7dmFsdWU6IHNyYyRlczUkJC5vYmpDcmVhdGUobnVsbCl9KTtcbnNyYyRlczUkJC5kZWZpbmVQcm9wZXJ0eShSZWxhdGl2ZUZvcm1hdCwgJ19fYWRkTG9jYWxlRGF0YScsIHt2YWx1ZTogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBpZiAoIShkYXRhICYmIGRhdGEubG9jYWxlKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAnTG9jYWxlIGRhdGEgcHJvdmlkZWQgdG8gSW50bFJlbGF0aXZlRm9ybWF0IGlzIG1pc3NpbmcgYSAnICtcbiAgICAgICAgICAgICdgbG9jYWxlYCBwcm9wZXJ0eSB2YWx1ZSdcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBSZWxhdGl2ZUZvcm1hdC5fX2xvY2FsZURhdGFfX1tkYXRhLmxvY2FsZS50b0xvd2VyQ2FzZSgpXSA9IGRhdGE7XG5cbiAgICAvLyBBZGQgZGF0YSB0byBJbnRsTWVzc2FnZUZvcm1hdC5cbiAgICBpbnRsJG1lc3NhZ2Vmb3JtYXQkJFtcImRlZmF1bHRcIl0uX19hZGRMb2NhbGVEYXRhKGRhdGEpO1xufX0pO1xuXG4vLyBEZWZpbmUgcHVibGljIGBkZWZhdWx0TG9jYWxlYCBwcm9wZXJ0eSB3aGljaCBjYW4gYmUgc2V0IGJ5IHRoZSBkZXZlbG9wZXIsIG9yXG4vLyBpdCB3aWxsIGJlIHNldCB3aGVuIHRoZSBmaXJzdCBSZWxhdGl2ZUZvcm1hdCBpbnN0YW5jZSBpcyBjcmVhdGVkIGJ5XG4vLyBsZXZlcmFnaW5nIHRoZSByZXNvbHZlZCBsb2NhbGUgZnJvbSBgSW50bGAuXG5zcmMkZXM1JCQuZGVmaW5lUHJvcGVydHkoUmVsYXRpdmVGb3JtYXQsICdkZWZhdWx0TG9jYWxlJywge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgd3JpdGFibGUgIDogdHJ1ZSxcbiAgICB2YWx1ZSAgICAgOiB1bmRlZmluZWRcbn0pO1xuXG4vLyBEZWZpbmUgcHVibGljIGB0aHJlc2hvbGRzYCBwcm9wZXJ0eSB3aGljaCBjYW4gYmUgc2V0IGJ5IHRoZSBkZXZlbG9wZXIsIGFuZFxuLy8gZGVmYXVsdHMgdG8gcmVsYXRpdmUgdGltZSB0aHJlc2hvbGRzIGZyb20gbW9tZW50LmpzLlxuc3JjJGVzNSQkLmRlZmluZVByb3BlcnR5KFJlbGF0aXZlRm9ybWF0LCAndGhyZXNob2xkcycsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuXG4gICAgdmFsdWU6IHtcbiAgICAgICAgc2Vjb25kOiA0NSwgIC8vIHNlY29uZHMgdG8gbWludXRlXG4gICAgICAgIG1pbnV0ZTogNDUsICAvLyBtaW51dGVzIHRvIGhvdXJcbiAgICAgICAgaG91ciAgOiAyMiwgIC8vIGhvdXJzIHRvIGRheVxuICAgICAgICBkYXkgICA6IDI2LCAgLy8gZGF5cyB0byBtb250aFxuICAgICAgICBtb250aCA6IDExICAgLy8gbW9udGhzIHRvIHllYXJcbiAgICB9XG59KTtcblxuUmVsYXRpdmVGb3JtYXQucHJvdG90eXBlLnJlc29sdmVkT3B0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBsb2NhbGU6IHRoaXMuX2xvY2FsZSxcbiAgICAgICAgc3R5bGUgOiB0aGlzLl9vcHRpb25zLnN0eWxlLFxuICAgICAgICB1bml0cyA6IHRoaXMuX29wdGlvbnMudW5pdHNcbiAgICB9O1xufTtcblxuUmVsYXRpdmVGb3JtYXQucHJvdG90eXBlLl9jb21waWxlTWVzc2FnZSA9IGZ1bmN0aW9uICh1bml0cykge1xuICAgIC8vIGB0aGlzLl9sb2NhbGVzYCBpcyB0aGUgb3JpZ2luYWwgc2V0IG9mIGxvY2FsZXMgdGhlIHVzZXIgc3BlY2lmaWVkIHRvIHRoZVxuICAgIC8vIGNvbnN0cnVjdG9yLCB3aGlsZSBgdGhpcy5fbG9jYWxlYCBpcyB0aGUgcmVzb2x2ZWQgcm9vdCBsb2NhbGUuXG4gICAgdmFyIGxvY2FsZXMgICAgICAgID0gdGhpcy5fbG9jYWxlcztcbiAgICB2YXIgcmVzb2x2ZWRMb2NhbGUgPSB0aGlzLl9sb2NhbGU7XG5cbiAgICB2YXIgZmllbGQgICAgICAgID0gdGhpcy5fZmllbGRzW3VuaXRzXTtcbiAgICB2YXIgcmVsYXRpdmVUaW1lID0gZmllbGQucmVsYXRpdmVUaW1lO1xuICAgIHZhciBmdXR1cmUgICAgICAgPSAnJztcbiAgICB2YXIgcGFzdCAgICAgICAgID0gJyc7XG4gICAgdmFyIGk7XG5cbiAgICBmb3IgKGkgaW4gcmVsYXRpdmVUaW1lLmZ1dHVyZSkge1xuICAgICAgICBpZiAocmVsYXRpdmVUaW1lLmZ1dHVyZS5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgICAgZnV0dXJlICs9ICcgJyArIGkgKyAnIHsnICtcbiAgICAgICAgICAgICAgICByZWxhdGl2ZVRpbWUuZnV0dXJlW2ldLnJlcGxhY2UoJ3swfScsICcjJykgKyAnfSc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGkgaW4gcmVsYXRpdmVUaW1lLnBhc3QpIHtcbiAgICAgICAgaWYgKHJlbGF0aXZlVGltZS5wYXN0Lmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICBwYXN0ICs9ICcgJyArIGkgKyAnIHsnICtcbiAgICAgICAgICAgICAgICByZWxhdGl2ZVRpbWUucGFzdFtpXS5yZXBsYWNlKCd7MH0nLCAnIycpICsgJ30nO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIG1lc3NhZ2UgPSAne3doZW4sIHNlbGVjdCwgZnV0dXJlIHt7MCwgcGx1cmFsLCAnICsgZnV0dXJlICsgJ319JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncGFzdCB7ezAsIHBsdXJhbCwgJyArIHBhc3QgKyAnfX19JztcblxuICAgIC8vIENyZWF0ZSB0aGUgc3ludGhldGljIEludGxNZXNzYWdlRm9ybWF0IGluc3RhbmNlIHVzaW5nIHRoZSBvcmlnaW5hbFxuICAgIC8vIGxvY2FsZXMgdmFsdWUgc3BlY2lmaWVkIGJ5IHRoZSB1c2VyIHdoZW4gY29uc3RydWN0aW5nIHRoZSB0aGUgcGFyZW50XG4gICAgLy8gSW50bFJlbGF0aXZlRm9ybWF0IGluc3RhbmNlLlxuICAgIHJldHVybiBuZXcgaW50bCRtZXNzYWdlZm9ybWF0JCRbXCJkZWZhdWx0XCJdKG1lc3NhZ2UsIGxvY2FsZXMpO1xufTtcblxuUmVsYXRpdmVGb3JtYXQucHJvdG90eXBlLl9nZXRNZXNzYWdlID0gZnVuY3Rpb24gKHVuaXRzKSB7XG4gICAgdmFyIG1lc3NhZ2VzID0gdGhpcy5fbWVzc2FnZXM7XG5cbiAgICAvLyBDcmVhdGUgYSBuZXcgc3ludGhldGljIG1lc3NhZ2UgYmFzZWQgb24gdGhlIGxvY2FsZSBkYXRhIGZyb20gQ0xEUi5cbiAgICBpZiAoIW1lc3NhZ2VzW3VuaXRzXSkge1xuICAgICAgICBtZXNzYWdlc1t1bml0c10gPSB0aGlzLl9jb21waWxlTWVzc2FnZSh1bml0cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2VzW3VuaXRzXTtcbn07XG5cblJlbGF0aXZlRm9ybWF0LnByb3RvdHlwZS5fZ2V0UmVsYXRpdmVVbml0cyA9IGZ1bmN0aW9uIChkaWZmLCB1bml0cykge1xuICAgIHZhciBmaWVsZCA9IHRoaXMuX2ZpZWxkc1t1bml0c107XG5cbiAgICBpZiAoZmllbGQucmVsYXRpdmUpIHtcbiAgICAgICAgcmV0dXJuIGZpZWxkLnJlbGF0aXZlW2RpZmZdO1xuICAgIH1cbn07XG5cblJlbGF0aXZlRm9ybWF0LnByb3RvdHlwZS5fZmluZEZpZWxkcyA9IGZ1bmN0aW9uIChsb2NhbGUpIHtcbiAgICB2YXIgbG9jYWxlRGF0YSA9IFJlbGF0aXZlRm9ybWF0Ll9fbG9jYWxlRGF0YV9fO1xuICAgIHZhciBkYXRhICAgICAgID0gbG9jYWxlRGF0YVtsb2NhbGUudG9Mb3dlckNhc2UoKV07XG5cbiAgICAvLyBUaGUgbG9jYWxlIGRhdGEgaXMgZGUtZHVwbGljYXRlZCwgc28gd2UgaGF2ZSB0byB0cmF2ZXJzZSB0aGUgbG9jYWxlJ3NcbiAgICAvLyBoaWVyYXJjaHkgdW50aWwgd2UgZmluZCBgZmllbGRzYCB0byByZXR1cm4uXG4gICAgd2hpbGUgKGRhdGEpIHtcbiAgICAgICAgaWYgKGRhdGEuZmllbGRzKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YS5maWVsZHM7XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhID0gZGF0YS5wYXJlbnRMb2NhbGUgJiYgbG9jYWxlRGF0YVtkYXRhLnBhcmVudExvY2FsZS50b0xvd2VyQ2FzZSgpXTtcbiAgICB9XG5cbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdMb2NhbGUgZGF0YSBhZGRlZCB0byBJbnRsUmVsYXRpdmVGb3JtYXQgaXMgbWlzc2luZyBgZmllbGRzYCBmb3IgOicgK1xuICAgICAgICBsb2NhbGVcbiAgICApO1xufTtcblxuUmVsYXRpdmVGb3JtYXQucHJvdG90eXBlLl9mb3JtYXQgPSBmdW5jdGlvbiAoZGF0ZSwgb3B0aW9ucykge1xuICAgIHZhciBub3cgPSBvcHRpb25zICYmIG9wdGlvbnMubm93ICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm5vdyA6IHNyYyRlczUkJC5kYXRlTm93KCk7XG5cbiAgICBpZiAoZGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGRhdGUgPSBub3c7XG4gICAgfVxuXG4gICAgLy8gRGV0ZXJtaW5lIGlmIHRoZSBgZGF0ZWAgYW5kIG9wdGlvbmFsIGBub3dgIHZhbHVlcyBhcmUgdmFsaWQsIGFuZCB0aHJvdyBhXG4gICAgLy8gc2ltaWxhciBlcnJvciB0byB3aGF0IGBJbnRsLkRhdGVUaW1lRm9ybWF0I2Zvcm1hdCgpYCB3b3VsZCB0aHJvdy5cbiAgICBpZiAoIWlzRmluaXRlKG5vdykpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXG4gICAgICAgICAgICAnVGhlIGBub3dgIG9wdGlvbiBwcm92aWRlZCB0byBJbnRsUmVsYXRpdmVGb3JtYXQjZm9ybWF0KCkgaXMgbm90ICcgK1xuICAgICAgICAgICAgJ2luIHZhbGlkIHJhbmdlLidcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoIWlzRmluaXRlKGRhdGUpKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFxuICAgICAgICAgICAgJ1RoZSBkYXRlIHZhbHVlIHByb3ZpZGVkIHRvIEludGxSZWxhdGl2ZUZvcm1hdCNmb3JtYXQoKSBpcyBub3QgJyArXG4gICAgICAgICAgICAnaW4gdmFsaWQgcmFuZ2UuJ1xuICAgICAgICApO1xuICAgIH1cblxuICAgIHZhciBkaWZmUmVwb3J0ICA9IHNyYyRkaWZmJCRbXCJkZWZhdWx0XCJdKG5vdywgZGF0ZSk7XG4gICAgdmFyIHVuaXRzICAgICAgID0gdGhpcy5fb3B0aW9ucy51bml0cyB8fCB0aGlzLl9zZWxlY3RVbml0cyhkaWZmUmVwb3J0KTtcbiAgICB2YXIgZGlmZkluVW5pdHMgPSBkaWZmUmVwb3J0W3VuaXRzXTtcblxuICAgIGlmICh0aGlzLl9vcHRpb25zLnN0eWxlICE9PSAnbnVtZXJpYycpIHtcbiAgICAgICAgdmFyIHJlbGF0aXZlVW5pdHMgPSB0aGlzLl9nZXRSZWxhdGl2ZVVuaXRzKGRpZmZJblVuaXRzLCB1bml0cyk7XG4gICAgICAgIGlmIChyZWxhdGl2ZVVuaXRzKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVsYXRpdmVVbml0cztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9nZXRNZXNzYWdlKHVuaXRzKS5mb3JtYXQoe1xuICAgICAgICAnMCcgOiBNYXRoLmFicyhkaWZmSW5Vbml0cyksXG4gICAgICAgIHdoZW46IGRpZmZJblVuaXRzIDwgMCA/ICdwYXN0JyA6ICdmdXR1cmUnXG4gICAgfSk7XG59O1xuXG5SZWxhdGl2ZUZvcm1hdC5wcm90b3R5cGUuX2lzVmFsaWRVbml0cyA9IGZ1bmN0aW9uICh1bml0cykge1xuICAgIGlmICghdW5pdHMgfHwgc3JjJGVzNSQkLmFyckluZGV4T2YuY2FsbChGSUVMRFMsIHVuaXRzKSA+PSAwKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdW5pdHMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhciBzdWdnZXN0aW9uID0gL3MkLy50ZXN0KHVuaXRzKSAmJiB1bml0cy5zdWJzdHIoMCwgdW5pdHMubGVuZ3RoIC0gMSk7XG4gICAgICAgIGlmIChzdWdnZXN0aW9uICYmIHNyYyRlczUkJC5hcnJJbmRleE9mLmNhbGwoRklFTERTLCBzdWdnZXN0aW9uKSA+PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgJ1wiJyArIHVuaXRzICsgJ1wiIGlzIG5vdCBhIHZhbGlkIEludGxSZWxhdGl2ZUZvcm1hdCBgdW5pdHNgICcgK1xuICAgICAgICAgICAgICAgICd2YWx1ZSwgZGlkIHlvdSBtZWFuOiAnICsgc3VnZ2VzdGlvblxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ1wiJyArIHVuaXRzICsgJ1wiIGlzIG5vdCBhIHZhbGlkIEludGxSZWxhdGl2ZUZvcm1hdCBgdW5pdHNgIHZhbHVlLCBpdCAnICtcbiAgICAgICAgJ211c3QgYmUgb25lIG9mOiBcIicgKyBGSUVMRFMuam9pbignXCIsIFwiJykgKyAnXCInXG4gICAgKTtcbn07XG5cblJlbGF0aXZlRm9ybWF0LnByb3RvdHlwZS5fcmVzb2x2ZUxvY2FsZSA9IGZ1bmN0aW9uIChsb2NhbGVzKSB7XG4gICAgaWYgKHR5cGVvZiBsb2NhbGVzID09PSAnc3RyaW5nJykge1xuICAgICAgICBsb2NhbGVzID0gW2xvY2FsZXNdO1xuICAgIH1cblxuICAgIC8vIENyZWF0ZSBhIGNvcHkgb2YgdGhlIGFycmF5IHNvIHdlIGNhbiBwdXNoIG9uIHRoZSBkZWZhdWx0IGxvY2FsZS5cbiAgICBsb2NhbGVzID0gKGxvY2FsZXMgfHwgW10pLmNvbmNhdChSZWxhdGl2ZUZvcm1hdC5kZWZhdWx0TG9jYWxlKTtcblxuICAgIHZhciBsb2NhbGVEYXRhID0gUmVsYXRpdmVGb3JtYXQuX19sb2NhbGVEYXRhX187XG4gICAgdmFyIGksIGxlbiwgbG9jYWxlUGFydHMsIGRhdGE7XG5cbiAgICAvLyBVc2luZyB0aGUgc2V0IG9mIGxvY2FsZXMgKyB0aGUgZGVmYXVsdCBsb2NhbGUsIHdlIGxvb2sgZm9yIHRoZSBmaXJzdCBvbmVcbiAgICAvLyB3aGljaCB0aGF0IGhhcyBiZWVuIHJlZ2lzdGVyZWQuIFdoZW4gZGF0YSBkb2VzIG5vdCBleGlzdCBmb3IgYSBsb2NhbGUsIHdlXG4gICAgLy8gdHJhdmVyc2UgaXRzIGFuY2VzdG9ycyB0byBmaW5kIHNvbWV0aGluZyB0aGF0J3MgYmVlbiByZWdpc3RlcmVkIHdpdGhpblxuICAgIC8vIGl0cyBoaWVyYXJjaHkgb2YgbG9jYWxlcy4gU2luY2Ugd2UgbGFjayB0aGUgcHJvcGVyIGBwYXJlbnRMb2NhbGVgIGRhdGFcbiAgICAvLyBoZXJlLCB3ZSBtdXN0IHRha2UgYSBuYWl2ZSBhcHByb2FjaCB0byB0cmF2ZXJzYWwuXG4gICAgZm9yIChpID0gMCwgbGVuID0gbG9jYWxlcy5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgICBsb2NhbGVQYXJ0cyA9IGxvY2FsZXNbaV0udG9Mb3dlckNhc2UoKS5zcGxpdCgnLScpO1xuXG4gICAgICAgIHdoaWxlIChsb2NhbGVQYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGRhdGEgPSBsb2NhbGVEYXRhW2xvY2FsZVBhcnRzLmpvaW4oJy0nKV07XG4gICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIC8vIFJldHVybiB0aGUgbm9ybWFsaXplZCBsb2NhbGUgc3RyaW5nOyBlLmcuLCB3ZSByZXR1cm4gXCJlbi1VU1wiLFxuICAgICAgICAgICAgICAgIC8vIGluc3RlYWQgb2YgXCJlbi11c1wiLlxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhLmxvY2FsZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbG9jYWxlUGFydHMucG9wKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgZGVmYXVsdExvY2FsZSA9IGxvY2FsZXMucG9wKCk7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnTm8gbG9jYWxlIGRhdGEgaGFzIGJlZW4gYWRkZWQgdG8gSW50bFJlbGF0aXZlRm9ybWF0IGZvcjogJyArXG4gICAgICAgIGxvY2FsZXMuam9pbignLCAnKSArICcsIG9yIHRoZSBkZWZhdWx0IGxvY2FsZTogJyArIGRlZmF1bHRMb2NhbGVcbiAgICApO1xufTtcblxuUmVsYXRpdmVGb3JtYXQucHJvdG90eXBlLl9yZXNvbHZlU3R5bGUgPSBmdW5jdGlvbiAoc3R5bGUpIHtcbiAgICAvLyBEZWZhdWx0IHRvIFwiYmVzdCBmaXRcIiBzdHlsZS5cbiAgICBpZiAoIXN0eWxlKSB7XG4gICAgICAgIHJldHVybiBTVFlMRVNbMF07XG4gICAgfVxuXG4gICAgaWYgKHNyYyRlczUkJC5hcnJJbmRleE9mLmNhbGwoU1RZTEVTLCBzdHlsZSkgPj0gMCkge1xuICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgfVxuXG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnXCInICsgc3R5bGUgKyAnXCIgaXMgbm90IGEgdmFsaWQgSW50bFJlbGF0aXZlRm9ybWF0IGBzdHlsZWAgdmFsdWUsIGl0ICcgK1xuICAgICAgICAnbXVzdCBiZSBvbmUgb2Y6IFwiJyArIFNUWUxFUy5qb2luKCdcIiwgXCInKSArICdcIidcbiAgICApO1xufTtcblxuUmVsYXRpdmVGb3JtYXQucHJvdG90eXBlLl9zZWxlY3RVbml0cyA9IGZ1bmN0aW9uIChkaWZmUmVwb3J0KSB7XG4gICAgdmFyIGksIGwsIHVuaXRzO1xuXG4gICAgZm9yIChpID0gMCwgbCA9IEZJRUxEUy5sZW5ndGg7IGkgPCBsOyBpICs9IDEpIHtcbiAgICAgICAgdW5pdHMgPSBGSUVMRFNbaV07XG5cbiAgICAgICAgaWYgKE1hdGguYWJzKGRpZmZSZXBvcnRbdW5pdHNdKSA8IFJlbGF0aXZlRm9ybWF0LnRocmVzaG9sZHNbdW5pdHNdKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB1bml0cztcbn07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvcmUuanMubWFwIiwiLypcbkNvcHlyaWdodCAoYykgMjAxNCwgWWFob28hIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbkNvcHlyaWdodHMgbGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgTGljZW5zZS5cblNlZSB0aGUgYWNjb21wYW55aW5nIExJQ0VOU0UgZmlsZSBmb3IgdGVybXMuXG4qL1xuXG4vKiBqc2xpbnQgZXNuZXh0OiB0cnVlICovXG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgcm91bmQgPSBNYXRoLnJvdW5kO1xuXG5mdW5jdGlvbiBkYXlzVG9ZZWFycyhkYXlzKSB7XG4gICAgLy8gNDAwIHllYXJzIGhhdmUgMTQ2MDk3IGRheXMgKHRha2luZyBpbnRvIGFjY291bnQgbGVhcCB5ZWFyIHJ1bGVzKVxuICAgIHJldHVybiBkYXlzICogNDAwIC8gMTQ2MDk3O1xufVxuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChmcm9tLCB0bykge1xuICAgIC8vIENvbnZlcnQgdG8gbXMgdGltZXN0YW1wcy5cbiAgICBmcm9tID0gK2Zyb207XG4gICAgdG8gICA9ICt0bztcblxuICAgIHZhciBtaWxsaXNlY29uZCA9IHJvdW5kKHRvIC0gZnJvbSksXG4gICAgICAgIHNlY29uZCAgICAgID0gcm91bmQobWlsbGlzZWNvbmQgLyAxMDAwKSxcbiAgICAgICAgbWludXRlICAgICAgPSByb3VuZChzZWNvbmQgLyA2MCksXG4gICAgICAgIGhvdXIgICAgICAgID0gcm91bmQobWludXRlIC8gNjApLFxuICAgICAgICBkYXkgICAgICAgICA9IHJvdW5kKGhvdXIgLyAyNCksXG4gICAgICAgIHdlZWsgICAgICAgID0gcm91bmQoZGF5IC8gNyk7XG5cbiAgICB2YXIgcmF3WWVhcnMgPSBkYXlzVG9ZZWFycyhkYXkpLFxuICAgICAgICBtb250aCAgICA9IHJvdW5kKHJhd1llYXJzICogMTIpLFxuICAgICAgICB5ZWFyICAgICA9IHJvdW5kKHJhd1llYXJzKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIG1pbGxpc2Vjb25kOiBtaWxsaXNlY29uZCxcbiAgICAgICAgc2Vjb25kICAgICA6IHNlY29uZCxcbiAgICAgICAgbWludXRlICAgICA6IG1pbnV0ZSxcbiAgICAgICAgaG91ciAgICAgICA6IGhvdXIsXG4gICAgICAgIGRheSAgICAgICAgOiBkYXksXG4gICAgICAgIHdlZWsgICAgICAgOiB3ZWVrLFxuICAgICAgICBtb250aCAgICAgIDogbW9udGgsXG4gICAgICAgIHllYXIgICAgICAgOiB5ZWFyXG4gICAgfTtcbn07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRpZmYuanMubWFwIiwiLypcbkNvcHlyaWdodCAoYykgMjAxNCwgWWFob28hIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbkNvcHlyaWdodHMgbGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgTGljZW5zZS5cblNlZSB0aGUgYWNjb21wYW55aW5nIExJQ0VOU0UgZmlsZSBmb3IgdGVybXMuXG4qL1xuXG4vKiBqc2xpbnQgZXNuZXh0OiB0cnVlICovXG5cblwidXNlIHN0cmljdFwiO1xuXG4vLyBQdXJwb3NlbHkgdXNpbmcgdGhlIHNhbWUgaW1wbGVtZW50YXRpb24gYXMgdGhlIEludGwuanMgYEludGxgIHBvbHlmaWxsLlxuLy8gQ29weXJpZ2h0IDIwMTMgQW5keSBFYXJuc2hhdywgTUlUIExpY2Vuc2VcblxudmFyIGhvcCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG52YXIgcmVhbERlZmluZVByb3AgPSAoZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7IHJldHVybiAhIU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7fSk7IH1cbiAgICBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH1cbn0pKCk7XG5cbnZhciBlczMgPSAhcmVhbERlZmluZVByb3AgJiYgIU9iamVjdC5wcm90b3R5cGUuX19kZWZpbmVHZXR0ZXJfXztcblxudmFyIGRlZmluZVByb3BlcnR5ID0gcmVhbERlZmluZVByb3AgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOlxuICAgICAgICBmdW5jdGlvbiAob2JqLCBuYW1lLCBkZXNjKSB7XG5cbiAgICBpZiAoJ2dldCcgaW4gZGVzYyAmJiBvYmouX19kZWZpbmVHZXR0ZXJfXykge1xuICAgICAgICBvYmouX19kZWZpbmVHZXR0ZXJfXyhuYW1lLCBkZXNjLmdldCk7XG4gICAgfSBlbHNlIGlmICghaG9wLmNhbGwob2JqLCBuYW1lKSB8fCAndmFsdWUnIGluIGRlc2MpIHtcbiAgICAgICAgb2JqW25hbWVdID0gZGVzYy52YWx1ZTtcbiAgICB9XG59O1xuXG52YXIgb2JqQ3JlYXRlID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiAocHJvdG8sIHByb3BzKSB7XG4gICAgdmFyIG9iaiwgaztcblxuICAgIGZ1bmN0aW9uIEYoKSB7fVxuICAgIEYucHJvdG90eXBlID0gcHJvdG87XG4gICAgb2JqID0gbmV3IEYoKTtcblxuICAgIGZvciAoayBpbiBwcm9wcykge1xuICAgICAgICBpZiAoaG9wLmNhbGwocHJvcHMsIGspKSB7XG4gICAgICAgICAgICBkZWZpbmVQcm9wZXJ0eShvYmosIGssIHByb3BzW2tdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG59O1xuXG52YXIgYXJySW5kZXhPZiA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mIHx8IGZ1bmN0aW9uIChzZWFyY2gsIGZyb21JbmRleCkge1xuICAgIC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXG4gICAgdmFyIGFyciA9IHRoaXM7XG4gICAgaWYgKCFhcnIubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gZnJvbUluZGV4IHx8IDAsIG1heCA9IGFyci5sZW5ndGg7IGkgPCBtYXg7IGkrKykge1xuICAgICAgICBpZiAoYXJyW2ldID09PSBzZWFyY2gpIHtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIC0xO1xufTtcblxudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBBcnJheV0nO1xufTtcblxudmFyIGRhdGVOb3cgPSBEYXRlLm5vdyB8fCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xufTtcbmV4cG9ydHMuZGVmaW5lUHJvcGVydHkgPSBkZWZpbmVQcm9wZXJ0eSwgZXhwb3J0cy5vYmpDcmVhdGUgPSBvYmpDcmVhdGUsIGV4cG9ydHMuYXJySW5kZXhPZiA9IGFyckluZGV4T2YsIGV4cG9ydHMuaXNBcnJheSA9IGlzQXJyYXksIGV4cG9ydHMuZGF0ZU5vdyA9IGRhdGVOb3c7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVzNS5qcy5tYXAiLCIvKipcbiAqIFJlcHJlc2VudHMgYSBjYW5jZWxsYXRpb24gY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYXdheVxuICogYmVmb3JlIHRoZSBwcmV2aW91cyB0cmFuc2l0aW9uIGhhcyBmdWxseSByZXNvbHZlZC5cbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIENhbmNlbGxhdGlvbigpIHt9XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsbGF0aW9uOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ3JlYWN0L2xpYi9pbnZhcmlhbnQnKTtcbnZhciBjYW5Vc2VET00gPSByZXF1aXJlKCdyZWFjdC9saWIvRXhlY3V0aW9uRW52aXJvbm1lbnQnKS5jYW5Vc2VET007XG5cbnZhciBIaXN0b3J5ID0ge1xuXG4gIC8qKlxuICAgKiBUaGUgY3VycmVudCBudW1iZXIgb2YgZW50cmllcyBpbiB0aGUgaGlzdG9yeS5cbiAgICpcbiAgICogTm90ZTogVGhpcyBwcm9wZXJ0eSBpcyByZWFkLW9ubHkuXG4gICAqL1xuICBsZW5ndGg6IDEsXG5cbiAgLyoqXG4gICAqIFNlbmRzIHRoZSBicm93c2VyIGJhY2sgb25lIGVudHJ5IGluIHRoZSBoaXN0b3J5LlxuICAgKi9cbiAgYmFjazogZnVuY3Rpb24gYmFjaygpIHtcbiAgICBpbnZhcmlhbnQoY2FuVXNlRE9NLCAnQ2Fubm90IHVzZSBIaXN0b3J5LmJhY2sgd2l0aG91dCBhIERPTScpO1xuXG4gICAgLy8gRG8gdGhpcyBmaXJzdCBzbyB0aGF0IEhpc3RvcnkubGVuZ3RoIHdpbGxcbiAgICAvLyBiZSBhY2N1cmF0ZSBpbiBsb2NhdGlvbiBjaGFuZ2UgbGlzdGVuZXJzLlxuICAgIEhpc3RvcnkubGVuZ3RoIC09IDE7XG5cbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gIH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBIaXN0b3J5OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9jbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuLyoganNoaW50IC1XMDg0ICovXG52YXIgUGF0aFV0aWxzID0gcmVxdWlyZSgnLi9QYXRoVXRpbHMnKTtcblxuZnVuY3Rpb24gZGVlcFNlYXJjaChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5KSB7XG4gIC8vIENoZWNrIHRoZSBzdWJ0cmVlIGZpcnN0IHRvIGZpbmQgdGhlIG1vc3QgZGVlcGx5LW5lc3RlZCBtYXRjaC5cbiAgdmFyIGNoaWxkUm91dGVzID0gcm91dGUuY2hpbGRSb3V0ZXM7XG4gIGlmIChjaGlsZFJvdXRlcykge1xuICAgIHZhciBtYXRjaCwgY2hpbGRSb3V0ZTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gY2hpbGRSb3V0ZXMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIGNoaWxkUm91dGUgPSBjaGlsZFJvdXRlc1tpXTtcblxuICAgICAgaWYgKGNoaWxkUm91dGUuaXNEZWZhdWx0IHx8IGNoaWxkUm91dGUuaXNOb3RGb3VuZCkgY29udGludWU7IC8vIENoZWNrIHRoZXNlIGluIG9yZGVyIGxhdGVyLlxuXG4gICAgICBpZiAobWF0Y2ggPSBkZWVwU2VhcmNoKGNoaWxkUm91dGUsIHBhdGhuYW1lLCBxdWVyeSkpIHtcbiAgICAgICAgLy8gQSByb3V0ZSBpbiB0aGUgc3VidHJlZSBtYXRjaGVkISBBZGQgdGhpcyByb3V0ZSBhbmQgd2UncmUgZG9uZS5cbiAgICAgICAgbWF0Y2gucm91dGVzLnVuc2hpZnQocm91dGUpO1xuICAgICAgICByZXR1cm4gbWF0Y2g7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gTm8gY2hpbGQgcm91dGVzIG1hdGNoZWQ7IHRyeSB0aGUgZGVmYXVsdCByb3V0ZS5cbiAgdmFyIGRlZmF1bHRSb3V0ZSA9IHJvdXRlLmRlZmF1bHRSb3V0ZTtcbiAgaWYgKGRlZmF1bHRSb3V0ZSAmJiAocGFyYW1zID0gUGF0aFV0aWxzLmV4dHJhY3RQYXJhbXMoZGVmYXVsdFJvdXRlLnBhdGgsIHBhdGhuYW1lKSkpIHtcbiAgICByZXR1cm4gbmV3IE1hdGNoKHBhdGhuYW1lLCBwYXJhbXMsIHF1ZXJ5LCBbcm91dGUsIGRlZmF1bHRSb3V0ZV0pO1xuICB9IC8vIERvZXMgdGhlIFwibm90IGZvdW5kXCIgcm91dGUgbWF0Y2g/XG4gIHZhciBub3RGb3VuZFJvdXRlID0gcm91dGUubm90Rm91bmRSb3V0ZTtcbiAgaWYgKG5vdEZvdW5kUm91dGUgJiYgKHBhcmFtcyA9IFBhdGhVdGlscy5leHRyYWN0UGFyYW1zKG5vdEZvdW5kUm91dGUucGF0aCwgcGF0aG5hbWUpKSkge1xuICAgIHJldHVybiBuZXcgTWF0Y2gocGF0aG5hbWUsIHBhcmFtcywgcXVlcnksIFtyb3V0ZSwgbm90Rm91bmRSb3V0ZV0pO1xuICB9IC8vIExhc3QgYXR0ZW1wdDogY2hlY2sgdGhpcyByb3V0ZS5cbiAgdmFyIHBhcmFtcyA9IFBhdGhVdGlscy5leHRyYWN0UGFyYW1zKHJvdXRlLnBhdGgsIHBhdGhuYW1lKTtcbiAgaWYgKHBhcmFtcykge1xuICAgIHJldHVybiBuZXcgTWF0Y2gocGF0aG5hbWUsIHBhcmFtcywgcXVlcnksIFtyb3V0ZV0pO1xuICB9cmV0dXJuIG51bGw7XG59XG5cbnZhciBNYXRjaCA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE1hdGNoKHBhdGhuYW1lLCBwYXJhbXMsIHF1ZXJ5LCByb3V0ZXMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWF0Y2gpO1xuXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICB0aGlzLnJvdXRlcyA9IHJvdXRlcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhNYXRjaCwgbnVsbCwgW3tcbiAgICBrZXk6ICdmaW5kTWF0Y2gnLFxuXG4gICAgLyoqXG4gICAgICogQXR0ZW1wdHMgdG8gbWF0Y2ggZGVwdGgtZmlyc3QgYSByb3V0ZSBpbiB0aGUgZ2l2ZW4gcm91dGUnc1xuICAgICAqIHN1YnRyZWUgYWdhaW5zdCB0aGUgZ2l2ZW4gcGF0aCBhbmQgcmV0dXJucyB0aGUgbWF0Y2ggaWYgaXRcbiAgICAgKiBzdWNjZWVkcywgbnVsbCBpZiBubyBtYXRjaCBjYW4gYmUgbWFkZS5cbiAgICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gZmluZE1hdGNoKHJvdXRlcywgcGF0aCkge1xuICAgICAgdmFyIHBhdGhuYW1lID0gUGF0aFV0aWxzLndpdGhvdXRRdWVyeShwYXRoKTtcbiAgICAgIHZhciBxdWVyeSA9IFBhdGhVdGlscy5leHRyYWN0UXVlcnkocGF0aCk7XG4gICAgICB2YXIgbWF0Y2ggPSBudWxsO1xuXG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gcm91dGVzLmxlbmd0aDsgbWF0Y2ggPT0gbnVsbCAmJiBpIDwgbGVuOyArK2kpIG1hdGNoID0gZGVlcFNlYXJjaChyb3V0ZXNbaV0sIHBhdGhuYW1lLCBxdWVyeSk7XG5cbiAgICAgIHJldHVybiBtYXRjaDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTWF0Y2g7XG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hdGNoOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIFByb3BUeXBlcyA9IHJlcXVpcmUoJy4vUHJvcFR5cGVzJyk7XG5cbi8qKlxuICogQSBtaXhpbiBmb3IgY29tcG9uZW50cyB0aGF0IG1vZGlmeSB0aGUgVVJMLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogICB2YXIgTXlMaW5rID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICogICAgIG1peGluczogWyBSb3V0ZXIuTmF2aWdhdGlvbiBdLFxuICogICAgIGhhbmRsZUNsaWNrKGV2ZW50KSB7XG4gKiAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICogICAgICAgdGhpcy50cmFuc2l0aW9uVG8oJ2FSb3V0ZScsIHsgdGhlOiAncGFyYW1zJyB9LCB7IHRoZTogJ3F1ZXJ5JyB9KTtcbiAqICAgICB9LFxuICogICAgIHJlbmRlcigpIHtcbiAqICAgICAgIHJldHVybiAoXG4gKiAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9PkNsaWNrIG1lITwvYT5cbiAqICAgICAgICk7XG4gKiAgICAgfVxuICogICB9KTtcbiAqL1xudmFyIE5hdmlnYXRpb24gPSB7XG5cbiAgY29udGV4dFR5cGVzOiB7XG4gICAgcm91dGVyOiBQcm9wVHlwZXMucm91dGVyLmlzUmVxdWlyZWRcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhYnNvbHV0ZSBVUkwgcGF0aCBjcmVhdGVkIGZyb20gdGhlIGdpdmVuIHJvdXRlXG4gICAqIG5hbWUsIFVSTCBwYXJhbWV0ZXJzLCBhbmQgcXVlcnkgdmFsdWVzLlxuICAgKi9cbiAgbWFrZVBhdGg6IGZ1bmN0aW9uIG1ha2VQYXRoKHRvLCBwYXJhbXMsIHF1ZXJ5KSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dC5yb3V0ZXIubWFrZVBhdGgodG8sIHBhcmFtcywgcXVlcnkpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyaW5nIHRoYXQgbWF5IHNhZmVseSBiZSB1c2VkIGFzIHRoZSBocmVmIG9mIGFcbiAgICogbGluayB0byB0aGUgcm91dGUgd2l0aCB0aGUgZ2l2ZW4gbmFtZS5cbiAgICovXG4gIG1ha2VIcmVmOiBmdW5jdGlvbiBtYWtlSHJlZih0bywgcGFyYW1zLCBxdWVyeSkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQucm91dGVyLm1ha2VIcmVmKHRvLCBwYXJhbXMsIHF1ZXJ5KTtcbiAgfSxcblxuICAvKipcbiAgICogVHJhbnNpdGlvbnMgdG8gdGhlIFVSTCBzcGVjaWZpZWQgaW4gdGhlIGFyZ3VtZW50cyBieSBwdXNoaW5nXG4gICAqIGEgbmV3IFVSTCBvbnRvIHRoZSBoaXN0b3J5IHN0YWNrLlxuICAgKi9cbiAgdHJhbnNpdGlvblRvOiBmdW5jdGlvbiB0cmFuc2l0aW9uVG8odG8sIHBhcmFtcywgcXVlcnkpIHtcbiAgICB0aGlzLmNvbnRleHQucm91dGVyLnRyYW5zaXRpb25Ubyh0bywgcGFyYW1zLCBxdWVyeSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRyYW5zaXRpb25zIHRvIHRoZSBVUkwgc3BlY2lmaWVkIGluIHRoZSBhcmd1bWVudHMgYnkgcmVwbGFjaW5nXG4gICAqIHRoZSBjdXJyZW50IFVSTCBpbiB0aGUgaGlzdG9yeSBzdGFjay5cbiAgICovXG4gIHJlcGxhY2VXaXRoOiBmdW5jdGlvbiByZXBsYWNlV2l0aCh0bywgcGFyYW1zLCBxdWVyeSkge1xuICAgIHRoaXMuY29udGV4dC5yb3V0ZXIucmVwbGFjZVdpdGgodG8sIHBhcmFtcywgcXVlcnkpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBUcmFuc2l0aW9ucyB0byB0aGUgcHJldmlvdXMgVVJMLlxuICAgKi9cbiAgZ29CYWNrOiBmdW5jdGlvbiBnb0JhY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dC5yb3V0ZXIuZ29CYWNrKCk7XG4gIH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBOYXZpZ2F0aW9uOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ3JlYWN0L2xpYi9pbnZhcmlhbnQnKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG52YXIgcXMgPSByZXF1aXJlKCdxcycpO1xuXG52YXIgcGFyYW1Db21waWxlTWF0Y2hlciA9IC86KFthLXpBLVpfJF1bYS16QS1aMC05XyRdKil8WyouKClcXFtcXF1cXFxcK3x7fV4kXS9nO1xudmFyIHBhcmFtSW5qZWN0TWF0Y2hlciA9IC86KFthLXpBLVpfJF1bYS16QS1aMC05XyQ/XSpbP10/KXxbKl0vZztcbnZhciBwYXJhbUluamVjdFRyYWlsaW5nU2xhc2hNYXRjaGVyID0gL1xcL1xcL1xcP3xcXC9cXD9cXC98XFwvXFw/L2c7XG52YXIgcXVlcnlNYXRjaGVyID0gL1xcPyguKikkLztcblxudmFyIF9jb21waWxlZFBhdHRlcm5zID0ge307XG5cbmZ1bmN0aW9uIGNvbXBpbGVQYXR0ZXJuKHBhdHRlcm4pIHtcbiAgaWYgKCEocGF0dGVybiBpbiBfY29tcGlsZWRQYXR0ZXJucykpIHtcbiAgICB2YXIgcGFyYW1OYW1lcyA9IFtdO1xuICAgIHZhciBzb3VyY2UgPSBwYXR0ZXJuLnJlcGxhY2UocGFyYW1Db21waWxlTWF0Y2hlciwgZnVuY3Rpb24gKG1hdGNoLCBwYXJhbU5hbWUpIHtcbiAgICAgIGlmIChwYXJhbU5hbWUpIHtcbiAgICAgICAgcGFyYW1OYW1lcy5wdXNoKHBhcmFtTmFtZSk7XG4gICAgICAgIHJldHVybiAnKFteLz8jXSspJztcbiAgICAgIH0gZWxzZSBpZiAobWF0Y2ggPT09ICcqJykge1xuICAgICAgICBwYXJhbU5hbWVzLnB1c2goJ3NwbGF0Jyk7XG4gICAgICAgIHJldHVybiAnKC4qPyknO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICdcXFxcJyArIG1hdGNoO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX2NvbXBpbGVkUGF0dGVybnNbcGF0dGVybl0gPSB7XG4gICAgICBtYXRjaGVyOiBuZXcgUmVnRXhwKCdeJyArIHNvdXJjZSArICckJywgJ2knKSxcbiAgICAgIHBhcmFtTmFtZXM6IHBhcmFtTmFtZXNcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF9jb21waWxlZFBhdHRlcm5zW3BhdHRlcm5dO1xufVxuXG52YXIgUGF0aFV0aWxzID0ge1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIHBhdGggaXMgYWJzb2x1dGUuXG4gICAqL1xuICBpc0Fic29sdXRlOiBmdW5jdGlvbiBpc0Fic29sdXRlKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbiAgfSxcblxuICAvKipcbiAgICogSm9pbnMgdHdvIFVSTCBwYXRocyB0b2dldGhlci5cbiAgICovXG4gIGpvaW46IGZ1bmN0aW9uIGpvaW4oYSwgYikge1xuICAgIHJldHVybiBhLnJlcGxhY2UoL1xcLyokLywgJy8nKSArIGI7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgdGhlIG5hbWVzIG9mIGFsbCBwYXJhbWV0ZXJzIGluIHRoZSBnaXZlbiBwYXR0ZXJuLlxuICAgKi9cbiAgZXh0cmFjdFBhcmFtTmFtZXM6IGZ1bmN0aW9uIGV4dHJhY3RQYXJhbU5hbWVzKHBhdHRlcm4pIHtcbiAgICByZXR1cm4gY29tcGlsZVBhdHRlcm4ocGF0dGVybikucGFyYW1OYW1lcztcbiAgfSxcblxuICAvKipcbiAgICogRXh0cmFjdHMgdGhlIHBvcnRpb25zIG9mIHRoZSBnaXZlbiBVUkwgcGF0aCB0aGF0IG1hdGNoIHRoZSBnaXZlbiBwYXR0ZXJuXG4gICAqIGFuZCByZXR1cm5zIGFuIG9iamVjdCBvZiBwYXJhbSBuYW1lID0+IHZhbHVlIHBhaXJzLiBSZXR1cm5zIG51bGwgaWYgdGhlXG4gICAqIHBhdHRlcm4gZG9lcyBub3QgbWF0Y2ggdGhlIGdpdmVuIHBhdGguXG4gICAqL1xuICBleHRyYWN0UGFyYW1zOiBmdW5jdGlvbiBleHRyYWN0UGFyYW1zKHBhdHRlcm4sIHBhdGgpIHtcbiAgICB2YXIgX2NvbXBpbGVQYXR0ZXJuID0gY29tcGlsZVBhdHRlcm4ocGF0dGVybik7XG5cbiAgICB2YXIgbWF0Y2hlciA9IF9jb21waWxlUGF0dGVybi5tYXRjaGVyO1xuICAgIHZhciBwYXJhbU5hbWVzID0gX2NvbXBpbGVQYXR0ZXJuLnBhcmFtTmFtZXM7XG5cbiAgICB2YXIgbWF0Y2ggPSBwYXRoLm1hdGNoKG1hdGNoZXIpO1xuXG4gICAgaWYgKCFtYXRjaCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfXZhciBwYXJhbXMgPSB7fTtcblxuICAgIHBhcmFtTmFtZXMuZm9yRWFjaChmdW5jdGlvbiAocGFyYW1OYW1lLCBpbmRleCkge1xuICAgICAgcGFyYW1zW3BhcmFtTmFtZV0gPSBtYXRjaFtpbmRleCArIDFdO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHBhcmFtcztcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyBhIHZlcnNpb24gb2YgdGhlIGdpdmVuIHJvdXRlIHBhdGggd2l0aCBwYXJhbXMgaW50ZXJwb2xhdGVkLiBUaHJvd3NcbiAgICogaWYgdGhlcmUgaXMgYSBkeW5hbWljIHNlZ21lbnQgb2YgdGhlIHJvdXRlIHBhdGggZm9yIHdoaWNoIHRoZXJlIGlzIG5vIHBhcmFtLlxuICAgKi9cbiAgaW5qZWN0UGFyYW1zOiBmdW5jdGlvbiBpbmplY3RQYXJhbXMocGF0dGVybiwgcGFyYW1zKSB7XG4gICAgcGFyYW1zID0gcGFyYW1zIHx8IHt9O1xuXG4gICAgdmFyIHNwbGF0SW5kZXggPSAwO1xuXG4gICAgcmV0dXJuIHBhdHRlcm4ucmVwbGFjZShwYXJhbUluamVjdE1hdGNoZXIsIGZ1bmN0aW9uIChtYXRjaCwgcGFyYW1OYW1lKSB7XG4gICAgICBwYXJhbU5hbWUgPSBwYXJhbU5hbWUgfHwgJ3NwbGF0JztcblxuICAgICAgLy8gSWYgcGFyYW0gaXMgb3B0aW9uYWwgZG9uJ3QgY2hlY2sgZm9yIGV4aXN0ZW5jZVxuICAgICAgaWYgKHBhcmFtTmFtZS5zbGljZSgtMSkgPT09ICc/Jykge1xuICAgICAgICBwYXJhbU5hbWUgPSBwYXJhbU5hbWUuc2xpY2UoMCwgLTEpO1xuXG4gICAgICAgIGlmIChwYXJhbXNbcGFyYW1OYW1lXSA9PSBudWxsKSByZXR1cm4gJyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnZhcmlhbnQocGFyYW1zW3BhcmFtTmFtZV0gIT0gbnVsbCwgJ01pc3NpbmcgXCIlc1wiIHBhcmFtZXRlciBmb3IgcGF0aCBcIiVzXCInLCBwYXJhbU5hbWUsIHBhdHRlcm4pO1xuICAgICAgfVxuXG4gICAgICB2YXIgc2VnbWVudDtcbiAgICAgIGlmIChwYXJhbU5hbWUgPT09ICdzcGxhdCcgJiYgQXJyYXkuaXNBcnJheShwYXJhbXNbcGFyYW1OYW1lXSkpIHtcbiAgICAgICAgc2VnbWVudCA9IHBhcmFtc1twYXJhbU5hbWVdW3NwbGF0SW5kZXgrK107XG5cbiAgICAgICAgaW52YXJpYW50KHNlZ21lbnQgIT0gbnVsbCwgJ01pc3Npbmcgc3BsYXQgIyAlcyBmb3IgcGF0aCBcIiVzXCInLCBzcGxhdEluZGV4LCBwYXR0ZXJuKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlZ21lbnQgPSBwYXJhbXNbcGFyYW1OYW1lXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlZ21lbnQ7XG4gICAgfSkucmVwbGFjZShwYXJhbUluamVjdFRyYWlsaW5nU2xhc2hNYXRjaGVyLCAnLycpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGlzIHRoZSByZXN1bHQgb2YgcGFyc2luZyBhbnkgcXVlcnkgc3RyaW5nIGNvbnRhaW5lZFxuICAgKiBpbiB0aGUgZ2l2ZW4gcGF0aCwgbnVsbCBpZiB0aGUgcGF0aCBjb250YWlucyBubyBxdWVyeSBzdHJpbmcuXG4gICAqL1xuICBleHRyYWN0UXVlcnk6IGZ1bmN0aW9uIGV4dHJhY3RRdWVyeShwYXRoKSB7XG4gICAgdmFyIG1hdGNoID0gcGF0aC5tYXRjaChxdWVyeU1hdGNoZXIpO1xuICAgIHJldHVybiBtYXRjaCAmJiBxcy5wYXJzZShtYXRjaFsxXSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSB2ZXJzaW9uIG9mIHRoZSBnaXZlbiBwYXRoIHdpdGhvdXQgdGhlIHF1ZXJ5IHN0cmluZy5cbiAgICovXG4gIHdpdGhvdXRRdWVyeTogZnVuY3Rpb24gd2l0aG91dFF1ZXJ5KHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5yZXBsYWNlKHF1ZXJ5TWF0Y2hlciwgJycpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgdmVyc2lvbiBvZiB0aGUgZ2l2ZW4gcGF0aCB3aXRoIHRoZSBwYXJhbWV0ZXJzIGluIHRoZSBnaXZlblxuICAgKiBxdWVyeSBtZXJnZWQgaW50byB0aGUgcXVlcnkgc3RyaW5nLlxuICAgKi9cbiAgd2l0aFF1ZXJ5OiBmdW5jdGlvbiB3aXRoUXVlcnkocGF0aCwgcXVlcnkpIHtcbiAgICB2YXIgZXhpc3RpbmdRdWVyeSA9IFBhdGhVdGlscy5leHRyYWN0UXVlcnkocGF0aCk7XG5cbiAgICBpZiAoZXhpc3RpbmdRdWVyeSkgcXVlcnkgPSBxdWVyeSA/IGFzc2lnbihleGlzdGluZ1F1ZXJ5LCBxdWVyeSkgOiBleGlzdGluZ1F1ZXJ5O1xuXG4gICAgdmFyIHF1ZXJ5U3RyaW5nID0gcXMuc3RyaW5naWZ5KHF1ZXJ5LCB7IGFycmF5Rm9ybWF0OiAnYnJhY2tldHMnIH0pO1xuXG4gICAgaWYgKHF1ZXJ5U3RyaW5nKSB7XG4gICAgICByZXR1cm4gUGF0aFV0aWxzLndpdGhvdXRRdWVyeShwYXRoKSArICc/JyArIHF1ZXJ5U3RyaW5nO1xuICAgIH1yZXR1cm4gUGF0aFV0aWxzLndpdGhvdXRRdWVyeShwYXRoKTtcbiAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBhdGhVdGlsczsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBhc3NpZ24gPSByZXF1aXJlKCdyZWFjdC9saWIvT2JqZWN0LmFzc2lnbicpO1xudmFyIFJlYWN0UHJvcFR5cGVzID0gcmVxdWlyZSgncmVhY3QnKS5Qcm9wVHlwZXM7XG52YXIgUm91dGUgPSByZXF1aXJlKCcuL1JvdXRlJyk7XG5cbnZhciBQcm9wVHlwZXMgPSBhc3NpZ24oe30sIFJlYWN0UHJvcFR5cGVzLCB7XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB0aGF0IGEgcHJvcCBzaG91bGQgYmUgZmFsc3kuXG4gICAqL1xuICBmYWxzeTogZnVuY3Rpb24gZmFsc3kocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAgaWYgKHByb3BzW3Byb3BOYW1lXSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcignPCcgKyBjb21wb25lbnROYW1lICsgJz4gc2hvdWxkIG5vdCBoYXZlIGEgXCInICsgcHJvcE5hbWUgKyAnXCIgcHJvcCcpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogSW5kaWNhdGVzIHRoYXQgYSBwcm9wIHNob3VsZCBiZSBhIFJvdXRlIG9iamVjdC5cbiAgICovXG4gIHJvdXRlOiBSZWFjdFByb3BUeXBlcy5pbnN0YW5jZU9mKFJvdXRlKSxcblxuICAvKipcbiAgICogSW5kaWNhdGVzIHRoYXQgYSBwcm9wIHNob3VsZCBiZSBhIFJvdXRlciBvYmplY3QuXG4gICAqL1xuICAvL3JvdXRlcjogUmVhY3RQcm9wVHlwZXMuaW5zdGFuY2VPZihSb3V0ZXIpIC8vIFRPRE9cbiAgcm91dGVyOiBSZWFjdFByb3BUeXBlcy5mdW5jXG5cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFByb3BUeXBlczsiLCIvKipcbiAqIEVuY2Fwc3VsYXRlcyBhIHJlZGlyZWN0IHRvIHRoZSBnaXZlbiByb3V0ZS5cbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIFJlZGlyZWN0KHRvLCBwYXJhbXMsIHF1ZXJ5KSB7XG4gIHRoaXMudG8gPSB0bztcbiAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XG4gIHRoaXMucXVlcnkgPSBxdWVyeTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWRpcmVjdDsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbnZhciBhc3NpZ24gPSByZXF1aXJlKCdyZWFjdC9saWIvT2JqZWN0LmFzc2lnbicpO1xudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ3JlYWN0L2xpYi9pbnZhcmlhbnQnKTtcbnZhciB3YXJuaW5nID0gcmVxdWlyZSgncmVhY3QvbGliL3dhcm5pbmcnKTtcbnZhciBQYXRoVXRpbHMgPSByZXF1aXJlKCcuL1BhdGhVdGlscycpO1xuXG52YXIgX2N1cnJlbnRSb3V0ZTtcblxudmFyIFJvdXRlID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gUm91dGUobmFtZSwgcGF0aCwgaWdub3JlU2Nyb2xsQmVoYXZpb3IsIGlzRGVmYXVsdCwgaXNOb3RGb3VuZCwgb25FbnRlciwgb25MZWF2ZSwgaGFuZGxlcikge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSb3V0ZSk7XG5cbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgdGhpcy5wYXJhbU5hbWVzID0gUGF0aFV0aWxzLmV4dHJhY3RQYXJhbU5hbWVzKHRoaXMucGF0aCk7XG4gICAgdGhpcy5pZ25vcmVTY3JvbGxCZWhhdmlvciA9ICEhaWdub3JlU2Nyb2xsQmVoYXZpb3I7XG4gICAgdGhpcy5pc0RlZmF1bHQgPSAhIWlzRGVmYXVsdDtcbiAgICB0aGlzLmlzTm90Rm91bmQgPSAhIWlzTm90Rm91bmQ7XG4gICAgdGhpcy5vbkVudGVyID0gb25FbnRlcjtcbiAgICB0aGlzLm9uTGVhdmUgPSBvbkxlYXZlO1xuICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUm91dGUsIFt7XG4gICAga2V5OiAnYXBwZW5kQ2hpbGQnLFxuXG4gICAgLyoqXG4gICAgICogQXBwZW5kcyB0aGUgZ2l2ZW4gcm91dGUgdG8gdGhpcyByb3V0ZSdzIGNoaWxkIHJvdXRlcy5cbiAgICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gYXBwZW5kQ2hpbGQocm91dGUpIHtcbiAgICAgIGludmFyaWFudChyb3V0ZSBpbnN0YW5jZW9mIFJvdXRlLCAncm91dGUuYXBwZW5kQ2hpbGQgbXVzdCB1c2UgYSB2YWxpZCBSb3V0ZScpO1xuXG4gICAgICBpZiAoIXRoaXMuY2hpbGRSb3V0ZXMpIHRoaXMuY2hpbGRSb3V0ZXMgPSBbXTtcblxuICAgICAgdGhpcy5jaGlsZFJvdXRlcy5wdXNoKHJvdXRlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd0b1N0cmluZycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgdmFyIHN0cmluZyA9ICc8Um91dGUnO1xuXG4gICAgICBpZiAodGhpcy5uYW1lKSBzdHJpbmcgKz0gJyBuYW1lPVwiJyArIHRoaXMubmFtZSArICdcIic7XG5cbiAgICAgIHN0cmluZyArPSAnIHBhdGg9XCInICsgdGhpcy5wYXRoICsgJ1wiPic7XG5cbiAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6ICdjcmVhdGVSb3V0ZScsXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuZCByZXR1cm5zIGEgbmV3IHJvdXRlLiBPcHRpb25zIG1heSBiZSBhIFVSTCBwYXRobmFtZSBzdHJpbmdcbiAgICAgKiB3aXRoIHBsYWNlaG9sZGVycyBmb3IgbmFtZWQgcGFyYW1zIG9yIGFuIG9iamVjdCB3aXRoIGFueSBvZiB0aGUgZm9sbG93aW5nXG4gICAgICogcHJvcGVydGllczpcbiAgICAgKlxuICAgICAqIC0gbmFtZSAgICAgICAgICAgICAgICAgICAgIFRoZSBuYW1lIG9mIHRoZSByb3V0ZS4gVGhpcyBpcyB1c2VkIHRvIGxvb2t1cCBhXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgcmVsYXRpdmUgdG8gaXRzIHBhcmVudCByb3V0ZSBhbmQgc2hvdWxkIGJlXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pcXVlIGFtb25nIGFsbCBjaGlsZCByb3V0ZXMgb2YgdGhlIHNhbWUgcGFyZW50XG4gICAgICogLSBwYXRoICAgICAgICAgICAgICAgICAgICAgQSBVUkwgcGF0aG5hbWUgc3RyaW5nIHdpdGggb3B0aW9uYWwgcGxhY2Vob2xkZXJzXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdCBzcGVjaWZ5IHRoZSBuYW1lcyBvZiBwYXJhbXMgdG8gZXh0cmFjdCBmcm9tXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIFVSTCB3aGVuIHRoZSBwYXRoIG1hdGNoZXMuIERlZmF1bHRzIHRvIGAvJHtuYW1lfWBcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGVuIHRoZXJlIGlzIGEgbmFtZSBnaXZlbiwgb3IgdGhlIHBhdGggb2YgdGhlIHBhcmVudFxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlLCBvciAvXG4gICAgICogLSBpZ25vcmVTY3JvbGxCZWhhdmlvciAgICAgVHJ1ZSB0byBtYWtlIHRoaXMgcm91dGUgKGFuZCBhbGwgZGVzY2VuZGFudHMpIGlnbm9yZVxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBzY3JvbGwgYmVoYXZpb3Igb2YgdGhlIHJvdXRlclxuICAgICAqIC0gaXNEZWZhdWx0ICAgICAgICAgICAgICAgIFRydWUgdG8gbWFrZSB0aGlzIHJvdXRlIHRoZSBkZWZhdWx0IHJvdXRlIGFtb25nIGFsbFxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0cyBzaWJsaW5nc1xuICAgICAqIC0gaXNOb3RGb3VuZCAgICAgICAgICAgICAgIFRydWUgdG8gbWFrZSB0aGlzIHJvdXRlIHRoZSBcIm5vdCBmb3VuZFwiIHJvdXRlIGFtb25nXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsIGl0cyBzaWJsaW5nc1xuICAgICAqIC0gb25FbnRlciAgICAgICAgICAgICAgICAgIEEgdHJhbnNpdGlvbiBob29rIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGVcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIgaXMgZ29pbmcgdG8gZW50ZXIgdGhpcyByb3V0ZVxuICAgICAqIC0gb25MZWF2ZSAgICAgICAgICAgICAgICAgIEEgdHJhbnNpdGlvbiBob29rIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGVcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIgaXMgZ29pbmcgdG8gbGVhdmUgdGhpcyByb3V0ZVxuICAgICAqIC0gaGFuZGxlciAgICAgICAgICAgICAgICAgIEEgUmVhY3QgY29tcG9uZW50IHRoYXQgd2lsbCBiZSByZW5kZXJlZCB3aGVuXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyByb3V0ZSBpcyBhY3RpdmVcbiAgICAgKiAtIHBhcmVudFJvdXRlICAgICAgICAgICAgICBUaGUgcGFyZW50IHJvdXRlIHRvIHVzZSBmb3IgdGhpcyByb3V0ZS4gVGhpcyBvcHRpb25cbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpcyBhdXRvbWF0aWNhbGx5IHN1cHBsaWVkIHdoZW4gY3JlYXRpbmcgcm91dGVzIGluc2lkZVxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBjYWxsYmFjayB0byBhbm90aGVyIGludm9jYXRpb24gb2YgY3JlYXRlUm91dGUuIFlvdVxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ubHkgZXZlciBuZWVkIHRvIHVzZSB0aGlzIHdoZW4gZGVjbGFyaW5nIHJvdXRlc1xuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGVwZW5kZW50bHkgb2Ygb25lIGFub3RoZXIgdG8gbWFudWFsbHkgcGllY2UgdG9nZXRoZXJcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgcm91dGUgaGllcmFyY2h5XG4gICAgICpcbiAgICAgKiBUaGUgY2FsbGJhY2sgbWF5IGJlIHVzZWQgdG8gc3RydWN0dXJlIHlvdXIgcm91dGUgaGllcmFyY2h5LiBBbnkgY2FsbCB0b1xuICAgICAqIGNyZWF0ZVJvdXRlLCBjcmVhdGVEZWZhdWx0Um91dGUsIGNyZWF0ZU5vdEZvdW5kUm91dGUsIG9yIGNyZWF0ZVJlZGlyZWN0XG4gICAgICogaW5zaWRlIHRoZSBjYWxsYmFjayBhdXRvbWF0aWNhbGx5IHVzZXMgdGhpcyByb3V0ZSBhcyBpdHMgcGFyZW50LlxuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVSb3V0ZShvcHRpb25zLCBjYWxsYmFjaykge1xuICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycpIG9wdGlvbnMgPSB7IHBhdGg6IG9wdGlvbnMgfTtcblxuICAgICAgdmFyIHBhcmVudFJvdXRlID0gX2N1cnJlbnRSb3V0ZTtcblxuICAgICAgaWYgKHBhcmVudFJvdXRlKSB7XG4gICAgICAgIHdhcm5pbmcob3B0aW9ucy5wYXJlbnRSb3V0ZSA9PSBudWxsIHx8IG9wdGlvbnMucGFyZW50Um91dGUgPT09IHBhcmVudFJvdXRlLCAnWW91IHNob3VsZCBub3QgdXNlIHBhcmVudFJvdXRlIHdpdGggY3JlYXRlUm91dGUgaW5zaWRlIGFub3RoZXIgcm91dGVcXCdzIGNoaWxkIGNhbGxiYWNrOyBpdCBpcyBpZ25vcmVkJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJlbnRSb3V0ZSA9IG9wdGlvbnMucGFyZW50Um91dGU7XG4gICAgICB9XG5cbiAgICAgIHZhciBuYW1lID0gb3B0aW9ucy5uYW1lO1xuICAgICAgdmFyIHBhdGggPSBvcHRpb25zLnBhdGggfHwgbmFtZTtcblxuICAgICAgaWYgKHBhdGggJiYgIShvcHRpb25zLmlzRGVmYXVsdCB8fCBvcHRpb25zLmlzTm90Rm91bmQpKSB7XG4gICAgICAgIGlmIChQYXRoVXRpbHMuaXNBYnNvbHV0ZShwYXRoKSkge1xuICAgICAgICAgIGlmIChwYXJlbnRSb3V0ZSkge1xuICAgICAgICAgICAgaW52YXJpYW50KHBhdGggPT09IHBhcmVudFJvdXRlLnBhdGggfHwgcGFyZW50Um91dGUucGFyYW1OYW1lcy5sZW5ndGggPT09IDAsICdZb3UgY2Fubm90IG5lc3QgcGF0aCBcIiVzXCIgaW5zaWRlIFwiJXNcIjsgdGhlIHBhcmVudCByZXF1aXJlcyBVUkwgcGFyYW1ldGVycycsIHBhdGgsIHBhcmVudFJvdXRlLnBhdGgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChwYXJlbnRSb3V0ZSkge1xuICAgICAgICAgIC8vIFJlbGF0aXZlIHBhdGhzIGV4dGVuZCB0aGVpciBwYXJlbnQuXG4gICAgICAgICAgcGF0aCA9IFBhdGhVdGlscy5qb2luKHBhcmVudFJvdXRlLnBhdGgsIHBhdGgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhdGggPSAnLycgKyBwYXRoO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXRoID0gcGFyZW50Um91dGUgPyBwYXJlbnRSb3V0ZS5wYXRoIDogJy8nO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5pc05vdEZvdW5kICYmICEvXFwqJC8udGVzdChwYXRoKSkgcGF0aCArPSAnKic7IC8vIEF1dG8tYXBwZW5kICogdG8gdGhlIHBhdGggb2Ygbm90IGZvdW5kIHJvdXRlcy5cblxuICAgICAgdmFyIHJvdXRlID0gbmV3IFJvdXRlKG5hbWUsIHBhdGgsIG9wdGlvbnMuaWdub3JlU2Nyb2xsQmVoYXZpb3IsIG9wdGlvbnMuaXNEZWZhdWx0LCBvcHRpb25zLmlzTm90Rm91bmQsIG9wdGlvbnMub25FbnRlciwgb3B0aW9ucy5vbkxlYXZlLCBvcHRpb25zLmhhbmRsZXIpO1xuXG4gICAgICBpZiAocGFyZW50Um91dGUpIHtcbiAgICAgICAgaWYgKHJvdXRlLmlzRGVmYXVsdCkge1xuICAgICAgICAgIGludmFyaWFudChwYXJlbnRSb3V0ZS5kZWZhdWx0Um91dGUgPT0gbnVsbCwgJyVzIG1heSBub3QgaGF2ZSBtb3JlIHRoYW4gb25lIGRlZmF1bHQgcm91dGUnLCBwYXJlbnRSb3V0ZSk7XG5cbiAgICAgICAgICBwYXJlbnRSb3V0ZS5kZWZhdWx0Um91dGUgPSByb3V0ZTtcbiAgICAgICAgfSBlbHNlIGlmIChyb3V0ZS5pc05vdEZvdW5kKSB7XG4gICAgICAgICAgaW52YXJpYW50KHBhcmVudFJvdXRlLm5vdEZvdW5kUm91dGUgPT0gbnVsbCwgJyVzIG1heSBub3QgaGF2ZSBtb3JlIHRoYW4gb25lIG5vdCBmb3VuZCByb3V0ZScsIHBhcmVudFJvdXRlKTtcblxuICAgICAgICAgIHBhcmVudFJvdXRlLm5vdEZvdW5kUm91dGUgPSByb3V0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcmVudFJvdXRlLmFwcGVuZENoaWxkKHJvdXRlKTtcbiAgICAgIH1cblxuICAgICAgLy8gQW55IHJvdXRlcyBjcmVhdGVkIGluIHRoZSBjYWxsYmFja1xuICAgICAgLy8gdXNlIHRoaXMgcm91dGUgYXMgdGhlaXIgcGFyZW50LlxuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB2YXIgY3VycmVudFJvdXRlID0gX2N1cnJlbnRSb3V0ZTtcbiAgICAgICAgX2N1cnJlbnRSb3V0ZSA9IHJvdXRlO1xuICAgICAgICBjYWxsYmFjay5jYWxsKHJvdXRlLCByb3V0ZSk7XG4gICAgICAgIF9jdXJyZW50Um91dGUgPSBjdXJyZW50Um91dGU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjcmVhdGVEZWZhdWx0Um91dGUnLFxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbmQgcmV0dXJucyBhIHJvdXRlIHRoYXQgaXMgcmVuZGVyZWQgd2hlbiBpdHMgcGFyZW50IG1hdGNoZXNcbiAgICAgKiB0aGUgY3VycmVudCBVUkwuXG4gICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZURlZmF1bHRSb3V0ZShvcHRpb25zKSB7XG4gICAgICByZXR1cm4gUm91dGUuY3JlYXRlUm91dGUoYXNzaWduKHt9LCBvcHRpb25zLCB7IGlzRGVmYXVsdDogdHJ1ZSB9KSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY3JlYXRlTm90Rm91bmRSb3V0ZScsXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuZCByZXR1cm5zIGEgcm91dGUgdGhhdCBpcyByZW5kZXJlZCB3aGVuIGl0cyBwYXJlbnQgbWF0Y2hlc1xuICAgICAqIHRoZSBjdXJyZW50IFVSTCBidXQgbm9uZSBvZiBpdHMgc2libGluZ3MgZG8uXG4gICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZU5vdEZvdW5kUm91dGUob3B0aW9ucykge1xuICAgICAgcmV0dXJuIFJvdXRlLmNyZWF0ZVJvdXRlKGFzc2lnbih7fSwgb3B0aW9ucywgeyBpc05vdEZvdW5kOiB0cnVlIH0pKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjcmVhdGVSZWRpcmVjdCcsXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuZCByZXR1cm5zIGEgcm91dGUgdGhhdCBhdXRvbWF0aWNhbGx5IHJlZGlyZWN0cyB0aGUgdHJhbnNpdGlvblxuICAgICAqIHRvIGFub3RoZXIgcm91dGUuIEluIGFkZGl0aW9uIHRvIHRoZSBub3JtYWwgb3B0aW9ucyB0byBjcmVhdGVSb3V0ZSwgdGhpc1xuICAgICAqIGZ1bmN0aW9uIGFjY2VwdHMgdGhlIGZvbGxvd2luZyBvcHRpb25zOlxuICAgICAqXG4gICAgICogLSBmcm9tICAgICAgICAgQW4gYWxpYXMgZm9yIHRoZSBgcGF0aGAgb3B0aW9uLiBEZWZhdWx0cyB0byAqXG4gICAgICogLSB0byAgICAgICAgICAgVGhlIHBhdGgvcm91dGUvcm91dGUgbmFtZSB0byByZWRpcmVjdCB0b1xuICAgICAqIC0gcGFyYW1zICAgICAgIFRoZSBwYXJhbXMgdG8gdXNlIGluIHRoZSByZWRpcmVjdCBVUkwuIERlZmF1bHRzXG4gICAgICogICAgICAgICAgICAgICAgdG8gdXNpbmcgdGhlIGN1cnJlbnQgcGFyYW1zXG4gICAgICogLSBxdWVyeSAgICAgICAgVGhlIHF1ZXJ5IHRvIHVzZSBpbiB0aGUgcmVkaXJlY3QgVVJMLiBEZWZhdWx0c1xuICAgICAqICAgICAgICAgICAgICAgIHRvIHVzaW5nIHRoZSBjdXJyZW50IHF1ZXJ5XG4gICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZVJlZGlyZWN0KG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBSb3V0ZS5jcmVhdGVSb3V0ZShhc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgcGF0aDogb3B0aW9ucy5wYXRoIHx8IG9wdGlvbnMuZnJvbSB8fCAnKicsXG4gICAgICAgIG9uRW50ZXI6IGZ1bmN0aW9uIG9uRW50ZXIodHJhbnNpdGlvbiwgcGFyYW1zLCBxdWVyeSkge1xuICAgICAgICAgIHRyYW5zaXRpb24ucmVkaXJlY3Qob3B0aW9ucy50bywgb3B0aW9ucy5wYXJhbXMgfHwgcGFyYW1zLCBvcHRpb25zLnF1ZXJ5IHx8IHF1ZXJ5KTtcbiAgICAgICAgfVxuICAgICAgfSkpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBSb3V0ZTtcbn0pKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gUm91dGU7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgncmVhY3QvbGliL2ludmFyaWFudCcpO1xudmFyIGNhblVzZURPTSA9IHJlcXVpcmUoJ3JlYWN0L2xpYi9FeGVjdXRpb25FbnZpcm9ubWVudCcpLmNhblVzZURPTTtcbnZhciBnZXRXaW5kb3dTY3JvbGxQb3NpdGlvbiA9IHJlcXVpcmUoJy4vZ2V0V2luZG93U2Nyb2xsUG9zaXRpb24nKTtcblxuZnVuY3Rpb24gc2hvdWxkVXBkYXRlU2Nyb2xsKHN0YXRlLCBwcmV2U3RhdGUpIHtcbiAgaWYgKCFwcmV2U3RhdGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBEb24ndCB1cGRhdGUgc2Nyb2xsIHBvc2l0aW9uIHdoZW4gb25seSB0aGUgcXVlcnkgaGFzIGNoYW5nZWQuXG4gIGlmIChzdGF0ZS5wYXRobmFtZSA9PT0gcHJldlN0YXRlLnBhdGhuYW1lKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9dmFyIHJvdXRlcyA9IHN0YXRlLnJvdXRlcztcbiAgdmFyIHByZXZSb3V0ZXMgPSBwcmV2U3RhdGUucm91dGVzO1xuXG4gIHZhciBzaGFyZWRBbmNlc3RvclJvdXRlcyA9IHJvdXRlcy5maWx0ZXIoZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgcmV0dXJuIHByZXZSb3V0ZXMuaW5kZXhPZihyb3V0ZSkgIT09IC0xO1xuICB9KTtcblxuICByZXR1cm4gIXNoYXJlZEFuY2VzdG9yUm91dGVzLnNvbWUoZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgcmV0dXJuIHJvdXRlLmlnbm9yZVNjcm9sbEJlaGF2aW9yO1xuICB9KTtcbn1cblxuLyoqXG4gKiBQcm92aWRlcyB0aGUgcm91dGVyIHdpdGggdGhlIGFiaWxpdHkgdG8gbWFuYWdlIHdpbmRvdyBzY3JvbGwgcG9zaXRpb25cbiAqIGFjY29yZGluZyB0byBpdHMgc2Nyb2xsIGJlaGF2aW9yLlxuICovXG52YXIgU2Nyb2xsSGlzdG9yeSA9IHtcblxuICBzdGF0aWNzOiB7XG5cbiAgICAvKipcbiAgICAgKiBSZWNvcmRzIGN1cmVudCBzY3JvbGwgcG9zaXRpb24gYXMgdGhlIGxhc3Qga25vd24gcG9zaXRpb24gZm9yIHRoZSBnaXZlbiBVUkwgcGF0aC5cbiAgICAgKi9cbiAgICByZWNvcmRTY3JvbGxQb3NpdGlvbjogZnVuY3Rpb24gcmVjb3JkU2Nyb2xsUG9zaXRpb24ocGF0aCkge1xuICAgICAgaWYgKCF0aGlzLnNjcm9sbEhpc3RvcnkpIHRoaXMuc2Nyb2xsSGlzdG9yeSA9IHt9O1xuXG4gICAgICB0aGlzLnNjcm9sbEhpc3RvcnlbcGF0aF0gPSBnZXRXaW5kb3dTY3JvbGxQb3NpdGlvbigpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBsYXN0IGtub3duIHNjcm9sbCBwb3NpdGlvbiBmb3IgdGhlIGdpdmVuIFVSTCBwYXRoLlxuICAgICAqL1xuICAgIGdldFNjcm9sbFBvc2l0aW9uOiBmdW5jdGlvbiBnZXRTY3JvbGxQb3NpdGlvbihwYXRoKSB7XG4gICAgICBpZiAoIXRoaXMuc2Nyb2xsSGlzdG9yeSkgdGhpcy5zY3JvbGxIaXN0b3J5ID0ge307XG5cbiAgICAgIHJldHVybiB0aGlzLnNjcm9sbEhpc3RvcnlbcGF0aF0gfHwgbnVsbDtcbiAgICB9XG5cbiAgfSxcblxuICBjb21wb25lbnRXaWxsTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBpbnZhcmlhbnQodGhpcy5jb25zdHJ1Y3Rvci5nZXRTY3JvbGxCZWhhdmlvcigpID09IG51bGwgfHwgY2FuVXNlRE9NLCAnQ2Fubm90IHVzZSBzY3JvbGwgYmVoYXZpb3Igd2l0aG91dCBhIERPTScpO1xuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLl91cGRhdGVTY3JvbGwoKTtcbiAgfSxcblxuICBjb21wb25lbnREaWRVcGRhdGU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIHRoaXMuX3VwZGF0ZVNjcm9sbChwcmV2U3RhdGUpO1xuICB9LFxuXG4gIF91cGRhdGVTY3JvbGw6IGZ1bmN0aW9uIF91cGRhdGVTY3JvbGwocHJldlN0YXRlKSB7XG4gICAgaWYgKCFzaG91bGRVcGRhdGVTY3JvbGwodGhpcy5zdGF0ZSwgcHJldlN0YXRlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH12YXIgc2Nyb2xsQmVoYXZpb3IgPSB0aGlzLmNvbnN0cnVjdG9yLmdldFNjcm9sbEJlaGF2aW9yKCk7XG5cbiAgICBpZiAoc2Nyb2xsQmVoYXZpb3IpIHNjcm9sbEJlaGF2aW9yLnVwZGF0ZVNjcm9sbFBvc2l0aW9uKHRoaXMuY29uc3RydWN0b3IuZ2V0U2Nyb2xsUG9zaXRpb24odGhpcy5zdGF0ZS5wYXRoKSwgdGhpcy5zdGF0ZS5hY3Rpb24pO1xuICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU2Nyb2xsSGlzdG9yeTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBQcm9wVHlwZXMgPSByZXF1aXJlKCcuL1Byb3BUeXBlcycpO1xuXG4vKipcbiAqIEEgbWl4aW4gZm9yIGNvbXBvbmVudHMgdGhhdCBuZWVkIHRvIGtub3cgdGhlIHBhdGgsIHJvdXRlcywgVVJMXG4gKiBwYXJhbXMgYW5kIHF1ZXJ5IHRoYXQgYXJlIGN1cnJlbnRseSBhY3RpdmUuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgIHZhciBBYm91dExpbmsgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gKiAgICAgbWl4aW5zOiBbIFJvdXRlci5TdGF0ZSBdLFxuICogICAgIHJlbmRlcigpIHtcbiAqICAgICAgIHZhciBjbGFzc05hbWUgPSB0aGlzLnByb3BzLmNsYXNzTmFtZTtcbiAqXG4gKiAgICAgICBpZiAodGhpcy5pc0FjdGl2ZSgnYWJvdXQnKSlcbiAqICAgICAgICAgY2xhc3NOYW1lICs9ICcgaXMtYWN0aXZlJztcbiAqXG4gKiAgICAgICByZXR1cm4gUmVhY3QuRE9NLmEoeyBjbGFzc05hbWU6IGNsYXNzTmFtZSB9LCB0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAqICAgICB9XG4gKiAgIH0pO1xuICovXG52YXIgU3RhdGUgPSB7XG5cbiAgY29udGV4dFR5cGVzOiB7XG4gICAgcm91dGVyOiBQcm9wVHlwZXMucm91dGVyLmlzUmVxdWlyZWRcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCBVUkwgcGF0aC5cbiAgICovXG4gIGdldFBhdGg6IGZ1bmN0aW9uIGdldFBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dC5yb3V0ZXIuZ2V0Q3VycmVudFBhdGgoKTtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCBVUkwgcGF0aCB3aXRob3V0IHRoZSBxdWVyeSBzdHJpbmcuXG4gICAqL1xuICBnZXRQYXRobmFtZTogZnVuY3Rpb24gZ2V0UGF0aG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dC5yb3V0ZXIuZ2V0Q3VycmVudFBhdGhuYW1lKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gb2JqZWN0IG9mIHRoZSBVUkwgcGFyYW1zIHRoYXQgYXJlIGN1cnJlbnRseSBhY3RpdmUuXG4gICAqL1xuICBnZXRQYXJhbXM6IGZ1bmN0aW9uIGdldFBhcmFtcygpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0LnJvdXRlci5nZXRDdXJyZW50UGFyYW1zKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gb2JqZWN0IG9mIHRoZSBxdWVyeSBwYXJhbXMgdGhhdCBhcmUgY3VycmVudGx5IGFjdGl2ZS5cbiAgICovXG4gIGdldFF1ZXJ5OiBmdW5jdGlvbiBnZXRRdWVyeSgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0LnJvdXRlci5nZXRDdXJyZW50UXVlcnkoKTtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhcnJheSBvZiB0aGUgcm91dGVzIHRoYXQgYXJlIGN1cnJlbnRseSBhY3RpdmUuXG4gICAqL1xuICBnZXRSb3V0ZXM6IGZ1bmN0aW9uIGdldFJvdXRlcygpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0LnJvdXRlci5nZXRDdXJyZW50Um91dGVzKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEEgaGVscGVyIG1ldGhvZCB0byBkZXRlcm1pbmUgaWYgYSBnaXZlbiByb3V0ZSwgcGFyYW1zLCBhbmQgcXVlcnlcbiAgICogYXJlIGFjdGl2ZS5cbiAgICovXG4gIGlzQWN0aXZlOiBmdW5jdGlvbiBpc0FjdGl2ZSh0bywgcGFyYW1zLCBxdWVyeSkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQucm91dGVyLmlzQWN0aXZlKHRvLCBwYXJhbXMsIHF1ZXJ5KTtcbiAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0YXRlOyIsIi8qIGpzaGludCAtVzA1OCAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBDYW5jZWxsYXRpb24gPSByZXF1aXJlKCcuL0NhbmNlbGxhdGlvbicpO1xudmFyIFJlZGlyZWN0ID0gcmVxdWlyZSgnLi9SZWRpcmVjdCcpO1xuXG4vKipcbiAqIEVuY2Fwc3VsYXRlcyBhIHRyYW5zaXRpb24gdG8gYSBnaXZlbiBwYXRoLlxuICpcbiAqIFRoZSB3aWxsVHJhbnNpdGlvblRvIGFuZCB3aWxsVHJhbnNpdGlvbkZyb20gaGFuZGxlcnMgcmVjZWl2ZVxuICogYW4gaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBhcyB0aGVpciBmaXJzdCBhcmd1bWVudC5cbiAqL1xuZnVuY3Rpb24gVHJhbnNpdGlvbihwYXRoLCByZXRyeSkge1xuICB0aGlzLnBhdGggPSBwYXRoO1xuICB0aGlzLmFib3J0UmVhc29uID0gbnVsbDtcbiAgLy8gVE9ETzogQ2hhbmdlIHRoaXMgdG8gcm91dGVyLnJldHJ5VHJhbnNpdGlvbih0cmFuc2l0aW9uKVxuICB0aGlzLnJldHJ5ID0gcmV0cnkuYmluZCh0aGlzKTtcbn1cblxuVHJhbnNpdGlvbi5wcm90b3R5cGUuYWJvcnQgPSBmdW5jdGlvbiAocmVhc29uKSB7XG4gIGlmICh0aGlzLmFib3J0UmVhc29uID09IG51bGwpIHRoaXMuYWJvcnRSZWFzb24gPSByZWFzb24gfHwgJ0FCT1JUJztcbn07XG5cblRyYW5zaXRpb24ucHJvdG90eXBlLnJlZGlyZWN0ID0gZnVuY3Rpb24gKHRvLCBwYXJhbXMsIHF1ZXJ5KSB7XG4gIHRoaXMuYWJvcnQobmV3IFJlZGlyZWN0KHRvLCBwYXJhbXMsIHF1ZXJ5KSk7XG59O1xuXG5UcmFuc2l0aW9uLnByb3RvdHlwZS5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuYWJvcnQobmV3IENhbmNlbGxhdGlvbigpKTtcbn07XG5cblRyYW5zaXRpb24uZnJvbSA9IGZ1bmN0aW9uICh0cmFuc2l0aW9uLCByb3V0ZXMsIGNvbXBvbmVudHMsIGNhbGxiYWNrKSB7XG4gIHJvdXRlcy5yZWR1Y2UoZnVuY3Rpb24gKGNhbGxiYWNrLCByb3V0ZSwgaW5kZXgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBpZiAoZXJyb3IgfHwgdHJhbnNpdGlvbi5hYm9ydFJlYXNvbikge1xuICAgICAgICBjYWxsYmFjayhlcnJvcik7XG4gICAgICB9IGVsc2UgaWYgKHJvdXRlLm9uTGVhdmUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByb3V0ZS5vbkxlYXZlKHRyYW5zaXRpb24sIGNvbXBvbmVudHNbaW5kZXhdLCBjYWxsYmFjayk7XG5cbiAgICAgICAgICAvLyBJZiB0aGVyZSBpcyBubyBjYWxsYmFjayBpbiB0aGUgYXJndW1lbnQgbGlzdCwgY2FsbCBpdCBhdXRvbWF0aWNhbGx5LlxuICAgICAgICAgIGlmIChyb3V0ZS5vbkxlYXZlLmxlbmd0aCA8IDMpIGNhbGxiYWNrKCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBjYWxsYmFjayhlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9O1xuICB9LCBjYWxsYmFjaykoKTtcbn07XG5cblRyYW5zaXRpb24udG8gPSBmdW5jdGlvbiAodHJhbnNpdGlvbiwgcm91dGVzLCBwYXJhbXMsIHF1ZXJ5LCBjYWxsYmFjaykge1xuICByb3V0ZXMucmVkdWNlUmlnaHQoZnVuY3Rpb24gKGNhbGxiYWNrLCByb3V0ZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGlmIChlcnJvciB8fCB0cmFuc2l0aW9uLmFib3J0UmVhc29uKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycm9yKTtcbiAgICAgIH0gZWxzZSBpZiAocm91dGUub25FbnRlcikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJvdXRlLm9uRW50ZXIodHJhbnNpdGlvbiwgcGFyYW1zLCBxdWVyeSwgY2FsbGJhY2spO1xuXG4gICAgICAgICAgLy8gSWYgdGhlcmUgaXMgbm8gY2FsbGJhY2sgaW4gdGhlIGFyZ3VtZW50IGxpc3QsIGNhbGwgaXQgYXV0b21hdGljYWxseS5cbiAgICAgICAgICBpZiAocm91dGUub25FbnRlci5sZW5ndGggPCA0KSBjYWxsYmFjaygpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY2FsbGJhY2soZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgY2FsbGJhY2spKCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRyYW5zaXRpb247IiwiLyoqXG4gKiBBY3Rpb25zIHRoYXQgbW9kaWZ5IHRoZSBVUkwuXG4gKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIExvY2F0aW9uQWN0aW9ucyA9IHtcblxuICAvKipcbiAgICogSW5kaWNhdGVzIGEgbmV3IGxvY2F0aW9uIGlzIGJlaW5nIHB1c2hlZCB0byB0aGUgaGlzdG9yeSBzdGFjay5cbiAgICovXG4gIFBVU0g6ICdwdXNoJyxcblxuICAvKipcbiAgICogSW5kaWNhdGVzIHRoZSBjdXJyZW50IGxvY2F0aW9uIHNob3VsZCBiZSByZXBsYWNlZC5cbiAgICovXG4gIFJFUExBQ0U6ICdyZXBsYWNlJyxcblxuICAvKipcbiAgICogSW5kaWNhdGVzIHRoZSBtb3N0IHJlY2VudCBlbnRyeSBzaG91bGQgYmUgcmVtb3ZlZCBmcm9tIHRoZSBoaXN0b3J5IHN0YWNrLlxuICAgKi9cbiAgUE9QOiAncG9wJ1xuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExvY2F0aW9uQWN0aW9uczsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBMb2NhdGlvbkFjdGlvbnMgPSByZXF1aXJlKCcuLi9hY3Rpb25zL0xvY2F0aW9uQWN0aW9ucycpO1xuXG4vKipcbiAqIEEgc2Nyb2xsIGJlaGF2aW9yIHRoYXQgYXR0ZW1wdHMgdG8gaW1pdGF0ZSB0aGUgZGVmYXVsdCBiZWhhdmlvclxuICogb2YgbW9kZXJuIGJyb3dzZXJzLlxuICovXG52YXIgSW1pdGF0ZUJyb3dzZXJCZWhhdmlvciA9IHtcblxuICB1cGRhdGVTY3JvbGxQb3NpdGlvbjogZnVuY3Rpb24gdXBkYXRlU2Nyb2xsUG9zaXRpb24ocG9zaXRpb24sIGFjdGlvblR5cGUpIHtcbiAgICBzd2l0Y2ggKGFjdGlvblR5cGUpIHtcbiAgICAgIGNhc2UgTG9jYXRpb25BY3Rpb25zLlBVU0g6XG4gICAgICBjYXNlIExvY2F0aW9uQWN0aW9ucy5SRVBMQUNFOlxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMb2NhdGlvbkFjdGlvbnMuUE9QOlxuICAgICAgICBpZiAocG9zaXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8ocG9zaXRpb24ueCwgcG9zaXRpb24ueSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEltaXRhdGVCcm93c2VyQmVoYXZpb3I7IiwiLyoqXG4gKiBBIHNjcm9sbCBiZWhhdmlvciB0aGF0IGFsd2F5cyBzY3JvbGxzIHRvIHRoZSB0b3Agb2YgdGhlIHBhZ2VcbiAqIGFmdGVyIGEgdHJhbnNpdGlvbi5cbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBTY3JvbGxUb1RvcEJlaGF2aW9yID0ge1xuXG4gIHVwZGF0ZVNjcm9sbFBvc2l0aW9uOiBmdW5jdGlvbiB1cGRhdGVTY3JvbGxQb3NpdGlvbigpIHtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gIH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTY3JvbGxUb1RvcEJlaGF2aW9yOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9jbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxudmFyIF9pbmhlcml0cyA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH07XG5cbi8qKlxuICogVGhpcyBjb21wb25lbnQgaXMgbmVjZXNzYXJ5IHRvIGdldCBhcm91bmQgYSBjb250ZXh0IHdhcm5pbmdcbiAqIHByZXNlbnQgaW4gUmVhY3QgMC4xMy4wLiBJdCBzb3ZsZXMgdGhpcyBieSBwcm92aWRpbmcgYSBzZXBhcmF0aW9uXG4gKiBiZXR3ZWVuIHRoZSBcIm93bmVyXCIgYW5kIFwicGFyZW50XCIgY29udGV4dHMuXG4gKi9cblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIENvbnRleHRXcmFwcGVyID0gKGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIGZ1bmN0aW9uIENvbnRleHRXcmFwcGVyKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb250ZXh0V3JhcHBlcik7XG5cbiAgICBpZiAoX1JlYWN0JENvbXBvbmVudCAhPSBudWxsKSB7XG4gICAgICBfUmVhY3QkQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgX2luaGVyaXRzKENvbnRleHRXcmFwcGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBfY3JlYXRlQ2xhc3MoQ29udGV4dFdyYXBwZXIsIFt7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW47XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIENvbnRleHRXcmFwcGVyO1xufSkoUmVhY3QuQ29tcG9uZW50KTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb250ZXh0V3JhcHBlcjsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH07XG5cbnZhciBfaW5oZXJpdHMgPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9O1xuXG52YXIgUHJvcFR5cGVzID0gcmVxdWlyZSgnLi4vUHJvcFR5cGVzJyk7XG52YXIgUm91dGVIYW5kbGVyID0gcmVxdWlyZSgnLi9Sb3V0ZUhhbmRsZXInKTtcbnZhciBSb3V0ZSA9IHJlcXVpcmUoJy4vUm91dGUnKTtcblxuLyoqXG4gKiBBIDxEZWZhdWx0Um91dGU+IGNvbXBvbmVudCBpcyBhIHNwZWNpYWwga2luZCBvZiA8Um91dGU+IHRoYXRcbiAqIHJlbmRlcnMgd2hlbiBpdHMgcGFyZW50IG1hdGNoZXMgYnV0IG5vbmUgb2YgaXRzIHNpYmxpbmdzIGRvLlxuICogT25seSBvbmUgc3VjaCByb3V0ZSBtYXkgYmUgdXNlZCBhdCBhbnkgZ2l2ZW4gbGV2ZWwgaW4gdGhlXG4gKiByb3V0ZSBoaWVyYXJjaHkuXG4gKi9cblxudmFyIERlZmF1bHRSb3V0ZSA9IChmdW5jdGlvbiAoX1JvdXRlKSB7XG4gIGZ1bmN0aW9uIERlZmF1bHRSb3V0ZSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRGVmYXVsdFJvdXRlKTtcblxuICAgIGlmIChfUm91dGUgIT0gbnVsbCkge1xuICAgICAgX1JvdXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgX2luaGVyaXRzKERlZmF1bHRSb3V0ZSwgX1JvdXRlKTtcblxuICByZXR1cm4gRGVmYXVsdFJvdXRlO1xufSkoUm91dGUpO1xuXG4vLyBUT0RPOiBJbmNsdWRlIHRoZXNlIGluIHRoZSBhYm92ZSBjbGFzcyBkZWZpbml0aW9uXG4vLyBvbmNlIHdlIGNhbiB1c2UgRVM3IHByb3BlcnR5IGluaXRpYWxpemVycy5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9iYWJlbC9iYWJlbC9pc3N1ZXMvNjE5XG5cbkRlZmF1bHRSb3V0ZS5wcm9wVHlwZXMgPSB7XG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHBhdGg6IFByb3BUeXBlcy5mYWxzeSxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5mYWxzeSxcbiAgaGFuZGxlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxuRGVmYXVsdFJvdXRlLmRlZmF1bHRQcm9wcyA9IHtcbiAgaGFuZGxlcjogUm91dGVIYW5kbGVyXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IERlZmF1bHRSb3V0ZTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbnZhciBfaW5oZXJpdHMgPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9O1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ3JlYWN0L2xpYi9PYmplY3QuYXNzaWduJyk7XG52YXIgUHJvcFR5cGVzID0gcmVxdWlyZSgnLi4vUHJvcFR5cGVzJyk7XG5cbmZ1bmN0aW9uIGlzTGVmdENsaWNrRXZlbnQoZXZlbnQpIHtcbiAgcmV0dXJuIGV2ZW50LmJ1dHRvbiA9PT0gMDtcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KSB7XG4gIHJldHVybiAhIShldmVudC5tZXRhS2V5IHx8IGV2ZW50LmFsdEtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50LnNoaWZ0S2V5KTtcbn1cblxuLyoqXG4gKiA8TGluaz4gY29tcG9uZW50cyBhcmUgdXNlZCB0byBjcmVhdGUgYW4gPGE+IGVsZW1lbnQgdGhhdCBsaW5rcyB0byBhIHJvdXRlLlxuICogV2hlbiB0aGF0IHJvdXRlIGlzIGFjdGl2ZSwgdGhlIGxpbmsgZ2V0cyBhbiBcImFjdGl2ZVwiIGNsYXNzIG5hbWUgKG9yIHRoZVxuICogdmFsdWUgb2YgaXRzIGBhY3RpdmVDbGFzc05hbWVgIHByb3ApLlxuICpcbiAqIEZvciBleGFtcGxlLCBhc3N1bWluZyB5b3UgaGF2ZSB0aGUgZm9sbG93aW5nIHJvdXRlOlxuICpcbiAqICAgPFJvdXRlIG5hbWU9XCJzaG93UG9zdFwiIHBhdGg9XCIvcG9zdHMvOnBvc3RJRFwiIGhhbmRsZXI9e1Bvc3R9Lz5cbiAqXG4gKiBZb3UgY291bGQgdXNlIHRoZSBmb2xsb3dpbmcgY29tcG9uZW50IHRvIGxpbmsgdG8gdGhhdCByb3V0ZTpcbiAqXG4gKiAgIDxMaW5rIHRvPVwic2hvd1Bvc3RcIiBwYXJhbXM9e3sgcG9zdElEOiBcIjEyM1wiIH19IC8+XG4gKlxuICogSW4gYWRkaXRpb24gdG8gcGFyYW1zLCBsaW5rcyBtYXkgcGFzcyBhbG9uZyBxdWVyeSBzdHJpbmcgcGFyYW1ldGVyc1xuICogdXNpbmcgdGhlIGBxdWVyeWAgcHJvcC5cbiAqXG4gKiAgIDxMaW5rIHRvPVwic2hvd1Bvc3RcIiBwYXJhbXM9e3sgcG9zdElEOiBcIjEyM1wiIH19IHF1ZXJ5PXt7IHNob3c6dHJ1ZSB9fS8+XG4gKi9cblxudmFyIExpbmsgPSAoZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgZnVuY3Rpb24gTGluaygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTGluayk7XG5cbiAgICBpZiAoX1JlYWN0JENvbXBvbmVudCAhPSBudWxsKSB7XG4gICAgICBfUmVhY3QkQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgX2luaGVyaXRzKExpbmssIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIF9jcmVhdGVDbGFzcyhMaW5rLCBbe1xuICAgIGtleTogJ2hhbmRsZUNsaWNrJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlQ2xpY2soZXZlbnQpIHtcbiAgICAgIHZhciBhbGxvd1RyYW5zaXRpb24gPSB0cnVlO1xuICAgICAgdmFyIGNsaWNrUmVzdWx0O1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5vbkNsaWNrKSBjbGlja1Jlc3VsdCA9IHRoaXMucHJvcHMub25DbGljayhldmVudCk7XG5cbiAgICAgIGlmIChpc01vZGlmaWVkRXZlbnQoZXZlbnQpIHx8ICFpc0xlZnRDbGlja0V2ZW50KGV2ZW50KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9aWYgKGNsaWNrUmVzdWx0ID09PSBmYWxzZSB8fCBldmVudC5kZWZhdWx0UHJldmVudGVkID09PSB0cnVlKSBhbGxvd1RyYW5zaXRpb24gPSBmYWxzZTtcblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYgKGFsbG93VHJhbnNpdGlvbikgdGhpcy5jb250ZXh0LnJvdXRlci50cmFuc2l0aW9uVG8odGhpcy5wcm9wcy50bywgdGhpcy5wcm9wcy5wYXJhbXMsIHRoaXMucHJvcHMucXVlcnkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldEhyZWYnLFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIFwiaHJlZlwiIGF0dHJpYnV0ZSB0byB1c2Ugb24gdGhlIERPTSBlbGVtZW50LlxuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRIcmVmKCkge1xuICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC5yb3V0ZXIubWFrZUhyZWYodGhpcy5wcm9wcy50bywgdGhpcy5wcm9wcy5wYXJhbXMsIHRoaXMucHJvcHMucXVlcnkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldENsYXNzTmFtZScsXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgXCJjbGFzc1wiIGF0dHJpYnV0ZSB0byB1c2Ugb24gdGhlIERPTSBlbGVtZW50LCB3aGljaCBjb250YWluc1xuICAgICAqIHRoZSB2YWx1ZSBvZiB0aGUgYWN0aXZlQ2xhc3NOYW1lIHByb3BlcnR5IHdoZW4gdGhpcyA8TGluaz4gaXMgYWN0aXZlLlxuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDbGFzc05hbWUoKSB7XG4gICAgICB2YXIgY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5jbGFzc05hbWU7XG5cbiAgICAgIGlmICh0aGlzLmdldEFjdGl2ZVN0YXRlKCkpIGNsYXNzTmFtZSArPSAnICcgKyB0aGlzLnByb3BzLmFjdGl2ZUNsYXNzTmFtZTtcblxuICAgICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRBY3RpdmVTdGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEFjdGl2ZVN0YXRlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC5yb3V0ZXIuaXNBY3RpdmUodGhpcy5wcm9wcy50bywgdGhpcy5wcm9wcy5wYXJhbXMsIHRoaXMucHJvcHMucXVlcnkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBwcm9wcyA9IGFzc2lnbih7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICBocmVmOiB0aGlzLmdldEhyZWYoKSxcbiAgICAgICAgY2xhc3NOYW1lOiB0aGlzLmdldENsYXNzTmFtZSgpLFxuICAgICAgICBvbkNsaWNrOiB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcylcbiAgICAgIH0pO1xuXG4gICAgICBpZiAocHJvcHMuYWN0aXZlU3R5bGUgJiYgdGhpcy5nZXRBY3RpdmVTdGF0ZSgpKSBwcm9wcy5zdHlsZSA9IHByb3BzLmFjdGl2ZVN0eWxlO1xuXG4gICAgICByZXR1cm4gUmVhY3QuRE9NLmEocHJvcHMsIHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBMaW5rO1xufSkoUmVhY3QuQ29tcG9uZW50KTtcblxuLy8gVE9ETzogSW5jbHVkZSB0aGVzZSBpbiB0aGUgYWJvdmUgY2xhc3MgZGVmaW5pdGlvblxuLy8gb25jZSB3ZSBjYW4gdXNlIEVTNyBwcm9wZXJ0eSBpbml0aWFsaXplcnMuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYmFiZWwvYmFiZWwvaXNzdWVzLzYxOVxuXG5MaW5rLmNvbnRleHRUeXBlcyA9IHtcbiAgcm91dGVyOiBQcm9wVHlwZXMucm91dGVyLmlzUmVxdWlyZWRcbn07XG5cbkxpbmsucHJvcFR5cGVzID0ge1xuICBhY3RpdmVDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdG86IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5yb3V0ZV0pLmlzUmVxdWlyZWQsXG4gIHBhcmFtczogUHJvcFR5cGVzLm9iamVjdCxcbiAgcXVlcnk6IFByb3BUeXBlcy5vYmplY3QsXG4gIGFjdGl2ZVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuTGluay5kZWZhdWx0UHJvcHMgPSB7XG4gIGFjdGl2ZUNsYXNzTmFtZTogJ2FjdGl2ZScsXG4gIGNsYXNzTmFtZTogJydcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTGluazsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH07XG5cbnZhciBfaW5oZXJpdHMgPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9O1xuXG52YXIgUHJvcFR5cGVzID0gcmVxdWlyZSgnLi4vUHJvcFR5cGVzJyk7XG52YXIgUm91dGVIYW5kbGVyID0gcmVxdWlyZSgnLi9Sb3V0ZUhhbmRsZXInKTtcbnZhciBSb3V0ZSA9IHJlcXVpcmUoJy4vUm91dGUnKTtcblxuLyoqXG4gKiBBIDxOb3RGb3VuZFJvdXRlPiBpcyBhIHNwZWNpYWwga2luZCBvZiA8Um91dGU+IHRoYXRcbiAqIHJlbmRlcnMgd2hlbiB0aGUgYmVnaW5uaW5nIG9mIGl0cyBwYXJlbnQncyBwYXRoIG1hdGNoZXNcbiAqIGJ1dCBub25lIG9mIGl0cyBzaWJsaW5ncyBkbywgaW5jbHVkaW5nIGFueSA8RGVmYXVsdFJvdXRlPi5cbiAqIE9ubHkgb25lIHN1Y2ggcm91dGUgbWF5IGJlIHVzZWQgYXQgYW55IGdpdmVuIGxldmVsIGluIHRoZVxuICogcm91dGUgaGllcmFyY2h5LlxuICovXG5cbnZhciBOb3RGb3VuZFJvdXRlID0gKGZ1bmN0aW9uIChfUm91dGUpIHtcbiAgZnVuY3Rpb24gTm90Rm91bmRSb3V0ZSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTm90Rm91bmRSb3V0ZSk7XG5cbiAgICBpZiAoX1JvdXRlICE9IG51bGwpIHtcbiAgICAgIF9Sb3V0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIF9pbmhlcml0cyhOb3RGb3VuZFJvdXRlLCBfUm91dGUpO1xuXG4gIHJldHVybiBOb3RGb3VuZFJvdXRlO1xufSkoUm91dGUpO1xuXG4vLyBUT0RPOiBJbmNsdWRlIHRoZXNlIGluIHRoZSBhYm92ZSBjbGFzcyBkZWZpbml0aW9uXG4vLyBvbmNlIHdlIGNhbiB1c2UgRVM3IHByb3BlcnR5IGluaXRpYWxpemVycy5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9iYWJlbC9iYWJlbC9pc3N1ZXMvNjE5XG5cbk5vdEZvdW5kUm91dGUucHJvcFR5cGVzID0ge1xuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBwYXRoOiBQcm9wVHlwZXMuZmFsc3ksXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuZmFsc3ksXG4gIGhhbmRsZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5cbk5vdEZvdW5kUm91dGUuZGVmYXVsdFByb3BzID0ge1xuICBoYW5kbGVyOiBSb3V0ZUhhbmRsZXJcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTm90Rm91bmRSb3V0ZTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH07XG5cbnZhciBfaW5oZXJpdHMgPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9O1xuXG52YXIgUHJvcFR5cGVzID0gcmVxdWlyZSgnLi4vUHJvcFR5cGVzJyk7XG52YXIgUm91dGUgPSByZXF1aXJlKCcuL1JvdXRlJyk7XG5cbi8qKlxuICogQSA8UmVkaXJlY3Q+IGNvbXBvbmVudCBpcyBhIHNwZWNpYWwga2luZCBvZiA8Um91dGU+IHRoYXQgYWx3YXlzXG4gKiByZWRpcmVjdHMgdG8gYW5vdGhlciByb3V0ZSB3aGVuIGl0IG1hdGNoZXMuXG4gKi9cblxudmFyIFJlZGlyZWN0ID0gKGZ1bmN0aW9uIChfUm91dGUpIHtcbiAgZnVuY3Rpb24gUmVkaXJlY3QoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJlZGlyZWN0KTtcblxuICAgIGlmIChfUm91dGUgIT0gbnVsbCkge1xuICAgICAgX1JvdXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgX2luaGVyaXRzKFJlZGlyZWN0LCBfUm91dGUpO1xuXG4gIHJldHVybiBSZWRpcmVjdDtcbn0pKFJvdXRlKTtcblxuLy8gVE9ETzogSW5jbHVkZSB0aGVzZSBpbiB0aGUgYWJvdmUgY2xhc3MgZGVmaW5pdGlvblxuLy8gb25jZSB3ZSBjYW4gdXNlIEVTNyBwcm9wZXJ0eSBpbml0aWFsaXplcnMuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYmFiZWwvYmFiZWwvaXNzdWVzLzYxOVxuXG5SZWRpcmVjdC5wcm9wVHlwZXMgPSB7XG4gIHBhdGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGZyb206IFByb3BUeXBlcy5zdHJpbmcsIC8vIEFsaWFzIGZvciBwYXRoLlxuICB0bzogUHJvcFR5cGVzLnN0cmluZyxcbiAgaGFuZGxlcjogUHJvcFR5cGVzLmZhbHN5XG59O1xuXG4vLyBSZWRpcmVjdHMgc2hvdWxkIG5vdCBoYXZlIGEgZGVmYXVsdCBoYW5kbGVyXG5SZWRpcmVjdC5kZWZhdWx0UHJvcHMgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWRpcmVjdDsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbnZhciBfaW5oZXJpdHMgPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9O1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ3JlYWN0L2xpYi9pbnZhcmlhbnQnKTtcbnZhciBQcm9wVHlwZXMgPSByZXF1aXJlKCcuLi9Qcm9wVHlwZXMnKTtcbnZhciBSb3V0ZUhhbmRsZXIgPSByZXF1aXJlKCcuL1JvdXRlSGFuZGxlcicpO1xuXG4vKipcbiAqIDxSb3V0ZT4gY29tcG9uZW50cyBzcGVjaWZ5IGNvbXBvbmVudHMgdGhhdCBhcmUgcmVuZGVyZWQgdG8gdGhlIHBhZ2Ugd2hlbiB0aGVcbiAqIFVSTCBtYXRjaGVzIGEgZ2l2ZW4gcGF0dGVybi5cbiAqXG4gKiBSb3V0ZXMgYXJlIGFycmFuZ2VkIGluIGEgbmVzdGVkIHRyZWUgc3RydWN0dXJlLiBXaGVuIGEgbmV3IFVSTCBpcyByZXF1ZXN0ZWQsXG4gKiB0aGUgdHJlZSBpcyBzZWFyY2hlZCBkZXB0aC1maXJzdCB0byBmaW5kIGEgcm91dGUgd2hvc2UgcGF0aCBtYXRjaGVzIHRoZSBVUkwuXG4gKiBXaGVuIG9uZSBpcyBmb3VuZCwgYWxsIHJvdXRlcyBpbiB0aGUgdHJlZSB0aGF0IGxlYWQgdG8gaXQgYXJlIGNvbnNpZGVyZWRcbiAqIFwiYWN0aXZlXCIgYW5kIHRoZWlyIGNvbXBvbmVudHMgYXJlIHJlbmRlcmVkIGludG8gdGhlIERPTSwgbmVzdGVkIGluIHRoZSBzYW1lXG4gKiBvcmRlciBhcyB0aGV5IGFyZSBpbiB0aGUgdHJlZS5cbiAqXG4gKiBUaGUgcHJlZmVycmVkIHdheSB0byBjb25maWd1cmUgYSByb3V0ZXIgaXMgdXNpbmcgSlNYLiBUaGUgWE1MLWxpa2Ugc3ludGF4IGlzXG4gKiBhIGdyZWF0IHdheSB0byB2aXN1YWxpemUgaG93IHJvdXRlcyBhcmUgbGFpZCBvdXQgaW4gYW4gYXBwbGljYXRpb24uXG4gKlxuICogICB2YXIgcm91dGVzID0gW1xuICogICAgIDxSb3V0ZSBoYW5kbGVyPXtBcHB9PlxuICogICAgICAgPFJvdXRlIG5hbWU9XCJsb2dpblwiIGhhbmRsZXI9e0xvZ2lufS8+XG4gKiAgICAgICA8Um91dGUgbmFtZT1cImxvZ291dFwiIGhhbmRsZXI9e0xvZ291dH0vPlxuICogICAgICAgPFJvdXRlIG5hbWU9XCJhYm91dFwiIGhhbmRsZXI9e0Fib3V0fS8+XG4gKiAgICAgPC9Sb3V0ZT5cbiAqICAgXTtcbiAqICAgXG4gKiAgIFJvdXRlci5ydW4ocm91dGVzLCBmdW5jdGlvbiAoSGFuZGxlcikge1xuICogICAgIFJlYWN0LnJlbmRlcig8SGFuZGxlci8+LCBkb2N1bWVudC5ib2R5KTtcbiAqICAgfSk7XG4gKlxuICogSGFuZGxlcnMgZm9yIFJvdXRlIGNvbXBvbmVudHMgdGhhdCBjb250YWluIGNoaWxkcmVuIGNhbiByZW5kZXIgdGhlaXIgYWN0aXZlXG4gKiBjaGlsZCByb3V0ZSB1c2luZyBhIDxSb3V0ZUhhbmRsZXI+IGVsZW1lbnQuXG4gKlxuICogICB2YXIgQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICogICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICogICAgICAgcmV0dXJuIChcbiAqICAgICAgICAgPGRpdiBjbGFzcz1cImFwcGxpY2F0aW9uXCI+XG4gKiAgICAgICAgICAgPFJvdXRlSGFuZGxlci8+XG4gKiAgICAgICAgIDwvZGl2PlxuICogICAgICAgKTtcbiAqICAgICB9XG4gKiAgIH0pO1xuICpcbiAqIElmIG5vIGhhbmRsZXIgaXMgcHJvdmlkZWQgZm9yIHRoZSByb3V0ZSwgaXQgd2lsbCByZW5kZXIgYSBtYXRjaGVkIGNoaWxkIHJvdXRlLlxuICovXG5cbnZhciBSb3V0ZSA9IChmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBmdW5jdGlvbiBSb3V0ZSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUm91dGUpO1xuXG4gICAgaWYgKF9SZWFjdCRDb21wb25lbnQgIT0gbnVsbCkge1xuICAgICAgX1JlYWN0JENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIF9pbmhlcml0cyhSb3V0ZSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgX2NyZWF0ZUNsYXNzKFJvdXRlLCBbe1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIGludmFyaWFudChmYWxzZSwgJyVzIGVsZW1lbnRzIGFyZSBmb3Igcm91dGVyIGNvbmZpZ3VyYXRpb24gb25seSBhbmQgc2hvdWxkIG5vdCBiZSByZW5kZXJlZCcsIHRoaXMuY29uc3RydWN0b3IubmFtZSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFJvdXRlO1xufSkoUmVhY3QuQ29tcG9uZW50KTtcblxuLy8gVE9ETzogSW5jbHVkZSB0aGVzZSBpbiB0aGUgYWJvdmUgY2xhc3MgZGVmaW5pdGlvblxuLy8gb25jZSB3ZSBjYW4gdXNlIEVTNyBwcm9wZXJ0eSBpbml0aWFsaXplcnMuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYmFiZWwvYmFiZWwvaXNzdWVzLzYxOVxuXG5Sb3V0ZS5wcm9wVHlwZXMgPSB7XG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHBhdGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGhhbmRsZXI6IFByb3BUeXBlcy5mdW5jLFxuICBpZ25vcmVTY3JvbGxCZWhhdmlvcjogUHJvcFR5cGVzLmJvb2xcbn07XG5cblJvdXRlLmRlZmF1bHRQcm9wcyA9IHtcbiAgaGFuZGxlcjogUm91dGVIYW5kbGVyXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJvdXRlOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9jbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxudmFyIF9pbmhlcml0cyA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH07XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgQ29udGV4dFdyYXBwZXIgPSByZXF1aXJlKCcuL0NvbnRleHRXcmFwcGVyJyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgncmVhY3QvbGliL09iamVjdC5hc3NpZ24nKTtcbnZhciBQcm9wVHlwZXMgPSByZXF1aXJlKCcuLi9Qcm9wVHlwZXMnKTtcblxudmFyIFJFRl9OQU1FID0gJ19fcm91dGVIYW5kbGVyX18nO1xuXG4vKipcbiAqIEEgPFJvdXRlSGFuZGxlcj4gY29tcG9uZW50IHJlbmRlcnMgdGhlIGFjdGl2ZSBjaGlsZCByb3V0ZSBoYW5kbGVyXG4gKiB3aGVuIHJvdXRlcyBhcmUgbmVzdGVkLlxuICovXG5cbnZhciBSb3V0ZUhhbmRsZXIgPSAoZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgZnVuY3Rpb24gUm91dGVIYW5kbGVyKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSb3V0ZUhhbmRsZXIpO1xuXG4gICAgaWYgKF9SZWFjdCRDb21wb25lbnQgIT0gbnVsbCkge1xuICAgICAgX1JlYWN0JENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIF9pbmhlcml0cyhSb3V0ZUhhbmRsZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIF9jcmVhdGVDbGFzcyhSb3V0ZUhhbmRsZXIsIFt7XG4gICAga2V5OiAnZ2V0Q2hpbGRDb250ZXh0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcm91dGVEZXB0aDogdGhpcy5jb250ZXh0LnJvdXRlRGVwdGggKyAxXG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLl91cGRhdGVSb3V0ZUNvbXBvbmVudCh0aGlzLnJlZnNbUkVGX05BTUVdKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnREaWRVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICB0aGlzLl91cGRhdGVSb3V0ZUNvbXBvbmVudCh0aGlzLnJlZnNbUkVGX05BTUVdKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5fdXBkYXRlUm91dGVDb21wb25lbnQobnVsbCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnX3VwZGF0ZVJvdXRlQ29tcG9uZW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3VwZGF0ZVJvdXRlQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgICAgdGhpcy5jb250ZXh0LnJvdXRlci5zZXRSb3V0ZUNvbXBvbmVudEF0RGVwdGgodGhpcy5nZXRSb3V0ZURlcHRoKCksIGNvbXBvbmVudCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0Um91dGVEZXB0aCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFJvdXRlRGVwdGgoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnJvdXRlRGVwdGg7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY3JlYXRlQ2hpbGRSb3V0ZUhhbmRsZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVDaGlsZFJvdXRlSGFuZGxlcihwcm9wcykge1xuICAgICAgdmFyIHJvdXRlID0gdGhpcy5jb250ZXh0LnJvdXRlci5nZXRSb3V0ZUF0RGVwdGgodGhpcy5nZXRSb3V0ZURlcHRoKCkpO1xuXG4gICAgICBpZiAocm91dGUgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH12YXIgY2hpbGRQcm9wcyA9IGFzc2lnbih7fSwgcHJvcHMgfHwgdGhpcy5wcm9wcywge1xuICAgICAgICByZWY6IFJFRl9OQU1FLFxuICAgICAgICBwYXJhbXM6IHRoaXMuY29udGV4dC5yb3V0ZXIuZ2V0Q3VycmVudFBhcmFtcygpLFxuICAgICAgICBxdWVyeTogdGhpcy5jb250ZXh0LnJvdXRlci5nZXRDdXJyZW50UXVlcnkoKVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KHJvdXRlLmhhbmRsZXIsIGNoaWxkUHJvcHMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBoYW5kbGVyID0gdGhpcy5jcmVhdGVDaGlsZFJvdXRlSGFuZGxlcigpO1xuICAgICAgLy8gPHNjcmlwdC8+IGZvciB0aGluZ3MgbGlrZSA8Q1NTVHJhbnNpdGlvbkdyb3VwLz4gdGhhdCBkb24ndCBsaWtlIG51bGxcbiAgICAgIHJldHVybiBoYW5kbGVyID8gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgQ29udGV4dFdyYXBwZXIsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGhhbmRsZXJcbiAgICAgICkgOiBSZWFjdC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnLCBudWxsKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUm91dGVIYW5kbGVyO1xufSkoUmVhY3QuQ29tcG9uZW50KTtcblxuLy8gVE9ETzogSW5jbHVkZSB0aGVzZSBpbiB0aGUgYWJvdmUgY2xhc3MgZGVmaW5pdGlvblxuLy8gb25jZSB3ZSBjYW4gdXNlIEVTNyBwcm9wZXJ0eSBpbml0aWFsaXplcnMuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYmFiZWwvYmFiZWwvaXNzdWVzLzYxOVxuXG5Sb3V0ZUhhbmRsZXIuY29udGV4dFR5cGVzID0ge1xuICByb3V0ZURlcHRoOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHJvdXRlcjogUHJvcFR5cGVzLnJvdXRlci5pc1JlcXVpcmVkXG59O1xuXG5Sb3V0ZUhhbmRsZXIuY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gIHJvdXRlRGVwdGg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSb3V0ZUhhbmRsZXI7IiwiLyoganNoaW50IC1XMDU4ICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgd2FybmluZyA9IHJlcXVpcmUoJ3JlYWN0L2xpYi93YXJuaW5nJyk7XG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgncmVhY3QvbGliL2ludmFyaWFudCcpO1xudmFyIGNhblVzZURPTSA9IHJlcXVpcmUoJ3JlYWN0L2xpYi9FeGVjdXRpb25FbnZpcm9ubWVudCcpLmNhblVzZURPTTtcbnZhciBMb2NhdGlvbkFjdGlvbnMgPSByZXF1aXJlKCcuL2FjdGlvbnMvTG9jYXRpb25BY3Rpb25zJyk7XG52YXIgSW1pdGF0ZUJyb3dzZXJCZWhhdmlvciA9IHJlcXVpcmUoJy4vYmVoYXZpb3JzL0ltaXRhdGVCcm93c2VyQmVoYXZpb3InKTtcbnZhciBIYXNoTG9jYXRpb24gPSByZXF1aXJlKCcuL2xvY2F0aW9ucy9IYXNoTG9jYXRpb24nKTtcbnZhciBIaXN0b3J5TG9jYXRpb24gPSByZXF1aXJlKCcuL2xvY2F0aW9ucy9IaXN0b3J5TG9jYXRpb24nKTtcbnZhciBSZWZyZXNoTG9jYXRpb24gPSByZXF1aXJlKCcuL2xvY2F0aW9ucy9SZWZyZXNoTG9jYXRpb24nKTtcbnZhciBTdGF0aWNMb2NhdGlvbiA9IHJlcXVpcmUoJy4vbG9jYXRpb25zL1N0YXRpY0xvY2F0aW9uJyk7XG52YXIgU2Nyb2xsSGlzdG9yeSA9IHJlcXVpcmUoJy4vU2Nyb2xsSGlzdG9yeScpO1xudmFyIGNyZWF0ZVJvdXRlc0Zyb21SZWFjdENoaWxkcmVuID0gcmVxdWlyZSgnLi9jcmVhdGVSb3V0ZXNGcm9tUmVhY3RDaGlsZHJlbicpO1xudmFyIGlzUmVhY3RDaGlsZHJlbiA9IHJlcXVpcmUoJy4vaXNSZWFjdENoaWxkcmVuJyk7XG52YXIgVHJhbnNpdGlvbiA9IHJlcXVpcmUoJy4vVHJhbnNpdGlvbicpO1xudmFyIFByb3BUeXBlcyA9IHJlcXVpcmUoJy4vUHJvcFR5cGVzJyk7XG52YXIgUmVkaXJlY3QgPSByZXF1aXJlKCcuL1JlZGlyZWN0Jyk7XG52YXIgSGlzdG9yeSA9IHJlcXVpcmUoJy4vSGlzdG9yeScpO1xudmFyIENhbmNlbGxhdGlvbiA9IHJlcXVpcmUoJy4vQ2FuY2VsbGF0aW9uJyk7XG52YXIgTWF0Y2ggPSByZXF1aXJlKCcuL01hdGNoJyk7XG52YXIgUm91dGUgPSByZXF1aXJlKCcuL1JvdXRlJyk7XG52YXIgc3VwcG9ydHNIaXN0b3J5ID0gcmVxdWlyZSgnLi9zdXBwb3J0c0hpc3RvcnknKTtcbnZhciBQYXRoVXRpbHMgPSByZXF1aXJlKCcuL1BhdGhVdGlscycpO1xuXG4vKipcbiAqIFRoZSBkZWZhdWx0IGxvY2F0aW9uIGZvciBuZXcgcm91dGVycy5cbiAqL1xudmFyIERFRkFVTFRfTE9DQVRJT04gPSBjYW5Vc2VET00gPyBIYXNoTG9jYXRpb24gOiAnLyc7XG5cbi8qKlxuICogVGhlIGRlZmF1bHQgc2Nyb2xsIGJlaGF2aW9yIGZvciBuZXcgcm91dGVycy5cbiAqL1xudmFyIERFRkFVTFRfU0NST0xMX0JFSEFWSU9SID0gY2FuVXNlRE9NID8gSW1pdGF0ZUJyb3dzZXJCZWhhdmlvciA6IG51bGw7XG5cbmZ1bmN0aW9uIGhhc1Byb3BlcnRpZXMob2JqZWN0LCBwcm9wZXJ0aWVzKSB7XG4gIGZvciAodmFyIHByb3BlcnR5TmFtZSBpbiBwcm9wZXJ0aWVzKSBpZiAocHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eU5hbWUpICYmIG9iamVjdFtwcm9wZXJ0eU5hbWVdICE9PSBwcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV0pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1yZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gaGFzTWF0Y2gocm91dGVzLCByb3V0ZSwgcHJldlBhcmFtcywgbmV4dFBhcmFtcywgcHJldlF1ZXJ5LCBuZXh0UXVlcnkpIHtcbiAgcmV0dXJuIHJvdXRlcy5zb21lKGZ1bmN0aW9uIChyKSB7XG4gICAgaWYgKHIgIT09IHJvdXRlKSByZXR1cm4gZmFsc2U7XG5cbiAgICB2YXIgcGFyYW1OYW1lcyA9IHJvdXRlLnBhcmFtTmFtZXM7XG4gICAgdmFyIHBhcmFtTmFtZTtcblxuICAgIC8vIEVuc3VyZSB0aGF0IGFsbCBwYXJhbXMgdGhlIHJvdXRlIGNhcmVzIGFib3V0IGRpZCBub3QgY2hhbmdlLlxuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBwYXJhbU5hbWVzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICBwYXJhbU5hbWUgPSBwYXJhbU5hbWVzW2ldO1xuXG4gICAgICBpZiAobmV4dFBhcmFtc1twYXJhbU5hbWVdICE9PSBwcmV2UGFyYW1zW3BhcmFtTmFtZV0pIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBFbnN1cmUgdGhlIHF1ZXJ5IGhhc24ndCBjaGFuZ2VkLlxuICAgIHJldHVybiBoYXNQcm9wZXJ0aWVzKHByZXZRdWVyeSwgbmV4dFF1ZXJ5KSAmJiBoYXNQcm9wZXJ0aWVzKG5leHRRdWVyeSwgcHJldlF1ZXJ5KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZFJvdXRlc1RvTmFtZWRSb3V0ZXMocm91dGVzLCBuYW1lZFJvdXRlcykge1xuICB2YXIgcm91dGU7XG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSByb3V0ZXMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICByb3V0ZSA9IHJvdXRlc1tpXTtcblxuICAgIGlmIChyb3V0ZS5uYW1lKSB7XG4gICAgICBpbnZhcmlhbnQobmFtZWRSb3V0ZXNbcm91dGUubmFtZV0gPT0gbnVsbCwgJ1lvdSBtYXkgbm90IGhhdmUgbW9yZSB0aGFuIG9uZSByb3V0ZSBuYW1lZCBcIiVzXCInLCByb3V0ZS5uYW1lKTtcblxuICAgICAgbmFtZWRSb3V0ZXNbcm91dGUubmFtZV0gPSByb3V0ZTtcbiAgICB9XG5cbiAgICBpZiAocm91dGUuY2hpbGRSb3V0ZXMpIGFkZFJvdXRlc1RvTmFtZWRSb3V0ZXMocm91dGUuY2hpbGRSb3V0ZXMsIG5hbWVkUm91dGVzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByb3V0ZUlzQWN0aXZlKGFjdGl2ZVJvdXRlcywgcm91dGVOYW1lKSB7XG4gIHJldHVybiBhY3RpdmVSb3V0ZXMuc29tZShmdW5jdGlvbiAocm91dGUpIHtcbiAgICByZXR1cm4gcm91dGUubmFtZSA9PT0gcm91dGVOYW1lO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcGFyYW1zQXJlQWN0aXZlKGFjdGl2ZVBhcmFtcywgcGFyYW1zKSB7XG4gIGZvciAodmFyIHByb3BlcnR5IGluIHBhcmFtcykgaWYgKFN0cmluZyhhY3RpdmVQYXJhbXNbcHJvcGVydHldKSAhPT0gU3RyaW5nKHBhcmFtc1twcm9wZXJ0eV0pKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9cmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIHF1ZXJ5SXNBY3RpdmUoYWN0aXZlUXVlcnksIHF1ZXJ5KSB7XG4gIGZvciAodmFyIHByb3BlcnR5IGluIHF1ZXJ5KSBpZiAoU3RyaW5nKGFjdGl2ZVF1ZXJ5W3Byb3BlcnR5XSkgIT09IFN0cmluZyhxdWVyeVtwcm9wZXJ0eV0pKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9cmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbmQgcmV0dXJucyBhIG5ldyByb3V0ZXIgdXNpbmcgdGhlIGdpdmVuIG9wdGlvbnMuIEEgcm91dGVyXG4gKiBpcyBhIFJlYWN0Q29tcG9uZW50IGNsYXNzIHRoYXQga25vd3MgaG93IHRvIHJlYWN0IHRvIGNoYW5nZXMgaW4gdGhlXG4gKiBVUkwgYW5kIGtlZXAgdGhlIGNvbnRlbnRzIG9mIHRoZSBwYWdlIGluIHN5bmMuXG4gKlxuICogT3B0aW9ucyBtYXkgYmUgYW55IG9mIHRoZSBmb2xsb3dpbmc6XG4gKlxuICogLSByb3V0ZXMgICAgICAgICAgIChyZXF1aXJlZCkgVGhlIHJvdXRlIGNvbmZpZ1xuICogLSBsb2NhdGlvbiAgICAgICAgIFRoZSBsb2NhdGlvbiB0byB1c2UuIERlZmF1bHRzIHRvIEhhc2hMb2NhdGlvbiB3aGVuXG4gKiAgICAgICAgICAgICAgICAgICAgdGhlIERPTSBpcyBhdmFpbGFibGUsIFwiL1wiIG90aGVyd2lzZVxuICogLSBzY3JvbGxCZWhhdmlvciAgIFRoZSBzY3JvbGwgYmVoYXZpb3IgdG8gdXNlLiBEZWZhdWx0cyB0byBJbWl0YXRlQnJvd3NlckJlaGF2aW9yXG4gKiAgICAgICAgICAgICAgICAgICAgd2hlbiB0aGUgRE9NIGlzIGF2YWlsYWJsZSwgbnVsbCBvdGhlcndpc2VcbiAqIC0gb25FcnJvciAgICAgICAgICBBIGZ1bmN0aW9uIHRoYXQgaXMgdXNlZCB0byBoYW5kbGUgZXJyb3JzXG4gKiAtIG9uQWJvcnQgICAgICAgICAgQSBmdW5jdGlvbiB0aGF0IGlzIHVzZWQgdG8gaGFuZGxlIGFib3J0ZWQgdHJhbnNpdGlvbnNcbiAqXG4gKiBXaGVuIHJlbmRlcmluZyBpbiBhIHNlcnZlci1zaWRlIGVudmlyb25tZW50LCB0aGUgbG9jYXRpb24gc2hvdWxkIHNpbXBseVxuICogYmUgdGhlIFVSTCBwYXRoIHRoYXQgd2FzIHVzZWQgaW4gdGhlIHJlcXVlc3QsIGluY2x1ZGluZyB0aGUgcXVlcnkgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBjcmVhdGVSb3V0ZXIob3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICBpZiAoaXNSZWFjdENoaWxkcmVuKG9wdGlvbnMpKSBvcHRpb25zID0geyByb3V0ZXM6IG9wdGlvbnMgfTtcblxuICB2YXIgbW91bnRlZENvbXBvbmVudHMgPSBbXTtcbiAgdmFyIGxvY2F0aW9uID0gb3B0aW9ucy5sb2NhdGlvbiB8fCBERUZBVUxUX0xPQ0FUSU9OO1xuICB2YXIgc2Nyb2xsQmVoYXZpb3IgPSBvcHRpb25zLnNjcm9sbEJlaGF2aW9yIHx8IERFRkFVTFRfU0NST0xMX0JFSEFWSU9SO1xuICB2YXIgc3RhdGUgPSB7fTtcbiAgdmFyIG5leHRTdGF0ZSA9IHt9O1xuICB2YXIgcGVuZGluZ1RyYW5zaXRpb24gPSBudWxsO1xuICB2YXIgZGlzcGF0Y2hIYW5kbGVyID0gbnVsbDtcblxuICBpZiAodHlwZW9mIGxvY2F0aW9uID09PSAnc3RyaW5nJykgbG9jYXRpb24gPSBuZXcgU3RhdGljTG9jYXRpb24obG9jYXRpb24pO1xuXG4gIGlmIChsb2NhdGlvbiBpbnN0YW5jZW9mIFN0YXRpY0xvY2F0aW9uKSB7XG4gICAgd2FybmluZyghY2FuVXNlRE9NIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAndGVzdCcsICdZb3Ugc2hvdWxkIG5vdCB1c2UgYSBzdGF0aWMgbG9jYXRpb24gaW4gYSBET00gZW52aXJvbm1lbnQgYmVjYXVzZSAnICsgJ3RoZSByb3V0ZXIgd2lsbCBub3QgYmUga2VwdCBpbiBzeW5jIHdpdGggdGhlIGN1cnJlbnQgVVJMJyk7XG4gIH0gZWxzZSB7XG4gICAgaW52YXJpYW50KGNhblVzZURPTSB8fCBsb2NhdGlvbi5uZWVkc0RPTSA9PT0gZmFsc2UsICdZb3UgY2Fubm90IHVzZSAlcyB3aXRob3V0IGEgRE9NJywgbG9jYXRpb24pO1xuICB9XG5cbiAgLy8gQXV0b21hdGljYWxseSBmYWxsIGJhY2sgdG8gZnVsbCBwYWdlIHJlZnJlc2hlcyBpblxuICAvLyBicm93c2VycyB0aGF0IGRvbid0IHN1cHBvcnQgdGhlIEhUTUwgaGlzdG9yeSBBUEkuXG4gIGlmIChsb2NhdGlvbiA9PT0gSGlzdG9yeUxvY2F0aW9uICYmICFzdXBwb3J0c0hpc3RvcnkoKSkgbG9jYXRpb24gPSBSZWZyZXNoTG9jYXRpb247XG5cbiAgdmFyIFJvdXRlciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICAgIGRpc3BsYXlOYW1lOiAnUm91dGVyJyxcblxuICAgIHN0YXRpY3M6IHtcblxuICAgICAgaXNSdW5uaW5nOiBmYWxzZSxcblxuICAgICAgY2FuY2VsUGVuZGluZ1RyYW5zaXRpb246IGZ1bmN0aW9uIGNhbmNlbFBlbmRpbmdUcmFuc2l0aW9uKCkge1xuICAgICAgICBpZiAocGVuZGluZ1RyYW5zaXRpb24pIHtcbiAgICAgICAgICBwZW5kaW5nVHJhbnNpdGlvbi5jYW5jZWwoKTtcbiAgICAgICAgICBwZW5kaW5nVHJhbnNpdGlvbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIGNsZWFyQWxsUm91dGVzOiBmdW5jdGlvbiBjbGVhckFsbFJvdXRlcygpIHtcbiAgICAgICAgUm91dGVyLmNhbmNlbFBlbmRpbmdUcmFuc2l0aW9uKCk7XG4gICAgICAgIFJvdXRlci5uYW1lZFJvdXRlcyA9IHt9O1xuICAgICAgICBSb3V0ZXIucm91dGVzID0gW107XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEFkZHMgcm91dGVzIHRvIHRoaXMgcm91dGVyIGZyb20gdGhlIGdpdmVuIGNoaWxkcmVuIG9iamVjdCAoc2VlIFJlYWN0Q2hpbGRyZW4pLlxuICAgICAgICovXG4gICAgICBhZGRSb3V0ZXM6IGZ1bmN0aW9uIGFkZFJvdXRlcyhyb3V0ZXMpIHtcbiAgICAgICAgaWYgKGlzUmVhY3RDaGlsZHJlbihyb3V0ZXMpKSByb3V0ZXMgPSBjcmVhdGVSb3V0ZXNGcm9tUmVhY3RDaGlsZHJlbihyb3V0ZXMpO1xuXG4gICAgICAgIGFkZFJvdXRlc1RvTmFtZWRSb3V0ZXMocm91dGVzLCBSb3V0ZXIubmFtZWRSb3V0ZXMpO1xuXG4gICAgICAgIFJvdXRlci5yb3V0ZXMucHVzaC5hcHBseShSb3V0ZXIucm91dGVzLCByb3V0ZXMpO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBSZXBsYWNlcyByb3V0ZXMgb2YgdGhpcyByb3V0ZXIgZnJvbSB0aGUgZ2l2ZW4gY2hpbGRyZW4gb2JqZWN0IChzZWUgUmVhY3RDaGlsZHJlbikuXG4gICAgICAgKi9cbiAgICAgIHJlcGxhY2VSb3V0ZXM6IGZ1bmN0aW9uIHJlcGxhY2VSb3V0ZXMocm91dGVzKSB7XG4gICAgICAgIFJvdXRlci5jbGVhckFsbFJvdXRlcygpO1xuICAgICAgICBSb3V0ZXIuYWRkUm91dGVzKHJvdXRlcyk7XG4gICAgICAgIFJvdXRlci5yZWZyZXNoKCk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFBlcmZvcm1zIGEgbWF0Y2ggb2YgdGhlIGdpdmVuIHBhdGggYWdhaW5zdCB0aGlzIHJvdXRlciBhbmQgcmV0dXJucyBhbiBvYmplY3RcbiAgICAgICAqIHdpdGggdGhlIHsgcm91dGVzLCBwYXJhbXMsIHBhdGhuYW1lLCBxdWVyeSB9IHRoYXQgbWF0Y2guIFJldHVybnMgbnVsbCBpZiBub1xuICAgICAgICogbWF0Y2ggY2FuIGJlIG1hZGUuXG4gICAgICAgKi9cbiAgICAgIG1hdGNoOiBmdW5jdGlvbiBtYXRjaChwYXRoKSB7XG4gICAgICAgIHJldHVybiBNYXRjaC5maW5kTWF0Y2goUm91dGVyLnJvdXRlcywgcGF0aCk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFJldHVybnMgYW4gYWJzb2x1dGUgVVJMIHBhdGggY3JlYXRlZCBmcm9tIHRoZSBnaXZlbiByb3V0ZVxuICAgICAgICogbmFtZSwgVVJMIHBhcmFtZXRlcnMsIGFuZCBxdWVyeS5cbiAgICAgICAqL1xuICAgICAgbWFrZVBhdGg6IGZ1bmN0aW9uIG1ha2VQYXRoKHRvLCBwYXJhbXMsIHF1ZXJ5KSB7XG4gICAgICAgIHZhciBwYXRoO1xuICAgICAgICBpZiAoUGF0aFV0aWxzLmlzQWJzb2x1dGUodG8pKSB7XG4gICAgICAgICAgcGF0aCA9IHRvO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciByb3V0ZSA9IHRvIGluc3RhbmNlb2YgUm91dGUgPyB0byA6IFJvdXRlci5uYW1lZFJvdXRlc1t0b107XG5cbiAgICAgICAgICBpbnZhcmlhbnQocm91dGUgaW5zdGFuY2VvZiBSb3V0ZSwgJ0Nhbm5vdCBmaW5kIGEgcm91dGUgbmFtZWQgXCIlc1wiJywgdG8pO1xuXG4gICAgICAgICAgcGF0aCA9IHJvdXRlLnBhdGg7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUGF0aFV0aWxzLndpdGhRdWVyeShQYXRoVXRpbHMuaW5qZWN0UGFyYW1zKHBhdGgsIHBhcmFtcyksIHF1ZXJ5KTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogUmV0dXJucyBhIHN0cmluZyB0aGF0IG1heSBzYWZlbHkgYmUgdXNlZCBhcyB0aGUgaHJlZiBvZiBhIGxpbmtcbiAgICAgICAqIHRvIHRoZSByb3V0ZSB3aXRoIHRoZSBnaXZlbiBuYW1lLCBVUkwgcGFyYW1ldGVycywgYW5kIHF1ZXJ5LlxuICAgICAgICovXG4gICAgICBtYWtlSHJlZjogZnVuY3Rpb24gbWFrZUhyZWYodG8sIHBhcmFtcywgcXVlcnkpIHtcbiAgICAgICAgdmFyIHBhdGggPSBSb3V0ZXIubWFrZVBhdGgodG8sIHBhcmFtcywgcXVlcnkpO1xuICAgICAgICByZXR1cm4gbG9jYXRpb24gPT09IEhhc2hMb2NhdGlvbiA/ICcjJyArIHBhdGggOiBwYXRoO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBUcmFuc2l0aW9ucyB0byB0aGUgVVJMIHNwZWNpZmllZCBpbiB0aGUgYXJndW1lbnRzIGJ5IHB1c2hpbmdcbiAgICAgICAqIGEgbmV3IFVSTCBvbnRvIHRoZSBoaXN0b3J5IHN0YWNrLlxuICAgICAgICovXG4gICAgICB0cmFuc2l0aW9uVG86IGZ1bmN0aW9uIHRyYW5zaXRpb25Ubyh0bywgcGFyYW1zLCBxdWVyeSkge1xuICAgICAgICB2YXIgcGF0aCA9IFJvdXRlci5tYWtlUGF0aCh0bywgcGFyYW1zLCBxdWVyeSk7XG5cbiAgICAgICAgaWYgKHBlbmRpbmdUcmFuc2l0aW9uKSB7XG4gICAgICAgICAgLy8gUmVwbGFjZSBzbyBwZW5kaW5nIGxvY2F0aW9uIGRvZXMgbm90IHN0YXkgaW4gaGlzdG9yeS5cbiAgICAgICAgICBsb2NhdGlvbi5yZXBsYWNlKHBhdGgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxvY2F0aW9uLnB1c2gocGF0aCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVHJhbnNpdGlvbnMgdG8gdGhlIFVSTCBzcGVjaWZpZWQgaW4gdGhlIGFyZ3VtZW50cyBieSByZXBsYWNpbmdcbiAgICAgICAqIHRoZSBjdXJyZW50IFVSTCBpbiB0aGUgaGlzdG9yeSBzdGFjay5cbiAgICAgICAqL1xuICAgICAgcmVwbGFjZVdpdGg6IGZ1bmN0aW9uIHJlcGxhY2VXaXRoKHRvLCBwYXJhbXMsIHF1ZXJ5KSB7XG4gICAgICAgIGxvY2F0aW9uLnJlcGxhY2UoUm91dGVyLm1ha2VQYXRoKHRvLCBwYXJhbXMsIHF1ZXJ5KSk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRyYW5zaXRpb25zIHRvIHRoZSBwcmV2aW91cyBVUkwgaWYgb25lIGlzIGF2YWlsYWJsZS4gUmV0dXJucyB0cnVlIGlmIHRoZVxuICAgICAgICogcm91dGVyIHdhcyBhYmxlIHRvIGdvIGJhY2ssIGZhbHNlIG90aGVyd2lzZS5cbiAgICAgICAqXG4gICAgICAgKiBOb3RlOiBUaGUgcm91dGVyIG9ubHkgdHJhY2tzIGhpc3RvcnkgZW50cmllcyBpbiB5b3VyIGFwcGxpY2F0aW9uLCBub3QgdGhlXG4gICAgICAgKiBjdXJyZW50IGJyb3dzZXIgc2Vzc2lvbiwgc28geW91IGNhbiBzYWZlbHkgY2FsbCB0aGlzIGZ1bmN0aW9uIHdpdGhvdXQgZ3VhcmRpbmdcbiAgICAgICAqIGFnYWluc3Qgc2VuZGluZyB0aGUgdXNlciBiYWNrIHRvIHNvbWUgb3RoZXIgc2l0ZS4gSG93ZXZlciwgd2hlbiB1c2luZ1xuICAgICAgICogUmVmcmVzaExvY2F0aW9uICh3aGljaCBpcyB0aGUgZmFsbGJhY2sgZm9yIEhpc3RvcnlMb2NhdGlvbiBpbiBicm93c2VycyB0aGF0XG4gICAgICAgKiBkb24ndCBzdXBwb3J0IEhUTUw1IGhpc3RvcnkpIHRoaXMgbWV0aG9kIHdpbGwgKmFsd2F5cyogc2VuZCB0aGUgY2xpZW50IGJhY2tcbiAgICAgICAqIGJlY2F1c2Ugd2UgY2Fubm90IHJlbGlhYmx5IHRyYWNrIGhpc3RvcnkgbGVuZ3RoLlxuICAgICAgICovXG4gICAgICBnb0JhY2s6IGZ1bmN0aW9uIGdvQmFjaygpIHtcbiAgICAgICAgaWYgKEhpc3RvcnkubGVuZ3RoID4gMSB8fCBsb2NhdGlvbiA9PT0gUmVmcmVzaExvY2F0aW9uKSB7XG4gICAgICAgICAgbG9jYXRpb24ucG9wKCk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB3YXJuaW5nKGZhbHNlLCAnZ29CYWNrKCkgd2FzIGlnbm9yZWQgYmVjYXVzZSB0aGVyZSBpcyBubyByb3V0ZXIgaGlzdG9yeScpO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0sXG5cbiAgICAgIGhhbmRsZUFib3J0OiBvcHRpb25zLm9uQWJvcnQgfHwgZnVuY3Rpb24gKGFib3J0UmVhc29uKSB7XG4gICAgICAgIGlmIChsb2NhdGlvbiBpbnN0YW5jZW9mIFN0YXRpY0xvY2F0aW9uKSB0aHJvdyBuZXcgRXJyb3IoJ1VuaGFuZGxlZCBhYm9ydGVkIHRyYW5zaXRpb24hIFJlYXNvbjogJyArIGFib3J0UmVhc29uKTtcblxuICAgICAgICBpZiAoYWJvcnRSZWFzb24gaW5zdGFuY2VvZiBDYW5jZWxsYXRpb24pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAoYWJvcnRSZWFzb24gaW5zdGFuY2VvZiBSZWRpcmVjdCkge1xuICAgICAgICAgIGxvY2F0aW9uLnJlcGxhY2UoUm91dGVyLm1ha2VQYXRoKGFib3J0UmVhc29uLnRvLCBhYm9ydFJlYXNvbi5wYXJhbXMsIGFib3J0UmVhc29uLnF1ZXJ5KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbG9jYXRpb24ucG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIGhhbmRsZUVycm9yOiBvcHRpb25zLm9uRXJyb3IgfHwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIC8vIFRocm93IHNvIHdlIGRvbid0IHNpbGVudGx5IHN3YWxsb3cgYXN5bmMgZXJyb3JzLlxuICAgICAgICB0aHJvdyBlcnJvcjsgLy8gVGhpcyBlcnJvciBwcm9iYWJseSBvcmlnaW5hdGVkIGluIGEgdHJhbnNpdGlvbiBob29rLlxuICAgICAgfSxcblxuICAgICAgaGFuZGxlTG9jYXRpb25DaGFuZ2U6IGZ1bmN0aW9uIGhhbmRsZUxvY2F0aW9uQ2hhbmdlKGNoYW5nZSkge1xuICAgICAgICBSb3V0ZXIuZGlzcGF0Y2goY2hhbmdlLnBhdGgsIGNoYW5nZS50eXBlKTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogUGVyZm9ybXMgYSB0cmFuc2l0aW9uIHRvIHRoZSBnaXZlbiBwYXRoIGFuZCBjYWxscyBjYWxsYmFjayhlcnJvciwgYWJvcnRSZWFzb24pXG4gICAgICAgKiB3aGVuIHRoZSB0cmFuc2l0aW9uIGlzIGZpbmlzaGVkLiBJZiBib3RoIGFyZ3VtZW50cyBhcmUgbnVsbCB0aGUgcm91dGVyJ3Mgc3RhdGVcbiAgICAgICAqIHdhcyB1cGRhdGVkLiBPdGhlcndpc2UgdGhlIHRyYW5zaXRpb24gZGlkIG5vdCBjb21wbGV0ZS5cbiAgICAgICAqXG4gICAgICAgKiBJbiBhIHRyYW5zaXRpb24sIGEgcm91dGVyIGZpcnN0IGRldGVybWluZXMgd2hpY2ggcm91dGVzIGFyZSBpbnZvbHZlZCBieSBiZWdpbm5pbmdcbiAgICAgICAqIHdpdGggdGhlIGN1cnJlbnQgcm91dGUsIHVwIHRoZSByb3V0ZSB0cmVlIHRvIHRoZSBmaXJzdCBwYXJlbnQgcm91dGUgdGhhdCBpcyBzaGFyZWRcbiAgICAgICAqIHdpdGggdGhlIGRlc3RpbmF0aW9uIHJvdXRlLCBhbmQgYmFjayBkb3duIHRoZSB0cmVlIHRvIHRoZSBkZXN0aW5hdGlvbiByb3V0ZS4gVGhlXG4gICAgICAgKiB3aWxsVHJhbnNpdGlvbkZyb20gaG9vayBpcyBpbnZva2VkIG9uIGFsbCByb3V0ZSBoYW5kbGVycyB3ZSdyZSB0cmFuc2l0aW9uaW5nIGF3YXlcbiAgICAgICAqIGZyb20sIGluIHJldmVyc2UgbmVzdGluZyBvcmRlci4gTGlrZXdpc2UsIHRoZSB3aWxsVHJhbnNpdGlvblRvIGhvb2sgaXMgaW52b2tlZCBvblxuICAgICAgICogYWxsIHJvdXRlIGhhbmRsZXJzIHdlJ3JlIHRyYW5zaXRpb25pbmcgdG8uXG4gICAgICAgKlxuICAgICAgICogQm90aCB3aWxsVHJhbnNpdGlvbkZyb20gYW5kIHdpbGxUcmFuc2l0aW9uVG8gaG9va3MgbWF5IGVpdGhlciBhYm9ydCBvciByZWRpcmVjdCB0aGVcbiAgICAgICAqIHRyYW5zaXRpb24uIFRvIHJlc29sdmUgYXN5bmNocm9ub3VzbHksIHRoZXkgbWF5IHVzZSB0aGUgY2FsbGJhY2sgYXJndW1lbnQuIElmIG5vXG4gICAgICAgKiBob29rcyB3YWl0LCB0aGUgdHJhbnNpdGlvbiBpcyBmdWxseSBzeW5jaHJvbm91cy5cbiAgICAgICAqL1xuICAgICAgZGlzcGF0Y2g6IGZ1bmN0aW9uIGRpc3BhdGNoKHBhdGgsIGFjdGlvbikge1xuICAgICAgICBSb3V0ZXIuY2FuY2VsUGVuZGluZ1RyYW5zaXRpb24oKTtcblxuICAgICAgICB2YXIgcHJldlBhdGggPSBzdGF0ZS5wYXRoO1xuICAgICAgICB2YXIgaXNSZWZyZXNoaW5nID0gYWN0aW9uID09IG51bGw7XG5cbiAgICAgICAgaWYgKHByZXZQYXRoID09PSBwYXRoICYmICFpc1JlZnJlc2hpbmcpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gLy8gTm90aGluZyB0byBkbyFcblxuICAgICAgICAvLyBSZWNvcmQgdGhlIHNjcm9sbCBwb3NpdGlvbiBhcyBlYXJseSBhcyBwb3NzaWJsZSB0b1xuICAgICAgICAvLyBnZXQgaXQgYmVmb3JlIGJyb3dzZXJzIHRyeSB1cGRhdGUgaXQgYXV0b21hdGljYWxseS5cbiAgICAgICAgaWYgKHByZXZQYXRoICYmIGFjdGlvbiA9PT0gTG9jYXRpb25BY3Rpb25zLlBVU0gpIFJvdXRlci5yZWNvcmRTY3JvbGxQb3NpdGlvbihwcmV2UGF0aCk7XG5cbiAgICAgICAgdmFyIG1hdGNoID0gUm91dGVyLm1hdGNoKHBhdGgpO1xuXG4gICAgICAgIHdhcm5pbmcobWF0Y2ggIT0gbnVsbCwgJ05vIHJvdXRlIG1hdGNoZXMgcGF0aCBcIiVzXCIuIE1ha2Ugc3VyZSB5b3UgaGF2ZSA8Um91dGUgcGF0aD1cIiVzXCI+IHNvbWV3aGVyZSBpbiB5b3VyIHJvdXRlcycsIHBhdGgsIHBhdGgpO1xuXG4gICAgICAgIGlmIChtYXRjaCA9PSBudWxsKSBtYXRjaCA9IHt9O1xuXG4gICAgICAgIHZhciBwcmV2Um91dGVzID0gc3RhdGUucm91dGVzIHx8IFtdO1xuICAgICAgICB2YXIgcHJldlBhcmFtcyA9IHN0YXRlLnBhcmFtcyB8fCB7fTtcbiAgICAgICAgdmFyIHByZXZRdWVyeSA9IHN0YXRlLnF1ZXJ5IHx8IHt9O1xuXG4gICAgICAgIHZhciBuZXh0Um91dGVzID0gbWF0Y2gucm91dGVzIHx8IFtdO1xuICAgICAgICB2YXIgbmV4dFBhcmFtcyA9IG1hdGNoLnBhcmFtcyB8fCB7fTtcbiAgICAgICAgdmFyIG5leHRRdWVyeSA9IG1hdGNoLnF1ZXJ5IHx8IHt9O1xuXG4gICAgICAgIHZhciBmcm9tUm91dGVzLCB0b1JvdXRlcztcbiAgICAgICAgaWYgKHByZXZSb3V0ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgZnJvbVJvdXRlcyA9IHByZXZSb3V0ZXMuZmlsdGVyKGZ1bmN0aW9uIChyb3V0ZSkge1xuICAgICAgICAgICAgcmV0dXJuICFoYXNNYXRjaChuZXh0Um91dGVzLCByb3V0ZSwgcHJldlBhcmFtcywgbmV4dFBhcmFtcywgcHJldlF1ZXJ5LCBuZXh0UXVlcnkpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdG9Sb3V0ZXMgPSBuZXh0Um91dGVzLmZpbHRlcihmdW5jdGlvbiAocm91dGUpIHtcbiAgICAgICAgICAgIHJldHVybiAhaGFzTWF0Y2gocHJldlJvdXRlcywgcm91dGUsIHByZXZQYXJhbXMsIG5leHRQYXJhbXMsIHByZXZRdWVyeSwgbmV4dFF1ZXJ5KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmcm9tUm91dGVzID0gW107XG4gICAgICAgICAgdG9Sb3V0ZXMgPSBuZXh0Um91dGVzO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRyYW5zaXRpb24gPSBuZXcgVHJhbnNpdGlvbihwYXRoLCBSb3V0ZXIucmVwbGFjZVdpdGguYmluZChSb3V0ZXIsIHBhdGgpKTtcbiAgICAgICAgcGVuZGluZ1RyYW5zaXRpb24gPSB0cmFuc2l0aW9uO1xuXG4gICAgICAgIHZhciBmcm9tQ29tcG9uZW50cyA9IG1vdW50ZWRDb21wb25lbnRzLnNsaWNlKHByZXZSb3V0ZXMubGVuZ3RoIC0gZnJvbVJvdXRlcy5sZW5ndGgpO1xuXG4gICAgICAgIFRyYW5zaXRpb24uZnJvbSh0cmFuc2l0aW9uLCBmcm9tUm91dGVzLCBmcm9tQ29tcG9uZW50cywgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgaWYgKGVycm9yIHx8IHRyYW5zaXRpb24uYWJvcnRSZWFzb24pIHJldHVybiBkaXNwYXRjaEhhbmRsZXIuY2FsbChSb3V0ZXIsIGVycm9yLCB0cmFuc2l0aW9uKTsgLy8gTm8gbmVlZCB0byBjb250aW51ZS5cblxuICAgICAgICAgIFRyYW5zaXRpb24udG8odHJhbnNpdGlvbiwgdG9Sb3V0ZXMsIG5leHRQYXJhbXMsIG5leHRRdWVyeSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICBkaXNwYXRjaEhhbmRsZXIuY2FsbChSb3V0ZXIsIGVycm9yLCB0cmFuc2l0aW9uLCB7XG4gICAgICAgICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgICAgICAgIGFjdGlvbjogYWN0aW9uLFxuICAgICAgICAgICAgICBwYXRobmFtZTogbWF0Y2gucGF0aG5hbWUsXG4gICAgICAgICAgICAgIHJvdXRlczogbmV4dFJvdXRlcyxcbiAgICAgICAgICAgICAgcGFyYW1zOiBuZXh0UGFyYW1zLFxuICAgICAgICAgICAgICBxdWVyeTogbmV4dFF1ZXJ5XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFN0YXJ0cyB0aGlzIHJvdXRlciBhbmQgY2FsbHMgY2FsbGJhY2socm91dGVyLCBzdGF0ZSkgd2hlbiB0aGUgcm91dGUgY2hhbmdlcy5cbiAgICAgICAqXG4gICAgICAgKiBJZiB0aGUgcm91dGVyJ3MgbG9jYXRpb24gaXMgc3RhdGljIChpLmUuIGEgVVJMIHBhdGggaW4gYSBzZXJ2ZXIgZW52aXJvbm1lbnQpXG4gICAgICAgKiB0aGUgY2FsbGJhY2sgaXMgY2FsbGVkIG9ubHkgb25jZS4gT3RoZXJ3aXNlLCB0aGUgbG9jYXRpb24gc2hvdWxkIGJlIG9uZSBvZiB0aGVcbiAgICAgICAqIFJvdXRlci4qTG9jYXRpb24gb2JqZWN0cyAoZS5nLiBSb3V0ZXIuSGFzaExvY2F0aW9uIG9yIFJvdXRlci5IaXN0b3J5TG9jYXRpb24pLlxuICAgICAgICovXG4gICAgICBydW46IGZ1bmN0aW9uIHJ1bihjYWxsYmFjaykge1xuICAgICAgICBpbnZhcmlhbnQoIVJvdXRlci5pc1J1bm5pbmcsICdSb3V0ZXIgaXMgYWxyZWFkeSBydW5uaW5nJyk7XG5cbiAgICAgICAgZGlzcGF0Y2hIYW5kbGVyID0gZnVuY3Rpb24gKGVycm9yLCB0cmFuc2l0aW9uLCBuZXdTdGF0ZSkge1xuICAgICAgICAgIGlmIChlcnJvcikgUm91dGVyLmhhbmRsZUVycm9yKGVycm9yKTtcblxuICAgICAgICAgIGlmIChwZW5kaW5nVHJhbnNpdGlvbiAhPT0gdHJhbnNpdGlvbikgcmV0dXJuO1xuXG4gICAgICAgICAgcGVuZGluZ1RyYW5zaXRpb24gPSBudWxsO1xuXG4gICAgICAgICAgaWYgKHRyYW5zaXRpb24uYWJvcnRSZWFzb24pIHtcbiAgICAgICAgICAgIFJvdXRlci5oYW5kbGVBYm9ydCh0cmFuc2l0aW9uLmFib3J0UmVhc29uKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbChSb3V0ZXIsIFJvdXRlciwgbmV4dFN0YXRlID0gbmV3U3RhdGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoIShsb2NhdGlvbiBpbnN0YW5jZW9mIFN0YXRpY0xvY2F0aW9uKSkge1xuICAgICAgICAgIGlmIChsb2NhdGlvbi5hZGRDaGFuZ2VMaXN0ZW5lcikgbG9jYXRpb24uYWRkQ2hhbmdlTGlzdGVuZXIoUm91dGVyLmhhbmRsZUxvY2F0aW9uQ2hhbmdlKTtcblxuICAgICAgICAgIFJvdXRlci5pc1J1bm5pbmcgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQm9vdHN0cmFwIHVzaW5nIHRoZSBjdXJyZW50IHBhdGguXG4gICAgICAgIFJvdXRlci5yZWZyZXNoKCk7XG4gICAgICB9LFxuXG4gICAgICByZWZyZXNoOiBmdW5jdGlvbiByZWZyZXNoKCkge1xuICAgICAgICBSb3V0ZXIuZGlzcGF0Y2gobG9jYXRpb24uZ2V0Q3VycmVudFBhdGgoKSwgbnVsbCk7XG4gICAgICB9LFxuXG4gICAgICBzdG9wOiBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICBSb3V0ZXIuY2FuY2VsUGVuZGluZ1RyYW5zaXRpb24oKTtcblxuICAgICAgICBpZiAobG9jYXRpb24ucmVtb3ZlQ2hhbmdlTGlzdGVuZXIpIGxvY2F0aW9uLnJlbW92ZUNoYW5nZUxpc3RlbmVyKFJvdXRlci5oYW5kbGVMb2NhdGlvbkNoYW5nZSk7XG5cbiAgICAgICAgUm91dGVyLmlzUnVubmluZyA9IGZhbHNlO1xuICAgICAgfSxcblxuICAgICAgZ2V0TG9jYXRpb246IGZ1bmN0aW9uIGdldExvY2F0aW9uKCkge1xuICAgICAgICByZXR1cm4gbG9jYXRpb247XG4gICAgICB9LFxuXG4gICAgICBnZXRTY3JvbGxCZWhhdmlvcjogZnVuY3Rpb24gZ2V0U2Nyb2xsQmVoYXZpb3IoKSB7XG4gICAgICAgIHJldHVybiBzY3JvbGxCZWhhdmlvcjtcbiAgICAgIH0sXG5cbiAgICAgIGdldFJvdXRlQXREZXB0aDogZnVuY3Rpb24gZ2V0Um91dGVBdERlcHRoKHJvdXRlRGVwdGgpIHtcbiAgICAgICAgdmFyIHJvdXRlcyA9IHN0YXRlLnJvdXRlcztcbiAgICAgICAgcmV0dXJuIHJvdXRlcyAmJiByb3V0ZXNbcm91dGVEZXB0aF07XG4gICAgICB9LFxuXG4gICAgICBzZXRSb3V0ZUNvbXBvbmVudEF0RGVwdGg6IGZ1bmN0aW9uIHNldFJvdXRlQ29tcG9uZW50QXREZXB0aChyb3V0ZURlcHRoLCBjb21wb25lbnQpIHtcbiAgICAgICAgbW91bnRlZENvbXBvbmVudHNbcm91dGVEZXB0aF0gPSBjb21wb25lbnQ7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFJldHVybnMgdGhlIGN1cnJlbnQgVVJMIHBhdGggKyBxdWVyeSBzdHJpbmcuXG4gICAgICAgKi9cbiAgICAgIGdldEN1cnJlbnRQYXRoOiBmdW5jdGlvbiBnZXRDdXJyZW50UGF0aCgpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlLnBhdGg7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFJldHVybnMgdGhlIGN1cnJlbnQgVVJMIHBhdGggd2l0aG91dCB0aGUgcXVlcnkgc3RyaW5nLlxuICAgICAgICovXG4gICAgICBnZXRDdXJyZW50UGF0aG5hbWU6IGZ1bmN0aW9uIGdldEN1cnJlbnRQYXRobmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlLnBhdGhuYW1lO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBSZXR1cm5zIGFuIG9iamVjdCBvZiB0aGUgY3VycmVudGx5IGFjdGl2ZSBVUkwgcGFyYW1ldGVycy5cbiAgICAgICAqL1xuICAgICAgZ2V0Q3VycmVudFBhcmFtczogZnVuY3Rpb24gZ2V0Q3VycmVudFBhcmFtcygpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlLnBhcmFtcztcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogUmV0dXJucyBhbiBvYmplY3Qgb2YgdGhlIGN1cnJlbnRseSBhY3RpdmUgcXVlcnkgcGFyYW1ldGVycy5cbiAgICAgICAqL1xuICAgICAgZ2V0Q3VycmVudFF1ZXJ5OiBmdW5jdGlvbiBnZXRDdXJyZW50UXVlcnkoKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZS5xdWVyeTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogUmV0dXJucyBhbiBhcnJheSBvZiB0aGUgY3VycmVudGx5IGFjdGl2ZSByb3V0ZXMuXG4gICAgICAgKi9cbiAgICAgIGdldEN1cnJlbnRSb3V0ZXM6IGZ1bmN0aW9uIGdldEN1cnJlbnRSb3V0ZXMoKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZS5yb3V0ZXM7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gcm91dGUsIHBhcmFtcywgYW5kIHF1ZXJ5IGFyZSBhY3RpdmUuXG4gICAgICAgKi9cbiAgICAgIGlzQWN0aXZlOiBmdW5jdGlvbiBpc0FjdGl2ZSh0bywgcGFyYW1zLCBxdWVyeSkge1xuICAgICAgICBpZiAoUGF0aFV0aWxzLmlzQWJzb2x1dGUodG8pKSB7XG4gICAgICAgICAgcmV0dXJuIHRvID09PSBzdGF0ZS5wYXRoO1xuICAgICAgICB9cmV0dXJuIHJvdXRlSXNBY3RpdmUoc3RhdGUucm91dGVzLCB0bykgJiYgcGFyYW1zQXJlQWN0aXZlKHN0YXRlLnBhcmFtcywgcGFyYW1zKSAmJiAocXVlcnkgPT0gbnVsbCB8fCBxdWVyeUlzQWN0aXZlKHN0YXRlLnF1ZXJ5LCBxdWVyeSkpO1xuICAgICAgfVxuXG4gICAgfSxcblxuICAgIG1peGluczogW1Njcm9sbEhpc3RvcnldLFxuXG4gICAgcHJvcFR5cGVzOiB7XG4gICAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmZhbHN5XG4gICAgfSxcblxuICAgIGNoaWxkQ29udGV4dFR5cGVzOiB7XG4gICAgICByb3V0ZURlcHRoOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICByb3V0ZXI6IFByb3BUeXBlcy5yb3V0ZXIuaXNSZXF1aXJlZFxuICAgIH0sXG5cbiAgICBnZXRDaGlsZENvbnRleHQ6IGZ1bmN0aW9uIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJvdXRlRGVwdGg6IDEsXG4gICAgICAgIHJvdXRlcjogUm91dGVyXG4gICAgICB9O1xuICAgIH0sXG5cbiAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICAgIHJldHVybiBzdGF0ZSA9IG5leHRTdGF0ZTtcbiAgICB9LFxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcygpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUgPSBuZXh0U3RhdGUpO1xuICAgIH0sXG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBSb3V0ZXIuc3RvcCgpO1xuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciByb3V0ZSA9IFJvdXRlci5nZXRSb3V0ZUF0RGVwdGgoMCk7XG4gICAgICByZXR1cm4gcm91dGUgPyBSZWFjdC5jcmVhdGVFbGVtZW50KHJvdXRlLmhhbmRsZXIsIHRoaXMucHJvcHMpIDogbnVsbDtcbiAgICB9XG5cbiAgfSk7XG5cbiAgUm91dGVyLmNsZWFyQWxsUm91dGVzKCk7XG5cbiAgaWYgKG9wdGlvbnMucm91dGVzKSBSb3V0ZXIuYWRkUm91dGVzKG9wdGlvbnMucm91dGVzKTtcblxuICByZXR1cm4gUm91dGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVJvdXRlcjsiLCIvKiBqc2hpbnQgLVcwODQgKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdyZWFjdC9saWIvT2JqZWN0LmFzc2lnbicpO1xudmFyIHdhcm5pbmcgPSByZXF1aXJlKCdyZWFjdC9saWIvd2FybmluZycpO1xudmFyIERlZmF1bHRSb3V0ZSA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9EZWZhdWx0Um91dGUnKTtcbnZhciBOb3RGb3VuZFJvdXRlID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL05vdEZvdW5kUm91dGUnKTtcbnZhciBSZWRpcmVjdCA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9SZWRpcmVjdCcpO1xudmFyIFJvdXRlID0gcmVxdWlyZSgnLi9Sb3V0ZScpO1xuXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyhjb21wb25lbnROYW1lLCBwcm9wVHlwZXMsIHByb3BzKSB7XG4gIGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lIHx8ICdVbmtub3duQ29tcG9uZW50JztcblxuICBmb3IgKHZhciBwcm9wTmFtZSBpbiBwcm9wVHlwZXMpIHtcbiAgICBpZiAocHJvcFR5cGVzLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgdmFyIGVycm9yID0gcHJvcFR5cGVzW3Byb3BOYW1lXShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpO1xuXG4gICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikgd2FybmluZyhmYWxzZSwgZXJyb3IubWVzc2FnZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlT3B0aW9ucyhwcm9wcykge1xuICB2YXIgb3B0aW9ucyA9IGFzc2lnbih7fSwgcHJvcHMpO1xuICB2YXIgaGFuZGxlciA9IG9wdGlvbnMuaGFuZGxlcjtcblxuICBpZiAoaGFuZGxlcikge1xuICAgIG9wdGlvbnMub25FbnRlciA9IGhhbmRsZXIud2lsbFRyYW5zaXRpb25UbztcbiAgICBvcHRpb25zLm9uTGVhdmUgPSBoYW5kbGVyLndpbGxUcmFuc2l0aW9uRnJvbTtcbiAgfVxuXG4gIHJldHVybiBvcHRpb25zO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVSb3V0ZUZyb21SZWFjdEVsZW1lbnQoZWxlbWVudCkge1xuICBpZiAoIVJlYWN0LmlzVmFsaWRFbGVtZW50KGVsZW1lbnQpKSB7XG4gICAgcmV0dXJuO1xuICB9dmFyIHR5cGUgPSBlbGVtZW50LnR5cGU7XG4gIHZhciBwcm9wcyA9IGFzc2lnbih7fSwgdHlwZS5kZWZhdWx0UHJvcHMsIGVsZW1lbnQucHJvcHMpO1xuXG4gIGlmICh0eXBlLnByb3BUeXBlcykgY2hlY2tQcm9wVHlwZXModHlwZS5kaXNwbGF5TmFtZSwgdHlwZS5wcm9wVHlwZXMsIHByb3BzKTtcblxuICBpZiAodHlwZSA9PT0gRGVmYXVsdFJvdXRlKSB7XG4gICAgcmV0dXJuIFJvdXRlLmNyZWF0ZURlZmF1bHRSb3V0ZShjcmVhdGVSb3V0ZU9wdGlvbnMocHJvcHMpKTtcbiAgfWlmICh0eXBlID09PSBOb3RGb3VuZFJvdXRlKSB7XG4gICAgcmV0dXJuIFJvdXRlLmNyZWF0ZU5vdEZvdW5kUm91dGUoY3JlYXRlUm91dGVPcHRpb25zKHByb3BzKSk7XG4gIH1pZiAodHlwZSA9PT0gUmVkaXJlY3QpIHtcbiAgICByZXR1cm4gUm91dGUuY3JlYXRlUmVkaXJlY3QoY3JlYXRlUm91dGVPcHRpb25zKHByb3BzKSk7XG4gIH1yZXR1cm4gUm91dGUuY3JlYXRlUm91dGUoY3JlYXRlUm91dGVPcHRpb25zKHByb3BzKSwgZnVuY3Rpb24gKCkge1xuICAgIGlmIChwcm9wcy5jaGlsZHJlbikgY3JlYXRlUm91dGVzRnJvbVJlYWN0Q2hpbGRyZW4ocHJvcHMuY2hpbGRyZW4pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuZCByZXR1cm5zIGFuIGFycmF5IG9mIHJvdXRlcyBjcmVhdGVkIGZyb20gdGhlIGdpdmVuXG4gKiBSZWFjdENoaWxkcmVuLCBhbGwgb2Ygd2hpY2ggc2hvdWxkIGJlIG9uZSBvZiA8Um91dGU+LCA8RGVmYXVsdFJvdXRlPixcbiAqIDxOb3RGb3VuZFJvdXRlPiwgb3IgPFJlZGlyZWN0PiwgZS5nLjpcbiAqXG4gKiAgIHZhciB7IGNyZWF0ZVJvdXRlc0Zyb21SZWFjdENoaWxkcmVuLCBSb3V0ZSwgUmVkaXJlY3QgfSA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpO1xuICpcbiAqICAgdmFyIHJvdXRlcyA9IGNyZWF0ZVJvdXRlc0Zyb21SZWFjdENoaWxkcmVuKFxuICogICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGhhbmRsZXI9e0FwcH0+XG4gKiAgICAgICA8Um91dGUgbmFtZT1cInVzZXJcIiBwYXRoPVwiL3VzZXIvOnVzZXJJZFwiIGhhbmRsZXI9e1VzZXJ9PlxuICogICAgICAgICA8Um91dGUgbmFtZT1cInRhc2tcIiBwYXRoPVwidGFza3MvOnRhc2tJZFwiIGhhbmRsZXI9e1Rhc2t9Lz5cbiAqICAgICAgICAgPFJlZGlyZWN0IGZyb209XCJ0b2Rvcy86dGFza0lkXCIgdG89XCJ0YXNrXCIvPlxuICogICAgICAgPC9Sb3V0ZT5cbiAqICAgICA8L1JvdXRlPlxuICogICApO1xuICovXG5mdW5jdGlvbiBjcmVhdGVSb3V0ZXNGcm9tUmVhY3RDaGlsZHJlbihjaGlsZHJlbikge1xuICB2YXIgcm91dGVzID0gW107XG5cbiAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgaWYgKGNoaWxkID0gY3JlYXRlUm91dGVGcm9tUmVhY3RFbGVtZW50KGNoaWxkKSkgcm91dGVzLnB1c2goY2hpbGQpO1xuICB9KTtcblxuICByZXR1cm4gcm91dGVzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVJvdXRlc0Zyb21SZWFjdENoaWxkcmVuOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ3JlYWN0L2xpYi9pbnZhcmlhbnQnKTtcbnZhciBjYW5Vc2VET00gPSByZXF1aXJlKCdyZWFjdC9saWIvRXhlY3V0aW9uRW52aXJvbm1lbnQnKS5jYW5Vc2VET007XG5cbi8qKlxuICogUmV0dXJucyB0aGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb24gb2YgdGhlIHdpbmRvdyBhcyB7IHgsIHkgfS5cbiAqL1xuZnVuY3Rpb24gZ2V0V2luZG93U2Nyb2xsUG9zaXRpb24oKSB7XG4gIGludmFyaWFudChjYW5Vc2VET00sICdDYW5ub3QgZ2V0IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uIHdpdGhvdXQgYSBET00nKTtcblxuICByZXR1cm4ge1xuICAgIHg6IHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCxcbiAgICB5OiB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcFxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFdpbmRvd1Njcm9sbFBvc2l0aW9uOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5EZWZhdWx0Um91dGUgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvRGVmYXVsdFJvdXRlJyk7XG5leHBvcnRzLkxpbmsgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvTGluaycpO1xuZXhwb3J0cy5Ob3RGb3VuZFJvdXRlID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL05vdEZvdW5kUm91dGUnKTtcbmV4cG9ydHMuUmVkaXJlY3QgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvUmVkaXJlY3QnKTtcbmV4cG9ydHMuUm91dGUgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvUm91dGUnKTtcbmV4cG9ydHMuQWN0aXZlSGFuZGxlciA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9Sb3V0ZUhhbmRsZXInKTtcbmV4cG9ydHMuUm91dGVIYW5kbGVyID0gZXhwb3J0cy5BY3RpdmVIYW5kbGVyO1xuXG5leHBvcnRzLkhhc2hMb2NhdGlvbiA9IHJlcXVpcmUoJy4vbG9jYXRpb25zL0hhc2hMb2NhdGlvbicpO1xuZXhwb3J0cy5IaXN0b3J5TG9jYXRpb24gPSByZXF1aXJlKCcuL2xvY2F0aW9ucy9IaXN0b3J5TG9jYXRpb24nKTtcbmV4cG9ydHMuUmVmcmVzaExvY2F0aW9uID0gcmVxdWlyZSgnLi9sb2NhdGlvbnMvUmVmcmVzaExvY2F0aW9uJyk7XG5leHBvcnRzLlN0YXRpY0xvY2F0aW9uID0gcmVxdWlyZSgnLi9sb2NhdGlvbnMvU3RhdGljTG9jYXRpb24nKTtcbmV4cG9ydHMuVGVzdExvY2F0aW9uID0gcmVxdWlyZSgnLi9sb2NhdGlvbnMvVGVzdExvY2F0aW9uJyk7XG5cbmV4cG9ydHMuSW1pdGF0ZUJyb3dzZXJCZWhhdmlvciA9IHJlcXVpcmUoJy4vYmVoYXZpb3JzL0ltaXRhdGVCcm93c2VyQmVoYXZpb3InKTtcbmV4cG9ydHMuU2Nyb2xsVG9Ub3BCZWhhdmlvciA9IHJlcXVpcmUoJy4vYmVoYXZpb3JzL1Njcm9sbFRvVG9wQmVoYXZpb3InKTtcblxuZXhwb3J0cy5IaXN0b3J5ID0gcmVxdWlyZSgnLi9IaXN0b3J5Jyk7XG5leHBvcnRzLk5hdmlnYXRpb24gPSByZXF1aXJlKCcuL05hdmlnYXRpb24nKTtcbmV4cG9ydHMuU3RhdGUgPSByZXF1aXJlKCcuL1N0YXRlJyk7XG5cbmV4cG9ydHMuY3JlYXRlUm91dGUgPSByZXF1aXJlKCcuL1JvdXRlJykuY3JlYXRlUm91dGU7XG5leHBvcnRzLmNyZWF0ZURlZmF1bHRSb3V0ZSA9IHJlcXVpcmUoJy4vUm91dGUnKS5jcmVhdGVEZWZhdWx0Um91dGU7XG5leHBvcnRzLmNyZWF0ZU5vdEZvdW5kUm91dGUgPSByZXF1aXJlKCcuL1JvdXRlJykuY3JlYXRlTm90Rm91bmRSb3V0ZTtcbmV4cG9ydHMuY3JlYXRlUmVkaXJlY3QgPSByZXF1aXJlKCcuL1JvdXRlJykuY3JlYXRlUmVkaXJlY3Q7XG5leHBvcnRzLmNyZWF0ZVJvdXRlc0Zyb21SZWFjdENoaWxkcmVuID0gcmVxdWlyZSgnLi9jcmVhdGVSb3V0ZXNGcm9tUmVhY3RDaGlsZHJlbicpO1xuXG5leHBvcnRzLmNyZWF0ZSA9IHJlcXVpcmUoJy4vY3JlYXRlUm91dGVyJyk7XG5leHBvcnRzLnJ1biA9IHJlcXVpcmUoJy4vcnVuUm91dGVyJyk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5mdW5jdGlvbiBpc1ZhbGlkQ2hpbGQob2JqZWN0KSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCB8fCBSZWFjdC5pc1ZhbGlkRWxlbWVudChvYmplY3QpO1xufVxuXG5mdW5jdGlvbiBpc1JlYWN0Q2hpbGRyZW4ob2JqZWN0KSB7XG4gIHJldHVybiBpc1ZhbGlkQ2hpbGQob2JqZWN0KSB8fCBBcnJheS5pc0FycmF5KG9iamVjdCkgJiYgb2JqZWN0LmV2ZXJ5KGlzVmFsaWRDaGlsZCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNSZWFjdENoaWxkcmVuOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIExvY2F0aW9uQWN0aW9ucyA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvTG9jYXRpb25BY3Rpb25zJyk7XG52YXIgSGlzdG9yeSA9IHJlcXVpcmUoJy4uL0hpc3RvcnknKTtcblxudmFyIF9saXN0ZW5lcnMgPSBbXTtcbnZhciBfaXNMaXN0ZW5pbmcgPSBmYWxzZTtcbnZhciBfYWN0aW9uVHlwZTtcblxuZnVuY3Rpb24gbm90aWZ5Q2hhbmdlKHR5cGUpIHtcbiAgaWYgKHR5cGUgPT09IExvY2F0aW9uQWN0aW9ucy5QVVNIKSBIaXN0b3J5Lmxlbmd0aCArPSAxO1xuXG4gIHZhciBjaGFuZ2UgPSB7XG4gICAgcGF0aDogSGFzaExvY2F0aW9uLmdldEN1cnJlbnRQYXRoKCksXG4gICAgdHlwZTogdHlwZVxuICB9O1xuXG4gIF9saXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICBsaXN0ZW5lci5jYWxsKEhhc2hMb2NhdGlvbiwgY2hhbmdlKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGVuc3VyZVNsYXNoKCkge1xuICB2YXIgcGF0aCA9IEhhc2hMb2NhdGlvbi5nZXRDdXJyZW50UGF0aCgpO1xuXG4gIGlmIChwYXRoLmNoYXJBdCgwKSA9PT0gJy8nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1IYXNoTG9jYXRpb24ucmVwbGFjZSgnLycgKyBwYXRoKTtcblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIG9uSGFzaENoYW5nZSgpIHtcbiAgaWYgKGVuc3VyZVNsYXNoKCkpIHtcbiAgICAvLyBJZiB3ZSBkb24ndCBoYXZlIGFuIF9hY3Rpb25UeXBlIHRoZW4gYWxsIHdlIGtub3cgaXMgdGhlIGhhc2hcbiAgICAvLyBjaGFuZ2VkLiBJdCB3YXMgcHJvYmFibHkgY2F1c2VkIGJ5IHRoZSB1c2VyIGNsaWNraW5nIHRoZSBCYWNrXG4gICAgLy8gYnV0dG9uLCBidXQgbWF5IGhhdmUgYWxzbyBiZWVuIHRoZSBGb3J3YXJkIGJ1dHRvbiBvciBtYW51YWxcbiAgICAvLyBtYW5pcHVsYXRpb24uIFNvIGp1c3QgZ3Vlc3MgJ3BvcCcuXG4gICAgdmFyIGN1ckFjdGlvblR5cGUgPSBfYWN0aW9uVHlwZTtcbiAgICBfYWN0aW9uVHlwZSA9IG51bGw7XG4gICAgbm90aWZ5Q2hhbmdlKGN1ckFjdGlvblR5cGUgfHwgTG9jYXRpb25BY3Rpb25zLlBPUCk7XG4gIH1cbn1cblxuLyoqXG4gKiBBIExvY2F0aW9uIHRoYXQgdXNlcyBgd2luZG93LmxvY2F0aW9uLmhhc2hgLlxuICovXG52YXIgSGFzaExvY2F0aW9uID0ge1xuXG4gIGFkZENoYW5nZUxpc3RlbmVyOiBmdW5jdGlvbiBhZGRDaGFuZ2VMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgIF9saXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cbiAgICAvLyBEbyB0aGlzIEJFRk9SRSBsaXN0ZW5pbmcgZm9yIGhhc2hjaGFuZ2UuXG4gICAgZW5zdXJlU2xhc2goKTtcblxuICAgIGlmICghX2lzTGlzdGVuaW5nKSB7XG4gICAgICBpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCBvbkhhc2hDaGFuZ2UsIGZhbHNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5hdHRhY2hFdmVudCgnb25oYXNoY2hhbmdlJywgb25IYXNoQ2hhbmdlKTtcbiAgICAgIH1cblxuICAgICAgX2lzTGlzdGVuaW5nID0gdHJ1ZTtcbiAgICB9XG4gIH0sXG5cbiAgcmVtb3ZlQ2hhbmdlTGlzdGVuZXI6IGZ1bmN0aW9uIHJlbW92ZUNoYW5nZUxpc3RlbmVyKGxpc3RlbmVyKSB7XG4gICAgX2xpc3RlbmVycyA9IF9saXN0ZW5lcnMuZmlsdGVyKGZ1bmN0aW9uIChsKSB7XG4gICAgICByZXR1cm4gbCAhPT0gbGlzdGVuZXI7XG4gICAgfSk7XG5cbiAgICBpZiAoX2xpc3RlbmVycy5sZW5ndGggPT09IDApIHtcbiAgICAgIGlmICh3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIG9uSGFzaENoYW5nZSwgZmFsc2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50KCdvbmhhc2hjaGFuZ2UnLCBvbkhhc2hDaGFuZ2UpO1xuICAgICAgfVxuXG4gICAgICBfaXNMaXN0ZW5pbmcgPSBmYWxzZTtcbiAgICB9XG4gIH0sXG5cbiAgcHVzaDogZnVuY3Rpb24gcHVzaChwYXRoKSB7XG4gICAgX2FjdGlvblR5cGUgPSBMb2NhdGlvbkFjdGlvbnMuUFVTSDtcbiAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHBhdGg7XG4gIH0sXG5cbiAgcmVwbGFjZTogZnVuY3Rpb24gcmVwbGFjZShwYXRoKSB7XG4gICAgX2FjdGlvblR5cGUgPSBMb2NhdGlvbkFjdGlvbnMuUkVQTEFDRTtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoICsgJyMnICsgcGF0aCk7XG4gIH0sXG5cbiAgcG9wOiBmdW5jdGlvbiBwb3AoKSB7XG4gICAgX2FjdGlvblR5cGUgPSBMb2NhdGlvbkFjdGlvbnMuUE9QO1xuICAgIEhpc3RvcnkuYmFjaygpO1xuICB9LFxuXG4gIGdldEN1cnJlbnRQYXRoOiBmdW5jdGlvbiBnZXRDdXJyZW50UGF0aCgpIHtcbiAgICByZXR1cm4gZGVjb2RlVVJJKFxuICAgIC8vIFdlIGNhbid0IHVzZSB3aW5kb3cubG9jYXRpb24uaGFzaCBoZXJlIGJlY2F1c2UgaXQncyBub3RcbiAgICAvLyBjb25zaXN0ZW50IGFjcm9zcyBicm93c2VycyAtIEZpcmVmb3ggd2lsbCBwcmUtZGVjb2RlIGl0IVxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCcjJylbMV0gfHwgJycpO1xuICB9LFxuXG4gIHRvU3RyaW5nOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gJzxIYXNoTG9jYXRpb24+JztcbiAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhhc2hMb2NhdGlvbjsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBMb2NhdGlvbkFjdGlvbnMgPSByZXF1aXJlKCcuLi9hY3Rpb25zL0xvY2F0aW9uQWN0aW9ucycpO1xudmFyIEhpc3RvcnkgPSByZXF1aXJlKCcuLi9IaXN0b3J5Jyk7XG5cbnZhciBfbGlzdGVuZXJzID0gW107XG52YXIgX2lzTGlzdGVuaW5nID0gZmFsc2U7XG5cbmZ1bmN0aW9uIG5vdGlmeUNoYW5nZSh0eXBlKSB7XG4gIHZhciBjaGFuZ2UgPSB7XG4gICAgcGF0aDogSGlzdG9yeUxvY2F0aW9uLmdldEN1cnJlbnRQYXRoKCksXG4gICAgdHlwZTogdHlwZVxuICB9O1xuXG4gIF9saXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICBsaXN0ZW5lci5jYWxsKEhpc3RvcnlMb2NhdGlvbiwgY2hhbmdlKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG9uUG9wU3RhdGUoZXZlbnQpIHtcbiAgaWYgKGV2ZW50LnN0YXRlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm47XG4gIH0gLy8gSWdub3JlIGV4dHJhbmVvdXMgcG9wc3RhdGUgZXZlbnRzIGluIFdlYktpdC5cblxuICBub3RpZnlDaGFuZ2UoTG9jYXRpb25BY3Rpb25zLlBPUCk7XG59XG5cbi8qKlxuICogQSBMb2NhdGlvbiB0aGF0IHVzZXMgSFRNTDUgaGlzdG9yeS5cbiAqL1xudmFyIEhpc3RvcnlMb2NhdGlvbiA9IHtcblxuICBhZGRDaGFuZ2VMaXN0ZW5lcjogZnVuY3Rpb24gYWRkQ2hhbmdlTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICBfbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuXG4gICAgaWYgKCFfaXNMaXN0ZW5pbmcpIHtcbiAgICAgIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCBvblBvcFN0YXRlLCBmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cuYXR0YWNoRXZlbnQoJ29ucG9wc3RhdGUnLCBvblBvcFN0YXRlKTtcbiAgICAgIH1cblxuICAgICAgX2lzTGlzdGVuaW5nID0gdHJ1ZTtcbiAgICB9XG4gIH0sXG5cbiAgcmVtb3ZlQ2hhbmdlTGlzdGVuZXI6IGZ1bmN0aW9uIHJlbW92ZUNoYW5nZUxpc3RlbmVyKGxpc3RlbmVyKSB7XG4gICAgX2xpc3RlbmVycyA9IF9saXN0ZW5lcnMuZmlsdGVyKGZ1bmN0aW9uIChsKSB7XG4gICAgICByZXR1cm4gbCAhPT0gbGlzdGVuZXI7XG4gICAgfSk7XG5cbiAgICBpZiAoX2xpc3RlbmVycy5sZW5ndGggPT09IDApIHtcbiAgICAgIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCBvblBvcFN0YXRlLCBmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnQoJ29ucG9wc3RhdGUnLCBvblBvcFN0YXRlKTtcbiAgICAgIH1cblxuICAgICAgX2lzTGlzdGVuaW5nID0gZmFsc2U7XG4gICAgfVxuICB9LFxuXG4gIHB1c2g6IGZ1bmN0aW9uIHB1c2gocGF0aCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7IHBhdGg6IHBhdGggfSwgJycsIHBhdGgpO1xuICAgIEhpc3RvcnkubGVuZ3RoICs9IDE7XG4gICAgbm90aWZ5Q2hhbmdlKExvY2F0aW9uQWN0aW9ucy5QVVNIKTtcbiAgfSxcblxuICByZXBsYWNlOiBmdW5jdGlvbiByZXBsYWNlKHBhdGgpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoeyBwYXRoOiBwYXRoIH0sICcnLCBwYXRoKTtcbiAgICBub3RpZnlDaGFuZ2UoTG9jYXRpb25BY3Rpb25zLlJFUExBQ0UpO1xuICB9LFxuXG4gIHBvcDogSGlzdG9yeS5iYWNrLFxuXG4gIGdldEN1cnJlbnRQYXRoOiBmdW5jdGlvbiBnZXRDdXJyZW50UGF0aCgpIHtcbiAgICByZXR1cm4gZGVjb2RlVVJJKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICB9LFxuXG4gIHRvU3RyaW5nOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gJzxIaXN0b3J5TG9jYXRpb24+JztcbiAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhpc3RvcnlMb2NhdGlvbjsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBIaXN0b3J5TG9jYXRpb24gPSByZXF1aXJlKCcuL0hpc3RvcnlMb2NhdGlvbicpO1xudmFyIEhpc3RvcnkgPSByZXF1aXJlKCcuLi9IaXN0b3J5Jyk7XG5cbi8qKlxuICogQSBMb2NhdGlvbiB0aGF0IHVzZXMgZnVsbCBwYWdlIHJlZnJlc2hlcy4gVGhpcyBpcyB1c2VkIGFzXG4gKiB0aGUgZmFsbGJhY2sgZm9yIEhpc3RvcnlMb2NhdGlvbiBpbiBicm93c2VycyB0aGF0IGRvIG5vdFxuICogc3VwcG9ydCB0aGUgSFRNTDUgaGlzdG9yeSBBUEkuXG4gKi9cbnZhciBSZWZyZXNoTG9jYXRpb24gPSB7XG5cbiAgcHVzaDogZnVuY3Rpb24gcHVzaChwYXRoKSB7XG4gICAgd2luZG93LmxvY2F0aW9uID0gcGF0aDtcbiAgfSxcblxuICByZXBsYWNlOiBmdW5jdGlvbiByZXBsYWNlKHBhdGgpIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShwYXRoKTtcbiAgfSxcblxuICBwb3A6IEhpc3RvcnkuYmFjayxcblxuICBnZXRDdXJyZW50UGF0aDogSGlzdG9yeUxvY2F0aW9uLmdldEN1cnJlbnRQYXRoLFxuXG4gIHRvU3RyaW5nOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gJzxSZWZyZXNoTG9jYXRpb24+JztcbiAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlZnJlc2hMb2NhdGlvbjsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdyZWFjdC9saWIvaW52YXJpYW50Jyk7XG5cbmZ1bmN0aW9uIHRocm93Q2Fubm90TW9kaWZ5KCkge1xuICBpbnZhcmlhbnQoZmFsc2UsICdZb3UgY2Fubm90IG1vZGlmeSBhIHN0YXRpYyBsb2NhdGlvbicpO1xufVxuXG4vKipcbiAqIEEgbG9jYXRpb24gdGhhdCBvbmx5IGV2ZXIgY29udGFpbnMgYSBzaW5nbGUgcGF0aC4gVXNlZnVsIGluXG4gKiBzdGF0ZWxlc3MgZW52aXJvbm1lbnRzIGxpa2Ugc2VydmVycyB3aGVyZSB0aGVyZSBpcyBubyBwYXRoIGhpc3RvcnksXG4gKiBvbmx5IHRoZSBwYXRoIHRoYXQgd2FzIHVzZWQgaW4gdGhlIHJlcXVlc3QuXG4gKi9cblxudmFyIFN0YXRpY0xvY2F0aW9uID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU3RhdGljTG9jYXRpb24ocGF0aCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTdGF0aWNMb2NhdGlvbik7XG5cbiAgICB0aGlzLnBhdGggPSBwYXRoO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFN0YXRpY0xvY2F0aW9uLCBbe1xuICAgIGtleTogJ2dldEN1cnJlbnRQYXRoJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q3VycmVudFBhdGgoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wYXRoO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3RvU3RyaW5nJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICByZXR1cm4gJzxTdGF0aWNMb2NhdGlvbiBwYXRoPVwiJyArIHRoaXMucGF0aCArICdcIj4nO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTdGF0aWNMb2NhdGlvbjtcbn0pKCk7XG5cbi8vIFRPRE86IEluY2x1ZGUgdGhlc2UgaW4gdGhlIGFib3ZlIGNsYXNzIGRlZmluaXRpb25cbi8vIG9uY2Ugd2UgY2FuIHVzZSBFUzcgcHJvcGVydHkgaW5pdGlhbGl6ZXJzLlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2JhYmVsL2JhYmVsL2lzc3Vlcy82MTlcblxuU3RhdGljTG9jYXRpb24ucHJvdG90eXBlLnB1c2ggPSB0aHJvd0Nhbm5vdE1vZGlmeTtcblN0YXRpY0xvY2F0aW9uLnByb3RvdHlwZS5yZXBsYWNlID0gdGhyb3dDYW5ub3RNb2RpZnk7XG5TdGF0aWNMb2NhdGlvbi5wcm90b3R5cGUucG9wID0gdGhyb3dDYW5ub3RNb2RpZnk7XG5cbm1vZHVsZS5leHBvcnRzID0gU3RhdGljTG9jYXRpb247IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgncmVhY3QvbGliL2ludmFyaWFudCcpO1xudmFyIExvY2F0aW9uQWN0aW9ucyA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvTG9jYXRpb25BY3Rpb25zJyk7XG52YXIgSGlzdG9yeSA9IHJlcXVpcmUoJy4uL0hpc3RvcnknKTtcblxuLyoqXG4gKiBBIGxvY2F0aW9uIHRoYXQgaXMgY29udmVuaWVudCBmb3IgdGVzdGluZyBhbmQgZG9lcyBub3QgcmVxdWlyZSBhIERPTS5cbiAqL1xuXG52YXIgVGVzdExvY2F0aW9uID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gVGVzdExvY2F0aW9uKGhpc3RvcnkpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGVzdExvY2F0aW9uKTtcblxuICAgIHRoaXMuaGlzdG9yeSA9IGhpc3RvcnkgfHwgW107XG4gICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbiAgICB0aGlzLl91cGRhdGVIaXN0b3J5TGVuZ3RoKCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoVGVzdExvY2F0aW9uLCBbe1xuICAgIGtleTogJ25lZWRzRE9NJyxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfdXBkYXRlSGlzdG9yeUxlbmd0aCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF91cGRhdGVIaXN0b3J5TGVuZ3RoKCkge1xuICAgICAgSGlzdG9yeS5sZW5ndGggPSB0aGlzLmhpc3RvcnkubGVuZ3RoO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ19ub3RpZnlDaGFuZ2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfbm90aWZ5Q2hhbmdlKHR5cGUpIHtcbiAgICAgIHZhciBjaGFuZ2UgPSB7XG4gICAgICAgIHBhdGg6IHRoaXMuZ2V0Q3VycmVudFBhdGgoKSxcbiAgICAgICAgdHlwZTogdHlwZVxuICAgICAgfTtcblxuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHRoaXMubGlzdGVuZXJzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB0aGlzLmxpc3RlbmVyc1tpXS5jYWxsKHRoaXMsIGNoYW5nZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnYWRkQ2hhbmdlTGlzdGVuZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRDaGFuZ2VMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgICAgdGhpcy5saXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVtb3ZlQ2hhbmdlTGlzdGVuZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVDaGFuZ2VMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgICAgdGhpcy5saXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVycy5maWx0ZXIoZnVuY3Rpb24gKGwpIHtcbiAgICAgICAgcmV0dXJuIGwgIT09IGxpc3RlbmVyO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncHVzaCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHB1c2gocGF0aCkge1xuICAgICAgdGhpcy5oaXN0b3J5LnB1c2gocGF0aCk7XG4gICAgICB0aGlzLl91cGRhdGVIaXN0b3J5TGVuZ3RoKCk7XG4gICAgICB0aGlzLl9ub3RpZnlDaGFuZ2UoTG9jYXRpb25BY3Rpb25zLlBVU0gpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlcGxhY2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXBsYWNlKHBhdGgpIHtcbiAgICAgIGludmFyaWFudCh0aGlzLmhpc3RvcnkubGVuZ3RoLCAnWW91IGNhbm5vdCByZXBsYWNlIHRoZSBjdXJyZW50IHBhdGggd2l0aCBubyBoaXN0b3J5Jyk7XG5cbiAgICAgIHRoaXMuaGlzdG9yeVt0aGlzLmhpc3RvcnkubGVuZ3RoIC0gMV0gPSBwYXRoO1xuXG4gICAgICB0aGlzLl9ub3RpZnlDaGFuZ2UoTG9jYXRpb25BY3Rpb25zLlJFUExBQ0UpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3BvcCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBvcCgpIHtcbiAgICAgIHRoaXMuaGlzdG9yeS5wb3AoKTtcbiAgICAgIHRoaXMuX3VwZGF0ZUhpc3RvcnlMZW5ndGgoKTtcbiAgICAgIHRoaXMuX25vdGlmeUNoYW5nZShMb2NhdGlvbkFjdGlvbnMuUE9QKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRDdXJyZW50UGF0aCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEN1cnJlbnRQYXRoKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaGlzdG9yeVt0aGlzLmhpc3RvcnkubGVuZ3RoIC0gMV07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndG9TdHJpbmcnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgIHJldHVybiAnPFRlc3RMb2NhdGlvbj4nO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBUZXN0TG9jYXRpb247XG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRlc3RMb2NhdGlvbjsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBjcmVhdGVSb3V0ZXIgPSByZXF1aXJlKCcuL2NyZWF0ZVJvdXRlcicpO1xuXG4vKipcbiAqIEEgaGlnaC1sZXZlbCBjb252ZW5pZW5jZSBtZXRob2QgdGhhdCBjcmVhdGVzLCBjb25maWd1cmVzLCBhbmRcbiAqIHJ1bnMgYSByb3V0ZXIgaW4gb25lIHNob3QuIFRoZSBtZXRob2Qgc2lnbmF0dXJlIGlzOlxuICpcbiAqICAgUm91dGVyLnJ1bihyb3V0ZXNbLCBsb2NhdGlvbiBdLCBjYWxsYmFjayk7XG4gKlxuICogVXNpbmcgYHdpbmRvdy5sb2NhdGlvbi5oYXNoYCB0byBtYW5hZ2UgdGhlIFVSTCwgeW91IGNvdWxkIGRvOlxuICpcbiAqICAgUm91dGVyLnJ1bihyb3V0ZXMsIGZ1bmN0aW9uIChIYW5kbGVyKSB7XG4gKiAgICAgUmVhY3QucmVuZGVyKDxIYW5kbGVyLz4sIGRvY3VtZW50LmJvZHkpO1xuICogICB9KTtcbiAqIFxuICogVXNpbmcgSFRNTDUgaGlzdG9yeSBhbmQgYSBjdXN0b20gXCJjdXJzb3JcIiBwcm9wOlxuICogXG4gKiAgIFJvdXRlci5ydW4ocm91dGVzLCBSb3V0ZXIuSGlzdG9yeUxvY2F0aW9uLCBmdW5jdGlvbiAoSGFuZGxlcikge1xuICogICAgIFJlYWN0LnJlbmRlcig8SGFuZGxlciBjdXJzb3I9e2N1cnNvcn0vPiwgZG9jdW1lbnQuYm9keSk7XG4gKiAgIH0pO1xuICpcbiAqIFJldHVybnMgdGhlIG5ld2x5IGNyZWF0ZWQgcm91dGVyLlxuICpcbiAqIE5vdGU6IElmIHlvdSBuZWVkIHRvIHNwZWNpZnkgZnVydGhlciBvcHRpb25zIGZvciB5b3VyIHJvdXRlciBzdWNoXG4gKiBhcyBlcnJvci9hYm9ydCBoYW5kbGluZyBvciBjdXN0b20gc2Nyb2xsIGJlaGF2aW9yLCB1c2UgUm91dGVyLmNyZWF0ZVxuICogaW5zdGVhZC5cbiAqXG4gKiAgIHZhciByb3V0ZXIgPSBSb3V0ZXIuY3JlYXRlKG9wdGlvbnMpO1xuICogICByb3V0ZXIucnVuKGZ1bmN0aW9uIChIYW5kbGVyKSB7XG4gKiAgICAgLy8gLi4uXG4gKiAgIH0pO1xuICovXG5mdW5jdGlvbiBydW5Sb3V0ZXIocm91dGVzLCBsb2NhdGlvbiwgY2FsbGJhY2spIHtcbiAgaWYgKHR5cGVvZiBsb2NhdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNhbGxiYWNrID0gbG9jYXRpb247XG4gICAgbG9jYXRpb24gPSBudWxsO1xuICB9XG5cbiAgdmFyIHJvdXRlciA9IGNyZWF0ZVJvdXRlcih7XG4gICAgcm91dGVzOiByb3V0ZXMsXG4gICAgbG9jYXRpb246IGxvY2F0aW9uXG4gIH0pO1xuXG4gIHJvdXRlci5ydW4oY2FsbGJhY2spO1xuXG4gIHJldHVybiByb3V0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcnVuUm91dGVyOyIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gc3VwcG9ydHNIaXN0b3J5KCkge1xuICAvKiEgdGFrZW4gZnJvbSBtb2Rlcm5penJcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL01vZGVybml6ci9Nb2Rlcm5penIvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vTW9kZXJuaXpyL01vZGVybml6ci9ibG9iL21hc3Rlci9mZWF0dXJlLWRldGVjdHMvaGlzdG9yeS5qc1xuICAgKiBjaGFuZ2VkIHRvIGF2b2lkIGZhbHNlIG5lZ2F0aXZlcyBmb3IgV2luZG93cyBQaG9uZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9yYWNrdC9yZWFjdC1yb3V0ZXIvaXNzdWVzLzU4NlxuICAgKi9cbiAgdmFyIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgaWYgKCh1YS5pbmRleE9mKCdBbmRyb2lkIDIuJykgIT09IC0xIHx8IHVhLmluZGV4T2YoJ0FuZHJvaWQgNC4wJykgIT09IC0xKSAmJiB1YS5pbmRleE9mKCdNb2JpbGUgU2FmYXJpJykgIT09IC0xICYmIHVhLmluZGV4T2YoJ0Nocm9tZScpID09PSAtMSAmJiB1YS5pbmRleE9mKCdXaW5kb3dzIFBob25lJykgPT09IC0xKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB3aW5kb3cuaGlzdG9yeSAmJiAncHVzaFN0YXRlJyBpbiB3aW5kb3cuaGlzdG9yeTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdXBwb3J0c0hpc3Rvcnk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBUb09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PSBudWxsKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIGtleXM7XG5cdHZhciB0byA9IFRvT2JqZWN0KHRhcmdldCk7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gYXJndW1lbnRzW3NdO1xuXHRcdGtleXMgPSBPYmplY3Qua2V5cyhPYmplY3QoZnJvbSkpO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR0b1trZXlzW2ldXSA9IGZyb21ba2V5c1tpXV07XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvJyk7XG4iLCIvLyBMb2FkIG1vZHVsZXNcblxudmFyIFN0cmluZ2lmeSA9IHJlcXVpcmUoJy4vc3RyaW5naWZ5Jyk7XG52YXIgUGFyc2UgPSByZXF1aXJlKCcuL3BhcnNlJyk7XG5cblxuLy8gRGVjbGFyZSBpbnRlcm5hbHNcblxudmFyIGludGVybmFscyA9IHt9O1xuXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIHN0cmluZ2lmeTogU3RyaW5naWZ5LFxuICAgIHBhcnNlOiBQYXJzZVxufTtcbiIsIi8vIExvYWQgbW9kdWxlc1xuXG52YXIgVXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cblxuLy8gRGVjbGFyZSBpbnRlcm5hbHNcblxudmFyIGludGVybmFscyA9IHtcbiAgICBkZWxpbWl0ZXI6ICcmJyxcbiAgICBkZXB0aDogNSxcbiAgICBhcnJheUxpbWl0OiAyMCxcbiAgICBwYXJhbWV0ZXJMaW1pdDogMTAwMFxufTtcblxuXG5pbnRlcm5hbHMucGFyc2VWYWx1ZXMgPSBmdW5jdGlvbiAoc3RyLCBvcHRpb25zKSB7XG5cbiAgICB2YXIgb2JqID0ge307XG4gICAgdmFyIHBhcnRzID0gc3RyLnNwbGl0KG9wdGlvbnMuZGVsaW1pdGVyLCBvcHRpb25zLnBhcmFtZXRlckxpbWl0ID09PSBJbmZpbml0eSA/IHVuZGVmaW5lZCA6IG9wdGlvbnMucGFyYW1ldGVyTGltaXQpO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIGlsID0gcGFydHMubGVuZ3RoOyBpIDwgaWw7ICsraSkge1xuICAgICAgICB2YXIgcGFydCA9IHBhcnRzW2ldO1xuICAgICAgICB2YXIgcG9zID0gcGFydC5pbmRleE9mKCddPScpID09PSAtMSA/IHBhcnQuaW5kZXhPZignPScpIDogcGFydC5pbmRleE9mKCddPScpICsgMTtcblxuICAgICAgICBpZiAocG9zID09PSAtMSkge1xuICAgICAgICAgICAgb2JqW1V0aWxzLmRlY29kZShwYXJ0KV0gPSAnJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBVdGlscy5kZWNvZGUocGFydC5zbGljZSgwLCBwb3MpKTtcbiAgICAgICAgICAgIHZhciB2YWwgPSBVdGlscy5kZWNvZGUocGFydC5zbGljZShwb3MgKyAxKSk7XG5cbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIG9ialtrZXldID0gdmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb2JqW2tleV0gPSBbXS5jb25jYXQob2JqW2tleV0pLmNvbmNhdCh2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbn07XG5cblxuaW50ZXJuYWxzLnBhcnNlT2JqZWN0ID0gZnVuY3Rpb24gKGNoYWluLCB2YWwsIG9wdGlvbnMpIHtcblxuICAgIGlmICghY2hhaW4ubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuXG4gICAgdmFyIHJvb3QgPSBjaGFpbi5zaGlmdCgpO1xuXG4gICAgdmFyIG9iaiA9IHt9O1xuICAgIGlmIChyb290ID09PSAnW10nKSB7XG4gICAgICAgIG9iaiA9IFtdO1xuICAgICAgICBvYmogPSBvYmouY29uY2F0KGludGVybmFscy5wYXJzZU9iamVjdChjaGFpbiwgdmFsLCBvcHRpb25zKSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgY2xlYW5Sb290ID0gcm9vdFswXSA9PT0gJ1snICYmIHJvb3Rbcm9vdC5sZW5ndGggLSAxXSA9PT0gJ10nID8gcm9vdC5zbGljZSgxLCByb290Lmxlbmd0aCAtIDEpIDogcm9vdDtcbiAgICAgICAgdmFyIGluZGV4ID0gcGFyc2VJbnQoY2xlYW5Sb290LCAxMCk7XG4gICAgICAgIHZhciBpbmRleFN0cmluZyA9ICcnICsgaW5kZXg7XG4gICAgICAgIGlmICghaXNOYU4oaW5kZXgpICYmXG4gICAgICAgICAgICByb290ICE9PSBjbGVhblJvb3QgJiZcbiAgICAgICAgICAgIGluZGV4U3RyaW5nID09PSBjbGVhblJvb3QgJiZcbiAgICAgICAgICAgIGluZGV4ID49IDAgJiZcbiAgICAgICAgICAgIGluZGV4IDw9IG9wdGlvbnMuYXJyYXlMaW1pdCkge1xuXG4gICAgICAgICAgICBvYmogPSBbXTtcbiAgICAgICAgICAgIG9ialtpbmRleF0gPSBpbnRlcm5hbHMucGFyc2VPYmplY3QoY2hhaW4sIHZhbCwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvYmpbY2xlYW5Sb290XSA9IGludGVybmFscy5wYXJzZU9iamVjdChjaGFpbiwgdmFsLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG59O1xuXG5cbmludGVybmFscy5wYXJzZUtleXMgPSBmdW5jdGlvbiAoa2V5LCB2YWwsIG9wdGlvbnMpIHtcblxuICAgIGlmICgha2V5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBUaGUgcmVnZXggY2h1bmtzXG5cbiAgICB2YXIgcGFyZW50ID0gL14oW15cXFtcXF1dKikvO1xuICAgIHZhciBjaGlsZCA9IC8oXFxbW15cXFtcXF1dKlxcXSkvZztcblxuICAgIC8vIEdldCB0aGUgcGFyZW50XG5cbiAgICB2YXIgc2VnbWVudCA9IHBhcmVudC5leGVjKGtleSk7XG5cbiAgICAvLyBEb24ndCBhbGxvdyB0aGVtIHRvIG92ZXJ3cml0ZSBvYmplY3QgcHJvdG90eXBlIHByb3BlcnRpZXNcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KHNlZ21lbnRbMV0pKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBTdGFzaCB0aGUgcGFyZW50IGlmIGl0IGV4aXN0c1xuXG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBpZiAoc2VnbWVudFsxXSkge1xuICAgICAgICBrZXlzLnB1c2goc2VnbWVudFsxXSk7XG4gICAgfVxuXG4gICAgLy8gTG9vcCB0aHJvdWdoIGNoaWxkcmVuIGFwcGVuZGluZyB0byB0aGUgYXJyYXkgdW50aWwgd2UgaGl0IGRlcHRoXG5cbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKChzZWdtZW50ID0gY2hpbGQuZXhlYyhrZXkpKSAhPT0gbnVsbCAmJiBpIDwgb3B0aW9ucy5kZXB0aCkge1xuXG4gICAgICAgICsraTtcbiAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KHNlZ21lbnRbMV0ucmVwbGFjZSgvXFxbfFxcXS9nLCAnJykpKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goc2VnbWVudFsxXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZiB0aGVyZSdzIGEgcmVtYWluZGVyLCBqdXN0IGFkZCB3aGF0ZXZlciBpcyBsZWZ0XG5cbiAgICBpZiAoc2VnbWVudCkge1xuICAgICAgICBrZXlzLnB1c2goJ1snICsga2V5LnNsaWNlKHNlZ21lbnQuaW5kZXgpICsgJ10nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW50ZXJuYWxzLnBhcnNlT2JqZWN0KGtleXMsIHZhbCwgb3B0aW9ucyk7XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHN0ciwgb3B0aW9ucykge1xuXG4gICAgaWYgKHN0ciA9PT0gJycgfHxcbiAgICAgICAgc3RyID09PSBudWxsIHx8XG4gICAgICAgIHR5cGVvZiBzdHIgPT09ICd1bmRlZmluZWQnKSB7XG5cbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIG9wdGlvbnMuZGVsaW1pdGVyID0gdHlwZW9mIG9wdGlvbnMuZGVsaW1pdGVyID09PSAnc3RyaW5nJyB8fCBVdGlscy5pc1JlZ0V4cChvcHRpb25zLmRlbGltaXRlcikgPyBvcHRpb25zLmRlbGltaXRlciA6IGludGVybmFscy5kZWxpbWl0ZXI7XG4gICAgb3B0aW9ucy5kZXB0aCA9IHR5cGVvZiBvcHRpb25zLmRlcHRoID09PSAnbnVtYmVyJyA/IG9wdGlvbnMuZGVwdGggOiBpbnRlcm5hbHMuZGVwdGg7XG4gICAgb3B0aW9ucy5hcnJheUxpbWl0ID0gdHlwZW9mIG9wdGlvbnMuYXJyYXlMaW1pdCA9PT0gJ251bWJlcicgPyBvcHRpb25zLmFycmF5TGltaXQgOiBpbnRlcm5hbHMuYXJyYXlMaW1pdDtcbiAgICBvcHRpb25zLnBhcmFtZXRlckxpbWl0ID0gdHlwZW9mIG9wdGlvbnMucGFyYW1ldGVyTGltaXQgPT09ICdudW1iZXInID8gb3B0aW9ucy5wYXJhbWV0ZXJMaW1pdCA6IGludGVybmFscy5wYXJhbWV0ZXJMaW1pdDtcblxuICAgIHZhciB0ZW1wT2JqID0gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZycgPyBpbnRlcm5hbHMucGFyc2VWYWx1ZXMoc3RyLCBvcHRpb25zKSA6IHN0cjtcbiAgICB2YXIgb2JqID0ge307XG5cbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIGtleXMgYW5kIHNldHVwIHRoZSBuZXcgb2JqZWN0XG5cbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHRlbXBPYmopO1xuICAgIGZvciAodmFyIGkgPSAwLCBpbCA9IGtleXMubGVuZ3RoOyBpIDwgaWw7ICsraSkge1xuICAgICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgdmFyIG5ld09iaiA9IGludGVybmFscy5wYXJzZUtleXMoa2V5LCB0ZW1wT2JqW2tleV0sIG9wdGlvbnMpO1xuICAgICAgICBvYmogPSBVdGlscy5tZXJnZShvYmosIG5ld09iaik7XG4gICAgfVxuXG4gICAgcmV0dXJuIFV0aWxzLmNvbXBhY3Qob2JqKTtcbn07XG4iLCIvLyBMb2FkIG1vZHVsZXNcblxudmFyIFV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG5cbi8vIERlY2xhcmUgaW50ZXJuYWxzXG5cbnZhciBpbnRlcm5hbHMgPSB7XG4gICAgZGVsaW1pdGVyOiAnJicsXG4gICAgYXJyYXlQcmVmaXhHZW5lcmF0b3JzOiB7XG4gICAgICAgIGJyYWNrZXRzOiBmdW5jdGlvbiAocHJlZml4LCBrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBwcmVmaXggKyAnW10nO1xuICAgICAgICB9LFxuICAgICAgICBpbmRpY2VzOiBmdW5jdGlvbiAocHJlZml4LCBrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBwcmVmaXggKyAnWycgKyBrZXkgKyAnXSc7XG4gICAgICAgIH0sXG4gICAgICAgIHJlcGVhdDogZnVuY3Rpb24gKHByZWZpeCwga2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gcHJlZml4O1xuICAgICAgICB9XG4gICAgfVxufTtcblxuXG5pbnRlcm5hbHMuc3RyaW5naWZ5ID0gZnVuY3Rpb24gKG9iaiwgcHJlZml4LCBnZW5lcmF0ZUFycmF5UHJlZml4KSB7XG5cbiAgICBpZiAoVXRpbHMuaXNCdWZmZXIob2JqKSkge1xuICAgICAgICBvYmogPSBvYmoudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgZWxzZSBpZiAob2JqIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICBvYmogPSBvYmoudG9JU09TdHJpbmcoKTtcbiAgICB9XG4gICAgZWxzZSBpZiAob2JqID09PSBudWxsKSB7XG4gICAgICAgIG9iaiA9ICcnO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb2JqID09PSAnc3RyaW5nJyB8fFxuICAgICAgICB0eXBlb2Ygb2JqID09PSAnbnVtYmVyJyB8fFxuICAgICAgICB0eXBlb2Ygb2JqID09PSAnYm9vbGVhbicpIHtcblxuICAgICAgICByZXR1cm4gW2VuY29kZVVSSUNvbXBvbmVudChwcmVmaXgpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG9iaildO1xuICAgIH1cblxuICAgIHZhciB2YWx1ZXMgPSBbXTtcblxuICAgIGlmICh0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gdmFsdWVzO1xuICAgIH1cblxuICAgIHZhciBvYmpLZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICBmb3IgKHZhciBpID0gMCwgaWwgPSBvYmpLZXlzLmxlbmd0aDsgaSA8IGlsOyArK2kpIHtcbiAgICAgICAgdmFyIGtleSA9IG9iaktleXNbaV07XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICAgICAgICAgIHZhbHVlcyA9IHZhbHVlcy5jb25jYXQoaW50ZXJuYWxzLnN0cmluZ2lmeShvYmpba2V5XSwgZ2VuZXJhdGVBcnJheVByZWZpeChwcmVmaXgsIGtleSksIGdlbmVyYXRlQXJyYXlQcmVmaXgpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlcyA9IHZhbHVlcy5jb25jYXQoaW50ZXJuYWxzLnN0cmluZ2lmeShvYmpba2V5XSwgcHJlZml4ICsgJ1snICsga2V5ICsgJ10nLCBnZW5lcmF0ZUFycmF5UHJlZml4KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWVzO1xufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmosIG9wdGlvbnMpIHtcblxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIHZhciBkZWxpbWl0ZXIgPSB0eXBlb2Ygb3B0aW9ucy5kZWxpbWl0ZXIgPT09ICd1bmRlZmluZWQnID8gaW50ZXJuYWxzLmRlbGltaXRlciA6IG9wdGlvbnMuZGVsaW1pdGVyO1xuXG4gICAgdmFyIGtleXMgPSBbXTtcblxuICAgIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyB8fFxuICAgICAgICBvYmogPT09IG51bGwpIHtcblxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgdmFyIGFycmF5Rm9ybWF0O1xuICAgIGlmIChvcHRpb25zLmFycmF5Rm9ybWF0IGluIGludGVybmFscy5hcnJheVByZWZpeEdlbmVyYXRvcnMpIHtcbiAgICAgICAgYXJyYXlGb3JtYXQgPSBvcHRpb25zLmFycmF5Rm9ybWF0O1xuICAgIH1cbiAgICBlbHNlIGlmICgnaW5kaWNlcycgaW4gb3B0aW9ucykge1xuICAgICAgICBhcnJheUZvcm1hdCA9IG9wdGlvbnMuaW5kaWNlcyA/ICdpbmRpY2VzJyA6ICdyZXBlYXQnO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgYXJyYXlGb3JtYXQgPSAnaW5kaWNlcyc7XG4gICAgfVxuXG4gICAgdmFyIGdlbmVyYXRlQXJyYXlQcmVmaXggPSBpbnRlcm5hbHMuYXJyYXlQcmVmaXhHZW5lcmF0b3JzW2FycmF5Rm9ybWF0XTtcblxuICAgIHZhciBvYmpLZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICBmb3IgKHZhciBpID0gMCwgaWwgPSBvYmpLZXlzLmxlbmd0aDsgaSA8IGlsOyArK2kpIHtcbiAgICAgICAgdmFyIGtleSA9IG9iaktleXNbaV07XG4gICAgICAgIGtleXMgPSBrZXlzLmNvbmNhdChpbnRlcm5hbHMuc3RyaW5naWZ5KG9ialtrZXldLCBrZXksIGdlbmVyYXRlQXJyYXlQcmVmaXgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4ga2V5cy5qb2luKGRlbGltaXRlcik7XG59O1xuIiwiLy8gTG9hZCBtb2R1bGVzXG5cblxuLy8gRGVjbGFyZSBpbnRlcm5hbHNcblxudmFyIGludGVybmFscyA9IHt9O1xuXG5cbmV4cG9ydHMuYXJyYXlUb09iamVjdCA9IGZ1bmN0aW9uIChzb3VyY2UpIHtcblxuICAgIHZhciBvYmogPSB7fTtcbiAgICBmb3IgKHZhciBpID0gMCwgaWwgPSBzb3VyY2UubGVuZ3RoOyBpIDwgaWw7ICsraSkge1xuICAgICAgICBpZiAodHlwZW9mIHNvdXJjZVtpXSAhPT0gJ3VuZGVmaW5lZCcpIHtcblxuICAgICAgICAgICAgb2JqW2ldID0gc291cmNlW2ldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbn07XG5cblxuZXhwb3J0cy5tZXJnZSA9IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXG4gICAgaWYgKCFzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHNvdXJjZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGFyZ2V0KSkge1xuICAgICAgICAgICAgdGFyZ2V0LnB1c2goc291cmNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldFtzb3VyY2VdID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0YXJnZXQgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHRhcmdldCA9IFt0YXJnZXRdLmNvbmNhdChzb3VyY2UpO1xuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KHRhcmdldCkgJiZcbiAgICAgICAgIUFycmF5LmlzQXJyYXkoc291cmNlKSkge1xuXG4gICAgICAgIHRhcmdldCA9IGV4cG9ydHMuYXJyYXlUb09iamVjdCh0YXJnZXQpO1xuICAgIH1cblxuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgICBmb3IgKHZhciBrID0gMCwga2wgPSBrZXlzLmxlbmd0aDsgayA8IGtsOyArK2spIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXNba107XG4gICAgICAgIHZhciB2YWx1ZSA9IHNvdXJjZVtrZXldO1xuXG4gICAgICAgIGlmICghdGFyZ2V0W2tleV0pIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IGV4cG9ydHMubWVyZ2UodGFyZ2V0W2tleV0sIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG59O1xuXG5cbmV4cG9ydHMuZGVjb2RlID0gZnVuY3Rpb24gKHN0cikge1xuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChzdHIucmVwbGFjZSgvXFwrL2csICcgJykpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG59O1xuXG5cbmV4cG9ydHMuY29tcGFjdCA9IGZ1bmN0aW9uIChvYmosIHJlZnMpIHtcblxuICAgIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyB8fFxuICAgICAgICBvYmogPT09IG51bGwpIHtcblxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIHJlZnMgPSByZWZzIHx8IFtdO1xuICAgIHZhciBsb29rdXAgPSByZWZzLmluZGV4T2Yob2JqKTtcbiAgICBpZiAobG9va3VwICE9PSAtMSkge1xuICAgICAgICByZXR1cm4gcmVmc1tsb29rdXBdO1xuICAgIH1cblxuICAgIHJlZnMucHVzaChvYmopO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgICAgICB2YXIgY29tcGFjdGVkID0gW107XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGlsID0gb2JqLmxlbmd0aDsgaSA8IGlsOyArK2kpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqW2ldICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbXBhY3RlZC5wdXNoKG9ialtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29tcGFjdGVkO1xuICAgIH1cblxuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICBmb3IgKGkgPSAwLCBpbCA9IGtleXMubGVuZ3RoOyBpIDwgaWw7ICsraSkge1xuICAgICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgb2JqW2tleV0gPSBleHBvcnRzLmNvbXBhY3Qob2JqW2tleV0sIHJlZnMpO1xuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG59O1xuXG5cbmV4cG9ydHMuaXNSZWdFeHAgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBSZWdFeHBdJztcbn07XG5cblxuZXhwb3J0cy5pc0J1ZmZlciA9IGZ1bmN0aW9uIChvYmopIHtcblxuICAgIGlmIChvYmogPT09IG51bGwgfHxcbiAgICAgICAgdHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuICEhKG9iai5jb25zdHJ1Y3RvciAmJlxuICAgICAgICBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIgJiZcbiAgICAgICAgb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyKG9iaikpO1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBFeGVjdXRpb25FbnZpcm9ubWVudFxuICovXG5cbi8qanNsaW50IGV2aWw6IHRydWUgKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBjYW5Vc2VET00gPSAhIShcbiAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gIHdpbmRvdy5kb2N1bWVudCAmJiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudClcbik7XG5cbi8qKlxuICogU2ltcGxlLCBsaWdodHdlaWdodCBtb2R1bGUgYXNzaXN0aW5nIHdpdGggdGhlIGRldGVjdGlvbiBhbmQgY29udGV4dCBvZlxuICogV29ya2VyLiBIZWxwcyBhdm9pZCBjaXJjdWxhciBkZXBlbmRlbmNpZXMgYW5kIGFsbG93cyBjb2RlIHRvIHJlYXNvbiBhYm91dFxuICogd2hldGhlciBvciBub3QgdGhleSBhcmUgaW4gYSBXb3JrZXIsIGV2ZW4gaWYgdGhleSBuZXZlciBpbmNsdWRlIHRoZSBtYWluXG4gKiBgUmVhY3RXb3JrZXJgIGRlcGVuZGVuY3kuXG4gKi9cbnZhciBFeGVjdXRpb25FbnZpcm9ubWVudCA9IHtcblxuICBjYW5Vc2VET006IGNhblVzZURPTSxcblxuICBjYW5Vc2VXb3JrZXJzOiB0eXBlb2YgV29ya2VyICE9PSAndW5kZWZpbmVkJyxcblxuICBjYW5Vc2VFdmVudExpc3RlbmVyczpcbiAgICBjYW5Vc2VET00gJiYgISEod2luZG93LmFkZEV2ZW50TGlzdGVuZXIgfHwgd2luZG93LmF0dGFjaEV2ZW50KSxcblxuICBjYW5Vc2VWaWV3cG9ydDogY2FuVXNlRE9NICYmICEhd2luZG93LnNjcmVlbixcblxuICBpc0luV29ya2VyOiAhY2FuVXNlRE9NIC8vIEZvciBub3csIHRoaXMgaXMgdHJ1ZSAtIG1pZ2h0IGNoYW5nZSBpbiB0aGUgZnV0dXJlLlxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEV4ZWN1dGlvbkVudmlyb25tZW50O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNC0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIE9iamVjdC5hc3NpZ25cbiAqL1xuXG4vLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtb2JqZWN0LmFzc2lnblxuXG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZXMpIHtcbiAgaWYgKHRhcmdldCA9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiB0YXJnZXQgY2Fubm90IGJlIG51bGwgb3IgdW5kZWZpbmVkJyk7XG4gIH1cblxuICB2YXIgdG8gPSBPYmplY3QodGFyZ2V0KTtcbiAgdmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuICBmb3IgKHZhciBuZXh0SW5kZXggPSAxOyBuZXh0SW5kZXggPCBhcmd1bWVudHMubGVuZ3RoOyBuZXh0SW5kZXgrKykge1xuICAgIHZhciBuZXh0U291cmNlID0gYXJndW1lbnRzW25leHRJbmRleF07XG4gICAgaWYgKG5leHRTb3VyY2UgPT0gbnVsbCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgdmFyIGZyb20gPSBPYmplY3QobmV4dFNvdXJjZSk7XG5cbiAgICAvLyBXZSBkb24ndCBjdXJyZW50bHkgc3VwcG9ydCBhY2Nlc3NvcnMgbm9yIHByb3hpZXMuIFRoZXJlZm9yZSB0aGlzXG4gICAgLy8gY29weSBjYW5ub3QgdGhyb3cuIElmIHdlIGV2ZXIgc3VwcG9ydGVkIHRoaXMgdGhlbiB3ZSBtdXN0IGhhbmRsZVxuICAgIC8vIGV4Y2VwdGlvbnMgYW5kIHNpZGUtZWZmZWN0cy4gV2UgZG9uJ3Qgc3VwcG9ydCBzeW1ib2xzIHNvIHRoZXkgd29uJ3RcbiAgICAvLyBiZSB0cmFuc2ZlcnJlZC5cblxuICAgIGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG4gICAgICAgIHRvW2tleV0gPSBmcm9tW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRvO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzc2lnbjtcbiIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBlbXB0eUZ1bmN0aW9uXG4gKi9cblxuZnVuY3Rpb24gbWFrZUVtcHR5RnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gYXJnO1xuICB9O1xufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gYWNjZXB0cyBhbmQgZGlzY2FyZHMgaW5wdXRzOyBpdCBoYXMgbm8gc2lkZSBlZmZlY3RzLiBUaGlzIGlzXG4gKiBwcmltYXJpbHkgdXNlZnVsIGlkaW9tYXRpY2FsbHkgZm9yIG92ZXJyaWRhYmxlIGZ1bmN0aW9uIGVuZHBvaW50cyB3aGljaFxuICogYWx3YXlzIG5lZWQgdG8gYmUgY2FsbGFibGUsIHNpbmNlIEpTIGxhY2tzIGEgbnVsbC1jYWxsIGlkaW9tIGFsYSBDb2NvYS5cbiAqL1xuZnVuY3Rpb24gZW1wdHlGdW5jdGlvbigpIHt9XG5cbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnMgPSBtYWtlRW1wdHlGdW5jdGlvbjtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNGYWxzZSA9IG1ha2VFbXB0eUZ1bmN0aW9uKGZhbHNlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUcnVlID0gbWFrZUVtcHR5RnVuY3Rpb24odHJ1ZSk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbCA9IG1ha2VFbXB0eUZ1bmN0aW9uKG51bGwpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RoaXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH07XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zQXJndW1lbnQgPSBmdW5jdGlvbihhcmcpIHsgcmV0dXJuIGFyZzsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBlbXB0eUZ1bmN0aW9uO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIGludmFyaWFudFxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIFVzZSBpbnZhcmlhbnQoKSB0byBhc3NlcnQgc3RhdGUgd2hpY2ggeW91ciBwcm9ncmFtIGFzc3VtZXMgdG8gYmUgdHJ1ZS5cbiAqXG4gKiBQcm92aWRlIHNwcmludGYtc3R5bGUgZm9ybWF0IChvbmx5ICVzIGlzIHN1cHBvcnRlZCkgYW5kIGFyZ3VtZW50c1xuICogdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IGJyb2tlIGFuZCB3aGF0IHlvdSB3ZXJlXG4gKiBleHBlY3RpbmcuXG4gKlxuICogVGhlIGludmFyaWFudCBtZXNzYWdlIHdpbGwgYmUgc3RyaXBwZWQgaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBpbnZhcmlhbnRcbiAqIHdpbGwgcmVtYWluIHRvIGVuc3VyZSBsb2dpYyBkb2VzIG5vdCBkaWZmZXIgaW4gcHJvZHVjdGlvbi5cbiAqL1xuXG52YXIgaW52YXJpYW50ID0gZnVuY3Rpb24oY29uZGl0aW9uLCBmb3JtYXQsIGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgaWYgKFwicHJvZHVjdGlvblwiICE9PSBwcm9jZXNzLmVudi5OT0RFX0VOVikge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgICdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICtcbiAgICAgICAgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJ1xuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgICdJbnZhcmlhbnQgVmlvbGF0aW9uOiAnICtcbiAgICAgICAgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJnc1thcmdJbmRleCsrXTsgfSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgZXJyb3IuZnJhbWVzVG9Qb3AgPSAxOyAvLyB3ZSBkb24ndCBjYXJlIGFib3V0IGludmFyaWFudCdzIG93biBmcmFtZVxuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGludmFyaWFudDtcbiIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTQtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSB3YXJuaW5nXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZShcIi4vZW1wdHlGdW5jdGlvblwiKTtcblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIHdhcm5pbmcgPSBlbXB0eUZ1bmN0aW9uO1xuXG5pZiAoXCJwcm9kdWN0aW9uXCIgIT09IHByb2Nlc3MuZW52Lk5PREVfRU5WKSB7XG4gIHdhcm5pbmcgPSBmdW5jdGlvbihjb25kaXRpb24sIGZvcm1hdCApIHtmb3IgKHZhciBhcmdzPVtdLCRfXzA9MiwkX18xPWFyZ3VtZW50cy5sZW5ndGg7JF9fMDwkX18xOyRfXzArKykgYXJncy5wdXNoKGFyZ3VtZW50c1skX18wXSk7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdgd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICtcbiAgICAgICAgJ21lc3NhZ2UgYXJndW1lbnQnXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChmb3JtYXQubGVuZ3RoIDwgMTAgfHwgL15bc1xcV10qJC8udGVzdChmb3JtYXQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdUaGUgd2FybmluZyBmb3JtYXQgc2hvdWxkIGJlIGFibGUgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyAnICtcbiAgICAgICAgJ3dhcm5pbmcuIFBsZWFzZSwgdXNlIGEgbW9yZSBkZXNjcmlwdGl2ZSBmb3JtYXQgdGhhbjogJyArIGZvcm1hdFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoZm9ybWF0LmluZGV4T2YoJ0ZhaWxlZCBDb21wb3NpdGUgcHJvcFR5cGU6ICcpID09PSAwKSB7XG4gICAgICByZXR1cm47IC8vIElnbm9yZSBDb21wb3NpdGVDb21wb25lbnQgcHJvcHR5cGUgY2hlY2suXG4gICAgfVxuXG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkgIHtyZXR1cm4gYXJnc1thcmdJbmRleCsrXTt9KTtcbiAgICAgIGNvbnNvbGUud2FybihtZXNzYWdlKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgICB9IGNhdGNoKHgpIHt9XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdhcm5pbmc7XG4iLCJ2YXIgQXBwID0gcmVxdWlyZSgnLi8uLi9hcHAvQXBwLmpzJyk7XG52YXIgVGVzdFV0aWxzID0gcmVxdWlyZSgncmVhY3QtYWRkb25zJykuVGVzdFV0aWxzO1xuXG5kZXNjcmliZShcIkFwcFwiLCBmdW5jdGlvbigpIHtcblxuICBpdChcInNob3VsZCBiZSB3cmFwcGVkIHdpdGggYSBkaXZcIiwgZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFwcCA9IFRlc3RVdGlscy5yZW5kZXJJbnRvRG9jdW1lbnQoQXBwKCkpO1xuICAgIGV4cGVjdChhcHAuZ2V0RE9NTm9kZSgpLnRhZ05hbWUpLnRvRXF1YWwoJ0RJVicpO1xuICB9KTtcblxufSk7Il19
