<template>
  <header class="m-header dxy-clear-fix">
    <div class="logo dxy-float-left">
      <a href="/dxy-ui/docs">
      Lego
      </a>
    </div>
    <div class="version dxy-float-right">1.0.0</div>
  </header>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class DesktopNav extends Vue {}
</script>

<style lang="scss" scoped>
.m-header {
  height: 80px;
  .logo {
    font-size: 30px;
  }
  .version {
    margin: 30px 50px 0 35px;
    padding: 0 11px;
    color: #555;
    font-size: 10px;
    line-height: 18px;
    border: 1px solid #EDEEEF;
    border-radius: 2px;
  }
}
</style>
