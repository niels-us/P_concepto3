const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IndicadorSchema = new Schema(
    {
        FormatoId: {
            type: mongoose.Types.ObjectId,
            required: true
        },
        MVerificacionId: {
            type: mongoose.Types.ObjectId,
            required: true
        },
        MedioVerificacion: {
            type: String,
            required: true,
        },
        Folio: {
            type: String,
            required: true,
            trim: true,
        },
        Observacion: {
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

module.exports = mongoose.model('Indicador', IndicadorSchema);