<template>
  <div class="cards">
    <Card />
  </div>
</template>

<script>
import Card from "./Card.vue";

// async getTopHeadlines() {
//       const res = await fetch(
//         `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`
//       );
//       console.log(JSON.parse(res));
//     },

export default {
  name: "CardsVue",
  components: { Card },
};
</script>
