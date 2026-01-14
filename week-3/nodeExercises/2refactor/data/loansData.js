function addLoans(loansArr) {
    loansArr.push({
        bookId: 1,
        memberId: 101,
        dueDate: "2023-05-01",
        returned: false,
    });
    loansArr.push({
        bookId: 2,
        memberId: 102,
        dueDate: "2023-04-15",
        returned: false,
    });
    loansArr.push({
        bookId: 3,
        memberId: 103,
        dueDate: "2023-06-01",
        returned: false,
    });
}

module.exports = { addLoans };