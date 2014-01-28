"use strict";

var assert = require("better-assert");
var Grid = require("./grid");

function testBlankGrid() {
  var g = Grid.blank();
  assert(null === g.pieces);
}

testBlankGrid();
