const chokidar = require('chokidar')
module.exports = chokidar.watch(process.cwd(), { ignored: ['**/node_modules/**', '**/package.json', '**/package-lock.json'] })