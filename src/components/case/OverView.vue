<template>
  <div class="m-overview">
    <div class="bd" v-for="(parent, index) in navList" :key="index">
      <span class="title">{{ parent.title }}</span>
      <ul class="sidenav">
        <li
          class="item"
          @click="tapNavItem(nav.name)"
          v-for="nav in parent.children"
          :key="nav.name">
          <router-link :to="{ name: nav.name }">{{ nav.title }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

const nav = [
  {
    title: "base",
    children: [
      { title: "Form", name: "form" },
      { title: "Toast", name: "toast" },
      { title: "Popup", name: "popup" },
      { title: "Input", name: "input" },
      { title: "Dialog", name: "dialog" },
      { title: "Button", name: "button" },
      { title: "Loading", name: "loading" },
      { title: "NumberKeyboard", name: "numberKeyboard" },
    ]
  }
];

@Component
export default class OverView extends Vue {
  get navList() {
    return nav;
  }

  activeTag = "";

  tapNavItem(tagName) {
    this.activeTag = tagName;
  }
}
</script>

<style lang="scss" scoped>
.m-overview {
  background-color: #fff;
  padding: .15rem;
  .bd {
    .title {
      font-size: .16rem;
      color: #666;
    }
    .sidenav {
      padding-left: .12rem;
      .item {
        font-size: .14rem;
        line-height: 2.5;
      }
    }
  }
}  
</style>
