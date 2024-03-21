const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const port = 3000
app.use(bodyparser.json())

console.log(app)

app.get("/route-handler", function (req, res) {
    res.send("hello world")
})
app.post('/', function (req, res) {
    const message = req.body.name;
    console.log(message);
})

app.post('/home', function (req, res) {
    console.log(req.data)
    res.send('<b> hi there <b>')
})

app.listen(port, function () {
    console.log(`Example app listening on port ${port}`)
})