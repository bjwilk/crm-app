const express = require("express");
const User = require("../models/Users");
const passport = require("passport");
const authenticate = require("../config/authenticate");
const cors = require("./cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { sendMail } = require("../utils/mailer");

const router = express.Router();

router.get(
  "/",
  authenticate.authenticateToken,
  function (req, res, next) {
    User.findAll({})
      .then((users) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(users);
      })
      .catch((err) => next(err));
  }
);

router.get("/test", (req, res) => {
    res.json({user: "routes"})
})



router.post("/signup", (req, res) => {
  const { email, userName, firstName, lastName, password, position } = req.body;
  bcrypt.hash(password, 10).then(function (hash) {
    // Store hash in your password DB.
    if (hash) {
      User.create({
        email,
        userName,
        firstName,
        lastName,
        password: hash,
        position,
      }).then((response) => {
        // sendMail(
        //   email,
        //   "verify email",
        //   "please confirm in email",
        //   `
        //         <h3>UserName: ${userName}</h3>
        //         <p>Confirm Email with link</p>
        //         <a href='http://192.168.4.23:3000'>Click Here</a>
        //         `
        // );
        let token = jwt.sign({ id: response.id }, process.env.JSON_SECRET);
            res.json({ jwt: token });
        // res.json({ user: "user saved" });
      });
    } else {
      res.status(400).json({ error: "Erros has occured" });
    }
  });
});

router.post("/signin", (req, res) => {
  // const token = authenticate.getToken({_id: req.user._id});

  const { email, password } = req.body;
  console.log("request for body: ", req.body);
  User.findOne({where:{ email: email} })
    .then((user) => {
      console.log("USER HERE", user);
      if (user !== null) {
        bcrypt.compare(password, user.password).then(function (result) {
          // result == true
          if (result) {
            let token = jwt.sign({ id: user.id }, process.env.JSON_SECRET);
            res.json({ jwt: token });
          }
        });
        // res.json(user)
      } else {
        res.json({ err: "Error occured" });
      }
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get("/logout", (req, res, next) => {
  if (req.session) {
    req.session.destroy();
    res.clearCookie("session-id");
    res.redirect("/");
  } else {
    const err = new Error("You are not logged in!");
    err.status = 401;
    return next();
  }
});

module.exports = router;
