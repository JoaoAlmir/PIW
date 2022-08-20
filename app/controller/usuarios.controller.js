let usuarios = [
    {
        id:1,
        nome:"Marília",
        email:"mar@gmail.com",
        senha:"6312412"
    },
    {
        id: 2,
        nome: "João",
        email:"jooo@gmail.com",
        senha:"43aw214"
    },
    {
        id:3,
        nome: "Francisco",
        email:"cisco@gmail.com",
        senha:"793aw214"
    },
    {
        id:4,
        nome: "Pedro",
        email:"pepepe@gmail.com",
        senha:"qqw3aw214"
    }
]

module.exports.obterAluno = function(req, res){
    res.json(alunos);
}