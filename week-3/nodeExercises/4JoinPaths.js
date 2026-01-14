const path = require("path");

const firstPath = "school/programmeren-2";
const secondPath = "week-3/oefeningen"

function joinPaths(pathOne, pathTwo) {
    return path.join(pathOne, pathTwo)
}

console.log(joinPaths(firstPath, secondPath));

