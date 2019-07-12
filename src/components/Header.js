import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Header extends Component {
  state = {
    sideMenuShown: false,
    scrolling: false
  };
  componentDidMount() {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 20 && !this.state.scrolling)
        this.setState({ scrolling: true });
      else if (this.state.scrolling && window.pageYOffset < 20)
        this.setState({ scrolling: false });
    });
  }
  handleMenuShown = () => {
    this.setState(prevState => ({ sideMenuShown: !prevState.sideMenuShown }));
  };
  render() {
    return (
      <header
        className={this.props.night ? "night" : ""}
        style={this.state.scrolling ? { height: "2rem", color: "#fff" } : null}
      >
        <div
          className="header-logo"
          onClick={this.props.handleNightMode}
          style={
            this.state.scrolling ? { height: "1rem", marginLeft: "2rem" } : null
          }
        >
          <h1
            className="header-logo-txt"
            style={
              this.state.scrolling
                ? { fontSize: "1rem", lineHeight: "1rem" }
                : null
            }
          >
            NEWSPortal
          </h1>
        </div>
        <div
          className="header-categories"
          style={
            this.state.scrolling ? { lineHeight: "2rem", height: "2rem" } : null
          }
        >
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
        </div>
        <div
          className={this.state.sideMenuShown ? "menulines shown" : "menulines"}
          style={
            this.state.scrolling
              ? { top: "0.1rem", transform: "scale(0.8)" }
              : { top: "1.5rem" }
          }
          onClick={this.handleMenuShown}
        >
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </div>
        <div className={this.state.sideMenuShown ? "menu shown" : "menu"}>
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
        </div>
      </header>
    );
  }
}

export default Header;
