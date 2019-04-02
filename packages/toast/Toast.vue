<template>
  <transition name="toast">
    <div :class="['m-toast', 'rui-toast', 'rui-toast-common', {'rui-toast-hasIcon' : type === 'icon'}]" v-show="visible">
      <div class="icon-box" v-if="type === 'icon'">
        <Icon class="icon" iconClass="toast-succ" v-if="isSuccess"/>
        <Icon class="icon" iconClass="toast-fail" v-else/>
      </div>
      <div>{{msg}}</div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'Toast',
  props: {
    msg : {
      type : String,
      required: true
    },
    visible: {
      type: Boolean,
      required: true
    },
    type : {
      type : String,
      default: 'txt',
      required: false
    },
    isSuccess : {
      type : Boolean,
      default: false,
      required: false
    }
  }
}
</script>
<style scoped lang="scss" scoped>
.m-toast {
  transition: opacity .4s;
  font-size: .15rem;
  .icon-box {
    margin-bottom: .07rem;
    .icon {
      width: .5rem;
      height: .5rem;
    }
  }
}
 .toast-enter, .toast-leave-active {
  opacity: 0;
}
</style>
