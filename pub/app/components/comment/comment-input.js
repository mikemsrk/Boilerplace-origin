var React = require('react');
var CommentStore = require('../../stores/CommentStore');
var CommentActions = require('../../actions/CommentActions');
var AuthStore = require('../../stores/AuthStore');

var NewComment = React.createClass({
  getInitialState: function(){
    // if(!AuthStore.loggedIn()){
    //   location.hash = '/login';
    // }
    return {
      success: false
    };
  },

  componentDidMount: function(){
    CommentStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function(){
    CommentStore.removeChangeListener(this._onChange);
  },

  addComment: function(){
    // Send action to update user information
    var body = React.findDOMNode(this.refs.body).value.trim();

    if(!body){
      return;
    }

    CommentActions.add({
      body: body
    });

  },

  _onChange: function(){
    // TODO: Bubble this up and update the list
  },


  render: function() {
    return (
      <div className="newComment">
        <h3>New Comment</h3>
        <form onSubmit={this.addComment}>
          <input type="textarea" className="form-control" placeholder="comment..." ref="body" />
          <button type="submit" className="btn btn-success" value="Submit">Submit</button>
        </form>
      </div>
    );
  }
});

module.exports = NewComment;