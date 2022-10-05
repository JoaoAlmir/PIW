const controller = require("../controller/alunos.controller");
const controller_auth = require("../controller/auth")
module.exports = function(app){


    app.post("/alunos/login", controller.login);
    app.delete("/alunos/:id",controller.removerAluno);
    app.post("/alunos", controller.inserirAluno);
    
    app.use("/alunos",controller_auth.checar_token);

    app.get("/alunos", controller.obterAlunos);
    app.get("/alunos/:id", controller.obterAluno);
}
