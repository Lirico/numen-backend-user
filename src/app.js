require('dotenv').config() 
require('./db/config')
const server = require('./server/server')

const PORT = process.env.PORT;

server.listen(PORT, () => console.log("Server funcionando"))