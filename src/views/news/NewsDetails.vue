<template>
  <div class="newsdetails">
    <div class="newsdetails__menu">
      <button @click="$router.back(-1)" class="btn btn-primary">back</button>
    </div>
    <div class="newsdetails__container">
      <div class="newsdetails__container--image">
        <img
          :src="$store.state.currentArticle?.urlToImage"
          :alt="$store.state.currentArticle?.title"
        />
      </div>
      <div class="newsdetails__details">
        <div class="newsdetails__details--source">
          <div class="card__source">
            {{ $store.state.currentArticle?.source.name }}
          </div>
        </div>
        <div class="newsdetails__details--author">
          {{ $store.state.currentArticle?.author }}
        </div>
        <div class="newsdetails__details--title">
          {{ $store.state.currentArticle?.title }}
        </div>
        <div class="newsdetails__details--content">
          {{ $store.state.currentArticle?.content }}
        </div>
        <div class="newsdetails__details--buttons">
          <a
            :href="$store.state.currentArticle?.url"
            target="_target"
            rel="nonreferrer"
            class="btn btn-primary newsdetails__details--button"
            >view page
          </a>
          <button
            ref="buttonCopy"
            @click="copyLink($store.state.currentArticle?.url)"
            class="btn btn-secondary newsdetails__details--button"
          >
            copy link
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  methods: {
    copyLink(link) {
      navigator.clipboard.writeText(link);
      this.$refs.buttonCopy.innerHTML = "copied";
      this.$refs.buttonCopy.classList.add("btn-copy");
    },
  },
};
</script>

<style></style>
