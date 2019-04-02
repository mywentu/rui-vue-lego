<template>
  <div class="m-simulator">
    <iframe
      :src="curView"
      class="demo-window"
      frameborder="0"></iframe>
  </div>
</template>

<script lang="ts">

import { Vue, Component, Watch } from 'vue-property-decorator'

@Component
export default class Simulator extends Vue {

  curView: string = '';
  
  @Watch('$route')
  getCurView() {
    const origin = location.origin,
          hash = location.hash.replace('#', '#/demo');
    this.curView =  `${origin}/mobile.html/${hash}`;
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
