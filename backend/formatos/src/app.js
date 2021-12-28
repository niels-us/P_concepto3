const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const connectDatabase = require('./config/database');

dotenv.config();
connectDatabase();
const app = express();
app.use(cors())

app.use(express.json());
app.use(require('./routes/formatos'));
app.use(require('./routes/comentarios'));
app.use(require('./routes/indicadores'));
app.use(require('./routes/camposAdic'));
app.use(require('./routes/index'));

module.exports = app;

