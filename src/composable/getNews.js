import { ref } from "vue";

const getNews = () => {
  const data = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      const res = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.VUE_APP_NEWS_API_KEY}`
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
