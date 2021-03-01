const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

router.get("/", (req, res) => {
    burger.all((data) => {
        const burgerObj = {
            burgers: data
        }
        console.log(burgerObj)
        res.render("index", burgerObj);
    });
});

router.post("/api/burgers", (req, res) => {
    burger.insert()
})

module.exports = router;