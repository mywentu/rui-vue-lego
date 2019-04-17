<template>
  <div class="popup" v-show="show">
    <div class="rui-masker rui-masker-bottom" @click.stop="cancel">
      <transition name="fade">
      <div class="cont rui-popup" v-show="show" @click.stop>
        <header class="hd rui-header rui-header-easy-loan">
          <h3 class="title">{{title}}</h3>
          <div class="back" @click.stop="cancel">取消</div>
          <div class="next" @click.stop="submitData">确定</div>
        </header>
        <div class="bd">
          <div class="rui-picker" :style="{height: pickerHeight + 'rem'}">
            <span class="mask"></span>
            <ul class="list" v-for="(item, index) in listData" @touchstart='start' @touchmove='move' @touchend='end' @touchcancel='end' :data-index="index" :style="pos[index]" :key="index">
              <li class="item" :value="key" v-for="(curItem, key) in item.data" :style="{fontSize: curItem.length > 8 ? '0.11rem' : '.14rem'}" :key="key">{{curItem}}</li>
            </ul>
          </div>
        </div>
      </div>
      </transition>
    </div>
  </div>

</template>
<style lang="scss" scoped>
  .fade-enter-active{
     animation:animations .2s ease-out forwards;
     transform: translateY(0, 1.5rem);
  }
  @keyframes animations {
    0% {
      transform: translateY(1.5rem);
    }
    100% {
      transform: translateY(0);
    }
  }
  .back {
    padding-left: .15rem;
  }
  .next {
    padding-right: .15rem;
  }
  .rui-picker > .list {
    height: 100%;
  }
</style>
<script>
export default {
  name: 'Popup',
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
  data () {
    return {
      showPop: true,
      x: 0,
      y: 0,
      endTime: 0,
      directionX:  0,
      directionY: 0,
      itemHeight: 30,
      valueInfo: [],
      initOffset: Math.floor(5 / 2) * 30,
      listData: []
    }
  },
  mounted: function () {
  },
  watch: {
    list() {
      if(this.show) {
        this.listData = JSON.parse(JSON.stringify(this.list))
      }
    },
    show() {
      if(!this.show){
        this.valueInfo = []
        this.listData = []
      }
    }
  },
  computed: {
    pos() {
      if(this.list) {
        let arr = []
        this.list.map((item, index) => {
          const keys = Object.keys(item.data)
          const curIndex = item.defaultValue !== '' ? keys.indexOf(item.defaultValue + '') : index;
          const key = item.defaultValue + ''  || (keys.length ? keys[index] : '');
          this.valueInfo[index] = {
            key: key,
            value: item.data[key]
          }
          arr[index] = {
            transform : 'translateY('+ (2 - curIndex) * this.itemHeight +'px)',
            WebkitTransform: 'translateY('+ (2 - curIndex) * this.itemHeight +'px)'
          }
        })
        return arr
      }
    }
  },
  methods: {
    submitData() {
      this.cancel();
      this.confirm(this.valueInfo, this.businessId)
    },
    getInitY(curItem, index) {
      const keys = Object.keys(curItem.data),
            curIndex = curItem.defaultValue !== '' ? keys.indexOf(curItem.defaultValue + '') : index;
      const key = curItem.defaultValue + ''  || (keys.length ? keys[index] : '');
      this.valueInfo[index] = {
        key: key,
        value: curItem.data[key]
      }
      return {
              transform : 'translateY('+ (2 - curIndex) * this.itemHeight +'px)',
              WebkitTransform: 'translateY('+ (2 - curIndex) * this.itemHeight +'px)'
            }
    },
    start(e) {
        const item = e.target.parentNode;
        if (e.cancelable) {
            if(!e.defaultPrevented) {
                e.preventDefault && e.preventDefault();
            }
        }
        this.isMoving = false;
        var n = e.touches ? e.touches[0] : e;
        this.initialte = 1;
        this.moved = false;
        this.distX = 0;
        this.distY = 0;
        this.directionX = 0;
        this.directionY = 0;
        this.x = 0;
        this.y = this._getY(item);
        this._translate(item, this.y);
        this.startY = this.y;
        this.absStartX = this.x;
        this.absStartY = this.y;
        this.pointX = n.pageX;
        this.pointY = n.pageY;
        this.startTime = (new Date).getTime();
        this.valueInfo = [];
    },
    move(e) {
        const item = e.target.parentNode;
        this.limitOffset = this.initOffset - this.itemHeight * (item.children.length - 1)
        if (e.cancelable) {
            if(!e.defaultPrevented) {
                e.preventDefault && e.preventDefault();
            }
        }
        var n = e.touches ? e.touches[0] : e;
        if(!n) {
            return;
        }
        var r = n.pageX - this.pointX,
            i = n.pageY - this.pointY,
            s = (new Date).getTime(),
            o,
            u,
            a,
            f;
        this.pointX = n.pageX;
        this.pointY = n.pageY;
        this.distX += r;
        this.distY += i;
        a = Math.abs(this.distX);
        f = Math.abs(this.distY);
        this.isMoving = true;
        if (s - this.endTime > 300 && a < 10 && f < 10) {
            this.isMoveing = false;
            return
        }
        r = 0;
        o = this.x + r;
        u = this.y + i;
        this.deltaY = i;
        this.directionY = i > 0 ? -1 : i < 0 ? 1 : 0;
        var l = this.itemHeight;
        var c = u;
        if (u <= this.limitOffset - l   || u >= this.initOffset + l) {
            c = u - i * 9 / 9

        }
        this._translate(item, c);
        this._slideItems(item);
    },
    end(e) {
        if (e.cancelable) {
            if(!e.defaultPrevented) {
                e.preventDefault && e.preventDefault();
            }
        }
        const item = e.target.parentNode;
        const index = item.getAttribute('data-index');
        var n = e.changedTouches ? e.changedTouches[0] : t,
            r,
            i,
            s = (new Date).getTime() - this.startTime,
            o = Math.round(this.x), u = Math.round(this.y),
            a = Math.abs(o - this.startX),
            f = Math.abs(u - this.startY),
            l = 0,
            c = "";
        this.endTime = (new Date).getTime();
        if (!this.isMoving) {
            // console.log(e.target.getAttribute("data-value"))
        } else {
            if (u <= this.limitOffset) {
                u = this.limitOffset
            } else if (u >= this.initOffset) {
                u = this.initOffset
            } else {
                var v = u % this.itemHeight;
                if (v != 0) {
                    if (v <= Math.floor(this.itemHeight / 2)) {
                        u = u - v
                    } else {
                        u = u - v + this.itemHeight
                    }
                }
            }
            this._translate(item, u);
            this._slideItems(item);
            if(this.list.length > 1) {
              this._resetData(index);
            }
        }
    },
    _resetData(index) {
      this.change(this.valueInfo, index)
    },
    _getY(ele) {
        var t = ele.style["transform"] || ele.style["-webkit-transform"];
        var n = t.match(/translateY\(([\-0-9]+)px\)/);
        var r = 0;
        if (n && n.length > 1) {
            r = n[1]
        }
        r = parseInt(r, 10);
        return r
    },
    _translate(ele, y) {
        var  nodeStyle = "translateY(" + y + "px )";
        ele.style["-webkit-transform"] = nodeStyle;
        this.x = 0;
        this.y = y
    },
    _slideItems(ele) {
        const e = this.initOffset - this.y,
              t = Math.floor(e / this.itemHeight) > 0 ? Math.floor(e / this.itemHeight) : 0,
              index = ele.getAttribute('data-index'),
              curItem =  document.querySelector('[data-index="'+ index +'"]').children[t],
              data = this.list[index].data || {},
              keys = Object.keys(data),
              selectIndex = keys[t];
        this.valueInfo[index] = {
          key: selectIndex,
          value: this.list[index].data[selectIndex]
        }
    }
  }
}
</script>
