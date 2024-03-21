const express = require("express")
const app = express()
var users = [{
    name: "vivek",
    kidneys: [{
        healthy: false
    }]
}];

app.use(express.json());

app.get("/", function (req, res) {
    const vivekKeyneys = users[0].kidneys;
    const noOfKidneys = vivekKeyneys.length;
    let numberOfHealthKidneys = 0;
    for (let i = 0; i < vivekKeyneys.length; i++) {
        if (vivekKeyneys[i].healthy) {
            numberOfHealthKidneys = numberOfHealthKidneys + 1;
        }
    }
    const noOfUnHealthKidneys = noOfKidneys - numberOfHealthKidneys;
    res.json({
        noOfKidneys,
        numberOfHealthKidneys,
        noOfUnHealthKidneys
    })
})

app.post("/", (req, res) => {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

app.put("/", function (req, res) {
    for (let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})

app.delete('/', (req, res) => {
    // you should return a 411 status
    // only if atleast one unhealthy kidney is there do this , else return 411
    let atleastonekidneyishealthy = isThereUnhealthyKidney();
    if (atleastonekidneyishealthy) {
        const newkidneys = [];
        for (let i = 0; i < users[0].kidneys.length; i++) {
            if (users[0].kidneys[i].healthy) {
                newkidneys.push(users[0].kidneys[i]);
            }
        }
        users[0].kidneys = newkidneys;
        res.json({
            "message": "Done!"
        })
    } else {
        res.status(411).send({
            msg: "No unhealthy Kidney"
        });
    }

})

function isThereUnhealthyKidney() {
    let atleastonekidneyishealthy = false;
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (!users[0].kidneys[i].healthy) {
            atleastonekidneyishealthy = true;
        }
    }
    return atleastonekidneyishealthy;
}

app.listen(3000);