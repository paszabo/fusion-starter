// This script removes demo app files
import rimraf from 'rimraf';
import fs from 'fs';
import {chalkSuccess} from './chalkConfig';

/* eslint-disable no-console */

const pathsToRemove = [
  './src/actions/*',
  './src/utils',
  './src/components/*',
  './src/containers/*',
  './src/reducers/*',
  './src/store/store.spec.js',
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

function createFile(file) {
  fs.writeFile(file.path, file.content, error => {
    if (error) throw new Error(error);
  });
}

function moveTemplates() {
  fs.rename('./buildTools/templates/HelloWorld.js', './src/components/HelloWorld.js');
  fs.rename('./buildTools/templates/HelloWorld.spec.js', './src/components/HelloWorld.spec.js');
  fs.rename('./buildTools/templates/index.js', './src/index.js');
  fs.rename('./buildTools/templates/rootReducer.js', './src/reducers/index.js');
}

let numPathsRemoved = 0;
pathsToRemove.map(path => {
  removePath(path, () => {
    numPathsRemoved++;
    if (numPathsRemoved === pathsToRemove.length) { // All paths have been processed
      // Now we can create files since we're done deleting.
      // Move templates over to their proper place
      moveTemplates();
    }
  });
});

console.log(chalkSuccess('Demo app removed.'));
