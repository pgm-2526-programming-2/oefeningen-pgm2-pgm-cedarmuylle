function calculateArea(width, height) {
    if (width <= 0 || height <= 0) {
        throw new Error("ongeldige afmetingen");
    }
    console.log(width * height);
}

calculateArea(7, 3);
calculateArea(1, 0);
calculateArea(0, 5);