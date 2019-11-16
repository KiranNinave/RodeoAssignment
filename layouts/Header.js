import React from "react";
import { Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Form, FormControl, Button } from "react-bootstrap";
import Link from "next/link";

// css
import "../styles/Header.css";

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
          <Link href="/">
            <div style={{ cursor: "pointer" }} className="navbar-brand visible">
              Movies Now
            </div>
          </Link>
          <Nav className="mr-auto"></Nav>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          {search && (
            <Form inline onSubmit={this.onSubmit}>
              <FormControl
                name="search"
                type="text"
                placeholder="Search"
                className="mr-sm-2 search-bar"
                value={this.state.search}
                onChange={this.handleTextChange}
              />
              <Button type="submit" variant="outline-light">
                Search
              </Button>
            </Form>
          )}

          {!search && (
            <Link inline={true} href="/search">
              <div
                style={{ cursor: "pointer" }}
                className="btn btn-outline-light"
              >
                search
              </div>
            </Link>
          )}
        </Container>
      </Navbar>
    );
  }
}
