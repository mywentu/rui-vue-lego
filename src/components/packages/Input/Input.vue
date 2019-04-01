<template>
  <div 
    :class="['m-vueInput', 
    size ? 'el-input-' + size : '',
    inputAlign ? 'el-input-align-' + inputAlign : '',
    {'bd-noclear' : !showClear}, inputClass]">
      <main class="vueInput-bd" ref="main">
        <textarea
          :rows="rows"
          ref="textarea" 
          v-if="type === 'textarea'"
          :class="['input-default']"
          :placeholder="placeholder" 
          :maxlength="maxlength" 
          :readonly="readonly"
          :disabled="disabled"
          v-model="inputValue"
          @change="changeEvent"
          @input="inputEvent"
          @focus="focusEvent"
          @blur="blurEvent">
        </textarea>

        <input 
          ref="input"
          v-else
          :type="type" 
          :class="['input-default']"
          :placeholder="placeholder"
          :maxlength="maxlength" 
          :readonly="readonly"
          :disabled="disabled"
          v-model="inputValue"
          @change="changeEvent"
          @input="inputEvent"
          @focus="focusEvent"
          @blur="blurEvent">
      </main>
      <i class="icon icon-delete" v-if="showClear" @click="clear"></i>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'

@Component
export default class VueInput extends Vue {
  @Prop({type: [String, Number], required: true}) value: [String, Number]
  @Prop({type: [String, Number], required: false}) maxlength: [String, Number]

  @Prop({type: String, default: '1', required: false}) rows: String
  @Prop({type: String, default: 'text', required: false}) type: String
  @Prop({type: String, default: 'medium', required: false}) size: String
  @Prop({type: String, default: 'left', required: false}) inputAlign: String
  @Prop({type: String, default: '请输入', required: false}) placeholder: String
  
  @Prop({type: Boolean, default: false, required: false}) readonly: Boolean
  @Prop({type: Boolean, default: false, required: false}) disabled: Boolean
  @Prop({type: Boolean, default: false, required: false}) clearable: Boolean
  @Prop({type: Boolean, default: false, required: false}) autosize: Boolean

  @Prop({type: String, required: false}) inputClass: String

  @Prop({type: Function, default: () => {}, required: false}) inputEvent: String
  @Prop({type: Function, default: () => {}, required: false}) changeEvent: String
  @Prop({type: Function, default: () => {}, required: false}) focusEvent: String
  @Prop({type: Function, default: () => {}, required: false}) blurEvent: String

  inputValue = this.value 
  textareaStyle = {}

  @Watch('inputValue')
  autoHeight() {
    if (this.type !== 'textarea') return;
    const { textarea } = this.$refs;
    let scrollHeight = textarea['scrollHeight']
    textarea['style'].height = scrollHeight + 'px';
  }

  get showClear() {
    return this.clearable && 
      !!this.inputValue &&
      this.type !== 'textarea' && 
      !this.disabled && 
      !this.readonly
  }

  clear() {
    if (this.disabled || this.readonly) return;
    this.inputValue = null
  }
}
</script>
<style scoped lang="scss" scoped>
.m-vueInput {
  position: relative;
  padding: 0 .3rem 0 .12rem;
  background: #fff;
  border: 1px solid #ebedf0;
  border-radius: .05rem;
  color: #666;
  font-size: .14rem;
  &.bd-noclear {
    padding: 0 .12rem 0 .12rem;
  }
  &.el-input-large {
    font-size: .16rem;
    .vueInput-bd {
      padding: .14rem 0;
    }
  }
  &.el-input-medium {
    font-size: .14rem;
    .vueInput-bd {
      padding: .12rem 0;
    }
  }
  &.el-input-small {
    font-size: .12rem;
    .vueInput-bd {
      padding: .1rem 0;
    }
  }
  &.el-input-align-left {
    text-align: left;
  }
  &.el-input-align-right {
    text-align: right;
  }
  .vueInput-bd {
    width: 100%;
    padding: .12rem 0;
    color: inherit;
    font-size: inherit;
    background: inherit;
    text-align: inherit;
    .input-default {
      width: 100%;
      color: inherit;
      font-size: inherit;
      background: inherit;
      line-height: initial;
      text-align: inherit;
      resize: none;
      border: 0;
      outline: 0;
    }
  }
  .icon-delete {
    width: .15rem;
    height: .15rem;
    position: absolute;
    top: 34%;
    right: .12rem;
    background: url(../../../assets/ico-delete.png) no-repeat;
    background-size: 100%;
  }
}
</style>
