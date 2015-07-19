var React = require('react');
var Threads = require('./front-threads');
var Link = require('react-router').Link;

var Front = React.createClass({

  getInitialState: function(){
    return {
      
    };
  },

  render: function() {
    return (
      <div className="col-md-12"> 
        <Link className="btn btn-info" to="/new">New</Link>
        <Threads />
      </div>
    );
  }
});

module.exports = Front;