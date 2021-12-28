const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProcesoSchema = new Schema(
    {
        Nombre: {
            type: String,
            required: true,
            unique: true
        },
        FechaInicio: {
            type: Date,
            required: true
        },
        FechaCierre: {
            type: Date,
            required: true
        },
        TipoProceso: {
            type: String,
            required: true
        },
        UsuarioCreacion: {
            type: String,
            required: true
        },
        UsuarioActualizacion: {
            type: String,
            required: true
        },
        EstadoProceso: {
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

module.exports = mongoose.model('proceso', ProcesoSchema);
