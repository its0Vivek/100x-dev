const fs = require('fs');

fs.readFile("output.txt", "utf-8", (err, data) => {
    let content = data.replace(/  +/g, " ")
    fs.writeFile("output.txt", content, "utf-8", (err) => {
        if (err) {
            console.log("error is there")
            return;
        } console.log("content is write")
    });
    console.log("hi, I'm here");
    console.log(data);
})

