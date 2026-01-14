const { addBooks } = require("./data/booksData");
const { addMembers } = require("./data/membersData");
const { addLoans } = require("./data/loansData");
const { returnBooks } = require("./processing");

const books = [];
const members = [];
const loans = [];

addBooks(books);
addMembers(members);
addLoans(loans);
returnBooks(loans);

// Weergave van boeken
console.log("Boekenlijst:");
console.log("============");
books.forEach((book) =>
    console.log(
        `ID: ${book.id}, Titel: ${book.title}, Auteur: ${book.author}, Genre: ${book.genre}`
    )
);

// Weergave van leden
console.log("\nLedeninformatie:");
console.log("=================");
members.forEach((member) =>
    console.log(
        `ID: ${member.id}, Naam: ${member.name}, Lidmaatschap: ${member.membershipType}`
    )
);

// Weergave van uitleningen
console.log("\nUitleningen:");
console.log("============");
loans.forEach((loan) => {
    const book = books.find((b) => b.id === loan.bookId);
    const member = members.find((m) => m.id === loan.memberId);
    console.log(
        `Boek: ${book.title}, Lid: ${member.name}, Vervaldatum: ${loan.dueDate}, Geretourneerd: ${loan.returned}`
    );
});

// Bereken het aantal uitgeleende boeken per lid
const loansPerMember = {};
loans.forEach((loan) => {
    loansPerMember[loan.memberId] = (loansPerMember[loan.memberId] || 0) + 1;
});

// Weergave van het aantal uitgeleende boeken per lid
console.log("\nAantal uitgeleende boeken per lid:");
console.log("==================================");
Object.keys(loansPerMember).forEach((memberId) => {
    const member = members.find((m) => m.id == memberId);
    console.log(`${member.name}: ${loansPerMember[memberId]} boeken`);
});