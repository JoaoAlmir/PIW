const controller = require("../controller/alunos.controller");

module.exports = function(app){
    app.get("/alunos", controller.obterAluno);
}
