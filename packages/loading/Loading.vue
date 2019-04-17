<template>
  <div class="m-loading rui-loading rui-loading-common" v-show='visible'>
        <div class="inner">
            <i class="rui-ico"></i>
            <p class="tips">{{tips}}</p>
        </div>
  </div>
</template>
<script>
export default{
  name : 'Loading',
  props: {
    visible: {
      type: Boolean,
      default: false,
      required: true
    },
    tips: {
      type: String,
      default: '加载中',
      required: false
    }
  }
}
</script>