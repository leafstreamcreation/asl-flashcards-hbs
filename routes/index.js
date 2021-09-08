const express = require("express");
const router = express.Router();

const shouldNotBeLoggedIn = require("../middlewares/shouldNotBeLoggedIn");

/* GET home page */
router.get("/", shouldNotBeLoggedIn, (req, res, next) => {
  res.render("auth/login");
});

// router.get("/profile", (req, res, next) => {
//   console.log(req.query);
//   res.render("profile", { user: req.session && req.session.user });
// });

router.get("/deafAF", (req, res, next) => {
  console.log(req.query);
  res.render("secrets/deafAF");
});

module.exports = router;