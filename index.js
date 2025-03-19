require('dotenv').config();

const { PORT = 3000 } = process.env;
const express = require('express');
const server = express();
const cors = require('cors')

const bodyParser = require('body-parser');
server.use(bodyParser.json());

const morgan = require('morgan');
server.use(morgan('dev'));

server.use((req, res, next) => {
  console.log("<____Body Logger START____>");
  console.log(req.body);
  console.log("<_____Body Logger END_____>");

  next();
});

const apiRouter = require('./api');
server.use('/api', apiRouter);

// const { client } = require('./db/client');
// client.connect();

server.listen(PORT, () => {
  console.log("The server is up on port", PORT);
});
server.use(cors({origin: "http://localhost:5173"}));
server.use(express.json());