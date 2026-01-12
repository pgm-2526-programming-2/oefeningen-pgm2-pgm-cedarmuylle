function mergeOptions(arrOne, arrtwo) {
    const mergedArray = { ...arrOne, ...arrtwo };
    console.log(mergedArray);
}

mergeOptions({ option1: "A", option2: "B" }, { option3: "C", option4: "D" });