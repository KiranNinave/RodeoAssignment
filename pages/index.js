import React from "react";
import { getPopularMoviesApi } from "../apis/movieApis";
import InfiniteScroll from "react-infinite-scroll-component";

// style
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";

// style compoents
import { Container, Row, Col } from "react-bootstrap";

// layout
import Header from "../layouts/Header";

// compoents
import MovieCard from "../components/MovieCard";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasMore: true,
      loading: false,
      page: 1,
      movies: []
    };
    this.isComponentMounted = true;
  }

  async componentDidMount() {
    await this.fetchMovies();
  }

  componentWillUnmount() {
    this.isComponentMounted = false;
  }

  fetchMovies = async () => {
    try {
      this.setState({ loading: true });
      const { page } = this.state;
      const response = await getPopularMoviesApi({ page });
      this.setState({
        movies: [...this.state.movies, ...response.results],
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
        async () => await this.fetchMovies()
      );
    }
  };

  render() {
    return (
      <div>
        <Header></Header>
        <Container style={{ marginTop: 70 }}>
          <InfiniteScroll
            dataLength={this.state.movies.length} //This is important field to render the next data
            next={this.loadMore}
            hasMore={this.state.hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            <Row style={{ justifyContent: "center" }}>
              {this.state.movies.map((movie, index) => (
                <div key={movie.id.toString() + index}>
                  <Col>
                    <MovieCard movie={movie} />
                  </Col>
                </div>
              ))}
            </Row>
          </InfiniteScroll>
        </Container>
      </div>
    );
  }
}

export default Index;
