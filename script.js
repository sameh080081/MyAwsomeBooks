function Books(title, author){
  this.title = title;
  this.author = author;
}

function getBooks(){
  let bookList;
  if(JSON.parse(localStorage.getItem('bookList')===null)){
    bookList = [];
  }
  else {
    bookList = JSON.parse(localStorage.getItem('bookList'));
  }
   return bookList;
}

function addBook(book){
  const bookList = getBooks();
  bookList.push(book);
  localStorage.setItem('bookList',JSON.stringify(bookList));
}

function removeBook(title, author){
  const bookList = getBooks();
  const newList=bookList.filter(item => item.title !== title && item.author !== author);
  localStorage.setItem('bookList',JSON.stringify(newList));
}



function displayBooks() {
  const books = getBooks();
  books.forEach((book) => {
    showBook(book);
  });
}

function showBook(book){
  const list = document.querySelector('.list');
  const bookrecord = document.createElement('tr');
  bookrecord.innerHTML = `
  <td>${book.title}</td>
  <td>&nbsp</td>
  <td>${book.author}</td>
  <button class= 'delete' >Remove</button>
  `;
  list.appendChild(bookrecord);
}

function screenDelete(element){
  element.parentElement.remove();
}

document.addEventListener('DOMContentLoaded', displayBooks());
const form = document.querySelector('.booksinput');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('.title').value;
  const author = document.querySelector('.author').value;
  const book = new Books(title, author);
  addBook(book);
  showBook(book);
  document.querySelector('.title').value = '';
  document.querySelector('.author').value = '';
});

const remove = document.querySelector('.list');
remove.addEventListener('click',(e) => {
  const author = e.target.previousElementSibling.innerText;
  const title = e.target.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
  screenDelete(e.target);
  removeBook(title,author);
});