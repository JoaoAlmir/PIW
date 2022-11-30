const Aluno = require("../model/aluno.model");
const view_aluno = require("../view/aluno.view");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.obterAlunos = function(req, res){
    let promise = Aluno.find().exec();
    promise.then(
        function(alunos){
            res.status(200).json(view_aluno.renderMany(alunos));
        }
    ).catch(
        function(error){
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
    aluno = {
        nome: aluno.nome,
        matricula: aluno.matricula,
        senha: bcrypt.hashSync(aluno.senha, 10)
    };
    console.log(aluno);
    let promise = Aluno.create(aluno);
    promise.then(
        function(aluno_){
            console.log("then")
            res.status(201).json(view_aluno.render(aluno_));
        }
    ).catch(
        function(error){
            res.status(500).json(error);
        }
    )
}

module.exports.login = function(req, res){
    let info_login = req.body;
    let promise = Aluno.findOne({matricula: info_login.matricula});
    promise.then(
        function(aluno){
            if(bcrypt.compareSync(info_login.senha, aluno.senha)){
                let token = jwt.sign(
                    {
                        id: aluno._id,
                        matricula: aluno.matricula
                    }
                ,'senhasecreta');
                res.status(201).json({token: token});
            }else{
                res.status(401).send("Login falhou!");
            }
        }
    ).catch(
        function(error){
            res.status(401).send("Login falhou!");
        }
    )
}

module.exports.obterMatriculasDeAluno = function(req, res){
    let id_url = req.params.id;

    let token = req.headers.token;
    let payload = jwt.decode(token);
    let id_token = payload.id;
    console.log(id_token);
    if(id_url == id_token){
        let promise = Aluno.findById(id_url);
        promise.then(
            function(aluno){
                res.status(200).json(view_aluno.render(aluno));
            }
        ).catch(
            function(error){
                res.status(500).send(error);
            }
        )
    }else{
        res.status(401).send("Não autorizado!");
    }
}