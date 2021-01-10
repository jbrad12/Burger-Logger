var express = require("express");

var router = express.Router();


var burger = require("../models/burger.js");


router.get("/", function(req, res) {
  burger.all(function(data) {
    var burgerObject = {
      burger: data
    };
    res.render("index", burgerObject);
  });
});

router.post("/api/burgers", function(req, res) {
    console.log(req.body)
  burger.create("burger_name", "devoured", req.body.burger, 0, function(err, result) {
    
    res.status(200).end();
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var id = req.params.id
  console.log("cont" + req.params.id)
  burger.update(id, function(err, result) {

      res.status(200).end();

    }
  );
});

// Export routes for server.js to use.
module.exports = router;