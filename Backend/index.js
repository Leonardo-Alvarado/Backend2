// index.js
require('colors');
const Server = require('./server/server');

console.clear();
const servidor = new Server();
servidor.listen();
