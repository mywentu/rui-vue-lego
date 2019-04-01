<template>
  <div id="case" class="layout">
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component
export default class Case extends Vue {
  name: "Case";
}
</script>

<style scoped lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
.layout {
  background: #f5f7f9;
  overflow: hidden;
  height: 100%;
}
</style>
