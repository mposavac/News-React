import React from "react";
import TwoNewsComponent from "./TwoNewsComponent";

export default function TwoTopNews(props) {
  return (
    <div className="twonews">
      <TwoNewsComponent news={props.news[5]} />
      <TwoNewsComponent news={props.news[6]} />
    </div>
  );
}
