/**
* Programmer: Raden Fadhil Anugerah Ardiwilaga
* Filename: index
* Contact: fadhilanugrah21@upi.edu
* Date: 12 June 2023
* summary: Main of the back end
* */

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';

import * as dotenv from 'dotenv';

import mongoose from 'mongoose';

import pinRouter from './routes/pin.routes.js';
import userRouter from './routes/user.routes.js';
// configuration for swagger documentation
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Travel Map API',
      version: '0.1.0',
      description: 'This is an API for the Utami Bakery Web',
      license: {
        name: 'MIT',
        url: 'https://spdx.org/licenses/MIT.html',
      },
      contact: {
        name: 'SoluTech',
        url: 'solutech.tech',
        email: 'solutech@gmail.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:5000',
      },
    ],
  },
  apis: ['./src/routes/*.js',
    './src/models/*.js',
    './src/controllers/*.js'],
};
const init = () => {
  // setting up server
  const server = express();
  server.use(bodyParser.json({ limit: '10mb', extended: true }));
  server.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
  server.use(cors());

  // register the routes
  server.use('/pins', pinRouter);
  server.use('/users', userRouter);
   // get env from .env file
  dotenv.config();
  // get port from .env
  const PORT = process.env.PORT || 5000;
  // setting up swagger
  const specs = swaggerJSDoc(options);
  server.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));

  // start the server
  mongoose.connect(process.env.MONGOOSE_CONNECT_URL)
    .then(() => server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`)))
    .catch((error) => console.log(error.message));
};

init();