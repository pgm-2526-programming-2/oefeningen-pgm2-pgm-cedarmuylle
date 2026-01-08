const test = require("node:test");
const assert = require("node:assert/strict");
const { sayHello } = require("../main");

test("Testing if function sayHello returns Hello", () => {
    assert.equal(sayHello(), "Hello");
});