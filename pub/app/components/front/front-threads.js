var React = require('react');

var Threads = React.createClass({
  getInitialState: function(){
    return {
      
    };
  },

  render: function() {
    return (
      <div className="threads">
        
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
    );
  }
});

module.exports = Threads;