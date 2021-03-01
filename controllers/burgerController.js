const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

router.get("/", (req, res) => {
    burger.all((data) => {
        const burgerObj = {
            burgers: data
        }
        console.log(burgerObj);
        res.render("index", burgerObj);
    });
});

router.post("/api/burgers", (req, res) => {
    const body = req.body.burger_name
    console.log(body);
    burger.insert(body, (data) => {
        res.json(data) 
    });
});

router.put("api/burgers/:id", (req, res) => {
    const id = req.params.id;
    console.log(id);
    burger.update(id, (data) => {
        console.log(id);
        if(data.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

module.exports = router;