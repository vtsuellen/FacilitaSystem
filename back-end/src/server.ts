const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'facilitaSystem',
  'DATABASE_USER',
  'DATABASE_PASSWORD',
  {
    host: 'localhost',
    dialect: 'mysql',
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database: ', error);
  });

import express from 'express';

import { Router, Request, Response } from 'express';

const app = express();

const route = Router();

app.use(express.json());

route.get('/', (req: Request, res: Response) => {
  res.json({ message: 'hello world with Typescript ' });
});

app.use(route);

const PORT = 2122;
app.listen(2122, () => `Server is running on port ${PORT}`);
