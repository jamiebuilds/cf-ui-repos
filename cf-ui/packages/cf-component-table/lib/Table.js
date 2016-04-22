var React = require('react');
var d = React.createElement;

module.exports = React.createClass({
  displayName: 'Table',

  render: function() {
    return d('table', null, (
      this.props.children
    ));
  }
});
