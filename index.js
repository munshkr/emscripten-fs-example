const Module = require('./lib/example.js')

module.exports = input => {
  return new Promise((resolve, reject) => {
    let postRun = () => {
      const output = Module['output'];
      resolve(output);
    };

    Module({
      'input': input,
      'arguments': ['inputFile', 'outputFile'],
      'postRun': [postRun]
    });
  });
}
