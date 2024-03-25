const express = require("express");

const app = express();

app.get("/health-checkup", function (req, res) {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyid;


    if (username != "vivek" || password != "pass") {
        res.status(400).json({ msg: "1Somethings up with your inputs" })
        return
    }

    if (kidneyId != 1 && kidneyId != 2) {
        res.status(400).json({ msg: "2Somethings up with your inputs" })
        return
    }

    res.json({
        msg: "Your kidney is fine!"
    })


});

app.listen(3000);