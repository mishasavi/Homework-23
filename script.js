
//Book (id, title, pages, date, author)
//Magazine (id, title, pages, date, frequency)

const library = new Library();
const book1 = new Book (1, 'Lord of the Rings', 1450, '1954-07-29', 'John Tolkien');
library.addContent(book1);
const book2 = new Book (2, 'A Game of Thrones', 560, '1996-08-06', 'George Martin');
library.addContent(book2);
const magazine1 = new Magazine (3, 'New In Chess', 96, '2020-01-01', 'monthly');
library.addContent(magazine1);
const magazine2 = new Magazine(4, '64-Chess-Review', 65, '2019-01-01', 'monthly');
library.addContent(magazine2);

const books = [];
const magazines = [];

const filterPaper = function (library,index) {
    const item = library._content[index];
    if (item instanceof Book) {
        const existingBook = books.find (book => book._id === item._id);
        if (!existingBook) {
        books.push(item);
        return item;} else {return item;}
    } else if (item instanceof Magazine) {
        const existingMagazine = magazines.find (magazine => magazine._id === item._id);
        if (!existingMagazine) {
        magazines.push(item);
        return item;} else {return item;}
    }
};

const filterLibrary = function () {
for (let i = 0; i < library._content.length; i++) {
    filterPaper(library, i);
}}

filterLibrary();

//Now I have the Library filtered for books and magazines


const populateBooks = function () {
    const myBookList = document.getElementById('myBooks');
    myBookList.innerHTML='';
    books.forEach(book => {
    const listItem = document.createElement('li');
    listItem.textContent = book.title;
    myBookList.appendChild(listItem);
})};


const populateMagazines = function () {
    const myMagazineList = document.getElementById('myMagazines');
    myMagazineList.innerHTML='';
    magazines.forEach(magazine => {
    const listItem = document.createElement('li');
    listItem.textContent = magazine.title;
    myMagazineList.appendChild(listItem);
})};

const showStats = function () {
    const libraryStats = document.getElementById('stats');
    stats.innerHTML='';
    const calcStats = document.createElement('p');
    calcStats.innerHTML = calculateStats(library);
    libraryStats.appendChild(calcStats);

}

populateBooks();
populateMagazines();

//We added two books and two magazines into the corresponding areas of the document

const calculateStats = function (library) {
    let booksTotalAge=0;
    let totalBooks=0;
    let magazineTotalAge=0;
    let totalMagazines=0;
    library._content.forEach(item => {
        if (item instanceof Book){
            booksTotalAge += item.age();
            totalBooks++;
        } else if (item instanceof Magazine) {
            magazineTotalAge += item.age();
            totalMagazines++;
        }});

    const booksAvgAge = totalBooks ? (booksTotalAge/totalBooks).toFixed(2) : 0;
    const magazinesAvgAge = totalMagazines ? (magazineTotalAge/totalMagazines).toFixed(2) : 0;
    return `Number of books: ${totalBooks}<br>
                        Number of magazines: ${totalMagazines}<br>
                        Books average age: ${booksAvgAge}<br>
                        Magazines average age: ${magazinesAvgAge}`;

}

showStats();

let divAdd = document.createElement('div');
let addBook = document.createElement('button');
addBook.textContent = 'Add a new book';
divAdd.appendChild(addBook);
//TODO let addMagazine = document.createElement('button');
//addMagazine.textContent = 'Add a new magazine';
//divAdd.appendChild(addMagazine);
document.body.append(divAdd);
addBook.addEventListener('click', function() {
    let idInput = document.createElement('input');
    idInput.placeholder = 'Enter ID';
    idInput.style.display = 'block';

    let titleInput = document.createElement('input');
    titleInput.placeholder = 'Enter Title';
    titleInput.style.display = 'block';

    let pagesInput = document.createElement('input');
    pagesInput.placeholder = 'Enter Pages';
    pagesInput.style.display = 'block';

    let dateInput = document.createElement('input');
    dateInput.placeholder = '1970-01-01';
    dateInput.style.display = 'block';

    let authorInput = document.createElement('input');
    authorInput.placeholder = 'Enter Author';
    authorInput.style.display = 'block';

    let confirmBook = document.createElement('button');
    confirmBook.textContent = 'Confirm';
    confirmBook.style.display = 'inline';
    confirmBook.addEventListener('click', function() {
        let id = +idInput.value;
        let title = titleInput.value;
        let pages = +pagesInput.value;
        let date = dateInput.value;
        let author = authorInput.value;
        let newBook = new Book(id, title, pages, date, author);
        library.addContent(newBook);
        filterLibrary();
        populateBooks();
        showStats();
        divAdd.removeChild(cancelBook);
        divAdd.removeChild(confirmBook);
        divAdd.removeChild(authorInput);
        divAdd.removeChild(dateInput);
        divAdd.removeChild(pagesInput);
        divAdd.removeChild(titleInput);
        divAdd.removeChild(idInput);
    });

    let cancelBook = document.createElement('button');
    cancelBook.textContent = 'Cancel';
    cancelBook.style.display = 'inline';
    cancelBook.addEventListener('click', function() {
        divAdd.removeChild(cancelBook);
        divAdd.removeChild(confirmBook);
        divAdd.removeChild(authorInput);
        divAdd.removeChild(dateInput);
        divAdd.removeChild(pagesInput);
        divAdd.removeChild(titleInput);
        divAdd.removeChild(idInput);
    });

    divAdd.appendChild(idInput);
    divAdd.appendChild(titleInput);
    divAdd.appendChild(pagesInput);
    divAdd.appendChild(dateInput);
    divAdd.appendChild(authorInput);
    divAdd.appendChild(confirmBook);
    divAdd.appendChild(cancelBook);
});



