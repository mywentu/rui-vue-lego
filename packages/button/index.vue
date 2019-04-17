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