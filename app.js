const Server = require('./models/server');

require ('dotenv').config(); //importacion para usar las variables de entorno

const server = new Server();

server.listen();