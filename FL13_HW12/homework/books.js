(function () {
    const bookStrKey = 'books';
    if (!localStorage.getItem(bookStrKey)) {
      const books = [
        {
          id: '1',
          name: 'The little book of common sense of investing',
          author: 'John C.Bogle',
          url: 'https://images-na.ssl-images-amazon.com/images/I/51cCQzs8EBL._SX352_BO1,204,203,200_.jpg',
          plot: 'Investments'
        },
        {
          id: '2',
          name: 'One Up On Wall Street: How To Use What You Already Know To Make Money In The Market',
          author: 'Peter Lynch',
          url: 'https://images-na.ssl-images-amazon.com/images/I/51rHrFJEFxL._SX301_BO1,204,203,200_.jpg',
          plot: 'Wall Street'
        },
        {
          id: '3',
          name: 'The 21st-Century Card Counter: The Pros’ Approach to Beating Blackjack',
          author: 'Colin Jones',
          url: 'https://m.media-amazon.com/images/I/51CNN0gJKkL.jpg',
          plot: 'Black Jack'
        }
      ];
      localStorage.setItem(bookStrKey, JSON.stringify(books));
    }
  })()
