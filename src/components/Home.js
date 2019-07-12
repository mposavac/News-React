import React, { Component } from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import TopNews from "./TopNews/TopNews";
import NewsList from "./List/NewsList";

import Loading from "./Loading";

import "../style/style.scss";

export class Home extends Component {
  state = {
    news: undefined,
    category: this.props.match.params.category,
    isLoading: true,
    nightMode: false
  };

  componentDidMount() {
    this.fetchData(this.state.category);
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.category !== nextProps.match.params.category) {
      this.setState({
        category: this.props.match.params.category,
        isLoading: true
      });
      this.fetchData(nextProps.match.params.category);
      console.log("UPDATED");
    }
    console.log("WILLUPDATE");
  }

  handleNightMode = () => {
    const prevstate = this.state.nightMode;
    this.setState({ nightMode: !prevstate });
  };

  handleRemove = index => {
    const newNews = this.state.news.filter((element, i) => i !== index);
    this.setState({ news: newNews });
  };

  fetchData(category) {
    if (category === "world" || category === "europe") {
      fetch(
        "https://newsapi.org/v2/everything?q=" +
          category +
          "&apiKey=07193cc5318e44069f2b13491af7edc5"
      )
        .then(res => res.json())
        .then(data => {
          this.setState({ news: data.articles });
          console.log("Wrold,eruope");
          this.setState({ isLoading: false });
        });
    } else if (category === "sport") {
      fetch(
        "https://newsapi.org/v2/top-headlines?category=sports&country=us&apiKey=07193cc5318e44069f2b13491af7edc5"
      )
        .then(res => res.json())
        .then(data => {
          this.setState({ news: data.articles });
          console.log("sport");
          this.setState({ isLoading: false });
        })
        .then();
    } else if (category === "entertainment") {
      fetch(
        "https://newsapi.org/v2/top-headlines?category=entertainment&country=us&apiKey=07193cc5318e44069f2b13491af7edc5"
      )
        .then(res => res.json())
        .then(data => {
          this.setState({ news: data.articles });
          console.log("entertainment");
          this.setState({ isLoading: false });
        });
    } else {
      fetch(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=07193cc5318e44069f2b13491af7edc5"
      )
        .then(res => res.json())
        .then(data => {
          this.setState({ news: data.articles });
          console.log("news");
          this.setState({ isLoading: false });
        });
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.state.isLoading ? (
          <Loading isLoading={this.state.isLoading} />
        ) : (
          <React.Fragment>
            <Header
              night={this.state.nightMode}
              handleNightMode={this.handleNightMode}
            />
            <main className={this.state.nightMode ? "night" : ""}>
              {this.state.news !== undefined && (
                <div className="main">
                  <TopNews
                    category={this.state.category}
                    news={this.state.news}
                  />
                  <NewsList
                    news={this.state.news}
                    handleRemove={this.handleRemove}
                  />
                </div>
              )}
            </main>
            <Footer night={this.state.nightMode} />
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default Home;
