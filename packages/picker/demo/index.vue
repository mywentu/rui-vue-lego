<template>
  <div class="m-picker-demo">
      <button @click="showPicker">显示picker</button>
      <Picker 
        :list="pickerConfig.data"
        :show="pickerConfig.visible"
        :cancel="pickerCancelCallback"
        :confirm="pickerConfirmCallback"
        :change="pickerChangeCallback"
        :businessId="pickerConfig.businessId"
        />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import Toast from '../../toast/index';
import Picker from '../index.vue'
Vue.prototype.$toast = Toast

@Component({
  components: {
    Picker: Picker
  }
})
export default class PickerDemo extends Vue {
  pickerConfig = {
    data: [],
    visible: false,
    businessId: ''
  }

  showPicker() {
    this.pickerConfig = {
      data: [{"defaultValue":"1","data":{"1":"配偶","2":"父亲","3":"母亲","4":"已成年子女"}}],
      visible: true,
      businessId: ''
    }
  }

  pickerCancelCallback(...result) {
    this.pickerConfig = {
      data: [],
      visible: false,
      businessId: ''
    }
    this['$toast']({
      msg: `关闭picker`
    });
  }

  pickerConfirmCallback(...result) {
    this.pickerConfig = {
      data: [],
      visible: false,
      businessId: ''
    }
    this['$toast']({
      msg: `返回结果${JSON.stringify(result)}`
    });
  }

  pickerChangeCallback(...result) {
    this['$toast']({
      msg: `返回结果${JSON.stringify(result)}`
    });
  }
}
</script>

<style lang="scss" scoped>
.m-picker-demo {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
}
</style>
