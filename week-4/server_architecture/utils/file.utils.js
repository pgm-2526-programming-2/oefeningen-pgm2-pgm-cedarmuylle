const fs = require("fs");
const path = require("path");

function getData(file) {
    try {
        const filePath = path.join(__dirname, "..", "models", file);
        const fileContent = fs.readFileSync(filePath, "utf8");
        return JSON.parse(fileContent);
    } catch (error) {
        throw new Error(error);
    }

}

module.exports = { getData };