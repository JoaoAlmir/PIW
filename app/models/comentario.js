var mongoose = require('mongoose');
module.exports = function () {
    var schema = mongoose.Schema({
        texto: {
            type: String,
            required: true
        },
        id_post: {
            type: Number,
            required: true
        },
        id_usuario: {
            type: Number,
            required: true
        },
    });
    return mongoose.model('Comentario', schema);
}();
