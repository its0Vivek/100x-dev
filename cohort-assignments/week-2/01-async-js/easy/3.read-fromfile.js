const fs = require('fs');

fs.readFile("output.txt", "utf-8", (err, data) => {
    console.log("hi, I'm here");
    console.log(data);
});
