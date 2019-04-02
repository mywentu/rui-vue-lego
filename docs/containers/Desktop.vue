<template>
  <div class="m-desktop">
    <DesktopHeader />
    <div class="container">
      <DesktopNav />
      <div class="content">
        <router-view class="main-content"></router-view>
        <Simulator class="simulator-wrap" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import './../common/dxy-ui.min.css';
import './../common/docs.min.css';
import DesktopNav from '../components/DesktopNav.vue';
import DesktopHeader from '../components/DesktopHeader.vue';
import Simulator from '../components/Simulator.vue';

@Component({
  components: {
    Simulator,
    DesktopNav,
    DesktopHeader
  }
})
export default class Desktop extends Vue {
}
</script>

<style lang="scss" scoped>
.m-desktop {
  height: 100%;
  .content {
    display: flex;
    flex-wrap: nowrap;
    overflow: scroll;
    flex-direction: row;
    margin-left: 220px;
    padding: 0 40px;
    .main-content {
      width: 800px;
      margin: 0 auto;
      flex-grow: 1;
    }
    .simulator-wrap {
      width: 375px;
      height: 667px;
      border: 1px solid #ddd;
    }
  }
}
</style>


