import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description, imageUrl, url, publishedAt, author } = this.props;

    const currentDate = new Date(publishedAt);

    const currentDayOfMonth = currentDate.getDate();
    const currentMonth = currentDate.getMonth(); // Be careful! January is 0, not 1
    const currentYear = currentDate.getFullYear();
    const currentHours = currentDate.getHours();
    const currentMins = currentDate.getMinutes();
    const currentSecs = currentDate.getSeconds();

    const dateString =
      currentDayOfMonth +
      "-" +
      (currentMonth + 1) +
      "-" +
      currentYear +
      " " +
      currentHours +
      ":" +
      currentMins +
      ":" +
      currentSecs +
      " UTC";

    return (
      <div className="card " style={{ maxWidth: "540px" }}>
        <img
          src={
            !imageUrl
              ? "https://uktie.eu/wp-content/uploads/2017/01/358588-news-images.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              Article by: {author ? author : "Unknown"}
            </small>
          </p>
          <p className="card-text">
            <small className="text-muted">Published on: {dateString}</small>
          </p>
          <a href={url} target="_bl6" className="btn btn-primary">
            Read more
          </a>
        </div>
      </div>
    );
  }
}

export default Newsitem;
