const modelMedioVerificacion = require('../models/medioVerificacion');

const controller = {

    get: async (req, res) => {
        try {
            modelMedioVerificacion.find()
                .then(result => res.status(200).send({ result }))
        } catch (error) {
            res.status(500).send("error : " + error);
        }
    },

    post: async (req, res) => {
        try {
            const medioVerificacion = new modelMedioVerificacion();
            const data = req.body;

            medioVerificacion.ProcesoId = data.ProcesoId;
            medioVerificacion.UsuarioCreacion = data.UsuarioCreacion;
            medioVerificacion.Url = data.Url;
            medioVerificacion.Nombre = data.Nombre;

            await medioVerificacion.save()
            res.json({ mensaje: "medioVerificacion registrado" });

        } catch (error) {
            res.status(500).send("error :" + error);
        }
    },

    put: async (req, res) => {

        try {
            const medioVerificacion = await modelMedioVerificacion.findOne({ _id: req.params.id })

            if (req.body.ProcesoId) {
                medioVerificacion.ProcesoId = req.body.ProcesoId;
            }
            if (req.body.UsuarioCreacion) {
                medioVerificacion.UsuarioCreacion = req.body.UsuarioCreacion;
            }
            if (req.body.Url) {
                medioVerificacion.Url = req.body.Url;
            }
            if (req.body.Nombre) {
                medioVerificacion.Nombre = req.body.Nombre
            }

            await medioVerificacion.save()
            res.json({ mensaje: "medioVerificacion actualizado" })
        } catch {
            res.status(404)
            res.json({ error: "medioVerificacion no existe" })
        }

    },

    delete: async (req, res) => {
        try {
            await modelMedioVerificacion.deleteOne({ _id: req.params.id })
            res.json({ mensaje: "medioVerificacion eliminado" }).send()
        } catch {
            res.status(404)
            res.send({ error: "medioVerificacion no existe" })
        }

    }
}

module.exports = controller;