const originalObject = { name: "Alice" };
const updatedObject = addProperty(originalObject, "age", 25);
console.log(updatedObject);

function addProperty(obj, key, value) {
    return { ...obj, [key]: value }
}