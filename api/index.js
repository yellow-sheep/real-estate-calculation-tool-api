import config from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import HomeMortgageRoutes from './server/routes/HomeMortgage'

config.config();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/', HomeMortgageRoutes);

// when a random route is inputed
app.get('*', (req, res) => res.status(404).send({
    message: 'endpoint does not exist',
  }));

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);
