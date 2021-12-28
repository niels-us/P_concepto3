const modelReabrirProceso = require('../models/reabrirProceso');

const controller = {

    get: (req, res) => {
        try {
            modelReabrirProceso.find(function (error, data) {
                res.json(data);
            })

        } catch (error) {
            res.status(500).send("error : " + error);
        }
    },

    post: (req, res) => {
        try {
            const reabrirProceso = new modelReabrirProceso();
            const data = req.body;

            reabrirProceso.ProcesoId = data.ProcesoId;
            reabrirProceso.Usuario = data.Usuario;
            reabrirProceso.FechaHora = data.FechaHora;
            reabrirProceso.Razon = data.Razon;

            reabrirProceso.save(function (error) {
                res.json({ mensaje: "reabrirProceso registrado" });
            })
        } catch (error) {
            res.status(500).send("error :" + error);
        }
    },

    put: async (req, res) => {
        try {
            const reabrirProceso = await modelReabrirProceso.findOne({ _id: req.params.id })

            if (req.body.ProcesoId) {
                reabrirProceso.ProcesoId = req.body.ProcesoId;
            }
            if (req.body.Usuario) {
                reabrirProceso.Usuario = req.body.Usuario;
            }
            if (req.body.FechaHora) {
                reabrirProceso.FechaHora = req.body.FechaHora;
            }
            if (req.body.Razon) {
                reabrirProceso.Razon = req.body.Razon;
            }

            await reabrirProceso.save()
            res.json({ mensaje: "reabrirProceso actualizado" })
        } catch {
            res.status(404)
            res.json({ error: "reabrirProceso no existe" })
        }

    },

    delete: async (req, res) => {
        try {
            await modelReabrirProceso.deleteOne({ _id: req.params.id })
            res.json({ mensaje: "reabrirProceso eliminado" }).send()
        } catch {
            res.status(404)
            res.send({ error: "reabrirProceso no existe" })
        }

    }
}

module.exports = controller;