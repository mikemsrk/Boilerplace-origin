var React = require('react');
var ThreadStore = require('../../stores/ThreadStore');
var ThreadActions = require('../../actions/ThreadActions');

var CommentList = require('../comment/comment-list');
var CommentInput = require('../comment/comment-input');

var Thread = React.createClass({

  getInitialState: function(){
    return {
      id:this.props.params.id,
      title: '',
      body: '',
      rating: null
    };
  },

  componentDidMount: function(){
    ThreadActions.fetchThread({id:this.state.id});
    ThreadStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function(){
    ThreadStore.removeChangeListener(this._onChange);
  },

  _onChange: function(){
    this.setState({
      title: ThreadStore.getThread().title,
      body: ThreadStore.getThread().body,
      rating: ThreadStore.getThread().rating
    });
    console.log(this.state);
  },

  render: function() {
    console.log(this.state.id);
    return (
      <div className="col-md-12">
        <h3> Thread Title </h3>
        <div className="card">
          <p>Thread Body</p>
        </div> 
        <p> Rating: 0 </p>

        <CommentList threadId={this.state.id}/>
      </div>
    );
  }
});

module.exports = Thread;