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