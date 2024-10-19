import React from 'react'
import { useState } from 'react';
import Booktable from '../component/Booktable'
import Navbar from '../component/Navbar'
import { useLocation } from 'react-router-dom';
// import Addbooks from '../pages/Addbooks'

function Booktablepage() {
  const location=useLocation();
  // console.log(location);
  
  const [books, setBooks] = useState([
    {title:'Pride and Prejudice', author:'Jane Austen', genre:'Fiction',year:1813 },
    {title:'The Great Gatsby', author:'F. Scott Fitzgerald', genre:'Tragedy, Fiction',year:1925 },
    {title:'Beauty And The Beast', author:'Gabrielle-Suzanne Barbot de Villeneuve', genre:'Fairy Tale, Fantasy',year:1740 },
    {title:'Pride and Prejudice', author:'Jane Austen', genre:'Fiction',year:1813 },
  ]);

  // const addbooks = (book) => {
  //   setBooks([book]);
  //   console.log(book);
  // }

  const deleteBook = (index) => {
    const updatedBooks = [...books]; 
    updatedBooks.splice(index, 1);  
    setBooks(updatedBooks);        
  }; 
  
  return (
    <div className='w-full flex items-center justify-center flex-col'>
      <Navbar/>
      <Booktable books={books} deleteBook={deleteBook}  />

    </div>
  )
}

export default Booktablepage
