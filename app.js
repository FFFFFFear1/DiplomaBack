const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

const app = express();

const port = 3000;

const SessionData = require("./models/sessionData");

mongoose
  .connect(
    "mongodb+srv://textUser:test1234@db-test.etdjx.mongodb.net/usersData?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then((result) =>
    app.listen(port, function (error) {
      if (error) {
        console.log("error", error);
      } else {
        console.log("connented db");
        console.log("server start");
      }
    })
  )
  .catch((err) => console.log(err));

app.post("/addSession", jsonParser, function (req, res) {
  sessionData = new SessionData({
    DATA: req.body.DATA,
    TIME: req.body.TIME,
    ATT: req.body.ATT,
    MED: req.body.MED,
    MaxATT: req.body.MaxATT,
    MaxMED: req.body.MaxMED,
  });

  sessionData
    .save()
    .then((result) => {
      console.log("added");
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/getAllSessions", function (req, res) {
  SessionData.find()
    .then((result) => res.send(result))
    .catch((err) => {
      console.log(err);
    });
});

app.get("/getSingleSession", function (req, res) {
  SessionData.findById("609bd882c90a8e19607f8ed7")
    .then((result) => res.send(result))
    .catch((err) => {
      console.log(err);
    });
});

app.use((req, res) => {
  sendError(res, status.notFound, { err: "Not Found" });
});
