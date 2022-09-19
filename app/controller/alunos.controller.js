const Aluno = require("../models/aluno");
const view_aluno = require("../views/alunos");

// alunos_filtrados = alunos_filtrados.filter((aluno)=>(aluno.ira>min_ira));
module.exports.obterAlunos = function(req, res){
    let promise = Aluno.find().exec();
    promise.then(
        function(aluno){
            res.status(200).json(view_aluno.renderMany(aluno));
        }
    ).catch(
        function(error){
            console.log(error);
            res.status(500).json(error);
        }
    )
}


module.exports.obterAluno = function(req, res){
    let id = req.params.id;
    let promise = Aluno.findById(id).exec();
    promise.then(
        function(aluno){
            res.status(200).json(view_aluno.render(aluno));
        }
    ).catch(
        function(error){
            res.status(500).json(error);
        }
    )
}

module.exports.inserirAluno = function(req, res){
    let aluno = req.body;
    let promisse = Aluno.create(aluno);
    
    promisse.then(function(aluno){
        res.status(201).json(view_aluno.render(aluno));
    }).catch(function(error){
        res.status(400).json({mensagem: "sua requisicao nao funfou"})
    })
}





module.exports.removerAluno = function (req, res){
    let id = req.params.id;
    let promise = Aluno.findByIdAndDelete(id)
    promise.then(function(aluno){
        res.status(200).json(view_aluno.render(aluno));
    }).catch(function(error){
        res.status(400).json({mensagem: "sua requisicao nao funfou"})
    })
}
