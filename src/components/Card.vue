<template>
  <router-link
    @click="$store.commit('setCurrentArticle', article)"
    :to="{ name: 'NewsDetails', params: { id } }"
    class="card"
  >
    <div class="card__source card__source--position">
      {{ article.source.name }}
    </div>
    <div class="card__image--container">
      <img :src="article.urlToImage" alt="News Image" class="card__image" />
    </div>
    <div class="card__details">
      <div class="card__details--title body-large-heading">
        {{ article.title }}
      </div>
      <div class="card__details--author">{{ article.author ?? "Unknown" }}</div>
      <div class="card__details--date">
        {{ new Date(article.publishedAt).toDateString() }} ,
        {{ new Date(article.publishedAt).toLocaleTimeString() }}
      </div>
    </div>
  </router-link>
</template>

<script>
import { v4 } from "uuid";

export default {
  name: "CardVue",
  props: ["article"],
  data() {
    return {
      id: v4(),
    };
  },
};
</script>
