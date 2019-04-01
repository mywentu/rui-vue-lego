'use strict'
// const { execSync } = require('child_process');
// const staticVersion = (execSync('git symbolic-ref --short -q HEAD', {})).toString().replace('\n', '');
module.exports = {
  NODE_ENV: '"production"',
  PROJECT_NAME: "collectionCN",
  // OUT_PATH: staticVersion === 'master' ? (new Date()).getTime() + '' : staticVersion  
}