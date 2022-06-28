const title = document.querySelector('.title');
const author = document.querySelector('.author');
const btn = document.querySelector('.btn');
const allBooks = document.querySelector('.book-above');
const storage = JSON.parse(localStorage.getItem('form')) || [];

const displayBook = () => {
  allBooks.innerHTML = '';
  storage.forEach((book) => {
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
  });
};
displayBook();

btn.addEventListener('click', (e) => {
  e.preventDefault();
  if (title.value && author.value) {
    const books = {
      title: title.value,
      author: author.value,
      id: Date.now(),
    };
    storage.push(books);
    localStorage.setItem('form', JSON.stringify(storage));
    displayBook();
    title.value = '';
    author.value = '';
  }
});

const removeBookFromDisplay = (targetId) => {
  const newArray = storage.filter((item) => item.id !== targetId);
  storage.length = 0;
  storage.push(...newArray);
  localStorage.setItem('form', JSON.stringify(storage));
  displayBook();
};

allBooks.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove')) {
    const targetId = parseInt(e.target.getAttribute('id'), 10);
    removeBookFromDisplay(targetId);
  }
});
