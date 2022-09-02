<template>
  <div class="card">
    <div class="card__image--container">
      <img :src="article.urlToImage" alt="News Image" class="card__image" />
    </div>
    <div class="card__details">
      <div class="card__details--title">{{ article.title }}</div>
      <div class="card__details--author">{{ article.author }}</div>
      <div class="card__details--date">{{ article.publishedAt }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardVue",
  props: ["article"],
  // mounted() {
  //   console.log(this.article);
  // },
};
</script>
