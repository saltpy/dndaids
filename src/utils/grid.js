"use strict";

exports.construct = function(x, y) {
  if (typeof x === undefined) x = 0;
  if (typeof y === undefined) y = 0;
  var struct = {};
  struct.x = x;
  struct.y = y;
  return struct;
};

exports.place = function(grid, piece, loc) {
  grid[loc] = piece;
};

exports.retrieve = function(grid, loc) {
  return grid[loc];
};
