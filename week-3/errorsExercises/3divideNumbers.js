function divideNumbers(num1, num2) {
    if (num2 == 0) {
        throw new Error("kan niet delen door 0");
    }
    console.log(num1 / num2);
}
divideNumbers(5, 2);
divideNumbers(0, 5);
divideNumbers(2, 0);