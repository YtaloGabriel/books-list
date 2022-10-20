import React from 'react';
import styles from './Book.module.css';
import ImageWithoutCover from '../../assets/images/withoutcover.jpg';

const Book = ({ imageLink, title, releaseYear, author, isbn, summary }) => {
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
          <span className={styles.releaseYear}>{releaseYear || '0000'} -</span>
          <span className={styles.author}>{author || 'Author name'}</span>
        </div>
        <small className={styles.isbn}>ISBN: {isbn || '00000000'}</small>
        <p className={styles.summary}>{summary || 'Summary here'}</p>

        <div className={styles.actions}>
          <button className={styles.editButton}>Edit Book</button>
          <button className={styles.deleteButton}>Delete Book</button>
        </div>
      </div>
    </div>
  );
};

export default Book;
