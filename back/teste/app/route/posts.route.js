const controller = require("../controller/posts.controller");

module.exports = function(app){
    app.get("/api/posts", controller.obterPosts);
    app.get("/api/posts/:id", controller.obterPost);
    app.get("/api/posts/:id/comentarios", controller.obterPostsComentario);

    app.post("/api/posts", controller.inserirPost);
    app.delete("/api/posts/:id", controller.removerPost);
}

