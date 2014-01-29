"use strict";

var test = require("./test_utils");

var Piece = require("./piece");

function testPieceHasName() {
  var p = Piece.construct("Test");
  test.assert("Test", p.name);
}

testPieceHasName();
