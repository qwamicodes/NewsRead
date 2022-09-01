<template>
  <li @click="toggleActive" class="tab" :class="{ active }">
    {{ value }}
  </li>
</template>

<script>
export default {
  name: "TabVue",
  props: ["value", "active"],
  data() {
    return {};
  },
  methods: {
    toggleActive() {
      this.$emit("toggleActive", this.value);
    },
  },
};
</script>
