export const fetchNews = (category, language) => {
  return dispatch => {
    if (category === "world" || category === "europe") {
      fetch(
        `https://newsapi.org/v2/everything?q=${category}&apiKey=07193cc5318e44069f2b13491af7edc5`
      )
        .then(res => res.json())
        .then(data => dispatch({ type: "NEWS_RESPONSE", data }))
        .catch(err => dispatch({ type: "NEWS_ERROR", err }));
    } else if (category === "sport") {
      fetch(
        `https://newsapi.org/v2/top-headlines?category=sports&country=${language}&apiKey=07193cc5318e44069f2b13491af7edc5`
      )
        .then(res => res.json())
        .then(data => dispatch({ type: "NEWS_RESPONSE", data }))
        .catch(err => dispatch({ type: "NEWS_ERROR", err }));
    } else if (category === "entertainment") {
      fetch(
        `https://newsapi.org/v2/top-headlines?category=entertainment&country=${language}&apiKey=07193cc5318e44069f2b13491af7edc5`
      )
        .then(res => res.json())
        .then(data => dispatch({ type: "NEWS_RESPONSE", data }))
        .catch(err => dispatch({ type: "NEWS_ERROR", err }));
    } else {
      fetch(
        `https://newsapi.org/v2/top-headlines?country=${language}&apiKey=07193cc5318e44069f2b13491af7edc5`
      )
        .then(res => res.json())
        .then(data => dispatch({ type: "NEWS_RESPONSE", data }))
        .catch(err => dispatch({ type: "NEWS_ERROR", err }));
    }
  };
};
