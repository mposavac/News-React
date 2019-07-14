import React, { Component } from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import TopNews from "./TopNews/TopNews";
import NewsList from "./List/NewsList";

import Loading from "./Loading";

import lang from "../language.json";

import "../style/style.scss";

export class Home extends Component {
  state = {
    news: undefined,
    languageIndicator: this.props.match.params.language
      ? this.props.match.params.language
      : "us",
    category: this.props.match.params.category,
    isLoading: true,
    nightMode: false
  };

  componentDidMount() {
    this.fetchData(this.state.category);
  }

  componentWillUpdate(nextProps, nextState) {
    if (
      nextState.category !== nextProps.match.params.category ||
      nextState.languageIndicator !== nextProps.match.params.language
    ) {
      this.setState({
        category: this.props.match.params.category,
        languageIndicator: this.props.match.params.language,
        isLoading: true
      });
      this.fetchData(nextProps.match.params.category);
    }
    console.log("componentWillUpdate");
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
    let language = this.props.match.params.language
      ? this.props.match.params.language
      : "us";
    if (category === "world" || category === "europe") {
      fetch(
        "https://newsapi.org/v2/everything?q=" +
          category +
          "&apiKey=07193cc5318e44069f2b13491af7edc5"
      )
        .then(res => res.json())
        .then(data => {
          this.setState({ news: data.articles });
          this.setState({ isLoading: false });
        });
    } else if (category === "sport") {
      fetch(
        `https://newsapi.org/v2/top-headlines?category=sports&country=${language}&apiKey=07193cc5318e44069f2b13491af7edc5`
      )
        .then(res => res.json())
        .then(data => {
          this.setState({ news: data.articles });
          this.setState({ isLoading: false });
        })
        .then();
    } else if (category === "entertainment") {
      fetch(
        `https://newsapi.org/v2/top-headlines?category=entertainment&country=${language}&apiKey=07193cc5318e44069f2b13491af7edc5`
      )
        .then(res => res.json())
        .then(data => {
          this.setState({ news: data.articles });
          this.setState({ isLoading: false });
        });
    } else {
      fetch(
        `https://newsapi.org/v2/top-headlines?country=${language}&apiKey=07193cc5318e44069f2b13491af7edc5`
      )
        .then(res => res.json())
        .then(data => {
          this.setState({ news: data.articles });
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
              language={lang}
              category={this.state.category}
              languageIndicator={this.state.languageIndicator}
            />
            <main className={this.state.nightMode ? "night" : ""}>
              {this.state.news !== undefined && (
                <div className="main">
                  <TopNews
                    category={this.state.category}
                    languageIndicator={this.state.languageIndicator}
                    news={this.state.news}
                  />
                  <NewsList
                    news={this.state.news}
                    handleRemove={this.handleRemove}
                  />
                </div>
              )}
            </main>
            <Footer
              night={this.state.nightMode}
              language={lang}
              languageIndicator={this.state.languageIndicator}
            />
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default Home;
