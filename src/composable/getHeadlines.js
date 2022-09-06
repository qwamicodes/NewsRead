import { ref } from "vue";

const getHeadlines = (category) => {
  const data = ref(null);
  const error = ref(null);

  category === "all" ? (category = "") : category;

  const load = async () => {
    try {
      const res = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.VUE_APP_NEWS_API_KEY}`
      );

      if (!res.status === 200) return;
      res.json().then((datas) => (data.value = datas.articles));
    } catch (err) {
      error.value = error;
    }
  };

  return { data, error, load };
};

export default getHeadlines;
