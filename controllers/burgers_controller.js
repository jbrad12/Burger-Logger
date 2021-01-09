var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var burgerObject = {
      burger: data
    };
    console.log(burgerObject);
    res.render("index", burgerObject);
  });
});

router.post("/", function(req, res) {
    console.log(req.body)
  burger.create("burger_name", "devoured", req.body.burger, 0, function(err, result) {
    // Send back the ID of the new quote
    if (err) {
        // If an error occurred, send a generic server failure
        
        return res.status(500).end();
      }
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var id = req.params.id
  console.log("cont" + req.params.id)
  burger.update(id, function(err, result) {
    //   if (err) {
    //     // If no rows were changed, then the ID must not exist, so 404
    //     return res.status(404).end();
    //   }
      res.status(200).end();

    }
  );
});

// Export routes for server.js to use.
module.exports = router;