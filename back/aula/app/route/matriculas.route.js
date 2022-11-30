const controller = require("../controller/matriculas.controller");
const auth_controller = require("../controller/auth.controller");

module.exports = function(app){
    app.use("/matriculas", auth_controller.checar_token);
    app.post("/matriculas", controller.inserirMatricula);
    app.get("/matriculas", controller.obterMatriculas);
}