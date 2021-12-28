const app = require('./app');

const PORT = process.env.PORT;

const server = app.listen(PORT, console.log("EL servidor se ejecuta en ambiente", process.env.NODE_ENV + " en el puerto " + PORT));

process.on('unhandledRejection', (err, promise) => {
    console.log("Errores", err.message);
    server.close(() => {
        process.exit(1);
    });
});