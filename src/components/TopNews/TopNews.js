import React from "react";
import TopNewsSlider from "./TopNewsSlider";
import TwoTopNews from "./TwoTopNews";

export default function TopNews(props) {
  return (
    <div className="topnews">
      <div className="categoryTitle">{checkCategory(props.category)}</div>
      <TopNewsSlider news={props.news} />
      <TwoTopNews news={props.news} />
    </div>
  );
}

function checkCategory(category) {
  switch (category) {
    case "news":
      return "topNEWS";
    case undefined:
      return "topNEWS";
    case "entertainment":
      return "entertainment";
    default:
      return category + "NEWS";
  }
}
