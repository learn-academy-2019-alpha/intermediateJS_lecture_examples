var library = [
   {
       title:  'The Road Ahead',
       author: 'Bill Gates',
       libraryID: 1254
   },
   {
       title: 'Walter Isaacson',
       author: 'Steve Jobs',
       libraryID: 4264,
   },
   {
       title: 'Game of Thrones - Game of Fire and Ice',
       author: 'George R. Martin',
       libraryID: 333,
   },
   {
     title: 'Harry Potter - Goblet of Fire',
     author: 'J.K. Rowling',
     libraryID: 2222,
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245
   }];

   library.push({
     title: 'Harry Potter - Goblet of Fire',
     author: 'J.K. Rowling',
     libraryID: 1111,
   })

  class BookSorter{
    constructor(books){
      this.books = books;
    }

    sortedById(){
      return this.books.sort(function(a,b){
        return a.libraryID - b.libraryID
      })
    }

    sortedByTitle(){
      return this.books.sort(function(a,b){
        if(a.title == b.title){
          return 0
        } else if(a.title > b.title){
          return 1
        } else {
          return  -1
        }
      })
    }
  }

  var foo = new BookSorter(library)
  console.log(foo.sortedByTitle())
