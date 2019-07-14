import React from "react";
import { NavLink, Link } from "react-router-dom";
export default function NavLinks(props) {
  let navigationLang = props.language.filter(element => {
    return element.shorten === props.languageIndicator;
  });
  return (
    <React.Fragment>
      {navigationLang &&
        navigationLang[0].navigation.map((element, i) => (
          <NavLink
            key={i}
            to={`/${props.languageIndicator}/${props.language[0].navigation[
              i
            ].toLowerCase()}`}
          >
            <p>{element}</p>
          </NavLink>
        ))}

      {props.scrolling !== undefined && (
        <div
          className="language-selection"
          style={
            props.scrolling
              ? { opacity: "0", visibility: "hidden" }
              : { opacity: "1", visibility: "visible" }
          }
        >
          {props.language.map((element, i) => (
            <Link
              to={`/${element.shorten}/${props.category}`}
              key={i}
              className="language-component"
            >
              <div className="imgWrapper">
                <img src={element.flag} alt="noFlag" />
              </div>
              <p className="language">{element.language}</p>
              <p className="original-language">{element.original}</p>
            </Link>
          ))}
        </div>
      )}
    </React.Fragment>
  );
}
