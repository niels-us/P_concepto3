const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReabrirProcesoSchema = new Schema(
    {
        ProcesoId: {
            type: mongoose.Types.ObjectId,
            required: true
        },
        Usuario: {
            type: String,
            required: true
        },
        FechaHora: {
            type: Date,
            required: true
        },
        Razon: {
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

module.exports = mongoose.model('ReabrirProceso', ReabrirProcesoSchema);