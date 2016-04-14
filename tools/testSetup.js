// This file is written in ES5 since it's not
// transpiled by Babel.
var glob = require('glob');

// 1. Register babel for transpiling our code for testing
require('babel-register')();

// 2. Set NODE_ENV to production to assure the .babelrc dev config doesn't apply.
process.env.NODE_ENV = 'production';

// 3. Warn if no test files are found. Mocha will present a crypic message otherwise.
glob("src/**/*.spec.js", {}, function(err, files) {
  if (files.length === 0) {
    console.warn(`No tests found in the src directory. Create at least one test file in the src directory ending in .spec.js. Or, disable tests.`); // eslint-disable-line no-console
    process.exit(1); // Return 1 to signify failure and stop additional processing
  }
});

// 4. Disable webpack-specific features for tests since
// Mocha doesn't know what to do with them.
require.extensions['.css'] = function(){ return null; };
require.extensions['.png'] = function(){ return null; };
require.extensions['.jpg'] = function(){ return null; };

// 5. Configure JSDOM and set global variables
// to simulate a browser environment for tests.
// This way we can test via an in-memory DOM in Node
var jsdom = require('jsdom').jsdom;
var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

documentRef = document; //eslint-disable-line no-undef
