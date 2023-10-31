import React from 'react';
import axios from "axios";
import { Carousel } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
// import { buildErrorMessage } from 'vite';

let VITE_APP_SERVER = import.meta.env.VITE_APP_SERVER;
// console.log('server...', VITE_APP_SERVER);

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  getBooks = async () => {
    // console.log(`${VITE_APP_SERVER}/books`);
    try {
      let results = await axios.get(`${VITE_APP_SERVER}/books`);
      // console.log('what happened! ', results);
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
    let carouselItems = this.state.books.map((book, index) => (
      <Carousel.Item key={index}>
        <img className="d-block w-100" alt={this.state.books.description} />
        {/* <Carousel.Caption> */}
          <h3
            style={{
              backgroundColor: "black",
              fontSize: "24px",
              borderRadius: "15px",
              width: "max-content",
              margin: "auto",
              padding: "5px"
            }}
          >{book.title}</h3>
        {/* </Carousel.Caption> */}
      </Carousel.Item>
    ))

    return (
      <>
        <h1>My Essential Lifelong Learning &amp; Formation Shelf</h1>

        {this.state.books.length ? (
          <><Container>
            <Carousel style={{
              height: "80px",
              color: "red",
              backgroundColor: "maroon",
            }}> 
              {carouselItems}
            </Carousel>
          </Container></>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    );
  }
}

export default BestBooks;
