let library = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

function addNewBook(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    console.log('Book added successfully');
    return library.push(book);
}