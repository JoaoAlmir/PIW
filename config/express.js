
const express = require("express");
const routes_aluno = require("../app/route/alunos.route");
const routes_usuario = require("../app/route/usuarios.route");
const routes_post = require("../app/route/posts.route");
const routes_comentario = require("../app/route/comentario.route");

module.exports = function(){
    let app = express(); 
    //Definindo variavel de aplicação
    app.set("port", 9999);
    app.use(express.json());
    app.use(express.urlencoded({ extended: false })); 
    routes_aluno(app);
    routes_usuario(app);
    routes_post(app);
    routes_comentario(app);
    //app.use(express.static("./public")) <- padrao
    return app;
}

