import React from "react";
import { NavLink } from "react-router-dom";
export default function NavLinks() {
  return (
    <React.Fragment>
      <NavLink to={"/news"}>
        <p>News</p>
      </NavLink>
      <NavLink to={"/world"}>
        <p>World</p>
      </NavLink>
      <NavLink to={"/europe"}>
        <p>Europe</p>
      </NavLink>
      <NavLink to={"/sport"}>
        <p>Sport</p>
      </NavLink>
      <NavLink to={"/entertainment"}>
        <p>Entertainment</p>
      </NavLink>
    </React.Fragment>
  );
}
