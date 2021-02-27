const express = require("express");
const exphbs = require("express-handlebars");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use("./controllers/burgerController.js");

app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
});