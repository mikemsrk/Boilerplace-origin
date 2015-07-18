var React = require('react');
var Profile = React.createClass({
  // TODO: Incorporate Later when Auth is in.

  // getInitialState: function(){
  //   if(!Auth.loggedIn()){
  //     location.hash = '/login';
  //   }
  //   return {
  //     error: false,
  //     loggedIn: Auth.loggedIn()
  //   };
  // },
  render: function() {
    return (
      <div className="profile">
        <div className="col-md-3"> 
          <h3> Profile </h3>
          <h3>Jason Statham</h3>
          <img src=""className="img-responsive img-circle"></img>
          <p>I enjoy really bad movies.</p>
        </div>
        <div className="col-md-9"> 
          <h3>Threads </h3>
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Body</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
            <tr>
              <td>Jill</td>
              <td>Smith</td> 
              <td>50</td>
            </tr>
            <tr>
              <td>Eve</td>
              <td>Jackson</td> 
              <td>94</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
});

module.exports = Profile;