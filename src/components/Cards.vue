<template>
  <div v-if="$store.state.articles?.length > 0" class="cards row-col-3">
    <Card
      v-for="(article, index) in $store.state.articles"
      v-bind:key="index"
      :article="article"
    />
  </div>
  <div
    style="
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: capitalize;
      height: 40rem;
    "
    v-else
  >
    no news articles found
  </div>
</template>

<script>
import Card from "./Card.vue";

export default {
  name: "CardsVue",
  components: { Card },
};
</script>
