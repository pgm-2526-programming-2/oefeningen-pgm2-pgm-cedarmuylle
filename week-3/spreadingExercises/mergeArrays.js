const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = mergeArrays(array1, array2);
console.log(mergedArray);

function mergeArrays(arrOne, arrTwo) {
    return [...arrOne, ...arrTwo];
}