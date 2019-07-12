import React, { Component } from "react";
import TopContainer from "./Slide";

export class TopNews extends Component {
  state = {
    slideIndex: 0,
    timeout: setInterval(this.goToNextSlide, 5000)
  };
  componentDidMount() {
    this.setTimer();
  }
  componentWillUnmount(){
    clearInterval(this.state.timer);
  }
  goToNextSlide = () => {
    const prevState = this.state.slideIndex;
    prevState === 4
      ? this.setState({ slideIndex: 0 })
      : this.setState({ slideIndex: prevState + 1 });
    this.setTimer();
  };

  goToPrevSlide = () => {
    const prevState = this.state.slideIndex;
    prevState === 0
      ? this.setState({ slideIndex: 4 })
      : this.setState({ slideIndex: prevState - 1 });
    this.setTimer();
  };
  setTimer = () => {
    clearInterval(this.state.timer);
    this.setState({ timer: setInterval(this.goToNextSlide, 5000) });
  };

  render() {
    return (
      <React.Fragment>
        <div className="topnews-slider">
          <i
            className="fas fa-chevron-left arrow"
            onClick={this.goToPrevSlide}
          />
          <div
            className="slider-wrapeer"
            style={{
              transform: "translateX(-" + this.state.slideIndex * 100 + "%)"
            }}
          >
            {this.props.news.map(
              (element, i) => i < 5 && <TopContainer key={i} news={element} />
            )}
          </div>
          <i
            className="fas fa-chevron-right arrow"
            onClick={this.goToNextSlide}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default TopNews;
