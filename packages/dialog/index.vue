<template>
  <div v-if="showDialog" class="rui-masker m-lego-dialog">
    <div class="rui-dialog">
      <header :class="{'hd' : true, 'no-border' : !title}">
          <h2 class="title" v-if="type === 'title' && title !=='' ">
            {{title}}
          </h2>
      </header>
      <div class="bd">
        <h2 class="icon-wrap" v-if="type === 'icon'">
            <i v-if="isSucess" class="rui-ico circle-bg sucess">&#xe90a;</i>
            <i v-else class="rui-ico circle-bg">&#xe90b;</i>
        </h2>
        <slot></slot>
      </div>
      <footer class="ft" v-if='showOkBtn'>
        <button class="rui-btn  rui-btn-dialog" v-if="showCancelBtn" @click='cancelCallBack' :data-event="cancelEventName">{{cancelTxt}}</button>
        <button class="rui-btn  rui-btn-dialog" @click='okCallBack' :data-event="okEventName">{{okText}}</button>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  name: 'alert',
  props: {
    type : {
      type : String,
      default: 'title',
      required: false
    },
    title : {
      type : String,
      default: '',
      required: false
    },
    showDialog : {
      type : Boolean,
      default: false,
      required: true
    },
    isSucess : {
      type : Boolean,
      default: true,
      required: false
    },
    okEventName : {
      type : String,
      default: 'knowBtn',
      required: false
    },
    cancelEventName : {
      type : String,
      default: 'cancelBtn', //fix me
      required: false
    },
    showOkBtn : {
      type : Boolean,
      default: true,
      required: false
    },
    showCancelBtn : {
      type : Boolean,
      default: false,
      required: false
    },
    okCallBack: {
      type : Function,
      default: () => {},
      required: false
    },
    cancelCallBack: {
      type : Function,
      default: () => {},
      required: false
    },
    okText: {
      type : String,
      default: '我知道了',
      required: false
    },
    cancelTxt: {
      type: String,
      default: '取消',
      required: false
    }
  },
  data () {
    return {

    }
  },
  methods: {
  }
}
</script>
