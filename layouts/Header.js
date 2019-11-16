import React from "react";
import { Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Form, FormControl, Button, Row, Col } from "react-bootstrap";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  onSubmit = async e => {
    e.preventDefault();
    await this.props.onSubmit(this.state.search);
  };

  handleTextChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const { search } = this.props;
    return (
      <Navbar fixed="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Movies Now</Navbar.Brand>
          <Nav className="mr-auto"></Nav>
          {search && (
            <Form inline onSubmit={this.onSubmit}>
              <FormControl
                name="search"
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                value={this.state.search}
                onChange={this.handleTextChange}
              />
              <Button type="submit" variant="outline-light">
                Search
              </Button>
            </Form>
          )}
          {!search && (
            <Nav.Link className="btn btn-outline-light" inline href="/search">
              search
            </Nav.Link>
          )}
        </Container>
      </Navbar>
    );
  }
}
