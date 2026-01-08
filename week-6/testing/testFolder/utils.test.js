const test = require("node:test");
const assert = require("node:assert/strict");
const { transformToDollar } = require("../utils/text");

test(" a conversion from a string or number to some text prefixed with a dollar sign", () => {
    assert.equal(transformToDollar(8), "$8");
});