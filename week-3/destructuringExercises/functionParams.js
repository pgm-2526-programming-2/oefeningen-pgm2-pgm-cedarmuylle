function printDetails({ name = "Stranger", age = "Unknown", gender = "Unknown" }) {
    console.log(`Name: ${name}, Age: ${age}, Gender: ${gender}`);
};

printDetails({ name: "Alice", age: 30, gender: "Female" });
printDetails({ name: "Bob" });