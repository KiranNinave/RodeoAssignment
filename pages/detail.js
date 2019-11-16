import React from "react";
import Header from "../layouts/Header";

// style
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";

// styled component
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { Descriptions, Card } from "antd";

// apis
import { getMovieById } from "../apis/movieApis";

export default class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      movie: null
    };
    this.isComponentMounted = true;
  }
  static async getInitialProps({ query }) {
    return { query };
  }

  async componentDidMount() {
    const movieId = this.props.query.id;
    await this.fetchMovie(movieId);
  }

  fetchMovie = async id => {
    try {
      this.setState({ loading: true });
      const response = await getMovieById({ id });
      this.setState({ movie: response });
    } catch (err) {
      console.log(err);
    } finally {
      if (this.isComponentMounted) this.setState({ loading: false });
    }
  };

  render() {
    if (this.state.loading || !this.state.movie) {
      return (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
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

    const {
      backdrop_path,
      original_title,
      original_language,
      release_date,
      overview,
      vote_count,
      vote_average,
      popularity,
      adult,
      status,
      imdb_id
    } = this.state.movie;

    return (
      <div>
        <Header search={false} />
        <Container style={{ marginTop: 70 }}>
          <Row>
            <Col sm={12} md={4} lg={4}>
              <img
                src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
                alt={original_title + " image"}
                className="img-fluid"
              />
            </Col>
            <Col sm={12} md={8} lg={8}>
              <Card>
                <Descriptions
                  title={original_title}
                  bordered={false}
                  layout="vertical"
                >
                  <Descriptions.Item label="Title">
                    {original_title}
                  </Descriptions.Item>
                  <Descriptions.Item label="Release date">
                    {release_date}
                  </Descriptions.Item>
                  <Descriptions.Item label="Language">
                    {original_language}
                  </Descriptions.Item>

                  <Descriptions.Item label="Vote count">
                    {vote_count}
                  </Descriptions.Item>
                  <Descriptions.Item label="Vote average">
                    {vote_average} /10
                  </Descriptions.Item>
                  <Descriptions.Item label="Popularity">
                    {popularity}
                  </Descriptions.Item>

                  <Descriptions.Item label="Adult">
                    {adult ? "YES" : "NO"}
                  </Descriptions.Item>
                  <Descriptions.Item label="Status">{status}</Descriptions.Item>
                  <Descriptions.Item label="IMDB ID">
                    {imdb_id}
                  </Descriptions.Item>

                  <Descriptions.Item label="Overview" span={3}>
                    {overview}
                  </Descriptions.Item>
                </Descriptions>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
