(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./app/app.js":[function(require,module,exports){
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
  }
};

module.exports = ThreadActions;
},{"../constants/ThreadConstants":"/Users/mikemsrk/goflux/pub/app/constants/ThreadConstants.js","../dispatchers/AppDispatcher":"/Users/mikemsrk/goflux/pub/app/dispatchers/AppDispatcher.js"}],"/Users/mikemsrk/goflux/pub/app/components/front/front-threads.js":[function(require,module,exports){
var React = require('react');

var Threads = React.createClass({displayName: "Threads",
  getInitialState: function(){
    return {
      
    };
  },

  render: function() {
    return (
      React.createElement("div", {className: "threads"}, 
        
          React.createElement("h3", null, "Threads "), 
          React.createElement("table", {className: "table"}, 
            React.createElement("thead", null, 
              React.createElement("tr", null, 
                React.createElement("th", null, "Title"), 
                React.createElement("th", null, "Body"), 
                React.createElement("th", null, "Rating")
              )
            ), 
            React.createElement("tbody", null, 
            React.createElement("tr", null, 
              React.createElement("td", null, "Jill"), 
              React.createElement("td", null, "Smith"), 
              React.createElement("td", null, "50")
            ), 
            React.createElement("tr", null, 
              React.createElement("td", null, "Eve"), 
              React.createElement("td", null, "Jackson"), 
              React.createElement("td", null, "94")
            )
            )
          )
          
      )
    );
  }
});

module.exports = Threads;
},{"react":"react"}],"/Users/mikemsrk/goflux/pub/app/components/front/front.js":[function(require,module,exports){
var React = require('react');
var Threads = require('./front-threads');
var Link = require('react-router').Link;

var Front = React.createClass({displayName: "Front",

  getInitialState: function(){
    return {
      
    };
  },

  render: function() {
    return (
      React.createElement("div", {className: "col-md-12"}, 
        React.createElement(Link, {className: "btn btn-info", to: "/new"}, "New"), 
        React.createElement(Threads, null)
      )
    );
  }
});

module.exports = Front;
},{"./front-threads":"/Users/mikemsrk/goflux/pub/app/components/front/front-threads.js","react":"react","react-router":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/index.js"}],"/Users/mikemsrk/goflux/pub/app/components/login/login-form.js":[function(require,module,exports){
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
},{"react":"react"}],"/Users/mikemsrk/goflux/pub/app/components/profile/profile-threads.js":[function(require,module,exports){
var React = require('react');

var BioThreads = React.createClass({displayName: "BioThreads",
  // TODO: Incorporate Later when Auth is in.

  getInitialState: function(){
    return {
      
    };
  },
  render: function() {
    return (
      React.createElement("div", {className: "col-md-9"}, 
        React.createElement("h3", null, "Threads "), 
        React.createElement("table", {className: "table"}, 
          React.createElement("thead", null, 
            React.createElement("tr", null, 
              React.createElement("th", null, "Title"), 
              React.createElement("th", null, "Body"), 
              React.createElement("th", null, "Rating")
            )
          ), 
          React.createElement("tbody", null, 
          React.createElement("tr", null, 
            React.createElement("td", null, "Jill"), 
            React.createElement("td", null, "Smith"), 
            React.createElement("td", null, "50")
          ), 
          React.createElement("tr", null, 
            React.createElement("td", null, "Eve"), 
            React.createElement("td", null, "Jackson"), 
            React.createElement("td", null, "94")
          )
          )
        )
      )
    );
  }
});

module.exports = BioThreads;
},{"react":"react"}],"/Users/mikemsrk/goflux/pub/app/components/profile/profile.js":[function(require,module,exports){
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

var NewThread = React.createClass({displayName: "NewThread",
  getInitialState: function(){
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
},{"../../actions/ThreadActions":"/Users/mikemsrk/goflux/pub/app/actions/ThreadActions.js","../../stores/ThreadStore":"/Users/mikemsrk/goflux/pub/app/stores/ThreadStore.js","react":"react"}],"/Users/mikemsrk/goflux/pub/app/components/thread/thread.js":[function(require,module,exports){
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
  FETCH: 'FETCH',
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

var _store = {
  title: "",
  body: "",
  rating: 0
};

var ThreadStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
     this.emit(CHANGE_EVENT);
   },

  getThread: function(){
    return _store;
  },

  fetch: function(){
    var that = this;
    Thread.fetch(function(data){
      _store = data;
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
    case ThreadConstants.FETCH:
      // ThreadStore.fetch(action.data.id);
      ThreadStore.emitChange();
      break;
    case ThreadConstants.ADD:
      ThreadStore.add(action.data.title,action.data.body);
      break;
    case ThreadStore.UPDATE:
      // ThreadStore.delete();
      break;
    case ThreadStore.DELETE:
      // ThreadStore.delete();
      break;
    default:
      return true;
  }

  ThreadStore.emitChange();
  return true;
});

module.exports = ThreadStore;
},{"../constants/ThreadConstants":"/Users/mikemsrk/goflux/pub/app/constants/ThreadConstants.js","../dispatchers/AppDispatcher":"/Users/mikemsrk/goflux/pub/app/dispatchers/AppDispatcher.js","../services/ThreadService":"/Users/mikemsrk/goflux/pub/app/services/ThreadService.js","events":"/Users/mikemsrk/goflux/pub/node_modules/browserify/node_modules/events/events.js","object-assign":"/Users/mikemsrk/goflux/pub/node_modules/object-assign/index.js"}],"/Users/mikemsrk/goflux/pub/node_modules/browserify/node_modules/events/events.js":[function(require,module,exports){
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

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canMutationObserver = typeof window !== 'undefined'
    && window.MutationObserver;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    var queue = [];

    if (canMutationObserver) {
        var hiddenDiv = document.createElement("div");
        var observer = new MutationObserver(function () {
            var queueList = queue.slice();
            queue.length = 0;
            queueList.forEach(function (fn) {
                fn();
            });
        });

        observer.observe(hiddenDiv, { attributes: true });

        return function nextTick(fn) {
            if (!queue.length) {
                hiddenDiv.setAttribute('yes', 'no');
            }
            queue.push(fn);
        };
    }

    if (canPost) {
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

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

},{}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/Cancellation.js":[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2NyZWF0ZVJvdXRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGpzaGludCAtVzA1OCAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIHdhcm5pbmcgPSByZXF1aXJlKCdyZWFjdC9saWIvd2FybmluZycpO1xudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ3JlYWN0L2xpYi9pbnZhcmlhbnQnKTtcbnZhciBjYW5Vc2VET00gPSByZXF1aXJlKCdyZWFjdC9saWIvRXhlY3V0aW9uRW52aXJvbm1lbnQnKS5jYW5Vc2VET007XG52YXIgTG9jYXRpb25BY3Rpb25zID0gcmVxdWlyZSgnLi9hY3Rpb25zL0xvY2F0aW9uQWN0aW9ucycpO1xudmFyIEltaXRhdGVCcm93c2VyQmVoYXZpb3IgPSByZXF1aXJlKCcuL2JlaGF2aW9ycy9JbWl0YXRlQnJvd3NlckJlaGF2aW9yJyk7XG52YXIgSGFzaExvY2F0aW9uID0gcmVxdWlyZSgnLi9sb2NhdGlvbnMvSGFzaExvY2F0aW9uJyk7XG52YXIgSGlzdG9yeUxvY2F0aW9uID0gcmVxdWlyZSgnLi9sb2NhdGlvbnMvSGlzdG9yeUxvY2F0aW9uJyk7XG52YXIgUmVmcmVzaExvY2F0aW9uID0gcmVxdWlyZSgnLi9sb2NhdGlvbnMvUmVmcmVzaExvY2F0aW9uJyk7XG52YXIgU3RhdGljTG9jYXRpb24gPSByZXF1aXJlKCcuL2xvY2F0aW9ucy9TdGF0aWNMb2NhdGlvbicpO1xudmFyIFNjcm9sbEhpc3RvcnkgPSByZXF1aXJlKCcuL1Njcm9sbEhpc3RvcnknKTtcbnZhciBjcmVhdGVSb3V0ZXNGcm9tUmVhY3RDaGlsZHJlbiA9IHJlcXVpcmUoJy4vY3JlYXRlUm91dGVzRnJvbVJlYWN0Q2hpbGRyZW4nKTtcbnZhciBpc1JlYWN0Q2hpbGRyZW4gPSByZXF1aXJlKCcuL2lzUmVhY3RDaGlsZHJlbicpO1xudmFyIFRyYW5zaXRpb24gPSByZXF1aXJlKCcuL1RyYW5zaXRpb24nKTtcbnZhciBQcm9wVHlwZXMgPSByZXF1aXJlKCcuL1Byb3BUeXBlcycpO1xudmFyIFJlZGlyZWN0ID0gcmVxdWlyZSgnLi9SZWRpcmVjdCcpO1xudmFyIEhpc3RvcnkgPSByZXF1aXJlKCcuL0hpc3RvcnknKTtcbnZhciBDYW5jZWxsYXRpb24gPSByZXF1aXJlKCcuL0NhbmNlbGxhdGlvbicpO1xudmFyIE1hdGNoID0gcmVxdWlyZSgnLi9NYXRjaCcpO1xudmFyIFJvdXRlID0gcmVxdWlyZSgnLi9Sb3V0ZScpO1xudmFyIHN1cHBvcnRzSGlzdG9yeSA9IHJlcXVpcmUoJy4vc3VwcG9ydHNIaXN0b3J5Jyk7XG52YXIgUGF0aFV0aWxzID0gcmVxdWlyZSgnLi9QYXRoVXRpbHMnKTtcblxuLyoqXG4gKiBUaGUgZGVmYXVsdCBsb2NhdGlvbiBmb3IgbmV3IHJvdXRlcnMuXG4gKi9cbnZhciBERUZBVUxUX0xPQ0FUSU9OID0gY2FuVXNlRE9NID8gSGFzaExvY2F0aW9uIDogJy8nO1xuXG4vKipcbiAqIFRoZSBkZWZhdWx0IHNjcm9sbCBiZWhhdmlvciBmb3IgbmV3IHJvdXRlcnMuXG4gKi9cbnZhciBERUZBVUxUX1NDUk9MTF9CRUhBVklPUiA9IGNhblVzZURPTSA/IEltaXRhdGVCcm93c2VyQmVoYXZpb3IgOiBudWxsO1xuXG5mdW5jdGlvbiBoYXNQcm9wZXJ0aWVzKG9iamVjdCwgcHJvcGVydGllcykge1xuICBmb3IgKHZhciBwcm9wZXJ0eU5hbWUgaW4gcHJvcGVydGllcykgaWYgKHByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkocHJvcGVydHlOYW1lKSAmJiBvYmplY3RbcHJvcGVydHlOYW1lXSAhPT0gcHJvcGVydGllc1twcm9wZXJ0eU5hbWVdKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9cmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGhhc01hdGNoKHJvdXRlcywgcm91dGUsIHByZXZQYXJhbXMsIG5leHRQYXJhbXMsIHByZXZRdWVyeSwgbmV4dFF1ZXJ5KSB7XG4gIHJldHVybiByb3V0ZXMuc29tZShmdW5jdGlvbiAocikge1xuICAgIGlmIChyICE9PSByb3V0ZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgdmFyIHBhcmFtTmFtZXMgPSByb3V0ZS5wYXJhbU5hbWVzO1xuICAgIHZhciBwYXJhbU5hbWU7XG5cbiAgICAvLyBFbnN1cmUgdGhhdCBhbGwgcGFyYW1zIHRoZSByb3V0ZSBjYXJlcyBhYm91dCBkaWQgbm90IGNoYW5nZS5cbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gcGFyYW1OYW1lcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgcGFyYW1OYW1lID0gcGFyYW1OYW1lc1tpXTtcblxuICAgICAgaWYgKG5leHRQYXJhbXNbcGFyYW1OYW1lXSAhPT0gcHJldlBhcmFtc1twYXJhbU5hbWVdKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gRW5zdXJlIHRoZSBxdWVyeSBoYXNuJ3QgY2hhbmdlZC5cbiAgICByZXR1cm4gaGFzUHJvcGVydGllcyhwcmV2UXVlcnksIG5leHRRdWVyeSkgJiYgaGFzUHJvcGVydGllcyhuZXh0UXVlcnksIHByZXZRdWVyeSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRSb3V0ZXNUb05hbWVkUm91dGVzKHJvdXRlcywgbmFtZWRSb3V0ZXMpIHtcbiAgdmFyIHJvdXRlO1xuICBmb3IgKHZhciBpID0gMCwgbGVuID0gcm91dGVzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgcm91dGUgPSByb3V0ZXNbaV07XG5cbiAgICBpZiAocm91dGUubmFtZSkge1xuICAgICAgaW52YXJpYW50KG5hbWVkUm91dGVzW3JvdXRlLm5hbWVdID09IG51bGwsICdZb3UgbWF5IG5vdCBoYXZlIG1vcmUgdGhhbiBvbmUgcm91dGUgbmFtZWQgXCIlc1wiJywgcm91dGUubmFtZSk7XG5cbiAgICAgIG5hbWVkUm91dGVzW3JvdXRlLm5hbWVdID0gcm91dGU7XG4gICAgfVxuXG4gICAgaWYgKHJvdXRlLmNoaWxkUm91dGVzKSBhZGRSb3V0ZXNUb05hbWVkUm91dGVzKHJvdXRlLmNoaWxkUm91dGVzLCBuYW1lZFJvdXRlcyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcm91dGVJc0FjdGl2ZShhY3RpdmVSb3V0ZXMsIHJvdXRlTmFtZSkge1xuICByZXR1cm4gYWN0aXZlUm91dGVzLnNvbWUoZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgcmV0dXJuIHJvdXRlLm5hbWUgPT09IHJvdXRlTmFtZTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHBhcmFtc0FyZUFjdGl2ZShhY3RpdmVQYXJhbXMsIHBhcmFtcykge1xuICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBwYXJhbXMpIGlmIChTdHJpbmcoYWN0aXZlUGFyYW1zW3Byb3BlcnR5XSkgIT09IFN0cmluZyhwYXJhbXNbcHJvcGVydHldKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfXJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBxdWVyeUlzQWN0aXZlKGFjdGl2ZVF1ZXJ5LCBxdWVyeSkge1xuICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBxdWVyeSkgaWYgKFN0cmluZyhhY3RpdmVRdWVyeVtwcm9wZXJ0eV0pICE9PSBTdHJpbmcocXVlcnlbcHJvcGVydHldKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfXJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW5kIHJldHVybnMgYSBuZXcgcm91dGVyIHVzaW5nIHRoZSBnaXZlbiBvcHRpb25zLiBBIHJvdXRlclxuICogaXMgYSBSZWFjdENvbXBvbmVudCBjbGFzcyB0aGF0IGtub3dzIGhvdyB0byByZWFjdCB0byBjaGFuZ2VzIGluIHRoZVxuICogVVJMIGFuZCBrZWVwIHRoZSBjb250ZW50cyBvZiB0aGUgcGFnZSBpbiBzeW5jLlxuICpcbiAqIE9wdGlvbnMgbWF5IGJlIGFueSBvZiB0aGUgZm9sbG93aW5nOlxuICpcbiAqIC0gcm91dGVzICAgICAgICAgICAocmVxdWlyZWQpIFRoZSByb3V0ZSBjb25maWdcbiAqIC0gbG9jYXRpb24gICAgICAgICBUaGUgbG9jYXRpb24gdG8gdXNlLiBEZWZhdWx0cyB0byBIYXNoTG9jYXRpb24gd2hlblxuICogICAgICAgICAgICAgICAgICAgIHRoZSBET00gaXMgYXZhaWxhYmxlLCBcIi9cIiBvdGhlcndpc2VcbiAqIC0gc2Nyb2xsQmVoYXZpb3IgICBUaGUgc2Nyb2xsIGJlaGF2aW9yIHRvIHVzZS4gRGVmYXVsdHMgdG8gSW1pdGF0ZUJyb3dzZXJCZWhhdmlvclxuICogICAgICAgICAgICAgICAgICAgIHdoZW4gdGhlIERPTSBpcyBhdmFpbGFibGUsIG51bGwgb3RoZXJ3aXNlXG4gKiAtIG9uRXJyb3IgICAgICAgICAgQSBmdW5jdGlvbiB0aGF0IGlzIHVzZWQgdG8gaGFuZGxlIGVycm9yc1xuICogLSBvbkFib3J0ICAgICAgICAgIEEgZnVuY3Rpb24gdGhhdCBpcyB1c2VkIHRvIGhhbmRsZSBhYm9ydGVkIHRyYW5zaXRpb25zXG4gKlxuICogV2hlbiByZW5kZXJpbmcgaW4gYSBzZXJ2ZXItc2lkZSBlbnZpcm9ubWVudCwgdGhlIGxvY2F0aW9uIHNob3VsZCBzaW1wbHlcbiAqIGJlIHRoZSBVUkwgcGF0aCB0aGF0IHdhcyB1c2VkIGluIHRoZSByZXF1ZXN0LCBpbmNsdWRpbmcgdGhlIHF1ZXJ5IHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlUm91dGVyKG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgaWYgKGlzUmVhY3RDaGlsZHJlbihvcHRpb25zKSkgb3B0aW9ucyA9IHsgcm91dGVzOiBvcHRpb25zIH07XG5cbiAgdmFyIG1vdW50ZWRDb21wb25lbnRzID0gW107XG4gIHZhciBsb2NhdGlvbiA9IG9wdGlvbnMubG9jYXRpb24gfHwgREVGQVVMVF9MT0NBVElPTjtcbiAgdmFyIHNjcm9sbEJlaGF2aW9yID0gb3B0aW9ucy5zY3JvbGxCZWhhdmlvciB8fCBERUZBVUxUX1NDUk9MTF9CRUhBVklPUjtcbiAgdmFyIHN0YXRlID0ge307XG4gIHZhciBuZXh0U3RhdGUgPSB7fTtcbiAgdmFyIHBlbmRpbmdUcmFuc2l0aW9uID0gbnVsbDtcbiAgdmFyIGRpc3BhdGNoSGFuZGxlciA9IG51bGw7XG5cbiAgaWYgKHR5cGVvZiBsb2NhdGlvbiA9PT0gJ3N0cmluZycpIGxvY2F0aW9uID0gbmV3IFN0YXRpY0xvY2F0aW9uKGxvY2F0aW9uKTtcblxuICBpZiAobG9jYXRpb24gaW5zdGFuY2VvZiBTdGF0aWNMb2NhdGlvbikge1xuICAgIHdhcm5pbmcoIWNhblVzZURPTSB8fCBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Rlc3QnLCAnWW91IHNob3VsZCBub3QgdXNlIGEgc3RhdGljIGxvY2F0aW9uIGluIGEgRE9NIGVudmlyb25tZW50IGJlY2F1c2UgJyArICd0aGUgcm91dGVyIHdpbGwgbm90IGJlIGtlcHQgaW4gc3luYyB3aXRoIHRoZSBjdXJyZW50IFVSTCcpO1xuICB9IGVsc2Uge1xuICAgIGludmFyaWFudChjYW5Vc2VET00gfHwgbG9jYXRpb24ubmVlZHNET00gPT09IGZhbHNlLCAnWW91IGNhbm5vdCB1c2UgJXMgd2l0aG91dCBhIERPTScsIGxvY2F0aW9uKTtcbiAgfVxuXG4gIC8vIEF1dG9tYXRpY2FsbHkgZmFsbCBiYWNrIHRvIGZ1bGwgcGFnZSByZWZyZXNoZXMgaW5cbiAgLy8gYnJvd3NlcnMgdGhhdCBkb24ndCBzdXBwb3J0IHRoZSBIVE1MIGhpc3RvcnkgQVBJLlxuICBpZiAobG9jYXRpb24gPT09IEhpc3RvcnlMb2NhdGlvbiAmJiAhc3VwcG9ydHNIaXN0b3J5KCkpIGxvY2F0aW9uID0gUmVmcmVzaExvY2F0aW9uO1xuXG4gIHZhciBSb3V0ZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgICBkaXNwbGF5TmFtZTogJ1JvdXRlcicsXG5cbiAgICBzdGF0aWNzOiB7XG5cbiAgICAgIGlzUnVubmluZzogZmFsc2UsXG5cbiAgICAgIGNhbmNlbFBlbmRpbmdUcmFuc2l0aW9uOiBmdW5jdGlvbiBjYW5jZWxQZW5kaW5nVHJhbnNpdGlvbigpIHtcbiAgICAgICAgaWYgKHBlbmRpbmdUcmFuc2l0aW9uKSB7XG4gICAgICAgICAgcGVuZGluZ1RyYW5zaXRpb24uY2FuY2VsKCk7XG4gICAgICAgICAgcGVuZGluZ1RyYW5zaXRpb24gPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBjbGVhckFsbFJvdXRlczogZnVuY3Rpb24gY2xlYXJBbGxSb3V0ZXMoKSB7XG4gICAgICAgIFJvdXRlci5jYW5jZWxQZW5kaW5nVHJhbnNpdGlvbigpO1xuICAgICAgICBSb3V0ZXIubmFtZWRSb3V0ZXMgPSB7fTtcbiAgICAgICAgUm91dGVyLnJvdXRlcyA9IFtdO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBBZGRzIHJvdXRlcyB0byB0aGlzIHJvdXRlciBmcm9tIHRoZSBnaXZlbiBjaGlsZHJlbiBvYmplY3QgKHNlZSBSZWFjdENoaWxkcmVuKS5cbiAgICAgICAqL1xuICAgICAgYWRkUm91dGVzOiBmdW5jdGlvbiBhZGRSb3V0ZXMocm91dGVzKSB7XG4gICAgICAgIGlmIChpc1JlYWN0Q2hpbGRyZW4ocm91dGVzKSkgcm91dGVzID0gY3JlYXRlUm91dGVzRnJvbVJlYWN0Q2hpbGRyZW4ocm91dGVzKTtcblxuICAgICAgICBhZGRSb3V0ZXNUb05hbWVkUm91dGVzKHJvdXRlcywgUm91dGVyLm5hbWVkUm91dGVzKTtcblxuICAgICAgICBSb3V0ZXIucm91dGVzLnB1c2guYXBwbHkoUm91dGVyLnJvdXRlcywgcm91dGVzKTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogUmVwbGFjZXMgcm91dGVzIG9mIHRoaXMgcm91dGVyIGZyb20gdGhlIGdpdmVuIGNoaWxkcmVuIG9iamVjdCAoc2VlIFJlYWN0Q2hpbGRyZW4pLlxuICAgICAgICovXG4gICAgICByZXBsYWNlUm91dGVzOiBmdW5jdGlvbiByZXBsYWNlUm91dGVzKHJvdXRlcykge1xuICAgICAgICBSb3V0ZXIuY2xlYXJBbGxSb3V0ZXMoKTtcbiAgICAgICAgUm91dGVyLmFkZFJvdXRlcyhyb3V0ZXMpO1xuICAgICAgICBSb3V0ZXIucmVmcmVzaCgpO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBQZXJmb3JtcyBhIG1hdGNoIG9mIHRoZSBnaXZlbiBwYXRoIGFnYWluc3QgdGhpcyByb3V0ZXIgYW5kIHJldHVybnMgYW4gb2JqZWN0XG4gICAgICAgKiB3aXRoIHRoZSB7IHJvdXRlcywgcGFyYW1zLCBwYXRobmFtZSwgcXVlcnkgfSB0aGF0IG1hdGNoLiBSZXR1cm5zIG51bGwgaWYgbm9cbiAgICAgICAqIG1hdGNoIGNhbiBiZSBtYWRlLlxuICAgICAgICovXG4gICAgICBtYXRjaDogZnVuY3Rpb24gbWF0Y2gocGF0aCkge1xuICAgICAgICByZXR1cm4gTWF0Y2guZmluZE1hdGNoKFJvdXRlci5yb3V0ZXMsIHBhdGgpO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBSZXR1cm5zIGFuIGFic29sdXRlIFVSTCBwYXRoIGNyZWF0ZWQgZnJvbSB0aGUgZ2l2ZW4gcm91dGVcbiAgICAgICAqIG5hbWUsIFVSTCBwYXJhbWV0ZXJzLCBhbmQgcXVlcnkuXG4gICAgICAgKi9cbiAgICAgIG1ha2VQYXRoOiBmdW5jdGlvbiBtYWtlUGF0aCh0bywgcGFyYW1zLCBxdWVyeSkge1xuICAgICAgICB2YXIgcGF0aDtcbiAgICAgICAgaWYgKFBhdGhVdGlscy5pc0Fic29sdXRlKHRvKSkge1xuICAgICAgICAgIHBhdGggPSB0bztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgcm91dGUgPSB0byBpbnN0YW5jZW9mIFJvdXRlID8gdG8gOiBSb3V0ZXIubmFtZWRSb3V0ZXNbdG9dO1xuXG4gICAgICAgICAgaW52YXJpYW50KHJvdXRlIGluc3RhbmNlb2YgUm91dGUsICdDYW5ub3QgZmluZCBhIHJvdXRlIG5hbWVkIFwiJXNcIicsIHRvKTtcblxuICAgICAgICAgIHBhdGggPSByb3V0ZS5wYXRoO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFBhdGhVdGlscy53aXRoUXVlcnkoUGF0aFV0aWxzLmluamVjdFBhcmFtcyhwYXRoLCBwYXJhbXMpLCBxdWVyeSk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFJldHVybnMgYSBzdHJpbmcgdGhhdCBtYXkgc2FmZWx5IGJlIHVzZWQgYXMgdGhlIGhyZWYgb2YgYSBsaW5rXG4gICAgICAgKiB0byB0aGUgcm91dGUgd2l0aCB0aGUgZ2l2ZW4gbmFtZSwgVVJMIHBhcmFtZXRlcnMsIGFuZCBxdWVyeS5cbiAgICAgICAqL1xuICAgICAgbWFrZUhyZWY6IGZ1bmN0aW9uIG1ha2VIcmVmKHRvLCBwYXJhbXMsIHF1ZXJ5KSB7XG4gICAgICAgIHZhciBwYXRoID0gUm91dGVyLm1ha2VQYXRoKHRvLCBwYXJhbXMsIHF1ZXJ5KTtcbiAgICAgICAgcmV0dXJuIGxvY2F0aW9uID09PSBIYXNoTG9jYXRpb24gPyAnIycgKyBwYXRoIDogcGF0aDtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVHJhbnNpdGlvbnMgdG8gdGhlIFVSTCBzcGVjaWZpZWQgaW4gdGhlIGFyZ3VtZW50cyBieSBwdXNoaW5nXG4gICAgICAgKiBhIG5ldyBVUkwgb250byB0aGUgaGlzdG9yeSBzdGFjay5cbiAgICAgICAqL1xuICAgICAgdHJhbnNpdGlvblRvOiBmdW5jdGlvbiB0cmFuc2l0aW9uVG8odG8sIHBhcmFtcywgcXVlcnkpIHtcbiAgICAgICAgdmFyIHBhdGggPSBSb3V0ZXIubWFrZVBhdGgodG8sIHBhcmFtcywgcXVlcnkpO1xuXG4gICAgICAgIGlmIChwZW5kaW5nVHJhbnNpdGlvbikge1xuICAgICAgICAgIC8vIFJlcGxhY2Ugc28gcGVuZGluZyBsb2NhdGlvbiBkb2VzIG5vdCBzdGF5IGluIGhpc3RvcnkuXG4gICAgICAgICAgbG9jYXRpb24ucmVwbGFjZShwYXRoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsb2NhdGlvbi5wdXNoKHBhdGgpO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRyYW5zaXRpb25zIHRvIHRoZSBVUkwgc3BlY2lmaWVkIGluIHRoZSBhcmd1bWVudHMgYnkgcmVwbGFjaW5nXG4gICAgICAgKiB0aGUgY3VycmVudCBVUkwgaW4gdGhlIGhpc3Rvcnkgc3RhY2suXG4gICAgICAgKi9cbiAgICAgIHJlcGxhY2VXaXRoOiBmdW5jdGlvbiByZXBsYWNlV2l0aCh0bywgcGFyYW1zLCBxdWVyeSkge1xuICAgICAgICBsb2NhdGlvbi5yZXBsYWNlKFJvdXRlci5tYWtlUGF0aCh0bywgcGFyYW1zLCBxdWVyeSkpO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBUcmFuc2l0aW9ucyB0byB0aGUgcHJldmlvdXMgVVJMIGlmIG9uZSBpcyBhdmFpbGFibGUuIFJldHVybnMgdHJ1ZSBpZiB0aGVcbiAgICAgICAqIHJvdXRlciB3YXMgYWJsZSB0byBnbyBiYWNrLCBmYWxzZSBvdGhlcndpc2UuXG4gICAgICAgKlxuICAgICAgICogTm90ZTogVGhlIHJvdXRlciBvbmx5IHRyYWNrcyBoaXN0b3J5IGVudHJpZXMgaW4geW91ciBhcHBsaWNhdGlvbiwgbm90IHRoZVxuICAgICAgICogY3VycmVudCBicm93c2VyIHNlc3Npb24sIHNvIHlvdSBjYW4gc2FmZWx5IGNhbGwgdGhpcyBmdW5jdGlvbiB3aXRob3V0IGd1YXJkaW5nXG4gICAgICAgKiBhZ2FpbnN0IHNlbmRpbmcgdGhlIHVzZXIgYmFjayB0byBzb21lIG90aGVyIHNpdGUuIEhvd2V2ZXIsIHdoZW4gdXNpbmdcbiAgICAgICAqIFJlZnJlc2hMb2NhdGlvbiAod2hpY2ggaXMgdGhlIGZhbGxiYWNrIGZvciBIaXN0b3J5TG9jYXRpb24gaW4gYnJvd3NlcnMgdGhhdFxuICAgICAgICogZG9uJ3Qgc3VwcG9ydCBIVE1MNSBoaXN0b3J5KSB0aGlzIG1ldGhvZCB3aWxsICphbHdheXMqIHNlbmQgdGhlIGNsaWVudCBiYWNrXG4gICAgICAgKiBiZWNhdXNlIHdlIGNhbm5vdCByZWxpYWJseSB0cmFjayBoaXN0b3J5IGxlbmd0aC5cbiAgICAgICAqL1xuICAgICAgZ29CYWNrOiBmdW5jdGlvbiBnb0JhY2soKSB7XG4gICAgICAgIGlmIChIaXN0b3J5Lmxlbmd0aCA+IDEgfHwgbG9jYXRpb24gPT09IFJlZnJlc2hMb2NhdGlvbikge1xuICAgICAgICAgIGxvY2F0aW9uLnBvcCgpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgd2FybmluZyhmYWxzZSwgJ2dvQmFjaygpIHdhcyBpZ25vcmVkIGJlY2F1c2UgdGhlcmUgaXMgbm8gcm91dGVyIGhpc3RvcnknKTtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9LFxuXG4gICAgICBoYW5kbGVBYm9ydDogb3B0aW9ucy5vbkFib3J0IHx8IGZ1bmN0aW9uIChhYm9ydFJlYXNvbikge1xuICAgICAgICBpZiAobG9jYXRpb24gaW5zdGFuY2VvZiBTdGF0aWNMb2NhdGlvbikgdGhyb3cgbmV3IEVycm9yKCdVbmhhbmRsZWQgYWJvcnRlZCB0cmFuc2l0aW9uISBSZWFzb246ICcgKyBhYm9ydFJlYXNvbik7XG5cbiAgICAgICAgaWYgKGFib3J0UmVhc29uIGluc3RhbmNlb2YgQ2FuY2VsbGF0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKGFib3J0UmVhc29uIGluc3RhbmNlb2YgUmVkaXJlY3QpIHtcbiAgICAgICAgICBsb2NhdGlvbi5yZXBsYWNlKFJvdXRlci5tYWtlUGF0aChhYm9ydFJlYXNvbi50bywgYWJvcnRSZWFzb24ucGFyYW1zLCBhYm9ydFJlYXNvbi5xdWVyeSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxvY2F0aW9uLnBvcCgpO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBoYW5kbGVFcnJvcjogb3B0aW9ucy5vbkVycm9yIHx8IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAvLyBUaHJvdyBzbyB3ZSBkb24ndCBzaWxlbnRseSBzd2FsbG93IGFzeW5jIGVycm9ycy5cbiAgICAgICAgdGhyb3cgZXJyb3I7IC8vIFRoaXMgZXJyb3IgcHJvYmFibHkgb3JpZ2luYXRlZCBpbiBhIHRyYW5zaXRpb24gaG9vay5cbiAgICAgIH0sXG5cbiAgICAgIGhhbmRsZUxvY2F0aW9uQ2hhbmdlOiBmdW5jdGlvbiBoYW5kbGVMb2NhdGlvbkNoYW5nZShjaGFuZ2UpIHtcbiAgICAgICAgUm91dGVyLmRpc3BhdGNoKGNoYW5nZS5wYXRoLCBjaGFuZ2UudHlwZSk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFBlcmZvcm1zIGEgdHJhbnNpdGlvbiB0byB0aGUgZ2l2ZW4gcGF0aCBhbmQgY2FsbHMgY2FsbGJhY2soZXJyb3IsIGFib3J0UmVhc29uKVxuICAgICAgICogd2hlbiB0aGUgdHJhbnNpdGlvbiBpcyBmaW5pc2hlZC4gSWYgYm90aCBhcmd1bWVudHMgYXJlIG51bGwgdGhlIHJvdXRlcidzIHN0YXRlXG4gICAgICAgKiB3YXMgdXBkYXRlZC4gT3RoZXJ3aXNlIHRoZSB0cmFuc2l0aW9uIGRpZCBub3QgY29tcGxldGUuXG4gICAgICAgKlxuICAgICAgICogSW4gYSB0cmFuc2l0aW9uLCBhIHJvdXRlciBmaXJzdCBkZXRlcm1pbmVzIHdoaWNoIHJvdXRlcyBhcmUgaW52b2x2ZWQgYnkgYmVnaW5uaW5nXG4gICAgICAgKiB3aXRoIHRoZSBjdXJyZW50IHJvdXRlLCB1cCB0aGUgcm91dGUgdHJlZSB0byB0aGUgZmlyc3QgcGFyZW50IHJvdXRlIHRoYXQgaXMgc2hhcmVkXG4gICAgICAgKiB3aXRoIHRoZSBkZXN0aW5hdGlvbiByb3V0ZSwgYW5kIGJhY2sgZG93biB0aGUgdHJlZSB0byB0aGUgZGVzdGluYXRpb24gcm91dGUuIFRoZVxuICAgICAgICogd2lsbFRyYW5zaXRpb25Gcm9tIGhvb2sgaXMgaW52b2tlZCBvbiBhbGwgcm91dGUgaGFuZGxlcnMgd2UncmUgdHJhbnNpdGlvbmluZyBhd2F5XG4gICAgICAgKiBmcm9tLCBpbiByZXZlcnNlIG5lc3Rpbmcgb3JkZXIuIExpa2V3aXNlLCB0aGUgd2lsbFRyYW5zaXRpb25UbyBob29rIGlzIGludm9rZWQgb25cbiAgICAgICAqIGFsbCByb3V0ZSBoYW5kbGVycyB3ZSdyZSB0cmFuc2l0aW9uaW5nIHRvLlxuICAgICAgICpcbiAgICAgICAqIEJvdGggd2lsbFRyYW5zaXRpb25Gcm9tIGFuZCB3aWxsVHJhbnNpdGlvblRvIGhvb2tzIG1heSBlaXRoZXIgYWJvcnQgb3IgcmVkaXJlY3QgdGhlXG4gICAgICAgKiB0cmFuc2l0aW9uLiBUbyByZXNvbHZlIGFzeW5jaHJvbm91c2x5LCB0aGV5IG1heSB1c2UgdGhlIGNhbGxiYWNrIGFyZ3VtZW50LiBJZiBub1xuICAgICAgICogaG9va3Mgd2FpdCwgdGhlIHRyYW5zaXRpb24gaXMgZnVsbHkgc3luY2hyb25vdXMuXG4gICAgICAgKi9cbiAgICAgIGRpc3BhdGNoOiBmdW5jdGlvbiBkaXNwYXRjaChwYXRoLCBhY3Rpb24pIHtcbiAgICAgICAgUm91dGVyLmNhbmNlbFBlbmRpbmdUcmFuc2l0aW9uKCk7XG5cbiAgICAgICAgdmFyIHByZXZQYXRoID0gc3RhdGUucGF0aDtcbiAgICAgICAgdmFyIGlzUmVmcmVzaGluZyA9IGFjdGlvbiA9PSBudWxsO1xuXG4gICAgICAgIGlmIChwcmV2UGF0aCA9PT0gcGF0aCAmJiAhaXNSZWZyZXNoaW5nKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IC8vIE5vdGhpbmcgdG8gZG8hXG5cbiAgICAgICAgLy8gUmVjb3JkIHRoZSBzY3JvbGwgcG9zaXRpb24gYXMgZWFybHkgYXMgcG9zc2libGUgdG9cbiAgICAgICAgLy8gZ2V0IGl0IGJlZm9yZSBicm93c2VycyB0cnkgdXBkYXRlIGl0IGF1dG9tYXRpY2FsbHkuXG4gICAgICAgIGlmIChwcmV2UGF0aCAmJiBhY3Rpb24gPT09IExvY2F0aW9uQWN0aW9ucy5QVVNIKSBSb3V0ZXIucmVjb3JkU2Nyb2xsUG9zaXRpb24ocHJldlBhdGgpO1xuXG4gICAgICAgIHZhciBtYXRjaCA9IFJvdXRlci5tYXRjaChwYXRoKTtcblxuICAgICAgICB3YXJuaW5nKG1hdGNoICE9IG51bGwsICdObyByb3V0ZSBtYXRjaGVzIHBhdGggXCIlc1wiLiBNYWtlIHN1cmUgeW91IGhhdmUgPFJvdXRlIHBhdGg9XCIlc1wiPiBzb21ld2hlcmUgaW4geW91ciByb3V0ZXMnLCBwYXRoLCBwYXRoKTtcblxuICAgICAgICBpZiAobWF0Y2ggPT0gbnVsbCkgbWF0Y2ggPSB7fTtcblxuICAgICAgICB2YXIgcHJldlJvdXRlcyA9IHN0YXRlLnJvdXRlcyB8fCBbXTtcbiAgICAgICAgdmFyIHByZXZQYXJhbXMgPSBzdGF0ZS5wYXJhbXMgfHwge307XG4gICAgICAgIHZhciBwcmV2UXVlcnkgPSBzdGF0ZS5xdWVyeSB8fCB7fTtcblxuICAgICAgICB2YXIgbmV4dFJvdXRlcyA9IG1hdGNoLnJvdXRlcyB8fCBbXTtcbiAgICAgICAgdmFyIG5leHRQYXJhbXMgPSBtYXRjaC5wYXJhbXMgfHwge307XG4gICAgICAgIHZhciBuZXh0UXVlcnkgPSBtYXRjaC5xdWVyeSB8fCB7fTtcblxuICAgICAgICB2YXIgZnJvbVJvdXRlcywgdG9Sb3V0ZXM7XG4gICAgICAgIGlmIChwcmV2Um91dGVzLmxlbmd0aCkge1xuICAgICAgICAgIGZyb21Sb3V0ZXMgPSBwcmV2Um91dGVzLmZpbHRlcihmdW5jdGlvbiAocm91dGUpIHtcbiAgICAgICAgICAgIHJldHVybiAhaGFzTWF0Y2gobmV4dFJvdXRlcywgcm91dGUsIHByZXZQYXJhbXMsIG5leHRQYXJhbXMsIHByZXZRdWVyeSwgbmV4dFF1ZXJ5KTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHRvUm91dGVzID0gbmV4dFJvdXRlcy5maWx0ZXIoZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gIWhhc01hdGNoKHByZXZSb3V0ZXMsIHJvdXRlLCBwcmV2UGFyYW1zLCBuZXh0UGFyYW1zLCBwcmV2UXVlcnksIG5leHRRdWVyeSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZnJvbVJvdXRlcyA9IFtdO1xuICAgICAgICAgIHRvUm91dGVzID0gbmV4dFJvdXRlcztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0cmFuc2l0aW9uID0gbmV3IFRyYW5zaXRpb24ocGF0aCwgUm91dGVyLnJlcGxhY2VXaXRoLmJpbmQoUm91dGVyLCBwYXRoKSk7XG4gICAgICAgIHBlbmRpbmdUcmFuc2l0aW9uID0gdHJhbnNpdGlvbjtcblxuICAgICAgICB2YXIgZnJvbUNvbXBvbmVudHMgPSBtb3VudGVkQ29tcG9uZW50cy5zbGljZShwcmV2Um91dGVzLmxlbmd0aCAtIGZyb21Sb3V0ZXMubGVuZ3RoKTtcblxuICAgICAgICBUcmFuc2l0aW9uLmZyb20odHJhbnNpdGlvbiwgZnJvbVJvdXRlcywgZnJvbUNvbXBvbmVudHMsIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgIGlmIChlcnJvciB8fCB0cmFuc2l0aW9uLmFib3J0UmVhc29uKSByZXR1cm4gZGlzcGF0Y2hIYW5kbGVyLmNhbGwoUm91dGVyLCBlcnJvciwgdHJhbnNpdGlvbik7IC8vIE5vIG5lZWQgdG8gY29udGludWUuXG5cbiAgICAgICAgICBUcmFuc2l0aW9uLnRvKHRyYW5zaXRpb24sIHRvUm91dGVzLCBuZXh0UGFyYW1zLCBuZXh0UXVlcnksIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgZGlzcGF0Y2hIYW5kbGVyLmNhbGwoUm91dGVyLCBlcnJvciwgdHJhbnNpdGlvbiwge1xuICAgICAgICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgICAgICAgcGF0aG5hbWU6IG1hdGNoLnBhdGhuYW1lLFxuICAgICAgICAgICAgICByb3V0ZXM6IG5leHRSb3V0ZXMsXG4gICAgICAgICAgICAgIHBhcmFtczogbmV4dFBhcmFtcyxcbiAgICAgICAgICAgICAgcXVlcnk6IG5leHRRdWVyeVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBTdGFydHMgdGhpcyByb3V0ZXIgYW5kIGNhbGxzIGNhbGxiYWNrKHJvdXRlciwgc3RhdGUpIHdoZW4gdGhlIHJvdXRlIGNoYW5nZXMuXG4gICAgICAgKlxuICAgICAgICogSWYgdGhlIHJvdXRlcidzIGxvY2F0aW9uIGlzIHN0YXRpYyAoaS5lLiBhIFVSTCBwYXRoIGluIGEgc2VydmVyIGVudmlyb25tZW50KVxuICAgICAgICogdGhlIGNhbGxiYWNrIGlzIGNhbGxlZCBvbmx5IG9uY2UuIE90aGVyd2lzZSwgdGhlIGxvY2F0aW9uIHNob3VsZCBiZSBvbmUgb2YgdGhlXG4gICAgICAgKiBSb3V0ZXIuKkxvY2F0aW9uIG9iamVjdHMgKGUuZy4gUm91dGVyLkhhc2hMb2NhdGlvbiBvciBSb3V0ZXIuSGlzdG9yeUxvY2F0aW9uKS5cbiAgICAgICAqL1xuICAgICAgcnVuOiBmdW5jdGlvbiBydW4oY2FsbGJhY2spIHtcbiAgICAgICAgaW52YXJpYW50KCFSb3V0ZXIuaXNSdW5uaW5nLCAnUm91dGVyIGlzIGFscmVhZHkgcnVubmluZycpO1xuXG4gICAgICAgIGRpc3BhdGNoSGFuZGxlciA9IGZ1bmN0aW9uIChlcnJvciwgdHJhbnNpdGlvbiwgbmV3U3RhdGUpIHtcbiAgICAgICAgICBpZiAoZXJyb3IpIFJvdXRlci5oYW5kbGVFcnJvcihlcnJvcik7XG5cbiAgICAgICAgICBpZiAocGVuZGluZ1RyYW5zaXRpb24gIT09IHRyYW5zaXRpb24pIHJldHVybjtcblxuICAgICAgICAgIHBlbmRpbmdUcmFuc2l0aW9uID0gbnVsbDtcblxuICAgICAgICAgIGlmICh0cmFuc2l0aW9uLmFib3J0UmVhc29uKSB7XG4gICAgICAgICAgICBSb3V0ZXIuaGFuZGxlQWJvcnQodHJhbnNpdGlvbi5hYm9ydFJlYXNvbik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoUm91dGVyLCBSb3V0ZXIsIG5leHRTdGF0ZSA9IG5ld1N0YXRlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCEobG9jYXRpb24gaW5zdGFuY2VvZiBTdGF0aWNMb2NhdGlvbikpIHtcbiAgICAgICAgICBpZiAobG9jYXRpb24uYWRkQ2hhbmdlTGlzdGVuZXIpIGxvY2F0aW9uLmFkZENoYW5nZUxpc3RlbmVyKFJvdXRlci5oYW5kbGVMb2NhdGlvbkNoYW5nZSk7XG5cbiAgICAgICAgICBSb3V0ZXIuaXNSdW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJvb3RzdHJhcCB1c2luZyB0aGUgY3VycmVudCBwYXRoLlxuICAgICAgICBSb3V0ZXIucmVmcmVzaCgpO1xuICAgICAgfSxcblxuICAgICAgcmVmcmVzaDogZnVuY3Rpb24gcmVmcmVzaCgpIHtcbiAgICAgICAgUm91dGVyLmRpc3BhdGNoKGxvY2F0aW9uLmdldEN1cnJlbnRQYXRoKCksIG51bGwpO1xuICAgICAgfSxcblxuICAgICAgc3RvcDogZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgICAgUm91dGVyLmNhbmNlbFBlbmRpbmdUcmFuc2l0aW9uKCk7XG5cbiAgICAgICAgaWYgKGxvY2F0aW9uLnJlbW92ZUNoYW5nZUxpc3RlbmVyKSBsb2NhdGlvbi5yZW1vdmVDaGFuZ2VMaXN0ZW5lcihSb3V0ZXIuaGFuZGxlTG9jYXRpb25DaGFuZ2UpO1xuXG4gICAgICAgIFJvdXRlci5pc1J1bm5pbmcgPSBmYWxzZTtcbiAgICAgIH0sXG5cbiAgICAgIGdldExvY2F0aW9uOiBmdW5jdGlvbiBnZXRMb2NhdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGxvY2F0aW9uO1xuICAgICAgfSxcblxuICAgICAgZ2V0U2Nyb2xsQmVoYXZpb3I6IGZ1bmN0aW9uIGdldFNjcm9sbEJlaGF2aW9yKCkge1xuICAgICAgICByZXR1cm4gc2Nyb2xsQmVoYXZpb3I7XG4gICAgICB9LFxuXG4gICAgICBnZXRSb3V0ZUF0RGVwdGg6IGZ1bmN0aW9uIGdldFJvdXRlQXREZXB0aChyb3V0ZURlcHRoKSB7XG4gICAgICAgIHZhciByb3V0ZXMgPSBzdGF0ZS5yb3V0ZXM7XG4gICAgICAgIHJldHVybiByb3V0ZXMgJiYgcm91dGVzW3JvdXRlRGVwdGhdO1xuICAgICAgfSxcblxuICAgICAgc2V0Um91dGVDb21wb25lbnRBdERlcHRoOiBmdW5jdGlvbiBzZXRSb3V0ZUNvbXBvbmVudEF0RGVwdGgocm91dGVEZXB0aCwgY29tcG9uZW50KSB7XG4gICAgICAgIG1vdW50ZWRDb21wb25lbnRzW3JvdXRlRGVwdGhdID0gY29tcG9uZW50O1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IFVSTCBwYXRoICsgcXVlcnkgc3RyaW5nLlxuICAgICAgICovXG4gICAgICBnZXRDdXJyZW50UGF0aDogZnVuY3Rpb24gZ2V0Q3VycmVudFBhdGgoKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZS5wYXRoO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IFVSTCBwYXRoIHdpdGhvdXQgdGhlIHF1ZXJ5IHN0cmluZy5cbiAgICAgICAqL1xuICAgICAgZ2V0Q3VycmVudFBhdGhuYW1lOiBmdW5jdGlvbiBnZXRDdXJyZW50UGF0aG5hbWUoKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZS5wYXRobmFtZTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogUmV0dXJucyBhbiBvYmplY3Qgb2YgdGhlIGN1cnJlbnRseSBhY3RpdmUgVVJMIHBhcmFtZXRlcnMuXG4gICAgICAgKi9cbiAgICAgIGdldEN1cnJlbnRQYXJhbXM6IGZ1bmN0aW9uIGdldEN1cnJlbnRQYXJhbXMoKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZS5wYXJhbXM7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFJldHVybnMgYW4gb2JqZWN0IG9mIHRoZSBjdXJyZW50bHkgYWN0aXZlIHF1ZXJ5IHBhcmFtZXRlcnMuXG4gICAgICAgKi9cbiAgICAgIGdldEN1cnJlbnRRdWVyeTogZnVuY3Rpb24gZ2V0Q3VycmVudFF1ZXJ5KCkge1xuICAgICAgICByZXR1cm4gc3RhdGUucXVlcnk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgdGhlIGN1cnJlbnRseSBhY3RpdmUgcm91dGVzLlxuICAgICAgICovXG4gICAgICBnZXRDdXJyZW50Um91dGVzOiBmdW5jdGlvbiBnZXRDdXJyZW50Um91dGVzKCkge1xuICAgICAgICByZXR1cm4gc3RhdGUucm91dGVzO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIHJvdXRlLCBwYXJhbXMsIGFuZCBxdWVyeSBhcmUgYWN0aXZlLlxuICAgICAgICovXG4gICAgICBpc0FjdGl2ZTogZnVuY3Rpb24gaXNBY3RpdmUodG8sIHBhcmFtcywgcXVlcnkpIHtcbiAgICAgICAgaWYgKFBhdGhVdGlscy5pc0Fic29sdXRlKHRvKSkge1xuICAgICAgICAgIHJldHVybiB0byA9PT0gc3RhdGUucGF0aDtcbiAgICAgICAgfXJldHVybiByb3V0ZUlzQWN0aXZlKHN0YXRlLnJvdXRlcywgdG8pICYmIHBhcmFtc0FyZUFjdGl2ZShzdGF0ZS5wYXJhbXMsIHBhcmFtcykgJiYgKHF1ZXJ5ID09IG51bGwgfHwgcXVlcnlJc0FjdGl2ZShzdGF0ZS5xdWVyeSwgcXVlcnkpKTtcbiAgICAgIH1cblxuICAgIH0sXG5cbiAgICBtaXhpbnM6IFtTY3JvbGxIaXN0b3J5XSxcblxuICAgIHByb3BUeXBlczoge1xuICAgICAgY2hpbGRyZW46IFByb3BUeXBlcy5mYWxzeVxuICAgIH0sXG5cbiAgICBjaGlsZENvbnRleHRUeXBlczoge1xuICAgICAgcm91dGVEZXB0aDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgcm91dGVyOiBQcm9wVHlwZXMucm91dGVyLmlzUmVxdWlyZWRcbiAgICB9LFxuXG4gICAgZ2V0Q2hpbGRDb250ZXh0OiBmdW5jdGlvbiBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICByb3V0ZURlcHRoOiAxLFxuICAgICAgICByb3V0ZXI6IFJvdXRlclxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgICByZXR1cm4gc3RhdGUgPSBuZXh0U3RhdGU7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0gbmV4dFN0YXRlKTtcbiAgICB9LFxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgUm91dGVyLnN0b3AoKTtcbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgcm91dGUgPSBSb3V0ZXIuZ2V0Um91dGVBdERlcHRoKDApO1xuICAgICAgcmV0dXJuIHJvdXRlID8gUmVhY3QuY3JlYXRlRWxlbWVudChyb3V0ZS5oYW5kbGVyLCB0aGlzLnByb3BzKSA6IG51bGw7XG4gICAgfVxuXG4gIH0pO1xuXG4gIFJvdXRlci5jbGVhckFsbFJvdXRlcygpO1xuXG4gIGlmIChvcHRpb25zLnJvdXRlcykgUm91dGVyLmFkZFJvdXRlcyhvcHRpb25zLnJvdXRlcyk7XG5cbiAgcmV0dXJuIFJvdXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVSb3V0ZXI7Il19
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9yZWFjdC9saWIvaW52YXJpYW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBpbnZhcmlhbnRcbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIGludmFyaWFudCA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIGlmIChcInByb2R1Y3Rpb25cIiAhPT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH1cblxuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHZhciBlcnJvcjtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICAnTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArXG4gICAgICAgICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLidcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhcmdzID0gW2EsIGIsIGMsIGQsIGUsIGZdO1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICAnSW52YXJpYW50IFZpb2xhdGlvbjogJyArXG4gICAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107IH0pXG4gICAgICApO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7XG4iXX0=
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9yZWFjdC9saWIvd2FybmluZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAyMDE0LTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgd2FybmluZ1xuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoXCIuL2VtcHR5RnVuY3Rpb25cIik7XG5cbi8qKlxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciB3YXJuaW5nID0gZW1wdHlGdW5jdGlvbjtcblxuaWYgKFwicHJvZHVjdGlvblwiICE9PSBwcm9jZXNzLmVudi5OT0RFX0VOVikge1xuICB3YXJuaW5nID0gZnVuY3Rpb24oY29uZGl0aW9uLCBmb3JtYXQgKSB7Zm9yICh2YXIgYXJncz1bXSwkX18wPTIsJF9fMT1hcmd1bWVudHMubGVuZ3RoOyRfXzA8JF9fMTskX18wKyspIGFyZ3MucHVzaChhcmd1bWVudHNbJF9fMF0pO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnYHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArXG4gICAgICAgICdtZXNzYWdlIGFyZ3VtZW50J1xuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoZm9ybWF0Lmxlbmd0aCA8IDEwIHx8IC9eW3NcXFddKiQvLnRlc3QoZm9ybWF0KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnVGhlIHdhcm5pbmcgZm9ybWF0IHNob3VsZCBiZSBhYmxlIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgJyArXG4gICAgICAgICd3YXJuaW5nLiBQbGVhc2UsIHVzZSBhIG1vcmUgZGVzY3JpcHRpdmUgZm9ybWF0IHRoYW46ICcgKyBmb3JtYXRcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdC5pbmRleE9mKCdGYWlsZWQgQ29tcG9zaXRlIHByb3BUeXBlOiAnKSA9PT0gMCkge1xuICAgICAgcmV0dXJuOyAvLyBJZ25vcmUgQ29tcG9zaXRlQ29tcG9uZW50IHByb3B0eXBlIGNoZWNrLlxuICAgIH1cblxuICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpICB7cmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107fSk7XG4gICAgICBjb25zb2xlLndhcm4obWVzc2FnZSk7XG4gICAgICB0cnkge1xuICAgICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgfSBjYXRjaCh4KSB7fVxuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3YXJuaW5nO1xuIl19
},{"./emptyFunction":"/Users/mikemsrk/goflux/pub/node_modules/react/lib/emptyFunction.js","_process":"/Users/mikemsrk/goflux/pub/node_modules/browserify/node_modules/process/browser.js"}]},{},["./app/app.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIiwiYXBwL2FjdGlvbnMvQXV0aEFjdGlvbnMuanMiLCJhcHAvYWN0aW9ucy9Qcm9maWxlQWN0aW9ucy5qcyIsImFwcC9hY3Rpb25zL1RocmVhZEFjdGlvbnMuanMiLCJhcHAvY29tcG9uZW50cy9mcm9udC9mcm9udC10aHJlYWRzLmpzIiwiYXBwL2NvbXBvbmVudHMvZnJvbnQvZnJvbnQuanMiLCJhcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi1mb3JtLmpzIiwiYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uanMiLCJhcHAvY29tcG9uZW50cy9sb2dvdXQvbG9nb3V0LmpzIiwiYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5qcyIsImFwcC9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS1iaW8uanMiLCJhcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUtdGhyZWFkcy5qcyIsImFwcC9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5qcyIsImFwcC9jb21wb25lbnRzL3NpZ251cC9zaWdudXAtZm9ybS5qcyIsImFwcC9jb21wb25lbnRzL3NpZ251cC9zaWdudXAuanMiLCJhcHAvY29tcG9uZW50cy90aHJlYWQvbmV3LmpzIiwiYXBwL2NvbXBvbmVudHMvdGhyZWFkL3RocmVhZC5qcyIsImFwcC9jb25zdGFudHMvQXV0aENvbnN0YW50cy5qcyIsImFwcC9jb25zdGFudHMvUHJvZmlsZUNvbnN0YW50cy5qcyIsImFwcC9jb25zdGFudHMvVGhyZWFkQ29uc3RhbnRzLmpzIiwiYXBwL2Rpc3BhdGNoZXJzL0FwcERpc3BhdGNoZXIuanMiLCJhcHAvc2VydmljZXMvQXV0aFNlcnZpY2UuanMiLCJhcHAvc2VydmljZXMvUHJvZmlsZVNlcnZpY2UuanMiLCJhcHAvc2VydmljZXMvVGhyZWFkU2VydmljZS5qcyIsImFwcC9zdG9yZXMvQXV0aFN0b3JlLmpzIiwiYXBwL3N0b3Jlcy9Qcm9maWxlU3RvcmUuanMiLCJhcHAvc3RvcmVzL1RocmVhZFN0b3JlLmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2V2ZW50cy9ldmVudHMuanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL2ZsdXgvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZmx1eC9saWIvRGlzcGF0Y2hlci5qcyIsIm5vZGVfbW9kdWxlcy9mbHV4L2xpYi9pbnZhcmlhbnQuanMiLCJub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL0NhbmNlbGxhdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL0hpc3RvcnkuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9NYXRjaC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL05hdmlnYXRpb24uanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9QYXRoVXRpbHMuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9Qcm9wVHlwZXMuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9SZWRpcmVjdC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL1JvdXRlLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvU2Nyb2xsSGlzdG9yeS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL1N0YXRlLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvVHJhbnNpdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2FjdGlvbnMvTG9jYXRpb25BY3Rpb25zLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvYmVoYXZpb3JzL0ltaXRhdGVCcm93c2VyQmVoYXZpb3IuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9iZWhhdmlvcnMvU2Nyb2xsVG9Ub3BCZWhhdmlvci5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2NvbXBvbmVudHMvQ29udGV4dFdyYXBwZXIuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9jb21wb25lbnRzL0RlZmF1bHRSb3V0ZS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2NvbXBvbmVudHMvTGluay5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2NvbXBvbmVudHMvTm90Rm91bmRSb3V0ZS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2NvbXBvbmVudHMvUmVkaXJlY3QuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9jb21wb25lbnRzL1JvdXRlLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvY29tcG9uZW50cy9Sb3V0ZUhhbmRsZXIuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9jcmVhdGVSb3V0ZXIuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9jcmVhdGVSb3V0ZXNGcm9tUmVhY3RDaGlsZHJlbi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2dldFdpbmRvd1Njcm9sbFBvc2l0aW9uLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9pc1JlYWN0Q2hpbGRyZW4uanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9sb2NhdGlvbnMvSGFzaExvY2F0aW9uLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvbG9jYXRpb25zL0hpc3RvcnlMb2NhdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2xvY2F0aW9ucy9SZWZyZXNoTG9jYXRpb24uanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9sb2NhdGlvbnMvU3RhdGljTG9jYXRpb24uanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9sb2NhdGlvbnMvVGVzdExvY2F0aW9uLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvcnVuUm91dGVyLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvc3VwcG9ydHNIaXN0b3J5LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbm9kZV9tb2R1bGVzL3FzL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9ub2RlX21vZHVsZXMvcXMvbGliL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9ub2RlX21vZHVsZXMvcXMvbGliL3BhcnNlLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9ub2RlX21vZHVsZXMvcXMvbGliL3N0cmluZ2lmeS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbm9kZV9tb2R1bGVzL3FzL2xpYi91dGlscy5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC9saWIvRXhlY3V0aW9uRW52aXJvbm1lbnQuanMiLCJub2RlX21vZHVsZXMvcmVhY3QvbGliL09iamVjdC5hc3NpZ24uanMiLCJub2RlX21vZHVsZXMvcmVhY3QvbGliL2VtcHR5RnVuY3Rpb24uanMiLCJub2RlX21vZHVsZXMvcmVhY3QvbGliL2ludmFyaWFudC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC9saWIvd2FybmluZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN1NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJvdXRlciA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpO1xuXG52YXIgTmF2YmFyID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL25hdmJhci9uYXZiYXInKTtcbnZhciBQcm9maWxlID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZScpO1xudmFyIEZyb250ID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2Zyb250L2Zyb250Jyk7XG52YXIgTG9naW4gPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvbG9naW4vbG9naW4nKTtcbnZhciBMb2dvdXQgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvbG9nb3V0L2xvZ291dCcpO1xudmFyIFNpZ251cCA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9zaWdudXAvc2lnbnVwJyk7XG52YXIgTmV3VGhyZWFkID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL3RocmVhZC9uZXcnKTtcbnZhciBUaHJlYWQgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvdGhyZWFkL3RocmVhZCcpO1xuXG52YXIgUm91dGUgPSBSb3V0ZXIuUm91dGU7XG52YXIgRGVmYXVsdFJvdXRlID0gUm91dGVyLkRlZmF1bHRSb3V0ZTtcbnZhciBSb3V0ZUhhbmRsZXIgPSBSb3V0ZXIuUm91dGVIYW5kbGVyO1xudmFyIE5hdmlnYXRpb24gPSBSb3V0ZXIuTmF2aWdhdGlvbjtcbnZhciBMaW5rID0gUm91dGVyLkxpbms7XG5cbnZhciBBcHAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiQXBwXCIsXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpe1xuICAgIHJldHVybiB7XG4gICAgICAvLyBsb2dnZWRJbjogQXV0aC5sb2dnZWRJbigpXG4gICAgfTtcbiAgfSxcblxuICBzZXRTdGF0ZU9uQXV0aDogZnVuY3Rpb24obG9nZ2VkSW4pe1xuICAgIC8vIHRoaXMuc2V0U3RhdGUoe1xuICAgIC8vICAgbG9nZ2VkSW46IGxvZ2dlZEluXG4gICAgLy8gfSk7XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbE1vdW50OiBmdW5jdGlvbigpe1xuICAgIC8vIEF1dGgub25DaGFuZ2UgPSB0aGlzLnNldFN0YXRlT25BdXRoO1xuICB9LFxuICBcbiAgcmVuZGVyOiBmdW5jdGlvbigpe1xuICAgIHJldHVybiAoXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiY29udGFpbmVyLWZsdWlkXCJ9LCBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChOYXZiYXIsIG51bGwpLCBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZUhhbmRsZXIsIG51bGwpXG4gICAgICApXG4gICAgKTtcbiAgfVxufSk7XG5cbnZhciByb3V0ZXMgPSAoXG4gIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHtwYXRoOiBcIi9cIiwgaGFuZGxlcjogQXBwfSwgXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChEZWZhdWx0Um91dGUsIHtoYW5kbGVyOiBGcm9udH0pLCBcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7cGF0aDogXCJwcm9maWxlXCIsIGhhbmRsZXI6IFByb2ZpbGV9KSwgXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwge3BhdGg6IFwibG9naW5cIiwgaGFuZGxlcjogTG9naW59KSwgXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwge3BhdGg6IFwibG9nb3V0XCIsIGhhbmRsZXI6IExvZ291dH0pLCBcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7cGF0aDogXCJzaWdudXBcIiwgaGFuZGxlcjogU2lnbnVwfSksIFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHtwYXRoOiBcIm5ld1wiLCBoYW5kbGVyOiBOZXdUaHJlYWR9KVxuICApXG4pO1xuXG5cblJvdXRlci5ydW4ocm91dGVzLCBSb3V0ZXIuSGFzaExvY2F0aW9uLCBmdW5jdGlvbihSb290KXtcbiAgUmVhY3QucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm9vdCwgbnVsbCksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG59KTtcblx0XG5tb2R1bGUuZXhwb3J0cyA9IEFwcDtcbiIsInZhciBBcHBEaXNwYXRjaGVyID0gcmVxdWlyZSgnLi4vZGlzcGF0Y2hlcnMvQXBwRGlzcGF0Y2hlcicpO1xudmFyIEF1dGhDb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMvQXV0aENvbnN0YW50cycpO1xuXG52YXIgQXV0aEFjdGlvbnMgPSB7XG4gIHNpZ251cDogZnVuY3Rpb24oZGF0YSl7XG4gICAgQXBwRGlzcGF0Y2hlci5oYW5kbGVBY3Rpb24oe1xuICAgICAgYWN0aW9uVHlwZTogQXV0aENvbnN0YW50cy5TSUdOVVAsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSk7XG4gIH0sXG4gIGxvZ2luOiBmdW5jdGlvbihkYXRhKXtcbiAgICBBcHBEaXNwYXRjaGVyLmhhbmRsZUFjdGlvbih7XG4gICAgICBhY3Rpb25UeXBlOiBBdXRoQ29uc3RhbnRzLkxPR0lOLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pO1xuICB9LFxuICBsb2dvdXQ6IGZ1bmN0aW9uKCl7XG4gICAgQXBwRGlzcGF0Y2hlci5oYW5kbGVBY3Rpb24oe1xuICAgICAgYWN0aW9uVHlwZTogQXV0aENvbnN0YW50cy5MT0dPVVQsXG4gICAgICBkYXRhOiBudWxsXG4gICAgfSk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQXV0aEFjdGlvbnM7IiwidmFyIEFwcERpc3BhdGNoZXIgPSByZXF1aXJlKCcuLi9kaXNwYXRjaGVycy9BcHBEaXNwYXRjaGVyJyk7XG52YXIgUHJvZmlsZUNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cy9Qcm9maWxlQ29uc3RhbnRzJyk7XG5cbnZhciBQcm9maWxlQWN0aW9ucyA9IHtcbiAgZmV0Y2g6IGZ1bmN0aW9uKCl7XG4gICAgQXBwRGlzcGF0Y2hlci5oYW5kbGVBY3Rpb24oe1xuICAgICAgYWN0aW9uVHlwZTogUHJvZmlsZUNvbnN0YW50cy5GRVRDSFxuICAgIH0pO1xuICB9LFxuICB1cGRhdGU6IGZ1bmN0aW9uKGRhdGEpe1xuICAgIEFwcERpc3BhdGNoZXIuaGFuZGxlQWN0aW9uKHtcbiAgICAgIGFjdGlvblR5cGU6IFByb2ZpbGVDb25zdGFudHMuVVBEQVRFLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pO1xuICB9LFxuICBkZWxldGU6IGZ1bmN0aW9uKCl7XG4gICAgQXBwRGlzcGF0Y2hlci5oYW5kbGVBY3Rpb24oe1xuICAgICAgYWN0aW9uVHlwZTogUHJvZmlsZUNvbnN0YW50cy5ERUxFVEUsXG4gICAgICBkYXRhOiBudWxsXG4gICAgfSk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvZmlsZUFjdGlvbnM7IiwidmFyIEFwcERpc3BhdGNoZXIgPSByZXF1aXJlKCcuLi9kaXNwYXRjaGVycy9BcHBEaXNwYXRjaGVyJyk7XG52YXIgVGhyZWFkQ29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzL1RocmVhZENvbnN0YW50cycpO1xuXG52YXIgVGhyZWFkQWN0aW9ucyA9IHtcbiAgYWRkOiBmdW5jdGlvbihkYXRhKXtcbiAgICBBcHBEaXNwYXRjaGVyLmhhbmRsZUFjdGlvbih7XG4gICAgICBhY3Rpb25UeXBlOiBUaHJlYWRDb25zdGFudHMuQURELFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRocmVhZEFjdGlvbnM7IiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIFRocmVhZHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiVGhyZWFkc1wiLFxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIHtcbiAgICAgIFxuICAgIH07XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInRocmVhZHNcIn0sIFxuICAgICAgICBcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDNcIiwgbnVsbCwgXCJUaHJlYWRzIFwiKSwgXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRhYmxlXCIsIHtjbGFzc05hbWU6IFwidGFibGVcIn0sIFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRoZWFkXCIsIG51bGwsIFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidHJcIiwgbnVsbCwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRoXCIsIG51bGwsIFwiVGl0bGVcIiksIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiLCBudWxsLCBcIkJvZHlcIiksIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiLCBudWxsLCBcIlJhdGluZ1wiKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApLCBcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiLCBudWxsLCBcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0clwiLCBudWxsLCBcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIG51bGwsIFwiSmlsbFwiKSwgXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBudWxsLCBcIlNtaXRoXCIpLCBcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIG51bGwsIFwiNTBcIilcbiAgICAgICAgICAgICksIFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRyXCIsIG51bGwsIFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgbnVsbCwgXCJFdmVcIiksIFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgbnVsbCwgXCJKYWNrc29uXCIpLCBcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIG51bGwsIFwiOTRcIilcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICAgXG4gICAgICApXG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVGhyZWFkczsiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFRocmVhZHMgPSByZXF1aXJlKCcuL2Zyb250LXRocmVhZHMnKTtcbnZhciBMaW5rID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJykuTGluaztcblxudmFyIEZyb250ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIkZyb250XCIsXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpe1xuICAgIHJldHVybiB7XG4gICAgICBcbiAgICB9O1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJjb2wtbWQtMTJcIn0sIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHtjbGFzc05hbWU6IFwiYnRuIGJ0bi1pbmZvXCIsIHRvOiBcIi9uZXdcIn0sIFwiTmV3XCIpLCBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUaHJlYWRzLCBudWxsKVxuICAgICAgKVxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZyb250OyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUm91dGVyID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJyk7XG52YXIgTGluayA9IFJvdXRlci5MaW5rO1xuXG52YXIgTG9naW5Gb3JtID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIkxvZ2luRm9ybVwiLFxuICBoYW5kbGVTdWJtaXQ6IGZ1bmN0aW9uKGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgdXNlcm5hbWUgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnMudXNlcm5hbWUpLnZhbHVlLnRyaW0oKTtcbiAgICB2YXIgcGFzc3dvcmQgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnMucGFzc3dvcmQpLnZhbHVlLnRyaW0oKTtcbiAgICBpZighdXNlcm5hbWUgfHwgIXBhc3N3b3JkKXtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gU2VuZCByZXF1ZXN0IGJhY2sgdXAgdG8gTG9naW5cbiAgICB0aGlzLnByb3BzLm9uTG9naW5TdWJtaXQoe3VzZXJuYW1lOiB1c2VybmFtZSwgcGFzc3dvcmQ6IHBhc3N3b3JkfSk7XG4gICAgXG4gICAgUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzLnVzZXJuYW1lKS52YWx1ZSA9ICcnO1xuICAgIFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmcy5wYXNzd29yZCkudmFsdWUgPSAnJztcbiAgICByZXR1cm47XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gKFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImZvcm1cIiwge2NsYXNzTmFtZTogXCJsb2dpbkZvcm1cIiwgb25TdWJtaXQ6IHRoaXMuaGFuZGxlU3VibWl0fSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7dHlwZTogXCJ0ZXh0XCIsIGNsYXNzTmFtZTogXCJmb3JtLWNvbnRyb2xcIiwgcGxhY2Vob2xkZXI6IFwiVXNlcm5hbWVcIiwgcmVmOiBcInVzZXJuYW1lXCJ9KSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7dHlwZTogXCJwYXNzd29yZFwiLCBjbGFzc05hbWU6IFwiZm9ybS1jb250cm9sXCIsIHBsYWNlaG9sZGVyOiBcIlBhc3N3b3JkXCIsIHJlZjogXCJwYXNzd29yZFwifSksIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHtjbGFzc05hbWU6IFwiYnRuIGJ0bi1pbmZvXCIsIHRvOiBcIi9zaWdudXBcIn0sIFwiUmVnaXN0ZXJcIiksIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHt0eXBlOiBcInN1Ym1pdFwiLCBjbGFzc05hbWU6IFwiYnRuIGJ0bi1zdWNjZXNzXCIsIHZhbHVlOiBcIlN1Ym1pdFwifSwgXCJTdWJtaXRcIilcbiAgICAgIClcbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBMb2dpbkZvcm07IiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBMb2dpbkZvcm0gPSByZXF1aXJlKCcuL2xvZ2luLWZvcm0nKTtcbnZhciBBdXRoQWN0aW9ucyA9IHJlcXVpcmUoJy4uLy4uL2FjdGlvbnMvQXV0aEFjdGlvbnMnKTtcbnZhciBBdXRoU3RvcmUgPSByZXF1aXJlKCcuLi8uLi9zdG9yZXMvQXV0aFN0b3JlJyk7XG5cbnZhciBMb2dpbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJMb2dpblwiLFxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxvZ2dlZEluOiBBdXRoU3RvcmUubG9nZ2VkSW4oKSxcbiAgICAgIGVycm9yOiBBdXRoU3RvcmUuZXJyb3IoKVxuICAgIH07XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbE1vdW50OiBmdW5jdGlvbigpe1xuICAgIEF1dGhTdG9yZS5hZGRDaGFuZ2VMaXN0ZW5lcih0aGlzLl9vbkNoYW5nZSk7XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uKCl7XG4gICAgQXV0aFN0b3JlLnJlbW92ZUNoYW5nZUxpc3RlbmVyKHRoaXMuX29uQ2hhbmdlKTtcbiAgfSxcblxuICBfb25DaGFuZ2U6IGZ1bmN0aW9uKCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBsb2dnZWRJbjogQXV0aFN0b3JlLmxvZ2dlZEluKCksXG4gICAgICBlcnJvcjogQXV0aFN0b3JlLmVycm9yKClcbiAgICB9KTtcbiAgICBpZih0aGlzLnN0YXRlLmxvZ2dlZEluKXtcbiAgICAgIGxvY2F0aW9uLmhhc2ggPSAnLyc7XG4gICAgfVxuICB9LFxuXG4gIGhhbmRsZUxvZ2luU3VibWl0OiBmdW5jdGlvbih1c2VyKXtcbiAgICBBdXRoQWN0aW9ucy5sb2dpbih7dXNlcm5hbWU6dXNlci51c2VybmFtZSxwYXNzOnVzZXIucGFzc3dvcmR9KTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAoXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiQXV0aCBjZW50ZXItYmxvY2tcIn0sIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDJcIiwgbnVsbCwgXCJMb2dpblwiKSwgXG4gICAgICAgIHRoaXMuc3RhdGUubG9nZ2VkSW4gPyAoXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBcIiBZb3UgYXJlIGFscmVhZHkgbG9nZ2VkIGluIFwiKVxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExvZ2luRm9ybSwge29uTG9naW5TdWJtaXQ6IHRoaXMuaGFuZGxlTG9naW5TdWJtaXR9KVxuICAgICAgICAgICksIFxuICAgICAgICB0aGlzLnN0YXRlLmVycm9yICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCB7Y2xhc3NOYW1lOiBcImVycm9yXCJ9LCBcIkJhZCBsb2dpbiBpbmZvcm1hdGlvblwiKSlcbiAgICAgIClcbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBMb2dpbjsiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgTG9nb3V0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIkxvZ291dFwiLFxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG4gICAgLy8gVE9ETzogTW92ZSB0byBBdXRoIFN0b3JlP1xuICAgIC8vIGlmKEF1dGgubG9nZ2VkSW4oKSl7XG4gICAgLy8gICBBdXRoLmxvZ291dChmdW5jdGlvbigpe1xuICAgIC8vICAgICBsb2NhdGlvbi5oYXNoID0gJy9sb2dpbic7XG4gICAgLy8gICB9KTtcbiAgICAvLyB9XG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIGxvZ2dlZEluOiBBdXRoLmxvZ2dlZEluKClcbiAgICB9O1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAoXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiQXV0aCBjZW50ZXItYmxvY2tcIn0sIFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiTG9nb3V0IFN1Y2Nlc3NmdWwuXCIpXG4gICAgICApXG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTG9nb3V0OyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUm91dGVyID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJyk7XG52YXIgQXV0aEFjdGlvbnMgPSByZXF1aXJlKCcuLi8uLi9hY3Rpb25zL0F1dGhBY3Rpb25zJyk7XG52YXIgQXV0aFN0b3JlID0gcmVxdWlyZSgnLi4vLi4vc3RvcmVzL0F1dGhTdG9yZScpO1xudmFyIExpbmsgPSBSb3V0ZXIuTGluaztcblxuLy8gVE9ETyAtIGZhY3RvciBvdXQgbmF2YmFyIGxvZ2luIGZvcm1cblxudmFyIE5hdmJhciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJOYXZiYXJcIixcblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxvZ2dlZEluOiBBdXRoU3RvcmUubG9nZ2VkSW4oKVxuICAgIH07XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbE1vdW50OiBmdW5jdGlvbigpe1xuICAgIC8vIF9vbkNoYW5nZSBpcyBjYiBmdW5jdGlvbi5cbiAgICBBdXRoU3RvcmUuYWRkQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25DaGFuZ2UpO1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbigpe1xuICAgIEF1dGhTdG9yZS5yZW1vdmVDaGFuZ2VMaXN0ZW5lcih0aGlzLl9vbkNoYW5nZSk7XG4gIH0sXG5cbiAgX29uQ2hhbmdlOiBmdW5jdGlvbigpe1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbG9nZ2VkSW46IEF1dGhTdG9yZS5sb2dnZWRJbigpXG4gICAgfSk7XG4gICAgaWYodGhpcy5zdGF0ZS5sb2dnZWRJbil7XG4gICAgICBsb2NhdGlvbi5oYXNoID0gJy8nO1xuICAgIH1cbiAgfSxcblxuICBuYXZsb2dvdXQ6IGZ1bmN0aW9uKCl7XG4gICAgQXV0aEFjdGlvbnMubG9nb3V0KCk7XG4gIH0sXG5cbiAgaGFuZGxlU3VibWl0OiBmdW5jdGlvbihlKXtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIHVzZXJuYW1lID0gUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzLnVzZXJuYW1lKS52YWx1ZS50cmltKCk7XG4gICAgdmFyIHBhc3N3b3JkID0gUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzLnBhc3N3b3JkKS52YWx1ZS50cmltKCk7XG4gICAgaWYoIXVzZXJuYW1lIHx8ICFwYXNzd29yZCl7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIFRPRE86IHNlbmQgcmVxdWVzdCB0byBzZXJ2ZXJcbiAgICB0aGlzLmhhbmRsZUxvZ2luU3VibWl0KHt1c2VybmFtZTogdXNlcm5hbWUsIHBhc3N3b3JkOiBwYXNzd29yZH0pO1xuICAgIFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmcy51c2VybmFtZSkudmFsdWUgPSAnJztcbiAgICBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnMucGFzc3dvcmQpLnZhbHVlID0gJyc7XG4gICAgcmV0dXJuO1xuICB9LFxuXG4gIGhhbmRsZUxvZ2luU3VibWl0OiBmdW5jdGlvbih1c2VyKXtcbiAgICBBdXRoQWN0aW9ucy5sb2dpbih7dXNlcm5hbWU6dXNlci51c2VybmFtZSxwYXNzOnVzZXIucGFzc3dvcmR9KTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibmF2XCIsIHtjbGFzc05hbWU6IFwibmF2YmFyIG5hdmJhci1pbnZlcnNlXCJ9LCBcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJjb250YWluZXItZmx1aWRcIn0sIFxuXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJuYXZiYXItaGVhZGVyXCJ9LCBcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHt0eXBlOiBcImJ1dHRvblwiLCBjbGFzc05hbWU6IFwibmF2YmFyLXRvZ2dsZSBjb2xsYXBzZWRcIiwgXCJkYXRhLXRvZ2dsZVwiOiBcImNvbGxhcHNlXCIsIFwiZGF0YS10YXJnZXRcIjogXCIjYnMtZXhhbXBsZS1uYXZiYXItY29sbGFwc2UtMVwiLCBcImFyaWEtZXhwYW5kZWRcIjogXCJmYWxzZVwifSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7Y2xhc3NOYW1lOiBcInNyLW9ubHlcIn0sIFwiVG9nZ2xlIG5hdmlnYXRpb25cIiksIFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge2NsYXNzTmFtZTogXCJpY29uLWJhclwifSksIFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge2NsYXNzTmFtZTogXCJpY29uLWJhclwifSksIFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge2NsYXNzTmFtZTogXCJpY29uLWJhclwifSlcbiAgICAgICAgICApLCBcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7Y2xhc3NOYW1lOiBcIm5hdmJhci1icmFuZFwiLCBocmVmOiBcIiNcIn0sIFwiQXBwXCIpXG4gICAgICAgICksIFxuICAgICAgICBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiLCBpZDogXCJicy1leGFtcGxlLW5hdmJhci1jb2xsYXBzZS0xXCJ9LCBcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwge2NsYXNzTmFtZTogXCJuYXYgbmF2YmFyLW5hdiBuYXZiYXItcmlnaHRcIn0sIFxuXG4gICAgICAgICAgdGhpcy5zdGF0ZS5sb2dnZWRJbiA/IChcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIHtjbGFzc05hbWU6IFwibmF2YmFyLWZvcm0gbmF2YmFyLXJpZ2h0XCIsIHJvbGU6IFwibG9naW5cIn0sIFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiZm9ybS1ncm91cFwifSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7Y2xhc3NOYW1lOiBcImJ0biBidG4td2FybmluZ1wiLCB0bzogXCIvbG9nb3V0XCIsIG9uQ2xpY2s6IHRoaXMubmF2bG9nb3V0fSwgXCJMb2cgb3V0XCIpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImZvcm1cIiwge2NsYXNzTmFtZTogXCJuYXZiYXItZm9ybSBuYXZiYXItcmlnaHRcIiwgcm9sZTogXCJsb2dpblwiLCBvblN1Ym1pdDogdGhpcy5oYW5kbGVTdWJtaXR9LCBcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImZvcm0tZ3JvdXBcIn0sIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7dHlwZTogXCJ0ZXh0XCIsIGNsYXNzTmFtZTogXCJmb3JtLWNvbnRyb2xcIiwgcGxhY2Vob2xkZXI6IFwiVXNlcm5hbWVcIiwgcmVmOiBcInVzZXJuYW1lXCJ9KSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHt0eXBlOiBcInRleHRcIiwgY2xhc3NOYW1lOiBcImZvcm0tY29udHJvbFwiLCBwbGFjZWhvbGRlcjogXCJQYXNzd29yZFwiLCByZWY6IFwicGFzc3dvcmRcIn0pLCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHt0eXBlOiBcInN1Ym1pdFwiLCBjbGFzc05hbWU6IFwiYnRuIGJ0bi1zdWNjZXNzIGhpZGRlblwiLCB2YWx1ZTogXCJTdWJtaXRcIn0sIFwiU3VibWl0XCIpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApLCBcblxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtjbGFzc05hbWU6IFwiZHJvcGRvd25cIn0sIFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7aHJlZjogXCIjXCIsIGNsYXNzTmFtZTogXCJkcm9wZG93bi10b2dnbGVcIiwgXCJkYXRhLXRvZ2dsZVwiOiBcImRyb3Bkb3duXCIsIHJvbGU6IFwiYnV0dG9uXCIsIFwiYXJpYS1oYXNwb3B1cFwiOiBcInRydWVcIiwgXCJhcmlhLWV4cGFuZGVkXCI6IFwiZmFsc2VcIn0sIFwiRHJvcGRvd24gXCIsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtjbGFzc05hbWU6IFwiY2FyZXRcIn0pKSwgXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7Y2xhc3NOYW1lOiBcImRyb3Bkb3duLW1lbnVcIn0sIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7aHJlZjogXCIjXCJ9LCBcIkFjdGlvblwiKSksIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7aHJlZjogXCIjXCJ9LCBcIkFub3RoZXIgYWN0aW9uXCIpKSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtocmVmOiBcIiNcIn0sIFwiU29tZXRoaW5nIGVsc2UgaGVyZVwiKSksIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7cm9sZTogXCJzZXBhcmF0b3JcIiwgY2xhc3NOYW1lOiBcImRpdmlkZXJcIn0pLCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwge2hyZWY6IFwiI1wifSwgXCJTZXBhcmF0ZWQgbGlua1wiKSksIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7cm9sZTogXCJzZXBhcmF0b3JcIiwgY2xhc3NOYW1lOiBcImRpdmlkZXJcIn0pLCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwge2hyZWY6IFwiI1wifSwgXCJPbmUgbW9yZSBzZXBhcmF0ZWQgbGlua1wiKSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSwgXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmxvZ2dlZEluID8gKFxuICAgICAgICAgICAgICBudWxsXG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7dG86IFwiL3NpZ251cFwifSwgXCJSZWdpc3RlclwiKSlcbiAgICAgICAgICAgICksIFxuXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmxvZ2dlZEluID8gKFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7dG86IFwiL3Byb2ZpbGVcIn0sIFwiUHJvZmlsZVwiKSlcbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHt0bzogXCIvbG9naW5cIn0sIFwiTG9naW5cIikpXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICApXG4gICAgICAgIClcblxuICAgICAgKVxuICAgIClcbiAgICApXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5hdmJhcjsiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgQmlvID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIkJpb1wiLFxuICAvLyBUT0RPOiBJbmNvcnBvcmF0ZSBMYXRlciB3aGVuIEF1dGggaXMgaW4uXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpe1xuICAgIHJldHVybiB7XG4gICAgICBlZGl0aW5nOiBmYWxzZVxuICAgIH07XG4gIH0sXG5cbiAgLy8gVE9ETzogQnViYmxlIHRoaXMgdXAgdG8gcHJvZmlsZSBwYXJlbnRcblxuICBlbmFibGVFZGl0OiBmdW5jdGlvbigpe1xuICAgIC8vIG1ha2UgdGhlIGJpbyBmaWVsZCBlZGl0YWJsZVxuICAgICAgLy8gcmVwbGFjZSBpdCB3aXRoIGEgZm9ybS5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGVkaXRpbmc6IHRydWVcbiAgICB9KVxuICB9LFxuXG4gIGNhbmNlbEVkaXQ6IGZ1bmN0aW9uKCl7XG4gICAgLy8gbWFrZSB0aGUgYmlvIGZpZWxkIGVkaXRhYmxlXG4gICAgICAvLyByZXBsYWNlIGl0IHdpdGggYSBmb3JtLlxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZWRpdGluZzogZmFsc2VcbiAgICB9KVxuICB9LFxuXG4gIHNhdmVFZGl0OiBmdW5jdGlvbigpe1xuICAgIHZhciBhdmF0YXIgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnMuYXZhdGFyKS52YWx1ZS50cmltKCk7XG4gICAgdmFyIGJpbyA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmcy5iaW8pLnZhbHVlLnRyaW0oKTtcblxuICAgIHZhciBkYXRhID0gdGhpcy5wcm9wcy5pdGVtO1xuICAgIGRhdGEuYXZhdGFyX2xpbmsgPSBhdmF0YXI7XG4gICAgZGF0YS5iaW8gPSBiaW87XG5cbiAgICAvLyBCdWJibGUgdXAgcmVxdWVzdCB0byBwYXJlbnRcbiAgICB0aGlzLnByb3BzLm9uRWRpdFN1Ym1pdChkYXRhKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZWRpdGluZzogZmFsc2VcbiAgICB9KVxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJjb2wtbWQtM1wifSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoM1wiLCBudWxsLCB0aGlzLnByb3BzLml0ZW0udXNlcl9uYW1lKSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoM1wiLCBudWxsLCB0aGlzLnByb3BzLml0ZW0uZmlyc3RfbmFtZSwgXCIgXCIsIHRoaXMucHJvcHMuaXRlbS5sYXN0X25hbWUpLCBcblxuICAgICAgICAhdGhpcy5zdGF0ZS5lZGl0aW5nID8gKFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwge3NyYzogdGhpcy5wcm9wcy5pdGVtLmF2YXRhcl9saW5rLCBjbGFzc05hbWU6IFwiaW1nLXRodW1ibmFpbFwifSlcbiAgICAgICAgKSA6IChcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBcIkF2YXRhciBMaW5rOiBcIiwgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHt0eXBlOiBcInRleHRcIiwgcmVmOiBcImF2YXRhclwifSkpXG4gICAgICAgICksIFxuXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiUmVwOiBcIiwgdGhpcy5wcm9wcy5pdGVtLnJlcCksIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBcIklkOiBcIiwgdGhpcy5wcm9wcy5pdGVtLmlkKSwgXG5cbiAgICAgICAgIXRoaXMuc3RhdGUuZWRpdGluZyA/IChcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBcIkJpbzogXCIsIHRoaXMucHJvcHMuaXRlbS5iaW8pXG4gICAgICAgICkgOiAoXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgXCJCaW86IFwiLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwge3R5cGU6IFwidGV4dFwiLCByZWY6IFwiYmlvXCJ9KSlcbiAgICAgICAgKSwgXG4gICAgICAgIFxuICAgICAgICAhdGhpcy5zdGF0ZS5lZGl0aW5nID8gKFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtjbGFzc05hbWU6IFwiYnRuIGJ0bi13YXJuaW5nXCIsIG9uQ2xpY2s6IHRoaXMuZW5hYmxlRWRpdH0sIFwiRWRpdFwiKVxuICAgICAgICApIDogKFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtjbGFzc05hbWU6IFwiYnRuIGJ0bi1zdWNjZXNzXCIsIG9uQ2xpY2s6IHRoaXMuc2F2ZUVkaXR9LCBcIlNhdmVcIilcbiAgICAgICAgKSwgXG5cbiAgICAgICAgIXRoaXMuc3RhdGUuZWRpdGluZyA/IChcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7Y2xhc3NOYW1lOiBcImJ0biBidG4tc3VjY2VzcyBoaWRkZW5cIn0pXG4gICAgICAgICkgOiAoXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwge2NsYXNzTmFtZTogXCJidG4gYnRuLWluZm9cIiwgb25DbGljazogdGhpcy5jYW5jZWxFZGl0fSwgXCJDYW5jZWxcIilcbiAgICAgICAgKVxuXG4gICAgICApXG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQmlvOyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBCaW9UaHJlYWRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIkJpb1RocmVhZHNcIixcbiAgLy8gVE9ETzogSW5jb3Jwb3JhdGUgTGF0ZXIgd2hlbiBBdXRoIGlzIGluLlxuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4ge1xuICAgICAgXG4gICAgfTtcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImNvbC1tZC05XCJ9LCBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgzXCIsIG51bGwsIFwiVGhyZWFkcyBcIiksIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGFibGVcIiwge2NsYXNzTmFtZTogXCJ0YWJsZVwifSwgXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRoZWFkXCIsIG51bGwsIFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRyXCIsIG51bGwsIFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGhcIiwgbnVsbCwgXCJUaXRsZVwiKSwgXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiLCBudWxsLCBcIkJvZHlcIiksIFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGhcIiwgbnVsbCwgXCJSYXRpbmdcIilcbiAgICAgICAgICAgIClcbiAgICAgICAgICApLCBcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIiwgbnVsbCwgXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRyXCIsIG51bGwsIFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIG51bGwsIFwiSmlsbFwiKSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgbnVsbCwgXCJTbWl0aFwiKSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgbnVsbCwgXCI1MFwiKVxuICAgICAgICAgICksIFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0clwiLCBudWxsLCBcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBudWxsLCBcIkV2ZVwiKSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgbnVsbCwgXCJKYWNrc29uXCIpLCBcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBudWxsLCBcIjk0XCIpXG4gICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJpb1RocmVhZHM7IiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBBdXRoU3RvcmUgPSByZXF1aXJlKCcuLi8uLi9zdG9yZXMvQXV0aFN0b3JlJyk7XG52YXIgUHJvZmlsZVN0b3JlID0gcmVxdWlyZSgnLi4vLi4vc3RvcmVzL1Byb2ZpbGVTdG9yZScpO1xudmFyIFByb2ZpbGVBY3Rpb25zID0gcmVxdWlyZSgnLi4vLi4vYWN0aW9ucy9Qcm9maWxlQWN0aW9ucycpO1xudmFyIEJpbyA9IHJlcXVpcmUoJy4vcHJvZmlsZS1iaW8nKTtcbnZhciBCaW9UaHJlYWRzID0gcmVxdWlyZSgnLi9wcm9maWxlLXRocmVhZHMnKTtcblxudmFyIFByb2ZpbGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiUHJvZmlsZVwiLFxuICAvLyBUT0RPOiBJbmNvcnBvcmF0ZSBMYXRlciB3aGVuIEF1dGggaXMgaW4uXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpe1xuICAgIGlmKCFBdXRoU3RvcmUubG9nZ2VkSW4oKSl7XG4gICAgICBsb2NhdGlvbi5oYXNoID0gJy9sb2dpbic7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBhdmF0YXJfbGluazogXCJcIixcbiAgICAgIGJpbzogXCJcIixcbiAgICAgIGZpcnN0X25hbWU6IFwiXCIsXG4gICAgICBsYXN0X25hbWU6IFwiXCIsXG4gICAgICB1c2VyX25hbWU6IFwiXCIsXG4gICAgICBpZDogMCxcbiAgICAgIHJlcDogMFxuICAgIH07XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCl7XG4gICAgUHJvZmlsZUFjdGlvbnMuZmV0Y2goKTtcbiAgICBQcm9maWxlU3RvcmUuYWRkQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25DaGFuZ2UpO1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbigpe1xuICAgIFByb2ZpbGVTdG9yZS5yZW1vdmVDaGFuZ2VMaXN0ZW5lcih0aGlzLl9vbkNoYW5nZSk7XG4gIH0sXG5cbiAgZWRpdFByb2ZpbGU6IGZ1bmN0aW9uKGRhdGEpe1xuICAgIC8vIFNlbmQgYWN0aW9uIHRvIHVwZGF0ZSB1c2VyIGluZm9ybWF0aW9uXG4gICAgUHJvZmlsZUFjdGlvbnMudXBkYXRlKHtcbiAgICAgIGF2YXRhcl9saW5rOiBkYXRhLmF2YXRhcl9saW5rLFxuICAgICAgYmlvOiBkYXRhLmJpb1xuICAgIH0pO1xuICB9LFxuXG4gIF9vbkNoYW5nZTogZnVuY3Rpb24oKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBmaXJzdF9uYW1lOiBQcm9maWxlU3RvcmUuZ2V0QmlvKCkuZmlyc3RfbmFtZSxcbiAgICAgICAgbGFzdF9uYW1lOiBQcm9maWxlU3RvcmUuZ2V0QmlvKCkubGFzdF9uYW1lLFxuICAgICAgICB1c2VyX25hbWU6IFByb2ZpbGVTdG9yZS5nZXRCaW8oKS51c2VyX25hbWUsXG4gICAgICAgIGJpbzogUHJvZmlsZVN0b3JlLmdldEJpbygpLmJpbyxcbiAgICAgICAgYXZhdGFyX2xpbms6IFByb2ZpbGVTdG9yZS5nZXRCaW8oKS5hdmF0YXJfbGluayxcbiAgICAgICAgcmVwOiBQcm9maWxlU3RvcmUuZ2V0QmlvKCkucmVwXG4gICAgICB9KTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAoXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwicHJvZmlsZVwifSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQmlvLCB7b25FZGl0U3VibWl0OiB0aGlzLmVkaXRQcm9maWxlLCBpdGVtOiB0aGlzLnN0YXRlfSksIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJpb1RocmVhZHMsIG51bGwpXG4gICAgICApXG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvZmlsZTsiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgU2lnbnVwRm9ybSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJTaWdudXBGb3JtXCIsXG4gIGhhbmRsZVN1Ym1pdDogZnVuY3Rpb24oZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHZhciBmaXJzdG5hbWUgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnMuZmlyc3RuYW1lKS52YWx1ZS50cmltKCk7XG4gICAgdmFyIGxhc3RuYW1lID0gUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzLmxhc3RuYW1lKS52YWx1ZS50cmltKCk7XG4gICAgdmFyIHVzZXJuYW1lID0gUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzLnVzZXJuYW1lKS52YWx1ZS50cmltKCk7XG4gICAgdmFyIHBhc3N3b3JkID0gUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzLnBhc3N3b3JkKS52YWx1ZS50cmltKCk7XG4gICAgdmFyIHBhc3Njb25mID0gUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzLnBhc3Njb25mKS52YWx1ZS50cmltKCk7XG5cbiAgICB2YXIgZXJyb3IgPSBmYWxzZTtcbiAgICBpZighZmlyc3RuYW1lIHx8ICFsYXN0bmFtZSB8fCAhdXNlcm5hbWUgfHwgIXBhc3N3b3JkIHx8ICFwYXNzY29uZil7XG4gICAgICBlcnJvciA9IHRydWU7XG4gICAgfVxuICAgIGlmKHBhc3Njb25mICE9PSBwYXNzd29yZCl7XG4gICAgICBlcnJvciA9IHRydWU7XG4gICAgfVxuICAgIC8vIEJ1YmJsZSB0aGlzIHVwIHRvIHBhcmVudFxuICAgIHRoaXMucHJvcHMub25TaWdudXBTdWJtaXQoe2ZpcnN0bmFtZTogZmlyc3RuYW1lLCBsYXN0bmFtZTogbGFzdG5hbWUsIHVzZXJuYW1lOiB1c2VybmFtZSwgcGFzc3dvcmQ6IHBhc3N3b3JkLCBlcnJvcjogZXJyb3J9KTtcbiAgICBcbiAgICBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnMuZmlyc3RuYW1lKS52YWx1ZSA9ICcnO1xuICAgIFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmcy5sYXN0bmFtZSkudmFsdWUgPSAnJztcbiAgICBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnMudXNlcm5hbWUpLnZhbHVlID0gJyc7XG4gICAgUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzLnBhc3N3b3JkKS52YWx1ZSA9ICcnO1xuICAgIFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmcy5wYXNzY29uZikudmFsdWUgPSAnJztcbiAgICByZXR1cm47XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gKFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImZvcm1cIiwge2NsYXNzTmFtZTogXCJzaWdudXBGb3JtXCIsIG9uU3VibWl0OiB0aGlzLmhhbmRsZVN1Ym1pdH0sIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwibmFtZUZpZWxkXCJ9LCBcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwge25hbWU6IFwiZmlyc3RcIiwgdHlwZTogXCJ0ZXh0XCIsIGNsYXNzTmFtZTogXCJmb3JtLWNvbnRyb2xcIiwgcGxhY2Vob2xkZXI6IFwiRmlyc3RcIiwgcmVmOiBcImZpcnN0bmFtZVwifSksIFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7bmFtZTogXCJsYXN0XCIsIHR5cGU6IFwidGV4dFwiLCBjbGFzc05hbWU6IFwiZm9ybS1jb250cm9sXCIsIHBsYWNlaG9sZGVyOiBcIkxhc3RcIiwgcmVmOiBcImxhc3RuYW1lXCJ9KVxuICAgICAgICApLCBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHt0eXBlOiBcInRleHRcIiwgY2xhc3NOYW1lOiBcImZvcm0tY29udHJvbFwiLCBwbGFjZWhvbGRlcjogXCJVc2VybmFtZVwiLCByZWY6IFwidXNlcm5hbWVcIn0pLCBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHt0eXBlOiBcInBhc3N3b3JkXCIsIGNsYXNzTmFtZTogXCJmb3JtLWNvbnRyb2xcIiwgcGxhY2Vob2xkZXI6IFwiUGFzc3dvcmRcIiwgcmVmOiBcInBhc3N3b3JkXCJ9KSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7dHlwZTogXCJwYXNzd29yZFwiLCBjbGFzc05hbWU6IFwiZm9ybS1jb250cm9sXCIsIHBsYWNlaG9sZGVyOiBcIkNvbmZpcm1cIiwgcmVmOiBcInBhc3Njb25mXCJ9KSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwge3R5cGU6IFwic3VibWl0XCIsIGNsYXNzTmFtZTogXCJidG4gYnRuLXN1Y2Nlc3NcIiwgdmFsdWU6IFwiU3VibWl0XCJ9LCBcIlN1Ym1pdFwiKVxuICAgICAgKVxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNpZ251cEZvcm07IiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBTaWdudXBGb3JtID0gcmVxdWlyZSgnLi9zaWdudXAtZm9ybScpO1xudmFyIEF1dGhBY3Rpb25zID0gcmVxdWlyZSgnLi4vLi4vYWN0aW9ucy9BdXRoQWN0aW9ucycpO1xudmFyIEF1dGhTdG9yZSA9IHJlcXVpcmUoJy4uLy4uL3N0b3Jlcy9BdXRoU3RvcmUnKTtcblxudmFyIFNpZ251cCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJTaWdudXBcIixcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpe1xuICAgIHJldHVybiB7XG4gICAgICBsb2dnZWRJbjogQXV0aFN0b3JlLmxvZ2dlZEluKCksXG4gICAgICBlcnJvcjogQXV0aFN0b3JlLmVycm9yKClcbiAgICB9O1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxNb3VudDogZnVuY3Rpb24oKXtcbiAgICBBdXRoU3RvcmUuYWRkQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25DaGFuZ2UpO1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbigpe1xuICAgIEF1dGhTdG9yZS5yZW1vdmVDaGFuZ2VMaXN0ZW5lcih0aGlzLl9vbkNoYW5nZSk7XG4gIH0sXG5cbiAgX29uQ2hhbmdlOiBmdW5jdGlvbigpe1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbG9nZ2VkSW46IEF1dGhTdG9yZS5sb2dnZWRJbigpLFxuICAgICAgZXJyb3I6IEF1dGhTdG9yZS5lcnJvcigpXG4gICAgfSk7XG4gICAgaWYodGhpcy5zdGF0ZS5sb2dnZWRJbil7XG4gICAgICBsb2NhdGlvbi5oYXNoID0gJy8nO1xuICAgIH1cbiAgfSxcblxuICBoYW5kbGVTaWdudXBTdWJtaXQ6IGZ1bmN0aW9uKHVzZXIpe1xuICAgIEF1dGhBY3Rpb25zLnNpZ251cCh7XG4gICAgICBmaXJzdG5hbWU6IHVzZXIuZmlyc3RuYW1lLCBcbiAgICAgIGxhc3RuYW1lOiB1c2VyLmxhc3RuYW1lLCBcbiAgICAgIHVzZXJuYW1lOiB1c2VyLnVzZXJuYW1lLCBcbiAgICAgIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkLCBcbiAgICAgIGVycm9yOiB1c2VyLmVycm9yXG4gICAgfSk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcIkF1dGggY2VudGVyLWJsb2NrXCJ9LCBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgyXCIsIG51bGwsIFwiU2lnbiB1cFwiKSwgXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTaWdudXBGb3JtLCB7b25TaWdudXBTdWJtaXQ6IHRoaXMuaGFuZGxlU2lnbnVwU3VibWl0fSksIFxuICAgICAgICAgIHRoaXMuc3RhdGUuZXJyb3IgJiYgKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIHtjbGFzc05hbWU6IFwiZXJyb3JcIn0sIFwiQmFkIHNpZ251cCBpbmZvcm1hdGlvblwiKSlcbiAgICAgIClcbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBTaWdudXA7IiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBUaHJlYWRTdG9yZSA9IHJlcXVpcmUoJy4uLy4uL3N0b3Jlcy9UaHJlYWRTdG9yZScpO1xudmFyIFRocmVhZEFjdGlvbnMgPSByZXF1aXJlKCcuLi8uLi9hY3Rpb25zL1RocmVhZEFjdGlvbnMnKTtcblxudmFyIE5ld1RocmVhZCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJOZXdUaHJlYWRcIixcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpe1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZVxuICAgIH07XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCl7XG4gICAgVGhyZWFkU3RvcmUuYWRkQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25DaGFuZ2UpO1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbigpe1xuICAgIFRocmVhZFN0b3JlLnJlbW92ZUNoYW5nZUxpc3RlbmVyKHRoaXMuX29uQ2hhbmdlKTtcbiAgfSxcblxuICBhZGRUaHJlYWQ6IGZ1bmN0aW9uKCl7XG4gICAgLy8gU2VuZCBhY3Rpb24gdG8gdXBkYXRlIHVzZXIgaW5mb3JtYXRpb25cbiAgICB2YXIgdGl0bGUgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnMudGl0bGUpLnZhbHVlLnRyaW0oKTtcbiAgICB2YXIgYm9keSA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmcy5ib2R5KS52YWx1ZS50cmltKCk7XG5cbiAgICBpZighdGl0bGUgfHwgIWJvZHkpe1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIFRocmVhZEFjdGlvbnMuYWRkKHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIGJvZHk6IGJvZHlcbiAgICB9KTtcblxuICB9LFxuXG4gIF9vbkNoYW5nZTogZnVuY3Rpb24oKXtcbiAgICBsb2NhdGlvbi5oYXNoID0gJy8nO1xuICB9LFxuXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImNvbC1tZC0xMlwifSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoM1wiLCBudWxsLCBcIk5ldyBUaHJlYWRcIiksIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwibmV3VGhyZWFkIGNlbnRlci1ibG9ja1wifSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiLCB7b25TdWJtaXQ6IHRoaXMuYWRkVGhyZWFkfSwgXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7dHlwZTogXCJ0ZXh0XCIsIGNsYXNzTmFtZTogXCJmb3JtLWNvbnRyb2xcIiwgcGxhY2Vob2xkZXI6IFwiVGl0bGVcIiwgcmVmOiBcInRpdGxlXCJ9KSwgXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7dHlwZTogXCJ0ZXh0YXJlYVwiLCBjbGFzc05hbWU6IFwiZm9ybS1jb250cm9sXCIsIHBsYWNlaG9sZGVyOiBcIkJvZHlcIiwgcmVmOiBcImJvZHlcIn0pLCBcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7dHlwZTogXCJzdWJtaXRcIiwgY2xhc3NOYW1lOiBcImJ0biBidG4tc3VjY2Vzc1wiLCB2YWx1ZTogXCJTdWJtaXRcIn0sIFwiU3VibWl0XCIpXG4gICAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBOZXdUaHJlYWQ7IiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIFRocmVhZCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJUaHJlYWRcIixcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpe1xuICAgIHJldHVybiB7XG4gICAgICBcbiAgICB9O1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRocmVhZDsiLCJ2YXIgQXV0aENvbnN0YW50cyA9IHtcbiAgU0lHTlVQOiAnU0lHTlVQJyxcbiAgTE9HSU46ICdMT0dJTicsXG4gIExPR09VVDogJ0xPR09VVCdcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQXV0aENvbnN0YW50czsiLCJ2YXIgUHJvZmlsZUNvbnN0YW50cyA9IHtcbiAgRkVUQ0g6ICdGRVRDSCcsIC8vIGZldGNoZXMgdXNlciBkYXRhIHRvIGRpc3BsYXkgb24gdmlld1xuICBVUERBVEU6ICdVUERBVEUnLCAvLyB1cGRhdGVzIHVzZXIgZGF0YVxuICBERUxFVEU6ICdERUxFVEUnIC8vIFRPRE86IGRlbGV0ZSBhY2NvdW50XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2ZpbGVDb25zdGFudHM7IiwidmFyIFRocmVhZENvbnN0YW50cyA9IHtcbiAgQUREOiAnQUREJyxcbiAgRkVUQ0g6ICdGRVRDSCcsXG4gIFVQREFURTogJ1VQREFURScsXG4gIERFTEVURTogJ0RFTEVURSdcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVGhyZWFkQ29uc3RhbnRzOyIsInZhciBEaXNwYXRjaGVyID0gcmVxdWlyZSgnZmx1eCcpLkRpc3BhdGNoZXI7XG52YXIgQXBwRGlzcGF0Y2hlciA9IG5ldyBEaXNwYXRjaGVyKCk7XG5cbkFwcERpc3BhdGNoZXIuaGFuZGxlQWN0aW9uID0gZnVuY3Rpb24oYWN0aW9uKSB7XG4gIHRoaXMuZGlzcGF0Y2goe1xuICAgIHNvdXJjZTogJ1ZJRVdfQUNUSU9OJyxcbiAgICBhY3Rpb246IGFjdGlvblxuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBBcHBEaXNwYXRjaGVyOyIsInZhciBhdXRoZW50aWNhdGVVc2VyID0gZnVuY3Rpb24odXNlcm5hbWUsIHBhc3N3b3JkLCBjYWxsYmFjaykge1xuICAkLmFqYXgoe1xuICAgIHR5cGU6ICdQT1NUJyxcbiAgICB1cmw6ICcvYXV0aGVudGljYXRlJyxcbiAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICB1c2VybmFtZTogdXNlcm5hbWUsXG4gICAgICBwYXNzd29yZDogcGFzc3dvcmRcbiAgICB9KSxcbiAgICBjcm9zc0RvbWFpbjogdHJ1ZSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwKSB7IC8vIE5PVCBXT1JLSU5HXG4gICAgICBjb25zb2xlLmxvZygnc3VjY2VzcycscmVzcCk7XG4gICAgICBjYWxsYmFjayh7XG4gICAgICAgIGF1dGhlbnRpY2F0ZWQ6IHRydWUsXG4gICAgICAgIHRva2VuOiByZXNwLmF1dGhfdG9rZW5cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZXJyb3I6IGZ1bmN0aW9uKHJlc3ApIHtcbiAgICAgIC8vIFRPRE86IEZpeCB0aGlzLCB0aGlzIGFsd2F5cyBnb2VzIHRvIGVycm9yIC0gbm90IHN1cmUuXG4gICAgICAvLyBGb3VuZCBvdXQgLSBqUXVlcnkgMS40LjIgd29ya3Mgd2l0aCBjdXJyZW50IGdvIHNlcnZlciwgYnV0IGJyZWFrcyB3aXRoIG5ld2VyIHZlci5cbiAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicscmVzcCk7XG4gICAgICBpZihyZXNwLnJlc3BvbnNlVGV4dCA9PT0gXCJcIil7XG4gICAgICAgIGNhbGxiYWNrKHtcbiAgICAgICAgICBhdXRoZW50aWNhdGVkOiB0cnVlLFxuICAgICAgICAgIHRva2VuOiByZXNwLmF1dGhfdG9rZW5cbiAgICAgICAgfSk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgY2FsbGJhY2soe1xuICAgICAgICAgIGF1dGhlbnRpY2F0ZWQ6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59O1xuXG52YXIgY3JlYXRlVXNlciA9IGZ1bmN0aW9uKHVzZXJuYW1lLCBwYXNzd29yZCwgZmlyc3RuYW1lLCBsYXN0bmFtZSwgY2FsbGJhY2spIHtcbiAgcmV0dXJuICQuYWpheCh7XG4gICAgdHlwZTogJ1BPU1QnLFxuICAgIHVybDogJy9jcmVhdGVVc2VyJyxcbiAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBcInVzZXJuYW1lXCI6IHVzZXJuYW1lLFxuICAgICAgXCJwYXNzd29yZFwiOiBwYXNzd29yZCxcbiAgICAgIFwiZmlyc3RuYW1lXCI6IGZpcnN0bmFtZSxcbiAgICAgIFwibGFzdG5hbWVcIjogbGFzdG5hbWVcbiAgICB9KSxcbiAgICBjcm9zc0RvbWFpbjogdHJ1ZSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwKSB7XG4gICAgICBjb25zb2xlLmxvZygnc3VjY2VzcycscmVzcCk7XG4gICAgICByZXR1cm4gY2FsbGJhY2soe1xuICAgICAgICBhdXRoZW50aWNhdGVkOiB0cnVlLFxuICAgICAgICB0b2tlbjogcmVzcC5hdXRoX3Rva2VuXG4gICAgICB9KTtcbiAgICB9LFxuICAgIGVycm9yOiBmdW5jdGlvbihyZXNwKSB7XG4gICAgICAvLyBUT0RPOiBGaXggdGhpcywgdGhpcyBhbHdheXMgZ29lcyB0byBlcnJvciAtIG5vdCBzdXJlLlxuICAgICAgLy8gRm91bmQgb3V0IC0galF1ZXJ5IDEuNC4yIHdvcmtzIHdpdGggY3VycmVudCBnbyBzZXJ2ZXIsIGJ1dCBicmVha3Mgd2l0aCBuZXdlciB2ZXIuXG4gICAgICBjb25zb2xlLmxvZygnZXJyb3InLHJlc3ApO1xuICAgICAgaWYocmVzcC5yZXNwb25zZVRleHQgPT09IFwiXCIpeyAvLyBpZiBubyBlcnJvciBtc2dcbiAgICAgICAgY2FsbGJhY2soe1xuICAgICAgICAgIGF1dGhlbnRpY2F0ZWQ6IHRydWUsXG4gICAgICAgICAgdG9rZW46IHJlc3AuYXV0aF90b2tlblxuICAgICAgICB9KTtcbiAgICAgIH1lbHNleyAgICAgICAgIC8vIGlmIGVycm9yIG1zZ1xuICAgICAgICBjYWxsYmFjayh7XG4gICAgICAgICAgYXV0aGVudGljYXRlZDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG5cbnZhciBBdXRoID0ge1xuICBsb2dpbjogZnVuY3Rpb24odXNlcm5hbWUsIHBhc3MsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMubG9nZ2VkSW4oKSkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ2FscmVhZHkgbG9nZ2VkIGluJyk7XG4gICAgICAvLyBpZiAoY2FsbGJhY2spIHtcbiAgICAgIC8vICAgY2FsbGJhY2sodHJ1ZSk7XG4gICAgICAvLyB9XG4gICAgICAvLyB0aGlzLm9uQ2hhbmdlKHRydWUpO1xuICAgICAgLy8gcmV0dXJuO1xuICAgIH1cbiAgICBhdXRoZW50aWNhdGVVc2VyKHVzZXJuYW1lLCBwYXNzLCAoZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIHZhciBhdXRoZW50aWNhdGVkID0gZmFsc2U7XG4gICAgICAgIGlmIChyZXMuYXV0aGVudGljYXRlZCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2dpbiBzdWNjZXNzZnVsJyk7XG4gICAgICAgICAgYXV0aGVudGljYXRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgY2FsbGJhY2soYXV0aGVudGljYXRlZCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhhdC5vbkNoYW5nZShhdXRoZW50aWNhdGVkKTtcbiAgICB9KSk7XG4gIH0sXG4gIHNpZ251cDogZnVuY3Rpb24odXNlcm5hbWUsIHBhc3N3b3JkLCBmaXJzdG5hbWUsIGxhc3RuYW1lLCBjYWxsYmFjaykge1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICBcbiAgICBpZiAodGhpcy5sb2dnZWRJbigpKSB7XG4gICAgICAvLyBpZiAoY2FsbGJhY2spIHtcbiAgICAgIC8vICAgY2FsbGJhY2sodHJ1ZSk7XG4gICAgICAvLyB9XG4gICAgICAvLyB0aGlzLm9uQ2hhbmdlKHRydWUpO1xuICAgICAgLy8gcmV0dXJuO1xuICAgIH1cbiAgICBjcmVhdGVVc2VyKHVzZXJuYW1lLCBwYXNzd29yZCwgZmlyc3RuYW1lLCBsYXN0bmFtZSwgZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIHZhciBhdXRoZW50aWNhdGVkID0gZmFsc2U7XG4gICAgICAgIGlmIChyZXMuYXV0aGVudGljYXRlZCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdzaWdudXAgYW5kIGxvZ2luIHN1Y2Nlc3NmdWwhJyk7XG4gICAgICAgICAgYXV0aGVudGljYXRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgY2FsbGJhY2soYXV0aGVudGljYXRlZCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhhdC5vbkNoYW5nZShhdXRoZW50aWNhdGVkKTtcbiAgICB9KTtcbiAgfSxcblxuICBsb2dvdXQ6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgZGVsZXRlQWxsQ29va2llcygpO1xuXG4gICAgZnVuY3Rpb24gZGVsZXRlQWxsQ29va2llcygpIHtcbiAgICAgIHZhciBjb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KFwiO1wiKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb29raWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjb29raWUgPSBjb29raWVzW2ldO1xuICAgICAgICB2YXIgZXFQb3MgPSBjb29raWUuaW5kZXhPZihcIj1cIik7XG4gICAgICAgIHZhciBuYW1lID0gZXFQb3MgPiAtMSA/IGNvb2tpZS5zdWJzdHIoMCwgZXFQb3MpIDogY29va2llO1xuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBuYW1lICsgXCI9O2V4cGlyZXM9VGh1LCAwMSBKYW4gMTk3MCAwMDowMDowMCBHTVRcIjtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH1cbiAgICB0aGlzLm9uQ2hhbmdlKGZhbHNlKTtcbiAgfSxcblxuICBsb2dnZWRJbjogZnVuY3Rpb24oKSB7XG4gICAgLy8gY2hlY2sgdGhlIGZsYXNoIHNlc3Npb24gY29va2llXG4gICAgdmFyIGdvb2QgPSBmYWxzZTtcbiAgICB2YXIgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjtcIik7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvb2tpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjb29raWUgPSBjb29raWVzW2ldO1xuICAgICAgdmFyIGVxUG9zID0gY29va2llLmluZGV4T2YoXCJmbGFzaC1zZXNzaW9uPVwiKTtcbiAgICAgIGlmKGVxUG9zID4gLTEpIGdvb2QgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBnb29kO1xuICB9LFxuXG4gIG9uQ2hhbmdlOiBmdW5jdGlvbigpIHt9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEF1dGg7IiwidmFyIGZldGNoVXNlciA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICQuYWpheCh7XG4gICAgdHlwZTogJ0dFVCcsXG4gICAgdXJsOiAnL2dldFVzZXJJbmZvJyxcbiAgICBjcm9zc0RvbWFpbjogdHJ1ZSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwKSB7IC8vIFdPUktJTkcgZm9yIGZldGNodXNlcj9cbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzdWNjZXNzJyxyZXNwKTtcbiAgICAgIGNhbGxiYWNrKHJlc3ApO1xuICAgIH0sXG4gICAgZXJyb3I6IGZ1bmN0aW9uKHJlc3ApIHtcbiAgICAgIC8vIFRPRE86IEZpeCB0aGlzLCB0aGlzIGFsd2F5cyBnb2VzIHRvIGVycm9yIC0gbm90IHN1cmUuXG4gICAgICAvLyBGb3VuZCBvdXQgLSBqUXVlcnkgMS40LjIgd29ya3Mgd2l0aCBjdXJyZW50IGdvIHNlcnZlciwgYnV0IGJyZWFrcyB3aXRoIG5ld2VyIHZlci5cbiAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicscmVzcCk7XG4gICAgICBjYWxsYmFjayhudWxsKTtcbiAgICB9XG4gIH0pO1xufTtcblxudmFyIHVwZGF0ZVVzZXIgPSBmdW5jdGlvbihiaW8sYXZhdGFyLGNhbGxiYWNrKSB7XG4gIHJldHVybiAkLmFqYXgoe1xuICAgIHR5cGU6ICdQT1NUJyxcbiAgICB1cmw6ICcvdXBkYXRlVXNlckluZm8nLFxuICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIFwiYmlvXCI6IGJpbyxcbiAgICAgIFwiYXZhdGFyX2xpbmtcIjogYXZhdGFyXG4gICAgfSksXG4gICAgY3Jvc3NEb21haW46IHRydWUsXG4gICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcCkge1xuICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3MnLHJlc3ApO1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKHJlc3ApO1xuICAgIH0sXG4gICAgZXJyb3I6IGZ1bmN0aW9uKHJlc3ApIHtcbiAgICAgIC8vIFRPRE86IEZpeCB0aGlzLCB0aGlzIGFsd2F5cyBnb2VzIHRvIGVycm9yIC0gbm90IHN1cmUuXG4gICAgICAvLyBGb3VuZCBvdXQgLSBqUXVlcnkgMS40LjIgd29ya3Mgd2l0aCBjdXJyZW50IGdvIHNlcnZlciwgYnV0IGJyZWFrcyB3aXRoIG5ld2VyIHZlci5cbiAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicscmVzcCk7XG4gICAgICBpZihyZXNwLnJlc3BvbnNlVGV4dCA9PT0gXCJcIil7IC8vIGlmIG5vIGVycm9yIG1zZ1xuICAgICAgICBjYWxsYmFjayhyZXNwKTtcbiAgICAgIH1lbHNleyAgICAgICAgIC8vIGlmIGVycm9yIG1zZ1xuICAgICAgICBjYWxsYmFjayhudWxsKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufTtcblxudmFyIFByb2ZpbGUgPSB7XG4gIGZldGNoOiBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICBmZXRjaFVzZXIoKGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjayhyZXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoYXQub25DaGFuZ2UocmVzKTtcbiAgICB9KSk7XG4gIH0sXG4gIFxuICB1cGRhdGU6IGZ1bmN0aW9uKGJpbywgYXZhdGFyLCBjYWxsYmFjaykge1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh7YmlvOmJpbyxhdmF0YXJfbGluazphdmF0YXJ9KSk7XG4gICAgdXBkYXRlVXNlcihiaW8sIGF2YXRhciwgZnVuY3Rpb24ocmVzKSB7XG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2socmVzKTtcbiAgICAgIH1cbiAgICAgIHRoYXQub25DaGFuZ2UocmVzKTtcbiAgICB9KTtcbiAgfSxcblxuICBkZWxldGU6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH1cbiAgICB0aGlzLm9uQ2hhbmdlKGZhbHNlKTtcbiAgfSxcblxuICBvbkNoYW5nZTogZnVuY3Rpb24oKSB7fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm9maWxlOyIsInZhciBhZGRUaHJlYWQgPSBmdW5jdGlvbih0aXRsZSxib2R5LGNhbGxiYWNrKSB7XG4gIHJldHVybiAkLmFqYXgoe1xuICAgIHR5cGU6ICdQT1NUJyxcbiAgICB1cmw6ICcvY3JlYXRlRm9ydW1UaHJlYWQnLFxuICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIFwidGl0bGVcIjogdGl0bGUsXG4gICAgICBcImJvZHlcIjogYm9keVxuICAgIH0pLFxuICAgIGNyb3NzRG9tYWluOiB0cnVlLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3ApIHtcbiAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzJyxyZXNwKTtcbiAgICAgIHJldHVybiBjYWxsYmFjayhyZXNwKTtcbiAgICB9LFxuICAgIGVycm9yOiBmdW5jdGlvbihyZXNwKSB7XG4gICAgICAvLyBUT0RPOiBGaXggdGhpcywgdGhpcyBhbHdheXMgZ29lcyB0byBlcnJvciAtIG5vdCBzdXJlLlxuICAgICAgLy8gRm91bmQgb3V0IC0galF1ZXJ5IDEuNC4yIHdvcmtzIHdpdGggY3VycmVudCBnbyBzZXJ2ZXIsIGJ1dCBicmVha3Mgd2l0aCBuZXdlciB2ZXIuXG4gICAgICBjb25zb2xlLmxvZygnZXJyb3InLHJlc3ApO1xuICAgICAgaWYocmVzcC5yZXNwb25zZVRleHQgPT09IFwiXCIpeyAvLyBpZiBubyBlcnJvciBtc2dcbiAgICAgICAgY2FsbGJhY2socmVzcCk7XG4gICAgICB9ZWxzZXsgICAgICAgICAvLyBpZiBlcnJvciBtc2dcbiAgICAgICAgY2FsbGJhY2sobnVsbCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG5cbnZhciBmZXRjaFRocmVhZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICQuYWpheCh7XG4gICAgdHlwZTogJ0dFVCcsXG4gICAgdXJsOiAnL2dldFVzZXJJbmZvJyxcbiAgICBjcm9zc0RvbWFpbjogdHJ1ZSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwKSB7IC8vIFdPUktJTkcgZm9yIGZldGNodXNlcj9cbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzdWNjZXNzJyxyZXNwKTtcbiAgICAgIGNhbGxiYWNrKHJlc3ApO1xuICAgIH0sXG4gICAgZXJyb3I6IGZ1bmN0aW9uKHJlc3ApIHtcbiAgICAgIC8vIFRPRE86IEZpeCB0aGlzLCB0aGlzIGFsd2F5cyBnb2VzIHRvIGVycm9yIC0gbm90IHN1cmUuXG4gICAgICAvLyBGb3VuZCBvdXQgLSBqUXVlcnkgMS40LjIgd29ya3Mgd2l0aCBjdXJyZW50IGdvIHNlcnZlciwgYnV0IGJyZWFrcyB3aXRoIG5ld2VyIHZlci5cbiAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicscmVzcCk7XG4gICAgICBjYWxsYmFjayhudWxsKTtcbiAgICB9XG4gIH0pO1xufTtcblxudmFyIHVwZGF0ZVRocmVhZCA9IGZ1bmN0aW9uKGJpbyxhdmF0YXIsY2FsbGJhY2spIHtcbiAgcmV0dXJuICQuYWpheCh7XG4gICAgdHlwZTogJ1BPU1QnLFxuICAgIHVybDogJy91cGRhdGVVc2VySW5mbycsXG4gICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgXCJiaW9cIjogYmlvLFxuICAgICAgXCJhdmF0YXJfbGlua1wiOiBhdmF0YXJcbiAgICB9KSxcbiAgICBjcm9zc0RvbWFpbjogdHJ1ZSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwKSB7XG4gICAgICBjb25zb2xlLmxvZygnc3VjY2VzcycscmVzcCk7XG4gICAgICByZXR1cm4gY2FsbGJhY2socmVzcCk7XG4gICAgfSxcbiAgICBlcnJvcjogZnVuY3Rpb24ocmVzcCkge1xuICAgICAgLy8gVE9ETzogRml4IHRoaXMsIHRoaXMgYWx3YXlzIGdvZXMgdG8gZXJyb3IgLSBub3Qgc3VyZS5cbiAgICAgIC8vIEZvdW5kIG91dCAtIGpRdWVyeSAxLjQuMiB3b3JrcyB3aXRoIGN1cnJlbnQgZ28gc2VydmVyLCBidXQgYnJlYWtzIHdpdGggbmV3ZXIgdmVyLlxuICAgICAgY29uc29sZS5sb2coJ2Vycm9yJyxyZXNwKTtcbiAgICAgIGlmKHJlc3AucmVzcG9uc2VUZXh0ID09PSBcIlwiKXsgLy8gaWYgbm8gZXJyb3IgbXNnXG4gICAgICAgIGNhbGxiYWNrKHJlc3ApO1xuICAgICAgfWVsc2V7ICAgICAgICAgLy8gaWYgZXJyb3IgbXNnXG4gICAgICAgIGNhbGxiYWNrKG51bGwpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59O1xuXG52YXIgVGhyZWFkID0ge1xuICBmZXRjaDogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgZmV0Y2hUaHJlYWQoKGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjayhyZXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoYXQub25DaGFuZ2UocmVzKTtcbiAgICB9KSk7XG4gIH0sXG5cbiAgYWRkOiBmdW5jdGlvbih0aXRsZSwgYm9keSwgY2FsbGJhY2spIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgICBhZGRUaHJlYWQodGl0bGUsIGJvZHksIGZ1bmN0aW9uKHJlcykge1xuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrKHJlcyk7XG4gICAgICB9XG4gICAgICB0aGF0Lm9uQ2hhbmdlKHJlcyk7XG4gICAgfSk7XG5cbiAgfSxcbiAgXG4gIHVwZGF0ZTogZnVuY3Rpb24oYmlvLCBhdmF0YXIsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIHVwZGF0ZVRocmVhZChiaW8sIGF2YXRhciwgZnVuY3Rpb24ocmVzKSB7XG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2socmVzKTtcbiAgICAgIH1cbiAgICAgIHRoYXQub25DaGFuZ2UocmVzKTtcbiAgICB9KTtcbiAgfSxcblxuICBkZWxldGU6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH1cbiAgICB0aGlzLm9uQ2hhbmdlKGZhbHNlKTtcbiAgfSxcblxuICBvbkNoYW5nZTogZnVuY3Rpb24oKSB7fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBUaHJlYWQ7IiwidmFyIEFwcERpc3BhdGNoZXIgPSByZXF1aXJlKCcuLi9kaXNwYXRjaGVycy9BcHBEaXNwYXRjaGVyJyk7XG52YXIgQXV0aENvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cy9BdXRoQ29uc3RhbnRzJyk7XG52YXIgQXV0aCA9IHJlcXVpcmUoJy4uL3NlcnZpY2VzL0F1dGhTZXJ2aWNlJyk7XG52YXIgRXZlbnRFbWl0dGVyID0gcmVxdWlyZSgnZXZlbnRzJykuRXZlbnRFbWl0dGVyO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIENIQU5HRV9FVkVOVCA9ICdjaGFuZ2UnO1xuXG52YXIgX3VzZXIgPSBudWxsO1xudmFyIF9sb2dnZWRJbiA9IG51bGw7XG52YXIgX2Vycm9yID0gbnVsbDtcblxudmFyIEF1dGhTdG9yZSA9IGFzc2lnbih7fSwgRXZlbnRFbWl0dGVyLnByb3RvdHlwZSwge1xuXG4gIGVtaXRDaGFuZ2U6IGZ1bmN0aW9uKCkge1xuICAgICB0aGlzLmVtaXQoQ0hBTkdFX0VWRU5UKTtcbiAgIH0sXG5cbiAgZXJyb3I6IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIF9lcnJvcjtcbiAgfSxcblxuICBsb2dpbjogZnVuY3Rpb24odXNlcm5hbWUscGFzcyl7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIF9lcnJvciA9IGZhbHNlO1xuICAgIEF1dGgubG9naW4odXNlcm5hbWUscGFzcyxmdW5jdGlvbihzdWNjZXNzKXtcblxuICAgICAgaWYoc3VjY2Vzcyl7XG4gICAgICAgIF9sb2dnZWRJbiA9IHRydWU7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgX2xvZ2dlZEluID0gZmFsc2U7XG4gICAgICAgIF9lcnJvciA9IHRydWU7XG4gICAgICB9XG4gICAgICB0aGF0LmVtaXRDaGFuZ2UoKTtcblxuICAgIH0pO1xuICB9LFxuICAvLyBsb2cgb3V0IHVzZXJcbiAgbG9nb3V0OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgQXV0aC5sb2dvdXQoZnVuY3Rpb24oKXtcbiAgICAgIF9sb2dnZWRJbiA9IGZhbHNlO1xuICAgICAgdGhhdC5lbWl0Q2hhbmdlKCk7XG4gICAgfSk7XG4gIH0sXG5cbiAgbG9nZ2VkSW46IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBBdXRoLmxvZ2dlZEluKCk7XG4gIH0sXG5cbiAgc2lnbnVwOiBmdW5jdGlvbih1c2VybmFtZSxwYXNzd29yZCxmaXJzdG5hbWUsbGFzdG5hbWUpe1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICBfZXJyb3IgPSBmYWxzZTtcbiAgICBBdXRoLnNpZ251cCh1c2VybmFtZSwgcGFzc3dvcmQsIGZpcnN0bmFtZSwgbGFzdG5hbWUsIGZ1bmN0aW9uKHN1Y2Nlc3MpIHtcblxuICAgICAgaWYoc3VjY2Vzcyl7XG4gICAgICAgIF9sb2dnZWRJbiA9IHRydWU7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgX2xvZ2dlZEluID0gZmFsc2U7XG4gICAgICAgIF9lcnJvciA9IHRydWU7XG4gICAgICB9XG4gICAgICB0aGF0LmVtaXRDaGFuZ2UoKTtcblxuICAgIH0pO1xuICB9LFxuXG4gIGFkZENoYW5nZUxpc3RlbmVyOiBmdW5jdGlvbihjYikge1xuICAgIHRoaXMub24oQ0hBTkdFX0VWRU5ULCBjYilcbiAgfSxcblxuICByZW1vdmVDaGFuZ2VMaXN0ZW5lcjogZnVuY3Rpb24oY2IpIHtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKENIQU5HRV9FVkVOVCwgY2IpO1xuICB9XG59KTtcblxuXG5BcHBEaXNwYXRjaGVyLnJlZ2lzdGVyKGZ1bmN0aW9uKHBheWxvYWQpe1xuICB2YXIgYWN0aW9uID0gcGF5bG9hZC5hY3Rpb247XG5cbiAgc3dpdGNoKGFjdGlvbi5hY3Rpb25UeXBlKXtcbiAgICBjYXNlIEF1dGhDb25zdGFudHMuU0lHTlVQOlxuICAgICAgQXV0aFN0b3JlLnNpZ251cChhY3Rpb24uZGF0YS51c2VybmFtZSxhY3Rpb24uZGF0YS5wYXNzd29yZCxhY3Rpb24uZGF0YS5maXJzdG5hbWUsYWN0aW9uLmRhdGEubGFzdG5hbWUpO1xuICAgICAgQXV0aFN0b3JlLmVtaXRDaGFuZ2UoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgQXV0aENvbnN0YW50cy5MT0dJTjpcbiAgICAgIEF1dGhTdG9yZS5sb2dpbihhY3Rpb24uZGF0YS51c2VybmFtZSxhY3Rpb24uZGF0YS5wYXNzKTtcbiAgICAgIEF1dGhTdG9yZS5lbWl0Q2hhbmdlKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIEF1dGhDb25zdGFudHMuTE9HT1VUOlxuICAgICAgQXV0aFN0b3JlLmxvZ291dCgpO1xuICAgICAgLy8gUm91dGVyQ29udGFpbmVyLmdldCgpLnRyYW5zaXRpb25UbygnL2xvZ2luJyk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBBdXRoU3RvcmUuZW1pdENoYW5nZSgpO1xuICByZXR1cm4gdHJ1ZTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEF1dGhTdG9yZTsiLCJ2YXIgQXBwRGlzcGF0Y2hlciA9IHJlcXVpcmUoJy4uL2Rpc3BhdGNoZXJzL0FwcERpc3BhdGNoZXInKTtcbnZhciBQcm9maWxlQ29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzL1Byb2ZpbGVDb25zdGFudHMnKTtcbnZhciBQcm9maWxlID0gcmVxdWlyZSgnLi4vc2VydmljZXMvUHJvZmlsZVNlcnZpY2UnKTtcbnZhciBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKS5FdmVudEVtaXR0ZXI7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgQ0hBTkdFX0VWRU5UID0gJ2NoYW5nZSc7XG5cbnZhciBfc3RvcmUgPSB7XG4gIGF2YXRhcl9saW5rOiBcIlwiLFxuICBiaW86IFwiXCIsXG4gIGZpcnN0X25hbWU6IFwiXCIsXG4gIGxhc3RfbmFtZTogXCJcIixcbiAgdXNlcl9uYW1lOiBcIlwiLFxuICBpZDogMCxcbiAgcmVwOiAwXG59O1xuXG52YXIgUHJvZmlsZVN0b3JlID0gYXNzaWduKHt9LCBFdmVudEVtaXR0ZXIucHJvdG90eXBlLCB7XG5cbiAgZW1pdENoYW5nZTogZnVuY3Rpb24oKSB7XG4gICAgIHRoaXMuZW1pdChDSEFOR0VfRVZFTlQpO1xuICAgfSxcblxuICBnZXRCaW86IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIF9zdG9yZTtcbiAgfSxcblxuICBmZXRjaDogZnVuY3Rpb24oKXtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgUHJvZmlsZS5mZXRjaChmdW5jdGlvbihkYXRhKXtcbiAgICAgIF9zdG9yZSA9IGRhdGE7XG4gICAgICB0aGF0LmVtaXRDaGFuZ2UoKTtcbiAgICB9KTtcbiAgfSxcblxuICB1cGRhdGU6IGZ1bmN0aW9uKGJpbyxhdmF0YXIpe1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICBQcm9maWxlLnVwZGF0ZShiaW8sYXZhdGFyLGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgY29uc29sZS5sb2coJ3VwZGF0ZSBzdWNjZXNzZnVsJyk7XG4gICAgICB0aGF0LmZldGNoKCk7XG4gICAgfSk7XG4gIH0sXG5cbiAgZGVsZXRlOiBmdW5jdGlvbigpe1xuXG5cbiAgfSxcblxuICBhZGRDaGFuZ2VMaXN0ZW5lcjogZnVuY3Rpb24oY2IpIHtcbiAgICB0aGlzLm9uKENIQU5HRV9FVkVOVCwgY2IpXG4gIH0sXG5cbiAgcmVtb3ZlQ2hhbmdlTGlzdGVuZXI6IGZ1bmN0aW9uKGNiKSB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcihDSEFOR0VfRVZFTlQsIGNiKTtcbiAgfVxufSk7XG5cblxuQXBwRGlzcGF0Y2hlci5yZWdpc3RlcihmdW5jdGlvbihwYXlsb2FkKXtcbiAgdmFyIGFjdGlvbiA9IHBheWxvYWQuYWN0aW9uO1xuXG4gIHN3aXRjaChhY3Rpb24uYWN0aW9uVHlwZSl7XG4gICAgY2FzZSBQcm9maWxlQ29uc3RhbnRzLkZFVENIOlxuICAgICAgUHJvZmlsZVN0b3JlLmZldGNoKCk7XG4gICAgICBQcm9maWxlU3RvcmUuZW1pdENoYW5nZSgpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBQcm9maWxlQ29uc3RhbnRzLlVQREFURTpcbiAgICAgIFByb2ZpbGVTdG9yZS51cGRhdGUoYWN0aW9uLmRhdGEuYmlvLGFjdGlvbi5kYXRhLmF2YXRhcl9saW5rKTtcbiAgICAgIFByb2ZpbGVTdG9yZS5lbWl0Q2hhbmdlKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFByb2ZpbGVTdG9yZS5ERUxFVEU6XG4gICAgICBQcm9maWxlU3RvcmUuZGVsZXRlKCk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBQcm9maWxlU3RvcmUuZW1pdENoYW5nZSgpO1xuICByZXR1cm4gdHJ1ZTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2ZpbGVTdG9yZTsiLCJ2YXIgQXBwRGlzcGF0Y2hlciA9IHJlcXVpcmUoJy4uL2Rpc3BhdGNoZXJzL0FwcERpc3BhdGNoZXInKTtcbnZhciBUaHJlYWRDb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMvVGhyZWFkQ29uc3RhbnRzJyk7XG52YXIgVGhyZWFkID0gcmVxdWlyZSgnLi4vc2VydmljZXMvVGhyZWFkU2VydmljZScpO1xudmFyIEV2ZW50RW1pdHRlciA9IHJlcXVpcmUoJ2V2ZW50cycpLkV2ZW50RW1pdHRlcjtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBDSEFOR0VfRVZFTlQgPSAnY2hhbmdlJztcblxudmFyIF9zdG9yZSA9IHtcbiAgdGl0bGU6IFwiXCIsXG4gIGJvZHk6IFwiXCIsXG4gIHJhdGluZzogMFxufTtcblxudmFyIFRocmVhZFN0b3JlID0gYXNzaWduKHt9LCBFdmVudEVtaXR0ZXIucHJvdG90eXBlLCB7XG5cbiAgZW1pdENoYW5nZTogZnVuY3Rpb24oKSB7XG4gICAgIHRoaXMuZW1pdChDSEFOR0VfRVZFTlQpO1xuICAgfSxcblxuICBnZXRUaHJlYWQ6IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIF9zdG9yZTtcbiAgfSxcblxuICBmZXRjaDogZnVuY3Rpb24oKXtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgVGhyZWFkLmZldGNoKGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgX3N0b3JlID0gZGF0YTtcbiAgICAgIHRoYXQuZW1pdENoYW5nZSgpO1xuICAgIH0pO1xuICB9LFxuXG4gIGFkZDogZnVuY3Rpb24odGl0bGUsYm9keSl7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIFRocmVhZC5hZGQodGl0bGUsYm9keSxmdW5jdGlvbihkYXRhKXtcbiAgICAgIHRoYXQuZW1pdENoYW5nZSgpO1xuICAgIH0pO1xuICB9LFxuXG4gIHVwZGF0ZTogZnVuY3Rpb24oYmlvLGF2YXRhcil7XG4gICAgLy8gdmFyIHRoYXQgPSB0aGlzO1xuICAgIC8vIFRocmVhZC51cGRhdGUoYmlvLGF2YXRhcixmdW5jdGlvbihkYXRhKXtcbiAgICAvLyAgIGNvbnNvbGUubG9nKCd1cGRhdGUgc3VjY2Vzc2Z1bCcpO1xuICAgIC8vICAgdGhhdC5mZXRjaCgpO1xuICAgIC8vIH0pO1xuICB9LFxuXG4gIGRlbGV0ZTogZnVuY3Rpb24oKXtcblxuXG4gIH0sXG5cbiAgYWRkQ2hhbmdlTGlzdGVuZXI6IGZ1bmN0aW9uKGNiKSB7XG4gICAgdGhpcy5vbihDSEFOR0VfRVZFTlQsIGNiKVxuICB9LFxuXG4gIHJlbW92ZUNoYW5nZUxpc3RlbmVyOiBmdW5jdGlvbihjYikge1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoQ0hBTkdFX0VWRU5ULCBjYik7XG4gIH1cbn0pO1xuXG5cbkFwcERpc3BhdGNoZXIucmVnaXN0ZXIoZnVuY3Rpb24ocGF5bG9hZCl7XG4gIHZhciBhY3Rpb24gPSBwYXlsb2FkLmFjdGlvbjtcblxuICBzd2l0Y2goYWN0aW9uLmFjdGlvblR5cGUpe1xuICAgIGNhc2UgVGhyZWFkQ29uc3RhbnRzLkZFVENIOlxuICAgICAgLy8gVGhyZWFkU3RvcmUuZmV0Y2goYWN0aW9uLmRhdGEuaWQpO1xuICAgICAgVGhyZWFkU3RvcmUuZW1pdENoYW5nZSgpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBUaHJlYWRDb25zdGFudHMuQUREOlxuICAgICAgVGhyZWFkU3RvcmUuYWRkKGFjdGlvbi5kYXRhLnRpdGxlLGFjdGlvbi5kYXRhLmJvZHkpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBUaHJlYWRTdG9yZS5VUERBVEU6XG4gICAgICAvLyBUaHJlYWRTdG9yZS5kZWxldGUoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgVGhyZWFkU3RvcmUuREVMRVRFOlxuICAgICAgLy8gVGhyZWFkU3RvcmUuZGVsZXRlKCk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBUaHJlYWRTdG9yZS5lbWl0Q2hhbmdlKCk7XG4gIHJldHVybiB0cnVlO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVGhyZWFkU3RvcmU7IiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgdGhpcy5fZXZlbnRzID0gdGhpcy5fZXZlbnRzIHx8IHt9O1xuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSB0aGlzLl9tYXhMaXN0ZW5lcnMgfHwgdW5kZWZpbmVkO1xufVxubW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7XG5cbi8vIEJhY2t3YXJkcy1jb21wYXQgd2l0aCBub2RlIDAuMTAueFxuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzID0gdW5kZWZpbmVkO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fbWF4TGlzdGVuZXJzID0gdW5kZWZpbmVkO1xuXG4vLyBCeSBkZWZhdWx0IEV2ZW50RW1pdHRlcnMgd2lsbCBwcmludCBhIHdhcm5pbmcgaWYgbW9yZSB0aGFuIDEwIGxpc3RlbmVycyBhcmVcbi8vIGFkZGVkIHRvIGl0LiBUaGlzIGlzIGEgdXNlZnVsIGRlZmF1bHQgd2hpY2ggaGVscHMgZmluZGluZyBtZW1vcnkgbGVha3MuXG5FdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycyA9IDEwO1xuXG4vLyBPYnZpb3VzbHkgbm90IGFsbCBFbWl0dGVycyBzaG91bGQgYmUgbGltaXRlZCB0byAxMC4gVGhpcyBmdW5jdGlvbiBhbGxvd3Ncbi8vIHRoYXQgdG8gYmUgaW5jcmVhc2VkLiBTZXQgdG8gemVybyBmb3IgdW5saW1pdGVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5zZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbihuKSB7XG4gIGlmICghaXNOdW1iZXIobikgfHwgbiA8IDAgfHwgaXNOYU4obikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCduIG11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXInKTtcbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHZhciBlciwgaGFuZGxlciwgbGVuLCBhcmdzLCBpLCBsaXN0ZW5lcnM7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgdGhpcy5fZXZlbnRzID0ge307XG5cbiAgLy8gSWYgdGhlcmUgaXMgbm8gJ2Vycm9yJyBldmVudCBsaXN0ZW5lciB0aGVuIHRocm93LlxuICBpZiAodHlwZSA9PT0gJ2Vycm9yJykge1xuICAgIGlmICghdGhpcy5fZXZlbnRzLmVycm9yIHx8XG4gICAgICAgIChpc09iamVjdCh0aGlzLl9ldmVudHMuZXJyb3IpICYmICF0aGlzLl9ldmVudHMuZXJyb3IubGVuZ3RoKSkge1xuICAgICAgZXIgPSBhcmd1bWVudHNbMV07XG4gICAgICBpZiAoZXIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICB0aHJvdyBlcjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICAgIH1cbiAgICAgIHRocm93IFR5cGVFcnJvcignVW5jYXVnaHQsIHVuc3BlY2lmaWVkIFwiZXJyb3JcIiBldmVudC4nKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVyID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChpc1VuZGVmaW5lZChoYW5kbGVyKSlcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKGlzRnVuY3Rpb24oaGFuZGxlcikpIHtcbiAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIC8vIGZhc3QgY2FzZXNcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIGFyZ3VtZW50c1sxXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl0pO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vIHNsb3dlclxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgYXJncyA9IG5ldyBBcnJheShsZW4gLSAxKTtcbiAgICAgICAgZm9yIChpID0gMTsgaSA8IGxlbjsgaSsrKVxuICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICBoYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChpc09iamVjdChoYW5kbGVyKSkge1xuICAgIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgYXJncyA9IG5ldyBBcnJheShsZW4gLSAxKTtcbiAgICBmb3IgKGkgPSAxOyBpIDwgbGVuOyBpKyspXG4gICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcblxuICAgIGxpc3RlbmVycyA9IGhhbmRsZXIuc2xpY2UoKTtcbiAgICBsZW4gPSBsaXN0ZW5lcnMubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKylcbiAgICAgIGxpc3RlbmVyc1tpXS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHZhciBtO1xuXG4gIGlmICghaXNGdW5jdGlvbihsaXN0ZW5lcikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50cylcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcblxuICAvLyBUbyBhdm9pZCByZWN1cnNpb24gaW4gdGhlIGNhc2UgdGhhdCB0eXBlID09PSBcIm5ld0xpc3RlbmVyXCIhIEJlZm9yZVxuICAvLyBhZGRpbmcgaXQgdG8gdGhlIGxpc3RlbmVycywgZmlyc3QgZW1pdCBcIm5ld0xpc3RlbmVyXCIuXG4gIGlmICh0aGlzLl9ldmVudHMubmV3TGlzdGVuZXIpXG4gICAgdGhpcy5lbWl0KCduZXdMaXN0ZW5lcicsIHR5cGUsXG4gICAgICAgICAgICAgIGlzRnVuY3Rpb24obGlzdGVuZXIubGlzdGVuZXIpID9cbiAgICAgICAgICAgICAgbGlzdGVuZXIubGlzdGVuZXIgOiBsaXN0ZW5lcik7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgLy8gT3B0aW1pemUgdGhlIGNhc2Ugb2Ygb25lIGxpc3RlbmVyLiBEb24ndCBuZWVkIHRoZSBleHRyYSBhcnJheSBvYmplY3QuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdID0gbGlzdGVuZXI7XG4gIGVsc2UgaWYgKGlzT2JqZWN0KHRoaXMuX2V2ZW50c1t0eXBlXSkpXG4gICAgLy8gSWYgd2UndmUgYWxyZWFkeSBnb3QgYW4gYXJyYXksIGp1c3QgYXBwZW5kLlxuICAgIHRoaXMuX2V2ZW50c1t0eXBlXS5wdXNoKGxpc3RlbmVyKTtcbiAgZWxzZVxuICAgIC8vIEFkZGluZyB0aGUgc2Vjb25kIGVsZW1lbnQsIG5lZWQgdG8gY2hhbmdlIHRvIGFycmF5LlxuICAgIHRoaXMuX2V2ZW50c1t0eXBlXSA9IFt0aGlzLl9ldmVudHNbdHlwZV0sIGxpc3RlbmVyXTtcblxuICAvLyBDaGVjayBmb3IgbGlzdGVuZXIgbGVha1xuICBpZiAoaXNPYmplY3QodGhpcy5fZXZlbnRzW3R5cGVdKSAmJiAhdGhpcy5fZXZlbnRzW3R5cGVdLndhcm5lZCkge1xuICAgIHZhciBtO1xuICAgIGlmICghaXNVbmRlZmluZWQodGhpcy5fbWF4TGlzdGVuZXJzKSkge1xuICAgICAgbSA9IHRoaXMuX21heExpc3RlbmVycztcbiAgICB9IGVsc2Uge1xuICAgICAgbSA9IEV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzO1xuICAgIH1cblxuICAgIGlmIChtICYmIG0gPiAwICYmIHRoaXMuX2V2ZW50c1t0eXBlXS5sZW5ndGggPiBtKSB7XG4gICAgICB0aGlzLl9ldmVudHNbdHlwZV0ud2FybmVkID0gdHJ1ZTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJyhub2RlKSB3YXJuaW5nOiBwb3NzaWJsZSBFdmVudEVtaXR0ZXIgbWVtb3J5ICcgK1xuICAgICAgICAgICAgICAgICAgICAnbGVhayBkZXRlY3RlZC4gJWQgbGlzdGVuZXJzIGFkZGVkLiAnICtcbiAgICAgICAgICAgICAgICAgICAgJ1VzZSBlbWl0dGVyLnNldE1heExpc3RlbmVycygpIHRvIGluY3JlYXNlIGxpbWl0LicsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50c1t0eXBlXS5sZW5ndGgpO1xuICAgICAgaWYgKHR5cGVvZiBjb25zb2xlLnRyYWNlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIG5vdCBzdXBwb3J0ZWQgaW4gSUUgMTBcbiAgICAgICAgY29uc29sZS50cmFjZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gIGlmICghaXNGdW5jdGlvbihsaXN0ZW5lcikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblxuICB2YXIgZmlyZWQgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBnKCkge1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgZyk7XG5cbiAgICBpZiAoIWZpcmVkKSB7XG4gICAgICBmaXJlZCA9IHRydWU7XG4gICAgICBsaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIGcubGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgdGhpcy5vbih0eXBlLCBnKTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8vIGVtaXRzIGEgJ3JlbW92ZUxpc3RlbmVyJyBldmVudCBpZmYgdGhlIGxpc3RlbmVyIHdhcyByZW1vdmVkXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIGxpc3QsIHBvc2l0aW9uLCBsZW5ndGgsIGk7XG5cbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzIHx8ICF0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgbGlzdCA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgbGVuZ3RoID0gbGlzdC5sZW5ndGg7XG4gIHBvc2l0aW9uID0gLTE7XG5cbiAgaWYgKGxpc3QgPT09IGxpc3RlbmVyIHx8XG4gICAgICAoaXNGdW5jdGlvbihsaXN0Lmxpc3RlbmVyKSAmJiBsaXN0Lmxpc3RlbmVyID09PSBsaXN0ZW5lcikpIHtcbiAgICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuICAgIGlmICh0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdGVuZXIpO1xuXG4gIH0gZWxzZSBpZiAoaXNPYmplY3QobGlzdCkpIHtcbiAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSA+IDA7KSB7XG4gICAgICBpZiAobGlzdFtpXSA9PT0gbGlzdGVuZXIgfHxcbiAgICAgICAgICAobGlzdFtpXS5saXN0ZW5lciAmJiBsaXN0W2ldLmxpc3RlbmVyID09PSBsaXN0ZW5lcikpIHtcbiAgICAgICAgcG9zaXRpb24gPSBpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocG9zaXRpb24gPCAwKVxuICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICBpZiAobGlzdC5sZW5ndGggPT09IDEpIHtcbiAgICAgIGxpc3QubGVuZ3RoID0gMDtcbiAgICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpc3Quc3BsaWNlKHBvc2l0aW9uLCAxKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3RlbmVyKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHZhciBrZXksIGxpc3RlbmVycztcblxuICBpZiAoIXRoaXMuX2V2ZW50cylcbiAgICByZXR1cm4gdGhpcztcblxuICAvLyBub3QgbGlzdGVuaW5nIGZvciByZW1vdmVMaXN0ZW5lciwgbm8gbmVlZCB0byBlbWl0XG4gIGlmICghdGhpcy5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApXG4gICAgICB0aGlzLl9ldmVudHMgPSB7fTtcbiAgICBlbHNlIGlmICh0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gZW1pdCByZW1vdmVMaXN0ZW5lciBmb3IgYWxsIGxpc3RlbmVycyBvbiBhbGwgZXZlbnRzXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgZm9yIChrZXkgaW4gdGhpcy5fZXZlbnRzKSB7XG4gICAgICBpZiAoa2V5ID09PSAncmVtb3ZlTGlzdGVuZXInKSBjb250aW51ZTtcbiAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKGtleSk7XG4gICAgfVxuICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCdyZW1vdmVMaXN0ZW5lcicpO1xuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChpc0Z1bmN0aW9uKGxpc3RlbmVycykpIHtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVycyk7XG4gIH0gZWxzZSB7XG4gICAgLy8gTElGTyBvcmRlclxuICAgIHdoaWxlIChsaXN0ZW5lcnMubGVuZ3RoKVxuICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnNbbGlzdGVuZXJzLmxlbmd0aCAtIDFdKTtcbiAgfVxuICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHZhciByZXQ7XG4gIGlmICghdGhpcy5fZXZlbnRzIHx8ICF0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgcmV0ID0gW107XG4gIGVsc2UgaWYgKGlzRnVuY3Rpb24odGhpcy5fZXZlbnRzW3R5cGVdKSlcbiAgICByZXQgPSBbdGhpcy5fZXZlbnRzW3R5cGVdXTtcbiAgZWxzZVxuICAgIHJldCA9IHRoaXMuX2V2ZW50c1t0eXBlXS5zbGljZSgpO1xuICByZXR1cm4gcmV0O1xufTtcblxuRXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbihlbWl0dGVyLCB0eXBlKSB7XG4gIHZhciByZXQ7XG4gIGlmICghZW1pdHRlci5fZXZlbnRzIHx8ICFlbWl0dGVyLl9ldmVudHNbdHlwZV0pXG4gICAgcmV0ID0gMDtcbiAgZWxzZSBpZiAoaXNGdW5jdGlvbihlbWl0dGVyLl9ldmVudHNbdHlwZV0pKVxuICAgIHJldCA9IDE7XG4gIGVsc2VcbiAgICByZXQgPSBlbWl0dGVyLl9ldmVudHNbdHlwZV0ubGVuZ3RoO1xuICByZXR1cm4gcmV0O1xufTtcblxuZnVuY3Rpb24gaXNGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ251bWJlcic7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiYgYXJnICE9PSBudWxsO1xufVxuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gdm9pZCAwO1xufVxuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG5cbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxucHJvY2Vzcy5uZXh0VGljayA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNhblNldEltbWVkaWF0ZSA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgd2luZG93LnNldEltbWVkaWF0ZTtcbiAgICB2YXIgY2FuTXV0YXRpb25PYnNlcnZlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgd2luZG93Lk11dGF0aW9uT2JzZXJ2ZXI7XG4gICAgdmFyIGNhblBvc3QgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHdpbmRvdy5wb3N0TWVzc2FnZSAmJiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lclxuICAgIDtcblxuICAgIGlmIChjYW5TZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChmKSB7IHJldHVybiB3aW5kb3cuc2V0SW1tZWRpYXRlKGYpIH07XG4gICAgfVxuXG4gICAgdmFyIHF1ZXVlID0gW107XG5cbiAgICBpZiAoY2FuTXV0YXRpb25PYnNlcnZlcikge1xuICAgICAgICB2YXIgaGlkZGVuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdmFyIG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHF1ZXVlTGlzdCA9IHF1ZXVlLnNsaWNlKCk7XG4gICAgICAgICAgICBxdWV1ZS5sZW5ndGggPSAwO1xuICAgICAgICAgICAgcXVldWVMaXN0LmZvckVhY2goZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgICAgICAgICAgZm4oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGhpZGRlbkRpdiwgeyBhdHRyaWJ1dGVzOiB0cnVlIH0pO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBuZXh0VGljayhmbikge1xuICAgICAgICAgICAgaWYgKCFxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBoaWRkZW5EaXYuc2V0QXR0cmlidXRlKCd5ZXMnLCAnbm8nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHF1ZXVlLnB1c2goZm4pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGlmIChjYW5Qb3N0KSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgICAgICB2YXIgc291cmNlID0gZXYuc291cmNlO1xuICAgICAgICAgICAgaWYgKChzb3VyY2UgPT09IHdpbmRvdyB8fCBzb3VyY2UgPT09IG51bGwpICYmIGV2LmRhdGEgPT09ICdwcm9jZXNzLXRpY2snKSB7XG4gICAgICAgICAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgaWYgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZuID0gcXVldWUuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgZm4oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRydWUpO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBuZXh0VGljayhmbikge1xuICAgICAgICAgICAgcXVldWUucHVzaChmbik7XG4gICAgICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoJ3Byb2Nlc3MtdGljaycsICcqJyk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHRUaWNrKGZuKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZm4sIDApO1xuICAgIH07XG59KSgpO1xuXG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbi8vIFRPRE8oc2h0eWxtYW4pXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cy5EaXNwYXRjaGVyID0gcmVxdWlyZSgnLi9saWIvRGlzcGF0Y2hlcicpXG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIERpc3BhdGNoZXJcbiAqIEB0eXBlY2hlY2tzXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCcuL2ludmFyaWFudCcpO1xuXG52YXIgX2xhc3RJRCA9IDE7XG52YXIgX3ByZWZpeCA9ICdJRF8nO1xuXG4vKipcbiAqIERpc3BhdGNoZXIgaXMgdXNlZCB0byBicm9hZGNhc3QgcGF5bG9hZHMgdG8gcmVnaXN0ZXJlZCBjYWxsYmFja3MuIFRoaXMgaXNcbiAqIGRpZmZlcmVudCBmcm9tIGdlbmVyaWMgcHViLXN1YiBzeXN0ZW1zIGluIHR3byB3YXlzOlxuICpcbiAqICAgMSkgQ2FsbGJhY2tzIGFyZSBub3Qgc3Vic2NyaWJlZCB0byBwYXJ0aWN1bGFyIGV2ZW50cy4gRXZlcnkgcGF5bG9hZCBpc1xuICogICAgICBkaXNwYXRjaGVkIHRvIGV2ZXJ5IHJlZ2lzdGVyZWQgY2FsbGJhY2suXG4gKiAgIDIpIENhbGxiYWNrcyBjYW4gYmUgZGVmZXJyZWQgaW4gd2hvbGUgb3IgcGFydCB1bnRpbCBvdGhlciBjYWxsYmFja3MgaGF2ZVxuICogICAgICBiZWVuIGV4ZWN1dGVkLlxuICpcbiAqIEZvciBleGFtcGxlLCBjb25zaWRlciB0aGlzIGh5cG90aGV0aWNhbCBmbGlnaHQgZGVzdGluYXRpb24gZm9ybSwgd2hpY2hcbiAqIHNlbGVjdHMgYSBkZWZhdWx0IGNpdHkgd2hlbiBhIGNvdW50cnkgaXMgc2VsZWN0ZWQ6XG4gKlxuICogICB2YXIgZmxpZ2h0RGlzcGF0Y2hlciA9IG5ldyBEaXNwYXRjaGVyKCk7XG4gKlxuICogICAvLyBLZWVwcyB0cmFjayBvZiB3aGljaCBjb3VudHJ5IGlzIHNlbGVjdGVkXG4gKiAgIHZhciBDb3VudHJ5U3RvcmUgPSB7Y291bnRyeTogbnVsbH07XG4gKlxuICogICAvLyBLZWVwcyB0cmFjayBvZiB3aGljaCBjaXR5IGlzIHNlbGVjdGVkXG4gKiAgIHZhciBDaXR5U3RvcmUgPSB7Y2l0eTogbnVsbH07XG4gKlxuICogICAvLyBLZWVwcyB0cmFjayBvZiB0aGUgYmFzZSBmbGlnaHQgcHJpY2Ugb2YgdGhlIHNlbGVjdGVkIGNpdHlcbiAqICAgdmFyIEZsaWdodFByaWNlU3RvcmUgPSB7cHJpY2U6IG51bGx9XG4gKlxuICogV2hlbiBhIHVzZXIgY2hhbmdlcyB0aGUgc2VsZWN0ZWQgY2l0eSwgd2UgZGlzcGF0Y2ggdGhlIHBheWxvYWQ6XG4gKlxuICogICBmbGlnaHREaXNwYXRjaGVyLmRpc3BhdGNoKHtcbiAqICAgICBhY3Rpb25UeXBlOiAnY2l0eS11cGRhdGUnLFxuICogICAgIHNlbGVjdGVkQ2l0eTogJ3BhcmlzJ1xuICogICB9KTtcbiAqXG4gKiBUaGlzIHBheWxvYWQgaXMgZGlnZXN0ZWQgYnkgYENpdHlTdG9yZWA6XG4gKlxuICogICBmbGlnaHREaXNwYXRjaGVyLnJlZ2lzdGVyKGZ1bmN0aW9uKHBheWxvYWQpIHtcbiAqICAgICBpZiAocGF5bG9hZC5hY3Rpb25UeXBlID09PSAnY2l0eS11cGRhdGUnKSB7XG4gKiAgICAgICBDaXR5U3RvcmUuY2l0eSA9IHBheWxvYWQuc2VsZWN0ZWRDaXR5O1xuICogICAgIH1cbiAqICAgfSk7XG4gKlxuICogV2hlbiB0aGUgdXNlciBzZWxlY3RzIGEgY291bnRyeSwgd2UgZGlzcGF0Y2ggdGhlIHBheWxvYWQ6XG4gKlxuICogICBmbGlnaHREaXNwYXRjaGVyLmRpc3BhdGNoKHtcbiAqICAgICBhY3Rpb25UeXBlOiAnY291bnRyeS11cGRhdGUnLFxuICogICAgIHNlbGVjdGVkQ291bnRyeTogJ2F1c3RyYWxpYSdcbiAqICAgfSk7XG4gKlxuICogVGhpcyBwYXlsb2FkIGlzIGRpZ2VzdGVkIGJ5IGJvdGggc3RvcmVzOlxuICpcbiAqICAgIENvdW50cnlTdG9yZS5kaXNwYXRjaFRva2VuID0gZmxpZ2h0RGlzcGF0Y2hlci5yZWdpc3RlcihmdW5jdGlvbihwYXlsb2FkKSB7XG4gKiAgICAgaWYgKHBheWxvYWQuYWN0aW9uVHlwZSA9PT0gJ2NvdW50cnktdXBkYXRlJykge1xuICogICAgICAgQ291bnRyeVN0b3JlLmNvdW50cnkgPSBwYXlsb2FkLnNlbGVjdGVkQ291bnRyeTtcbiAqICAgICB9XG4gKiAgIH0pO1xuICpcbiAqIFdoZW4gdGhlIGNhbGxiYWNrIHRvIHVwZGF0ZSBgQ291bnRyeVN0b3JlYCBpcyByZWdpc3RlcmVkLCB3ZSBzYXZlIGEgcmVmZXJlbmNlXG4gKiB0byB0aGUgcmV0dXJuZWQgdG9rZW4uIFVzaW5nIHRoaXMgdG9rZW4gd2l0aCBgd2FpdEZvcigpYCwgd2UgY2FuIGd1YXJhbnRlZVxuICogdGhhdCBgQ291bnRyeVN0b3JlYCBpcyB1cGRhdGVkIGJlZm9yZSB0aGUgY2FsbGJhY2sgdGhhdCB1cGRhdGVzIGBDaXR5U3RvcmVgXG4gKiBuZWVkcyB0byBxdWVyeSBpdHMgZGF0YS5cbiAqXG4gKiAgIENpdHlTdG9yZS5kaXNwYXRjaFRva2VuID0gZmxpZ2h0RGlzcGF0Y2hlci5yZWdpc3RlcihmdW5jdGlvbihwYXlsb2FkKSB7XG4gKiAgICAgaWYgKHBheWxvYWQuYWN0aW9uVHlwZSA9PT0gJ2NvdW50cnktdXBkYXRlJykge1xuICogICAgICAgLy8gYENvdW50cnlTdG9yZS5jb3VudHJ5YCBtYXkgbm90IGJlIHVwZGF0ZWQuXG4gKiAgICAgICBmbGlnaHREaXNwYXRjaGVyLndhaXRGb3IoW0NvdW50cnlTdG9yZS5kaXNwYXRjaFRva2VuXSk7XG4gKiAgICAgICAvLyBgQ291bnRyeVN0b3JlLmNvdW50cnlgIGlzIG5vdyBndWFyYW50ZWVkIHRvIGJlIHVwZGF0ZWQuXG4gKlxuICogICAgICAgLy8gU2VsZWN0IHRoZSBkZWZhdWx0IGNpdHkgZm9yIHRoZSBuZXcgY291bnRyeVxuICogICAgICAgQ2l0eVN0b3JlLmNpdHkgPSBnZXREZWZhdWx0Q2l0eUZvckNvdW50cnkoQ291bnRyeVN0b3JlLmNvdW50cnkpO1xuICogICAgIH1cbiAqICAgfSk7XG4gKlxuICogVGhlIHVzYWdlIG9mIGB3YWl0Rm9yKClgIGNhbiBiZSBjaGFpbmVkLCBmb3IgZXhhbXBsZTpcbiAqXG4gKiAgIEZsaWdodFByaWNlU3RvcmUuZGlzcGF0Y2hUb2tlbiA9XG4gKiAgICAgZmxpZ2h0RGlzcGF0Y2hlci5yZWdpc3RlcihmdW5jdGlvbihwYXlsb2FkKSB7XG4gKiAgICAgICBzd2l0Y2ggKHBheWxvYWQuYWN0aW9uVHlwZSkge1xuICogICAgICAgICBjYXNlICdjb3VudHJ5LXVwZGF0ZSc6XG4gKiAgICAgICAgICAgZmxpZ2h0RGlzcGF0Y2hlci53YWl0Rm9yKFtDaXR5U3RvcmUuZGlzcGF0Y2hUb2tlbl0pO1xuICogICAgICAgICAgIEZsaWdodFByaWNlU3RvcmUucHJpY2UgPVxuICogICAgICAgICAgICAgZ2V0RmxpZ2h0UHJpY2VTdG9yZShDb3VudHJ5U3RvcmUuY291bnRyeSwgQ2l0eVN0b3JlLmNpdHkpO1xuICogICAgICAgICAgIGJyZWFrO1xuICpcbiAqICAgICAgICAgY2FzZSAnY2l0eS11cGRhdGUnOlxuICogICAgICAgICAgIEZsaWdodFByaWNlU3RvcmUucHJpY2UgPVxuICogICAgICAgICAgICAgRmxpZ2h0UHJpY2VTdG9yZShDb3VudHJ5U3RvcmUuY291bnRyeSwgQ2l0eVN0b3JlLmNpdHkpO1xuICogICAgICAgICAgIGJyZWFrO1xuICogICAgIH1cbiAqICAgfSk7XG4gKlxuICogVGhlIGBjb3VudHJ5LXVwZGF0ZWAgcGF5bG9hZCB3aWxsIGJlIGd1YXJhbnRlZWQgdG8gaW52b2tlIHRoZSBzdG9yZXMnXG4gKiByZWdpc3RlcmVkIGNhbGxiYWNrcyBpbiBvcmRlcjogYENvdW50cnlTdG9yZWAsIGBDaXR5U3RvcmVgLCB0aGVuXG4gKiBgRmxpZ2h0UHJpY2VTdG9yZWAuXG4gKi9cblxuICBmdW5jdGlvbiBEaXNwYXRjaGVyKCkge1xuICAgIHRoaXMuJERpc3BhdGNoZXJfY2FsbGJhY2tzID0ge307XG4gICAgdGhpcy4kRGlzcGF0Y2hlcl9pc1BlbmRpbmcgPSB7fTtcbiAgICB0aGlzLiREaXNwYXRjaGVyX2lzSGFuZGxlZCA9IHt9O1xuICAgIHRoaXMuJERpc3BhdGNoZXJfaXNEaXNwYXRjaGluZyA9IGZhbHNlO1xuICAgIHRoaXMuJERpc3BhdGNoZXJfcGVuZGluZ1BheWxvYWQgPSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIGNhbGxiYWNrIHRvIGJlIGludm9rZWQgd2l0aCBldmVyeSBkaXNwYXRjaGVkIHBheWxvYWQuIFJldHVybnNcbiAgICogYSB0b2tlbiB0aGF0IGNhbiBiZSB1c2VkIHdpdGggYHdhaXRGb3IoKWAuXG4gICAqXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIERpc3BhdGNoZXIucHJvdG90eXBlLnJlZ2lzdGVyPWZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgdmFyIGlkID0gX3ByZWZpeCArIF9sYXN0SUQrKztcbiAgICB0aGlzLiREaXNwYXRjaGVyX2NhbGxiYWNrc1tpZF0gPSBjYWxsYmFjaztcbiAgICByZXR1cm4gaWQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYSBjYWxsYmFjayBiYXNlZCBvbiBpdHMgdG9rZW4uXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpZFxuICAgKi9cbiAgRGlzcGF0Y2hlci5wcm90b3R5cGUudW5yZWdpc3Rlcj1mdW5jdGlvbihpZCkge1xuICAgIGludmFyaWFudChcbiAgICAgIHRoaXMuJERpc3BhdGNoZXJfY2FsbGJhY2tzW2lkXSxcbiAgICAgICdEaXNwYXRjaGVyLnVucmVnaXN0ZXIoLi4uKTogYCVzYCBkb2VzIG5vdCBtYXAgdG8gYSByZWdpc3RlcmVkIGNhbGxiYWNrLicsXG4gICAgICBpZFxuICAgICk7XG4gICAgZGVsZXRlIHRoaXMuJERpc3BhdGNoZXJfY2FsbGJhY2tzW2lkXTtcbiAgfTtcblxuICAvKipcbiAgICogV2FpdHMgZm9yIHRoZSBjYWxsYmFja3Mgc3BlY2lmaWVkIHRvIGJlIGludm9rZWQgYmVmb3JlIGNvbnRpbnVpbmcgZXhlY3V0aW9uXG4gICAqIG9mIHRoZSBjdXJyZW50IGNhbGxiYWNrLiBUaGlzIG1ldGhvZCBzaG91bGQgb25seSBiZSB1c2VkIGJ5IGEgY2FsbGJhY2sgaW5cbiAgICogcmVzcG9uc2UgdG8gYSBkaXNwYXRjaGVkIHBheWxvYWQuXG4gICAqXG4gICAqIEBwYXJhbSB7YXJyYXk8c3RyaW5nPn0gaWRzXG4gICAqL1xuICBEaXNwYXRjaGVyLnByb3RvdHlwZS53YWl0Rm9yPWZ1bmN0aW9uKGlkcykge1xuICAgIGludmFyaWFudChcbiAgICAgIHRoaXMuJERpc3BhdGNoZXJfaXNEaXNwYXRjaGluZyxcbiAgICAgICdEaXNwYXRjaGVyLndhaXRGb3IoLi4uKTogTXVzdCBiZSBpbnZva2VkIHdoaWxlIGRpc3BhdGNoaW5nLidcbiAgICApO1xuICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCBpZHMubGVuZ3RoOyBpaSsrKSB7XG4gICAgICB2YXIgaWQgPSBpZHNbaWldO1xuICAgICAgaWYgKHRoaXMuJERpc3BhdGNoZXJfaXNQZW5kaW5nW2lkXSkge1xuICAgICAgICBpbnZhcmlhbnQoXG4gICAgICAgICAgdGhpcy4kRGlzcGF0Y2hlcl9pc0hhbmRsZWRbaWRdLFxuICAgICAgICAgICdEaXNwYXRjaGVyLndhaXRGb3IoLi4uKTogQ2lyY3VsYXIgZGVwZW5kZW5jeSBkZXRlY3RlZCB3aGlsZSAnICtcbiAgICAgICAgICAnd2FpdGluZyBmb3IgYCVzYC4nLFxuICAgICAgICAgIGlkXG4gICAgICAgICk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaW52YXJpYW50KFxuICAgICAgICB0aGlzLiREaXNwYXRjaGVyX2NhbGxiYWNrc1tpZF0sXG4gICAgICAgICdEaXNwYXRjaGVyLndhaXRGb3IoLi4uKTogYCVzYCBkb2VzIG5vdCBtYXAgdG8gYSByZWdpc3RlcmVkIGNhbGxiYWNrLicsXG4gICAgICAgIGlkXG4gICAgICApO1xuICAgICAgdGhpcy4kRGlzcGF0Y2hlcl9pbnZva2VDYWxsYmFjayhpZCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBEaXNwYXRjaGVzIGEgcGF5bG9hZCB0byBhbGwgcmVnaXN0ZXJlZCBjYWxsYmFja3MuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwYXlsb2FkXG4gICAqL1xuICBEaXNwYXRjaGVyLnByb3RvdHlwZS5kaXNwYXRjaD1mdW5jdGlvbihwYXlsb2FkKSB7XG4gICAgaW52YXJpYW50KFxuICAgICAgIXRoaXMuJERpc3BhdGNoZXJfaXNEaXNwYXRjaGluZyxcbiAgICAgICdEaXNwYXRjaC5kaXNwYXRjaCguLi4pOiBDYW5ub3QgZGlzcGF0Y2ggaW4gdGhlIG1pZGRsZSBvZiBhIGRpc3BhdGNoLidcbiAgICApO1xuICAgIHRoaXMuJERpc3BhdGNoZXJfc3RhcnREaXNwYXRjaGluZyhwYXlsb2FkKTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgaWQgaW4gdGhpcy4kRGlzcGF0Y2hlcl9jYWxsYmFja3MpIHtcbiAgICAgICAgaWYgKHRoaXMuJERpc3BhdGNoZXJfaXNQZW5kaW5nW2lkXSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuJERpc3BhdGNoZXJfaW52b2tlQ2FsbGJhY2soaWQpO1xuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLiREaXNwYXRjaGVyX3N0b3BEaXNwYXRjaGluZygpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogSXMgdGhpcyBEaXNwYXRjaGVyIGN1cnJlbnRseSBkaXNwYXRjaGluZy5cbiAgICpcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIERpc3BhdGNoZXIucHJvdG90eXBlLmlzRGlzcGF0Y2hpbmc9ZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuJERpc3BhdGNoZXJfaXNEaXNwYXRjaGluZztcbiAgfTtcblxuICAvKipcbiAgICogQ2FsbCB0aGUgY2FsbGJhY2sgc3RvcmVkIHdpdGggdGhlIGdpdmVuIGlkLiBBbHNvIGRvIHNvbWUgaW50ZXJuYWxcbiAgICogYm9va2tlZXBpbmcuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpZFxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIERpc3BhdGNoZXIucHJvdG90eXBlLiREaXNwYXRjaGVyX2ludm9rZUNhbGxiYWNrPWZ1bmN0aW9uKGlkKSB7XG4gICAgdGhpcy4kRGlzcGF0Y2hlcl9pc1BlbmRpbmdbaWRdID0gdHJ1ZTtcbiAgICB0aGlzLiREaXNwYXRjaGVyX2NhbGxiYWNrc1tpZF0odGhpcy4kRGlzcGF0Y2hlcl9wZW5kaW5nUGF5bG9hZCk7XG4gICAgdGhpcy4kRGlzcGF0Y2hlcl9pc0hhbmRsZWRbaWRdID0gdHJ1ZTtcbiAgfTtcblxuICAvKipcbiAgICogU2V0IHVwIGJvb2trZWVwaW5nIG5lZWRlZCB3aGVuIGRpc3BhdGNoaW5nLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gcGF5bG9hZFxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIERpc3BhdGNoZXIucHJvdG90eXBlLiREaXNwYXRjaGVyX3N0YXJ0RGlzcGF0Y2hpbmc9ZnVuY3Rpb24ocGF5bG9hZCkge1xuICAgIGZvciAodmFyIGlkIGluIHRoaXMuJERpc3BhdGNoZXJfY2FsbGJhY2tzKSB7XG4gICAgICB0aGlzLiREaXNwYXRjaGVyX2lzUGVuZGluZ1tpZF0gPSBmYWxzZTtcbiAgICAgIHRoaXMuJERpc3BhdGNoZXJfaXNIYW5kbGVkW2lkXSA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLiREaXNwYXRjaGVyX3BlbmRpbmdQYXlsb2FkID0gcGF5bG9hZDtcbiAgICB0aGlzLiREaXNwYXRjaGVyX2lzRGlzcGF0Y2hpbmcgPSB0cnVlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDbGVhciBib29ra2VlcGluZyB1c2VkIGZvciBkaXNwYXRjaGluZy5cbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuICBEaXNwYXRjaGVyLnByb3RvdHlwZS4kRGlzcGF0Y2hlcl9zdG9wRGlzcGF0Y2hpbmc9ZnVuY3Rpb24oKSB7XG4gICAgdGhpcy4kRGlzcGF0Y2hlcl9wZW5kaW5nUGF5bG9hZCA9IG51bGw7XG4gICAgdGhpcy4kRGlzcGF0Y2hlcl9pc0Rpc3BhdGNoaW5nID0gZmFsc2U7XG4gIH07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBEaXNwYXRjaGVyO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgaW52YXJpYW50XG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICpcbiAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAqIGV4cGVjdGluZy5cbiAqXG4gKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICovXG5cbnZhciBpbnZhcmlhbnQgPSBmdW5jdGlvbihjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICBpZiAoZmFsc2UpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH1cblxuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHZhciBlcnJvcjtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICAnTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArXG4gICAgICAgICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLidcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhcmdzID0gW2EsIGIsIGMsIGQsIGUsIGZdO1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICAnSW52YXJpYW50IFZpb2xhdGlvbjogJyArXG4gICAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107IH0pXG4gICAgICApO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIFRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09IG51bGwpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBvd25FbnVtZXJhYmxlS2V5cyhvYmopIHtcblx0dmFyIGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopO1xuXG5cdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0a2V5cyA9IGtleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqKSk7XG5cdH1cblxuXHRyZXR1cm4ga2V5cy5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuXHRcdHJldHVybiBwcm9wSXNFbnVtZXJhYmxlLmNhbGwob2JqLCBrZXkpO1xuXHR9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIGtleXM7XG5cdHZhciB0byA9IFRvT2JqZWN0KHRhcmdldCk7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gYXJndW1lbnRzW3NdO1xuXHRcdGtleXMgPSBvd25FbnVtZXJhYmxlS2V5cyhPYmplY3QoZnJvbSkpO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR0b1trZXlzW2ldXSA9IGZyb21ba2V5c1tpXV07XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcbiIsIi8qKlxuICogUmVwcmVzZW50cyBhIGNhbmNlbGxhdGlvbiBjYXVzZWQgYnkgbmF2aWdhdGluZyBhd2F5XG4gKiBiZWZvcmUgdGhlIHByZXZpb3VzIHRyYW5zaXRpb24gaGFzIGZ1bGx5IHJlc29sdmVkLlxuICovXG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gQ2FuY2VsbGF0aW9uKCkge31cblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWxsYXRpb247IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgncmVhY3QvbGliL2ludmFyaWFudCcpO1xudmFyIGNhblVzZURPTSA9IHJlcXVpcmUoJ3JlYWN0L2xpYi9FeGVjdXRpb25FbnZpcm9ubWVudCcpLmNhblVzZURPTTtcblxudmFyIEhpc3RvcnkgPSB7XG5cbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50IG51bWJlciBvZiBlbnRyaWVzIGluIHRoZSBoaXN0b3J5LlxuICAgKlxuICAgKiBOb3RlOiBUaGlzIHByb3BlcnR5IGlzIHJlYWQtb25seS5cbiAgICovXG4gIGxlbmd0aDogMSxcblxuICAvKipcbiAgICogU2VuZHMgdGhlIGJyb3dzZXIgYmFjayBvbmUgZW50cnkgaW4gdGhlIGhpc3RvcnkuXG4gICAqL1xuICBiYWNrOiBmdW5jdGlvbiBiYWNrKCkge1xuICAgIGludmFyaWFudChjYW5Vc2VET00sICdDYW5ub3QgdXNlIEhpc3RvcnkuYmFjayB3aXRob3V0IGEgRE9NJyk7XG5cbiAgICAvLyBEbyB0aGlzIGZpcnN0IHNvIHRoYXQgSGlzdG9yeS5sZW5ndGggd2lsbFxuICAgIC8vIGJlIGFjY3VyYXRlIGluIGxvY2F0aW9uIGNoYW5nZSBsaXN0ZW5lcnMuXG4gICAgSGlzdG9yeS5sZW5ndGggLT0gMTtcblxuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhpc3Rvcnk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG4vKiBqc2hpbnQgLVcwODQgKi9cbnZhciBQYXRoVXRpbHMgPSByZXF1aXJlKCcuL1BhdGhVdGlscycpO1xuXG5mdW5jdGlvbiBkZWVwU2VhcmNoKHJvdXRlLCBwYXRobmFtZSwgcXVlcnkpIHtcbiAgLy8gQ2hlY2sgdGhlIHN1YnRyZWUgZmlyc3QgdG8gZmluZCB0aGUgbW9zdCBkZWVwbHktbmVzdGVkIG1hdGNoLlxuICB2YXIgY2hpbGRSb3V0ZXMgPSByb3V0ZS5jaGlsZFJvdXRlcztcbiAgaWYgKGNoaWxkUm91dGVzKSB7XG4gICAgdmFyIG1hdGNoLCBjaGlsZFJvdXRlO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjaGlsZFJvdXRlcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgY2hpbGRSb3V0ZSA9IGNoaWxkUm91dGVzW2ldO1xuXG4gICAgICBpZiAoY2hpbGRSb3V0ZS5pc0RlZmF1bHQgfHwgY2hpbGRSb3V0ZS5pc05vdEZvdW5kKSBjb250aW51ZTsgLy8gQ2hlY2sgdGhlc2UgaW4gb3JkZXIgbGF0ZXIuXG5cbiAgICAgIGlmIChtYXRjaCA9IGRlZXBTZWFyY2goY2hpbGRSb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5KSkge1xuICAgICAgICAvLyBBIHJvdXRlIGluIHRoZSBzdWJ0cmVlIG1hdGNoZWQhIEFkZCB0aGlzIHJvdXRlIGFuZCB3ZSdyZSBkb25lLlxuICAgICAgICBtYXRjaC5yb3V0ZXMudW5zaGlmdChyb3V0ZSk7XG4gICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBObyBjaGlsZCByb3V0ZXMgbWF0Y2hlZDsgdHJ5IHRoZSBkZWZhdWx0IHJvdXRlLlxuICB2YXIgZGVmYXVsdFJvdXRlID0gcm91dGUuZGVmYXVsdFJvdXRlO1xuICBpZiAoZGVmYXVsdFJvdXRlICYmIChwYXJhbXMgPSBQYXRoVXRpbHMuZXh0cmFjdFBhcmFtcyhkZWZhdWx0Um91dGUucGF0aCwgcGF0aG5hbWUpKSkge1xuICAgIHJldHVybiBuZXcgTWF0Y2gocGF0aG5hbWUsIHBhcmFtcywgcXVlcnksIFtyb3V0ZSwgZGVmYXVsdFJvdXRlXSk7XG4gIH0gLy8gRG9lcyB0aGUgXCJub3QgZm91bmRcIiByb3V0ZSBtYXRjaD9cbiAgdmFyIG5vdEZvdW5kUm91dGUgPSByb3V0ZS5ub3RGb3VuZFJvdXRlO1xuICBpZiAobm90Rm91bmRSb3V0ZSAmJiAocGFyYW1zID0gUGF0aFV0aWxzLmV4dHJhY3RQYXJhbXMobm90Rm91bmRSb3V0ZS5wYXRoLCBwYXRobmFtZSkpKSB7XG4gICAgcmV0dXJuIG5ldyBNYXRjaChwYXRobmFtZSwgcGFyYW1zLCBxdWVyeSwgW3JvdXRlLCBub3RGb3VuZFJvdXRlXSk7XG4gIH0gLy8gTGFzdCBhdHRlbXB0OiBjaGVjayB0aGlzIHJvdXRlLlxuICB2YXIgcGFyYW1zID0gUGF0aFV0aWxzLmV4dHJhY3RQYXJhbXMocm91dGUucGF0aCwgcGF0aG5hbWUpO1xuICBpZiAocGFyYW1zKSB7XG4gICAgcmV0dXJuIG5ldyBNYXRjaChwYXRobmFtZSwgcGFyYW1zLCBxdWVyeSwgW3JvdXRlXSk7XG4gIH1yZXR1cm4gbnVsbDtcbn1cblxudmFyIE1hdGNoID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTWF0Y2gocGF0aG5hbWUsIHBhcmFtcywgcXVlcnksIHJvdXRlcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYXRjaCk7XG5cbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgIHRoaXMucm91dGVzID0gcm91dGVzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE1hdGNoLCBudWxsLCBbe1xuICAgIGtleTogJ2ZpbmRNYXRjaCcsXG5cbiAgICAvKipcbiAgICAgKiBBdHRlbXB0cyB0byBtYXRjaCBkZXB0aC1maXJzdCBhIHJvdXRlIGluIHRoZSBnaXZlbiByb3V0ZSdzXG4gICAgICogc3VidHJlZSBhZ2FpbnN0IHRoZSBnaXZlbiBwYXRoIGFuZCByZXR1cm5zIHRoZSBtYXRjaCBpZiBpdFxuICAgICAqIHN1Y2NlZWRzLCBudWxsIGlmIG5vIG1hdGNoIGNhbiBiZSBtYWRlLlxuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBmaW5kTWF0Y2gocm91dGVzLCBwYXRoKSB7XG4gICAgICB2YXIgcGF0aG5hbWUgPSBQYXRoVXRpbHMud2l0aG91dFF1ZXJ5KHBhdGgpO1xuICAgICAgdmFyIHF1ZXJ5ID0gUGF0aFV0aWxzLmV4dHJhY3RRdWVyeShwYXRoKTtcbiAgICAgIHZhciBtYXRjaCA9IG51bGw7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSByb3V0ZXMubGVuZ3RoOyBtYXRjaCA9PSBudWxsICYmIGkgPCBsZW47ICsraSkgbWF0Y2ggPSBkZWVwU2VhcmNoKHJvdXRlc1tpXSwgcGF0aG5hbWUsIHF1ZXJ5KTtcblxuICAgICAgcmV0dXJuIG1hdGNoO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNYXRjaDtcbn0pKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gTWF0Y2g7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9Qcm9wVHlwZXMnKTtcblxuLyoqXG4gKiBBIG1peGluIGZvciBjb21wb25lbnRzIHRoYXQgbW9kaWZ5IHRoZSBVUkwuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgIHZhciBNeUxpbmsgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gKiAgICAgbWl4aW5zOiBbIFJvdXRlci5OYXZpZ2F0aW9uIF0sXG4gKiAgICAgaGFuZGxlQ2xpY2soZXZlbnQpIHtcbiAqICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gKiAgICAgICB0aGlzLnRyYW5zaXRpb25UbygnYVJvdXRlJywgeyB0aGU6ICdwYXJhbXMnIH0sIHsgdGhlOiAncXVlcnknIH0pO1xuICogICAgIH0sXG4gKiAgICAgcmVuZGVyKCkge1xuICogICAgICAgcmV0dXJuIChcbiAqICAgICAgICAgPGEgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+Q2xpY2sgbWUhPC9hPlxuICogICAgICAgKTtcbiAqICAgICB9XG4gKiAgIH0pO1xuICovXG52YXIgTmF2aWdhdGlvbiA9IHtcblxuICBjb250ZXh0VHlwZXM6IHtcbiAgICByb3V0ZXI6IFByb3BUeXBlcy5yb3V0ZXIuaXNSZXF1aXJlZFxuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFic29sdXRlIFVSTCBwYXRoIGNyZWF0ZWQgZnJvbSB0aGUgZ2l2ZW4gcm91dGVcbiAgICogbmFtZSwgVVJMIHBhcmFtZXRlcnMsIGFuZCBxdWVyeSB2YWx1ZXMuXG4gICAqL1xuICBtYWtlUGF0aDogZnVuY3Rpb24gbWFrZVBhdGgodG8sIHBhcmFtcywgcXVlcnkpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0LnJvdXRlci5tYWtlUGF0aCh0bywgcGFyYW1zLCBxdWVyeSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgdGhhdCBtYXkgc2FmZWx5IGJlIHVzZWQgYXMgdGhlIGhyZWYgb2YgYVxuICAgKiBsaW5rIHRvIHRoZSByb3V0ZSB3aXRoIHRoZSBnaXZlbiBuYW1lLlxuICAgKi9cbiAgbWFrZUhyZWY6IGZ1bmN0aW9uIG1ha2VIcmVmKHRvLCBwYXJhbXMsIHF1ZXJ5KSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dC5yb3V0ZXIubWFrZUhyZWYodG8sIHBhcmFtcywgcXVlcnkpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBUcmFuc2l0aW9ucyB0byB0aGUgVVJMIHNwZWNpZmllZCBpbiB0aGUgYXJndW1lbnRzIGJ5IHB1c2hpbmdcbiAgICogYSBuZXcgVVJMIG9udG8gdGhlIGhpc3Rvcnkgc3RhY2suXG4gICAqL1xuICB0cmFuc2l0aW9uVG86IGZ1bmN0aW9uIHRyYW5zaXRpb25Ubyh0bywgcGFyYW1zLCBxdWVyeSkge1xuICAgIHRoaXMuY29udGV4dC5yb3V0ZXIudHJhbnNpdGlvblRvKHRvLCBwYXJhbXMsIHF1ZXJ5KTtcbiAgfSxcblxuICAvKipcbiAgICogVHJhbnNpdGlvbnMgdG8gdGhlIFVSTCBzcGVjaWZpZWQgaW4gdGhlIGFyZ3VtZW50cyBieSByZXBsYWNpbmdcbiAgICogdGhlIGN1cnJlbnQgVVJMIGluIHRoZSBoaXN0b3J5IHN0YWNrLlxuICAgKi9cbiAgcmVwbGFjZVdpdGg6IGZ1bmN0aW9uIHJlcGxhY2VXaXRoKHRvLCBwYXJhbXMsIHF1ZXJ5KSB7XG4gICAgdGhpcy5jb250ZXh0LnJvdXRlci5yZXBsYWNlV2l0aCh0bywgcGFyYW1zLCBxdWVyeSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRyYW5zaXRpb25zIHRvIHRoZSBwcmV2aW91cyBVUkwuXG4gICAqL1xuICBnb0JhY2s6IGZ1bmN0aW9uIGdvQmFjaygpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0LnJvdXRlci5nb0JhY2soKTtcbiAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5hdmlnYXRpb247IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgncmVhY3QvbGliL2ludmFyaWFudCcpO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcbnZhciBxcyA9IHJlcXVpcmUoJ3FzJyk7XG5cbnZhciBwYXJhbUNvbXBpbGVNYXRjaGVyID0gLzooW2EtekEtWl8kXVthLXpBLVowLTlfJF0qKXxbKi4oKVxcW1xcXVxcXFwrfHt9XiRdL2c7XG52YXIgcGFyYW1JbmplY3RNYXRjaGVyID0gLzooW2EtekEtWl8kXVthLXpBLVowLTlfJD9dKls/XT8pfFsqXS9nO1xudmFyIHBhcmFtSW5qZWN0VHJhaWxpbmdTbGFzaE1hdGNoZXIgPSAvXFwvXFwvXFw/fFxcL1xcP1xcL3xcXC9cXD8vZztcbnZhciBxdWVyeU1hdGNoZXIgPSAvXFw/KC4qKSQvO1xuXG52YXIgX2NvbXBpbGVkUGF0dGVybnMgPSB7fTtcblxuZnVuY3Rpb24gY29tcGlsZVBhdHRlcm4ocGF0dGVybikge1xuICBpZiAoIShwYXR0ZXJuIGluIF9jb21waWxlZFBhdHRlcm5zKSkge1xuICAgIHZhciBwYXJhbU5hbWVzID0gW107XG4gICAgdmFyIHNvdXJjZSA9IHBhdHRlcm4ucmVwbGFjZShwYXJhbUNvbXBpbGVNYXRjaGVyLCBmdW5jdGlvbiAobWF0Y2gsIHBhcmFtTmFtZSkge1xuICAgICAgaWYgKHBhcmFtTmFtZSkge1xuICAgICAgICBwYXJhbU5hbWVzLnB1c2gocGFyYW1OYW1lKTtcbiAgICAgICAgcmV0dXJuICcoW14vPyNdKyknO1xuICAgICAgfSBlbHNlIGlmIChtYXRjaCA9PT0gJyonKSB7XG4gICAgICAgIHBhcmFtTmFtZXMucHVzaCgnc3BsYXQnKTtcbiAgICAgICAgcmV0dXJuICcoLio/KSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gJ1xcXFwnICsgbWF0Y2g7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBfY29tcGlsZWRQYXR0ZXJuc1twYXR0ZXJuXSA9IHtcbiAgICAgIG1hdGNoZXI6IG5ldyBSZWdFeHAoJ14nICsgc291cmNlICsgJyQnLCAnaScpLFxuICAgICAgcGFyYW1OYW1lczogcGFyYW1OYW1lc1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX2NvbXBpbGVkUGF0dGVybnNbcGF0dGVybl07XG59XG5cbnZhciBQYXRoVXRpbHMgPSB7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gcGF0aCBpcyBhYnNvbHV0ZS5cbiAgICovXG4gIGlzQWJzb2x1dGU6IGZ1bmN0aW9uIGlzQWJzb2x1dGUocGF0aCkge1xuICAgIHJldHVybiBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xuICB9LFxuXG4gIC8qKlxuICAgKiBKb2lucyB0d28gVVJMIHBhdGhzIHRvZ2V0aGVyLlxuICAgKi9cbiAgam9pbjogZnVuY3Rpb24gam9pbihhLCBiKSB7XG4gICAgcmV0dXJuIGEucmVwbGFjZSgvXFwvKiQvLCAnLycpICsgYjtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhcnJheSBvZiB0aGUgbmFtZXMgb2YgYWxsIHBhcmFtZXRlcnMgaW4gdGhlIGdpdmVuIHBhdHRlcm4uXG4gICAqL1xuICBleHRyYWN0UGFyYW1OYW1lczogZnVuY3Rpb24gZXh0cmFjdFBhcmFtTmFtZXMocGF0dGVybikge1xuICAgIHJldHVybiBjb21waWxlUGF0dGVybihwYXR0ZXJuKS5wYXJhbU5hbWVzO1xuICB9LFxuXG4gIC8qKlxuICAgKiBFeHRyYWN0cyB0aGUgcG9ydGlvbnMgb2YgdGhlIGdpdmVuIFVSTCBwYXRoIHRoYXQgbWF0Y2ggdGhlIGdpdmVuIHBhdHRlcm5cbiAgICogYW5kIHJldHVybnMgYW4gb2JqZWN0IG9mIHBhcmFtIG5hbWUgPT4gdmFsdWUgcGFpcnMuIFJldHVybnMgbnVsbCBpZiB0aGVcbiAgICogcGF0dGVybiBkb2VzIG5vdCBtYXRjaCB0aGUgZ2l2ZW4gcGF0aC5cbiAgICovXG4gIGV4dHJhY3RQYXJhbXM6IGZ1bmN0aW9uIGV4dHJhY3RQYXJhbXMocGF0dGVybiwgcGF0aCkge1xuICAgIHZhciBfY29tcGlsZVBhdHRlcm4gPSBjb21waWxlUGF0dGVybihwYXR0ZXJuKTtcblxuICAgIHZhciBtYXRjaGVyID0gX2NvbXBpbGVQYXR0ZXJuLm1hdGNoZXI7XG4gICAgdmFyIHBhcmFtTmFtZXMgPSBfY29tcGlsZVBhdHRlcm4ucGFyYW1OYW1lcztcblxuICAgIHZhciBtYXRjaCA9IHBhdGgubWF0Y2gobWF0Y2hlcik7XG5cbiAgICBpZiAoIW1hdGNoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9dmFyIHBhcmFtcyA9IHt9O1xuXG4gICAgcGFyYW1OYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChwYXJhbU5hbWUsIGluZGV4KSB7XG4gICAgICBwYXJhbXNbcGFyYW1OYW1lXSA9IG1hdGNoW2luZGV4ICsgMV07XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcGFyYW1zO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgdmVyc2lvbiBvZiB0aGUgZ2l2ZW4gcm91dGUgcGF0aCB3aXRoIHBhcmFtcyBpbnRlcnBvbGF0ZWQuIFRocm93c1xuICAgKiBpZiB0aGVyZSBpcyBhIGR5bmFtaWMgc2VnbWVudCBvZiB0aGUgcm91dGUgcGF0aCBmb3Igd2hpY2ggdGhlcmUgaXMgbm8gcGFyYW0uXG4gICAqL1xuICBpbmplY3RQYXJhbXM6IGZ1bmN0aW9uIGluamVjdFBhcmFtcyhwYXR0ZXJuLCBwYXJhbXMpIHtcbiAgICBwYXJhbXMgPSBwYXJhbXMgfHwge307XG5cbiAgICB2YXIgc3BsYXRJbmRleCA9IDA7XG5cbiAgICByZXR1cm4gcGF0dGVybi5yZXBsYWNlKHBhcmFtSW5qZWN0TWF0Y2hlciwgZnVuY3Rpb24gKG1hdGNoLCBwYXJhbU5hbWUpIHtcbiAgICAgIHBhcmFtTmFtZSA9IHBhcmFtTmFtZSB8fCAnc3BsYXQnO1xuXG4gICAgICAvLyBJZiBwYXJhbSBpcyBvcHRpb25hbCBkb24ndCBjaGVjayBmb3IgZXhpc3RlbmNlXG4gICAgICBpZiAocGFyYW1OYW1lLnNsaWNlKC0xKSA9PT0gJz8nKSB7XG4gICAgICAgIHBhcmFtTmFtZSA9IHBhcmFtTmFtZS5zbGljZSgwLCAtMSk7XG5cbiAgICAgICAgaWYgKHBhcmFtc1twYXJhbU5hbWVdID09IG51bGwpIHJldHVybiAnJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGludmFyaWFudChwYXJhbXNbcGFyYW1OYW1lXSAhPSBudWxsLCAnTWlzc2luZyBcIiVzXCIgcGFyYW1ldGVyIGZvciBwYXRoIFwiJXNcIicsIHBhcmFtTmFtZSwgcGF0dGVybik7XG4gICAgICB9XG5cbiAgICAgIHZhciBzZWdtZW50O1xuICAgICAgaWYgKHBhcmFtTmFtZSA9PT0gJ3NwbGF0JyAmJiBBcnJheS5pc0FycmF5KHBhcmFtc1twYXJhbU5hbWVdKSkge1xuICAgICAgICBzZWdtZW50ID0gcGFyYW1zW3BhcmFtTmFtZV1bc3BsYXRJbmRleCsrXTtcblxuICAgICAgICBpbnZhcmlhbnQoc2VnbWVudCAhPSBudWxsLCAnTWlzc2luZyBzcGxhdCAjICVzIGZvciBwYXRoIFwiJXNcIicsIHNwbGF0SW5kZXgsIHBhdHRlcm4pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VnbWVudCA9IHBhcmFtc1twYXJhbU5hbWVdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VnbWVudDtcbiAgICB9KS5yZXBsYWNlKHBhcmFtSW5qZWN0VHJhaWxpbmdTbGFzaE1hdGNoZXIsICcvJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgaXMgdGhlIHJlc3VsdCBvZiBwYXJzaW5nIGFueSBxdWVyeSBzdHJpbmcgY29udGFpbmVkXG4gICAqIGluIHRoZSBnaXZlbiBwYXRoLCBudWxsIGlmIHRoZSBwYXRoIGNvbnRhaW5zIG5vIHF1ZXJ5IHN0cmluZy5cbiAgICovXG4gIGV4dHJhY3RRdWVyeTogZnVuY3Rpb24gZXh0cmFjdFF1ZXJ5KHBhdGgpIHtcbiAgICB2YXIgbWF0Y2ggPSBwYXRoLm1hdGNoKHF1ZXJ5TWF0Y2hlcik7XG4gICAgcmV0dXJuIG1hdGNoICYmIHFzLnBhcnNlKG1hdGNoWzFdKTtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyBhIHZlcnNpb24gb2YgdGhlIGdpdmVuIHBhdGggd2l0aG91dCB0aGUgcXVlcnkgc3RyaW5nLlxuICAgKi9cbiAgd2l0aG91dFF1ZXJ5OiBmdW5jdGlvbiB3aXRob3V0UXVlcnkocGF0aCkge1xuICAgIHJldHVybiBwYXRoLnJlcGxhY2UocXVlcnlNYXRjaGVyLCAnJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSB2ZXJzaW9uIG9mIHRoZSBnaXZlbiBwYXRoIHdpdGggdGhlIHBhcmFtZXRlcnMgaW4gdGhlIGdpdmVuXG4gICAqIHF1ZXJ5IG1lcmdlZCBpbnRvIHRoZSBxdWVyeSBzdHJpbmcuXG4gICAqL1xuICB3aXRoUXVlcnk6IGZ1bmN0aW9uIHdpdGhRdWVyeShwYXRoLCBxdWVyeSkge1xuICAgIHZhciBleGlzdGluZ1F1ZXJ5ID0gUGF0aFV0aWxzLmV4dHJhY3RRdWVyeShwYXRoKTtcblxuICAgIGlmIChleGlzdGluZ1F1ZXJ5KSBxdWVyeSA9IHF1ZXJ5ID8gYXNzaWduKGV4aXN0aW5nUXVlcnksIHF1ZXJ5KSA6IGV4aXN0aW5nUXVlcnk7XG5cbiAgICB2YXIgcXVlcnlTdHJpbmcgPSBxcy5zdHJpbmdpZnkocXVlcnksIHsgYXJyYXlGb3JtYXQ6ICdicmFja2V0cycgfSk7XG5cbiAgICBpZiAocXVlcnlTdHJpbmcpIHtcbiAgICAgIHJldHVybiBQYXRoVXRpbHMud2l0aG91dFF1ZXJ5KHBhdGgpICsgJz8nICsgcXVlcnlTdHJpbmc7XG4gICAgfXJldHVybiBQYXRoVXRpbHMud2l0aG91dFF1ZXJ5KHBhdGgpO1xuICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUGF0aFV0aWxzOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ3JlYWN0L2xpYi9PYmplY3QuYXNzaWduJyk7XG52YXIgUmVhY3RQcm9wVHlwZXMgPSByZXF1aXJlKCdyZWFjdCcpLlByb3BUeXBlcztcbnZhciBSb3V0ZSA9IHJlcXVpcmUoJy4vUm91dGUnKTtcblxudmFyIFByb3BUeXBlcyA9IGFzc2lnbih7fSwgUmVhY3RQcm9wVHlwZXMsIHtcblxuICAvKipcbiAgICogSW5kaWNhdGVzIHRoYXQgYSBwcm9wIHNob3VsZCBiZSBmYWxzeS5cbiAgICovXG4gIGZhbHN5OiBmdW5jdGlvbiBmYWxzeShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICBpZiAocHJvcHNbcHJvcE5hbWVdKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKCc8JyArIGNvbXBvbmVudE5hbWUgKyAnPiBzaG91bGQgbm90IGhhdmUgYSBcIicgKyBwcm9wTmFtZSArICdcIiBwcm9wJyk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgdGhhdCBhIHByb3Agc2hvdWxkIGJlIGEgUm91dGUgb2JqZWN0LlxuICAgKi9cbiAgcm91dGU6IFJlYWN0UHJvcFR5cGVzLmluc3RhbmNlT2YoUm91dGUpLFxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgdGhhdCBhIHByb3Agc2hvdWxkIGJlIGEgUm91dGVyIG9iamVjdC5cbiAgICovXG4gIC8vcm91dGVyOiBSZWFjdFByb3BUeXBlcy5pbnN0YW5jZU9mKFJvdXRlcikgLy8gVE9ET1xuICByb3V0ZXI6IFJlYWN0UHJvcFR5cGVzLmZ1bmNcblxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvcFR5cGVzOyIsIi8qKlxuICogRW5jYXBzdWxhdGVzIGEgcmVkaXJlY3QgdG8gdGhlIGdpdmVuIHJvdXRlLlxuICovXG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gUmVkaXJlY3QodG8sIHBhcmFtcywgcXVlcnkpIHtcbiAgdGhpcy50byA9IHRvO1xuICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcbiAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlZGlyZWN0OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9jbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ3JlYWN0L2xpYi9PYmplY3QuYXNzaWduJyk7XG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgncmVhY3QvbGliL2ludmFyaWFudCcpO1xudmFyIHdhcm5pbmcgPSByZXF1aXJlKCdyZWFjdC9saWIvd2FybmluZycpO1xudmFyIFBhdGhVdGlscyA9IHJlcXVpcmUoJy4vUGF0aFV0aWxzJyk7XG5cbnZhciBfY3VycmVudFJvdXRlO1xuXG52YXIgUm91dGUgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBSb3V0ZShuYW1lLCBwYXRoLCBpZ25vcmVTY3JvbGxCZWhhdmlvciwgaXNEZWZhdWx0LCBpc05vdEZvdW5kLCBvbkVudGVyLCBvbkxlYXZlLCBoYW5kbGVyKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJvdXRlKTtcblxuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICB0aGlzLnBhcmFtTmFtZXMgPSBQYXRoVXRpbHMuZXh0cmFjdFBhcmFtTmFtZXModGhpcy5wYXRoKTtcbiAgICB0aGlzLmlnbm9yZVNjcm9sbEJlaGF2aW9yID0gISFpZ25vcmVTY3JvbGxCZWhhdmlvcjtcbiAgICB0aGlzLmlzRGVmYXVsdCA9ICEhaXNEZWZhdWx0O1xuICAgIHRoaXMuaXNOb3RGb3VuZCA9ICEhaXNOb3RGb3VuZDtcbiAgICB0aGlzLm9uRW50ZXIgPSBvbkVudGVyO1xuICAgIHRoaXMub25MZWF2ZSA9IG9uTGVhdmU7XG4gICAgdGhpcy5oYW5kbGVyID0gaGFuZGxlcjtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhSb3V0ZSwgW3tcbiAgICBrZXk6ICdhcHBlbmRDaGlsZCcsXG5cbiAgICAvKipcbiAgICAgKiBBcHBlbmRzIHRoZSBnaXZlbiByb3V0ZSB0byB0aGlzIHJvdXRlJ3MgY2hpbGQgcm91dGVzLlxuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBhcHBlbmRDaGlsZChyb3V0ZSkge1xuICAgICAgaW52YXJpYW50KHJvdXRlIGluc3RhbmNlb2YgUm91dGUsICdyb3V0ZS5hcHBlbmRDaGlsZCBtdXN0IHVzZSBhIHZhbGlkIFJvdXRlJyk7XG5cbiAgICAgIGlmICghdGhpcy5jaGlsZFJvdXRlcykgdGhpcy5jaGlsZFJvdXRlcyA9IFtdO1xuXG4gICAgICB0aGlzLmNoaWxkUm91dGVzLnB1c2gocm91dGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3RvU3RyaW5nJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICB2YXIgc3RyaW5nID0gJzxSb3V0ZSc7XG5cbiAgICAgIGlmICh0aGlzLm5hbWUpIHN0cmluZyArPSAnIG5hbWU9XCInICsgdGhpcy5uYW1lICsgJ1wiJztcblxuICAgICAgc3RyaW5nICs9ICcgcGF0aD1cIicgKyB0aGlzLnBhdGggKyAnXCI+JztcblxuICAgICAgcmV0dXJuIHN0cmluZztcbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogJ2NyZWF0ZVJvdXRlJyxcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW5kIHJldHVybnMgYSBuZXcgcm91dGUuIE9wdGlvbnMgbWF5IGJlIGEgVVJMIHBhdGhuYW1lIHN0cmluZ1xuICAgICAqIHdpdGggcGxhY2Vob2xkZXJzIGZvciBuYW1lZCBwYXJhbXMgb3IgYW4gb2JqZWN0IHdpdGggYW55IG9mIHRoZSBmb2xsb3dpbmdcbiAgICAgKiBwcm9wZXJ0aWVzOlxuICAgICAqXG4gICAgICogLSBuYW1lICAgICAgICAgICAgICAgICAgICAgVGhlIG5hbWUgb2YgdGhlIHJvdXRlLiBUaGlzIGlzIHVzZWQgdG8gbG9va3VwIGFcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSByZWxhdGl2ZSB0byBpdHMgcGFyZW50IHJvdXRlIGFuZCBzaG91bGQgYmVcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmlxdWUgYW1vbmcgYWxsIGNoaWxkIHJvdXRlcyBvZiB0aGUgc2FtZSBwYXJlbnRcbiAgICAgKiAtIHBhdGggICAgICAgICAgICAgICAgICAgICBBIFVSTCBwYXRobmFtZSBzdHJpbmcgd2l0aCBvcHRpb25hbCBwbGFjZWhvbGRlcnNcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0IHNwZWNpZnkgdGhlIG5hbWVzIG9mIHBhcmFtcyB0byBleHRyYWN0IGZyb21cbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgVVJMIHdoZW4gdGhlIHBhdGggbWF0Y2hlcy4gRGVmYXVsdHMgdG8gYC8ke25hbWV9YFxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZW4gdGhlcmUgaXMgYSBuYW1lIGdpdmVuLCBvciB0aGUgcGF0aCBvZiB0aGUgcGFyZW50XG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUsIG9yIC9cbiAgICAgKiAtIGlnbm9yZVNjcm9sbEJlaGF2aW9yICAgICBUcnVlIHRvIG1ha2UgdGhpcyByb3V0ZSAoYW5kIGFsbCBkZXNjZW5kYW50cykgaWdub3JlXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIHNjcm9sbCBiZWhhdmlvciBvZiB0aGUgcm91dGVyXG4gICAgICogLSBpc0RlZmF1bHQgICAgICAgICAgICAgICAgVHJ1ZSB0byBtYWtlIHRoaXMgcm91dGUgdGhlIGRlZmF1bHQgcm91dGUgYW1vbmcgYWxsXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRzIHNpYmxpbmdzXG4gICAgICogLSBpc05vdEZvdW5kICAgICAgICAgICAgICAgVHJ1ZSB0byBtYWtlIHRoaXMgcm91dGUgdGhlIFwibm90IGZvdW5kXCIgcm91dGUgYW1vbmdcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGwgaXRzIHNpYmxpbmdzXG4gICAgICogLSBvbkVudGVyICAgICAgICAgICAgICAgICAgQSB0cmFuc2l0aW9uIGhvb2sgdGhhdCB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZVxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlciBpcyBnb2luZyB0byBlbnRlciB0aGlzIHJvdXRlXG4gICAgICogLSBvbkxlYXZlICAgICAgICAgICAgICAgICAgQSB0cmFuc2l0aW9uIGhvb2sgdGhhdCB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZVxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlciBpcyBnb2luZyB0byBsZWF2ZSB0aGlzIHJvdXRlXG4gICAgICogLSBoYW5kbGVyICAgICAgICAgICAgICAgICAgQSBSZWFjdCBjb21wb25lbnQgdGhhdCB3aWxsIGJlIHJlbmRlcmVkIHdoZW5cbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzIHJvdXRlIGlzIGFjdGl2ZVxuICAgICAqIC0gcGFyZW50Um91dGUgICAgICAgICAgICAgIFRoZSBwYXJlbnQgcm91dGUgdG8gdXNlIGZvciB0aGlzIHJvdXRlLiBUaGlzIG9wdGlvblxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzIGF1dG9tYXRpY2FsbHkgc3VwcGxpZWQgd2hlbiBjcmVhdGluZyByb3V0ZXMgaW5zaWRlXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIGNhbGxiYWNrIHRvIGFub3RoZXIgaW52b2NhdGlvbiBvZiBjcmVhdGVSb3V0ZS4gWW91XG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgb25seSBldmVyIG5lZWQgdG8gdXNlIHRoaXMgd2hlbiBkZWNsYXJpbmcgcm91dGVzXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXBlbmRlbnRseSBvZiBvbmUgYW5vdGhlciB0byBtYW51YWxseSBwaWVjZSB0b2dldGhlclxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSByb3V0ZSBoaWVyYXJjaHlcbiAgICAgKlxuICAgICAqIFRoZSBjYWxsYmFjayBtYXkgYmUgdXNlZCB0byBzdHJ1Y3R1cmUgeW91ciByb3V0ZSBoaWVyYXJjaHkuIEFueSBjYWxsIHRvXG4gICAgICogY3JlYXRlUm91dGUsIGNyZWF0ZURlZmF1bHRSb3V0ZSwgY3JlYXRlTm90Rm91bmRSb3V0ZSwgb3IgY3JlYXRlUmVkaXJlY3RcbiAgICAgKiBpbnNpZGUgdGhlIGNhbGxiYWNrIGF1dG9tYXRpY2FsbHkgdXNlcyB0aGlzIHJvdXRlIGFzIGl0cyBwYXJlbnQuXG4gICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZVJvdXRlKG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJykgb3B0aW9ucyA9IHsgcGF0aDogb3B0aW9ucyB9O1xuXG4gICAgICB2YXIgcGFyZW50Um91dGUgPSBfY3VycmVudFJvdXRlO1xuXG4gICAgICBpZiAocGFyZW50Um91dGUpIHtcbiAgICAgICAgd2FybmluZyhvcHRpb25zLnBhcmVudFJvdXRlID09IG51bGwgfHwgb3B0aW9ucy5wYXJlbnRSb3V0ZSA9PT0gcGFyZW50Um91dGUsICdZb3Ugc2hvdWxkIG5vdCB1c2UgcGFyZW50Um91dGUgd2l0aCBjcmVhdGVSb3V0ZSBpbnNpZGUgYW5vdGhlciByb3V0ZVxcJ3MgY2hpbGQgY2FsbGJhY2s7IGl0IGlzIGlnbm9yZWQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmVudFJvdXRlID0gb3B0aW9ucy5wYXJlbnRSb3V0ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIG5hbWUgPSBvcHRpb25zLm5hbWU7XG4gICAgICB2YXIgcGF0aCA9IG9wdGlvbnMucGF0aCB8fCBuYW1lO1xuXG4gICAgICBpZiAocGF0aCAmJiAhKG9wdGlvbnMuaXNEZWZhdWx0IHx8IG9wdGlvbnMuaXNOb3RGb3VuZCkpIHtcbiAgICAgICAgaWYgKFBhdGhVdGlscy5pc0Fic29sdXRlKHBhdGgpKSB7XG4gICAgICAgICAgaWYgKHBhcmVudFJvdXRlKSB7XG4gICAgICAgICAgICBpbnZhcmlhbnQocGF0aCA9PT0gcGFyZW50Um91dGUucGF0aCB8fCBwYXJlbnRSb3V0ZS5wYXJhbU5hbWVzLmxlbmd0aCA9PT0gMCwgJ1lvdSBjYW5ub3QgbmVzdCBwYXRoIFwiJXNcIiBpbnNpZGUgXCIlc1wiOyB0aGUgcGFyZW50IHJlcXVpcmVzIFVSTCBwYXJhbWV0ZXJzJywgcGF0aCwgcGFyZW50Um91dGUucGF0aCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHBhcmVudFJvdXRlKSB7XG4gICAgICAgICAgLy8gUmVsYXRpdmUgcGF0aHMgZXh0ZW5kIHRoZWlyIHBhcmVudC5cbiAgICAgICAgICBwYXRoID0gUGF0aFV0aWxzLmpvaW4ocGFyZW50Um91dGUucGF0aCwgcGF0aCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGF0aCA9ICcvJyArIHBhdGg7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhdGggPSBwYXJlbnRSb3V0ZSA/IHBhcmVudFJvdXRlLnBhdGggOiAnLyc7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLmlzTm90Rm91bmQgJiYgIS9cXCokLy50ZXN0KHBhdGgpKSBwYXRoICs9ICcqJzsgLy8gQXV0by1hcHBlbmQgKiB0byB0aGUgcGF0aCBvZiBub3QgZm91bmQgcm91dGVzLlxuXG4gICAgICB2YXIgcm91dGUgPSBuZXcgUm91dGUobmFtZSwgcGF0aCwgb3B0aW9ucy5pZ25vcmVTY3JvbGxCZWhhdmlvciwgb3B0aW9ucy5pc0RlZmF1bHQsIG9wdGlvbnMuaXNOb3RGb3VuZCwgb3B0aW9ucy5vbkVudGVyLCBvcHRpb25zLm9uTGVhdmUsIG9wdGlvbnMuaGFuZGxlcik7XG5cbiAgICAgIGlmIChwYXJlbnRSb3V0ZSkge1xuICAgICAgICBpZiAocm91dGUuaXNEZWZhdWx0KSB7XG4gICAgICAgICAgaW52YXJpYW50KHBhcmVudFJvdXRlLmRlZmF1bHRSb3V0ZSA9PSBudWxsLCAnJXMgbWF5IG5vdCBoYXZlIG1vcmUgdGhhbiBvbmUgZGVmYXVsdCByb3V0ZScsIHBhcmVudFJvdXRlKTtcblxuICAgICAgICAgIHBhcmVudFJvdXRlLmRlZmF1bHRSb3V0ZSA9IHJvdXRlO1xuICAgICAgICB9IGVsc2UgaWYgKHJvdXRlLmlzTm90Rm91bmQpIHtcbiAgICAgICAgICBpbnZhcmlhbnQocGFyZW50Um91dGUubm90Rm91bmRSb3V0ZSA9PSBudWxsLCAnJXMgbWF5IG5vdCBoYXZlIG1vcmUgdGhhbiBvbmUgbm90IGZvdW5kIHJvdXRlJywgcGFyZW50Um91dGUpO1xuXG4gICAgICAgICAgcGFyZW50Um91dGUubm90Rm91bmRSb3V0ZSA9IHJvdXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFyZW50Um91dGUuYXBwZW5kQ2hpbGQocm91dGUpO1xuICAgICAgfVxuXG4gICAgICAvLyBBbnkgcm91dGVzIGNyZWF0ZWQgaW4gdGhlIGNhbGxiYWNrXG4gICAgICAvLyB1c2UgdGhpcyByb3V0ZSBhcyB0aGVpciBwYXJlbnQuXG4gICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhciBjdXJyZW50Um91dGUgPSBfY3VycmVudFJvdXRlO1xuICAgICAgICBfY3VycmVudFJvdXRlID0gcm91dGU7XG4gICAgICAgIGNhbGxiYWNrLmNhbGwocm91dGUsIHJvdXRlKTtcbiAgICAgICAgX2N1cnJlbnRSb3V0ZSA9IGN1cnJlbnRSb3V0ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NyZWF0ZURlZmF1bHRSb3V0ZScsXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuZCByZXR1cm5zIGEgcm91dGUgdGhhdCBpcyByZW5kZXJlZCB3aGVuIGl0cyBwYXJlbnQgbWF0Y2hlc1xuICAgICAqIHRoZSBjdXJyZW50IFVSTC5cbiAgICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlRGVmYXVsdFJvdXRlKG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBSb3V0ZS5jcmVhdGVSb3V0ZShhc3NpZ24oe30sIG9wdGlvbnMsIHsgaXNEZWZhdWx0OiB0cnVlIH0pKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjcmVhdGVOb3RGb3VuZFJvdXRlJyxcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW5kIHJldHVybnMgYSByb3V0ZSB0aGF0IGlzIHJlbmRlcmVkIHdoZW4gaXRzIHBhcmVudCBtYXRjaGVzXG4gICAgICogdGhlIGN1cnJlbnQgVVJMIGJ1dCBub25lIG9mIGl0cyBzaWJsaW5ncyBkby5cbiAgICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlTm90Rm91bmRSb3V0ZShvcHRpb25zKSB7XG4gICAgICByZXR1cm4gUm91dGUuY3JlYXRlUm91dGUoYXNzaWduKHt9LCBvcHRpb25zLCB7IGlzTm90Rm91bmQ6IHRydWUgfSkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NyZWF0ZVJlZGlyZWN0JyxcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW5kIHJldHVybnMgYSByb3V0ZSB0aGF0IGF1dG9tYXRpY2FsbHkgcmVkaXJlY3RzIHRoZSB0cmFuc2l0aW9uXG4gICAgICogdG8gYW5vdGhlciByb3V0ZS4gSW4gYWRkaXRpb24gdG8gdGhlIG5vcm1hbCBvcHRpb25zIHRvIGNyZWF0ZVJvdXRlLCB0aGlzXG4gICAgICogZnVuY3Rpb24gYWNjZXB0cyB0aGUgZm9sbG93aW5nIG9wdGlvbnM6XG4gICAgICpcbiAgICAgKiAtIGZyb20gICAgICAgICBBbiBhbGlhcyBmb3IgdGhlIGBwYXRoYCBvcHRpb24uIERlZmF1bHRzIHRvICpcbiAgICAgKiAtIHRvICAgICAgICAgICBUaGUgcGF0aC9yb3V0ZS9yb3V0ZSBuYW1lIHRvIHJlZGlyZWN0IHRvXG4gICAgICogLSBwYXJhbXMgICAgICAgVGhlIHBhcmFtcyB0byB1c2UgaW4gdGhlIHJlZGlyZWN0IFVSTC4gRGVmYXVsdHNcbiAgICAgKiAgICAgICAgICAgICAgICB0byB1c2luZyB0aGUgY3VycmVudCBwYXJhbXNcbiAgICAgKiAtIHF1ZXJ5ICAgICAgICBUaGUgcXVlcnkgdG8gdXNlIGluIHRoZSByZWRpcmVjdCBVUkwuIERlZmF1bHRzXG4gICAgICogICAgICAgICAgICAgICAgdG8gdXNpbmcgdGhlIGN1cnJlbnQgcXVlcnlcbiAgICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlUmVkaXJlY3Qob3B0aW9ucykge1xuICAgICAgcmV0dXJuIFJvdXRlLmNyZWF0ZVJvdXRlKGFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICBwYXRoOiBvcHRpb25zLnBhdGggfHwgb3B0aW9ucy5mcm9tIHx8ICcqJyxcbiAgICAgICAgb25FbnRlcjogZnVuY3Rpb24gb25FbnRlcih0cmFuc2l0aW9uLCBwYXJhbXMsIHF1ZXJ5KSB7XG4gICAgICAgICAgdHJhbnNpdGlvbi5yZWRpcmVjdChvcHRpb25zLnRvLCBvcHRpb25zLnBhcmFtcyB8fCBwYXJhbXMsIG9wdGlvbnMucXVlcnkgfHwgcXVlcnkpO1xuICAgICAgICB9XG4gICAgICB9KSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFJvdXRlO1xufSkoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSb3V0ZTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdyZWFjdC9saWIvaW52YXJpYW50Jyk7XG52YXIgY2FuVXNlRE9NID0gcmVxdWlyZSgncmVhY3QvbGliL0V4ZWN1dGlvbkVudmlyb25tZW50JykuY2FuVXNlRE9NO1xudmFyIGdldFdpbmRvd1Njcm9sbFBvc2l0aW9uID0gcmVxdWlyZSgnLi9nZXRXaW5kb3dTY3JvbGxQb3NpdGlvbicpO1xuXG5mdW5jdGlvbiBzaG91bGRVcGRhdGVTY3JvbGwoc3RhdGUsIHByZXZTdGF0ZSkge1xuICBpZiAoIXByZXZTdGF0ZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIERvbid0IHVwZGF0ZSBzY3JvbGwgcG9zaXRpb24gd2hlbiBvbmx5IHRoZSBxdWVyeSBoYXMgY2hhbmdlZC5cbiAgaWYgKHN0YXRlLnBhdGhuYW1lID09PSBwcmV2U3RhdGUucGF0aG5hbWUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH12YXIgcm91dGVzID0gc3RhdGUucm91dGVzO1xuICB2YXIgcHJldlJvdXRlcyA9IHByZXZTdGF0ZS5yb3V0ZXM7XG5cbiAgdmFyIHNoYXJlZEFuY2VzdG9yUm91dGVzID0gcm91dGVzLmZpbHRlcihmdW5jdGlvbiAocm91dGUpIHtcbiAgICByZXR1cm4gcHJldlJvdXRlcy5pbmRleE9mKHJvdXRlKSAhPT0gLTE7XG4gIH0pO1xuXG4gIHJldHVybiAhc2hhcmVkQW5jZXN0b3JSb3V0ZXMuc29tZShmdW5jdGlvbiAocm91dGUpIHtcbiAgICByZXR1cm4gcm91dGUuaWdub3JlU2Nyb2xsQmVoYXZpb3I7XG4gIH0pO1xufVxuXG4vKipcbiAqIFByb3ZpZGVzIHRoZSByb3V0ZXIgd2l0aCB0aGUgYWJpbGl0eSB0byBtYW5hZ2Ugd2luZG93IHNjcm9sbCBwb3NpdGlvblxuICogYWNjb3JkaW5nIHRvIGl0cyBzY3JvbGwgYmVoYXZpb3IuXG4gKi9cbnZhciBTY3JvbGxIaXN0b3J5ID0ge1xuXG4gIHN0YXRpY3M6IHtcblxuICAgIC8qKlxuICAgICAqIFJlY29yZHMgY3VyZW50IHNjcm9sbCBwb3NpdGlvbiBhcyB0aGUgbGFzdCBrbm93biBwb3NpdGlvbiBmb3IgdGhlIGdpdmVuIFVSTCBwYXRoLlxuICAgICAqL1xuICAgIHJlY29yZFNjcm9sbFBvc2l0aW9uOiBmdW5jdGlvbiByZWNvcmRTY3JvbGxQb3NpdGlvbihwYXRoKSB7XG4gICAgICBpZiAoIXRoaXMuc2Nyb2xsSGlzdG9yeSkgdGhpcy5zY3JvbGxIaXN0b3J5ID0ge307XG5cbiAgICAgIHRoaXMuc2Nyb2xsSGlzdG9yeVtwYXRoXSA9IGdldFdpbmRvd1Njcm9sbFBvc2l0aW9uKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGxhc3Qga25vd24gc2Nyb2xsIHBvc2l0aW9uIGZvciB0aGUgZ2l2ZW4gVVJMIHBhdGguXG4gICAgICovXG4gICAgZ2V0U2Nyb2xsUG9zaXRpb246IGZ1bmN0aW9uIGdldFNjcm9sbFBvc2l0aW9uKHBhdGgpIHtcbiAgICAgIGlmICghdGhpcy5zY3JvbGxIaXN0b3J5KSB0aGlzLnNjcm9sbEhpc3RvcnkgPSB7fTtcblxuICAgICAgcmV0dXJuIHRoaXMuc2Nyb2xsSGlzdG9yeVtwYXRoXSB8fCBudWxsO1xuICAgIH1cblxuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxNb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIGludmFyaWFudCh0aGlzLmNvbnN0cnVjdG9yLmdldFNjcm9sbEJlaGF2aW9yKCkgPT0gbnVsbCB8fCBjYW5Vc2VET00sICdDYW5ub3QgdXNlIHNjcm9sbCBiZWhhdmlvciB3aXRob3V0IGEgRE9NJyk7XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuX3VwZGF0ZVNjcm9sbCgpO1xuICB9LFxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgdGhpcy5fdXBkYXRlU2Nyb2xsKHByZXZTdGF0ZSk7XG4gIH0sXG5cbiAgX3VwZGF0ZVNjcm9sbDogZnVuY3Rpb24gX3VwZGF0ZVNjcm9sbChwcmV2U3RhdGUpIHtcbiAgICBpZiAoIXNob3VsZFVwZGF0ZVNjcm9sbCh0aGlzLnN0YXRlLCBwcmV2U3RhdGUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfXZhciBzY3JvbGxCZWhhdmlvciA9IHRoaXMuY29uc3RydWN0b3IuZ2V0U2Nyb2xsQmVoYXZpb3IoKTtcblxuICAgIGlmIChzY3JvbGxCZWhhdmlvcikgc2Nyb2xsQmVoYXZpb3IudXBkYXRlU2Nyb2xsUG9zaXRpb24odGhpcy5jb25zdHJ1Y3Rvci5nZXRTY3JvbGxQb3NpdGlvbih0aGlzLnN0YXRlLnBhdGgpLCB0aGlzLnN0YXRlLmFjdGlvbik7XG4gIH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTY3JvbGxIaXN0b3J5OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIFByb3BUeXBlcyA9IHJlcXVpcmUoJy4vUHJvcFR5cGVzJyk7XG5cbi8qKlxuICogQSBtaXhpbiBmb3IgY29tcG9uZW50cyB0aGF0IG5lZWQgdG8ga25vdyB0aGUgcGF0aCwgcm91dGVzLCBVUkxcbiAqIHBhcmFtcyBhbmQgcXVlcnkgdGhhdCBhcmUgY3VycmVudGx5IGFjdGl2ZS5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqICAgdmFyIEFib3V0TGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAqICAgICBtaXhpbnM6IFsgUm91dGVyLlN0YXRlIF0sXG4gKiAgICAgcmVuZGVyKCkge1xuICogICAgICAgdmFyIGNsYXNzTmFtZSA9IHRoaXMucHJvcHMuY2xhc3NOYW1lO1xuICpcbiAqICAgICAgIGlmICh0aGlzLmlzQWN0aXZlKCdhYm91dCcpKVxuICogICAgICAgICBjbGFzc05hbWUgKz0gJyBpcy1hY3RpdmUnO1xuICpcbiAqICAgICAgIHJldHVybiBSZWFjdC5ET00uYSh7IGNsYXNzTmFtZTogY2xhc3NOYW1lIH0sIHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICogICAgIH1cbiAqICAgfSk7XG4gKi9cbnZhciBTdGF0ZSA9IHtcblxuICBjb250ZXh0VHlwZXM6IHtcbiAgICByb3V0ZXI6IFByb3BUeXBlcy5yb3V0ZXIuaXNSZXF1aXJlZFxuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IFVSTCBwYXRoLlxuICAgKi9cbiAgZ2V0UGF0aDogZnVuY3Rpb24gZ2V0UGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0LnJvdXRlci5nZXRDdXJyZW50UGF0aCgpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IFVSTCBwYXRoIHdpdGhvdXQgdGhlIHF1ZXJ5IHN0cmluZy5cbiAgICovXG4gIGdldFBhdGhuYW1lOiBmdW5jdGlvbiBnZXRQYXRobmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0LnJvdXRlci5nZXRDdXJyZW50UGF0aG5hbWUoKTtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyBhbiBvYmplY3Qgb2YgdGhlIFVSTCBwYXJhbXMgdGhhdCBhcmUgY3VycmVudGx5IGFjdGl2ZS5cbiAgICovXG4gIGdldFBhcmFtczogZnVuY3Rpb24gZ2V0UGFyYW1zKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQucm91dGVyLmdldEN1cnJlbnRQYXJhbXMoKTtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyBhbiBvYmplY3Qgb2YgdGhlIHF1ZXJ5IHBhcmFtcyB0aGF0IGFyZSBjdXJyZW50bHkgYWN0aXZlLlxuICAgKi9cbiAgZ2V0UXVlcnk6IGZ1bmN0aW9uIGdldFF1ZXJ5KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQucm91dGVyLmdldEN1cnJlbnRRdWVyeSgpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIHRoZSByb3V0ZXMgdGhhdCBhcmUgY3VycmVudGx5IGFjdGl2ZS5cbiAgICovXG4gIGdldFJvdXRlczogZnVuY3Rpb24gZ2V0Um91dGVzKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQucm91dGVyLmdldEN1cnJlbnRSb3V0ZXMoKTtcbiAgfSxcblxuICAvKipcbiAgICogQSBoZWxwZXIgbWV0aG9kIHRvIGRldGVybWluZSBpZiBhIGdpdmVuIHJvdXRlLCBwYXJhbXMsIGFuZCBxdWVyeVxuICAgKiBhcmUgYWN0aXZlLlxuICAgKi9cbiAgaXNBY3RpdmU6IGZ1bmN0aW9uIGlzQWN0aXZlKHRvLCBwYXJhbXMsIHF1ZXJ5KSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dC5yb3V0ZXIuaXNBY3RpdmUodG8sIHBhcmFtcywgcXVlcnkpO1xuICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU3RhdGU7IiwiLyoganNoaW50IC1XMDU4ICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIENhbmNlbGxhdGlvbiA9IHJlcXVpcmUoJy4vQ2FuY2VsbGF0aW9uJyk7XG52YXIgUmVkaXJlY3QgPSByZXF1aXJlKCcuL1JlZGlyZWN0Jyk7XG5cbi8qKlxuICogRW5jYXBzdWxhdGVzIGEgdHJhbnNpdGlvbiB0byBhIGdpdmVuIHBhdGguXG4gKlxuICogVGhlIHdpbGxUcmFuc2l0aW9uVG8gYW5kIHdpbGxUcmFuc2l0aW9uRnJvbSBoYW5kbGVycyByZWNlaXZlXG4gKiBhbiBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGFzIHRoZWlyIGZpcnN0IGFyZ3VtZW50LlxuICovXG5mdW5jdGlvbiBUcmFuc2l0aW9uKHBhdGgsIHJldHJ5KSB7XG4gIHRoaXMucGF0aCA9IHBhdGg7XG4gIHRoaXMuYWJvcnRSZWFzb24gPSBudWxsO1xuICAvLyBUT0RPOiBDaGFuZ2UgdGhpcyB0byByb3V0ZXIucmV0cnlUcmFuc2l0aW9uKHRyYW5zaXRpb24pXG4gIHRoaXMucmV0cnkgPSByZXRyeS5iaW5kKHRoaXMpO1xufVxuXG5UcmFuc2l0aW9uLnByb3RvdHlwZS5hYm9ydCA9IGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgaWYgKHRoaXMuYWJvcnRSZWFzb24gPT0gbnVsbCkgdGhpcy5hYm9ydFJlYXNvbiA9IHJlYXNvbiB8fCAnQUJPUlQnO1xufTtcblxuVHJhbnNpdGlvbi5wcm90b3R5cGUucmVkaXJlY3QgPSBmdW5jdGlvbiAodG8sIHBhcmFtcywgcXVlcnkpIHtcbiAgdGhpcy5hYm9ydChuZXcgUmVkaXJlY3QodG8sIHBhcmFtcywgcXVlcnkpKTtcbn07XG5cblRyYW5zaXRpb24ucHJvdG90eXBlLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5hYm9ydChuZXcgQ2FuY2VsbGF0aW9uKCkpO1xufTtcblxuVHJhbnNpdGlvbi5mcm9tID0gZnVuY3Rpb24gKHRyYW5zaXRpb24sIHJvdXRlcywgY29tcG9uZW50cywgY2FsbGJhY2spIHtcbiAgcm91dGVzLnJlZHVjZShmdW5jdGlvbiAoY2FsbGJhY2ssIHJvdXRlLCBpbmRleCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGlmIChlcnJvciB8fCB0cmFuc2l0aW9uLmFib3J0UmVhc29uKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycm9yKTtcbiAgICAgIH0gZWxzZSBpZiAocm91dGUub25MZWF2ZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJvdXRlLm9uTGVhdmUodHJhbnNpdGlvbiwgY29tcG9uZW50c1tpbmRleF0sIGNhbGxiYWNrKTtcblxuICAgICAgICAgIC8vIElmIHRoZXJlIGlzIG5vIGNhbGxiYWNrIGluIHRoZSBhcmd1bWVudCBsaXN0LCBjYWxsIGl0IGF1dG9tYXRpY2FsbHkuXG4gICAgICAgICAgaWYgKHJvdXRlLm9uTGVhdmUubGVuZ3RoIDwgMykgY2FsbGJhY2soKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNhbGxiYWNrKGUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH07XG4gIH0sIGNhbGxiYWNrKSgpO1xufTtcblxuVHJhbnNpdGlvbi50byA9IGZ1bmN0aW9uICh0cmFuc2l0aW9uLCByb3V0ZXMsIHBhcmFtcywgcXVlcnksIGNhbGxiYWNrKSB7XG4gIHJvdXRlcy5yZWR1Y2VSaWdodChmdW5jdGlvbiAoY2FsbGJhY2ssIHJvdXRlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgaWYgKGVycm9yIHx8IHRyYW5zaXRpb24uYWJvcnRSZWFzb24pIHtcbiAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xuICAgICAgfSBlbHNlIGlmIChyb3V0ZS5vbkVudGVyKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcm91dGUub25FbnRlcih0cmFuc2l0aW9uLCBwYXJhbXMsIHF1ZXJ5LCBjYWxsYmFjayk7XG5cbiAgICAgICAgICAvLyBJZiB0aGVyZSBpcyBubyBjYWxsYmFjayBpbiB0aGUgYXJndW1lbnQgbGlzdCwgY2FsbCBpdCBhdXRvbWF0aWNhbGx5LlxuICAgICAgICAgIGlmIChyb3V0ZS5vbkVudGVyLmxlbmd0aCA8IDQpIGNhbGxiYWNrKCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBjYWxsYmFjayhlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9O1xuICB9LCBjYWxsYmFjaykoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVHJhbnNpdGlvbjsiLCIvKipcbiAqIEFjdGlvbnMgdGhhdCBtb2RpZnkgdGhlIFVSTC5cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgTG9jYXRpb25BY3Rpb25zID0ge1xuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgYSBuZXcgbG9jYXRpb24gaXMgYmVpbmcgcHVzaGVkIHRvIHRoZSBoaXN0b3J5IHN0YWNrLlxuICAgKi9cbiAgUFVTSDogJ3B1c2gnLFxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgdGhlIGN1cnJlbnQgbG9jYXRpb24gc2hvdWxkIGJlIHJlcGxhY2VkLlxuICAgKi9cbiAgUkVQTEFDRTogJ3JlcGxhY2UnLFxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgdGhlIG1vc3QgcmVjZW50IGVudHJ5IHNob3VsZCBiZSByZW1vdmVkIGZyb20gdGhlIGhpc3Rvcnkgc3RhY2suXG4gICAqL1xuICBQT1A6ICdwb3AnXG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTG9jYXRpb25BY3Rpb25zOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIExvY2F0aW9uQWN0aW9ucyA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvTG9jYXRpb25BY3Rpb25zJyk7XG5cbi8qKlxuICogQSBzY3JvbGwgYmVoYXZpb3IgdGhhdCBhdHRlbXB0cyB0byBpbWl0YXRlIHRoZSBkZWZhdWx0IGJlaGF2aW9yXG4gKiBvZiBtb2Rlcm4gYnJvd3NlcnMuXG4gKi9cbnZhciBJbWl0YXRlQnJvd3NlckJlaGF2aW9yID0ge1xuXG4gIHVwZGF0ZVNjcm9sbFBvc2l0aW9uOiBmdW5jdGlvbiB1cGRhdGVTY3JvbGxQb3NpdGlvbihwb3NpdGlvbiwgYWN0aW9uVHlwZSkge1xuICAgIHN3aXRjaCAoYWN0aW9uVHlwZSkge1xuICAgICAgY2FzZSBMb2NhdGlvbkFjdGlvbnMuUFVTSDpcbiAgICAgIGNhc2UgTG9jYXRpb25BY3Rpb25zLlJFUExBQ0U6XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExvY2F0aW9uQWN0aW9ucy5QT1A6XG4gICAgICAgIGlmIChwb3NpdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyhwb3NpdGlvbi54LCBwb3NpdGlvbi55KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW1pdGF0ZUJyb3dzZXJCZWhhdmlvcjsiLCIvKipcbiAqIEEgc2Nyb2xsIGJlaGF2aW9yIHRoYXQgYWx3YXlzIHNjcm9sbHMgdG8gdGhlIHRvcCBvZiB0aGUgcGFnZVxuICogYWZ0ZXIgYSB0cmFuc2l0aW9uLlxuICovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIFNjcm9sbFRvVG9wQmVoYXZpb3IgPSB7XG5cbiAgdXBkYXRlU2Nyb2xsUG9zaXRpb246IGZ1bmN0aW9uIHVwZGF0ZVNjcm9sbFBvc2l0aW9uKCkge1xuICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNjcm9sbFRvVG9wQmVoYXZpb3I7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG52YXIgX2luaGVyaXRzID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gJ2Z1bmN0aW9uJyAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ1N1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgJyArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfTtcblxuLyoqXG4gKiBUaGlzIGNvbXBvbmVudCBpcyBuZWNlc3NhcnkgdG8gZ2V0IGFyb3VuZCBhIGNvbnRleHQgd2FybmluZ1xuICogcHJlc2VudCBpbiBSZWFjdCAwLjEzLjAuIEl0IHNvdmxlcyB0aGlzIGJ5IHByb3ZpZGluZyBhIHNlcGFyYXRpb25cbiAqIGJldHdlZW4gdGhlIFwib3duZXJcIiBhbmQgXCJwYXJlbnRcIiBjb250ZXh0cy5cbiAqL1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgQ29udGV4dFdyYXBwZXIgPSAoZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgZnVuY3Rpb24gQ29udGV4dFdyYXBwZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbnRleHRXcmFwcGVyKTtcblxuICAgIGlmIChfUmVhY3QkQ29tcG9uZW50ICE9IG51bGwpIHtcbiAgICAgIF9SZWFjdCRDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBfaW5oZXJpdHMoQ29udGV4dFdyYXBwZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIF9jcmVhdGVDbGFzcyhDb250ZXh0V3JhcHBlciwgW3tcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQ29udGV4dFdyYXBwZXI7XG59KShSZWFjdC5Db21wb25lbnQpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbnRleHRXcmFwcGVyOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9jbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfTtcblxudmFyIF9pbmhlcml0cyA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH07XG5cbnZhciBQcm9wVHlwZXMgPSByZXF1aXJlKCcuLi9Qcm9wVHlwZXMnKTtcbnZhciBSb3V0ZUhhbmRsZXIgPSByZXF1aXJlKCcuL1JvdXRlSGFuZGxlcicpO1xudmFyIFJvdXRlID0gcmVxdWlyZSgnLi9Sb3V0ZScpO1xuXG4vKipcbiAqIEEgPERlZmF1bHRSb3V0ZT4gY29tcG9uZW50IGlzIGEgc3BlY2lhbCBraW5kIG9mIDxSb3V0ZT4gdGhhdFxuICogcmVuZGVycyB3aGVuIGl0cyBwYXJlbnQgbWF0Y2hlcyBidXQgbm9uZSBvZiBpdHMgc2libGluZ3MgZG8uXG4gKiBPbmx5IG9uZSBzdWNoIHJvdXRlIG1heSBiZSB1c2VkIGF0IGFueSBnaXZlbiBsZXZlbCBpbiB0aGVcbiAqIHJvdXRlIGhpZXJhcmNoeS5cbiAqL1xuXG52YXIgRGVmYXVsdFJvdXRlID0gKGZ1bmN0aW9uIChfUm91dGUpIHtcbiAgZnVuY3Rpb24gRGVmYXVsdFJvdXRlKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEZWZhdWx0Um91dGUpO1xuXG4gICAgaWYgKF9Sb3V0ZSAhPSBudWxsKSB7XG4gICAgICBfUm91dGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBfaW5oZXJpdHMoRGVmYXVsdFJvdXRlLCBfUm91dGUpO1xuXG4gIHJldHVybiBEZWZhdWx0Um91dGU7XG59KShSb3V0ZSk7XG5cbi8vIFRPRE86IEluY2x1ZGUgdGhlc2UgaW4gdGhlIGFib3ZlIGNsYXNzIGRlZmluaXRpb25cbi8vIG9uY2Ugd2UgY2FuIHVzZSBFUzcgcHJvcGVydHkgaW5pdGlhbGl6ZXJzLlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2JhYmVsL2JhYmVsL2lzc3Vlcy82MTlcblxuRGVmYXVsdFJvdXRlLnByb3BUeXBlcyA9IHtcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgcGF0aDogUHJvcFR5cGVzLmZhbHN5LFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLmZhbHN5LFxuICBoYW5kbGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5EZWZhdWx0Um91dGUuZGVmYXVsdFByb3BzID0ge1xuICBoYW5kbGVyOiBSb3V0ZUhhbmRsZXJcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRGVmYXVsdFJvdXRlOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9jbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxudmFyIF9pbmhlcml0cyA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH07XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgncmVhY3QvbGliL09iamVjdC5hc3NpZ24nKTtcbnZhciBQcm9wVHlwZXMgPSByZXF1aXJlKCcuLi9Qcm9wVHlwZXMnKTtcblxuZnVuY3Rpb24gaXNMZWZ0Q2xpY2tFdmVudChldmVudCkge1xuICByZXR1cm4gZXZlbnQuYnV0dG9uID09PSAwO1xufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQpIHtcbiAgcmV0dXJuICEhKGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuYWx0S2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkpO1xufVxuXG4vKipcbiAqIDxMaW5rPiBjb21wb25lbnRzIGFyZSB1c2VkIHRvIGNyZWF0ZSBhbiA8YT4gZWxlbWVudCB0aGF0IGxpbmtzIHRvIGEgcm91dGUuXG4gKiBXaGVuIHRoYXQgcm91dGUgaXMgYWN0aXZlLCB0aGUgbGluayBnZXRzIGFuIFwiYWN0aXZlXCIgY2xhc3MgbmFtZSAob3IgdGhlXG4gKiB2YWx1ZSBvZiBpdHMgYGFjdGl2ZUNsYXNzTmFtZWAgcHJvcCkuXG4gKlxuICogRm9yIGV4YW1wbGUsIGFzc3VtaW5nIHlvdSBoYXZlIHRoZSBmb2xsb3dpbmcgcm91dGU6XG4gKlxuICogICA8Um91dGUgbmFtZT1cInNob3dQb3N0XCIgcGF0aD1cIi9wb3N0cy86cG9zdElEXCIgaGFuZGxlcj17UG9zdH0vPlxuICpcbiAqIFlvdSBjb3VsZCB1c2UgdGhlIGZvbGxvd2luZyBjb21wb25lbnQgdG8gbGluayB0byB0aGF0IHJvdXRlOlxuICpcbiAqICAgPExpbmsgdG89XCJzaG93UG9zdFwiIHBhcmFtcz17eyBwb3N0SUQ6IFwiMTIzXCIgfX0gLz5cbiAqXG4gKiBJbiBhZGRpdGlvbiB0byBwYXJhbXMsIGxpbmtzIG1heSBwYXNzIGFsb25nIHF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXJzXG4gKiB1c2luZyB0aGUgYHF1ZXJ5YCBwcm9wLlxuICpcbiAqICAgPExpbmsgdG89XCJzaG93UG9zdFwiIHBhcmFtcz17eyBwb3N0SUQ6IFwiMTIzXCIgfX0gcXVlcnk9e3sgc2hvdzp0cnVlIH19Lz5cbiAqL1xuXG52YXIgTGluayA9IChmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBmdW5jdGlvbiBMaW5rKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMaW5rKTtcblxuICAgIGlmIChfUmVhY3QkQ29tcG9uZW50ICE9IG51bGwpIHtcbiAgICAgIF9SZWFjdCRDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBfaW5oZXJpdHMoTGluaywgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgX2NyZWF0ZUNsYXNzKExpbmssIFt7XG4gICAga2V5OiAnaGFuZGxlQ2xpY2snLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVDbGljayhldmVudCkge1xuICAgICAgdmFyIGFsbG93VHJhbnNpdGlvbiA9IHRydWU7XG4gICAgICB2YXIgY2xpY2tSZXN1bHQ7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2xpY2spIGNsaWNrUmVzdWx0ID0gdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50KTtcblxuICAgICAgaWYgKGlzTW9kaWZpZWRFdmVudChldmVudCkgfHwgIWlzTGVmdENsaWNrRXZlbnQoZXZlbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1pZiAoY2xpY2tSZXN1bHQgPT09IGZhbHNlIHx8IGV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQgPT09IHRydWUpIGFsbG93VHJhbnNpdGlvbiA9IGZhbHNlO1xuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBpZiAoYWxsb3dUcmFuc2l0aW9uKSB0aGlzLmNvbnRleHQucm91dGVyLnRyYW5zaXRpb25Ubyh0aGlzLnByb3BzLnRvLCB0aGlzLnByb3BzLnBhcmFtcywgdGhpcy5wcm9wcy5xdWVyeSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0SHJlZicsXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgXCJocmVmXCIgYXR0cmlidXRlIHRvIHVzZSBvbiB0aGUgRE9NIGVsZW1lbnQuXG4gICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEhyZWYoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnJvdXRlci5tYWtlSHJlZih0aGlzLnByb3BzLnRvLCB0aGlzLnByb3BzLnBhcmFtcywgdGhpcy5wcm9wcy5xdWVyeSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0Q2xhc3NOYW1lJyxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBcImNsYXNzXCIgYXR0cmlidXRlIHRvIHVzZSBvbiB0aGUgRE9NIGVsZW1lbnQsIHdoaWNoIGNvbnRhaW5zXG4gICAgICogdGhlIHZhbHVlIG9mIHRoZSBhY3RpdmVDbGFzc05hbWUgcHJvcGVydHkgd2hlbiB0aGlzIDxMaW5rPiBpcyBhY3RpdmUuXG4gICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldENsYXNzTmFtZSgpIHtcbiAgICAgIHZhciBjbGFzc05hbWUgPSB0aGlzLnByb3BzLmNsYXNzTmFtZTtcblxuICAgICAgaWYgKHRoaXMuZ2V0QWN0aXZlU3RhdGUoKSkgY2xhc3NOYW1lICs9ICcgJyArIHRoaXMucHJvcHMuYWN0aXZlQ2xhc3NOYW1lO1xuXG4gICAgICByZXR1cm4gY2xhc3NOYW1lO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldEFjdGl2ZVN0YXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0QWN0aXZlU3RhdGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnJvdXRlci5pc0FjdGl2ZSh0aGlzLnByb3BzLnRvLCB0aGlzLnByb3BzLnBhcmFtcywgdGhpcy5wcm9wcy5xdWVyeSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIHByb3BzID0gYXNzaWduKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgIGhyZWY6IHRoaXMuZ2V0SHJlZigpLFxuICAgICAgICBjbGFzc05hbWU6IHRoaXMuZ2V0Q2xhc3NOYW1lKCksXG4gICAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChwcm9wcy5hY3RpdmVTdHlsZSAmJiB0aGlzLmdldEFjdGl2ZVN0YXRlKCkpIHByb3BzLnN0eWxlID0gcHJvcHMuYWN0aXZlU3R5bGU7XG5cbiAgICAgIHJldHVybiBSZWFjdC5ET00uYShwcm9wcywgdGhpcy5wcm9wcy5jaGlsZHJlbik7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIExpbms7XG59KShSZWFjdC5Db21wb25lbnQpO1xuXG4vLyBUT0RPOiBJbmNsdWRlIHRoZXNlIGluIHRoZSBhYm92ZSBjbGFzcyBkZWZpbml0aW9uXG4vLyBvbmNlIHdlIGNhbiB1c2UgRVM3IHByb3BlcnR5IGluaXRpYWxpemVycy5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9iYWJlbC9iYWJlbC9pc3N1ZXMvNjE5XG5cbkxpbmsuY29udGV4dFR5cGVzID0ge1xuICByb3V0ZXI6IFByb3BUeXBlcy5yb3V0ZXIuaXNSZXF1aXJlZFxufTtcblxuTGluay5wcm9wVHlwZXMgPSB7XG4gIGFjdGl2ZUNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0bzogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLnJvdXRlXSkuaXNSZXF1aXJlZCxcbiAgcGFyYW1zOiBQcm9wVHlwZXMub2JqZWN0LFxuICBxdWVyeTogUHJvcFR5cGVzLm9iamVjdCxcbiAgYWN0aXZlU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5MaW5rLmRlZmF1bHRQcm9wcyA9IHtcbiAgYWN0aXZlQ2xhc3NOYW1lOiAnYWN0aXZlJyxcbiAgY2xhc3NOYW1lOiAnJ1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBMaW5rOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9jbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfTtcblxudmFyIF9pbmhlcml0cyA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH07XG5cbnZhciBQcm9wVHlwZXMgPSByZXF1aXJlKCcuLi9Qcm9wVHlwZXMnKTtcbnZhciBSb3V0ZUhhbmRsZXIgPSByZXF1aXJlKCcuL1JvdXRlSGFuZGxlcicpO1xudmFyIFJvdXRlID0gcmVxdWlyZSgnLi9Sb3V0ZScpO1xuXG4vKipcbiAqIEEgPE5vdEZvdW5kUm91dGU+IGlzIGEgc3BlY2lhbCBraW5kIG9mIDxSb3V0ZT4gdGhhdFxuICogcmVuZGVycyB3aGVuIHRoZSBiZWdpbm5pbmcgb2YgaXRzIHBhcmVudCdzIHBhdGggbWF0Y2hlc1xuICogYnV0IG5vbmUgb2YgaXRzIHNpYmxpbmdzIGRvLCBpbmNsdWRpbmcgYW55IDxEZWZhdWx0Um91dGU+LlxuICogT25seSBvbmUgc3VjaCByb3V0ZSBtYXkgYmUgdXNlZCBhdCBhbnkgZ2l2ZW4gbGV2ZWwgaW4gdGhlXG4gKiByb3V0ZSBoaWVyYXJjaHkuXG4gKi9cblxudmFyIE5vdEZvdW5kUm91dGUgPSAoZnVuY3Rpb24gKF9Sb3V0ZSkge1xuICBmdW5jdGlvbiBOb3RGb3VuZFJvdXRlKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBOb3RGb3VuZFJvdXRlKTtcblxuICAgIGlmIChfUm91dGUgIT0gbnVsbCkge1xuICAgICAgX1JvdXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgX2luaGVyaXRzKE5vdEZvdW5kUm91dGUsIF9Sb3V0ZSk7XG5cbiAgcmV0dXJuIE5vdEZvdW5kUm91dGU7XG59KShSb3V0ZSk7XG5cbi8vIFRPRE86IEluY2x1ZGUgdGhlc2UgaW4gdGhlIGFib3ZlIGNsYXNzIGRlZmluaXRpb25cbi8vIG9uY2Ugd2UgY2FuIHVzZSBFUzcgcHJvcGVydHkgaW5pdGlhbGl6ZXJzLlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2JhYmVsL2JhYmVsL2lzc3Vlcy82MTlcblxuTm90Rm91bmRSb3V0ZS5wcm9wVHlwZXMgPSB7XG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHBhdGg6IFByb3BUeXBlcy5mYWxzeSxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5mYWxzeSxcbiAgaGFuZGxlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxuTm90Rm91bmRSb3V0ZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGhhbmRsZXI6IFJvdXRlSGFuZGxlclxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBOb3RGb3VuZFJvdXRlOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9jbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfTtcblxudmFyIF9pbmhlcml0cyA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH07XG5cbnZhciBQcm9wVHlwZXMgPSByZXF1aXJlKCcuLi9Qcm9wVHlwZXMnKTtcbnZhciBSb3V0ZSA9IHJlcXVpcmUoJy4vUm91dGUnKTtcblxuLyoqXG4gKiBBIDxSZWRpcmVjdD4gY29tcG9uZW50IGlzIGEgc3BlY2lhbCBraW5kIG9mIDxSb3V0ZT4gdGhhdCBhbHdheXNcbiAqIHJlZGlyZWN0cyB0byBhbm90aGVyIHJvdXRlIHdoZW4gaXQgbWF0Y2hlcy5cbiAqL1xuXG52YXIgUmVkaXJlY3QgPSAoZnVuY3Rpb24gKF9Sb3V0ZSkge1xuICBmdW5jdGlvbiBSZWRpcmVjdCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVkaXJlY3QpO1xuXG4gICAgaWYgKF9Sb3V0ZSAhPSBudWxsKSB7XG4gICAgICBfUm91dGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBfaW5oZXJpdHMoUmVkaXJlY3QsIF9Sb3V0ZSk7XG5cbiAgcmV0dXJuIFJlZGlyZWN0O1xufSkoUm91dGUpO1xuXG4vLyBUT0RPOiBJbmNsdWRlIHRoZXNlIGluIHRoZSBhYm92ZSBjbGFzcyBkZWZpbml0aW9uXG4vLyBvbmNlIHdlIGNhbiB1c2UgRVM3IHByb3BlcnR5IGluaXRpYWxpemVycy5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9iYWJlbC9iYWJlbC9pc3N1ZXMvNjE5XG5cblJlZGlyZWN0LnByb3BUeXBlcyA9IHtcbiAgcGF0aDogUHJvcFR5cGVzLnN0cmluZyxcbiAgZnJvbTogUHJvcFR5cGVzLnN0cmluZywgLy8gQWxpYXMgZm9yIHBhdGguXG4gIHRvOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBoYW5kbGVyOiBQcm9wVHlwZXMuZmFsc3lcbn07XG5cbi8vIFJlZGlyZWN0cyBzaG91bGQgbm90IGhhdmUgYSBkZWZhdWx0IGhhbmRsZXJcblJlZGlyZWN0LmRlZmF1bHRQcm9wcyA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlZGlyZWN0OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9jbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxudmFyIF9pbmhlcml0cyA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH07XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgncmVhY3QvbGliL2ludmFyaWFudCcpO1xudmFyIFByb3BUeXBlcyA9IHJlcXVpcmUoJy4uL1Byb3BUeXBlcycpO1xudmFyIFJvdXRlSGFuZGxlciA9IHJlcXVpcmUoJy4vUm91dGVIYW5kbGVyJyk7XG5cbi8qKlxuICogPFJvdXRlPiBjb21wb25lbnRzIHNwZWNpZnkgY29tcG9uZW50cyB0aGF0IGFyZSByZW5kZXJlZCB0byB0aGUgcGFnZSB3aGVuIHRoZVxuICogVVJMIG1hdGNoZXMgYSBnaXZlbiBwYXR0ZXJuLlxuICpcbiAqIFJvdXRlcyBhcmUgYXJyYW5nZWQgaW4gYSBuZXN0ZWQgdHJlZSBzdHJ1Y3R1cmUuIFdoZW4gYSBuZXcgVVJMIGlzIHJlcXVlc3RlZCxcbiAqIHRoZSB0cmVlIGlzIHNlYXJjaGVkIGRlcHRoLWZpcnN0IHRvIGZpbmQgYSByb3V0ZSB3aG9zZSBwYXRoIG1hdGNoZXMgdGhlIFVSTC5cbiAqIFdoZW4gb25lIGlzIGZvdW5kLCBhbGwgcm91dGVzIGluIHRoZSB0cmVlIHRoYXQgbGVhZCB0byBpdCBhcmUgY29uc2lkZXJlZFxuICogXCJhY3RpdmVcIiBhbmQgdGhlaXIgY29tcG9uZW50cyBhcmUgcmVuZGVyZWQgaW50byB0aGUgRE9NLCBuZXN0ZWQgaW4gdGhlIHNhbWVcbiAqIG9yZGVyIGFzIHRoZXkgYXJlIGluIHRoZSB0cmVlLlxuICpcbiAqIFRoZSBwcmVmZXJyZWQgd2F5IHRvIGNvbmZpZ3VyZSBhIHJvdXRlciBpcyB1c2luZyBKU1guIFRoZSBYTUwtbGlrZSBzeW50YXggaXNcbiAqIGEgZ3JlYXQgd2F5IHRvIHZpc3VhbGl6ZSBob3cgcm91dGVzIGFyZSBsYWlkIG91dCBpbiBhbiBhcHBsaWNhdGlvbi5cbiAqXG4gKiAgIHZhciByb3V0ZXMgPSBbXG4gKiAgICAgPFJvdXRlIGhhbmRsZXI9e0FwcH0+XG4gKiAgICAgICA8Um91dGUgbmFtZT1cImxvZ2luXCIgaGFuZGxlcj17TG9naW59Lz5cbiAqICAgICAgIDxSb3V0ZSBuYW1lPVwibG9nb3V0XCIgaGFuZGxlcj17TG9nb3V0fS8+XG4gKiAgICAgICA8Um91dGUgbmFtZT1cImFib3V0XCIgaGFuZGxlcj17QWJvdXR9Lz5cbiAqICAgICA8L1JvdXRlPlxuICogICBdO1xuICogICBcbiAqICAgUm91dGVyLnJ1bihyb3V0ZXMsIGZ1bmN0aW9uIChIYW5kbGVyKSB7XG4gKiAgICAgUmVhY3QucmVuZGVyKDxIYW5kbGVyLz4sIGRvY3VtZW50LmJvZHkpO1xuICogICB9KTtcbiAqXG4gKiBIYW5kbGVycyBmb3IgUm91dGUgY29tcG9uZW50cyB0aGF0IGNvbnRhaW4gY2hpbGRyZW4gY2FuIHJlbmRlciB0aGVpciBhY3RpdmVcbiAqIGNoaWxkIHJvdXRlIHVzaW5nIGEgPFJvdXRlSGFuZGxlcj4gZWxlbWVudC5cbiAqXG4gKiAgIHZhciBBcHAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gKiAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gKiAgICAgICByZXR1cm4gKFxuICogICAgICAgICA8ZGl2IGNsYXNzPVwiYXBwbGljYXRpb25cIj5cbiAqICAgICAgICAgICA8Um91dGVIYW5kbGVyLz5cbiAqICAgICAgICAgPC9kaXY+XG4gKiAgICAgICApO1xuICogICAgIH1cbiAqICAgfSk7XG4gKlxuICogSWYgbm8gaGFuZGxlciBpcyBwcm92aWRlZCBmb3IgdGhlIHJvdXRlLCBpdCB3aWxsIHJlbmRlciBhIG1hdGNoZWQgY2hpbGQgcm91dGUuXG4gKi9cblxudmFyIFJvdXRlID0gKGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIGZ1bmN0aW9uIFJvdXRlKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSb3V0ZSk7XG5cbiAgICBpZiAoX1JlYWN0JENvbXBvbmVudCAhPSBudWxsKSB7XG4gICAgICBfUmVhY3QkQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgX2luaGVyaXRzKFJvdXRlLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBfY3JlYXRlQ2xhc3MoUm91dGUsIFt7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgaW52YXJpYW50KGZhbHNlLCAnJXMgZWxlbWVudHMgYXJlIGZvciByb3V0ZXIgY29uZmlndXJhdGlvbiBvbmx5IGFuZCBzaG91bGQgbm90IGJlIHJlbmRlcmVkJywgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUm91dGU7XG59KShSZWFjdC5Db21wb25lbnQpO1xuXG4vLyBUT0RPOiBJbmNsdWRlIHRoZXNlIGluIHRoZSBhYm92ZSBjbGFzcyBkZWZpbml0aW9uXG4vLyBvbmNlIHdlIGNhbiB1c2UgRVM3IHByb3BlcnR5IGluaXRpYWxpemVycy5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9iYWJlbC9iYWJlbC9pc3N1ZXMvNjE5XG5cblJvdXRlLnByb3BUeXBlcyA9IHtcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgcGF0aDogUHJvcFR5cGVzLnN0cmluZyxcbiAgaGFuZGxlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIGlnbm9yZVNjcm9sbEJlaGF2aW9yOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuUm91dGUuZGVmYXVsdFByb3BzID0ge1xuICBoYW5kbGVyOiBSb3V0ZUhhbmRsZXJcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUm91dGU7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG52YXIgX2luaGVyaXRzID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gJ2Z1bmN0aW9uJyAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ1N1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgJyArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfTtcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBDb250ZXh0V3JhcHBlciA9IHJlcXVpcmUoJy4vQ29udGV4dFdyYXBwZXInKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdyZWFjdC9saWIvT2JqZWN0LmFzc2lnbicpO1xudmFyIFByb3BUeXBlcyA9IHJlcXVpcmUoJy4uL1Byb3BUeXBlcycpO1xuXG52YXIgUkVGX05BTUUgPSAnX19yb3V0ZUhhbmRsZXJfXyc7XG5cbi8qKlxuICogQSA8Um91dGVIYW5kbGVyPiBjb21wb25lbnQgcmVuZGVycyB0aGUgYWN0aXZlIGNoaWxkIHJvdXRlIGhhbmRsZXJcbiAqIHdoZW4gcm91dGVzIGFyZSBuZXN0ZWQuXG4gKi9cblxudmFyIFJvdXRlSGFuZGxlciA9IChmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBmdW5jdGlvbiBSb3V0ZUhhbmRsZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJvdXRlSGFuZGxlcik7XG5cbiAgICBpZiAoX1JlYWN0JENvbXBvbmVudCAhPSBudWxsKSB7XG4gICAgICBfUmVhY3QkQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgX2luaGVyaXRzKFJvdXRlSGFuZGxlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgX2NyZWF0ZUNsYXNzKFJvdXRlSGFuZGxlciwgW3tcbiAgICBrZXk6ICdnZXRDaGlsZENvbnRleHQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICByb3V0ZURlcHRoOiB0aGlzLmNvbnRleHQucm91dGVEZXB0aCArIDFcbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMuX3VwZGF0ZVJvdXRlQ29tcG9uZW50KHRoaXMucmVmc1tSRUZfTkFNRV0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudERpZFVwZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgIHRoaXMuX3VwZGF0ZVJvdXRlQ29tcG9uZW50KHRoaXMucmVmc1tSRUZfTkFNRV0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLl91cGRhdGVSb3V0ZUNvbXBvbmVudChudWxsKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfdXBkYXRlUm91dGVDb21wb25lbnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfdXBkYXRlUm91dGVDb21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgICB0aGlzLmNvbnRleHQucm91dGVyLnNldFJvdXRlQ29tcG9uZW50QXREZXB0aCh0aGlzLmdldFJvdXRlRGVwdGgoKSwgY29tcG9uZW50KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRSb3V0ZURlcHRoJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Um91dGVEZXB0aCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnRleHQucm91dGVEZXB0aDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjcmVhdGVDaGlsZFJvdXRlSGFuZGxlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZUNoaWxkUm91dGVIYW5kbGVyKHByb3BzKSB7XG4gICAgICB2YXIgcm91dGUgPSB0aGlzLmNvbnRleHQucm91dGVyLmdldFJvdXRlQXREZXB0aCh0aGlzLmdldFJvdXRlRGVwdGgoKSk7XG5cbiAgICAgIGlmIChyb3V0ZSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfXZhciBjaGlsZFByb3BzID0gYXNzaWduKHt9LCBwcm9wcyB8fCB0aGlzLnByb3BzLCB7XG4gICAgICAgIHJlZjogUkVGX05BTUUsXG4gICAgICAgIHBhcmFtczogdGhpcy5jb250ZXh0LnJvdXRlci5nZXRDdXJyZW50UGFyYW1zKCksXG4gICAgICAgIHF1ZXJ5OiB0aGlzLmNvbnRleHQucm91dGVyLmdldEN1cnJlbnRRdWVyeSgpXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQocm91dGUuaGFuZGxlciwgY2hpbGRQcm9wcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIGhhbmRsZXIgPSB0aGlzLmNyZWF0ZUNoaWxkUm91dGVIYW5kbGVyKCk7XG4gICAgICAvLyA8c2NyaXB0Lz4gZm9yIHRoaW5ncyBsaWtlIDxDU1NUcmFuc2l0aW9uR3JvdXAvPiB0aGF0IGRvbid0IGxpa2UgbnVsbFxuICAgICAgcmV0dXJuIGhhbmRsZXIgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBDb250ZXh0V3JhcHBlcixcbiAgICAgICAgbnVsbCxcbiAgICAgICAgaGFuZGxlclxuICAgICAgKSA6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcsIG51bGwpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBSb3V0ZUhhbmRsZXI7XG59KShSZWFjdC5Db21wb25lbnQpO1xuXG4vLyBUT0RPOiBJbmNsdWRlIHRoZXNlIGluIHRoZSBhYm92ZSBjbGFzcyBkZWZpbml0aW9uXG4vLyBvbmNlIHdlIGNhbiB1c2UgRVM3IHByb3BlcnR5IGluaXRpYWxpemVycy5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9iYWJlbC9iYWJlbC9pc3N1ZXMvNjE5XG5cblJvdXRlSGFuZGxlci5jb250ZXh0VHlwZXMgPSB7XG4gIHJvdXRlRGVwdGg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgcm91dGVyOiBQcm9wVHlwZXMucm91dGVyLmlzUmVxdWlyZWRcbn07XG5cblJvdXRlSGFuZGxlci5jaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgcm91dGVEZXB0aDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJvdXRlSGFuZGxlcjsiLCIoZnVuY3Rpb24gKHByb2Nlc3Mpe1xuLyoganNoaW50IC1XMDU4ICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgd2FybmluZyA9IHJlcXVpcmUoJ3JlYWN0L2xpYi93YXJuaW5nJyk7XG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgncmVhY3QvbGliL2ludmFyaWFudCcpO1xudmFyIGNhblVzZURPTSA9IHJlcXVpcmUoJ3JlYWN0L2xpYi9FeGVjdXRpb25FbnZpcm9ubWVudCcpLmNhblVzZURPTTtcbnZhciBMb2NhdGlvbkFjdGlvbnMgPSByZXF1aXJlKCcuL2FjdGlvbnMvTG9jYXRpb25BY3Rpb25zJyk7XG52YXIgSW1pdGF0ZUJyb3dzZXJCZWhhdmlvciA9IHJlcXVpcmUoJy4vYmVoYXZpb3JzL0ltaXRhdGVCcm93c2VyQmVoYXZpb3InKTtcbnZhciBIYXNoTG9jYXRpb24gPSByZXF1aXJlKCcuL2xvY2F0aW9ucy9IYXNoTG9jYXRpb24nKTtcbnZhciBIaXN0b3J5TG9jYXRpb24gPSByZXF1aXJlKCcuL2xvY2F0aW9ucy9IaXN0b3J5TG9jYXRpb24nKTtcbnZhciBSZWZyZXNoTG9jYXRpb24gPSByZXF1aXJlKCcuL2xvY2F0aW9ucy9SZWZyZXNoTG9jYXRpb24nKTtcbnZhciBTdGF0aWNMb2NhdGlvbiA9IHJlcXVpcmUoJy4vbG9jYXRpb25zL1N0YXRpY0xvY2F0aW9uJyk7XG52YXIgU2Nyb2xsSGlzdG9yeSA9IHJlcXVpcmUoJy4vU2Nyb2xsSGlzdG9yeScpO1xudmFyIGNyZWF0ZVJvdXRlc0Zyb21SZWFjdENoaWxkcmVuID0gcmVxdWlyZSgnLi9jcmVhdGVSb3V0ZXNGcm9tUmVhY3RDaGlsZHJlbicpO1xudmFyIGlzUmVhY3RDaGlsZHJlbiA9IHJlcXVpcmUoJy4vaXNSZWFjdENoaWxkcmVuJyk7XG52YXIgVHJhbnNpdGlvbiA9IHJlcXVpcmUoJy4vVHJhbnNpdGlvbicpO1xudmFyIFByb3BUeXBlcyA9IHJlcXVpcmUoJy4vUHJvcFR5cGVzJyk7XG52YXIgUmVkaXJlY3QgPSByZXF1aXJlKCcuL1JlZGlyZWN0Jyk7XG52YXIgSGlzdG9yeSA9IHJlcXVpcmUoJy4vSGlzdG9yeScpO1xudmFyIENhbmNlbGxhdGlvbiA9IHJlcXVpcmUoJy4vQ2FuY2VsbGF0aW9uJyk7XG52YXIgTWF0Y2ggPSByZXF1aXJlKCcuL01hdGNoJyk7XG52YXIgUm91dGUgPSByZXF1aXJlKCcuL1JvdXRlJyk7XG52YXIgc3VwcG9ydHNIaXN0b3J5ID0gcmVxdWlyZSgnLi9zdXBwb3J0c0hpc3RvcnknKTtcbnZhciBQYXRoVXRpbHMgPSByZXF1aXJlKCcuL1BhdGhVdGlscycpO1xuXG4vKipcbiAqIFRoZSBkZWZhdWx0IGxvY2F0aW9uIGZvciBuZXcgcm91dGVycy5cbiAqL1xudmFyIERFRkFVTFRfTE9DQVRJT04gPSBjYW5Vc2VET00gPyBIYXNoTG9jYXRpb24gOiAnLyc7XG5cbi8qKlxuICogVGhlIGRlZmF1bHQgc2Nyb2xsIGJlaGF2aW9yIGZvciBuZXcgcm91dGVycy5cbiAqL1xudmFyIERFRkFVTFRfU0NST0xMX0JFSEFWSU9SID0gY2FuVXNlRE9NID8gSW1pdGF0ZUJyb3dzZXJCZWhhdmlvciA6IG51bGw7XG5cbmZ1bmN0aW9uIGhhc1Byb3BlcnRpZXMob2JqZWN0LCBwcm9wZXJ0aWVzKSB7XG4gIGZvciAodmFyIHByb3BlcnR5TmFtZSBpbiBwcm9wZXJ0aWVzKSBpZiAocHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eU5hbWUpICYmIG9iamVjdFtwcm9wZXJ0eU5hbWVdICE9PSBwcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV0pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1yZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gaGFzTWF0Y2gocm91dGVzLCByb3V0ZSwgcHJldlBhcmFtcywgbmV4dFBhcmFtcywgcHJldlF1ZXJ5LCBuZXh0UXVlcnkpIHtcbiAgcmV0dXJuIHJvdXRlcy5zb21lKGZ1bmN0aW9uIChyKSB7XG4gICAgaWYgKHIgIT09IHJvdXRlKSByZXR1cm4gZmFsc2U7XG5cbiAgICB2YXIgcGFyYW1OYW1lcyA9IHJvdXRlLnBhcmFtTmFtZXM7XG4gICAgdmFyIHBhcmFtTmFtZTtcblxuICAgIC8vIEVuc3VyZSB0aGF0IGFsbCBwYXJhbXMgdGhlIHJvdXRlIGNhcmVzIGFib3V0IGRpZCBub3QgY2hhbmdlLlxuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBwYXJhbU5hbWVzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICBwYXJhbU5hbWUgPSBwYXJhbU5hbWVzW2ldO1xuXG4gICAgICBpZiAobmV4dFBhcmFtc1twYXJhbU5hbWVdICE9PSBwcmV2UGFyYW1zW3BhcmFtTmFtZV0pIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBFbnN1cmUgdGhlIHF1ZXJ5IGhhc24ndCBjaGFuZ2VkLlxuICAgIHJldHVybiBoYXNQcm9wZXJ0aWVzKHByZXZRdWVyeSwgbmV4dFF1ZXJ5KSAmJiBoYXNQcm9wZXJ0aWVzKG5leHRRdWVyeSwgcHJldlF1ZXJ5KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZFJvdXRlc1RvTmFtZWRSb3V0ZXMocm91dGVzLCBuYW1lZFJvdXRlcykge1xuICB2YXIgcm91dGU7XG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSByb3V0ZXMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICByb3V0ZSA9IHJvdXRlc1tpXTtcblxuICAgIGlmIChyb3V0ZS5uYW1lKSB7XG4gICAgICBpbnZhcmlhbnQobmFtZWRSb3V0ZXNbcm91dGUubmFtZV0gPT0gbnVsbCwgJ1lvdSBtYXkgbm90IGhhdmUgbW9yZSB0aGFuIG9uZSByb3V0ZSBuYW1lZCBcIiVzXCInLCByb3V0ZS5uYW1lKTtcblxuICAgICAgbmFtZWRSb3V0ZXNbcm91dGUubmFtZV0gPSByb3V0ZTtcbiAgICB9XG5cbiAgICBpZiAocm91dGUuY2hpbGRSb3V0ZXMpIGFkZFJvdXRlc1RvTmFtZWRSb3V0ZXMocm91dGUuY2hpbGRSb3V0ZXMsIG5hbWVkUm91dGVzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByb3V0ZUlzQWN0aXZlKGFjdGl2ZVJvdXRlcywgcm91dGVOYW1lKSB7XG4gIHJldHVybiBhY3RpdmVSb3V0ZXMuc29tZShmdW5jdGlvbiAocm91dGUpIHtcbiAgICByZXR1cm4gcm91dGUubmFtZSA9PT0gcm91dGVOYW1lO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcGFyYW1zQXJlQWN0aXZlKGFjdGl2ZVBhcmFtcywgcGFyYW1zKSB7XG4gIGZvciAodmFyIHByb3BlcnR5IGluIHBhcmFtcykgaWYgKFN0cmluZyhhY3RpdmVQYXJhbXNbcHJvcGVydHldKSAhPT0gU3RyaW5nKHBhcmFtc1twcm9wZXJ0eV0pKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9cmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIHF1ZXJ5SXNBY3RpdmUoYWN0aXZlUXVlcnksIHF1ZXJ5KSB7XG4gIGZvciAodmFyIHByb3BlcnR5IGluIHF1ZXJ5KSBpZiAoU3RyaW5nKGFjdGl2ZVF1ZXJ5W3Byb3BlcnR5XSkgIT09IFN0cmluZyhxdWVyeVtwcm9wZXJ0eV0pKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9cmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbmQgcmV0dXJucyBhIG5ldyByb3V0ZXIgdXNpbmcgdGhlIGdpdmVuIG9wdGlvbnMuIEEgcm91dGVyXG4gKiBpcyBhIFJlYWN0Q29tcG9uZW50IGNsYXNzIHRoYXQga25vd3MgaG93IHRvIHJlYWN0IHRvIGNoYW5nZXMgaW4gdGhlXG4gKiBVUkwgYW5kIGtlZXAgdGhlIGNvbnRlbnRzIG9mIHRoZSBwYWdlIGluIHN5bmMuXG4gKlxuICogT3B0aW9ucyBtYXkgYmUgYW55IG9mIHRoZSBmb2xsb3dpbmc6XG4gKlxuICogLSByb3V0ZXMgICAgICAgICAgIChyZXF1aXJlZCkgVGhlIHJvdXRlIGNvbmZpZ1xuICogLSBsb2NhdGlvbiAgICAgICAgIFRoZSBsb2NhdGlvbiB0byB1c2UuIERlZmF1bHRzIHRvIEhhc2hMb2NhdGlvbiB3aGVuXG4gKiAgICAgICAgICAgICAgICAgICAgdGhlIERPTSBpcyBhdmFpbGFibGUsIFwiL1wiIG90aGVyd2lzZVxuICogLSBzY3JvbGxCZWhhdmlvciAgIFRoZSBzY3JvbGwgYmVoYXZpb3IgdG8gdXNlLiBEZWZhdWx0cyB0byBJbWl0YXRlQnJvd3NlckJlaGF2aW9yXG4gKiAgICAgICAgICAgICAgICAgICAgd2hlbiB0aGUgRE9NIGlzIGF2YWlsYWJsZSwgbnVsbCBvdGhlcndpc2VcbiAqIC0gb25FcnJvciAgICAgICAgICBBIGZ1bmN0aW9uIHRoYXQgaXMgdXNlZCB0byBoYW5kbGUgZXJyb3JzXG4gKiAtIG9uQWJvcnQgICAgICAgICAgQSBmdW5jdGlvbiB0aGF0IGlzIHVzZWQgdG8gaGFuZGxlIGFib3J0ZWQgdHJhbnNpdGlvbnNcbiAqXG4gKiBXaGVuIHJlbmRlcmluZyBpbiBhIHNlcnZlci1zaWRlIGVudmlyb25tZW50LCB0aGUgbG9jYXRpb24gc2hvdWxkIHNpbXBseVxuICogYmUgdGhlIFVSTCBwYXRoIHRoYXQgd2FzIHVzZWQgaW4gdGhlIHJlcXVlc3QsIGluY2x1ZGluZyB0aGUgcXVlcnkgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBjcmVhdGVSb3V0ZXIob3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICBpZiAoaXNSZWFjdENoaWxkcmVuKG9wdGlvbnMpKSBvcHRpb25zID0geyByb3V0ZXM6IG9wdGlvbnMgfTtcblxuICB2YXIgbW91bnRlZENvbXBvbmVudHMgPSBbXTtcbiAgdmFyIGxvY2F0aW9uID0gb3B0aW9ucy5sb2NhdGlvbiB8fCBERUZBVUxUX0xPQ0FUSU9OO1xuICB2YXIgc2Nyb2xsQmVoYXZpb3IgPSBvcHRpb25zLnNjcm9sbEJlaGF2aW9yIHx8IERFRkFVTFRfU0NST0xMX0JFSEFWSU9SO1xuICB2YXIgc3RhdGUgPSB7fTtcbiAgdmFyIG5leHRTdGF0ZSA9IHt9O1xuICB2YXIgcGVuZGluZ1RyYW5zaXRpb24gPSBudWxsO1xuICB2YXIgZGlzcGF0Y2hIYW5kbGVyID0gbnVsbDtcblxuICBpZiAodHlwZW9mIGxvY2F0aW9uID09PSAnc3RyaW5nJykgbG9jYXRpb24gPSBuZXcgU3RhdGljTG9jYXRpb24obG9jYXRpb24pO1xuXG4gIGlmIChsb2NhdGlvbiBpbnN0YW5jZW9mIFN0YXRpY0xvY2F0aW9uKSB7XG4gICAgd2FybmluZyghY2FuVXNlRE9NIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAndGVzdCcsICdZb3Ugc2hvdWxkIG5vdCB1c2UgYSBzdGF0aWMgbG9jYXRpb24gaW4gYSBET00gZW52aXJvbm1lbnQgYmVjYXVzZSAnICsgJ3RoZSByb3V0ZXIgd2lsbCBub3QgYmUga2VwdCBpbiBzeW5jIHdpdGggdGhlIGN1cnJlbnQgVVJMJyk7XG4gIH0gZWxzZSB7XG4gICAgaW52YXJpYW50KGNhblVzZURPTSB8fCBsb2NhdGlvbi5uZWVkc0RPTSA9PT0gZmFsc2UsICdZb3UgY2Fubm90IHVzZSAlcyB3aXRob3V0IGEgRE9NJywgbG9jYXRpb24pO1xuICB9XG5cbiAgLy8gQXV0b21hdGljYWxseSBmYWxsIGJhY2sgdG8gZnVsbCBwYWdlIHJlZnJlc2hlcyBpblxuICAvLyBicm93c2VycyB0aGF0IGRvbid0IHN1cHBvcnQgdGhlIEhUTUwgaGlzdG9yeSBBUEkuXG4gIGlmIChsb2NhdGlvbiA9PT0gSGlzdG9yeUxvY2F0aW9uICYmICFzdXBwb3J0c0hpc3RvcnkoKSkgbG9jYXRpb24gPSBSZWZyZXNoTG9jYXRpb247XG5cbiAgdmFyIFJvdXRlciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICAgIGRpc3BsYXlOYW1lOiAnUm91dGVyJyxcblxuICAgIHN0YXRpY3M6IHtcblxuICAgICAgaXNSdW5uaW5nOiBmYWxzZSxcblxuICAgICAgY2FuY2VsUGVuZGluZ1RyYW5zaXRpb246IGZ1bmN0aW9uIGNhbmNlbFBlbmRpbmdUcmFuc2l0aW9uKCkge1xuICAgICAgICBpZiAocGVuZGluZ1RyYW5zaXRpb24pIHtcbiAgICAgICAgICBwZW5kaW5nVHJhbnNpdGlvbi5jYW5jZWwoKTtcbiAgICAgICAgICBwZW5kaW5nVHJhbnNpdGlvbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIGNsZWFyQWxsUm91dGVzOiBmdW5jdGlvbiBjbGVhckFsbFJvdXRlcygpIHtcbiAgICAgICAgUm91dGVyLmNhbmNlbFBlbmRpbmdUcmFuc2l0aW9uKCk7XG4gICAgICAgIFJvdXRlci5uYW1lZFJvdXRlcyA9IHt9O1xuICAgICAgICBSb3V0ZXIucm91dGVzID0gW107XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEFkZHMgcm91dGVzIHRvIHRoaXMgcm91dGVyIGZyb20gdGhlIGdpdmVuIGNoaWxkcmVuIG9iamVjdCAoc2VlIFJlYWN0Q2hpbGRyZW4pLlxuICAgICAgICovXG4gICAgICBhZGRSb3V0ZXM6IGZ1bmN0aW9uIGFkZFJvdXRlcyhyb3V0ZXMpIHtcbiAgICAgICAgaWYgKGlzUmVhY3RDaGlsZHJlbihyb3V0ZXMpKSByb3V0ZXMgPSBjcmVhdGVSb3V0ZXNGcm9tUmVhY3RDaGlsZHJlbihyb3V0ZXMpO1xuXG4gICAgICAgIGFkZFJvdXRlc1RvTmFtZWRSb3V0ZXMocm91dGVzLCBSb3V0ZXIubmFtZWRSb3V0ZXMpO1xuXG4gICAgICAgIFJvdXRlci5yb3V0ZXMucHVzaC5hcHBseShSb3V0ZXIucm91dGVzLCByb3V0ZXMpO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBSZXBsYWNlcyByb3V0ZXMgb2YgdGhpcyByb3V0ZXIgZnJvbSB0aGUgZ2l2ZW4gY2hpbGRyZW4gb2JqZWN0IChzZWUgUmVhY3RDaGlsZHJlbikuXG4gICAgICAgKi9cbiAgICAgIHJlcGxhY2VSb3V0ZXM6IGZ1bmN0aW9uIHJlcGxhY2VSb3V0ZXMocm91dGVzKSB7XG4gICAgICAgIFJvdXRlci5jbGVhckFsbFJvdXRlcygpO1xuICAgICAgICBSb3V0ZXIuYWRkUm91dGVzKHJvdXRlcyk7XG4gICAgICAgIFJvdXRlci5yZWZyZXNoKCk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFBlcmZvcm1zIGEgbWF0Y2ggb2YgdGhlIGdpdmVuIHBhdGggYWdhaW5zdCB0aGlzIHJvdXRlciBhbmQgcmV0dXJucyBhbiBvYmplY3RcbiAgICAgICAqIHdpdGggdGhlIHsgcm91dGVzLCBwYXJhbXMsIHBhdGhuYW1lLCBxdWVyeSB9IHRoYXQgbWF0Y2guIFJldHVybnMgbnVsbCBpZiBub1xuICAgICAgICogbWF0Y2ggY2FuIGJlIG1hZGUuXG4gICAgICAgKi9cbiAgICAgIG1hdGNoOiBmdW5jdGlvbiBtYXRjaChwYXRoKSB7XG4gICAgICAgIHJldHVybiBNYXRjaC5maW5kTWF0Y2goUm91dGVyLnJvdXRlcywgcGF0aCk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFJldHVybnMgYW4gYWJzb2x1dGUgVVJMIHBhdGggY3JlYXRlZCBmcm9tIHRoZSBnaXZlbiByb3V0ZVxuICAgICAgICogbmFtZSwgVVJMIHBhcmFtZXRlcnMsIGFuZCBxdWVyeS5cbiAgICAgICAqL1xuICAgICAgbWFrZVBhdGg6IGZ1bmN0aW9uIG1ha2VQYXRoKHRvLCBwYXJhbXMsIHF1ZXJ5KSB7XG4gICAgICAgIHZhciBwYXRoO1xuICAgICAgICBpZiAoUGF0aFV0aWxzLmlzQWJzb2x1dGUodG8pKSB7XG4gICAgICAgICAgcGF0aCA9IHRvO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciByb3V0ZSA9IHRvIGluc3RhbmNlb2YgUm91dGUgPyB0byA6IFJvdXRlci5uYW1lZFJvdXRlc1t0b107XG5cbiAgICAgICAgICBpbnZhcmlhbnQocm91dGUgaW5zdGFuY2VvZiBSb3V0ZSwgJ0Nhbm5vdCBmaW5kIGEgcm91dGUgbmFtZWQgXCIlc1wiJywgdG8pO1xuXG4gICAgICAgICAgcGF0aCA9IHJvdXRlLnBhdGg7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUGF0aFV0aWxzLndpdGhRdWVyeShQYXRoVXRpbHMuaW5qZWN0UGFyYW1zKHBhdGgsIHBhcmFtcyksIHF1ZXJ5KTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogUmV0dXJucyBhIHN0cmluZyB0aGF0IG1heSBzYWZlbHkgYmUgdXNlZCBhcyB0aGUgaHJlZiBvZiBhIGxpbmtcbiAgICAgICAqIHRvIHRoZSByb3V0ZSB3aXRoIHRoZSBnaXZlbiBuYW1lLCBVUkwgcGFyYW1ldGVycywgYW5kIHF1ZXJ5LlxuICAgICAgICovXG4gICAgICBtYWtlSHJlZjogZnVuY3Rpb24gbWFrZUhyZWYodG8sIHBhcmFtcywgcXVlcnkpIHtcbiAgICAgICAgdmFyIHBhdGggPSBSb3V0ZXIubWFrZVBhdGgodG8sIHBhcmFtcywgcXVlcnkpO1xuICAgICAgICByZXR1cm4gbG9jYXRpb24gPT09IEhhc2hMb2NhdGlvbiA/ICcjJyArIHBhdGggOiBwYXRoO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBUcmFuc2l0aW9ucyB0byB0aGUgVVJMIHNwZWNpZmllZCBpbiB0aGUgYXJndW1lbnRzIGJ5IHB1c2hpbmdcbiAgICAgICAqIGEgbmV3IFVSTCBvbnRvIHRoZSBoaXN0b3J5IHN0YWNrLlxuICAgICAgICovXG4gICAgICB0cmFuc2l0aW9uVG86IGZ1bmN0aW9uIHRyYW5zaXRpb25Ubyh0bywgcGFyYW1zLCBxdWVyeSkge1xuICAgICAgICB2YXIgcGF0aCA9IFJvdXRlci5tYWtlUGF0aCh0bywgcGFyYW1zLCBxdWVyeSk7XG5cbiAgICAgICAgaWYgKHBlbmRpbmdUcmFuc2l0aW9uKSB7XG4gICAgICAgICAgLy8gUmVwbGFjZSBzbyBwZW5kaW5nIGxvY2F0aW9uIGRvZXMgbm90IHN0YXkgaW4gaGlzdG9yeS5cbiAgICAgICAgICBsb2NhdGlvbi5yZXBsYWNlKHBhdGgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxvY2F0aW9uLnB1c2gocGF0aCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVHJhbnNpdGlvbnMgdG8gdGhlIFVSTCBzcGVjaWZpZWQgaW4gdGhlIGFyZ3VtZW50cyBieSByZXBsYWNpbmdcbiAgICAgICAqIHRoZSBjdXJyZW50IFVSTCBpbiB0aGUgaGlzdG9yeSBzdGFjay5cbiAgICAgICAqL1xuICAgICAgcmVwbGFjZVdpdGg6IGZ1bmN0aW9uIHJlcGxhY2VXaXRoKHRvLCBwYXJhbXMsIHF1ZXJ5KSB7XG4gICAgICAgIGxvY2F0aW9uLnJlcGxhY2UoUm91dGVyLm1ha2VQYXRoKHRvLCBwYXJhbXMsIHF1ZXJ5KSk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRyYW5zaXRpb25zIHRvIHRoZSBwcmV2aW91cyBVUkwgaWYgb25lIGlzIGF2YWlsYWJsZS4gUmV0dXJucyB0cnVlIGlmIHRoZVxuICAgICAgICogcm91dGVyIHdhcyBhYmxlIHRvIGdvIGJhY2ssIGZhbHNlIG90aGVyd2lzZS5cbiAgICAgICAqXG4gICAgICAgKiBOb3RlOiBUaGUgcm91dGVyIG9ubHkgdHJhY2tzIGhpc3RvcnkgZW50cmllcyBpbiB5b3VyIGFwcGxpY2F0aW9uLCBub3QgdGhlXG4gICAgICAgKiBjdXJyZW50IGJyb3dzZXIgc2Vzc2lvbiwgc28geW91IGNhbiBzYWZlbHkgY2FsbCB0aGlzIGZ1bmN0aW9uIHdpdGhvdXQgZ3VhcmRpbmdcbiAgICAgICAqIGFnYWluc3Qgc2VuZGluZyB0aGUgdXNlciBiYWNrIHRvIHNvbWUgb3RoZXIgc2l0ZS4gSG93ZXZlciwgd2hlbiB1c2luZ1xuICAgICAgICogUmVmcmVzaExvY2F0aW9uICh3aGljaCBpcyB0aGUgZmFsbGJhY2sgZm9yIEhpc3RvcnlMb2NhdGlvbiBpbiBicm93c2VycyB0aGF0XG4gICAgICAgKiBkb24ndCBzdXBwb3J0IEhUTUw1IGhpc3RvcnkpIHRoaXMgbWV0aG9kIHdpbGwgKmFsd2F5cyogc2VuZCB0aGUgY2xpZW50IGJhY2tcbiAgICAgICAqIGJlY2F1c2Ugd2UgY2Fubm90IHJlbGlhYmx5IHRyYWNrIGhpc3RvcnkgbGVuZ3RoLlxuICAgICAgICovXG4gICAgICBnb0JhY2s6IGZ1bmN0aW9uIGdvQmFjaygpIHtcbiAgICAgICAgaWYgKEhpc3RvcnkubGVuZ3RoID4gMSB8fCBsb2NhdGlvbiA9PT0gUmVmcmVzaExvY2F0aW9uKSB7XG4gICAgICAgICAgbG9jYXRpb24ucG9wKCk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB3YXJuaW5nKGZhbHNlLCAnZ29CYWNrKCkgd2FzIGlnbm9yZWQgYmVjYXVzZSB0aGVyZSBpcyBubyByb3V0ZXIgaGlzdG9yeScpO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0sXG5cbiAgICAgIGhhbmRsZUFib3J0OiBvcHRpb25zLm9uQWJvcnQgfHwgZnVuY3Rpb24gKGFib3J0UmVhc29uKSB7XG4gICAgICAgIGlmIChsb2NhdGlvbiBpbnN0YW5jZW9mIFN0YXRpY0xvY2F0aW9uKSB0aHJvdyBuZXcgRXJyb3IoJ1VuaGFuZGxlZCBhYm9ydGVkIHRyYW5zaXRpb24hIFJlYXNvbjogJyArIGFib3J0UmVhc29uKTtcblxuICAgICAgICBpZiAoYWJvcnRSZWFzb24gaW5zdGFuY2VvZiBDYW5jZWxsYXRpb24pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAoYWJvcnRSZWFzb24gaW5zdGFuY2VvZiBSZWRpcmVjdCkge1xuICAgICAgICAgIGxvY2F0aW9uLnJlcGxhY2UoUm91dGVyLm1ha2VQYXRoKGFib3J0UmVhc29uLnRvLCBhYm9ydFJlYXNvbi5wYXJhbXMsIGFib3J0UmVhc29uLnF1ZXJ5KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbG9jYXRpb24ucG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIGhhbmRsZUVycm9yOiBvcHRpb25zLm9uRXJyb3IgfHwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIC8vIFRocm93IHNvIHdlIGRvbid0IHNpbGVudGx5IHN3YWxsb3cgYXN5bmMgZXJyb3JzLlxuICAgICAgICB0aHJvdyBlcnJvcjsgLy8gVGhpcyBlcnJvciBwcm9iYWJseSBvcmlnaW5hdGVkIGluIGEgdHJhbnNpdGlvbiBob29rLlxuICAgICAgfSxcblxuICAgICAgaGFuZGxlTG9jYXRpb25DaGFuZ2U6IGZ1bmN0aW9uIGhhbmRsZUxvY2F0aW9uQ2hhbmdlKGNoYW5nZSkge1xuICAgICAgICBSb3V0ZXIuZGlzcGF0Y2goY2hhbmdlLnBhdGgsIGNoYW5nZS50eXBlKTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogUGVyZm9ybXMgYSB0cmFuc2l0aW9uIHRvIHRoZSBnaXZlbiBwYXRoIGFuZCBjYWxscyBjYWxsYmFjayhlcnJvciwgYWJvcnRSZWFzb24pXG4gICAgICAgKiB3aGVuIHRoZSB0cmFuc2l0aW9uIGlzIGZpbmlzaGVkLiBJZiBib3RoIGFyZ3VtZW50cyBhcmUgbnVsbCB0aGUgcm91dGVyJ3Mgc3RhdGVcbiAgICAgICAqIHdhcyB1cGRhdGVkLiBPdGhlcndpc2UgdGhlIHRyYW5zaXRpb24gZGlkIG5vdCBjb21wbGV0ZS5cbiAgICAgICAqXG4gICAgICAgKiBJbiBhIHRyYW5zaXRpb24sIGEgcm91dGVyIGZpcnN0IGRldGVybWluZXMgd2hpY2ggcm91dGVzIGFyZSBpbnZvbHZlZCBieSBiZWdpbm5pbmdcbiAgICAgICAqIHdpdGggdGhlIGN1cnJlbnQgcm91dGUsIHVwIHRoZSByb3V0ZSB0cmVlIHRvIHRoZSBmaXJzdCBwYXJlbnQgcm91dGUgdGhhdCBpcyBzaGFyZWRcbiAgICAgICAqIHdpdGggdGhlIGRlc3RpbmF0aW9uIHJvdXRlLCBhbmQgYmFjayBkb3duIHRoZSB0cmVlIHRvIHRoZSBkZXN0aW5hdGlvbiByb3V0ZS4gVGhlXG4gICAgICAgKiB3aWxsVHJhbnNpdGlvbkZyb20gaG9vayBpcyBpbnZva2VkIG9uIGFsbCByb3V0ZSBoYW5kbGVycyB3ZSdyZSB0cmFuc2l0aW9uaW5nIGF3YXlcbiAgICAgICAqIGZyb20sIGluIHJldmVyc2UgbmVzdGluZyBvcmRlci4gTGlrZXdpc2UsIHRoZSB3aWxsVHJhbnNpdGlvblRvIGhvb2sgaXMgaW52b2tlZCBvblxuICAgICAgICogYWxsIHJvdXRlIGhhbmRsZXJzIHdlJ3JlIHRyYW5zaXRpb25pbmcgdG8uXG4gICAgICAgKlxuICAgICAgICogQm90aCB3aWxsVHJhbnNpdGlvbkZyb20gYW5kIHdpbGxUcmFuc2l0aW9uVG8gaG9va3MgbWF5IGVpdGhlciBhYm9ydCBvciByZWRpcmVjdCB0aGVcbiAgICAgICAqIHRyYW5zaXRpb24uIFRvIHJlc29sdmUgYXN5bmNocm9ub3VzbHksIHRoZXkgbWF5IHVzZSB0aGUgY2FsbGJhY2sgYXJndW1lbnQuIElmIG5vXG4gICAgICAgKiBob29rcyB3YWl0LCB0aGUgdHJhbnNpdGlvbiBpcyBmdWxseSBzeW5jaHJvbm91cy5cbiAgICAgICAqL1xuICAgICAgZGlzcGF0Y2g6IGZ1bmN0aW9uIGRpc3BhdGNoKHBhdGgsIGFjdGlvbikge1xuICAgICAgICBSb3V0ZXIuY2FuY2VsUGVuZGluZ1RyYW5zaXRpb24oKTtcblxuICAgICAgICB2YXIgcHJldlBhdGggPSBzdGF0ZS5wYXRoO1xuICAgICAgICB2YXIgaXNSZWZyZXNoaW5nID0gYWN0aW9uID09IG51bGw7XG5cbiAgICAgICAgaWYgKHByZXZQYXRoID09PSBwYXRoICYmICFpc1JlZnJlc2hpbmcpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gLy8gTm90aGluZyB0byBkbyFcblxuICAgICAgICAvLyBSZWNvcmQgdGhlIHNjcm9sbCBwb3NpdGlvbiBhcyBlYXJseSBhcyBwb3NzaWJsZSB0b1xuICAgICAgICAvLyBnZXQgaXQgYmVmb3JlIGJyb3dzZXJzIHRyeSB1cGRhdGUgaXQgYXV0b21hdGljYWxseS5cbiAgICAgICAgaWYgKHByZXZQYXRoICYmIGFjdGlvbiA9PT0gTG9jYXRpb25BY3Rpb25zLlBVU0gpIFJvdXRlci5yZWNvcmRTY3JvbGxQb3NpdGlvbihwcmV2UGF0aCk7XG5cbiAgICAgICAgdmFyIG1hdGNoID0gUm91dGVyLm1hdGNoKHBhdGgpO1xuXG4gICAgICAgIHdhcm5pbmcobWF0Y2ggIT0gbnVsbCwgJ05vIHJvdXRlIG1hdGNoZXMgcGF0aCBcIiVzXCIuIE1ha2Ugc3VyZSB5b3UgaGF2ZSA8Um91dGUgcGF0aD1cIiVzXCI+IHNvbWV3aGVyZSBpbiB5b3VyIHJvdXRlcycsIHBhdGgsIHBhdGgpO1xuXG4gICAgICAgIGlmIChtYXRjaCA9PSBudWxsKSBtYXRjaCA9IHt9O1xuXG4gICAgICAgIHZhciBwcmV2Um91dGVzID0gc3RhdGUucm91dGVzIHx8IFtdO1xuICAgICAgICB2YXIgcHJldlBhcmFtcyA9IHN0YXRlLnBhcmFtcyB8fCB7fTtcbiAgICAgICAgdmFyIHByZXZRdWVyeSA9IHN0YXRlLnF1ZXJ5IHx8IHt9O1xuXG4gICAgICAgIHZhciBuZXh0Um91dGVzID0gbWF0Y2gucm91dGVzIHx8IFtdO1xuICAgICAgICB2YXIgbmV4dFBhcmFtcyA9IG1hdGNoLnBhcmFtcyB8fCB7fTtcbiAgICAgICAgdmFyIG5leHRRdWVyeSA9IG1hdGNoLnF1ZXJ5IHx8IHt9O1xuXG4gICAgICAgIHZhciBmcm9tUm91dGVzLCB0b1JvdXRlcztcbiAgICAgICAgaWYgKHByZXZSb3V0ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgZnJvbVJvdXRlcyA9IHByZXZSb3V0ZXMuZmlsdGVyKGZ1bmN0aW9uIChyb3V0ZSkge1xuICAgICAgICAgICAgcmV0dXJuICFoYXNNYXRjaChuZXh0Um91dGVzLCByb3V0ZSwgcHJldlBhcmFtcywgbmV4dFBhcmFtcywgcHJldlF1ZXJ5LCBuZXh0UXVlcnkpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdG9Sb3V0ZXMgPSBuZXh0Um91dGVzLmZpbHRlcihmdW5jdGlvbiAocm91dGUpIHtcbiAgICAgICAgICAgIHJldHVybiAhaGFzTWF0Y2gocHJldlJvdXRlcywgcm91dGUsIHByZXZQYXJhbXMsIG5leHRQYXJhbXMsIHByZXZRdWVyeSwgbmV4dFF1ZXJ5KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmcm9tUm91dGVzID0gW107XG4gICAgICAgICAgdG9Sb3V0ZXMgPSBuZXh0Um91dGVzO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRyYW5zaXRpb24gPSBuZXcgVHJhbnNpdGlvbihwYXRoLCBSb3V0ZXIucmVwbGFjZVdpdGguYmluZChSb3V0ZXIsIHBhdGgpKTtcbiAgICAgICAgcGVuZGluZ1RyYW5zaXRpb24gPSB0cmFuc2l0aW9uO1xuXG4gICAgICAgIHZhciBmcm9tQ29tcG9uZW50cyA9IG1vdW50ZWRDb21wb25lbnRzLnNsaWNlKHByZXZSb3V0ZXMubGVuZ3RoIC0gZnJvbVJvdXRlcy5sZW5ndGgpO1xuXG4gICAgICAgIFRyYW5zaXRpb24uZnJvbSh0cmFuc2l0aW9uLCBmcm9tUm91dGVzLCBmcm9tQ29tcG9uZW50cywgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgaWYgKGVycm9yIHx8IHRyYW5zaXRpb24uYWJvcnRSZWFzb24pIHJldHVybiBkaXNwYXRjaEhhbmRsZXIuY2FsbChSb3V0ZXIsIGVycm9yLCB0cmFuc2l0aW9uKTsgLy8gTm8gbmVlZCB0byBjb250aW51ZS5cblxuICAgICAgICAgIFRyYW5zaXRpb24udG8odHJhbnNpdGlvbiwgdG9Sb3V0ZXMsIG5leHRQYXJhbXMsIG5leHRRdWVyeSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICBkaXNwYXRjaEhhbmRsZXIuY2FsbChSb3V0ZXIsIGVycm9yLCB0cmFuc2l0aW9uLCB7XG4gICAgICAgICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgICAgICAgIGFjdGlvbjogYWN0aW9uLFxuICAgICAgICAgICAgICBwYXRobmFtZTogbWF0Y2gucGF0aG5hbWUsXG4gICAgICAgICAgICAgIHJvdXRlczogbmV4dFJvdXRlcyxcbiAgICAgICAgICAgICAgcGFyYW1zOiBuZXh0UGFyYW1zLFxuICAgICAgICAgICAgICBxdWVyeTogbmV4dFF1ZXJ5XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFN0YXJ0cyB0aGlzIHJvdXRlciBhbmQgY2FsbHMgY2FsbGJhY2socm91dGVyLCBzdGF0ZSkgd2hlbiB0aGUgcm91dGUgY2hhbmdlcy5cbiAgICAgICAqXG4gICAgICAgKiBJZiB0aGUgcm91dGVyJ3MgbG9jYXRpb24gaXMgc3RhdGljIChpLmUuIGEgVVJMIHBhdGggaW4gYSBzZXJ2ZXIgZW52aXJvbm1lbnQpXG4gICAgICAgKiB0aGUgY2FsbGJhY2sgaXMgY2FsbGVkIG9ubHkgb25jZS4gT3RoZXJ3aXNlLCB0aGUgbG9jYXRpb24gc2hvdWxkIGJlIG9uZSBvZiB0aGVcbiAgICAgICAqIFJvdXRlci4qTG9jYXRpb24gb2JqZWN0cyAoZS5nLiBSb3V0ZXIuSGFzaExvY2F0aW9uIG9yIFJvdXRlci5IaXN0b3J5TG9jYXRpb24pLlxuICAgICAgICovXG4gICAgICBydW46IGZ1bmN0aW9uIHJ1bihjYWxsYmFjaykge1xuICAgICAgICBpbnZhcmlhbnQoIVJvdXRlci5pc1J1bm5pbmcsICdSb3V0ZXIgaXMgYWxyZWFkeSBydW5uaW5nJyk7XG5cbiAgICAgICAgZGlzcGF0Y2hIYW5kbGVyID0gZnVuY3Rpb24gKGVycm9yLCB0cmFuc2l0aW9uLCBuZXdTdGF0ZSkge1xuICAgICAgICAgIGlmIChlcnJvcikgUm91dGVyLmhhbmRsZUVycm9yKGVycm9yKTtcblxuICAgICAgICAgIGlmIChwZW5kaW5nVHJhbnNpdGlvbiAhPT0gdHJhbnNpdGlvbikgcmV0dXJuO1xuXG4gICAgICAgICAgcGVuZGluZ1RyYW5zaXRpb24gPSBudWxsO1xuXG4gICAgICAgICAgaWYgKHRyYW5zaXRpb24uYWJvcnRSZWFzb24pIHtcbiAgICAgICAgICAgIFJvdXRlci5oYW5kbGVBYm9ydCh0cmFuc2l0aW9uLmFib3J0UmVhc29uKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbChSb3V0ZXIsIFJvdXRlciwgbmV4dFN0YXRlID0gbmV3U3RhdGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoIShsb2NhdGlvbiBpbnN0YW5jZW9mIFN0YXRpY0xvY2F0aW9uKSkge1xuICAgICAgICAgIGlmIChsb2NhdGlvbi5hZGRDaGFuZ2VMaXN0ZW5lcikgbG9jYXRpb24uYWRkQ2hhbmdlTGlzdGVuZXIoUm91dGVyLmhhbmRsZUxvY2F0aW9uQ2hhbmdlKTtcblxuICAgICAgICAgIFJvdXRlci5pc1J1bm5pbmcgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQm9vdHN0cmFwIHVzaW5nIHRoZSBjdXJyZW50IHBhdGguXG4gICAgICAgIFJvdXRlci5yZWZyZXNoKCk7XG4gICAgICB9LFxuXG4gICAgICByZWZyZXNoOiBmdW5jdGlvbiByZWZyZXNoKCkge1xuICAgICAgICBSb3V0ZXIuZGlzcGF0Y2gobG9jYXRpb24uZ2V0Q3VycmVudFBhdGgoKSwgbnVsbCk7XG4gICAgICB9LFxuXG4gICAgICBzdG9wOiBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICBSb3V0ZXIuY2FuY2VsUGVuZGluZ1RyYW5zaXRpb24oKTtcblxuICAgICAgICBpZiAobG9jYXRpb24ucmVtb3ZlQ2hhbmdlTGlzdGVuZXIpIGxvY2F0aW9uLnJlbW92ZUNoYW5nZUxpc3RlbmVyKFJvdXRlci5oYW5kbGVMb2NhdGlvbkNoYW5nZSk7XG5cbiAgICAgICAgUm91dGVyLmlzUnVubmluZyA9IGZhbHNlO1xuICAgICAgfSxcblxuICAgICAgZ2V0TG9jYXRpb246IGZ1bmN0aW9uIGdldExvY2F0aW9uKCkge1xuICAgICAgICByZXR1cm4gbG9jYXRpb247XG4gICAgICB9LFxuXG4gICAgICBnZXRTY3JvbGxCZWhhdmlvcjogZnVuY3Rpb24gZ2V0U2Nyb2xsQmVoYXZpb3IoKSB7XG4gICAgICAgIHJldHVybiBzY3JvbGxCZWhhdmlvcjtcbiAgICAgIH0sXG5cbiAgICAgIGdldFJvdXRlQXREZXB0aDogZnVuY3Rpb24gZ2V0Um91dGVBdERlcHRoKHJvdXRlRGVwdGgpIHtcbiAgICAgICAgdmFyIHJvdXRlcyA9IHN0YXRlLnJvdXRlcztcbiAgICAgICAgcmV0dXJuIHJvdXRlcyAmJiByb3V0ZXNbcm91dGVEZXB0aF07XG4gICAgICB9LFxuXG4gICAgICBzZXRSb3V0ZUNvbXBvbmVudEF0RGVwdGg6IGZ1bmN0aW9uIHNldFJvdXRlQ29tcG9uZW50QXREZXB0aChyb3V0ZURlcHRoLCBjb21wb25lbnQpIHtcbiAgICAgICAgbW91bnRlZENvbXBvbmVudHNbcm91dGVEZXB0aF0gPSBjb21wb25lbnQ7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFJldHVybnMgdGhlIGN1cnJlbnQgVVJMIHBhdGggKyBxdWVyeSBzdHJpbmcuXG4gICAgICAgKi9cbiAgICAgIGdldEN1cnJlbnRQYXRoOiBmdW5jdGlvbiBnZXRDdXJyZW50UGF0aCgpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlLnBhdGg7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFJldHVybnMgdGhlIGN1cnJlbnQgVVJMIHBhdGggd2l0aG91dCB0aGUgcXVlcnkgc3RyaW5nLlxuICAgICAgICovXG4gICAgICBnZXRDdXJyZW50UGF0aG5hbWU6IGZ1bmN0aW9uIGdldEN1cnJlbnRQYXRobmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlLnBhdGhuYW1lO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBSZXR1cm5zIGFuIG9iamVjdCBvZiB0aGUgY3VycmVudGx5IGFjdGl2ZSBVUkwgcGFyYW1ldGVycy5cbiAgICAgICAqL1xuICAgICAgZ2V0Q3VycmVudFBhcmFtczogZnVuY3Rpb24gZ2V0Q3VycmVudFBhcmFtcygpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlLnBhcmFtcztcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogUmV0dXJucyBhbiBvYmplY3Qgb2YgdGhlIGN1cnJlbnRseSBhY3RpdmUgcXVlcnkgcGFyYW1ldGVycy5cbiAgICAgICAqL1xuICAgICAgZ2V0Q3VycmVudFF1ZXJ5OiBmdW5jdGlvbiBnZXRDdXJyZW50UXVlcnkoKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZS5xdWVyeTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogUmV0dXJucyBhbiBhcnJheSBvZiB0aGUgY3VycmVudGx5IGFjdGl2ZSByb3V0ZXMuXG4gICAgICAgKi9cbiAgICAgIGdldEN1cnJlbnRSb3V0ZXM6IGZ1bmN0aW9uIGdldEN1cnJlbnRSb3V0ZXMoKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZS5yb3V0ZXM7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gcm91dGUsIHBhcmFtcywgYW5kIHF1ZXJ5IGFyZSBhY3RpdmUuXG4gICAgICAgKi9cbiAgICAgIGlzQWN0aXZlOiBmdW5jdGlvbiBpc0FjdGl2ZSh0bywgcGFyYW1zLCBxdWVyeSkge1xuICAgICAgICBpZiAoUGF0aFV0aWxzLmlzQWJzb2x1dGUodG8pKSB7XG4gICAgICAgICAgcmV0dXJuIHRvID09PSBzdGF0ZS5wYXRoO1xuICAgICAgICB9cmV0dXJuIHJvdXRlSXNBY3RpdmUoc3RhdGUucm91dGVzLCB0bykgJiYgcGFyYW1zQXJlQWN0aXZlKHN0YXRlLnBhcmFtcywgcGFyYW1zKSAmJiAocXVlcnkgPT0gbnVsbCB8fCBxdWVyeUlzQWN0aXZlKHN0YXRlLnF1ZXJ5LCBxdWVyeSkpO1xuICAgICAgfVxuXG4gICAgfSxcblxuICAgIG1peGluczogW1Njcm9sbEhpc3RvcnldLFxuXG4gICAgcHJvcFR5cGVzOiB7XG4gICAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmZhbHN5XG4gICAgfSxcblxuICAgIGNoaWxkQ29udGV4dFR5cGVzOiB7XG4gICAgICByb3V0ZURlcHRoOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICByb3V0ZXI6IFByb3BUeXBlcy5yb3V0ZXIuaXNSZXF1aXJlZFxuICAgIH0sXG5cbiAgICBnZXRDaGlsZENvbnRleHQ6IGZ1bmN0aW9uIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJvdXRlRGVwdGg6IDEsXG4gICAgICAgIHJvdXRlcjogUm91dGVyXG4gICAgICB9O1xuICAgIH0sXG5cbiAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICAgIHJldHVybiBzdGF0ZSA9IG5leHRTdGF0ZTtcbiAgICB9LFxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcygpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUgPSBuZXh0U3RhdGUpO1xuICAgIH0sXG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBSb3V0ZXIuc3RvcCgpO1xuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciByb3V0ZSA9IFJvdXRlci5nZXRSb3V0ZUF0RGVwdGgoMCk7XG4gICAgICByZXR1cm4gcm91dGUgPyBSZWFjdC5jcmVhdGVFbGVtZW50KHJvdXRlLmhhbmRsZXIsIHRoaXMucHJvcHMpIDogbnVsbDtcbiAgICB9XG5cbiAgfSk7XG5cbiAgUm91dGVyLmNsZWFyQWxsUm91dGVzKCk7XG5cbiAgaWYgKG9wdGlvbnMucm91dGVzKSBSb3V0ZXIuYWRkUm91dGVzKG9wdGlvbnMucm91dGVzKTtcblxuICByZXR1cm4gUm91dGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVJvdXRlcjtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKCdfcHJvY2VzcycpKVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ6dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW01dlpHVmZiVzlrZFd4bGN5OXlaV0ZqZEMxeWIzVjBaWEl2YkdsaUwyTnlaV0YwWlZKdmRYUmxjaTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRWlMQ0ptYVd4bElqb2laMlZ1WlhKaGRHVmtMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4cUlHcHphR2x1ZENBdFZ6QTFPQ0FxTDF4dUozVnpaU0J6ZEhKcFkzUW5PMXh1WEc1MllYSWdVbVZoWTNRZ1BTQnlaWEYxYVhKbEtDZHlaV0ZqZENjcE8xeHVkbUZ5SUhkaGNtNXBibWNnUFNCeVpYRjFhWEpsS0NkeVpXRmpkQzlzYVdJdmQyRnlibWx1WnljcE8xeHVkbUZ5SUdsdWRtRnlhV0Z1ZENBOUlISmxjWFZwY21Vb0ozSmxZV04wTDJ4cFlpOXBiblpoY21saGJuUW5LVHRjYm5aaGNpQmpZVzVWYzJWRVQwMGdQU0J5WlhGMWFYSmxLQ2R5WldGamRDOXNhV0l2UlhobFkzVjBhVzl1Ulc1MmFYSnZibTFsYm5RbktTNWpZVzVWYzJWRVQwMDdYRzUyWVhJZ1RHOWpZWFJwYjI1QlkzUnBiMjV6SUQwZ2NtVnhkV2x5WlNnbkxpOWhZM1JwYjI1ekwweHZZMkYwYVc5dVFXTjBhVzl1Y3ljcE8xeHVkbUZ5SUVsdGFYUmhkR1ZDY205M2MyVnlRbVZvWVhacGIzSWdQU0J5WlhGMWFYSmxLQ2N1TDJKbGFHRjJhVzl5Y3k5SmJXbDBZWFJsUW5KdmQzTmxja0psYUdGMmFXOXlKeWs3WEc1MllYSWdTR0Z6YUV4dlkyRjBhVzl1SUQwZ2NtVnhkV2x5WlNnbkxpOXNiMk5oZEdsdmJuTXZTR0Z6YUV4dlkyRjBhVzl1SnlrN1hHNTJZWElnU0dsemRHOXllVXh2WTJGMGFXOXVJRDBnY21WeGRXbHlaU2duTGk5c2IyTmhkR2x2Ym5NdlNHbHpkRzl5ZVV4dlkyRjBhVzl1SnlrN1hHNTJZWElnVW1WbWNtVnphRXh2WTJGMGFXOXVJRDBnY21WeGRXbHlaU2duTGk5c2IyTmhkR2x2Ym5NdlVtVm1jbVZ6YUV4dlkyRjBhVzl1SnlrN1hHNTJZWElnVTNSaGRHbGpURzlqWVhScGIyNGdQU0J5WlhGMWFYSmxLQ2N1TDJ4dlkyRjBhVzl1Y3k5VGRHRjBhV05NYjJOaGRHbHZiaWNwTzF4dWRtRnlJRk5qY205c2JFaHBjM1J2Y25rZ1BTQnlaWEYxYVhKbEtDY3VMMU5qY205c2JFaHBjM1J2Y25rbktUdGNiblpoY2lCamNtVmhkR1ZTYjNWMFpYTkdjbTl0VW1WaFkzUkRhR2xzWkhKbGJpQTlJSEpsY1hWcGNtVW9KeTR2WTNKbFlYUmxVbTkxZEdWelJuSnZiVkpsWVdOMFEyaHBiR1J5Wlc0bktUdGNiblpoY2lCcGMxSmxZV04wUTJocGJHUnlaVzRnUFNCeVpYRjFhWEpsS0NjdUwybHpVbVZoWTNSRGFHbHNaSEpsYmljcE8xeHVkbUZ5SUZSeVlXNXphWFJwYjI0Z1BTQnlaWEYxYVhKbEtDY3VMMVJ5WVc1emFYUnBiMjRuS1R0Y2JuWmhjaUJRY205d1ZIbHdaWE1nUFNCeVpYRjFhWEpsS0NjdUwxQnliM0JVZVhCbGN5Y3BPMXh1ZG1GeUlGSmxaR2x5WldOMElEMGdjbVZ4ZFdseVpTZ25MaTlTWldScGNtVmpkQ2NwTzF4dWRtRnlJRWhwYzNSdmNua2dQU0J5WlhGMWFYSmxLQ2N1TDBocGMzUnZjbmtuS1R0Y2JuWmhjaUJEWVc1alpXeHNZWFJwYjI0Z1BTQnlaWEYxYVhKbEtDY3VMME5oYm1ObGJHeGhkR2x2YmljcE8xeHVkbUZ5SUUxaGRHTm9JRDBnY21WeGRXbHlaU2duTGk5TllYUmphQ2NwTzF4dWRtRnlJRkp2ZFhSbElEMGdjbVZ4ZFdseVpTZ25MaTlTYjNWMFpTY3BPMXh1ZG1GeUlITjFjSEJ2Y25SelNHbHpkRzl5ZVNBOUlISmxjWFZwY21Vb0p5NHZjM1Z3Y0c5eWRITklhWE4wYjNKNUp5azdYRzUyWVhJZ1VHRjBhRlYwYVd4eklEMGdjbVZ4ZFdseVpTZ25MaTlRWVhSb1ZYUnBiSE1uS1R0Y2JseHVMeW9xWEc0Z0tpQlVhR1VnWkdWbVlYVnNkQ0JzYjJOaGRHbHZiaUJtYjNJZ2JtVjNJSEp2ZFhSbGNuTXVYRzRnS2k5Y2JuWmhjaUJFUlVaQlZVeFVYMHhQUTBGVVNVOU9JRDBnWTJGdVZYTmxSRTlOSUQ4Z1NHRnphRXh2WTJGMGFXOXVJRG9nSnk4bk8xeHVYRzR2S2lwY2JpQXFJRlJvWlNCa1pXWmhkV3gwSUhOamNtOXNiQ0JpWldoaGRtbHZjaUJtYjNJZ2JtVjNJSEp2ZFhSbGNuTXVYRzRnS2k5Y2JuWmhjaUJFUlVaQlZVeFVYMU5EVWs5TVRGOUNSVWhCVmtsUFVpQTlJR05oYmxWelpVUlBUU0EvSUVsdGFYUmhkR1ZDY205M2MyVnlRbVZvWVhacGIzSWdPaUJ1ZFd4c08xeHVYRzVtZFc1amRHbHZiaUJvWVhOUWNtOXdaWEowYVdWektHOWlhbVZqZEN3Z2NISnZjR1Z5ZEdsbGN5a2dlMXh1SUNCbWIzSWdLSFpoY2lCd2NtOXdaWEowZVU1aGJXVWdhVzRnY0hKdmNHVnlkR2xsY3lrZ2FXWWdLSEJ5YjNCbGNuUnBaWE11YUdGelQzZHVVSEp2Y0dWeWRIa29jSEp2Y0dWeWRIbE9ZVzFsS1NBbUppQnZZbXBsWTNSYmNISnZjR1Z5ZEhsT1lXMWxYU0FoUFQwZ2NISnZjR1Z5ZEdsbGMxdHdjbTl3WlhKMGVVNWhiV1ZkS1NCN1hHNGdJQ0FnY21WMGRYSnVJR1poYkhObE8xeHVJQ0I5Y21WMGRYSnVJSFJ5ZFdVN1hHNTlYRzVjYm1aMWJtTjBhVzl1SUdoaGMwMWhkR05vS0hKdmRYUmxjeXdnY205MWRHVXNJSEJ5WlhaUVlYSmhiWE1zSUc1bGVIUlFZWEpoYlhNc0lIQnlaWFpSZFdWeWVTd2dibVY0ZEZGMVpYSjVLU0I3WEc0Z0lISmxkSFZ5YmlCeWIzVjBaWE11YzI5dFpTaG1kVzVqZEdsdmJpQW9jaWtnZTF4dUlDQWdJR2xtSUNoeUlDRTlQU0J5YjNWMFpTa2djbVYwZFhKdUlHWmhiSE5sTzF4dVhHNGdJQ0FnZG1GeUlIQmhjbUZ0VG1GdFpYTWdQU0J5YjNWMFpTNXdZWEpoYlU1aGJXVnpPMXh1SUNBZ0lIWmhjaUJ3WVhKaGJVNWhiV1U3WEc1Y2JpQWdJQ0F2THlCRmJuTjFjbVVnZEdoaGRDQmhiR3dnY0dGeVlXMXpJSFJvWlNCeWIzVjBaU0JqWVhKbGN5QmhZbTkxZENCa2FXUWdibTkwSUdOb1lXNW5aUzVjYmlBZ0lDQm1iM0lnS0haaGNpQnBJRDBnTUN3Z2JHVnVJRDBnY0dGeVlXMU9ZVzFsY3k1c1pXNW5kR2c3SUdrZ1BDQnNaVzQ3SUNzcmFTa2dlMXh1SUNBZ0lDQWdjR0Z5WVcxT1lXMWxJRDBnY0dGeVlXMU9ZVzFsYzF0cFhUdGNibHh1SUNBZ0lDQWdhV1lnS0c1bGVIUlFZWEpoYlhOYmNHRnlZVzFPWVcxbFhTQWhQVDBnY0hKbGRsQmhjbUZ0YzF0d1lYSmhiVTVoYldWZEtTQnlaWFIxY200Z1ptRnNjMlU3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeThnUlc1emRYSmxJSFJvWlNCeGRXVnllU0JvWVhOdUozUWdZMmhoYm1kbFpDNWNiaUFnSUNCeVpYUjFjbTRnYUdGelVISnZjR1Z5ZEdsbGN5aHdjbVYyVVhWbGNua3NJRzVsZUhSUmRXVnllU2tnSmlZZ2FHRnpVSEp2Y0dWeWRHbGxjeWh1WlhoMFVYVmxjbmtzSUhCeVpYWlJkV1Z5ZVNrN1hHNGdJSDBwTzF4dWZWeHVYRzVtZFc1amRHbHZiaUJoWkdSU2IzVjBaWE5VYjA1aGJXVmtVbTkxZEdWektISnZkWFJsY3l3Z2JtRnRaV1JTYjNWMFpYTXBJSHRjYmlBZ2RtRnlJSEp2ZFhSbE8xeHVJQ0JtYjNJZ0tIWmhjaUJwSUQwZ01Dd2diR1Z1SUQwZ2NtOTFkR1Z6TG14bGJtZDBhRHNnYVNBOElHeGxianNnS3l0cEtTQjdYRzRnSUNBZ2NtOTFkR1VnUFNCeWIzVjBaWE5iYVYwN1hHNWNiaUFnSUNCcFppQW9jbTkxZEdVdWJtRnRaU2tnZTF4dUlDQWdJQ0FnYVc1MllYSnBZVzUwS0c1aGJXVmtVbTkxZEdWelczSnZkWFJsTG01aGJXVmRJRDA5SUc1MWJHd3NJQ2RaYjNVZ2JXRjVJRzV2ZENCb1lYWmxJRzF2Y21VZ2RHaGhiaUJ2Ym1VZ2NtOTFkR1VnYm1GdFpXUWdYQ0lsYzF3aUp5d2djbTkxZEdVdWJtRnRaU2s3WEc1Y2JpQWdJQ0FnSUc1aGJXVmtVbTkxZEdWelczSnZkWFJsTG01aGJXVmRJRDBnY205MWRHVTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2FXWWdLSEp2ZFhSbExtTm9hV3hrVW05MWRHVnpLU0JoWkdSU2IzVjBaWE5VYjA1aGJXVmtVbTkxZEdWektISnZkWFJsTG1Ob2FXeGtVbTkxZEdWekxDQnVZVzFsWkZKdmRYUmxjeWs3WEc0Z0lIMWNibjFjYmx4dVpuVnVZM1JwYjI0Z2NtOTFkR1ZKYzBGamRHbDJaU2hoWTNScGRtVlNiM1YwWlhNc0lISnZkWFJsVG1GdFpTa2dlMXh1SUNCeVpYUjFjbTRnWVdOMGFYWmxVbTkxZEdWekxuTnZiV1VvWm5WdVkzUnBiMjRnS0hKdmRYUmxLU0I3WEc0Z0lDQWdjbVYwZFhKdUlISnZkWFJsTG01aGJXVWdQVDA5SUhKdmRYUmxUbUZ0WlR0Y2JpQWdmU2s3WEc1OVhHNWNibVoxYm1OMGFXOXVJSEJoY21GdGMwRnlaVUZqZEdsMlpTaGhZM1JwZG1WUVlYSmhiWE1zSUhCaGNtRnRjeWtnZTF4dUlDQm1iM0lnS0haaGNpQndjbTl3WlhKMGVTQnBiaUJ3WVhKaGJYTXBJR2xtSUNoVGRISnBibWNvWVdOMGFYWmxVR0Z5WVcxelczQnliM0JsY25SNVhTa2dJVDA5SUZOMGNtbHVaeWh3WVhKaGJYTmJjSEp2Y0dWeWRIbGRLU2tnZTF4dUlDQWdJSEpsZEhWeWJpQm1ZV3h6WlR0Y2JpQWdmWEpsZEhWeWJpQjBjblZsTzF4dWZWeHVYRzVtZFc1amRHbHZiaUJ4ZFdWeWVVbHpRV04wYVhabEtHRmpkR2wyWlZGMVpYSjVMQ0J4ZFdWeWVTa2dlMXh1SUNCbWIzSWdLSFpoY2lCd2NtOXdaWEowZVNCcGJpQnhkV1Z5ZVNrZ2FXWWdLRk4wY21sdVp5aGhZM1JwZG1WUmRXVnllVnR3Y205d1pYSjBlVjBwSUNFOVBTQlRkSEpwYm1jb2NYVmxjbmxiY0hKdmNHVnlkSGxkS1NrZ2UxeHVJQ0FnSUhKbGRIVnliaUJtWVd4elpUdGNiaUFnZlhKbGRIVnliaUIwY25WbE8xeHVmVnh1WEc0dktpcGNiaUFxSUVOeVpXRjBaWE1nWVc1a0lISmxkSFZ5Ym5NZ1lTQnVaWGNnY205MWRHVnlJSFZ6YVc1bklIUm9aU0JuYVhabGJpQnZjSFJwYjI1ekxpQkJJSEp2ZFhSbGNseHVJQ29nYVhNZ1lTQlNaV0ZqZEVOdmJYQnZibVZ1ZENCamJHRnpjeUIwYUdGMElHdHViM2R6SUdodmR5QjBieUJ5WldGamRDQjBieUJqYUdGdVoyVnpJR2x1SUhSb1pWeHVJQ29nVlZKTUlHRnVaQ0JyWldWd0lIUm9aU0JqYjI1MFpXNTBjeUJ2WmlCMGFHVWdjR0ZuWlNCcGJpQnplVzVqTGx4dUlDcGNiaUFxSUU5d2RHbHZibk1nYldGNUlHSmxJR0Z1ZVNCdlppQjBhR1VnWm05c2JHOTNhVzVuT2x4dUlDcGNiaUFxSUMwZ2NtOTFkR1Z6SUNBZ0lDQWdJQ0FnSUNBb2NtVnhkV2x5WldRcElGUm9aU0J5YjNWMFpTQmpiMjVtYVdkY2JpQXFJQzBnYkc5allYUnBiMjRnSUNBZ0lDQWdJQ0JVYUdVZ2JHOWpZWFJwYjI0Z2RHOGdkWE5sTGlCRVpXWmhkV3gwY3lCMGJ5QklZWE5vVEc5allYUnBiMjRnZDJobGJseHVJQ29nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb1pTQkVUMDBnYVhNZ1lYWmhhV3hoWW14bExDQmNJaTljSWlCdmRHaGxjbmRwYzJWY2JpQXFJQzBnYzJOeWIyeHNRbVZvWVhacGIzSWdJQ0JVYUdVZ2MyTnliMnhzSUdKbGFHRjJhVzl5SUhSdklIVnpaUzRnUkdWbVlYVnNkSE1nZEc4Z1NXMXBkR0YwWlVKeWIzZHpaWEpDWldoaGRtbHZjbHh1SUNvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIZG9aVzRnZEdobElFUlBUU0JwY3lCaGRtRnBiR0ZpYkdVc0lHNTFiR3dnYjNSb1pYSjNhWE5sWEc0Z0tpQXRJRzl1UlhKeWIzSWdJQ0FnSUNBZ0lDQWdRU0JtZFc1amRHbHZiaUIwYUdGMElHbHpJSFZ6WldRZ2RHOGdhR0Z1Wkd4bElHVnljbTl5YzF4dUlDb2dMU0J2YmtGaWIzSjBJQ0FnSUNBZ0lDQWdJRUVnWm5WdVkzUnBiMjRnZEdoaGRDQnBjeUIxYzJWa0lIUnZJR2hoYm1Sc1pTQmhZbTl5ZEdWa0lIUnlZVzV6YVhScGIyNXpYRzRnS2x4dUlDb2dWMmhsYmlCeVpXNWtaWEpwYm1jZ2FXNGdZU0J6WlhKMlpYSXRjMmxrWlNCbGJuWnBjbTl1YldWdWRDd2dkR2hsSUd4dlkyRjBhVzl1SUhOb2IzVnNaQ0J6YVcxd2JIbGNiaUFxSUdKbElIUm9aU0JWVWt3Z2NHRjBhQ0IwYUdGMElIZGhjeUIxYzJWa0lHbHVJSFJvWlNCeVpYRjFaWE4wTENCcGJtTnNkV1JwYm1jZ2RHaGxJSEYxWlhKNUlITjBjbWx1Wnk1Y2JpQXFMMXh1Wm5WdVkzUnBiMjRnWTNKbFlYUmxVbTkxZEdWeUtHOXdkR2x2Ym5NcElIdGNiaUFnYjNCMGFXOXVjeUE5SUc5d2RHbHZibk1nZkh3Z2UzMDdYRzVjYmlBZ2FXWWdLR2x6VW1WaFkzUkRhR2xzWkhKbGJpaHZjSFJwYjI1ektTa2diM0IwYVc5dWN5QTlJSHNnY205MWRHVnpPaUJ2Y0hScGIyNXpJSDA3WEc1Y2JpQWdkbUZ5SUcxdmRXNTBaV1JEYjIxd2IyNWxiblJ6SUQwZ1cxMDdYRzRnSUhaaGNpQnNiMk5oZEdsdmJpQTlJRzl3ZEdsdmJuTXViRzlqWVhScGIyNGdmSHdnUkVWR1FWVk1WRjlNVDBOQlZFbFBUanRjYmlBZ2RtRnlJSE5qY205c2JFSmxhR0YyYVc5eUlEMGdiM0IwYVc5dWN5NXpZM0p2Ykd4Q1pXaGhkbWx2Y2lCOGZDQkVSVVpCVlV4VVgxTkRVazlNVEY5Q1JVaEJWa2xQVWp0Y2JpQWdkbUZ5SUhOMFlYUmxJRDBnZTMwN1hHNGdJSFpoY2lCdVpYaDBVM1JoZEdVZ1BTQjdmVHRjYmlBZ2RtRnlJSEJsYm1ScGJtZFVjbUZ1YzJsMGFXOXVJRDBnYm5Wc2JEdGNiaUFnZG1GeUlHUnBjM0JoZEdOb1NHRnVaR3hsY2lBOUlHNTFiR3c3WEc1Y2JpQWdhV1lnS0hSNWNHVnZaaUJzYjJOaGRHbHZiaUE5UFQwZ0ozTjBjbWx1WnljcElHeHZZMkYwYVc5dUlEMGdibVYzSUZOMFlYUnBZMHh2WTJGMGFXOXVLR3h2WTJGMGFXOXVLVHRjYmx4dUlDQnBaaUFvYkc5allYUnBiMjRnYVc1emRHRnVZMlZ2WmlCVGRHRjBhV05NYjJOaGRHbHZiaWtnZTF4dUlDQWdJSGRoY201cGJtY29JV05oYmxWelpVUlBUU0I4ZkNCd2NtOWpaWE56TG1WdWRpNU9UMFJGWDBWT1ZpQTlQVDBnSjNSbGMzUW5MQ0FuV1c5MUlITm9iM1ZzWkNCdWIzUWdkWE5sSUdFZ2MzUmhkR2xqSUd4dlkyRjBhVzl1SUdsdUlHRWdSRTlOSUdWdWRtbHliMjV0Wlc1MElHSmxZMkYxYzJVZ0p5QXJJQ2QwYUdVZ2NtOTFkR1Z5SUhkcGJHd2dibTkwSUdKbElHdGxjSFFnYVc0Z2MzbHVZeUIzYVhSb0lIUm9aU0JqZFhKeVpXNTBJRlZTVENjcE8xeHVJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lHbHVkbUZ5YVdGdWRDaGpZVzVWYzJWRVQwMGdmSHdnYkc5allYUnBiMjR1Ym1WbFpITkVUMDBnUFQwOUlHWmhiSE5sTENBbldXOTFJR05oYm01dmRDQjFjMlVnSlhNZ2QybDBhRzkxZENCaElFUlBUU2NzSUd4dlkyRjBhVzl1S1R0Y2JpQWdmVnh1WEc0Z0lDOHZJRUYxZEc5dFlYUnBZMkZzYkhrZ1ptRnNiQ0JpWVdOcklIUnZJR1oxYkd3Z2NHRm5aU0J5WldaeVpYTm9aWE1nYVc1Y2JpQWdMeThnWW5KdmQzTmxjbk1nZEdoaGRDQmtiMjRuZENCemRYQndiM0owSUhSb1pTQklWRTFNSUdocGMzUnZjbmtnUVZCSkxseHVJQ0JwWmlBb2JHOWpZWFJwYjI0Z1BUMDlJRWhwYzNSdmNubE1iMk5oZEdsdmJpQW1KaUFoYzNWd2NHOXlkSE5JYVhOMGIzSjVLQ2twSUd4dlkyRjBhVzl1SUQwZ1VtVm1jbVZ6YUV4dlkyRjBhVzl1TzF4dVhHNGdJSFpoY2lCU2IzVjBaWElnUFNCU1pXRmpkQzVqY21WaGRHVkRiR0Z6Y3loN1hHNWNiaUFnSUNCa2FYTndiR0Y1VG1GdFpUb2dKMUp2ZFhSbGNpY3NYRzVjYmlBZ0lDQnpkR0YwYVdOek9pQjdYRzVjYmlBZ0lDQWdJR2x6VW5WdWJtbHVaem9nWm1Gc2MyVXNYRzVjYmlBZ0lDQWdJR05oYm1ObGJGQmxibVJwYm1kVWNtRnVjMmwwYVc5dU9pQm1kVzVqZEdsdmJpQmpZVzVqWld4UVpXNWthVzVuVkhKaGJuTnBkR2x2YmlncElIdGNiaUFnSUNBZ0lDQWdhV1lnS0hCbGJtUnBibWRVY21GdWMybDBhVzl1S1NCN1hHNGdJQ0FnSUNBZ0lDQWdjR1Z1WkdsdVoxUnlZVzV6YVhScGIyNHVZMkZ1WTJWc0tDazdYRzRnSUNBZ0lDQWdJQ0FnY0dWdVpHbHVaMVJ5WVc1emFYUnBiMjRnUFNCdWRXeHNPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0I5TEZ4dVhHNGdJQ0FnSUNCamJHVmhja0ZzYkZKdmRYUmxjem9nWm5WdVkzUnBiMjRnWTJ4bFlYSkJiR3hTYjNWMFpYTW9LU0I3WEc0Z0lDQWdJQ0FnSUZKdmRYUmxjaTVqWVc1alpXeFFaVzVrYVc1blZISmhibk5wZEdsdmJpZ3BPMXh1SUNBZ0lDQWdJQ0JTYjNWMFpYSXVibUZ0WldSU2IzVjBaWE1nUFNCN2ZUdGNiaUFnSUNBZ0lDQWdVbTkxZEdWeUxuSnZkWFJsY3lBOUlGdGRPMXh1SUNBZ0lDQWdmU3hjYmx4dUlDQWdJQ0FnTHlvcVhHNGdJQ0FnSUNBZ0tpQkJaR1J6SUhKdmRYUmxjeUIwYnlCMGFHbHpJSEp2ZFhSbGNpQm1jbTl0SUhSb1pTQm5hWFpsYmlCamFHbHNaSEpsYmlCdlltcGxZM1FnS0hObFpTQlNaV0ZqZEVOb2FXeGtjbVZ1S1M1Y2JpQWdJQ0FnSUNBcUwxeHVJQ0FnSUNBZ1lXUmtVbTkxZEdWek9pQm1kVzVqZEdsdmJpQmhaR1JTYjNWMFpYTW9jbTkxZEdWektTQjdYRzRnSUNBZ0lDQWdJR2xtSUNocGMxSmxZV04wUTJocGJHUnlaVzRvY205MWRHVnpLU2tnY205MWRHVnpJRDBnWTNKbFlYUmxVbTkxZEdWelJuSnZiVkpsWVdOMFEyaHBiR1J5Wlc0b2NtOTFkR1Z6S1R0Y2JseHVJQ0FnSUNBZ0lDQmhaR1JTYjNWMFpYTlViMDVoYldWa1VtOTFkR1Z6S0hKdmRYUmxjeXdnVW05MWRHVnlMbTVoYldWa1VtOTFkR1Z6S1R0Y2JseHVJQ0FnSUNBZ0lDQlNiM1YwWlhJdWNtOTFkR1Z6TG5CMWMyZ3VZWEJ3Ykhrb1VtOTFkR1Z5TG5KdmRYUmxjeXdnY205MWRHVnpLVHRjYmlBZ0lDQWdJSDBzWEc1Y2JpQWdJQ0FnSUM4cUtseHVJQ0FnSUNBZ0lDb2dVbVZ3YkdGalpYTWdjbTkxZEdWeklHOW1JSFJvYVhNZ2NtOTFkR1Z5SUdaeWIyMGdkR2hsSUdkcGRtVnVJR05vYVd4a2NtVnVJRzlpYW1WamRDQW9jMlZsSUZKbFlXTjBRMmhwYkdSeVpXNHBMbHh1SUNBZ0lDQWdJQ292WEc0Z0lDQWdJQ0J5WlhCc1lXTmxVbTkxZEdWek9pQm1kVzVqZEdsdmJpQnlaWEJzWVdObFVtOTFkR1Z6S0hKdmRYUmxjeWtnZTF4dUlDQWdJQ0FnSUNCU2IzVjBaWEl1WTJ4bFlYSkJiR3hTYjNWMFpYTW9LVHRjYmlBZ0lDQWdJQ0FnVW05MWRHVnlMbUZrWkZKdmRYUmxjeWh5YjNWMFpYTXBPMXh1SUNBZ0lDQWdJQ0JTYjNWMFpYSXVjbVZtY21WemFDZ3BPMXh1SUNBZ0lDQWdmU3hjYmx4dUlDQWdJQ0FnTHlvcVhHNGdJQ0FnSUNBZ0tpQlFaWEptYjNKdGN5QmhJRzFoZEdOb0lHOW1JSFJvWlNCbmFYWmxiaUJ3WVhSb0lHRm5ZV2x1YzNRZ2RHaHBjeUJ5YjNWMFpYSWdZVzVrSUhKbGRIVnlibk1nWVc0Z2IySnFaV04wWEc0Z0lDQWdJQ0FnS2lCM2FYUm9JSFJvWlNCN0lISnZkWFJsY3l3Z2NHRnlZVzF6TENCd1lYUm9ibUZ0WlN3Z2NYVmxjbmtnZlNCMGFHRjBJRzFoZEdOb0xpQlNaWFIxY201eklHNTFiR3dnYVdZZ2JtOWNiaUFnSUNBZ0lDQXFJRzFoZEdOb0lHTmhiaUJpWlNCdFlXUmxMbHh1SUNBZ0lDQWdJQ292WEc0Z0lDQWdJQ0J0WVhSamFEb2dablZ1WTNScGIyNGdiV0YwWTJnb2NHRjBhQ2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnVFdGMFkyZ3VabWx1WkUxaGRHTm9LRkp2ZFhSbGNpNXliM1YwWlhNc0lIQmhkR2dwTzF4dUlDQWdJQ0FnZlN4Y2JseHVJQ0FnSUNBZ0x5b3FYRzRnSUNBZ0lDQWdLaUJTWlhSMWNtNXpJR0Z1SUdGaWMyOXNkWFJsSUZWU1RDQndZWFJvSUdOeVpXRjBaV1FnWm5KdmJTQjBhR1VnWjJsMlpXNGdjbTkxZEdWY2JpQWdJQ0FnSUNBcUlHNWhiV1VzSUZWU1RDQndZWEpoYldWMFpYSnpMQ0JoYm1RZ2NYVmxjbmt1WEc0Z0lDQWdJQ0FnS2k5Y2JpQWdJQ0FnSUcxaGEyVlFZWFJvT2lCbWRXNWpkR2x2YmlCdFlXdGxVR0YwYUNoMGJ5d2djR0Z5WVcxekxDQnhkV1Z5ZVNrZ2UxeHVJQ0FnSUNBZ0lDQjJZWElnY0dGMGFEdGNiaUFnSUNBZ0lDQWdhV1lnS0ZCaGRHaFZkR2xzY3k1cGMwRmljMjlzZFhSbEtIUnZLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lIQmhkR2dnUFNCMGJ6dGNiaUFnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0IyWVhJZ2NtOTFkR1VnUFNCMGJ5QnBibk4wWVc1alpXOW1JRkp2ZFhSbElEOGdkRzhnT2lCU2IzVjBaWEl1Ym1GdFpXUlNiM1YwWlhOYmRHOWRPMXh1WEc0Z0lDQWdJQ0FnSUNBZ2FXNTJZWEpwWVc1MEtISnZkWFJsSUdsdWMzUmhibU5sYjJZZ1VtOTFkR1VzSUNkRFlXNXViM1FnWm1sdVpDQmhJSEp2ZFhSbElHNWhiV1ZrSUZ3aUpYTmNJaWNzSUhSdktUdGNibHh1SUNBZ0lDQWdJQ0FnSUhCaGRHZ2dQU0J5YjNWMFpTNXdZWFJvTzF4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlGQmhkR2hWZEdsc2N5NTNhWFJvVVhWbGNua29VR0YwYUZWMGFXeHpMbWx1YW1WamRGQmhjbUZ0Y3lod1lYUm9MQ0J3WVhKaGJYTXBMQ0J4ZFdWeWVTazdYRzRnSUNBZ0lDQjlMRnh1WEc0Z0lDQWdJQ0F2S2lwY2JpQWdJQ0FnSUNBcUlGSmxkSFZ5Ym5NZ1lTQnpkSEpwYm1jZ2RHaGhkQ0J0WVhrZ2MyRm1aV3g1SUdKbElIVnpaV1FnWVhNZ2RHaGxJR2h5WldZZ2IyWWdZU0JzYVc1clhHNGdJQ0FnSUNBZ0tpQjBieUIwYUdVZ2NtOTFkR1VnZDJsMGFDQjBhR1VnWjJsMlpXNGdibUZ0WlN3Z1ZWSk1JSEJoY21GdFpYUmxjbk1zSUdGdVpDQnhkV1Z5ZVM1Y2JpQWdJQ0FnSUNBcUwxeHVJQ0FnSUNBZ2JXRnJaVWh5WldZNklHWjFibU4wYVc5dUlHMWhhMlZJY21WbUtIUnZMQ0J3WVhKaGJYTXNJSEYxWlhKNUtTQjdYRzRnSUNBZ0lDQWdJSFpoY2lCd1lYUm9JRDBnVW05MWRHVnlMbTFoYTJWUVlYUm9LSFJ2TENCd1lYSmhiWE1zSUhGMVpYSjVLVHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR3h2WTJGMGFXOXVJRDA5UFNCSVlYTm9URzlqWVhScGIyNGdQeUFuSXljZ0t5QndZWFJvSURvZ2NHRjBhRHRjYmlBZ0lDQWdJSDBzWEc1Y2JpQWdJQ0FnSUM4cUtseHVJQ0FnSUNBZ0lDb2dWSEpoYm5OcGRHbHZibk1nZEc4Z2RHaGxJRlZTVENCemNHVmphV1pwWldRZ2FXNGdkR2hsSUdGeVozVnRaVzUwY3lCaWVTQndkWE5vYVc1blhHNGdJQ0FnSUNBZ0tpQmhJRzVsZHlCVlVrd2diMjUwYnlCMGFHVWdhR2x6ZEc5eWVTQnpkR0ZqYXk1Y2JpQWdJQ0FnSUNBcUwxeHVJQ0FnSUNBZ2RISmhibk5wZEdsdmJsUnZPaUJtZFc1amRHbHZiaUIwY21GdWMybDBhVzl1Vkc4b2RHOHNJSEJoY21GdGN5d2djWFZsY25rcElIdGNiaUFnSUNBZ0lDQWdkbUZ5SUhCaGRHZ2dQU0JTYjNWMFpYSXViV0ZyWlZCaGRHZ29kRzhzSUhCaGNtRnRjeXdnY1hWbGNua3BPMXh1WEc0Z0lDQWdJQ0FnSUdsbUlDaHdaVzVrYVc1blZISmhibk5wZEdsdmJpa2dlMXh1SUNBZ0lDQWdJQ0FnSUM4dklGSmxjR3hoWTJVZ2MyOGdjR1Z1WkdsdVp5QnNiMk5oZEdsdmJpQmtiMlZ6SUc1dmRDQnpkR0Y1SUdsdUlHaHBjM1J2Y25rdVhHNGdJQ0FnSUNBZ0lDQWdiRzlqWVhScGIyNHVjbVZ3YkdGalpTaHdZWFJvS1R0Y2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQnNiMk5oZEdsdmJpNXdkWE5vS0hCaGRHZ3BPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0I5TEZ4dVhHNGdJQ0FnSUNBdktpcGNiaUFnSUNBZ0lDQXFJRlJ5WVc1emFYUnBiMjV6SUhSdklIUm9aU0JWVWt3Z2MzQmxZMmxtYVdWa0lHbHVJSFJvWlNCaGNtZDFiV1Z1ZEhNZ1lua2djbVZ3YkdGamFXNW5YRzRnSUNBZ0lDQWdLaUIwYUdVZ1kzVnljbVZ1ZENCVlVrd2dhVzRnZEdobElHaHBjM1J2Y25rZ2MzUmhZMnN1WEc0Z0lDQWdJQ0FnS2k5Y2JpQWdJQ0FnSUhKbGNHeGhZMlZYYVhSb09pQm1kVzVqZEdsdmJpQnlaWEJzWVdObFYybDBhQ2gwYnl3Z2NHRnlZVzF6TENCeGRXVnllU2tnZTF4dUlDQWdJQ0FnSUNCc2IyTmhkR2x2Ymk1eVpYQnNZV05sS0ZKdmRYUmxjaTV0WVd0bFVHRjBhQ2gwYnl3Z2NHRnlZVzF6TENCeGRXVnllU2twTzF4dUlDQWdJQ0FnZlN4Y2JseHVJQ0FnSUNBZ0x5b3FYRzRnSUNBZ0lDQWdLaUJVY21GdWMybDBhVzl1Y3lCMGJ5QjBhR1VnY0hKbGRtbHZkWE1nVlZKTUlHbG1JRzl1WlNCcGN5QmhkbUZwYkdGaWJHVXVJRkpsZEhWeWJuTWdkSEoxWlNCcFppQjBhR1ZjYmlBZ0lDQWdJQ0FxSUhKdmRYUmxjaUIzWVhNZ1lXSnNaU0IwYnlCbmJ5QmlZV05yTENCbVlXeHpaU0J2ZEdobGNuZHBjMlV1WEc0Z0lDQWdJQ0FnS2x4dUlDQWdJQ0FnSUNvZ1RtOTBaVG9nVkdobElISnZkWFJsY2lCdmJteDVJSFJ5WVdOcmN5Qm9hWE4wYjNKNUlHVnVkSEpwWlhNZ2FXNGdlVzkxY2lCaGNIQnNhV05oZEdsdmJpd2dibTkwSUhSb1pWeHVJQ0FnSUNBZ0lDb2dZM1Z5Y21WdWRDQmljbTkzYzJWeUlITmxjM05wYjI0c0lITnZJSGx2ZFNCallXNGdjMkZtWld4NUlHTmhiR3dnZEdocGN5Qm1kVzVqZEdsdmJpQjNhWFJvYjNWMElHZDFZWEprYVc1blhHNGdJQ0FnSUNBZ0tpQmhaMkZwYm5OMElITmxibVJwYm1jZ2RHaGxJSFZ6WlhJZ1ltRmpheUIwYnlCemIyMWxJRzkwYUdWeUlITnBkR1V1SUVodmQyVjJaWElzSUhkb1pXNGdkWE5wYm1kY2JpQWdJQ0FnSUNBcUlGSmxabkpsYzJoTWIyTmhkR2x2YmlBb2QyaHBZMmdnYVhNZ2RHaGxJR1poYkd4aVlXTnJJR1p2Y2lCSWFYTjBiM0o1VEc5allYUnBiMjRnYVc0Z1luSnZkM05sY25NZ2RHaGhkRnh1SUNBZ0lDQWdJQ29nWkc5dUozUWdjM1Z3Y0c5eWRDQklWRTFNTlNCb2FYTjBiM0o1S1NCMGFHbHpJRzFsZEdodlpDQjNhV3hzSUNwaGJIZGhlWE1xSUhObGJtUWdkR2hsSUdOc2FXVnVkQ0JpWVdOclhHNGdJQ0FnSUNBZ0tpQmlaV05oZFhObElIZGxJR05oYm01dmRDQnlaV3hwWVdKc2VTQjBjbUZqYXlCb2FYTjBiM0o1SUd4bGJtZDBhQzVjYmlBZ0lDQWdJQ0FxTDF4dUlDQWdJQ0FnWjI5Q1lXTnJPaUJtZFc1amRHbHZiaUJuYjBKaFkyc29LU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDaElhWE4wYjNKNUxteGxibWQwYUNBK0lERWdmSHdnYkc5allYUnBiMjRnUFQwOUlGSmxabkpsYzJoTWIyTmhkR2x2YmlrZ2UxeHVJQ0FnSUNBZ0lDQWdJR3h2WTJGMGFXOXVMbkJ2Y0NncE8xeHVJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQjBjblZsTzF4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdkMkZ5Ym1sdVp5aG1ZV3h6WlN3Z0oyZHZRbUZqYXlncElIZGhjeUJwWjI1dmNtVmtJR0psWTJGMWMyVWdkR2hsY21VZ2FYTWdibThnY205MWRHVnlJR2hwYzNSdmNua25LVHRjYmx4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnWm1Gc2MyVTdYRzRnSUNBZ0lDQjlMRnh1WEc0Z0lDQWdJQ0JvWVc1a2JHVkJZbTl5ZERvZ2IzQjBhVzl1Y3k1dmJrRmliM0owSUh4OElHWjFibU4wYVc5dUlDaGhZbTl5ZEZKbFlYTnZiaWtnZTF4dUlDQWdJQ0FnSUNCcFppQW9iRzlqWVhScGIyNGdhVzV6ZEdGdVkyVnZaaUJUZEdGMGFXTk1iMk5oZEdsdmJpa2dkR2h5YjNjZ2JtVjNJRVZ5Y205eUtDZFZibWhoYm1Sc1pXUWdZV0p2Y25SbFpDQjBjbUZ1YzJsMGFXOXVJU0JTWldGemIyNDZJQ2NnS3lCaFltOXlkRkpsWVhOdmJpazdYRzVjYmlBZ0lDQWdJQ0FnYVdZZ0tHRmliM0owVW1WaGMyOXVJR2x1YzNSaGJtTmxiMllnUTJGdVkyVnNiR0YwYVc5dUtTQjdYRzRnSUNBZ0lDQWdJQ0FnY21WMGRYSnVPMXh1SUNBZ0lDQWdJQ0I5SUdWc2MyVWdhV1lnS0dGaWIzSjBVbVZoYzI5dUlHbHVjM1JoYm1ObGIyWWdVbVZrYVhKbFkzUXBJSHRjYmlBZ0lDQWdJQ0FnSUNCc2IyTmhkR2x2Ymk1eVpYQnNZV05sS0ZKdmRYUmxjaTV0WVd0bFVHRjBhQ2hoWW05eWRGSmxZWE52Ymk1MGJ5d2dZV0p2Y25SU1pXRnpiMjR1Y0dGeVlXMXpMQ0JoWW05eWRGSmxZWE52Ymk1eGRXVnllU2twTzF4dUlDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBZ0lHeHZZMkYwYVc5dUxuQnZjQ2dwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNCOUxGeHVYRzRnSUNBZ0lDQm9ZVzVrYkdWRmNuSnZjam9nYjNCMGFXOXVjeTV2YmtWeWNtOXlJSHg4SUdaMWJtTjBhVzl1SUNobGNuSnZjaWtnZTF4dUlDQWdJQ0FnSUNBdkx5QlVhSEp2ZHlCemJ5QjNaU0JrYjI0bmRDQnphV3hsYm5Sc2VTQnpkMkZzYkc5M0lHRnplVzVqSUdWeWNtOXljeTVjYmlBZ0lDQWdJQ0FnZEdoeWIzY2daWEp5YjNJN0lDOHZJRlJvYVhNZ1pYSnliM0lnY0hKdlltRmliSGtnYjNKcFoybHVZWFJsWkNCcGJpQmhJSFJ5WVc1emFYUnBiMjRnYUc5dmF5NWNiaUFnSUNBZ0lIMHNYRzVjYmlBZ0lDQWdJR2hoYm1Sc1pVeHZZMkYwYVc5dVEyaGhibWRsT2lCbWRXNWpkR2x2YmlCb1lXNWtiR1ZNYjJOaGRHbHZia05vWVc1blpTaGphR0Z1WjJVcElIdGNiaUFnSUNBZ0lDQWdVbTkxZEdWeUxtUnBjM0JoZEdOb0tHTm9ZVzVuWlM1d1lYUm9MQ0JqYUdGdVoyVXVkSGx3WlNrN1hHNGdJQ0FnSUNCOUxGeHVYRzRnSUNBZ0lDQXZLaXBjYmlBZ0lDQWdJQ0FxSUZCbGNtWnZjbTF6SUdFZ2RISmhibk5wZEdsdmJpQjBieUIwYUdVZ1oybDJaVzRnY0dGMGFDQmhibVFnWTJGc2JITWdZMkZzYkdKaFkyc29aWEp5YjNJc0lHRmliM0owVW1WaGMyOXVLVnh1SUNBZ0lDQWdJQ29nZDJobGJpQjBhR1VnZEhKaGJuTnBkR2x2YmlCcGN5Qm1hVzVwYzJobFpDNGdTV1lnWW05MGFDQmhjbWQxYldWdWRITWdZWEpsSUc1MWJHd2dkR2hsSUhKdmRYUmxjaWR6SUhOMFlYUmxYRzRnSUNBZ0lDQWdLaUIzWVhNZ2RYQmtZWFJsWkM0Z1QzUm9aWEozYVhObElIUm9aU0IwY21GdWMybDBhVzl1SUdScFpDQnViM1FnWTI5dGNHeGxkR1V1WEc0Z0lDQWdJQ0FnS2x4dUlDQWdJQ0FnSUNvZ1NXNGdZU0IwY21GdWMybDBhVzl1TENCaElISnZkWFJsY2lCbWFYSnpkQ0JrWlhSbGNtMXBibVZ6SUhkb2FXTm9JSEp2ZFhSbGN5QmhjbVVnYVc1MmIyeDJaV1FnWW5rZ1ltVm5hVzV1YVc1blhHNGdJQ0FnSUNBZ0tpQjNhWFJvSUhSb1pTQmpkWEp5Wlc1MElISnZkWFJsTENCMWNDQjBhR1VnY205MWRHVWdkSEpsWlNCMGJ5QjBhR1VnWm1seWMzUWdjR0Z5Wlc1MElISnZkWFJsSUhSb1lYUWdhWE1nYzJoaGNtVmtYRzRnSUNBZ0lDQWdLaUIzYVhSb0lIUm9aU0JrWlhOMGFXNWhkR2x2YmlCeWIzVjBaU3dnWVc1a0lHSmhZMnNnWkc5M2JpQjBhR1VnZEhKbFpTQjBieUIwYUdVZ1pHVnpkR2x1WVhScGIyNGdjbTkxZEdVdUlGUm9aVnh1SUNBZ0lDQWdJQ29nZDJsc2JGUnlZVzV6YVhScGIyNUdjbTl0SUdodmIyc2dhWE1nYVc1MmIydGxaQ0J2YmlCaGJHd2djbTkxZEdVZ2FHRnVaR3hsY25NZ2QyVW5jbVVnZEhKaGJuTnBkR2x2Ym1sdVp5QmhkMkY1WEc0Z0lDQWdJQ0FnS2lCbWNtOXRMQ0JwYmlCeVpYWmxjbk5sSUc1bGMzUnBibWNnYjNKa1pYSXVJRXhwYTJWM2FYTmxMQ0IwYUdVZ2QybHNiRlJ5WVc1emFYUnBiMjVVYnlCb2IyOXJJR2x6SUdsdWRtOXJaV1FnYjI1Y2JpQWdJQ0FnSUNBcUlHRnNiQ0J5YjNWMFpTQm9ZVzVrYkdWeWN5QjNaU2R5WlNCMGNtRnVjMmwwYVc5dWFXNW5JSFJ2TGx4dUlDQWdJQ0FnSUNwY2JpQWdJQ0FnSUNBcUlFSnZkR2dnZDJsc2JGUnlZVzV6YVhScGIyNUdjbTl0SUdGdVpDQjNhV3hzVkhKaGJuTnBkR2x2YmxSdklHaHZiMnR6SUcxaGVTQmxhWFJvWlhJZ1lXSnZjblFnYjNJZ2NtVmthWEpsWTNRZ2RHaGxYRzRnSUNBZ0lDQWdLaUIwY21GdWMybDBhVzl1TGlCVWJ5QnlaWE52YkhabElHRnplVzVqYUhKdmJtOTFjMng1TENCMGFHVjVJRzFoZVNCMWMyVWdkR2hsSUdOaGJHeGlZV05ySUdGeVozVnRaVzUwTGlCSlppQnViMXh1SUNBZ0lDQWdJQ29nYUc5dmEzTWdkMkZwZEN3Z2RHaGxJSFJ5WVc1emFYUnBiMjRnYVhNZ1puVnNiSGtnYzNsdVkyaHliMjV2ZFhNdVhHNGdJQ0FnSUNBZ0tpOWNiaUFnSUNBZ0lHUnBjM0JoZEdOb09pQm1kVzVqZEdsdmJpQmthWE53WVhSamFDaHdZWFJvTENCaFkzUnBiMjRwSUh0Y2JpQWdJQ0FnSUNBZ1VtOTFkR1Z5TG1OaGJtTmxiRkJsYm1ScGJtZFVjbUZ1YzJsMGFXOXVLQ2s3WEc1Y2JpQWdJQ0FnSUNBZ2RtRnlJSEJ5WlhaUVlYUm9JRDBnYzNSaGRHVXVjR0YwYUR0Y2JpQWdJQ0FnSUNBZ2RtRnlJR2x6VW1WbWNtVnphR2x1WnlBOUlHRmpkR2x2YmlBOVBTQnVkV3hzTzF4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2h3Y21WMlVHRjBhQ0E5UFQwZ2NHRjBhQ0FtSmlBaGFYTlNaV1p5WlhOb2FXNW5LU0I3WEc0Z0lDQWdJQ0FnSUNBZ2NtVjBkWEp1TzF4dUlDQWdJQ0FnSUNCOUlDOHZJRTV2ZEdocGJtY2dkRzhnWkc4aFhHNWNiaUFnSUNBZ0lDQWdMeThnVW1WamIzSmtJSFJvWlNCelkzSnZiR3dnY0c5emFYUnBiMjRnWVhNZ1pXRnliSGtnWVhNZ2NHOXpjMmxpYkdVZ2RHOWNiaUFnSUNBZ0lDQWdMeThnWjJWMElHbDBJR0psWm05eVpTQmljbTkzYzJWeWN5QjBjbmtnZFhCa1lYUmxJR2wwSUdGMWRHOXRZWFJwWTJGc2JIa3VYRzRnSUNBZ0lDQWdJR2xtSUNod2NtVjJVR0YwYUNBbUppQmhZM1JwYjI0Z1BUMDlJRXh2WTJGMGFXOXVRV04wYVc5dWN5NVFWVk5JS1NCU2IzVjBaWEl1Y21WamIzSmtVMk55YjJ4c1VHOXphWFJwYjI0b2NISmxkbEJoZEdncE8xeHVYRzRnSUNBZ0lDQWdJSFpoY2lCdFlYUmphQ0E5SUZKdmRYUmxjaTV0WVhSamFDaHdZWFJvS1R0Y2JseHVJQ0FnSUNBZ0lDQjNZWEp1YVc1bktHMWhkR05vSUNFOUlHNTFiR3dzSUNkT2J5QnliM1YwWlNCdFlYUmphR1Z6SUhCaGRHZ2dYQ0lsYzF3aUxpQk5ZV3RsSUhOMWNtVWdlVzkxSUdoaGRtVWdQRkp2ZFhSbElIQmhkR2c5WENJbGMxd2lQaUJ6YjIxbGQyaGxjbVVnYVc0Z2VXOTFjaUJ5YjNWMFpYTW5MQ0J3WVhSb0xDQndZWFJvS1R0Y2JseHVJQ0FnSUNBZ0lDQnBaaUFvYldGMFkyZ2dQVDBnYm5Wc2JDa2diV0YwWTJnZ1BTQjdmVHRjYmx4dUlDQWdJQ0FnSUNCMllYSWdjSEpsZGxKdmRYUmxjeUE5SUhOMFlYUmxMbkp2ZFhSbGN5QjhmQ0JiWFR0Y2JpQWdJQ0FnSUNBZ2RtRnlJSEJ5WlhaUVlYSmhiWE1nUFNCemRHRjBaUzV3WVhKaGJYTWdmSHdnZTMwN1hHNGdJQ0FnSUNBZ0lIWmhjaUJ3Y21WMlVYVmxjbmtnUFNCemRHRjBaUzV4ZFdWeWVTQjhmQ0I3ZlR0Y2JseHVJQ0FnSUNBZ0lDQjJZWElnYm1WNGRGSnZkWFJsY3lBOUlHMWhkR05vTG5KdmRYUmxjeUI4ZkNCYlhUdGNiaUFnSUNBZ0lDQWdkbUZ5SUc1bGVIUlFZWEpoYlhNZ1BTQnRZWFJqYUM1d1lYSmhiWE1nZkh3Z2UzMDdYRzRnSUNBZ0lDQWdJSFpoY2lCdVpYaDBVWFZsY25rZ1BTQnRZWFJqYUM1eGRXVnllU0I4ZkNCN2ZUdGNibHh1SUNBZ0lDQWdJQ0IyWVhJZ1puSnZiVkp2ZFhSbGN5d2dkRzlTYjNWMFpYTTdYRzRnSUNBZ0lDQWdJR2xtSUNod2NtVjJVbTkxZEdWekxteGxibWQwYUNrZ2UxeHVJQ0FnSUNBZ0lDQWdJR1p5YjIxU2IzVjBaWE1nUFNCd2NtVjJVbTkxZEdWekxtWnBiSFJsY2lobWRXNWpkR2x2YmlBb2NtOTFkR1VwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQWhhR0Z6VFdGMFkyZ29ibVY0ZEZKdmRYUmxjeXdnY205MWRHVXNJSEJ5WlhaUVlYSmhiWE1zSUc1bGVIUlFZWEpoYlhNc0lIQnlaWFpSZFdWeWVTd2dibVY0ZEZGMVpYSjVLVHRjYmlBZ0lDQWdJQ0FnSUNCOUtUdGNibHh1SUNBZ0lDQWdJQ0FnSUhSdlVtOTFkR1Z6SUQwZ2JtVjRkRkp2ZFhSbGN5NW1hV3gwWlhJb1puVnVZM1JwYjI0Z0tISnZkWFJsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdJV2hoYzAxaGRHTm9LSEJ5WlhaU2IzVjBaWE1zSUhKdmRYUmxMQ0J3Y21WMlVHRnlZVzF6TENCdVpYaDBVR0Z5WVcxekxDQndjbVYyVVhWbGNua3NJRzVsZUhSUmRXVnllU2s3WEc0Z0lDQWdJQ0FnSUNBZ2ZTazdYRzRnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnWm5KdmJWSnZkWFJsY3lBOUlGdGRPMXh1SUNBZ0lDQWdJQ0FnSUhSdlVtOTFkR1Z6SUQwZ2JtVjRkRkp2ZFhSbGN6dGNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUhaaGNpQjBjbUZ1YzJsMGFXOXVJRDBnYm1WM0lGUnlZVzV6YVhScGIyNG9jR0YwYUN3Z1VtOTFkR1Z5TG5KbGNHeGhZMlZYYVhSb0xtSnBibVFvVW05MWRHVnlMQ0J3WVhSb0tTazdYRzRnSUNBZ0lDQWdJSEJsYm1ScGJtZFVjbUZ1YzJsMGFXOXVJRDBnZEhKaGJuTnBkR2x2Ymp0Y2JseHVJQ0FnSUNBZ0lDQjJZWElnWm5KdmJVTnZiWEJ2Ym1WdWRITWdQU0J0YjNWdWRHVmtRMjl0Y0c5dVpXNTBjeTV6YkdsalpTaHdjbVYyVW05MWRHVnpMbXhsYm1kMGFDQXRJR1p5YjIxU2IzVjBaWE11YkdWdVozUm9LVHRjYmx4dUlDQWdJQ0FnSUNCVWNtRnVjMmwwYVc5dUxtWnliMjBvZEhKaGJuTnBkR2x2Yml3Z1puSnZiVkp2ZFhSbGN5d2dabkp2YlVOdmJYQnZibVZ1ZEhNc0lHWjFibU4wYVc5dUlDaGxjbkp2Y2lrZ2UxeHVJQ0FnSUNBZ0lDQWdJR2xtSUNobGNuSnZjaUI4ZkNCMGNtRnVjMmwwYVc5dUxtRmliM0owVW1WaGMyOXVLU0J5WlhSMWNtNGdaR2x6Y0dGMFkyaElZVzVrYkdWeUxtTmhiR3dvVW05MWRHVnlMQ0JsY25KdmNpd2dkSEpoYm5OcGRHbHZiaWs3SUM4dklFNXZJRzVsWldRZ2RHOGdZMjl1ZEdsdWRXVXVYRzVjYmlBZ0lDQWdJQ0FnSUNCVWNtRnVjMmwwYVc5dUxuUnZLSFJ5WVc1emFYUnBiMjRzSUhSdlVtOTFkR1Z6TENCdVpYaDBVR0Z5WVcxekxDQnVaWGgwVVhWbGNua3NJR1oxYm1OMGFXOXVJQ2hsY25KdmNpa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1pHbHpjR0YwWTJoSVlXNWtiR1Z5TG1OaGJHd29VbTkxZEdWeUxDQmxjbkp2Y2l3Z2RISmhibk5wZEdsdmJpd2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQndZWFJvT2lCd1lYUm9MRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQmhZM1JwYjI0NklHRmpkR2x2Yml4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnY0dGMGFHNWhiV1U2SUcxaGRHTm9MbkJoZEdodVlXMWxMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQnliM1YwWlhNNklHNWxlSFJTYjNWMFpYTXNYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lIQmhjbUZ0Y3pvZ2JtVjRkRkJoY21GdGN5eGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2NYVmxjbms2SUc1bGVIUlJkV1Z5ZVZ4dUlDQWdJQ0FnSUNBZ0lDQWdmU2s3WEc0Z0lDQWdJQ0FnSUNBZ2ZTazdYRzRnSUNBZ0lDQWdJSDBwTzF4dUlDQWdJQ0FnZlN4Y2JseHVJQ0FnSUNBZ0x5b3FYRzRnSUNBZ0lDQWdLaUJUZEdGeWRITWdkR2hwY3lCeWIzVjBaWElnWVc1a0lHTmhiR3h6SUdOaGJHeGlZV05yS0hKdmRYUmxjaXdnYzNSaGRHVXBJSGRvWlc0Z2RHaGxJSEp2ZFhSbElHTm9ZVzVuWlhNdVhHNGdJQ0FnSUNBZ0tseHVJQ0FnSUNBZ0lDb2dTV1lnZEdobElISnZkWFJsY2lkeklHeHZZMkYwYVc5dUlHbHpJSE4wWVhScFl5QW9hUzVsTGlCaElGVlNUQ0J3WVhSb0lHbHVJR0VnYzJWeWRtVnlJR1Z1ZG1seWIyNXRaVzUwS1Z4dUlDQWdJQ0FnSUNvZ2RHaGxJR05oYkd4aVlXTnJJR2x6SUdOaGJHeGxaQ0J2Ym14NUlHOXVZMlV1SUU5MGFHVnlkMmx6WlN3Z2RHaGxJR3h2WTJGMGFXOXVJSE5vYjNWc1pDQmlaU0J2Ym1VZ2IyWWdkR2hsWEc0Z0lDQWdJQ0FnS2lCU2IzVjBaWEl1S2t4dlkyRjBhVzl1SUc5aWFtVmpkSE1nS0dVdVp5NGdVbTkxZEdWeUxraGhjMmhNYjJOaGRHbHZiaUJ2Y2lCU2IzVjBaWEl1U0dsemRHOXllVXh2WTJGMGFXOXVLUzVjYmlBZ0lDQWdJQ0FxTDF4dUlDQWdJQ0FnY25WdU9pQm1kVzVqZEdsdmJpQnlkVzRvWTJGc2JHSmhZMnNwSUh0Y2JpQWdJQ0FnSUNBZ2FXNTJZWEpwWVc1MEtDRlNiM1YwWlhJdWFYTlNkVzV1YVc1bkxDQW5VbTkxZEdWeUlHbHpJR0ZzY21WaFpIa2djblZ1Ym1sdVp5Y3BPMXh1WEc0Z0lDQWdJQ0FnSUdScGMzQmhkR05vU0dGdVpHeGxjaUE5SUdaMWJtTjBhVzl1SUNobGNuSnZjaXdnZEhKaGJuTnBkR2x2Yml3Z2JtVjNVM1JoZEdVcElIdGNiaUFnSUNBZ0lDQWdJQ0JwWmlBb1pYSnliM0lwSUZKdmRYUmxjaTVvWVc1a2JHVkZjbkp2Y2lobGNuSnZjaWs3WEc1Y2JpQWdJQ0FnSUNBZ0lDQnBaaUFvY0dWdVpHbHVaMVJ5WVc1emFYUnBiMjRnSVQwOUlIUnlZVzV6YVhScGIyNHBJSEpsZEhWeWJqdGNibHh1SUNBZ0lDQWdJQ0FnSUhCbGJtUnBibWRVY21GdWMybDBhVzl1SUQwZ2JuVnNiRHRjYmx4dUlDQWdJQ0FnSUNBZ0lHbG1JQ2gwY21GdWMybDBhVzl1TG1GaWIzSjBVbVZoYzI5dUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCU2IzVjBaWEl1YUdGdVpHeGxRV0p2Y25Rb2RISmhibk5wZEdsdmJpNWhZbTl5ZEZKbFlYTnZiaWs3WEc0Z0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR05oYkd4aVlXTnJMbU5oYkd3b1VtOTFkR1Z5TENCU2IzVjBaWElzSUc1bGVIUlRkR0YwWlNBOUlHNWxkMU4wWVhSbEtUdGNiaUFnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgwN1hHNWNiaUFnSUNBZ0lDQWdhV1lnS0NFb2JHOWpZWFJwYjI0Z2FXNXpkR0Z1WTJWdlppQlRkR0YwYVdOTWIyTmhkR2x2YmlrcElIdGNiaUFnSUNBZ0lDQWdJQ0JwWmlBb2JHOWpZWFJwYjI0dVlXUmtRMmhoYm1kbFRHbHpkR1Z1WlhJcElHeHZZMkYwYVc5dUxtRmtaRU5vWVc1blpVeHBjM1JsYm1WeUtGSnZkWFJsY2k1b1lXNWtiR1ZNYjJOaGRHbHZia05vWVc1blpTazdYRzVjYmlBZ0lDQWdJQ0FnSUNCU2IzVjBaWEl1YVhOU2RXNXVhVzVuSUQwZ2RISjFaVHRjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDOHZJRUp2YjNSemRISmhjQ0IxYzJsdVp5QjBhR1VnWTNWeWNtVnVkQ0J3WVhSb0xseHVJQ0FnSUNBZ0lDQlNiM1YwWlhJdWNtVm1jbVZ6YUNncE8xeHVJQ0FnSUNBZ2ZTeGNibHh1SUNBZ0lDQWdjbVZtY21WemFEb2dablZ1WTNScGIyNGdjbVZtY21WemFDZ3BJSHRjYmlBZ0lDQWdJQ0FnVW05MWRHVnlMbVJwYzNCaGRHTm9LR3h2WTJGMGFXOXVMbWRsZEVOMWNuSmxiblJRWVhSb0tDa3NJRzUxYkd3cE8xeHVJQ0FnSUNBZ2ZTeGNibHh1SUNBZ0lDQWdjM1J2Y0RvZ1puVnVZM1JwYjI0Z2MzUnZjQ2dwSUh0Y2JpQWdJQ0FnSUNBZ1VtOTFkR1Z5TG1OaGJtTmxiRkJsYm1ScGJtZFVjbUZ1YzJsMGFXOXVLQ2s3WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLR3h2WTJGMGFXOXVMbkpsYlc5MlpVTm9ZVzVuWlV4cGMzUmxibVZ5S1NCc2IyTmhkR2x2Ymk1eVpXMXZkbVZEYUdGdVoyVk1hWE4wWlc1bGNpaFNiM1YwWlhJdWFHRnVaR3hsVEc5allYUnBiMjVEYUdGdVoyVXBPMXh1WEc0Z0lDQWdJQ0FnSUZKdmRYUmxjaTVwYzFKMWJtNXBibWNnUFNCbVlXeHpaVHRjYmlBZ0lDQWdJSDBzWEc1Y2JpQWdJQ0FnSUdkbGRFeHZZMkYwYVc5dU9pQm1kVzVqZEdsdmJpQm5aWFJNYjJOaGRHbHZiaWdwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUd4dlkyRjBhVzl1TzF4dUlDQWdJQ0FnZlN4Y2JseHVJQ0FnSUNBZ1oyVjBVMk55YjJ4c1FtVm9ZWFpwYjNJNklHWjFibU4wYVc5dUlHZGxkRk5qY205c2JFSmxhR0YyYVc5eUtDa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdjMk55YjJ4c1FtVm9ZWFpwYjNJN1hHNGdJQ0FnSUNCOUxGeHVYRzRnSUNBZ0lDQm5aWFJTYjNWMFpVRjBSR1Z3ZEdnNklHWjFibU4wYVc5dUlHZGxkRkp2ZFhSbFFYUkVaWEIwYUNoeWIzVjBaVVJsY0hSb0tTQjdYRzRnSUNBZ0lDQWdJSFpoY2lCeWIzVjBaWE1nUFNCemRHRjBaUzV5YjNWMFpYTTdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnliM1YwWlhNZ0ppWWdjbTkxZEdWelczSnZkWFJsUkdWd2RHaGRPMXh1SUNBZ0lDQWdmU3hjYmx4dUlDQWdJQ0FnYzJWMFVtOTFkR1ZEYjIxd2IyNWxiblJCZEVSbGNIUm9PaUJtZFc1amRHbHZiaUJ6WlhSU2IzVjBaVU52YlhCdmJtVnVkRUYwUkdWd2RHZ29jbTkxZEdWRVpYQjBhQ3dnWTI5dGNHOXVaVzUwS1NCN1hHNGdJQ0FnSUNBZ0lHMXZkVzUwWldSRGIyMXdiMjVsYm5SelczSnZkWFJsUkdWd2RHaGRJRDBnWTI5dGNHOXVaVzUwTzF4dUlDQWdJQ0FnZlN4Y2JseHVJQ0FnSUNBZ0x5b3FYRzRnSUNBZ0lDQWdLaUJTWlhSMWNtNXpJSFJvWlNCamRYSnlaVzUwSUZWU1RDQndZWFJvSUNzZ2NYVmxjbmtnYzNSeWFXNW5MbHh1SUNBZ0lDQWdJQ292WEc0Z0lDQWdJQ0JuWlhSRGRYSnlaVzUwVUdGMGFEb2dablZ1WTNScGIyNGdaMlYwUTNWeWNtVnVkRkJoZEdnb0tTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnpkR0YwWlM1d1lYUm9PMXh1SUNBZ0lDQWdmU3hjYmx4dUlDQWdJQ0FnTHlvcVhHNGdJQ0FnSUNBZ0tpQlNaWFIxY201eklIUm9aU0JqZFhKeVpXNTBJRlZTVENCd1lYUm9JSGRwZEdodmRYUWdkR2hsSUhGMVpYSjVJSE4wY21sdVp5NWNiaUFnSUNBZ0lDQXFMMXh1SUNBZ0lDQWdaMlYwUTNWeWNtVnVkRkJoZEdodVlXMWxPaUJtZFc1amRHbHZiaUJuWlhSRGRYSnlaVzUwVUdGMGFHNWhiV1VvS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCemRHRjBaUzV3WVhSb2JtRnRaVHRjYmlBZ0lDQWdJSDBzWEc1Y2JpQWdJQ0FnSUM4cUtseHVJQ0FnSUNBZ0lDb2dVbVYwZFhKdWN5QmhiaUJ2WW1wbFkzUWdiMllnZEdobElHTjFjbkpsYm5Sc2VTQmhZM1JwZG1VZ1ZWSk1JSEJoY21GdFpYUmxjbk11WEc0Z0lDQWdJQ0FnS2k5Y2JpQWdJQ0FnSUdkbGRFTjFjbkpsYm5SUVlYSmhiWE02SUdaMWJtTjBhVzl1SUdkbGRFTjFjbkpsYm5SUVlYSmhiWE1vS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCemRHRjBaUzV3WVhKaGJYTTdYRzRnSUNBZ0lDQjlMRnh1WEc0Z0lDQWdJQ0F2S2lwY2JpQWdJQ0FnSUNBcUlGSmxkSFZ5Ym5NZ1lXNGdiMkpxWldOMElHOW1JSFJvWlNCamRYSnlaVzUwYkhrZ1lXTjBhWFpsSUhGMVpYSjVJSEJoY21GdFpYUmxjbk11WEc0Z0lDQWdJQ0FnS2k5Y2JpQWdJQ0FnSUdkbGRFTjFjbkpsYm5SUmRXVnllVG9nWm5WdVkzUnBiMjRnWjJWMFEzVnljbVZ1ZEZGMVpYSjVLQ2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnYzNSaGRHVXVjWFZsY25rN1hHNGdJQ0FnSUNCOUxGeHVYRzRnSUNBZ0lDQXZLaXBjYmlBZ0lDQWdJQ0FxSUZKbGRIVnlibk1nWVc0Z1lYSnlZWGtnYjJZZ2RHaGxJR04xY25KbGJuUnNlU0JoWTNScGRtVWdjbTkxZEdWekxseHVJQ0FnSUNBZ0lDb3ZYRzRnSUNBZ0lDQm5aWFJEZFhKeVpXNTBVbTkxZEdWek9pQm1kVzVqZEdsdmJpQm5aWFJEZFhKeVpXNTBVbTkxZEdWektDa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdjM1JoZEdVdWNtOTFkR1Z6TzF4dUlDQWdJQ0FnZlN4Y2JseHVJQ0FnSUNBZ0x5b3FYRzRnSUNBZ0lDQWdLaUJTWlhSMWNtNXpJSFJ5ZFdVZ2FXWWdkR2hsSUdkcGRtVnVJSEp2ZFhSbExDQndZWEpoYlhNc0lHRnVaQ0J4ZFdWeWVTQmhjbVVnWVdOMGFYWmxMbHh1SUNBZ0lDQWdJQ292WEc0Z0lDQWdJQ0JwYzBGamRHbDJaVG9nWm5WdVkzUnBiMjRnYVhOQlkzUnBkbVVvZEc4c0lIQmhjbUZ0Y3l3Z2NYVmxjbmtwSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLRkJoZEdoVmRHbHNjeTVwYzBGaWMyOXNkWFJsS0hSdktTa2dlMXh1SUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUIwYnlBOVBUMGdjM1JoZEdVdWNHRjBhRHRjYmlBZ0lDQWdJQ0FnZlhKbGRIVnliaUJ5YjNWMFpVbHpRV04wYVhabEtITjBZWFJsTG5KdmRYUmxjeXdnZEc4cElDWW1JSEJoY21GdGMwRnlaVUZqZEdsMlpTaHpkR0YwWlM1d1lYSmhiWE1zSUhCaGNtRnRjeWtnSmlZZ0tIRjFaWEo1SUQwOUlHNTFiR3dnZkh3Z2NYVmxjbmxKYzBGamRHbDJaU2h6ZEdGMFpTNXhkV1Z5ZVN3Z2NYVmxjbmtwS1R0Y2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUgwc1hHNWNiaUFnSUNCdGFYaHBibk02SUZ0VFkzSnZiR3hJYVhOMGIzSjVYU3hjYmx4dUlDQWdJSEJ5YjNCVWVYQmxjem9nZTF4dUlDQWdJQ0FnWTJocGJHUnlaVzQ2SUZCeWIzQlVlWEJsY3k1bVlXeHplVnh1SUNBZ0lIMHNYRzVjYmlBZ0lDQmphR2xzWkVOdmJuUmxlSFJVZVhCbGN6b2dlMXh1SUNBZ0lDQWdjbTkxZEdWRVpYQjBhRG9nVUhKdmNGUjVjR1Z6TG01MWJXSmxjaTVwYzFKbGNYVnBjbVZrTEZ4dUlDQWdJQ0FnY205MWRHVnlPaUJRY205d1ZIbHdaWE11Y205MWRHVnlMbWx6VW1WeGRXbHlaV1JjYmlBZ0lDQjlMRnh1WEc0Z0lDQWdaMlYwUTJocGJHUkRiMjUwWlhoME9pQm1kVzVqZEdsdmJpQm5aWFJEYUdsc1pFTnZiblJsZUhRb0tTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z2UxeHVJQ0FnSUNBZ0lDQnliM1YwWlVSbGNIUm9PaUF4TEZ4dUlDQWdJQ0FnSUNCeWIzVjBaWEk2SUZKdmRYUmxjbHh1SUNBZ0lDQWdmVHRjYmlBZ0lDQjlMRnh1WEc0Z0lDQWdaMlYwU1c1cGRHbGhiRk4wWVhSbE9pQm1kVzVqZEdsdmJpQm5aWFJKYm1sMGFXRnNVM1JoZEdVb0tTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z2MzUmhkR1VnUFNCdVpYaDBVM1JoZEdVN1hHNGdJQ0FnZlN4Y2JseHVJQ0FnSUdOdmJYQnZibVZ1ZEZkcGJHeFNaV05sYVhabFVISnZjSE02SUdaMWJtTjBhVzl1SUdOdmJYQnZibVZ1ZEZkcGJHeFNaV05sYVhabFVISnZjSE1vS1NCN1hHNGdJQ0FnSUNCMGFHbHpMbk5sZEZOMFlYUmxLSE4wWVhSbElEMGdibVY0ZEZOMFlYUmxLVHRjYmlBZ0lDQjlMRnh1WEc0Z0lDQWdZMjl0Y0c5dVpXNTBWMmxzYkZWdWJXOTFiblE2SUdaMWJtTjBhVzl1SUdOdmJYQnZibVZ1ZEZkcGJHeFZibTF2ZFc1MEtDa2dlMXh1SUNBZ0lDQWdVbTkxZEdWeUxuTjBiM0FvS1R0Y2JpQWdJQ0I5TEZ4dVhHNGdJQ0FnY21WdVpHVnlPaUJtZFc1amRHbHZiaUJ5Wlc1a1pYSW9LU0I3WEc0Z0lDQWdJQ0IyWVhJZ2NtOTFkR1VnUFNCU2IzVjBaWEl1WjJWMFVtOTFkR1ZCZEVSbGNIUm9LREFwTzF4dUlDQWdJQ0FnY21WMGRYSnVJSEp2ZFhSbElEOGdVbVZoWTNRdVkzSmxZWFJsUld4bGJXVnVkQ2h5YjNWMFpTNW9ZVzVrYkdWeUxDQjBhR2x6TG5CeWIzQnpLU0E2SUc1MWJHdzdYRzRnSUNBZ2ZWeHVYRzRnSUgwcE8xeHVYRzRnSUZKdmRYUmxjaTVqYkdWaGNrRnNiRkp2ZFhSbGN5Z3BPMXh1WEc0Z0lHbG1JQ2h2Y0hScGIyNXpMbkp2ZFhSbGN5a2dVbTkxZEdWeUxtRmtaRkp2ZFhSbGN5aHZjSFJwYjI1ekxuSnZkWFJsY3lrN1hHNWNiaUFnY21WMGRYSnVJRkp2ZFhSbGNqdGNibjFjYmx4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCamNtVmhkR1ZTYjNWMFpYSTdJbDE5IiwiLyoganNoaW50IC1XMDg0ICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgncmVhY3QvbGliL09iamVjdC5hc3NpZ24nKTtcbnZhciB3YXJuaW5nID0gcmVxdWlyZSgncmVhY3QvbGliL3dhcm5pbmcnKTtcbnZhciBEZWZhdWx0Um91dGUgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvRGVmYXVsdFJvdXRlJyk7XG52YXIgTm90Rm91bmRSb3V0ZSA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9Ob3RGb3VuZFJvdXRlJyk7XG52YXIgUmVkaXJlY3QgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvUmVkaXJlY3QnKTtcbnZhciBSb3V0ZSA9IHJlcXVpcmUoJy4vUm91dGUnKTtcblxuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXMoY29tcG9uZW50TmFtZSwgcHJvcFR5cGVzLCBwcm9wcykge1xuICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCAnVW5rbm93bkNvbXBvbmVudCc7XG5cbiAgZm9yICh2YXIgcHJvcE5hbWUgaW4gcHJvcFR5cGVzKSB7XG4gICAgaWYgKHByb3BUeXBlcy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgIHZhciBlcnJvciA9IHByb3BUeXBlc1twcm9wTmFtZV0ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKTtcblxuICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHdhcm5pbmcoZmFsc2UsIGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVSb3V0ZU9wdGlvbnMocHJvcHMpIHtcbiAgdmFyIG9wdGlvbnMgPSBhc3NpZ24oe30sIHByb3BzKTtcbiAgdmFyIGhhbmRsZXIgPSBvcHRpb25zLmhhbmRsZXI7XG5cbiAgaWYgKGhhbmRsZXIpIHtcbiAgICBvcHRpb25zLm9uRW50ZXIgPSBoYW5kbGVyLndpbGxUcmFuc2l0aW9uVG87XG4gICAgb3B0aW9ucy5vbkxlYXZlID0gaGFuZGxlci53aWxsVHJhbnNpdGlvbkZyb207XG4gIH1cblxuICByZXR1cm4gb3B0aW9ucztcbn1cblxuZnVuY3Rpb24gY3JlYXRlUm91dGVGcm9tUmVhY3RFbGVtZW50KGVsZW1lbnQpIHtcbiAgaWYgKCFSZWFjdC5pc1ZhbGlkRWxlbWVudChlbGVtZW50KSkge1xuICAgIHJldHVybjtcbiAgfXZhciB0eXBlID0gZWxlbWVudC50eXBlO1xuICB2YXIgcHJvcHMgPSBhc3NpZ24oe30sIHR5cGUuZGVmYXVsdFByb3BzLCBlbGVtZW50LnByb3BzKTtcblxuICBpZiAodHlwZS5wcm9wVHlwZXMpIGNoZWNrUHJvcFR5cGVzKHR5cGUuZGlzcGxheU5hbWUsIHR5cGUucHJvcFR5cGVzLCBwcm9wcyk7XG5cbiAgaWYgKHR5cGUgPT09IERlZmF1bHRSb3V0ZSkge1xuICAgIHJldHVybiBSb3V0ZS5jcmVhdGVEZWZhdWx0Um91dGUoY3JlYXRlUm91dGVPcHRpb25zKHByb3BzKSk7XG4gIH1pZiAodHlwZSA9PT0gTm90Rm91bmRSb3V0ZSkge1xuICAgIHJldHVybiBSb3V0ZS5jcmVhdGVOb3RGb3VuZFJvdXRlKGNyZWF0ZVJvdXRlT3B0aW9ucyhwcm9wcykpO1xuICB9aWYgKHR5cGUgPT09IFJlZGlyZWN0KSB7XG4gICAgcmV0dXJuIFJvdXRlLmNyZWF0ZVJlZGlyZWN0KGNyZWF0ZVJvdXRlT3B0aW9ucyhwcm9wcykpO1xuICB9cmV0dXJuIFJvdXRlLmNyZWF0ZVJvdXRlKGNyZWF0ZVJvdXRlT3B0aW9ucyhwcm9wcyksIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAocHJvcHMuY2hpbGRyZW4pIGNyZWF0ZVJvdXRlc0Zyb21SZWFjdENoaWxkcmVuKHByb3BzLmNoaWxkcmVuKTtcbiAgfSk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbmQgcmV0dXJucyBhbiBhcnJheSBvZiByb3V0ZXMgY3JlYXRlZCBmcm9tIHRoZSBnaXZlblxuICogUmVhY3RDaGlsZHJlbiwgYWxsIG9mIHdoaWNoIHNob3VsZCBiZSBvbmUgb2YgPFJvdXRlPiwgPERlZmF1bHRSb3V0ZT4sXG4gKiA8Tm90Rm91bmRSb3V0ZT4sIG9yIDxSZWRpcmVjdD4sIGUuZy46XG4gKlxuICogICB2YXIgeyBjcmVhdGVSb3V0ZXNGcm9tUmVhY3RDaGlsZHJlbiwgUm91dGUsIFJlZGlyZWN0IH0gPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKTtcbiAqXG4gKiAgIHZhciByb3V0ZXMgPSBjcmVhdGVSb3V0ZXNGcm9tUmVhY3RDaGlsZHJlbihcbiAqICAgICA8Um91dGUgcGF0aD1cIi9cIiBoYW5kbGVyPXtBcHB9PlxuICogICAgICAgPFJvdXRlIG5hbWU9XCJ1c2VyXCIgcGF0aD1cIi91c2VyLzp1c2VySWRcIiBoYW5kbGVyPXtVc2VyfT5cbiAqICAgICAgICAgPFJvdXRlIG5hbWU9XCJ0YXNrXCIgcGF0aD1cInRhc2tzLzp0YXNrSWRcIiBoYW5kbGVyPXtUYXNrfS8+XG4gKiAgICAgICAgIDxSZWRpcmVjdCBmcm9tPVwidG9kb3MvOnRhc2tJZFwiIHRvPVwidGFza1wiLz5cbiAqICAgICAgIDwvUm91dGU+XG4gKiAgICAgPC9Sb3V0ZT5cbiAqICAgKTtcbiAqL1xuZnVuY3Rpb24gY3JlYXRlUm91dGVzRnJvbVJlYWN0Q2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgdmFyIHJvdXRlcyA9IFtdO1xuXG4gIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIGlmIChjaGlsZCA9IGNyZWF0ZVJvdXRlRnJvbVJlYWN0RWxlbWVudChjaGlsZCkpIHJvdXRlcy5wdXNoKGNoaWxkKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJvdXRlcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVSb3V0ZXNGcm9tUmVhY3RDaGlsZHJlbjsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdyZWFjdC9saWIvaW52YXJpYW50Jyk7XG52YXIgY2FuVXNlRE9NID0gcmVxdWlyZSgncmVhY3QvbGliL0V4ZWN1dGlvbkVudmlyb25tZW50JykuY2FuVXNlRE9NO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uIG9mIHRoZSB3aW5kb3cgYXMgeyB4LCB5IH0uXG4gKi9cbmZ1bmN0aW9uIGdldFdpbmRvd1Njcm9sbFBvc2l0aW9uKCkge1xuICBpbnZhcmlhbnQoY2FuVXNlRE9NLCAnQ2Fubm90IGdldCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbiB3aXRob3V0IGEgRE9NJyk7XG5cbiAgcmV0dXJuIHtcbiAgICB4OiB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQsXG4gICAgeTogd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3BcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRXaW5kb3dTY3JvbGxQb3NpdGlvbjsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuRGVmYXVsdFJvdXRlID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL0RlZmF1bHRSb3V0ZScpO1xuZXhwb3J0cy5MaW5rID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL0xpbmsnKTtcbmV4cG9ydHMuTm90Rm91bmRSb3V0ZSA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9Ob3RGb3VuZFJvdXRlJyk7XG5leHBvcnRzLlJlZGlyZWN0ID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL1JlZGlyZWN0Jyk7XG5leHBvcnRzLlJvdXRlID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL1JvdXRlJyk7XG5leHBvcnRzLkFjdGl2ZUhhbmRsZXIgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvUm91dGVIYW5kbGVyJyk7XG5leHBvcnRzLlJvdXRlSGFuZGxlciA9IGV4cG9ydHMuQWN0aXZlSGFuZGxlcjtcblxuZXhwb3J0cy5IYXNoTG9jYXRpb24gPSByZXF1aXJlKCcuL2xvY2F0aW9ucy9IYXNoTG9jYXRpb24nKTtcbmV4cG9ydHMuSGlzdG9yeUxvY2F0aW9uID0gcmVxdWlyZSgnLi9sb2NhdGlvbnMvSGlzdG9yeUxvY2F0aW9uJyk7XG5leHBvcnRzLlJlZnJlc2hMb2NhdGlvbiA9IHJlcXVpcmUoJy4vbG9jYXRpb25zL1JlZnJlc2hMb2NhdGlvbicpO1xuZXhwb3J0cy5TdGF0aWNMb2NhdGlvbiA9IHJlcXVpcmUoJy4vbG9jYXRpb25zL1N0YXRpY0xvY2F0aW9uJyk7XG5leHBvcnRzLlRlc3RMb2NhdGlvbiA9IHJlcXVpcmUoJy4vbG9jYXRpb25zL1Rlc3RMb2NhdGlvbicpO1xuXG5leHBvcnRzLkltaXRhdGVCcm93c2VyQmVoYXZpb3IgPSByZXF1aXJlKCcuL2JlaGF2aW9ycy9JbWl0YXRlQnJvd3NlckJlaGF2aW9yJyk7XG5leHBvcnRzLlNjcm9sbFRvVG9wQmVoYXZpb3IgPSByZXF1aXJlKCcuL2JlaGF2aW9ycy9TY3JvbGxUb1RvcEJlaGF2aW9yJyk7XG5cbmV4cG9ydHMuSGlzdG9yeSA9IHJlcXVpcmUoJy4vSGlzdG9yeScpO1xuZXhwb3J0cy5OYXZpZ2F0aW9uID0gcmVxdWlyZSgnLi9OYXZpZ2F0aW9uJyk7XG5leHBvcnRzLlN0YXRlID0gcmVxdWlyZSgnLi9TdGF0ZScpO1xuXG5leHBvcnRzLmNyZWF0ZVJvdXRlID0gcmVxdWlyZSgnLi9Sb3V0ZScpLmNyZWF0ZVJvdXRlO1xuZXhwb3J0cy5jcmVhdGVEZWZhdWx0Um91dGUgPSByZXF1aXJlKCcuL1JvdXRlJykuY3JlYXRlRGVmYXVsdFJvdXRlO1xuZXhwb3J0cy5jcmVhdGVOb3RGb3VuZFJvdXRlID0gcmVxdWlyZSgnLi9Sb3V0ZScpLmNyZWF0ZU5vdEZvdW5kUm91dGU7XG5leHBvcnRzLmNyZWF0ZVJlZGlyZWN0ID0gcmVxdWlyZSgnLi9Sb3V0ZScpLmNyZWF0ZVJlZGlyZWN0O1xuZXhwb3J0cy5jcmVhdGVSb3V0ZXNGcm9tUmVhY3RDaGlsZHJlbiA9IHJlcXVpcmUoJy4vY3JlYXRlUm91dGVzRnJvbVJlYWN0Q2hpbGRyZW4nKTtcblxuZXhwb3J0cy5jcmVhdGUgPSByZXF1aXJlKCcuL2NyZWF0ZVJvdXRlcicpO1xuZXhwb3J0cy5ydW4gPSByZXF1aXJlKCcuL3J1blJvdXRlcicpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuZnVuY3Rpb24gaXNWYWxpZENoaWxkKG9iamVjdCkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgfHwgUmVhY3QuaXNWYWxpZEVsZW1lbnQob2JqZWN0KTtcbn1cblxuZnVuY3Rpb24gaXNSZWFjdENoaWxkcmVuKG9iamVjdCkge1xuICByZXR1cm4gaXNWYWxpZENoaWxkKG9iamVjdCkgfHwgQXJyYXkuaXNBcnJheShvYmplY3QpICYmIG9iamVjdC5ldmVyeShpc1ZhbGlkQ2hpbGQpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzUmVhY3RDaGlsZHJlbjsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBMb2NhdGlvbkFjdGlvbnMgPSByZXF1aXJlKCcuLi9hY3Rpb25zL0xvY2F0aW9uQWN0aW9ucycpO1xudmFyIEhpc3RvcnkgPSByZXF1aXJlKCcuLi9IaXN0b3J5Jyk7XG5cbnZhciBfbGlzdGVuZXJzID0gW107XG52YXIgX2lzTGlzdGVuaW5nID0gZmFsc2U7XG52YXIgX2FjdGlvblR5cGU7XG5cbmZ1bmN0aW9uIG5vdGlmeUNoYW5nZSh0eXBlKSB7XG4gIGlmICh0eXBlID09PSBMb2NhdGlvbkFjdGlvbnMuUFVTSCkgSGlzdG9yeS5sZW5ndGggKz0gMTtcblxuICB2YXIgY2hhbmdlID0ge1xuICAgIHBhdGg6IEhhc2hMb2NhdGlvbi5nZXRDdXJyZW50UGF0aCgpLFxuICAgIHR5cGU6IHR5cGVcbiAgfTtcblxuICBfbGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgbGlzdGVuZXIuY2FsbChIYXNoTG9jYXRpb24sIGNoYW5nZSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBlbnN1cmVTbGFzaCgpIHtcbiAgdmFyIHBhdGggPSBIYXNoTG9jYXRpb24uZ2V0Q3VycmVudFBhdGgoKTtcblxuICBpZiAocGF0aC5jaGFyQXQoMCkgPT09ICcvJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9SGFzaExvY2F0aW9uLnJlcGxhY2UoJy8nICsgcGF0aCk7XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBvbkhhc2hDaGFuZ2UoKSB7XG4gIGlmIChlbnN1cmVTbGFzaCgpKSB7XG4gICAgLy8gSWYgd2UgZG9uJ3QgaGF2ZSBhbiBfYWN0aW9uVHlwZSB0aGVuIGFsbCB3ZSBrbm93IGlzIHRoZSBoYXNoXG4gICAgLy8gY2hhbmdlZC4gSXQgd2FzIHByb2JhYmx5IGNhdXNlZCBieSB0aGUgdXNlciBjbGlja2luZyB0aGUgQmFja1xuICAgIC8vIGJ1dHRvbiwgYnV0IG1heSBoYXZlIGFsc28gYmVlbiB0aGUgRm9yd2FyZCBidXR0b24gb3IgbWFudWFsXG4gICAgLy8gbWFuaXB1bGF0aW9uLiBTbyBqdXN0IGd1ZXNzICdwb3AnLlxuICAgIHZhciBjdXJBY3Rpb25UeXBlID0gX2FjdGlvblR5cGU7XG4gICAgX2FjdGlvblR5cGUgPSBudWxsO1xuICAgIG5vdGlmeUNoYW5nZShjdXJBY3Rpb25UeXBlIHx8IExvY2F0aW9uQWN0aW9ucy5QT1ApO1xuICB9XG59XG5cbi8qKlxuICogQSBMb2NhdGlvbiB0aGF0IHVzZXMgYHdpbmRvdy5sb2NhdGlvbi5oYXNoYC5cbiAqL1xudmFyIEhhc2hMb2NhdGlvbiA9IHtcblxuICBhZGRDaGFuZ2VMaXN0ZW5lcjogZnVuY3Rpb24gYWRkQ2hhbmdlTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICBfbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuXG4gICAgLy8gRG8gdGhpcyBCRUZPUkUgbGlzdGVuaW5nIGZvciBoYXNoY2hhbmdlLlxuICAgIGVuc3VyZVNsYXNoKCk7XG5cbiAgICBpZiAoIV9pc0xpc3RlbmluZykge1xuICAgICAgaWYgKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgb25IYXNoQ2hhbmdlLCBmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cuYXR0YWNoRXZlbnQoJ29uaGFzaGNoYW5nZScsIG9uSGFzaENoYW5nZSk7XG4gICAgICB9XG5cbiAgICAgIF9pc0xpc3RlbmluZyA9IHRydWU7XG4gICAgfVxuICB9LFxuXG4gIHJlbW92ZUNoYW5nZUxpc3RlbmVyOiBmdW5jdGlvbiByZW1vdmVDaGFuZ2VMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgIF9saXN0ZW5lcnMgPSBfbGlzdGVuZXJzLmZpbHRlcihmdW5jdGlvbiAobCkge1xuICAgICAgcmV0dXJuIGwgIT09IGxpc3RlbmVyO1xuICAgIH0pO1xuXG4gICAgaWYgKF9saXN0ZW5lcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICBpZiAod2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCBvbkhhc2hDaGFuZ2UsIGZhbHNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudCgnb25oYXNoY2hhbmdlJywgb25IYXNoQ2hhbmdlKTtcbiAgICAgIH1cblxuICAgICAgX2lzTGlzdGVuaW5nID0gZmFsc2U7XG4gICAgfVxuICB9LFxuXG4gIHB1c2g6IGZ1bmN0aW9uIHB1c2gocGF0aCkge1xuICAgIF9hY3Rpb25UeXBlID0gTG9jYXRpb25BY3Rpb25zLlBVU0g7XG4gICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBwYXRoO1xuICB9LFxuXG4gIHJlcGxhY2U6IGZ1bmN0aW9uIHJlcGxhY2UocGF0aCkge1xuICAgIF9hY3Rpb25UeXBlID0gTG9jYXRpb25BY3Rpb25zLlJFUExBQ0U7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2Uod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaCArICcjJyArIHBhdGgpO1xuICB9LFxuXG4gIHBvcDogZnVuY3Rpb24gcG9wKCkge1xuICAgIF9hY3Rpb25UeXBlID0gTG9jYXRpb25BY3Rpb25zLlBPUDtcbiAgICBIaXN0b3J5LmJhY2soKTtcbiAgfSxcblxuICBnZXRDdXJyZW50UGF0aDogZnVuY3Rpb24gZ2V0Q3VycmVudFBhdGgoKSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSShcbiAgICAvLyBXZSBjYW4ndCB1c2Ugd2luZG93LmxvY2F0aW9uLmhhc2ggaGVyZSBiZWNhdXNlIGl0J3Mgbm90XG4gICAgLy8gY29uc2lzdGVudCBhY3Jvc3MgYnJvd3NlcnMgLSBGaXJlZm94IHdpbGwgcHJlLWRlY29kZSBpdCFcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnIycpWzFdIHx8ICcnKTtcbiAgfSxcblxuICB0b1N0cmluZzogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuICc8SGFzaExvY2F0aW9uPic7XG4gIH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBIYXNoTG9jYXRpb247IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgTG9jYXRpb25BY3Rpb25zID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9Mb2NhdGlvbkFjdGlvbnMnKTtcbnZhciBIaXN0b3J5ID0gcmVxdWlyZSgnLi4vSGlzdG9yeScpO1xuXG52YXIgX2xpc3RlbmVycyA9IFtdO1xudmFyIF9pc0xpc3RlbmluZyA9IGZhbHNlO1xuXG5mdW5jdGlvbiBub3RpZnlDaGFuZ2UodHlwZSkge1xuICB2YXIgY2hhbmdlID0ge1xuICAgIHBhdGg6IEhpc3RvcnlMb2NhdGlvbi5nZXRDdXJyZW50UGF0aCgpLFxuICAgIHR5cGU6IHR5cGVcbiAgfTtcblxuICBfbGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgbGlzdGVuZXIuY2FsbChIaXN0b3J5TG9jYXRpb24sIGNoYW5nZSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBvblBvcFN0YXRlKGV2ZW50KSB7XG4gIGlmIChldmVudC5zdGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuO1xuICB9IC8vIElnbm9yZSBleHRyYW5lb3VzIHBvcHN0YXRlIGV2ZW50cyBpbiBXZWJLaXQuXG5cbiAgbm90aWZ5Q2hhbmdlKExvY2F0aW9uQWN0aW9ucy5QT1ApO1xufVxuXG4vKipcbiAqIEEgTG9jYXRpb24gdGhhdCB1c2VzIEhUTUw1IGhpc3RvcnkuXG4gKi9cbnZhciBIaXN0b3J5TG9jYXRpb24gPSB7XG5cbiAgYWRkQ2hhbmdlTGlzdGVuZXI6IGZ1bmN0aW9uIGFkZENoYW5nZUxpc3RlbmVyKGxpc3RlbmVyKSB7XG4gICAgX2xpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcblxuICAgIGlmICghX2lzTGlzdGVuaW5nKSB7XG4gICAgICBpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgb25Qb3BTdGF0ZSwgZmFsc2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LmF0dGFjaEV2ZW50KCdvbnBvcHN0YXRlJywgb25Qb3BTdGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIF9pc0xpc3RlbmluZyA9IHRydWU7XG4gICAgfVxuICB9LFxuXG4gIHJlbW92ZUNoYW5nZUxpc3RlbmVyOiBmdW5jdGlvbiByZW1vdmVDaGFuZ2VMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgIF9saXN0ZW5lcnMgPSBfbGlzdGVuZXJzLmZpbHRlcihmdW5jdGlvbiAobCkge1xuICAgICAgcmV0dXJuIGwgIT09IGxpc3RlbmVyO1xuICAgIH0pO1xuXG4gICAgaWYgKF9saXN0ZW5lcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICBpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgb25Qb3BTdGF0ZSwgZmFsc2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50KCdvbnBvcHN0YXRlJywgb25Qb3BTdGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIF9pc0xpc3RlbmluZyA9IGZhbHNlO1xuICAgIH1cbiAgfSxcblxuICBwdXNoOiBmdW5jdGlvbiBwdXNoKHBhdGgpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoeyBwYXRoOiBwYXRoIH0sICcnLCBwYXRoKTtcbiAgICBIaXN0b3J5Lmxlbmd0aCArPSAxO1xuICAgIG5vdGlmeUNoYW5nZShMb2NhdGlvbkFjdGlvbnMuUFVTSCk7XG4gIH0sXG5cbiAgcmVwbGFjZTogZnVuY3Rpb24gcmVwbGFjZShwYXRoKSB7XG4gICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKHsgcGF0aDogcGF0aCB9LCAnJywgcGF0aCk7XG4gICAgbm90aWZ5Q2hhbmdlKExvY2F0aW9uQWN0aW9ucy5SRVBMQUNFKTtcbiAgfSxcblxuICBwb3A6IEhpc3RvcnkuYmFjayxcblxuICBnZXRDdXJyZW50UGF0aDogZnVuY3Rpb24gZ2V0Q3VycmVudFBhdGgoKSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSSh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcbiAgfSxcblxuICB0b1N0cmluZzogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuICc8SGlzdG9yeUxvY2F0aW9uPic7XG4gIH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBIaXN0b3J5TG9jYXRpb247IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgSGlzdG9yeUxvY2F0aW9uID0gcmVxdWlyZSgnLi9IaXN0b3J5TG9jYXRpb24nKTtcbnZhciBIaXN0b3J5ID0gcmVxdWlyZSgnLi4vSGlzdG9yeScpO1xuXG4vKipcbiAqIEEgTG9jYXRpb24gdGhhdCB1c2VzIGZ1bGwgcGFnZSByZWZyZXNoZXMuIFRoaXMgaXMgdXNlZCBhc1xuICogdGhlIGZhbGxiYWNrIGZvciBIaXN0b3J5TG9jYXRpb24gaW4gYnJvd3NlcnMgdGhhdCBkbyBub3RcbiAqIHN1cHBvcnQgdGhlIEhUTUw1IGhpc3RvcnkgQVBJLlxuICovXG52YXIgUmVmcmVzaExvY2F0aW9uID0ge1xuXG4gIHB1c2g6IGZ1bmN0aW9uIHB1c2gocGF0aCkge1xuICAgIHdpbmRvdy5sb2NhdGlvbiA9IHBhdGg7XG4gIH0sXG5cbiAgcmVwbGFjZTogZnVuY3Rpb24gcmVwbGFjZShwYXRoKSB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UocGF0aCk7XG4gIH0sXG5cbiAgcG9wOiBIaXN0b3J5LmJhY2ssXG5cbiAgZ2V0Q3VycmVudFBhdGg6IEhpc3RvcnlMb2NhdGlvbi5nZXRDdXJyZW50UGF0aCxcblxuICB0b1N0cmluZzogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuICc8UmVmcmVzaExvY2F0aW9uPic7XG4gIH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWZyZXNoTG9jYXRpb247IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgncmVhY3QvbGliL2ludmFyaWFudCcpO1xuXG5mdW5jdGlvbiB0aHJvd0Nhbm5vdE1vZGlmeSgpIHtcbiAgaW52YXJpYW50KGZhbHNlLCAnWW91IGNhbm5vdCBtb2RpZnkgYSBzdGF0aWMgbG9jYXRpb24nKTtcbn1cblxuLyoqXG4gKiBBIGxvY2F0aW9uIHRoYXQgb25seSBldmVyIGNvbnRhaW5zIGEgc2luZ2xlIHBhdGguIFVzZWZ1bCBpblxuICogc3RhdGVsZXNzIGVudmlyb25tZW50cyBsaWtlIHNlcnZlcnMgd2hlcmUgdGhlcmUgaXMgbm8gcGF0aCBoaXN0b3J5LFxuICogb25seSB0aGUgcGF0aCB0aGF0IHdhcyB1c2VkIGluIHRoZSByZXF1ZXN0LlxuICovXG5cbnZhciBTdGF0aWNMb2NhdGlvbiA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFN0YXRpY0xvY2F0aW9uKHBhdGgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3RhdGljTG9jYXRpb24pO1xuXG4gICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhTdGF0aWNMb2NhdGlvbiwgW3tcbiAgICBrZXk6ICdnZXRDdXJyZW50UGF0aCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEN1cnJlbnRQYXRoKCkge1xuICAgICAgcmV0dXJuIHRoaXMucGF0aDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd0b1N0cmluZycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgcmV0dXJuICc8U3RhdGljTG9jYXRpb24gcGF0aD1cIicgKyB0aGlzLnBhdGggKyAnXCI+JztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU3RhdGljTG9jYXRpb247XG59KSgpO1xuXG4vLyBUT0RPOiBJbmNsdWRlIHRoZXNlIGluIHRoZSBhYm92ZSBjbGFzcyBkZWZpbml0aW9uXG4vLyBvbmNlIHdlIGNhbiB1c2UgRVM3IHByb3BlcnR5IGluaXRpYWxpemVycy5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9iYWJlbC9iYWJlbC9pc3N1ZXMvNjE5XG5cblN0YXRpY0xvY2F0aW9uLnByb3RvdHlwZS5wdXNoID0gdGhyb3dDYW5ub3RNb2RpZnk7XG5TdGF0aWNMb2NhdGlvbi5wcm90b3R5cGUucmVwbGFjZSA9IHRocm93Q2Fubm90TW9kaWZ5O1xuU3RhdGljTG9jYXRpb24ucHJvdG90eXBlLnBvcCA9IHRocm93Q2Fubm90TW9kaWZ5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0YXRpY0xvY2F0aW9uOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9jbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ3JlYWN0L2xpYi9pbnZhcmlhbnQnKTtcbnZhciBMb2NhdGlvbkFjdGlvbnMgPSByZXF1aXJlKCcuLi9hY3Rpb25zL0xvY2F0aW9uQWN0aW9ucycpO1xudmFyIEhpc3RvcnkgPSByZXF1aXJlKCcuLi9IaXN0b3J5Jyk7XG5cbi8qKlxuICogQSBsb2NhdGlvbiB0aGF0IGlzIGNvbnZlbmllbnQgZm9yIHRlc3RpbmcgYW5kIGRvZXMgbm90IHJlcXVpcmUgYSBET00uXG4gKi9cblxudmFyIFRlc3RMb2NhdGlvbiA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFRlc3RMb2NhdGlvbihoaXN0b3J5KSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRlc3RMb2NhdGlvbik7XG5cbiAgICB0aGlzLmhpc3RvcnkgPSBoaXN0b3J5IHx8IFtdO1xuICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gICAgdGhpcy5fdXBkYXRlSGlzdG9yeUxlbmd0aCgpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFRlc3RMb2NhdGlvbiwgW3tcbiAgICBrZXk6ICduZWVkc0RPTScsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnX3VwZGF0ZUhpc3RvcnlMZW5ndGgnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfdXBkYXRlSGlzdG9yeUxlbmd0aCgpIHtcbiAgICAgIEhpc3RvcnkubGVuZ3RoID0gdGhpcy5oaXN0b3J5Lmxlbmd0aDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfbm90aWZ5Q2hhbmdlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX25vdGlmeUNoYW5nZSh0eXBlKSB7XG4gICAgICB2YXIgY2hhbmdlID0ge1xuICAgICAgICBwYXRoOiB0aGlzLmdldEN1cnJlbnRQYXRoKCksXG4gICAgICAgIHR5cGU6IHR5cGVcbiAgICAgIH07XG5cbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB0aGlzLmxpc3RlbmVycy5sZW5ndGg7IGkgPCBsZW47ICsraSkgdGhpcy5saXN0ZW5lcnNbaV0uY2FsbCh0aGlzLCBjaGFuZ2UpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2FkZENoYW5nZUxpc3RlbmVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkQ2hhbmdlTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbW92ZUNoYW5nZUxpc3RlbmVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlQ2hhbmdlTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICAgIHRoaXMubGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnMuZmlsdGVyKGZ1bmN0aW9uIChsKSB7XG4gICAgICAgIHJldHVybiBsICE9PSBsaXN0ZW5lcjtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3B1c2gnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwdXNoKHBhdGgpIHtcbiAgICAgIHRoaXMuaGlzdG9yeS5wdXNoKHBhdGgpO1xuICAgICAgdGhpcy5fdXBkYXRlSGlzdG9yeUxlbmd0aCgpO1xuICAgICAgdGhpcy5fbm90aWZ5Q2hhbmdlKExvY2F0aW9uQWN0aW9ucy5QVVNIKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZXBsYWNlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVwbGFjZShwYXRoKSB7XG4gICAgICBpbnZhcmlhbnQodGhpcy5oaXN0b3J5Lmxlbmd0aCwgJ1lvdSBjYW5ub3QgcmVwbGFjZSB0aGUgY3VycmVudCBwYXRoIHdpdGggbm8gaGlzdG9yeScpO1xuXG4gICAgICB0aGlzLmhpc3RvcnlbdGhpcy5oaXN0b3J5Lmxlbmd0aCAtIDFdID0gcGF0aDtcblxuICAgICAgdGhpcy5fbm90aWZ5Q2hhbmdlKExvY2F0aW9uQWN0aW9ucy5SRVBMQUNFKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdwb3AnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwb3AoKSB7XG4gICAgICB0aGlzLmhpc3RvcnkucG9wKCk7XG4gICAgICB0aGlzLl91cGRhdGVIaXN0b3J5TGVuZ3RoKCk7XG4gICAgICB0aGlzLl9ub3RpZnlDaGFuZ2UoTG9jYXRpb25BY3Rpb25zLlBPUCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0Q3VycmVudFBhdGgnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDdXJyZW50UGF0aCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmhpc3RvcnlbdGhpcy5oaXN0b3J5Lmxlbmd0aCAtIDFdO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3RvU3RyaW5nJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICByZXR1cm4gJzxUZXN0TG9jYXRpb24+JztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gVGVzdExvY2F0aW9uO1xufSkoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBUZXN0TG9jYXRpb247IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY3JlYXRlUm91dGVyID0gcmVxdWlyZSgnLi9jcmVhdGVSb3V0ZXInKTtcblxuLyoqXG4gKiBBIGhpZ2gtbGV2ZWwgY29udmVuaWVuY2UgbWV0aG9kIHRoYXQgY3JlYXRlcywgY29uZmlndXJlcywgYW5kXG4gKiBydW5zIGEgcm91dGVyIGluIG9uZSBzaG90LiBUaGUgbWV0aG9kIHNpZ25hdHVyZSBpczpcbiAqXG4gKiAgIFJvdXRlci5ydW4ocm91dGVzWywgbG9jYXRpb24gXSwgY2FsbGJhY2spO1xuICpcbiAqIFVzaW5nIGB3aW5kb3cubG9jYXRpb24uaGFzaGAgdG8gbWFuYWdlIHRoZSBVUkwsIHlvdSBjb3VsZCBkbzpcbiAqXG4gKiAgIFJvdXRlci5ydW4ocm91dGVzLCBmdW5jdGlvbiAoSGFuZGxlcikge1xuICogICAgIFJlYWN0LnJlbmRlcig8SGFuZGxlci8+LCBkb2N1bWVudC5ib2R5KTtcbiAqICAgfSk7XG4gKiBcbiAqIFVzaW5nIEhUTUw1IGhpc3RvcnkgYW5kIGEgY3VzdG9tIFwiY3Vyc29yXCIgcHJvcDpcbiAqIFxuICogICBSb3V0ZXIucnVuKHJvdXRlcywgUm91dGVyLkhpc3RvcnlMb2NhdGlvbiwgZnVuY3Rpb24gKEhhbmRsZXIpIHtcbiAqICAgICBSZWFjdC5yZW5kZXIoPEhhbmRsZXIgY3Vyc29yPXtjdXJzb3J9Lz4sIGRvY3VtZW50LmJvZHkpO1xuICogICB9KTtcbiAqXG4gKiBSZXR1cm5zIHRoZSBuZXdseSBjcmVhdGVkIHJvdXRlci5cbiAqXG4gKiBOb3RlOiBJZiB5b3UgbmVlZCB0byBzcGVjaWZ5IGZ1cnRoZXIgb3B0aW9ucyBmb3IgeW91ciByb3V0ZXIgc3VjaFxuICogYXMgZXJyb3IvYWJvcnQgaGFuZGxpbmcgb3IgY3VzdG9tIHNjcm9sbCBiZWhhdmlvciwgdXNlIFJvdXRlci5jcmVhdGVcbiAqIGluc3RlYWQuXG4gKlxuICogICB2YXIgcm91dGVyID0gUm91dGVyLmNyZWF0ZShvcHRpb25zKTtcbiAqICAgcm91dGVyLnJ1bihmdW5jdGlvbiAoSGFuZGxlcikge1xuICogICAgIC8vIC4uLlxuICogICB9KTtcbiAqL1xuZnVuY3Rpb24gcnVuUm91dGVyKHJvdXRlcywgbG9jYXRpb24sIGNhbGxiYWNrKSB7XG4gIGlmICh0eXBlb2YgbG9jYXRpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICBjYWxsYmFjayA9IGxvY2F0aW9uO1xuICAgIGxvY2F0aW9uID0gbnVsbDtcbiAgfVxuXG4gIHZhciByb3V0ZXIgPSBjcmVhdGVSb3V0ZXIoe1xuICAgIHJvdXRlczogcm91dGVzLFxuICAgIGxvY2F0aW9uOiBsb2NhdGlvblxuICB9KTtcblxuICByb3V0ZXIucnVuKGNhbGxiYWNrKTtcblxuICByZXR1cm4gcm91dGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJ1blJvdXRlcjsiLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIHN1cHBvcnRzSGlzdG9yeSgpIHtcbiAgLyohIHRha2VuIGZyb20gbW9kZXJuaXpyXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9Nb2Rlcm5penIvTW9kZXJuaXpyL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL01vZGVybml6ci9Nb2Rlcm5penIvYmxvYi9tYXN0ZXIvZmVhdHVyZS1kZXRlY3RzL2hpc3RvcnkuanNcbiAgICogY2hhbmdlZCB0byBhdm9pZCBmYWxzZSBuZWdhdGl2ZXMgZm9yIFdpbmRvd3MgUGhvbmVzOiBodHRwczovL2dpdGh1Yi5jb20vcmFja3QvcmVhY3Qtcm91dGVyL2lzc3Vlcy81ODZcbiAgICovXG4gIHZhciB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gIGlmICgodWEuaW5kZXhPZignQW5kcm9pZCAyLicpICE9PSAtMSB8fCB1YS5pbmRleE9mKCdBbmRyb2lkIDQuMCcpICE9PSAtMSkgJiYgdWEuaW5kZXhPZignTW9iaWxlIFNhZmFyaScpICE9PSAtMSAmJiB1YS5pbmRleE9mKCdDaHJvbWUnKSA9PT0gLTEgJiYgdWEuaW5kZXhPZignV2luZG93cyBQaG9uZScpID09PSAtMSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gd2luZG93Lmhpc3RvcnkgJiYgJ3B1c2hTdGF0ZScgaW4gd2luZG93Lmhpc3Rvcnk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3VwcG9ydHNIaXN0b3J5OyIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gVG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT0gbnVsbCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciBrZXlzO1xuXHR2YXIgdG8gPSBUb09iamVjdCh0YXJnZXQpO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IGFyZ3VtZW50c1tzXTtcblx0XHRrZXlzID0gT2JqZWN0LmtleXMoT2JqZWN0KGZyb20pKTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dG9ba2V5c1tpXV0gPSBmcm9tW2tleXNbaV1dO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliLycpO1xuIiwiLy8gTG9hZCBtb2R1bGVzXG5cbnZhciBTdHJpbmdpZnkgPSByZXF1aXJlKCcuL3N0cmluZ2lmeScpO1xudmFyIFBhcnNlID0gcmVxdWlyZSgnLi9wYXJzZScpO1xuXG5cbi8vIERlY2xhcmUgaW50ZXJuYWxzXG5cbnZhciBpbnRlcm5hbHMgPSB7fTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBzdHJpbmdpZnk6IFN0cmluZ2lmeSxcbiAgICBwYXJzZTogUGFyc2Vcbn07XG4iLCIvLyBMb2FkIG1vZHVsZXNcblxudmFyIFV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG5cbi8vIERlY2xhcmUgaW50ZXJuYWxzXG5cbnZhciBpbnRlcm5hbHMgPSB7XG4gICAgZGVsaW1pdGVyOiAnJicsXG4gICAgZGVwdGg6IDUsXG4gICAgYXJyYXlMaW1pdDogMjAsXG4gICAgcGFyYW1ldGVyTGltaXQ6IDEwMDBcbn07XG5cblxuaW50ZXJuYWxzLnBhcnNlVmFsdWVzID0gZnVuY3Rpb24gKHN0ciwgb3B0aW9ucykge1xuXG4gICAgdmFyIG9iaiA9IHt9O1xuICAgIHZhciBwYXJ0cyA9IHN0ci5zcGxpdChvcHRpb25zLmRlbGltaXRlciwgb3B0aW9ucy5wYXJhbWV0ZXJMaW1pdCA9PT0gSW5maW5pdHkgPyB1bmRlZmluZWQgOiBvcHRpb25zLnBhcmFtZXRlckxpbWl0KTtcblxuICAgIGZvciAodmFyIGkgPSAwLCBpbCA9IHBhcnRzLmxlbmd0aDsgaSA8IGlsOyArK2kpIHtcbiAgICAgICAgdmFyIHBhcnQgPSBwYXJ0c1tpXTtcbiAgICAgICAgdmFyIHBvcyA9IHBhcnQuaW5kZXhPZignXT0nKSA9PT0gLTEgPyBwYXJ0LmluZGV4T2YoJz0nKSA6IHBhcnQuaW5kZXhPZignXT0nKSArIDE7XG5cbiAgICAgICAgaWYgKHBvcyA9PT0gLTEpIHtcbiAgICAgICAgICAgIG9ialtVdGlscy5kZWNvZGUocGFydCldID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gVXRpbHMuZGVjb2RlKHBhcnQuc2xpY2UoMCwgcG9zKSk7XG4gICAgICAgICAgICB2YXIgdmFsID0gVXRpbHMuZGVjb2RlKHBhcnQuc2xpY2UocG9zICsgMSkpO1xuXG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghb2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBvYmpba2V5XSA9IHZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG9ialtrZXldID0gW10uY29uY2F0KG9ialtrZXldKS5jb25jYXQodmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG59O1xuXG5cbmludGVybmFscy5wYXJzZU9iamVjdCA9IGZ1bmN0aW9uIChjaGFpbiwgdmFsLCBvcHRpb25zKSB7XG5cbiAgICBpZiAoIWNoYWluLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gdmFsO1xuICAgIH1cblxuICAgIHZhciByb290ID0gY2hhaW4uc2hpZnQoKTtcblxuICAgIHZhciBvYmogPSB7fTtcbiAgICBpZiAocm9vdCA9PT0gJ1tdJykge1xuICAgICAgICBvYmogPSBbXTtcbiAgICAgICAgb2JqID0gb2JqLmNvbmNhdChpbnRlcm5hbHMucGFyc2VPYmplY3QoY2hhaW4sIHZhbCwgb3B0aW9ucykpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGNsZWFuUm9vdCA9IHJvb3RbMF0gPT09ICdbJyAmJiByb290W3Jvb3QubGVuZ3RoIC0gMV0gPT09ICddJyA/IHJvb3Quc2xpY2UoMSwgcm9vdC5sZW5ndGggLSAxKSA6IHJvb3Q7XG4gICAgICAgIHZhciBpbmRleCA9IHBhcnNlSW50KGNsZWFuUm9vdCwgMTApO1xuICAgICAgICB2YXIgaW5kZXhTdHJpbmcgPSAnJyArIGluZGV4O1xuICAgICAgICBpZiAoIWlzTmFOKGluZGV4KSAmJlxuICAgICAgICAgICAgcm9vdCAhPT0gY2xlYW5Sb290ICYmXG4gICAgICAgICAgICBpbmRleFN0cmluZyA9PT0gY2xlYW5Sb290ICYmXG4gICAgICAgICAgICBpbmRleCA+PSAwICYmXG4gICAgICAgICAgICBpbmRleCA8PSBvcHRpb25zLmFycmF5TGltaXQpIHtcblxuICAgICAgICAgICAgb2JqID0gW107XG4gICAgICAgICAgICBvYmpbaW5kZXhdID0gaW50ZXJuYWxzLnBhcnNlT2JqZWN0KGNoYWluLCB2YWwsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgb2JqW2NsZWFuUm9vdF0gPSBpbnRlcm5hbHMucGFyc2VPYmplY3QoY2hhaW4sIHZhbCwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xufTtcblxuXG5pbnRlcm5hbHMucGFyc2VLZXlzID0gZnVuY3Rpb24gKGtleSwgdmFsLCBvcHRpb25zKSB7XG5cbiAgICBpZiAoIWtleSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVGhlIHJlZ2V4IGNodW5rc1xuXG4gICAgdmFyIHBhcmVudCA9IC9eKFteXFxbXFxdXSopLztcbiAgICB2YXIgY2hpbGQgPSAvKFxcW1teXFxbXFxdXSpcXF0pL2c7XG5cbiAgICAvLyBHZXQgdGhlIHBhcmVudFxuXG4gICAgdmFyIHNlZ21lbnQgPSBwYXJlbnQuZXhlYyhrZXkpO1xuXG4gICAgLy8gRG9uJ3QgYWxsb3cgdGhlbSB0byBvdmVyd3JpdGUgb2JqZWN0IHByb3RvdHlwZSBwcm9wZXJ0aWVzXG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eShzZWdtZW50WzFdKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gU3Rhc2ggdGhlIHBhcmVudCBpZiBpdCBleGlzdHNcblxuICAgIHZhciBrZXlzID0gW107XG4gICAgaWYgKHNlZ21lbnRbMV0pIHtcbiAgICAgICAga2V5cy5wdXNoKHNlZ21lbnRbMV0pO1xuICAgIH1cblxuICAgIC8vIExvb3AgdGhyb3VnaCBjaGlsZHJlbiBhcHBlbmRpbmcgdG8gdGhlIGFycmF5IHVudGlsIHdlIGhpdCBkZXB0aFxuXG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlICgoc2VnbWVudCA9IGNoaWxkLmV4ZWMoa2V5KSkgIT09IG51bGwgJiYgaSA8IG9wdGlvbnMuZGVwdGgpIHtcblxuICAgICAgICArK2k7XG4gICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eShzZWdtZW50WzFdLnJlcGxhY2UoL1xcW3xcXF0vZywgJycpKSkge1xuICAgICAgICAgICAga2V5cy5wdXNoKHNlZ21lbnRbMV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlcmUncyBhIHJlbWFpbmRlciwganVzdCBhZGQgd2hhdGV2ZXIgaXMgbGVmdFxuXG4gICAgaWYgKHNlZ21lbnQpIHtcbiAgICAgICAga2V5cy5wdXNoKCdbJyArIGtleS5zbGljZShzZWdtZW50LmluZGV4KSArICddJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGludGVybmFscy5wYXJzZU9iamVjdChrZXlzLCB2YWwsIG9wdGlvbnMpO1xufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzdHIsIG9wdGlvbnMpIHtcblxuICAgIGlmIChzdHIgPT09ICcnIHx8XG4gICAgICAgIHN0ciA9PT0gbnVsbCB8fFxuICAgICAgICB0eXBlb2Ygc3RyID09PSAndW5kZWZpbmVkJykge1xuXG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBvcHRpb25zLmRlbGltaXRlciA9IHR5cGVvZiBvcHRpb25zLmRlbGltaXRlciA9PT0gJ3N0cmluZycgfHwgVXRpbHMuaXNSZWdFeHAob3B0aW9ucy5kZWxpbWl0ZXIpID8gb3B0aW9ucy5kZWxpbWl0ZXIgOiBpbnRlcm5hbHMuZGVsaW1pdGVyO1xuICAgIG9wdGlvbnMuZGVwdGggPSB0eXBlb2Ygb3B0aW9ucy5kZXB0aCA9PT0gJ251bWJlcicgPyBvcHRpb25zLmRlcHRoIDogaW50ZXJuYWxzLmRlcHRoO1xuICAgIG9wdGlvbnMuYXJyYXlMaW1pdCA9IHR5cGVvZiBvcHRpb25zLmFycmF5TGltaXQgPT09ICdudW1iZXInID8gb3B0aW9ucy5hcnJheUxpbWl0IDogaW50ZXJuYWxzLmFycmF5TGltaXQ7XG4gICAgb3B0aW9ucy5wYXJhbWV0ZXJMaW1pdCA9IHR5cGVvZiBvcHRpb25zLnBhcmFtZXRlckxpbWl0ID09PSAnbnVtYmVyJyA/IG9wdGlvbnMucGFyYW1ldGVyTGltaXQgOiBpbnRlcm5hbHMucGFyYW1ldGVyTGltaXQ7XG5cbiAgICB2YXIgdGVtcE9iaiA9IHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnID8gaW50ZXJuYWxzLnBhcnNlVmFsdWVzKHN0ciwgb3B0aW9ucykgOiBzdHI7XG4gICAgdmFyIG9iaiA9IHt9O1xuXG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSBrZXlzIGFuZCBzZXR1cCB0aGUgbmV3IG9iamVjdFxuXG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh0ZW1wT2JqKTtcbiAgICBmb3IgKHZhciBpID0gMCwgaWwgPSBrZXlzLmxlbmd0aDsgaSA8IGlsOyArK2kpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICAgIHZhciBuZXdPYmogPSBpbnRlcm5hbHMucGFyc2VLZXlzKGtleSwgdGVtcE9ialtrZXldLCBvcHRpb25zKTtcbiAgICAgICAgb2JqID0gVXRpbHMubWVyZ2Uob2JqLCBuZXdPYmopO1xuICAgIH1cblxuICAgIHJldHVybiBVdGlscy5jb21wYWN0KG9iaik7XG59O1xuIiwiLy8gTG9hZCBtb2R1bGVzXG5cbnZhciBVdGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxuXG4vLyBEZWNsYXJlIGludGVybmFsc1xuXG52YXIgaW50ZXJuYWxzID0ge1xuICAgIGRlbGltaXRlcjogJyYnLFxuICAgIGFycmF5UHJlZml4R2VuZXJhdG9yczoge1xuICAgICAgICBicmFja2V0czogZnVuY3Rpb24gKHByZWZpeCwga2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gcHJlZml4ICsgJ1tdJztcbiAgICAgICAgfSxcbiAgICAgICAgaW5kaWNlczogZnVuY3Rpb24gKHByZWZpeCwga2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gcHJlZml4ICsgJ1snICsga2V5ICsgJ10nO1xuICAgICAgICB9LFxuICAgICAgICByZXBlYXQ6IGZ1bmN0aW9uIChwcmVmaXgsIGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIHByZWZpeDtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cblxuaW50ZXJuYWxzLnN0cmluZ2lmeSA9IGZ1bmN0aW9uIChvYmosIHByZWZpeCwgZ2VuZXJhdGVBcnJheVByZWZpeCkge1xuXG4gICAgaWYgKFV0aWxzLmlzQnVmZmVyKG9iaikpIHtcbiAgICAgICAgb2JqID0gb2JqLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG9iaiBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgb2JqID0gb2JqLnRvSVNPU3RyaW5nKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG9iaiA9PT0gbnVsbCkge1xuICAgICAgICBvYmogPSAnJztcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9iaiA9PT0gJ3N0cmluZycgfHxcbiAgICAgICAgdHlwZW9mIG9iaiA9PT0gJ251bWJlcicgfHxcbiAgICAgICAgdHlwZW9mIG9iaiA9PT0gJ2Jvb2xlYW4nKSB7XG5cbiAgICAgICAgcmV0dXJuIFtlbmNvZGVVUklDb21wb25lbnQocHJlZml4KSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChvYmopXTtcbiAgICB9XG5cbiAgICB2YXIgdmFsdWVzID0gW107XG5cbiAgICBpZiAodHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICB9XG5cbiAgICB2YXIgb2JqS2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgZm9yICh2YXIgaSA9IDAsIGlsID0gb2JqS2V5cy5sZW5ndGg7IGkgPCBpbDsgKytpKSB7XG4gICAgICAgIHZhciBrZXkgPSBvYmpLZXlzW2ldO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgICAgICAgICB2YWx1ZXMgPSB2YWx1ZXMuY29uY2F0KGludGVybmFscy5zdHJpbmdpZnkob2JqW2tleV0sIGdlbmVyYXRlQXJyYXlQcmVmaXgocHJlZml4LCBrZXkpLCBnZW5lcmF0ZUFycmF5UHJlZml4KSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZXMgPSB2YWx1ZXMuY29uY2F0KGludGVybmFscy5zdHJpbmdpZnkob2JqW2tleV0sIHByZWZpeCArICdbJyArIGtleSArICddJywgZ2VuZXJhdGVBcnJheVByZWZpeCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlcztcbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqLCBvcHRpb25zKSB7XG5cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgZGVsaW1pdGVyID0gdHlwZW9mIG9wdGlvbnMuZGVsaW1pdGVyID09PSAndW5kZWZpbmVkJyA/IGludGVybmFscy5kZWxpbWl0ZXIgOiBvcHRpb25zLmRlbGltaXRlcjtcblxuICAgIHZhciBrZXlzID0gW107XG5cbiAgICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgfHxcbiAgICAgICAgb2JqID09PSBudWxsKSB7XG5cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIHZhciBhcnJheUZvcm1hdDtcbiAgICBpZiAob3B0aW9ucy5hcnJheUZvcm1hdCBpbiBpbnRlcm5hbHMuYXJyYXlQcmVmaXhHZW5lcmF0b3JzKSB7XG4gICAgICAgIGFycmF5Rm9ybWF0ID0gb3B0aW9ucy5hcnJheUZvcm1hdDtcbiAgICB9XG4gICAgZWxzZSBpZiAoJ2luZGljZXMnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgYXJyYXlGb3JtYXQgPSBvcHRpb25zLmluZGljZXMgPyAnaW5kaWNlcycgOiAncmVwZWF0JztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGFycmF5Rm9ybWF0ID0gJ2luZGljZXMnO1xuICAgIH1cblxuICAgIHZhciBnZW5lcmF0ZUFycmF5UHJlZml4ID0gaW50ZXJuYWxzLmFycmF5UHJlZml4R2VuZXJhdG9yc1thcnJheUZvcm1hdF07XG5cbiAgICB2YXIgb2JqS2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgZm9yICh2YXIgaSA9IDAsIGlsID0gb2JqS2V5cy5sZW5ndGg7IGkgPCBpbDsgKytpKSB7XG4gICAgICAgIHZhciBrZXkgPSBvYmpLZXlzW2ldO1xuICAgICAgICBrZXlzID0ga2V5cy5jb25jYXQoaW50ZXJuYWxzLnN0cmluZ2lmeShvYmpba2V5XSwga2V5LCBnZW5lcmF0ZUFycmF5UHJlZml4KSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGtleXMuam9pbihkZWxpbWl0ZXIpO1xufTtcbiIsIi8vIExvYWQgbW9kdWxlc1xuXG5cbi8vIERlY2xhcmUgaW50ZXJuYWxzXG5cbnZhciBpbnRlcm5hbHMgPSB7fTtcblxuXG5leHBvcnRzLmFycmF5VG9PYmplY3QgPSBmdW5jdGlvbiAoc291cmNlKSB7XG5cbiAgICB2YXIgb2JqID0ge307XG4gICAgZm9yICh2YXIgaSA9IDAsIGlsID0gc291cmNlLmxlbmd0aDsgaSA8IGlsOyArK2kpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzb3VyY2VbaV0gIT09ICd1bmRlZmluZWQnKSB7XG5cbiAgICAgICAgICAgIG9ialtpXSA9IHNvdXJjZVtpXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG59O1xuXG5cbmV4cG9ydHMubWVyZ2UgPSBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblxuICAgIGlmICghc291cmNlKSB7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBzb3VyY2UgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRhcmdldCkpIHtcbiAgICAgICAgICAgIHRhcmdldC5wdXNoKHNvdXJjZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRbc291cmNlXSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdGFyZ2V0ICE9PSAnb2JqZWN0Jykge1xuICAgICAgICB0YXJnZXQgPSBbdGFyZ2V0XS5jb25jYXQoc291cmNlKTtcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0YXJnZXQpICYmXG4gICAgICAgICFBcnJheS5pc0FycmF5KHNvdXJjZSkpIHtcblxuICAgICAgICB0YXJnZXQgPSBleHBvcnRzLmFycmF5VG9PYmplY3QodGFyZ2V0KTtcbiAgICB9XG5cbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gICAgZm9yICh2YXIgayA9IDAsIGtsID0ga2V5cy5sZW5ndGg7IGsgPCBrbDsgKytrKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzW2tdO1xuICAgICAgICB2YXIgdmFsdWUgPSBzb3VyY2Vba2V5XTtcblxuICAgICAgICBpZiAoIXRhcmdldFtrZXldKSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBleHBvcnRzLm1lcmdlKHRhcmdldFtrZXldLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xufTtcblxuXG5leHBvcnRzLmRlY29kZSA9IGZ1bmN0aW9uIChzdHIpIHtcblxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoc3RyLnJlcGxhY2UoL1xcKy9nLCAnICcpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgfVxufTtcblxuXG5leHBvcnRzLmNvbXBhY3QgPSBmdW5jdGlvbiAob2JqLCByZWZzKSB7XG5cbiAgICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgfHxcbiAgICAgICAgb2JqID09PSBudWxsKSB7XG5cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICByZWZzID0gcmVmcyB8fCBbXTtcbiAgICB2YXIgbG9va3VwID0gcmVmcy5pbmRleE9mKG9iaik7XG4gICAgaWYgKGxvb2t1cCAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIHJlZnNbbG9va3VwXTtcbiAgICB9XG5cbiAgICByZWZzLnB1c2gob2JqKTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICAgICAgdmFyIGNvbXBhY3RlZCA9IFtdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBpbCA9IG9iai5sZW5ndGg7IGkgPCBpbDsgKytpKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9ialtpXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb21wYWN0ZWQucHVzaChvYmpbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbXBhY3RlZDtcbiAgICB9XG5cbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgZm9yIChpID0gMCwgaWwgPSBrZXlzLmxlbmd0aDsgaSA8IGlsOyArK2kpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICAgIG9ialtrZXldID0gZXhwb3J0cy5jb21wYWN0KG9ialtrZXldLCByZWZzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xufTtcblxuXG5leHBvcnRzLmlzUmVnRXhwID0gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgUmVnRXhwXSc7XG59O1xuXG5cbmV4cG9ydHMuaXNCdWZmZXIgPSBmdW5jdGlvbiAob2JqKSB7XG5cbiAgICBpZiAob2JqID09PSBudWxsIHx8XG4gICAgICAgIHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiAhIShvYmouY29uc3RydWN0b3IgJiZcbiAgICAgICAgb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyICYmXG4gICAgICAgIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlcihvYmopKTtcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgRXhlY3V0aW9uRW52aXJvbm1lbnRcbiAqL1xuXG4vKmpzbGludCBldmlsOiB0cnVlICovXG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgY2FuVXNlRE9NID0gISEoXG4gICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICB3aW5kb3cuZG9jdW1lbnQgJiYgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpXG4pO1xuXG4vKipcbiAqIFNpbXBsZSwgbGlnaHR3ZWlnaHQgbW9kdWxlIGFzc2lzdGluZyB3aXRoIHRoZSBkZXRlY3Rpb24gYW5kIGNvbnRleHQgb2ZcbiAqIFdvcmtlci4gSGVscHMgYXZvaWQgY2lyY3VsYXIgZGVwZW5kZW5jaWVzIGFuZCBhbGxvd3MgY29kZSB0byByZWFzb24gYWJvdXRcbiAqIHdoZXRoZXIgb3Igbm90IHRoZXkgYXJlIGluIGEgV29ya2VyLCBldmVuIGlmIHRoZXkgbmV2ZXIgaW5jbHVkZSB0aGUgbWFpblxuICogYFJlYWN0V29ya2VyYCBkZXBlbmRlbmN5LlxuICovXG52YXIgRXhlY3V0aW9uRW52aXJvbm1lbnQgPSB7XG5cbiAgY2FuVXNlRE9NOiBjYW5Vc2VET00sXG5cbiAgY2FuVXNlV29ya2VyczogdHlwZW9mIFdvcmtlciAhPT0gJ3VuZGVmaW5lZCcsXG5cbiAgY2FuVXNlRXZlbnRMaXN0ZW5lcnM6XG4gICAgY2FuVXNlRE9NICYmICEhKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyIHx8IHdpbmRvdy5hdHRhY2hFdmVudCksXG5cbiAgY2FuVXNlVmlld3BvcnQ6IGNhblVzZURPTSAmJiAhIXdpbmRvdy5zY3JlZW4sXG5cbiAgaXNJbldvcmtlcjogIWNhblVzZURPTSAvLyBGb3Igbm93LCB0aGlzIGlzIHRydWUgLSBtaWdodCBjaGFuZ2UgaW4gdGhlIGZ1dHVyZS5cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBFeGVjdXRpb25FbnZpcm9ubWVudDtcbiIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTQtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBPYmplY3QuYXNzaWduXG4gKi9cblxuLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLW9iamVjdC5hc3NpZ25cblxuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2VzKSB7XG4gIGlmICh0YXJnZXQgPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gdGFyZ2V0IGNhbm5vdCBiZSBudWxsIG9yIHVuZGVmaW5lZCcpO1xuICB9XG5cbiAgdmFyIHRvID0gT2JqZWN0KHRhcmdldCk7XG4gIHZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbiAgZm9yICh2YXIgbmV4dEluZGV4ID0gMTsgbmV4dEluZGV4IDwgYXJndW1lbnRzLmxlbmd0aDsgbmV4dEluZGV4KyspIHtcbiAgICB2YXIgbmV4dFNvdXJjZSA9IGFyZ3VtZW50c1tuZXh0SW5kZXhdO1xuICAgIGlmIChuZXh0U291cmNlID09IG51bGwpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHZhciBmcm9tID0gT2JqZWN0KG5leHRTb3VyY2UpO1xuXG4gICAgLy8gV2UgZG9uJ3QgY3VycmVudGx5IHN1cHBvcnQgYWNjZXNzb3JzIG5vciBwcm94aWVzLiBUaGVyZWZvcmUgdGhpc1xuICAgIC8vIGNvcHkgY2Fubm90IHRocm93LiBJZiB3ZSBldmVyIHN1cHBvcnRlZCB0aGlzIHRoZW4gd2UgbXVzdCBoYW5kbGVcbiAgICAvLyBleGNlcHRpb25zIGFuZCBzaWRlLWVmZmVjdHMuIFdlIGRvbid0IHN1cHBvcnQgc3ltYm9scyBzbyB0aGV5IHdvbid0XG4gICAgLy8gYmUgdHJhbnNmZXJyZWQuXG5cbiAgICBmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuICAgICAgICB0b1trZXldID0gZnJvbVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0bztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc3NpZ247XG4iLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgZW1wdHlGdW5jdGlvblxuICovXG5cbmZ1bmN0aW9uIG1ha2VFbXB0eUZ1bmN0aW9uKGFyZykge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGFyZztcbiAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGFjY2VwdHMgYW5kIGRpc2NhcmRzIGlucHV0czsgaXQgaGFzIG5vIHNpZGUgZWZmZWN0cy4gVGhpcyBpc1xuICogcHJpbWFyaWx5IHVzZWZ1bCBpZGlvbWF0aWNhbGx5IGZvciBvdmVycmlkYWJsZSBmdW5jdGlvbiBlbmRwb2ludHMgd2hpY2hcbiAqIGFsd2F5cyBuZWVkIHRvIGJlIGNhbGxhYmxlLCBzaW5jZSBKUyBsYWNrcyBhIG51bGwtY2FsbCBpZGlvbSBhbGEgQ29jb2EuXG4gKi9cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb24oKSB7fVxuXG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zID0gbWFrZUVtcHR5RnVuY3Rpb247XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zRmFsc2UgPSBtYWtlRW1wdHlGdW5jdGlvbihmYWxzZSk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVHJ1ZSA9IG1ha2VFbXB0eUZ1bmN0aW9uKHRydWUpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGwgPSBtYWtlRW1wdHlGdW5jdGlvbihudWxsKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUaGlzID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9O1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0FyZ3VtZW50ID0gZnVuY3Rpb24oYXJnKSB7IHJldHVybiBhcmc7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZW1wdHlGdW5jdGlvbjtcbiIsIihmdW5jdGlvbiAocHJvY2Vzcyl7XG4vKipcbiAqIENvcHlyaWdodCAyMDEzLTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgaW52YXJpYW50XG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICpcbiAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAqIGV4cGVjdGluZy5cbiAqXG4gKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICovXG5cbnZhciBpbnZhcmlhbnQgPSBmdW5jdGlvbihjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICBpZiAoXCJwcm9kdWN0aW9uXCIgIT09IHByb2Nlc3MuZW52Lk5PREVfRU5WKSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgK1xuICAgICAgICAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgJ0ludmFyaWFudCBWaW9sYXRpb246ICcgK1xuICAgICAgICBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24oKSB7IHJldHVybiBhcmdzW2FyZ0luZGV4KytdOyB9KVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50O1xuXG59KS5jYWxsKHRoaXMscmVxdWlyZSgnX3Byb2Nlc3MnKSlcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0OnV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltNXZaR1ZmYlc5a2RXeGxjeTl5WldGamRDOXNhV0l2YVc1MllYSnBZVzUwTG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFaUxDSm1hV3hsSWpvaVoyVnVaWEpoZEdWa0xtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaThxS2x4dUlDb2dRMjl3ZVhKcFoyaDBJREl3TVRNdE1qQXhOU3dnUm1GalpXSnZiMnNzSUVsdVl5NWNiaUFxSUVGc2JDQnlhV2RvZEhNZ2NtVnpaWEoyWldRdVhHNGdLbHh1SUNvZ1ZHaHBjeUJ6YjNWeVkyVWdZMjlrWlNCcGN5QnNhV05sYm5ObFpDQjFibVJsY2lCMGFHVWdRbE5FTFhOMGVXeGxJR3hwWTJWdWMyVWdabTkxYm1RZ2FXNGdkR2hsWEc0Z0tpQk1TVU5GVGxORklHWnBiR1VnYVc0Z2RHaGxJSEp2YjNRZ1pHbHlaV04wYjNKNUlHOW1JSFJvYVhNZ2MyOTFjbU5sSUhSeVpXVXVJRUZ1SUdGa1pHbDBhVzl1WVd3Z1ozSmhiblJjYmlBcUlHOW1JSEJoZEdWdWRDQnlhV2RvZEhNZ1kyRnVJR0psSUdadmRXNWtJR2x1SUhSb1pTQlFRVlJGVGxSVElHWnBiR1VnYVc0Z2RHaGxJSE5oYldVZ1pHbHlaV04wYjNKNUxseHVJQ3BjYmlBcUlFQndjbTkyYVdSbGMwMXZaSFZzWlNCcGJuWmhjbWxoYm5SY2JpQXFMMXh1WEc1Y0luVnpaU0J6ZEhKcFkzUmNJanRjYmx4dUx5b3FYRzRnS2lCVmMyVWdhVzUyWVhKcFlXNTBLQ2tnZEc4Z1lYTnpaWEowSUhOMFlYUmxJSGRvYVdOb0lIbHZkWElnY0hKdlozSmhiU0JoYzNOMWJXVnpJSFJ2SUdKbElIUnlkV1V1WEc0Z0tseHVJQ29nVUhKdmRtbGtaU0J6Y0hKcGJuUm1MWE4wZVd4bElHWnZjbTFoZENBb2IyNXNlU0FsY3lCcGN5QnpkWEJ3YjNKMFpXUXBJR0Z1WkNCaGNtZDFiV1Z1ZEhOY2JpQXFJSFJ2SUhCeWIzWnBaR1VnYVc1bWIzSnRZWFJwYjI0Z1lXSnZkWFFnZDJoaGRDQmljbTlyWlNCaGJtUWdkMmhoZENCNWIzVWdkMlZ5WlZ4dUlDb2daWGh3WldOMGFXNW5MbHh1SUNwY2JpQXFJRlJvWlNCcGJuWmhjbWxoYm5RZ2JXVnpjMkZuWlNCM2FXeHNJR0psSUhOMGNtbHdjR1ZrSUdsdUlIQnliMlIxWTNScGIyNHNJR0oxZENCMGFHVWdhVzUyWVhKcFlXNTBYRzRnS2lCM2FXeHNJSEpsYldGcGJpQjBieUJsYm5OMWNtVWdiRzluYVdNZ1pHOWxjeUJ1YjNRZ1pHbG1abVZ5SUdsdUlIQnliMlIxWTNScGIyNHVYRzRnS2k5Y2JseHVkbUZ5SUdsdWRtRnlhV0Z1ZENBOUlHWjFibU4wYVc5dUtHTnZibVJwZEdsdmJpd2dabTl5YldGMExDQmhMQ0JpTENCakxDQmtMQ0JsTENCbUtTQjdYRzRnSUdsbUlDaGNJbkJ5YjJSMVkzUnBiMjVjSWlBaFBUMGdjSEp2WTJWemN5NWxibll1VGs5RVJWOUZUbFlwSUh0Y2JpQWdJQ0JwWmlBb1ptOXliV0YwSUQwOVBTQjFibVJsWm1sdVpXUXBJSHRjYmlBZ0lDQWdJSFJvY205M0lHNWxkeUJGY25KdmNpZ25hVzUyWVhKcFlXNTBJSEpsY1hWcGNtVnpJR0Z1SUdWeWNtOXlJRzFsYzNOaFoyVWdZWEpuZFcxbGJuUW5LVHRjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0JwWmlBb0lXTnZibVJwZEdsdmJpa2dlMXh1SUNBZ0lIWmhjaUJsY25KdmNqdGNiaUFnSUNCcFppQW9abTl5YldGMElEMDlQU0IxYm1SbFptbHVaV1FwSUh0Y2JpQWdJQ0FnSUdWeWNtOXlJRDBnYm1WM0lFVnljbTl5S0Z4dUlDQWdJQ0FnSUNBblRXbHVhV1pwWldRZ1pYaGpaWEIwYVc5dUlHOWpZM1Z5Y21Wa095QjFjMlVnZEdobElHNXZiaTF0YVc1cFptbGxaQ0JrWlhZZ1pXNTJhWEp2Ym0xbGJuUWdKeUFyWEc0Z0lDQWdJQ0FnSUNkbWIzSWdkR2hsSUdaMWJHd2daWEp5YjNJZ2JXVnpjMkZuWlNCaGJtUWdZV1JrYVhScGIyNWhiQ0JvWld4d1puVnNJSGRoY201cGJtZHpMaWRjYmlBZ0lDQWdJQ2s3WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lIWmhjaUJoY21keklEMGdXMkVzSUdJc0lHTXNJR1FzSUdVc0lHWmRPMXh1SUNBZ0lDQWdkbUZ5SUdGeVowbHVaR1Y0SUQwZ01EdGNiaUFnSUNBZ0lHVnljbTl5SUQwZ2JtVjNJRVZ5Y205eUtGeHVJQ0FnSUNBZ0lDQW5TVzUyWVhKcFlXNTBJRlpwYjJ4aGRHbHZiam9nSnlBclhHNGdJQ0FnSUNBZ0lHWnZjbTFoZEM1eVpYQnNZV05sS0M4bGN5OW5MQ0JtZFc1amRHbHZiaWdwSUhzZ2NtVjBkWEp1SUdGeVozTmJZWEpuU1c1a1pYZ3JLMTA3SUgwcFhHNGdJQ0FnSUNBcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdWeWNtOXlMbVp5WVcxbGMxUnZVRzl3SUQwZ01Uc2dMeThnZDJVZ1pHOXVKM1FnWTJGeVpTQmhZbTkxZENCcGJuWmhjbWxoYm5RbmN5QnZkMjRnWm5KaGJXVmNiaUFnSUNCMGFISnZkeUJsY25KdmNqdGNiaUFnZlZ4dWZUdGNibHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JwYm5aaGNtbGhiblE3WEc0aVhYMD0iLCIoZnVuY3Rpb24gKHByb2Nlc3Mpe1xuLyoqXG4gKiBDb3B5cmlnaHQgMjAxNC0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIHdhcm5pbmdcbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKFwiLi9lbXB0eUZ1bmN0aW9uXCIpO1xuXG4vKipcbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgd2FybmluZyA9IGVtcHR5RnVuY3Rpb247XG5cbmlmIChcInByb2R1Y3Rpb25cIiAhPT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYpIHtcbiAgd2FybmluZyA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0ICkge2ZvciAodmFyIGFyZ3M9W10sJF9fMD0yLCRfXzE9YXJndW1lbnRzLmxlbmd0aDskX18wPCRfXzE7JF9fMCsrKSBhcmdzLnB1c2goYXJndW1lbnRzWyRfXzBdKTtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ2B3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgK1xuICAgICAgICAnbWVzc2FnZSBhcmd1bWVudCdcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdC5sZW5ndGggPCAxMCB8fCAvXltzXFxXXSokLy50ZXN0KGZvcm1hdCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ1RoZSB3YXJuaW5nIGZvcm1hdCBzaG91bGQgYmUgYWJsZSB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzICcgK1xuICAgICAgICAnd2FybmluZy4gUGxlYXNlLCB1c2UgYSBtb3JlIGRlc2NyaXB0aXZlIGZvcm1hdCB0aGFuOiAnICsgZm9ybWF0XG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChmb3JtYXQuaW5kZXhPZignRmFpbGVkIENvbXBvc2l0ZSBwcm9wVHlwZTogJykgPT09IDApIHtcbiAgICAgIHJldHVybjsgLy8gSWdub3JlIENvbXBvc2l0ZUNvbXBvbmVudCBwcm9wdHlwZSBjaGVjay5cbiAgICB9XG5cbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24oKSAge3JldHVybiBhcmdzW2FyZ0luZGV4KytdO30pO1xuICAgICAgY29uc29sZS53YXJuKG1lc3NhZ2UpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgIH0gY2F0Y2goeCkge31cbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd2FybmluZztcblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoJ19wcm9jZXNzJykpXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldDp1dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbTV2WkdWZmJXOWtkV3hsY3k5eVpXRmpkQzlzYVdJdmQyRnlibWx1Wnk1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJJaXdpWm1sc1pTSTZJbWRsYm1WeVlYUmxaQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdktpcGNiaUFxSUVOdmNIbHlhV2RvZENBeU1ERTBMVEl3TVRVc0lFWmhZMlZpYjI5ckxDQkpibU11WEc0Z0tpQkJiR3dnY21sbmFIUnpJSEpsYzJWeWRtVmtMbHh1SUNwY2JpQXFJRlJvYVhNZ2MyOTFjbU5sSUdOdlpHVWdhWE1nYkdsalpXNXpaV1FnZFc1a1pYSWdkR2hsSUVKVFJDMXpkSGxzWlNCc2FXTmxibk5sSUdadmRXNWtJR2x1SUhSb1pWeHVJQ29nVEVsRFJVNVRSU0JtYVd4bElHbHVJSFJvWlNCeWIyOTBJR1JwY21WamRHOXllU0J2WmlCMGFHbHpJSE52ZFhKalpTQjBjbVZsTGlCQmJpQmhaR1JwZEdsdmJtRnNJR2R5WVc1MFhHNGdLaUJ2WmlCd1lYUmxiblFnY21sbmFIUnpJR05oYmlCaVpTQm1iM1Z1WkNCcGJpQjBhR1VnVUVGVVJVNVVVeUJtYVd4bElHbHVJSFJvWlNCellXMWxJR1JwY21WamRHOXllUzVjYmlBcVhHNGdLaUJBY0hKdmRtbGtaWE5OYjJSMWJHVWdkMkZ5Ym1sdVoxeHVJQ292WEc1Y2Jsd2lkWE5sSUhOMGNtbGpkRndpTzF4dVhHNTJZWElnWlcxd2RIbEdkVzVqZEdsdmJpQTlJSEpsY1hWcGNtVW9YQ0l1TDJWdGNIUjVSblZ1WTNScGIyNWNJaWs3WEc1Y2JpOHFLbHh1SUNvZ1UybHRhV3hoY2lCMGJ5QnBiblpoY21saGJuUWdZblYwSUc5dWJIa2diRzluY3lCaElIZGhjbTVwYm1jZ2FXWWdkR2hsSUdOdmJtUnBkR2x2YmlCcGN5QnViM1FnYldWMExseHVJQ29nVkdocGN5QmpZVzRnWW1VZ2RYTmxaQ0IwYnlCc2IyY2dhWE56ZFdWeklHbHVJR1JsZG1Wc2IzQnRaVzUwSUdWdWRtbHliMjV0Wlc1MGN5QnBiaUJqY21sMGFXTmhiRnh1SUNvZ2NHRjBhSE11SUZKbGJXOTJhVzVuSUhSb1pTQnNiMmRuYVc1bklHTnZaR1VnWm05eUlIQnliMlIxWTNScGIyNGdaVzUyYVhKdmJtMWxiblJ6SUhkcGJHd2dhMlZsY0NCMGFHVmNiaUFxSUhOaGJXVWdiRzluYVdNZ1lXNWtJR1p2Ykd4dmR5QjBhR1VnYzJGdFpTQmpiMlJsSUhCaGRHaHpMbHh1SUNvdlhHNWNiblpoY2lCM1lYSnVhVzVuSUQwZ1pXMXdkSGxHZFc1amRHbHZianRjYmx4dWFXWWdLRndpY0hKdlpIVmpkR2x2Ymx3aUlDRTlQU0J3Y205alpYTnpMbVZ1ZGk1T1QwUkZYMFZPVmlrZ2UxeHVJQ0IzWVhKdWFXNW5JRDBnWm5WdVkzUnBiMjRvWTI5dVpHbDBhVzl1TENCbWIzSnRZWFFnS1NCN1ptOXlJQ2gyWVhJZ1lYSm5jejFiWFN3a1gxOHdQVElzSkY5Zk1UMWhjbWQxYldWdWRITXViR1Z1WjNSb095UmZYekE4SkY5Zk1Uc2tYMTh3S3lzcElHRnlaM011Y0hWemFDaGhjbWQxYldWdWRITmJKRjlmTUYwcE8xeHVJQ0FnSUdsbUlDaG1iM0p0WVhRZ1BUMDlJSFZ1WkdWbWFXNWxaQ2tnZTF4dUlDQWdJQ0FnZEdoeWIzY2dibVYzSUVWeWNtOXlLRnh1SUNBZ0lDQWdJQ0FuWUhkaGNtNXBibWNvWTI5dVpHbDBhVzl1TENCbWIzSnRZWFFzSUM0dUxtRnlaM01wWUNCeVpYRjFhWEpsY3lCaElIZGhjbTVwYm1jZ0p5QXJYRzRnSUNBZ0lDQWdJQ2R0WlhOellXZGxJR0Z5WjNWdFpXNTBKMXh1SUNBZ0lDQWdLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnBaaUFvWm05eWJXRjBMbXhsYm1kMGFDQThJREV3SUh4OElDOWVXM05jWEZkZEtpUXZMblJsYzNRb1ptOXliV0YwS1NrZ2UxeHVJQ0FnSUNBZ2RHaHliM2NnYm1WM0lFVnljbTl5S0Z4dUlDQWdJQ0FnSUNBblZHaGxJSGRoY201cGJtY2dabTl5YldGMElITm9iM1ZzWkNCaVpTQmhZbXhsSUhSdklIVnVhWEYxWld4NUlHbGtaVzUwYVdaNUlIUm9hWE1nSnlBclhHNGdJQ0FnSUNBZ0lDZDNZWEp1YVc1bkxpQlFiR1ZoYzJVc0lIVnpaU0JoSUcxdmNtVWdaR1Z6WTNKcGNIUnBkbVVnWm05eWJXRjBJSFJvWVc0NklDY2dLeUJtYjNKdFlYUmNiaUFnSUNBZ0lDazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2FXWWdLR1p2Y20xaGRDNXBibVJsZUU5bUtDZEdZV2xzWldRZ1EyOXRjRzl6YVhSbElIQnliM0JVZVhCbE9pQW5LU0E5UFQwZ01Da2dlMXh1SUNBZ0lDQWdjbVYwZFhKdU95QXZMeUJKWjI1dmNtVWdRMjl0Y0c5emFYUmxRMjl0Y0c5dVpXNTBJSEJ5YjNCMGVYQmxJR05vWldOckxseHVJQ0FnSUgxY2JseHVJQ0FnSUdsbUlDZ2hZMjl1WkdsMGFXOXVLU0I3WEc0Z0lDQWdJQ0IyWVhJZ1lYSm5TVzVrWlhnZ1BTQXdPMXh1SUNBZ0lDQWdkbUZ5SUcxbGMzTmhaMlVnUFNBblYyRnlibWx1WnpvZ0p5QXJJR1p2Y20xaGRDNXlaWEJzWVdObEtDOGxjeTluTENCbWRXNWpkR2x2YmlncElDQjdjbVYwZFhKdUlHRnlaM05iWVhKblNXNWtaWGdySzEwN2ZTazdYRzRnSUNBZ0lDQmpiMjV6YjJ4bExuZGhjbTRvYldWemMyRm5aU2s3WEc0Z0lDQWdJQ0IwY25rZ2UxeHVJQ0FnSUNBZ0lDQXZMeUF0TFMwZ1YyVnNZMjl0WlNCMGJ5QmtaV0oxWjJkcGJtY2dVbVZoWTNRZ0xTMHRYRzRnSUNBZ0lDQWdJQzh2SUZSb2FYTWdaWEp5YjNJZ2QyRnpJSFJvY205M2JpQmhjeUJoSUdOdmJuWmxibWxsYm1ObElITnZJSFJvWVhRZ2VXOTFJR05oYmlCMWMyVWdkR2hwY3lCemRHRmphMXh1SUNBZ0lDQWdJQ0F2THlCMGJ5Qm1hVzVrSUhSb1pTQmpZV3hzYzJsMFpTQjBhR0YwSUdOaGRYTmxaQ0IwYUdseklIZGhjbTVwYm1jZ2RHOGdabWx5WlM1Y2JpQWdJQ0FnSUNBZ2RHaHliM2NnYm1WM0lFVnljbTl5S0cxbGMzTmhaMlVwTzF4dUlDQWdJQ0FnZlNCallYUmphQ2g0S1NCN2ZWeHVJQ0FnSUgxY2JpQWdmVHRjYm4xY2JseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQjNZWEp1YVc1bk8xeHVJbDE5Il19
