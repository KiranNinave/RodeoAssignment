import React from "react";
import Link from "next/link";
import { getPopularMoviesApi } from "../apis/movieApis";
import InfiniteScroll from "react-infinite-scroll-component";

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
        <h2>home</h2>
        <Link href="/search">
          <a>search</a>
        </Link>
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
          {this.state.movies.map((movie, index) => (
            <div key={movie.id.toString() + index}>
              <h3>{movie.title}</h3>
            </div>
          ))}
        </InfiniteScroll>
      </div>
    );
  }
}

export default Index;
