const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MedioVerificacionSchema = new Schema(
    {
        ProcesoId: {
            type: mongoose.Types.ObjectId,
            required: true
        },
        UsuarioCreacion: {
            type: String,
            required: true
        },
        Url: {
            type: String,
            required: true
        },
        Nombre: {
            type: String,
            required: true,
            trim: true
        }
    },
    {
        timestamps: {
            createdAt: 'FechaCreacion',
            updatedAt: 'FechaActualizacion'
        },
        versionKey: false
    }
);

module.exports = mongoose.model('MedioVerificacion', MedioVerificacionSchema);