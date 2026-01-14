function returnBooks(loansArr) {
    loansArr[0].returned = true;
    loansArr[2].returned = true;
};

module.exports = { returnBooks };