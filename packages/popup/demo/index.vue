<template>
  <div class="m-button">
      <popup 
        :show="popupConfig.show"
        :list="popupConfig.list"
        :cancel="popupConfig.cancel"
        :confirm="popupConfig.confirm"
        :businessId="popupConfig.businessId"
        />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import popup from '../index.vue'

@Component({
  components: {
    popup: popup
  }
})
export default class NumberKeyboardDemo extends Vue {
  popupConfig = {
    show: true,
    list: [],
    cancel: () => {},
    confirm: () => {},
    businessId: 'businessId'
  }
}
</script>

