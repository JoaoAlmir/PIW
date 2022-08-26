
const express = require("express");
const routes_aluno = require("../app/route/alunos.route");
const routes_usuario = require("../app/route/usuarios.route");
const routes_post = require("../app/route/posts.route");


module.exports = function(){
    let app = express(); 
    //Definindo variavel de aplicação
    app.set("port", 9999);
    routes_aluno(app);
    routes_usuario(app);
    routes_post(app);
    app.use(express.json());
    app.use(express.urlencoded({extended:false}));
    //app.use(express.static("./public")) <- padrao
    return app;
}