/** @jsx React.DOM */
var React = require('react');
var Router = require('react-router');
var Profile = require('./components/profile/profile');
var Front = require('./components/front/front');
var Navbar = require('./components/navbar/navbar');
var Login = require('./components/login/login');
var Logout = require('./components/logout/logout');
var Signup = require('./components/signup/signup');

var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;
var Navigation = Router.Navigation;
var Link = Router.Link;

// var Store = require('../stores/Store.js');
// var actions = require('../actions/actions.js');


var App = React.createClass({

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
      <div className="container-fluid">
        <Navbar/>
        <RouteHandler/>
      </div>
    );
  }
});

var routes = (
  <Route path="/" handler={App}>
    <DefaultRoute handler={Front}/>
    <Route path="profile" handler={Profile}/>
    <Route path="login" handler={Login}/>
    <Route path="logout" handler={Logout}/>
    <Route path="signup" handler={Signup}/>
  </Route>
);

// TODO: Incorporate later.
// var routes = (
//   <Route path="/" handler={App}>
//     <DefaultRoute path="main" handler={Main}/>
//     <Route path="profile" handler={Profile}/>
//     <Route path="login" handler={Login}/>
//     <Route path="logout" handler={Logout}/>
//     <Route path="signup" handler={Signup}/>
//     <Route path="game" handler={Game} onEnter={requireAuth()}/>
//     <Route path="vr" handler={Environment}/>
//   </Route>
// );

Router.run(routes, Router.HashLocation, function(Root){
  React.render(<Root/>, document.getElementById('app'));
});
	
module.exports = App;
