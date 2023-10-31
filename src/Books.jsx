import React from "react";
import { Container, ListGroup, Button, ListGroupItem} from "react-bootstrap";

class Books extends React.Component {
    render () {
        let books = this.props.books.map((book) => (
            <Book 
            book={book} 
            key={book._id} 
            deleteBooks={this.props.deleteBooks} 
            updateBooks={this.props.updateBooks}
            />
        ));
        return (
            <>
            <Container>
                <ListGroup>{books}</ListGroup>
            </Container>
            </>
        );
    }
}

class Book extends Books {
    render () {
        return (
            <>
            <ListGroupItem>
                {this.props.book.title} is a book about {this.props.book.description} 
                
                <Button variant="success" onClick={() => this.props.deleteBooks(this.props.book._id)}>Delete Book</Button>
                <Button variant="warning" onClick={() => this.props.updateBooks(this.props.book)}>Update Book</Button>
                </ListGroupItem></>
        )
    }
}

export default Books