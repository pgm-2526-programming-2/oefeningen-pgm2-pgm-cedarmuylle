function addBooks(booksArr) {
    booksArr.push({
        id: 1,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        genre: "Fiction",
    });
    booksArr.push({
        id: 2,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Drama",
    });
    booksArr.push({
        id: 3,
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian",
    });
    booksArr.push({
        id: 4,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classics",
    });
};

module.exports = { addBooks };