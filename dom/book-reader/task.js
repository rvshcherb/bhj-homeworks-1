(function () {
  const bookControls = document.querySelectorAll('.book__control');
  const book = document.getElementById('book');

  const changeClass = (elemClass, evt) => {
    Array.from(evt.currentTarget.getElementsByTagName('a')).forEach(link => link.classList.remove(elemClass));
    evt.target.classList.add(elemClass);
  };

  bookControls.forEach(bookControl => bookControl.addEventListener('click', function(evt) {
    evt.preventDefault();



    switch (true) {
      case bookControl.classList.contains('book__control_font-size') && evt.target.tagName === "A":
        changeClass('font-size_active', evt);
        book.classList.remove('book_fs-big', 'book_fs-small', 'book_fs-undefined');
        book.classList.add(`book_fs-${evt.target.dataset.size}`);
        break;
      case bookControl.classList.contains('book__control_color') && evt.target.tagName === "A":
        changeClass('color_active', evt);
        book.classList.remove('book_color-gray', 'book_color-whitesmoke', 'book_color-black');
        book.classList.add(`book_color-${evt.target.dataset.textColor}`);
        break;
      case bookControl.classList.contains('book__control_background') && evt.target.tagName === "A":
        changeClass('color_active', evt);
        book.classList.remove('book_bg-gray', 'book_bg-black', 'book_bg-white');
        book.classList.add(`book_bg-${evt.target.dataset.bgColor}`);
        break;
    }
  }));  
})();
