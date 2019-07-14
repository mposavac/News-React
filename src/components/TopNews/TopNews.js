import React from "react";
import TopNewsSlider from "./TopNewsSlider";
import TwoTopNews from "./TwoTopNews";

export default function TopNews(props) {
  return (
    <div className="topnews">
      <div className="categoryTitle">
        {checkCategory(props.category, props.languageIndicator)}
      </div>
      <TopNewsSlider news={props.news} />
      <TwoTopNews news={props.news} />
    </div>
  );
}

function checkCategory(category, language) {
  if (language === "us") {
    if (category === "news" || !category) return "topNEWS";
    else if (category === "entertainment") return "entertainment";
    else return category + "NEWS";
  } else if (language === "fr") {
    return "Nouvelles";
  } else if (language === "de") {
    return "Nachrichten";
  } else if (language === "cn") {
    return "新闻";
  }
}
