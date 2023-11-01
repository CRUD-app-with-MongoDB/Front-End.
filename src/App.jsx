import React from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import BestBooks from './BestBooks';
import Books from "./Books.jsx";
import CreateBook from "./CreateBooks.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  // BrowserRouter,
  //  as Router,
  Routes,
  Route
} from "react-router-dom";


let VITE_APP_SERVER = import.meta.env.VITE_APP_SERVER

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  getBooks = async () => {
    try {
      let results = await axios.get(`${VITE_APP_SERVER}/books`);
      this.setState({
        books: results.data,
      })
    } catch (error) {
      console.log('Error: ', error.response.data);
    }
  };

  handleBookSubmit = (event) => {
    event.preventDefault();
    let newBook = {
      title: event.target.title.value,
      description: event.target.description.value,
      available: event.target.available.checked,
    }
    this.postBooks(newBook);
  }

  postBooks = async (newBookObject) => {
    try {
      let url = `${VITE_APP_SERVER}/books`;
      let createdBook = await axios.post(url, newBookObject);
      this.setState({
        books: [...this.state.books, createdBook.data]
      })
    } catch (error) {
      console.log('Error: ', error);
    }
  }

  deleteBooks = async (id) => {
    try {
      let url = `${VITE_APP_SERVER}/books/${id}`;
      await axios.delete(url);
      let updateBooks = this.state.books.filter(book => book._id != id);
      this.setState({
        books: updateBooks,
      });
    } catch (error) {
      console.log('Error: ', error.response.data);
    }
  }

  updateBooks = async (bookToUpdate) => {
    // console.log("onclick gives up", bookToUpdate);
    try {
      let url = `${VITE_APP_SERVER}/books/${bookToUpdate._id}`;
      console.log(url)
      
      let updateBook = await axios.put(url, bookToUpdate);

      console.log(updateBook);

      let updateBookArray = this.state.books.map((exsistingBook) => {
        return exsistingBook._id === bookToUpdate._id
          ? updateBook.data
          : exsistingBook
      });
      
      this.setState({
        books: updateBookArray,
      });
    } catch (error) {
      console.error("we have an ERrrror", error);
    }
  };

  componentDidMount() {
    this.getBooks();
  }

  render() {
    return (
      <>
        {/* <Router> */}
          <Header />

          {/* <Container>Can of Books</Container> */}

          <main>
            {
              this.state.books.length > 0 &&
              <>
              <Books 
              books={this.state.books} 
              deleteBooks={this.deleteBooks} 
              updateBooks={this.updateBooks}
              />
              </>
            }
          </main>

          <CreateBook handleBookSubmit={this.handleBookSubmit} />

          <Routes>
            <Route
              path="/"
              element={<BestBooks />}
            >
            </Route>
            <Route
              path="/About"
              element={<About />}

            ></Route>
          </Routes>
          <Footer />
        {/* </Router> */}
      </>
    )
  }
}

export default App;
