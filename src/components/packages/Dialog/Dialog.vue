<template>
  <div v-if="showDialog" id="dialog" class="rui-masker m-dialog">
    <div class="rui-dialog installment-dialog">
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
<style scoped lang="scss">
.m-dialog {
  .rui-dialog {
    padding-top: 0;
    .bd {
      padding: 0.2rem;
      min-height: auto;
    }
    .title {
      font-weight: normal;
      padding-top: .15rem;
    }
    .rui-btn-dialog {
      color: #05D380;
      border-radius: 0;
      background-color: #fff;
      &:last-child {
        &::after {
          content:"";
          width: 200%;
          height: 200%;
          box-sizing: border-box;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          border-left:1px solid #D8D9DC;
          transform: scale(0.5);
          transform-origin:0 0;
        }
      }
    }
    .ft {
      box-shadow: none;
      position: relative;
      &:before {
        content: "";
        pointer-events: none;
        box-sizing: border-box;
        position: absolute;
        width: 200%;
        height: 200%;
        left: 0;
        top: -.01rem;
        border-top: 1px solid #D8D9DC;
        transform: scale(0.5);
        transform-origin: 0 0;
      }
    }
  }
  .icon-wrap {
    margin-bottom: .1rem;
    .circle-bg{
      width: .44rem;
      height: .44rem;
      line-height: .44rem;
      background-color: #fa5d5d;
      border-radius: 50%;
      display: inline-block;
      align-items: center;
      justify-content: center;
      margin: .15rem auto 0 auto;
      color: #fff;
      font-size: .2rem;
    }
    .sucess{
      background-color: #42C905;
      color: #fff;
      font-size: .18rem;
    }
  } 
}
</style>
