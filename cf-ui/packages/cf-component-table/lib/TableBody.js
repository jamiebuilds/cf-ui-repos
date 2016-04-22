var React = require('react');
var d = React.createElement;

module.exports = React.createClass({
  displayName: 'TableBody',

  render: function() {
    return d('tbody', null, (
      this.props.children
    ));
  }
});
