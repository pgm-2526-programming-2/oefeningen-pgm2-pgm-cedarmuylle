addOnlyNumbers(1, 5, 6, "cat", "dog", 3);

function addOnlyNumbers(...args) {
    const onlyNumbers = args.filter(currArg => (typeof currArg === "number"));
    const numberTotal = onlyNumbers.reduce((prev, curr) => prev + curr);

    console.log(`Er waren ${args.length} argumenten, de som van alle cijfers is ${numberTotal}`);
}