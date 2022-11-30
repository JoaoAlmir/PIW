
function render (post){
    return {
        id: post._id,
        nome: post.nome,
        email: post.email,
    }
}

module.exports.render = render

module.exports.renderMany = function(posts){
    return posts.map(render);
}