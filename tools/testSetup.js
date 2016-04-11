// Tests are placed alongside files under test.
// This file does the following:
// 1. Registers babel for transpiling our code for testing
// 2. Requires jsdom so we can test via an in-memory DOM in Node
// 3. Sets up global vars that mimic a browser.

/*eslint-disable no-var*/

process.env.NODE_ENV = 'test'; // this assures the .babelrc dev config doesn't apply.

// Disable webpack-specific features for tests since
// Mocha doesn't know what to do with them.
require.extensions['.css'] = function(){ return null; };
require.extensions['.png'] = function(){ return null; };
require.extensions['.jpg'] = function(){ return null; };

require('babel-register')();

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
