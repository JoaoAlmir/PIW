const Usuario = require("../models/usuario");
const view_usuario = require("../views/usuarios");

// usuarios_filtrados = usuarios_filtrados.filter((usuario)=>(usuario.ira>min_ira));

module.exports.obterUsuarios = function(req, res){
    let promise = Usuario.find().exec();
    promise.then(
        function(usuario){
            res.status(200).json(view_usuario.renderMany(usuario));
        }
    ).catch(
        function(error){
            console.log(error);
            res.status(500).json(error);
        }
    )
}


module.exports.obterUsuario = function(req, res){
    let id = req.params.id;
    let promise = Usuario.findById(id).exec();
    promise.then(
        function(usuario){
            res.status(200).json(view_usuario.render(usuario));
        }
    ).catch(
        function(error){
            res.status(500).json(error);
        }
    )
}

module.exports.inserirUsuario = function(req, res){
    let usuario = req.body;
    let promisse = Usuario.create(usuario);
    
    promisse.then(function(usuario){
        res.status(201).json(view_usuario.render(usuario));
    }).catch(function(error){
        res.status(400).json({mensagem: "sua requisicao nao funfou"})
    })
}





module.exports.removerUsuario = function (req, res){
    let id = req.params.id;
    let promise = Usuario.findByIdAndDelete(id)
    promise.then(function(usuario){
        res.status(200).json(view_usuario.render(usuario));
    }).catch(function(error){
        res.status(400).json({mensagem: "sua requisicao nao funfou"})
    })
}
