"use strict";

exports.construct = function() {
  return {};
};

exports.place = function(grid, piece, loc) {
  grid[loc] = piece;
};

exports.retrieve = function(grid, loc) {
  return grid[loc];
};
