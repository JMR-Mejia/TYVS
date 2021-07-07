const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const debug = require("debug")("app:server");

const config = require("./config");

const app = express();

//Middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());

app.listen(config.port, () => {
  debug(`Listening http://localhost:${config.port}`);
});
