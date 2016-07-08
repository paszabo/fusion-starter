/* eslint-disable */
var exec = require('child_process').exec;
exec('npm -v', function (err, stdout, stderr) {
  if (err) throw err;
  if (parseFloat(stdout) < 4) {
    throw new Error('ERROR: Fusion Starter requires npm version 4.0 or greater.');
    process.exit(1);
  }
});
