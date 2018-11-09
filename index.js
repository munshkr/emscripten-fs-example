const Module = require('./lib/example.js')

module.exports = input => {
  return new Promise((resolve, reject) => {
    Module({
      'input': input,
      'resolve': resolve,
      'arguments': ['inputFile', 'outputFile']
    });
  });
}
