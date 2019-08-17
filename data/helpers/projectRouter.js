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
    .then(getProject => {
      // console.log(project, "Done");
      res.status(200).json(getProject);
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
    .then(postProject => {
      res.status(201).json(postProject);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: "Unable to add your project"
      });
    });
});

// PUT /:id
router.put("/:id", (req, res) => {
  Projects.update(req.params.id, req.body)
    .then(updatedProject => {
      res.status(200).json(updatedProject);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: "Unable to update your project"
      });
    });
});

// DELETE /:id

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Projects.remove(id)
    .then(deleteUer => {
      res.status(200).json({
        message: "Proejct destroyed"
      });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: "Unable to destroy  your project"
      });
    });
});

module.exports = router;
