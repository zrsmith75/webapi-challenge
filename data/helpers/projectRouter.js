const express = require("express");
const Projects = require("../helpers/projectModel.js");
const Actions = require("../helpers/actionModel.js");
const router = express.Router();

// Use to TEST GET
// router.get("/", (req, res) => {
//   res.status(200).json({
//     message: "inside Projects at /api/projects"
//   });
// });

// GET
router.get("/", (req, res) => {
  Projects.get()
    .then(project => {
      // console.log(project, "Done");
      res.status(200).json(project);
    })
    // .then(project => {
    //   res.status(200).json({ message: "bingo" });
    // })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: "Error retrieving projects"
      });
    });
});

// POST using req.body
router.post("/", (req, res) => {
  Projects.insert(req.body)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: "Unable to add your project"
      });
    });
});

// PUT /:id

// DELETE /:id

module.exports = router;
