const controller = require("../controller/usuarios.controller");

module.exports = function(app){
    app.get("/usuarios", controller.obterUsuario);
    app.get("/usuarios/:id", controller.obterUsuarioPorId);
    app.post("/usuarios",controller.inserirUsuario);
    app.delete("/usuarios/:id", controller.deleteUsuario);

}
