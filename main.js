const http = require("http");
const express_app = require("./config/express.js");

//chama a função de express_app
let app = express_app();

http.createServer(app).listen(app.get("port"), function(){
    console.log("Servidor express está rodando na porta: " + app.get("port"));
});

// const modulo = require("./modulo");

// console.log("Hello world");
// console.log(modulo);
// console.log(modulo.add(3,4));