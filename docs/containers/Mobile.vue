<template>
  <div class="m-mobile">
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Mobile extends Vue {
}
</script>

