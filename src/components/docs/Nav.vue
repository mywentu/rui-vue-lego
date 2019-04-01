<template>
  <nav class="collapse bd-links show" id="bd-docs-nav">
    <div class="bd-toc-item" v-for="(parent, index) in navList" :key="index">
      <span class="bd-toc-link">{{ parent.title }}</span>
      <ul class="nav bd-sidenav">
        <li
          :class="{'active bd-sidenav-active': nav.name === activeTag }"
          @click="tapNavItem(nav.name)"
          v-for="nav in parent.children"
          :key="nav.name">
          <router-link :to="{ name: nav.name }">{{ nav.title }}</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

const nav = [
  {
    title: "Overview",
    children: [{ title: "介绍", name: "docOverView" }]
  },
  {
    title: "Base",
    children: [
      { title: "Form", name: "docForm" },
      { title: "Input", name: "docInput" },
      { title: "Toast", name: "docToast" },
       { title: "Popup", name: "docPopup" },
      { title: "Dialog", name: "docDialog" },
      { title: "Button", name: "docButton" },
      { title: "Loading", name: "docLoading" },
      { title: "NumberKeyboard", name: "docNumberKeyboard" }
    ]
  }
];

@Component
export default class Nav extends Vue {
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
.bd-toc-link {
  display: block;
  padding: 0.25rem 1.5rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.65);
  font-size: 1.5rem;
}

.bd-toc-item {
  &.active {
    margin-bottom: 1rem;

    &:not(:first-child) {
      margin-top: 1rem;
    }

    > .bd-toc-link {
      color: rgba(0, 0, 0, 1);

      &:hover {
        background-color: transparent;
      }
    }

    > .bd-sidenav {
      display: block;
    }
  }
}

// All levels of nav
.bd-sidebar .nav > li{
  width: 100%;
}
.bd-sidebar .nav > li > a {
  display: block;
  padding: 0.5rem 1.5rem;
  font-size: 85%;
  color: rgba(0, 0, 0, 0.65);
}

.bd-sidebar .nav > li > a:hover {
  color: #4078c0;
  text-decoration: none;
  background-color: transparent;
}

.bd-sidebar .nav > .active > a,
.bd-sidebar .nav > .active:hover > a {
  font-weight: 500;
  color: rgba(0, 0, 0, 0.85);
  background-color: transparent;
}
</style>
