<template>
  <div class="m-vueBtn">
    <main class="vueBtn-bd" ref="main">
      <button>{{text}}</button>
    </main>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'

@Component
export default class VueButton extends Vue {
  @Prop({type: Boolean, required: false}) disabled: Boolean
  @Prop({type: String, required: false}) htmlType: String
  @Prop({type: String, required: false}) size: String
  @Prop({type: String, required: false}) text: String

  
}
</script>
<style scoped lang="scss" scoped>
.m-vueBtn {
  position: relative;
  padding: 0 .3rem 0 .12rem;
  background: #fff;
  border: 1px solid #ebedf0;
  border-radius: .05rem;
  color: #666;
  font-size: .14rem;
}
</style>
