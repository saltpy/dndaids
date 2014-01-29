"use strict";

var test = require("./test_utils");

var Grid = require("./grid");
var Location = require("./location");
var Piece = require("./piece");

function testBlankGrid() {
  var g = Grid.construct();
  test.assertStructEqual({}, g);
}

function testPiecePlacement() {
  var g = Grid.construct();
  var testPiece = Piece.construct("test");
  var topLeft = Location.construct(0, 0);

  Grid.place(g, testPiece, topLeft);

  test.assertStructEqual(testPiece, Grid.retrieve(g, topLeft));
}

testBlankGrid();
testPiecePlacement();
