function render (comentario){
    return {
        texto: comentario.texto,
        id_post: comentario.id_post,
        id_usuario: comentario.id_usuario
    }
}

module.exports.render = render

module.exports.renderMany = function(comentarios){
    return comentarios.map(render);
}