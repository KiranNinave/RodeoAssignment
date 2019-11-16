import React, { Component } from "react";
import { Card, Icon } from "antd";
import StarRating from "react-star-ratings";
const { Meta } = Card;

// css
import "../styles/MovieCard.css";

export default class MovieCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      backdrop_path,
      title,
      release_date,
      vote_average,
      original_language,
      vote_count,
      original_title
    } = this.props.movie;
    return (
      <Card
        className="movie-card"
        cover={
          <img
            alt="example"
            src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
            className="movie-card-image"
          ></img>
        }
      >
        <div>
          <Meta className="movie-card-title" title={original_title} />
          <div style={{ lineHeight: 2, marginTop: 10 }}>
            <div className="movie-card-content-text">
              <b>Date of Release:</b> {release_date}
            </div>
            <div className="movie-card-content-text">
              <b>Language:</b> {original_language}
            </div>
            <div className="movie-card-content-text">
              <b>Total reviews:</b> {vote_count}
            </div>
          </div>
          <StarRating
            rating={vote_average}
            starRatedColor="#F5E400"
            starDimension="15px"
            starSpacing="0.5px"
            numberOfStars={10}
          />
        </div>
      </Card>
    );
  }
}
