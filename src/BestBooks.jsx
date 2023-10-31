import React from 'react';
import axios from "axios";

let VITE_APP_SERVER = import.meta.env.VITE_APP_SERVER;
console.log('server...',VITE_APP_SERVER);

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  getBooks = async () => {
    console.log(`${VITE_APP_SERVER}/books`);
      try {
        let results = await axios.get(`${VITE_APP_SERVER}/books`);
        console.log('what happened! ',results);
        this.setState({
          books: results.data,
        })
      } catch (error) {
        console.log("we have an error: ", error.response.data);
      }
    };

    componentDidMount() {
      this.getBooks();
    }



  render() {

    /* TODO: render all the books in a Carousel */
    console.log(this.state.books);
    let books = this.state.books.map(book => (
     <p key={book.title}>{book.description} is {book.available}</p>
    ))

    return (
      <>
      
        <h1>My Essential Lifelong Learning &amp; Formation Shelf</h1>

        {this.state.books.length ? (
          <p>Book Carousel coming soon {books}</p>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
