const modelProceso = require('../models/procesos');

const controller = {

    get: async (req, res) => {
        try {

            modelProceso.aggregate([
                {
                    $lookup: {
                        from: "formatos",
                        localField: "_id",
                        foreignField: "ProcesoId",
                        as: "Formatos",
                    },
                },
                {
                    $lookup: {
                        from: "medioverificacions",
                        localField: "_id",
                        foreignField: "ProcesoId",
                        as: "MedioVerificacion",
                    },
                },
                {
                    $lookup: {
                        from: "reabrirprocesos",
                        localField: "_id",
                        foreignField: "ProcesoId",
                        as: "ReabrirProcesos",
                    },
                },
                {
                    $lookup: {
                        from: "regisactprocesos",
                        localField: "_id",
                        foreignField: "ProcesoId",
                        as: "RegisActProcesos",
                    },
                },
                {
                    $lookup: {
                        from: "notificacions",
                        localField: "_id",
                        foreignField: "ProcesoId",
                        as: "Notificacion",
                    },
                },
            ])
                .then((result) => {
                    return res.status(200).send({
                        result,
                    });
                })

        } catch (error) {
            res.status(500).send("error : " + error);
        }

    },

    post: async (req, res) => {
        try {
            const proceso = new modelProceso();
            const data = req.body;

            proceso.Nombre = data.Nombre;
            proceso.FechaInicio = data.FechaInicio;
            proceso.FechaCierre = data.FechaCierre;
            proceso.TipoProceso = data.TipoProceso;
            proceso.UsuarioCreacion = data.UsuarioCreacion;
            proceso.UsuarioActualizacion = data.UsuarioActualizacion;
            proceso.EstadoProceso = data.EstadoProceso;

            await proceso.save()
            res.json({ mensaje: "proceso registrado" });

        } catch (error) {
            res.status(500).send("error :" + error);
        }
    },

    put: async (req, res) => {
        try {
            const proceso = await modelProceso.findOne({ _id: req.params.id })

            if (req.body.Nombre) {
                proceso.Nombre = req.body.Nombre
            }
            if (req.body.FechaInicio) {
                proceso.FechaInicio = req.body.FechaInicio;
            }
            if (req.body.FechaCierre) {
                proceso.FechaCierre = req.body.FechaCierre;
            }
            if (req.body.TipoProceso) {
                proceso.TipoProceso = req.body.TipoProceso;
            }
            if (req.body.UsuarioCreacion) {
                proceso.UsuarioCreacion = req.body.UsuarioCreacion;
            }
            if (req.body.UsuarioActualizacion) {
                proceso.UsuarioActualizacion = req.body.UsuarioActualizacion;
            }
            if (req.body.EstadoProceso) {
                proceso.EstadoProceso = req.body.EstadoProceso;
            }

            await proceso.save()
            res.json({ mensaje: "proceso actualizado" })
        } catch {
            res.status(404)
            res.json({ error: "proceso no existe" })
        }

    },

    delete: async (req, res) => {
        try {
            await modelProceso.deleteOne({ _id: req.params.id })
            res.json({ mensaje: "proceso eliminado" }).send()
        } catch {
            res.status(404)
            res.send({ error: "proceso no existe" })
        }

    },
}

module.exports = controller;