const books = [];
const members = [];
const loans = [];

// Boeken toevoegen
books.push({
    id: 1,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction",
});
books.push({
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Drama",
});
books.push({
    id: 3,
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
});
books.push({
    id: 4,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classics",
});

// Leden toevoegen
members.push({ id: 101, name: "Alice Johnson", membershipType: "Premium" });
members.push({ id: 102, name: "Bob Smith", membershipType: "Basic" });
members.push({ id: 103, name: "Eve Williams", membershipType: "Premium" });

// Uitleningen uitvoeren
loans.push({
    bookId: 1,
    memberId: 101,
    dueDate: "2023-05-01",
    returned: false,
});
loans.push({
    bookId: 2,
    memberId: 102,
    dueDate: "2023-04-15",
    returned: false,
});
loans.push({
    bookId: 3,
    memberId: 103,
    dueDate: "2023-06-01",
    returned: false,
});

// Simuleer enkele boeken die zijn teruggebracht
loans[0].returned = true;
loans[2].returned = true;

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