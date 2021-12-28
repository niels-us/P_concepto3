const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FormatoSchema = new Schema(
    {
        ProcesoId: {
            type: mongoose.Types.ObjectId,
            required: true
        },
        Nombre: {
            type: String,
            required: true,
            trim: true,
        },
        Categoria: {
            type: String,
            required: true,
            trim: true
        },
        EstadoFormato: {
            type: String,
            required: true,
            trim: true,
        },
        FechaInicio: {
            type: Date,
            required: true
        },
        FechaCierre: {
            type: Date,
            required: true
        },
        Porcentaje: {
            type: Number,
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

module.exports = mongoose.model('formato', FormatoSchema);
