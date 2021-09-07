const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/profile", (req, res, next) => {
  console.log(req.query);
  res.render("profile", { user: req.session && req.session.user });
});

router.get("/deafAF", (req, res, next) => {
  console.log(req.query);
  res.render("secrets/deafAF");
});

module.exports = router;