<template>
  <div class="m-phone fill">
    <iframe src="http://localhost:8080/mobile.html/#/demo/button" class="demo-window" frameborder="0"></iframe>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component
export default class Phone extends Vue {
  get curView() {
    const origin = location.origin;
    const page =
      this.$route.name === "docBase"
        ? `${origin}/case/overview`
        : `${origin}/case/${this.$route.path.split("/").pop()}`;
    return page;
  }
}
</script>

<style lang="scss" scoped>
.m-phone {
  transform: scale(0.85);
  background-image: url("../../assets/phone.png");
  background-repeat: no-repeat;
  background-size: 100%;
  padding: 130px 16px;
  .demo-window {
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
}
</style>

