const express = require("express");
const cors = require("./cors");
const { Account } = require("../models");
const authenticate = require("../config/authenticate");
const accountRouter = express.Router();

accountRouter
  .route("/userAccounts/")
  .get( (req, res) => {
    // let id = req.user.id;
    // console.log("id:", req.user.id);
    Account.find()
      .then((accounts) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(accounts);
      })
      .catch((err) => next(err));
  });

// accountRouter.route("/search").get((req, res) => {
//   //   Account.find(myquery).then((result) => {
//   //     console.log(result);
//   //     res.json(result);
//   //   });
//   res.send("search route");
// });

accountRouter
  .route("/")
  .get(authenticate.authenticateToken, (req, res, next) => {
    console.log('userID', req.user.id)
    Account.findAll({where: {
      // userId: req.user.id
    }})
      .then((accounts) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(accounts);
      })
      .catch((err) => next(err));
  })
  .post(authenticate.authenticateToken, async (req, res, next) => {
    req.body.userId = req.user.id;
    console.log("req.id", req.user.id);
    const { companyName, businessType, fleetSize, equipmentType, lastPurchased, firstName, lastName, email, phoneNumber, address, address2, state, city, zipCode, notes} =
      req.body;

      Account.create({
        companyName,
        businessType,
        fleetSize: fleetSize,
        equipmentType: equipmentType,
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        address: address,
        address2: address2,
        state: state,
        city: city,
        zipCode: zipCode,
        notes: notes
      }).then((response) => {
        console.log(response, "response in backend")
        res.json(response)
      })
      .catch((err) => {
        console.log("Error adding acount", err)
      })
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /trucks");
  })
  .delete((req, res, next) => {
    Account.findOneAndDelete({ id: id })
      .then((response) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(response);
      })
      .catch((err) => next(err));
  });

accountRouter
  .route("/company/:accountId")
  .get((req, res, next) => {
    Account.findByPk( req.params.accountId)
      .then((account) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(account);
      })
      .catch((err) => next(err));
  })

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

  accountRouter
  .route("/equipmentType")
  .get(authenticate.authenticateToken, (req, res) => {
    Account.findAll({
      attributes:["id","equipmentType"]
    })
      .then((equipment) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(equipment);
      })
      .catch((err) => next(err));
  });

  accountRouter
  .route("/equipmentType/:equipment")
  .get(authenticate.authenticateToken, (req, res) => {
    console.log(req.params.equipment, 'equipment type')
    const {equipment} = req.params
    Account.findAll({
      where:{
        equipmentType: req.params.equipment
      }
    })
      .then((equipment) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(equipment);
      })
      .catch((err) => next(err));
  });

  accountRouter
  .route("/businessType/:business")
  .get(authenticate.authenticateToken, (req, res) => {
    console.log(req.params.business, 'business type')
    const {business} = req.params
    Account.findAll({
      where:{
        businessType: req.params.business
      }
    })
      .then((business) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(business);
      })
      .catch((err) => next(err));
  });

  accountRouter
  .route("/companyName/:companyName")
  .get(authenticate.authenticateToken, (req, res) => {
    console.log(req.params.companyName, 'companyName type')
    const {companyName} = req.params
    Account.findAll({
      where:{
        companyName: req.params.companyName
      }
    })
      .then((companyName) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(companyName);
      })
      .catch((err) => next(err));
  });

  accountRouter
  .route("/lookingFor/:lookingFor")
  .get(authenticate.authenticateToken, (req, res) => {
    console.log(req.params.lookingFor, 'lookingFor type')
    const {lookingFor} = req.params
    Account.findAll({
      where:{
        lookingFor: req.params.lookingFor
      }
    })
      .then((lookingFor) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(lookingFor);
      })
      .catch((err) => next(err));
  });

module.exports = accountRouter;
