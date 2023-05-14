import React from 'react';
import Book from './Book';
import InputBook from './InputBook';

function BookList() {
  return (
    <div>
      BookList
      <Book title="The Great Gatsby" author="F. Scott Fitzgerald" />
      <InputBook />
    </div>
  );
}

export default BookList;
