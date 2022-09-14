

module.exports.obterAluno = function (req, res) {
   
    // alunos_filtrados = alunos_filtrados.filter((aluno)=>(aluno.ira>min_ira));
   
    let promise = Aluno.find().exec();
    promise.then(
        function(alunos){
            res.status(200).json(alunos);
        }
    ).catch(
        function(error){
            res.status(500).json(error);
        }
    )


}

module.exports.obterAlunoPorId = function (req, res) {
    let id = req.params.id;
    let aluno_procurado = alunos.find(aluno => (aluno.id == id));

    if (aluno_procurado == null)
        res.status(404).json({ "mensagem": "Aluno não encontrado" });

    else
        res.status(200).json({aluno_procurado});

}

module.exports.inserirAluno = function(req, res){
    let aluno = req.body;
    alunos.push(aluno);
    res.status(201).json(alunos);
}

module.exports.deleteAluno = function (req, res){
    let id = req.params.id;
    let aluno_procurado = alunos.find(aluno => (aluno.id == id));
    if (aluno_procurado == null)
        res.status(404).json({ "mensagem": "Aluno não encontrado" });

    else{
        let alunos_filtrados = alunos.filter((aluno)=>(aluno.id != id));
        alunos = alunos_filtrados;
        res.status(200).json({aluno_procurado});

    }
}
