import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";

class CreateBook extends React.Component {
  render() {
    return (
      <>
        <Container className="mt-5">
          <Form onSubmit={this.props.handleBookSubmit}>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group controlId="available">
              <Form.Check type="checkbox" label="Available?" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Add Book to our Database
            </Button>
          </Form>
        </Container>
      </>
    );
  }
}

export default CreateBook;