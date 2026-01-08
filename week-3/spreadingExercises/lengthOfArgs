add(1, 5, 6);
add(1, 5, 6, 5, 1561, 2, 5);

function add(a, b, ...rest) {
    console.log(rest.length + 2);
    return a + b + rest.reduce((prev, curr) => prev + curr, 0)
};