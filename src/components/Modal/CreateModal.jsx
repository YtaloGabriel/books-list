import React from 'react';
import { GlobalContext } from '../../GlobalContext';
import styles from './Modal.module.css';

const CreateModal = () => {
  const { setCreateModal } = React.useContext(GlobalContext);

  const API_URL = 'https://pweb-crud-mongodb.herokuapp.com/books';

  const inputImage = React.useRef();
  const inputIsbn = React.useRef();
  const inputTitle = React.useRef();
  const inputAuthor = React.useRef();
  const inputYear = React.useRef();
  const inputSummary = React.useRef();

  const postBook = async (image, isbn, title, author, year, summary) => {
    try {
      const table = {
        imageLink: image,
        isbn: isbn,
        title: title,
        author: author,
        summary: summary,
        releaseYear: year,
      };

      const api = await fetch(`${API_URL}`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(table),
      });
      const data = await api.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Add book to database
    const image = inputImage.current.value;
    const isbn = inputIsbn.current.value;
    const title = inputTitle.current.value;
    const author = inputAuthor.current.value;
    const year = inputYear.current.value;
    const summary = inputSummary.current.value;
    postBook(image, isbn, title, author, year, summary);

    setCreateModal(false);
  };

  return (
    <div className={styles.modalContent}>
      <section className={styles.modal}>
        <header className={styles.header}>
          <h1>Add a book</h1>
          <a href="#" onClick={() => setCreateModal(false)}>
            X
          </a>
        </header>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label>
            <span>Image URL</span>
            <input type="text" ref={inputImage} />
          </label>

          <label>
            <span>ISBN</span>
            <input type="text" ref={inputIsbn} required />
          </label>

          <label>
            <span>Book Title</span>
            <input type="text" ref={inputTitle} required />
          </label>

          <label>
            <span>Author</span>
            <input type="text" ref={inputAuthor} required />
          </label>

          <label>
            <span>Release Year</span>
            <input type="number" ref={inputYear} required />
          </label>

          <label>
            <span>Summary</span>
            <input type="text" ref={inputSummary} required />
          </label>

          <button>Enviar</button>
        </form>
      </section>
    </div>
  );
};

export default CreateModal;
