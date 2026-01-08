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

words.unshift("Hello");

const moreThanTwoLetters = words.every(word => word.length > 2);

const sortedWords = words.sort(sortingFn);

const thirdWord = words[2];

const shortWords = words.filter(word => word.length <= 4);

function sortingFn(a, b) {
    if (a.length < b.length) {
        return -1;
    } else if (a.length > b.length) {
        return 1;
    }
    return 0;
}

console.log(shortWords);

