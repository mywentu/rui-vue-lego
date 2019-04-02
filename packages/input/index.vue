<template>
  <div class="m-input">
    <header class="rui-header rui-header-case">
      <span class="back" @click="back">
        <i class="rui-ico icon-back"></i>
      </span>
      <span class="title">
        Input
      </span>
    </header>
    <div class="bd">
      <section class="input-demo">
        <h2 class="input-demo-title">文字输入框</h2>
        <vueInput clearable type="text" :blurEvent="inputBlur" v-model="inputValue"/>
      </section>
      <section class="input-demo">
        <h2 class="input-demo-title">密码输入框</h2>
        <vueInput clearable type="password" :focusEvent="inputFocus" v-model="pwdValue"/>
      </section>
      <section class="input-demo">
        <h2 class="input-demo-title">文本输入框</h2>
        <vueInput type="textarea" autosize rows='2' v-model="textValue"/>
      </section>
      <section class="input-demo">
        <h2 class="input-demo-title">手机号输入框</h2>
        <vueInput type="tel" clearable v-model="phoneValue" maxlength=11 />
      </section>
      <section class="input-demo">
        <h2 class="input-demo-title">数字输入框</h2>
        <vueInput type="number" clearable v-model="numberValue"/>
      </section>
      <section class="input-demo">
        <h2 class="input-demo-title">年/月/日输入框</h2>
        <vueInput type="date" clearable v-model="dateValue"/>
      </section>
      <section class="input-demo">
        <h2 class="input-demo-title">输入框尺寸</h2>
        <div class="input-group">
          <vueInput type="text" clearable size="large" v-model="largeValue"/>
          <vueInput type="text" clearable size="medium" v-model="mediumValue"/>
          <vueInput type="text" clearable size="small" v-model="smallValue"/>
        </div>
      </section>
      <section class="input-demo">
        <h2 class="input-demo-title">输入框内容对齐方式</h2>
        <div class="input-group">
          <vueInput type="text" clearable inputAlign="left" placeholder="左对齐" v-model="mediumValue"/>
          <vueInput type="text" clearable holder="右对齐" inputAlign="right" v-model="smallValue"/>
        </div>
      </section>
      <section class="input-demo">
        <h2 class="input-demo-title">输入框添加类名</h2>
        <div class="input-group">
          <vueInput type="text" clearable inputClass="input-demo-class" v-model="mediumValue"/>
        </div>
      </section>

      <section class="input-demo">
        <h2 class="input-demo-title">手机号输入框</h2>
        <div class="input-group">
          <vueInput type="mobile" clearable inputClass="input-demo-class" v-model="mediumValue"/>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Input extends Vue {
  inputValue: string = ''
  pwdValue: string = ''
  textValue: string = ''
  phoneValue: string = ''
  numberValue: number = 0
  dateValue: string = ''

  largeValue: string = ''
  mediumValue: string = ''
  smallValue: string = ''
  back() {
    this.$router.push({name: 'overView'})
  }

  inputBlur() {
    this.$toast({msg: '输入框失去焦点'})
  }

  inputFocus() {
    this.$toast({msg: '输入框获得焦点'})
  }
  
}
</script>

<style lang="scss" scoped>
.m-input {
  .input-demo-title {
    margin: 0;
    font-weight: 400;
    font-size: .14rem;
    color: rgba(69, 90, 100, .6);
    padding: .2rem 0 .08rem;
  }
  .input-demo {
    padding: .05rem .15rem;
    background: #fafafa;
  }
  .input-group {
    .m-vueInput {
      margin-top: .05rem;
    }
    .input-demo-class {
      color: #06be06;
      border-color: rgb(6, 190, 6);
    }
  }
}
</style>

