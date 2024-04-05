const express = require("express");
const controller = require("../controller/basicController");
const router = express.Router();

router.get("/", controller.getRequest);

router.post("/", controller.getRequest);

router.put("/", (req, res) => {
  res.json({
    msg: "get request",
  });
});

router.delete("/", (req, res) => {
  res.json({
    msg: "get request",
  });
});

module.exports = router;
