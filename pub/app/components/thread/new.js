var React = require('react');

var NewThread = React.createClass({
  getInitialState: function(){
    return {
      
    };
  },

  handleSubmit: function(){
    //TODO: Send Action to Thread

  },

  render: function() {
    return (
      <div className="col-md-12">
        <h3>New Thread</h3>
        <div className="newThread center-block">
            <form onSubmit={this.handleSubmit}>
              <input type="text" className="form-control" placeholder="Title" ref="title" />
              <input type="textarea" className="form-control" placeholder="Body" ref="body" />
              <button type="submit" className="btn btn-success" value="Submit">Submit</button>
            </form>
        </div>
      </div>
    );
  }
});

module.exports = NewThread;