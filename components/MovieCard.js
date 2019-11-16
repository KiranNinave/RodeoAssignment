import React, { Component } from "react";
import { Card, Icon } from "antd";
import StarRating from "react-star-ratings";
const { Meta } = Card;

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
        style={{ marginTop: 20, marginBottom: 20, maxWidth: 300 }}
        cover={
          <img
            alt="example"
            src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
            style={{ width: 300, height: "auto" }}
          ></img>
        }
      >
        <div>
          <Meta style={{ fontWeight: "bold" }} title={original_title} />
          <div style={{ lineHeight: 2, marginTop: 10 }}>
            <div style={{ fontSize: 12 }}>
              <b>Date of Release:</b> {release_date}
            </div>
            <div style={{ fontSize: 12 }}>
              <b>Language:</b> {original_language}
            </div>
            <div style={{ fontSize: 12 }}>
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
