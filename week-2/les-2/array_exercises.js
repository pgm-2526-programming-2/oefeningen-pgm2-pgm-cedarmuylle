// 1
// const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
// weekdays.forEach((currDay) => console.log(currDay));

//2
// -> will alert 4 ('Bananas was added, so there are 4 items now)

//3
// const matrix = [[74, 85, 96], [41, 52, 63]];

// function logMatrixNumber(column, row) {
//     const selectedNumber = matrix[row][column];
//     console.log(selectedNumber);
// }

// logMatrixNumber(2, 0);

//4
// const numbers = [1, 2, 3, 4, 5];
// const string = "Hello";
// const colors = ['red', 'blue', 'green', 'yellow'];

// for (const number of numbers) {
//     console.log(number);
// }
// for (const letter of string) {
//     console.log(letter);
// }

// colors.forEach((color, index) => {
//     console.log(color, index);

// });

//5
const words = [
    'mal',
    'snurkduif',
    'bromvlieg',
    'snottebel',
    'knotsgek',
    'pindakaas',
    'fluitketel',
    'smurfenmuts',
];
const dashedWords = words.join("-");

const oneStartsWithB = words.some(word => word.startsWith("b"));

console.log(oneStartsWithB);

