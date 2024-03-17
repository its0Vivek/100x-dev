const fs = require('fs');
let content = "=> this additional containt u can see now"
fs.appendFile("output.txt", content, "utf-8", (err) => {
    if (err) {
        console.log("error is there")
        return;
    } console.log("content is write")
});

setTimeout(() => {
    fs.readFile("output.txt", "utf-8", (err, data) => {
        console.log("hi, I'm here");
        console.log(data);
    })
}, 1000)

