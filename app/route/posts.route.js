const controller = require("../controller/posts.controller");

module.exports = function(app){
    app.get("/posts", controller.obterPost);
    app.get("/posts/:id", controller.obterPostPorId);
    app.post("/posts, controller", controller.inserirPost);
}

