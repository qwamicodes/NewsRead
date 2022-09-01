<template>
  <nav class="nav">
    <div class="nav__name body-large-heading">ReadNews</div>
    <div class="nav__dropdown">
      <select class="dropdown" v-model="language">
        <option
          v-for="(lang, index) in languages"
          v-bind:key="index"
          class="dropdown__value"
          :value="lang"
        >
          {{ lang }}
        </option>
      </select>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavVue",
  data() {
    return {
      language: "en",
      languages: [
        "ae",
        "ar",
        "at",
        "au",
        "be",
        "bg",
        "br",
        "ca",
        "ch",
        "cn",
        "co",
        "cu",
        "cz",
        "de",
        "eg",
        "en",
        "fr",
        "gb",
        "gr",
        "hk",
        "hu",
        "id",
        "ie",
        "il",
        "in",
        "it",
        "jp",
        "kr",
        "lt",
        "lv",
        "ma",
        "mx",
        "my",
        "ng",
        "nl",
        "no",
        "nz",
        "ph",
        "pl",
        "pt",
        "ro",
        "rs",
        "ru",
        "sa",
        "se",
        "sg",
        "si",
        "sk",
        "th",
        "tr",
        "tw",
        "ua",
        "us",
        "ve",
        "za",
      ],
    };
  },
};
</script>
