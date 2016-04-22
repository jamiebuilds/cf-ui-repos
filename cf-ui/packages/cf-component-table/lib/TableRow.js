var React = require('react');
var d = React.createElement;

module.exports = React.createClass({
  displayName: 'TableRow',

  render: function() {
    return d('tr', null, (
      this.props.children
    ));
  }
});
