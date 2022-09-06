import { createStore } from "vuex";

export default createStore({
  state: {
    language: "en",
    searchValue: "",
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
    setLanguageValue(state, newSearch) {
      state.searchValue = newSearch;
    },
  },
  actions: {
    async getHeadlines({ commit }) {
      let category = "";
      commit("setArticles", null);
      this.state.category === "all"
        ? category
        : (category = this.state.category);

      try {
        const res = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&sortBy=${this.state.sort}&category=${category}&apiKey=${process.env.VUE_APP_NEWS_API_KEY}`
        );

        if (!res.status === 200) return;
        res.json().then((response) => commit("setArticles", response.articles));
      } catch (err) {
        console.log(err.code, err.message);
      }
    },
    async getNews({ commit }) {
      try {
        const res = await fetch(
          `https://newsapi.org/v2/everything?q=${this.state.searchValue}&language=${this.state.language}&sortBy=${this.state.sort}&apiKey==${process.env.VUE_APP_NEWS_API_KEY}`
        );

        if (!res.status === 200) return;
        res.json().then((response) => commit("setArticles", response.articles));
      } catch (err) {
        console.log(err.code, err.message);
      }
    },
  },
  getters: {
    getCategory(state) {
      return state.category;
    },
    getSort(state) {
      return state.sort;
    },
  },
  devtools: true,
});
