var React = require('react');
var ReactIntl = require('react-intl');
var FormattedRelative = ReactIntl.FormattedRelative;
var FormattedDate = ReactIntl.FormattedDate;

// Front page thread list
var ThreadItem = React.createClass({

  render: function() {
    return (
      <tr>
        <td>{this.props.item.rating}</td>
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