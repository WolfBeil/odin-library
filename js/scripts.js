// Library array for Books and Books object constructor

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

// Books display function

const booksTable = document.querySelector(".books-table");

function displayBooks() {

    while (booksTable.rows.length > 1) {
        booksTable.deleteRow(1);
    }

    library.forEach(book => {
        const row = document.createElement('tr');

        const titleCell = document.createElement('td');
        titleCell.textContent = book.title;
        row.appendChild(titleCell);

        const authorCell = document.createElement('td');
        authorCell.textContent = book.author;
        row.appendChild(authorCell);

        const pagesCell = document.createElement('td');
        pagesCell.textContent = book.pages;
        row.appendChild(pagesCell);

        const readCell = document.createElement('td');
        readCell.textContent = book.read;
        row.appendChild(readCell);

        const idCell = document.createElement('td');
        idCell.textContent = book.id;
        row.appendChild(idCell);

        booksTable.appendChild(row);
    })
}

// Dialog modal functionality

const addBookBtn = document.querySelector('#addBookBtn');
const newBookDialog = document.querySelector('#newBookDialog');
const bookForm = document.querySelector('#bookForm');
const cancelBtn = document.querySelector('#cancelBtn');

addBookBtn.addEventListener('click', () => {
    newBookDialog.showModal();
})

cancelBtn.addEventListener('click', () => {
    newBookDialog.close();
    bookForm.reset();
})

bookForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#read').value;

    addNewBook(title, author, pages, read);
    displayBooks();

    newBookDialog.close();
    bookForm.reset();
})

