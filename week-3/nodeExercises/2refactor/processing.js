function returnBooks(loansArr) {
    loansArr[0].returned = true;
    loansArr[2].returned = true;
};

function calculateloansPerMember(loans) {
    const loansPerMember = {};
    loans.forEach((loan) => {
        loansPerMember[loan.memberId] = (loansPerMember[loan.memberId] || 0) + 1;
    });
    return loansPerMember;
}
module.exports = { returnBooks, calculateloansPerMember };