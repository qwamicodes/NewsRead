import { ref } from "vue";

const getNews = (lang, sortBy, keyword) => {
  const data = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      const res = await fetch(
        `https://newsapi.org/v2/everything?q=${keyword}&language=${lang}&sortBy=${sortBy}&apiKey==${process.env.VUE_APP_NEWS_API_KEY}`
      );

      if (!res.status === 200) return;
      res.json().then((datas) => (data.value = datas.articles));
    } catch (err) {
      error.value = error;
    }
  };

  return { data, error, load };
};

export default getNews;
