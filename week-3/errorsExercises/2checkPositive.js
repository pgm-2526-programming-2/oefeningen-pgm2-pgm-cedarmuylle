function checkPositive(value) {
    if (value <= 0) {
        throw new RangeError("negative number");
    }
}

checkPositive(3);
checkPositive(-1.2);