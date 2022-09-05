<template>
  <div class="newsdetails">
    <div class="newsdetails__menu">
      <div class="newsdetails__menu--button">
        <!-- <ChevronsLeftIcon size="24" /> -->
        back
      </div>
    </div>
    <div class="newsdetails__container">
      <div class="newsdetails__container--image">
        <img :src="article?.urlToImage" alt="#" />
      </div>
      <div class="news__container--image-source">
        {{ article?.source.name }}
      </div>
      <div class="newsdetails__details">
        <div class="newsdetails__details--tag">
          <Tab :value="article?.category" />
        </div>
        <div class="newsdetails__details--author">{{ article?.author }}</div>
        <div class="newsdetails__details--title">{{ article?.title }}</div>
        <div class="newsdetails__details--content">
          {{ article?.description }}
        </div>
        <div class="newsdetails__details--buttons">
          <a :href="article?.url" class="newsdetails__details--button-primary"
            >view page
            <!-- <Link2Icon size="24"/> -->
          </a>
          <a href="#" class="newsdetails__details--button-primary"
            >share
            <!-- <ShareIcon size="24" /> -->
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { ChevronsLeftIcon, ShareIcon, Link2Icon } from "vue-feather-icons";
import Tab from "@/components/Tab.vue";

export default {
  props: ["id"],
  components: { Tab },
  data() {
    return {
      article: null,
    };
  },
  created() {
    // this.article = this.$route.params.article;
  },
  updated() {
    console.log(this.id, this.article);
  },
};
</script>

<style></style>
