// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // base route loads index.html
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // base route loads index.html
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // POST route for saving a new guest
  app.post("/api/guest", function (req, res) {
    db.Guest.create(req.body).then(function (data) {
      res.json(data);
    }).catch(function (err){
      var error = {
        error: err.errors[0].message
      }
      res.json(error);
    });
  });

};