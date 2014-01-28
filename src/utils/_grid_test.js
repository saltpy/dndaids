"use strict";

var assert = require("better-assert");
var Grid = require("./grid");
var Location = require("./location");
var Piece = require("./piece");

function testBlankGrid() {
  var g = Grid.blank();
  assert(null === g.pieces);
}

function testPiecePlacement() {
  var g = Grid.blank();
  var testPiece = Piece.construct("test");
  var topLeft = Location.construct(0, 0);

  g.place(testPiece, topLeft);

  assert(testPiece === g.contentsOfLocation(topLeft));
  assert(null !== g.pieces);
}

testBlankGrid();
testPiecePlacement();
