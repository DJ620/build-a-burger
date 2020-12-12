// Requiring the express dependency and the burger model
const express = require("express");
const burger = require("../models/burger.js");

// Defining my router for the API calls
const router = express.Router();

// API get route
router.get("/", (req, res) => {
    burger.all(data => {
        const obj = {
            burgers: data
        };
        // Sends back the index.handlebars file
        res.render("index", obj);
    });
});

// API post route
router.post("/api/burgers", (req, res) => {
    burger.insert(["burger_name"], [req.body.burger_name], result => {
        res.json({ id: result.insertId });
    });
});

// API put route
router.put("/api/burgers/:id", (req, res) => {
    const condition = "id = " + req.params.id;
    burger.update({devoured: true}, condition, result => {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

// Exporting the router to be used in other files
module.exports = router;