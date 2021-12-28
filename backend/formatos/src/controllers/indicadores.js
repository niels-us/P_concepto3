const modelIndicador = require('../models/indicadores');

const controller = {

    get: async (req, res) => {
        try {
            modelIndicador.find()
                .then(result => res.status(200).send({ result }))
        } catch (error) {
            res.status(500).send("error : " + error);
        }
    },

    post: async (req, res) => {
        try {
            const indicador = new modelIndicador();
            const data = req.body;

            indicador.FormatoId = data.FormatoId;
            indicador.MVerificacionId = data.MVerificacionId;
            indicador.MedioVerificacion = data.MedioVerificacion;
            indicador.Folio = data.Folio;
            indicador.Observacion = data.Observacion;

            await indicador.save()
            res.json({ mensaje: "indicador registrado" });

        } catch (error) {
            res.status(500).send("error : " + error);
        }
    },

    put: async (req, res) => {
        try {
            const indicador = await modelIndicador.findOne({ _id: req.params.id })
            const data = req.body;

            // console.log(indicador);
            console.log(data);

            if (req.body.FormatoId) {
                indicador.FormatoId = req.body.FormatoId
            }
            if (req.body.MVerificacionId) {
                indicador.MVerificacionId = req.body.MVerificacionId
            }
            if (req.body.MedioVerificacion) {
                indicador.MedioVerificacion = req.body.MedioVerificacion
            }
            if (req.body.Folio) {
                indicador.Folio = req.body.Folio
            }
            if (req.body.Observacion) {
                indicador.Observacion = req.body.Observacion
            }

            await indicador.save()
            res.json({ mensaje: "indicador actualizado" })
        } catch (error){
            res.status(404)
            res.json({ error: "indicador no existe " + error })
        }

    },

    delete: async (req, res) => {
        try {
            await modelIndicador.deleteOne({ _id: req.params.id })
            res.json({ mensaje: "indicador eliminado" }).send()
        } catch {
            res.status(404)
            res.send({ error: "indicador no existe" })
        }
    },
}

module.exports = controller;