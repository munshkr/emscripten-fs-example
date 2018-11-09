const assert = require('assert');
const cat = require('./index.js');

cat('hello there').then(
  result => {
    assert.equal(result, 'hello there')
    console.log('Tests OK!')
  },
  error => assert.fail(error)
);
