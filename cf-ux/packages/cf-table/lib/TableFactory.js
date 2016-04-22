var React = require('react');
var table = require('cf-component-table');
var PropTypes = React.PropTypes;
var d = React.createElement;

module.exports = React.createClass({
  displayName: 'TableFactory',

  propTypes: {
    columns: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })).isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired
    })).isRequired
  },

  render: function() {
    var data = this.props;
    var columns = this.props;

    return (
      d(table.Table, null, (
        d(table.TableBody, null, (
          data.map(function(row) {
            return (
              d(table.TableRow, { key: row.id }, (
                columns.map(function(column) {
                  return (
                    d(table.TableCell, { key: column.key }, (
                      row[column.key]
                    ))
                  );
                })
              ))
            );
          })
        ))
      ))
    );
  }
});
