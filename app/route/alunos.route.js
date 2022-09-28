const controller = require("../controller/alunos.controller");

module.exports = function(app){
    app.post("/alunos/login", controller.login);
    app.get("/alunos", controller.obterAlunos);
    app.get("/alunos/:id", controller.obterAluno);
    app.post("/alunos", controller.inserirAluno);
    app.delete("/alunos/:id",controller.removerAluno);
}
