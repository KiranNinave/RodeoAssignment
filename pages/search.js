import React from "react";
import { getSearchMoviesApi } from "../apis/movieApis";
import InfiniteScroll from "react-infinite-scroll-component";
import Link from "next/link";

// style
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "../styles/Base.css";

// style compoents
import { Container, Row, Col, Spinner } from "react-bootstrap";

// layout
import Header from "../layouts/Header";

// components
import MovieCard from "../components/MovieCard";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasMore: true,
      loading: false,
      movies: [],
      query: "",
      page: 1
    };
    this.isComponentMounted = true;
  }

  componentWillUnmount() {
    this.isComponentMounted = false;
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = async data => {
    if (data != "") {
      this.setState({ query: data }, async () => {
        await this.searchMovie(true);
      });
    } else {
      console.log("please enter something");
    }
  };

  searchMovie = async (isNew = false) => {
    try {
      if (this.isNew) this.setState({ loading: true });

      const { query, page } = this.state;
      const response = await getSearchMoviesApi({ query, page });
      this.setState({
        movies: isNew
          ? [...response.results]
          : [...this.state.movies, ...response.results],
        hasMore: page <= response.total_pages
      });
    } catch (err) {
      console.log(err);
    } finally {
      if (this.isComponentMounted) this.setState({ loading: false });
    }
  };

  loadMore = async () => {
    if (this.isComponentMounted) {
      this.setState(
        prevState => ({
          page: prevState.page + 1
        }),
        async () => await this.searchMovie()
      );
    }
  };

  render() {
    if (this.state.loading) {
      return (
        <div
          style={{
            display: "flex",
            height: "100%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 100
          }}
        >
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      );
    }
    return (
      <div>
        <Header onSubmit={this.onSubmit} search={true} />
        <Container className="base-container">
          <InfiniteScroll
            dataLength={this.state.movies.length} //This is important field to render the next data
            next={this.loadMore}
            hasMore={this.state.hasMore}
            loader={
              this.state.movies.length > 0 ? (
                <h4>Loading...</h4>
              ) : (
                <div style={{ marginTop: 50 }}>
                  <h4>Search what you like to watch!</h4>
                </div>
              )
            }
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            <Row style={{ justifyContent: "center" }}>
              {this.state.movies.map((movie, index) => (
                <div key={movie.id.toString() + index}>
                  <Link href={`/detail?id=${movie.id}`}>
                    <Col style={{ cursor: "pointer" }}>
                      <MovieCard movie={movie} />
                    </Col>
                  </Link>
                </div>
              ))}
            </Row>
          </InfiniteScroll>
        </Container>
      </div>
    );
  }
}

export default Search;
