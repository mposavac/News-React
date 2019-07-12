import React, { Component } from "react";
import NavLinks from "./NavLinks";

export class Header extends Component {
  state = {
    sideMenuShown: false,
    scrolling: false
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleMenuShown = () => {
    this.setState(prevState => ({ sideMenuShown: !prevState.sideMenuShown }));
  };

  handleScroll = () => {
    if (window.pageYOffset > 20 && !this.state.scrolling)
      this.setState({ scrolling: true });
    else if (this.state.scrolling && window.pageYOffset < 20)
      this.setState({ scrolling: false });
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
            this.state.scrolling ? { height: "2rem", lineHeight: "2rem" } : null
          }
        >
          <NavLinks />
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
          <NavLinks />
        </div>
      </header>
    );
  }
}

export default Header;
