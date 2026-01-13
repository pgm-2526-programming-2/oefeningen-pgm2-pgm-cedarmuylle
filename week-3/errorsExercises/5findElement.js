function findElement(arr, element) {
    if (!Array.isArray(arr)) {
        throw new TypeError("Ongeldige invoer: arr moet een array zijn”");
    }

    const elementIndex = arr.findIndex(curr => curr === element);

    if (elementIndex === -1) {
        throw new Error("element not found");
    }

    console.log(arr.findIndex(curr => curr === element));
}

const myArray = ["one", "two", "three", "five"];
const myVar = "hello";

findElement(myArray, "three");
findElement(myArray, "four");
findElement(myVar, "three");

