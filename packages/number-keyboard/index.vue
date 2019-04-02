<template>
  <div class="m-numberKeyboard">
    <header class="rui-header rui-header-case">
      <span class="back" @click="back">
        <i class="rui-ico icon-back"></i>
      </span>
      <span class="title">
        NumberKeyboard
      </span>
    </header>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class NumberKeyboard extends Vue {
  back() {
    this.$router.push({name: 'overView'})
	}
}
</script>

<style lang="scss" scoped>

</style>

