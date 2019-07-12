import React from "react";

export default function TopContainer(props) {
  return (
    <div className="slide">
      <img src={props.news.urlToImage} alt="NoImg" />
      <div className="slide-text">
        <h2 className="title">{props.news.title}</h2>
        <p className="description">{props.news.description}</p>
      </div>
    </div>
  );
}
