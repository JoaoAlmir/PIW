const Aluno = require("../models/aluno");
const view_aluno = require("../views/alunos");
const bcrypt = require("bcrypt");

// alunos_filtrados = alunos_filtrados.filter((aluno)=>(aluno.ira>min_ira));


module.exports.login = function (req, res) {
    let info_login = req.body;
    let promise = Aluno.findOne({ matricula: info_login.matricula });
    promise.then(
        function (aluno) {
            if (bcrypt.compareSync(info_login.senha, aluno.senha)) {
                res.status(200).send('login ok');
            
            }
            else {
                res.status(401).send("login falhou");

            }
        }
    ).catch(
        function (error) {
            res.status(401).send("login falhou");
        }
    )

}

module.exports.obterAlunos = function (req, res) {
    let promise = Aluno.find().exec();
    promise.then(
        function (aluno) {
            res.status(200).json(view_aluno.renderMany(aluno));
        }
    ).catch(
        function (error) {
            console.log(error);
            res.status(500).json(error);
        }
    )
}


module.exports.obterAluno = function (req, res) {
    let id = req.params.id;
    let promise = Aluno.findById(id).exec();
    promise.then(
        function (aluno) {
            res.status(200).json(view_aluno.render(aluno));
        }
    ).catch(
        function (error) {
            res.status(500).json(error);
        }
    )
}

module.exports.inserirAluno = function (req, res) {
    let aluno = req.body;
    aluno = {
        nome: aluno.nome,
        matricula: aluno.matricula,
        senha: bcrypt.hashSync(aluno.senha, 10),
    }
    let promisse = Aluno.create(aluno);

    promisse.then(function (aluno) {
        res.status(201).json(view_aluno.render(aluno));
    }).catch(function (error) {
        res.status(400).json({ mensagem: "sua requisicao nao funfou" })
    })
}





module.exports.removerAluno = function (req, res) {
    let id = req.params.id;
    let promise = Aluno.findByIdAndDelete(id)
    promise.then(function (aluno) {
        res.status(200).json(view_aluno.render(aluno));
    }).catch(function (error) {
        res.status(400).json({ mensagem: "sua requisicao nao funfou" })
    })
}
