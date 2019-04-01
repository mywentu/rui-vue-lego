export default {
  path: '/case',
  name: 'caseBase',
  component: () => import("@/components/case/Base.vue"),
  children: [
    {
      path: "overview",
      name: "overView",
      component: () => import("@/components/case/OverView.vue")
    },
    {
      path: "toast",
      name: "toast",
      component: () => import("@/components/case/Toast.vue")
    },
    {
      path: "dialog",
      name: "dialog",
      component: () => import("@/components/case/Dialog.vue")
    },
    {
      path: "loading",
      name: "loading",
      component: () => import("@/components/case/Loading.vue")
    },
    {
      path: "popup",
      name: "popup",
      component: () => import("@/components/case/Popup.vue")
    },
    {
      path: "input",
      name: "input",
      component: () => import("@/components/case/Input.vue")
    },
    {
      path: "button",
      name: "button",
      component: () => import("@/components/case/Button.vue")
    },
    {
      path: "numberkeyboard",
      name: "numberKeyboard",
      component: () => import("@/components/case/NumberKeyboard.vue")
    },
    {
      path: "form",
      name: "form",
      component: () => import("@/components/case/Form.vue")
    }
  ]
}
