const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 1234;

//Routes
const departamentoRoutes = require('./src/routes/departamentoRoutes');
const empleadoRoutes = require('./src/routes/empleadoRoutes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    res.sendFile(path.join(`${__dirname}/public/index.html`));
});

app.use('/api', departamentoRoutes);
app.use('/api', empleadoRoutes);

app.listen(port, () => {
    console.log(`URL http://localhost:${ port }`);
});