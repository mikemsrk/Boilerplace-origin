var React = require('react');
var AuthStore = require('../../stores/AuthStore');
var Bio = require('./profile-bio');
var BioThreads = require('./profile-threads');

var Profile = React.createClass({
  // TODO: Incorporate Later when Auth is in.

  getInitialState: function(){
    if(!AuthStore.loggedIn()){
      location.hash = '/login';
    }
    return {

    };
  },
  render: function() {
    return (
      <div className="profile">
        <Bio />
        <BioThreads />
      </div>
    );
  }
});

module.exports = Profile;