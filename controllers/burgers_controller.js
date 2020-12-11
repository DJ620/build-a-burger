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
    burger.insert(["burger_name"], [req.body.burger_name], result => {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", (req, res) => {
    const condition = "id = " + req.params.id;
    burger.update({devoured: true}, condition, result => {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

module.exports = router;