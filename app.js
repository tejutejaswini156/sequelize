const express = require("express");
const CredentialModel = require("./models").Credential;
const UserModel = require("./models").UserDetails;
const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  res.status(200).json({
    status: 1,
    message: "Welcome User",
  });
});

app.get("/usersDetails", (req, res) => {
  UserModel.findAll({ include: CredentialModel })
    .then((data) => {
      res.status(200).json({
        status: 1,
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 0,
        msg: "Error has been Occured",
        err: err,
      });
    });
});

app.get("/credentialDetails", (req, res) => {
  CredentialModel.findAll({ include: UserModel })
    .then((data) => {
      res.status(200).json({
        status: 1,
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 0,
        msg: "Error has been Occured",
        err: err,
      });
    });
});

app.listen(PORT, () => {
  console.log("Sever running at 8080");
});
