const controller = require("../controller/usuarios.controller");

module.exports = function(app){
    app.get("/api/usuarios", controller.obterUsuarios);
    app.get("/api/usuarios/:id", controller.obterUsuario);
    app.get("/api/usuarios/:id/posts", controller.obterUsuarioPost);
    app.post("/api/usuarios",controller.inserirUsuario);
    app.delete("/api/usuarios/:id", controller.removerUsuario);

}
