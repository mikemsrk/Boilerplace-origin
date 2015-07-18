var React = require('react');
var SignupForm = require('./signup-form');

var Signup = React.createClass({
  getInitialState: function(){
    return {
      // error: false,
      // loggedIn: Auth.loggedIn()
    };
  },
  handleSignupSubmit: function(user){
    if(user.error){
      this.handleError(user.error);
      return;
    }
    // TODO: Move this to Auth Store

    // var that = this;
    // Auth.signup(user.username,user.password,user.firstname,user.lastname,function(authenticated){
    //   if(authenticated){
    //     // redirect to game
    //     location.hash = '/';
    //   }else{
    //     // TODO: Display warning message - no go
    //     return that.setState({ error: true });
    //   }
    // });
  },
  handleError: function(err){
    return this.setState({ error: true });
  },
  render: function() {
    return (
      <div className="Auth center-block">
        <h2>Sign up</h2>
          <SignupForm onSignupSubmit={this.handleSignupSubmit}/>
          {this.state.error && (<p className="error">Bad signup information</p>)}
      </div>
    );
  }
});

module.exports = Signup;