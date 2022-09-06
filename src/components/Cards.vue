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
  props: ["articles"],
};
</script>
