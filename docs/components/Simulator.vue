<template>
  <div class="m-simulator">
    <iframe class="demo-window" src="http://localhost:8080/mobile.html/#/demo/button" frameborder="0"></iframe>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Simulator extends Vue {
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
