var React = require('react');

// Front page thread list
var ThreadItem = React.createClass({

  render: function() {
    return (
      <tr>
        <td>{this.props.item.title}</td>
        <td>{this.props.item.body}</td>
        <td>{this.props.item.rating}</td>
      </tr>
    );
  }
});

module.exports = ThreadItem;