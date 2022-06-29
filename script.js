const title = document.querySelector('.title');
const author = document.querySelector('.author');
const btn = document.querySelector('.btn');
const allBooks = document.querySelector('.book-above');
const storage = JSON.parse(localStorage.getItem('form')) || [];



class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.id = Date.now();
    }
    displayBook() {
        allBooks.innerHTML = `the book`
        storage.forEach(book => {
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
        const newBookList = storage.filter(book => book.id !== targetId);
        storage.length = 0
        storage.push(...newBookList)
        localStorage.setItem('form', JSON.stringify(storage))
        this.displayBook()
    }
}

btn.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('first')
    if(title.value && author.value) {
        const bookList = {
            title: title.value,
            author: author.value,
            id: Date.now()  
        }
        storage.push(bookList)
        localStorage.setItem('form', JSON.stringify(storage))
        const bookObj = new Book(title.value, author.value, Date.now())
        console.log(bookObj)
        bookObj.displayBook()
        title.value = ''
        author.value = ''
        
        // displayBook()
    }
})

allBooks.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove')) {
    const targetId = parseInt(e.target.getAttribute('id'), 10);
    // removeBook(targetId);
    const removedBook = new Book();
    removedBook.removeBook(targetId)
  }
});


// const bookObj = new Book();
// bookObj.displayBook()

// const displayBook = () => {
//   allBooks.innerHTML = '';
//   storage.forEach((book) => {
//     const bookAbove = document.createElement('div');
//     bookAbove.classList.add('class-book');
//     const bookAboveText = document.createElement('p');
//     bookAboveText.textContent = `${book.title} by ${book.author}`;
//     const bookAboveBtn = document.createElement('button');
//     bookAboveBtn.textContent = 'Remove';
//     bookAboveBtn.classList.add('remove');
//     bookAboveBtn.setAttribute('id', book.id);
//     bookAbove.append(bookAboveText);
//     bookAbove.append(bookAboveBtn);
//     allBooks.append(bookAbove);
//   });
// };
// displayBook();

// btn.addEventListener('click', (e) => {
//   e.preventDefault();
//   if (title.value && author.value) {
//     const books = {
//       title: title.value,
//       author: author.value,
//       id: Date.now(),
//     };
//     storage.push(books);
//     localStorage.setItem('form', JSON.stringify(storage));
//     displayBook();
//     title.value = '';
//     author.value = '';
//   }
// });

// const removeBookFromDisplay = (targetId) => {
//   const newArray = storage.filter((item) => item.id !== targetId);
//   storage.length = 0;
//   storage.push(...newArray);
//   localStorage.setItem('form', JSON.stringify(storage));
//   displayBook();
// };

// allBooks.addEventListener('click', (e) => {
//   if (e.target.classList.contains('remove')) {
//     const targetId = parseInt(e.target.getAttribute('id'), 10);
//     removeBookFromDisplay(targetId);
//   }
// });
