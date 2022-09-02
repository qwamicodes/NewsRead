<template>
  <div class="card">
    <div class="card__source">{{ article.source.name }}</div>
    <div class="card__image--container">
      <img :src="article.urlToImage" alt="News Image" class="card__image" />
    </div>
    <div class="card__details">
      <div class="card__details--title body-large-heading">
        {{ article.title }}
      </div>
      <div class="card__details--author">{{ article.author ?? "Unknown" }}</div>
      <div class="card__details--date">
        {{ new Date(article.publishedAt).toDateString() }}
      </div>
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
