const express = require("express");
const Action = require("./actionModel.js");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "inside action at /api/actions"
  });
});

module.exports = router;
