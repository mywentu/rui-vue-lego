<template>
  <div class="m-toast">
    <header class="rui-header rui-header-case">
      <span class="back" @click="back">
        <i class="rui-ico icon-back"></i>
      </span>
      <span class="title">
        Toast
      </span>
    </header>

    <div class="bd">
      <section class="toast-demo">
        <h2 class="toast-demo-title">文字提示</h2>
        <button class="rui-btn rui-btn-demo" @click="defaultToast">文字提示</button>
      </section>
      <section class="toast-demo">
        <h2 class="toast-demo-title">成功/失败提示</h2>
        <button class="rui-btn rui-btn-demo">成功提示</button>
        <button class="rui-btn rui-btn-demo">失败提示</button>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component
export default class Toast extends Vue {
  
  back() {
    this.$router.push({name: 'overView'})
  }

  defaultToast() {
    this.$toast({ msg: '提示内容'});
  }

  succToast() {
    this.$toast({ msg: '成功文案', type: 'icon', isSuccess: true});
  }

  failToast() {
    this.$toast({ msg: '失败文案', type: 'icon'});
  }
}
</script>

<style lang="scss" scoped>
.m-toast {
  .toast-demo-title {
    margin: 0;
    font-weight: 400;
    font-size: 14px;
    color: rgba(69, 90, 100,.6);
    padding: 20px 15px 15px;
  }
  .toast-demo {
    padding: .05rem 0;
    background: #fafafa;
  }
}
</style>