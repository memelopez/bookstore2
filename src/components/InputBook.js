import React from 'react';

function InputBook() {
  return (
    <div>
      <form>
        <input type="text" name="title" placeholder="title" />
        <input type="text" name="author" placeholder="author" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default InputBook;
