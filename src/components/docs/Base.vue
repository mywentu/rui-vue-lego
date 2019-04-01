<template>
  <div class="m-doc-base">
    <router-view></router-view>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Base extends Vue {}
</script>

<style lang="scss">
pre {
  padding: 1.5rem;
  margin-right: 0;
  margin-left: 0;
  border-width: 0.2rem;
  border: solid #f8f9fa;
  background-color: #f8f9fa4a;
}
</style>
