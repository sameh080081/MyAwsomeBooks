const title = document.querySelector('.title');
const author = document.querySelector('.author');
const btn = document.querySelector('.btn');
const allBooks = document.querySelector('.book-above');

const Books = document.querySelector('.book');
const inputs = document.querySelector('.entry');
const contact = document.querySelector('.contact');

const navList = document.querySelector('.nav-list');
const navAdd = document.querySelector('.nav-add');
const navContact = document.querySelector('.nav-contact');
const storage = JSON.parse(localStorage.getItem('form')) || [];

function Book(title, author) {
  this.title = title;
  this.author = author;
  this.id = Date.now();
}

class Interface {
  static displayBook() {
    allBooks.innerHTML = '';
    storage.forEach((book) => {
      const bookAbove = document.createElement('div');
      bookAbove.classList.add('class-book');
      const bookAboveText = document.createElement('p');
      bookAboveText.textContent = `"${book.title}" by ${book.author}`;
      const bookAboveBtn = document.createElement('button');
      bookAboveBtn.textContent = 'Remove';
      bookAboveBtn.classList.add('remove');
      bookAboveBtn.setAttribute('id', book.id);
      bookAbove.append(bookAboveText);
      bookAbove.append(bookAboveBtn);
      allBooks.append(bookAbove);
    });
  }

  static removeBook(targetId) {
    const newBookList = storage.filter((book) => book.id !== targetId);
    storage.length = 0;
    storage.push(...newBookList);
    localStorage.setItem('form', JSON.stringify(storage));
    Interface.displayBook();
  }

  static appendBook(theBook) {
    storage.push(theBook);
    localStorage.setItem('form', JSON.stringify(storage));
    Interface.displayBook();
  }

  static displayTime() {
    const x = new Date();
    document.getElementById('time').innerHTML = x;
  }
}

document.addEventListener('DOMContentLoaded', Interface.displayBook(), Interface.displayTime());
setInterval(Interface.displayTime, 1000);

btn.addEventListener('click', (e) => {
  e.preventDefault();
  if (title.value && author.value) {
    const bookObj = new Book(title.value, author.value, Date.now());
    Interface.appendBook(bookObj);
    Interface.displayBook();
    title.value = '';
    author.value = '';
  }
});

allBooks.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove')) {
    const Id = parseInt(e.target.getAttribute('id'), 10);
    Interface.removeBook(Id);
  }
});

navList.addEventListener('click', () => {
  Books.classList.remove('hide');
  Books.classList.add('show');
  inputs.classList.remove('show');
  inputs.classList.add('hide');
  contact.classList.remove('show');
  contact.classList.add('hide');
});

navAdd.addEventListener('click', () => {
  Books.classList.remove('show');
  Books.classList.add('hide');
  inputs.classList.remove('hide');
  inputs.classList.add('show');
  contact.classList.remove('show');
  contact.classList.add('hide');
});

navContact.addEventListener('click', () => {
  Books.classList.remove('show');
  Books.classList.add('hide');
  inputs.classList.remove('show');
  inputs.classList.add('hide');
  contact.classList.remove('hide');
  contact.classList.add('show');
});