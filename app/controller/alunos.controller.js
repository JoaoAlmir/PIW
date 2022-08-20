    let alunos = [
    {
        id:1,
        nome:"Marília"
    },
    {
        id: 2,
        nome: "João"
    },
    {
        id:3,
        nome: "Maria"
    }
]

module.exports.obterAluno = function(req, res){
    res.json(alunos);
}