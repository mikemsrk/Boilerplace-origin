var React = require('react');
var ReactIntl = require('react-intl');
var FormattedRelative = ReactIntl.FormattedRelative;
var FormattedDate = ReactIntl.FormattedDate;

// Front page thread list
var ThreadItem = React.createClass({

  upVote: function(){
    this.props.onUpVote(this.props.item.thread_id);
    React.findDOMNode(this.refs.up).className = '';
    React.findDOMNode(this.refs.down).className="glyphicon glyphicon-chevron-down"
    this.props.item.rating++;
  },

  downVote: function(){
    this.props.onDownVote(this.props.item.thread_id);
    React.findDOMNode(this.refs.down).className = '';
    React.findDOMNode(this.refs.up).className = "glyphicon glyphicon-chevron-up";
    this.props.item.rating--;
  },

  render: function() {
    return (
      <tr>
        <td>
          <a href="#" ref="down" className="glyphicon glyphicon-chevron-down" aria-hidden="true" onClick={this.downVote}></a> {this.props.item.rating} <a href="#" ref="up" className="glyphicon glyphicon-chevron-up" aria-hidden="true" onClick={this.upVote}></a></td>
        <td>{this.props.item.title}</td>
        <td>{this.props.item.body}</td>
        <td>User: {this.props.item.creator_user_id}</td>

        <td>
          <FormattedDate
            value={new Date(this.props.item.creation_time)}
            day="numeric"
            month="long"
            year="numeric" />
        </td>

        <td>
          <FormattedRelative 
            value={String(this.props.item.last_update_time)} />
        </td>

      </tr>
    );
  }
});

module.exports = ThreadItem;