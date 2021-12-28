const modelFormato = require('../models/formatos');
const mongoose = require('mongoose');

const controller = {

    get: (req, res) => {
        try {
            modelFormato.aggregate([
                {
                    $lookup: {
                        from: "comentarios",
                        localField: "_id",
                        foreignField: "FormatoId",
                        as: "Comentario",
                    },
                },
                {
                    $lookup: {
                        from: "indicadors",
                        localField: "_id",
                        foreignField: "FormatoId",
                        as: "Indicadores",
                    },
                },
                {
                    $lookup: {
                        from: "regisactformatos",
                        localField: "_id",
                        foreignField: "FormatoId",
                        as: "RegisActFormatos",
                    },
                },
                {
                    $lookup: {
                        from: "histdescformatos",
                        localField: "_id",
                        foreignField: "FormatoId",
                        as: "HistDescformatos",
                    },
                },
                {
                    $lookup: {
                        from: "camposadics",
                        localField: "_id",
                        foreignField: "FormatoId",
                        as: "CamposAdics",
                    },
                },
            ])
                .then(result => res.status(200).send({ result }))
        } catch (error) {
            res.status(500).send("error : " + error);
        }
    },

    post: async (req, res) => {
        try {

            const formato = new modelFormato();
            const data = req.body;

            formato.ProcesoId = data.ProcesoId;
            formato.Nombre = data.Nombre;
            formato.Categoria = data.Categoria;
            formato.EstadoFormato = data.EstadoFormato;
            formato.FechaInicio = data.FechaInicio;
            formato.FechaCierre = data.FechaCierre;
            formato.Porcentaje = data.Porcentaje;

            await formato.save()
            res.json({ mensaje: "formato registrado" });
        } catch (error) {
            res.status(500).send("error : " + error);
        }
    },

    put: async (req, res) => {
        try {
            const formato = await modelFormato.findOne({ _id: req.params.id })

            if (req.body.ProcesoId) {
                formato.ProcesoId = req.body.ProcesoId
            }
            if (req.body.Nombre) {
                formato.Nombre = req.body.Nombre
            }
            if (req.body.Categoria) {
                formato.Categoria = req.body.Categoria
            }
            if (req.body.EstadoFormato) {
                formato.EstadoFormato = req.body.EstadoFormato
            }
            if (req.body.FechaInicio) {
                formato.FechaInicio = req.body.FechaInicio
            }
            if (req.body.FechaCierre) {
                formato.FechaCierre = req.body.FechaCierre;
            }
            if (req.body.Porcentaje) {
                formato.Porcentaje = req.body.Porcentaje;
            }

            await formato.save()
            res.json({ mensaje: "formato actualizado" })
        } catch (error) {
            res.status(404).send("error :" + error);
        }

    },

    delete: async (req, res) => {
        try {
            await modelFormato.deleteOne({ _id: req.params.id })
            res.json({ mensaje: "formato eliminado" }).send()
        } catch {
            res.status(404)
            res.send({ error: "formato no existe" })
        }

    },

    duplicarFormato: async (req, res) => {
        try {
            const formato = await modelFormato.findOne({ _id: req.params.id })
            const newFormato = {
                _id: new mongoose.Types.ObjectId(),
                ProcesoId: formato.ProcesoId,
                Nombre: formato.Nombre,
                Categoria: formato.Categoria,
                EstadoFormato: formato.EstadoFormato,
                FechaInicio: formato.FechaInicio,
                FechaCierre: formato.FechaCierre,
                Porcentaje: formato.Porcentaje
            }

            await modelFormato.create(newFormato)
            res.json({ status: 200, formato: newFormato })
        } catch (error) {
            res.status(404).send("error : " + error);
        }
    },
}

module.exports = controller;