const fs = require("fs");

fs.readFile("leesbestand.txt", "utf8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});