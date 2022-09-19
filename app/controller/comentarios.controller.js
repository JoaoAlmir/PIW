const Comentario = require("../models/comentario");
const view_comentario = require("../views/comentarios");

// comentarios_filtrados = comentarios_filtrados.filter((comentario)=>(comentario.ira>min_ira));

module.exports.obterComentarios = function(req, res){
    let promise = Comentario.find().exec();
    promise.then(
        function(comentario){
            res.status(200).json(view_comentario.renderMany(comentario));
        }
    ).catch(
        function(error){
            console.log(error);
            res.status(500).json(error);
        }
    )
}


module.exports.obterComentario = function(req, res){
    let id = req.params.id;
    let promise = Comentario.findById(id).exec();
    promise.then(
        function(comentario){
            res.status(200).json(view_comentario.render(comentario));
        }
    ).catch(
        function(error){
            res.status(500).json(error);
        }
    )
}

module.exports.inserirComentario = function(req, res){
    let comentario = req.body;
    let promisse = Comentario.create(comentario);
    
    promisse.then(function(comentario){
        res.status(201).json(view_comentario.render(comentario));
    }).catch(function(error){
        res.status(400).json({mensagem: "sua requisicao nao funfou"})
    })
}





module.exports.removerComentario = function (req, res){
    let id = req.params.id;
    let promise = Comentario.findByIdAndDelete(id)
    promise.then(function(comentario){
        res.status(200).json(view_comentario.render(comentario));
    }).catch(function(error){
        res.status(400).json({mensagem: "sua requisicao nao funfou"})
    })
}
