var React = require('react');
var PropTypes = React.PropTypes;
var Square = require('./Square');
var Knight = require('./Knight');

var Board = React.createClass({
  propTypes: {
    knightPosition: PropTypes.arrayOf(
      PropTypes.number.isRequired
    ).isRequired
  },

  render: function () {
    return (
      <div>
        <Square black>
          <Knight />
        </Square>
      </div>
    );
  }
});

module.exports = Board;
