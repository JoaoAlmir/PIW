const http = require("http");
const express_app = require("./config/express.js");
const db = require('./config/database');


//chama a função de express_app
let app = express_app();

http.createServer(app).listen(app.get("port"), function(){
    console.log("Servidor express está rodando na porta: " + app.get("port"));
});

db('mongodb+srv://user:senhaFoda@piw.10qc3a7.mongodb.net/?retryWrites=true&w=majority');
// const modulo = require("./modulo");

