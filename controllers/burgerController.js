const { request } = require("express");
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
    console.log(req.body);
})

router.put("api/burger/:id", (req, res) => {

})

module.exports = router;