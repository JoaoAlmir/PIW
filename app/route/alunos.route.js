const controller = require("../controller/alunos.controller");

module.exports = function(app){
    app.get("/alunos", controller.obterAluno);
    app.get("/alunos/:id", controller.obterAlunoPorId);
    app.post("/alunos", controller.inserirAluno);
    app.delete("/alunos/:id",controller.deleteAluno);
}
