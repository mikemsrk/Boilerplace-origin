var React = require('react');
var ThreadStore = require('../../stores/ThreadStore');
var ThreadActions = require('../../actions/ThreadActions');
var ThreadItem = require('./front-threaditem');


// Front page threads
// Fetch threads by rating by page

var Threads = React.createClass({
  getInitialState: function(){
    return {
      page: 1,
      threads: []
    };
  },

  componentDidMount: function(){
    ThreadActions.fetchPage({page:this.state.page});
    ThreadStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function(){
    ThreadStore.removeChangeListener(this._onChange);
  },

  _onChange: function(){
    this.setState({
      threads: ThreadStore.getThreads().forumThreads
    });
    console.log(this.state.threads);
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
              {this.state.threads.map(function(item){
                return (
                  <ThreadItem key={item.thread_id} item={item}/>
                );
              })}
            </tbody>

          </table>
          
      </div>
    );
  }
});

module.exports = Threads;