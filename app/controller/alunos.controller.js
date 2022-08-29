let alunos = [
    {
        id: 1,
        nome: "Marília",
        ira: 2000
    },
    {
        id: 2,
        nome: "João",
        ira:5000
    },
    {
        id: 3,
        nome: "Maria",
        ira:6000
    }
]

module.exports.obterAluno = function (req, res) {
    //console.log("acesso obterAluno detectado");

    let alunos_filtrados = alunos;

    if(req.query.min_ira){
        let min_ira = req.query.min_ira;
        
        alunos_filtrados = alunos_filtrados.filter((aluno)=>(aluno.ira>min_ira));
    }

    if(req.query.max_ira){
        let max_ira = req.query.max_ira;
        
        alunos_filtrados = alunos_filtrados.filter((aluno)=>(aluno.ira<max_ira));
     
    }

    res.json(alunos_filtrados);
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
