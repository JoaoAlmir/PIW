let usuarios = [
    {
        id: 1,
        nome: "Marília",
        email: "mar@gmail.com",
        senha: "6312412"
    },
    {
        id: 2,
        nome: "João",
        email: "jooo@gmail.com",
        senha: "43aw214"
    },
    {
        id: 3,
        nome: "Francisco",
        email: "cisco@gmail.com",
        senha: "793aw214"
    },
    {
        id: 4,
        nome: "Pedro",
        email: "pepepe@gmail.com",
        senha: "qqw3aw214"
    }
]

module.exports.obterUsuario = function (req, res) {
    res.json(usuarios);
}

module.exports.obterUsuarioPorId = function (req, res) {
    let id = req.params.id;
    let usuario_procurado = usuarios.find(usuarios => (usuarios.id == id))

    if (usuario_procurado == null)
        res.status(404).json({ "mensagem": "Usuario não encontrado" });

    else
        res.status(200).json({ usuario_procurado });
}


module.exports.inserirUsuario = function(req,res){
    let usuario = req.body;
    console.log(req.body);
    usuarios.push(usuario);
    res.status(201).json(usuarios);
}

module.exports.deleteUsuario = function (req, res){
    let id = req.params.id;
    let usuario_procurado = usuarios.find(usuario => (usuario.id == id));
    if (usuario_procurado == null)
        res.status(404).json({ "mensagem": "usuario não encontrado" });

    else{
        let usuarios_filtrados = usuarios.filter((usuario)=>(usuario.id != id));
        usuarios = usuarios_filtrados;
        res.status(200).json({usuario_procurado});

    }
}
