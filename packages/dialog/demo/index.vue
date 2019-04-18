<template>
  <div class="m-lego-dialog">
    <Dialog 
      :okText="alterConfig.okText"
      :showDialog="alterConfig.visble"
      :okCallBack="alterConfig.okCallBack">
        我是DialogDemo
    </Dialog>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Dialog from '../index.vue';

@Component({
  components: {
    Dialog
  }
})
export default class DialogDemo extends Vue {

  alterConfig = {
    visble: true,
    okText: '查看进度',
    okCallBack: () => null
  }
}
</script>

