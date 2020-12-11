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

module.exports = router;