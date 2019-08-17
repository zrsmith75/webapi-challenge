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
    .then(getProjects => {
      const messageOfTheDay = process.env.MOTD || "Hello Lambda World";
      if (getProjects) {
        res.status(200).json(getProjects);
      } else {
        res.status(404).json({
          message: "Unable to locate the projects"
        });
      }
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

// GET /:id/actions
router.get("/:id/actions", (req, res) => {
  const { id } = req.params;
  Projects.getProjectActions(id)
    .then(projectActions => {
      if (projectActions) {
        res.status(200).json(projectActions);
      } else {
        res.status(404).json({
          message: "Unable to locate your project action"
        });
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: "Unable to locate your project actions"
      });
    });
});

// POST
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
      if (updatedProject) {
        res.status(200).json(updatedProject);
      } else {
        res.status(404).json({
          message: "Unable to locate the project"
        });
      }
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
    .then(deleteUser => {
      if (deleteUser > 0) {
        res.status(200).json({
          message: "Project destroyed"
        });
      } else {
        res.status(404).json({
          message: "Unable to locate the project"
        });
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: "Unable to destroy  your project"
      });
    });
});

module.exports = router;
