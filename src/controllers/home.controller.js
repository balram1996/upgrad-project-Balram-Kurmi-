const express = require("express");

const router = express.Router();

const Course = require("../models/home.model");

//const Video = require("../models/videoPage2.model")

router.get("/home", function (req, res) {
  return res.render("products/home");
});

router.get("/applyAmrita", function (req, res) {
  return res.render("products/applyAmrita");
});

router.get("/abroad", function (req, res) {
  return res.render("products/abroad");
});

router.get("/videos", function (req, res) {
  return res.render("products/videos");
});

router.get("/hire", function (req, res) {
  return res.render("products/hire");
});


router.post("", async function (req, res) {
 
  const product = await Course.create(req.body);

  return res.send(product);
});



module.exports = router;