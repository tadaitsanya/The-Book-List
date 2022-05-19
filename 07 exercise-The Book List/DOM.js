var books = [
    {title: 'The Design of EveryDay Things',
     img: 'https://images-na.ssl-images-amazon.com/images/I/41bWcNdTGmL.jpg',
     author: 'Don Norman',
     alreadyRead: false
    },
    {title: 'The Most Human Human',
     img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1295465264l/8884400.jpg',
     author: 'Brian Christian',
     alreadyRead: true
    }];

  var bookList = document.createElement('ul');
  for (var i = 0; i < books.length; i++) {
    var bookItem = document.createElement('li');
    var bookImg = document.createElement('img');
    bookImg.src = books[i].img;
    bookItem.appendChild(bookImg);
    var bookDescription = document.createTextNode(books[i].title + ' by ' + books[i].author);
    bookItem.appendChild(bookDescription);
    if (books[i].alreadyRead) {
      bookItem.style.color = 'pink';
    }
    bookList.appendChild(bookItem);
  }
  document.body.appendChild(bookList);
  
