Module['postRun'] = [];
Module['postRun'].push(function() {
  var output = FS.readFile('outputFile', { encoding: 'utf8' });
  Module['resolve'](output);
});
