const allBooks = document.querySelector('.book-above');
const storage = JSON.parse(localStorage.getItem('form')) || [];
import { DateTime } from "./luxon.js";

export default class Interface {
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
    document.getElementById('time').innerHTML = DateTime.local();
  }
}