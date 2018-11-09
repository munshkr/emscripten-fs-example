Module['preRun'] = [];
Module['preRun'].push(function() {
  FS.writeFile('inputFile', Module['input']);
});
