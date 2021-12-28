const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ComentarioSchema = new Schema(
    {
        FormatoId: {
            type: mongoose.Types.ObjectId,
            required: true
        },
        UsuarioCreacion: {
            type: String,
            required: true,
            trim: true,
        },
        Estado: {
            type: String,
            required: true,
            trim: true,
        },
        FechaHora: {
            type: Date,
            required: true
        },
        Comentario: {
            type: String,
            required: true
        },
        EmisorArea: {
            type: String,
            required: true
        },
        ReceptorArea: {
            type: String,
            required: true
        },
    },
    {
        timestamps: {
            createdAt: 'FechaCreacion',
            updatedAt: 'FechaActualizacion'
        },
        versionKey: false
    }
);

module.exports = mongoose.model('comentario', ComentarioSchema);
