var React = require('react');
var d = React.createElement;

module.exports = React.createClass({
  displayName: 'TableCell',

  render: function() {
    return d('td', null, (
      this.props.children
    ));
  }
});
