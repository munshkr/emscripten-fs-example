const cat = require('./index.js')

cat('hello there').then(
  result => console.log('OK, result: ' + result),
  error => console.error('Something failed: ' + error)
);
