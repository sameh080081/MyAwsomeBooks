const _title = document.querySelector('.title');
const _author = document.querySelector('.author');
const _btn = document.querySelector('.btn');
const _allBooks = document.querySelector('.book-above');
const _storage = JSON.parse(localStorage.getItem('form')) || [];


_btn.addEventListener('click', (e) => {
  e.preventDefault()
  console.log('i have been clicked!!!')
  if(_title.value && _author.value) {
    console.log(_title.value, _author.value)
    const books = {
      title: _title.value,
      author: _author.value,
      _id: Date.now(),
    }
    _storage.push(books)
    localStorage.setItem('form',JSON.stringify(_storage))
    displayBook()
    _title.value = ''
    _author.value = ''
  }
}) 

const displayBook = () => {
    _allBooks.innerHTML = ''
    _storage.forEach(book => {
        const bookAbove = document.createElement('div')
        bookAbove.classList.add('class-book')
        const bookAboveText = document.createElement('p')
        bookAboveText.textContent = `${book.title} by ${book.author}`
        const bookAboveBtn = document.createElement('button')
        bookAboveBtn.textContent = 'Remove'
        bookAboveBtn.classList.add('remove')
        bookAboveBtn.setAttribute('id', book._id)
        bookAbove.append(bookAboveText)
        bookAbove.append(bookAboveBtn)
        _allBooks.append(bookAbove)
    })
}
displayBook()

_allBooks.addEventListener('click', (e) => {
    if(e.target.classList.contains('remove')) {
        const targetId = parseInt(e.target.getAttribute('id'), 10)
        removeBookFromDisplay(targetId)
    }
})

const removeBookFromDisplay = (targetId) => {
    const newArray = _storage.filter((item) => item._id !== targetId)
    _storage.length = 0
    _storage.push(...newArray)
    localStorage.setItem('form', JSON.stringify(_storage))
    displayBook()
}
