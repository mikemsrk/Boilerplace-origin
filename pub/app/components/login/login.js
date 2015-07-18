var React = require('react');
var LoginForm = require('./login-form');

var Login = React.createClass({
  getInitialState: function(){
    // if(Auth.loggedIn()){
    //   location.hash = '/game';
    // }
    return {
      // error: false,
      // loggedIn: Auth.loggedIn()
    };
  },
  handleLoginSubmit: function(user){

    // TODO: Move this to Auth store

    // var that = this;
    // Auth.login(user.username,user.password,function(authenticated){
    //   if(authenticated){
    //     // TODO: redirect to game
    //     location.hash = '/';
    //   }else{
    //     // TODO: Display warning message - no go
    //     return that.setState({ error: true });
    //   }
    // });
  },
  render: function() {
    return (
      <div className="Auth center-block">
        <h2>Login</h2>
          <LoginForm onLoginSubmit={this.handleLoginSubmit}/>
          {this.state.error && (<p className="error">Bad login information</p>)}
      </div>
    );
  }
});

module.exports = Login;