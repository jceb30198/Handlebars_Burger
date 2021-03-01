const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

router.get("/", (req, res) => {
    burger.all((data) => {
        const burgerObj = {
            burgers: data
        }
        res.render("index", burgerObj);
    });
});

router.post("/api/burgers", (req, res) => {
    let body = req.body.burger_name
    burger.insert(body, (data) => {
        res.json(data) 
    });
});

router.put("api/burger/:id", (req, res) => {
    let id = req.params.id;
    burger.update(id, (data) => {
        if(data.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    })
})

module.exports = router;