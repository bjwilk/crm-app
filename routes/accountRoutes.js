const express = require("express");
const cors = require("./cors");
const {Account} = require("../models")
const authenticate = require("../config/authenticate")
const accountRouter = express.Router();

accountRouter
  .route("/userAccounts/")
  .get(authenticate.authenticateToken, (req, res) => {
    let id = req.user.id;
    console.log("id:", id);
    Account.findByPk( id )
      .then((accounts) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(accounts);
      })
      .catch((err) => next(err));
  });

accountRouter.route("/search").get((req, res) => {
 

//   Account.find(myquery).then((result) => {
//     console.log(result);
//     res.json(result);
//   });
res.send('search route')
});

accountRouter
  .route("/")
  .get((req, res, next) => {
    Account.findAll()
      .then((accounts) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(accounts);
      })
      .catch((err) => next(err));
  })
  .post(
    authenticate.authenticateToken,
    async (req, res, next) => {
      req.body.userId = req.user.id;
      console.log(req.files);

    }
  )
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /trucks");
  })
  .delete((req, res, next) => {
    Account.findOneAndDelete({id: id})
      .then((response) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(response);
      })
      .catch((err) => next(err));
  });

accountRouter
  .route("/:accountId")
  .get((req, res, next) => {
    Account.findById(req.params.accountId)
      .then((account) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(account);
      })
      .catch((err) => next(err));
  })
  // .post((req, res) => {
  //     res.statusCode = 403;
  //     res.end(`POST operation not supported on /trucks/${req.params.truckId}`);
  // })
  .put((req, res, next) => {
    Account.findByIdAndUpdate(
      req.params.accountId,
      {
        $set: req.body,
      },
      { new: true }
    )
      .then((account) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(account);
      })
      .catch((err) => next(err));
  })
  .delete((req, res, next) => {
    Account.findByIdAndDelete(req.params.accountId)
      .then((response) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(response);
      })
      .catch((err) => next(err));
  });

module.exports = accountRouter;
