const originalArray = [1, 2, 3];
const copiedArray = copyArray(originalArray);
console.log(copiedArray);

function copyArray(arr) {
    return [...arr];
}