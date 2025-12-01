// 1
// const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
// weekdays.forEach((currDay) => console.log(currDay));

//2
// -> will alert 4 ('Bananas was added, so there are 4 items now)

//3
const matrix = [[74, 85, 96], [41, 52, 63]];

function logMatrixNumber(column, row) {
    const selectedNumber = matrix[row][column];
    console.log(selectedNumber);
}

logMatrixNumber(2, 0);

