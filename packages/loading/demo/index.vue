<template>
  <div class="m-button">
    <Loading visible />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Loading from '../Loading.vue';


@Component({
  components: {
    Loading: Loading
  }
})
export default class LoadingDemo extends Vue {
}
</script>

