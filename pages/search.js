import React from "react";
import { getSearchMoviesApi } from "../apis/movieApis";
import InfiniteScroll from "react-infinite-scroll-component";

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

  onSubmit = async e => {
    e.preventDefault();
    if (this.query != "") {
      await this.searchMovie();
    } else {
      console.log("please enter something");
    }
  };

  searchMovie = async () => {
    try {
      this.setState({ loading: true });
      const { query, page } = this.state;
      const response = await getSearchMoviesApi({ query, page });
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
        async () => await this.searchMovie()
      );
    }
  };

  render() {
    return (
      <div>
        <h3>search what you like to watch</h3>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="query"
            placeholder="search"
            value={this.state.query}
            onChange={this.handleChange}
          />
          <button type="submit">search</button>
        </form>

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

export default Search;
