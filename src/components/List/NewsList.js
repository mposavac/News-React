import React from "react";
import ListComponent from "./ListComponent";

export default function NewsList(props) {
  return (
    <div className="news-list">
      {props.news.map(
        (element, i) =>
          i > 6 && (
            <ListComponent
              key={element.url}
              index={i}
              news={element}
              handleRemove={props.handleRemove}
            />
          )
      )}
    </div>
  );
}
