<template>
  <div id="docs" class="container-fluid fill">
    <div class="row flex-xl-nowrap py-md-3 fill">
      <div class="col-md-2 bd-sidebar">
        <Nav></Nav>
      </div>
      <main class="col-md-7 bd-content" role="main">
        <router-view></router-view>
      </main>
      <div class="col-md-3">
        <Phone/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import Nav from "@/components/docs/Nav.vue";
import Phone from "@/components/docs/Phone.vue";

@Component({
  components: {
    Nav,
    Phone
  }
})
export default class Docs extends Vue {
  name: "Docs";
}
</script>

<style lang="scss">
html,
body {
  height: 100%;
}
.fill {
  height: 100%;
  > * {
    overflow-y: scroll;
  }
}
</style>
