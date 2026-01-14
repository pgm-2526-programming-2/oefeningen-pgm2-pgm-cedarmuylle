const express = require("express");
const fs = require("fs");
const path = require("path");

const myServer = express();
const PORT = 3000;
const HOST = "localhost";
const recipesPath = path.join(__dirname, "recipes.json");

function getContentFromFile(fileNameAndExtension) {
    const fileContentAsString = fs.readFile(fileNameAndExtension, "utf8");
    return JSON.parse(fileContentAsString);

}


function getCurrentTime() {
    const now = new Date();
    return `${now.getUTCHours() + 1} : ${now.getUTCMinutes()}`
}

myServer.put('/api', (request, response) => {
    console.log("Verzoek op de server");

    response.status(200);

    response.json({
        "name": "API test",
        "requestTime": getCurrentTime()
    });
});

myServer.get('/api/recipes', (request, response) => {
    console.log("Request for recipes");
    response.json(getContentFromFile(recipesPath));
});

myServer.listen(PORT, HOST, () => {
    console.log(`Server staat aan op http://${HOST}:${PORT}!`); //close with Ctrl + C
});