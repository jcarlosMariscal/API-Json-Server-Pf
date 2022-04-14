// Instalar json-server
const data = require("./db.js");
const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);
server.listen(port);

// https://www.youtube.com/watch?v=I910tH4a2Dc Minuto 15
// https://www.freepng.es
// https://www.pngwing.com/en/search?q=javascript&page=2