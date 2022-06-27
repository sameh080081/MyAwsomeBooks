
function Books(title,author){
    this.title = title;
    this.author = author;
}

class storage {
    static getBooks(){
        let booksList;
        if(JSON.parse(localStorage.getItem('booksList')===null)){
            booksList = [];
        }
        else {
            booksList = JSON.parse(localStorage.getItem('booksList'));
        }
        return booksList;
    }

    static addBook(book){
        const bookList = storage.getBooks();
        bookList.push(book);
        localStorage.setItem('booList',JSON.stringify(bookList));
    }

    static removeBook(title,author){
        const bookList = storage.getBooks();
        bookList.forEach(book => {
            if(book.title==title&&book.author==author){
                bookList.splice(index,1);
            }
        });
        localStorage.setItem('booList',JSON.stringify(bookList));
    }
}

const form = document.querySelector('booksinput')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const title = document.querySelector('.title').value
    const author = document.querySelector('.author').value
    const book = new Books(title, author)
})