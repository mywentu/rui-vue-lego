const Base = () => import("@/components/docs/Base.vue");

export default {
  path: "/docs",
  name: "docBase",
  component: Base,
  children: [
    {
      path: "overview",
      name: "docOverView",
      component: r =>
        require.ensure([], () => r(require("@/components/docs/md/overview.md")))
    },
    {
      path: 'toast',
      name: 'docToast',
      component: r =>
        require.ensure([], () => r(require("@/components/docs/md/toast.md")))
    },
    {
      path: 'loading',
      name: 'docLoading',
      component: r =>
        require.ensure([], () => r(require("@/components/docs/md/loading.md")))
    },
    {
      path: 'dialog',
      name: 'docDialog',
      component: r =>
        require.ensure([], () => r(require("@/components/docs/md/dialog.md")))
    },
    {
      path: 'popup',
      name: 'docPopup',
      component: r =>
        require.ensure([], () => r(require("@/components/docs/md/popup.md")))
    },
    {
      path: 'input',
      name: 'docInput',
      component: r =>
        require.ensure([], () => r(require("@/components/docs/md/input.md")))
    },
    {
      path: 'button',
      name: 'docButton',
      component: r =>
        require.ensure([], () => r(require("@/components/docs/md/button.md")))
    },
    {
      path: 'numberKeyboard',
      name: 'docNumberKeyboard',
      component: r =>
        require.ensure([], () => r(require("@/components/docs/md/numberKeyboard.md")))
    },
    {
      path: 'form',
      name: 'docForm',
      component: r =>
        require.ensure([], () => r(require("@/components/docs/md/form.md")))
    }
  ]
};
