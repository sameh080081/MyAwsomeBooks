import Book from "./module/books.js";
import Interface from "./module/interface.js";

const title = document.querySelector('.title');
const author = document.querySelector('.author');
const btn = document.querySelector('.btn');
const allBooks = document.querySelector('.book-above');

const book = document.querySelector('.book');
const inputs = document.querySelector('.entry');
const contact = document.querySelector('.contact');

const navList = document.querySelector('.nav-list');
const navAdd = document.querySelector('.nav-add');
const navContact = document.querySelector('.nav-contact');

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
  book.classList.remove('hide');
  book.classList.add('show');
  inputs.classList.remove('show');
  inputs.classList.add('hide');
  contact.classList.remove('show');
  contact.classList.add('hide');
});

navAdd.addEventListener('click', () => {
  book.classList.remove('show');
  book.classList.add('hide');
  inputs.classList.remove('hide');
  inputs.classList.add('show');
  contact.classList.remove('show');
  contact.classList.add('hide');
});

navContact.addEventListener('click', () => {
  book.classList.remove('show');
  book.classList.add('hide');
  inputs.classList.remove('show');
  inputs.classList.add('hide');
  contact.classList.remove('hide');
  contact.classList.add('show');
});