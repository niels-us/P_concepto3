const modelCamposAdic = require('../models/camposAdic');

const controller = {

    get: (req, res) => {
        try {
            modelCamposAdic.find()
                .then(result => res.status(200).send({ result }))
        } catch (error) {
            res.status(500).send("error : " + error);
        }
    },

    post: async (req, res) => {
        try {

            const camposAdic = new modelCamposAdic();
            const data = req.body;

            camposAdic.FormatoId = data.FormatoId;
            camposAdic.AreaRolId = data.AreaRolId;
            camposAdic.UsuarioCreacion = data.UsuarioCreacion;
            camposAdic.CamposAdic = data.CamposAdic;
            camposAdic.NombreEncabezado = data.NombreEncabezado;
            camposAdic.Area = data.Area;
            camposAdic.Tipo = data.Tipo;

            await camposAdic.save()
            res.json({ mensaje: "camposAdic registrado" });

        } catch (error) {
            res.status(500).send("error : " + error);
        }
    },

    put: async (req, res) => {
        try {
            const camposAdic = await modelCamposAdic.findOne({ _id: req.params.id })


            if (req.body.FormatoId) {
                camposAdic.FormatoId = req.body.FormatoId
            }
            if (req.body.AreaRolId) {
                camposAdic.AreaRolId = req.body.AreaRolId
            }
            if (req.body.UsuarioCreacion) {
                camposAdic.UsuarioCreacion = req.body.UsuarioCreacion
            }
            if (req.body.CamposAdic) {
                camposAdic.CamposAdic = req.body.CamposAdic
            }
            if (req.body.NombreEncabezado) {
                camposAdic.NombreEncabezado = req.body.NombreEncabezado
            }
            if (req.body.Area) {
                camposAdic.Area = req.body.Area;
            }
            if (req.body.Tipo) {
                camposAdic.Tipo = req.body.Tipo
            }

            await camposAdic.save()
            res.json({ mensaje: "camposAdic actualizado" })
        } catch {
            res.status(404)
            res.json({ error: "camposAdic no existe" })
        }

    },

    delete: async (req, res) => {
        try {
            await modelCamposAdic.deleteOne({ _id: req.params.id })
            res.json({ mensaje: "camposAdic eliminado" }).send()
        } catch {
            res.status(404)
            res.send({ error: "camposAdic no existe" })
        }
    },
}

module.exports = controller;