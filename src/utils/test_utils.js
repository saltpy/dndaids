"use strict";

var assert = require("better-assert");

exports.assertSameType = function(a, b) {
  assert(Object.prototype.toString.call(a) === Object.prototype.toString.call(b));
};

exports.assertArrayEqual = function(a, b) {
  exports.assertSameType(a, b);
  assert(a.length === b.length);
  for (var i = 0; i < a.length; i++) {
    assert(a[i] === b[i]);
  }
};

exports.assertStructEqual = function(a, b) {
  exports.assertArrayEqual(Object.keys(a).sort(), Object.keys(b).sort());
};
