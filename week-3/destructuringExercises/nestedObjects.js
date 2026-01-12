const person = {
    name: "John",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown",
    },
};

const { name, age, address: { street, city } } = person;

console.log(name, age, street, city);