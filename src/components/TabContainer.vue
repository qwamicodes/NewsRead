<template>
  <ul class="tabs">
    <TabVue
      v-for="({ name, active }, index) in tabValues"
      v-bind:key="index"
      :value="name"
      :active="active"
      @toggleActive="toggleActive"
    />
  </ul>
</template>

<script>
import TabVue from "./Tab.vue";

export default {
  name: "TabContainerVue",
  components: { TabVue },
  data() {
    return {
      tabValues: [
        { name: "all categories", active: true },
        { name: "business", active: false },
        { name: "entertainment", active: false },
        { name: "general", active: false },
        { name: "health", active: false },
        { name: "science", active: false },
        { name: "sports", active: false },
        { name: "technology", active: false },
      ],
      value: "all",
    };
  },
  methods: {
    toggleActive(value) {
      this.deselectAll();
      this.tabValues.map((tab) => {
        if (tab.name.includes(value)) {
          tab.active = true;
          return (this.value = tab.name);
        }
      });
    },
    deselectAll() {
      this.tabValues.map((value) => (value.active = false));
    },
  },
};
</script>
