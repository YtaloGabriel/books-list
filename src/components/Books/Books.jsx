import React from 'react';
import { GlobalContext } from '../../GlobalContext';
import Book from '../Book/Book';
import CreateModal from '../Modal/CreateModal';
import styles from './Books.module.css';

const API_LINK = 'https://pweb-crud-mongodb.herokuapp.com/books';

const Books = () => {
  const [booksData, setBooksData] = React.useState([]);

  const { createModal, setCreateModal } = React.useContext(GlobalContext);

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

  const addModal = () => {
    setCreateModal(true);
  };

  return (
    <>
      {createModal && <CreateModal />}
      <button className={styles.addButton} onClick={addModal}>
        Add a Book
      </button>
      <section className={styles.books}>
        {booksData?.map((book, index) => (
          <Book
            key={index}
            imageLink={book.imageLink}
            author={book.author}
            isbn={book.isbn}
            releaseYear={book.releaseYear}
            summary={book.summary}
            title={book.title}
          />
        ))}

        {!booksData.length && <p>Nenhum livro foi adicionado</p>}
      </section>
    </>
  );
};

export default Books;
