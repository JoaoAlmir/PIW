
function render (post){
    return {
        id: post._id,
        texto: post.texto,
        likes: post.likes,
        id_usuario: id_usuario
    }
}

module.exports.render = render

module.exports.renderMany = function(posts){
    return posts.map(render);
}