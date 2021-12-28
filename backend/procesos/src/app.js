const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors')
const connectDatabase = require('./config/database');

dotenv.config();
connectDatabase();
const app = express();
app.use(cors())

app.use(express.json());
app.use(require('./routes/procesos'));
app.use(require('./routes/medioVerificacion'));
app.use(require('./routes/reabrirProceso'));
app.use(require('./routes/index'));

module.exports = app;

