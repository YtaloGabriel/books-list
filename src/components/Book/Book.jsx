import React from 'react';

import styles from './Book.module.css';
import ImageWithoutCover from '../../assets/images/withoutcover.jpg';

import DELETE_BOOK from './deleteBook';

const Book = ({ imageLink, title, releaseYear, author, isbn, summary }) => {
  const deleteBook = () => {
    DELETE_BOOK(isbn);
  };

  const bookRender = () => {
    return (
      <div className={styles.book}>
        <img
          src={imageLink || ImageWithoutCover}
          alt="imagem de livro"
          className={styles.image}
        />
        <div className={styles.bookInfo}>
          <h1 className={styles.title}>{title || 'Book Title'}</h1>
          <div className={styles.numbers}>
            <span className={styles.releaseYear}>
              {releaseYear || '0000'} -
            </span>
            <span className={styles.author}>{author || 'Author name'}</span>
          </div>
          <small className={styles.isbn}>ISBN: {isbn || '00000000'}</small>
          <p className={styles.summary}>{summary || 'Summary here'}</p>

          <div className={styles.actions}>
            <button className={styles.editButton}>Edit Book</button>
            <button onClick={deleteBook} className={styles.deleteButton}>
              Delete Book
            </button>
          </div>
        </div>
      </div>
    );
  };

  return bookRender();
};

export default Book;
