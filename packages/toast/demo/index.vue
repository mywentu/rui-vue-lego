<template>
  <div class="m-button">
      <button @click="showToast">点击我显示Toast</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import Toast from '../index';
Vue.prototype.$toast = Toast

@Component
export default class NumberKeyboardDemo extends Vue {

  showToast() {
    this['$toast']({
      msg: '我是Toast'
    });
  }
}
</script>

<style lang="scss" scoped>
.m-button {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
}
</style>

