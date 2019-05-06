<template>
  <div class="m-lego-picker">
  </div>
</template>

<script>
import Picker from 'better-picker'
export default {
  name: "Picker",
  props: {
    show: { //是否展示
      type: Boolean,
      default: false,
      required: true
    },
    title : { //标题
      type : String,
      default: '',
      required: false
    },
    list: {    //数据源
      type: Array,
      default: [],
      required: true
    },
    pickerHeight: { //默认展示高度
      type: Number,
      default: 1.5,
      required: false
    },
    looped: { //是否循环 暂时不支持
      type: Boolean,
      default: false,
      required: false
    },
    cancel: { //取消回调
      type: Function,
      default: false,
      required: true
    },
    confirm: { //确定回调
      type: Function,
      default: false,
      required: true
    },
    change: { //change 回调
      type: Function,
      default: null,
      required: false
    },
    businessId: { //字段标示
      type: String,
      default: '',
      required: true
    }
  },
  data() {
    return {
      picker: null,
      listData: [],
    };
  },
  computed: {
    formatList() {
      return this.listData.map(item => {
        let column  = [];
        for (const key in item.data) {
          column.push({
            value: key,
            text: item.data[key]
          })
        }
        return column
      })
    },

    selectIndexs() {
      return this.listData.map(item => {
        let selectIdx = 0;
        Object.keys(item.data).forEach((key, index) => {
          if(key == item.defaultValue) {
            selectIdx = index
          }
        })
        return selectIdx
      })
    },
  },

  watch: {
    list() {
      if(this.show) {
        this.listData = JSON.parse(JSON.stringify(this.list))
      }
    },
    show() {
      if(this.show) {
        this.picker = null
        this.showPicker()
      }
    }
  },

  methods: {
    showPicker() {
      const self = this,
        pickerData = this.formatList,
        selectedIndex = this.selectIndexs,
        pickerTitle = this.title;
        this.picker = new Picker({
          data: pickerData,
					selectedIndex: selectedIndex,
					title: pickerTitle
        })

        this.picker.on('picker.change', function (index, selectedIndex) {
          if(self.formatList.length < 1) {
            return false
          }
          if(!self.change) {
            return false
          }
          const selectMap = this.selectedIndex;
          selectMap[index] = selectedIndex;

          const selectInfo = self.getSelectInfo(selectMap)
          self.change(selectInfo, index)

          for(let i = index; i < self.formatList.length; i++) {
            const changeIndex = i + 1;
            if(changeIndex === self.formatList.length) {
              break;
            }
            self.$nextTick(() => {
              self.picker.refillColumn(changeIndex, self.formatList[changeIndex])
              self.picker.scrollColumn(changeIndex, 0) //联动重置选择
            })
          }
        });

        this.picker.on('picker.select', function (selectedVal, selectedIndex) {
          const selectInfo = self.getSelectInfo(selectedIndex)
          self.confirm(selectInfo, self.businessId) 
        });

        this.picker.on('picker.cancel', function () {
          self.cancel()
        });

      this.picker.show();
      this.picker.maskEl.addEventListener('click', () => {
        this.picker.hide();
        self.cancel()
      }, false);
    },

    getSelectInfo(selectedIndex) {
      return selectedIndex.map((pointer, index) => {
        const select = this.formatList[index][pointer];
        return ({
          key: select.value,
          value: select.text
        })
      })
    }
  }
}
</script>
