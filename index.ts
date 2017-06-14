
const express = require("express");
const main = require("./src/main");


const app = express();

app.use("/", main);
app.get("/", function(req, res, next) {
    res.status(200).send("ok").end()
})

app.listen(process.env.PORT || 8001);