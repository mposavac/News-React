import React, { Component } from "react";

export class TwoNewsComponent extends Component {
  state = {
    isRead: false
  };
  handleReadClick = () => {
    let prevState = this.state.isRead;
    this.setState({ isRead: !prevState });
  };
  render() {
    const { urlToImage, title, source } = this.props.news;
    return (
      <div
        className="twonews-component"
        style={this.state.isRead ? { opacity: "0.4" } : null}
      >
        <img src={urlToImage} alt="NoImg" />
        {this.state.isRead ? (
          <i
            onClick={this.handleReadClick}
            className="far fa-eye-slash eye"
            style={{ transform: "rotateZ(360deg)" }}
          />
        ) : (
          <i onClick={this.handleReadClick} className="fas fa-eye eye" />
        )}
        <div className="twonews-text">
          <h4 className="title">{title}</h4>
          <h5 className="source">
            <span>Source: </span>
            {source.name}
          </h5>
        </div>
      </div>
    );
  }
}

export default TwoNewsComponent;
