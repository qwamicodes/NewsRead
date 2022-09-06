import { createStore } from "vuex";

export default createStore({
  state: {
    language: "en",
    searchValue: null,
    category: "all",
    sort: "popularity",
    articles: null,
  },
  mutations: {
    setSortValue(state, sortValue) {
      state.sort = sortValue;
    },
    setLangValue(state, langValue) {
      state.language = langValue;
    },
    setCategoryValue(state, categoryValue) {
      state.category = categoryValue;
    },
    setArticles(state, newArticles) {
      state.articles = newArticles;
    },
  },
});
