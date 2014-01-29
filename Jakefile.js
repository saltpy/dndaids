/*global desc, task, jake, fail, complete, directory */

(function() {
  "use strict";

  desc("Build and Test");
  task("default", ["clean", "lint", "test"]);

  desc("Clean");
  task("clean", []);

  desc("Lint");
  task("lint", function() {
    var lint = require("./build/lint/lint_runner.js");

    var srcFiles = new jake.FileList();
    srcFiles.include("**/*.js");
    srcFiles.exclude("node_modules");
    srcFiles.exclude("*.conf.js");

    var options = nodeLintOptions();

    var passed = lint.validateFileList(srcFiles.toArray(), options, {});
    if (! passed) fail("Linting failed.");
  });

  desc("Test");
  task("test", [], function() {
    require("urun")(__dirname, {
      include: /_*_test.js$/,
      reporter: "BashReporter",
      verbose: true
    });
    complete();
  }, { async: true });

  function nodeLintOptions() {
    return {
      bitwise:true,
      curly:false,
      eqeqeq:true,
      forin:true,
      immed:true,
      latedef:true,
      newcap:true,
      noarg:true,
      noempty:true,
      nonew:true,
      regexp:true,
      undef:true,
      strict:true,
      trailing:true,
      node:true
    };
  }
}());
