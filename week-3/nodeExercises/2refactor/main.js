const { addBooks } = require("./data/booksData");
const { addMembers } = require("./data/membersData");
const { addLoans } = require("./data/loansData");
const { returnBooks, calculateloansPerMember } = require("./processing");
const { logBooks, logMembers, logLoans, logLoansPerMember } = require("./reporting");

const books = [];
const members = [];
const loans = [];

addBooks(books);
addMembers(members);
addLoans(loans);
returnBooks(loans);
logBooks(books);
logMembers(members);
logLoans(loans, books, members);
const loansPerMember = calculateloansPerMember(loans);
logLoansPerMember(loansPerMember, members);

