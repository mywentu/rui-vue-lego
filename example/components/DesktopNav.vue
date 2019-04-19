<template>
  <nav class="m-nav dxy-tree nav">
    <ul class="dxy-tree-node dxy-tree-expanded">
      <li class="dxy-tree-content"><a href="#elements">公用组件</a></li>
      <li class="dxy-tree-children">
        <ul class="dxy-tree-node">
          <li class="dxy-tree-content" v-for="(route, index) in routes" :key="index">
            <router-link :to="{ name: route.name }">{{ route.name }}</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import { docRoutes } from '../router'

@Component
export default class DesktopNav extends Vue {
  get routes() {
    return docRoutes
  }
}
</script>

<style lang="scss" scoped>
.m-nav {
  float: left;
  width: 219px;
  border-right: 1px solid #ddd;
}
</style>


