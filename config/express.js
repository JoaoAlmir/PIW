
const express = require("express");
const routes_aluno = require("../app/route/alunos.route");

module.exports = function(){
    let app = express();
    //Definindo variavel de aplicação
    app.set("port", 8393);
    routes_aluno(app);
    app.use(express.static("./public"))
    return app;
}