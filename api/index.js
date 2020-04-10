import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import erroController from './controllers/_erroController';
import authenticationController from './controllers/authenticationController';
import vehicleController from './controllers/vehicleController';
import brandController from './controllers/brandController';
import userController from './controllers/userController';
import modelController from './controllers/modelController';

require('dotenv').config();

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

let vSwaggerHost = process.env.URL_SERVICOS || 'localhost';

vSwaggerHost += ':';

if (process.env.PORTA) vSwaggerHost += process.env.PORTA;
else vSwaggerHost += '8080';

console.log(`Swagger: + ${vSwaggerHost}`);

swaggerDocument.host = vSwaggerHost;

app.use('/api/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


// loading controlers
app.use('/api/authentication', authenticationController);
app.use('/api/users', userController);
app.use('/api/vehicles', vehicleController);
app.use('/api/brands', brandController);
app.use('/api/models', modelController);

app.use('/api/', express.Router());

// Error 
app.use(erroController);

const vPorta = process.env.PORTA || 3001;

app.listen(vPorta, () => {
  console.log(`Executando na porta: ${vPorta}`);
});

module.exports = app;
