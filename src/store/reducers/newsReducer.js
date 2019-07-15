const initState = {
  news: undefined,
  languageIndicator: "us",
  category: "news",
  isLoading: true,
  nightMode: false
};

const newsReducer = (state = initState, action) => {
  switch (action.type) {
    case "NEWS_RESPONSE":
      return { ...state, news: action.data.articles, isLoading: false };
    case "NEWS_ERROR":
      return state;
    case "REMOVE_NEWS":
      return { ...state, news: action.data };
    case "NIGHT_MODE":
      return { ...state, nightMode: !state.nightMode };
    case "CATEGORY_CHANGE":
      return { ...state, category: action.data, isLoading: true };
    case "LANGUAGE_CHANGE":
      return { ...state, languageIndicator: action.data, isLoading: true };
    case "LOADING":
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
export default newsReducer;
