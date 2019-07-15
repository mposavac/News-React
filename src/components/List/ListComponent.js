import React, { Component } from "react";

export class ListComponent extends Component {
  state = {
    isRead: false,
    removingAnimation: false
  };

  handleReadClick = () => {
    const prevState = this.state.isRead;
    this.setState({ isRead: !prevState });
  };

  handleRemove = () => {
    this.setState({ removingAnimation: true });
    setTimeout(() => {
      this.props.handleRemove(this.props.index);
    }, 550);
  };

  checkStyle = () => {
    if (this.state.removingAnimation) {
      return {
        height: "0rem",
        border: "0",
        margin: "0",
        transform: "translateX(-150%)"
      };
    }
    if (this.state.isRead) return { opacity: "0.4" };
  };

  render() {
    const {
      urlToImage,
      author,
      title,
      description,
      source,
      url
    } = this.props.news;
    return (
      <div className="list-component" style={this.checkStyle()}>
        <div className="imgWrapper">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt="NoImg" />
          </a>
        </div>
        <div className="textHolder-list ">
          <h4 className="title-list">{title}</h4>
          <h5 className="author-list">{author}</h5>
          <p className="description-list">{description}</p>
          {this.state.isRead ? (
            <i
              onClick={this.handleReadClick}
              className="far fa-eye-slash eye"
              style={{ transform: "rotateZ(360deg)" }}
            />
          ) : (
            <i onClick={this.handleReadClick} className="fas fa-eye eye" />
          )}
          <i onClick={this.handleRemove} className="far fa-trash-alt" />
          <h5 className="source-list">
            <span>Source: </span>
            {source.name}
          </h5>
        </div>
      </div>
    );
  }
}

export default ListComponent;
