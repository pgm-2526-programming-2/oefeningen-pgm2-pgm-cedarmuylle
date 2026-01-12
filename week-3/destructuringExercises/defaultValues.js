const book = { title: "JavaScript Basics", author: "John Doe" };

const { title = "Unknown Title", author = "Unknown Author", pages = "Page Amount Unknown" } = book;

console.log(title, author, pages);