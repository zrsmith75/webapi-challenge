const express = require("express");
const Projects = require("../helpers/projectModel.js");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "inside Projects at /api/projects"
  });
});

module.exports = router;
