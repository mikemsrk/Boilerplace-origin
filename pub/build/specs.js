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
},{"../constants/AuthConstants":"/Users/mikemsrk/goflux/pub/app/constants/AuthConstants.js","../dispatchers/AppDispatcher":"/Users/mikemsrk/goflux/pub/app/dispatchers/AppDispatcher.js"}],"/Users/mikemsrk/goflux/pub/app/actions/ProfileActions.js":[function(require,module,exports){
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
  fetchOne: function(data){
    AppDispatcher.handleAction({
      actionType: ThreadConstants.FETCHONE,
      data: data
    });
  },

  vote: function(data){
    AppDispatcher.handleAction({
      actionType: ThreadConstants.VOTE,
      data: data
    });
  }

};

module.exports = ThreadActions;
},{"../constants/ThreadConstants":"/Users/mikemsrk/goflux/pub/app/constants/ThreadConstants.js","../dispatchers/AppDispatcher":"/Users/mikemsrk/goflux/pub/app/dispatchers/AppDispatcher.js"}],"/Users/mikemsrk/goflux/pub/app/components/front/front-threaditem.js":[function(require,module,exports){
var React = require('react');
var ReactIntl = require('react-intl');
var FormattedRelative = ReactIntl.FormattedRelative;
var FormattedDate = ReactIntl.FormattedDate;

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
    return (
      React.createElement("tr", null, 
        React.createElement("td", null, 
          React.createElement("a", {href: "#", ref: "down", className: "glyphicon glyphicon-chevron-down", "aria-hidden": "true", onClick: this.downVote}), " ", this.props.item.rating, " ", React.createElement("a", {href: "#", ref: "up", className: "glyphicon glyphicon-chevron-up", "aria-hidden": "true", onClick: this.upVote})), 
        React.createElement("td", null, this.props.item.title), 
        React.createElement("td", null, this.props.item.body), 
        React.createElement("td", null, "User: ", this.props.item.creator_user_id), 

        React.createElement("td", null, 
          React.createElement(FormattedDate, {
            value: new Date(this.props.item.creation_time), 
            day: "numeric", 
            month: "long", 
            year: "numeric"})
        ), 

        React.createElement("td", null, 
          React.createElement(FormattedRelative, {
            value: String(this.props.item.last_update_time)})
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

  render: function() {
    return (
      React.createElement("div", {className: "threads"}, 
        
          React.createElement("h3", null, "Front Page"), 
          React.createElement("table", {className: "table"}, 
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
                    React.createElement(ThreadItem, {ref: "thread", onUpVote: this.upVote, onDownVote: this.downVote, key: item.thread_id, item: item})
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
        React.createElement("p", null, "Id: ", this.props.item.id), 

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

// Front page thread list
var ProfileThreadItem = React.createClass({displayName: "ProfileThreadItem",

  render: function() {
    return (
      React.createElement("tr", null, 
        React.createElement("td", null, this.props.item.rating), 
        React.createElement("td", null, this.props.item.title), 
        React.createElement("td", null, this.props.item.body), 
        React.createElement("td", null, "User: ", this.props.item.creator_user_id), 
        
        React.createElement("td", null, 
          React.createElement(FormattedDate, {
            value: new Date(this.props.item.creation_time), 
            day: "numeric", 
            month: "long", 
            year: "numeric"})
        ), 

        React.createElement("td", null, 
          React.createElement(FormattedRelative, {
            value: String(this.props.item.last_update_time)})
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
        React.createElement("table", {className: "table"}, 
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

var Thread = React.createClass({displayName: "Thread",
  getInitialState: function(){
    return {
      
    };
  },
  render: function() {

  }
});

module.exports = Thread;
},{"react":"react"}],"/Users/mikemsrk/goflux/pub/app/constants/AuthConstants.js":[function(require,module,exports){
var AuthConstants = {
  SIGNUP: 'SIGNUP',
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT'
};

module.exports = AuthConstants;
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
  FETCHONE: 'FETCHONE',
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

var fetchOne = function(callback) {
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
  fetchOne: function(callback) {
    var that = this;
    fetchThread((function(res) {
        if (callback) {
          callback(res);
        }
        that.onChange(res);
    }));
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
},{"../constants/AuthConstants":"/Users/mikemsrk/goflux/pub/app/constants/AuthConstants.js","../dispatchers/AppDispatcher":"/Users/mikemsrk/goflux/pub/app/dispatchers/AppDispatcher.js","../services/AuthService":"/Users/mikemsrk/goflux/pub/app/services/AuthService.js","events":"/Users/mikemsrk/goflux/pub/node_modules/browserify/node_modules/events/events.js","object-assign":"/Users/mikemsrk/goflux/pub/node_modules/object-assign/index.js"}],"/Users/mikemsrk/goflux/pub/app/stores/ProfileStore.js":[function(require,module,exports){
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

  update: function(bio,avatar){
    // var that = this;
    // Thread.update(bio,avatar,function(data){
    //   console.log('update successful');
    //   that.fetch();
    // });
  },

  delete: function(){


  },

  vote: function(thread_id,score){
    var that = this;
    Thread.vote(thread_id,score,function(data){
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
    case ThreadConstants.FETCHPAGE:
      ThreadStore.fetchPage(action.data.page);
      ThreadStore.emitChange();
      break;
    case ThreadConstants.FETCHUSERPAGE:
      ThreadStore.fetchUserPage(action.data.page);
      ThreadStore.emitChange();
      break;
    case ThreadConstants.FETCHONE:
      // ThreadStore.fetch(action.data.page);
      ThreadStore.emitChange();
      break;
    case ThreadConstants.ADD:
      ThreadStore.add(action.data.title,action.data.body);
      break;
    case ThreadConstants.UPDATE:
      // ThreadStore.delete();
      break;
    case ThreadConstants.DELETE:
      // ThreadStore.delete();
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvQXBwLmpzIiwiYXBwL2FjdGlvbnMvQXV0aEFjdGlvbnMuanMiLCJhcHAvYWN0aW9ucy9Qcm9maWxlQWN0aW9ucy5qcyIsImFwcC9hY3Rpb25zL1RocmVhZEFjdGlvbnMuanMiLCJhcHAvY29tcG9uZW50cy9mcm9udC9mcm9udC10aHJlYWRpdGVtLmpzIiwiYXBwL2NvbXBvbmVudHMvZnJvbnQvZnJvbnQtdGhyZWFkcy5qcyIsImFwcC9jb21wb25lbnRzL2Zyb250L2Zyb250LmpzIiwiYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4tZm9ybS5qcyIsImFwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmpzIiwiYXBwL2NvbXBvbmVudHMvbG9nb3V0L2xvZ291dC5qcyIsImFwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuanMiLCJhcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUtYmlvLmpzIiwiYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLXRocmVhZGl0ZW0uanMiLCJhcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUtdGhyZWFkcy5qcyIsImFwcC9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5qcyIsImFwcC9jb21wb25lbnRzL3NpZ251cC9zaWdudXAtZm9ybS5qcyIsImFwcC9jb21wb25lbnRzL3NpZ251cC9zaWdudXAuanMiLCJhcHAvY29tcG9uZW50cy90aHJlYWQvbmV3LmpzIiwiYXBwL2NvbXBvbmVudHMvdGhyZWFkL3RocmVhZC5qcyIsImFwcC9jb25zdGFudHMvQXV0aENvbnN0YW50cy5qcyIsImFwcC9jb25zdGFudHMvUHJvZmlsZUNvbnN0YW50cy5qcyIsImFwcC9jb25zdGFudHMvVGhyZWFkQ29uc3RhbnRzLmpzIiwiYXBwL2Rpc3BhdGNoZXJzL0FwcERpc3BhdGNoZXIuanMiLCJhcHAvc2VydmljZXMvQXV0aFNlcnZpY2UuanMiLCJhcHAvc2VydmljZXMvUHJvZmlsZVNlcnZpY2UuanMiLCJhcHAvc2VydmljZXMvVGhyZWFkU2VydmljZS5qcyIsImFwcC9zdG9yZXMvQXV0aFN0b3JlLmpzIiwiYXBwL3N0b3Jlcy9Qcm9maWxlU3RvcmUuanMiLCJhcHAvc3RvcmVzL1RocmVhZFN0b3JlLmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcmVzb2x2ZS9lbXB0eS5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9ldmVudHMvZXZlbnRzLmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIm5vZGVfbW9kdWxlcy9mbHV4L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2ZsdXgvbGliL0Rpc3BhdGNoZXIuanMiLCJub2RlX21vZHVsZXMvZmx1eC9saWIvaW52YXJpYW50LmpzIiwibm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMiLCJub2RlX21vZHVsZXMvcmVhY3QtaW50bC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1pbnRsL2xpYi9jb21wb25lbnRzL2RhdGUuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtaW50bC9saWIvY29tcG9uZW50cy9odG1sLW1lc3NhZ2UuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtaW50bC9saWIvY29tcG9uZW50cy9tZXNzYWdlLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWludGwvbGliL2NvbXBvbmVudHMvbnVtYmVyLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWludGwvbGliL2NvbXBvbmVudHMvcmVsYXRpdmUuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtaW50bC9saWIvY29tcG9uZW50cy90aW1lLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWludGwvbGliL2VuLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWludGwvbGliL2VzY2FwZS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1pbnRsL2xpYi9taXhpbi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1pbnRsL2xpYi9yZWFjdC1pbnRsLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWludGwvbGliL3JlYWN0LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWludGwvbm9kZV9tb2R1bGVzL2ludGwtZm9ybWF0LWNhY2hlL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWludGwvbm9kZV9tb2R1bGVzL2ludGwtZm9ybWF0LWNhY2hlL2xpYi9lczUuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtaW50bC9ub2RlX21vZHVsZXMvaW50bC1mb3JtYXQtY2FjaGUvbGliL21lbW9pemVyLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWludGwvbm9kZV9tb2R1bGVzL2ludGwtbWVzc2FnZWZvcm1hdC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1pbnRsL25vZGVfbW9kdWxlcy9pbnRsLW1lc3NhZ2Vmb3JtYXQvbGliL2NvbXBpbGVyLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWludGwvbm9kZV9tb2R1bGVzL2ludGwtbWVzc2FnZWZvcm1hdC9saWIvY29yZS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1pbnRsL25vZGVfbW9kdWxlcy9pbnRsLW1lc3NhZ2Vmb3JtYXQvbGliL2VuLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWludGwvbm9kZV9tb2R1bGVzL2ludGwtbWVzc2FnZWZvcm1hdC9saWIvZXM1LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWludGwvbm9kZV9tb2R1bGVzL2ludGwtbWVzc2FnZWZvcm1hdC9saWIvbWFpbi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1pbnRsL25vZGVfbW9kdWxlcy9pbnRsLW1lc3NhZ2Vmb3JtYXQvbGliL3V0aWxzLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWludGwvbm9kZV9tb2R1bGVzL2ludGwtbWVzc2FnZWZvcm1hdC9ub2RlX21vZHVsZXMvaW50bC1tZXNzYWdlZm9ybWF0LXBhcnNlci9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1pbnRsL25vZGVfbW9kdWxlcy9pbnRsLW1lc3NhZ2Vmb3JtYXQvbm9kZV9tb2R1bGVzL2ludGwtbWVzc2FnZWZvcm1hdC1wYXJzZXIvbGliL3BhcnNlci5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1pbnRsL25vZGVfbW9kdWxlcy9pbnRsLXJlbGF0aXZlZm9ybWF0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWludGwvbm9kZV9tb2R1bGVzL2ludGwtcmVsYXRpdmVmb3JtYXQvbGliL2NvcmUuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtaW50bC9ub2RlX21vZHVsZXMvaW50bC1yZWxhdGl2ZWZvcm1hdC9saWIvZGlmZi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1pbnRsL25vZGVfbW9kdWxlcy9pbnRsLXJlbGF0aXZlZm9ybWF0L2xpYi9lczUuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9DYW5jZWxsYXRpb24uanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9IaXN0b3J5LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvTWF0Y2guanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9OYXZpZ2F0aW9uLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvUGF0aFV0aWxzLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvUHJvcFR5cGVzLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvUmVkaXJlY3QuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9Sb3V0ZS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL1Njcm9sbEhpc3RvcnkuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9TdGF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL1RyYW5zaXRpb24uanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9hY3Rpb25zL0xvY2F0aW9uQWN0aW9ucy5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2JlaGF2aW9ycy9JbWl0YXRlQnJvd3NlckJlaGF2aW9yLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvYmVoYXZpb3JzL1Njcm9sbFRvVG9wQmVoYXZpb3IuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9jb21wb25lbnRzL0NvbnRleHRXcmFwcGVyLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvY29tcG9uZW50cy9EZWZhdWx0Um91dGUuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9jb21wb25lbnRzL0xpbmsuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9jb21wb25lbnRzL05vdEZvdW5kUm91dGUuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9jb21wb25lbnRzL1JlZGlyZWN0LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvY29tcG9uZW50cy9Sb3V0ZS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2NvbXBvbmVudHMvUm91dGVIYW5kbGVyLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvY3JlYXRlUm91dGVyLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvY3JlYXRlUm91dGVzRnJvbVJlYWN0Q2hpbGRyZW4uanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9nZXRXaW5kb3dTY3JvbGxQb3NpdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvaXNSZWFjdENoaWxkcmVuLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvbG9jYXRpb25zL0hhc2hMb2NhdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2xvY2F0aW9ucy9IaXN0b3J5TG9jYXRpb24uanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9sb2NhdGlvbnMvUmVmcmVzaExvY2F0aW9uLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvbG9jYXRpb25zL1N0YXRpY0xvY2F0aW9uLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvbG9jYXRpb25zL1Rlc3RMb2NhdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL3J1blJvdXRlci5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL3N1cHBvcnRzSGlzdG9yeS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL25vZGVfbW9kdWxlcy9xcy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbm9kZV9tb2R1bGVzL3FzL2xpYi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbm9kZV9tb2R1bGVzL3FzL2xpYi9wYXJzZS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbm9kZV9tb2R1bGVzL3FzL2xpYi9zdHJpbmdpZnkuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL25vZGVfbW9kdWxlcy9xcy9saWIvdXRpbHMuanMiLCJub2RlX21vZHVsZXMvcmVhY3QvbGliL0V4ZWN1dGlvbkVudmlyb25tZW50LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0L2xpYi9PYmplY3QuYXNzaWduLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0L2xpYi9lbXB0eUZ1bmN0aW9uLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0L2xpYi9pbnZhcmlhbnQuanMiLCJub2RlX21vZHVsZXMvcmVhY3QvbGliL3dhcm5pbmcuanMiLCJzcGVjcy9BcHAtc3BlYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL01BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hIQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdlFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNXpDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeFNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUMzR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNqZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJvdXRlciA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpO1xuXG52YXIgTmF2YmFyID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL25hdmJhci9uYXZiYXInKTtcbnZhciBQcm9maWxlID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZScpO1xudmFyIEZyb250ID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2Zyb250L2Zyb250Jyk7XG52YXIgTG9naW4gPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvbG9naW4vbG9naW4nKTtcbnZhciBMb2dvdXQgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvbG9nb3V0L2xvZ291dCcpO1xudmFyIFNpZ251cCA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9zaWdudXAvc2lnbnVwJyk7XG52YXIgTmV3VGhyZWFkID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL3RocmVhZC9uZXcnKTtcbnZhciBUaHJlYWQgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvdGhyZWFkL3RocmVhZCcpO1xuXG52YXIgUm91dGUgPSBSb3V0ZXIuUm91dGU7XG52YXIgRGVmYXVsdFJvdXRlID0gUm91dGVyLkRlZmF1bHRSb3V0ZTtcbnZhciBSb3V0ZUhhbmRsZXIgPSBSb3V0ZXIuUm91dGVIYW5kbGVyO1xudmFyIE5hdmlnYXRpb24gPSBSb3V0ZXIuTmF2aWdhdGlvbjtcbnZhciBMaW5rID0gUm91dGVyLkxpbms7XG5cbnZhciBBcHAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiQXBwXCIsXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpe1xuICAgIHJldHVybiB7XG4gICAgICAvLyBsb2dnZWRJbjogQXV0aC5sb2dnZWRJbigpXG4gICAgfTtcbiAgfSxcblxuICBzZXRTdGF0ZU9uQXV0aDogZnVuY3Rpb24obG9nZ2VkSW4pe1xuICAgIC8vIHRoaXMuc2V0U3RhdGUoe1xuICAgIC8vICAgbG9nZ2VkSW46IGxvZ2dlZEluXG4gICAgLy8gfSk7XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbE1vdW50OiBmdW5jdGlvbigpe1xuICAgIC8vIEF1dGgub25DaGFuZ2UgPSB0aGlzLnNldFN0YXRlT25BdXRoO1xuICB9LFxuICBcbiAgcmVuZGVyOiBmdW5jdGlvbigpe1xuICAgIHJldHVybiAoXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiY29udGFpbmVyLWZsdWlkXCJ9LCBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChOYXZiYXIsIG51bGwpLCBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZUhhbmRsZXIsIG51bGwpXG4gICAgICApXG4gICAgKTtcbiAgfVxufSk7XG5cbnZhciByb3V0ZXMgPSAoXG4gIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHtwYXRoOiBcIi9cIiwgaGFuZGxlcjogQXBwfSwgXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChEZWZhdWx0Um91dGUsIHtoYW5kbGVyOiBGcm9udH0pLCBcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7cGF0aDogXCJwcm9maWxlXCIsIGhhbmRsZXI6IFByb2ZpbGV9KSwgXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwge3BhdGg6IFwibG9naW5cIiwgaGFuZGxlcjogTG9naW59KSwgXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwge3BhdGg6IFwibG9nb3V0XCIsIGhhbmRsZXI6IExvZ291dH0pLCBcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7cGF0aDogXCJzaWdudXBcIiwgaGFuZGxlcjogU2lnbnVwfSksIFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHtwYXRoOiBcIm5ld1wiLCBoYW5kbGVyOiBOZXdUaHJlYWR9KVxuICApXG4pO1xuXG5cblJvdXRlci5ydW4ocm91dGVzLCBSb3V0ZXIuSGFzaExvY2F0aW9uLCBmdW5jdGlvbihSb290KXtcbiAgUmVhY3QucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm9vdCwgbnVsbCksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG59KTtcblx0XG5tb2R1bGUuZXhwb3J0cyA9IEFwcDtcbiIsInZhciBBcHBEaXNwYXRjaGVyID0gcmVxdWlyZSgnLi4vZGlzcGF0Y2hlcnMvQXBwRGlzcGF0Y2hlcicpO1xudmFyIEF1dGhDb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMvQXV0aENvbnN0YW50cycpO1xuXG52YXIgQXV0aEFjdGlvbnMgPSB7XG4gIHNpZ251cDogZnVuY3Rpb24oZGF0YSl7XG4gICAgQXBwRGlzcGF0Y2hlci5oYW5kbGVBY3Rpb24oe1xuICAgICAgYWN0aW9uVHlwZTogQXV0aENvbnN0YW50cy5TSUdOVVAsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSk7XG4gIH0sXG4gIGxvZ2luOiBmdW5jdGlvbihkYXRhKXtcbiAgICBBcHBEaXNwYXRjaGVyLmhhbmRsZUFjdGlvbih7XG4gICAgICBhY3Rpb25UeXBlOiBBdXRoQ29uc3RhbnRzLkxPR0lOLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pO1xuICB9LFxuICBsb2dvdXQ6IGZ1bmN0aW9uKCl7XG4gICAgQXBwRGlzcGF0Y2hlci5oYW5kbGVBY3Rpb24oe1xuICAgICAgYWN0aW9uVHlwZTogQXV0aENvbnN0YW50cy5MT0dPVVQsXG4gICAgICBkYXRhOiBudWxsXG4gICAgfSk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQXV0aEFjdGlvbnM7IiwidmFyIEFwcERpc3BhdGNoZXIgPSByZXF1aXJlKCcuLi9kaXNwYXRjaGVycy9BcHBEaXNwYXRjaGVyJyk7XG52YXIgUHJvZmlsZUNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cy9Qcm9maWxlQ29uc3RhbnRzJyk7XG5cbnZhciBQcm9maWxlQWN0aW9ucyA9IHtcbiAgZmV0Y2g6IGZ1bmN0aW9uKCl7XG4gICAgQXBwRGlzcGF0Y2hlci5oYW5kbGVBY3Rpb24oe1xuICAgICAgYWN0aW9uVHlwZTogUHJvZmlsZUNvbnN0YW50cy5GRVRDSFxuICAgIH0pO1xuICB9LFxuICB1cGRhdGU6IGZ1bmN0aW9uKGRhdGEpe1xuICAgIEFwcERpc3BhdGNoZXIuaGFuZGxlQWN0aW9uKHtcbiAgICAgIGFjdGlvblR5cGU6IFByb2ZpbGVDb25zdGFudHMuVVBEQVRFLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pO1xuICB9LFxuICBkZWxldGU6IGZ1bmN0aW9uKCl7XG4gICAgQXBwRGlzcGF0Y2hlci5oYW5kbGVBY3Rpb24oe1xuICAgICAgYWN0aW9uVHlwZTogUHJvZmlsZUNvbnN0YW50cy5ERUxFVEUsXG4gICAgICBkYXRhOiBudWxsXG4gICAgfSk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvZmlsZUFjdGlvbnM7IiwidmFyIEFwcERpc3BhdGNoZXIgPSByZXF1aXJlKCcuLi9kaXNwYXRjaGVycy9BcHBEaXNwYXRjaGVyJyk7XG52YXIgVGhyZWFkQ29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzL1RocmVhZENvbnN0YW50cycpO1xuXG52YXIgVGhyZWFkQWN0aW9ucyA9IHtcbiAgYWRkOiBmdW5jdGlvbihkYXRhKXtcbiAgICBBcHBEaXNwYXRjaGVyLmhhbmRsZUFjdGlvbih7XG4gICAgICBhY3Rpb25UeXBlOiBUaHJlYWRDb25zdGFudHMuQURELFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pO1xuICB9LFxuICAvLyBGZXRjaGVzIGEgcGFnZSBvZiB0aHJlYWRzXG4gIGZldGNoUGFnZTogZnVuY3Rpb24oZGF0YSl7XG4gICAgQXBwRGlzcGF0Y2hlci5oYW5kbGVBY3Rpb24oe1xuICAgICAgYWN0aW9uVHlwZTogVGhyZWFkQ29uc3RhbnRzLkZFVENIUEFHRSxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KTtcbiAgfSxcblxuICBmZXRjaFVzZXJQYWdlOiBmdW5jdGlvbihkYXRhKXtcbiAgICBBcHBEaXNwYXRjaGVyLmhhbmRsZUFjdGlvbih7XG4gICAgICBhY3Rpb25UeXBlOiBUaHJlYWRDb25zdGFudHMuRkVUQ0hVU0VSUEFHRSxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KTtcbiAgfSxcblxuICAvLyBGZXRjaGVzIG9uZSB0aHJlYWQgb25seVxuICBmZXRjaE9uZTogZnVuY3Rpb24oZGF0YSl7XG4gICAgQXBwRGlzcGF0Y2hlci5oYW5kbGVBY3Rpb24oe1xuICAgICAgYWN0aW9uVHlwZTogVGhyZWFkQ29uc3RhbnRzLkZFVENIT05FLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pO1xuICB9LFxuXG4gIHZvdGU6IGZ1bmN0aW9uKGRhdGEpe1xuICAgIEFwcERpc3BhdGNoZXIuaGFuZGxlQWN0aW9uKHtcbiAgICAgIGFjdGlvblR5cGU6IFRocmVhZENvbnN0YW50cy5WT1RFLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pO1xuICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVGhyZWFkQWN0aW9uczsiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJlYWN0SW50bCA9IHJlcXVpcmUoJ3JlYWN0LWludGwnKTtcbnZhciBGb3JtYXR0ZWRSZWxhdGl2ZSA9IFJlYWN0SW50bC5Gb3JtYXR0ZWRSZWxhdGl2ZTtcbnZhciBGb3JtYXR0ZWREYXRlID0gUmVhY3RJbnRsLkZvcm1hdHRlZERhdGU7XG5cbi8vIEZyb250IHBhZ2UgdGhyZWFkIGxpc3RcbnZhciBUaHJlYWRJdGVtID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIlRocmVhZEl0ZW1cIixcblxuICB1cFZvdGU6IGZ1bmN0aW9uKCl7XG4gICAgdGhpcy5wcm9wcy5vblVwVm90ZSh0aGlzLnByb3BzLml0ZW0udGhyZWFkX2lkKTtcbiAgICBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnMudXApLmNsYXNzTmFtZSA9ICcnO1xuICAgIFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmcy5kb3duKS5jbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLWNoZXZyb24tZG93blwiXG4gICAgdGhpcy5wcm9wcy5pdGVtLnJhdGluZysrO1xuICB9LFxuXG4gIGRvd25Wb3RlOiBmdW5jdGlvbigpe1xuICAgIHRoaXMucHJvcHMub25Eb3duVm90ZSh0aGlzLnByb3BzLml0ZW0udGhyZWFkX2lkKTtcbiAgICBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnMuZG93bikuY2xhc3NOYW1lID0gJyc7XG4gICAgUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzLnVwKS5jbGFzc05hbWUgPSBcImdseXBoaWNvbiBnbHlwaGljb24tY2hldnJvbi11cFwiO1xuICAgIHRoaXMucHJvcHMuaXRlbS5yYXRpbmctLTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAoXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidHJcIiwgbnVsbCwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBudWxsLCBcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7aHJlZjogXCIjXCIsIHJlZjogXCJkb3duXCIsIGNsYXNzTmFtZTogXCJnbHlwaGljb24gZ2x5cGhpY29uLWNoZXZyb24tZG93blwiLCBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBvbkNsaWNrOiB0aGlzLmRvd25Wb3RlfSksIFwiIFwiLCB0aGlzLnByb3BzLml0ZW0ucmF0aW5nLCBcIiBcIiwgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwge2hyZWY6IFwiI1wiLCByZWY6IFwidXBcIiwgY2xhc3NOYW1lOiBcImdseXBoaWNvbiBnbHlwaGljb24tY2hldnJvbi11cFwiLCBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBvbkNsaWNrOiB0aGlzLnVwVm90ZX0pKSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBudWxsLCB0aGlzLnByb3BzLml0ZW0udGl0bGUpLCBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIG51bGwsIHRoaXMucHJvcHMuaXRlbS5ib2R5KSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBudWxsLCBcIlVzZXI6IFwiLCB0aGlzLnByb3BzLml0ZW0uY3JlYXRvcl91c2VyX2lkKSwgXG5cbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIG51bGwsIFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybWF0dGVkRGF0ZSwge1xuICAgICAgICAgICAgdmFsdWU6IG5ldyBEYXRlKHRoaXMucHJvcHMuaXRlbS5jcmVhdGlvbl90aW1lKSwgXG4gICAgICAgICAgICBkYXk6IFwibnVtZXJpY1wiLCBcbiAgICAgICAgICAgIG1vbnRoOiBcImxvbmdcIiwgXG4gICAgICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIn0pXG4gICAgICAgICksIFxuXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBudWxsLCBcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1hdHRlZFJlbGF0aXZlLCB7XG4gICAgICAgICAgICB2YWx1ZTogU3RyaW5nKHRoaXMucHJvcHMuaXRlbS5sYXN0X3VwZGF0ZV90aW1lKX0pXG4gICAgICAgIClcblxuICAgICAgKVxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRocmVhZEl0ZW07IiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBUaHJlYWRTdG9yZSA9IHJlcXVpcmUoJy4uLy4uL3N0b3Jlcy9UaHJlYWRTdG9yZScpO1xudmFyIFRocmVhZEFjdGlvbnMgPSByZXF1aXJlKCcuLi8uLi9hY3Rpb25zL1RocmVhZEFjdGlvbnMnKTtcbnZhciBUaHJlYWRJdGVtID0gcmVxdWlyZSgnLi9mcm9udC10aHJlYWRpdGVtJyk7XG5cbi8vIEZyb250IHBhZ2UgdGhyZWFkc1xuLy8gRmV0Y2ggdGhyZWFkcyBieSByYXRpbmcgYnkgcGFnZVxuXG52YXIgVGhyZWFkcyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJUaHJlYWRzXCIsXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4ge1xuICAgICAgcGFnZTogMSxcbiAgICAgIHRocmVhZHM6IFtdXG4gICAgfTtcbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKXtcbiAgICBUaHJlYWRBY3Rpb25zLmZldGNoUGFnZSh7cGFnZTp0aGlzLnN0YXRlLnBhZ2V9KTtcbiAgICBUaHJlYWRTdG9yZS5hZGRDaGFuZ2VMaXN0ZW5lcih0aGlzLl9vbkNoYW5nZSk7XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uKCl7XG4gICAgVGhyZWFkU3RvcmUucmVtb3ZlQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25DaGFuZ2UpO1xuICB9LFxuXG4gIF9vbkNoYW5nZTogZnVuY3Rpb24oKXtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRocmVhZHM6IFRocmVhZFN0b3JlLmdldFRocmVhZHMoKS5mb3J1bVRocmVhZHNcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnRocmVhZHMpO1xuICB9LFxuXG4gIHVwVm90ZTogZnVuY3Rpb24oaWQpe1xuICAgIC8vIFRPRE86IGNhbGwgdGhyZWFkIGFjdGlvbiB0byB1cHZvdGVcbiAgICBUaHJlYWRBY3Rpb25zLnZvdGUoe3RocmVhZF9pZDppZCxzY29yZToxfSk7XG4gIH0sXG5cbiAgZG93blZvdGU6IGZ1bmN0aW9uKGlkKXtcbiAgICAvLyBUT0RPOiBjYWxsIHRocmVhZCBhY3Rpb24gdG8gZG93bnZvdGVcbiAgICBUaHJlYWRBY3Rpb25zLnZvdGUoe3RocmVhZF9pZDppZCxzY29yZTotMX0pO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJ0aHJlYWRzXCJ9LCBcbiAgICAgICAgXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgzXCIsIG51bGwsIFwiRnJvbnQgUGFnZVwiKSwgXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRhYmxlXCIsIHtjbGFzc05hbWU6IFwidGFibGVcIn0sIFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRoZWFkXCIsIG51bGwsIFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidHJcIiwgbnVsbCwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRoXCIsIG51bGwsIFwiUmF0aW5nXCIpLCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGhcIiwgbnVsbCwgXCJUaXRsZVwiKSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRoXCIsIG51bGwsIFwiQm9keVwiKSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRoXCIsIG51bGwsIFwiU3VibWl0dGVkXCIpLCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGhcIiwgbnVsbCwgXCJDcmVhdGVkXCIpLCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGhcIiwgbnVsbCwgXCJVcGRhdGVkXCIpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICksIFxuXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIiwgbnVsbCwgXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudGhyZWFkcy5tYXAoZnVuY3Rpb24oaXRlbSl7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRocmVhZEl0ZW0sIHtyZWY6IFwidGhyZWFkXCIsIG9uVXBWb3RlOiB0aGlzLnVwVm90ZSwgb25Eb3duVm90ZTogdGhpcy5kb3duVm90ZSwga2V5OiBpdGVtLnRocmVhZF9pZCwgaXRlbTogaXRlbX0pXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0sdGhpcylcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICApXG4gICAgICAgICAgXG4gICAgICApXG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVGhyZWFkczsiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFRocmVhZHMgPSByZXF1aXJlKCcuL2Zyb250LXRocmVhZHMnKTtcbnZhciBMaW5rID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJykuTGluaztcbnZhciBBdXRoU3RvcmUgPSByZXF1aXJlKCcuLi8uLi9zdG9yZXMvQXV0aFN0b3JlJyk7XG5cbnZhciBGcm9udCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJGcm9udFwiLFxuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4ge1xuICAgICAgbG9nZ2VkSW46IEF1dGhTdG9yZS5sb2dnZWRJbigpXG4gICAgfTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsTW91bnQ6IGZ1bmN0aW9uKCl7XG4gICAgQXV0aFN0b3JlLmFkZENoYW5nZUxpc3RlbmVyKHRoaXMuX29uQ2hhbmdlKTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24oKXtcbiAgICBBdXRoU3RvcmUucmVtb3ZlQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25DaGFuZ2UpO1xuICB9LFxuXG4gIF9vbkNoYW5nZTogZnVuY3Rpb24oKXtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGxvZ2dlZEluOiBBdXRoU3RvcmUubG9nZ2VkSW4oKVxuICAgIH0pO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJjb2wtbWQtMTJcIn0sIFxuICAgICAgICB0aGlzLnN0YXRlLmxvZ2dlZEluID8gKFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHtjbGFzc05hbWU6IFwiYnRuIGJ0bi1pbmZvXCIsIHRvOiBcIi9uZXdcIn0sIFwiTmV3XCIpXG4gICAgICAgICk6IG51bGwsIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRocmVhZHMsIG51bGwpXG4gICAgICApXG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRnJvbnQ7IiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSb3V0ZXIgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKTtcbnZhciBMaW5rID0gUm91dGVyLkxpbms7XG5cbnZhciBMb2dpbkZvcm0gPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiTG9naW5Gb3JtXCIsXG4gIGhhbmRsZVN1Ym1pdDogZnVuY3Rpb24oZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHZhciB1c2VybmFtZSA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmcy51c2VybmFtZSkudmFsdWUudHJpbSgpO1xuICAgIHZhciBwYXNzd29yZCA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmcy5wYXNzd29yZCkudmFsdWUudHJpbSgpO1xuICAgIGlmKCF1c2VybmFtZSB8fCAhcGFzc3dvcmQpe1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBTZW5kIHJlcXVlc3QgYmFjayB1cCB0byBMb2dpblxuICAgIHRoaXMucHJvcHMub25Mb2dpblN1Ym1pdCh7dXNlcm5hbWU6IHVzZXJuYW1lLCBwYXNzd29yZDogcGFzc3dvcmR9KTtcbiAgICBcbiAgICBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnMudXNlcm5hbWUpLnZhbHVlID0gJyc7XG4gICAgUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzLnBhc3N3b3JkKS52YWx1ZSA9ICcnO1xuICAgIHJldHVybjtcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbigpe1xuICAgIHJldHVybiAoXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiLCB7Y2xhc3NOYW1lOiBcImxvZ2luRm9ybVwiLCBvblN1Ym1pdDogdGhpcy5oYW5kbGVTdWJtaXR9LCBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHt0eXBlOiBcInRleHRcIiwgY2xhc3NOYW1lOiBcImZvcm0tY29udHJvbFwiLCBwbGFjZWhvbGRlcjogXCJVc2VybmFtZVwiLCByZWY6IFwidXNlcm5hbWVcIn0pLCBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHt0eXBlOiBcInBhc3N3b3JkXCIsIGNsYXNzTmFtZTogXCJmb3JtLWNvbnRyb2xcIiwgcGxhY2Vob2xkZXI6IFwiUGFzc3dvcmRcIiwgcmVmOiBcInBhc3N3b3JkXCJ9KSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywge2NsYXNzTmFtZTogXCJidG4gYnRuLWluZm9cIiwgdG86IFwiL3NpZ251cFwifSwgXCJSZWdpc3RlclwiKSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwge3R5cGU6IFwic3VibWl0XCIsIGNsYXNzTmFtZTogXCJidG4gYnRuLXN1Y2Nlc3NcIiwgdmFsdWU6IFwiU3VibWl0XCJ9LCBcIlN1Ym1pdFwiKVxuICAgICAgKVxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IExvZ2luRm9ybTsiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIExvZ2luRm9ybSA9IHJlcXVpcmUoJy4vbG9naW4tZm9ybScpO1xudmFyIEF1dGhBY3Rpb25zID0gcmVxdWlyZSgnLi4vLi4vYWN0aW9ucy9BdXRoQWN0aW9ucycpO1xudmFyIEF1dGhTdG9yZSA9IHJlcXVpcmUoJy4uLy4uL3N0b3Jlcy9BdXRoU3RvcmUnKTtcblxudmFyIExvZ2luID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIkxvZ2luXCIsXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4ge1xuICAgICAgbG9nZ2VkSW46IEF1dGhTdG9yZS5sb2dnZWRJbigpLFxuICAgICAgZXJyb3I6IEF1dGhTdG9yZS5lcnJvcigpXG4gICAgfTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsTW91bnQ6IGZ1bmN0aW9uKCl7XG4gICAgQXV0aFN0b3JlLmFkZENoYW5nZUxpc3RlbmVyKHRoaXMuX29uQ2hhbmdlKTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24oKXtcbiAgICBBdXRoU3RvcmUucmVtb3ZlQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25DaGFuZ2UpO1xuICB9LFxuXG4gIF9vbkNoYW5nZTogZnVuY3Rpb24oKXtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGxvZ2dlZEluOiBBdXRoU3RvcmUubG9nZ2VkSW4oKSxcbiAgICAgIGVycm9yOiBBdXRoU3RvcmUuZXJyb3IoKVxuICAgIH0pO1xuICAgIGlmKHRoaXMuc3RhdGUubG9nZ2VkSW4pe1xuICAgICAgbG9jYXRpb24uaGFzaCA9ICcvJztcbiAgICB9XG4gIH0sXG5cbiAgaGFuZGxlTG9naW5TdWJtaXQ6IGZ1bmN0aW9uKHVzZXIpe1xuICAgIEF1dGhBY3Rpb25zLmxvZ2luKHt1c2VybmFtZTp1c2VyLnVzZXJuYW1lLHBhc3M6dXNlci5wYXNzd29yZH0pO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJBdXRoIGNlbnRlci1ibG9ja1wifSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMlwiLCBudWxsLCBcIkxvZ2luXCIpLCBcbiAgICAgICAgdGhpcy5zdGF0ZS5sb2dnZWRJbiA/IChcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiIFlvdSBhcmUgYWxyZWFkeSBsb2dnZWQgaW4gXCIpXG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTG9naW5Gb3JtLCB7b25Mb2dpblN1Ym1pdDogdGhpcy5oYW5kbGVMb2dpblN1Ym1pdH0pXG4gICAgICAgICAgKSwgXG4gICAgICAgIHRoaXMuc3RhdGUuZXJyb3IgJiYgKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIHtjbGFzc05hbWU6IFwiZXJyb3JcIn0sIFwiQmFkIGxvZ2luIGluZm9ybWF0aW9uXCIpKVxuICAgICAgKVxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IExvZ2luOyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBMb2dvdXQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiTG9nb3V0XCIsXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKXtcbiAgICAvLyBUT0RPOiBNb3ZlIHRvIEF1dGggU3RvcmU/XG4gICAgLy8gaWYoQXV0aC5sb2dnZWRJbigpKXtcbiAgICAvLyAgIEF1dGgubG9nb3V0KGZ1bmN0aW9uKCl7XG4gICAgLy8gICAgIGxvY2F0aW9uLmhhc2ggPSAnL2xvZ2luJztcbiAgICAvLyAgIH0pO1xuICAgIC8vIH1cbiAgICByZXR1cm4ge1xuICAgICAgLy8gbG9nZ2VkSW46IEF1dGgubG9nZ2VkSW4oKVxuICAgIH07XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJBdXRoIGNlbnRlci1ibG9ja1wifSwgXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgXCJMb2dvdXQgU3VjY2Vzc2Z1bC5cIilcbiAgICAgIClcbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBMb2dvdXQ7IiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSb3V0ZXIgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKTtcbnZhciBBdXRoQWN0aW9ucyA9IHJlcXVpcmUoJy4uLy4uL2FjdGlvbnMvQXV0aEFjdGlvbnMnKTtcbnZhciBBdXRoU3RvcmUgPSByZXF1aXJlKCcuLi8uLi9zdG9yZXMvQXV0aFN0b3JlJyk7XG52YXIgTGluayA9IFJvdXRlci5MaW5rO1xuXG4vLyBUT0RPIC0gZmFjdG9yIG91dCBuYXZiYXIgbG9naW4gZm9ybVxuXG52YXIgTmF2YmFyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIk5hdmJhclwiLFxuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4ge1xuICAgICAgbG9nZ2VkSW46IEF1dGhTdG9yZS5sb2dnZWRJbigpXG4gICAgfTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsTW91bnQ6IGZ1bmN0aW9uKCl7XG4gICAgLy8gX29uQ2hhbmdlIGlzIGNiIGZ1bmN0aW9uLlxuICAgIEF1dGhTdG9yZS5hZGRDaGFuZ2VMaXN0ZW5lcih0aGlzLl9vbkNoYW5nZSk7XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uKCl7XG4gICAgQXV0aFN0b3JlLnJlbW92ZUNoYW5nZUxpc3RlbmVyKHRoaXMuX29uQ2hhbmdlKTtcbiAgfSxcblxuICBfb25DaGFuZ2U6IGZ1bmN0aW9uKCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBsb2dnZWRJbjogQXV0aFN0b3JlLmxvZ2dlZEluKClcbiAgICB9KTtcbiAgICBpZih0aGlzLnN0YXRlLmxvZ2dlZEluKXtcbiAgICAgIGxvY2F0aW9uLmhhc2ggPSAnLyc7XG4gICAgfVxuICB9LFxuXG4gIG5hdmxvZ291dDogZnVuY3Rpb24oKXtcbiAgICBBdXRoQWN0aW9ucy5sb2dvdXQoKTtcbiAgfSxcblxuICBoYW5kbGVTdWJtaXQ6IGZ1bmN0aW9uKGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgdXNlcm5hbWUgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnMudXNlcm5hbWUpLnZhbHVlLnRyaW0oKTtcbiAgICB2YXIgcGFzc3dvcmQgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnMucGFzc3dvcmQpLnZhbHVlLnRyaW0oKTtcbiAgICBpZighdXNlcm5hbWUgfHwgIXBhc3N3b3JkKXtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gVE9ETzogc2VuZCByZXF1ZXN0IHRvIHNlcnZlclxuICAgIHRoaXMuaGFuZGxlTG9naW5TdWJtaXQoe3VzZXJuYW1lOiB1c2VybmFtZSwgcGFzc3dvcmQ6IHBhc3N3b3JkfSk7XG4gICAgUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzLnVzZXJuYW1lKS52YWx1ZSA9ICcnO1xuICAgIFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmcy5wYXNzd29yZCkudmFsdWUgPSAnJztcbiAgICByZXR1cm47XG4gIH0sXG5cbiAgaGFuZGxlTG9naW5TdWJtaXQ6IGZ1bmN0aW9uKHVzZXIpe1xuICAgIEF1dGhBY3Rpb25zLmxvZ2luKHt1c2VybmFtZTp1c2VyLnVzZXJuYW1lLHBhc3M6dXNlci5wYXNzd29yZH0pO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIiwge2NsYXNzTmFtZTogXCJuYXZiYXIgbmF2YmFyLWludmVyc2VcIn0sIFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImNvbnRhaW5lci1mbHVpZFwifSwgXG5cbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcIm5hdmJhci1oZWFkZXJcIn0sIFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwge3R5cGU6IFwiYnV0dG9uXCIsIGNsYXNzTmFtZTogXCJuYXZiYXItdG9nZ2xlIGNvbGxhcHNlZFwiLCBcImRhdGEtdG9nZ2xlXCI6IFwiY29sbGFwc2VcIiwgXCJkYXRhLXRhcmdldFwiOiBcIiNicy1leGFtcGxlLW5hdmJhci1jb2xsYXBzZS0xXCIsIFwiYXJpYS1leHBhbmRlZFwiOiBcImZhbHNlXCJ9LCBcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtjbGFzc05hbWU6IFwic3Itb25seVwifSwgXCJUb2dnbGUgbmF2aWdhdGlvblwiKSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7Y2xhc3NOYW1lOiBcImljb24tYmFyXCJ9KSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7Y2xhc3NOYW1lOiBcImljb24tYmFyXCJ9KSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7Y2xhc3NOYW1lOiBcImljb24tYmFyXCJ9KVxuICAgICAgICAgICksIFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtjbGFzc05hbWU6IFwibmF2YmFyLWJyYW5kXCIsIGhyZWY6IFwiI1wifSwgXCJBcHBcIilcbiAgICAgICAgKSwgXG4gICAgICAgIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIsIGlkOiBcImJzLWV4YW1wbGUtbmF2YmFyLWNvbGxhcHNlLTFcIn0sIFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7Y2xhc3NOYW1lOiBcIm5hdiBuYXZiYXItbmF2IG5hdmJhci1yaWdodFwifSwgXG5cbiAgICAgICAgICB0aGlzLnN0YXRlLmxvZ2dlZEluID8gKFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImZvcm1cIiwge2NsYXNzTmFtZTogXCJuYXZiYXItZm9ybSBuYXZiYXItcmlnaHRcIiwgcm9sZTogXCJsb2dpblwifSwgXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJmb3JtLWdyb3VwXCJ9LCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHtjbGFzc05hbWU6IFwiYnRuIGJ0bi13YXJuaW5nXCIsIHRvOiBcIi9sb2dvdXRcIiwgb25DbGljazogdGhpcy5uYXZsb2dvdXR9LCBcIkxvZyBvdXRcIilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiLCB7Y2xhc3NOYW1lOiBcIm5hdmJhci1mb3JtIG5hdmJhci1yaWdodFwiLCByb2xlOiBcImxvZ2luXCIsIG9uU3VibWl0OiB0aGlzLmhhbmRsZVN1Ym1pdH0sIFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiZm9ybS1ncm91cFwifSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHt0eXBlOiBcInRleHRcIiwgY2xhc3NOYW1lOiBcImZvcm0tY29udHJvbFwiLCBwbGFjZWhvbGRlcjogXCJVc2VybmFtZVwiLCByZWY6IFwidXNlcm5hbWVcIn0pLCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwge3R5cGU6IFwidGV4dFwiLCBjbGFzc05hbWU6IFwiZm9ybS1jb250cm9sXCIsIHBsYWNlaG9sZGVyOiBcIlBhc3N3b3JkXCIsIHJlZjogXCJwYXNzd29yZFwifSksIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwge3R5cGU6IFwic3VibWl0XCIsIGNsYXNzTmFtZTogXCJidG4gYnRuLXN1Y2Nlc3MgaGlkZGVuXCIsIHZhbHVlOiBcIlN1Ym1pdFwifSwgXCJTdWJtaXRcIilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICksIFxuXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwge2NsYXNzTmFtZTogXCJkcm9wZG93blwifSwgXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtocmVmOiBcIiNcIiwgY2xhc3NOYW1lOiBcImRyb3Bkb3duLXRvZ2dsZVwiLCBcImRhdGEtdG9nZ2xlXCI6IFwiZHJvcGRvd25cIiwgcm9sZTogXCJidXR0b25cIiwgXCJhcmlhLWhhc3BvcHVwXCI6IFwidHJ1ZVwiLCBcImFyaWEtZXhwYW5kZWRcIjogXCJmYWxzZVwifSwgXCJEcm9wZG93biBcIiwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge2NsYXNzTmFtZTogXCJjYXJldFwifSkpLCBcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIHtjbGFzc05hbWU6IFwiZHJvcGRvd24tbWVudVwifSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtocmVmOiBcIiNcIn0sIFwiQWN0aW9uXCIpKSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtocmVmOiBcIiNcIn0sIFwiQW5vdGhlciBhY3Rpb25cIikpLCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwge2hyZWY6IFwiI1wifSwgXCJTb21ldGhpbmcgZWxzZSBoZXJlXCIpKSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtyb2xlOiBcInNlcGFyYXRvclwiLCBjbGFzc05hbWU6IFwiZGl2aWRlclwifSksIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7aHJlZjogXCIjXCJ9LCBcIlNlcGFyYXRlZCBsaW5rXCIpKSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtyb2xlOiBcInNlcGFyYXRvclwiLCBjbGFzc05hbWU6IFwiZGl2aWRlclwifSksIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7aHJlZjogXCIjXCJ9LCBcIk9uZSBtb3JlIHNlcGFyYXRlZCBsaW5rXCIpKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApLCBcbiAgICAgICAgICAgIHRoaXMuc3RhdGUubG9nZ2VkSW4gPyAoXG4gICAgICAgICAgICAgIG51bGxcbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHt0bzogXCIvc2lnbnVwXCJ9LCBcIlJlZ2lzdGVyXCIpKVxuICAgICAgICAgICAgKSwgXG5cbiAgICAgICAgICAgIHRoaXMuc3RhdGUubG9nZ2VkSW4gPyAoXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHt0bzogXCIvcHJvZmlsZVwifSwgXCJQcm9maWxlXCIpKVxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywge3RvOiBcIi9sb2dpblwifSwgXCJMb2dpblwiKSlcbiAgICAgICAgICAgIClcblxuICAgICAgICAgIClcbiAgICAgICAgKVxuXG4gICAgICApXG4gICAgKVxuICAgIClcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTmF2YmFyOyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBCaW8gPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiQmlvXCIsXG4gIC8vIFRPRE86IEluY29ycG9yYXRlIExhdGVyIHdoZW4gQXV0aCBpcyBpbi5cblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVkaXRpbmc6IGZhbHNlXG4gICAgfTtcbiAgfSxcblxuICAvLyBUT0RPOiBCdWJibGUgdGhpcyB1cCB0byBwcm9maWxlIHBhcmVudFxuXG4gIGVuYWJsZUVkaXQ6IGZ1bmN0aW9uKCl7XG4gICAgLy8gbWFrZSB0aGUgYmlvIGZpZWxkIGVkaXRhYmxlXG4gICAgICAvLyByZXBsYWNlIGl0IHdpdGggYSBmb3JtLlxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZWRpdGluZzogdHJ1ZVxuICAgIH0pXG4gIH0sXG5cbiAgY2FuY2VsRWRpdDogZnVuY3Rpb24oKXtcbiAgICAvLyBtYWtlIHRoZSBiaW8gZmllbGQgZWRpdGFibGVcbiAgICAgIC8vIHJlcGxhY2UgaXQgd2l0aCBhIGZvcm0uXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBlZGl0aW5nOiBmYWxzZVxuICAgIH0pXG4gIH0sXG5cbiAgc2F2ZUVkaXQ6IGZ1bmN0aW9uKCl7XG4gICAgdmFyIGF2YXRhciA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmcy5hdmF0YXIpLnZhbHVlLnRyaW0oKTtcbiAgICB2YXIgYmlvID0gUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzLmJpbykudmFsdWUudHJpbSgpO1xuXG4gICAgdmFyIGRhdGEgPSB0aGlzLnByb3BzLml0ZW07XG4gICAgZGF0YS5hdmF0YXJfbGluayA9IGF2YXRhcjtcbiAgICBkYXRhLmJpbyA9IGJpbztcblxuICAgIC8vIEJ1YmJsZSB1cCByZXF1ZXN0IHRvIHBhcmVudFxuICAgIHRoaXMucHJvcHMub25FZGl0U3VibWl0KGRhdGEpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBlZGl0aW5nOiBmYWxzZVxuICAgIH0pXG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImNvbC1tZC0zXCJ9LCBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgzXCIsIG51bGwsIHRoaXMucHJvcHMuaXRlbS51c2VyX25hbWUpLCBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgzXCIsIG51bGwsIHRoaXMucHJvcHMuaXRlbS5maXJzdF9uYW1lLCBcIiBcIiwgdGhpcy5wcm9wcy5pdGVtLmxhc3RfbmFtZSksIFxuXG4gICAgICAgICF0aGlzLnN0YXRlLmVkaXRpbmcgPyAoXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7c3JjOiB0aGlzLnByb3BzLml0ZW0uYXZhdGFyX2xpbmssIGNsYXNzTmFtZTogXCJpbWctdGh1bWJuYWlsXCJ9KVxuICAgICAgICApIDogKFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiQXZhdGFyIExpbms6IFwiLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwge3R5cGU6IFwidGV4dFwiLCByZWY6IFwiYXZhdGFyXCJ9KSlcbiAgICAgICAgKSwgXG5cbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgXCJSZXA6IFwiLCB0aGlzLnByb3BzLml0ZW0ucmVwKSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiSWQ6IFwiLCB0aGlzLnByb3BzLml0ZW0uaWQpLCBcblxuICAgICAgICAhdGhpcy5zdGF0ZS5lZGl0aW5nID8gKFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiQmlvOiBcIiwgdGhpcy5wcm9wcy5pdGVtLmJpbylcbiAgICAgICAgKSA6IChcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBcIkJpbzogXCIsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7dHlwZTogXCJ0ZXh0XCIsIHJlZjogXCJiaW9cIn0pKVxuICAgICAgICApLCBcbiAgICAgICAgXG4gICAgICAgICF0aGlzLnN0YXRlLmVkaXRpbmcgPyAoXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwge2NsYXNzTmFtZTogXCJidG4gYnRuLXdhcm5pbmdcIiwgb25DbGljazogdGhpcy5lbmFibGVFZGl0fSwgXCJFZGl0XCIpXG4gICAgICAgICkgOiAoXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwge2NsYXNzTmFtZTogXCJidG4gYnRuLXN1Y2Nlc3NcIiwgb25DbGljazogdGhpcy5zYXZlRWRpdH0sIFwiU2F2ZVwiKVxuICAgICAgICApLCBcblxuICAgICAgICAhdGhpcy5zdGF0ZS5lZGl0aW5nID8gKFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtjbGFzc05hbWU6IFwiYnRuIGJ0bi1zdWNjZXNzIGhpZGRlblwifSlcbiAgICAgICAgKSA6IChcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7Y2xhc3NOYW1lOiBcImJ0biBidG4taW5mb1wiLCBvbkNsaWNrOiB0aGlzLmNhbmNlbEVkaXR9LCBcIkNhbmNlbFwiKVxuICAgICAgICApXG5cbiAgICAgIClcbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBCaW87IiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdEludGwgPSByZXF1aXJlKCdyZWFjdC1pbnRsJyk7XG52YXIgRm9ybWF0dGVkUmVsYXRpdmUgPSBSZWFjdEludGwuRm9ybWF0dGVkUmVsYXRpdmU7XG52YXIgRm9ybWF0dGVkRGF0ZSA9IFJlYWN0SW50bC5Gb3JtYXR0ZWREYXRlO1xuXG4vLyBGcm9udCBwYWdlIHRocmVhZCBsaXN0XG52YXIgUHJvZmlsZVRocmVhZEl0ZW0gPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiUHJvZmlsZVRocmVhZEl0ZW1cIixcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAoXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidHJcIiwgbnVsbCwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBudWxsLCB0aGlzLnByb3BzLml0ZW0ucmF0aW5nKSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBudWxsLCB0aGlzLnByb3BzLml0ZW0udGl0bGUpLCBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIG51bGwsIHRoaXMucHJvcHMuaXRlbS5ib2R5KSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBudWxsLCBcIlVzZXI6IFwiLCB0aGlzLnByb3BzLml0ZW0uY3JlYXRvcl91c2VyX2lkKSwgXG4gICAgICAgIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgbnVsbCwgXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtYXR0ZWREYXRlLCB7XG4gICAgICAgICAgICB2YWx1ZTogbmV3IERhdGUodGhpcy5wcm9wcy5pdGVtLmNyZWF0aW9uX3RpbWUpLCBcbiAgICAgICAgICAgIGRheTogXCJudW1lcmljXCIsIFxuICAgICAgICAgICAgbW9udGg6IFwibG9uZ1wiLCBcbiAgICAgICAgICAgIHllYXI6IFwibnVtZXJpY1wifSlcbiAgICAgICAgKSwgXG5cbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIG51bGwsIFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybWF0dGVkUmVsYXRpdmUsIHtcbiAgICAgICAgICAgIHZhbHVlOiBTdHJpbmcodGhpcy5wcm9wcy5pdGVtLmxhc3RfdXBkYXRlX3RpbWUpfSlcbiAgICAgICAgKVxuXG4gICAgICApXG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvZmlsZVRocmVhZEl0ZW07IiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBUaHJlYWRTdG9yZSA9IHJlcXVpcmUoJy4uLy4uL3N0b3Jlcy9UaHJlYWRTdG9yZScpO1xudmFyIFRocmVhZEFjdGlvbnMgPSByZXF1aXJlKCcuLi8uLi9hY3Rpb25zL1RocmVhZEFjdGlvbnMnKTtcbnZhciBQcm9maWxlVGhyZWFkSXRlbSA9IHJlcXVpcmUoJy4vcHJvZmlsZS10aHJlYWRpdGVtJyk7XG5cbnZhciBCaW9UaHJlYWRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIkJpb1RocmVhZHNcIixcbiAgLy8gVE9ETzogSW5jb3Jwb3JhdGUgTGF0ZXIgd2hlbiBBdXRoIGlzIGluLlxuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4ge1xuICAgICAgcGFnZTogMSxcbiAgICAgIHRocmVhZHM6IFtdXG4gICAgfTtcbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKXtcbiAgICBUaHJlYWRBY3Rpb25zLmZldGNoVXNlclBhZ2Uoe3BhZ2U6dGhpcy5zdGF0ZS5wYWdlfSk7XG4gICAgVGhyZWFkU3RvcmUuYWRkQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25DaGFuZ2UpO1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbigpe1xuICAgIFRocmVhZFN0b3JlLnJlbW92ZUNoYW5nZUxpc3RlbmVyKHRoaXMuX29uQ2hhbmdlKTtcbiAgfSxcblxuICBfb25DaGFuZ2U6IGZ1bmN0aW9uKCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0aHJlYWRzOiBUaHJlYWRTdG9yZS5nZXRVc2VyVGhyZWFkcygpLmZvcnVtVGhyZWFkc1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUudGhyZWFkcyk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImNvbC1tZC05XCJ9LCBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgzXCIsIG51bGwsIFwiTXkgVGhyZWFkc1wiKSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiLCB7Y2xhc3NOYW1lOiBcInRhYmxlXCJ9LCBcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGhlYWRcIiwgbnVsbCwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidHJcIiwgbnVsbCwgXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiLCBudWxsLCBcIlJhdGluZ1wiKSwgXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiLCBudWxsLCBcIlRpdGxlXCIpLCBcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRoXCIsIG51bGwsIFwiQm9keVwiKSwgXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiLCBudWxsLCBcIlN1Ym1pdHRlZFwiKSwgXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiLCBudWxsLCBcIkNyZWF0ZWRcIiksIFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGhcIiwgbnVsbCwgXCJVcGRhdGVkXCIpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSwgXG5cbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIiwgbnVsbCwgXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnRocmVhZHMubWFwKGZ1bmN0aW9uKGl0ZW0pe1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUHJvZmlsZVRocmVhZEl0ZW0sIHtrZXk6IGl0ZW0udGhyZWFkX2lkLCBpdGVtOiBpdGVtfSlcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBCaW9UaHJlYWRzOyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgQXV0aFN0b3JlID0gcmVxdWlyZSgnLi4vLi4vc3RvcmVzL0F1dGhTdG9yZScpO1xudmFyIFByb2ZpbGVTdG9yZSA9IHJlcXVpcmUoJy4uLy4uL3N0b3Jlcy9Qcm9maWxlU3RvcmUnKTtcbnZhciBQcm9maWxlQWN0aW9ucyA9IHJlcXVpcmUoJy4uLy4uL2FjdGlvbnMvUHJvZmlsZUFjdGlvbnMnKTtcbnZhciBCaW8gPSByZXF1aXJlKCcuL3Byb2ZpbGUtYmlvJyk7XG52YXIgQmlvVGhyZWFkcyA9IHJlcXVpcmUoJy4vcHJvZmlsZS10aHJlYWRzJyk7XG5cbnZhciBQcm9maWxlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIlByb2ZpbGVcIixcbiAgLy8gVE9ETzogSW5jb3Jwb3JhdGUgTGF0ZXIgd2hlbiBBdXRoIGlzIGluLlxuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKXtcbiAgICBpZighQXV0aFN0b3JlLmxvZ2dlZEluKCkpe1xuICAgICAgbG9jYXRpb24uaGFzaCA9ICcvbG9naW4nO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgYXZhdGFyX2xpbms6IFwiXCIsXG4gICAgICBiaW86IFwiXCIsXG4gICAgICBmaXJzdF9uYW1lOiBcIlwiLFxuICAgICAgbGFzdF9uYW1lOiBcIlwiLFxuICAgICAgdXNlcl9uYW1lOiBcIlwiLFxuICAgICAgaWQ6IDAsXG4gICAgICByZXA6IDBcbiAgICB9O1xuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpe1xuICAgIFByb2ZpbGVBY3Rpb25zLmZldGNoKCk7XG4gICAgUHJvZmlsZVN0b3JlLmFkZENoYW5nZUxpc3RlbmVyKHRoaXMuX29uQ2hhbmdlKTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24oKXtcbiAgICBQcm9maWxlU3RvcmUucmVtb3ZlQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25DaGFuZ2UpO1xuICB9LFxuXG4gIGVkaXRQcm9maWxlOiBmdW5jdGlvbihkYXRhKXtcbiAgICAvLyBTZW5kIGFjdGlvbiB0byB1cGRhdGUgdXNlciBpbmZvcm1hdGlvblxuICAgIFByb2ZpbGVBY3Rpb25zLnVwZGF0ZSh7XG4gICAgICBhdmF0YXJfbGluazogZGF0YS5hdmF0YXJfbGluayxcbiAgICAgIGJpbzogZGF0YS5iaW9cbiAgICB9KTtcbiAgfSxcblxuICBfb25DaGFuZ2U6IGZ1bmN0aW9uKCl7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZmlyc3RfbmFtZTogUHJvZmlsZVN0b3JlLmdldEJpbygpLmZpcnN0X25hbWUsXG4gICAgICAgIGxhc3RfbmFtZTogUHJvZmlsZVN0b3JlLmdldEJpbygpLmxhc3RfbmFtZSxcbiAgICAgICAgdXNlcl9uYW1lOiBQcm9maWxlU3RvcmUuZ2V0QmlvKCkudXNlcl9uYW1lLFxuICAgICAgICBiaW86IFByb2ZpbGVTdG9yZS5nZXRCaW8oKS5iaW8sXG4gICAgICAgIGF2YXRhcl9saW5rOiBQcm9maWxlU3RvcmUuZ2V0QmlvKCkuYXZhdGFyX2xpbmssXG4gICAgICAgIHJlcDogUHJvZmlsZVN0b3JlLmdldEJpbygpLnJlcFxuICAgICAgfSk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInByb2ZpbGVcIn0sIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJpbywge29uRWRpdFN1Ym1pdDogdGhpcy5lZGl0UHJvZmlsZSwgaXRlbTogdGhpcy5zdGF0ZX0pLCBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCaW9UaHJlYWRzLCBudWxsKVxuICAgICAgKVxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2ZpbGU7IiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIFNpZ251cEZvcm0gPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiU2lnbnVwRm9ybVwiLFxuICBoYW5kbGVTdWJtaXQ6IGZ1bmN0aW9uKGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgZmlyc3RuYW1lID0gUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzLmZpcnN0bmFtZSkudmFsdWUudHJpbSgpO1xuICAgIHZhciBsYXN0bmFtZSA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmcy5sYXN0bmFtZSkudmFsdWUudHJpbSgpO1xuICAgIHZhciB1c2VybmFtZSA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmcy51c2VybmFtZSkudmFsdWUudHJpbSgpO1xuICAgIHZhciBwYXNzd29yZCA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmcy5wYXNzd29yZCkudmFsdWUudHJpbSgpO1xuICAgIHZhciBwYXNzY29uZiA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmcy5wYXNzY29uZikudmFsdWUudHJpbSgpO1xuXG4gICAgdmFyIGVycm9yID0gZmFsc2U7XG4gICAgaWYoIWZpcnN0bmFtZSB8fCAhbGFzdG5hbWUgfHwgIXVzZXJuYW1lIHx8ICFwYXNzd29yZCB8fCAhcGFzc2NvbmYpe1xuICAgICAgZXJyb3IgPSB0cnVlO1xuICAgIH1cbiAgICBpZihwYXNzY29uZiAhPT0gcGFzc3dvcmQpe1xuICAgICAgZXJyb3IgPSB0cnVlO1xuICAgIH1cbiAgICAvLyBCdWJibGUgdGhpcyB1cCB0byBwYXJlbnRcbiAgICB0aGlzLnByb3BzLm9uU2lnbnVwU3VibWl0KHtmaXJzdG5hbWU6IGZpcnN0bmFtZSwgbGFzdG5hbWU6IGxhc3RuYW1lLCB1c2VybmFtZTogdXNlcm5hbWUsIHBhc3N3b3JkOiBwYXNzd29yZCwgZXJyb3I6IGVycm9yfSk7XG4gICAgXG4gICAgUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzLmZpcnN0bmFtZSkudmFsdWUgPSAnJztcbiAgICBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnMubGFzdG5hbWUpLnZhbHVlID0gJyc7XG4gICAgUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzLnVzZXJuYW1lKS52YWx1ZSA9ICcnO1xuICAgIFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmcy5wYXNzd29yZCkudmFsdWUgPSAnJztcbiAgICBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnMucGFzc2NvbmYpLnZhbHVlID0gJyc7XG4gICAgcmV0dXJuO1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIHtjbGFzc05hbWU6IFwic2lnbnVwRm9ybVwiLCBvblN1Ym1pdDogdGhpcy5oYW5kbGVTdWJtaXR9LCBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcIm5hbWVGaWVsZFwifSwgXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHtuYW1lOiBcImZpcnN0XCIsIHR5cGU6IFwidGV4dFwiLCBjbGFzc05hbWU6IFwiZm9ybS1jb250cm9sXCIsIHBsYWNlaG9sZGVyOiBcIkZpcnN0XCIsIHJlZjogXCJmaXJzdG5hbWVcIn0pLCBcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwge25hbWU6IFwibGFzdFwiLCB0eXBlOiBcInRleHRcIiwgY2xhc3NOYW1lOiBcImZvcm0tY29udHJvbFwiLCBwbGFjZWhvbGRlcjogXCJMYXN0XCIsIHJlZjogXCJsYXN0bmFtZVwifSlcbiAgICAgICAgKSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7dHlwZTogXCJ0ZXh0XCIsIGNsYXNzTmFtZTogXCJmb3JtLWNvbnRyb2xcIiwgcGxhY2Vob2xkZXI6IFwiVXNlcm5hbWVcIiwgcmVmOiBcInVzZXJuYW1lXCJ9KSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7dHlwZTogXCJwYXNzd29yZFwiLCBjbGFzc05hbWU6IFwiZm9ybS1jb250cm9sXCIsIHBsYWNlaG9sZGVyOiBcIlBhc3N3b3JkXCIsIHJlZjogXCJwYXNzd29yZFwifSksIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwge3R5cGU6IFwicGFzc3dvcmRcIiwgY2xhc3NOYW1lOiBcImZvcm0tY29udHJvbFwiLCBwbGFjZWhvbGRlcjogXCJDb25maXJtXCIsIHJlZjogXCJwYXNzY29uZlwifSksIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHt0eXBlOiBcInN1Ym1pdFwiLCBjbGFzc05hbWU6IFwiYnRuIGJ0bi1zdWNjZXNzXCIsIHZhbHVlOiBcIlN1Ym1pdFwifSwgXCJTdWJtaXRcIilcbiAgICAgIClcbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBTaWdudXBGb3JtOyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgU2lnbnVwRm9ybSA9IHJlcXVpcmUoJy4vc2lnbnVwLWZvcm0nKTtcbnZhciBBdXRoQWN0aW9ucyA9IHJlcXVpcmUoJy4uLy4uL2FjdGlvbnMvQXV0aEFjdGlvbnMnKTtcbnZhciBBdXRoU3RvcmUgPSByZXF1aXJlKCcuLi8uLi9zdG9yZXMvQXV0aFN0b3JlJyk7XG5cbnZhciBTaWdudXAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiU2lnbnVwXCIsXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4ge1xuICAgICAgbG9nZ2VkSW46IEF1dGhTdG9yZS5sb2dnZWRJbigpLFxuICAgICAgZXJyb3I6IEF1dGhTdG9yZS5lcnJvcigpXG4gICAgfTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsTW91bnQ6IGZ1bmN0aW9uKCl7XG4gICAgQXV0aFN0b3JlLmFkZENoYW5nZUxpc3RlbmVyKHRoaXMuX29uQ2hhbmdlKTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24oKXtcbiAgICBBdXRoU3RvcmUucmVtb3ZlQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25DaGFuZ2UpO1xuICB9LFxuXG4gIF9vbkNoYW5nZTogZnVuY3Rpb24oKXtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGxvZ2dlZEluOiBBdXRoU3RvcmUubG9nZ2VkSW4oKSxcbiAgICAgIGVycm9yOiBBdXRoU3RvcmUuZXJyb3IoKVxuICAgIH0pO1xuICAgIGlmKHRoaXMuc3RhdGUubG9nZ2VkSW4pe1xuICAgICAgbG9jYXRpb24uaGFzaCA9ICcvJztcbiAgICB9XG4gIH0sXG5cbiAgaGFuZGxlU2lnbnVwU3VibWl0OiBmdW5jdGlvbih1c2VyKXtcbiAgICBBdXRoQWN0aW9ucy5zaWdudXAoe1xuICAgICAgZmlyc3RuYW1lOiB1c2VyLmZpcnN0bmFtZSwgXG4gICAgICBsYXN0bmFtZTogdXNlci5sYXN0bmFtZSwgXG4gICAgICB1c2VybmFtZTogdXNlci51c2VybmFtZSwgXG4gICAgICBwYXNzd29yZDogdXNlci5wYXNzd29yZCwgXG4gICAgICBlcnJvcjogdXNlci5lcnJvclxuICAgIH0pO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJBdXRoIGNlbnRlci1ibG9ja1wifSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMlwiLCBudWxsLCBcIlNpZ24gdXBcIiksIFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2lnbnVwRm9ybSwge29uU2lnbnVwU3VibWl0OiB0aGlzLmhhbmRsZVNpZ251cFN1Ym1pdH0pLCBcbiAgICAgICAgICB0aGlzLnN0YXRlLmVycm9yICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCB7Y2xhc3NOYW1lOiBcImVycm9yXCJ9LCBcIkJhZCBzaWdudXAgaW5mb3JtYXRpb25cIikpXG4gICAgICApXG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2lnbnVwOyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgVGhyZWFkU3RvcmUgPSByZXF1aXJlKCcuLi8uLi9zdG9yZXMvVGhyZWFkU3RvcmUnKTtcbnZhciBUaHJlYWRBY3Rpb25zID0gcmVxdWlyZSgnLi4vLi4vYWN0aW9ucy9UaHJlYWRBY3Rpb25zJyk7XG52YXIgQXV0aFN0b3JlID0gcmVxdWlyZSgnLi4vLi4vc3RvcmVzL0F1dGhTdG9yZScpO1xuXG52YXIgTmV3VGhyZWFkID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIk5ld1RocmVhZFwiLFxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG4gICAgaWYoIUF1dGhTdG9yZS5sb2dnZWRJbigpKXtcbiAgICAgIGxvY2F0aW9uLmhhc2ggPSAnL2xvZ2luJztcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlXG4gICAgfTtcbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKXtcbiAgICBUaHJlYWRTdG9yZS5hZGRDaGFuZ2VMaXN0ZW5lcih0aGlzLl9vbkNoYW5nZSk7XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uKCl7XG4gICAgVGhyZWFkU3RvcmUucmVtb3ZlQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25DaGFuZ2UpO1xuICB9LFxuXG4gIGFkZFRocmVhZDogZnVuY3Rpb24oKXtcbiAgICAvLyBTZW5kIGFjdGlvbiB0byB1cGRhdGUgdXNlciBpbmZvcm1hdGlvblxuICAgIHZhciB0aXRsZSA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmcy50aXRsZSkudmFsdWUudHJpbSgpO1xuICAgIHZhciBib2R5ID0gUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzLmJvZHkpLnZhbHVlLnRyaW0oKTtcblxuICAgIGlmKCF0aXRsZSB8fCAhYm9keSl7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgVGhyZWFkQWN0aW9ucy5hZGQoe1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgYm9keTogYm9keVxuICAgIH0pO1xuXG4gIH0sXG5cbiAgX29uQ2hhbmdlOiBmdW5jdGlvbigpe1xuICAgIGxvY2F0aW9uLmhhc2ggPSAnLyc7XG4gIH0sXG5cblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAoXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiY29sLW1kLTEyXCJ9LCBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgzXCIsIG51bGwsIFwiTmV3IFRocmVhZFwiKSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJuZXdUaHJlYWQgY2VudGVyLWJsb2NrXCJ9LCBcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIHtvblN1Ym1pdDogdGhpcy5hZGRUaHJlYWR9LCBcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHt0eXBlOiBcInRleHRcIiwgY2xhc3NOYW1lOiBcImZvcm0tY29udHJvbFwiLCBwbGFjZWhvbGRlcjogXCJUaXRsZVwiLCByZWY6IFwidGl0bGVcIn0pLCBcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHt0eXBlOiBcInRleHRhcmVhXCIsIGNsYXNzTmFtZTogXCJmb3JtLWNvbnRyb2xcIiwgcGxhY2Vob2xkZXI6IFwiQm9keVwiLCByZWY6IFwiYm9keVwifSksIFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHt0eXBlOiBcInN1Ym1pdFwiLCBjbGFzc05hbWU6IFwiYnRuIGJ0bi1zdWNjZXNzXCIsIHZhbHVlOiBcIlN1Ym1pdFwifSwgXCJTdWJtaXRcIilcbiAgICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5ld1RocmVhZDsiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgVGhyZWFkID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIlRocmVhZFwiLFxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIHtcbiAgICAgIFxuICAgIH07XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVGhyZWFkOyIsInZhciBBdXRoQ29uc3RhbnRzID0ge1xuICBTSUdOVVA6ICdTSUdOVVAnLFxuICBMT0dJTjogJ0xPR0lOJyxcbiAgTE9HT1VUOiAnTE9HT1VUJ1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBdXRoQ29uc3RhbnRzOyIsInZhciBQcm9maWxlQ29uc3RhbnRzID0ge1xuICBGRVRDSDogJ0ZFVENIJywgLy8gZmV0Y2hlcyB1c2VyIGRhdGEgdG8gZGlzcGxheSBvbiB2aWV3XG4gIFVQREFURTogJ1VQREFURScsIC8vIHVwZGF0ZXMgdXNlciBkYXRhXG4gIERFTEVURTogJ0RFTEVURScgLy8gVE9ETzogZGVsZXRlIGFjY291bnRcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvZmlsZUNvbnN0YW50czsiLCJ2YXIgVGhyZWFkQ29uc3RhbnRzID0ge1xuICBBREQ6ICdBREQnLFxuICBGRVRDSE9ORTogJ0ZFVENIT05FJyxcbiAgRkVUQ0hQQUdFOiAnRkVUQ0hQQUdFJyxcbiAgRkVUQ0hVU0VSUEFHRTogJ0ZFVENIVVNFUlBBR0UnLFxuICBWT1RFOiAnVk9URScsXG4gIFVQREFURTogJ1VQREFURScsXG4gIERFTEVURTogJ0RFTEVURSdcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVGhyZWFkQ29uc3RhbnRzOyIsInZhciBEaXNwYXRjaGVyID0gcmVxdWlyZSgnZmx1eCcpLkRpc3BhdGNoZXI7XG52YXIgQXBwRGlzcGF0Y2hlciA9IG5ldyBEaXNwYXRjaGVyKCk7XG5cbkFwcERpc3BhdGNoZXIuaGFuZGxlQWN0aW9uID0gZnVuY3Rpb24oYWN0aW9uKSB7XG4gIHRoaXMuZGlzcGF0Y2goe1xuICAgIHNvdXJjZTogJ1ZJRVdfQUNUSU9OJyxcbiAgICBhY3Rpb246IGFjdGlvblxuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBBcHBEaXNwYXRjaGVyOyIsInZhciBhdXRoZW50aWNhdGVVc2VyID0gZnVuY3Rpb24odXNlcm5hbWUsIHBhc3N3b3JkLCBjYWxsYmFjaykge1xuICAkLmFqYXgoe1xuICAgIHR5cGU6ICdQT1NUJyxcbiAgICB1cmw6ICcvYXV0aGVudGljYXRlJyxcbiAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICB1c2VybmFtZTogdXNlcm5hbWUsXG4gICAgICBwYXNzd29yZDogcGFzc3dvcmRcbiAgICB9KSxcbiAgICBjcm9zc0RvbWFpbjogdHJ1ZSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwKSB7IC8vIE5PVCBXT1JLSU5HXG4gICAgICBjb25zb2xlLmxvZygnc3VjY2VzcycscmVzcCk7XG4gICAgICBjYWxsYmFjayh7XG4gICAgICAgIGF1dGhlbnRpY2F0ZWQ6IHRydWUsXG4gICAgICAgIHRva2VuOiByZXNwLmF1dGhfdG9rZW5cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZXJyb3I6IGZ1bmN0aW9uKHJlc3ApIHtcbiAgICAgIC8vIFRPRE86IEZpeCB0aGlzLCB0aGlzIGFsd2F5cyBnb2VzIHRvIGVycm9yIC0gbm90IHN1cmUuXG4gICAgICAvLyBGb3VuZCBvdXQgLSBqUXVlcnkgMS40LjIgd29ya3Mgd2l0aCBjdXJyZW50IGdvIHNlcnZlciwgYnV0IGJyZWFrcyB3aXRoIG5ld2VyIHZlci5cbiAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicscmVzcCk7XG4gICAgICBpZihyZXNwLnJlc3BvbnNlVGV4dCA9PT0gXCJcIil7XG4gICAgICAgIGNhbGxiYWNrKHtcbiAgICAgICAgICBhdXRoZW50aWNhdGVkOiB0cnVlLFxuICAgICAgICAgIHRva2VuOiByZXNwLmF1dGhfdG9rZW5cbiAgICAgICAgfSk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgY2FsbGJhY2soe1xuICAgICAgICAgIGF1dGhlbnRpY2F0ZWQ6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59O1xuXG52YXIgY3JlYXRlVXNlciA9IGZ1bmN0aW9uKHVzZXJuYW1lLCBwYXNzd29yZCwgZmlyc3RuYW1lLCBsYXN0bmFtZSwgY2FsbGJhY2spIHtcbiAgcmV0dXJuICQuYWpheCh7XG4gICAgdHlwZTogJ1BPU1QnLFxuICAgIHVybDogJy9jcmVhdGVVc2VyJyxcbiAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBcInVzZXJuYW1lXCI6IHVzZXJuYW1lLFxuICAgICAgXCJwYXNzd29yZFwiOiBwYXNzd29yZCxcbiAgICAgIFwiZmlyc3RuYW1lXCI6IGZpcnN0bmFtZSxcbiAgICAgIFwibGFzdG5hbWVcIjogbGFzdG5hbWVcbiAgICB9KSxcbiAgICBjcm9zc0RvbWFpbjogdHJ1ZSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwKSB7XG4gICAgICBjb25zb2xlLmxvZygnc3VjY2VzcycscmVzcCk7XG4gICAgICByZXR1cm4gY2FsbGJhY2soe1xuICAgICAgICBhdXRoZW50aWNhdGVkOiB0cnVlLFxuICAgICAgICB0b2tlbjogcmVzcC5hdXRoX3Rva2VuXG4gICAgICB9KTtcbiAgICB9LFxuICAgIGVycm9yOiBmdW5jdGlvbihyZXNwKSB7XG4gICAgICAvLyBUT0RPOiBGaXggdGhpcywgdGhpcyBhbHdheXMgZ29lcyB0byBlcnJvciAtIG5vdCBzdXJlLlxuICAgICAgLy8gRm91bmQgb3V0IC0galF1ZXJ5IDEuNC4yIHdvcmtzIHdpdGggY3VycmVudCBnbyBzZXJ2ZXIsIGJ1dCBicmVha3Mgd2l0aCBuZXdlciB2ZXIuXG4gICAgICBjb25zb2xlLmxvZygnZXJyb3InLHJlc3ApO1xuICAgICAgaWYocmVzcC5yZXNwb25zZVRleHQgPT09IFwiXCIpeyAvLyBpZiBubyBlcnJvciBtc2dcbiAgICAgICAgY2FsbGJhY2soe1xuICAgICAgICAgIGF1dGhlbnRpY2F0ZWQ6IHRydWUsXG4gICAgICAgICAgdG9rZW46IHJlc3AuYXV0aF90b2tlblxuICAgICAgICB9KTtcbiAgICAgIH1lbHNleyAgICAgICAgIC8vIGlmIGVycm9yIG1zZ1xuICAgICAgICBjYWxsYmFjayh7XG4gICAgICAgICAgYXV0aGVudGljYXRlZDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG5cbnZhciBBdXRoID0ge1xuICBsb2dpbjogZnVuY3Rpb24odXNlcm5hbWUsIHBhc3MsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMubG9nZ2VkSW4oKSkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ2FscmVhZHkgbG9nZ2VkIGluJyk7XG4gICAgICAvLyBpZiAoY2FsbGJhY2spIHtcbiAgICAgIC8vICAgY2FsbGJhY2sodHJ1ZSk7XG4gICAgICAvLyB9XG4gICAgICAvLyB0aGlzLm9uQ2hhbmdlKHRydWUpO1xuICAgICAgLy8gcmV0dXJuO1xuICAgIH1cbiAgICBhdXRoZW50aWNhdGVVc2VyKHVzZXJuYW1lLCBwYXNzLCAoZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIHZhciBhdXRoZW50aWNhdGVkID0gZmFsc2U7XG4gICAgICAgIGlmIChyZXMuYXV0aGVudGljYXRlZCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2dpbiBzdWNjZXNzZnVsJyk7XG4gICAgICAgICAgYXV0aGVudGljYXRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgY2FsbGJhY2soYXV0aGVudGljYXRlZCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhhdC5vbkNoYW5nZShhdXRoZW50aWNhdGVkKTtcbiAgICB9KSk7XG4gIH0sXG4gIHNpZ251cDogZnVuY3Rpb24odXNlcm5hbWUsIHBhc3N3b3JkLCBmaXJzdG5hbWUsIGxhc3RuYW1lLCBjYWxsYmFjaykge1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICBcbiAgICBpZiAodGhpcy5sb2dnZWRJbigpKSB7XG4gICAgICAvLyBpZiAoY2FsbGJhY2spIHtcbiAgICAgIC8vICAgY2FsbGJhY2sodHJ1ZSk7XG4gICAgICAvLyB9XG4gICAgICAvLyB0aGlzLm9uQ2hhbmdlKHRydWUpO1xuICAgICAgLy8gcmV0dXJuO1xuICAgIH1cbiAgICBjcmVhdGVVc2VyKHVzZXJuYW1lLCBwYXNzd29yZCwgZmlyc3RuYW1lLCBsYXN0bmFtZSwgZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIHZhciBhdXRoZW50aWNhdGVkID0gZmFsc2U7XG4gICAgICAgIGlmIChyZXMuYXV0aGVudGljYXRlZCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdzaWdudXAgYW5kIGxvZ2luIHN1Y2Nlc3NmdWwhJyk7XG4gICAgICAgICAgYXV0aGVudGljYXRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgY2FsbGJhY2soYXV0aGVudGljYXRlZCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhhdC5vbkNoYW5nZShhdXRoZW50aWNhdGVkKTtcbiAgICB9KTtcbiAgfSxcblxuICBsb2dvdXQ6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgZGVsZXRlQWxsQ29va2llcygpO1xuXG4gICAgZnVuY3Rpb24gZGVsZXRlQWxsQ29va2llcygpIHtcbiAgICAgIHZhciBjb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KFwiO1wiKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb29raWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjb29raWUgPSBjb29raWVzW2ldO1xuICAgICAgICB2YXIgZXFQb3MgPSBjb29raWUuaW5kZXhPZihcIj1cIik7XG4gICAgICAgIHZhciBuYW1lID0gZXFQb3MgPiAtMSA/IGNvb2tpZS5zdWJzdHIoMCwgZXFQb3MpIDogY29va2llO1xuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBuYW1lICsgXCI9O2V4cGlyZXM9VGh1LCAwMSBKYW4gMTk3MCAwMDowMDowMCBHTVRcIjtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH1cbiAgICB0aGlzLm9uQ2hhbmdlKGZhbHNlKTtcbiAgfSxcblxuICBsb2dnZWRJbjogZnVuY3Rpb24oKSB7XG4gICAgLy8gY2hlY2sgdGhlIGZsYXNoIHNlc3Npb24gY29va2llXG4gICAgdmFyIGdvb2QgPSBmYWxzZTtcbiAgICB2YXIgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjtcIik7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvb2tpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjb29raWUgPSBjb29raWVzW2ldO1xuICAgICAgdmFyIGVxUG9zID0gY29va2llLmluZGV4T2YoXCJmbGFzaC1zZXNzaW9uPVwiKTtcbiAgICAgIGlmKGVxUG9zID4gLTEpIGdvb2QgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBnb29kO1xuICB9LFxuXG4gIG9uQ2hhbmdlOiBmdW5jdGlvbigpIHt9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEF1dGg7IiwidmFyIGZldGNoVXNlciA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICQuYWpheCh7XG4gICAgdHlwZTogJ0dFVCcsXG4gICAgdXJsOiAnL2dldFVzZXJJbmZvJyxcbiAgICBjcm9zc0RvbWFpbjogdHJ1ZSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwKSB7IC8vIFdPUktJTkcgZm9yIGZldGNodXNlcj9cbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzdWNjZXNzJyxyZXNwKTtcbiAgICAgIGNhbGxiYWNrKHJlc3ApO1xuICAgIH0sXG4gICAgZXJyb3I6IGZ1bmN0aW9uKHJlc3ApIHtcbiAgICAgIC8vIFRPRE86IEZpeCB0aGlzLCB0aGlzIGFsd2F5cyBnb2VzIHRvIGVycm9yIC0gbm90IHN1cmUuXG4gICAgICAvLyBGb3VuZCBvdXQgLSBqUXVlcnkgMS40LjIgd29ya3Mgd2l0aCBjdXJyZW50IGdvIHNlcnZlciwgYnV0IGJyZWFrcyB3aXRoIG5ld2VyIHZlci5cbiAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicscmVzcCk7XG4gICAgICBjYWxsYmFjayhudWxsKTtcbiAgICB9XG4gIH0pO1xufTtcblxudmFyIHVwZGF0ZVVzZXIgPSBmdW5jdGlvbihiaW8sYXZhdGFyLGNhbGxiYWNrKSB7XG4gIHJldHVybiAkLmFqYXgoe1xuICAgIHR5cGU6ICdQT1NUJyxcbiAgICB1cmw6ICcvdXBkYXRlVXNlckluZm8nLFxuICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIFwiYmlvXCI6IGJpbyxcbiAgICAgIFwiYXZhdGFyX2xpbmtcIjogYXZhdGFyXG4gICAgfSksXG4gICAgY3Jvc3NEb21haW46IHRydWUsXG4gICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcCkge1xuICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3MnLHJlc3ApO1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKHJlc3ApO1xuICAgIH0sXG4gICAgZXJyb3I6IGZ1bmN0aW9uKHJlc3ApIHtcbiAgICAgIC8vIFRPRE86IEZpeCB0aGlzLCB0aGlzIGFsd2F5cyBnb2VzIHRvIGVycm9yIC0gbm90IHN1cmUuXG4gICAgICAvLyBGb3VuZCBvdXQgLSBqUXVlcnkgMS40LjIgd29ya3Mgd2l0aCBjdXJyZW50IGdvIHNlcnZlciwgYnV0IGJyZWFrcyB3aXRoIG5ld2VyIHZlci5cbiAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicscmVzcCk7XG4gICAgICBpZihyZXNwLnJlc3BvbnNlVGV4dCA9PT0gXCJcIil7IC8vIGlmIG5vIGVycm9yIG1zZ1xuICAgICAgICBjYWxsYmFjayhyZXNwKTtcbiAgICAgIH1lbHNleyAgICAgICAgIC8vIGlmIGVycm9yIG1zZ1xuICAgICAgICBjYWxsYmFjayhudWxsKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufTtcblxudmFyIFByb2ZpbGUgPSB7XG4gIGZldGNoOiBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICBmZXRjaFVzZXIoKGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjayhyZXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoYXQub25DaGFuZ2UocmVzKTtcbiAgICB9KSk7XG4gIH0sXG4gIFxuICB1cGRhdGU6IGZ1bmN0aW9uKGJpbywgYXZhdGFyLCBjYWxsYmFjaykge1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh7YmlvOmJpbyxhdmF0YXJfbGluazphdmF0YXJ9KSk7XG4gICAgdXBkYXRlVXNlcihiaW8sIGF2YXRhciwgZnVuY3Rpb24ocmVzKSB7XG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2socmVzKTtcbiAgICAgIH1cbiAgICAgIHRoYXQub25DaGFuZ2UocmVzKTtcbiAgICB9KTtcbiAgfSxcblxuICBkZWxldGU6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH1cbiAgICB0aGlzLm9uQ2hhbmdlKGZhbHNlKTtcbiAgfSxcblxuICBvbkNoYW5nZTogZnVuY3Rpb24oKSB7fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm9maWxlOyIsInZhciBhZGRUaHJlYWQgPSBmdW5jdGlvbih0aXRsZSxib2R5LGNhbGxiYWNrKSB7XG4gIHJldHVybiAkLmFqYXgoe1xuICAgIHR5cGU6ICdQT1NUJyxcbiAgICB1cmw6ICcvY3JlYXRlRm9ydW1UaHJlYWQnLFxuICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIFwidGl0bGVcIjogdGl0bGUsXG4gICAgICBcImJvZHlcIjogYm9keVxuICAgIH0pLFxuICAgIGNyb3NzRG9tYWluOiB0cnVlLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3ApIHtcbiAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzJyxyZXNwKTtcbiAgICAgIHJldHVybiBjYWxsYmFjayhyZXNwKTtcbiAgICB9LFxuICAgIGVycm9yOiBmdW5jdGlvbihyZXNwKSB7XG4gICAgICAvLyBUT0RPOiBGaXggdGhpcywgdGhpcyBhbHdheXMgZ29lcyB0byBlcnJvciAtIG5vdCBzdXJlLlxuICAgICAgLy8gRm91bmQgb3V0IC0galF1ZXJ5IDEuNC4yIHdvcmtzIHdpdGggY3VycmVudCBnbyBzZXJ2ZXIsIGJ1dCBicmVha3Mgd2l0aCBuZXdlciB2ZXIuXG4gICAgICBjb25zb2xlLmxvZygnZXJyb3InLHJlc3ApO1xuICAgICAgaWYocmVzcC5yZXNwb25zZVRleHQgPT09IFwiXCIpeyAvLyBpZiBubyBlcnJvciBtc2dcbiAgICAgICAgY2FsbGJhY2socmVzcCk7XG4gICAgICB9ZWxzZXsgICAgICAgICAvLyBpZiBlcnJvciBtc2dcbiAgICAgICAgY2FsbGJhY2sobnVsbCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG5cbnZhciBmZXRjaE9uZSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICQuYWpheCh7XG4gICAgdHlwZTogJ0dFVCcsXG4gICAgdXJsOiAnL2dldFVzZXJJbmZvJyxcbiAgICBjcm9zc0RvbWFpbjogdHJ1ZSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwKSB7IC8vIFdPUktJTkcgZm9yIGZldGNodXNlcj9cbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzdWNjZXNzJyxyZXNwKTtcbiAgICAgIGNhbGxiYWNrKHJlc3ApO1xuICAgIH0sXG4gICAgZXJyb3I6IGZ1bmN0aW9uKHJlc3ApIHtcbiAgICAgIC8vIFRPRE86IEZpeCB0aGlzLCB0aGlzIGFsd2F5cyBnb2VzIHRvIGVycm9yIC0gbm90IHN1cmUuXG4gICAgICAvLyBGb3VuZCBvdXQgLSBqUXVlcnkgMS40LjIgd29ya3Mgd2l0aCBjdXJyZW50IGdvIHNlcnZlciwgYnV0IGJyZWFrcyB3aXRoIG5ld2VyIHZlci5cbiAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicscmVzcCk7XG4gICAgICBjYWxsYmFjayhudWxsKTtcbiAgICB9XG4gIH0pO1xufTtcblxuLy8gR3JhYnMgdGhyZWFkcyBmb3IgcGFnZSBudW1iZXJcbnZhciBmZXRjaFBhZ2UgPSBmdW5jdGlvbihwYWdlLCBjYWxsYmFjaykge1xuICBcbiAgJC5hamF4KHtcbiAgICB0eXBlOiAnUE9TVCcsXG4gICAgdXJsOiAnL2dldEZvcnVtVGhyZWFkc0J5UmF0aW5nJyxcbiAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XCJwYWdlX251bWJlclwiIDogcGFnZX0pLFxuICAgIGNyb3NzRG9tYWluOiB0cnVlLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3ApIHsgLy8gV09SS0lORyBmb3IgZmV0Y2h1c2VyP1xuICAgICAgLy8gY29uc29sZS5sb2coJ3N1Y2Nlc3MnLHJlc3ApO1xuICAgICAgY2FsbGJhY2socmVzcCk7XG4gICAgfSxcbiAgICBlcnJvcjogZnVuY3Rpb24ocmVzcCkge1xuICAgICAgLy8gVE9ETzogRml4IHRoaXMsIHRoaXMgYWx3YXlzIGdvZXMgdG8gZXJyb3IgLSBub3Qgc3VyZS5cbiAgICAgIC8vIEZvdW5kIG91dCAtIGpRdWVyeSAxLjQuMiB3b3JrcyB3aXRoIGN1cnJlbnQgZ28gc2VydmVyLCBidXQgYnJlYWtzIHdpdGggbmV3ZXIgdmVyLlxuICAgICAgY29uc29sZS5sb2coJ2Vycm9yJyxyZXNwKTtcbiAgICAgIGNhbGxiYWNrKG51bGwpO1xuICAgIH1cbiAgfSk7XG59O1xuXG52YXIgZmV0Y2hVc2VyUGFnZSA9IGZ1bmN0aW9uKHBhZ2UsIGNhbGxiYWNrKSB7XG4gIFxuICAkLmFqYXgoe1xuICAgIHR5cGU6ICdQT1NUJyxcbiAgICB1cmw6ICcvZ2V0Rm9ydW1UaHJlYWRzQnlVc2VySWQnLFxuICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcInBhZ2VfbnVtYmVyXCIgOiBwYWdlfSksXG4gICAgY3Jvc3NEb21haW46IHRydWUsXG4gICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcCkgeyAvLyBXT1JLSU5HIGZvciBmZXRjaHVzZXI/XG4gICAgICAvLyBjb25zb2xlLmxvZygnc3VjY2VzcycscmVzcCk7XG4gICAgICBjYWxsYmFjayhyZXNwKTtcbiAgICB9LFxuICAgIGVycm9yOiBmdW5jdGlvbihyZXNwKSB7XG4gICAgICAvLyBUT0RPOiBGaXggdGhpcywgdGhpcyBhbHdheXMgZ29lcyB0byBlcnJvciAtIG5vdCBzdXJlLlxuICAgICAgLy8gRm91bmQgb3V0IC0galF1ZXJ5IDEuNC4yIHdvcmtzIHdpdGggY3VycmVudCBnbyBzZXJ2ZXIsIGJ1dCBicmVha3Mgd2l0aCBuZXdlciB2ZXIuXG4gICAgICBjb25zb2xlLmxvZygnZXJyb3InLHJlc3ApO1xuICAgICAgY2FsbGJhY2sobnVsbCk7XG4gICAgfVxuICB9KTtcbn07XG5cbnZhciB1cGRhdGVUaHJlYWQgPSBmdW5jdGlvbihiaW8sYXZhdGFyLGNhbGxiYWNrKSB7XG4gIHJldHVybiAkLmFqYXgoe1xuICAgIHR5cGU6ICdQT1NUJyxcbiAgICB1cmw6ICcvdXBkYXRlVXNlckluZm8nLFxuICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIFwiYmlvXCI6IGJpbyxcbiAgICAgIFwiYXZhdGFyX2xpbmtcIjogYXZhdGFyXG4gICAgfSksXG4gICAgY3Jvc3NEb21haW46IHRydWUsXG4gICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcCkge1xuICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3MnLHJlc3ApO1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKHJlc3ApO1xuICAgIH0sXG4gICAgZXJyb3I6IGZ1bmN0aW9uKHJlc3ApIHtcbiAgICAgIC8vIFRPRE86IEZpeCB0aGlzLCB0aGlzIGFsd2F5cyBnb2VzIHRvIGVycm9yIC0gbm90IHN1cmUuXG4gICAgICAvLyBGb3VuZCBvdXQgLSBqUXVlcnkgMS40LjIgd29ya3Mgd2l0aCBjdXJyZW50IGdvIHNlcnZlciwgYnV0IGJyZWFrcyB3aXRoIG5ld2VyIHZlci5cbiAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicscmVzcCk7XG4gICAgICBpZihyZXNwLnJlc3BvbnNlVGV4dCA9PT0gXCJcIil7IC8vIGlmIG5vIGVycm9yIG1zZ1xuICAgICAgICBjYWxsYmFjayhyZXNwKTtcbiAgICAgIH1lbHNleyAgICAgICAgIC8vIGlmIGVycm9yIG1zZ1xuICAgICAgICBjYWxsYmFjayhudWxsKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufTtcblxudmFyIHZvdGUgPSBmdW5jdGlvbih0aHJlYWRfaWQsIHNjb3JlLCBjYWxsYmFjaykge1xuICBcbiAgJC5hamF4KHtcbiAgICB0eXBlOiAnUE9TVCcsXG4gICAgdXJsOiAnL3Njb3JlRm9ydW1UaHJlYWQnLFxuICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcInRocmVhZF9pZFwiIDogdGhyZWFkX2lkLCBcInNjb3JlXCIgOiBzY29yZX0pLFxuICAgIGNyb3NzRG9tYWluOiB0cnVlLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3ApIHsgLy8gV09SS0lORyBmb3IgZmV0Y2h1c2VyP1xuICAgICAgLy8gY29uc29sZS5sb2coJ3N1Y2Nlc3MnLHJlc3ApO1xuICAgICAgY2FsbGJhY2socmVzcCk7XG4gICAgfSxcbiAgICBlcnJvcjogZnVuY3Rpb24ocmVzcCkge1xuICAgICAgLy8gVE9ETzogRml4IHRoaXMsIHRoaXMgYWx3YXlzIGdvZXMgdG8gZXJyb3IgLSBub3Qgc3VyZS5cbiAgICAgIC8vIEZvdW5kIG91dCAtIGpRdWVyeSAxLjQuMiB3b3JrcyB3aXRoIGN1cnJlbnQgZ28gc2VydmVyLCBidXQgYnJlYWtzIHdpdGggbmV3ZXIgdmVyLlxuICAgICAgY29uc29sZS5sb2coJ2Vycm9yJyxyZXNwKTtcbiAgICAgIGNhbGxiYWNrKG51bGwpO1xuICAgIH1cbiAgfSk7XG5cbn07XG5cbnZhciBUaHJlYWQgPSB7XG4gIGZldGNoT25lOiBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICBmZXRjaFRocmVhZCgoZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGNhbGxiYWNrKHJlcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhhdC5vbkNoYW5nZShyZXMpO1xuICAgIH0pKTtcbiAgfSxcblxuICBmZXRjaFBhZ2U6IGZ1bmN0aW9uKHBhZ2UsY2FsbGJhY2spIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgZmV0Y2hQYWdlKHBhZ2UsZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGNhbGxiYWNrKHJlcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhhdC5vbkNoYW5nZShyZXMpO1xuICAgIH0pO1xuICB9LFxuXG4gIGZldGNoVXNlclBhZ2U6IGZ1bmN0aW9uKHBhZ2UsY2FsbGJhY2spIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgZmV0Y2hVc2VyUGFnZShwYWdlLGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjayhyZXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoYXQub25DaGFuZ2UocmVzKTtcbiAgICB9KTtcbiAgfSxcblxuICBhZGQ6IGZ1bmN0aW9uKHRpdGxlLCBib2R5LCBjYWxsYmFjaykge1xuICAgIHZhciB0aGF0ID0gdGhpcztcblxuICAgIGFkZFRocmVhZCh0aXRsZSwgYm9keSwgZnVuY3Rpb24ocmVzKSB7XG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2socmVzKTtcbiAgICAgIH1cbiAgICAgIHRoYXQub25DaGFuZ2UocmVzKTtcbiAgICB9KTtcblxuICB9LFxuICBcbiAgdXBkYXRlOiBmdW5jdGlvbihiaW8sIGF2YXRhciwgY2FsbGJhY2spIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgdXBkYXRlVGhyZWFkKGJpbywgYXZhdGFyLCBmdW5jdGlvbihyZXMpIHtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjayhyZXMpO1xuICAgICAgfVxuICAgICAgdGhhdC5vbkNoYW5nZShyZXMpO1xuICAgIH0pO1xuICB9LFxuXG4gIGRlbGV0ZTogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxuICAgIHRoaXMub25DaGFuZ2UoZmFsc2UpO1xuICB9LFxuXG4gIHZvdGU6IGZ1bmN0aW9uKHRocmVhZF9pZCxzY29yZSxjYWxsYmFjayl7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gICAgdm90ZSh0aHJlYWRfaWQsIHNjb3JlLCBmdW5jdGlvbihyZXMpIHtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjayhyZXMpO1xuICAgICAgfVxuICAgICAgdGhhdC5vbkNoYW5nZShyZXMpO1xuICAgIH0pO1xuXG4gIH0sXG5cbiAgb25DaGFuZ2U6IGZ1bmN0aW9uKCkge31cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVGhyZWFkOyIsInZhciBBcHBEaXNwYXRjaGVyID0gcmVxdWlyZSgnLi4vZGlzcGF0Y2hlcnMvQXBwRGlzcGF0Y2hlcicpO1xudmFyIEF1dGhDb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMvQXV0aENvbnN0YW50cycpO1xudmFyIEF1dGggPSByZXF1aXJlKCcuLi9zZXJ2aWNlcy9BdXRoU2VydmljZScpO1xudmFyIEV2ZW50RW1pdHRlciA9IHJlcXVpcmUoJ2V2ZW50cycpLkV2ZW50RW1pdHRlcjtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBDSEFOR0VfRVZFTlQgPSAnY2hhbmdlJztcblxudmFyIF91c2VyID0gbnVsbDtcbnZhciBfbG9nZ2VkSW4gPSBudWxsO1xudmFyIF9lcnJvciA9IG51bGw7XG5cbnZhciBBdXRoU3RvcmUgPSBhc3NpZ24oe30sIEV2ZW50RW1pdHRlci5wcm90b3R5cGUsIHtcblxuICBlbWl0Q2hhbmdlOiBmdW5jdGlvbigpIHtcbiAgICAgdGhpcy5lbWl0KENIQU5HRV9FVkVOVCk7XG4gICB9LFxuXG4gIGVycm9yOiBmdW5jdGlvbigpe1xuICAgIHJldHVybiBfZXJyb3I7XG4gIH0sXG5cbiAgbG9naW46IGZ1bmN0aW9uKHVzZXJuYW1lLHBhc3Mpe1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICBfZXJyb3IgPSBmYWxzZTtcbiAgICBBdXRoLmxvZ2luKHVzZXJuYW1lLHBhc3MsZnVuY3Rpb24oc3VjY2Vzcyl7XG5cbiAgICAgIGlmKHN1Y2Nlc3Mpe1xuICAgICAgICBfbG9nZ2VkSW4gPSB0cnVlO1xuICAgICAgfWVsc2V7XG4gICAgICAgIF9sb2dnZWRJbiA9IGZhbHNlO1xuICAgICAgICBfZXJyb3IgPSB0cnVlO1xuICAgICAgfVxuICAgICAgdGhhdC5lbWl0Q2hhbmdlKCk7XG5cbiAgICB9KTtcbiAgfSxcbiAgLy8gbG9nIG91dCB1c2VyXG4gIGxvZ291dDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIEF1dGgubG9nb3V0KGZ1bmN0aW9uKCl7XG4gICAgICBfbG9nZ2VkSW4gPSBmYWxzZTtcbiAgICAgIHRoYXQuZW1pdENoYW5nZSgpO1xuICAgIH0pO1xuICB9LFxuXG4gIGxvZ2dlZEluOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gQXV0aC5sb2dnZWRJbigpO1xuICB9LFxuXG4gIHNpZ251cDogZnVuY3Rpb24odXNlcm5hbWUscGFzc3dvcmQsZmlyc3RuYW1lLGxhc3RuYW1lKXtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgX2Vycm9yID0gZmFsc2U7XG4gICAgQXV0aC5zaWdudXAodXNlcm5hbWUsIHBhc3N3b3JkLCBmaXJzdG5hbWUsIGxhc3RuYW1lLCBmdW5jdGlvbihzdWNjZXNzKSB7XG5cbiAgICAgIGlmKHN1Y2Nlc3Mpe1xuICAgICAgICBfbG9nZ2VkSW4gPSB0cnVlO1xuICAgICAgfWVsc2V7XG4gICAgICAgIF9sb2dnZWRJbiA9IGZhbHNlO1xuICAgICAgICBfZXJyb3IgPSB0cnVlO1xuICAgICAgfVxuICAgICAgdGhhdC5lbWl0Q2hhbmdlKCk7XG5cbiAgICB9KTtcbiAgfSxcblxuICBhZGRDaGFuZ2VMaXN0ZW5lcjogZnVuY3Rpb24oY2IpIHtcbiAgICB0aGlzLm9uKENIQU5HRV9FVkVOVCwgY2IpXG4gIH0sXG5cbiAgcmVtb3ZlQ2hhbmdlTGlzdGVuZXI6IGZ1bmN0aW9uKGNiKSB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcihDSEFOR0VfRVZFTlQsIGNiKTtcbiAgfVxufSk7XG5cblxuQXBwRGlzcGF0Y2hlci5yZWdpc3RlcihmdW5jdGlvbihwYXlsb2FkKXtcbiAgdmFyIGFjdGlvbiA9IHBheWxvYWQuYWN0aW9uO1xuXG4gIHN3aXRjaChhY3Rpb24uYWN0aW9uVHlwZSl7XG4gICAgY2FzZSBBdXRoQ29uc3RhbnRzLlNJR05VUDpcbiAgICAgIEF1dGhTdG9yZS5zaWdudXAoYWN0aW9uLmRhdGEudXNlcm5hbWUsYWN0aW9uLmRhdGEucGFzc3dvcmQsYWN0aW9uLmRhdGEuZmlyc3RuYW1lLGFjdGlvbi5kYXRhLmxhc3RuYW1lKTtcbiAgICAgIEF1dGhTdG9yZS5lbWl0Q2hhbmdlKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIEF1dGhDb25zdGFudHMuTE9HSU46XG4gICAgICBBdXRoU3RvcmUubG9naW4oYWN0aW9uLmRhdGEudXNlcm5hbWUsYWN0aW9uLmRhdGEucGFzcyk7XG4gICAgICBBdXRoU3RvcmUuZW1pdENoYW5nZSgpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBBdXRoQ29uc3RhbnRzLkxPR09VVDpcbiAgICAgIEF1dGhTdG9yZS5sb2dvdXQoKTtcbiAgICAgIC8vIFJvdXRlckNvbnRhaW5lci5nZXQoKS50cmFuc2l0aW9uVG8oJy9sb2dpbicpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgQXV0aFN0b3JlLmVtaXRDaGFuZ2UoKTtcbiAgcmV0dXJuIHRydWU7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBdXRoU3RvcmU7IiwidmFyIEFwcERpc3BhdGNoZXIgPSByZXF1aXJlKCcuLi9kaXNwYXRjaGVycy9BcHBEaXNwYXRjaGVyJyk7XG52YXIgUHJvZmlsZUNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cy9Qcm9maWxlQ29uc3RhbnRzJyk7XG52YXIgUHJvZmlsZSA9IHJlcXVpcmUoJy4uL3NlcnZpY2VzL1Byb2ZpbGVTZXJ2aWNlJyk7XG52YXIgRXZlbnRFbWl0dGVyID0gcmVxdWlyZSgnZXZlbnRzJykuRXZlbnRFbWl0dGVyO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIENIQU5HRV9FVkVOVCA9ICdjaGFuZ2UnO1xuXG52YXIgX3N0b3JlID0ge1xuICBhdmF0YXJfbGluazogXCJcIixcbiAgYmlvOiBcIlwiLFxuICBmaXJzdF9uYW1lOiBcIlwiLFxuICBsYXN0X25hbWU6IFwiXCIsXG4gIHVzZXJfbmFtZTogXCJcIixcbiAgaWQ6IDAsXG4gIHJlcDogMFxufTtcblxudmFyIFByb2ZpbGVTdG9yZSA9IGFzc2lnbih7fSwgRXZlbnRFbWl0dGVyLnByb3RvdHlwZSwge1xuXG4gIGVtaXRDaGFuZ2U6IGZ1bmN0aW9uKCkge1xuICAgICB0aGlzLmVtaXQoQ0hBTkdFX0VWRU5UKTtcbiAgIH0sXG5cbiAgZ2V0QmlvOiBmdW5jdGlvbigpe1xuICAgIHJldHVybiBfc3RvcmU7XG4gIH0sXG5cbiAgZmV0Y2g6IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIFByb2ZpbGUuZmV0Y2goZnVuY3Rpb24oZGF0YSl7XG4gICAgICBfc3RvcmUgPSBkYXRhO1xuICAgICAgdGhhdC5lbWl0Q2hhbmdlKCk7XG4gICAgfSk7XG4gIH0sXG5cbiAgdXBkYXRlOiBmdW5jdGlvbihiaW8sYXZhdGFyKXtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgUHJvZmlsZS51cGRhdGUoYmlvLGF2YXRhcixmdW5jdGlvbihkYXRhKXtcbiAgICAgIGNvbnNvbGUubG9nKCd1cGRhdGUgc3VjY2Vzc2Z1bCcpO1xuICAgICAgdGhhdC5mZXRjaCgpO1xuICAgIH0pO1xuICB9LFxuXG4gIGRlbGV0ZTogZnVuY3Rpb24oKXtcblxuXG4gIH0sXG5cbiAgYWRkQ2hhbmdlTGlzdGVuZXI6IGZ1bmN0aW9uKGNiKSB7XG4gICAgdGhpcy5vbihDSEFOR0VfRVZFTlQsIGNiKVxuICB9LFxuXG4gIHJlbW92ZUNoYW5nZUxpc3RlbmVyOiBmdW5jdGlvbihjYikge1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoQ0hBTkdFX0VWRU5ULCBjYik7XG4gIH1cbn0pO1xuXG5cbkFwcERpc3BhdGNoZXIucmVnaXN0ZXIoZnVuY3Rpb24ocGF5bG9hZCl7XG4gIHZhciBhY3Rpb24gPSBwYXlsb2FkLmFjdGlvbjtcblxuICBzd2l0Y2goYWN0aW9uLmFjdGlvblR5cGUpe1xuICAgIGNhc2UgUHJvZmlsZUNvbnN0YW50cy5GRVRDSDpcbiAgICAgIFByb2ZpbGVTdG9yZS5mZXRjaCgpO1xuICAgICAgUHJvZmlsZVN0b3JlLmVtaXRDaGFuZ2UoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgUHJvZmlsZUNvbnN0YW50cy5VUERBVEU6XG4gICAgICBQcm9maWxlU3RvcmUudXBkYXRlKGFjdGlvbi5kYXRhLmJpbyxhY3Rpb24uZGF0YS5hdmF0YXJfbGluayk7XG4gICAgICBQcm9maWxlU3RvcmUuZW1pdENoYW5nZSgpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBQcm9maWxlU3RvcmUuREVMRVRFOlxuICAgICAgUHJvZmlsZVN0b3JlLmRlbGV0ZSgpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgUHJvZmlsZVN0b3JlLmVtaXRDaGFuZ2UoKTtcbiAgcmV0dXJuIHRydWU7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm9maWxlU3RvcmU7IiwidmFyIEFwcERpc3BhdGNoZXIgPSByZXF1aXJlKCcuLi9kaXNwYXRjaGVycy9BcHBEaXNwYXRjaGVyJyk7XG52YXIgVGhyZWFkQ29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzL1RocmVhZENvbnN0YW50cycpO1xudmFyIFRocmVhZCA9IHJlcXVpcmUoJy4uL3NlcnZpY2VzL1RocmVhZFNlcnZpY2UnKTtcbnZhciBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKS5FdmVudEVtaXR0ZXI7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgQ0hBTkdFX0VWRU5UID0gJ2NoYW5nZSc7XG5cbnZhciBfdGhyZWFkcyA9IFtdO1xudmFyIF91c2VyVGhyZWFkcyA9IFtdO1xudmFyIF90aHJlYWQgPSBudWxsO1xuXG52YXIgVGhyZWFkU3RvcmUgPSBhc3NpZ24oe30sIEV2ZW50RW1pdHRlci5wcm90b3R5cGUsIHtcblxuICBlbWl0Q2hhbmdlOiBmdW5jdGlvbigpIHtcbiAgICAgdGhpcy5lbWl0KENIQU5HRV9FVkVOVCk7XG4gICB9LFxuXG4gIGdldFRocmVhZDogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gX3RocmVhZDtcbiAgfSxcblxuICBnZXRUaHJlYWRzOiBmdW5jdGlvbigpe1xuICAgIHJldHVybiBfdGhyZWFkcztcbiAgfSxcblxuICBnZXRVc2VyVGhyZWFkczogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gX3VzZXJUaHJlYWRzO1xuICB9LFxuXG4gIGZldGNoUGFnZTogZnVuY3Rpb24ocGFnZSl7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIFRocmVhZC5mZXRjaFBhZ2UocGFnZSwgZnVuY3Rpb24oZGF0YSl7XG4gICAgICBfdGhyZWFkcyA9IGRhdGE7XG4gICAgICB0aGF0LmVtaXRDaGFuZ2UoKTtcbiAgICB9KTtcbiAgfSxcblxuICBmZXRjaFVzZXJQYWdlOiBmdW5jdGlvbihwYWdlKXtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgVGhyZWFkLmZldGNoVXNlclBhZ2UocGFnZSwgZnVuY3Rpb24oZGF0YSl7XG4gICAgICBfdXNlclRocmVhZHMgPSBkYXRhO1xuICAgICAgdGhhdC5lbWl0Q2hhbmdlKCk7XG4gICAgfSk7XG4gIH0sXG5cbiAgYWRkOiBmdW5jdGlvbih0aXRsZSxib2R5KXtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgVGhyZWFkLmFkZCh0aXRsZSxib2R5LGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgdGhhdC5lbWl0Q2hhbmdlKCk7XG4gICAgfSk7XG4gIH0sXG5cbiAgdXBkYXRlOiBmdW5jdGlvbihiaW8sYXZhdGFyKXtcbiAgICAvLyB2YXIgdGhhdCA9IHRoaXM7XG4gICAgLy8gVGhyZWFkLnVwZGF0ZShiaW8sYXZhdGFyLGZ1bmN0aW9uKGRhdGEpe1xuICAgIC8vICAgY29uc29sZS5sb2coJ3VwZGF0ZSBzdWNjZXNzZnVsJyk7XG4gICAgLy8gICB0aGF0LmZldGNoKCk7XG4gICAgLy8gfSk7XG4gIH0sXG5cbiAgZGVsZXRlOiBmdW5jdGlvbigpe1xuXG5cbiAgfSxcblxuICB2b3RlOiBmdW5jdGlvbih0aHJlYWRfaWQsc2NvcmUpe1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICBUaHJlYWQudm90ZSh0aHJlYWRfaWQsc2NvcmUsZnVuY3Rpb24oZGF0YSl7XG4gICAgICB0aGF0LmVtaXRDaGFuZ2UoKTtcbiAgICB9KTtcbiAgfSxcblxuICBhZGRDaGFuZ2VMaXN0ZW5lcjogZnVuY3Rpb24oY2IpIHtcbiAgICB0aGlzLm9uKENIQU5HRV9FVkVOVCwgY2IpXG4gIH0sXG5cbiAgcmVtb3ZlQ2hhbmdlTGlzdGVuZXI6IGZ1bmN0aW9uKGNiKSB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcihDSEFOR0VfRVZFTlQsIGNiKTtcbiAgfVxufSk7XG5cblxuQXBwRGlzcGF0Y2hlci5yZWdpc3RlcihmdW5jdGlvbihwYXlsb2FkKXtcbiAgdmFyIGFjdGlvbiA9IHBheWxvYWQuYWN0aW9uO1xuXG4gIHN3aXRjaChhY3Rpb24uYWN0aW9uVHlwZSl7XG4gICAgY2FzZSBUaHJlYWRDb25zdGFudHMuRkVUQ0hQQUdFOlxuICAgICAgVGhyZWFkU3RvcmUuZmV0Y2hQYWdlKGFjdGlvbi5kYXRhLnBhZ2UpO1xuICAgICAgVGhyZWFkU3RvcmUuZW1pdENoYW5nZSgpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBUaHJlYWRDb25zdGFudHMuRkVUQ0hVU0VSUEFHRTpcbiAgICAgIFRocmVhZFN0b3JlLmZldGNoVXNlclBhZ2UoYWN0aW9uLmRhdGEucGFnZSk7XG4gICAgICBUaHJlYWRTdG9yZS5lbWl0Q2hhbmdlKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFRocmVhZENvbnN0YW50cy5GRVRDSE9ORTpcbiAgICAgIC8vIFRocmVhZFN0b3JlLmZldGNoKGFjdGlvbi5kYXRhLnBhZ2UpO1xuICAgICAgVGhyZWFkU3RvcmUuZW1pdENoYW5nZSgpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBUaHJlYWRDb25zdGFudHMuQUREOlxuICAgICAgVGhyZWFkU3RvcmUuYWRkKGFjdGlvbi5kYXRhLnRpdGxlLGFjdGlvbi5kYXRhLmJvZHkpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBUaHJlYWRDb25zdGFudHMuVVBEQVRFOlxuICAgICAgLy8gVGhyZWFkU3RvcmUuZGVsZXRlKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFRocmVhZENvbnN0YW50cy5ERUxFVEU6XG4gICAgICAvLyBUaHJlYWRTdG9yZS5kZWxldGUoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgVGhyZWFkQ29uc3RhbnRzLlZPVEU6XG4gICAgICBUaHJlYWRTdG9yZS52b3RlKGFjdGlvbi5kYXRhLnRocmVhZF9pZCxhY3Rpb24uZGF0YS5zY29yZSk7XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIFRocmVhZFN0b3JlLmVtaXRDaGFuZ2UoKTtcbiAgcmV0dXJuIHRydWU7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBUaHJlYWRTdG9yZTsiLG51bGwsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIHRoaXMuX2V2ZW50cyA9IHRoaXMuX2V2ZW50cyB8fCB7fTtcbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gdGhpcy5fbWF4TGlzdGVuZXJzIHx8IHVuZGVmaW5lZDtcbn1cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRFbWl0dGVyO1xuXG4vLyBCYWNrd2FyZHMtY29tcGF0IHdpdGggbm9kZSAwLjEwLnhcbkV2ZW50RW1pdHRlci5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50cyA9IHVuZGVmaW5lZDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX21heExpc3RlbmVycyA9IHVuZGVmaW5lZDtcblxuLy8gQnkgZGVmYXVsdCBFdmVudEVtaXR0ZXJzIHdpbGwgcHJpbnQgYSB3YXJuaW5nIGlmIG1vcmUgdGhhbiAxMCBsaXN0ZW5lcnMgYXJlXG4vLyBhZGRlZCB0byBpdC4gVGhpcyBpcyBhIHVzZWZ1bCBkZWZhdWx0IHdoaWNoIGhlbHBzIGZpbmRpbmcgbWVtb3J5IGxlYWtzLlxuRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnMgPSAxMDtcblxuLy8gT2J2aW91c2x5IG5vdCBhbGwgRW1pdHRlcnMgc2hvdWxkIGJlIGxpbWl0ZWQgdG8gMTAuIFRoaXMgZnVuY3Rpb24gYWxsb3dzXG4vLyB0aGF0IHRvIGJlIGluY3JlYXNlZC4gU2V0IHRvIHplcm8gZm9yIHVubGltaXRlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuc2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24obikge1xuICBpZiAoIWlzTnVtYmVyKG4pIHx8IG4gPCAwIHx8IGlzTmFOKG4pKVxuICAgIHRocm93IFR5cGVFcnJvcignbiBtdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyJyk7XG4gIHRoaXMuX21heExpc3RlbmVycyA9IG47XG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24odHlwZSkge1xuICB2YXIgZXIsIGhhbmRsZXIsIGxlbiwgYXJncywgaSwgbGlzdGVuZXJzO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuXG4gIC8vIElmIHRoZXJlIGlzIG5vICdlcnJvcicgZXZlbnQgbGlzdGVuZXIgdGhlbiB0aHJvdy5cbiAgaWYgKHR5cGUgPT09ICdlcnJvcicpIHtcbiAgICBpZiAoIXRoaXMuX2V2ZW50cy5lcnJvciB8fFxuICAgICAgICAoaXNPYmplY3QodGhpcy5fZXZlbnRzLmVycm9yKSAmJiAhdGhpcy5fZXZlbnRzLmVycm9yLmxlbmd0aCkpIHtcbiAgICAgIGVyID0gYXJndW1lbnRzWzFdO1xuICAgICAgaWYgKGVyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgdGhyb3cgZXI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gICAgICB9XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoJ1VuY2F1Z2h0LCB1bnNwZWNpZmllZCBcImVycm9yXCIgZXZlbnQuJyk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlciA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICBpZiAoaXNVbmRlZmluZWQoaGFuZGxlcikpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIGlmIChpc0Z1bmN0aW9uKGhhbmRsZXIpKSB7XG4gICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAvLyBmYXN0IGNhc2VzXG4gICAgICBjYXNlIDE6XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBhcmd1bWVudHNbMV0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLyBzbG93ZXJcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIGFyZ3MgPSBuZXcgQXJyYXkobGVuIC0gMSk7XG4gICAgICAgIGZvciAoaSA9IDE7IGkgPCBsZW47IGkrKylcbiAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgaGFuZGxlci5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNPYmplY3QoaGFuZGxlcikpIHtcbiAgICBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGFyZ3MgPSBuZXcgQXJyYXkobGVuIC0gMSk7XG4gICAgZm9yIChpID0gMTsgaSA8IGxlbjsgaSsrKVxuICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG5cbiAgICBsaXN0ZW5lcnMgPSBoYW5kbGVyLnNsaWNlKCk7XG4gICAgbGVuID0gbGlzdGVuZXJzLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspXG4gICAgICBsaXN0ZW5lcnNbaV0uYXBwbHkodGhpcywgYXJncyk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgbTtcblxuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgdGhpcy5fZXZlbnRzID0ge307XG5cbiAgLy8gVG8gYXZvaWQgcmVjdXJzaW9uIGluIHRoZSBjYXNlIHRoYXQgdHlwZSA9PT0gXCJuZXdMaXN0ZW5lclwiISBCZWZvcmVcbiAgLy8gYWRkaW5nIGl0IHRvIHRoZSBsaXN0ZW5lcnMsIGZpcnN0IGVtaXQgXCJuZXdMaXN0ZW5lclwiLlxuICBpZiAodGhpcy5fZXZlbnRzLm5ld0xpc3RlbmVyKVxuICAgIHRoaXMuZW1pdCgnbmV3TGlzdGVuZXInLCB0eXBlLFxuICAgICAgICAgICAgICBpc0Z1bmN0aW9uKGxpc3RlbmVyLmxpc3RlbmVyKSA/XG4gICAgICAgICAgICAgIGxpc3RlbmVyLmxpc3RlbmVyIDogbGlzdGVuZXIpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgIC8vIE9wdGltaXplIHRoZSBjYXNlIG9mIG9uZSBsaXN0ZW5lci4gRG9uJ3QgbmVlZCB0aGUgZXh0cmEgYXJyYXkgb2JqZWN0LlxuICAgIHRoaXMuX2V2ZW50c1t0eXBlXSA9IGxpc3RlbmVyO1xuICBlbHNlIGlmIChpc09iamVjdCh0aGlzLl9ldmVudHNbdHlwZV0pKVxuICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgZ290IGFuIGFycmF5LCBqdXN0IGFwcGVuZC5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0ucHVzaChsaXN0ZW5lcik7XG4gIGVsc2VcbiAgICAvLyBBZGRpbmcgdGhlIHNlY29uZCBlbGVtZW50LCBuZWVkIHRvIGNoYW5nZSB0byBhcnJheS5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0gPSBbdGhpcy5fZXZlbnRzW3R5cGVdLCBsaXN0ZW5lcl07XG5cbiAgLy8gQ2hlY2sgZm9yIGxpc3RlbmVyIGxlYWtcbiAgaWYgKGlzT2JqZWN0KHRoaXMuX2V2ZW50c1t0eXBlXSkgJiYgIXRoaXMuX2V2ZW50c1t0eXBlXS53YXJuZWQpIHtcbiAgICB2YXIgbTtcbiAgICBpZiAoIWlzVW5kZWZpbmVkKHRoaXMuX21heExpc3RlbmVycykpIHtcbiAgICAgIG0gPSB0aGlzLl9tYXhMaXN0ZW5lcnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSBFdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycztcbiAgICB9XG5cbiAgICBpZiAobSAmJiBtID4gMCAmJiB0aGlzLl9ldmVudHNbdHlwZV0ubGVuZ3RoID4gbSkge1xuICAgICAgdGhpcy5fZXZlbnRzW3R5cGVdLndhcm5lZCA9IHRydWU7XG4gICAgICBjb25zb2xlLmVycm9yKCcobm9kZSkgd2FybmluZzogcG9zc2libGUgRXZlbnRFbWl0dGVyIG1lbW9yeSAnICtcbiAgICAgICAgICAgICAgICAgICAgJ2xlYWsgZGV0ZWN0ZWQuICVkIGxpc3RlbmVycyBhZGRlZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICdVc2UgZW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoKSB0byBpbmNyZWFzZSBsaW1pdC4nLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ldmVudHNbdHlwZV0ubGVuZ3RoKTtcbiAgICAgIGlmICh0eXBlb2YgY29uc29sZS50cmFjZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBub3Qgc3VwcG9ydGVkIGluIElFIDEwXG4gICAgICAgIGNvbnNvbGUudHJhY2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgdmFyIGZpcmVkID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gZygpIHtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGcpO1xuXG4gICAgaWYgKCFmaXJlZCkge1xuICAgICAgZmlyZWQgPSB0cnVlO1xuICAgICAgbGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBnLmxpc3RlbmVyID0gbGlzdGVuZXI7XG4gIHRoaXMub24odHlwZSwgZyk7XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vLyBlbWl0cyBhICdyZW1vdmVMaXN0ZW5lcicgZXZlbnQgaWZmIHRoZSBsaXN0ZW5lciB3YXMgcmVtb3ZlZFxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHZhciBsaXN0LCBwb3NpdGlvbiwgbGVuZ3RoLCBpO1xuXG4gIGlmICghaXNGdW5jdGlvbihsaXN0ZW5lcikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50cyB8fCAhdGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgIHJldHVybiB0aGlzO1xuXG4gIGxpc3QgPSB0aGlzLl9ldmVudHNbdHlwZV07XG4gIGxlbmd0aCA9IGxpc3QubGVuZ3RoO1xuICBwb3NpdGlvbiA9IC0xO1xuXG4gIGlmIChsaXN0ID09PSBsaXN0ZW5lciB8fFxuICAgICAgKGlzRnVuY3Rpb24obGlzdC5saXN0ZW5lcikgJiYgbGlzdC5saXN0ZW5lciA9PT0gbGlzdGVuZXIpKSB7XG4gICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICBpZiAodGhpcy5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3RlbmVyKTtcblxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KGxpc3QpKSB7XG4gICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gPiAwOykge1xuICAgICAgaWYgKGxpc3RbaV0gPT09IGxpc3RlbmVyIHx8XG4gICAgICAgICAgKGxpc3RbaV0ubGlzdGVuZXIgJiYgbGlzdFtpXS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpKSB7XG4gICAgICAgIHBvc2l0aW9uID0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBvc2l0aW9uIDwgMClcbiAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgaWYgKGxpc3QubGVuZ3RoID09PSAxKSB7XG4gICAgICBsaXN0Lmxlbmd0aCA9IDA7XG4gICAgICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaXN0LnNwbGljZShwb3NpdGlvbiwgMSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0ZW5lcik7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID0gZnVuY3Rpb24odHlwZSkge1xuICB2YXIga2V5LCBsaXN0ZW5lcnM7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgLy8gbm90IGxpc3RlbmluZyBmb3IgcmVtb3ZlTGlzdGVuZXIsIG5vIG5lZWQgdG8gZW1pdFxuICBpZiAoIXRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcikge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKVxuICAgICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgZWxzZSBpZiAodGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIGVtaXQgcmVtb3ZlTGlzdGVuZXIgZm9yIGFsbCBsaXN0ZW5lcnMgb24gYWxsIGV2ZW50c1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgIGZvciAoa2V5IGluIHRoaXMuX2V2ZW50cykge1xuICAgICAgaWYgKGtleSA9PT0gJ3JlbW92ZUxpc3RlbmVyJykgY29udGludWU7XG4gICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycyhrZXkpO1xuICAgIH1cbiAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygncmVtb3ZlTGlzdGVuZXInKTtcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICBpZiAoaXNGdW5jdGlvbihsaXN0ZW5lcnMpKSB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnMpO1xuICB9IGVsc2Uge1xuICAgIC8vIExJRk8gb3JkZXJcbiAgICB3aGlsZSAobGlzdGVuZXJzLmxlbmd0aClcbiAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzW2xpc3RlbmVycy5sZW5ndGggLSAxXSk7XG4gIH1cbiAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24odHlwZSkge1xuICB2YXIgcmV0O1xuICBpZiAoIXRoaXMuX2V2ZW50cyB8fCAhdGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgIHJldCA9IFtdO1xuICBlbHNlIGlmIChpc0Z1bmN0aW9uKHRoaXMuX2V2ZW50c1t0eXBlXSkpXG4gICAgcmV0ID0gW3RoaXMuX2V2ZW50c1t0eXBlXV07XG4gIGVsc2VcbiAgICByZXQgPSB0aGlzLl9ldmVudHNbdHlwZV0uc2xpY2UoKTtcbiAgcmV0dXJuIHJldDtcbn07XG5cbkV2ZW50RW1pdHRlci5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24oZW1pdHRlciwgdHlwZSkge1xuICB2YXIgcmV0O1xuICBpZiAoIWVtaXR0ZXIuX2V2ZW50cyB8fCAhZW1pdHRlci5fZXZlbnRzW3R5cGVdKVxuICAgIHJldCA9IDA7XG4gIGVsc2UgaWYgKGlzRnVuY3Rpb24oZW1pdHRlci5fZXZlbnRzW3R5cGVdKSlcbiAgICByZXQgPSAxO1xuICBlbHNlXG4gICAgcmV0ID0gZW1pdHRlci5fZXZlbnRzW3R5cGVdLmxlbmd0aDtcbiAgcmV0dXJuIHJldDtcbn07XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nO1xufVxuXG5mdW5jdGlvbiBpc051bWJlcihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdudW1iZXInO1xufVxuXG5mdW5jdGlvbiBpc09iamVjdChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmIGFyZyAhPT0gbnVsbDtcbn1cblxuZnVuY3Rpb24gaXNVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IHZvaWQgMDtcbn1cbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZHJhaW5RdWV1ZSwgMCk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG4vLyBUT0RPKHNodHlsbWFuKVxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbm1vZHVsZS5leHBvcnRzLkRpc3BhdGNoZXIgPSByZXF1aXJlKCcuL2xpYi9EaXNwYXRjaGVyJylcbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgRGlzcGF0Y2hlclxuICogQHR5cGVjaGVja3NcbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJy4vaW52YXJpYW50Jyk7XG5cbnZhciBfbGFzdElEID0gMTtcbnZhciBfcHJlZml4ID0gJ0lEXyc7XG5cbi8qKlxuICogRGlzcGF0Y2hlciBpcyB1c2VkIHRvIGJyb2FkY2FzdCBwYXlsb2FkcyB0byByZWdpc3RlcmVkIGNhbGxiYWNrcy4gVGhpcyBpc1xuICogZGlmZmVyZW50IGZyb20gZ2VuZXJpYyBwdWItc3ViIHN5c3RlbXMgaW4gdHdvIHdheXM6XG4gKlxuICogICAxKSBDYWxsYmFja3MgYXJlIG5vdCBzdWJzY3JpYmVkIHRvIHBhcnRpY3VsYXIgZXZlbnRzLiBFdmVyeSBwYXlsb2FkIGlzXG4gKiAgICAgIGRpc3BhdGNoZWQgdG8gZXZlcnkgcmVnaXN0ZXJlZCBjYWxsYmFjay5cbiAqICAgMikgQ2FsbGJhY2tzIGNhbiBiZSBkZWZlcnJlZCBpbiB3aG9sZSBvciBwYXJ0IHVudGlsIG90aGVyIGNhbGxiYWNrcyBoYXZlXG4gKiAgICAgIGJlZW4gZXhlY3V0ZWQuXG4gKlxuICogRm9yIGV4YW1wbGUsIGNvbnNpZGVyIHRoaXMgaHlwb3RoZXRpY2FsIGZsaWdodCBkZXN0aW5hdGlvbiBmb3JtLCB3aGljaFxuICogc2VsZWN0cyBhIGRlZmF1bHQgY2l0eSB3aGVuIGEgY291bnRyeSBpcyBzZWxlY3RlZDpcbiAqXG4gKiAgIHZhciBmbGlnaHREaXNwYXRjaGVyID0gbmV3IERpc3BhdGNoZXIoKTtcbiAqXG4gKiAgIC8vIEtlZXBzIHRyYWNrIG9mIHdoaWNoIGNvdW50cnkgaXMgc2VsZWN0ZWRcbiAqICAgdmFyIENvdW50cnlTdG9yZSA9IHtjb3VudHJ5OiBudWxsfTtcbiAqXG4gKiAgIC8vIEtlZXBzIHRyYWNrIG9mIHdoaWNoIGNpdHkgaXMgc2VsZWN0ZWRcbiAqICAgdmFyIENpdHlTdG9yZSA9IHtjaXR5OiBudWxsfTtcbiAqXG4gKiAgIC8vIEtlZXBzIHRyYWNrIG9mIHRoZSBiYXNlIGZsaWdodCBwcmljZSBvZiB0aGUgc2VsZWN0ZWQgY2l0eVxuICogICB2YXIgRmxpZ2h0UHJpY2VTdG9yZSA9IHtwcmljZTogbnVsbH1cbiAqXG4gKiBXaGVuIGEgdXNlciBjaGFuZ2VzIHRoZSBzZWxlY3RlZCBjaXR5LCB3ZSBkaXNwYXRjaCB0aGUgcGF5bG9hZDpcbiAqXG4gKiAgIGZsaWdodERpc3BhdGNoZXIuZGlzcGF0Y2goe1xuICogICAgIGFjdGlvblR5cGU6ICdjaXR5LXVwZGF0ZScsXG4gKiAgICAgc2VsZWN0ZWRDaXR5OiAncGFyaXMnXG4gKiAgIH0pO1xuICpcbiAqIFRoaXMgcGF5bG9hZCBpcyBkaWdlc3RlZCBieSBgQ2l0eVN0b3JlYDpcbiAqXG4gKiAgIGZsaWdodERpc3BhdGNoZXIucmVnaXN0ZXIoZnVuY3Rpb24ocGF5bG9hZCkge1xuICogICAgIGlmIChwYXlsb2FkLmFjdGlvblR5cGUgPT09ICdjaXR5LXVwZGF0ZScpIHtcbiAqICAgICAgIENpdHlTdG9yZS5jaXR5ID0gcGF5bG9hZC5zZWxlY3RlZENpdHk7XG4gKiAgICAgfVxuICogICB9KTtcbiAqXG4gKiBXaGVuIHRoZSB1c2VyIHNlbGVjdHMgYSBjb3VudHJ5LCB3ZSBkaXNwYXRjaCB0aGUgcGF5bG9hZDpcbiAqXG4gKiAgIGZsaWdodERpc3BhdGNoZXIuZGlzcGF0Y2goe1xuICogICAgIGFjdGlvblR5cGU6ICdjb3VudHJ5LXVwZGF0ZScsXG4gKiAgICAgc2VsZWN0ZWRDb3VudHJ5OiAnYXVzdHJhbGlhJ1xuICogICB9KTtcbiAqXG4gKiBUaGlzIHBheWxvYWQgaXMgZGlnZXN0ZWQgYnkgYm90aCBzdG9yZXM6XG4gKlxuICogICAgQ291bnRyeVN0b3JlLmRpc3BhdGNoVG9rZW4gPSBmbGlnaHREaXNwYXRjaGVyLnJlZ2lzdGVyKGZ1bmN0aW9uKHBheWxvYWQpIHtcbiAqICAgICBpZiAocGF5bG9hZC5hY3Rpb25UeXBlID09PSAnY291bnRyeS11cGRhdGUnKSB7XG4gKiAgICAgICBDb3VudHJ5U3RvcmUuY291bnRyeSA9IHBheWxvYWQuc2VsZWN0ZWRDb3VudHJ5O1xuICogICAgIH1cbiAqICAgfSk7XG4gKlxuICogV2hlbiB0aGUgY2FsbGJhY2sgdG8gdXBkYXRlIGBDb3VudHJ5U3RvcmVgIGlzIHJlZ2lzdGVyZWQsIHdlIHNhdmUgYSByZWZlcmVuY2VcbiAqIHRvIHRoZSByZXR1cm5lZCB0b2tlbi4gVXNpbmcgdGhpcyB0b2tlbiB3aXRoIGB3YWl0Rm9yKClgLCB3ZSBjYW4gZ3VhcmFudGVlXG4gKiB0aGF0IGBDb3VudHJ5U3RvcmVgIGlzIHVwZGF0ZWQgYmVmb3JlIHRoZSBjYWxsYmFjayB0aGF0IHVwZGF0ZXMgYENpdHlTdG9yZWBcbiAqIG5lZWRzIHRvIHF1ZXJ5IGl0cyBkYXRhLlxuICpcbiAqICAgQ2l0eVN0b3JlLmRpc3BhdGNoVG9rZW4gPSBmbGlnaHREaXNwYXRjaGVyLnJlZ2lzdGVyKGZ1bmN0aW9uKHBheWxvYWQpIHtcbiAqICAgICBpZiAocGF5bG9hZC5hY3Rpb25UeXBlID09PSAnY291bnRyeS11cGRhdGUnKSB7XG4gKiAgICAgICAvLyBgQ291bnRyeVN0b3JlLmNvdW50cnlgIG1heSBub3QgYmUgdXBkYXRlZC5cbiAqICAgICAgIGZsaWdodERpc3BhdGNoZXIud2FpdEZvcihbQ291bnRyeVN0b3JlLmRpc3BhdGNoVG9rZW5dKTtcbiAqICAgICAgIC8vIGBDb3VudHJ5U3RvcmUuY291bnRyeWAgaXMgbm93IGd1YXJhbnRlZWQgdG8gYmUgdXBkYXRlZC5cbiAqXG4gKiAgICAgICAvLyBTZWxlY3QgdGhlIGRlZmF1bHQgY2l0eSBmb3IgdGhlIG5ldyBjb3VudHJ5XG4gKiAgICAgICBDaXR5U3RvcmUuY2l0eSA9IGdldERlZmF1bHRDaXR5Rm9yQ291bnRyeShDb3VudHJ5U3RvcmUuY291bnRyeSk7XG4gKiAgICAgfVxuICogICB9KTtcbiAqXG4gKiBUaGUgdXNhZ2Ugb2YgYHdhaXRGb3IoKWAgY2FuIGJlIGNoYWluZWQsIGZvciBleGFtcGxlOlxuICpcbiAqICAgRmxpZ2h0UHJpY2VTdG9yZS5kaXNwYXRjaFRva2VuID1cbiAqICAgICBmbGlnaHREaXNwYXRjaGVyLnJlZ2lzdGVyKGZ1bmN0aW9uKHBheWxvYWQpIHtcbiAqICAgICAgIHN3aXRjaCAocGF5bG9hZC5hY3Rpb25UeXBlKSB7XG4gKiAgICAgICAgIGNhc2UgJ2NvdW50cnktdXBkYXRlJzpcbiAqICAgICAgICAgICBmbGlnaHREaXNwYXRjaGVyLndhaXRGb3IoW0NpdHlTdG9yZS5kaXNwYXRjaFRva2VuXSk7XG4gKiAgICAgICAgICAgRmxpZ2h0UHJpY2VTdG9yZS5wcmljZSA9XG4gKiAgICAgICAgICAgICBnZXRGbGlnaHRQcmljZVN0b3JlKENvdW50cnlTdG9yZS5jb3VudHJ5LCBDaXR5U3RvcmUuY2l0eSk7XG4gKiAgICAgICAgICAgYnJlYWs7XG4gKlxuICogICAgICAgICBjYXNlICdjaXR5LXVwZGF0ZSc6XG4gKiAgICAgICAgICAgRmxpZ2h0UHJpY2VTdG9yZS5wcmljZSA9XG4gKiAgICAgICAgICAgICBGbGlnaHRQcmljZVN0b3JlKENvdW50cnlTdG9yZS5jb3VudHJ5LCBDaXR5U3RvcmUuY2l0eSk7XG4gKiAgICAgICAgICAgYnJlYWs7XG4gKiAgICAgfVxuICogICB9KTtcbiAqXG4gKiBUaGUgYGNvdW50cnktdXBkYXRlYCBwYXlsb2FkIHdpbGwgYmUgZ3VhcmFudGVlZCB0byBpbnZva2UgdGhlIHN0b3JlcydcbiAqIHJlZ2lzdGVyZWQgY2FsbGJhY2tzIGluIG9yZGVyOiBgQ291bnRyeVN0b3JlYCwgYENpdHlTdG9yZWAsIHRoZW5cbiAqIGBGbGlnaHRQcmljZVN0b3JlYC5cbiAqL1xuXG4gIGZ1bmN0aW9uIERpc3BhdGNoZXIoKSB7XG4gICAgdGhpcy4kRGlzcGF0Y2hlcl9jYWxsYmFja3MgPSB7fTtcbiAgICB0aGlzLiREaXNwYXRjaGVyX2lzUGVuZGluZyA9IHt9O1xuICAgIHRoaXMuJERpc3BhdGNoZXJfaXNIYW5kbGVkID0ge307XG4gICAgdGhpcy4kRGlzcGF0Y2hlcl9pc0Rpc3BhdGNoaW5nID0gZmFsc2U7XG4gICAgdGhpcy4kRGlzcGF0Y2hlcl9wZW5kaW5nUGF5bG9hZCA9IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGEgY2FsbGJhY2sgdG8gYmUgaW52b2tlZCB3aXRoIGV2ZXJ5IGRpc3BhdGNoZWQgcGF5bG9hZC4gUmV0dXJuc1xuICAgKiBhIHRva2VuIHRoYXQgY2FuIGJlIHVzZWQgd2l0aCBgd2FpdEZvcigpYC5cbiAgICpcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgRGlzcGF0Y2hlci5wcm90b3R5cGUucmVnaXN0ZXI9ZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICB2YXIgaWQgPSBfcHJlZml4ICsgX2xhc3RJRCsrO1xuICAgIHRoaXMuJERpc3BhdGNoZXJfY2FsbGJhY2tzW2lkXSA9IGNhbGxiYWNrO1xuICAgIHJldHVybiBpZDtcbiAgfTtcblxuICAvKipcbiAgICogUmVtb3ZlcyBhIGNhbGxiYWNrIGJhc2VkIG9uIGl0cyB0b2tlbi5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlkXG4gICAqL1xuICBEaXNwYXRjaGVyLnByb3RvdHlwZS51bnJlZ2lzdGVyPWZ1bmN0aW9uKGlkKSB7XG4gICAgaW52YXJpYW50KFxuICAgICAgdGhpcy4kRGlzcGF0Y2hlcl9jYWxsYmFja3NbaWRdLFxuICAgICAgJ0Rpc3BhdGNoZXIudW5yZWdpc3RlciguLi4pOiBgJXNgIGRvZXMgbm90IG1hcCB0byBhIHJlZ2lzdGVyZWQgY2FsbGJhY2suJyxcbiAgICAgIGlkXG4gICAgKTtcbiAgICBkZWxldGUgdGhpcy4kRGlzcGF0Y2hlcl9jYWxsYmFja3NbaWRdO1xuICB9O1xuXG4gIC8qKlxuICAgKiBXYWl0cyBmb3IgdGhlIGNhbGxiYWNrcyBzcGVjaWZpZWQgdG8gYmUgaW52b2tlZCBiZWZvcmUgY29udGludWluZyBleGVjdXRpb25cbiAgICogb2YgdGhlIGN1cnJlbnQgY2FsbGJhY2suIFRoaXMgbWV0aG9kIHNob3VsZCBvbmx5IGJlIHVzZWQgYnkgYSBjYWxsYmFjayBpblxuICAgKiByZXNwb25zZSB0byBhIGRpc3BhdGNoZWQgcGF5bG9hZC5cbiAgICpcbiAgICogQHBhcmFtIHthcnJheTxzdHJpbmc+fSBpZHNcbiAgICovXG4gIERpc3BhdGNoZXIucHJvdG90eXBlLndhaXRGb3I9ZnVuY3Rpb24oaWRzKSB7XG4gICAgaW52YXJpYW50KFxuICAgICAgdGhpcy4kRGlzcGF0Y2hlcl9pc0Rpc3BhdGNoaW5nLFxuICAgICAgJ0Rpc3BhdGNoZXIud2FpdEZvciguLi4pOiBNdXN0IGJlIGludm9rZWQgd2hpbGUgZGlzcGF0Y2hpbmcuJ1xuICAgICk7XG4gICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IGlkcy5sZW5ndGg7IGlpKyspIHtcbiAgICAgIHZhciBpZCA9IGlkc1tpaV07XG4gICAgICBpZiAodGhpcy4kRGlzcGF0Y2hlcl9pc1BlbmRpbmdbaWRdKSB7XG4gICAgICAgIGludmFyaWFudChcbiAgICAgICAgICB0aGlzLiREaXNwYXRjaGVyX2lzSGFuZGxlZFtpZF0sXG4gICAgICAgICAgJ0Rpc3BhdGNoZXIud2FpdEZvciguLi4pOiBDaXJjdWxhciBkZXBlbmRlbmN5IGRldGVjdGVkIHdoaWxlICcgK1xuICAgICAgICAgICd3YWl0aW5nIGZvciBgJXNgLicsXG4gICAgICAgICAgaWRcbiAgICAgICAgKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpbnZhcmlhbnQoXG4gICAgICAgIHRoaXMuJERpc3BhdGNoZXJfY2FsbGJhY2tzW2lkXSxcbiAgICAgICAgJ0Rpc3BhdGNoZXIud2FpdEZvciguLi4pOiBgJXNgIGRvZXMgbm90IG1hcCB0byBhIHJlZ2lzdGVyZWQgY2FsbGJhY2suJyxcbiAgICAgICAgaWRcbiAgICAgICk7XG4gICAgICB0aGlzLiREaXNwYXRjaGVyX2ludm9rZUNhbGxiYWNrKGlkKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIERpc3BhdGNoZXMgYSBwYXlsb2FkIHRvIGFsbCByZWdpc3RlcmVkIGNhbGxiYWNrcy5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IHBheWxvYWRcbiAgICovXG4gIERpc3BhdGNoZXIucHJvdG90eXBlLmRpc3BhdGNoPWZ1bmN0aW9uKHBheWxvYWQpIHtcbiAgICBpbnZhcmlhbnQoXG4gICAgICAhdGhpcy4kRGlzcGF0Y2hlcl9pc0Rpc3BhdGNoaW5nLFxuICAgICAgJ0Rpc3BhdGNoLmRpc3BhdGNoKC4uLik6IENhbm5vdCBkaXNwYXRjaCBpbiB0aGUgbWlkZGxlIG9mIGEgZGlzcGF0Y2guJ1xuICAgICk7XG4gICAgdGhpcy4kRGlzcGF0Y2hlcl9zdGFydERpc3BhdGNoaW5nKHBheWxvYWQpO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBpZCBpbiB0aGlzLiREaXNwYXRjaGVyX2NhbGxiYWNrcykge1xuICAgICAgICBpZiAodGhpcy4kRGlzcGF0Y2hlcl9pc1BlbmRpbmdbaWRdKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4kRGlzcGF0Y2hlcl9pbnZva2VDYWxsYmFjayhpZCk7XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuJERpc3BhdGNoZXJfc3RvcERpc3BhdGNoaW5nKCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBJcyB0aGlzIERpc3BhdGNoZXIgY3VycmVudGx5IGRpc3BhdGNoaW5nLlxuICAgKlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgRGlzcGF0Y2hlci5wcm90b3R5cGUuaXNEaXNwYXRjaGluZz1mdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kRGlzcGF0Y2hlcl9pc0Rpc3BhdGNoaW5nO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDYWxsIHRoZSBjYWxsYmFjayBzdG9yZWQgd2l0aCB0aGUgZ2l2ZW4gaWQuIEFsc28gZG8gc29tZSBpbnRlcm5hbFxuICAgKiBib29ra2VlcGluZy5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlkXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgRGlzcGF0Y2hlci5wcm90b3R5cGUuJERpc3BhdGNoZXJfaW52b2tlQ2FsbGJhY2s9ZnVuY3Rpb24oaWQpIHtcbiAgICB0aGlzLiREaXNwYXRjaGVyX2lzUGVuZGluZ1tpZF0gPSB0cnVlO1xuICAgIHRoaXMuJERpc3BhdGNoZXJfY2FsbGJhY2tzW2lkXSh0aGlzLiREaXNwYXRjaGVyX3BlbmRpbmdQYXlsb2FkKTtcbiAgICB0aGlzLiREaXNwYXRjaGVyX2lzSGFuZGxlZFtpZF0gPSB0cnVlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTZXQgdXAgYm9va2tlZXBpbmcgbmVlZGVkIHdoZW4gZGlzcGF0Y2hpbmcuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwYXlsb2FkXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgRGlzcGF0Y2hlci5wcm90b3R5cGUuJERpc3BhdGNoZXJfc3RhcnREaXNwYXRjaGluZz1mdW5jdGlvbihwYXlsb2FkKSB7XG4gICAgZm9yICh2YXIgaWQgaW4gdGhpcy4kRGlzcGF0Y2hlcl9jYWxsYmFja3MpIHtcbiAgICAgIHRoaXMuJERpc3BhdGNoZXJfaXNQZW5kaW5nW2lkXSA9IGZhbHNlO1xuICAgICAgdGhpcy4kRGlzcGF0Y2hlcl9pc0hhbmRsZWRbaWRdID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuJERpc3BhdGNoZXJfcGVuZGluZ1BheWxvYWQgPSBwYXlsb2FkO1xuICAgIHRoaXMuJERpc3BhdGNoZXJfaXNEaXNwYXRjaGluZyA9IHRydWU7XG4gIH07XG5cbiAgLyoqXG4gICAqIENsZWFyIGJvb2trZWVwaW5nIHVzZWQgZm9yIGRpc3BhdGNoaW5nLlxuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIERpc3BhdGNoZXIucHJvdG90eXBlLiREaXNwYXRjaGVyX3N0b3BEaXNwYXRjaGluZz1mdW5jdGlvbigpIHtcbiAgICB0aGlzLiREaXNwYXRjaGVyX3BlbmRpbmdQYXlsb2FkID0gbnVsbDtcbiAgICB0aGlzLiREaXNwYXRjaGVyX2lzRGlzcGF0Y2hpbmcgPSBmYWxzZTtcbiAgfTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IERpc3BhdGNoZXI7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBpbnZhcmlhbnRcbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIGludmFyaWFudCA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIGlmIChmYWxzZSkge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgICdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICtcbiAgICAgICAgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJ1xuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgICdJbnZhcmlhbnQgVmlvbGF0aW9uOiAnICtcbiAgICAgICAgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJnc1thcmdJbmRleCsrXTsgfSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgZXJyb3IuZnJhbWVzVG9Qb3AgPSAxOyAvLyB3ZSBkb24ndCBjYXJlIGFib3V0IGludmFyaWFudCdzIG93biBmcmFtZVxuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGludmFyaWFudDtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gVG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT0gbnVsbCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIG93bkVudW1lcmFibGVLZXlzKG9iaikge1xuXHR2YXIga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaik7XG5cblx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRrZXlzID0ga2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmopKTtcblx0fVxuXG5cdHJldHVybiBrZXlzLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7XG5cdFx0cmV0dXJuIHByb3BJc0VudW1lcmFibGUuY2FsbChvYmosIGtleSk7XG5cdH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIga2V5cztcblx0dmFyIHRvID0gVG9PYmplY3QodGFyZ2V0KTtcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBhcmd1bWVudHNbc107XG5cdFx0a2V5cyA9IG93bkVudW1lcmFibGVLZXlzKE9iamVjdChmcm9tKSk7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHRvW2tleXNbaV1dID0gZnJvbVtrZXlzW2ldXTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuIiwiLyoganNoaW50IG5vZGU6dHJ1ZSAqL1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBFeHBvc2UgYFJlYWN0YCBhcyBhIGdsb2JhbCwgYmVjYXVzZSB0aGUgUmVhY3RJbnRsTWl4aW4gYXNzdW1lcyBpdCdzIGdsb2JhbC5cbnZhciBvbGRSZWFjdCA9IGdsb2JhbC5SZWFjdDtcbmdsb2JhbC5SZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbi8vIFJlcXVpcmUgdGhlIGxpYiBhbmQgYWRkIGFsbCBsb2NhbGUgZGF0YSB0byBgUmVhY3RJbnRsYC4gVGhpcyBtb2R1bGUgd2lsbCBiZVxuLy8gaWdub3JlZCB3aGVuIGJ1bmRsaW5nIGZvciB0aGUgYnJvd3NlciB3aXRoIEJyb3dzZXJpZnkvV2VicGFjay5cbnZhciBSZWFjdEludGwgPSByZXF1aXJlKCcuL2xpYi9yZWFjdC1pbnRsJyk7XG5yZXF1aXJlKCcuL2xpYi9sb2NhbGVzJyk7XG5cbi8vIEV4cG9ydCB0aGUgTWl4aW4gYXMgdGhlIGRlZmF1bHQgZXhwb3J0IGZvciBiYWNrLWNvbXBhdCB3aXRoIHYxLjAuMC4gVGhpcyB3aWxsXG4vLyBiZSBjaGFuZ2VkIHRvIHNpbXBseSByZS1leHBvcnRpbmcgYFJlYWN0SW50bGAgYXMgdGhlIGRlZmF1bHQgZXhwb3J0IGluIHYyLjAuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBSZWFjdEludGwuSW50bE1peGluO1xuXG4vLyBEZWZpbmUgbm9uLWVudW1lcmFibGUgZXhwYW5kb3MgZm9yIGVhY2ggbmFtZWQgZXhwb3J0IG9uIHRoZSBkZWZhdWx0IGV4cG9ydCAtLVxuLy8gd2hpY2ggaXMgdGhlIE1peGluIGZvciBiYWNrLWNvbXBhdCB3aXRoIHYxLjAuMC5cbk9iamVjdC5rZXlzKFJlYWN0SW50bCkuZm9yRWFjaChmdW5jdGlvbiAobmFtZWRFeHBvcnQpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZWRFeHBvcnQsIHtcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWUgICAgIDogUmVhY3RJbnRsW25hbWVkRXhwb3J0XVxuICAgIH0pO1xufSk7XG5cbi8vIFB1dCBiYWNrIGBnbG9iYWwuUmVhY3RgIHRvIGhvdyBpdCB3YXMuXG5pZiAob2xkUmVhY3QpIHtcbiAgICBnbG9iYWwuUmVhY3QgPSBvbGRSZWFjdDtcbn0gZWxzZSB7XG4gICAgLy8gSUUgPCA5IHdpbGwgdGhyb3cgd2hlbiB0cnlpbmcgdG8gZGVsZXRlIHNvbWV0aGluZyBvZmYgdGhlIGdsb2JhbCBvYmplY3QsXG4gICAgLy8gYHdpbmRvd2AsIHNvIHRoaXMgZG9lcyB0aGUgbmV4dCBiZXN0IHRoaW5nIGFzIHNldHMgaXQgdG8gYHVuZGVmaW5lZGAuXG4gICAgdHJ5IHtcbiAgICAgICAgZGVsZXRlIGdsb2JhbC5SZWFjdDtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGdsb2JhbC5SZWFjdCA9IHVuZGVmaW5lZDtcbiAgICB9XG59XG4iLCIvKiBqc2hpbnQgZXNuZXh0OnRydWUgKi9cblxuLy8gVE9ETzogVXNlIGBpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7YCB3aGVuIGV4dGVybmFsIG1vZHVsZXMgYXJlIHN1cHBvcnRlZC5cblwidXNlIHN0cmljdFwiO1xudmFyIHNyYyRyZWFjdCQkID0gcmVxdWlyZShcIi4uL3JlYWN0XCIpLCBzcmMkbWl4aW4kJCA9IHJlcXVpcmUoXCIuLi9taXhpblwiKTtcblxudmFyIEZvcm1hdHRlZERhdGUgPSBzcmMkcmVhY3QkJFtcImRlZmF1bHRcIl0uY3JlYXRlQ2xhc3Moe1xuICAgIGRpc3BsYXlOYW1lOiAnRm9ybWF0dGVkRGF0ZScsXG4gICAgbWl4aW5zICAgICA6IFtzcmMkbWl4aW4kJFtcImRlZmF1bHRcIl1dLFxuXG4gICAgc3RhdGljczoge1xuICAgICAgICBmb3JtYXRPcHRpb25zOiBbXG4gICAgICAgICAgICAnbG9jYWxlTWF0Y2hlcicsICd0aW1lWm9uZScsICdob3VyMTInLCAnZm9ybWF0TWF0Y2hlcicsICd3ZWVrZGF5JyxcbiAgICAgICAgICAgICdlcmEnLCAneWVhcicsICdtb250aCcsICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJyxcbiAgICAgICAgICAgICd0aW1lWm9uZU5hbWUnXG4gICAgICAgIF1cbiAgICB9LFxuXG4gICAgcHJvcFR5cGVzOiB7XG4gICAgICAgIGZvcm1hdDogc3JjJHJlYWN0JCRbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHZhbHVlIDogc3JjJHJlYWN0JCRbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZFxuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHByb3BzICAgID0gdGhpcy5wcm9wcztcbiAgICAgICAgdmFyIHZhbHVlICAgID0gcHJvcHMudmFsdWU7XG4gICAgICAgIHZhciBmb3JtYXQgICA9IHByb3BzLmZvcm1hdDtcbiAgICAgICAgdmFyIGRlZmF1bHRzID0gZm9ybWF0ICYmIHRoaXMuZ2V0TmFtZWRGb3JtYXQoJ2RhdGUnLCBmb3JtYXQpO1xuICAgICAgICB2YXIgb3B0aW9ucyAgPSBGb3JtYXR0ZWREYXRlLmZpbHRlckZvcm1hdE9wdGlvbnMocHJvcHMsIGRlZmF1bHRzKTtcblxuICAgICAgICByZXR1cm4gc3JjJHJlYWN0JCRbXCJkZWZhdWx0XCJdLkRPTS5zcGFuKG51bGwsIHRoaXMuZm9ybWF0RGF0ZSh2YWx1ZSwgb3B0aW9ucykpO1xuICAgIH1cbn0pO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEZvcm1hdHRlZERhdGU7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGUuanMubWFwIiwiLyoganNoaW50IGVzbmV4dDp0cnVlICovXG5cbi8vIFRPRE86IFVzZSBgaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO2Agd2hlbiBleHRlcm5hbCBtb2R1bGVzIGFyZSBzdXBwb3J0ZWQuXG5cInVzZSBzdHJpY3RcIjtcbnZhciBzcmMkcmVhY3QkJCA9IHJlcXVpcmUoXCIuLi9yZWFjdFwiKSwgc3JjJGVzY2FwZSQkID0gcmVxdWlyZShcIi4uL2VzY2FwZVwiKSwgc3JjJG1peGluJCQgPSByZXF1aXJlKFwiLi4vbWl4aW5cIik7XG5cbnZhciBGb3JtYXR0ZWRIVE1MTWVzc2FnZSA9IHNyYyRyZWFjdCQkW1wiZGVmYXVsdFwiXS5jcmVhdGVDbGFzcyh7XG4gICAgZGlzcGxheU5hbWU6ICdGb3JtYXR0ZWRIVE1MTWVzc2FnZScsXG4gICAgbWl4aW5zICAgICA6IFtzcmMkbWl4aW4kJFtcImRlZmF1bHRcIl1dLFxuXG4gICAgcHJvcFR5cGVzOiB7XG4gICAgICAgIHRhZ05hbWU6IHNyYyRyZWFjdCQkW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBtZXNzYWdlOiBzcmMkcmVhY3QkJFtcImRlZmF1bHRcIl0uUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4gICAgfSxcblxuICAgIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge3RhZ05hbWU6ICdzcGFuJ307XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcHJvcHMgICA9IHRoaXMucHJvcHM7XG4gICAgICAgIHZhciB0YWdOYW1lID0gcHJvcHMudGFnTmFtZTtcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSBwcm9wcy5tZXNzYWdlO1xuXG4gICAgICAgIC8vIFByb2Nlc3MgYWxsIHRoZSBwcm9wcyBiZWZvcmUgdGhleSBhcmUgdXNlZCBhcyB2YWx1ZXMgd2hlbiBmb3JtYXR0aW5nXG4gICAgICAgIC8vIHRoZSBJQ1UgTWVzc2FnZSBzdHJpbmcuIFNpbmNlIHRoZSBmb3JtYXR0ZWQgbWVzc2FnZSB3aWxsIGJlIGluamVjdGVkXG4gICAgICAgIC8vIHZpYSBgaW5uZXJIVE1MYCwgYWxsIFN0cmluZy1iYXNlZCB2YWx1ZXMgbmVlZCB0byBiZSBIVE1MLWVzY2FwZWQuIEFueVxuICAgICAgICAvLyBSZWFjdCBFbGVtZW50cyB0aGF0IGFyZSBwYXNzZWQgYXMgcHJvcHMgd2lsbCBiZSByZW5kZXJlZCB0byBhIHN0YXRpY1xuICAgICAgICAvLyBtYXJrdXAgc3RyaW5nIHRoYXQgaXMgcHJlc3VtZWQgdG8gYmUgc2FmZS5cbiAgICAgICAgdmFyIHZhbHVlcyA9IE9iamVjdC5rZXlzKHByb3BzKS5yZWR1Y2UoZnVuY3Rpb24gKHZhbHVlcywgbmFtZSkge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gcHJvcHNbbmFtZV07XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBzcmMkZXNjYXBlJCRbXCJkZWZhdWx0XCJdKHZhbHVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3JjJHJlYWN0JCRbXCJkZWZhdWx0XCJdLmlzVmFsaWRFbGVtZW50KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gc3JjJHJlYWN0JCRbXCJkZWZhdWx0XCJdLnJlbmRlclRvU3RhdGljTWFya3VwKHZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFsdWVzW25hbWVdID0gdmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWVzO1xuICAgICAgICB9LCB7fSk7XG5cbiAgICAgICAgLy8gU2luY2UgdGhlIG1lc3NhZ2UgcHJlc3VtYWJseSBoYXMgSFRNTCBpbiBpdCwgd2UgbmVlZCB0byBzZXRcbiAgICAgICAgLy8gYGlubmVySFRNTGAgaW4gb3JkZXIgZm9yIGl0IHRvIGJlIHJlbmRlcmVkIGFuZCBub3QgZXNjYXBlZCBieSBSZWFjdC5cbiAgICAgICAgLy8gVG8gYmUgc2FmZSwgYWxsIHN0cmluZyBwcm9wIHZhbHVlcyB3ZXJlIGVzY2FwZWQgYmVmb3JlIGZvcm1hdHRpbmcgdGhlXG4gICAgICAgIC8vIG1lc3NhZ2UuIEl0IGlzIGFzc3VtZWQgdGhhdCB0aGUgbWVzc2FnZSBpcyBub3QgVUdDLCBhbmQgY2FtZSBmcm9tXG4gICAgICAgIC8vIHRoZSBkZXZlbG9wZXIgbWFraW5nIGl0IG1vcmUgbGlrZSBhIHRlbXBsYXRlLlxuICAgICAgICAvL1xuICAgICAgICAvLyBOb3RlOiBUaGVyZSdzIGEgcGVyZiBpbXBhY3Qgb2YgdXNpbmcgdGhpcyBjb21wb25lbnQgc2luY2UgdGhlcmUncyBub1xuICAgICAgICAvLyB3YXkgZm9yIFJlYWN0IHRvIGRvIGl0cyB2aXJ0dWFsIERPTSBkaWZmaW5nLlxuICAgICAgICByZXR1cm4gc3JjJHJlYWN0JCRbXCJkZWZhdWx0XCJdLkRPTVt0YWdOYW1lXSh7XG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xuICAgICAgICAgICAgICAgIF9faHRtbDogdGhpcy5mb3JtYXRNZXNzYWdlKG1lc3NhZ2UsIHZhbHVlcylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gRm9ybWF0dGVkSFRNTE1lc3NhZ2U7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWh0bWwtbWVzc2FnZS5qcy5tYXAiLCIvKiBqc2hpbnQgZXNuZXh0OnRydWUgKi9cblxuLy8gVE9ETzogVXNlIGBpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7YCB3aGVuIGV4dGVybmFsIG1vZHVsZXMgYXJlIHN1cHBvcnRlZC5cblwidXNlIHN0cmljdFwiO1xudmFyIHNyYyRyZWFjdCQkID0gcmVxdWlyZShcIi4uL3JlYWN0XCIpLCBzcmMkbWl4aW4kJCA9IHJlcXVpcmUoXCIuLi9taXhpblwiKTtcblxudmFyIEZvcm1hdHRlZE1lc3NhZ2UgPSBzcmMkcmVhY3QkJFtcImRlZmF1bHRcIl0uY3JlYXRlQ2xhc3Moe1xuICAgIGRpc3BsYXlOYW1lOiAnRm9ybWF0dGVkTWVzc2FnZScsXG4gICAgbWl4aW5zICAgICA6IFtzcmMkbWl4aW4kJFtcImRlZmF1bHRcIl1dLFxuXG4gICAgcHJvcFR5cGVzOiB7XG4gICAgICAgIHRhZ05hbWU6IHNyYyRyZWFjdCQkW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBtZXNzYWdlOiBzcmMkcmVhY3QkJFtcImRlZmF1bHRcIl0uUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4gICAgfSxcblxuICAgIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge3RhZ05hbWU6ICdzcGFuJ307XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcHJvcHMgICA9IHRoaXMucHJvcHM7XG4gICAgICAgIHZhciB0YWdOYW1lID0gcHJvcHMudGFnTmFtZTtcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSBwcm9wcy5tZXNzYWdlO1xuXG4gICAgICAgIC8vIENyZWF0ZXMgYSB0b2tlbiB3aXRoIGEgcmFuZG9tIGd1aWQgdGhhdCBzaG91bGQgbm90IGJlIGd1ZXNzYWJsZSBvclxuICAgICAgICAvLyBjb25mbGljdCB3aXRoIG90aGVyIHBhcnRzIG9mIHRoZSBgbWVzc2FnZWAgc3RyaW5nLlxuICAgICAgICB2YXIgZ3VpZCAgICAgICA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDB4MTAwMDAwMDAwMDApLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgdmFyIHRva2VuUmVnZXggPSBuZXcgUmVnRXhwKCcoQF9fRUxFTUVOVC0nICsgZ3VpZCArICctXFxcXGQrX19AKScsICdnJyk7XG4gICAgICAgIHZhciBlbGVtZW50cyAgID0ge307XG5cbiAgICAgICAgdmFyIGdlbmVyYXRlVG9rZW4gPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGNvdW50ZXIgPSAwO1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0BfX0VMRU1FTlQtJyArIGd1aWQgKyAnLScgKyAoY291bnRlciArPSAxKSArICdfX0AnO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSgpKTtcblxuICAgICAgICAvLyBJdGVyYXRlcyBvdmVyIHRoZSBgcHJvcHNgIHRvIGtlZXAgdHJhY2sgb2YgYW55IFJlYWN0IEVsZW1lbnQgdmFsdWVzXG4gICAgICAgIC8vIHNvIHRoZXkgY2FuIGJlIHJlcHJlc2VudGVkIGJ5IHRoZSBgdG9rZW5gIGFzIGEgcGxhY2Vob2xkZXIgd2hlbiB0aGVcbiAgICAgICAgLy8gYG1lc3NhZ2VgIGlzIGZvcm1hdHRlZC4gVGhpcyBhbGxvd3MgdGhlIGZvcm1hdHRlZCBtZXNzYWdlIHRvIHRoZW4gYmVcbiAgICAgICAgLy8gYnJva2VuLXVwIGludG8gcGFydHMgd2l0aCByZWZlcmVuY2VzIHRvIHRoZSBSZWFjdCBFbGVtZW50cyBpbnNlcnRlZFxuICAgICAgICAvLyBiYWNrIGluLlxuICAgICAgICB2YXIgdmFsdWVzID0gT2JqZWN0LmtleXMocHJvcHMpLnJlZHVjZShmdW5jdGlvbiAodmFsdWVzLCBuYW1lKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBwcm9wc1tuYW1lXTtcbiAgICAgICAgICAgIHZhciB0b2tlbjtcblxuICAgICAgICAgICAgaWYgKHNyYyRyZWFjdCQkW1wiZGVmYXVsdFwiXS5pc1ZhbGlkRWxlbWVudCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICB0b2tlbiAgICAgICAgICAgPSBnZW5lcmF0ZVRva2VuKCk7XG4gICAgICAgICAgICAgICAgdmFsdWVzW25hbWVdICAgID0gdG9rZW47XG4gICAgICAgICAgICAgICAgZWxlbWVudHNbdG9rZW5dID0gdmFsdWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhbHVlc1tuYW1lXSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdmFsdWVzO1xuICAgICAgICB9LCB7fSk7XG5cbiAgICAgICAgLy8gRm9ybWF0cyB0aGUgYG1lc3NhZ2VgIHdpdGggdGhlIGB2YWx1ZXNgLCBpbmNsdWRpbmcgdGhlIGB0b2tlbmBcbiAgICAgICAgLy8gcGxhY2Vob2xkZXJzIGZvciBSZWFjdCBFbGVtZW50IHZhbHVlcy5cbiAgICAgICAgdmFyIGZvcm1hdHRlZE1lc3NhZ2UgPSB0aGlzLmZvcm1hdE1lc3NhZ2UobWVzc2FnZSwgdmFsdWVzKTtcblxuICAgICAgICAvLyBTcGxpdCB0aGUgbWVzc2FnZSBpbnRvIHBhcnRzIHNvIHRoZSBSZWFjdCBFbGVtZW50IHZhbHVlcyBjYXB0dXJlZFxuICAgICAgICAvLyBhYm92ZSBjYW4gYmUgaW5zZXJ0ZWQgYmFjayBpbnRvIHRoZSByZW5kZXJlZCBtZXNzYWdlLiBUaGlzXG4gICAgICAgIC8vIGFwcHJvYWNoIGFsbG93cyBtZXNzYWdlcyB0byByZW5kZXIgd2l0aCBSZWFjdCBFbGVtZW50cyB3aGlsZSBrZWVwaW5nXG4gICAgICAgIC8vIFJlYWN0J3MgdmlydHVhbCBkaWZmaW5nIHdvcmtpbmcgcHJvcGVybHkuXG4gICAgICAgIHZhciBjaGlsZHJlbiA9IGZvcm1hdHRlZE1lc3NhZ2Uuc3BsaXQodG9rZW5SZWdleClcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKHBhcnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZ25vcmUgZW1wdHkgc3RyaW5nIHBhcnRzLlxuICAgICAgICAgICAgICAgIHJldHVybiAhIXBhcnQ7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocGFydCkge1xuICAgICAgICAgICAgICAgIC8vIFdoZW4gdGhlIGBwYXJ0YCBpcyBhIHRva2VuLCBnZXQgYSByZWYgdG8gdGhlIFJlYWN0IEVsZW1lbnQuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRzW3BhcnRdIHx8IHBhcnQ7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB2YXIgZWxlbWVudEFyZ3MgPSBbdGFnTmFtZSwgbnVsbF0uY29uY2F0KGNoaWxkcmVuKTtcbiAgICAgICAgcmV0dXJuIHNyYyRyZWFjdCQkW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50LmFwcGx5KG51bGwsIGVsZW1lbnRBcmdzKTtcbiAgICB9XG59KTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBGb3JtYXR0ZWRNZXNzYWdlO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1tZXNzYWdlLmpzLm1hcCIsIi8qIGpzaGludCBlc25leHQ6dHJ1ZSAqL1xuXG4vLyBUT0RPOiBVc2UgYGltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtgIHdoZW4gZXh0ZXJuYWwgbW9kdWxlcyBhcmUgc3VwcG9ydGVkLlxuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgc3JjJHJlYWN0JCQgPSByZXF1aXJlKFwiLi4vcmVhY3RcIiksIHNyYyRtaXhpbiQkID0gcmVxdWlyZShcIi4uL21peGluXCIpO1xuXG52YXIgRm9ybWF0dGVkTnVtYmVyID0gc3JjJHJlYWN0JCRbXCJkZWZhdWx0XCJdLmNyZWF0ZUNsYXNzKHtcbiAgICBkaXNwbGF5TmFtZTogJ0Zvcm1hdHRlZE51bWJlcicsXG4gICAgbWl4aW5zICAgICA6IFtzcmMkbWl4aW4kJFtcImRlZmF1bHRcIl1dLFxuXG4gICAgc3RhdGljczoge1xuICAgICAgICBmb3JtYXRPcHRpb25zOiBbXG4gICAgICAgICAgICAnbG9jYWxlTWF0Y2hlcicsICdzdHlsZScsICdjdXJyZW5jeScsICdjdXJyZW5jeURpc3BsYXknLFxuICAgICAgICAgICAgJ3VzZUdyb3VwaW5nJywgJ21pbmltdW1JbnRlZ2VyRGlnaXRzJywgJ21pbmltdW1GcmFjdGlvbkRpZ2l0cycsXG4gICAgICAgICAgICAnbWF4aW11bUZyYWN0aW9uRGlnaXRzJywgJ21pbmltdW1TaWduaWZpY2FudERpZ2l0cycsXG4gICAgICAgICAgICAnbWF4aW11bVNpZ25pZmljYW50RGlnaXRzJ1xuICAgICAgICBdXG4gICAgfSxcblxuICAgIHByb3BUeXBlczoge1xuICAgICAgICBmb3JtYXQ6IHNyYyRyZWFjdCQkW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICB2YWx1ZSA6IHNyYyRyZWFjdCQkW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuYW55LmlzUmVxdWlyZWRcbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBwcm9wcyAgICA9IHRoaXMucHJvcHM7XG4gICAgICAgIHZhciB2YWx1ZSAgICA9IHByb3BzLnZhbHVlO1xuICAgICAgICB2YXIgZm9ybWF0ICAgPSBwcm9wcy5mb3JtYXQ7XG4gICAgICAgIHZhciBkZWZhdWx0cyA9IGZvcm1hdCAmJiB0aGlzLmdldE5hbWVkRm9ybWF0KCdudW1iZXInLCBmb3JtYXQpO1xuICAgICAgICB2YXIgb3B0aW9ucyAgPSBGb3JtYXR0ZWROdW1iZXIuZmlsdGVyRm9ybWF0T3B0aW9ucyhwcm9wcywgZGVmYXVsdHMpO1xuXG4gICAgICAgIHJldHVybiBzcmMkcmVhY3QkJFtcImRlZmF1bHRcIl0uRE9NLnNwYW4obnVsbCwgdGhpcy5mb3JtYXROdW1iZXIodmFsdWUsIG9wdGlvbnMpKTtcbiAgICB9XG59KTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBGb3JtYXR0ZWROdW1iZXI7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW51bWJlci5qcy5tYXAiLCIvKiBqc2hpbnQgZXNuZXh0OnRydWUgKi9cblxuLy8gVE9ETzogVXNlIGBpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7YCB3aGVuIGV4dGVybmFsIG1vZHVsZXMgYXJlIHN1cHBvcnRlZC5cblwidXNlIHN0cmljdFwiO1xudmFyIHNyYyRyZWFjdCQkID0gcmVxdWlyZShcIi4uL3JlYWN0XCIpLCBzcmMkbWl4aW4kJCA9IHJlcXVpcmUoXCIuLi9taXhpblwiKTtcblxudmFyIEZvcm1hdHRlZFJlbGF0aXZlID0gc3JjJHJlYWN0JCRbXCJkZWZhdWx0XCJdLmNyZWF0ZUNsYXNzKHtcbiAgICBkaXNwbGF5TmFtZTogJ0Zvcm1hdHRlZFJlbGF0aXZlJyxcbiAgICBtaXhpbnMgICAgIDogW3NyYyRtaXhpbiQkW1wiZGVmYXVsdFwiXV0sXG5cbiAgICBzdGF0aWNzOiB7XG4gICAgICAgIGZvcm1hdE9wdGlvbnM6IFtcbiAgICAgICAgICAgICdzdHlsZScsICd1bml0cydcbiAgICAgICAgXVxuICAgIH0sXG5cbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgZm9ybWF0OiBzcmMkcmVhY3QkJFtcImRlZmF1bHRcIl0uUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgdmFsdWUgOiBzcmMkcmVhY3QkJFtcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxuICAgICAgICBub3cgICA6IHNyYyRyZWFjdCQkW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuYW55XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcHJvcHMgICAgPSB0aGlzLnByb3BzO1xuICAgICAgICB2YXIgdmFsdWUgICAgPSBwcm9wcy52YWx1ZTtcbiAgICAgICAgdmFyIGZvcm1hdCAgID0gcHJvcHMuZm9ybWF0O1xuICAgICAgICB2YXIgZGVmYXVsdHMgPSBmb3JtYXQgJiYgdGhpcy5nZXROYW1lZEZvcm1hdCgncmVsYXRpdmUnLCBmb3JtYXQpO1xuICAgICAgICB2YXIgb3B0aW9ucyAgPSBGb3JtYXR0ZWRSZWxhdGl2ZS5maWx0ZXJGb3JtYXRPcHRpb25zKHByb3BzLCBkZWZhdWx0cyk7XG5cbiAgICAgICAgdmFyIGZvcm1hdHRlZFJlbGF0aXZlVGltZSA9IHRoaXMuZm9ybWF0UmVsYXRpdmUodmFsdWUsIG9wdGlvbnMsIHtcbiAgICAgICAgICAgIG5vdzogcHJvcHMubm93XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBzcmMkcmVhY3QkJFtcImRlZmF1bHRcIl0uRE9NLnNwYW4obnVsbCwgZm9ybWF0dGVkUmVsYXRpdmVUaW1lKTtcbiAgICB9XG59KTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBGb3JtYXR0ZWRSZWxhdGl2ZTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVsYXRpdmUuanMubWFwIiwiLyoganNoaW50IGVzbmV4dDp0cnVlICovXG5cbi8vIFRPRE86IFVzZSBgaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO2Agd2hlbiBleHRlcm5hbCBtb2R1bGVzIGFyZSBzdXBwb3J0ZWQuXG5cInVzZSBzdHJpY3RcIjtcbnZhciBzcmMkcmVhY3QkJCA9IHJlcXVpcmUoXCIuLi9yZWFjdFwiKSwgc3JjJG1peGluJCQgPSByZXF1aXJlKFwiLi4vbWl4aW5cIik7XG5cbnZhciBGb3JtYXR0ZWRUaW1lID0gc3JjJHJlYWN0JCRbXCJkZWZhdWx0XCJdLmNyZWF0ZUNsYXNzKHtcbiAgICBkaXNwbGF5TmFtZTogJ0Zvcm1hdHRlZFRpbWUnLFxuICAgIG1peGlucyAgICAgOiBbc3JjJG1peGluJCRbXCJkZWZhdWx0XCJdXSxcblxuICAgIHN0YXRpY3M6IHtcbiAgICAgICAgZm9ybWF0T3B0aW9uczogW1xuICAgICAgICAgICAgJ2xvY2FsZU1hdGNoZXInLCAndGltZVpvbmUnLCAnaG91cjEyJywgJ2Zvcm1hdE1hdGNoZXInLCAnd2Vla2RheScsXG4gICAgICAgICAgICAnZXJhJywgJ3llYXInLCAnbW9udGgnLCAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcsXG4gICAgICAgICAgICAndGltZVpvbmVOYW1lJ1xuICAgICAgICBdXG4gICAgfSxcblxuICAgIHByb3BUeXBlczoge1xuICAgICAgICBmb3JtYXQ6IHNyYyRyZWFjdCQkW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICB2YWx1ZSA6IHNyYyRyZWFjdCQkW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuYW55LmlzUmVxdWlyZWRcbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBwcm9wcyAgICA9IHRoaXMucHJvcHM7XG4gICAgICAgIHZhciB2YWx1ZSAgICA9IHByb3BzLnZhbHVlO1xuICAgICAgICB2YXIgZm9ybWF0ICAgPSBwcm9wcy5mb3JtYXQ7XG4gICAgICAgIHZhciBkZWZhdWx0cyA9IGZvcm1hdCAmJiB0aGlzLmdldE5hbWVkRm9ybWF0KCd0aW1lJywgZm9ybWF0KTtcbiAgICAgICAgdmFyIG9wdGlvbnMgID0gRm9ybWF0dGVkVGltZS5maWx0ZXJGb3JtYXRPcHRpb25zKHByb3BzLCBkZWZhdWx0cyk7XG5cbiAgICAgICAgcmV0dXJuIHNyYyRyZWFjdCQkW1wiZGVmYXVsdFwiXS5ET00uc3BhbihudWxsLCB0aGlzLmZvcm1hdFRpbWUodmFsdWUsIG9wdGlvbnMpKTtcbiAgICB9XG59KTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBGb3JtYXR0ZWRUaW1lO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD10aW1lLmpzLm1hcCIsIi8vIEdFTkVSQVRFRCBGSUxFXG5cInVzZSBzdHJpY3RcIjtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0ge1wibG9jYWxlXCI6XCJlblwiLFwicGx1cmFsUnVsZUZ1bmN0aW9uXCI6ZnVuY3Rpb24gKG4sb3JkKXt2YXIgcz1TdHJpbmcobikuc3BsaXQoXCIuXCIpLHYwPSFzWzFdLHQwPU51bWJlcihzWzBdKT09bixuMTA9dDAmJnNbMF0uc2xpY2UoLTEpLG4xMDA9dDAmJnNbMF0uc2xpY2UoLTIpO2lmKG9yZClyZXR1cm4gbjEwPT0xJiZuMTAwIT0xMT9cIm9uZVwiOm4xMD09MiYmbjEwMCE9MTI/XCJ0d29cIjpuMTA9PTMmJm4xMDAhPTEzP1wiZmV3XCI6XCJvdGhlclwiO3JldHVybiBuPT0xJiZ2MD9cIm9uZVwiOlwib3RoZXJcIn0sXCJmaWVsZHNcIjp7XCJ5ZWFyXCI6e1wiZGlzcGxheU5hbWVcIjpcIlllYXJcIixcInJlbGF0aXZlXCI6e1wiMFwiOlwidGhpcyB5ZWFyXCIsXCIxXCI6XCJuZXh0IHllYXJcIixcIi0xXCI6XCJsYXN0IHllYXJcIn0sXCJyZWxhdGl2ZVRpbWVcIjp7XCJmdXR1cmVcIjp7XCJvbmVcIjpcImluIHswfSB5ZWFyXCIsXCJvdGhlclwiOlwiaW4gezB9IHllYXJzXCJ9LFwicGFzdFwiOntcIm9uZVwiOlwiezB9IHllYXIgYWdvXCIsXCJvdGhlclwiOlwiezB9IHllYXJzIGFnb1wifX19LFwibW9udGhcIjp7XCJkaXNwbGF5TmFtZVwiOlwiTW9udGhcIixcInJlbGF0aXZlXCI6e1wiMFwiOlwidGhpcyBtb250aFwiLFwiMVwiOlwibmV4dCBtb250aFwiLFwiLTFcIjpcImxhc3QgbW9udGhcIn0sXCJyZWxhdGl2ZVRpbWVcIjp7XCJmdXR1cmVcIjp7XCJvbmVcIjpcImluIHswfSBtb250aFwiLFwib3RoZXJcIjpcImluIHswfSBtb250aHNcIn0sXCJwYXN0XCI6e1wib25lXCI6XCJ7MH0gbW9udGggYWdvXCIsXCJvdGhlclwiOlwiezB9IG1vbnRocyBhZ29cIn19fSxcImRheVwiOntcImRpc3BsYXlOYW1lXCI6XCJEYXlcIixcInJlbGF0aXZlXCI6e1wiMFwiOlwidG9kYXlcIixcIjFcIjpcInRvbW9ycm93XCIsXCItMVwiOlwieWVzdGVyZGF5XCJ9LFwicmVsYXRpdmVUaW1lXCI6e1wiZnV0dXJlXCI6e1wib25lXCI6XCJpbiB7MH0gZGF5XCIsXCJvdGhlclwiOlwiaW4gezB9IGRheXNcIn0sXCJwYXN0XCI6e1wib25lXCI6XCJ7MH0gZGF5IGFnb1wiLFwib3RoZXJcIjpcInswfSBkYXlzIGFnb1wifX19LFwiaG91clwiOntcImRpc3BsYXlOYW1lXCI6XCJIb3VyXCIsXCJyZWxhdGl2ZVRpbWVcIjp7XCJmdXR1cmVcIjp7XCJvbmVcIjpcImluIHswfSBob3VyXCIsXCJvdGhlclwiOlwiaW4gezB9IGhvdXJzXCJ9LFwicGFzdFwiOntcIm9uZVwiOlwiezB9IGhvdXIgYWdvXCIsXCJvdGhlclwiOlwiezB9IGhvdXJzIGFnb1wifX19LFwibWludXRlXCI6e1wiZGlzcGxheU5hbWVcIjpcIk1pbnV0ZVwiLFwicmVsYXRpdmVUaW1lXCI6e1wiZnV0dXJlXCI6e1wib25lXCI6XCJpbiB7MH0gbWludXRlXCIsXCJvdGhlclwiOlwiaW4gezB9IG1pbnV0ZXNcIn0sXCJwYXN0XCI6e1wib25lXCI6XCJ7MH0gbWludXRlIGFnb1wiLFwib3RoZXJcIjpcInswfSBtaW51dGVzIGFnb1wifX19LFwic2Vjb25kXCI6e1wiZGlzcGxheU5hbWVcIjpcIlNlY29uZFwiLFwicmVsYXRpdmVcIjp7XCIwXCI6XCJub3dcIn0sXCJyZWxhdGl2ZVRpbWVcIjp7XCJmdXR1cmVcIjp7XCJvbmVcIjpcImluIHswfSBzZWNvbmRcIixcIm90aGVyXCI6XCJpbiB7MH0gc2Vjb25kc1wifSxcInBhc3RcIjp7XCJvbmVcIjpcInswfSBzZWNvbmQgYWdvXCIsXCJvdGhlclwiOlwiezB9IHNlY29uZHMgYWdvXCJ9fX19fTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZW4uanMubWFwIiwiLyoganNoaW50IGVzbmV4dDp0cnVlICovXG5cbi8qXG5IVE1MIGVzY2FwaW5nIGltcGxlbWVudGF0aW9uIGlzIHRoZSBzYW1lIGFzIFJlYWN0J3MgKG9uIHB1cnBvc2UuKSBUaGVyZWZvcmUsIGl0XG5oYXMgdGhlIGZvbGxvd2luZyBDb3B5cmlnaHQgYW5kIExpY2Vuc2luZzpcblxuQ29weXJpZ2h0IDIwMTMtMjAxNCwgRmFjZWJvb2ssIEluYy5cbkFsbCByaWdodHMgcmVzZXJ2ZWQuXG5cblRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZSBMSUNFTlNFXG5maWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiBSZWFjdCdzIHNvdXJjZSB0cmVlLlxuKi9cblwidXNlIHN0cmljdFwiO1xudmFyIEVTQ0FQRURfQ0hBUlMgPSB7XG4gICAgJyYnIDogJyZhbXA7JyxcbiAgICAnPicgOiAnJmd0OycsXG4gICAgJzwnIDogJyZsdDsnLFxuICAgICdcIicgOiAnJnF1b3Q7JyxcbiAgICAnXFwnJzogJyYjeDI3Oydcbn07XG5cbnZhciBVTlNBRkVfQ0hBUlNfUkVHRVggPSAvWyY+PFwiJ10vZztcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgcmV0dXJuICgnJyArIHN0cikucmVwbGFjZShVTlNBRkVfQ0hBUlNfUkVHRVgsIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgICByZXR1cm4gRVNDQVBFRF9DSEFSU1ttYXRjaF07XG4gICAgfSk7XG59O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1lc2NhcGUuanMubWFwIiwiLyoganNoaW50IGVzbmV4dDp0cnVlICovXG5cbi8vIFRPRE86IFVzZSBgaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO2Agd2hlbiBleHRlcm5hbCBtb2R1bGVzIGFyZSBzdXBwb3J0ZWQuXG5cInVzZSBzdHJpY3RcIjtcbnZhciBzcmMkcmVhY3QkJCA9IHJlcXVpcmUoXCIuL3JlYWN0XCIpLCBpbnRsJG1lc3NhZ2Vmb3JtYXQkJCA9IHJlcXVpcmUoXCJpbnRsLW1lc3NhZ2Vmb3JtYXRcIiksIGludGwkcmVsYXRpdmVmb3JtYXQkJCA9IHJlcXVpcmUoXCJpbnRsLXJlbGF0aXZlZm9ybWF0XCIpLCBpbnRsJGZvcm1hdCRjYWNoZSQkID0gcmVxdWlyZShcImludGwtZm9ybWF0LWNhY2hlXCIpO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG52YXIgdHlwZXNTcGVjID0ge1xuICAgIGxvY2FsZXM6IHNyYyRyZWFjdCQkW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgc3JjJHJlYWN0JCRbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHNyYyRyZWFjdCQkW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuYXJyYXlcbiAgICBdKSxcblxuICAgIGZvcm1hdHMgOiBzcmMkcmVhY3QkJFtcImRlZmF1bHRcIl0uUHJvcFR5cGVzLm9iamVjdCxcbiAgICBtZXNzYWdlczogc3JjJHJlYWN0JCRbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5vYmplY3Rcbn07XG5cbmZ1bmN0aW9uIGFzc2VydElzRGF0ZShkYXRlLCBlcnJNc2cpIHtcbiAgICAvLyBEZXRlcm1pbmUgaWYgdGhlIGBkYXRlYCBpcyB2YWxpZCBieSBjaGVja2luZyBpZiBpdCBpcyBmaW5pdGUsIHdoaWNoIGlzXG4gICAgLy8gdGhlIHNhbWUgd2F5IHRoYXQgYEludGwuRGF0ZVRpbWVGb3JtYXQjZm9ybWF0KClgIGNoZWNrcy5cbiAgICBpZiAoIWlzRmluaXRlKGRhdGUpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoZXJyTXNnKTtcbiAgICB9XG59XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0ge1xuICAgIHN0YXRpY3M6IHtcbiAgICAgICAgZmlsdGVyRm9ybWF0T3B0aW9uczogZnVuY3Rpb24gKG9iaiwgZGVmYXVsdHMpIHtcbiAgICAgICAgICAgIGlmICghZGVmYXVsdHMpIHsgZGVmYXVsdHMgPSB7fTsgfVxuXG4gICAgICAgICAgICByZXR1cm4gKHRoaXMuZm9ybWF0T3B0aW9ucyB8fCBbXSkucmVkdWNlKGZ1bmN0aW9uIChvcHRzLCBuYW1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICBvcHRzW25hbWVdID0gb2JqW25hbWVdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGVmYXVsdHMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0c1tuYW1lXSA9IGRlZmF1bHRzW25hbWVdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRzO1xuICAgICAgICAgICAgfSwge30pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHByb3BUeXBlcyAgICAgICAgOiB0eXBlc1NwZWMsXG4gICAgY29udGV4dFR5cGVzICAgICA6IHR5cGVzU3BlYyxcbiAgICBjaGlsZENvbnRleHRUeXBlczogdHlwZXNTcGVjLFxuXG4gICAgZ2V0TnVtYmVyRm9ybWF0ICA6IGludGwkZm9ybWF0JGNhY2hlJCRbXCJkZWZhdWx0XCJdKEludGwuTnVtYmVyRm9ybWF0KSxcbiAgICBnZXREYXRlVGltZUZvcm1hdDogaW50bCRmb3JtYXQkY2FjaGUkJFtcImRlZmF1bHRcIl0oSW50bC5EYXRlVGltZUZvcm1hdCksXG4gICAgZ2V0TWVzc2FnZUZvcm1hdCA6IGludGwkZm9ybWF0JGNhY2hlJCRbXCJkZWZhdWx0XCJdKGludGwkbWVzc2FnZWZvcm1hdCQkW1wiZGVmYXVsdFwiXSksXG4gICAgZ2V0UmVsYXRpdmVGb3JtYXQ6IGludGwkZm9ybWF0JGNhY2hlJCRbXCJkZWZhdWx0XCJdKGludGwkcmVsYXRpdmVmb3JtYXQkJFtcImRlZmF1bHRcIl0pLFxuXG4gICAgZ2V0Q2hpbGRDb250ZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuICAgICAgICB2YXIgcHJvcHMgICA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxvY2FsZXM6ICBwcm9wcy5sb2NhbGVzICB8fCBjb250ZXh0LmxvY2FsZXMsXG4gICAgICAgICAgICBmb3JtYXRzOiAgcHJvcHMuZm9ybWF0cyAgfHwgY29udGV4dC5mb3JtYXRzLFxuICAgICAgICAgICAgbWVzc2FnZXM6IHByb3BzLm1lc3NhZ2VzIHx8IGNvbnRleHQubWVzc2FnZXNcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgZm9ybWF0RGF0ZTogZnVuY3Rpb24gKGRhdGUsIG9wdGlvbnMpIHtcbiAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICAgICAgICBhc3NlcnRJc0RhdGUoZGF0ZSwgJ0EgZGF0ZSBvciB0aW1lc3RhbXAgbXVzdCBiZSBwcm92aWRlZCB0byBmb3JtYXREYXRlKCknKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Zvcm1hdCgnZGF0ZScsIGRhdGUsIG9wdGlvbnMpO1xuICAgIH0sXG5cbiAgICBmb3JtYXRUaW1lOiBmdW5jdGlvbiAoZGF0ZSwgb3B0aW9ucykge1xuICAgICAgICBkYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgICAgIGFzc2VydElzRGF0ZShkYXRlLCAnQSBkYXRlIG9yIHRpbWVzdGFtcCBtdXN0IGJlIHByb3ZpZGVkIHRvIGZvcm1hdFRpbWUoKScpO1xuICAgICAgICByZXR1cm4gdGhpcy5fZm9ybWF0KCd0aW1lJywgZGF0ZSwgb3B0aW9ucyk7XG4gICAgfSxcblxuICAgIGZvcm1hdFJlbGF0aXZlOiBmdW5jdGlvbiAoZGF0ZSwgb3B0aW9ucywgZm9ybWF0T3B0aW9ucykge1xuICAgICAgICBkYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgICAgIGFzc2VydElzRGF0ZShkYXRlLCAnQSBkYXRlIG9yIHRpbWVzdGFtcCBtdXN0IGJlIHByb3ZpZGVkIHRvIGZvcm1hdFJlbGF0aXZlKCknKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Zvcm1hdCgncmVsYXRpdmUnLCBkYXRlLCBvcHRpb25zLCBmb3JtYXRPcHRpb25zKTtcbiAgICB9LFxuXG4gICAgZm9ybWF0TnVtYmVyOiBmdW5jdGlvbiAobnVtLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9mb3JtYXQoJ251bWJlcicsIG51bSwgb3B0aW9ucyk7XG4gICAgfSxcblxuICAgIGZvcm1hdE1lc3NhZ2U6IGZ1bmN0aW9uIChtZXNzYWdlLCB2YWx1ZXMpIHtcbiAgICAgICAgdmFyIGxvY2FsZXMgPSB0aGlzLnByb3BzLmxvY2FsZXMgfHwgdGhpcy5jb250ZXh0LmxvY2FsZXM7XG4gICAgICAgIHZhciBmb3JtYXRzID0gdGhpcy5wcm9wcy5mb3JtYXRzIHx8IHRoaXMuY29udGV4dC5mb3JtYXRzO1xuXG4gICAgICAgIC8vIFdoZW4gYG1lc3NhZ2VgIGlzIGEgZnVuY3Rpb24sIGFzc3VtZSBpdCdzIGFuIEludGxNZXNzYWdlRm9ybWF0XG4gICAgICAgIC8vIGluc3RhbmNlJ3MgYGZvcm1hdCgpYCBtZXRob2QgcGFzc2VkIGJ5IHJlZmVyZW5jZSwgYW5kIGNhbGwgaXQuIFRoaXNcbiAgICAgICAgLy8gaXMgcG9zc2libGUgYmVjYXVzZSBpdHMgYHRoaXNgIHdpbGwgYmUgcHJlLWJvdW5kIHRvIHRoZSBpbnN0YW5jZS5cbiAgICAgICAgaWYgKHR5cGVvZiBtZXNzYWdlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm4gbWVzc2FnZSh2YWx1ZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBtZXNzYWdlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgbWVzc2FnZSA9IHRoaXMuZ2V0TWVzc2FnZUZvcm1hdChtZXNzYWdlLCBsb2NhbGVzLCBmb3JtYXRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtZXNzYWdlLmZvcm1hdCh2YWx1ZXMpO1xuICAgIH0sXG5cbiAgICBnZXRJbnRsTWVzc2FnZTogZnVuY3Rpb24gKHBhdGgpIHtcbiAgICAgICAgdmFyIG1lc3NhZ2VzICA9IHRoaXMucHJvcHMubWVzc2FnZXMgfHwgdGhpcy5jb250ZXh0Lm1lc3NhZ2VzO1xuICAgICAgICB2YXIgcGF0aFBhcnRzID0gcGF0aC5zcGxpdCgnLicpO1xuXG4gICAgICAgIHZhciBtZXNzYWdlO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBtZXNzYWdlID0gcGF0aFBhcnRzLnJlZHVjZShmdW5jdGlvbiAob2JqLCBwYXRoUGFydCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmpbcGF0aFBhcnRdO1xuICAgICAgICAgICAgfSwgbWVzc2FnZXMpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKG1lc3NhZ2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcignQ291bGQgbm90IGZpbmQgSW50bCBtZXNzYWdlOiAnICsgcGF0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICB9LFxuXG4gICAgZ2V0TmFtZWRGb3JtYXQ6IGZ1bmN0aW9uICh0eXBlLCBuYW1lKSB7XG4gICAgICAgIHZhciBmb3JtYXRzID0gdGhpcy5wcm9wcy5mb3JtYXRzIHx8IHRoaXMuY29udGV4dC5mb3JtYXRzO1xuICAgICAgICB2YXIgZm9ybWF0ICA9IG51bGw7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvcm1hdCA9IGZvcm1hdHNbdHlwZV1bbmFtZV07XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBpZiAoIWZvcm1hdCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgJ05vICcgKyB0eXBlICsgJyBmb3JtYXQgbmFtZWQ6ICcgKyBuYW1lXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmb3JtYXQ7XG4gICAgfSxcblxuICAgIF9mb3JtYXQ6IGZ1bmN0aW9uICh0eXBlLCB2YWx1ZSwgb3B0aW9ucywgZm9ybWF0T3B0aW9ucykge1xuICAgICAgICB2YXIgbG9jYWxlcyA9IHRoaXMucHJvcHMubG9jYWxlcyB8fCB0aGlzLmNvbnRleHQubG9jYWxlcztcblxuICAgICAgICBpZiAob3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB0aGlzLmdldE5hbWVkRm9ybWF0KHR5cGUsIG9wdGlvbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgICAgICAgY2FzZSAndGltZSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGF0ZVRpbWVGb3JtYXQobG9jYWxlcywgb3B0aW9ucykuZm9ybWF0KHZhbHVlKTtcbiAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyRm9ybWF0KGxvY2FsZXMsIG9wdGlvbnMpLmZvcm1hdCh2YWx1ZSk7XG4gICAgICAgICAgICBjYXNlICdyZWxhdGl2ZSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UmVsYXRpdmVGb3JtYXQobG9jYWxlcywgb3B0aW9ucykuZm9ybWF0KHZhbHVlLCBmb3JtYXRPcHRpb25zKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbnJlY29nbml6ZWQgZm9ybWF0IHR5cGU6ICcgKyB0eXBlKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1peGluLmpzLm1hcCIsIi8qIGpzaGludCBlc25leHQ6IHRydWUgKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLl9fYWRkTG9jYWxlRGF0YSA9IF9fYWRkTG9jYWxlRGF0YTtcbnZhciBpbnRsJG1lc3NhZ2Vmb3JtYXQkJCA9IHJlcXVpcmUoXCJpbnRsLW1lc3NhZ2Vmb3JtYXRcIiksIGludGwkcmVsYXRpdmVmb3JtYXQkJCA9IHJlcXVpcmUoXCJpbnRsLXJlbGF0aXZlZm9ybWF0XCIpLCBzcmMkZW4kJCA9IHJlcXVpcmUoXCIuL2VuXCIpLCBzcmMkbWl4aW4kJCA9IHJlcXVpcmUoXCIuL21peGluXCIpLCBzcmMkY29tcG9uZW50cyRkYXRlJCQgPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL2RhdGVcIiksIHNyYyRjb21wb25lbnRzJHRpbWUkJCA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvdGltZVwiKSwgc3JjJGNvbXBvbmVudHMkcmVsYXRpdmUkJCA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvcmVsYXRpdmVcIiksIHNyYyRjb21wb25lbnRzJG51bWJlciQkID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9udW1iZXJcIiksIHNyYyRjb21wb25lbnRzJG1lc3NhZ2UkJCA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvbWVzc2FnZVwiKSwgc3JjJGNvbXBvbmVudHMkaHRtbCRtZXNzYWdlJCQgPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL2h0bWwtbWVzc2FnZVwiKTtcbmZ1bmN0aW9uIF9fYWRkTG9jYWxlRGF0YShkYXRhKSB7XG4gICAgaW50bCRtZXNzYWdlZm9ybWF0JCRbXCJkZWZhdWx0XCJdLl9fYWRkTG9jYWxlRGF0YShkYXRhKTtcbiAgICBpbnRsJHJlbGF0aXZlZm9ybWF0JCRbXCJkZWZhdWx0XCJdLl9fYWRkTG9jYWxlRGF0YShkYXRhKTtcbn1cblxuX19hZGRMb2NhbGVEYXRhKHNyYyRlbiQkW1wiZGVmYXVsdFwiXSk7XG5leHBvcnRzLkludGxNaXhpbiA9IHNyYyRtaXhpbiQkW1wiZGVmYXVsdFwiXSwgZXhwb3J0cy5Gb3JtYXR0ZWREYXRlID0gc3JjJGNvbXBvbmVudHMkZGF0ZSQkW1wiZGVmYXVsdFwiXSwgZXhwb3J0cy5Gb3JtYXR0ZWRUaW1lID0gc3JjJGNvbXBvbmVudHMkdGltZSQkW1wiZGVmYXVsdFwiXSwgZXhwb3J0cy5Gb3JtYXR0ZWRSZWxhdGl2ZSA9IHNyYyRjb21wb25lbnRzJHJlbGF0aXZlJCRbXCJkZWZhdWx0XCJdLCBleHBvcnRzLkZvcm1hdHRlZE51bWJlciA9IHNyYyRjb21wb25lbnRzJG51bWJlciQkW1wiZGVmYXVsdFwiXSwgZXhwb3J0cy5Gb3JtYXR0ZWRNZXNzYWdlID0gc3JjJGNvbXBvbmVudHMkbWVzc2FnZSQkW1wiZGVmYXVsdFwiXSwgZXhwb3J0cy5Gb3JtYXR0ZWRIVE1MTWVzc2FnZSA9IHNyYyRjb21wb25lbnRzJGh0bWwkbWVzc2FnZSQkW1wiZGVmYXVsdFwiXTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVhY3QtaW50bC5qcy5tYXAiLCIvKiBnbG9iYWwgUmVhY3QgKi9cbi8qIGpzaGludCBlc25leHQ6dHJ1ZSAqL1xuXG4vLyBUT0RPOiBSZW1vdmUgdGhlIGdsb2JhbCBgUmVhY3RgIGJpbmRpbmcgbG9va3VwIG9uY2UgdGhlIEVTNiBNb2R1bGUgVHJhbnNwaWxlclxuLy8gc3VwcG9ydHMgZXh0ZXJuYWwgbW9kdWxlcy4gVGhpcyBpcyBhIGhhY2sgZm9yIG5vdyB0aGF0IHByb3ZpZGVzIHRoZSBsb2NhbFxuLy8gbW9kdWxlcyBhIHJlZmVyZWNlIHRvIFJlYWN0LlxuXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFJlYWN0O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZWFjdC5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL21lbW9pemVyJylbJ2RlZmF1bHQnXTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLy8gUHVycG9zZWx5IHVzaW5nIHRoZSBzYW1lIGltcGxlbWVudGF0aW9uIGFzIHRoZSBJbnRsLmpzIGBJbnRsYCBwb2x5ZmlsbC5cbi8vIENvcHlyaWdodCAyMDEzIEFuZHkgRWFybnNoYXcsIE1JVCBMaWNlbnNlXG5cbnZhciBob3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG52YXIgcmVhbERlZmluZVByb3AgPSAoZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7IHJldHVybiAhIU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7fSk7IH1cbiAgICBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH1cbn0pKCk7XG5cbnZhciBlczMgPSAhcmVhbERlZmluZVByb3AgJiYgIU9iamVjdC5wcm90b3R5cGUuX19kZWZpbmVHZXR0ZXJfXztcblxudmFyIGRlZmluZVByb3BlcnR5ID0gcmVhbERlZmluZVByb3AgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOlxuICAgICAgICBmdW5jdGlvbiAob2JqLCBuYW1lLCBkZXNjKSB7XG5cbiAgICBpZiAoJ2dldCcgaW4gZGVzYyAmJiBvYmouX19kZWZpbmVHZXR0ZXJfXykge1xuICAgICAgICBvYmouX19kZWZpbmVHZXR0ZXJfXyhuYW1lLCBkZXNjLmdldCk7XG4gICAgfSBlbHNlIGlmICghaG9wLmNhbGwob2JqLCBuYW1lKSB8fCAndmFsdWUnIGluIGRlc2MpIHtcbiAgICAgICAgb2JqW25hbWVdID0gZGVzYy52YWx1ZTtcbiAgICB9XG59O1xuXG52YXIgb2JqQ3JlYXRlID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiAocHJvdG8sIHByb3BzKSB7XG4gICAgdmFyIG9iaiwgaztcblxuICAgIGZ1bmN0aW9uIEYoKSB7fVxuICAgIEYucHJvdG90eXBlID0gcHJvdG87XG4gICAgb2JqID0gbmV3IEYoKTtcblxuICAgIGZvciAoayBpbiBwcm9wcykge1xuICAgICAgICBpZiAoaG9wLmNhbGwocHJvcHMsIGspKSB7XG4gICAgICAgICAgICBkZWZpbmVQcm9wZXJ0eShvYmosIGssIHByb3BzW2tdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG59O1xuZXhwb3J0cy5kZWZpbmVQcm9wZXJ0eSA9IGRlZmluZVByb3BlcnR5LCBleHBvcnRzLm9iakNyZWF0ZSA9IG9iakNyZWF0ZTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXM1LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIHNyYyRlczUkJCA9IHJlcXVpcmUoXCIuL2VzNVwiKTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gY3JlYXRlRm9ybWF0Q2FjaGU7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIGNyZWF0ZUZvcm1hdENhY2hlKEZvcm1hdENvbnN0cnVjdG9yKSB7XG4gICAgdmFyIGNhY2hlID0gc3JjJGVzNSQkLm9iakNyZWF0ZShudWxsKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzICAgID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgICAgdmFyIGNhY2hlSWQgPSBnZXRDYWNoZUlkKGFyZ3MpO1xuICAgICAgICB2YXIgZm9ybWF0ICA9IGNhY2hlSWQgJiYgY2FjaGVbY2FjaGVJZF07XG5cbiAgICAgICAgaWYgKCFmb3JtYXQpIHtcbiAgICAgICAgICAgIGZvcm1hdCA9IHNyYyRlczUkJC5vYmpDcmVhdGUoRm9ybWF0Q29uc3RydWN0b3IucHJvdG90eXBlKTtcbiAgICAgICAgICAgIEZvcm1hdENvbnN0cnVjdG9yLmFwcGx5KGZvcm1hdCwgYXJncyk7XG5cbiAgICAgICAgICAgIGlmIChjYWNoZUlkKSB7XG4gICAgICAgICAgICAgICAgY2FjaGVbY2FjaGVJZF0gPSBmb3JtYXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZm9ybWF0O1xuICAgIH07XG59XG5cbi8vIC0tIFV0aWxpdGllcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIGdldENhY2hlSWQoaW5wdXRzKSB7XG4gICAgLy8gV2hlbiBKU09OIGlzIG5vdCBhdmFpbGFibGUgaW4gdGhlIHJ1bnRpbWUsIHdlIHdpbGwgbm90IGNyZWF0ZSBhIGNhY2hlIGlkLlxuICAgIGlmICh0eXBlb2YgSlNPTiA9PT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuOyB9XG5cbiAgICB2YXIgY2FjaGVJZCA9IFtdO1xuXG4gICAgdmFyIGksIGxlbiwgaW5wdXQ7XG5cbiAgICBmb3IgKGkgPSAwLCBsZW4gPSBpbnB1dHMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgaW5wdXQgPSBpbnB1dHNbaV07XG5cbiAgICAgICAgaWYgKGlucHV0ICYmIHR5cGVvZiBpbnB1dCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGNhY2hlSWQucHVzaChvcmRlcmVkUHJvcHMoaW5wdXQpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlSWQucHVzaChpbnB1dCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoY2FjaGVJZCk7XG59XG5cbmZ1bmN0aW9uIG9yZGVyZWRQcm9wcyhvYmopIHtcbiAgICB2YXIgcHJvcHMgPSBbXSxcbiAgICAgICAga2V5cyAgPSBbXTtcblxuICAgIHZhciBrZXksIGksIGxlbiwgcHJvcDtcblxuICAgIGZvciAoa2V5IGluIG9iaikge1xuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIG9yZGVyZWRLZXlzID0ga2V5cy5zb3J0KCk7XG5cbiAgICBmb3IgKGkgPSAwLCBsZW4gPSBvcmRlcmVkS2V5cy5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgICBrZXkgID0gb3JkZXJlZEtleXNbaV07XG4gICAgICAgIHByb3AgPSB7fTtcblxuICAgICAgICBwcm9wW2tleV0gPSBvYmpba2V5XTtcbiAgICAgICAgcHJvcHNbaV0gID0gcHJvcDtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcHM7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1lbW9pemVyLmpzLm1hcCIsIi8qIGpzaGludCBub2RlOnRydWUgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgSW50bE1lc3NhZ2VGb3JtYXQgPSByZXF1aXJlKCcuL2xpYi9tYWluJylbJ2RlZmF1bHQnXTtcblxuLy8gQWRkIGFsbCBsb2NhbGUgZGF0YSB0byBgSW50bE1lc3NhZ2VGb3JtYXRgLiBUaGlzIG1vZHVsZSB3aWxsIGJlIGlnbm9yZWQgd2hlblxuLy8gYnVuZGxpbmcgZm9yIHRoZSBicm93c2VyIHdpdGggQnJvd3NlcmlmeS9XZWJwYWNrLlxucmVxdWlyZSgnLi9saWIvbG9jYWxlcycpO1xuXG4vLyBSZS1leHBvcnQgYEludGxNZXNzYWdlRm9ybWF0YCBhcyB0aGUgQ29tbW9uSlMgZGVmYXVsdCBleHBvcnRzIHdpdGggYWxsIHRoZVxuLy8gbG9jYWxlIGRhdGEgcmVnaXN0ZXJlZCwgYW5kIHdpdGggRW5nbGlzaCBzZXQgYXMgdGhlIGRlZmF1bHQgbG9jYWxlLiBEZWZpbmVcbi8vIHRoZSBgZGVmYXVsdGAgcHJvcCBmb3IgdXNlIHdpdGggb3RoZXIgY29tcGlsZWQgRVM2IE1vZHVsZXMuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBJbnRsTWVzc2FnZUZvcm1hdDtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGV4cG9ydHM7XG4iLCIvKlxuQ29weXJpZ2h0IChjKSAyMDE0LCBZYWhvbyEgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuQ29weXJpZ2h0cyBsaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBMaWNlbnNlLlxuU2VlIHRoZSBhY2NvbXBhbnlpbmcgTElDRU5TRSBmaWxlIGZvciB0ZXJtcy5cbiovXG5cbi8qIGpzbGludCBlc25leHQ6IHRydWUgKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IENvbXBpbGVyO1xuXG5mdW5jdGlvbiBDb21waWxlcihsb2NhbGVzLCBmb3JtYXRzLCBwbHVyYWxGbikge1xuICAgIHRoaXMubG9jYWxlcyAgPSBsb2NhbGVzO1xuICAgIHRoaXMuZm9ybWF0cyAgPSBmb3JtYXRzO1xuICAgIHRoaXMucGx1cmFsRm4gPSBwbHVyYWxGbjtcbn1cblxuQ29tcGlsZXIucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbiAoYXN0KSB7XG4gICAgdGhpcy5wbHVyYWxTdGFjayAgICAgICAgPSBbXTtcbiAgICB0aGlzLmN1cnJlbnRQbHVyYWwgICAgICA9IG51bGw7XG4gICAgdGhpcy5wbHVyYWxOdW1iZXJGb3JtYXQgPSBudWxsO1xuXG4gICAgcmV0dXJuIHRoaXMuY29tcGlsZU1lc3NhZ2UoYXN0KTtcbn07XG5cbkNvbXBpbGVyLnByb3RvdHlwZS5jb21waWxlTWVzc2FnZSA9IGZ1bmN0aW9uIChhc3QpIHtcbiAgICBpZiAoIShhc3QgJiYgYXN0LnR5cGUgPT09ICdtZXNzYWdlRm9ybWF0UGF0dGVybicpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWVzc2FnZSBBU1QgaXMgbm90IG9mIHR5cGU6IFwibWVzc2FnZUZvcm1hdFBhdHRlcm5cIicpO1xuICAgIH1cblxuICAgIHZhciBlbGVtZW50cyA9IGFzdC5lbGVtZW50cyxcbiAgICAgICAgcGF0dGVybiAgPSBbXTtcblxuICAgIHZhciBpLCBsZW4sIGVsZW1lbnQ7XG5cbiAgICBmb3IgKGkgPSAwLCBsZW4gPSBlbGVtZW50cy5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgICBlbGVtZW50ID0gZWxlbWVudHNbaV07XG5cbiAgICAgICAgc3dpdGNoIChlbGVtZW50LnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ21lc3NhZ2VUZXh0RWxlbWVudCc6XG4gICAgICAgICAgICAgICAgcGF0dGVybi5wdXNoKHRoaXMuY29tcGlsZU1lc3NhZ2VUZXh0KGVsZW1lbnQpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnYXJndW1lbnRFbGVtZW50JzpcbiAgICAgICAgICAgICAgICBwYXR0ZXJuLnB1c2godGhpcy5jb21waWxlQXJndW1lbnQoZWxlbWVudCkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWVzc2FnZSBlbGVtZW50IGRvZXMgbm90IGhhdmUgYSB2YWxpZCB0eXBlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGF0dGVybjtcbn07XG5cbkNvbXBpbGVyLnByb3RvdHlwZS5jb21waWxlTWVzc2FnZVRleHQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIC8vIFdoZW4gdGhpcyBgZWxlbWVudGAgaXMgcGFydCBvZiBwbHVyYWwgc3ViLXBhdHRlcm4gYW5kIGl0cyB2YWx1ZSBjb250YWluc1xuICAgIC8vIGFuIHVuZXNjYXBlZCAnIycsIHVzZSBhIGBQbHVyYWxPZmZzZXRTdHJpbmdgIGhlbHBlciB0byBwcm9wZXJseSBvdXRwdXRcbiAgICAvLyB0aGUgbnVtYmVyIHdpdGggdGhlIGNvcnJlY3Qgb2Zmc2V0IGluIHRoZSBzdHJpbmcuXG4gICAgaWYgKHRoaXMuY3VycmVudFBsdXJhbCAmJiAvKF58W15cXFxcXSkjL2cudGVzdChlbGVtZW50LnZhbHVlKSkge1xuICAgICAgICAvLyBDcmVhdGUgYSBjYWNoZSBhIE51bWJlckZvcm1hdCBpbnN0YW5jZSB0aGF0IGNhbiBiZSByZXVzZWQgZm9yIGFueVxuICAgICAgICAvLyBQbHVyYWxPZmZzZXRTdHJpbmcgaW5zdGFuY2UgaW4gdGhpcyBtZXNzYWdlLlxuICAgICAgICBpZiAoIXRoaXMucGx1cmFsTnVtYmVyRm9ybWF0KSB7XG4gICAgICAgICAgICB0aGlzLnBsdXJhbE51bWJlckZvcm1hdCA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCh0aGlzLmxvY2FsZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQbHVyYWxPZmZzZXRTdHJpbmcoXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGx1cmFsLmlkLFxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBsdXJhbC5mb3JtYXQub2Zmc2V0LFxuICAgICAgICAgICAgICAgIHRoaXMucGx1cmFsTnVtYmVyRm9ybWF0LFxuICAgICAgICAgICAgICAgIGVsZW1lbnQudmFsdWUpO1xuICAgIH1cblxuICAgIC8vIFVuZXNjYXBlIHRoZSBlc2NhcGVkICcjJ3MgaW4gdGhlIG1lc3NhZ2UgdGV4dC5cbiAgICByZXR1cm4gZWxlbWVudC52YWx1ZS5yZXBsYWNlKC9cXFxcIy9nLCAnIycpO1xufTtcblxuQ29tcGlsZXIucHJvdG90eXBlLmNvbXBpbGVBcmd1bWVudCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgdmFyIGZvcm1hdCA9IGVsZW1lbnQuZm9ybWF0O1xuXG4gICAgaWYgKCFmb3JtYXQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTdHJpbmdGb3JtYXQoZWxlbWVudC5pZCk7XG4gICAgfVxuXG4gICAgdmFyIGZvcm1hdHMgID0gdGhpcy5mb3JtYXRzLFxuICAgICAgICBsb2NhbGVzICA9IHRoaXMubG9jYWxlcyxcbiAgICAgICAgcGx1cmFsRm4gPSB0aGlzLnBsdXJhbEZuLFxuICAgICAgICBvcHRpb25zO1xuXG4gICAgc3dpdGNoIChmb3JtYXQudHlwZSkge1xuICAgICAgICBjYXNlICdudW1iZXJGb3JtYXQnOlxuICAgICAgICAgICAgb3B0aW9ucyA9IGZvcm1hdHMubnVtYmVyW2Zvcm1hdC5zdHlsZV07XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlkICAgIDogZWxlbWVudC5pZCxcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IG5ldyBJbnRsLk51bWJlckZvcm1hdChsb2NhbGVzLCBvcHRpb25zKS5mb3JtYXRcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgY2FzZSAnZGF0ZUZvcm1hdCc6XG4gICAgICAgICAgICBvcHRpb25zID0gZm9ybWF0cy5kYXRlW2Zvcm1hdC5zdHlsZV07XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlkICAgIDogZWxlbWVudC5pZCxcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvY2FsZXMsIG9wdGlvbnMpLmZvcm1hdFxuICAgICAgICAgICAgfTtcblxuICAgICAgICBjYXNlICd0aW1lRm9ybWF0JzpcbiAgICAgICAgICAgIG9wdGlvbnMgPSBmb3JtYXRzLnRpbWVbZm9ybWF0LnN0eWxlXTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaWQgICAgOiBlbGVtZW50LmlkLFxuICAgICAgICAgICAgICAgIGZvcm1hdDogbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobG9jYWxlcywgb3B0aW9ucykuZm9ybWF0XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIGNhc2UgJ3BsdXJhbEZvcm1hdCc6XG4gICAgICAgICAgICBvcHRpb25zID0gdGhpcy5jb21waWxlT3B0aW9ucyhlbGVtZW50KTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUGx1cmFsRm9ybWF0KFxuICAgICAgICAgICAgICAgIGVsZW1lbnQuaWQsIGZvcm1hdC5vcmRpbmFsLCBmb3JtYXQub2Zmc2V0LCBvcHRpb25zLCBwbHVyYWxGblxuICAgICAgICAgICAgKTtcblxuICAgICAgICBjYXNlICdzZWxlY3RGb3JtYXQnOlxuICAgICAgICAgICAgb3B0aW9ucyA9IHRoaXMuY29tcGlsZU9wdGlvbnMoZWxlbWVudCk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNlbGVjdEZvcm1hdChlbGVtZW50LmlkLCBvcHRpb25zKTtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNZXNzYWdlIGVsZW1lbnQgZG9lcyBub3QgaGF2ZSBhIHZhbGlkIGZvcm1hdCB0eXBlJyk7XG4gICAgfVxufTtcblxuQ29tcGlsZXIucHJvdG90eXBlLmNvbXBpbGVPcHRpb25zID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICB2YXIgZm9ybWF0ICAgICAgPSBlbGVtZW50LmZvcm1hdCxcbiAgICAgICAgb3B0aW9ucyAgICAgPSBmb3JtYXQub3B0aW9ucyxcbiAgICAgICAgb3B0aW9uc0hhc2ggPSB7fTtcblxuICAgIC8vIFNhdmUgdGhlIGN1cnJlbnQgcGx1cmFsIGVsZW1lbnQsIGlmIGFueSwgdGhlbiBzZXQgaXQgdG8gYSBuZXcgdmFsdWUgd2hlblxuICAgIC8vIGNvbXBpbGluZyB0aGUgb3B0aW9ucyBzdWItcGF0dGVybnMuIFRoaXMgY29uZm9ybXMgdGhlIHNwZWMncyBhbGdvcml0aG1cbiAgICAvLyBmb3IgaGFuZGxpbmcgYFwiI1wiYCBzeW50YXggaW4gbWVzc2FnZSB0ZXh0LlxuICAgIHRoaXMucGx1cmFsU3RhY2sucHVzaCh0aGlzLmN1cnJlbnRQbHVyYWwpO1xuICAgIHRoaXMuY3VycmVudFBsdXJhbCA9IGZvcm1hdC50eXBlID09PSAncGx1cmFsRm9ybWF0JyA/IGVsZW1lbnQgOiBudWxsO1xuXG4gICAgdmFyIGksIGxlbiwgb3B0aW9uO1xuXG4gICAgZm9yIChpID0gMCwgbGVuID0gb3B0aW9ucy5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgICBvcHRpb24gPSBvcHRpb25zW2ldO1xuXG4gICAgICAgIC8vIENvbXBpbGUgdGhlIHN1Yi1wYXR0ZXJuIGFuZCBzYXZlIGl0IHVuZGVyIHRoZSBvcHRpb25zJ3Mgc2VsZWN0b3IuXG4gICAgICAgIG9wdGlvbnNIYXNoW29wdGlvbi5zZWxlY3Rvcl0gPSB0aGlzLmNvbXBpbGVNZXNzYWdlKG9wdGlvbi52YWx1ZSk7XG4gICAgfVxuXG4gICAgLy8gUG9wIHRoZSBwbHVyYWwgc3RhY2sgdG8gcHV0IGJhY2sgdGhlIG9yaWdpbmFsIGN1cnJlbnQgcGx1cmFsIHZhbHVlLlxuICAgIHRoaXMuY3VycmVudFBsdXJhbCA9IHRoaXMucGx1cmFsU3RhY2sucG9wKCk7XG5cbiAgICByZXR1cm4gb3B0aW9uc0hhc2g7XG59O1xuXG4vLyAtLSBDb21waWxlciBIZWxwZXIgQ2xhc3NlcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBTdHJpbmdGb3JtYXQoaWQpIHtcbiAgICB0aGlzLmlkID0gaWQ7XG59XG5cblN0cmluZ0Zvcm1hdC5wcm90b3R5cGUuZm9ybWF0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyB2YWx1ZSA6IFN0cmluZyh2YWx1ZSk7XG59O1xuXG5mdW5jdGlvbiBQbHVyYWxGb3JtYXQoaWQsIHVzZU9yZGluYWwsIG9mZnNldCwgb3B0aW9ucywgcGx1cmFsRm4pIHtcbiAgICB0aGlzLmlkICAgICAgICAgPSBpZDtcbiAgICB0aGlzLnVzZU9yZGluYWwgPSB1c2VPcmRpbmFsO1xuICAgIHRoaXMub2Zmc2V0ICAgICA9IG9mZnNldDtcbiAgICB0aGlzLm9wdGlvbnMgICAgPSBvcHRpb25zO1xuICAgIHRoaXMucGx1cmFsRm4gICA9IHBsdXJhbEZuO1xufVxuXG5QbHVyYWxGb3JtYXQucHJvdG90eXBlLmdldE9wdGlvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXG4gICAgdmFyIG9wdGlvbiA9IG9wdGlvbnNbJz0nICsgdmFsdWVdIHx8XG4gICAgICAgICAgICBvcHRpb25zW3RoaXMucGx1cmFsRm4odmFsdWUgLSB0aGlzLm9mZnNldCwgdGhpcy51c2VPcmRpbmFsKV07XG5cbiAgICByZXR1cm4gb3B0aW9uIHx8IG9wdGlvbnMub3RoZXI7XG59O1xuXG5mdW5jdGlvbiBQbHVyYWxPZmZzZXRTdHJpbmcoaWQsIG9mZnNldCwgbnVtYmVyRm9ybWF0LCBzdHJpbmcpIHtcbiAgICB0aGlzLmlkICAgICAgICAgICA9IGlkO1xuICAgIHRoaXMub2Zmc2V0ICAgICAgID0gb2Zmc2V0O1xuICAgIHRoaXMubnVtYmVyRm9ybWF0ID0gbnVtYmVyRm9ybWF0O1xuICAgIHRoaXMuc3RyaW5nICAgICAgID0gc3RyaW5nO1xufVxuXG5QbHVyYWxPZmZzZXRTdHJpbmcucHJvdG90eXBlLmZvcm1hdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHZhciBudW1iZXIgPSB0aGlzLm51bWJlckZvcm1hdC5mb3JtYXQodmFsdWUgLSB0aGlzLm9mZnNldCk7XG5cbiAgICByZXR1cm4gdGhpcy5zdHJpbmdcbiAgICAgICAgICAgIC5yZXBsYWNlKC8oXnxbXlxcXFxdKSMvZywgJyQxJyArIG51bWJlcilcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcIy9nLCAnIycpO1xufTtcblxuZnVuY3Rpb24gU2VsZWN0Rm9ybWF0KGlkLCBvcHRpb25zKSB7XG4gICAgdGhpcy5pZCAgICAgID0gaWQ7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbn1cblxuU2VsZWN0Rm9ybWF0LnByb3RvdHlwZS5nZXRPcHRpb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICByZXR1cm4gb3B0aW9uc1t2YWx1ZV0gfHwgb3B0aW9ucy5vdGhlcjtcbn07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBpbGVyLmpzLm1hcCIsIi8qXG5Db3B5cmlnaHQgKGMpIDIwMTQsIFlhaG9vISBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5Db3B5cmlnaHRzIGxpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIExpY2Vuc2UuXG5TZWUgdGhlIGFjY29tcGFueWluZyBMSUNFTlNFIGZpbGUgZm9yIHRlcm1zLlxuKi9cblxuLyoganNsaW50IGVzbmV4dDogdHJ1ZSAqL1xuXG5cInVzZSBzdHJpY3RcIjtcbnZhciBzcmMkdXRpbHMkJCA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpLCBzcmMkZXM1JCQgPSByZXF1aXJlKFwiLi9lczVcIiksIHNyYyRjb21waWxlciQkID0gcmVxdWlyZShcIi4vY29tcGlsZXJcIiksIGludGwkbWVzc2FnZWZvcm1hdCRwYXJzZXIkJCA9IHJlcXVpcmUoXCJpbnRsLW1lc3NhZ2Vmb3JtYXQtcGFyc2VyXCIpO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBNZXNzYWdlRm9ybWF0O1xuXG4vLyAtLSBNZXNzYWdlRm9ybWF0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIE1lc3NhZ2VGb3JtYXQobWVzc2FnZSwgbG9jYWxlcywgZm9ybWF0cykge1xuICAgIC8vIFBhcnNlIHN0cmluZyBtZXNzYWdlcyBpbnRvIGFuIEFTVC5cbiAgICB2YXIgYXN0ID0gdHlwZW9mIG1lc3NhZ2UgPT09ICdzdHJpbmcnID9cbiAgICAgICAgICAgIE1lc3NhZ2VGb3JtYXQuX19wYXJzZShtZXNzYWdlKSA6IG1lc3NhZ2U7XG5cbiAgICBpZiAoIShhc3QgJiYgYXN0LnR5cGUgPT09ICdtZXNzYWdlRm9ybWF0UGF0dGVybicpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0EgbWVzc2FnZSBtdXN0IGJlIHByb3ZpZGVkIGFzIGEgU3RyaW5nIG9yIEFTVC4nKTtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGVzIGEgbmV3IG9iamVjdCB3aXRoIHRoZSBzcGVjaWZpZWQgYGZvcm1hdHNgIG1lcmdlZCB3aXRoIHRoZSBkZWZhdWx0XG4gICAgLy8gZm9ybWF0cy5cbiAgICBmb3JtYXRzID0gdGhpcy5fbWVyZ2VGb3JtYXRzKE1lc3NhZ2VGb3JtYXQuZm9ybWF0cywgZm9ybWF0cyk7XG5cbiAgICAvLyBEZWZpbmVkIGZpcnN0IGJlY2F1c2UgaXQncyB1c2VkIHRvIGJ1aWxkIHRoZSBmb3JtYXQgcGF0dGVybi5cbiAgICBzcmMkZXM1JCQuZGVmaW5lUHJvcGVydHkodGhpcywgJ19sb2NhbGUnLCAge3ZhbHVlOiB0aGlzLl9yZXNvbHZlTG9jYWxlKGxvY2FsZXMpfSk7XG5cbiAgICAvLyBDb21waWxlIHRoZSBgYXN0YCB0byBhIHBhdHRlcm4gdGhhdCBpcyBoaWdobHkgb3B0aW1pemVkIGZvciByZXBlYXRlZFxuICAgIC8vIGBmb3JtYXQoKWAgaW52b2NhdGlvbnMuICoqTm90ZToqKiBUaGlzIHBhc3NlcyB0aGUgYGxvY2FsZXNgIHNldCBwcm92aWRlZFxuICAgIC8vIHRvIHRoZSBjb25zdHJ1Y3RvciBpbnN0ZWFkIG9mIGp1c3QgdGhlIHJlc29sdmVkIGxvY2FsZS5cbiAgICB2YXIgcGx1cmFsRm4gPSB0aGlzLl9maW5kUGx1cmFsUnVsZUZ1bmN0aW9uKHRoaXMuX2xvY2FsZSk7XG4gICAgdmFyIHBhdHRlcm4gID0gdGhpcy5fY29tcGlsZVBhdHRlcm4oYXN0LCBsb2NhbGVzLCBmb3JtYXRzLCBwbHVyYWxGbik7XG5cbiAgICAvLyBcIkJpbmRcIiBgZm9ybWF0KClgIG1ldGhvZCB0byBgdGhpc2Agc28gaXQgY2FuIGJlIHBhc3NlZCBieSByZWZlcmVuY2UgbGlrZVxuICAgIC8vIHRoZSBvdGhlciBgSW50bGAgQVBJcy5cbiAgICB2YXIgbWVzc2FnZUZvcm1hdCA9IHRoaXM7XG4gICAgdGhpcy5mb3JtYXQgPSBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgIHJldHVybiBtZXNzYWdlRm9ybWF0Ll9mb3JtYXQocGF0dGVybiwgdmFsdWVzKTtcbiAgICB9O1xufVxuXG4vLyBEZWZhdWx0IGZvcm1hdCBvcHRpb25zIHVzZWQgYXMgdGhlIHByb3RvdHlwZSBvZiB0aGUgYGZvcm1hdHNgIHByb3ZpZGVkIHRvIHRoZVxuLy8gY29uc3RydWN0b3IuIFRoZXNlIGFyZSB1c2VkIHdoZW4gY29uc3RydWN0aW5nIHRoZSBpbnRlcm5hbCBJbnRsLk51bWJlckZvcm1hdFxuLy8gYW5kIEludGwuRGF0ZVRpbWVGb3JtYXQgaW5zdGFuY2VzLlxuc3JjJGVzNSQkLmRlZmluZVByb3BlcnR5KE1lc3NhZ2VGb3JtYXQsICdmb3JtYXRzJywge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG5cbiAgICB2YWx1ZToge1xuICAgICAgICBudW1iZXI6IHtcbiAgICAgICAgICAgICdjdXJyZW5jeSc6IHtcbiAgICAgICAgICAgICAgICBzdHlsZTogJ2N1cnJlbmN5J1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgJ3BlcmNlbnQnOiB7XG4gICAgICAgICAgICAgICAgc3R5bGU6ICdwZXJjZW50J1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGRhdGU6IHtcbiAgICAgICAgICAgICdzaG9ydCc6IHtcbiAgICAgICAgICAgICAgICBtb250aDogJ251bWVyaWMnLFxuICAgICAgICAgICAgICAgIGRheSAgOiAnbnVtZXJpYycsXG4gICAgICAgICAgICAgICAgeWVhciA6ICcyLWRpZ2l0J1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgJ21lZGl1bSc6IHtcbiAgICAgICAgICAgICAgICBtb250aDogJ3Nob3J0JyxcbiAgICAgICAgICAgICAgICBkYXkgIDogJ251bWVyaWMnLFxuICAgICAgICAgICAgICAgIHllYXIgOiAnbnVtZXJpYydcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICdsb25nJzoge1xuICAgICAgICAgICAgICAgIG1vbnRoOiAnbG9uZycsXG4gICAgICAgICAgICAgICAgZGF5ICA6ICdudW1lcmljJyxcbiAgICAgICAgICAgICAgICB5ZWFyIDogJ251bWVyaWMnXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAnZnVsbCc6IHtcbiAgICAgICAgICAgICAgICB3ZWVrZGF5OiAnbG9uZycsXG4gICAgICAgICAgICAgICAgbW9udGggIDogJ2xvbmcnLFxuICAgICAgICAgICAgICAgIGRheSAgICA6ICdudW1lcmljJyxcbiAgICAgICAgICAgICAgICB5ZWFyICAgOiAnbnVtZXJpYydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICB0aW1lOiB7XG4gICAgICAgICAgICAnc2hvcnQnOiB7XG4gICAgICAgICAgICAgICAgaG91ciAgOiAnbnVtZXJpYycsXG4gICAgICAgICAgICAgICAgbWludXRlOiAnbnVtZXJpYydcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICdtZWRpdW0nOiAge1xuICAgICAgICAgICAgICAgIGhvdXIgIDogJ251bWVyaWMnLFxuICAgICAgICAgICAgICAgIG1pbnV0ZTogJ251bWVyaWMnLFxuICAgICAgICAgICAgICAgIHNlY29uZDogJ251bWVyaWMnXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAnbG9uZyc6IHtcbiAgICAgICAgICAgICAgICBob3VyICAgICAgICA6ICdudW1lcmljJyxcbiAgICAgICAgICAgICAgICBtaW51dGUgICAgICA6ICdudW1lcmljJyxcbiAgICAgICAgICAgICAgICBzZWNvbmQgICAgICA6ICdudW1lcmljJyxcbiAgICAgICAgICAgICAgICB0aW1lWm9uZU5hbWU6ICdzaG9ydCdcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICdmdWxsJzoge1xuICAgICAgICAgICAgICAgIGhvdXIgICAgICAgIDogJ251bWVyaWMnLFxuICAgICAgICAgICAgICAgIG1pbnV0ZSAgICAgIDogJ251bWVyaWMnLFxuICAgICAgICAgICAgICAgIHNlY29uZCAgICAgIDogJ251bWVyaWMnLFxuICAgICAgICAgICAgICAgIHRpbWVab25lTmFtZTogJ3Nob3J0J1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSk7XG5cbi8vIERlZmluZSBpbnRlcm5hbCBwcml2YXRlIHByb3BlcnRpZXMgZm9yIGRlYWxpbmcgd2l0aCBsb2NhbGUgZGF0YS5cbnNyYyRlczUkJC5kZWZpbmVQcm9wZXJ0eShNZXNzYWdlRm9ybWF0LCAnX19sb2NhbGVEYXRhX18nLCB7dmFsdWU6IHNyYyRlczUkJC5vYmpDcmVhdGUobnVsbCl9KTtcbnNyYyRlczUkJC5kZWZpbmVQcm9wZXJ0eShNZXNzYWdlRm9ybWF0LCAnX19hZGRMb2NhbGVEYXRhJywge3ZhbHVlOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgIGlmICghKGRhdGEgJiYgZGF0YS5sb2NhbGUpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICdMb2NhbGUgZGF0YSBwcm92aWRlZCB0byBJbnRsTWVzc2FnZUZvcm1hdCBpcyBtaXNzaW5nIGEgJyArXG4gICAgICAgICAgICAnYGxvY2FsZWAgcHJvcGVydHknXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgTWVzc2FnZUZvcm1hdC5fX2xvY2FsZURhdGFfX1tkYXRhLmxvY2FsZS50b0xvd2VyQ2FzZSgpXSA9IGRhdGE7XG59fSk7XG5cbi8vIERlZmluZXMgYF9fcGFyc2UoKWAgc3RhdGljIG1ldGhvZCBhcyBhbiBleHBvc2VkIHByaXZhdGUuXG5zcmMkZXM1JCQuZGVmaW5lUHJvcGVydHkoTWVzc2FnZUZvcm1hdCwgJ19fcGFyc2UnLCB7dmFsdWU6IGludGwkbWVzc2FnZWZvcm1hdCRwYXJzZXIkJFtcImRlZmF1bHRcIl0ucGFyc2V9KTtcblxuLy8gRGVmaW5lIHB1YmxpYyBgZGVmYXVsdExvY2FsZWAgcHJvcGVydHkgd2hpY2ggZGVmYXVsdHMgdG8gRW5nbGlzaCwgYnV0IGNhbiBiZVxuLy8gc2V0IGJ5IHRoZSBkZXZlbG9wZXIuXG5zcmMkZXM1JCQuZGVmaW5lUHJvcGVydHkoTWVzc2FnZUZvcm1hdCwgJ2RlZmF1bHRMb2NhbGUnLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICB3cml0YWJsZSAgOiB0cnVlLFxuICAgIHZhbHVlICAgICA6IHVuZGVmaW5lZFxufSk7XG5cbk1lc3NhZ2VGb3JtYXQucHJvdG90eXBlLnJlc29sdmVkT3B0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBUT0RPOiBQcm92aWRlIGFueXRoaW5nIGVsc2U/XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbG9jYWxlOiB0aGlzLl9sb2NhbGVcbiAgICB9O1xufTtcblxuTWVzc2FnZUZvcm1hdC5wcm90b3R5cGUuX2NvbXBpbGVQYXR0ZXJuID0gZnVuY3Rpb24gKGFzdCwgbG9jYWxlcywgZm9ybWF0cywgcGx1cmFsRm4pIHtcbiAgICB2YXIgY29tcGlsZXIgPSBuZXcgc3JjJGNvbXBpbGVyJCRbXCJkZWZhdWx0XCJdKGxvY2FsZXMsIGZvcm1hdHMsIHBsdXJhbEZuKTtcbiAgICByZXR1cm4gY29tcGlsZXIuY29tcGlsZShhc3QpO1xufTtcblxuTWVzc2FnZUZvcm1hdC5wcm90b3R5cGUuX2ZpbmRQbHVyYWxSdWxlRnVuY3Rpb24gPSBmdW5jdGlvbiAobG9jYWxlKSB7XG4gICAgdmFyIGxvY2FsZURhdGEgPSBNZXNzYWdlRm9ybWF0Ll9fbG9jYWxlRGF0YV9fO1xuICAgIHZhciBkYXRhICAgICAgID0gbG9jYWxlRGF0YVtsb2NhbGUudG9Mb3dlckNhc2UoKV07XG5cbiAgICAvLyBUaGUgbG9jYWxlIGRhdGEgaXMgZGUtZHVwbGljYXRlZCwgc28gd2UgaGF2ZSB0byB0cmF2ZXJzZSB0aGUgbG9jYWxlJ3NcbiAgICAvLyBoaWVyYXJjaHkgdW50aWwgd2UgZmluZCBhIGBwbHVyYWxSdWxlRnVuY3Rpb25gIHRvIHJldHVybi5cbiAgICB3aGlsZSAoZGF0YSkge1xuICAgICAgICBpZiAoZGF0YS5wbHVyYWxSdWxlRnVuY3Rpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhLnBsdXJhbFJ1bGVGdW5jdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEgPSBkYXRhLnBhcmVudExvY2FsZSAmJiBsb2NhbGVEYXRhW2RhdGEucGFyZW50TG9jYWxlLnRvTG93ZXJDYXNlKCldO1xuICAgIH1cblxuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ0xvY2FsZSBkYXRhIGFkZGVkIHRvIEludGxNZXNzYWdlRm9ybWF0IGlzIG1pc3NpbmcgYSAnICtcbiAgICAgICAgJ2BwbHVyYWxSdWxlRnVuY3Rpb25gIGZvciA6JyArIGxvY2FsZVxuICAgICk7XG59O1xuXG5NZXNzYWdlRm9ybWF0LnByb3RvdHlwZS5fZm9ybWF0ID0gZnVuY3Rpb24gKHBhdHRlcm4sIHZhbHVlcykge1xuICAgIHZhciByZXN1bHQgPSAnJyxcbiAgICAgICAgaSwgbGVuLCBwYXJ0LCBpZCwgdmFsdWU7XG5cbiAgICBmb3IgKGkgPSAwLCBsZW4gPSBwYXR0ZXJuLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgIHBhcnQgPSBwYXR0ZXJuW2ldO1xuXG4gICAgICAgIC8vIEV4aXN0IGVhcmx5IGZvciBzdHJpbmcgcGFydHMuXG4gICAgICAgIGlmICh0eXBlb2YgcGFydCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBwYXJ0O1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZCA9IHBhcnQuaWQ7XG5cbiAgICAgICAgLy8gRW5mb3JjZSB0aGF0IGFsbCByZXF1aXJlZCB2YWx1ZXMgYXJlIHByb3ZpZGVkIGJ5IHRoZSBjYWxsZXIuXG4gICAgICAgIGlmICghKHZhbHVlcyAmJiBzcmMkdXRpbHMkJC5ob3AuY2FsbCh2YWx1ZXMsIGlkKSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQSB2YWx1ZSBtdXN0IGJlIHByb3ZpZGVkIGZvcjogJyArIGlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhbHVlID0gdmFsdWVzW2lkXTtcblxuICAgICAgICAvLyBSZWN1cnNpdmVseSBmb3JtYXQgcGx1cmFsIGFuZCBzZWxlY3QgcGFydHMnIG9wdGlvbiDigJQgd2hpY2ggY2FuIGJlIGFcbiAgICAgICAgLy8gbmVzdGVkIHBhdHRlcm4gc3RydWN0dXJlLiBUaGUgY2hvb3Npbmcgb2YgdGhlIG9wdGlvbiB0byB1c2UgaXNcbiAgICAgICAgLy8gYWJzdHJhY3RlZC1ieSBhbmQgZGVsZWdhdGVkLXRvIHRoZSBwYXJ0IGhlbHBlciBvYmplY3QuXG4gICAgICAgIGlmIChwYXJ0Lm9wdGlvbnMpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSB0aGlzLl9mb3JtYXQocGFydC5nZXRPcHRpb24odmFsdWUpLCB2YWx1ZXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHBhcnQuZm9ybWF0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5NZXNzYWdlRm9ybWF0LnByb3RvdHlwZS5fbWVyZ2VGb3JtYXRzID0gZnVuY3Rpb24gKGRlZmF1bHRzLCBmb3JtYXRzKSB7XG4gICAgdmFyIG1lcmdlZEZvcm1hdHMgPSB7fSxcbiAgICAgICAgdHlwZSwgbWVyZ2VkVHlwZTtcblxuICAgIGZvciAodHlwZSBpbiBkZWZhdWx0cykge1xuICAgICAgICBpZiAoIXNyYyR1dGlscyQkLmhvcC5jYWxsKGRlZmF1bHRzLCB0eXBlKSkgeyBjb250aW51ZTsgfVxuXG4gICAgICAgIG1lcmdlZEZvcm1hdHNbdHlwZV0gPSBtZXJnZWRUeXBlID0gc3JjJGVzNSQkLm9iakNyZWF0ZShkZWZhdWx0c1t0eXBlXSk7XG5cbiAgICAgICAgaWYgKGZvcm1hdHMgJiYgc3JjJHV0aWxzJCQuaG9wLmNhbGwoZm9ybWF0cywgdHlwZSkpIHtcbiAgICAgICAgICAgIHNyYyR1dGlscyQkLmV4dGVuZChtZXJnZWRUeXBlLCBmb3JtYXRzW3R5cGVdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXJnZWRGb3JtYXRzO1xufTtcblxuTWVzc2FnZUZvcm1hdC5wcm90b3R5cGUuX3Jlc29sdmVMb2NhbGUgPSBmdW5jdGlvbiAobG9jYWxlcykge1xuICAgIGlmICh0eXBlb2YgbG9jYWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgbG9jYWxlcyA9IFtsb2NhbGVzXTtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgYSBjb3B5IG9mIHRoZSBhcnJheSBzbyB3ZSBjYW4gcHVzaCBvbiB0aGUgZGVmYXVsdCBsb2NhbGUuXG4gICAgbG9jYWxlcyA9IChsb2NhbGVzIHx8IFtdKS5jb25jYXQoTWVzc2FnZUZvcm1hdC5kZWZhdWx0TG9jYWxlKTtcblxuICAgIHZhciBsb2NhbGVEYXRhID0gTWVzc2FnZUZvcm1hdC5fX2xvY2FsZURhdGFfXztcbiAgICB2YXIgaSwgbGVuLCBsb2NhbGVQYXJ0cywgZGF0YTtcblxuICAgIC8vIFVzaW5nIHRoZSBzZXQgb2YgbG9jYWxlcyArIHRoZSBkZWZhdWx0IGxvY2FsZSwgd2UgbG9vayBmb3IgdGhlIGZpcnN0IG9uZVxuICAgIC8vIHdoaWNoIHRoYXQgaGFzIGJlZW4gcmVnaXN0ZXJlZC4gV2hlbiBkYXRhIGRvZXMgbm90IGV4aXN0IGZvciBhIGxvY2FsZSwgd2VcbiAgICAvLyB0cmF2ZXJzZSBpdHMgYW5jZXN0b3JzIHRvIGZpbmQgc29tZXRoaW5nIHRoYXQncyBiZWVuIHJlZ2lzdGVyZWQgd2l0aGluXG4gICAgLy8gaXRzIGhpZXJhcmNoeSBvZiBsb2NhbGVzLiBTaW5jZSB3ZSBsYWNrIHRoZSBwcm9wZXIgYHBhcmVudExvY2FsZWAgZGF0YVxuICAgIC8vIGhlcmUsIHdlIG11c3QgdGFrZSBhIG5haXZlIGFwcHJvYWNoIHRvIHRyYXZlcnNhbC5cbiAgICBmb3IgKGkgPSAwLCBsZW4gPSBsb2NhbGVzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgIGxvY2FsZVBhcnRzID0gbG9jYWxlc1tpXS50b0xvd2VyQ2FzZSgpLnNwbGl0KCctJyk7XG5cbiAgICAgICAgd2hpbGUgKGxvY2FsZVBhcnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgZGF0YSA9IGxvY2FsZURhdGFbbG9jYWxlUGFydHMuam9pbignLScpXTtcbiAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgLy8gUmV0dXJuIHRoZSBub3JtYWxpemVkIGxvY2FsZSBzdHJpbmc7IGUuZy4sIHdlIHJldHVybiBcImVuLVVTXCIsXG4gICAgICAgICAgICAgICAgLy8gaW5zdGVhZCBvZiBcImVuLXVzXCIuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEubG9jYWxlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsb2NhbGVQYXJ0cy5wb3AoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBkZWZhdWx0TG9jYWxlID0gbG9jYWxlcy5wb3AoKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdObyBsb2NhbGUgZGF0YSBoYXMgYmVlbiBhZGRlZCB0byBJbnRsTWVzc2FnZUZvcm1hdCBmb3I6ICcgK1xuICAgICAgICBsb2NhbGVzLmpvaW4oJywgJykgKyAnLCBvciB0aGUgZGVmYXVsdCBsb2NhbGU6ICcgKyBkZWZhdWx0TG9jYWxlXG4gICAgKTtcbn07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvcmUuanMubWFwIiwiLy8gR0VORVJBVEVEIEZJTEVcblwidXNlIHN0cmljdFwiO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB7XCJsb2NhbGVcIjpcImVuXCIsXCJwbHVyYWxSdWxlRnVuY3Rpb25cIjpmdW5jdGlvbiAobixvcmQpe3ZhciBzPVN0cmluZyhuKS5zcGxpdChcIi5cIiksdjA9IXNbMV0sdDA9TnVtYmVyKHNbMF0pPT1uLG4xMD10MCYmc1swXS5zbGljZSgtMSksbjEwMD10MCYmc1swXS5zbGljZSgtMik7aWYob3JkKXJldHVybiBuMTA9PTEmJm4xMDAhPTExP1wib25lXCI6bjEwPT0yJiZuMTAwIT0xMj9cInR3b1wiOm4xMD09MyYmbjEwMCE9MTM/XCJmZXdcIjpcIm90aGVyXCI7cmV0dXJuIG49PTEmJnYwP1wib25lXCI6XCJvdGhlclwifX07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVuLmpzLm1hcCIsIi8qXG5Db3B5cmlnaHQgKGMpIDIwMTQsIFlhaG9vISBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5Db3B5cmlnaHRzIGxpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIExpY2Vuc2UuXG5TZWUgdGhlIGFjY29tcGFueWluZyBMSUNFTlNFIGZpbGUgZm9yIHRlcm1zLlxuKi9cblxuLyoganNsaW50IGVzbmV4dDogdHJ1ZSAqL1xuXG5cInVzZSBzdHJpY3RcIjtcbnZhciBzcmMkdXRpbHMkJCA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xuXG4vLyBQdXJwb3NlbHkgdXNpbmcgdGhlIHNhbWUgaW1wbGVtZW50YXRpb24gYXMgdGhlIEludGwuanMgYEludGxgIHBvbHlmaWxsLlxuLy8gQ29weXJpZ2h0IDIwMTMgQW5keSBFYXJuc2hhdywgTUlUIExpY2Vuc2VcblxudmFyIHJlYWxEZWZpbmVQcm9wID0gKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkgeyByZXR1cm4gISFPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywge30pOyB9XG4gICAgY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9XG59KSgpO1xuXG52YXIgZXMzID0gIXJlYWxEZWZpbmVQcm9wICYmICFPYmplY3QucHJvdG90eXBlLl9fZGVmaW5lR2V0dGVyX187XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlYWxEZWZpbmVQcm9wID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDpcbiAgICAgICAgZnVuY3Rpb24gKG9iaiwgbmFtZSwgZGVzYykge1xuXG4gICAgaWYgKCdnZXQnIGluIGRlc2MgJiYgb2JqLl9fZGVmaW5lR2V0dGVyX18pIHtcbiAgICAgICAgb2JqLl9fZGVmaW5lR2V0dGVyX18obmFtZSwgZGVzYy5nZXQpO1xuICAgIH0gZWxzZSBpZiAoIXNyYyR1dGlscyQkLmhvcC5jYWxsKG9iaiwgbmFtZSkgfHwgJ3ZhbHVlJyBpbiBkZXNjKSB7XG4gICAgICAgIG9ialtuYW1lXSA9IGRlc2MudmFsdWU7XG4gICAgfVxufTtcblxudmFyIG9iakNyZWF0ZSA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gKHByb3RvLCBwcm9wcykge1xuICAgIHZhciBvYmosIGs7XG5cbiAgICBmdW5jdGlvbiBGKCkge31cbiAgICBGLnByb3RvdHlwZSA9IHByb3RvO1xuICAgIG9iaiA9IG5ldyBGKCk7XG5cbiAgICBmb3IgKGsgaW4gcHJvcHMpIHtcbiAgICAgICAgaWYgKHNyYyR1dGlscyQkLmhvcC5jYWxsKHByb3BzLCBrKSkge1xuICAgICAgICAgICAgZGVmaW5lUHJvcGVydHkob2JqLCBrLCBwcm9wc1trXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xufTtcbmV4cG9ydHMuZGVmaW5lUHJvcGVydHkgPSBkZWZpbmVQcm9wZXJ0eSwgZXhwb3J0cy5vYmpDcmVhdGUgPSBvYmpDcmVhdGU7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVzNS5qcy5tYXAiLCIvKiBqc2xpbnQgZXNuZXh0OiB0cnVlICovXG5cblwidXNlIHN0cmljdFwiO1xudmFyIHNyYyRjb3JlJCQgPSByZXF1aXJlKFwiLi9jb3JlXCIpLCBzcmMkZW4kJCA9IHJlcXVpcmUoXCIuL2VuXCIpO1xuXG5zcmMkY29yZSQkW1wiZGVmYXVsdFwiXS5fX2FkZExvY2FsZURhdGEoc3JjJGVuJCRbXCJkZWZhdWx0XCJdKTtcbnNyYyRjb3JlJCRbXCJkZWZhdWx0XCJdLmRlZmF1bHRMb2NhbGUgPSAnZW4nO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHNyYyRjb3JlJCRbXCJkZWZhdWx0XCJdO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1tYWluLmpzLm1hcCIsIi8qXG5Db3B5cmlnaHQgKGMpIDIwMTQsIFlhaG9vISBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5Db3B5cmlnaHRzIGxpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIExpY2Vuc2UuXG5TZWUgdGhlIGFjY29tcGFueWluZyBMSUNFTlNFIGZpbGUgZm9yIHRlcm1zLlxuKi9cblxuLyoganNsaW50IGVzbmV4dDogdHJ1ZSAqL1xuXG5cInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuZXh0ZW5kID0gZXh0ZW5kO1xudmFyIGhvcCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbmZ1bmN0aW9uIGV4dGVuZChvYmopIHtcbiAgICB2YXIgc291cmNlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSksXG4gICAgICAgIGksIGxlbiwgc291cmNlLCBrZXk7XG5cbiAgICBmb3IgKGkgPSAwLCBsZW4gPSBzb3VyY2VzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgIHNvdXJjZSA9IHNvdXJjZXNbaV07XG4gICAgICAgIGlmICghc291cmNlKSB7IGNvbnRpbnVlOyB9XG5cbiAgICAgICAgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgICAgICAgICBpZiAoaG9wLmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgb2JqW2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG59XG5leHBvcnRzLmhvcCA9IGhvcDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRpbHMuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9wYXJzZXInKVsnZGVmYXVsdCddO1xuZXhwb3J0c1snZGVmYXVsdCddID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IChmdW5jdGlvbigpIHtcbiAgLypcbiAgICogR2VuZXJhdGVkIGJ5IFBFRy5qcyAwLjguMC5cbiAgICpcbiAgICogaHR0cDovL3BlZ2pzLm1hamRhLmN6L1xuICAgKi9cblxuICBmdW5jdGlvbiBwZWckc3ViY2xhc3MoY2hpbGQsIHBhcmVudCkge1xuICAgIGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfVxuICAgIGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTtcbiAgICBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpO1xuICB9XG5cbiAgZnVuY3Rpb24gU3ludGF4RXJyb3IobWVzc2FnZSwgZXhwZWN0ZWQsIGZvdW5kLCBvZmZzZXQsIGxpbmUsIGNvbHVtbikge1xuICAgIHRoaXMubWVzc2FnZSAgPSBtZXNzYWdlO1xuICAgIHRoaXMuZXhwZWN0ZWQgPSBleHBlY3RlZDtcbiAgICB0aGlzLmZvdW5kICAgID0gZm91bmQ7XG4gICAgdGhpcy5vZmZzZXQgICA9IG9mZnNldDtcbiAgICB0aGlzLmxpbmUgICAgID0gbGluZTtcbiAgICB0aGlzLmNvbHVtbiAgID0gY29sdW1uO1xuXG4gICAgdGhpcy5uYW1lICAgICA9IFwiU3ludGF4RXJyb3JcIjtcbiAgfVxuXG4gIHBlZyRzdWJjbGFzcyhTeW50YXhFcnJvciwgRXJyb3IpO1xuXG4gIGZ1bmN0aW9uIHBhcnNlKGlucHV0KSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHt9LFxuXG4gICAgICAgIHBlZyRGQUlMRUQgPSB7fSxcblxuICAgICAgICBwZWckc3RhcnRSdWxlRnVuY3Rpb25zID0geyBzdGFydDogcGVnJHBhcnNlc3RhcnQgfSxcbiAgICAgICAgcGVnJHN0YXJ0UnVsZUZ1bmN0aW9uICA9IHBlZyRwYXJzZXN0YXJ0LFxuXG4gICAgICAgIHBlZyRjMCA9IFtdLFxuICAgICAgICBwZWckYzEgPSBmdW5jdGlvbihlbGVtZW50cykge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgICAgOiAnbWVzc2FnZUZvcm1hdFBhdHRlcm4nLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50czogZWxlbWVudHNcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgcGVnJGMyID0gcGVnJEZBSUxFRCxcbiAgICAgICAgcGVnJGMzID0gZnVuY3Rpb24odGV4dCkge1xuICAgICAgICAgICAgICAgIHZhciBzdHJpbmcgPSAnJyxcbiAgICAgICAgICAgICAgICAgICAgaSwgaiwgb3V0ZXJMZW4sIGlubmVyLCBpbm5lckxlbjtcblxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDAsIG91dGVyTGVuID0gdGV4dC5sZW5ndGg7IGkgPCBvdXRlckxlbjsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGlubmVyID0gdGV4dFtpXTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSAwLCBpbm5lckxlbiA9IGlubmVyLmxlbmd0aDsgaiA8IGlubmVyTGVuOyBqICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZyArPSBpbm5lcltqXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgICAgICAgICB9LFxuICAgICAgICBwZWckYzQgPSBmdW5jdGlvbihtZXNzYWdlVGV4dCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgOiAnbWVzc2FnZVRleHRFbGVtZW50JyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG1lc3NhZ2VUZXh0XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIHBlZyRjNSA9IC9eW14gXFx0XFxuXFxyLC4rPXt9I10vLFxuICAgICAgICBwZWckYzYgPSB7IHR5cGU6IFwiY2xhc3NcIiwgdmFsdWU6IFwiW14gXFxcXHRcXFxcblxcXFxyLC4rPXt9I11cIiwgZGVzY3JpcHRpb246IFwiW14gXFxcXHRcXFxcblxcXFxyLC4rPXt9I11cIiB9LFxuICAgICAgICBwZWckYzcgPSBcIntcIixcbiAgICAgICAgcGVnJGM4ID0geyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwie1wiLCBkZXNjcmlwdGlvbjogXCJcXFwie1xcXCJcIiB9LFxuICAgICAgICBwZWckYzkgPSBudWxsLFxuICAgICAgICBwZWckYzEwID0gXCIsXCIsXG4gICAgICAgIHBlZyRjMTEgPSB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCIsXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCIsXFxcIlwiIH0sXG4gICAgICAgIHBlZyRjMTIgPSBcIn1cIixcbiAgICAgICAgcGVnJGMxMyA9IHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIn1cIiwgZGVzY3JpcHRpb246IFwiXFxcIn1cXFwiXCIgfSxcbiAgICAgICAgcGVnJGMxNCA9IGZ1bmN0aW9uKGlkLCBmb3JtYXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlICA6ICdhcmd1bWVudEVsZW1lbnQnLFxuICAgICAgICAgICAgICAgICAgICBpZCAgICA6IGlkLFxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IGZvcm1hdCAmJiBmb3JtYXRbMl1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgcGVnJGMxNSA9IFwibnVtYmVyXCIsXG4gICAgICAgIHBlZyRjMTYgPSB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJudW1iZXJcIiwgZGVzY3JpcHRpb246IFwiXFxcIm51bWJlclxcXCJcIiB9LFxuICAgICAgICBwZWckYzE3ID0gXCJkYXRlXCIsXG4gICAgICAgIHBlZyRjMTggPSB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJkYXRlXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJkYXRlXFxcIlwiIH0sXG4gICAgICAgIHBlZyRjMTkgPSBcInRpbWVcIixcbiAgICAgICAgcGVnJGMyMCA9IHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcInRpbWVcIiwgZGVzY3JpcHRpb246IFwiXFxcInRpbWVcXFwiXCIgfSxcbiAgICAgICAgcGVnJGMyMSA9IGZ1bmN0aW9uKHR5cGUsIHN0eWxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA6IHR5cGUgKyAnRm9ybWF0JyxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHN0eWxlICYmIHN0eWxlWzJdXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIHBlZyRjMjIgPSBcInBsdXJhbFwiLFxuICAgICAgICBwZWckYzIzID0geyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwicGx1cmFsXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJwbHVyYWxcXFwiXCIgfSxcbiAgICAgICAgcGVnJGMyNCA9IGZ1bmN0aW9uKHBsdXJhbFN0eWxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSAgIDogcGx1cmFsU3R5bGUudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgb3JkaW5hbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldCA6IHBsdXJhbFN0eWxlLm9mZnNldCB8fCAwLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBwbHVyYWxTdHlsZS5vcHRpb25zXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIHBlZyRjMjUgPSBcInNlbGVjdG9yZGluYWxcIixcbiAgICAgICAgcGVnJGMyNiA9IHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcInNlbGVjdG9yZGluYWxcIiwgZGVzY3JpcHRpb246IFwiXFxcInNlbGVjdG9yZGluYWxcXFwiXCIgfSxcbiAgICAgICAgcGVnJGMyNyA9IGZ1bmN0aW9uKHBsdXJhbFN0eWxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSAgIDogcGx1cmFsU3R5bGUudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgb3JkaW5hbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0IDogcGx1cmFsU3R5bGUub2Zmc2V0IHx8IDAsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHBsdXJhbFN0eWxlLm9wdGlvbnNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICBwZWckYzI4ID0gXCJzZWxlY3RcIixcbiAgICAgICAgcGVnJGMyOSA9IHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcInNlbGVjdFwiLCBkZXNjcmlwdGlvbjogXCJcXFwic2VsZWN0XFxcIlwiIH0sXG4gICAgICAgIHBlZyRjMzAgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSAgIDogJ3NlbGVjdEZvcm1hdCcsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgcGVnJGMzMSA9IFwiPVwiLFxuICAgICAgICBwZWckYzMyID0geyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiPVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiPVxcXCJcIiB9LFxuICAgICAgICBwZWckYzMzID0gZnVuY3Rpb24oc2VsZWN0b3IsIHBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlICAgIDogJ29wdGlvbmFsRm9ybWF0UGF0dGVybicsXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBzZWxlY3RvcixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgICA6IHBhdHRlcm5cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgcGVnJGMzNCA9IFwib2Zmc2V0OlwiLFxuICAgICAgICBwZWckYzM1ID0geyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwib2Zmc2V0OlwiLCBkZXNjcmlwdGlvbjogXCJcXFwib2Zmc2V0OlxcXCJcIiB9LFxuICAgICAgICBwZWckYzM2ID0gZnVuY3Rpb24obnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bWJlcjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIHBlZyRjMzcgPSBmdW5jdGlvbihvZmZzZXQsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlICAgOiAncGx1cmFsRm9ybWF0JyxcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0IDogb2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIHBlZyRjMzggPSB7IHR5cGU6IFwib3RoZXJcIiwgZGVzY3JpcHRpb246IFwid2hpdGVzcGFjZVwiIH0sXG4gICAgICAgIHBlZyRjMzkgPSAvXlsgXFx0XFxuXFxyXS8sXG4gICAgICAgIHBlZyRjNDAgPSB7IHR5cGU6IFwiY2xhc3NcIiwgdmFsdWU6IFwiWyBcXFxcdFxcXFxuXFxcXHJdXCIsIGRlc2NyaXB0aW9uOiBcIlsgXFxcXHRcXFxcblxcXFxyXVwiIH0sXG4gICAgICAgIHBlZyRjNDEgPSB7IHR5cGU6IFwib3RoZXJcIiwgZGVzY3JpcHRpb246IFwib3B0aW9uYWxXaGl0ZXNwYWNlXCIgfSxcbiAgICAgICAgcGVnJGM0MiA9IC9eWzAtOV0vLFxuICAgICAgICBwZWckYzQzID0geyB0eXBlOiBcImNsYXNzXCIsIHZhbHVlOiBcIlswLTldXCIsIGRlc2NyaXB0aW9uOiBcIlswLTldXCIgfSxcbiAgICAgICAgcGVnJGM0NCA9IC9eWzAtOWEtZl0vaSxcbiAgICAgICAgcGVnJGM0NSA9IHsgdHlwZTogXCJjbGFzc1wiLCB2YWx1ZTogXCJbMC05YS1mXWlcIiwgZGVzY3JpcHRpb246IFwiWzAtOWEtZl1pXCIgfSxcbiAgICAgICAgcGVnJGM0NiA9IFwiMFwiLFxuICAgICAgICBwZWckYzQ3ID0geyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiMFwiLCBkZXNjcmlwdGlvbjogXCJcXFwiMFxcXCJcIiB9LFxuICAgICAgICBwZWckYzQ4ID0gL15bMS05XS8sXG4gICAgICAgIHBlZyRjNDkgPSB7IHR5cGU6IFwiY2xhc3NcIiwgdmFsdWU6IFwiWzEtOV1cIiwgZGVzY3JpcHRpb246IFwiWzEtOV1cIiB9LFxuICAgICAgICBwZWckYzUwID0gZnVuY3Rpb24oZGlnaXRzKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQoZGlnaXRzLCAxMCk7XG4gICAgICAgIH0sXG4gICAgICAgIHBlZyRjNTEgPSAvXltee31cXFxcXFwwLVxceDFGfyBcXHRcXG5cXHJdLyxcbiAgICAgICAgcGVnJGM1MiA9IHsgdHlwZTogXCJjbGFzc1wiLCB2YWx1ZTogXCJbXnt9XFxcXFxcXFxcXFxcMC1cXFxceDFGfyBcXFxcdFxcXFxuXFxcXHJdXCIsIGRlc2NyaXB0aW9uOiBcIltee31cXFxcXFxcXFxcXFwwLVxcXFx4MUZ/IFxcXFx0XFxcXG5cXFxccl1cIiB9LFxuICAgICAgICBwZWckYzUzID0gXCJcXFxcI1wiLFxuICAgICAgICBwZWckYzU0ID0geyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiXFxcXCNcIiwgZGVzY3JpcHRpb246IFwiXFxcIlxcXFxcXFxcI1xcXCJcIiB9LFxuICAgICAgICBwZWckYzU1ID0gZnVuY3Rpb24oKSB7IHJldHVybiAnXFxcXCMnOyB9LFxuICAgICAgICBwZWckYzU2ID0gXCJcXFxce1wiLFxuICAgICAgICBwZWckYzU3ID0geyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiXFxcXHtcIiwgZGVzY3JpcHRpb246IFwiXFxcIlxcXFxcXFxce1xcXCJcIiB9LFxuICAgICAgICBwZWckYzU4ID0gZnVuY3Rpb24oKSB7IHJldHVybiAnXFx1MDA3Qic7IH0sXG4gICAgICAgIHBlZyRjNTkgPSBcIlxcXFx9XCIsXG4gICAgICAgIHBlZyRjNjAgPSB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJcXFxcfVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiXFxcXFxcXFx9XFxcIlwiIH0sXG4gICAgICAgIHBlZyRjNjEgPSBmdW5jdGlvbigpIHsgcmV0dXJuICdcXHUwMDdEJzsgfSxcbiAgICAgICAgcGVnJGM2MiA9IFwiXFxcXHVcIixcbiAgICAgICAgcGVnJGM2MyA9IHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlxcXFx1XCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJcXFxcXFxcXHVcXFwiXCIgfSxcbiAgICAgICAgcGVnJGM2NCA9IGZ1bmN0aW9uKGRpZ2l0cykge1xuICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KGRpZ2l0cywgMTYpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIHBlZyRjNjUgPSBmdW5jdGlvbihjaGFycykgeyByZXR1cm4gY2hhcnMuam9pbignJyk7IH0sXG5cbiAgICAgICAgcGVnJGN1cnJQb3MgICAgICAgICAgPSAwLFxuICAgICAgICBwZWckcmVwb3J0ZWRQb3MgICAgICA9IDAsXG4gICAgICAgIHBlZyRjYWNoZWRQb3MgICAgICAgID0gMCxcbiAgICAgICAgcGVnJGNhY2hlZFBvc0RldGFpbHMgPSB7IGxpbmU6IDEsIGNvbHVtbjogMSwgc2VlbkNSOiBmYWxzZSB9LFxuICAgICAgICBwZWckbWF4RmFpbFBvcyAgICAgICA9IDAsXG4gICAgICAgIHBlZyRtYXhGYWlsRXhwZWN0ZWQgID0gW10sXG4gICAgICAgIHBlZyRzaWxlbnRGYWlscyAgICAgID0gMCxcblxuICAgICAgICBwZWckcmVzdWx0O1xuXG4gICAgaWYgKFwic3RhcnRSdWxlXCIgaW4gb3B0aW9ucykge1xuICAgICAgaWYgKCEob3B0aW9ucy5zdGFydFJ1bGUgaW4gcGVnJHN0YXJ0UnVsZUZ1bmN0aW9ucykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3Qgc3RhcnQgcGFyc2luZyBmcm9tIHJ1bGUgXFxcIlwiICsgb3B0aW9ucy5zdGFydFJ1bGUgKyBcIlxcXCIuXCIpO1xuICAgICAgfVxuXG4gICAgICBwZWckc3RhcnRSdWxlRnVuY3Rpb24gPSBwZWckc3RhcnRSdWxlRnVuY3Rpb25zW29wdGlvbnMuc3RhcnRSdWxlXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0ZXh0KCkge1xuICAgICAgcmV0dXJuIGlucHV0LnN1YnN0cmluZyhwZWckcmVwb3J0ZWRQb3MsIHBlZyRjdXJyUG9zKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvZmZzZXQoKSB7XG4gICAgICByZXR1cm4gcGVnJHJlcG9ydGVkUG9zO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpbmUoKSB7XG4gICAgICByZXR1cm4gcGVnJGNvbXB1dGVQb3NEZXRhaWxzKHBlZyRyZXBvcnRlZFBvcykubGluZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb2x1bW4oKSB7XG4gICAgICByZXR1cm4gcGVnJGNvbXB1dGVQb3NEZXRhaWxzKHBlZyRyZXBvcnRlZFBvcykuY29sdW1uO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGV4cGVjdGVkKGRlc2NyaXB0aW9uKSB7XG4gICAgICB0aHJvdyBwZWckYnVpbGRFeGNlcHRpb24oXG4gICAgICAgIG51bGwsXG4gICAgICAgIFt7IHR5cGU6IFwib3RoZXJcIiwgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uIH1dLFxuICAgICAgICBwZWckcmVwb3J0ZWRQb3NcbiAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXJyb3IobWVzc2FnZSkge1xuICAgICAgdGhyb3cgcGVnJGJ1aWxkRXhjZXB0aW9uKG1lc3NhZ2UsIG51bGwsIHBlZyRyZXBvcnRlZFBvcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGVnJGNvbXB1dGVQb3NEZXRhaWxzKHBvcykge1xuICAgICAgZnVuY3Rpb24gYWR2YW5jZShkZXRhaWxzLCBzdGFydFBvcywgZW5kUG9zKSB7XG4gICAgICAgIHZhciBwLCBjaDtcblxuICAgICAgICBmb3IgKHAgPSBzdGFydFBvczsgcCA8IGVuZFBvczsgcCsrKSB7XG4gICAgICAgICAgY2ggPSBpbnB1dC5jaGFyQXQocCk7XG4gICAgICAgICAgaWYgKGNoID09PSBcIlxcblwiKSB7XG4gICAgICAgICAgICBpZiAoIWRldGFpbHMuc2VlbkNSKSB7IGRldGFpbHMubGluZSsrOyB9XG4gICAgICAgICAgICBkZXRhaWxzLmNvbHVtbiA9IDE7XG4gICAgICAgICAgICBkZXRhaWxzLnNlZW5DUiA9IGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSBpZiAoY2ggPT09IFwiXFxyXCIgfHwgY2ggPT09IFwiXFx1MjAyOFwiIHx8IGNoID09PSBcIlxcdTIwMjlcIikge1xuICAgICAgICAgICAgZGV0YWlscy5saW5lKys7XG4gICAgICAgICAgICBkZXRhaWxzLmNvbHVtbiA9IDE7XG4gICAgICAgICAgICBkZXRhaWxzLnNlZW5DUiA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRldGFpbHMuY29sdW1uKys7XG4gICAgICAgICAgICBkZXRhaWxzLnNlZW5DUiA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocGVnJGNhY2hlZFBvcyAhPT0gcG9zKSB7XG4gICAgICAgIGlmIChwZWckY2FjaGVkUG9zID4gcG9zKSB7XG4gICAgICAgICAgcGVnJGNhY2hlZFBvcyA9IDA7XG4gICAgICAgICAgcGVnJGNhY2hlZFBvc0RldGFpbHMgPSB7IGxpbmU6IDEsIGNvbHVtbjogMSwgc2VlbkNSOiBmYWxzZSB9O1xuICAgICAgICB9XG4gICAgICAgIGFkdmFuY2UocGVnJGNhY2hlZFBvc0RldGFpbHMsIHBlZyRjYWNoZWRQb3MsIHBvcyk7XG4gICAgICAgIHBlZyRjYWNoZWRQb3MgPSBwb3M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwZWckY2FjaGVkUG9zRGV0YWlscztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwZWckZmFpbChleHBlY3RlZCkge1xuICAgICAgaWYgKHBlZyRjdXJyUG9zIDwgcGVnJG1heEZhaWxQb3MpIHsgcmV0dXJuOyB9XG5cbiAgICAgIGlmIChwZWckY3VyclBvcyA+IHBlZyRtYXhGYWlsUG9zKSB7XG4gICAgICAgIHBlZyRtYXhGYWlsUG9zID0gcGVnJGN1cnJQb3M7XG4gICAgICAgIHBlZyRtYXhGYWlsRXhwZWN0ZWQgPSBbXTtcbiAgICAgIH1cblxuICAgICAgcGVnJG1heEZhaWxFeHBlY3RlZC5wdXNoKGV4cGVjdGVkKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwZWckYnVpbGRFeGNlcHRpb24obWVzc2FnZSwgZXhwZWN0ZWQsIHBvcykge1xuICAgICAgZnVuY3Rpb24gY2xlYW51cEV4cGVjdGVkKGV4cGVjdGVkKSB7XG4gICAgICAgIHZhciBpID0gMTtcblxuICAgICAgICBleHBlY3RlZC5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICBpZiAoYS5kZXNjcmlwdGlvbiA8IGIuZGVzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGEuZGVzY3JpcHRpb24gPiBiLmRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB3aGlsZSAoaSA8IGV4cGVjdGVkLmxlbmd0aCkge1xuICAgICAgICAgIGlmIChleHBlY3RlZFtpIC0gMV0gPT09IGV4cGVjdGVkW2ldKSB7XG4gICAgICAgICAgICBleHBlY3RlZC5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gYnVpbGRNZXNzYWdlKGV4cGVjdGVkLCBmb3VuZCkge1xuICAgICAgICBmdW5jdGlvbiBzdHJpbmdFc2NhcGUocykge1xuICAgICAgICAgIGZ1bmN0aW9uIGhleChjaCkgeyByZXR1cm4gY2guY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTsgfVxuXG4gICAgICAgICAgcmV0dXJuIHNcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcL2csICAgJ1xcXFxcXFxcJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cIi9nLCAgICAnXFxcXFwiJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXHgwOC9nLCAnXFxcXGInKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcdC9nLCAgICdcXFxcdCcpXG4gICAgICAgICAgICAucmVwbGFjZSgvXFxuL2csICAgJ1xcXFxuJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXGYvZywgICAnXFxcXGYnKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcci9nLCAgICdcXFxccicpXG4gICAgICAgICAgICAucmVwbGFjZSgvW1xceDAwLVxceDA3XFx4MEJcXHgwRVxceDBGXS9nLCBmdW5jdGlvbihjaCkgeyByZXR1cm4gJ1xcXFx4MCcgKyBoZXgoY2gpOyB9KVxuICAgICAgICAgICAgLnJlcGxhY2UoL1tcXHgxMC1cXHgxRlxceDgwLVxceEZGXS9nLCAgICBmdW5jdGlvbihjaCkgeyByZXR1cm4gJ1xcXFx4JyAgKyBoZXgoY2gpOyB9KVxuICAgICAgICAgICAgLnJlcGxhY2UoL1tcXHUwMTgwLVxcdTBGRkZdL2csICAgICAgICAgZnVuY3Rpb24oY2gpIHsgcmV0dXJuICdcXFxcdTAnICsgaGV4KGNoKTsgfSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC9bXFx1MTA4MC1cXHVGRkZGXS9nLCAgICAgICAgIGZ1bmN0aW9uKGNoKSB7IHJldHVybiAnXFxcXHUnICArIGhleChjaCk7IH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGV4cGVjdGVkRGVzY3MgPSBuZXcgQXJyYXkoZXhwZWN0ZWQubGVuZ3RoKSxcbiAgICAgICAgICAgIGV4cGVjdGVkRGVzYywgZm91bmREZXNjLCBpO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBleHBlY3RlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGV4cGVjdGVkRGVzY3NbaV0gPSBleHBlY3RlZFtpXS5kZXNjcmlwdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGV4cGVjdGVkRGVzYyA9IGV4cGVjdGVkLmxlbmd0aCA+IDFcbiAgICAgICAgICA/IGV4cGVjdGVkRGVzY3Muc2xpY2UoMCwgLTEpLmpvaW4oXCIsIFwiKVxuICAgICAgICAgICAgICArIFwiIG9yIFwiXG4gICAgICAgICAgICAgICsgZXhwZWN0ZWREZXNjc1tleHBlY3RlZC5sZW5ndGggLSAxXVxuICAgICAgICAgIDogZXhwZWN0ZWREZXNjc1swXTtcblxuICAgICAgICBmb3VuZERlc2MgPSBmb3VuZCA/IFwiXFxcIlwiICsgc3RyaW5nRXNjYXBlKGZvdW5kKSArIFwiXFxcIlwiIDogXCJlbmQgb2YgaW5wdXRcIjtcblxuICAgICAgICByZXR1cm4gXCJFeHBlY3RlZCBcIiArIGV4cGVjdGVkRGVzYyArIFwiIGJ1dCBcIiArIGZvdW5kRGVzYyArIFwiIGZvdW5kLlwiO1xuICAgICAgfVxuXG4gICAgICB2YXIgcG9zRGV0YWlscyA9IHBlZyRjb21wdXRlUG9zRGV0YWlscyhwb3MpLFxuICAgICAgICAgIGZvdW5kICAgICAgPSBwb3MgPCBpbnB1dC5sZW5ndGggPyBpbnB1dC5jaGFyQXQocG9zKSA6IG51bGw7XG5cbiAgICAgIGlmIChleHBlY3RlZCAhPT0gbnVsbCkge1xuICAgICAgICBjbGVhbnVwRXhwZWN0ZWQoZXhwZWN0ZWQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IFN5bnRheEVycm9yKFxuICAgICAgICBtZXNzYWdlICE9PSBudWxsID8gbWVzc2FnZSA6IGJ1aWxkTWVzc2FnZShleHBlY3RlZCwgZm91bmQpLFxuICAgICAgICBleHBlY3RlZCxcbiAgICAgICAgZm91bmQsXG4gICAgICAgIHBvcyxcbiAgICAgICAgcG9zRGV0YWlscy5saW5lLFxuICAgICAgICBwb3NEZXRhaWxzLmNvbHVtblxuICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwZWckcGFyc2VzdGFydCgpIHtcbiAgICAgIHZhciBzMDtcblxuICAgICAgczAgPSBwZWckcGFyc2VtZXNzYWdlRm9ybWF0UGF0dGVybigpO1xuXG4gICAgICByZXR1cm4gczA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGVnJHBhcnNlbWVzc2FnZUZvcm1hdFBhdHRlcm4oKSB7XG4gICAgICB2YXIgczAsIHMxLCBzMjtcblxuICAgICAgczAgPSBwZWckY3VyclBvcztcbiAgICAgIHMxID0gW107XG4gICAgICBzMiA9IHBlZyRwYXJzZW1lc3NhZ2VGb3JtYXRFbGVtZW50KCk7XG4gICAgICB3aGlsZSAoczIgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgczEucHVzaChzMik7XG4gICAgICAgIHMyID0gcGVnJHBhcnNlbWVzc2FnZUZvcm1hdEVsZW1lbnQoKTtcbiAgICAgIH1cbiAgICAgIGlmIChzMSAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICBwZWckcmVwb3J0ZWRQb3MgPSBzMDtcbiAgICAgICAgczEgPSBwZWckYzEoczEpO1xuICAgICAgfVxuICAgICAgczAgPSBzMTtcblxuICAgICAgcmV0dXJuIHMwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBlZyRwYXJzZW1lc3NhZ2VGb3JtYXRFbGVtZW50KCkge1xuICAgICAgdmFyIHMwO1xuXG4gICAgICBzMCA9IHBlZyRwYXJzZW1lc3NhZ2VUZXh0RWxlbWVudCgpO1xuICAgICAgaWYgKHMwID09PSBwZWckRkFJTEVEKSB7XG4gICAgICAgIHMwID0gcGVnJHBhcnNlYXJndW1lbnRFbGVtZW50KCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwZWckcGFyc2VtZXNzYWdlVGV4dCgpIHtcbiAgICAgIHZhciBzMCwgczEsIHMyLCBzMywgczQsIHM1O1xuXG4gICAgICBzMCA9IHBlZyRjdXJyUG9zO1xuICAgICAgczEgPSBbXTtcbiAgICAgIHMyID0gcGVnJGN1cnJQb3M7XG4gICAgICBzMyA9IHBlZyRwYXJzZV8oKTtcbiAgICAgIGlmIChzMyAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICBzNCA9IHBlZyRwYXJzZWNoYXJzKCk7XG4gICAgICAgIGlmIChzNCAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgIHM1ID0gcGVnJHBhcnNlXygpO1xuICAgICAgICAgIGlmIChzNSAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgczMgPSBbczMsIHM0LCBzNV07XG4gICAgICAgICAgICBzMiA9IHMzO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwZWckY3VyclBvcyA9IHMyO1xuICAgICAgICAgICAgczIgPSBwZWckYzI7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBlZyRjdXJyUG9zID0gczI7XG4gICAgICAgICAgczIgPSBwZWckYzI7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBlZyRjdXJyUG9zID0gczI7XG4gICAgICAgIHMyID0gcGVnJGMyO1xuICAgICAgfVxuICAgICAgaWYgKHMyICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgIHdoaWxlIChzMiAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgIHMxLnB1c2goczIpO1xuICAgICAgICAgIHMyID0gcGVnJGN1cnJQb3M7XG4gICAgICAgICAgczMgPSBwZWckcGFyc2VfKCk7XG4gICAgICAgICAgaWYgKHMzICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICBzNCA9IHBlZyRwYXJzZWNoYXJzKCk7XG4gICAgICAgICAgICBpZiAoczQgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgICAgczUgPSBwZWckcGFyc2VfKCk7XG4gICAgICAgICAgICAgIGlmIChzNSAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgICAgIHMzID0gW3MzLCBzNCwgczVdO1xuICAgICAgICAgICAgICAgIHMyID0gczM7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMjtcbiAgICAgICAgICAgICAgICBzMiA9IHBlZyRjMjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMjtcbiAgICAgICAgICAgICAgczIgPSBwZWckYzI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBlZyRjdXJyUG9zID0gczI7XG4gICAgICAgICAgICBzMiA9IHBlZyRjMjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHMxID0gcGVnJGMyO1xuICAgICAgfVxuICAgICAgaWYgKHMxICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgIHBlZyRyZXBvcnRlZFBvcyA9IHMwO1xuICAgICAgICBzMSA9IHBlZyRjMyhzMSk7XG4gICAgICB9XG4gICAgICBzMCA9IHMxO1xuICAgICAgaWYgKHMwID09PSBwZWckRkFJTEVEKSB7XG4gICAgICAgIHMwID0gcGVnJGN1cnJQb3M7XG4gICAgICAgIHMxID0gcGVnJHBhcnNld3MoKTtcbiAgICAgICAgaWYgKHMxICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgczEgPSBpbnB1dC5zdWJzdHJpbmcoczAsIHBlZyRjdXJyUG9zKTtcbiAgICAgICAgfVxuICAgICAgICBzMCA9IHMxO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gczA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGVnJHBhcnNlbWVzc2FnZVRleHRFbGVtZW50KCkge1xuICAgICAgdmFyIHMwLCBzMTtcblxuICAgICAgczAgPSBwZWckY3VyclBvcztcbiAgICAgIHMxID0gcGVnJHBhcnNlbWVzc2FnZVRleHQoKTtcbiAgICAgIGlmIChzMSAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICBwZWckcmVwb3J0ZWRQb3MgPSBzMDtcbiAgICAgICAgczEgPSBwZWckYzQoczEpO1xuICAgICAgfVxuICAgICAgczAgPSBzMTtcblxuICAgICAgcmV0dXJuIHMwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBlZyRwYXJzZWFyZ3VtZW50KCkge1xuICAgICAgdmFyIHMwLCBzMSwgczI7XG5cbiAgICAgIHMwID0gcGVnJHBhcnNlbnVtYmVyKCk7XG4gICAgICBpZiAoczAgPT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgczAgPSBwZWckY3VyclBvcztcbiAgICAgICAgczEgPSBbXTtcbiAgICAgICAgaWYgKHBlZyRjNS50ZXN0KGlucHV0LmNoYXJBdChwZWckY3VyclBvcykpKSB7XG4gICAgICAgICAgczIgPSBpbnB1dC5jaGFyQXQocGVnJGN1cnJQb3MpO1xuICAgICAgICAgIHBlZyRjdXJyUG9zKys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgczIgPSBwZWckRkFJTEVEO1xuICAgICAgICAgIGlmIChwZWckc2lsZW50RmFpbHMgPT09IDApIHsgcGVnJGZhaWwocGVnJGM2KTsgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChzMiAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgIHdoaWxlIChzMiAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgczEucHVzaChzMik7XG4gICAgICAgICAgICBpZiAocGVnJGM1LnRlc3QoaW5wdXQuY2hhckF0KHBlZyRjdXJyUG9zKSkpIHtcbiAgICAgICAgICAgICAgczIgPSBpbnB1dC5jaGFyQXQocGVnJGN1cnJQb3MpO1xuICAgICAgICAgICAgICBwZWckY3VyclBvcysrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgczIgPSBwZWckRkFJTEVEO1xuICAgICAgICAgICAgICBpZiAocGVnJHNpbGVudEZhaWxzID09PSAwKSB7IHBlZyRmYWlsKHBlZyRjNik7IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgczEgPSBwZWckYzI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHMxICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgczEgPSBpbnB1dC5zdWJzdHJpbmcoczAsIHBlZyRjdXJyUG9zKTtcbiAgICAgICAgfVxuICAgICAgICBzMCA9IHMxO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gczA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGVnJHBhcnNlYXJndW1lbnRFbGVtZW50KCkge1xuICAgICAgdmFyIHMwLCBzMSwgczIsIHMzLCBzNCwgczUsIHM2LCBzNywgczg7XG5cbiAgICAgIHMwID0gcGVnJGN1cnJQb3M7XG4gICAgICBpZiAoaW5wdXQuY2hhckNvZGVBdChwZWckY3VyclBvcykgPT09IDEyMykge1xuICAgICAgICBzMSA9IHBlZyRjNztcbiAgICAgICAgcGVnJGN1cnJQb3MrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHMxID0gcGVnJEZBSUxFRDtcbiAgICAgICAgaWYgKHBlZyRzaWxlbnRGYWlscyA9PT0gMCkgeyBwZWckZmFpbChwZWckYzgpOyB9XG4gICAgICB9XG4gICAgICBpZiAoczEgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgczIgPSBwZWckcGFyc2VfKCk7XG4gICAgICAgIGlmIChzMiAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgIHMzID0gcGVnJHBhcnNlYXJndW1lbnQoKTtcbiAgICAgICAgICBpZiAoczMgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgIHM0ID0gcGVnJHBhcnNlXygpO1xuICAgICAgICAgICAgaWYgKHM0ICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICAgIHM1ID0gcGVnJGN1cnJQb3M7XG4gICAgICAgICAgICAgIGlmIChpbnB1dC5jaGFyQ29kZUF0KHBlZyRjdXJyUG9zKSA9PT0gNDQpIHtcbiAgICAgICAgICAgICAgICBzNiA9IHBlZyRjMTA7XG4gICAgICAgICAgICAgICAgcGVnJGN1cnJQb3MrKztcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzNiA9IHBlZyRGQUlMRUQ7XG4gICAgICAgICAgICAgICAgaWYgKHBlZyRzaWxlbnRGYWlscyA9PT0gMCkgeyBwZWckZmFpbChwZWckYzExKTsgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChzNiAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgICAgIHM3ID0gcGVnJHBhcnNlXygpO1xuICAgICAgICAgICAgICAgIGlmIChzNyAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgICAgICAgczggPSBwZWckcGFyc2VlbGVtZW50Rm9ybWF0KCk7XG4gICAgICAgICAgICAgICAgICBpZiAoczggIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgICAgICAgICAgczYgPSBbczYsIHM3LCBzOF07XG4gICAgICAgICAgICAgICAgICAgIHM1ID0gczY7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwZWckY3VyclBvcyA9IHM1O1xuICAgICAgICAgICAgICAgICAgICBzNSA9IHBlZyRjMjtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcGVnJGN1cnJQb3MgPSBzNTtcbiAgICAgICAgICAgICAgICAgIHM1ID0gcGVnJGMyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwZWckY3VyclBvcyA9IHM1O1xuICAgICAgICAgICAgICAgIHM1ID0gcGVnJGMyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChzNSA9PT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgICAgIHM1ID0gcGVnJGM5O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChzNSAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgICAgIHM2ID0gcGVnJHBhcnNlXygpO1xuICAgICAgICAgICAgICAgIGlmIChzNiAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgICAgICAgaWYgKGlucHV0LmNoYXJDb2RlQXQocGVnJGN1cnJQb3MpID09PSAxMjUpIHtcbiAgICAgICAgICAgICAgICAgICAgczcgPSBwZWckYzEyO1xuICAgICAgICAgICAgICAgICAgICBwZWckY3VyclBvcysrO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgczcgPSBwZWckRkFJTEVEO1xuICAgICAgICAgICAgICAgICAgICBpZiAocGVnJHNpbGVudEZhaWxzID09PSAwKSB7IHBlZyRmYWlsKHBlZyRjMTMpOyB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAoczcgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgICAgICAgICAgcGVnJHJlcG9ydGVkUG9zID0gczA7XG4gICAgICAgICAgICAgICAgICAgIHMxID0gcGVnJGMxNChzMywgczUpO1xuICAgICAgICAgICAgICAgICAgICBzMCA9IHMxO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgICAgICAgICAgICAgczAgPSBwZWckYzI7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICAgICAgICAgICAgICBzMCA9IHBlZyRjMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgICAgICAgICBzMCA9IHBlZyRjMjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgICAgICAgczAgPSBwZWckYzI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICAgICAgICBzMCA9IHBlZyRjMjtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgICBzMCA9IHBlZyRjMjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgczAgPSBwZWckYzI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwZWckcGFyc2VlbGVtZW50Rm9ybWF0KCkge1xuICAgICAgdmFyIHMwO1xuXG4gICAgICBzMCA9IHBlZyRwYXJzZXNpbXBsZUZvcm1hdCgpO1xuICAgICAgaWYgKHMwID09PSBwZWckRkFJTEVEKSB7XG4gICAgICAgIHMwID0gcGVnJHBhcnNlcGx1cmFsRm9ybWF0KCk7XG4gICAgICAgIGlmIChzMCA9PT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgIHMwID0gcGVnJHBhcnNlc2VsZWN0T3JkaW5hbEZvcm1hdCgpO1xuICAgICAgICAgIGlmIChzMCA9PT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgczAgPSBwZWckcGFyc2VzZWxlY3RGb3JtYXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHMwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBlZyRwYXJzZXNpbXBsZUZvcm1hdCgpIHtcbiAgICAgIHZhciBzMCwgczEsIHMyLCBzMywgczQsIHM1LCBzNjtcblxuICAgICAgczAgPSBwZWckY3VyclBvcztcbiAgICAgIGlmIChpbnB1dC5zdWJzdHIocGVnJGN1cnJQb3MsIDYpID09PSBwZWckYzE1KSB7XG4gICAgICAgIHMxID0gcGVnJGMxNTtcbiAgICAgICAgcGVnJGN1cnJQb3MgKz0gNjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHMxID0gcGVnJEZBSUxFRDtcbiAgICAgICAgaWYgKHBlZyRzaWxlbnRGYWlscyA9PT0gMCkgeyBwZWckZmFpbChwZWckYzE2KTsgfVxuICAgICAgfVxuICAgICAgaWYgKHMxID09PSBwZWckRkFJTEVEKSB7XG4gICAgICAgIGlmIChpbnB1dC5zdWJzdHIocGVnJGN1cnJQb3MsIDQpID09PSBwZWckYzE3KSB7XG4gICAgICAgICAgczEgPSBwZWckYzE3O1xuICAgICAgICAgIHBlZyRjdXJyUG9zICs9IDQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgczEgPSBwZWckRkFJTEVEO1xuICAgICAgICAgIGlmIChwZWckc2lsZW50RmFpbHMgPT09IDApIHsgcGVnJGZhaWwocGVnJGMxOCk7IH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoczEgPT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICBpZiAoaW5wdXQuc3Vic3RyKHBlZyRjdXJyUG9zLCA0KSA9PT0gcGVnJGMxOSkge1xuICAgICAgICAgICAgczEgPSBwZWckYzE5O1xuICAgICAgICAgICAgcGVnJGN1cnJQb3MgKz0gNDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgczEgPSBwZWckRkFJTEVEO1xuICAgICAgICAgICAgaWYgKHBlZyRzaWxlbnRGYWlscyA9PT0gMCkgeyBwZWckZmFpbChwZWckYzIwKTsgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHMxICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgIHMyID0gcGVnJHBhcnNlXygpO1xuICAgICAgICBpZiAoczIgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICBzMyA9IHBlZyRjdXJyUG9zO1xuICAgICAgICAgIGlmIChpbnB1dC5jaGFyQ29kZUF0KHBlZyRjdXJyUG9zKSA9PT0gNDQpIHtcbiAgICAgICAgICAgIHM0ID0gcGVnJGMxMDtcbiAgICAgICAgICAgIHBlZyRjdXJyUG9zKys7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHM0ID0gcGVnJEZBSUxFRDtcbiAgICAgICAgICAgIGlmIChwZWckc2lsZW50RmFpbHMgPT09IDApIHsgcGVnJGZhaWwocGVnJGMxMSk7IH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHM0ICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICBzNSA9IHBlZyRwYXJzZV8oKTtcbiAgICAgICAgICAgIGlmIChzNSAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgICBzNiA9IHBlZyRwYXJzZWNoYXJzKCk7XG4gICAgICAgICAgICAgIGlmIChzNiAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgICAgIHM0ID0gW3M0LCBzNSwgczZdO1xuICAgICAgICAgICAgICAgIHMzID0gczQ7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMztcbiAgICAgICAgICAgICAgICBzMyA9IHBlZyRjMjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMztcbiAgICAgICAgICAgICAgczMgPSBwZWckYzI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBlZyRjdXJyUG9zID0gczM7XG4gICAgICAgICAgICBzMyA9IHBlZyRjMjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHMzID09PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICBzMyA9IHBlZyRjOTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHMzICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICBwZWckcmVwb3J0ZWRQb3MgPSBzMDtcbiAgICAgICAgICAgIHMxID0gcGVnJGMyMShzMSwgczMpO1xuICAgICAgICAgICAgczAgPSBzMTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgICAgIHMwID0gcGVnJGMyO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICAgIHMwID0gcGVnJGMyO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICBzMCA9IHBlZyRjMjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHMwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBlZyRwYXJzZXBsdXJhbEZvcm1hdCgpIHtcbiAgICAgIHZhciBzMCwgczEsIHMyLCBzMywgczQsIHM1O1xuXG4gICAgICBzMCA9IHBlZyRjdXJyUG9zO1xuICAgICAgaWYgKGlucHV0LnN1YnN0cihwZWckY3VyclBvcywgNikgPT09IHBlZyRjMjIpIHtcbiAgICAgICAgczEgPSBwZWckYzIyO1xuICAgICAgICBwZWckY3VyclBvcyArPSA2O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgczEgPSBwZWckRkFJTEVEO1xuICAgICAgICBpZiAocGVnJHNpbGVudEZhaWxzID09PSAwKSB7IHBlZyRmYWlsKHBlZyRjMjMpOyB9XG4gICAgICB9XG4gICAgICBpZiAoczEgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgczIgPSBwZWckcGFyc2VfKCk7XG4gICAgICAgIGlmIChzMiAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgIGlmIChpbnB1dC5jaGFyQ29kZUF0KHBlZyRjdXJyUG9zKSA9PT0gNDQpIHtcbiAgICAgICAgICAgIHMzID0gcGVnJGMxMDtcbiAgICAgICAgICAgIHBlZyRjdXJyUG9zKys7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHMzID0gcGVnJEZBSUxFRDtcbiAgICAgICAgICAgIGlmIChwZWckc2lsZW50RmFpbHMgPT09IDApIHsgcGVnJGZhaWwocGVnJGMxMSk7IH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHMzICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICBzNCA9IHBlZyRwYXJzZV8oKTtcbiAgICAgICAgICAgIGlmIChzNCAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgICBzNSA9IHBlZyRwYXJzZXBsdXJhbFN0eWxlKCk7XG4gICAgICAgICAgICAgIGlmIChzNSAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgICAgIHBlZyRyZXBvcnRlZFBvcyA9IHMwO1xuICAgICAgICAgICAgICAgIHMxID0gcGVnJGMyNChzNSk7XG4gICAgICAgICAgICAgICAgczAgPSBzMTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICAgICAgICAgIHMwID0gcGVnJGMyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICAgICAgICBzMCA9IHBlZyRjMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgICAgIHMwID0gcGVnJGMyO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICAgIHMwID0gcGVnJGMyO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICBzMCA9IHBlZyRjMjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHMwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBlZyRwYXJzZXNlbGVjdE9yZGluYWxGb3JtYXQoKSB7XG4gICAgICB2YXIgczAsIHMxLCBzMiwgczMsIHM0LCBzNTtcblxuICAgICAgczAgPSBwZWckY3VyclBvcztcbiAgICAgIGlmIChpbnB1dC5zdWJzdHIocGVnJGN1cnJQb3MsIDEzKSA9PT0gcGVnJGMyNSkge1xuICAgICAgICBzMSA9IHBlZyRjMjU7XG4gICAgICAgIHBlZyRjdXJyUG9zICs9IDEzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgczEgPSBwZWckRkFJTEVEO1xuICAgICAgICBpZiAocGVnJHNpbGVudEZhaWxzID09PSAwKSB7IHBlZyRmYWlsKHBlZyRjMjYpOyB9XG4gICAgICB9XG4gICAgICBpZiAoczEgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgczIgPSBwZWckcGFyc2VfKCk7XG4gICAgICAgIGlmIChzMiAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgIGlmIChpbnB1dC5jaGFyQ29kZUF0KHBlZyRjdXJyUG9zKSA9PT0gNDQpIHtcbiAgICAgICAgICAgIHMzID0gcGVnJGMxMDtcbiAgICAgICAgICAgIHBlZyRjdXJyUG9zKys7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHMzID0gcGVnJEZBSUxFRDtcbiAgICAgICAgICAgIGlmIChwZWckc2lsZW50RmFpbHMgPT09IDApIHsgcGVnJGZhaWwocGVnJGMxMSk7IH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHMzICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICBzNCA9IHBlZyRwYXJzZV8oKTtcbiAgICAgICAgICAgIGlmIChzNCAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgICBzNSA9IHBlZyRwYXJzZXBsdXJhbFN0eWxlKCk7XG4gICAgICAgICAgICAgIGlmIChzNSAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgICAgIHBlZyRyZXBvcnRlZFBvcyA9IHMwO1xuICAgICAgICAgICAgICAgIHMxID0gcGVnJGMyNyhzNSk7XG4gICAgICAgICAgICAgICAgczAgPSBzMTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICAgICAgICAgIHMwID0gcGVnJGMyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICAgICAgICBzMCA9IHBlZyRjMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgICAgIHMwID0gcGVnJGMyO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICAgIHMwID0gcGVnJGMyO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICBzMCA9IHBlZyRjMjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHMwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBlZyRwYXJzZXNlbGVjdEZvcm1hdCgpIHtcbiAgICAgIHZhciBzMCwgczEsIHMyLCBzMywgczQsIHM1LCBzNjtcblxuICAgICAgczAgPSBwZWckY3VyclBvcztcbiAgICAgIGlmIChpbnB1dC5zdWJzdHIocGVnJGN1cnJQb3MsIDYpID09PSBwZWckYzI4KSB7XG4gICAgICAgIHMxID0gcGVnJGMyODtcbiAgICAgICAgcGVnJGN1cnJQb3MgKz0gNjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHMxID0gcGVnJEZBSUxFRDtcbiAgICAgICAgaWYgKHBlZyRzaWxlbnRGYWlscyA9PT0gMCkgeyBwZWckZmFpbChwZWckYzI5KTsgfVxuICAgICAgfVxuICAgICAgaWYgKHMxICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgIHMyID0gcGVnJHBhcnNlXygpO1xuICAgICAgICBpZiAoczIgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICBpZiAoaW5wdXQuY2hhckNvZGVBdChwZWckY3VyclBvcykgPT09IDQ0KSB7XG4gICAgICAgICAgICBzMyA9IHBlZyRjMTA7XG4gICAgICAgICAgICBwZWckY3VyclBvcysrO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzMyA9IHBlZyRGQUlMRUQ7XG4gICAgICAgICAgICBpZiAocGVnJHNpbGVudEZhaWxzID09PSAwKSB7IHBlZyRmYWlsKHBlZyRjMTEpOyB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzMyAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgczQgPSBwZWckcGFyc2VfKCk7XG4gICAgICAgICAgICBpZiAoczQgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgICAgczUgPSBbXTtcbiAgICAgICAgICAgICAgczYgPSBwZWckcGFyc2VvcHRpb25hbEZvcm1hdFBhdHRlcm4oKTtcbiAgICAgICAgICAgICAgaWYgKHM2ICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICAgICAgd2hpbGUgKHM2ICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICAgICAgICBzNS5wdXNoKHM2KTtcbiAgICAgICAgICAgICAgICAgIHM2ID0gcGVnJHBhcnNlb3B0aW9uYWxGb3JtYXRQYXR0ZXJuKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHM1ID0gcGVnJGMyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChzNSAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgICAgIHBlZyRyZXBvcnRlZFBvcyA9IHMwO1xuICAgICAgICAgICAgICAgIHMxID0gcGVnJGMzMChzNSk7XG4gICAgICAgICAgICAgICAgczAgPSBzMTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICAgICAgICAgIHMwID0gcGVnJGMyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICAgICAgICBzMCA9IHBlZyRjMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgICAgIHMwID0gcGVnJGMyO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICAgIHMwID0gcGVnJGMyO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICBzMCA9IHBlZyRjMjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHMwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBlZyRwYXJzZXNlbGVjdG9yKCkge1xuICAgICAgdmFyIHMwLCBzMSwgczIsIHMzO1xuXG4gICAgICBzMCA9IHBlZyRjdXJyUG9zO1xuICAgICAgczEgPSBwZWckY3VyclBvcztcbiAgICAgIGlmIChpbnB1dC5jaGFyQ29kZUF0KHBlZyRjdXJyUG9zKSA9PT0gNjEpIHtcbiAgICAgICAgczIgPSBwZWckYzMxO1xuICAgICAgICBwZWckY3VyclBvcysrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgczIgPSBwZWckRkFJTEVEO1xuICAgICAgICBpZiAocGVnJHNpbGVudEZhaWxzID09PSAwKSB7IHBlZyRmYWlsKHBlZyRjMzIpOyB9XG4gICAgICB9XG4gICAgICBpZiAoczIgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgczMgPSBwZWckcGFyc2VudW1iZXIoKTtcbiAgICAgICAgaWYgKHMzICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgczIgPSBbczIsIHMzXTtcbiAgICAgICAgICBzMSA9IHMyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBlZyRjdXJyUG9zID0gczE7XG4gICAgICAgICAgczEgPSBwZWckYzI7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBlZyRjdXJyUG9zID0gczE7XG4gICAgICAgIHMxID0gcGVnJGMyO1xuICAgICAgfVxuICAgICAgaWYgKHMxICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgIHMxID0gaW5wdXQuc3Vic3RyaW5nKHMwLCBwZWckY3VyclBvcyk7XG4gICAgICB9XG4gICAgICBzMCA9IHMxO1xuICAgICAgaWYgKHMwID09PSBwZWckRkFJTEVEKSB7XG4gICAgICAgIHMwID0gcGVnJHBhcnNlY2hhcnMoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHMwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBlZyRwYXJzZW9wdGlvbmFsRm9ybWF0UGF0dGVybigpIHtcbiAgICAgIHZhciBzMCwgczEsIHMyLCBzMywgczQsIHM1LCBzNiwgczcsIHM4O1xuXG4gICAgICBzMCA9IHBlZyRjdXJyUG9zO1xuICAgICAgczEgPSBwZWckcGFyc2VfKCk7XG4gICAgICBpZiAoczEgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgczIgPSBwZWckcGFyc2VzZWxlY3RvcigpO1xuICAgICAgICBpZiAoczIgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICBzMyA9IHBlZyRwYXJzZV8oKTtcbiAgICAgICAgICBpZiAoczMgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgIGlmIChpbnB1dC5jaGFyQ29kZUF0KHBlZyRjdXJyUG9zKSA9PT0gMTIzKSB7XG4gICAgICAgICAgICAgIHM0ID0gcGVnJGM3O1xuICAgICAgICAgICAgICBwZWckY3VyclBvcysrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgczQgPSBwZWckRkFJTEVEO1xuICAgICAgICAgICAgICBpZiAocGVnJHNpbGVudEZhaWxzID09PSAwKSB7IHBlZyRmYWlsKHBlZyRjOCk7IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzNCAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgICBzNSA9IHBlZyRwYXJzZV8oKTtcbiAgICAgICAgICAgICAgaWYgKHM1ICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICAgICAgczYgPSBwZWckcGFyc2VtZXNzYWdlRm9ybWF0UGF0dGVybigpO1xuICAgICAgICAgICAgICAgIGlmIChzNiAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgICAgICAgczcgPSBwZWckcGFyc2VfKCk7XG4gICAgICAgICAgICAgICAgICBpZiAoczcgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlucHV0LmNoYXJDb2RlQXQocGVnJGN1cnJQb3MpID09PSAxMjUpIHtcbiAgICAgICAgICAgICAgICAgICAgICBzOCA9IHBlZyRjMTI7XG4gICAgICAgICAgICAgICAgICAgICAgcGVnJGN1cnJQb3MrKztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICBzOCA9IHBlZyRGQUlMRUQ7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHBlZyRzaWxlbnRGYWlscyA9PT0gMCkgeyBwZWckZmFpbChwZWckYzEzKTsgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChzOCAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgICAgICAgICAgIHBlZyRyZXBvcnRlZFBvcyA9IHMwO1xuICAgICAgICAgICAgICAgICAgICAgIHMxID0gcGVnJGMzMyhzMiwgczYpO1xuICAgICAgICAgICAgICAgICAgICAgIHMwID0gczE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgICAgICAgICAgICAgICBzMCA9IHBlZyRjMjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgICAgICAgICAgICAgczAgPSBwZWckYzI7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICAgICAgICAgICAgICBzMCA9IHBlZyRjMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgICAgICAgICBzMCA9IHBlZyRjMjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgICAgICAgczAgPSBwZWckYzI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICAgICAgICBzMCA9IHBlZyRjMjtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgICBzMCA9IHBlZyRjMjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgczAgPSBwZWckYzI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwZWckcGFyc2VvZmZzZXQoKSB7XG4gICAgICB2YXIgczAsIHMxLCBzMiwgczM7XG5cbiAgICAgIHMwID0gcGVnJGN1cnJQb3M7XG4gICAgICBpZiAoaW5wdXQuc3Vic3RyKHBlZyRjdXJyUG9zLCA3KSA9PT0gcGVnJGMzNCkge1xuICAgICAgICBzMSA9IHBlZyRjMzQ7XG4gICAgICAgIHBlZyRjdXJyUG9zICs9IDc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzMSA9IHBlZyRGQUlMRUQ7XG4gICAgICAgIGlmIChwZWckc2lsZW50RmFpbHMgPT09IDApIHsgcGVnJGZhaWwocGVnJGMzNSk7IH1cbiAgICAgIH1cbiAgICAgIGlmIChzMSAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICBzMiA9IHBlZyRwYXJzZV8oKTtcbiAgICAgICAgaWYgKHMyICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgczMgPSBwZWckcGFyc2VudW1iZXIoKTtcbiAgICAgICAgICBpZiAoczMgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgIHBlZyRyZXBvcnRlZFBvcyA9IHMwO1xuICAgICAgICAgICAgczEgPSBwZWckYzM2KHMzKTtcbiAgICAgICAgICAgIHMwID0gczE7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICAgICAgICBzMCA9IHBlZyRjMjtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgICBzMCA9IHBlZyRjMjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgczAgPSBwZWckYzI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwZWckcGFyc2VwbHVyYWxTdHlsZSgpIHtcbiAgICAgIHZhciBzMCwgczEsIHMyLCBzMywgczQ7XG5cbiAgICAgIHMwID0gcGVnJGN1cnJQb3M7XG4gICAgICBzMSA9IHBlZyRwYXJzZW9mZnNldCgpO1xuICAgICAgaWYgKHMxID09PSBwZWckRkFJTEVEKSB7XG4gICAgICAgIHMxID0gcGVnJGM5O1xuICAgICAgfVxuICAgICAgaWYgKHMxICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgIHMyID0gcGVnJHBhcnNlXygpO1xuICAgICAgICBpZiAoczIgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICBzMyA9IFtdO1xuICAgICAgICAgIHM0ID0gcGVnJHBhcnNlb3B0aW9uYWxGb3JtYXRQYXR0ZXJuKCk7XG4gICAgICAgICAgaWYgKHM0ICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICB3aGlsZSAoczQgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgICAgczMucHVzaChzNCk7XG4gICAgICAgICAgICAgIHM0ID0gcGVnJHBhcnNlb3B0aW9uYWxGb3JtYXRQYXR0ZXJuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHMzID0gcGVnJGMyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoczMgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgIHBlZyRyZXBvcnRlZFBvcyA9IHMwO1xuICAgICAgICAgICAgczEgPSBwZWckYzM3KHMxLCBzMyk7XG4gICAgICAgICAgICBzMCA9IHMxO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICAgICAgczAgPSBwZWckYzI7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICAgICAgczAgPSBwZWckYzI7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICAgIHMwID0gcGVnJGMyO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gczA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGVnJHBhcnNld3MoKSB7XG4gICAgICB2YXIgczAsIHMxO1xuXG4gICAgICBwZWckc2lsZW50RmFpbHMrKztcbiAgICAgIHMwID0gW107XG4gICAgICBpZiAocGVnJGMzOS50ZXN0KGlucHV0LmNoYXJBdChwZWckY3VyclBvcykpKSB7XG4gICAgICAgIHMxID0gaW5wdXQuY2hhckF0KHBlZyRjdXJyUG9zKTtcbiAgICAgICAgcGVnJGN1cnJQb3MrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHMxID0gcGVnJEZBSUxFRDtcbiAgICAgICAgaWYgKHBlZyRzaWxlbnRGYWlscyA9PT0gMCkgeyBwZWckZmFpbChwZWckYzQwKTsgfVxuICAgICAgfVxuICAgICAgaWYgKHMxICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgIHdoaWxlIChzMSAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgIHMwLnB1c2goczEpO1xuICAgICAgICAgIGlmIChwZWckYzM5LnRlc3QoaW5wdXQuY2hhckF0KHBlZyRjdXJyUG9zKSkpIHtcbiAgICAgICAgICAgIHMxID0gaW5wdXQuY2hhckF0KHBlZyRjdXJyUG9zKTtcbiAgICAgICAgICAgIHBlZyRjdXJyUG9zKys7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHMxID0gcGVnJEZBSUxFRDtcbiAgICAgICAgICAgIGlmIChwZWckc2lsZW50RmFpbHMgPT09IDApIHsgcGVnJGZhaWwocGVnJGM0MCk7IH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHMwID0gcGVnJGMyO1xuICAgICAgfVxuICAgICAgcGVnJHNpbGVudEZhaWxzLS07XG4gICAgICBpZiAoczAgPT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgczEgPSBwZWckRkFJTEVEO1xuICAgICAgICBpZiAocGVnJHNpbGVudEZhaWxzID09PSAwKSB7IHBlZyRmYWlsKHBlZyRjMzgpOyB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwZWckcGFyc2VfKCkge1xuICAgICAgdmFyIHMwLCBzMSwgczI7XG5cbiAgICAgIHBlZyRzaWxlbnRGYWlscysrO1xuICAgICAgczAgPSBwZWckY3VyclBvcztcbiAgICAgIHMxID0gW107XG4gICAgICBzMiA9IHBlZyRwYXJzZXdzKCk7XG4gICAgICB3aGlsZSAoczIgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgczEucHVzaChzMik7XG4gICAgICAgIHMyID0gcGVnJHBhcnNld3MoKTtcbiAgICAgIH1cbiAgICAgIGlmIChzMSAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICBzMSA9IGlucHV0LnN1YnN0cmluZyhzMCwgcGVnJGN1cnJQb3MpO1xuICAgICAgfVxuICAgICAgczAgPSBzMTtcbiAgICAgIHBlZyRzaWxlbnRGYWlscy0tO1xuICAgICAgaWYgKHMwID09PSBwZWckRkFJTEVEKSB7XG4gICAgICAgIHMxID0gcGVnJEZBSUxFRDtcbiAgICAgICAgaWYgKHBlZyRzaWxlbnRGYWlscyA9PT0gMCkgeyBwZWckZmFpbChwZWckYzQxKTsgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gczA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGVnJHBhcnNlZGlnaXQoKSB7XG4gICAgICB2YXIgczA7XG5cbiAgICAgIGlmIChwZWckYzQyLnRlc3QoaW5wdXQuY2hhckF0KHBlZyRjdXJyUG9zKSkpIHtcbiAgICAgICAgczAgPSBpbnB1dC5jaGFyQXQocGVnJGN1cnJQb3MpO1xuICAgICAgICBwZWckY3VyclBvcysrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgczAgPSBwZWckRkFJTEVEO1xuICAgICAgICBpZiAocGVnJHNpbGVudEZhaWxzID09PSAwKSB7IHBlZyRmYWlsKHBlZyRjNDMpOyB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwZWckcGFyc2VoZXhEaWdpdCgpIHtcbiAgICAgIHZhciBzMDtcblxuICAgICAgaWYgKHBlZyRjNDQudGVzdChpbnB1dC5jaGFyQXQocGVnJGN1cnJQb3MpKSkge1xuICAgICAgICBzMCA9IGlucHV0LmNoYXJBdChwZWckY3VyclBvcyk7XG4gICAgICAgIHBlZyRjdXJyUG9zKys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzMCA9IHBlZyRGQUlMRUQ7XG4gICAgICAgIGlmIChwZWckc2lsZW50RmFpbHMgPT09IDApIHsgcGVnJGZhaWwocGVnJGM0NSk7IH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHMwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBlZyRwYXJzZW51bWJlcigpIHtcbiAgICAgIHZhciBzMCwgczEsIHMyLCBzMywgczQsIHM1O1xuXG4gICAgICBzMCA9IHBlZyRjdXJyUG9zO1xuICAgICAgaWYgKGlucHV0LmNoYXJDb2RlQXQocGVnJGN1cnJQb3MpID09PSA0OCkge1xuICAgICAgICBzMSA9IHBlZyRjNDY7XG4gICAgICAgIHBlZyRjdXJyUG9zKys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzMSA9IHBlZyRGQUlMRUQ7XG4gICAgICAgIGlmIChwZWckc2lsZW50RmFpbHMgPT09IDApIHsgcGVnJGZhaWwocGVnJGM0Nyk7IH1cbiAgICAgIH1cbiAgICAgIGlmIChzMSA9PT0gcGVnJEZBSUxFRCkge1xuICAgICAgICBzMSA9IHBlZyRjdXJyUG9zO1xuICAgICAgICBzMiA9IHBlZyRjdXJyUG9zO1xuICAgICAgICBpZiAocGVnJGM0OC50ZXN0KGlucHV0LmNoYXJBdChwZWckY3VyclBvcykpKSB7XG4gICAgICAgICAgczMgPSBpbnB1dC5jaGFyQXQocGVnJGN1cnJQb3MpO1xuICAgICAgICAgIHBlZyRjdXJyUG9zKys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgczMgPSBwZWckRkFJTEVEO1xuICAgICAgICAgIGlmIChwZWckc2lsZW50RmFpbHMgPT09IDApIHsgcGVnJGZhaWwocGVnJGM0OSk7IH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoczMgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICBzNCA9IFtdO1xuICAgICAgICAgIHM1ID0gcGVnJHBhcnNlZGlnaXQoKTtcbiAgICAgICAgICB3aGlsZSAoczUgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgIHM0LnB1c2goczUpO1xuICAgICAgICAgICAgczUgPSBwZWckcGFyc2VkaWdpdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoczQgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgIHMzID0gW3MzLCBzNF07XG4gICAgICAgICAgICBzMiA9IHMzO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwZWckY3VyclBvcyA9IHMyO1xuICAgICAgICAgICAgczIgPSBwZWckYzI7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBlZyRjdXJyUG9zID0gczI7XG4gICAgICAgICAgczIgPSBwZWckYzI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHMyICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgczIgPSBpbnB1dC5zdWJzdHJpbmcoczEsIHBlZyRjdXJyUG9zKTtcbiAgICAgICAgfVxuICAgICAgICBzMSA9IHMyO1xuICAgICAgfVxuICAgICAgaWYgKHMxICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgIHBlZyRyZXBvcnRlZFBvcyA9IHMwO1xuICAgICAgICBzMSA9IHBlZyRjNTAoczEpO1xuICAgICAgfVxuICAgICAgczAgPSBzMTtcblxuICAgICAgcmV0dXJuIHMwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBlZyRwYXJzZWNoYXIoKSB7XG4gICAgICB2YXIgczAsIHMxLCBzMiwgczMsIHM0LCBzNSwgczYsIHM3O1xuXG4gICAgICBpZiAocGVnJGM1MS50ZXN0KGlucHV0LmNoYXJBdChwZWckY3VyclBvcykpKSB7XG4gICAgICAgIHMwID0gaW5wdXQuY2hhckF0KHBlZyRjdXJyUG9zKTtcbiAgICAgICAgcGVnJGN1cnJQb3MrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHMwID0gcGVnJEZBSUxFRDtcbiAgICAgICAgaWYgKHBlZyRzaWxlbnRGYWlscyA9PT0gMCkgeyBwZWckZmFpbChwZWckYzUyKTsgfVxuICAgICAgfVxuICAgICAgaWYgKHMwID09PSBwZWckRkFJTEVEKSB7XG4gICAgICAgIHMwID0gcGVnJGN1cnJQb3M7XG4gICAgICAgIGlmIChpbnB1dC5zdWJzdHIocGVnJGN1cnJQb3MsIDIpID09PSBwZWckYzUzKSB7XG4gICAgICAgICAgczEgPSBwZWckYzUzO1xuICAgICAgICAgIHBlZyRjdXJyUG9zICs9IDI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgczEgPSBwZWckRkFJTEVEO1xuICAgICAgICAgIGlmIChwZWckc2lsZW50RmFpbHMgPT09IDApIHsgcGVnJGZhaWwocGVnJGM1NCk7IH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoczEgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICBwZWckcmVwb3J0ZWRQb3MgPSBzMDtcbiAgICAgICAgICBzMSA9IHBlZyRjNTUoKTtcbiAgICAgICAgfVxuICAgICAgICBzMCA9IHMxO1xuICAgICAgICBpZiAoczAgPT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICBzMCA9IHBlZyRjdXJyUG9zO1xuICAgICAgICAgIGlmIChpbnB1dC5zdWJzdHIocGVnJGN1cnJQb3MsIDIpID09PSBwZWckYzU2KSB7XG4gICAgICAgICAgICBzMSA9IHBlZyRjNTY7XG4gICAgICAgICAgICBwZWckY3VyclBvcyArPSAyO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzMSA9IHBlZyRGQUlMRUQ7XG4gICAgICAgICAgICBpZiAocGVnJHNpbGVudEZhaWxzID09PSAwKSB7IHBlZyRmYWlsKHBlZyRjNTcpOyB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzMSAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgcGVnJHJlcG9ydGVkUG9zID0gczA7XG4gICAgICAgICAgICBzMSA9IHBlZyRjNTgoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgczAgPSBzMTtcbiAgICAgICAgICBpZiAoczAgPT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgIHMwID0gcGVnJGN1cnJQb3M7XG4gICAgICAgICAgICBpZiAoaW5wdXQuc3Vic3RyKHBlZyRjdXJyUG9zLCAyKSA9PT0gcGVnJGM1OSkge1xuICAgICAgICAgICAgICBzMSA9IHBlZyRjNTk7XG4gICAgICAgICAgICAgIHBlZyRjdXJyUG9zICs9IDI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzMSA9IHBlZyRGQUlMRUQ7XG4gICAgICAgICAgICAgIGlmIChwZWckc2lsZW50RmFpbHMgPT09IDApIHsgcGVnJGZhaWwocGVnJGM2MCk7IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzMSAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgICBwZWckcmVwb3J0ZWRQb3MgPSBzMDtcbiAgICAgICAgICAgICAgczEgPSBwZWckYzYxKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzMCA9IHMxO1xuICAgICAgICAgICAgaWYgKHMwID09PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICAgIHMwID0gcGVnJGN1cnJQb3M7XG4gICAgICAgICAgICAgIGlmIChpbnB1dC5zdWJzdHIocGVnJGN1cnJQb3MsIDIpID09PSBwZWckYzYyKSB7XG4gICAgICAgICAgICAgICAgczEgPSBwZWckYzYyO1xuICAgICAgICAgICAgICAgIHBlZyRjdXJyUG9zICs9IDI7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgczEgPSBwZWckRkFJTEVEO1xuICAgICAgICAgICAgICAgIGlmIChwZWckc2lsZW50RmFpbHMgPT09IDApIHsgcGVnJGZhaWwocGVnJGM2Myk7IH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoczEgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgICAgICBzMiA9IHBlZyRjdXJyUG9zO1xuICAgICAgICAgICAgICAgIHMzID0gcGVnJGN1cnJQb3M7XG4gICAgICAgICAgICAgICAgczQgPSBwZWckcGFyc2VoZXhEaWdpdCgpO1xuICAgICAgICAgICAgICAgIGlmIChzNCAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgICAgICAgczUgPSBwZWckcGFyc2VoZXhEaWdpdCgpO1xuICAgICAgICAgICAgICAgICAgaWYgKHM1ICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICAgICAgICAgIHM2ID0gcGVnJHBhcnNlaGV4RGlnaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHM2ICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICAgICAgICAgICAgczcgPSBwZWckcGFyc2VoZXhEaWdpdCgpO1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChzNyAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgczQgPSBbczQsIHM1LCBzNiwgczddO1xuICAgICAgICAgICAgICAgICAgICAgICAgczMgPSBzNDtcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMztcbiAgICAgICAgICAgICAgICAgICAgICAgIHMzID0gcGVnJGMyO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICBwZWckY3VyclBvcyA9IHMzO1xuICAgICAgICAgICAgICAgICAgICAgIHMzID0gcGVnJGMyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwZWckY3VyclBvcyA9IHMzO1xuICAgICAgICAgICAgICAgICAgICBzMyA9IHBlZyRjMjtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMztcbiAgICAgICAgICAgICAgICAgIHMzID0gcGVnJGMyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoczMgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgICAgICAgIHMzID0gaW5wdXQuc3Vic3RyaW5nKHMyLCBwZWckY3VyclBvcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHMyID0gczM7XG4gICAgICAgICAgICAgICAgaWYgKHMyICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICAgICAgICBwZWckcmVwb3J0ZWRQb3MgPSBzMDtcbiAgICAgICAgICAgICAgICAgIHMxID0gcGVnJGM2NChzMik7XG4gICAgICAgICAgICAgICAgICBzMCA9IHMxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICAgICAgICAgICAgczAgPSBwZWckYzI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICAgICAgICAgICAgczAgPSBwZWckYzI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHMwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBlZyRwYXJzZWNoYXJzKCkge1xuICAgICAgdmFyIHMwLCBzMSwgczI7XG5cbiAgICAgIHMwID0gcGVnJGN1cnJQb3M7XG4gICAgICBzMSA9IFtdO1xuICAgICAgczIgPSBwZWckcGFyc2VjaGFyKCk7XG4gICAgICBpZiAoczIgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgd2hpbGUgKHMyICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgczEucHVzaChzMik7XG4gICAgICAgICAgczIgPSBwZWckcGFyc2VjaGFyKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHMxID0gcGVnJGMyO1xuICAgICAgfVxuICAgICAgaWYgKHMxICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgIHBlZyRyZXBvcnRlZFBvcyA9IHMwO1xuICAgICAgICBzMSA9IHBlZyRjNjUoczEpO1xuICAgICAgfVxuICAgICAgczAgPSBzMTtcblxuICAgICAgcmV0dXJuIHMwO1xuICAgIH1cblxuICAgIHBlZyRyZXN1bHQgPSBwZWckc3RhcnRSdWxlRnVuY3Rpb24oKTtcblxuICAgIGlmIChwZWckcmVzdWx0ICE9PSBwZWckRkFJTEVEICYmIHBlZyRjdXJyUG9zID09PSBpbnB1dC5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBwZWckcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocGVnJHJlc3VsdCAhPT0gcGVnJEZBSUxFRCAmJiBwZWckY3VyclBvcyA8IGlucHV0Lmxlbmd0aCkge1xuICAgICAgICBwZWckZmFpbCh7IHR5cGU6IFwiZW5kXCIsIGRlc2NyaXB0aW9uOiBcImVuZCBvZiBpbnB1dFwiIH0pO1xuICAgICAgfVxuXG4gICAgICB0aHJvdyBwZWckYnVpbGRFeGNlcHRpb24obnVsbCwgcGVnJG1heEZhaWxFeHBlY3RlZCwgcGVnJG1heEZhaWxQb3MpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgU3ludGF4RXJyb3I6IFN5bnRheEVycm9yLFxuICAgIHBhcnNlOiAgICAgICBwYXJzZVxuICB9O1xufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFyc2VyLmpzLm1hcCIsIi8qIGpzaGludCBub2RlOnRydWUgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgSW50bFJlbGF0aXZlRm9ybWF0ID0gcmVxdWlyZSgnLi9saWIvbWFpbicpWydkZWZhdWx0J107XG5cbi8vIEFkZCBhbGwgbG9jYWxlIGRhdGEgdG8gYEludGxSZWxhdGl2ZUZvcm1hdGAuIFRoaXMgbW9kdWxlIHdpbGwgYmUgaWdub3JlZCB3aGVuXG4vLyBidW5kbGluZyBmb3IgdGhlIGJyb3dzZXIgd2l0aCBCcm93c2VyaWZ5L1dlYnBhY2suXG5yZXF1aXJlKCcuL2xpYi9sb2NhbGVzJyk7XG5cbi8vIFJlLWV4cG9ydCBgSW50bFJlbGF0aXZlRm9ybWF0YCBhcyB0aGUgQ29tbW9uSlMgZGVmYXVsdCBleHBvcnRzIHdpdGggYWxsIHRoZVxuLy8gbG9jYWxlIGRhdGEgcmVnaXN0ZXJlZCwgYW5kIHdpdGggRW5nbGlzaCBzZXQgYXMgdGhlIGRlZmF1bHQgbG9jYWxlLiBEZWZpbmVcbi8vIHRoZSBgZGVmYXVsdGAgcHJvcCBmb3IgdXNlIHdpdGggb3RoZXIgY29tcGlsZWQgRVM2IE1vZHVsZXMuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBJbnRsUmVsYXRpdmVGb3JtYXQ7XG5leHBvcnRzWydkZWZhdWx0J10gPSBleHBvcnRzO1xuIiwiLypcbkNvcHlyaWdodCAoYykgMjAxNCwgWWFob28hIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbkNvcHlyaWdodHMgbGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgTGljZW5zZS5cblNlZSB0aGUgYWNjb21wYW55aW5nIExJQ0VOU0UgZmlsZSBmb3IgdGVybXMuXG4qL1xuXG4vKiBqc2xpbnQgZXNuZXh0OiB0cnVlICovXG5cblwidXNlIHN0cmljdFwiO1xudmFyIGludGwkbWVzc2FnZWZvcm1hdCQkID0gcmVxdWlyZShcImludGwtbWVzc2FnZWZvcm1hdFwiKSwgc3JjJGRpZmYkJCA9IHJlcXVpcmUoXCIuL2RpZmZcIiksIHNyYyRlczUkJCA9IHJlcXVpcmUoXCIuL2VzNVwiKTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gUmVsYXRpdmVGb3JtYXQ7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbnZhciBGSUVMRFMgPSBbJ3NlY29uZCcsICdtaW51dGUnLCAnaG91cicsICdkYXknLCAnbW9udGgnLCAneWVhciddO1xudmFyIFNUWUxFUyA9IFsnYmVzdCBmaXQnLCAnbnVtZXJpYyddO1xuXG4vLyAtLSBSZWxhdGl2ZUZvcm1hdCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBSZWxhdGl2ZUZvcm1hdChsb2NhbGVzLCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAvLyBNYWtlIGEgY29weSBvZiBgbG9jYWxlc2AgaWYgaXQncyBhbiBhcnJheSwgc28gdGhhdCBpdCBkb2Vzbid0IGNoYW5nZVxuICAgIC8vIHNpbmNlIGl0J3MgdXNlZCBsYXppbHkuXG4gICAgaWYgKHNyYyRlczUkJC5pc0FycmF5KGxvY2FsZXMpKSB7XG4gICAgICAgIGxvY2FsZXMgPSBsb2NhbGVzLmNvbmNhdCgpO1xuICAgIH1cblxuICAgIHNyYyRlczUkJC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnX2xvY2FsZScsIHt2YWx1ZTogdGhpcy5fcmVzb2x2ZUxvY2FsZShsb2NhbGVzKX0pO1xuICAgIHNyYyRlczUkJC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnX29wdGlvbnMnLCB7dmFsdWU6IHtcbiAgICAgICAgc3R5bGU6IHRoaXMuX3Jlc29sdmVTdHlsZShvcHRpb25zLnN0eWxlKSxcbiAgICAgICAgdW5pdHM6IHRoaXMuX2lzVmFsaWRVbml0cyhvcHRpb25zLnVuaXRzKSAmJiBvcHRpb25zLnVuaXRzXG4gICAgfX0pO1xuXG4gICAgc3JjJGVzNSQkLmRlZmluZVByb3BlcnR5KHRoaXMsICdfbG9jYWxlcycsIHt2YWx1ZTogbG9jYWxlc30pO1xuICAgIHNyYyRlczUkJC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnX2ZpZWxkcycsIHt2YWx1ZTogdGhpcy5fZmluZEZpZWxkcyh0aGlzLl9sb2NhbGUpfSk7XG4gICAgc3JjJGVzNSQkLmRlZmluZVByb3BlcnR5KHRoaXMsICdfbWVzc2FnZXMnLCB7dmFsdWU6IHNyYyRlczUkJC5vYmpDcmVhdGUobnVsbCl9KTtcblxuICAgIC8vIFwiQmluZFwiIGBmb3JtYXQoKWAgbWV0aG9kIHRvIGB0aGlzYCBzbyBpdCBjYW4gYmUgcGFzc2VkIGJ5IHJlZmVyZW5jZSBsaWtlXG4gICAgLy8gdGhlIG90aGVyIGBJbnRsYCBBUElzLlxuICAgIHZhciByZWxhdGl2ZUZvcm1hdCA9IHRoaXM7XG4gICAgdGhpcy5mb3JtYXQgPSBmdW5jdGlvbiBmb3JtYXQoZGF0ZSwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gcmVsYXRpdmVGb3JtYXQuX2Zvcm1hdChkYXRlLCBvcHRpb25zKTtcbiAgICB9O1xufVxuXG4vLyBEZWZpbmUgaW50ZXJuYWwgcHJpdmF0ZSBwcm9wZXJ0aWVzIGZvciBkZWFsaW5nIHdpdGggbG9jYWxlIGRhdGEuXG5zcmMkZXM1JCQuZGVmaW5lUHJvcGVydHkoUmVsYXRpdmVGb3JtYXQsICdfX2xvY2FsZURhdGFfXycsIHt2YWx1ZTogc3JjJGVzNSQkLm9iakNyZWF0ZShudWxsKX0pO1xuc3JjJGVzNSQkLmRlZmluZVByb3BlcnR5KFJlbGF0aXZlRm9ybWF0LCAnX19hZGRMb2NhbGVEYXRhJywge3ZhbHVlOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgIGlmICghKGRhdGEgJiYgZGF0YS5sb2NhbGUpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICdMb2NhbGUgZGF0YSBwcm92aWRlZCB0byBJbnRsUmVsYXRpdmVGb3JtYXQgaXMgbWlzc2luZyBhICcgK1xuICAgICAgICAgICAgJ2Bsb2NhbGVgIHByb3BlcnR5IHZhbHVlJ1xuICAgICAgICApO1xuICAgIH1cblxuICAgIFJlbGF0aXZlRm9ybWF0Ll9fbG9jYWxlRGF0YV9fW2RhdGEubG9jYWxlLnRvTG93ZXJDYXNlKCldID0gZGF0YTtcblxuICAgIC8vIEFkZCBkYXRhIHRvIEludGxNZXNzYWdlRm9ybWF0LlxuICAgIGludGwkbWVzc2FnZWZvcm1hdCQkW1wiZGVmYXVsdFwiXS5fX2FkZExvY2FsZURhdGEoZGF0YSk7XG59fSk7XG5cbi8vIERlZmluZSBwdWJsaWMgYGRlZmF1bHRMb2NhbGVgIHByb3BlcnR5IHdoaWNoIGNhbiBiZSBzZXQgYnkgdGhlIGRldmVsb3Blciwgb3Jcbi8vIGl0IHdpbGwgYmUgc2V0IHdoZW4gdGhlIGZpcnN0IFJlbGF0aXZlRm9ybWF0IGluc3RhbmNlIGlzIGNyZWF0ZWQgYnlcbi8vIGxldmVyYWdpbmcgdGhlIHJlc29sdmVkIGxvY2FsZSBmcm9tIGBJbnRsYC5cbnNyYyRlczUkJC5kZWZpbmVQcm9wZXJ0eShSZWxhdGl2ZUZvcm1hdCwgJ2RlZmF1bHRMb2NhbGUnLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICB3cml0YWJsZSAgOiB0cnVlLFxuICAgIHZhbHVlICAgICA6IHVuZGVmaW5lZFxufSk7XG5cbi8vIERlZmluZSBwdWJsaWMgYHRocmVzaG9sZHNgIHByb3BlcnR5IHdoaWNoIGNhbiBiZSBzZXQgYnkgdGhlIGRldmVsb3BlciwgYW5kXG4vLyBkZWZhdWx0cyB0byByZWxhdGl2ZSB0aW1lIHRocmVzaG9sZHMgZnJvbSBtb21lbnQuanMuXG5zcmMkZXM1JCQuZGVmaW5lUHJvcGVydHkoUmVsYXRpdmVGb3JtYXQsICd0aHJlc2hvbGRzJywge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG5cbiAgICB2YWx1ZToge1xuICAgICAgICBzZWNvbmQ6IDQ1LCAgLy8gc2Vjb25kcyB0byBtaW51dGVcbiAgICAgICAgbWludXRlOiA0NSwgIC8vIG1pbnV0ZXMgdG8gaG91clxuICAgICAgICBob3VyICA6IDIyLCAgLy8gaG91cnMgdG8gZGF5XG4gICAgICAgIGRheSAgIDogMjYsICAvLyBkYXlzIHRvIG1vbnRoXG4gICAgICAgIG1vbnRoIDogMTEgICAvLyBtb250aHMgdG8geWVhclxuICAgIH1cbn0pO1xuXG5SZWxhdGl2ZUZvcm1hdC5wcm90b3R5cGUucmVzb2x2ZWRPcHRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGxvY2FsZTogdGhpcy5fbG9jYWxlLFxuICAgICAgICBzdHlsZSA6IHRoaXMuX29wdGlvbnMuc3R5bGUsXG4gICAgICAgIHVuaXRzIDogdGhpcy5fb3B0aW9ucy51bml0c1xuICAgIH07XG59O1xuXG5SZWxhdGl2ZUZvcm1hdC5wcm90b3R5cGUuX2NvbXBpbGVNZXNzYWdlID0gZnVuY3Rpb24gKHVuaXRzKSB7XG4gICAgLy8gYHRoaXMuX2xvY2FsZXNgIGlzIHRoZSBvcmlnaW5hbCBzZXQgb2YgbG9jYWxlcyB0aGUgdXNlciBzcGVjaWZpZWQgdG8gdGhlXG4gICAgLy8gY29uc3RydWN0b3IsIHdoaWxlIGB0aGlzLl9sb2NhbGVgIGlzIHRoZSByZXNvbHZlZCByb290IGxvY2FsZS5cbiAgICB2YXIgbG9jYWxlcyAgICAgICAgPSB0aGlzLl9sb2NhbGVzO1xuICAgIHZhciByZXNvbHZlZExvY2FsZSA9IHRoaXMuX2xvY2FsZTtcblxuICAgIHZhciBmaWVsZCAgICAgICAgPSB0aGlzLl9maWVsZHNbdW5pdHNdO1xuICAgIHZhciByZWxhdGl2ZVRpbWUgPSBmaWVsZC5yZWxhdGl2ZVRpbWU7XG4gICAgdmFyIGZ1dHVyZSAgICAgICA9ICcnO1xuICAgIHZhciBwYXN0ICAgICAgICAgPSAnJztcbiAgICB2YXIgaTtcblxuICAgIGZvciAoaSBpbiByZWxhdGl2ZVRpbWUuZnV0dXJlKSB7XG4gICAgICAgIGlmIChyZWxhdGl2ZVRpbWUuZnV0dXJlLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICBmdXR1cmUgKz0gJyAnICsgaSArICcgeycgK1xuICAgICAgICAgICAgICAgIHJlbGF0aXZlVGltZS5mdXR1cmVbaV0ucmVwbGFjZSgnezB9JywgJyMnKSArICd9JztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSBpbiByZWxhdGl2ZVRpbWUucGFzdCkge1xuICAgICAgICBpZiAocmVsYXRpdmVUaW1lLnBhc3QuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgIHBhc3QgKz0gJyAnICsgaSArICcgeycgK1xuICAgICAgICAgICAgICAgIHJlbGF0aXZlVGltZS5wYXN0W2ldLnJlcGxhY2UoJ3swfScsICcjJykgKyAnfSc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgbWVzc2FnZSA9ICd7d2hlbiwgc2VsZWN0LCBmdXR1cmUge3swLCBwbHVyYWwsICcgKyBmdXR1cmUgKyAnfX0nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwYXN0IHt7MCwgcGx1cmFsLCAnICsgcGFzdCArICd9fX0nO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBzeW50aGV0aWMgSW50bE1lc3NhZ2VGb3JtYXQgaW5zdGFuY2UgdXNpbmcgdGhlIG9yaWdpbmFsXG4gICAgLy8gbG9jYWxlcyB2YWx1ZSBzcGVjaWZpZWQgYnkgdGhlIHVzZXIgd2hlbiBjb25zdHJ1Y3RpbmcgdGhlIHRoZSBwYXJlbnRcbiAgICAvLyBJbnRsUmVsYXRpdmVGb3JtYXQgaW5zdGFuY2UuXG4gICAgcmV0dXJuIG5ldyBpbnRsJG1lc3NhZ2Vmb3JtYXQkJFtcImRlZmF1bHRcIl0obWVzc2FnZSwgbG9jYWxlcyk7XG59O1xuXG5SZWxhdGl2ZUZvcm1hdC5wcm90b3R5cGUuX2dldE1lc3NhZ2UgPSBmdW5jdGlvbiAodW5pdHMpIHtcbiAgICB2YXIgbWVzc2FnZXMgPSB0aGlzLl9tZXNzYWdlcztcblxuICAgIC8vIENyZWF0ZSBhIG5ldyBzeW50aGV0aWMgbWVzc2FnZSBiYXNlZCBvbiB0aGUgbG9jYWxlIGRhdGEgZnJvbSBDTERSLlxuICAgIGlmICghbWVzc2FnZXNbdW5pdHNdKSB7XG4gICAgICAgIG1lc3NhZ2VzW3VuaXRzXSA9IHRoaXMuX2NvbXBpbGVNZXNzYWdlKHVuaXRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZXNbdW5pdHNdO1xufTtcblxuUmVsYXRpdmVGb3JtYXQucHJvdG90eXBlLl9nZXRSZWxhdGl2ZVVuaXRzID0gZnVuY3Rpb24gKGRpZmYsIHVuaXRzKSB7XG4gICAgdmFyIGZpZWxkID0gdGhpcy5fZmllbGRzW3VuaXRzXTtcblxuICAgIGlmIChmaWVsZC5yZWxhdGl2ZSkge1xuICAgICAgICByZXR1cm4gZmllbGQucmVsYXRpdmVbZGlmZl07XG4gICAgfVxufTtcblxuUmVsYXRpdmVGb3JtYXQucHJvdG90eXBlLl9maW5kRmllbGRzID0gZnVuY3Rpb24gKGxvY2FsZSkge1xuICAgIHZhciBsb2NhbGVEYXRhID0gUmVsYXRpdmVGb3JtYXQuX19sb2NhbGVEYXRhX187XG4gICAgdmFyIGRhdGEgICAgICAgPSBsb2NhbGVEYXRhW2xvY2FsZS50b0xvd2VyQ2FzZSgpXTtcblxuICAgIC8vIFRoZSBsb2NhbGUgZGF0YSBpcyBkZS1kdXBsaWNhdGVkLCBzbyB3ZSBoYXZlIHRvIHRyYXZlcnNlIHRoZSBsb2NhbGUnc1xuICAgIC8vIGhpZXJhcmNoeSB1bnRpbCB3ZSBmaW5kIGBmaWVsZHNgIHRvIHJldHVybi5cbiAgICB3aGlsZSAoZGF0YSkge1xuICAgICAgICBpZiAoZGF0YS5maWVsZHMpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhLmZpZWxkcztcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEgPSBkYXRhLnBhcmVudExvY2FsZSAmJiBsb2NhbGVEYXRhW2RhdGEucGFyZW50TG9jYWxlLnRvTG93ZXJDYXNlKCldO1xuICAgIH1cblxuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ0xvY2FsZSBkYXRhIGFkZGVkIHRvIEludGxSZWxhdGl2ZUZvcm1hdCBpcyBtaXNzaW5nIGBmaWVsZHNgIGZvciA6JyArXG4gICAgICAgIGxvY2FsZVxuICAgICk7XG59O1xuXG5SZWxhdGl2ZUZvcm1hdC5wcm90b3R5cGUuX2Zvcm1hdCA9IGZ1bmN0aW9uIChkYXRlLCBvcHRpb25zKSB7XG4gICAgdmFyIG5vdyA9IG9wdGlvbnMgJiYgb3B0aW9ucy5ub3cgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubm93IDogc3JjJGVzNSQkLmRhdGVOb3coKTtcblxuICAgIGlmIChkYXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZGF0ZSA9IG5vdztcbiAgICB9XG5cbiAgICAvLyBEZXRlcm1pbmUgaWYgdGhlIGBkYXRlYCBhbmQgb3B0aW9uYWwgYG5vd2AgdmFsdWVzIGFyZSB2YWxpZCwgYW5kIHRocm93IGFcbiAgICAvLyBzaW1pbGFyIGVycm9yIHRvIHdoYXQgYEludGwuRGF0ZVRpbWVGb3JtYXQjZm9ybWF0KClgIHdvdWxkIHRocm93LlxuICAgIGlmICghaXNGaW5pdGUobm93KSkge1xuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcbiAgICAgICAgICAgICdUaGUgYG5vd2Agb3B0aW9uIHByb3ZpZGVkIHRvIEludGxSZWxhdGl2ZUZvcm1hdCNmb3JtYXQoKSBpcyBub3QgJyArXG4gICAgICAgICAgICAnaW4gdmFsaWQgcmFuZ2UuJ1xuICAgICAgICApO1xuICAgIH1cblxuICAgIGlmICghaXNGaW5pdGUoZGF0ZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXG4gICAgICAgICAgICAnVGhlIGRhdGUgdmFsdWUgcHJvdmlkZWQgdG8gSW50bFJlbGF0aXZlRm9ybWF0I2Zvcm1hdCgpIGlzIG5vdCAnICtcbiAgICAgICAgICAgICdpbiB2YWxpZCByYW5nZS4nXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgdmFyIGRpZmZSZXBvcnQgID0gc3JjJGRpZmYkJFtcImRlZmF1bHRcIl0obm93LCBkYXRlKTtcbiAgICB2YXIgdW5pdHMgICAgICAgPSB0aGlzLl9vcHRpb25zLnVuaXRzIHx8IHRoaXMuX3NlbGVjdFVuaXRzKGRpZmZSZXBvcnQpO1xuICAgIHZhciBkaWZmSW5Vbml0cyA9IGRpZmZSZXBvcnRbdW5pdHNdO1xuXG4gICAgaWYgKHRoaXMuX29wdGlvbnMuc3R5bGUgIT09ICdudW1lcmljJykge1xuICAgICAgICB2YXIgcmVsYXRpdmVVbml0cyA9IHRoaXMuX2dldFJlbGF0aXZlVW5pdHMoZGlmZkluVW5pdHMsIHVuaXRzKTtcbiAgICAgICAgaWYgKHJlbGF0aXZlVW5pdHMpIHtcbiAgICAgICAgICAgIHJldHVybiByZWxhdGl2ZVVuaXRzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2dldE1lc3NhZ2UodW5pdHMpLmZvcm1hdCh7XG4gICAgICAgICcwJyA6IE1hdGguYWJzKGRpZmZJblVuaXRzKSxcbiAgICAgICAgd2hlbjogZGlmZkluVW5pdHMgPCAwID8gJ3Bhc3QnIDogJ2Z1dHVyZSdcbiAgICB9KTtcbn07XG5cblJlbGF0aXZlRm9ybWF0LnByb3RvdHlwZS5faXNWYWxpZFVuaXRzID0gZnVuY3Rpb24gKHVuaXRzKSB7XG4gICAgaWYgKCF1bml0cyB8fCBzcmMkZXM1JCQuYXJySW5kZXhPZi5jYWxsKEZJRUxEUywgdW5pdHMpID49IDApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB1bml0cyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdmFyIHN1Z2dlc3Rpb24gPSAvcyQvLnRlc3QodW5pdHMpICYmIHVuaXRzLnN1YnN0cigwLCB1bml0cy5sZW5ndGggLSAxKTtcbiAgICAgICAgaWYgKHN1Z2dlc3Rpb24gJiYgc3JjJGVzNSQkLmFyckluZGV4T2YuY2FsbChGSUVMRFMsIHN1Z2dlc3Rpb24pID49IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICAnXCInICsgdW5pdHMgKyAnXCIgaXMgbm90IGEgdmFsaWQgSW50bFJlbGF0aXZlRm9ybWF0IGB1bml0c2AgJyArXG4gICAgICAgICAgICAgICAgJ3ZhbHVlLCBkaWQgeW91IG1lYW46ICcgKyBzdWdnZXN0aW9uXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnXCInICsgdW5pdHMgKyAnXCIgaXMgbm90IGEgdmFsaWQgSW50bFJlbGF0aXZlRm9ybWF0IGB1bml0c2AgdmFsdWUsIGl0ICcgK1xuICAgICAgICAnbXVzdCBiZSBvbmUgb2Y6IFwiJyArIEZJRUxEUy5qb2luKCdcIiwgXCInKSArICdcIidcbiAgICApO1xufTtcblxuUmVsYXRpdmVGb3JtYXQucHJvdG90eXBlLl9yZXNvbHZlTG9jYWxlID0gZnVuY3Rpb24gKGxvY2FsZXMpIHtcbiAgICBpZiAodHlwZW9mIGxvY2FsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGxvY2FsZXMgPSBbbG9jYWxlc107XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIGEgY29weSBvZiB0aGUgYXJyYXkgc28gd2UgY2FuIHB1c2ggb24gdGhlIGRlZmF1bHQgbG9jYWxlLlxuICAgIGxvY2FsZXMgPSAobG9jYWxlcyB8fCBbXSkuY29uY2F0KFJlbGF0aXZlRm9ybWF0LmRlZmF1bHRMb2NhbGUpO1xuXG4gICAgdmFyIGxvY2FsZURhdGEgPSBSZWxhdGl2ZUZvcm1hdC5fX2xvY2FsZURhdGFfXztcbiAgICB2YXIgaSwgbGVuLCBsb2NhbGVQYXJ0cywgZGF0YTtcblxuICAgIC8vIFVzaW5nIHRoZSBzZXQgb2YgbG9jYWxlcyArIHRoZSBkZWZhdWx0IGxvY2FsZSwgd2UgbG9vayBmb3IgdGhlIGZpcnN0IG9uZVxuICAgIC8vIHdoaWNoIHRoYXQgaGFzIGJlZW4gcmVnaXN0ZXJlZC4gV2hlbiBkYXRhIGRvZXMgbm90IGV4aXN0IGZvciBhIGxvY2FsZSwgd2VcbiAgICAvLyB0cmF2ZXJzZSBpdHMgYW5jZXN0b3JzIHRvIGZpbmQgc29tZXRoaW5nIHRoYXQncyBiZWVuIHJlZ2lzdGVyZWQgd2l0aGluXG4gICAgLy8gaXRzIGhpZXJhcmNoeSBvZiBsb2NhbGVzLiBTaW5jZSB3ZSBsYWNrIHRoZSBwcm9wZXIgYHBhcmVudExvY2FsZWAgZGF0YVxuICAgIC8vIGhlcmUsIHdlIG11c3QgdGFrZSBhIG5haXZlIGFwcHJvYWNoIHRvIHRyYXZlcnNhbC5cbiAgICBmb3IgKGkgPSAwLCBsZW4gPSBsb2NhbGVzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgIGxvY2FsZVBhcnRzID0gbG9jYWxlc1tpXS50b0xvd2VyQ2FzZSgpLnNwbGl0KCctJyk7XG5cbiAgICAgICAgd2hpbGUgKGxvY2FsZVBhcnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgZGF0YSA9IGxvY2FsZURhdGFbbG9jYWxlUGFydHMuam9pbignLScpXTtcbiAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgLy8gUmV0dXJuIHRoZSBub3JtYWxpemVkIGxvY2FsZSBzdHJpbmc7IGUuZy4sIHdlIHJldHVybiBcImVuLVVTXCIsXG4gICAgICAgICAgICAgICAgLy8gaW5zdGVhZCBvZiBcImVuLXVzXCIuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEubG9jYWxlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsb2NhbGVQYXJ0cy5wb3AoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBkZWZhdWx0TG9jYWxlID0gbG9jYWxlcy5wb3AoKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdObyBsb2NhbGUgZGF0YSBoYXMgYmVlbiBhZGRlZCB0byBJbnRsUmVsYXRpdmVGb3JtYXQgZm9yOiAnICtcbiAgICAgICAgbG9jYWxlcy5qb2luKCcsICcpICsgJywgb3IgdGhlIGRlZmF1bHQgbG9jYWxlOiAnICsgZGVmYXVsdExvY2FsZVxuICAgICk7XG59O1xuXG5SZWxhdGl2ZUZvcm1hdC5wcm90b3R5cGUuX3Jlc29sdmVTdHlsZSA9IGZ1bmN0aW9uIChzdHlsZSkge1xuICAgIC8vIERlZmF1bHQgdG8gXCJiZXN0IGZpdFwiIHN0eWxlLlxuICAgIGlmICghc3R5bGUpIHtcbiAgICAgICAgcmV0dXJuIFNUWUxFU1swXTtcbiAgICB9XG5cbiAgICBpZiAoc3JjJGVzNSQkLmFyckluZGV4T2YuY2FsbChTVFlMRVMsIHN0eWxlKSA+PSAwKSB7XG4gICAgICAgIHJldHVybiBzdHlsZTtcbiAgICB9XG5cbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdcIicgKyBzdHlsZSArICdcIiBpcyBub3QgYSB2YWxpZCBJbnRsUmVsYXRpdmVGb3JtYXQgYHN0eWxlYCB2YWx1ZSwgaXQgJyArXG4gICAgICAgICdtdXN0IGJlIG9uZSBvZjogXCInICsgU1RZTEVTLmpvaW4oJ1wiLCBcIicpICsgJ1wiJ1xuICAgICk7XG59O1xuXG5SZWxhdGl2ZUZvcm1hdC5wcm90b3R5cGUuX3NlbGVjdFVuaXRzID0gZnVuY3Rpb24gKGRpZmZSZXBvcnQpIHtcbiAgICB2YXIgaSwgbCwgdW5pdHM7XG5cbiAgICBmb3IgKGkgPSAwLCBsID0gRklFTERTLmxlbmd0aDsgaSA8IGw7IGkgKz0gMSkge1xuICAgICAgICB1bml0cyA9IEZJRUxEU1tpXTtcblxuICAgICAgICBpZiAoTWF0aC5hYnMoZGlmZlJlcG9ydFt1bml0c10pIDwgUmVsYXRpdmVGb3JtYXQudGhyZXNob2xkc1t1bml0c10pIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaXRzO1xufTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29yZS5qcy5tYXAiLCIvKlxuQ29weXJpZ2h0IChjKSAyMDE0LCBZYWhvbyEgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuQ29weXJpZ2h0cyBsaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBMaWNlbnNlLlxuU2VlIHRoZSBhY2NvbXBhbnlpbmcgTElDRU5TRSBmaWxlIGZvciB0ZXJtcy5cbiovXG5cbi8qIGpzbGludCBlc25leHQ6IHRydWUgKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciByb3VuZCA9IE1hdGgucm91bmQ7XG5cbmZ1bmN0aW9uIGRheXNUb1llYXJzKGRheXMpIHtcbiAgICAvLyA0MDAgeWVhcnMgaGF2ZSAxNDYwOTcgZGF5cyAodGFraW5nIGludG8gYWNjb3VudCBsZWFwIHllYXIgcnVsZXMpXG4gICAgcmV0dXJuIGRheXMgKiA0MDAgLyAxNDYwOTc7XG59XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKGZyb20sIHRvKSB7XG4gICAgLy8gQ29udmVydCB0byBtcyB0aW1lc3RhbXBzLlxuICAgIGZyb20gPSArZnJvbTtcbiAgICB0byAgID0gK3RvO1xuXG4gICAgdmFyIG1pbGxpc2Vjb25kID0gcm91bmQodG8gLSBmcm9tKSxcbiAgICAgICAgc2Vjb25kICAgICAgPSByb3VuZChtaWxsaXNlY29uZCAvIDEwMDApLFxuICAgICAgICBtaW51dGUgICAgICA9IHJvdW5kKHNlY29uZCAvIDYwKSxcbiAgICAgICAgaG91ciAgICAgICAgPSByb3VuZChtaW51dGUgLyA2MCksXG4gICAgICAgIGRheSAgICAgICAgID0gcm91bmQoaG91ciAvIDI0KSxcbiAgICAgICAgd2VlayAgICAgICAgPSByb3VuZChkYXkgLyA3KTtcblxuICAgIHZhciByYXdZZWFycyA9IGRheXNUb1llYXJzKGRheSksXG4gICAgICAgIG1vbnRoICAgID0gcm91bmQocmF3WWVhcnMgKiAxMiksXG4gICAgICAgIHllYXIgICAgID0gcm91bmQocmF3WWVhcnMpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWlsbGlzZWNvbmQ6IG1pbGxpc2Vjb25kLFxuICAgICAgICBzZWNvbmQgICAgIDogc2Vjb25kLFxuICAgICAgICBtaW51dGUgICAgIDogbWludXRlLFxuICAgICAgICBob3VyICAgICAgIDogaG91cixcbiAgICAgICAgZGF5ICAgICAgICA6IGRheSxcbiAgICAgICAgd2VlayAgICAgICA6IHdlZWssXG4gICAgICAgIG1vbnRoICAgICAgOiBtb250aCxcbiAgICAgICAgeWVhciAgICAgICA6IHllYXJcbiAgICB9O1xufTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGlmZi5qcy5tYXAiLCIvKlxuQ29weXJpZ2h0IChjKSAyMDE0LCBZYWhvbyEgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuQ29weXJpZ2h0cyBsaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBMaWNlbnNlLlxuU2VlIHRoZSBhY2NvbXBhbnlpbmcgTElDRU5TRSBmaWxlIGZvciB0ZXJtcy5cbiovXG5cbi8qIGpzbGludCBlc25leHQ6IHRydWUgKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIFB1cnBvc2VseSB1c2luZyB0aGUgc2FtZSBpbXBsZW1lbnRhdGlvbiBhcyB0aGUgSW50bC5qcyBgSW50bGAgcG9seWZpbGwuXG4vLyBDb3B5cmlnaHQgMjAxMyBBbmR5IEVhcm5zaGF3LCBNSVQgTGljZW5zZVxuXG52YXIgaG9wID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbnZhciByZWFsRGVmaW5lUHJvcCA9IChmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHsgcmV0dXJuICEhT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHt9KTsgfVxuICAgIGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfVxufSkoKTtcblxudmFyIGVzMyA9ICFyZWFsRGVmaW5lUHJvcCAmJiAhT2JqZWN0LnByb3RvdHlwZS5fX2RlZmluZUdldHRlcl9fO1xuXG52YXIgZGVmaW5lUHJvcGVydHkgPSByZWFsRGVmaW5lUHJvcCA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6XG4gICAgICAgIGZ1bmN0aW9uIChvYmosIG5hbWUsIGRlc2MpIHtcblxuICAgIGlmICgnZ2V0JyBpbiBkZXNjICYmIG9iai5fX2RlZmluZUdldHRlcl9fKSB7XG4gICAgICAgIG9iai5fX2RlZmluZUdldHRlcl9fKG5hbWUsIGRlc2MuZ2V0KTtcbiAgICB9IGVsc2UgaWYgKCFob3AuY2FsbChvYmosIG5hbWUpIHx8ICd2YWx1ZScgaW4gZGVzYykge1xuICAgICAgICBvYmpbbmFtZV0gPSBkZXNjLnZhbHVlO1xuICAgIH1cbn07XG5cbnZhciBvYmpDcmVhdGUgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIChwcm90bywgcHJvcHMpIHtcbiAgICB2YXIgb2JqLCBrO1xuXG4gICAgZnVuY3Rpb24gRigpIHt9XG4gICAgRi5wcm90b3R5cGUgPSBwcm90bztcbiAgICBvYmogPSBuZXcgRigpO1xuXG4gICAgZm9yIChrIGluIHByb3BzKSB7XG4gICAgICAgIGlmIChob3AuY2FsbChwcm9wcywgaykpIHtcbiAgICAgICAgICAgIGRlZmluZVByb3BlcnR5KG9iaiwgaywgcHJvcHNba10pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbn07XG5cbnZhciBhcnJJbmRleE9mID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2YgfHwgZnVuY3Rpb24gKHNlYXJjaCwgZnJvbUluZGV4KSB7XG4gICAgLypqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cbiAgICB2YXIgYXJyID0gdGhpcztcbiAgICBpZiAoIWFyci5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSBmcm9tSW5kZXggfHwgMCwgbWF4ID0gYXJyLmxlbmd0aDsgaSA8IG1heDsgaSsrKSB7XG4gICAgICAgIGlmIChhcnJbaV0gPT09IHNlYXJjaCkge1xuICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gLTE7XG59O1xuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuXG52YXIgZGF0ZU5vdyA9IERhdGUubm93IHx8IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG59O1xuZXhwb3J0cy5kZWZpbmVQcm9wZXJ0eSA9IGRlZmluZVByb3BlcnR5LCBleHBvcnRzLm9iakNyZWF0ZSA9IG9iakNyZWF0ZSwgZXhwb3J0cy5hcnJJbmRleE9mID0gYXJySW5kZXhPZiwgZXhwb3J0cy5pc0FycmF5ID0gaXNBcnJheSwgZXhwb3J0cy5kYXRlTm93ID0gZGF0ZU5vdztcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXM1LmpzLm1hcCIsIi8qKlxuICogUmVwcmVzZW50cyBhIGNhbmNlbGxhdGlvbiBjYXVzZWQgYnkgbmF2aWdhdGluZyBhd2F5XG4gKiBiZWZvcmUgdGhlIHByZXZpb3VzIHRyYW5zaXRpb24gaGFzIGZ1bGx5IHJlc29sdmVkLlxuICovXG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gQ2FuY2VsbGF0aW9uKCkge31cblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWxsYXRpb247IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgncmVhY3QvbGliL2ludmFyaWFudCcpO1xudmFyIGNhblVzZURPTSA9IHJlcXVpcmUoJ3JlYWN0L2xpYi9FeGVjdXRpb25FbnZpcm9ubWVudCcpLmNhblVzZURPTTtcblxudmFyIEhpc3RvcnkgPSB7XG5cbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50IG51bWJlciBvZiBlbnRyaWVzIGluIHRoZSBoaXN0b3J5LlxuICAgKlxuICAgKiBOb3RlOiBUaGlzIHByb3BlcnR5IGlzIHJlYWQtb25seS5cbiAgICovXG4gIGxlbmd0aDogMSxcblxuICAvKipcbiAgICogU2VuZHMgdGhlIGJyb3dzZXIgYmFjayBvbmUgZW50cnkgaW4gdGhlIGhpc3RvcnkuXG4gICAqL1xuICBiYWNrOiBmdW5jdGlvbiBiYWNrKCkge1xuICAgIGludmFyaWFudChjYW5Vc2VET00sICdDYW5ub3QgdXNlIEhpc3RvcnkuYmFjayB3aXRob3V0IGEgRE9NJyk7XG5cbiAgICAvLyBEbyB0aGlzIGZpcnN0IHNvIHRoYXQgSGlzdG9yeS5sZW5ndGggd2lsbFxuICAgIC8vIGJlIGFjY3VyYXRlIGluIGxvY2F0aW9uIGNoYW5nZSBsaXN0ZW5lcnMuXG4gICAgSGlzdG9yeS5sZW5ndGggLT0gMTtcblxuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhpc3Rvcnk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG4vKiBqc2hpbnQgLVcwODQgKi9cbnZhciBQYXRoVXRpbHMgPSByZXF1aXJlKCcuL1BhdGhVdGlscycpO1xuXG5mdW5jdGlvbiBkZWVwU2VhcmNoKHJvdXRlLCBwYXRobmFtZSwgcXVlcnkpIHtcbiAgLy8gQ2hlY2sgdGhlIHN1YnRyZWUgZmlyc3QgdG8gZmluZCB0aGUgbW9zdCBkZWVwbHktbmVzdGVkIG1hdGNoLlxuICB2YXIgY2hpbGRSb3V0ZXMgPSByb3V0ZS5jaGlsZFJvdXRlcztcbiAgaWYgKGNoaWxkUm91dGVzKSB7XG4gICAgdmFyIG1hdGNoLCBjaGlsZFJvdXRlO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjaGlsZFJvdXRlcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgY2hpbGRSb3V0ZSA9IGNoaWxkUm91dGVzW2ldO1xuXG4gICAgICBpZiAoY2hpbGRSb3V0ZS5pc0RlZmF1bHQgfHwgY2hpbGRSb3V0ZS5pc05vdEZvdW5kKSBjb250aW51ZTsgLy8gQ2hlY2sgdGhlc2UgaW4gb3JkZXIgbGF0ZXIuXG5cbiAgICAgIGlmIChtYXRjaCA9IGRlZXBTZWFyY2goY2hpbGRSb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5KSkge1xuICAgICAgICAvLyBBIHJvdXRlIGluIHRoZSBzdWJ0cmVlIG1hdGNoZWQhIEFkZCB0aGlzIHJvdXRlIGFuZCB3ZSdyZSBkb25lLlxuICAgICAgICBtYXRjaC5yb3V0ZXMudW5zaGlmdChyb3V0ZSk7XG4gICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBObyBjaGlsZCByb3V0ZXMgbWF0Y2hlZDsgdHJ5IHRoZSBkZWZhdWx0IHJvdXRlLlxuICB2YXIgZGVmYXVsdFJvdXRlID0gcm91dGUuZGVmYXVsdFJvdXRlO1xuICBpZiAoZGVmYXVsdFJvdXRlICYmIChwYXJhbXMgPSBQYXRoVXRpbHMuZXh0cmFjdFBhcmFtcyhkZWZhdWx0Um91dGUucGF0aCwgcGF0aG5hbWUpKSkge1xuICAgIHJldHVybiBuZXcgTWF0Y2gocGF0aG5hbWUsIHBhcmFtcywgcXVlcnksIFtyb3V0ZSwgZGVmYXVsdFJvdXRlXSk7XG4gIH0gLy8gRG9lcyB0aGUgXCJub3QgZm91bmRcIiByb3V0ZSBtYXRjaD9cbiAgdmFyIG5vdEZvdW5kUm91dGUgPSByb3V0ZS5ub3RGb3VuZFJvdXRlO1xuICBpZiAobm90Rm91bmRSb3V0ZSAmJiAocGFyYW1zID0gUGF0aFV0aWxzLmV4dHJhY3RQYXJhbXMobm90Rm91bmRSb3V0ZS5wYXRoLCBwYXRobmFtZSkpKSB7XG4gICAgcmV0dXJuIG5ldyBNYXRjaChwYXRobmFtZSwgcGFyYW1zLCBxdWVyeSwgW3JvdXRlLCBub3RGb3VuZFJvdXRlXSk7XG4gIH0gLy8gTGFzdCBhdHRlbXB0OiBjaGVjayB0aGlzIHJvdXRlLlxuICB2YXIgcGFyYW1zID0gUGF0aFV0aWxzLmV4dHJhY3RQYXJhbXMocm91dGUucGF0aCwgcGF0aG5hbWUpO1xuICBpZiAocGFyYW1zKSB7XG4gICAgcmV0dXJuIG5ldyBNYXRjaChwYXRobmFtZSwgcGFyYW1zLCBxdWVyeSwgW3JvdXRlXSk7XG4gIH1yZXR1cm4gbnVsbDtcbn1cblxudmFyIE1hdGNoID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTWF0Y2gocGF0aG5hbWUsIHBhcmFtcywgcXVlcnksIHJvdXRlcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYXRjaCk7XG5cbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgIHRoaXMucm91dGVzID0gcm91dGVzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE1hdGNoLCBudWxsLCBbe1xuICAgIGtleTogJ2ZpbmRNYXRjaCcsXG5cbiAgICAvKipcbiAgICAgKiBBdHRlbXB0cyB0byBtYXRjaCBkZXB0aC1maXJzdCBhIHJvdXRlIGluIHRoZSBnaXZlbiByb3V0ZSdzXG4gICAgICogc3VidHJlZSBhZ2FpbnN0IHRoZSBnaXZlbiBwYXRoIGFuZCByZXR1cm5zIHRoZSBtYXRjaCBpZiBpdFxuICAgICAqIHN1Y2NlZWRzLCBudWxsIGlmIG5vIG1hdGNoIGNhbiBiZSBtYWRlLlxuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBmaW5kTWF0Y2gocm91dGVzLCBwYXRoKSB7XG4gICAgICB2YXIgcGF0aG5hbWUgPSBQYXRoVXRpbHMud2l0aG91dFF1ZXJ5KHBhdGgpO1xuICAgICAgdmFyIHF1ZXJ5ID0gUGF0aFV0aWxzLmV4dHJhY3RRdWVyeShwYXRoKTtcbiAgICAgIHZhciBtYXRjaCA9IG51bGw7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSByb3V0ZXMubGVuZ3RoOyBtYXRjaCA9PSBudWxsICYmIGkgPCBsZW47ICsraSkgbWF0Y2ggPSBkZWVwU2VhcmNoKHJvdXRlc1tpXSwgcGF0aG5hbWUsIHF1ZXJ5KTtcblxuICAgICAgcmV0dXJuIG1hdGNoO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNYXRjaDtcbn0pKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gTWF0Y2g7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9Qcm9wVHlwZXMnKTtcblxuLyoqXG4gKiBBIG1peGluIGZvciBjb21wb25lbnRzIHRoYXQgbW9kaWZ5IHRoZSBVUkwuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgIHZhciBNeUxpbmsgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gKiAgICAgbWl4aW5zOiBbIFJvdXRlci5OYXZpZ2F0aW9uIF0sXG4gKiAgICAgaGFuZGxlQ2xpY2soZXZlbnQpIHtcbiAqICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gKiAgICAgICB0aGlzLnRyYW5zaXRpb25UbygnYVJvdXRlJywgeyB0aGU6ICdwYXJhbXMnIH0sIHsgdGhlOiAncXVlcnknIH0pO1xuICogICAgIH0sXG4gKiAgICAgcmVuZGVyKCkge1xuICogICAgICAgcmV0dXJuIChcbiAqICAgICAgICAgPGEgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+Q2xpY2sgbWUhPC9hPlxuICogICAgICAgKTtcbiAqICAgICB9XG4gKiAgIH0pO1xuICovXG52YXIgTmF2aWdhdGlvbiA9IHtcblxuICBjb250ZXh0VHlwZXM6IHtcbiAgICByb3V0ZXI6IFByb3BUeXBlcy5yb3V0ZXIuaXNSZXF1aXJlZFxuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFic29sdXRlIFVSTCBwYXRoIGNyZWF0ZWQgZnJvbSB0aGUgZ2l2ZW4gcm91dGVcbiAgICogbmFtZSwgVVJMIHBhcmFtZXRlcnMsIGFuZCBxdWVyeSB2YWx1ZXMuXG4gICAqL1xuICBtYWtlUGF0aDogZnVuY3Rpb24gbWFrZVBhdGgodG8sIHBhcmFtcywgcXVlcnkpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0LnJvdXRlci5tYWtlUGF0aCh0bywgcGFyYW1zLCBxdWVyeSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgdGhhdCBtYXkgc2FmZWx5IGJlIHVzZWQgYXMgdGhlIGhyZWYgb2YgYVxuICAgKiBsaW5rIHRvIHRoZSByb3V0ZSB3aXRoIHRoZSBnaXZlbiBuYW1lLlxuICAgKi9cbiAgbWFrZUhyZWY6IGZ1bmN0aW9uIG1ha2VIcmVmKHRvLCBwYXJhbXMsIHF1ZXJ5KSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dC5yb3V0ZXIubWFrZUhyZWYodG8sIHBhcmFtcywgcXVlcnkpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBUcmFuc2l0aW9ucyB0byB0aGUgVVJMIHNwZWNpZmllZCBpbiB0aGUgYXJndW1lbnRzIGJ5IHB1c2hpbmdcbiAgICogYSBuZXcgVVJMIG9udG8gdGhlIGhpc3Rvcnkgc3RhY2suXG4gICAqL1xuICB0cmFuc2l0aW9uVG86IGZ1bmN0aW9uIHRyYW5zaXRpb25Ubyh0bywgcGFyYW1zLCBxdWVyeSkge1xuICAgIHRoaXMuY29udGV4dC5yb3V0ZXIudHJhbnNpdGlvblRvKHRvLCBwYXJhbXMsIHF1ZXJ5KTtcbiAgfSxcblxuICAvKipcbiAgICogVHJhbnNpdGlvbnMgdG8gdGhlIFVSTCBzcGVjaWZpZWQgaW4gdGhlIGFyZ3VtZW50cyBieSByZXBsYWNpbmdcbiAgICogdGhlIGN1cnJlbnQgVVJMIGluIHRoZSBoaXN0b3J5IHN0YWNrLlxuICAgKi9cbiAgcmVwbGFjZVdpdGg6IGZ1bmN0aW9uIHJlcGxhY2VXaXRoKHRvLCBwYXJhbXMsIHF1ZXJ5KSB7XG4gICAgdGhpcy5jb250ZXh0LnJvdXRlci5yZXBsYWNlV2l0aCh0bywgcGFyYW1zLCBxdWVyeSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRyYW5zaXRpb25zIHRvIHRoZSBwcmV2aW91cyBVUkwuXG4gICAqL1xuICBnb0JhY2s6IGZ1bmN0aW9uIGdvQmFjaygpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0LnJvdXRlci5nb0JhY2soKTtcbiAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5hdmlnYXRpb247IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgncmVhY3QvbGliL2ludmFyaWFudCcpO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcbnZhciBxcyA9IHJlcXVpcmUoJ3FzJyk7XG5cbnZhciBwYXJhbUNvbXBpbGVNYXRjaGVyID0gLzooW2EtekEtWl8kXVthLXpBLVowLTlfJF0qKXxbKi4oKVxcW1xcXVxcXFwrfHt9XiRdL2c7XG52YXIgcGFyYW1JbmplY3RNYXRjaGVyID0gLzooW2EtekEtWl8kXVthLXpBLVowLTlfJD9dKls/XT8pfFsqXS9nO1xudmFyIHBhcmFtSW5qZWN0VHJhaWxpbmdTbGFzaE1hdGNoZXIgPSAvXFwvXFwvXFw/fFxcL1xcP1xcL3xcXC9cXD8vZztcbnZhciBxdWVyeU1hdGNoZXIgPSAvXFw/KC4qKSQvO1xuXG52YXIgX2NvbXBpbGVkUGF0dGVybnMgPSB7fTtcblxuZnVuY3Rpb24gY29tcGlsZVBhdHRlcm4ocGF0dGVybikge1xuICBpZiAoIShwYXR0ZXJuIGluIF9jb21waWxlZFBhdHRlcm5zKSkge1xuICAgIHZhciBwYXJhbU5hbWVzID0gW107XG4gICAgdmFyIHNvdXJjZSA9IHBhdHRlcm4ucmVwbGFjZShwYXJhbUNvbXBpbGVNYXRjaGVyLCBmdW5jdGlvbiAobWF0Y2gsIHBhcmFtTmFtZSkge1xuICAgICAgaWYgKHBhcmFtTmFtZSkge1xuICAgICAgICBwYXJhbU5hbWVzLnB1c2gocGFyYW1OYW1lKTtcbiAgICAgICAgcmV0dXJuICcoW14vPyNdKyknO1xuICAgICAgfSBlbHNlIGlmIChtYXRjaCA9PT0gJyonKSB7XG4gICAgICAgIHBhcmFtTmFtZXMucHVzaCgnc3BsYXQnKTtcbiAgICAgICAgcmV0dXJuICcoLio/KSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gJ1xcXFwnICsgbWF0Y2g7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBfY29tcGlsZWRQYXR0ZXJuc1twYXR0ZXJuXSA9IHtcbiAgICAgIG1hdGNoZXI6IG5ldyBSZWdFeHAoJ14nICsgc291cmNlICsgJyQnLCAnaScpLFxuICAgICAgcGFyYW1OYW1lczogcGFyYW1OYW1lc1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX2NvbXBpbGVkUGF0dGVybnNbcGF0dGVybl07XG59XG5cbnZhciBQYXRoVXRpbHMgPSB7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gcGF0aCBpcyBhYnNvbHV0ZS5cbiAgICovXG4gIGlzQWJzb2x1dGU6IGZ1bmN0aW9uIGlzQWJzb2x1dGUocGF0aCkge1xuICAgIHJldHVybiBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xuICB9LFxuXG4gIC8qKlxuICAgKiBKb2lucyB0d28gVVJMIHBhdGhzIHRvZ2V0aGVyLlxuICAgKi9cbiAgam9pbjogZnVuY3Rpb24gam9pbihhLCBiKSB7XG4gICAgcmV0dXJuIGEucmVwbGFjZSgvXFwvKiQvLCAnLycpICsgYjtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhcnJheSBvZiB0aGUgbmFtZXMgb2YgYWxsIHBhcmFtZXRlcnMgaW4gdGhlIGdpdmVuIHBhdHRlcm4uXG4gICAqL1xuICBleHRyYWN0UGFyYW1OYW1lczogZnVuY3Rpb24gZXh0cmFjdFBhcmFtTmFtZXMocGF0dGVybikge1xuICAgIHJldHVybiBjb21waWxlUGF0dGVybihwYXR0ZXJuKS5wYXJhbU5hbWVzO1xuICB9LFxuXG4gIC8qKlxuICAgKiBFeHRyYWN0cyB0aGUgcG9ydGlvbnMgb2YgdGhlIGdpdmVuIFVSTCBwYXRoIHRoYXQgbWF0Y2ggdGhlIGdpdmVuIHBhdHRlcm5cbiAgICogYW5kIHJldHVybnMgYW4gb2JqZWN0IG9mIHBhcmFtIG5hbWUgPT4gdmFsdWUgcGFpcnMuIFJldHVybnMgbnVsbCBpZiB0aGVcbiAgICogcGF0dGVybiBkb2VzIG5vdCBtYXRjaCB0aGUgZ2l2ZW4gcGF0aC5cbiAgICovXG4gIGV4dHJhY3RQYXJhbXM6IGZ1bmN0aW9uIGV4dHJhY3RQYXJhbXMocGF0dGVybiwgcGF0aCkge1xuICAgIHZhciBfY29tcGlsZVBhdHRlcm4gPSBjb21waWxlUGF0dGVybihwYXR0ZXJuKTtcblxuICAgIHZhciBtYXRjaGVyID0gX2NvbXBpbGVQYXR0ZXJuLm1hdGNoZXI7XG4gICAgdmFyIHBhcmFtTmFtZXMgPSBfY29tcGlsZVBhdHRlcm4ucGFyYW1OYW1lcztcblxuICAgIHZhciBtYXRjaCA9IHBhdGgubWF0Y2gobWF0Y2hlcik7XG5cbiAgICBpZiAoIW1hdGNoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9dmFyIHBhcmFtcyA9IHt9O1xuXG4gICAgcGFyYW1OYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChwYXJhbU5hbWUsIGluZGV4KSB7XG4gICAgICBwYXJhbXNbcGFyYW1OYW1lXSA9IG1hdGNoW2luZGV4ICsgMV07XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcGFyYW1zO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgdmVyc2lvbiBvZiB0aGUgZ2l2ZW4gcm91dGUgcGF0aCB3aXRoIHBhcmFtcyBpbnRlcnBvbGF0ZWQuIFRocm93c1xuICAgKiBpZiB0aGVyZSBpcyBhIGR5bmFtaWMgc2VnbWVudCBvZiB0aGUgcm91dGUgcGF0aCBmb3Igd2hpY2ggdGhlcmUgaXMgbm8gcGFyYW0uXG4gICAqL1xuICBpbmplY3RQYXJhbXM6IGZ1bmN0aW9uIGluamVjdFBhcmFtcyhwYXR0ZXJuLCBwYXJhbXMpIHtcbiAgICBwYXJhbXMgPSBwYXJhbXMgfHwge307XG5cbiAgICB2YXIgc3BsYXRJbmRleCA9IDA7XG5cbiAgICByZXR1cm4gcGF0dGVybi5yZXBsYWNlKHBhcmFtSW5qZWN0TWF0Y2hlciwgZnVuY3Rpb24gKG1hdGNoLCBwYXJhbU5hbWUpIHtcbiAgICAgIHBhcmFtTmFtZSA9IHBhcmFtTmFtZSB8fCAnc3BsYXQnO1xuXG4gICAgICAvLyBJZiBwYXJhbSBpcyBvcHRpb25hbCBkb24ndCBjaGVjayBmb3IgZXhpc3RlbmNlXG4gICAgICBpZiAocGFyYW1OYW1lLnNsaWNlKC0xKSA9PT0gJz8nKSB7XG4gICAgICAgIHBhcmFtTmFtZSA9IHBhcmFtTmFtZS5zbGljZSgwLCAtMSk7XG5cbiAgICAgICAgaWYgKHBhcmFtc1twYXJhbU5hbWVdID09IG51bGwpIHJldHVybiAnJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGludmFyaWFudChwYXJhbXNbcGFyYW1OYW1lXSAhPSBudWxsLCAnTWlzc2luZyBcIiVzXCIgcGFyYW1ldGVyIGZvciBwYXRoIFwiJXNcIicsIHBhcmFtTmFtZSwgcGF0dGVybik7XG4gICAgICB9XG5cbiAgICAgIHZhciBzZWdtZW50O1xuICAgICAgaWYgKHBhcmFtTmFtZSA9PT0gJ3NwbGF0JyAmJiBBcnJheS5pc0FycmF5KHBhcmFtc1twYXJhbU5hbWVdKSkge1xuICAgICAgICBzZWdtZW50ID0gcGFyYW1zW3BhcmFtTmFtZV1bc3BsYXRJbmRleCsrXTtcblxuICAgICAgICBpbnZhcmlhbnQoc2VnbWVudCAhPSBudWxsLCAnTWlzc2luZyBzcGxhdCAjICVzIGZvciBwYXRoIFwiJXNcIicsIHNwbGF0SW5kZXgsIHBhdHRlcm4pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VnbWVudCA9IHBhcmFtc1twYXJhbU5hbWVdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VnbWVudDtcbiAgICB9KS5yZXBsYWNlKHBhcmFtSW5qZWN0VHJhaWxpbmdTbGFzaE1hdGNoZXIsICcvJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgaXMgdGhlIHJlc3VsdCBvZiBwYXJzaW5nIGFueSBxdWVyeSBzdHJpbmcgY29udGFpbmVkXG4gICAqIGluIHRoZSBnaXZlbiBwYXRoLCBudWxsIGlmIHRoZSBwYXRoIGNvbnRhaW5zIG5vIHF1ZXJ5IHN0cmluZy5cbiAgICovXG4gIGV4dHJhY3RRdWVyeTogZnVuY3Rpb24gZXh0cmFjdFF1ZXJ5KHBhdGgpIHtcbiAgICB2YXIgbWF0Y2ggPSBwYXRoLm1hdGNoKHF1ZXJ5TWF0Y2hlcik7XG4gICAgcmV0dXJuIG1hdGNoICYmIHFzLnBhcnNlKG1hdGNoWzFdKTtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyBhIHZlcnNpb24gb2YgdGhlIGdpdmVuIHBhdGggd2l0aG91dCB0aGUgcXVlcnkgc3RyaW5nLlxuICAgKi9cbiAgd2l0aG91dFF1ZXJ5OiBmdW5jdGlvbiB3aXRob3V0UXVlcnkocGF0aCkge1xuICAgIHJldHVybiBwYXRoLnJlcGxhY2UocXVlcnlNYXRjaGVyLCAnJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSB2ZXJzaW9uIG9mIHRoZSBnaXZlbiBwYXRoIHdpdGggdGhlIHBhcmFtZXRlcnMgaW4gdGhlIGdpdmVuXG4gICAqIHF1ZXJ5IG1lcmdlZCBpbnRvIHRoZSBxdWVyeSBzdHJpbmcuXG4gICAqL1xuICB3aXRoUXVlcnk6IGZ1bmN0aW9uIHdpdGhRdWVyeShwYXRoLCBxdWVyeSkge1xuICAgIHZhciBleGlzdGluZ1F1ZXJ5ID0gUGF0aFV0aWxzLmV4dHJhY3RRdWVyeShwYXRoKTtcblxuICAgIGlmIChleGlzdGluZ1F1ZXJ5KSBxdWVyeSA9IHF1ZXJ5ID8gYXNzaWduKGV4aXN0aW5nUXVlcnksIHF1ZXJ5KSA6IGV4aXN0aW5nUXVlcnk7XG5cbiAgICB2YXIgcXVlcnlTdHJpbmcgPSBxcy5zdHJpbmdpZnkocXVlcnksIHsgYXJyYXlGb3JtYXQ6ICdicmFja2V0cycgfSk7XG5cbiAgICBpZiAocXVlcnlTdHJpbmcpIHtcbiAgICAgIHJldHVybiBQYXRoVXRpbHMud2l0aG91dFF1ZXJ5KHBhdGgpICsgJz8nICsgcXVlcnlTdHJpbmc7XG4gICAgfXJldHVybiBQYXRoVXRpbHMud2l0aG91dFF1ZXJ5KHBhdGgpO1xuICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUGF0aFV0aWxzOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ3JlYWN0L2xpYi9PYmplY3QuYXNzaWduJyk7XG52YXIgUmVhY3RQcm9wVHlwZXMgPSByZXF1aXJlKCdyZWFjdCcpLlByb3BUeXBlcztcbnZhciBSb3V0ZSA9IHJlcXVpcmUoJy4vUm91dGUnKTtcblxudmFyIFByb3BUeXBlcyA9IGFzc2lnbih7fSwgUmVhY3RQcm9wVHlwZXMsIHtcblxuICAvKipcbiAgICogSW5kaWNhdGVzIHRoYXQgYSBwcm9wIHNob3VsZCBiZSBmYWxzeS5cbiAgICovXG4gIGZhbHN5OiBmdW5jdGlvbiBmYWxzeShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICBpZiAocHJvcHNbcHJvcE5hbWVdKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKCc8JyArIGNvbXBvbmVudE5hbWUgKyAnPiBzaG91bGQgbm90IGhhdmUgYSBcIicgKyBwcm9wTmFtZSArICdcIiBwcm9wJyk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgdGhhdCBhIHByb3Agc2hvdWxkIGJlIGEgUm91dGUgb2JqZWN0LlxuICAgKi9cbiAgcm91dGU6IFJlYWN0UHJvcFR5cGVzLmluc3RhbmNlT2YoUm91dGUpLFxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgdGhhdCBhIHByb3Agc2hvdWxkIGJlIGEgUm91dGVyIG9iamVjdC5cbiAgICovXG4gIC8vcm91dGVyOiBSZWFjdFByb3BUeXBlcy5pbnN0YW5jZU9mKFJvdXRlcikgLy8gVE9ET1xuICByb3V0ZXI6IFJlYWN0UHJvcFR5cGVzLmZ1bmNcblxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvcFR5cGVzOyIsIi8qKlxuICogRW5jYXBzdWxhdGVzIGEgcmVkaXJlY3QgdG8gdGhlIGdpdmVuIHJvdXRlLlxuICovXG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gUmVkaXJlY3QodG8sIHBhcmFtcywgcXVlcnkpIHtcbiAgdGhpcy50byA9IHRvO1xuICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcbiAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlZGlyZWN0OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9jbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ3JlYWN0L2xpYi9PYmplY3QuYXNzaWduJyk7XG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgncmVhY3QvbGliL2ludmFyaWFudCcpO1xudmFyIHdhcm5pbmcgPSByZXF1aXJlKCdyZWFjdC9saWIvd2FybmluZycpO1xudmFyIFBhdGhVdGlscyA9IHJlcXVpcmUoJy4vUGF0aFV0aWxzJyk7XG5cbnZhciBfY3VycmVudFJvdXRlO1xuXG52YXIgUm91dGUgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBSb3V0ZShuYW1lLCBwYXRoLCBpZ25vcmVTY3JvbGxCZWhhdmlvciwgaXNEZWZhdWx0LCBpc05vdEZvdW5kLCBvbkVudGVyLCBvbkxlYXZlLCBoYW5kbGVyKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJvdXRlKTtcblxuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICB0aGlzLnBhcmFtTmFtZXMgPSBQYXRoVXRpbHMuZXh0cmFjdFBhcmFtTmFtZXModGhpcy5wYXRoKTtcbiAgICB0aGlzLmlnbm9yZVNjcm9sbEJlaGF2aW9yID0gISFpZ25vcmVTY3JvbGxCZWhhdmlvcjtcbiAgICB0aGlzLmlzRGVmYXVsdCA9ICEhaXNEZWZhdWx0O1xuICAgIHRoaXMuaXNOb3RGb3VuZCA9ICEhaXNOb3RGb3VuZDtcbiAgICB0aGlzLm9uRW50ZXIgPSBvbkVudGVyO1xuICAgIHRoaXMub25MZWF2ZSA9IG9uTGVhdmU7XG4gICAgdGhpcy5oYW5kbGVyID0gaGFuZGxlcjtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhSb3V0ZSwgW3tcbiAgICBrZXk6ICdhcHBlbmRDaGlsZCcsXG5cbiAgICAvKipcbiAgICAgKiBBcHBlbmRzIHRoZSBnaXZlbiByb3V0ZSB0byB0aGlzIHJvdXRlJ3MgY2hpbGQgcm91dGVzLlxuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBhcHBlbmRDaGlsZChyb3V0ZSkge1xuICAgICAgaW52YXJpYW50KHJvdXRlIGluc3RhbmNlb2YgUm91dGUsICdyb3V0ZS5hcHBlbmRDaGlsZCBtdXN0IHVzZSBhIHZhbGlkIFJvdXRlJyk7XG5cbiAgICAgIGlmICghdGhpcy5jaGlsZFJvdXRlcykgdGhpcy5jaGlsZFJvdXRlcyA9IFtdO1xuXG4gICAgICB0aGlzLmNoaWxkUm91dGVzLnB1c2gocm91dGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3RvU3RyaW5nJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICB2YXIgc3RyaW5nID0gJzxSb3V0ZSc7XG5cbiAgICAgIGlmICh0aGlzLm5hbWUpIHN0cmluZyArPSAnIG5hbWU9XCInICsgdGhpcy5uYW1lICsgJ1wiJztcblxuICAgICAgc3RyaW5nICs9ICcgcGF0aD1cIicgKyB0aGlzLnBhdGggKyAnXCI+JztcblxuICAgICAgcmV0dXJuIHN0cmluZztcbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogJ2NyZWF0ZVJvdXRlJyxcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW5kIHJldHVybnMgYSBuZXcgcm91dGUuIE9wdGlvbnMgbWF5IGJlIGEgVVJMIHBhdGhuYW1lIHN0cmluZ1xuICAgICAqIHdpdGggcGxhY2Vob2xkZXJzIGZvciBuYW1lZCBwYXJhbXMgb3IgYW4gb2JqZWN0IHdpdGggYW55IG9mIHRoZSBmb2xsb3dpbmdcbiAgICAgKiBwcm9wZXJ0aWVzOlxuICAgICAqXG4gICAgICogLSBuYW1lICAgICAgICAgICAgICAgICAgICAgVGhlIG5hbWUgb2YgdGhlIHJvdXRlLiBUaGlzIGlzIHVzZWQgdG8gbG9va3VwIGFcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSByZWxhdGl2ZSB0byBpdHMgcGFyZW50IHJvdXRlIGFuZCBzaG91bGQgYmVcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmlxdWUgYW1vbmcgYWxsIGNoaWxkIHJvdXRlcyBvZiB0aGUgc2FtZSBwYXJlbnRcbiAgICAgKiAtIHBhdGggICAgICAgICAgICAgICAgICAgICBBIFVSTCBwYXRobmFtZSBzdHJpbmcgd2l0aCBvcHRpb25hbCBwbGFjZWhvbGRlcnNcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0IHNwZWNpZnkgdGhlIG5hbWVzIG9mIHBhcmFtcyB0byBleHRyYWN0IGZyb21cbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgVVJMIHdoZW4gdGhlIHBhdGggbWF0Y2hlcy4gRGVmYXVsdHMgdG8gYC8ke25hbWV9YFxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZW4gdGhlcmUgaXMgYSBuYW1lIGdpdmVuLCBvciB0aGUgcGF0aCBvZiB0aGUgcGFyZW50XG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUsIG9yIC9cbiAgICAgKiAtIGlnbm9yZVNjcm9sbEJlaGF2aW9yICAgICBUcnVlIHRvIG1ha2UgdGhpcyByb3V0ZSAoYW5kIGFsbCBkZXNjZW5kYW50cykgaWdub3JlXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIHNjcm9sbCBiZWhhdmlvciBvZiB0aGUgcm91dGVyXG4gICAgICogLSBpc0RlZmF1bHQgICAgICAgICAgICAgICAgVHJ1ZSB0byBtYWtlIHRoaXMgcm91dGUgdGhlIGRlZmF1bHQgcm91dGUgYW1vbmcgYWxsXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRzIHNpYmxpbmdzXG4gICAgICogLSBpc05vdEZvdW5kICAgICAgICAgICAgICAgVHJ1ZSB0byBtYWtlIHRoaXMgcm91dGUgdGhlIFwibm90IGZvdW5kXCIgcm91dGUgYW1vbmdcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGwgaXRzIHNpYmxpbmdzXG4gICAgICogLSBvbkVudGVyICAgICAgICAgICAgICAgICAgQSB0cmFuc2l0aW9uIGhvb2sgdGhhdCB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZVxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlciBpcyBnb2luZyB0byBlbnRlciB0aGlzIHJvdXRlXG4gICAgICogLSBvbkxlYXZlICAgICAgICAgICAgICAgICAgQSB0cmFuc2l0aW9uIGhvb2sgdGhhdCB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZVxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlciBpcyBnb2luZyB0byBsZWF2ZSB0aGlzIHJvdXRlXG4gICAgICogLSBoYW5kbGVyICAgICAgICAgICAgICAgICAgQSBSZWFjdCBjb21wb25lbnQgdGhhdCB3aWxsIGJlIHJlbmRlcmVkIHdoZW5cbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzIHJvdXRlIGlzIGFjdGl2ZVxuICAgICAqIC0gcGFyZW50Um91dGUgICAgICAgICAgICAgIFRoZSBwYXJlbnQgcm91dGUgdG8gdXNlIGZvciB0aGlzIHJvdXRlLiBUaGlzIG9wdGlvblxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzIGF1dG9tYXRpY2FsbHkgc3VwcGxpZWQgd2hlbiBjcmVhdGluZyByb3V0ZXMgaW5zaWRlXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIGNhbGxiYWNrIHRvIGFub3RoZXIgaW52b2NhdGlvbiBvZiBjcmVhdGVSb3V0ZS4gWW91XG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgb25seSBldmVyIG5lZWQgdG8gdXNlIHRoaXMgd2hlbiBkZWNsYXJpbmcgcm91dGVzXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXBlbmRlbnRseSBvZiBvbmUgYW5vdGhlciB0byBtYW51YWxseSBwaWVjZSB0b2dldGhlclxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSByb3V0ZSBoaWVyYXJjaHlcbiAgICAgKlxuICAgICAqIFRoZSBjYWxsYmFjayBtYXkgYmUgdXNlZCB0byBzdHJ1Y3R1cmUgeW91ciByb3V0ZSBoaWVyYXJjaHkuIEFueSBjYWxsIHRvXG4gICAgICogY3JlYXRlUm91dGUsIGNyZWF0ZURlZmF1bHRSb3V0ZSwgY3JlYXRlTm90Rm91bmRSb3V0ZSwgb3IgY3JlYXRlUmVkaXJlY3RcbiAgICAgKiBpbnNpZGUgdGhlIGNhbGxiYWNrIGF1dG9tYXRpY2FsbHkgdXNlcyB0aGlzIHJvdXRlIGFzIGl0cyBwYXJlbnQuXG4gICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZVJvdXRlKG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJykgb3B0aW9ucyA9IHsgcGF0aDogb3B0aW9ucyB9O1xuXG4gICAgICB2YXIgcGFyZW50Um91dGUgPSBfY3VycmVudFJvdXRlO1xuXG4gICAgICBpZiAocGFyZW50Um91dGUpIHtcbiAgICAgICAgd2FybmluZyhvcHRpb25zLnBhcmVudFJvdXRlID09IG51bGwgfHwgb3B0aW9ucy5wYXJlbnRSb3V0ZSA9PT0gcGFyZW50Um91dGUsICdZb3Ugc2hvdWxkIG5vdCB1c2UgcGFyZW50Um91dGUgd2l0aCBjcmVhdGVSb3V0ZSBpbnNpZGUgYW5vdGhlciByb3V0ZVxcJ3MgY2hpbGQgY2FsbGJhY2s7IGl0IGlzIGlnbm9yZWQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmVudFJvdXRlID0gb3B0aW9ucy5wYXJlbnRSb3V0ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIG5hbWUgPSBvcHRpb25zLm5hbWU7XG4gICAgICB2YXIgcGF0aCA9IG9wdGlvbnMucGF0aCB8fCBuYW1lO1xuXG4gICAgICBpZiAocGF0aCAmJiAhKG9wdGlvbnMuaXNEZWZhdWx0IHx8IG9wdGlvbnMuaXNOb3RGb3VuZCkpIHtcbiAgICAgICAgaWYgKFBhdGhVdGlscy5pc0Fic29sdXRlKHBhdGgpKSB7XG4gICAgICAgICAgaWYgKHBhcmVudFJvdXRlKSB7XG4gICAgICAgICAgICBpbnZhcmlhbnQocGF0aCA9PT0gcGFyZW50Um91dGUucGF0aCB8fCBwYXJlbnRSb3V0ZS5wYXJhbU5hbWVzLmxlbmd0aCA9PT0gMCwgJ1lvdSBjYW5ub3QgbmVzdCBwYXRoIFwiJXNcIiBpbnNpZGUgXCIlc1wiOyB0aGUgcGFyZW50IHJlcXVpcmVzIFVSTCBwYXJhbWV0ZXJzJywgcGF0aCwgcGFyZW50Um91dGUucGF0aCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHBhcmVudFJvdXRlKSB7XG4gICAgICAgICAgLy8gUmVsYXRpdmUgcGF0aHMgZXh0ZW5kIHRoZWlyIHBhcmVudC5cbiAgICAgICAgICBwYXRoID0gUGF0aFV0aWxzLmpvaW4ocGFyZW50Um91dGUucGF0aCwgcGF0aCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGF0aCA9ICcvJyArIHBhdGg7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhdGggPSBwYXJlbnRSb3V0ZSA/IHBhcmVudFJvdXRlLnBhdGggOiAnLyc7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLmlzTm90Rm91bmQgJiYgIS9cXCokLy50ZXN0KHBhdGgpKSBwYXRoICs9ICcqJzsgLy8gQXV0by1hcHBlbmQgKiB0byB0aGUgcGF0aCBvZiBub3QgZm91bmQgcm91dGVzLlxuXG4gICAgICB2YXIgcm91dGUgPSBuZXcgUm91dGUobmFtZSwgcGF0aCwgb3B0aW9ucy5pZ25vcmVTY3JvbGxCZWhhdmlvciwgb3B0aW9ucy5pc0RlZmF1bHQsIG9wdGlvbnMuaXNOb3RGb3VuZCwgb3B0aW9ucy5vbkVudGVyLCBvcHRpb25zLm9uTGVhdmUsIG9wdGlvbnMuaGFuZGxlcik7XG5cbiAgICAgIGlmIChwYXJlbnRSb3V0ZSkge1xuICAgICAgICBpZiAocm91dGUuaXNEZWZhdWx0KSB7XG4gICAgICAgICAgaW52YXJpYW50KHBhcmVudFJvdXRlLmRlZmF1bHRSb3V0ZSA9PSBudWxsLCAnJXMgbWF5IG5vdCBoYXZlIG1vcmUgdGhhbiBvbmUgZGVmYXVsdCByb3V0ZScsIHBhcmVudFJvdXRlKTtcblxuICAgICAgICAgIHBhcmVudFJvdXRlLmRlZmF1bHRSb3V0ZSA9IHJvdXRlO1xuICAgICAgICB9IGVsc2UgaWYgKHJvdXRlLmlzTm90Rm91bmQpIHtcbiAgICAgICAgICBpbnZhcmlhbnQocGFyZW50Um91dGUubm90Rm91bmRSb3V0ZSA9PSBudWxsLCAnJXMgbWF5IG5vdCBoYXZlIG1vcmUgdGhhbiBvbmUgbm90IGZvdW5kIHJvdXRlJywgcGFyZW50Um91dGUpO1xuXG4gICAgICAgICAgcGFyZW50Um91dGUubm90Rm91bmRSb3V0ZSA9IHJvdXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFyZW50Um91dGUuYXBwZW5kQ2hpbGQocm91dGUpO1xuICAgICAgfVxuXG4gICAgICAvLyBBbnkgcm91dGVzIGNyZWF0ZWQgaW4gdGhlIGNhbGxiYWNrXG4gICAgICAvLyB1c2UgdGhpcyByb3V0ZSBhcyB0aGVpciBwYXJlbnQuXG4gICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhciBjdXJyZW50Um91dGUgPSBfY3VycmVudFJvdXRlO1xuICAgICAgICBfY3VycmVudFJvdXRlID0gcm91dGU7XG4gICAgICAgIGNhbGxiYWNrLmNhbGwocm91dGUsIHJvdXRlKTtcbiAgICAgICAgX2N1cnJlbnRSb3V0ZSA9IGN1cnJlbnRSb3V0ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NyZWF0ZURlZmF1bHRSb3V0ZScsXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuZCByZXR1cm5zIGEgcm91dGUgdGhhdCBpcyByZW5kZXJlZCB3aGVuIGl0cyBwYXJlbnQgbWF0Y2hlc1xuICAgICAqIHRoZSBjdXJyZW50IFVSTC5cbiAgICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlRGVmYXVsdFJvdXRlKG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBSb3V0ZS5jcmVhdGVSb3V0ZShhc3NpZ24oe30sIG9wdGlvbnMsIHsgaXNEZWZhdWx0OiB0cnVlIH0pKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjcmVhdGVOb3RGb3VuZFJvdXRlJyxcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW5kIHJldHVybnMgYSByb3V0ZSB0aGF0IGlzIHJlbmRlcmVkIHdoZW4gaXRzIHBhcmVudCBtYXRjaGVzXG4gICAgICogdGhlIGN1cnJlbnQgVVJMIGJ1dCBub25lIG9mIGl0cyBzaWJsaW5ncyBkby5cbiAgICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlTm90Rm91bmRSb3V0ZShvcHRpb25zKSB7XG4gICAgICByZXR1cm4gUm91dGUuY3JlYXRlUm91dGUoYXNzaWduKHt9LCBvcHRpb25zLCB7IGlzTm90Rm91bmQ6IHRydWUgfSkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NyZWF0ZVJlZGlyZWN0JyxcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW5kIHJldHVybnMgYSByb3V0ZSB0aGF0IGF1dG9tYXRpY2FsbHkgcmVkaXJlY3RzIHRoZSB0cmFuc2l0aW9uXG4gICAgICogdG8gYW5vdGhlciByb3V0ZS4gSW4gYWRkaXRpb24gdG8gdGhlIG5vcm1hbCBvcHRpb25zIHRvIGNyZWF0ZVJvdXRlLCB0aGlzXG4gICAgICogZnVuY3Rpb24gYWNjZXB0cyB0aGUgZm9sbG93aW5nIG9wdGlvbnM6XG4gICAgICpcbiAgICAgKiAtIGZyb20gICAgICAgICBBbiBhbGlhcyBmb3IgdGhlIGBwYXRoYCBvcHRpb24uIERlZmF1bHRzIHRvICpcbiAgICAgKiAtIHRvICAgICAgICAgICBUaGUgcGF0aC9yb3V0ZS9yb3V0ZSBuYW1lIHRvIHJlZGlyZWN0IHRvXG4gICAgICogLSBwYXJhbXMgICAgICAgVGhlIHBhcmFtcyB0byB1c2UgaW4gdGhlIHJlZGlyZWN0IFVSTC4gRGVmYXVsdHNcbiAgICAgKiAgICAgICAgICAgICAgICB0byB1c2luZyB0aGUgY3VycmVudCBwYXJhbXNcbiAgICAgKiAtIHF1ZXJ5ICAgICAgICBUaGUgcXVlcnkgdG8gdXNlIGluIHRoZSByZWRpcmVjdCBVUkwuIERlZmF1bHRzXG4gICAgICogICAgICAgICAgICAgICAgdG8gdXNpbmcgdGhlIGN1cnJlbnQgcXVlcnlcbiAgICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlUmVkaXJlY3Qob3B0aW9ucykge1xuICAgICAgcmV0dXJuIFJvdXRlLmNyZWF0ZVJvdXRlKGFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICBwYXRoOiBvcHRpb25zLnBhdGggfHwgb3B0aW9ucy5mcm9tIHx8ICcqJyxcbiAgICAgICAgb25FbnRlcjogZnVuY3Rpb24gb25FbnRlcih0cmFuc2l0aW9uLCBwYXJhbXMsIHF1ZXJ5KSB7XG4gICAgICAgICAgdHJhbnNpdGlvbi5yZWRpcmVjdChvcHRpb25zLnRvLCBvcHRpb25zLnBhcmFtcyB8fCBwYXJhbXMsIG9wdGlvbnMucXVlcnkgfHwgcXVlcnkpO1xuICAgICAgICB9XG4gICAgICB9KSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFJvdXRlO1xufSkoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSb3V0ZTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdyZWFjdC9saWIvaW52YXJpYW50Jyk7XG52YXIgY2FuVXNlRE9NID0gcmVxdWlyZSgncmVhY3QvbGliL0V4ZWN1dGlvbkVudmlyb25tZW50JykuY2FuVXNlRE9NO1xudmFyIGdldFdpbmRvd1Njcm9sbFBvc2l0aW9uID0gcmVxdWlyZSgnLi9nZXRXaW5kb3dTY3JvbGxQb3NpdGlvbicpO1xuXG5mdW5jdGlvbiBzaG91bGRVcGRhdGVTY3JvbGwoc3RhdGUsIHByZXZTdGF0ZSkge1xuICBpZiAoIXByZXZTdGF0ZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIERvbid0IHVwZGF0ZSBzY3JvbGwgcG9zaXRpb24gd2hlbiBvbmx5IHRoZSBxdWVyeSBoYXMgY2hhbmdlZC5cbiAgaWYgKHN0YXRlLnBhdGhuYW1lID09PSBwcmV2U3RhdGUucGF0aG5hbWUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH12YXIgcm91dGVzID0gc3RhdGUucm91dGVzO1xuICB2YXIgcHJldlJvdXRlcyA9IHByZXZTdGF0ZS5yb3V0ZXM7XG5cbiAgdmFyIHNoYXJlZEFuY2VzdG9yUm91dGVzID0gcm91dGVzLmZpbHRlcihmdW5jdGlvbiAocm91dGUpIHtcbiAgICByZXR1cm4gcHJldlJvdXRlcy5pbmRleE9mKHJvdXRlKSAhPT0gLTE7XG4gIH0pO1xuXG4gIHJldHVybiAhc2hhcmVkQW5jZXN0b3JSb3V0ZXMuc29tZShmdW5jdGlvbiAocm91dGUpIHtcbiAgICByZXR1cm4gcm91dGUuaWdub3JlU2Nyb2xsQmVoYXZpb3I7XG4gIH0pO1xufVxuXG4vKipcbiAqIFByb3ZpZGVzIHRoZSByb3V0ZXIgd2l0aCB0aGUgYWJpbGl0eSB0byBtYW5hZ2Ugd2luZG93IHNjcm9sbCBwb3NpdGlvblxuICogYWNjb3JkaW5nIHRvIGl0cyBzY3JvbGwgYmVoYXZpb3IuXG4gKi9cbnZhciBTY3JvbGxIaXN0b3J5ID0ge1xuXG4gIHN0YXRpY3M6IHtcblxuICAgIC8qKlxuICAgICAqIFJlY29yZHMgY3VyZW50IHNjcm9sbCBwb3NpdGlvbiBhcyB0aGUgbGFzdCBrbm93biBwb3NpdGlvbiBmb3IgdGhlIGdpdmVuIFVSTCBwYXRoLlxuICAgICAqL1xuICAgIHJlY29yZFNjcm9sbFBvc2l0aW9uOiBmdW5jdGlvbiByZWNvcmRTY3JvbGxQb3NpdGlvbihwYXRoKSB7XG4gICAgICBpZiAoIXRoaXMuc2Nyb2xsSGlzdG9yeSkgdGhpcy5zY3JvbGxIaXN0b3J5ID0ge307XG5cbiAgICAgIHRoaXMuc2Nyb2xsSGlzdG9yeVtwYXRoXSA9IGdldFdpbmRvd1Njcm9sbFBvc2l0aW9uKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGxhc3Qga25vd24gc2Nyb2xsIHBvc2l0aW9uIGZvciB0aGUgZ2l2ZW4gVVJMIHBhdGguXG4gICAgICovXG4gICAgZ2V0U2Nyb2xsUG9zaXRpb246IGZ1bmN0aW9uIGdldFNjcm9sbFBvc2l0aW9uKHBhdGgpIHtcbiAgICAgIGlmICghdGhpcy5zY3JvbGxIaXN0b3J5KSB0aGlzLnNjcm9sbEhpc3RvcnkgPSB7fTtcblxuICAgICAgcmV0dXJuIHRoaXMuc2Nyb2xsSGlzdG9yeVtwYXRoXSB8fCBudWxsO1xuICAgIH1cblxuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxNb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIGludmFyaWFudCh0aGlzLmNvbnN0cnVjdG9yLmdldFNjcm9sbEJlaGF2aW9yKCkgPT0gbnVsbCB8fCBjYW5Vc2VET00sICdDYW5ub3QgdXNlIHNjcm9sbCBiZWhhdmlvciB3aXRob3V0IGEgRE9NJyk7XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuX3VwZGF0ZVNjcm9sbCgpO1xuICB9LFxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgdGhpcy5fdXBkYXRlU2Nyb2xsKHByZXZTdGF0ZSk7XG4gIH0sXG5cbiAgX3VwZGF0ZVNjcm9sbDogZnVuY3Rpb24gX3VwZGF0ZVNjcm9sbChwcmV2U3RhdGUpIHtcbiAgICBpZiAoIXNob3VsZFVwZGF0ZVNjcm9sbCh0aGlzLnN0YXRlLCBwcmV2U3RhdGUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfXZhciBzY3JvbGxCZWhhdmlvciA9IHRoaXMuY29uc3RydWN0b3IuZ2V0U2Nyb2xsQmVoYXZpb3IoKTtcblxuICAgIGlmIChzY3JvbGxCZWhhdmlvcikgc2Nyb2xsQmVoYXZpb3IudXBkYXRlU2Nyb2xsUG9zaXRpb24odGhpcy5jb25zdHJ1Y3Rvci5nZXRTY3JvbGxQb3NpdGlvbih0aGlzLnN0YXRlLnBhdGgpLCB0aGlzLnN0YXRlLmFjdGlvbik7XG4gIH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTY3JvbGxIaXN0b3J5OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIFByb3BUeXBlcyA9IHJlcXVpcmUoJy4vUHJvcFR5cGVzJyk7XG5cbi8qKlxuICogQSBtaXhpbiBmb3IgY29tcG9uZW50cyB0aGF0IG5lZWQgdG8ga25vdyB0aGUgcGF0aCwgcm91dGVzLCBVUkxcbiAqIHBhcmFtcyBhbmQgcXVlcnkgdGhhdCBhcmUgY3VycmVudGx5IGFjdGl2ZS5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqICAgdmFyIEFib3V0TGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAqICAgICBtaXhpbnM6IFsgUm91dGVyLlN0YXRlIF0sXG4gKiAgICAgcmVuZGVyKCkge1xuICogICAgICAgdmFyIGNsYXNzTmFtZSA9IHRoaXMucHJvcHMuY2xhc3NOYW1lO1xuICpcbiAqICAgICAgIGlmICh0aGlzLmlzQWN0aXZlKCdhYm91dCcpKVxuICogICAgICAgICBjbGFzc05hbWUgKz0gJyBpcy1hY3RpdmUnO1xuICpcbiAqICAgICAgIHJldHVybiBSZWFjdC5ET00uYSh7IGNsYXNzTmFtZTogY2xhc3NOYW1lIH0sIHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICogICAgIH1cbiAqICAgfSk7XG4gKi9cbnZhciBTdGF0ZSA9IHtcblxuICBjb250ZXh0VHlwZXM6IHtcbiAgICByb3V0ZXI6IFByb3BUeXBlcy5yb3V0ZXIuaXNSZXF1aXJlZFxuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IFVSTCBwYXRoLlxuICAgKi9cbiAgZ2V0UGF0aDogZnVuY3Rpb24gZ2V0UGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0LnJvdXRlci5nZXRDdXJyZW50UGF0aCgpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IFVSTCBwYXRoIHdpdGhvdXQgdGhlIHF1ZXJ5IHN0cmluZy5cbiAgICovXG4gIGdldFBhdGhuYW1lOiBmdW5jdGlvbiBnZXRQYXRobmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0LnJvdXRlci5nZXRDdXJyZW50UGF0aG5hbWUoKTtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyBhbiBvYmplY3Qgb2YgdGhlIFVSTCBwYXJhbXMgdGhhdCBhcmUgY3VycmVudGx5IGFjdGl2ZS5cbiAgICovXG4gIGdldFBhcmFtczogZnVuY3Rpb24gZ2V0UGFyYW1zKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQucm91dGVyLmdldEN1cnJlbnRQYXJhbXMoKTtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyBhbiBvYmplY3Qgb2YgdGhlIHF1ZXJ5IHBhcmFtcyB0aGF0IGFyZSBjdXJyZW50bHkgYWN0aXZlLlxuICAgKi9cbiAgZ2V0UXVlcnk6IGZ1bmN0aW9uIGdldFF1ZXJ5KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQucm91dGVyLmdldEN1cnJlbnRRdWVyeSgpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIHRoZSByb3V0ZXMgdGhhdCBhcmUgY3VycmVudGx5IGFjdGl2ZS5cbiAgICovXG4gIGdldFJvdXRlczogZnVuY3Rpb24gZ2V0Um91dGVzKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQucm91dGVyLmdldEN1cnJlbnRSb3V0ZXMoKTtcbiAgfSxcblxuICAvKipcbiAgICogQSBoZWxwZXIgbWV0aG9kIHRvIGRldGVybWluZSBpZiBhIGdpdmVuIHJvdXRlLCBwYXJhbXMsIGFuZCBxdWVyeVxuICAgKiBhcmUgYWN0aXZlLlxuICAgKi9cbiAgaXNBY3RpdmU6IGZ1bmN0aW9uIGlzQWN0aXZlKHRvLCBwYXJhbXMsIHF1ZXJ5KSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dC5yb3V0ZXIuaXNBY3RpdmUodG8sIHBhcmFtcywgcXVlcnkpO1xuICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU3RhdGU7IiwiLyoganNoaW50IC1XMDU4ICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIENhbmNlbGxhdGlvbiA9IHJlcXVpcmUoJy4vQ2FuY2VsbGF0aW9uJyk7XG52YXIgUmVkaXJlY3QgPSByZXF1aXJlKCcuL1JlZGlyZWN0Jyk7XG5cbi8qKlxuICogRW5jYXBzdWxhdGVzIGEgdHJhbnNpdGlvbiB0byBhIGdpdmVuIHBhdGguXG4gKlxuICogVGhlIHdpbGxUcmFuc2l0aW9uVG8gYW5kIHdpbGxUcmFuc2l0aW9uRnJvbSBoYW5kbGVycyByZWNlaXZlXG4gKiBhbiBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGFzIHRoZWlyIGZpcnN0IGFyZ3VtZW50LlxuICovXG5mdW5jdGlvbiBUcmFuc2l0aW9uKHBhdGgsIHJldHJ5KSB7XG4gIHRoaXMucGF0aCA9IHBhdGg7XG4gIHRoaXMuYWJvcnRSZWFzb24gPSBudWxsO1xuICAvLyBUT0RPOiBDaGFuZ2UgdGhpcyB0byByb3V0ZXIucmV0cnlUcmFuc2l0aW9uKHRyYW5zaXRpb24pXG4gIHRoaXMucmV0cnkgPSByZXRyeS5iaW5kKHRoaXMpO1xufVxuXG5UcmFuc2l0aW9uLnByb3RvdHlwZS5hYm9ydCA9IGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgaWYgKHRoaXMuYWJvcnRSZWFzb24gPT0gbnVsbCkgdGhpcy5hYm9ydFJlYXNvbiA9IHJlYXNvbiB8fCAnQUJPUlQnO1xufTtcblxuVHJhbnNpdGlvbi5wcm90b3R5cGUucmVkaXJlY3QgPSBmdW5jdGlvbiAodG8sIHBhcmFtcywgcXVlcnkpIHtcbiAgdGhpcy5hYm9ydChuZXcgUmVkaXJlY3QodG8sIHBhcmFtcywgcXVlcnkpKTtcbn07XG5cblRyYW5zaXRpb24ucHJvdG90eXBlLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5hYm9ydChuZXcgQ2FuY2VsbGF0aW9uKCkpO1xufTtcblxuVHJhbnNpdGlvbi5mcm9tID0gZnVuY3Rpb24gKHRyYW5zaXRpb24sIHJvdXRlcywgY29tcG9uZW50cywgY2FsbGJhY2spIHtcbiAgcm91dGVzLnJlZHVjZShmdW5jdGlvbiAoY2FsbGJhY2ssIHJvdXRlLCBpbmRleCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGlmIChlcnJvciB8fCB0cmFuc2l0aW9uLmFib3J0UmVhc29uKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycm9yKTtcbiAgICAgIH0gZWxzZSBpZiAocm91dGUub25MZWF2ZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJvdXRlLm9uTGVhdmUodHJhbnNpdGlvbiwgY29tcG9uZW50c1tpbmRleF0sIGNhbGxiYWNrKTtcblxuICAgICAgICAgIC8vIElmIHRoZXJlIGlzIG5vIGNhbGxiYWNrIGluIHRoZSBhcmd1bWVudCBsaXN0LCBjYWxsIGl0IGF1dG9tYXRpY2FsbHkuXG4gICAgICAgICAgaWYgKHJvdXRlLm9uTGVhdmUubGVuZ3RoIDwgMykgY2FsbGJhY2soKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNhbGxiYWNrKGUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH07XG4gIH0sIGNhbGxiYWNrKSgpO1xufTtcblxuVHJhbnNpdGlvbi50byA9IGZ1bmN0aW9uICh0cmFuc2l0aW9uLCByb3V0ZXMsIHBhcmFtcywgcXVlcnksIGNhbGxiYWNrKSB7XG4gIHJvdXRlcy5yZWR1Y2VSaWdodChmdW5jdGlvbiAoY2FsbGJhY2ssIHJvdXRlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgaWYgKGVycm9yIHx8IHRyYW5zaXRpb24uYWJvcnRSZWFzb24pIHtcbiAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xuICAgICAgfSBlbHNlIGlmIChyb3V0ZS5vbkVudGVyKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcm91dGUub25FbnRlcih0cmFuc2l0aW9uLCBwYXJhbXMsIHF1ZXJ5LCBjYWxsYmFjayk7XG5cbiAgICAgICAgICAvLyBJZiB0aGVyZSBpcyBubyBjYWxsYmFjayBpbiB0aGUgYXJndW1lbnQgbGlzdCwgY2FsbCBpdCBhdXRvbWF0aWNhbGx5LlxuICAgICAgICAgIGlmIChyb3V0ZS5vbkVudGVyLmxlbmd0aCA8IDQpIGNhbGxiYWNrKCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBjYWxsYmFjayhlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9O1xuICB9LCBjYWxsYmFjaykoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVHJhbnNpdGlvbjsiLCIvKipcbiAqIEFjdGlvbnMgdGhhdCBtb2RpZnkgdGhlIFVSTC5cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgTG9jYXRpb25BY3Rpb25zID0ge1xuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgYSBuZXcgbG9jYXRpb24gaXMgYmVpbmcgcHVzaGVkIHRvIHRoZSBoaXN0b3J5IHN0YWNrLlxuICAgKi9cbiAgUFVTSDogJ3B1c2gnLFxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgdGhlIGN1cnJlbnQgbG9jYXRpb24gc2hvdWxkIGJlIHJlcGxhY2VkLlxuICAgKi9cbiAgUkVQTEFDRTogJ3JlcGxhY2UnLFxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgdGhlIG1vc3QgcmVjZW50IGVudHJ5IHNob3VsZCBiZSByZW1vdmVkIGZyb20gdGhlIGhpc3Rvcnkgc3RhY2suXG4gICAqL1xuICBQT1A6ICdwb3AnXG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTG9jYXRpb25BY3Rpb25zOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIExvY2F0aW9uQWN0aW9ucyA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvTG9jYXRpb25BY3Rpb25zJyk7XG5cbi8qKlxuICogQSBzY3JvbGwgYmVoYXZpb3IgdGhhdCBhdHRlbXB0cyB0byBpbWl0YXRlIHRoZSBkZWZhdWx0IGJlaGF2aW9yXG4gKiBvZiBtb2Rlcm4gYnJvd3NlcnMuXG4gKi9cbnZhciBJbWl0YXRlQnJvd3NlckJlaGF2aW9yID0ge1xuXG4gIHVwZGF0ZVNjcm9sbFBvc2l0aW9uOiBmdW5jdGlvbiB1cGRhdGVTY3JvbGxQb3NpdGlvbihwb3NpdGlvbiwgYWN0aW9uVHlwZSkge1xuICAgIHN3aXRjaCAoYWN0aW9uVHlwZSkge1xuICAgICAgY2FzZSBMb2NhdGlvbkFjdGlvbnMuUFVTSDpcbiAgICAgIGNhc2UgTG9jYXRpb25BY3Rpb25zLlJFUExBQ0U6XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExvY2F0aW9uQWN0aW9ucy5QT1A6XG4gICAgICAgIGlmIChwb3NpdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyhwb3NpdGlvbi54LCBwb3NpdGlvbi55KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW1pdGF0ZUJyb3dzZXJCZWhhdmlvcjsiLCIvKipcbiAqIEEgc2Nyb2xsIGJlaGF2aW9yIHRoYXQgYWx3YXlzIHNjcm9sbHMgdG8gdGhlIHRvcCBvZiB0aGUgcGFnZVxuICogYWZ0ZXIgYSB0cmFuc2l0aW9uLlxuICovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIFNjcm9sbFRvVG9wQmVoYXZpb3IgPSB7XG5cbiAgdXBkYXRlU2Nyb2xsUG9zaXRpb246IGZ1bmN0aW9uIHVwZGF0ZVNjcm9sbFBvc2l0aW9uKCkge1xuICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNjcm9sbFRvVG9wQmVoYXZpb3I7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG52YXIgX2luaGVyaXRzID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gJ2Z1bmN0aW9uJyAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ1N1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgJyArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfTtcblxuLyoqXG4gKiBUaGlzIGNvbXBvbmVudCBpcyBuZWNlc3NhcnkgdG8gZ2V0IGFyb3VuZCBhIGNvbnRleHQgd2FybmluZ1xuICogcHJlc2VudCBpbiBSZWFjdCAwLjEzLjAuIEl0IHNvdmxlcyB0aGlzIGJ5IHByb3ZpZGluZyBhIHNlcGFyYXRpb25cbiAqIGJldHdlZW4gdGhlIFwib3duZXJcIiBhbmQgXCJwYXJlbnRcIiBjb250ZXh0cy5cbiAqL1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgQ29udGV4dFdyYXBwZXIgPSAoZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgZnVuY3Rpb24gQ29udGV4dFdyYXBwZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbnRleHRXcmFwcGVyKTtcblxuICAgIGlmIChfUmVhY3QkQ29tcG9uZW50ICE9IG51bGwpIHtcbiAgICAgIF9SZWFjdCRDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBfaW5oZXJpdHMoQ29udGV4dFdyYXBwZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIF9jcmVhdGVDbGFzcyhDb250ZXh0V3JhcHBlciwgW3tcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQ29udGV4dFdyYXBwZXI7XG59KShSZWFjdC5Db21wb25lbnQpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbnRleHRXcmFwcGVyOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9jbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfTtcblxudmFyIF9pbmhlcml0cyA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH07XG5cbnZhciBQcm9wVHlwZXMgPSByZXF1aXJlKCcuLi9Qcm9wVHlwZXMnKTtcbnZhciBSb3V0ZUhhbmRsZXIgPSByZXF1aXJlKCcuL1JvdXRlSGFuZGxlcicpO1xudmFyIFJvdXRlID0gcmVxdWlyZSgnLi9Sb3V0ZScpO1xuXG4vKipcbiAqIEEgPERlZmF1bHRSb3V0ZT4gY29tcG9uZW50IGlzIGEgc3BlY2lhbCBraW5kIG9mIDxSb3V0ZT4gdGhhdFxuICogcmVuZGVycyB3aGVuIGl0cyBwYXJlbnQgbWF0Y2hlcyBidXQgbm9uZSBvZiBpdHMgc2libGluZ3MgZG8uXG4gKiBPbmx5IG9uZSBzdWNoIHJvdXRlIG1heSBiZSB1c2VkIGF0IGFueSBnaXZlbiBsZXZlbCBpbiB0aGVcbiAqIHJvdXRlIGhpZXJhcmNoeS5cbiAqL1xuXG52YXIgRGVmYXVsdFJvdXRlID0gKGZ1bmN0aW9uIChfUm91dGUpIHtcbiAgZnVuY3Rpb24gRGVmYXVsdFJvdXRlKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEZWZhdWx0Um91dGUpO1xuXG4gICAgaWYgKF9Sb3V0ZSAhPSBudWxsKSB7XG4gICAgICBfUm91dGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBfaW5oZXJpdHMoRGVmYXVsdFJvdXRlLCBfUm91dGUpO1xuXG4gIHJldHVybiBEZWZhdWx0Um91dGU7XG59KShSb3V0ZSk7XG5cbi8vIFRPRE86IEluY2x1ZGUgdGhlc2UgaW4gdGhlIGFib3ZlIGNsYXNzIGRlZmluaXRpb25cbi8vIG9uY2Ugd2UgY2FuIHVzZSBFUzcgcHJvcGVydHkgaW5pdGlhbGl6ZXJzLlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2JhYmVsL2JhYmVsL2lzc3Vlcy82MTlcblxuRGVmYXVsdFJvdXRlLnByb3BUeXBlcyA9IHtcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgcGF0aDogUHJvcFR5cGVzLmZhbHN5LFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLmZhbHN5LFxuICBoYW5kbGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5EZWZhdWx0Um91dGUuZGVmYXVsdFByb3BzID0ge1xuICBoYW5kbGVyOiBSb3V0ZUhhbmRsZXJcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRGVmYXVsdFJvdXRlOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9jbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxudmFyIF9pbmhlcml0cyA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH07XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgncmVhY3QvbGliL09iamVjdC5hc3NpZ24nKTtcbnZhciBQcm9wVHlwZXMgPSByZXF1aXJlKCcuLi9Qcm9wVHlwZXMnKTtcblxuZnVuY3Rpb24gaXNMZWZ0Q2xpY2tFdmVudChldmVudCkge1xuICByZXR1cm4gZXZlbnQuYnV0dG9uID09PSAwO1xufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQpIHtcbiAgcmV0dXJuICEhKGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuYWx0S2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkpO1xufVxuXG4vKipcbiAqIDxMaW5rPiBjb21wb25lbnRzIGFyZSB1c2VkIHRvIGNyZWF0ZSBhbiA8YT4gZWxlbWVudCB0aGF0IGxpbmtzIHRvIGEgcm91dGUuXG4gKiBXaGVuIHRoYXQgcm91dGUgaXMgYWN0aXZlLCB0aGUgbGluayBnZXRzIGFuIFwiYWN0aXZlXCIgY2xhc3MgbmFtZSAob3IgdGhlXG4gKiB2YWx1ZSBvZiBpdHMgYGFjdGl2ZUNsYXNzTmFtZWAgcHJvcCkuXG4gKlxuICogRm9yIGV4YW1wbGUsIGFzc3VtaW5nIHlvdSBoYXZlIHRoZSBmb2xsb3dpbmcgcm91dGU6XG4gKlxuICogICA8Um91dGUgbmFtZT1cInNob3dQb3N0XCIgcGF0aD1cIi9wb3N0cy86cG9zdElEXCIgaGFuZGxlcj17UG9zdH0vPlxuICpcbiAqIFlvdSBjb3VsZCB1c2UgdGhlIGZvbGxvd2luZyBjb21wb25lbnQgdG8gbGluayB0byB0aGF0IHJvdXRlOlxuICpcbiAqICAgPExpbmsgdG89XCJzaG93UG9zdFwiIHBhcmFtcz17eyBwb3N0SUQ6IFwiMTIzXCIgfX0gLz5cbiAqXG4gKiBJbiBhZGRpdGlvbiB0byBwYXJhbXMsIGxpbmtzIG1heSBwYXNzIGFsb25nIHF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXJzXG4gKiB1c2luZyB0aGUgYHF1ZXJ5YCBwcm9wLlxuICpcbiAqICAgPExpbmsgdG89XCJzaG93UG9zdFwiIHBhcmFtcz17eyBwb3N0SUQ6IFwiMTIzXCIgfX0gcXVlcnk9e3sgc2hvdzp0cnVlIH19Lz5cbiAqL1xuXG52YXIgTGluayA9IChmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBmdW5jdGlvbiBMaW5rKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMaW5rKTtcblxuICAgIGlmIChfUmVhY3QkQ29tcG9uZW50ICE9IG51bGwpIHtcbiAgICAgIF9SZWFjdCRDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBfaW5oZXJpdHMoTGluaywgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgX2NyZWF0ZUNsYXNzKExpbmssIFt7XG4gICAga2V5OiAnaGFuZGxlQ2xpY2snLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVDbGljayhldmVudCkge1xuICAgICAgdmFyIGFsbG93VHJhbnNpdGlvbiA9IHRydWU7XG4gICAgICB2YXIgY2xpY2tSZXN1bHQ7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2xpY2spIGNsaWNrUmVzdWx0ID0gdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50KTtcblxuICAgICAgaWYgKGlzTW9kaWZpZWRFdmVudChldmVudCkgfHwgIWlzTGVmdENsaWNrRXZlbnQoZXZlbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1pZiAoY2xpY2tSZXN1bHQgPT09IGZhbHNlIHx8IGV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQgPT09IHRydWUpIGFsbG93VHJhbnNpdGlvbiA9IGZhbHNlO1xuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBpZiAoYWxsb3dUcmFuc2l0aW9uKSB0aGlzLmNvbnRleHQucm91dGVyLnRyYW5zaXRpb25Ubyh0aGlzLnByb3BzLnRvLCB0aGlzLnByb3BzLnBhcmFtcywgdGhpcy5wcm9wcy5xdWVyeSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0SHJlZicsXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgXCJocmVmXCIgYXR0cmlidXRlIHRvIHVzZSBvbiB0aGUgRE9NIGVsZW1lbnQuXG4gICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEhyZWYoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnJvdXRlci5tYWtlSHJlZih0aGlzLnByb3BzLnRvLCB0aGlzLnByb3BzLnBhcmFtcywgdGhpcy5wcm9wcy5xdWVyeSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0Q2xhc3NOYW1lJyxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBcImNsYXNzXCIgYXR0cmlidXRlIHRvIHVzZSBvbiB0aGUgRE9NIGVsZW1lbnQsIHdoaWNoIGNvbnRhaW5zXG4gICAgICogdGhlIHZhbHVlIG9mIHRoZSBhY3RpdmVDbGFzc05hbWUgcHJvcGVydHkgd2hlbiB0aGlzIDxMaW5rPiBpcyBhY3RpdmUuXG4gICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldENsYXNzTmFtZSgpIHtcbiAgICAgIHZhciBjbGFzc05hbWUgPSB0aGlzLnByb3BzLmNsYXNzTmFtZTtcblxuICAgICAgaWYgKHRoaXMuZ2V0QWN0aXZlU3RhdGUoKSkgY2xhc3NOYW1lICs9ICcgJyArIHRoaXMucHJvcHMuYWN0aXZlQ2xhc3NOYW1lO1xuXG4gICAgICByZXR1cm4gY2xhc3NOYW1lO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldEFjdGl2ZVN0YXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0QWN0aXZlU3RhdGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnJvdXRlci5pc0FjdGl2ZSh0aGlzLnByb3BzLnRvLCB0aGlzLnByb3BzLnBhcmFtcywgdGhpcy5wcm9wcy5xdWVyeSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIHByb3BzID0gYXNzaWduKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgIGhyZWY6IHRoaXMuZ2V0SHJlZigpLFxuICAgICAgICBjbGFzc05hbWU6IHRoaXMuZ2V0Q2xhc3NOYW1lKCksXG4gICAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChwcm9wcy5hY3RpdmVTdHlsZSAmJiB0aGlzLmdldEFjdGl2ZVN0YXRlKCkpIHByb3BzLnN0eWxlID0gcHJvcHMuYWN0aXZlU3R5bGU7XG5cbiAgICAgIHJldHVybiBSZWFjdC5ET00uYShwcm9wcywgdGhpcy5wcm9wcy5jaGlsZHJlbik7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIExpbms7XG59KShSZWFjdC5Db21wb25lbnQpO1xuXG4vLyBUT0RPOiBJbmNsdWRlIHRoZXNlIGluIHRoZSBhYm92ZSBjbGFzcyBkZWZpbml0aW9uXG4vLyBvbmNlIHdlIGNhbiB1c2UgRVM3IHByb3BlcnR5IGluaXRpYWxpemVycy5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9iYWJlbC9iYWJlbC9pc3N1ZXMvNjE5XG5cbkxpbmsuY29udGV4dFR5cGVzID0ge1xuICByb3V0ZXI6IFByb3BUeXBlcy5yb3V0ZXIuaXNSZXF1aXJlZFxufTtcblxuTGluay5wcm9wVHlwZXMgPSB7XG4gIGFjdGl2ZUNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0bzogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLnJvdXRlXSkuaXNSZXF1aXJlZCxcbiAgcGFyYW1zOiBQcm9wVHlwZXMub2JqZWN0LFxuICBxdWVyeTogUHJvcFR5cGVzLm9iamVjdCxcbiAgYWN0aXZlU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5MaW5rLmRlZmF1bHRQcm9wcyA9IHtcbiAgYWN0aXZlQ2xhc3NOYW1lOiAnYWN0aXZlJyxcbiAgY2xhc3NOYW1lOiAnJ1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBMaW5rOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9jbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfTtcblxudmFyIF9pbmhlcml0cyA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH07XG5cbnZhciBQcm9wVHlwZXMgPSByZXF1aXJlKCcuLi9Qcm9wVHlwZXMnKTtcbnZhciBSb3V0ZUhhbmRsZXIgPSByZXF1aXJlKCcuL1JvdXRlSGFuZGxlcicpO1xudmFyIFJvdXRlID0gcmVxdWlyZSgnLi9Sb3V0ZScpO1xuXG4vKipcbiAqIEEgPE5vdEZvdW5kUm91dGU+IGlzIGEgc3BlY2lhbCBraW5kIG9mIDxSb3V0ZT4gdGhhdFxuICogcmVuZGVycyB3aGVuIHRoZSBiZWdpbm5pbmcgb2YgaXRzIHBhcmVudCdzIHBhdGggbWF0Y2hlc1xuICogYnV0IG5vbmUgb2YgaXRzIHNpYmxpbmdzIGRvLCBpbmNsdWRpbmcgYW55IDxEZWZhdWx0Um91dGU+LlxuICogT25seSBvbmUgc3VjaCByb3V0ZSBtYXkgYmUgdXNlZCBhdCBhbnkgZ2l2ZW4gbGV2ZWwgaW4gdGhlXG4gKiByb3V0ZSBoaWVyYXJjaHkuXG4gKi9cblxudmFyIE5vdEZvdW5kUm91dGUgPSAoZnVuY3Rpb24gKF9Sb3V0ZSkge1xuICBmdW5jdGlvbiBOb3RGb3VuZFJvdXRlKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBOb3RGb3VuZFJvdXRlKTtcblxuICAgIGlmIChfUm91dGUgIT0gbnVsbCkge1xuICAgICAgX1JvdXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgX2luaGVyaXRzKE5vdEZvdW5kUm91dGUsIF9Sb3V0ZSk7XG5cbiAgcmV0dXJuIE5vdEZvdW5kUm91dGU7XG59KShSb3V0ZSk7XG5cbi8vIFRPRE86IEluY2x1ZGUgdGhlc2UgaW4gdGhlIGFib3ZlIGNsYXNzIGRlZmluaXRpb25cbi8vIG9uY2Ugd2UgY2FuIHVzZSBFUzcgcHJvcGVydHkgaW5pdGlhbGl6ZXJzLlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2JhYmVsL2JhYmVsL2lzc3Vlcy82MTlcblxuTm90Rm91bmRSb3V0ZS5wcm9wVHlwZXMgPSB7XG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHBhdGg6IFByb3BUeXBlcy5mYWxzeSxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5mYWxzeSxcbiAgaGFuZGxlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxuTm90Rm91bmRSb3V0ZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGhhbmRsZXI6IFJvdXRlSGFuZGxlclxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBOb3RGb3VuZFJvdXRlOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9jbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfTtcblxudmFyIF9pbmhlcml0cyA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH07XG5cbnZhciBQcm9wVHlwZXMgPSByZXF1aXJlKCcuLi9Qcm9wVHlwZXMnKTtcbnZhciBSb3V0ZSA9IHJlcXVpcmUoJy4vUm91dGUnKTtcblxuLyoqXG4gKiBBIDxSZWRpcmVjdD4gY29tcG9uZW50IGlzIGEgc3BlY2lhbCBraW5kIG9mIDxSb3V0ZT4gdGhhdCBhbHdheXNcbiAqIHJlZGlyZWN0cyB0byBhbm90aGVyIHJvdXRlIHdoZW4gaXQgbWF0Y2hlcy5cbiAqL1xuXG52YXIgUmVkaXJlY3QgPSAoZnVuY3Rpb24gKF9Sb3V0ZSkge1xuICBmdW5jdGlvbiBSZWRpcmVjdCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVkaXJlY3QpO1xuXG4gICAgaWYgKF9Sb3V0ZSAhPSBudWxsKSB7XG4gICAgICBfUm91dGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBfaW5oZXJpdHMoUmVkaXJlY3QsIF9Sb3V0ZSk7XG5cbiAgcmV0dXJuIFJlZGlyZWN0O1xufSkoUm91dGUpO1xuXG4vLyBUT0RPOiBJbmNsdWRlIHRoZXNlIGluIHRoZSBhYm92ZSBjbGFzcyBkZWZpbml0aW9uXG4vLyBvbmNlIHdlIGNhbiB1c2UgRVM3IHByb3BlcnR5IGluaXRpYWxpemVycy5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9iYWJlbC9iYWJlbC9pc3N1ZXMvNjE5XG5cblJlZGlyZWN0LnByb3BUeXBlcyA9IHtcbiAgcGF0aDogUHJvcFR5cGVzLnN0cmluZyxcbiAgZnJvbTogUHJvcFR5cGVzLnN0cmluZywgLy8gQWxpYXMgZm9yIHBhdGguXG4gIHRvOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBoYW5kbGVyOiBQcm9wVHlwZXMuZmFsc3lcbn07XG5cbi8vIFJlZGlyZWN0cyBzaG91bGQgbm90IGhhdmUgYSBkZWZhdWx0IGhhbmRsZXJcblJlZGlyZWN0LmRlZmF1bHRQcm9wcyA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlZGlyZWN0OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9jbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxudmFyIF9pbmhlcml0cyA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH07XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgncmVhY3QvbGliL2ludmFyaWFudCcpO1xudmFyIFByb3BUeXBlcyA9IHJlcXVpcmUoJy4uL1Byb3BUeXBlcycpO1xudmFyIFJvdXRlSGFuZGxlciA9IHJlcXVpcmUoJy4vUm91dGVIYW5kbGVyJyk7XG5cbi8qKlxuICogPFJvdXRlPiBjb21wb25lbnRzIHNwZWNpZnkgY29tcG9uZW50cyB0aGF0IGFyZSByZW5kZXJlZCB0byB0aGUgcGFnZSB3aGVuIHRoZVxuICogVVJMIG1hdGNoZXMgYSBnaXZlbiBwYXR0ZXJuLlxuICpcbiAqIFJvdXRlcyBhcmUgYXJyYW5nZWQgaW4gYSBuZXN0ZWQgdHJlZSBzdHJ1Y3R1cmUuIFdoZW4gYSBuZXcgVVJMIGlzIHJlcXVlc3RlZCxcbiAqIHRoZSB0cmVlIGlzIHNlYXJjaGVkIGRlcHRoLWZpcnN0IHRvIGZpbmQgYSByb3V0ZSB3aG9zZSBwYXRoIG1hdGNoZXMgdGhlIFVSTC5cbiAqIFdoZW4gb25lIGlzIGZvdW5kLCBhbGwgcm91dGVzIGluIHRoZSB0cmVlIHRoYXQgbGVhZCB0byBpdCBhcmUgY29uc2lkZXJlZFxuICogXCJhY3RpdmVcIiBhbmQgdGhlaXIgY29tcG9uZW50cyBhcmUgcmVuZGVyZWQgaW50byB0aGUgRE9NLCBuZXN0ZWQgaW4gdGhlIHNhbWVcbiAqIG9yZGVyIGFzIHRoZXkgYXJlIGluIHRoZSB0cmVlLlxuICpcbiAqIFRoZSBwcmVmZXJyZWQgd2F5IHRvIGNvbmZpZ3VyZSBhIHJvdXRlciBpcyB1c2luZyBKU1guIFRoZSBYTUwtbGlrZSBzeW50YXggaXNcbiAqIGEgZ3JlYXQgd2F5IHRvIHZpc3VhbGl6ZSBob3cgcm91dGVzIGFyZSBsYWlkIG91dCBpbiBhbiBhcHBsaWNhdGlvbi5cbiAqXG4gKiAgIHZhciByb3V0ZXMgPSBbXG4gKiAgICAgPFJvdXRlIGhhbmRsZXI9e0FwcH0+XG4gKiAgICAgICA8Um91dGUgbmFtZT1cImxvZ2luXCIgaGFuZGxlcj17TG9naW59Lz5cbiAqICAgICAgIDxSb3V0ZSBuYW1lPVwibG9nb3V0XCIgaGFuZGxlcj17TG9nb3V0fS8+XG4gKiAgICAgICA8Um91dGUgbmFtZT1cImFib3V0XCIgaGFuZGxlcj17QWJvdXR9Lz5cbiAqICAgICA8L1JvdXRlPlxuICogICBdO1xuICogICBcbiAqICAgUm91dGVyLnJ1bihyb3V0ZXMsIGZ1bmN0aW9uIChIYW5kbGVyKSB7XG4gKiAgICAgUmVhY3QucmVuZGVyKDxIYW5kbGVyLz4sIGRvY3VtZW50LmJvZHkpO1xuICogICB9KTtcbiAqXG4gKiBIYW5kbGVycyBmb3IgUm91dGUgY29tcG9uZW50cyB0aGF0IGNvbnRhaW4gY2hpbGRyZW4gY2FuIHJlbmRlciB0aGVpciBhY3RpdmVcbiAqIGNoaWxkIHJvdXRlIHVzaW5nIGEgPFJvdXRlSGFuZGxlcj4gZWxlbWVudC5cbiAqXG4gKiAgIHZhciBBcHAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gKiAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gKiAgICAgICByZXR1cm4gKFxuICogICAgICAgICA8ZGl2IGNsYXNzPVwiYXBwbGljYXRpb25cIj5cbiAqICAgICAgICAgICA8Um91dGVIYW5kbGVyLz5cbiAqICAgICAgICAgPC9kaXY+XG4gKiAgICAgICApO1xuICogICAgIH1cbiAqICAgfSk7XG4gKlxuICogSWYgbm8gaGFuZGxlciBpcyBwcm92aWRlZCBmb3IgdGhlIHJvdXRlLCBpdCB3aWxsIHJlbmRlciBhIG1hdGNoZWQgY2hpbGQgcm91dGUuXG4gKi9cblxudmFyIFJvdXRlID0gKGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIGZ1bmN0aW9uIFJvdXRlKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSb3V0ZSk7XG5cbiAgICBpZiAoX1JlYWN0JENvbXBvbmVudCAhPSBudWxsKSB7XG4gICAgICBfUmVhY3QkQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgX2luaGVyaXRzKFJvdXRlLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBfY3JlYXRlQ2xhc3MoUm91dGUsIFt7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgaW52YXJpYW50KGZhbHNlLCAnJXMgZWxlbWVudHMgYXJlIGZvciByb3V0ZXIgY29uZmlndXJhdGlvbiBvbmx5IGFuZCBzaG91bGQgbm90IGJlIHJlbmRlcmVkJywgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUm91dGU7XG59KShSZWFjdC5Db21wb25lbnQpO1xuXG4vLyBUT0RPOiBJbmNsdWRlIHRoZXNlIGluIHRoZSBhYm92ZSBjbGFzcyBkZWZpbml0aW9uXG4vLyBvbmNlIHdlIGNhbiB1c2UgRVM3IHByb3BlcnR5IGluaXRpYWxpemVycy5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9iYWJlbC9iYWJlbC9pc3N1ZXMvNjE5XG5cblJvdXRlLnByb3BUeXBlcyA9IHtcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgcGF0aDogUHJvcFR5cGVzLnN0cmluZyxcbiAgaGFuZGxlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIGlnbm9yZVNjcm9sbEJlaGF2aW9yOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuUm91dGUuZGVmYXVsdFByb3BzID0ge1xuICBoYW5kbGVyOiBSb3V0ZUhhbmRsZXJcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUm91dGU7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG52YXIgX2luaGVyaXRzID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gJ2Z1bmN0aW9uJyAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ1N1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgJyArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfTtcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBDb250ZXh0V3JhcHBlciA9IHJlcXVpcmUoJy4vQ29udGV4dFdyYXBwZXInKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdyZWFjdC9saWIvT2JqZWN0LmFzc2lnbicpO1xudmFyIFByb3BUeXBlcyA9IHJlcXVpcmUoJy4uL1Byb3BUeXBlcycpO1xuXG52YXIgUkVGX05BTUUgPSAnX19yb3V0ZUhhbmRsZXJfXyc7XG5cbi8qKlxuICogQSA8Um91dGVIYW5kbGVyPiBjb21wb25lbnQgcmVuZGVycyB0aGUgYWN0aXZlIGNoaWxkIHJvdXRlIGhhbmRsZXJcbiAqIHdoZW4gcm91dGVzIGFyZSBuZXN0ZWQuXG4gKi9cblxudmFyIFJvdXRlSGFuZGxlciA9IChmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBmdW5jdGlvbiBSb3V0ZUhhbmRsZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJvdXRlSGFuZGxlcik7XG5cbiAgICBpZiAoX1JlYWN0JENvbXBvbmVudCAhPSBudWxsKSB7XG4gICAgICBfUmVhY3QkQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgX2luaGVyaXRzKFJvdXRlSGFuZGxlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgX2NyZWF0ZUNsYXNzKFJvdXRlSGFuZGxlciwgW3tcbiAgICBrZXk6ICdnZXRDaGlsZENvbnRleHQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICByb3V0ZURlcHRoOiB0aGlzLmNvbnRleHQucm91dGVEZXB0aCArIDFcbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMuX3VwZGF0ZVJvdXRlQ29tcG9uZW50KHRoaXMucmVmc1tSRUZfTkFNRV0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudERpZFVwZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgIHRoaXMuX3VwZGF0ZVJvdXRlQ29tcG9uZW50KHRoaXMucmVmc1tSRUZfTkFNRV0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLl91cGRhdGVSb3V0ZUNvbXBvbmVudChudWxsKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfdXBkYXRlUm91dGVDb21wb25lbnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfdXBkYXRlUm91dGVDb21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgICB0aGlzLmNvbnRleHQucm91dGVyLnNldFJvdXRlQ29tcG9uZW50QXREZXB0aCh0aGlzLmdldFJvdXRlRGVwdGgoKSwgY29tcG9uZW50KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRSb3V0ZURlcHRoJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Um91dGVEZXB0aCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnRleHQucm91dGVEZXB0aDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjcmVhdGVDaGlsZFJvdXRlSGFuZGxlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZUNoaWxkUm91dGVIYW5kbGVyKHByb3BzKSB7XG4gICAgICB2YXIgcm91dGUgPSB0aGlzLmNvbnRleHQucm91dGVyLmdldFJvdXRlQXREZXB0aCh0aGlzLmdldFJvdXRlRGVwdGgoKSk7XG5cbiAgICAgIGlmIChyb3V0ZSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfXZhciBjaGlsZFByb3BzID0gYXNzaWduKHt9LCBwcm9wcyB8fCB0aGlzLnByb3BzLCB7XG4gICAgICAgIHJlZjogUkVGX05BTUUsXG4gICAgICAgIHBhcmFtczogdGhpcy5jb250ZXh0LnJvdXRlci5nZXRDdXJyZW50UGFyYW1zKCksXG4gICAgICAgIHF1ZXJ5OiB0aGlzLmNvbnRleHQucm91dGVyLmdldEN1cnJlbnRRdWVyeSgpXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQocm91dGUuaGFuZGxlciwgY2hpbGRQcm9wcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIGhhbmRsZXIgPSB0aGlzLmNyZWF0ZUNoaWxkUm91dGVIYW5kbGVyKCk7XG4gICAgICAvLyA8c2NyaXB0Lz4gZm9yIHRoaW5ncyBsaWtlIDxDU1NUcmFuc2l0aW9uR3JvdXAvPiB0aGF0IGRvbid0IGxpa2UgbnVsbFxuICAgICAgcmV0dXJuIGhhbmRsZXIgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBDb250ZXh0V3JhcHBlcixcbiAgICAgICAgbnVsbCxcbiAgICAgICAgaGFuZGxlclxuICAgICAgKSA6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcsIG51bGwpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBSb3V0ZUhhbmRsZXI7XG59KShSZWFjdC5Db21wb25lbnQpO1xuXG4vLyBUT0RPOiBJbmNsdWRlIHRoZXNlIGluIHRoZSBhYm92ZSBjbGFzcyBkZWZpbml0aW9uXG4vLyBvbmNlIHdlIGNhbiB1c2UgRVM3IHByb3BlcnR5IGluaXRpYWxpemVycy5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9iYWJlbC9iYWJlbC9pc3N1ZXMvNjE5XG5cblJvdXRlSGFuZGxlci5jb250ZXh0VHlwZXMgPSB7XG4gIHJvdXRlRGVwdGg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgcm91dGVyOiBQcm9wVHlwZXMucm91dGVyLmlzUmVxdWlyZWRcbn07XG5cblJvdXRlSGFuZGxlci5jaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgcm91dGVEZXB0aDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJvdXRlSGFuZGxlcjsiLCIvKiBqc2hpbnQgLVcwNTggKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciB3YXJuaW5nID0gcmVxdWlyZSgncmVhY3QvbGliL3dhcm5pbmcnKTtcbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdyZWFjdC9saWIvaW52YXJpYW50Jyk7XG52YXIgY2FuVXNlRE9NID0gcmVxdWlyZSgncmVhY3QvbGliL0V4ZWN1dGlvbkVudmlyb25tZW50JykuY2FuVXNlRE9NO1xudmFyIExvY2F0aW9uQWN0aW9ucyA9IHJlcXVpcmUoJy4vYWN0aW9ucy9Mb2NhdGlvbkFjdGlvbnMnKTtcbnZhciBJbWl0YXRlQnJvd3NlckJlaGF2aW9yID0gcmVxdWlyZSgnLi9iZWhhdmlvcnMvSW1pdGF0ZUJyb3dzZXJCZWhhdmlvcicpO1xudmFyIEhhc2hMb2NhdGlvbiA9IHJlcXVpcmUoJy4vbG9jYXRpb25zL0hhc2hMb2NhdGlvbicpO1xudmFyIEhpc3RvcnlMb2NhdGlvbiA9IHJlcXVpcmUoJy4vbG9jYXRpb25zL0hpc3RvcnlMb2NhdGlvbicpO1xudmFyIFJlZnJlc2hMb2NhdGlvbiA9IHJlcXVpcmUoJy4vbG9jYXRpb25zL1JlZnJlc2hMb2NhdGlvbicpO1xudmFyIFN0YXRpY0xvY2F0aW9uID0gcmVxdWlyZSgnLi9sb2NhdGlvbnMvU3RhdGljTG9jYXRpb24nKTtcbnZhciBTY3JvbGxIaXN0b3J5ID0gcmVxdWlyZSgnLi9TY3JvbGxIaXN0b3J5Jyk7XG52YXIgY3JlYXRlUm91dGVzRnJvbVJlYWN0Q2hpbGRyZW4gPSByZXF1aXJlKCcuL2NyZWF0ZVJvdXRlc0Zyb21SZWFjdENoaWxkcmVuJyk7XG52YXIgaXNSZWFjdENoaWxkcmVuID0gcmVxdWlyZSgnLi9pc1JlYWN0Q2hpbGRyZW4nKTtcbnZhciBUcmFuc2l0aW9uID0gcmVxdWlyZSgnLi9UcmFuc2l0aW9uJyk7XG52YXIgUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9Qcm9wVHlwZXMnKTtcbnZhciBSZWRpcmVjdCA9IHJlcXVpcmUoJy4vUmVkaXJlY3QnKTtcbnZhciBIaXN0b3J5ID0gcmVxdWlyZSgnLi9IaXN0b3J5Jyk7XG52YXIgQ2FuY2VsbGF0aW9uID0gcmVxdWlyZSgnLi9DYW5jZWxsYXRpb24nKTtcbnZhciBNYXRjaCA9IHJlcXVpcmUoJy4vTWF0Y2gnKTtcbnZhciBSb3V0ZSA9IHJlcXVpcmUoJy4vUm91dGUnKTtcbnZhciBzdXBwb3J0c0hpc3RvcnkgPSByZXF1aXJlKCcuL3N1cHBvcnRzSGlzdG9yeScpO1xudmFyIFBhdGhVdGlscyA9IHJlcXVpcmUoJy4vUGF0aFV0aWxzJyk7XG5cbi8qKlxuICogVGhlIGRlZmF1bHQgbG9jYXRpb24gZm9yIG5ldyByb3V0ZXJzLlxuICovXG52YXIgREVGQVVMVF9MT0NBVElPTiA9IGNhblVzZURPTSA/IEhhc2hMb2NhdGlvbiA6ICcvJztcblxuLyoqXG4gKiBUaGUgZGVmYXVsdCBzY3JvbGwgYmVoYXZpb3IgZm9yIG5ldyByb3V0ZXJzLlxuICovXG52YXIgREVGQVVMVF9TQ1JPTExfQkVIQVZJT1IgPSBjYW5Vc2VET00gPyBJbWl0YXRlQnJvd3NlckJlaGF2aW9yIDogbnVsbDtcblxuZnVuY3Rpb24gaGFzUHJvcGVydGllcyhvYmplY3QsIHByb3BlcnRpZXMpIHtcbiAgZm9yICh2YXIgcHJvcGVydHlOYW1lIGluIHByb3BlcnRpZXMpIGlmIChwcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KHByb3BlcnR5TmFtZSkgJiYgb2JqZWN0W3Byb3BlcnR5TmFtZV0gIT09IHByb3BlcnRpZXNbcHJvcGVydHlOYW1lXSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfXJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBoYXNNYXRjaChyb3V0ZXMsIHJvdXRlLCBwcmV2UGFyYW1zLCBuZXh0UGFyYW1zLCBwcmV2UXVlcnksIG5leHRRdWVyeSkge1xuICByZXR1cm4gcm91dGVzLnNvbWUoZnVuY3Rpb24gKHIpIHtcbiAgICBpZiAociAhPT0gcm91dGUpIHJldHVybiBmYWxzZTtcblxuICAgIHZhciBwYXJhbU5hbWVzID0gcm91dGUucGFyYW1OYW1lcztcbiAgICB2YXIgcGFyYW1OYW1lO1xuXG4gICAgLy8gRW5zdXJlIHRoYXQgYWxsIHBhcmFtcyB0aGUgcm91dGUgY2FyZXMgYWJvdXQgZGlkIG5vdCBjaGFuZ2UuXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHBhcmFtTmFtZXMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIHBhcmFtTmFtZSA9IHBhcmFtTmFtZXNbaV07XG5cbiAgICAgIGlmIChuZXh0UGFyYW1zW3BhcmFtTmFtZV0gIT09IHByZXZQYXJhbXNbcGFyYW1OYW1lXSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIEVuc3VyZSB0aGUgcXVlcnkgaGFzbid0IGNoYW5nZWQuXG4gICAgcmV0dXJuIGhhc1Byb3BlcnRpZXMocHJldlF1ZXJ5LCBuZXh0UXVlcnkpICYmIGhhc1Byb3BlcnRpZXMobmV4dFF1ZXJ5LCBwcmV2UXVlcnkpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkUm91dGVzVG9OYW1lZFJvdXRlcyhyb3V0ZXMsIG5hbWVkUm91dGVzKSB7XG4gIHZhciByb3V0ZTtcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHJvdXRlcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgIHJvdXRlID0gcm91dGVzW2ldO1xuXG4gICAgaWYgKHJvdXRlLm5hbWUpIHtcbiAgICAgIGludmFyaWFudChuYW1lZFJvdXRlc1tyb3V0ZS5uYW1lXSA9PSBudWxsLCAnWW91IG1heSBub3QgaGF2ZSBtb3JlIHRoYW4gb25lIHJvdXRlIG5hbWVkIFwiJXNcIicsIHJvdXRlLm5hbWUpO1xuXG4gICAgICBuYW1lZFJvdXRlc1tyb3V0ZS5uYW1lXSA9IHJvdXRlO1xuICAgIH1cblxuICAgIGlmIChyb3V0ZS5jaGlsZFJvdXRlcykgYWRkUm91dGVzVG9OYW1lZFJvdXRlcyhyb3V0ZS5jaGlsZFJvdXRlcywgbmFtZWRSb3V0ZXMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJvdXRlSXNBY3RpdmUoYWN0aXZlUm91dGVzLCByb3V0ZU5hbWUpIHtcbiAgcmV0dXJuIGFjdGl2ZVJvdXRlcy5zb21lKGZ1bmN0aW9uIChyb3V0ZSkge1xuICAgIHJldHVybiByb3V0ZS5uYW1lID09PSByb3V0ZU5hbWU7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwYXJhbXNBcmVBY3RpdmUoYWN0aXZlUGFyYW1zLCBwYXJhbXMpIHtcbiAgZm9yICh2YXIgcHJvcGVydHkgaW4gcGFyYW1zKSBpZiAoU3RyaW5nKGFjdGl2ZVBhcmFtc1twcm9wZXJ0eV0pICE9PSBTdHJpbmcocGFyYW1zW3Byb3BlcnR5XSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1yZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gcXVlcnlJc0FjdGl2ZShhY3RpdmVRdWVyeSwgcXVlcnkpIHtcbiAgZm9yICh2YXIgcHJvcGVydHkgaW4gcXVlcnkpIGlmIChTdHJpbmcoYWN0aXZlUXVlcnlbcHJvcGVydHldKSAhPT0gU3RyaW5nKHF1ZXJ5W3Byb3BlcnR5XSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1yZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuZCByZXR1cm5zIGEgbmV3IHJvdXRlciB1c2luZyB0aGUgZ2l2ZW4gb3B0aW9ucy4gQSByb3V0ZXJcbiAqIGlzIGEgUmVhY3RDb21wb25lbnQgY2xhc3MgdGhhdCBrbm93cyBob3cgdG8gcmVhY3QgdG8gY2hhbmdlcyBpbiB0aGVcbiAqIFVSTCBhbmQga2VlcCB0aGUgY29udGVudHMgb2YgdGhlIHBhZ2UgaW4gc3luYy5cbiAqXG4gKiBPcHRpb25zIG1heSBiZSBhbnkgb2YgdGhlIGZvbGxvd2luZzpcbiAqXG4gKiAtIHJvdXRlcyAgICAgICAgICAgKHJlcXVpcmVkKSBUaGUgcm91dGUgY29uZmlnXG4gKiAtIGxvY2F0aW9uICAgICAgICAgVGhlIGxvY2F0aW9uIHRvIHVzZS4gRGVmYXVsdHMgdG8gSGFzaExvY2F0aW9uIHdoZW5cbiAqICAgICAgICAgICAgICAgICAgICB0aGUgRE9NIGlzIGF2YWlsYWJsZSwgXCIvXCIgb3RoZXJ3aXNlXG4gKiAtIHNjcm9sbEJlaGF2aW9yICAgVGhlIHNjcm9sbCBiZWhhdmlvciB0byB1c2UuIERlZmF1bHRzIHRvIEltaXRhdGVCcm93c2VyQmVoYXZpb3JcbiAqICAgICAgICAgICAgICAgICAgICB3aGVuIHRoZSBET00gaXMgYXZhaWxhYmxlLCBudWxsIG90aGVyd2lzZVxuICogLSBvbkVycm9yICAgICAgICAgIEEgZnVuY3Rpb24gdGhhdCBpcyB1c2VkIHRvIGhhbmRsZSBlcnJvcnNcbiAqIC0gb25BYm9ydCAgICAgICAgICBBIGZ1bmN0aW9uIHRoYXQgaXMgdXNlZCB0byBoYW5kbGUgYWJvcnRlZCB0cmFuc2l0aW9uc1xuICpcbiAqIFdoZW4gcmVuZGVyaW5nIGluIGEgc2VydmVyLXNpZGUgZW52aXJvbm1lbnQsIHRoZSBsb2NhdGlvbiBzaG91bGQgc2ltcGx5XG4gKiBiZSB0aGUgVVJMIHBhdGggdGhhdCB3YXMgdXNlZCBpbiB0aGUgcmVxdWVzdCwgaW5jbHVkaW5nIHRoZSBxdWVyeSBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlcihvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIGlmIChpc1JlYWN0Q2hpbGRyZW4ob3B0aW9ucykpIG9wdGlvbnMgPSB7IHJvdXRlczogb3B0aW9ucyB9O1xuXG4gIHZhciBtb3VudGVkQ29tcG9uZW50cyA9IFtdO1xuICB2YXIgbG9jYXRpb24gPSBvcHRpb25zLmxvY2F0aW9uIHx8IERFRkFVTFRfTE9DQVRJT047XG4gIHZhciBzY3JvbGxCZWhhdmlvciA9IG9wdGlvbnMuc2Nyb2xsQmVoYXZpb3IgfHwgREVGQVVMVF9TQ1JPTExfQkVIQVZJT1I7XG4gIHZhciBzdGF0ZSA9IHt9O1xuICB2YXIgbmV4dFN0YXRlID0ge307XG4gIHZhciBwZW5kaW5nVHJhbnNpdGlvbiA9IG51bGw7XG4gIHZhciBkaXNwYXRjaEhhbmRsZXIgPSBudWxsO1xuXG4gIGlmICh0eXBlb2YgbG9jYXRpb24gPT09ICdzdHJpbmcnKSBsb2NhdGlvbiA9IG5ldyBTdGF0aWNMb2NhdGlvbihsb2NhdGlvbik7XG5cbiAgaWYgKGxvY2F0aW9uIGluc3RhbmNlb2YgU3RhdGljTG9jYXRpb24pIHtcbiAgICB3YXJuaW5nKCFjYW5Vc2VET00gfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICd0ZXN0JywgJ1lvdSBzaG91bGQgbm90IHVzZSBhIHN0YXRpYyBsb2NhdGlvbiBpbiBhIERPTSBlbnZpcm9ubWVudCBiZWNhdXNlICcgKyAndGhlIHJvdXRlciB3aWxsIG5vdCBiZSBrZXB0IGluIHN5bmMgd2l0aCB0aGUgY3VycmVudCBVUkwnKTtcbiAgfSBlbHNlIHtcbiAgICBpbnZhcmlhbnQoY2FuVXNlRE9NIHx8IGxvY2F0aW9uLm5lZWRzRE9NID09PSBmYWxzZSwgJ1lvdSBjYW5ub3QgdXNlICVzIHdpdGhvdXQgYSBET00nLCBsb2NhdGlvbik7XG4gIH1cblxuICAvLyBBdXRvbWF0aWNhbGx5IGZhbGwgYmFjayB0byBmdWxsIHBhZ2UgcmVmcmVzaGVzIGluXG4gIC8vIGJyb3dzZXJzIHRoYXQgZG9uJ3Qgc3VwcG9ydCB0aGUgSFRNTCBoaXN0b3J5IEFQSS5cbiAgaWYgKGxvY2F0aW9uID09PSBIaXN0b3J5TG9jYXRpb24gJiYgIXN1cHBvcnRzSGlzdG9yeSgpKSBsb2NhdGlvbiA9IFJlZnJlc2hMb2NhdGlvbjtcblxuICB2YXIgUm91dGVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gICAgZGlzcGxheU5hbWU6ICdSb3V0ZXInLFxuXG4gICAgc3RhdGljczoge1xuXG4gICAgICBpc1J1bm5pbmc6IGZhbHNlLFxuXG4gICAgICBjYW5jZWxQZW5kaW5nVHJhbnNpdGlvbjogZnVuY3Rpb24gY2FuY2VsUGVuZGluZ1RyYW5zaXRpb24oKSB7XG4gICAgICAgIGlmIChwZW5kaW5nVHJhbnNpdGlvbikge1xuICAgICAgICAgIHBlbmRpbmdUcmFuc2l0aW9uLmNhbmNlbCgpO1xuICAgICAgICAgIHBlbmRpbmdUcmFuc2l0aW9uID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgY2xlYXJBbGxSb3V0ZXM6IGZ1bmN0aW9uIGNsZWFyQWxsUm91dGVzKCkge1xuICAgICAgICBSb3V0ZXIuY2FuY2VsUGVuZGluZ1RyYW5zaXRpb24oKTtcbiAgICAgICAgUm91dGVyLm5hbWVkUm91dGVzID0ge307XG4gICAgICAgIFJvdXRlci5yb3V0ZXMgPSBbXTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogQWRkcyByb3V0ZXMgdG8gdGhpcyByb3V0ZXIgZnJvbSB0aGUgZ2l2ZW4gY2hpbGRyZW4gb2JqZWN0IChzZWUgUmVhY3RDaGlsZHJlbikuXG4gICAgICAgKi9cbiAgICAgIGFkZFJvdXRlczogZnVuY3Rpb24gYWRkUm91dGVzKHJvdXRlcykge1xuICAgICAgICBpZiAoaXNSZWFjdENoaWxkcmVuKHJvdXRlcykpIHJvdXRlcyA9IGNyZWF0ZVJvdXRlc0Zyb21SZWFjdENoaWxkcmVuKHJvdXRlcyk7XG5cbiAgICAgICAgYWRkUm91dGVzVG9OYW1lZFJvdXRlcyhyb3V0ZXMsIFJvdXRlci5uYW1lZFJvdXRlcyk7XG5cbiAgICAgICAgUm91dGVyLnJvdXRlcy5wdXNoLmFwcGx5KFJvdXRlci5yb3V0ZXMsIHJvdXRlcyk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFJlcGxhY2VzIHJvdXRlcyBvZiB0aGlzIHJvdXRlciBmcm9tIHRoZSBnaXZlbiBjaGlsZHJlbiBvYmplY3QgKHNlZSBSZWFjdENoaWxkcmVuKS5cbiAgICAgICAqL1xuICAgICAgcmVwbGFjZVJvdXRlczogZnVuY3Rpb24gcmVwbGFjZVJvdXRlcyhyb3V0ZXMpIHtcbiAgICAgICAgUm91dGVyLmNsZWFyQWxsUm91dGVzKCk7XG4gICAgICAgIFJvdXRlci5hZGRSb3V0ZXMocm91dGVzKTtcbiAgICAgICAgUm91dGVyLnJlZnJlc2goKTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogUGVyZm9ybXMgYSBtYXRjaCBvZiB0aGUgZ2l2ZW4gcGF0aCBhZ2FpbnN0IHRoaXMgcm91dGVyIGFuZCByZXR1cm5zIGFuIG9iamVjdFxuICAgICAgICogd2l0aCB0aGUgeyByb3V0ZXMsIHBhcmFtcywgcGF0aG5hbWUsIHF1ZXJ5IH0gdGhhdCBtYXRjaC4gUmV0dXJucyBudWxsIGlmIG5vXG4gICAgICAgKiBtYXRjaCBjYW4gYmUgbWFkZS5cbiAgICAgICAqL1xuICAgICAgbWF0Y2g6IGZ1bmN0aW9uIG1hdGNoKHBhdGgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGNoLmZpbmRNYXRjaChSb3V0ZXIucm91dGVzLCBwYXRoKTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogUmV0dXJucyBhbiBhYnNvbHV0ZSBVUkwgcGF0aCBjcmVhdGVkIGZyb20gdGhlIGdpdmVuIHJvdXRlXG4gICAgICAgKiBuYW1lLCBVUkwgcGFyYW1ldGVycywgYW5kIHF1ZXJ5LlxuICAgICAgICovXG4gICAgICBtYWtlUGF0aDogZnVuY3Rpb24gbWFrZVBhdGgodG8sIHBhcmFtcywgcXVlcnkpIHtcbiAgICAgICAgdmFyIHBhdGg7XG4gICAgICAgIGlmIChQYXRoVXRpbHMuaXNBYnNvbHV0ZSh0bykpIHtcbiAgICAgICAgICBwYXRoID0gdG87XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHJvdXRlID0gdG8gaW5zdGFuY2VvZiBSb3V0ZSA/IHRvIDogUm91dGVyLm5hbWVkUm91dGVzW3RvXTtcblxuICAgICAgICAgIGludmFyaWFudChyb3V0ZSBpbnN0YW5jZW9mIFJvdXRlLCAnQ2Fubm90IGZpbmQgYSByb3V0ZSBuYW1lZCBcIiVzXCInLCB0byk7XG5cbiAgICAgICAgICBwYXRoID0gcm91dGUucGF0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQYXRoVXRpbHMud2l0aFF1ZXJ5KFBhdGhVdGlscy5pbmplY3RQYXJhbXMocGF0aCwgcGFyYW1zKSwgcXVlcnkpO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBSZXR1cm5zIGEgc3RyaW5nIHRoYXQgbWF5IHNhZmVseSBiZSB1c2VkIGFzIHRoZSBocmVmIG9mIGEgbGlua1xuICAgICAgICogdG8gdGhlIHJvdXRlIHdpdGggdGhlIGdpdmVuIG5hbWUsIFVSTCBwYXJhbWV0ZXJzLCBhbmQgcXVlcnkuXG4gICAgICAgKi9cbiAgICAgIG1ha2VIcmVmOiBmdW5jdGlvbiBtYWtlSHJlZih0bywgcGFyYW1zLCBxdWVyeSkge1xuICAgICAgICB2YXIgcGF0aCA9IFJvdXRlci5tYWtlUGF0aCh0bywgcGFyYW1zLCBxdWVyeSk7XG4gICAgICAgIHJldHVybiBsb2NhdGlvbiA9PT0gSGFzaExvY2F0aW9uID8gJyMnICsgcGF0aCA6IHBhdGg7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRyYW5zaXRpb25zIHRvIHRoZSBVUkwgc3BlY2lmaWVkIGluIHRoZSBhcmd1bWVudHMgYnkgcHVzaGluZ1xuICAgICAgICogYSBuZXcgVVJMIG9udG8gdGhlIGhpc3Rvcnkgc3RhY2suXG4gICAgICAgKi9cbiAgICAgIHRyYW5zaXRpb25UbzogZnVuY3Rpb24gdHJhbnNpdGlvblRvKHRvLCBwYXJhbXMsIHF1ZXJ5KSB7XG4gICAgICAgIHZhciBwYXRoID0gUm91dGVyLm1ha2VQYXRoKHRvLCBwYXJhbXMsIHF1ZXJ5KTtcblxuICAgICAgICBpZiAocGVuZGluZ1RyYW5zaXRpb24pIHtcbiAgICAgICAgICAvLyBSZXBsYWNlIHNvIHBlbmRpbmcgbG9jYXRpb24gZG9lcyBub3Qgc3RheSBpbiBoaXN0b3J5LlxuICAgICAgICAgIGxvY2F0aW9uLnJlcGxhY2UocGF0aCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbG9jYXRpb24ucHVzaChwYXRoKTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBUcmFuc2l0aW9ucyB0byB0aGUgVVJMIHNwZWNpZmllZCBpbiB0aGUgYXJndW1lbnRzIGJ5IHJlcGxhY2luZ1xuICAgICAgICogdGhlIGN1cnJlbnQgVVJMIGluIHRoZSBoaXN0b3J5IHN0YWNrLlxuICAgICAgICovXG4gICAgICByZXBsYWNlV2l0aDogZnVuY3Rpb24gcmVwbGFjZVdpdGgodG8sIHBhcmFtcywgcXVlcnkpIHtcbiAgICAgICAgbG9jYXRpb24ucmVwbGFjZShSb3V0ZXIubWFrZVBhdGgodG8sIHBhcmFtcywgcXVlcnkpKTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVHJhbnNpdGlvbnMgdG8gdGhlIHByZXZpb3VzIFVSTCBpZiBvbmUgaXMgYXZhaWxhYmxlLiBSZXR1cm5zIHRydWUgaWYgdGhlXG4gICAgICAgKiByb3V0ZXIgd2FzIGFibGUgdG8gZ28gYmFjaywgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgICAgICpcbiAgICAgICAqIE5vdGU6IFRoZSByb3V0ZXIgb25seSB0cmFja3MgaGlzdG9yeSBlbnRyaWVzIGluIHlvdXIgYXBwbGljYXRpb24sIG5vdCB0aGVcbiAgICAgICAqIGN1cnJlbnQgYnJvd3NlciBzZXNzaW9uLCBzbyB5b3UgY2FuIHNhZmVseSBjYWxsIHRoaXMgZnVuY3Rpb24gd2l0aG91dCBndWFyZGluZ1xuICAgICAgICogYWdhaW5zdCBzZW5kaW5nIHRoZSB1c2VyIGJhY2sgdG8gc29tZSBvdGhlciBzaXRlLiBIb3dldmVyLCB3aGVuIHVzaW5nXG4gICAgICAgKiBSZWZyZXNoTG9jYXRpb24gKHdoaWNoIGlzIHRoZSBmYWxsYmFjayBmb3IgSGlzdG9yeUxvY2F0aW9uIGluIGJyb3dzZXJzIHRoYXRcbiAgICAgICAqIGRvbid0IHN1cHBvcnQgSFRNTDUgaGlzdG9yeSkgdGhpcyBtZXRob2Qgd2lsbCAqYWx3YXlzKiBzZW5kIHRoZSBjbGllbnQgYmFja1xuICAgICAgICogYmVjYXVzZSB3ZSBjYW5ub3QgcmVsaWFibHkgdHJhY2sgaGlzdG9yeSBsZW5ndGguXG4gICAgICAgKi9cbiAgICAgIGdvQmFjazogZnVuY3Rpb24gZ29CYWNrKCkge1xuICAgICAgICBpZiAoSGlzdG9yeS5sZW5ndGggPiAxIHx8IGxvY2F0aW9uID09PSBSZWZyZXNoTG9jYXRpb24pIHtcbiAgICAgICAgICBsb2NhdGlvbi5wb3AoKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdhcm5pbmcoZmFsc2UsICdnb0JhY2soKSB3YXMgaWdub3JlZCBiZWNhdXNlIHRoZXJlIGlzIG5vIHJvdXRlciBoaXN0b3J5Jyk7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSxcblxuICAgICAgaGFuZGxlQWJvcnQ6IG9wdGlvbnMub25BYm9ydCB8fCBmdW5jdGlvbiAoYWJvcnRSZWFzb24pIHtcbiAgICAgICAgaWYgKGxvY2F0aW9uIGluc3RhbmNlb2YgU3RhdGljTG9jYXRpb24pIHRocm93IG5ldyBFcnJvcignVW5oYW5kbGVkIGFib3J0ZWQgdHJhbnNpdGlvbiEgUmVhc29uOiAnICsgYWJvcnRSZWFzb24pO1xuXG4gICAgICAgIGlmIChhYm9ydFJlYXNvbiBpbnN0YW5jZW9mIENhbmNlbGxhdGlvbikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIGlmIChhYm9ydFJlYXNvbiBpbnN0YW5jZW9mIFJlZGlyZWN0KSB7XG4gICAgICAgICAgbG9jYXRpb24ucmVwbGFjZShSb3V0ZXIubWFrZVBhdGgoYWJvcnRSZWFzb24udG8sIGFib3J0UmVhc29uLnBhcmFtcywgYWJvcnRSZWFzb24ucXVlcnkpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsb2NhdGlvbi5wb3AoKTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgaGFuZGxlRXJyb3I6IG9wdGlvbnMub25FcnJvciB8fCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgLy8gVGhyb3cgc28gd2UgZG9uJ3Qgc2lsZW50bHkgc3dhbGxvdyBhc3luYyBlcnJvcnMuXG4gICAgICAgIHRocm93IGVycm9yOyAvLyBUaGlzIGVycm9yIHByb2JhYmx5IG9yaWdpbmF0ZWQgaW4gYSB0cmFuc2l0aW9uIGhvb2suXG4gICAgICB9LFxuXG4gICAgICBoYW5kbGVMb2NhdGlvbkNoYW5nZTogZnVuY3Rpb24gaGFuZGxlTG9jYXRpb25DaGFuZ2UoY2hhbmdlKSB7XG4gICAgICAgIFJvdXRlci5kaXNwYXRjaChjaGFuZ2UucGF0aCwgY2hhbmdlLnR5cGUpO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBQZXJmb3JtcyBhIHRyYW5zaXRpb24gdG8gdGhlIGdpdmVuIHBhdGggYW5kIGNhbGxzIGNhbGxiYWNrKGVycm9yLCBhYm9ydFJlYXNvbilcbiAgICAgICAqIHdoZW4gdGhlIHRyYW5zaXRpb24gaXMgZmluaXNoZWQuIElmIGJvdGggYXJndW1lbnRzIGFyZSBudWxsIHRoZSByb3V0ZXIncyBzdGF0ZVxuICAgICAgICogd2FzIHVwZGF0ZWQuIE90aGVyd2lzZSB0aGUgdHJhbnNpdGlvbiBkaWQgbm90IGNvbXBsZXRlLlxuICAgICAgICpcbiAgICAgICAqIEluIGEgdHJhbnNpdGlvbiwgYSByb3V0ZXIgZmlyc3QgZGV0ZXJtaW5lcyB3aGljaCByb3V0ZXMgYXJlIGludm9sdmVkIGJ5IGJlZ2lubmluZ1xuICAgICAgICogd2l0aCB0aGUgY3VycmVudCByb3V0ZSwgdXAgdGhlIHJvdXRlIHRyZWUgdG8gdGhlIGZpcnN0IHBhcmVudCByb3V0ZSB0aGF0IGlzIHNoYXJlZFxuICAgICAgICogd2l0aCB0aGUgZGVzdGluYXRpb24gcm91dGUsIGFuZCBiYWNrIGRvd24gdGhlIHRyZWUgdG8gdGhlIGRlc3RpbmF0aW9uIHJvdXRlLiBUaGVcbiAgICAgICAqIHdpbGxUcmFuc2l0aW9uRnJvbSBob29rIGlzIGludm9rZWQgb24gYWxsIHJvdXRlIGhhbmRsZXJzIHdlJ3JlIHRyYW5zaXRpb25pbmcgYXdheVxuICAgICAgICogZnJvbSwgaW4gcmV2ZXJzZSBuZXN0aW5nIG9yZGVyLiBMaWtld2lzZSwgdGhlIHdpbGxUcmFuc2l0aW9uVG8gaG9vayBpcyBpbnZva2VkIG9uXG4gICAgICAgKiBhbGwgcm91dGUgaGFuZGxlcnMgd2UncmUgdHJhbnNpdGlvbmluZyB0by5cbiAgICAgICAqXG4gICAgICAgKiBCb3RoIHdpbGxUcmFuc2l0aW9uRnJvbSBhbmQgd2lsbFRyYW5zaXRpb25UbyBob29rcyBtYXkgZWl0aGVyIGFib3J0IG9yIHJlZGlyZWN0IHRoZVxuICAgICAgICogdHJhbnNpdGlvbi4gVG8gcmVzb2x2ZSBhc3luY2hyb25vdXNseSwgdGhleSBtYXkgdXNlIHRoZSBjYWxsYmFjayBhcmd1bWVudC4gSWYgbm9cbiAgICAgICAqIGhvb2tzIHdhaXQsIHRoZSB0cmFuc2l0aW9uIGlzIGZ1bGx5IHN5bmNocm9ub3VzLlxuICAgICAgICovXG4gICAgICBkaXNwYXRjaDogZnVuY3Rpb24gZGlzcGF0Y2gocGF0aCwgYWN0aW9uKSB7XG4gICAgICAgIFJvdXRlci5jYW5jZWxQZW5kaW5nVHJhbnNpdGlvbigpO1xuXG4gICAgICAgIHZhciBwcmV2UGF0aCA9IHN0YXRlLnBhdGg7XG4gICAgICAgIHZhciBpc1JlZnJlc2hpbmcgPSBhY3Rpb24gPT0gbnVsbDtcblxuICAgICAgICBpZiAocHJldlBhdGggPT09IHBhdGggJiYgIWlzUmVmcmVzaGluZykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSAvLyBOb3RoaW5nIHRvIGRvIVxuXG4gICAgICAgIC8vIFJlY29yZCB0aGUgc2Nyb2xsIHBvc2l0aW9uIGFzIGVhcmx5IGFzIHBvc3NpYmxlIHRvXG4gICAgICAgIC8vIGdldCBpdCBiZWZvcmUgYnJvd3NlcnMgdHJ5IHVwZGF0ZSBpdCBhdXRvbWF0aWNhbGx5LlxuICAgICAgICBpZiAocHJldlBhdGggJiYgYWN0aW9uID09PSBMb2NhdGlvbkFjdGlvbnMuUFVTSCkgUm91dGVyLnJlY29yZFNjcm9sbFBvc2l0aW9uKHByZXZQYXRoKTtcblxuICAgICAgICB2YXIgbWF0Y2ggPSBSb3V0ZXIubWF0Y2gocGF0aCk7XG5cbiAgICAgICAgd2FybmluZyhtYXRjaCAhPSBudWxsLCAnTm8gcm91dGUgbWF0Y2hlcyBwYXRoIFwiJXNcIi4gTWFrZSBzdXJlIHlvdSBoYXZlIDxSb3V0ZSBwYXRoPVwiJXNcIj4gc29tZXdoZXJlIGluIHlvdXIgcm91dGVzJywgcGF0aCwgcGF0aCk7XG5cbiAgICAgICAgaWYgKG1hdGNoID09IG51bGwpIG1hdGNoID0ge307XG5cbiAgICAgICAgdmFyIHByZXZSb3V0ZXMgPSBzdGF0ZS5yb3V0ZXMgfHwgW107XG4gICAgICAgIHZhciBwcmV2UGFyYW1zID0gc3RhdGUucGFyYW1zIHx8IHt9O1xuICAgICAgICB2YXIgcHJldlF1ZXJ5ID0gc3RhdGUucXVlcnkgfHwge307XG5cbiAgICAgICAgdmFyIG5leHRSb3V0ZXMgPSBtYXRjaC5yb3V0ZXMgfHwgW107XG4gICAgICAgIHZhciBuZXh0UGFyYW1zID0gbWF0Y2gucGFyYW1zIHx8IHt9O1xuICAgICAgICB2YXIgbmV4dFF1ZXJ5ID0gbWF0Y2gucXVlcnkgfHwge307XG5cbiAgICAgICAgdmFyIGZyb21Sb3V0ZXMsIHRvUm91dGVzO1xuICAgICAgICBpZiAocHJldlJvdXRlcy5sZW5ndGgpIHtcbiAgICAgICAgICBmcm9tUm91dGVzID0gcHJldlJvdXRlcy5maWx0ZXIoZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gIWhhc01hdGNoKG5leHRSb3V0ZXMsIHJvdXRlLCBwcmV2UGFyYW1zLCBuZXh0UGFyYW1zLCBwcmV2UXVlcnksIG5leHRRdWVyeSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB0b1JvdXRlcyA9IG5leHRSb3V0ZXMuZmlsdGVyKGZ1bmN0aW9uIChyb3V0ZSkge1xuICAgICAgICAgICAgcmV0dXJuICFoYXNNYXRjaChwcmV2Um91dGVzLCByb3V0ZSwgcHJldlBhcmFtcywgbmV4dFBhcmFtcywgcHJldlF1ZXJ5LCBuZXh0UXVlcnkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZyb21Sb3V0ZXMgPSBbXTtcbiAgICAgICAgICB0b1JvdXRlcyA9IG5leHRSb3V0ZXM7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdHJhbnNpdGlvbiA9IG5ldyBUcmFuc2l0aW9uKHBhdGgsIFJvdXRlci5yZXBsYWNlV2l0aC5iaW5kKFJvdXRlciwgcGF0aCkpO1xuICAgICAgICBwZW5kaW5nVHJhbnNpdGlvbiA9IHRyYW5zaXRpb247XG5cbiAgICAgICAgdmFyIGZyb21Db21wb25lbnRzID0gbW91bnRlZENvbXBvbmVudHMuc2xpY2UocHJldlJvdXRlcy5sZW5ndGggLSBmcm9tUm91dGVzLmxlbmd0aCk7XG5cbiAgICAgICAgVHJhbnNpdGlvbi5mcm9tKHRyYW5zaXRpb24sIGZyb21Sb3V0ZXMsIGZyb21Db21wb25lbnRzLCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICBpZiAoZXJyb3IgfHwgdHJhbnNpdGlvbi5hYm9ydFJlYXNvbikgcmV0dXJuIGRpc3BhdGNoSGFuZGxlci5jYWxsKFJvdXRlciwgZXJyb3IsIHRyYW5zaXRpb24pOyAvLyBObyBuZWVkIHRvIGNvbnRpbnVlLlxuXG4gICAgICAgICAgVHJhbnNpdGlvbi50byh0cmFuc2l0aW9uLCB0b1JvdXRlcywgbmV4dFBhcmFtcywgbmV4dFF1ZXJ5LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoSGFuZGxlci5jYWxsKFJvdXRlciwgZXJyb3IsIHRyYW5zaXRpb24sIHtcbiAgICAgICAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICAgICAgICAgIHBhdGhuYW1lOiBtYXRjaC5wYXRobmFtZSxcbiAgICAgICAgICAgICAgcm91dGVzOiBuZXh0Um91dGVzLFxuICAgICAgICAgICAgICBwYXJhbXM6IG5leHRQYXJhbXMsXG4gICAgICAgICAgICAgIHF1ZXJ5OiBuZXh0UXVlcnlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogU3RhcnRzIHRoaXMgcm91dGVyIGFuZCBjYWxscyBjYWxsYmFjayhyb3V0ZXIsIHN0YXRlKSB3aGVuIHRoZSByb3V0ZSBjaGFuZ2VzLlxuICAgICAgICpcbiAgICAgICAqIElmIHRoZSByb3V0ZXIncyBsb2NhdGlvbiBpcyBzdGF0aWMgKGkuZS4gYSBVUkwgcGF0aCBpbiBhIHNlcnZlciBlbnZpcm9ubWVudClcbiAgICAgICAqIHRoZSBjYWxsYmFjayBpcyBjYWxsZWQgb25seSBvbmNlLiBPdGhlcndpc2UsIHRoZSBsb2NhdGlvbiBzaG91bGQgYmUgb25lIG9mIHRoZVxuICAgICAgICogUm91dGVyLipMb2NhdGlvbiBvYmplY3RzIChlLmcuIFJvdXRlci5IYXNoTG9jYXRpb24gb3IgUm91dGVyLkhpc3RvcnlMb2NhdGlvbikuXG4gICAgICAgKi9cbiAgICAgIHJ1bjogZnVuY3Rpb24gcnVuKGNhbGxiYWNrKSB7XG4gICAgICAgIGludmFyaWFudCghUm91dGVyLmlzUnVubmluZywgJ1JvdXRlciBpcyBhbHJlYWR5IHJ1bm5pbmcnKTtcblxuICAgICAgICBkaXNwYXRjaEhhbmRsZXIgPSBmdW5jdGlvbiAoZXJyb3IsIHRyYW5zaXRpb24sIG5ld1N0YXRlKSB7XG4gICAgICAgICAgaWYgKGVycm9yKSBSb3V0ZXIuaGFuZGxlRXJyb3IoZXJyb3IpO1xuXG4gICAgICAgICAgaWYgKHBlbmRpbmdUcmFuc2l0aW9uICE9PSB0cmFuc2l0aW9uKSByZXR1cm47XG5cbiAgICAgICAgICBwZW5kaW5nVHJhbnNpdGlvbiA9IG51bGw7XG5cbiAgICAgICAgICBpZiAodHJhbnNpdGlvbi5hYm9ydFJlYXNvbikge1xuICAgICAgICAgICAgUm91dGVyLmhhbmRsZUFib3J0KHRyYW5zaXRpb24uYWJvcnRSZWFzb24pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKFJvdXRlciwgUm91dGVyLCBuZXh0U3RhdGUgPSBuZXdTdGF0ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICghKGxvY2F0aW9uIGluc3RhbmNlb2YgU3RhdGljTG9jYXRpb24pKSB7XG4gICAgICAgICAgaWYgKGxvY2F0aW9uLmFkZENoYW5nZUxpc3RlbmVyKSBsb2NhdGlvbi5hZGRDaGFuZ2VMaXN0ZW5lcihSb3V0ZXIuaGFuZGxlTG9jYXRpb25DaGFuZ2UpO1xuXG4gICAgICAgICAgUm91dGVyLmlzUnVubmluZyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCb290c3RyYXAgdXNpbmcgdGhlIGN1cnJlbnQgcGF0aC5cbiAgICAgICAgUm91dGVyLnJlZnJlc2goKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlZnJlc2g6IGZ1bmN0aW9uIHJlZnJlc2goKSB7XG4gICAgICAgIFJvdXRlci5kaXNwYXRjaChsb2NhdGlvbi5nZXRDdXJyZW50UGF0aCgpLCBudWxsKTtcbiAgICAgIH0sXG5cbiAgICAgIHN0b3A6IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgIFJvdXRlci5jYW5jZWxQZW5kaW5nVHJhbnNpdGlvbigpO1xuXG4gICAgICAgIGlmIChsb2NhdGlvbi5yZW1vdmVDaGFuZ2VMaXN0ZW5lcikgbG9jYXRpb24ucmVtb3ZlQ2hhbmdlTGlzdGVuZXIoUm91dGVyLmhhbmRsZUxvY2F0aW9uQ2hhbmdlKTtcblxuICAgICAgICBSb3V0ZXIuaXNSdW5uaW5nID0gZmFsc2U7XG4gICAgICB9LFxuXG4gICAgICBnZXRMb2NhdGlvbjogZnVuY3Rpb24gZ2V0TG9jYXRpb24oKSB7XG4gICAgICAgIHJldHVybiBsb2NhdGlvbjtcbiAgICAgIH0sXG5cbiAgICAgIGdldFNjcm9sbEJlaGF2aW9yOiBmdW5jdGlvbiBnZXRTY3JvbGxCZWhhdmlvcigpIHtcbiAgICAgICAgcmV0dXJuIHNjcm9sbEJlaGF2aW9yO1xuICAgICAgfSxcblxuICAgICAgZ2V0Um91dGVBdERlcHRoOiBmdW5jdGlvbiBnZXRSb3V0ZUF0RGVwdGgocm91dGVEZXB0aCkge1xuICAgICAgICB2YXIgcm91dGVzID0gc3RhdGUucm91dGVzO1xuICAgICAgICByZXR1cm4gcm91dGVzICYmIHJvdXRlc1tyb3V0ZURlcHRoXTtcbiAgICAgIH0sXG5cbiAgICAgIHNldFJvdXRlQ29tcG9uZW50QXREZXB0aDogZnVuY3Rpb24gc2V0Um91dGVDb21wb25lbnRBdERlcHRoKHJvdXRlRGVwdGgsIGNvbXBvbmVudCkge1xuICAgICAgICBtb3VudGVkQ29tcG9uZW50c1tyb3V0ZURlcHRoXSA9IGNvbXBvbmVudDtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogUmV0dXJucyB0aGUgY3VycmVudCBVUkwgcGF0aCArIHF1ZXJ5IHN0cmluZy5cbiAgICAgICAqL1xuICAgICAgZ2V0Q3VycmVudFBhdGg6IGZ1bmN0aW9uIGdldEN1cnJlbnRQYXRoKCkge1xuICAgICAgICByZXR1cm4gc3RhdGUucGF0aDtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogUmV0dXJucyB0aGUgY3VycmVudCBVUkwgcGF0aCB3aXRob3V0IHRoZSBxdWVyeSBzdHJpbmcuXG4gICAgICAgKi9cbiAgICAgIGdldEN1cnJlbnRQYXRobmFtZTogZnVuY3Rpb24gZ2V0Q3VycmVudFBhdGhuYW1lKCkge1xuICAgICAgICByZXR1cm4gc3RhdGUucGF0aG5hbWU7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFJldHVybnMgYW4gb2JqZWN0IG9mIHRoZSBjdXJyZW50bHkgYWN0aXZlIFVSTCBwYXJhbWV0ZXJzLlxuICAgICAgICovXG4gICAgICBnZXRDdXJyZW50UGFyYW1zOiBmdW5jdGlvbiBnZXRDdXJyZW50UGFyYW1zKCkge1xuICAgICAgICByZXR1cm4gc3RhdGUucGFyYW1zO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBSZXR1cm5zIGFuIG9iamVjdCBvZiB0aGUgY3VycmVudGx5IGFjdGl2ZSBxdWVyeSBwYXJhbWV0ZXJzLlxuICAgICAgICovXG4gICAgICBnZXRDdXJyZW50UXVlcnk6IGZ1bmN0aW9uIGdldEN1cnJlbnRRdWVyeSgpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlLnF1ZXJ5O1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIHRoZSBjdXJyZW50bHkgYWN0aXZlIHJvdXRlcy5cbiAgICAgICAqL1xuICAgICAgZ2V0Q3VycmVudFJvdXRlczogZnVuY3Rpb24gZ2V0Q3VycmVudFJvdXRlcygpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlLnJvdXRlcztcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiByb3V0ZSwgcGFyYW1zLCBhbmQgcXVlcnkgYXJlIGFjdGl2ZS5cbiAgICAgICAqL1xuICAgICAgaXNBY3RpdmU6IGZ1bmN0aW9uIGlzQWN0aXZlKHRvLCBwYXJhbXMsIHF1ZXJ5KSB7XG4gICAgICAgIGlmIChQYXRoVXRpbHMuaXNBYnNvbHV0ZSh0bykpIHtcbiAgICAgICAgICByZXR1cm4gdG8gPT09IHN0YXRlLnBhdGg7XG4gICAgICAgIH1yZXR1cm4gcm91dGVJc0FjdGl2ZShzdGF0ZS5yb3V0ZXMsIHRvKSAmJiBwYXJhbXNBcmVBY3RpdmUoc3RhdGUucGFyYW1zLCBwYXJhbXMpICYmIChxdWVyeSA9PSBudWxsIHx8IHF1ZXJ5SXNBY3RpdmUoc3RhdGUucXVlcnksIHF1ZXJ5KSk7XG4gICAgICB9XG5cbiAgICB9LFxuXG4gICAgbWl4aW5zOiBbU2Nyb2xsSGlzdG9yeV0sXG5cbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuZmFsc3lcbiAgICB9LFxuXG4gICAgY2hpbGRDb250ZXh0VHlwZXM6IHtcbiAgICAgIHJvdXRlRGVwdGg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgIHJvdXRlcjogUHJvcFR5cGVzLnJvdXRlci5pc1JlcXVpcmVkXG4gICAgfSxcblxuICAgIGdldENoaWxkQ29udGV4dDogZnVuY3Rpb24gZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcm91dGVEZXB0aDogMSxcbiAgICAgICAgcm91dGVyOiBSb3V0ZXJcbiAgICAgIH07XG4gICAgfSxcblxuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgICAgcmV0dXJuIHN0YXRlID0gbmV4dFN0YXRlO1xuICAgIH0sXG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSA9IG5leHRTdGF0ZSk7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIFJvdXRlci5zdG9wKCk7XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIHJvdXRlID0gUm91dGVyLmdldFJvdXRlQXREZXB0aCgwKTtcbiAgICAgIHJldHVybiByb3V0ZSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQocm91dGUuaGFuZGxlciwgdGhpcy5wcm9wcykgOiBudWxsO1xuICAgIH1cblxuICB9KTtcblxuICBSb3V0ZXIuY2xlYXJBbGxSb3V0ZXMoKTtcblxuICBpZiAob3B0aW9ucy5yb3V0ZXMpIFJvdXRlci5hZGRSb3V0ZXMob3B0aW9ucy5yb3V0ZXMpO1xuXG4gIHJldHVybiBSb3V0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlUm91dGVyOyIsIi8qIGpzaGludCAtVzA4NCAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ3JlYWN0L2xpYi9PYmplY3QuYXNzaWduJyk7XG52YXIgd2FybmluZyA9IHJlcXVpcmUoJ3JlYWN0L2xpYi93YXJuaW5nJyk7XG52YXIgRGVmYXVsdFJvdXRlID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL0RlZmF1bHRSb3V0ZScpO1xudmFyIE5vdEZvdW5kUm91dGUgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvTm90Rm91bmRSb3V0ZScpO1xudmFyIFJlZGlyZWN0ID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL1JlZGlyZWN0Jyk7XG52YXIgUm91dGUgPSByZXF1aXJlKCcuL1JvdXRlJyk7XG5cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKGNvbXBvbmVudE5hbWUsIHByb3BUeXBlcywgcHJvcHMpIHtcbiAgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWUgfHwgJ1Vua25vd25Db21wb25lbnQnO1xuXG4gIGZvciAodmFyIHByb3BOYW1lIGluIHByb3BUeXBlcykge1xuICAgIGlmIChwcm9wVHlwZXMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICB2YXIgZXJyb3IgPSBwcm9wVHlwZXNbcHJvcE5hbWVdKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSk7XG5cbiAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB3YXJuaW5nKGZhbHNlLCBlcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlUm91dGVPcHRpb25zKHByb3BzKSB7XG4gIHZhciBvcHRpb25zID0gYXNzaWduKHt9LCBwcm9wcyk7XG4gIHZhciBoYW5kbGVyID0gb3B0aW9ucy5oYW5kbGVyO1xuXG4gIGlmIChoYW5kbGVyKSB7XG4gICAgb3B0aW9ucy5vbkVudGVyID0gaGFuZGxlci53aWxsVHJhbnNpdGlvblRvO1xuICAgIG9wdGlvbnMub25MZWF2ZSA9IGhhbmRsZXIud2lsbFRyYW5zaXRpb25Gcm9tO1xuICB9XG5cbiAgcmV0dXJuIG9wdGlvbnM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlRnJvbVJlYWN0RWxlbWVudChlbGVtZW50KSB7XG4gIGlmICghUmVhY3QuaXNWYWxpZEVsZW1lbnQoZWxlbWVudCkpIHtcbiAgICByZXR1cm47XG4gIH12YXIgdHlwZSA9IGVsZW1lbnQudHlwZTtcbiAgdmFyIHByb3BzID0gYXNzaWduKHt9LCB0eXBlLmRlZmF1bHRQcm9wcywgZWxlbWVudC5wcm9wcyk7XG5cbiAgaWYgKHR5cGUucHJvcFR5cGVzKSBjaGVja1Byb3BUeXBlcyh0eXBlLmRpc3BsYXlOYW1lLCB0eXBlLnByb3BUeXBlcywgcHJvcHMpO1xuXG4gIGlmICh0eXBlID09PSBEZWZhdWx0Um91dGUpIHtcbiAgICByZXR1cm4gUm91dGUuY3JlYXRlRGVmYXVsdFJvdXRlKGNyZWF0ZVJvdXRlT3B0aW9ucyhwcm9wcykpO1xuICB9aWYgKHR5cGUgPT09IE5vdEZvdW5kUm91dGUpIHtcbiAgICByZXR1cm4gUm91dGUuY3JlYXRlTm90Rm91bmRSb3V0ZShjcmVhdGVSb3V0ZU9wdGlvbnMocHJvcHMpKTtcbiAgfWlmICh0eXBlID09PSBSZWRpcmVjdCkge1xuICAgIHJldHVybiBSb3V0ZS5jcmVhdGVSZWRpcmVjdChjcmVhdGVSb3V0ZU9wdGlvbnMocHJvcHMpKTtcbiAgfXJldHVybiBSb3V0ZS5jcmVhdGVSb3V0ZShjcmVhdGVSb3V0ZU9wdGlvbnMocHJvcHMpLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHByb3BzLmNoaWxkcmVuKSBjcmVhdGVSb3V0ZXNGcm9tUmVhY3RDaGlsZHJlbihwcm9wcy5jaGlsZHJlbik7XG4gIH0pO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW5kIHJldHVybnMgYW4gYXJyYXkgb2Ygcm91dGVzIGNyZWF0ZWQgZnJvbSB0aGUgZ2l2ZW5cbiAqIFJlYWN0Q2hpbGRyZW4sIGFsbCBvZiB3aGljaCBzaG91bGQgYmUgb25lIG9mIDxSb3V0ZT4sIDxEZWZhdWx0Um91dGU+LFxuICogPE5vdEZvdW5kUm91dGU+LCBvciA8UmVkaXJlY3Q+LCBlLmcuOlxuICpcbiAqICAgdmFyIHsgY3JlYXRlUm91dGVzRnJvbVJlYWN0Q2hpbGRyZW4sIFJvdXRlLCBSZWRpcmVjdCB9ID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJyk7XG4gKlxuICogICB2YXIgcm91dGVzID0gY3JlYXRlUm91dGVzRnJvbVJlYWN0Q2hpbGRyZW4oXG4gKiAgICAgPFJvdXRlIHBhdGg9XCIvXCIgaGFuZGxlcj17QXBwfT5cbiAqICAgICAgIDxSb3V0ZSBuYW1lPVwidXNlclwiIHBhdGg9XCIvdXNlci86dXNlcklkXCIgaGFuZGxlcj17VXNlcn0+XG4gKiAgICAgICAgIDxSb3V0ZSBuYW1lPVwidGFza1wiIHBhdGg9XCJ0YXNrcy86dGFza0lkXCIgaGFuZGxlcj17VGFza30vPlxuICogICAgICAgICA8UmVkaXJlY3QgZnJvbT1cInRvZG9zLzp0YXNrSWRcIiB0bz1cInRhc2tcIi8+XG4gKiAgICAgICA8L1JvdXRlPlxuICogICAgIDwvUm91dGU+XG4gKiAgICk7XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlc0Zyb21SZWFjdENoaWxkcmVuKGNoaWxkcmVuKSB7XG4gIHZhciByb3V0ZXMgPSBbXTtcblxuICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICBpZiAoY2hpbGQgPSBjcmVhdGVSb3V0ZUZyb21SZWFjdEVsZW1lbnQoY2hpbGQpKSByb3V0ZXMucHVzaChjaGlsZCk7XG4gIH0pO1xuXG4gIHJldHVybiByb3V0ZXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlUm91dGVzRnJvbVJlYWN0Q2hpbGRyZW47IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgncmVhY3QvbGliL2ludmFyaWFudCcpO1xudmFyIGNhblVzZURPTSA9IHJlcXVpcmUoJ3JlYWN0L2xpYi9FeGVjdXRpb25FbnZpcm9ubWVudCcpLmNhblVzZURPTTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbiBvZiB0aGUgd2luZG93IGFzIHsgeCwgeSB9LlxuICovXG5mdW5jdGlvbiBnZXRXaW5kb3dTY3JvbGxQb3NpdGlvbigpIHtcbiAgaW52YXJpYW50KGNhblVzZURPTSwgJ0Nhbm5vdCBnZXQgY3VycmVudCBzY3JvbGwgcG9zaXRpb24gd2l0aG91dCBhIERPTScpO1xuXG4gIHJldHVybiB7XG4gICAgeDogd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0LFxuICAgIHk6IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0V2luZG93U2Nyb2xsUG9zaXRpb247IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLkRlZmF1bHRSb3V0ZSA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9EZWZhdWx0Um91dGUnKTtcbmV4cG9ydHMuTGluayA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9MaW5rJyk7XG5leHBvcnRzLk5vdEZvdW5kUm91dGUgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvTm90Rm91bmRSb3V0ZScpO1xuZXhwb3J0cy5SZWRpcmVjdCA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9SZWRpcmVjdCcpO1xuZXhwb3J0cy5Sb3V0ZSA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9Sb3V0ZScpO1xuZXhwb3J0cy5BY3RpdmVIYW5kbGVyID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL1JvdXRlSGFuZGxlcicpO1xuZXhwb3J0cy5Sb3V0ZUhhbmRsZXIgPSBleHBvcnRzLkFjdGl2ZUhhbmRsZXI7XG5cbmV4cG9ydHMuSGFzaExvY2F0aW9uID0gcmVxdWlyZSgnLi9sb2NhdGlvbnMvSGFzaExvY2F0aW9uJyk7XG5leHBvcnRzLkhpc3RvcnlMb2NhdGlvbiA9IHJlcXVpcmUoJy4vbG9jYXRpb25zL0hpc3RvcnlMb2NhdGlvbicpO1xuZXhwb3J0cy5SZWZyZXNoTG9jYXRpb24gPSByZXF1aXJlKCcuL2xvY2F0aW9ucy9SZWZyZXNoTG9jYXRpb24nKTtcbmV4cG9ydHMuU3RhdGljTG9jYXRpb24gPSByZXF1aXJlKCcuL2xvY2F0aW9ucy9TdGF0aWNMb2NhdGlvbicpO1xuZXhwb3J0cy5UZXN0TG9jYXRpb24gPSByZXF1aXJlKCcuL2xvY2F0aW9ucy9UZXN0TG9jYXRpb24nKTtcblxuZXhwb3J0cy5JbWl0YXRlQnJvd3NlckJlaGF2aW9yID0gcmVxdWlyZSgnLi9iZWhhdmlvcnMvSW1pdGF0ZUJyb3dzZXJCZWhhdmlvcicpO1xuZXhwb3J0cy5TY3JvbGxUb1RvcEJlaGF2aW9yID0gcmVxdWlyZSgnLi9iZWhhdmlvcnMvU2Nyb2xsVG9Ub3BCZWhhdmlvcicpO1xuXG5leHBvcnRzLkhpc3RvcnkgPSByZXF1aXJlKCcuL0hpc3RvcnknKTtcbmV4cG9ydHMuTmF2aWdhdGlvbiA9IHJlcXVpcmUoJy4vTmF2aWdhdGlvbicpO1xuZXhwb3J0cy5TdGF0ZSA9IHJlcXVpcmUoJy4vU3RhdGUnKTtcblxuZXhwb3J0cy5jcmVhdGVSb3V0ZSA9IHJlcXVpcmUoJy4vUm91dGUnKS5jcmVhdGVSb3V0ZTtcbmV4cG9ydHMuY3JlYXRlRGVmYXVsdFJvdXRlID0gcmVxdWlyZSgnLi9Sb3V0ZScpLmNyZWF0ZURlZmF1bHRSb3V0ZTtcbmV4cG9ydHMuY3JlYXRlTm90Rm91bmRSb3V0ZSA9IHJlcXVpcmUoJy4vUm91dGUnKS5jcmVhdGVOb3RGb3VuZFJvdXRlO1xuZXhwb3J0cy5jcmVhdGVSZWRpcmVjdCA9IHJlcXVpcmUoJy4vUm91dGUnKS5jcmVhdGVSZWRpcmVjdDtcbmV4cG9ydHMuY3JlYXRlUm91dGVzRnJvbVJlYWN0Q2hpbGRyZW4gPSByZXF1aXJlKCcuL2NyZWF0ZVJvdXRlc0Zyb21SZWFjdENoaWxkcmVuJyk7XG5cbmV4cG9ydHMuY3JlYXRlID0gcmVxdWlyZSgnLi9jcmVhdGVSb3V0ZXInKTtcbmV4cG9ydHMucnVuID0gcmVxdWlyZSgnLi9ydW5Sb3V0ZXInKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbmZ1bmN0aW9uIGlzVmFsaWRDaGlsZChvYmplY3QpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsIHx8IFJlYWN0LmlzVmFsaWRFbGVtZW50KG9iamVjdCk7XG59XG5cbmZ1bmN0aW9uIGlzUmVhY3RDaGlsZHJlbihvYmplY3QpIHtcbiAgcmV0dXJuIGlzVmFsaWRDaGlsZChvYmplY3QpIHx8IEFycmF5LmlzQXJyYXkob2JqZWN0KSAmJiBvYmplY3QuZXZlcnkoaXNWYWxpZENoaWxkKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1JlYWN0Q2hpbGRyZW47IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgTG9jYXRpb25BY3Rpb25zID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9Mb2NhdGlvbkFjdGlvbnMnKTtcbnZhciBIaXN0b3J5ID0gcmVxdWlyZSgnLi4vSGlzdG9yeScpO1xuXG52YXIgX2xpc3RlbmVycyA9IFtdO1xudmFyIF9pc0xpc3RlbmluZyA9IGZhbHNlO1xudmFyIF9hY3Rpb25UeXBlO1xuXG5mdW5jdGlvbiBub3RpZnlDaGFuZ2UodHlwZSkge1xuICBpZiAodHlwZSA9PT0gTG9jYXRpb25BY3Rpb25zLlBVU0gpIEhpc3RvcnkubGVuZ3RoICs9IDE7XG5cbiAgdmFyIGNoYW5nZSA9IHtcbiAgICBwYXRoOiBIYXNoTG9jYXRpb24uZ2V0Q3VycmVudFBhdGgoKSxcbiAgICB0eXBlOiB0eXBlXG4gIH07XG5cbiAgX2xpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgIGxpc3RlbmVyLmNhbGwoSGFzaExvY2F0aW9uLCBjaGFuZ2UpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZW5zdXJlU2xhc2goKSB7XG4gIHZhciBwYXRoID0gSGFzaExvY2F0aW9uLmdldEN1cnJlbnRQYXRoKCk7XG5cbiAgaWYgKHBhdGguY2hhckF0KDApID09PSAnLycpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfUhhc2hMb2NhdGlvbi5yZXBsYWNlKCcvJyArIHBhdGgpO1xuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gb25IYXNoQ2hhbmdlKCkge1xuICBpZiAoZW5zdXJlU2xhc2goKSkge1xuICAgIC8vIElmIHdlIGRvbid0IGhhdmUgYW4gX2FjdGlvblR5cGUgdGhlbiBhbGwgd2Uga25vdyBpcyB0aGUgaGFzaFxuICAgIC8vIGNoYW5nZWQuIEl0IHdhcyBwcm9iYWJseSBjYXVzZWQgYnkgdGhlIHVzZXIgY2xpY2tpbmcgdGhlIEJhY2tcbiAgICAvLyBidXR0b24sIGJ1dCBtYXkgaGF2ZSBhbHNvIGJlZW4gdGhlIEZvcndhcmQgYnV0dG9uIG9yIG1hbnVhbFxuICAgIC8vIG1hbmlwdWxhdGlvbi4gU28ganVzdCBndWVzcyAncG9wJy5cbiAgICB2YXIgY3VyQWN0aW9uVHlwZSA9IF9hY3Rpb25UeXBlO1xuICAgIF9hY3Rpb25UeXBlID0gbnVsbDtcbiAgICBub3RpZnlDaGFuZ2UoY3VyQWN0aW9uVHlwZSB8fCBMb2NhdGlvbkFjdGlvbnMuUE9QKTtcbiAgfVxufVxuXG4vKipcbiAqIEEgTG9jYXRpb24gdGhhdCB1c2VzIGB3aW5kb3cubG9jYXRpb24uaGFzaGAuXG4gKi9cbnZhciBIYXNoTG9jYXRpb24gPSB7XG5cbiAgYWRkQ2hhbmdlTGlzdGVuZXI6IGZ1bmN0aW9uIGFkZENoYW5nZUxpc3RlbmVyKGxpc3RlbmVyKSB7XG4gICAgX2xpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcblxuICAgIC8vIERvIHRoaXMgQkVGT1JFIGxpc3RlbmluZyBmb3IgaGFzaGNoYW5nZS5cbiAgICBlbnN1cmVTbGFzaCgpO1xuXG4gICAgaWYgKCFfaXNMaXN0ZW5pbmcpIHtcbiAgICAgIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIG9uSGFzaENoYW5nZSwgZmFsc2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LmF0dGFjaEV2ZW50KCdvbmhhc2hjaGFuZ2UnLCBvbkhhc2hDaGFuZ2UpO1xuICAgICAgfVxuXG4gICAgICBfaXNMaXN0ZW5pbmcgPSB0cnVlO1xuICAgIH1cbiAgfSxcblxuICByZW1vdmVDaGFuZ2VMaXN0ZW5lcjogZnVuY3Rpb24gcmVtb3ZlQ2hhbmdlTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICBfbGlzdGVuZXJzID0gX2xpc3RlbmVycy5maWx0ZXIoZnVuY3Rpb24gKGwpIHtcbiAgICAgIHJldHVybiBsICE9PSBsaXN0ZW5lcjtcbiAgICB9KTtcblxuICAgIGlmIChfbGlzdGVuZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgaWYgKHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgb25IYXNoQ2hhbmdlLCBmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnQoJ29uaGFzaGNoYW5nZScsIG9uSGFzaENoYW5nZSk7XG4gICAgICB9XG5cbiAgICAgIF9pc0xpc3RlbmluZyA9IGZhbHNlO1xuICAgIH1cbiAgfSxcblxuICBwdXNoOiBmdW5jdGlvbiBwdXNoKHBhdGgpIHtcbiAgICBfYWN0aW9uVHlwZSA9IExvY2F0aW9uQWN0aW9ucy5QVVNIO1xuICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gcGF0aDtcbiAgfSxcblxuICByZXBsYWNlOiBmdW5jdGlvbiByZXBsYWNlKHBhdGgpIHtcbiAgICBfYWN0aW9uVHlwZSA9IExvY2F0aW9uQWN0aW9ucy5SRVBMQUNFO1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggKyAnIycgKyBwYXRoKTtcbiAgfSxcblxuICBwb3A6IGZ1bmN0aW9uIHBvcCgpIHtcbiAgICBfYWN0aW9uVHlwZSA9IExvY2F0aW9uQWN0aW9ucy5QT1A7XG4gICAgSGlzdG9yeS5iYWNrKCk7XG4gIH0sXG5cbiAgZ2V0Q3VycmVudFBhdGg6IGZ1bmN0aW9uIGdldEN1cnJlbnRQYXRoKCkge1xuICAgIHJldHVybiBkZWNvZGVVUkkoXG4gICAgLy8gV2UgY2FuJ3QgdXNlIHdpbmRvdy5sb2NhdGlvbi5oYXNoIGhlcmUgYmVjYXVzZSBpdCdzIG5vdFxuICAgIC8vIGNvbnNpc3RlbnQgYWNyb3NzIGJyb3dzZXJzIC0gRmlyZWZveCB3aWxsIHByZS1kZWNvZGUgaXQhXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJyMnKVsxXSB8fCAnJyk7XG4gIH0sXG5cbiAgdG9TdHJpbmc6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiAnPEhhc2hMb2NhdGlvbj4nO1xuICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSGFzaExvY2F0aW9uOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIExvY2F0aW9uQWN0aW9ucyA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvTG9jYXRpb25BY3Rpb25zJyk7XG52YXIgSGlzdG9yeSA9IHJlcXVpcmUoJy4uL0hpc3RvcnknKTtcblxudmFyIF9saXN0ZW5lcnMgPSBbXTtcbnZhciBfaXNMaXN0ZW5pbmcgPSBmYWxzZTtcblxuZnVuY3Rpb24gbm90aWZ5Q2hhbmdlKHR5cGUpIHtcbiAgdmFyIGNoYW5nZSA9IHtcbiAgICBwYXRoOiBIaXN0b3J5TG9jYXRpb24uZ2V0Q3VycmVudFBhdGgoKSxcbiAgICB0eXBlOiB0eXBlXG4gIH07XG5cbiAgX2xpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgIGxpc3RlbmVyLmNhbGwoSGlzdG9yeUxvY2F0aW9uLCBjaGFuZ2UpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gb25Qb3BTdGF0ZShldmVudCkge1xuICBpZiAoZXZlbnQuc3RhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybjtcbiAgfSAvLyBJZ25vcmUgZXh0cmFuZW91cyBwb3BzdGF0ZSBldmVudHMgaW4gV2ViS2l0LlxuXG4gIG5vdGlmeUNoYW5nZShMb2NhdGlvbkFjdGlvbnMuUE9QKTtcbn1cblxuLyoqXG4gKiBBIExvY2F0aW9uIHRoYXQgdXNlcyBIVE1MNSBoaXN0b3J5LlxuICovXG52YXIgSGlzdG9yeUxvY2F0aW9uID0ge1xuXG4gIGFkZENoYW5nZUxpc3RlbmVyOiBmdW5jdGlvbiBhZGRDaGFuZ2VMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgIF9saXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cbiAgICBpZiAoIV9pc0xpc3RlbmluZykge1xuICAgICAgaWYgKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIG9uUG9wU3RhdGUsIGZhbHNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5hdHRhY2hFdmVudCgnb25wb3BzdGF0ZScsIG9uUG9wU3RhdGUpO1xuICAgICAgfVxuXG4gICAgICBfaXNMaXN0ZW5pbmcgPSB0cnVlO1xuICAgIH1cbiAgfSxcblxuICByZW1vdmVDaGFuZ2VMaXN0ZW5lcjogZnVuY3Rpb24gcmVtb3ZlQ2hhbmdlTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICBfbGlzdGVuZXJzID0gX2xpc3RlbmVycy5maWx0ZXIoZnVuY3Rpb24gKGwpIHtcbiAgICAgIHJldHVybiBsICE9PSBsaXN0ZW5lcjtcbiAgICB9KTtcblxuICAgIGlmIChfbGlzdGVuZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgaWYgKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIG9uUG9wU3RhdGUsIGZhbHNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudCgnb25wb3BzdGF0ZScsIG9uUG9wU3RhdGUpO1xuICAgICAgfVxuXG4gICAgICBfaXNMaXN0ZW5pbmcgPSBmYWxzZTtcbiAgICB9XG4gIH0sXG5cbiAgcHVzaDogZnVuY3Rpb24gcHVzaChwYXRoKSB7XG4gICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHsgcGF0aDogcGF0aCB9LCAnJywgcGF0aCk7XG4gICAgSGlzdG9yeS5sZW5ndGggKz0gMTtcbiAgICBub3RpZnlDaGFuZ2UoTG9jYXRpb25BY3Rpb25zLlBVU0gpO1xuICB9LFxuXG4gIHJlcGxhY2U6IGZ1bmN0aW9uIHJlcGxhY2UocGF0aCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh7IHBhdGg6IHBhdGggfSwgJycsIHBhdGgpO1xuICAgIG5vdGlmeUNoYW5nZShMb2NhdGlvbkFjdGlvbnMuUkVQTEFDRSk7XG4gIH0sXG5cbiAgcG9wOiBIaXN0b3J5LmJhY2ssXG5cbiAgZ2V0Q3VycmVudFBhdGg6IGZ1bmN0aW9uIGdldEN1cnJlbnRQYXRoKCkge1xuICAgIHJldHVybiBkZWNvZGVVUkkod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG4gIH0sXG5cbiAgdG9TdHJpbmc6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiAnPEhpc3RvcnlMb2NhdGlvbj4nO1xuICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSGlzdG9yeUxvY2F0aW9uOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIEhpc3RvcnlMb2NhdGlvbiA9IHJlcXVpcmUoJy4vSGlzdG9yeUxvY2F0aW9uJyk7XG52YXIgSGlzdG9yeSA9IHJlcXVpcmUoJy4uL0hpc3RvcnknKTtcblxuLyoqXG4gKiBBIExvY2F0aW9uIHRoYXQgdXNlcyBmdWxsIHBhZ2UgcmVmcmVzaGVzLiBUaGlzIGlzIHVzZWQgYXNcbiAqIHRoZSBmYWxsYmFjayBmb3IgSGlzdG9yeUxvY2F0aW9uIGluIGJyb3dzZXJzIHRoYXQgZG8gbm90XG4gKiBzdXBwb3J0IHRoZSBIVE1MNSBoaXN0b3J5IEFQSS5cbiAqL1xudmFyIFJlZnJlc2hMb2NhdGlvbiA9IHtcblxuICBwdXNoOiBmdW5jdGlvbiBwdXNoKHBhdGgpIHtcbiAgICB3aW5kb3cubG9jYXRpb24gPSBwYXRoO1xuICB9LFxuXG4gIHJlcGxhY2U6IGZ1bmN0aW9uIHJlcGxhY2UocGF0aCkge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHBhdGgpO1xuICB9LFxuXG4gIHBvcDogSGlzdG9yeS5iYWNrLFxuXG4gIGdldEN1cnJlbnRQYXRoOiBIaXN0b3J5TG9jYXRpb24uZ2V0Q3VycmVudFBhdGgsXG5cbiAgdG9TdHJpbmc6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiAnPFJlZnJlc2hMb2NhdGlvbj4nO1xuICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVmcmVzaExvY2F0aW9uOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9jbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ3JlYWN0L2xpYi9pbnZhcmlhbnQnKTtcblxuZnVuY3Rpb24gdGhyb3dDYW5ub3RNb2RpZnkoKSB7XG4gIGludmFyaWFudChmYWxzZSwgJ1lvdSBjYW5ub3QgbW9kaWZ5IGEgc3RhdGljIGxvY2F0aW9uJyk7XG59XG5cbi8qKlxuICogQSBsb2NhdGlvbiB0aGF0IG9ubHkgZXZlciBjb250YWlucyBhIHNpbmdsZSBwYXRoLiBVc2VmdWwgaW5cbiAqIHN0YXRlbGVzcyBlbnZpcm9ubWVudHMgbGlrZSBzZXJ2ZXJzIHdoZXJlIHRoZXJlIGlzIG5vIHBhdGggaGlzdG9yeSxcbiAqIG9ubHkgdGhlIHBhdGggdGhhdCB3YXMgdXNlZCBpbiB0aGUgcmVxdWVzdC5cbiAqL1xuXG52YXIgU3RhdGljTG9jYXRpb24gPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTdGF0aWNMb2NhdGlvbihwYXRoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN0YXRpY0xvY2F0aW9uKTtcblxuICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoU3RhdGljTG9jYXRpb24sIFt7XG4gICAga2V5OiAnZ2V0Q3VycmVudFBhdGgnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDdXJyZW50UGF0aCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnBhdGg7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndG9TdHJpbmcnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgIHJldHVybiAnPFN0YXRpY0xvY2F0aW9uIHBhdGg9XCInICsgdGhpcy5wYXRoICsgJ1wiPic7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFN0YXRpY0xvY2F0aW9uO1xufSkoKTtcblxuLy8gVE9ETzogSW5jbHVkZSB0aGVzZSBpbiB0aGUgYWJvdmUgY2xhc3MgZGVmaW5pdGlvblxuLy8gb25jZSB3ZSBjYW4gdXNlIEVTNyBwcm9wZXJ0eSBpbml0aWFsaXplcnMuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYmFiZWwvYmFiZWwvaXNzdWVzLzYxOVxuXG5TdGF0aWNMb2NhdGlvbi5wcm90b3R5cGUucHVzaCA9IHRocm93Q2Fubm90TW9kaWZ5O1xuU3RhdGljTG9jYXRpb24ucHJvdG90eXBlLnJlcGxhY2UgPSB0aHJvd0Nhbm5vdE1vZGlmeTtcblN0YXRpY0xvY2F0aW9uLnByb3RvdHlwZS5wb3AgPSB0aHJvd0Nhbm5vdE1vZGlmeTtcblxubW9kdWxlLmV4cG9ydHMgPSBTdGF0aWNMb2NhdGlvbjsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdyZWFjdC9saWIvaW52YXJpYW50Jyk7XG52YXIgTG9jYXRpb25BY3Rpb25zID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9Mb2NhdGlvbkFjdGlvbnMnKTtcbnZhciBIaXN0b3J5ID0gcmVxdWlyZSgnLi4vSGlzdG9yeScpO1xuXG4vKipcbiAqIEEgbG9jYXRpb24gdGhhdCBpcyBjb252ZW5pZW50IGZvciB0ZXN0aW5nIGFuZCBkb2VzIG5vdCByZXF1aXJlIGEgRE9NLlxuICovXG5cbnZhciBUZXN0TG9jYXRpb24gPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBUZXN0TG9jYXRpb24oaGlzdG9yeSkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUZXN0TG9jYXRpb24pO1xuXG4gICAgdGhpcy5oaXN0b3J5ID0gaGlzdG9yeSB8fCBbXTtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuICAgIHRoaXMuX3VwZGF0ZUhpc3RvcnlMZW5ndGgoKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhUZXN0TG9jYXRpb24sIFt7XG4gICAga2V5OiAnbmVlZHNET00nLFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ191cGRhdGVIaXN0b3J5TGVuZ3RoJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3VwZGF0ZUhpc3RvcnlMZW5ndGgoKSB7XG4gICAgICBIaXN0b3J5Lmxlbmd0aCA9IHRoaXMuaGlzdG9yeS5sZW5ndGg7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnX25vdGlmeUNoYW5nZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9ub3RpZnlDaGFuZ2UodHlwZSkge1xuICAgICAgdmFyIGNoYW5nZSA9IHtcbiAgICAgICAgcGF0aDogdGhpcy5nZXRDdXJyZW50UGF0aCgpLFxuICAgICAgICB0eXBlOiB0eXBlXG4gICAgICB9O1xuXG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdGhpcy5saXN0ZW5lcnMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHRoaXMubGlzdGVuZXJzW2ldLmNhbGwodGhpcywgY2hhbmdlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdhZGRDaGFuZ2VMaXN0ZW5lcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZENoYW5nZUxpc3RlbmVyKGxpc3RlbmVyKSB7XG4gICAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW1vdmVDaGFuZ2VMaXN0ZW5lcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUNoYW5nZUxpc3RlbmVyKGxpc3RlbmVyKSB7XG4gICAgICB0aGlzLmxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzLmZpbHRlcihmdW5jdGlvbiAobCkge1xuICAgICAgICByZXR1cm4gbCAhPT0gbGlzdGVuZXI7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdwdXNoJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHVzaChwYXRoKSB7XG4gICAgICB0aGlzLmhpc3RvcnkucHVzaChwYXRoKTtcbiAgICAgIHRoaXMuX3VwZGF0ZUhpc3RvcnlMZW5ndGgoKTtcbiAgICAgIHRoaXMuX25vdGlmeUNoYW5nZShMb2NhdGlvbkFjdGlvbnMuUFVTSCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVwbGFjZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlcGxhY2UocGF0aCkge1xuICAgICAgaW52YXJpYW50KHRoaXMuaGlzdG9yeS5sZW5ndGgsICdZb3UgY2Fubm90IHJlcGxhY2UgdGhlIGN1cnJlbnQgcGF0aCB3aXRoIG5vIGhpc3RvcnknKTtcblxuICAgICAgdGhpcy5oaXN0b3J5W3RoaXMuaGlzdG9yeS5sZW5ndGggLSAxXSA9IHBhdGg7XG5cbiAgICAgIHRoaXMuX25vdGlmeUNoYW5nZShMb2NhdGlvbkFjdGlvbnMuUkVQTEFDRSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncG9wJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcG9wKCkge1xuICAgICAgdGhpcy5oaXN0b3J5LnBvcCgpO1xuICAgICAgdGhpcy5fdXBkYXRlSGlzdG9yeUxlbmd0aCgpO1xuICAgICAgdGhpcy5fbm90aWZ5Q2hhbmdlKExvY2F0aW9uQWN0aW9ucy5QT1ApO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldEN1cnJlbnRQYXRoJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q3VycmVudFBhdGgoKSB7XG4gICAgICByZXR1cm4gdGhpcy5oaXN0b3J5W3RoaXMuaGlzdG9yeS5sZW5ndGggLSAxXTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd0b1N0cmluZycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgcmV0dXJuICc8VGVzdExvY2F0aW9uPic7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFRlc3RMb2NhdGlvbjtcbn0pKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gVGVzdExvY2F0aW9uOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNyZWF0ZVJvdXRlciA9IHJlcXVpcmUoJy4vY3JlYXRlUm91dGVyJyk7XG5cbi8qKlxuICogQSBoaWdoLWxldmVsIGNvbnZlbmllbmNlIG1ldGhvZCB0aGF0IGNyZWF0ZXMsIGNvbmZpZ3VyZXMsIGFuZFxuICogcnVucyBhIHJvdXRlciBpbiBvbmUgc2hvdC4gVGhlIG1ldGhvZCBzaWduYXR1cmUgaXM6XG4gKlxuICogICBSb3V0ZXIucnVuKHJvdXRlc1ssIGxvY2F0aW9uIF0sIGNhbGxiYWNrKTtcbiAqXG4gKiBVc2luZyBgd2luZG93LmxvY2F0aW9uLmhhc2hgIHRvIG1hbmFnZSB0aGUgVVJMLCB5b3UgY291bGQgZG86XG4gKlxuICogICBSb3V0ZXIucnVuKHJvdXRlcywgZnVuY3Rpb24gKEhhbmRsZXIpIHtcbiAqICAgICBSZWFjdC5yZW5kZXIoPEhhbmRsZXIvPiwgZG9jdW1lbnQuYm9keSk7XG4gKiAgIH0pO1xuICogXG4gKiBVc2luZyBIVE1MNSBoaXN0b3J5IGFuZCBhIGN1c3RvbSBcImN1cnNvclwiIHByb3A6XG4gKiBcbiAqICAgUm91dGVyLnJ1bihyb3V0ZXMsIFJvdXRlci5IaXN0b3J5TG9jYXRpb24sIGZ1bmN0aW9uIChIYW5kbGVyKSB7XG4gKiAgICAgUmVhY3QucmVuZGVyKDxIYW5kbGVyIGN1cnNvcj17Y3Vyc29yfS8+LCBkb2N1bWVudC5ib2R5KTtcbiAqICAgfSk7XG4gKlxuICogUmV0dXJucyB0aGUgbmV3bHkgY3JlYXRlZCByb3V0ZXIuXG4gKlxuICogTm90ZTogSWYgeW91IG5lZWQgdG8gc3BlY2lmeSBmdXJ0aGVyIG9wdGlvbnMgZm9yIHlvdXIgcm91dGVyIHN1Y2hcbiAqIGFzIGVycm9yL2Fib3J0IGhhbmRsaW5nIG9yIGN1c3RvbSBzY3JvbGwgYmVoYXZpb3IsIHVzZSBSb3V0ZXIuY3JlYXRlXG4gKiBpbnN0ZWFkLlxuICpcbiAqICAgdmFyIHJvdXRlciA9IFJvdXRlci5jcmVhdGUob3B0aW9ucyk7XG4gKiAgIHJvdXRlci5ydW4oZnVuY3Rpb24gKEhhbmRsZXIpIHtcbiAqICAgICAvLyAuLi5cbiAqICAgfSk7XG4gKi9cbmZ1bmN0aW9uIHJ1blJvdXRlcihyb3V0ZXMsIGxvY2F0aW9uLCBjYWxsYmFjaykge1xuICBpZiAodHlwZW9mIGxvY2F0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2FsbGJhY2sgPSBsb2NhdGlvbjtcbiAgICBsb2NhdGlvbiA9IG51bGw7XG4gIH1cblxuICB2YXIgcm91dGVyID0gY3JlYXRlUm91dGVyKHtcbiAgICByb3V0ZXM6IHJvdXRlcyxcbiAgICBsb2NhdGlvbjogbG9jYXRpb25cbiAgfSk7XG5cbiAgcm91dGVyLnJ1bihjYWxsYmFjayk7XG5cbiAgcmV0dXJuIHJvdXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBydW5Sb3V0ZXI7IiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBzdXBwb3J0c0hpc3RvcnkoKSB7XG4gIC8qISB0YWtlbiBmcm9tIG1vZGVybml6clxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vTW9kZXJuaXpyL01vZGVybml6ci9ibG9iL21hc3Rlci9MSUNFTlNFXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9Nb2Rlcm5penIvTW9kZXJuaXpyL2Jsb2IvbWFzdGVyL2ZlYXR1cmUtZGV0ZWN0cy9oaXN0b3J5LmpzXG4gICAqIGNoYW5nZWQgdG8gYXZvaWQgZmFsc2UgbmVnYXRpdmVzIGZvciBXaW5kb3dzIFBob25lczogaHR0cHM6Ly9naXRodWIuY29tL3JhY2t0L3JlYWN0LXJvdXRlci9pc3N1ZXMvNTg2XG4gICAqL1xuICB2YXIgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuICBpZiAoKHVhLmluZGV4T2YoJ0FuZHJvaWQgMi4nKSAhPT0gLTEgfHwgdWEuaW5kZXhPZignQW5kcm9pZCA0LjAnKSAhPT0gLTEpICYmIHVhLmluZGV4T2YoJ01vYmlsZSBTYWZhcmknKSAhPT0gLTEgJiYgdWEuaW5kZXhPZignQ2hyb21lJykgPT09IC0xICYmIHVhLmluZGV4T2YoJ1dpbmRvd3MgUGhvbmUnKSA9PT0gLTEpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHdpbmRvdy5oaXN0b3J5ICYmICdwdXNoU3RhdGUnIGluIHdpbmRvdy5oaXN0b3J5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN1cHBvcnRzSGlzdG9yeTsiLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIFRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09IG51bGwpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIga2V5cztcblx0dmFyIHRvID0gVG9PYmplY3QodGFyZ2V0KTtcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBhcmd1bWVudHNbc107XG5cdFx0a2V5cyA9IE9iamVjdC5rZXlzKE9iamVjdChmcm9tKSk7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHRvW2tleXNbaV1dID0gZnJvbVtrZXlzW2ldXTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi8nKTtcbiIsIi8vIExvYWQgbW9kdWxlc1xuXG52YXIgU3RyaW5naWZ5ID0gcmVxdWlyZSgnLi9zdHJpbmdpZnknKTtcbnZhciBQYXJzZSA9IHJlcXVpcmUoJy4vcGFyc2UnKTtcblxuXG4vLyBEZWNsYXJlIGludGVybmFsc1xuXG52YXIgaW50ZXJuYWxzID0ge307XG5cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgc3RyaW5naWZ5OiBTdHJpbmdpZnksXG4gICAgcGFyc2U6IFBhcnNlXG59O1xuIiwiLy8gTG9hZCBtb2R1bGVzXG5cbnZhciBVdGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxuXG4vLyBEZWNsYXJlIGludGVybmFsc1xuXG52YXIgaW50ZXJuYWxzID0ge1xuICAgIGRlbGltaXRlcjogJyYnLFxuICAgIGRlcHRoOiA1LFxuICAgIGFycmF5TGltaXQ6IDIwLFxuICAgIHBhcmFtZXRlckxpbWl0OiAxMDAwXG59O1xuXG5cbmludGVybmFscy5wYXJzZVZhbHVlcyA9IGZ1bmN0aW9uIChzdHIsIG9wdGlvbnMpIHtcblxuICAgIHZhciBvYmogPSB7fTtcbiAgICB2YXIgcGFydHMgPSBzdHIuc3BsaXQob3B0aW9ucy5kZWxpbWl0ZXIsIG9wdGlvbnMucGFyYW1ldGVyTGltaXQgPT09IEluZmluaXR5ID8gdW5kZWZpbmVkIDogb3B0aW9ucy5wYXJhbWV0ZXJMaW1pdCk7XG5cbiAgICBmb3IgKHZhciBpID0gMCwgaWwgPSBwYXJ0cy5sZW5ndGg7IGkgPCBpbDsgKytpKSB7XG4gICAgICAgIHZhciBwYXJ0ID0gcGFydHNbaV07XG4gICAgICAgIHZhciBwb3MgPSBwYXJ0LmluZGV4T2YoJ109JykgPT09IC0xID8gcGFydC5pbmRleE9mKCc9JykgOiBwYXJ0LmluZGV4T2YoJ109JykgKyAxO1xuXG4gICAgICAgIGlmIChwb3MgPT09IC0xKSB7XG4gICAgICAgICAgICBvYmpbVXRpbHMuZGVjb2RlKHBhcnQpXSA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIGtleSA9IFV0aWxzLmRlY29kZShwYXJ0LnNsaWNlKDAsIHBvcykpO1xuICAgICAgICAgICAgdmFyIHZhbCA9IFV0aWxzLmRlY29kZShwYXJ0LnNsaWNlKHBvcyArIDEpKTtcblxuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIW9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgb2JqW2tleV0gPSB2YWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvYmpba2V5XSA9IFtdLmNvbmNhdChvYmpba2V5XSkuY29uY2F0KHZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xufTtcblxuXG5pbnRlcm5hbHMucGFyc2VPYmplY3QgPSBmdW5jdGlvbiAoY2hhaW4sIHZhbCwgb3B0aW9ucykge1xuXG4gICAgaWYgKCFjaGFpbi5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG5cbiAgICB2YXIgcm9vdCA9IGNoYWluLnNoaWZ0KCk7XG5cbiAgICB2YXIgb2JqID0ge307XG4gICAgaWYgKHJvb3QgPT09ICdbXScpIHtcbiAgICAgICAgb2JqID0gW107XG4gICAgICAgIG9iaiA9IG9iai5jb25jYXQoaW50ZXJuYWxzLnBhcnNlT2JqZWN0KGNoYWluLCB2YWwsIG9wdGlvbnMpKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBjbGVhblJvb3QgPSByb290WzBdID09PSAnWycgJiYgcm9vdFtyb290Lmxlbmd0aCAtIDFdID09PSAnXScgPyByb290LnNsaWNlKDEsIHJvb3QubGVuZ3RoIC0gMSkgOiByb290O1xuICAgICAgICB2YXIgaW5kZXggPSBwYXJzZUludChjbGVhblJvb3QsIDEwKTtcbiAgICAgICAgdmFyIGluZGV4U3RyaW5nID0gJycgKyBpbmRleDtcbiAgICAgICAgaWYgKCFpc05hTihpbmRleCkgJiZcbiAgICAgICAgICAgIHJvb3QgIT09IGNsZWFuUm9vdCAmJlxuICAgICAgICAgICAgaW5kZXhTdHJpbmcgPT09IGNsZWFuUm9vdCAmJlxuICAgICAgICAgICAgaW5kZXggPj0gMCAmJlxuICAgICAgICAgICAgaW5kZXggPD0gb3B0aW9ucy5hcnJheUxpbWl0KSB7XG5cbiAgICAgICAgICAgIG9iaiA9IFtdO1xuICAgICAgICAgICAgb2JqW2luZGV4XSA9IGludGVybmFscy5wYXJzZU9iamVjdChjaGFpbiwgdmFsLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG9ialtjbGVhblJvb3RdID0gaW50ZXJuYWxzLnBhcnNlT2JqZWN0KGNoYWluLCB2YWwsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbn07XG5cblxuaW50ZXJuYWxzLnBhcnNlS2V5cyA9IGZ1bmN0aW9uIChrZXksIHZhbCwgb3B0aW9ucykge1xuXG4gICAgaWYgKCFrZXkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFRoZSByZWdleCBjaHVua3NcblxuICAgIHZhciBwYXJlbnQgPSAvXihbXlxcW1xcXV0qKS87XG4gICAgdmFyIGNoaWxkID0gLyhcXFtbXlxcW1xcXV0qXFxdKS9nO1xuXG4gICAgLy8gR2V0IHRoZSBwYXJlbnRcblxuICAgIHZhciBzZWdtZW50ID0gcGFyZW50LmV4ZWMoa2V5KTtcblxuICAgIC8vIERvbid0IGFsbG93IHRoZW0gdG8gb3ZlcndyaXRlIG9iamVjdCBwcm90b3R5cGUgcHJvcGVydGllc1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkoc2VnbWVudFsxXSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFN0YXNoIHRoZSBwYXJlbnQgaWYgaXQgZXhpc3RzXG5cbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGlmIChzZWdtZW50WzFdKSB7XG4gICAgICAgIGtleXMucHVzaChzZWdtZW50WzFdKTtcbiAgICB9XG5cbiAgICAvLyBMb29wIHRocm91Z2ggY2hpbGRyZW4gYXBwZW5kaW5nIHRvIHRoZSBhcnJheSB1bnRpbCB3ZSBoaXQgZGVwdGhcblxuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoKHNlZ21lbnQgPSBjaGlsZC5leGVjKGtleSkpICE9PSBudWxsICYmIGkgPCBvcHRpb25zLmRlcHRoKSB7XG5cbiAgICAgICAgKytpO1xuICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkoc2VnbWVudFsxXS5yZXBsYWNlKC9cXFt8XFxdL2csICcnKSkpIHtcbiAgICAgICAgICAgIGtleXMucHVzaChzZWdtZW50WzFdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIHRoZXJlJ3MgYSByZW1haW5kZXIsIGp1c3QgYWRkIHdoYXRldmVyIGlzIGxlZnRcblxuICAgIGlmIChzZWdtZW50KSB7XG4gICAgICAgIGtleXMucHVzaCgnWycgKyBrZXkuc2xpY2Uoc2VnbWVudC5pbmRleCkgKyAnXScpO1xuICAgIH1cblxuICAgIHJldHVybiBpbnRlcm5hbHMucGFyc2VPYmplY3Qoa2V5cywgdmFsLCBvcHRpb25zKTtcbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc3RyLCBvcHRpb25zKSB7XG5cbiAgICBpZiAoc3RyID09PSAnJyB8fFxuICAgICAgICBzdHIgPT09IG51bGwgfHxcbiAgICAgICAgdHlwZW9mIHN0ciA9PT0gJ3VuZGVmaW5lZCcpIHtcblxuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgb3B0aW9ucy5kZWxpbWl0ZXIgPSB0eXBlb2Ygb3B0aW9ucy5kZWxpbWl0ZXIgPT09ICdzdHJpbmcnIHx8IFV0aWxzLmlzUmVnRXhwKG9wdGlvbnMuZGVsaW1pdGVyKSA/IG9wdGlvbnMuZGVsaW1pdGVyIDogaW50ZXJuYWxzLmRlbGltaXRlcjtcbiAgICBvcHRpb25zLmRlcHRoID0gdHlwZW9mIG9wdGlvbnMuZGVwdGggPT09ICdudW1iZXInID8gb3B0aW9ucy5kZXB0aCA6IGludGVybmFscy5kZXB0aDtcbiAgICBvcHRpb25zLmFycmF5TGltaXQgPSB0eXBlb2Ygb3B0aW9ucy5hcnJheUxpbWl0ID09PSAnbnVtYmVyJyA/IG9wdGlvbnMuYXJyYXlMaW1pdCA6IGludGVybmFscy5hcnJheUxpbWl0O1xuICAgIG9wdGlvbnMucGFyYW1ldGVyTGltaXQgPSB0eXBlb2Ygb3B0aW9ucy5wYXJhbWV0ZXJMaW1pdCA9PT0gJ251bWJlcicgPyBvcHRpb25zLnBhcmFtZXRlckxpbWl0IDogaW50ZXJuYWxzLnBhcmFtZXRlckxpbWl0O1xuXG4gICAgdmFyIHRlbXBPYmogPSB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJyA/IGludGVybmFscy5wYXJzZVZhbHVlcyhzdHIsIG9wdGlvbnMpIDogc3RyO1xuICAgIHZhciBvYmogPSB7fTtcblxuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUga2V5cyBhbmQgc2V0dXAgdGhlIG5ldyBvYmplY3RcblxuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXModGVtcE9iaik7XG4gICAgZm9yICh2YXIgaSA9IDAsIGlsID0ga2V5cy5sZW5ndGg7IGkgPCBpbDsgKytpKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgICB2YXIgbmV3T2JqID0gaW50ZXJuYWxzLnBhcnNlS2V5cyhrZXksIHRlbXBPYmpba2V5XSwgb3B0aW9ucyk7XG4gICAgICAgIG9iaiA9IFV0aWxzLm1lcmdlKG9iaiwgbmV3T2JqKTtcbiAgICB9XG5cbiAgICByZXR1cm4gVXRpbHMuY29tcGFjdChvYmopO1xufTtcbiIsIi8vIExvYWQgbW9kdWxlc1xuXG52YXIgVXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cblxuLy8gRGVjbGFyZSBpbnRlcm5hbHNcblxudmFyIGludGVybmFscyA9IHtcbiAgICBkZWxpbWl0ZXI6ICcmJyxcbiAgICBhcnJheVByZWZpeEdlbmVyYXRvcnM6IHtcbiAgICAgICAgYnJhY2tldHM6IGZ1bmN0aW9uIChwcmVmaXgsIGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIHByZWZpeCArICdbXSc7XG4gICAgICAgIH0sXG4gICAgICAgIGluZGljZXM6IGZ1bmN0aW9uIChwcmVmaXgsIGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIHByZWZpeCArICdbJyArIGtleSArICddJztcbiAgICAgICAgfSxcbiAgICAgICAgcmVwZWF0OiBmdW5jdGlvbiAocHJlZml4LCBrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBwcmVmaXg7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5cbmludGVybmFscy5zdHJpbmdpZnkgPSBmdW5jdGlvbiAob2JqLCBwcmVmaXgsIGdlbmVyYXRlQXJyYXlQcmVmaXgpIHtcblxuICAgIGlmIChVdGlscy5pc0J1ZmZlcihvYmopKSB7XG4gICAgICAgIG9iaiA9IG9iai50b1N0cmluZygpO1xuICAgIH1cbiAgICBlbHNlIGlmIChvYmogaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIG9iaiA9IG9iai50b0lTT1N0cmluZygpO1xuICAgIH1cbiAgICBlbHNlIGlmIChvYmogPT09IG51bGwpIHtcbiAgICAgICAgb2JqID0gJyc7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvYmogPT09ICdzdHJpbmcnIHx8XG4gICAgICAgIHR5cGVvZiBvYmogPT09ICdudW1iZXInIHx8XG4gICAgICAgIHR5cGVvZiBvYmogPT09ICdib29sZWFuJykge1xuXG4gICAgICAgIHJldHVybiBbZW5jb2RlVVJJQ29tcG9uZW50KHByZWZpeCkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQob2JqKV07XG4gICAgfVxuXG4gICAgdmFyIHZhbHVlcyA9IFtdO1xuXG4gICAgaWYgKHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgfVxuXG4gICAgdmFyIG9iaktleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgIGZvciAodmFyIGkgPSAwLCBpbCA9IG9iaktleXMubGVuZ3RoOyBpIDwgaWw7ICsraSkge1xuICAgICAgICB2YXIga2V5ID0gb2JqS2V5c1tpXTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgICAgICAgICAgdmFsdWVzID0gdmFsdWVzLmNvbmNhdChpbnRlcm5hbHMuc3RyaW5naWZ5KG9ialtrZXldLCBnZW5lcmF0ZUFycmF5UHJlZml4KHByZWZpeCwga2V5KSwgZ2VuZXJhdGVBcnJheVByZWZpeCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFsdWVzID0gdmFsdWVzLmNvbmNhdChpbnRlcm5hbHMuc3RyaW5naWZ5KG9ialtrZXldLCBwcmVmaXggKyAnWycgKyBrZXkgKyAnXScsIGdlbmVyYXRlQXJyYXlQcmVmaXgpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZXM7XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaiwgb3B0aW9ucykge1xuXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgdmFyIGRlbGltaXRlciA9IHR5cGVvZiBvcHRpb25zLmRlbGltaXRlciA9PT0gJ3VuZGVmaW5lZCcgPyBpbnRlcm5hbHMuZGVsaW1pdGVyIDogb3B0aW9ucy5kZWxpbWl0ZXI7XG5cbiAgICB2YXIga2V5cyA9IFtdO1xuXG4gICAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnIHx8XG4gICAgICAgIG9iaiA9PT0gbnVsbCkge1xuXG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICB2YXIgYXJyYXlGb3JtYXQ7XG4gICAgaWYgKG9wdGlvbnMuYXJyYXlGb3JtYXQgaW4gaW50ZXJuYWxzLmFycmF5UHJlZml4R2VuZXJhdG9ycykge1xuICAgICAgICBhcnJheUZvcm1hdCA9IG9wdGlvbnMuYXJyYXlGb3JtYXQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKCdpbmRpY2VzJyBpbiBvcHRpb25zKSB7XG4gICAgICAgIGFycmF5Rm9ybWF0ID0gb3B0aW9ucy5pbmRpY2VzID8gJ2luZGljZXMnIDogJ3JlcGVhdCc7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBhcnJheUZvcm1hdCA9ICdpbmRpY2VzJztcbiAgICB9XG5cbiAgICB2YXIgZ2VuZXJhdGVBcnJheVByZWZpeCA9IGludGVybmFscy5hcnJheVByZWZpeEdlbmVyYXRvcnNbYXJyYXlGb3JtYXRdO1xuXG4gICAgdmFyIG9iaktleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgIGZvciAodmFyIGkgPSAwLCBpbCA9IG9iaktleXMubGVuZ3RoOyBpIDwgaWw7ICsraSkge1xuICAgICAgICB2YXIga2V5ID0gb2JqS2V5c1tpXTtcbiAgICAgICAga2V5cyA9IGtleXMuY29uY2F0KGludGVybmFscy5zdHJpbmdpZnkob2JqW2tleV0sIGtleSwgZ2VuZXJhdGVBcnJheVByZWZpeCkpO1xuICAgIH1cblxuICAgIHJldHVybiBrZXlzLmpvaW4oZGVsaW1pdGVyKTtcbn07XG4iLCIvLyBMb2FkIG1vZHVsZXNcblxuXG4vLyBEZWNsYXJlIGludGVybmFsc1xuXG52YXIgaW50ZXJuYWxzID0ge307XG5cblxuZXhwb3J0cy5hcnJheVRvT2JqZWN0ID0gZnVuY3Rpb24gKHNvdXJjZSkge1xuXG4gICAgdmFyIG9iaiA9IHt9O1xuICAgIGZvciAodmFyIGkgPSAwLCBpbCA9IHNvdXJjZS5sZW5ndGg7IGkgPCBpbDsgKytpKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc291cmNlW2ldICE9PSAndW5kZWZpbmVkJykge1xuXG4gICAgICAgICAgICBvYmpbaV0gPSBzb3VyY2VbaV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xufTtcblxuXG5leHBvcnRzLm1lcmdlID0gZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cbiAgICBpZiAoIXNvdXJjZSkge1xuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygc291cmNlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0YXJnZXQpKSB7XG4gICAgICAgICAgICB0YXJnZXQucHVzaChzb3VyY2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0W3NvdXJjZV0gPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHRhcmdldCAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgdGFyZ2V0ID0gW3RhcmdldF0uY29uY2F0KHNvdXJjZSk7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGFyZ2V0KSAmJlxuICAgICAgICAhQXJyYXkuaXNBcnJheShzb3VyY2UpKSB7XG5cbiAgICAgICAgdGFyZ2V0ID0gZXhwb3J0cy5hcnJheVRvT2JqZWN0KHRhcmdldCk7XG4gICAgfVxuXG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICAgIGZvciAodmFyIGsgPSAwLCBrbCA9IGtleXMubGVuZ3RoOyBrIDwga2w7ICsraykge1xuICAgICAgICB2YXIga2V5ID0ga2V5c1trXTtcbiAgICAgICAgdmFyIHZhbHVlID0gc291cmNlW2tleV07XG5cbiAgICAgICAgaWYgKCF0YXJnZXRba2V5XSkge1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gZXhwb3J0cy5tZXJnZSh0YXJnZXRba2V5XSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbn07XG5cblxuZXhwb3J0cy5kZWNvZGUgPSBmdW5jdGlvbiAoc3RyKSB7XG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHN0ci5yZXBsYWNlKC9cXCsvZywgJyAnKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH1cbn07XG5cblxuZXhwb3J0cy5jb21wYWN0ID0gZnVuY3Rpb24gKG9iaiwgcmVmcykge1xuXG4gICAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnIHx8XG4gICAgICAgIG9iaiA9PT0gbnVsbCkge1xuXG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgcmVmcyA9IHJlZnMgfHwgW107XG4gICAgdmFyIGxvb2t1cCA9IHJlZnMuaW5kZXhPZihvYmopO1xuICAgIGlmIChsb29rdXAgIT09IC0xKSB7XG4gICAgICAgIHJldHVybiByZWZzW2xvb2t1cF07XG4gICAgfVxuXG4gICAgcmVmcy5wdXNoKG9iaik7XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgICAgIHZhciBjb21wYWN0ZWQgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMCwgaWwgPSBvYmoubGVuZ3RoOyBpIDwgaWw7ICsraSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmpbaV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29tcGFjdGVkLnB1c2gob2JqW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb21wYWN0ZWQ7XG4gICAgfVxuXG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgIGZvciAoaSA9IDAsIGlsID0ga2V5cy5sZW5ndGg7IGkgPCBpbDsgKytpKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgICBvYmpba2V5XSA9IGV4cG9ydHMuY29tcGFjdChvYmpba2V5XSwgcmVmcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbn07XG5cblxuZXhwb3J0cy5pc1JlZ0V4cCA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xufTtcblxuXG5leHBvcnRzLmlzQnVmZmVyID0gZnVuY3Rpb24gKG9iaikge1xuXG4gICAgaWYgKG9iaiA9PT0gbnVsbCB8fFxuICAgICAgICB0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gISEob2JqLmNvbnN0cnVjdG9yICYmXG4gICAgICAgIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciAmJlxuICAgICAgICBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKSk7XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIEV4ZWN1dGlvbkVudmlyb25tZW50XG4gKi9cblxuLypqc2xpbnQgZXZpbDogdHJ1ZSAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGNhblVzZURPTSA9ICEhKFxuICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgd2luZG93LmRvY3VtZW50ICYmIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KVxuKTtcblxuLyoqXG4gKiBTaW1wbGUsIGxpZ2h0d2VpZ2h0IG1vZHVsZSBhc3Npc3Rpbmcgd2l0aCB0aGUgZGV0ZWN0aW9uIGFuZCBjb250ZXh0IG9mXG4gKiBXb3JrZXIuIEhlbHBzIGF2b2lkIGNpcmN1bGFyIGRlcGVuZGVuY2llcyBhbmQgYWxsb3dzIGNvZGUgdG8gcmVhc29uIGFib3V0XG4gKiB3aGV0aGVyIG9yIG5vdCB0aGV5IGFyZSBpbiBhIFdvcmtlciwgZXZlbiBpZiB0aGV5IG5ldmVyIGluY2x1ZGUgdGhlIG1haW5cbiAqIGBSZWFjdFdvcmtlcmAgZGVwZW5kZW5jeS5cbiAqL1xudmFyIEV4ZWN1dGlvbkVudmlyb25tZW50ID0ge1xuXG4gIGNhblVzZURPTTogY2FuVXNlRE9NLFxuXG4gIGNhblVzZVdvcmtlcnM6IHR5cGVvZiBXb3JrZXIgIT09ICd1bmRlZmluZWQnLFxuXG4gIGNhblVzZUV2ZW50TGlzdGVuZXJzOlxuICAgIGNhblVzZURPTSAmJiAhISh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciB8fCB3aW5kb3cuYXR0YWNoRXZlbnQpLFxuXG4gIGNhblVzZVZpZXdwb3J0OiBjYW5Vc2VET00gJiYgISF3aW5kb3cuc2NyZWVuLFxuXG4gIGlzSW5Xb3JrZXI6ICFjYW5Vc2VET00gLy8gRm9yIG5vdywgdGhpcyBpcyB0cnVlIC0gbWlnaHQgY2hhbmdlIGluIHRoZSBmdXR1cmUuXG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRXhlY3V0aW9uRW52aXJvbm1lbnQ7XG4iLCIvKipcbiAqIENvcHlyaWdodCAyMDE0LTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgT2JqZWN0LmFzc2lnblxuICovXG5cbi8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1vYmplY3QuYXNzaWduXG5cbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlcykge1xuICBpZiAodGFyZ2V0ID09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIHRhcmdldCBjYW5ub3QgYmUgbnVsbCBvciB1bmRlZmluZWQnKTtcbiAgfVxuXG4gIHZhciB0byA9IE9iamVjdCh0YXJnZXQpO1xuICB2YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG4gIGZvciAodmFyIG5leHRJbmRleCA9IDE7IG5leHRJbmRleCA8IGFyZ3VtZW50cy5sZW5ndGg7IG5leHRJbmRleCsrKSB7XG4gICAgdmFyIG5leHRTb3VyY2UgPSBhcmd1bWVudHNbbmV4dEluZGV4XTtcbiAgICBpZiAobmV4dFNvdXJjZSA9PSBudWxsKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB2YXIgZnJvbSA9IE9iamVjdChuZXh0U291cmNlKTtcblxuICAgIC8vIFdlIGRvbid0IGN1cnJlbnRseSBzdXBwb3J0IGFjY2Vzc29ycyBub3IgcHJveGllcy4gVGhlcmVmb3JlIHRoaXNcbiAgICAvLyBjb3B5IGNhbm5vdCB0aHJvdy4gSWYgd2UgZXZlciBzdXBwb3J0ZWQgdGhpcyB0aGVuIHdlIG11c3QgaGFuZGxlXG4gICAgLy8gZXhjZXB0aW9ucyBhbmQgc2lkZS1lZmZlY3RzLiBXZSBkb24ndCBzdXBwb3J0IHN5bWJvbHMgc28gdGhleSB3b24ndFxuICAgIC8vIGJlIHRyYW5zZmVycmVkLlxuXG4gICAgZm9yICh2YXIga2V5IGluIGZyb20pIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcbiAgICAgICAgdG9ba2V5XSA9IGZyb21ba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdG87XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNzaWduO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIGVtcHR5RnVuY3Rpb25cbiAqL1xuXG5mdW5jdGlvbiBtYWtlRW1wdHlGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBhcmc7XG4gIH07XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBhY2NlcHRzIGFuZCBkaXNjYXJkcyBpbnB1dHM7IGl0IGhhcyBubyBzaWRlIGVmZmVjdHMuIFRoaXMgaXNcbiAqIHByaW1hcmlseSB1c2VmdWwgaWRpb21hdGljYWxseSBmb3Igb3ZlcnJpZGFibGUgZnVuY3Rpb24gZW5kcG9pbnRzIHdoaWNoXG4gKiBhbHdheXMgbmVlZCB0byBiZSBjYWxsYWJsZSwgc2luY2UgSlMgbGFja3MgYSBudWxsLWNhbGwgaWRpb20gYWxhIENvY29hLlxuICovXG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uKCkge31cblxuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJucyA9IG1ha2VFbXB0eUZ1bmN0aW9uO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0ZhbHNlID0gbWFrZUVtcHR5RnVuY3Rpb24oZmFsc2UpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RydWUgPSBtYWtlRW1wdHlGdW5jdGlvbih0cnVlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsID0gbWFrZUVtcHR5RnVuY3Rpb24obnVsbCk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVGhpcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNBcmd1bWVudCA9IGZ1bmN0aW9uKGFyZykgeyByZXR1cm4gYXJnOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVtcHR5RnVuY3Rpb247XG4iLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgaW52YXJpYW50XG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICpcbiAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAqIGV4cGVjdGluZy5cbiAqXG4gKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICovXG5cbnZhciBpbnZhcmlhbnQgPSBmdW5jdGlvbihjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICBpZiAoXCJwcm9kdWN0aW9uXCIgIT09IHByb2Nlc3MuZW52Lk5PREVfRU5WKSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgK1xuICAgICAgICAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgJ0ludmFyaWFudCBWaW9sYXRpb246ICcgK1xuICAgICAgICBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24oKSB7IHJldHVybiBhcmdzW2FyZ0luZGV4KytdOyB9KVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNC0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIHdhcm5pbmdcbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKFwiLi9lbXB0eUZ1bmN0aW9uXCIpO1xuXG4vKipcbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgd2FybmluZyA9IGVtcHR5RnVuY3Rpb247XG5cbmlmIChcInByb2R1Y3Rpb25cIiAhPT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYpIHtcbiAgd2FybmluZyA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0ICkge2ZvciAodmFyIGFyZ3M9W10sJF9fMD0yLCRfXzE9YXJndW1lbnRzLmxlbmd0aDskX18wPCRfXzE7JF9fMCsrKSBhcmdzLnB1c2goYXJndW1lbnRzWyRfXzBdKTtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ2B3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgK1xuICAgICAgICAnbWVzc2FnZSBhcmd1bWVudCdcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdC5sZW5ndGggPCAxMCB8fCAvXltzXFxXXSokLy50ZXN0KGZvcm1hdCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ1RoZSB3YXJuaW5nIGZvcm1hdCBzaG91bGQgYmUgYWJsZSB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzICcgK1xuICAgICAgICAnd2FybmluZy4gUGxlYXNlLCB1c2UgYSBtb3JlIGRlc2NyaXB0aXZlIGZvcm1hdCB0aGFuOiAnICsgZm9ybWF0XG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChmb3JtYXQuaW5kZXhPZignRmFpbGVkIENvbXBvc2l0ZSBwcm9wVHlwZTogJykgPT09IDApIHtcbiAgICAgIHJldHVybjsgLy8gSWdub3JlIENvbXBvc2l0ZUNvbXBvbmVudCBwcm9wdHlwZSBjaGVjay5cbiAgICB9XG5cbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24oKSAge3JldHVybiBhcmdzW2FyZ0luZGV4KytdO30pO1xuICAgICAgY29uc29sZS53YXJuKG1lc3NhZ2UpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgIH0gY2F0Y2goeCkge31cbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd2FybmluZztcbiIsInZhciBBcHAgPSByZXF1aXJlKCcuLy4uL2FwcC9BcHAuanMnKTtcbnZhciBUZXN0VXRpbHMgPSByZXF1aXJlKCdyZWFjdC1hZGRvbnMnKS5UZXN0VXRpbHM7XG5cbmRlc2NyaWJlKFwiQXBwXCIsIGZ1bmN0aW9uKCkge1xuXG4gIGl0KFwic2hvdWxkIGJlIHdyYXBwZWQgd2l0aCBhIGRpdlwiLCBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXBwID0gVGVzdFV0aWxzLnJlbmRlckludG9Eb2N1bWVudChBcHAoKSk7XG4gICAgZXhwZWN0KGFwcC5nZXRET01Ob2RlKCkudGFnTmFtZSkudG9FcXVhbCgnRElWJyk7XG4gIH0pO1xuXG59KTsiXX0=
