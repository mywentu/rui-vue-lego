<template>
  <div class="m-simulator">
    <iframe
      :src="curView"
      class="demo-window"
      frameborder="0"></iframe>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Simulator extends Vue {
  get curView() {
    const origin = location.origin,
          hash = location.hash.replace('#', '#/demo');
    return `${origin}/mobile.html/${hash}`;
  }
}
</script>

<style lang="scss" scoped>
.m-simulator {
  .demo-window {
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
}
</style>
