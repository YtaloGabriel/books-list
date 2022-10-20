import React from 'react';
import Book from '../Book/Book';
import styles from './Books.module.css';

const API_LINK = 'https://pweb-crud-mongodb.herokuapp.com/books';

const Books = () => {
  const [booksData, setBooksData] = React.useState([]);

  // Get results from API
  React.useEffect(() => {
    const getBooks = async () => {
      try {
        const api = await fetch(`${API_LINK}`);
        const data = await api.json();

        setBooksData(data);
      } catch (error) {
        console.log(error);
      }
    };

    getBooks();
  }, []);

  console.log(booksData);

  return (
    <>
      <button className={styles.addButton}>Add a Book</button>
      <section className={styles.books}>
        {booksData?.map((book, index) => (
          <Book
            key={index}
            imageLink={book.imageLink}
            author={book.author}
            isbn={book.isbn}
            releaseYear={book.releaseYear}
            summary={book.summary}
          />
        ))}
      </section>
    </>
  );
};

export default Books;
