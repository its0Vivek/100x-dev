const express = require("express");
const zod = require('zod');
const app = express();

const schema = zod.array(zod.number());
const cors = require("cors")

const schema1 = zod.object({
    email: zod.string().email(),
    password: zod.number().min(8)
})

app.use(express.json());
app.use(cors())

app.post("/health-checkup", function (err, req, res) {
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys)

    if (!response.success) {
        res.status(404).json({
            msg: "input is invalid"
        })
    }

    res.send({
        response
    })

});

app.listen(3000);