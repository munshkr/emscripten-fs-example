# emscripten-example

A simple example project for porting a command-line C program to a JavaScript
library using Emscripten.  Here, the program reads a file and writes its output
to another file.

There is a [similar example](https://github.com/kripken/xml.js/), but instead
of writing a *hacky wrapper* using `sed`, this one uses the `MODULARIZE` option
together with `--pre-js` and `--post-js` wrappers to write input file and read
output file.

## Dependencies

* gcc
* cmake
* emscripten

## Usage

Clone the repository and run `npm run build` to build the library.  You can
then run `npm run test` to test it (check `test.js`).  Also, `npm run
build:debug` builds the project without optimizations.

## License

MIT License

Copyright (c) 2018 Damián Silvani

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
