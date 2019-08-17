const express = require("express");
// const helment = require('helmet');
// const logger = require('morgan');

// const actionRouter = require("../data/helpers/actionRouter.js");
// const projectRouter = require("../data/helpers/projectRouter.js");

const server = express();
server.use(express.json());
// server.use(helmet())

// server.use("/api/actions", actionRouter);
// server.use("/api/projects", projectRouter);
// GET
server.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Lambda School"
  });
});

// POST

module.exports = server;
