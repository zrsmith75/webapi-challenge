const express = require("express");
const Actions = require("./actionModel.js");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "inside Actions at /api/actions"
  });
});

module.exports = router;
