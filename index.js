const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("users.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3009; //  chose port from here like 8080, 3001

server.use(middlewares);
server.use(router);

server.listen(port , ()=>{
    console.log('json server is running on port# ' + port)
})

//NOTE :
//once you run > npm start
//goto to browser and check http://localhost:3009/users