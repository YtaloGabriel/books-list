const DELETE_BOOK = (isbn) => {
  const API_URL = `https://pweb-crud-mongodb.herokuapp.com/books/${isbn}`;

  const deleteByISBN = async () => {
    try {
      const api = await fetch(API_URL, {
        method: 'DELETE',
      });
      const result = await api.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  deleteByISBN();
};

export default DELETE_BOOK;
