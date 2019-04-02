<template>
  <div class="m-popup">
    <header class="rui-header rui-header-case">
      <span class="back" @click="back">
        <i class="rui-ico icon-back"></i>
      </span>
      <span class="title">
        Popup
      </span>
    </header>
  </div>
</template>
<style scoped>
    
</style>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component
export default class Popup extends Vue {
  back() {
    this.$router.push({name: 'overView'})
	}
}
</script>