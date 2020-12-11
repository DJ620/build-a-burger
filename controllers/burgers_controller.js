const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

router.get("/", (req, res) => {
    burger.all(data => {
        const obj = {
            burgers: data
        };
        res.render("index", obj);
    });
});

router.post("/api/burgers", (req, res) => {
    burger.insert(["burger_name", "devoured"], req.body, result => {
        res.json({ id: insertId });
    });
});

module.exports = router;