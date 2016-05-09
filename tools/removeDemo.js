// This script removes demo app files
import rimraf from 'rimraf';
import fs from 'fs';
import colors from 'colors'; // eslint-disable-line no-unused-vars

/* eslint-disable no-console */

const pathsToRemove = [
  './src/actions/*',
  './src/businessLogic',
  './src/components/*',
  './src/containers/*',
  './src/images',
  './src/reducers/*',
  './src/store/*',
  './src/styles',
  './src/routes.js',
  './src/index.js'
];

function removePath(path, callback) {
  rimraf(path, error => {
    if (error) throw new Error(error);
    callback();
  });
}

function createSpecFile() {
  const fileContent = '// You must have at least one test file in this directory or Mocha will throw an error.';
  fs.writeFile('./src/components/emptyTest.spec.js', fileContent, error => {
    if (error) throw new Error(error);
  });
}

let numPathsRemoved = 0;
pathsToRemove.map(path => {
  removePath(path, () => {
    numPathsRemoved++;
    if (numPathsRemoved === pathsToRemove.length) { // All paths have been processed
      createSpecFile(); // Now we can create files since we're done deleting.
    }
  });
});

console.log('Demo app removed.'.green);
