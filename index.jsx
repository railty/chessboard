'use strict'
var React = require('react');
var Knight = require('./Board');
React.render(
  <Board knightPosition={[0, 0]} />,
  document.getElementById('content')
);
