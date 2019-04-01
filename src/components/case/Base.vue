<template>
  <div class="m-case-base">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component
export default class Base extends Vue {
}
</script>
