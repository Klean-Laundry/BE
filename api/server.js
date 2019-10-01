const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get("/test", (req, res) => {
  res.send(`<h1>test endpoint working</h1>`);
});

module.exports = server;
