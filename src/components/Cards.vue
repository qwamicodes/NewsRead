<template>
  <div v-if="articles?.length > 0" class="cards row-col-3">
    <Card
      v-for="(article, index) in articles"
      v-bind:key="index"
      :article="article"
    />
  </div>
</template>

<script>
import Card from "./Card.vue";

export default {
  name: "CardsVue",
  components: { Card },
  data() {
    return {
      articles: null,
    };
  },
  mounted() {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.VUE_APP_NEWS_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => (this.articles = data.articles))
      .catch((err) => console.log(err.code, err.message));
  },
  // updated() {
  //   console.log(this.articles);
  // },
};
</script>
