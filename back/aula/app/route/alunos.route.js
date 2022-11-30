const controller = require("../controller/alunos.controller");
const auth_controller = require("../controller/auth.controller");

module.exports = function(app){
    // {matricula, senha}
    app.post("/alunos/login", controller.login);
    app.post("/alunos", controller.inserirAluno);
    
    app.use("/alunos", auth_controller.checar_token);
    app.get("/alunos/:id/matriculas", controller.obterMatriculasDeAluno);
    app.get("/alunos/:id", controller.obterAluno);
    app.get("/alunos", controller.obterAlunos);
}