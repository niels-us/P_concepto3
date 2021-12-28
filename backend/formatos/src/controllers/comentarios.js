const modelComentario = require('../models/comentarios');

const controller = {

    get: (req, res) => {
        try {
            modelComentario.find(function (error, data) {
                res.json(data);
            })
        } catch (error) {
            res.status(500).send("error : " + error);
        }
    },

    post: async (req, res) => {
        try {
            const comentario = new modelComentario();
            const data = req.body;

            comentario.FormatoId = data.FormatoId;
            comentario.UsuarioCreacion = data.UsuarioCreacion;
            comentario.Estado = data.Estado;
            comentario.FechaHora = data.FechaHora;
            comentario.Comentario = data.Comentario;
            comentario.EmisorArea = data.EmisorArea;
            comentario.ReceptorArea = data.ReceptorArea;

            await comentario.save()
            res.json({ mensaje: "Comentario registrado" });

        } catch (error) {
            res.status(500).send("error : " + error);
        }
    },

    put: async (req, res) => {
        try {
            const comentario = await modelComentario.findOne({ _id: req.params.id })


            if (req.body.FormatoId) {
                comentario.FormatoId = req.body.FormatoId
            }
            if (req.body.UsuarioCreacion) {
                comentario.UsuarioCreacion = req.body.UsuarioCreacion
            }
            if (req.body.Estado) {
                comentario.Estado = req.body.Estado
            }
            if (req.body.FechaHora) {
                comentario.FechaHora = req.body.FechaHora
            }
            if (req.body.Comentario) {
                comentario.Comentario = req.body.Comentario;
            }
            if (req.body.EmisorArea) {
                comentario.EmisorArea = req.body.EmisorArea;
            }
            if (req.body.ReceptorArea) {
                comentario.ReceptorArea = req.body.ReceptorArea
            }

            await comentario.save()
            res.json({ mensaje: "Comentario actualizado" })
        } catch {
            res.status(404)
            res.json({ error: "Comentario no existe" })
        }

    },

    delete: async (req, res) => {
        try {
            await modelComentario.deleteOne({ _id: req.params.id })
            res.json({ mensaje: "Comentario eliminado" }).send()
        } catch {
            res.status(404)
            res.send({ error: "Comentario no existe" })
        }
    },
}

module.exports = controller;