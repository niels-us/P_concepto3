const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CamposAdicSchema = new Schema(
    {
        FormatoId: {
            type: mongoose.Types.ObjectId,
            required: true
        },
        AreaRolId: {
            type: mongoose.Types.ObjectId,
            required: true
        },
        UsuarioCreacion: {
            type: String,
            required: true,
            trim: true,
        },
        CamposAdic: [{
            Clave: {
                type: String,
                required: true
            },
            Valor: {
                type: String,
                required: true
            }
        }],
        NombreEncabezado: {
            type: String,
            required: true,
            trim: true,
        },
        Area: {
            type: String,
            required: true
        },
        Tipo: {
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

module.exports = mongoose.model('camposAdic', CamposAdicSchema);
