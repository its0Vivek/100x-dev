const express = require("express");

const app = express();

const cors = require("cors")
app.use(express.json());
app.use(cors())

app.post("/health-checkup", function (req, res) {
    const kidneys = req.body.kidneys;
    const kidneyCount = kidneys.length;

    // do something with kidney here
    res.send("you have " + kidneyCount + " kidneys")

});
app.get("/", function (req, res) {

    res.send("you have kidneys")
});

app.listen(3000);