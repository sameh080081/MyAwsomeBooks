const title = document.querySelector('.title');
const author = document.querySelector('.author');
const btn = document.querySelector('.btn');
const allBooks = document.querySelector('.book-above');
// const storage = JSON.parse(localStorage.getItem('form')) || [];



class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.id = Date.now();
    }
    storage = JSON.parse(localStorage.getItem('form')) || [];
    displayBook() {
        allBooks.innerHTML = ``
        this.storage.forEach(book => {
            const bookAbove = document.createElement('div');
                bookAbove.classList.add('class-book');
                const bookAboveText = document.createElement('p');
                bookAboveText.textContent = `${book.title} by ${book.author}`;
                const bookAboveBtn = document.createElement('button');
                bookAboveBtn.textContent = 'Remove';
                bookAboveBtn.classList.add('remove');
                bookAboveBtn.setAttribute('id', book.id);
                bookAbove.append(bookAboveText);
                bookAbove.append(bookAboveBtn);
                allBooks.append(bookAbove);
        })
    }
    removeBook(targetId) {
        const newBookList = this.storage.filter(book => book.id !== targetId);
        this.storage.length = 0
        this.storage.push(...newBookList)
        localStorage.setItem('form', JSON.stringify(this.storage))
        this.displayBook()
    }
    appendBook() {
        this.storage = JSON.parse(localStorage.getItem('form')) || []
        const theBook = {
            title: this.title,
            author: this.author,
            id: this.id,
        }
        this.storage.push(theBook)
        localStorage.setItem('form', JSON.stringify(this.storage))
    }
}

btn.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('first')
    if(title.value && author.value) {
        const bookObj = new Book(title.value, author.value, Date.now())
        console.log(bookObj)
        bookObj.appendBook()
        bookObj.displayBook()
        title.value = ''
        author.value = ''
        
        // displayBook()
    }
})

allBooks.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove')) {
    const Id = parseInt(e.target.getAttribute('id'), 10);
    // removeBook(targetId);
    const removedBook = new Book();
    removedBook.removeBook(Id)
  }
});

