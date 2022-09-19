let posts = [
    {
        id: 1,
        texto: "parabens vó",
        likes: 80
    },
    {
        id: 2,
        texto: "acabei de ler um livro",
        likes: 2
    },
    {
        id: 3,
        texto: "quarenta dias para eleicao",
        likes: 402
    },
    {
        id: 4,
        texto: "perdi na loteria",
        likes: 982
    }

]

module.exports.obterPost = function (req, res) {
    res.json(posts);
}

module.exports.obterPosts = function (req, res) {
    let id = req.params.id;
    let post_procurado = posts.filter((posts)=>(posts.id == id));

    if (!post_procurado)
        res.status(404).json({ "mensagem": "Post não encontrado" });

    else{
        res.status(200).json({post_procurado});

    }
}


module.exports.inserirPost = function(req,res){
    let post = req.body;
    posts.push(post);
    res.status(201).json(posts);
}

module.exports.removerPost = function (req, res){
    let id = req.params.id;
    let post_procurado = posts.find(post => (post.id == id));
    if (post_procurado == null)
        res.status(404).json({ "mensagem": "Post não encontrado" });

    else{
        let posts_filtrados = posts.filter((post)=>(post.id != id));
        posts = posts_filtrados;
        res.status(200).json({post_procurado});

    }
}