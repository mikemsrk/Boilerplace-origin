var React = require('react');

var Bio = React.createClass({
  // TODO: Incorporate Later when Auth is in.

  getInitialState: function(){
    return {
      
    };
  },
  render: function() {
    return (
      <div className="col-md-3"> 
        <h3> Profile </h3>
        <h3>Jason Statham</h3>
        <img src=""className="img-responsive img-circle"></img>
        <p>I enjoy really bad movies.</p>
      </div>
    );
  }
});

module.exports = Bio;