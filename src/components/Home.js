import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "./Header.js";
import Footer from "./Footer.js";
import TopNews from "./TopNews/TopNews";
import NewsList from "./List/NewsList";
import Loading from "./Loading";

import { fetchNews } from "../store/actions/fetchNews";
import lang from "../language.json";

import "../style/style.scss";

export class Home extends Component {
  componentDidMount() {
    this.props.fetchNews(this.props.match.params.category, "us");
  }

  componentDidUpdate() {
    let { category, language } = this.props.match.params;
    if (!category) category = "news";
    if (!language) language = "us";
    if (this.props.state.news) {
      if (this.props.state.category !== category) {
        this.props.changeCategory(category);
        this.props.fetchNews(category, language);
      }
      if (this.props.state.languageIndicator !== language) {
        this.props.changeLanguage(language);
        this.props.fetchNews(category, language);
      }
    }
    console.log("componentDidUpdate");
  }

  handleNightMode = () => {
    this.props.nightMode();
  };

  handleRemove = index => {
    const newNews = this.props.state.news.filter((element, i) => i !== index);
    this.props.removeNews(newNews);
  };

  render() {
    const {
      news,
      isLoading,
      nightMode,
      languageIndicator,
      category
    } = this.props.state;
    return (
      <React.Fragment>
        {isLoading ? (
          <Loading isLoading={isLoading} />
        ) : (
          <React.Fragment>
            <Header handleNightMode={this.handleNightMode} language={lang} />
            <main className={nightMode ? "night" : ""}>
              {news !== undefined && (
                <div className="main">
                  <TopNews
                    category={category}
                    languageIndicator={languageIndicator}
                    news={news}
                  />
                  <NewsList news={news} handleRemove={this.handleRemove} />
                </div>
              )}
            </main>
            <Footer
              language={lang}
              night={nightMode}
              languageIndicator={languageIndicator}
            />
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  console.log("%cNews STATE", "color: red", state);
  return { state: state };
};

const mapStatetoDispatch = dispatch => {
  return {
    fetchNews: (category, language) => dispatch(fetchNews(category, language)),
    removeNews: newNews => dispatch({ type: "REMOVE_NEWS", data: newNews }),
    nightMode: () => dispatch({ type: "NIGHT_MODE" }),
    changeCategory: category =>
      dispatch({ type: "CATEGORY_CHANGE", data: category }),
    changeLanguage: language =>
      dispatch({ type: "LANGUAGE_CHANGE", data: language })
  };
};

export default connect(
  mapStateToProps,
  mapStatetoDispatch
)(Home);
