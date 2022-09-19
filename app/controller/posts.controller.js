const Post = require("../models/post");
const view_post = require("../views/posts");

module.exports.obterPosts = function(req, res){
    let promise = Post.find().exec();
    promise.then(
        function(post){
            res.status(200).json(view_post.renderMany(post));
        }
    ).catch(
        function(error){
            console.log(error);
            res.status(500).json(error);
        }
    )
}


module.exports.obterPost = function(req, res){
    let id = req.params.id;
    let promise = Post.findById(id).exec();
    promise.then(
        function(post){
            res.status(200).json(view_post.render(post));
        }
    ).catch(
        function(error){
            console.log(error);
            res.status(500).json(error);
        }
    )
}

module.exports.inserirPost = function(req, res){
    let post = req.body;
    let promisse = Post.create(post);
    
    promisse.then(function(post){
        res.status(201).json(view_post.render(post));
    }).catch(function(error){
        console.log(error);
        res.status(400).json({mensagem: "sua requisicao nao funfou"})
    })
}





module.exports.removerPost = function (req, res){
    let id = req.params.id;
    let promise = Post.findByIdAndDelete(id)
    promise.then(function(post){
        res.status(200).json(view_post.render(post));
    }).catch(function(error){
        res.status(400).json({mensagem: "sua requisicao nao funfou"})
    })
}
