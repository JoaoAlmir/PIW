const controller = require("../controller/comentarios.controller");

module.exports = function(app){
    app.get("/api/comentarios", controller.obterComentarios);
    app.post("/api/comentarios", controller.inserirComentario);
    app.delete("/api/comentarios/:id", controller.removerComentario);
}

