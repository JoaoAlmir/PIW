const controller = require("../controller/alunos.controller");
<<<<<<< HEAD
const controller_auth = require("../controller/auth")
module.exports = function(app){


    app.post("/alunos/login", controller.login);
    app.delete("/alunos/:id",controller.removerAluno);
    app.post("/alunos", controller.inserirAluno);
    
    app.use("/alunos",controller_auth.checar_token);

    app.get("/alunos", controller.obterAlunos);
    app.get("/alunos/:id", controller.obterAluno);
}
=======
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
>>>>>>> 545d02495265474ad83210936a5f0311414d652f
