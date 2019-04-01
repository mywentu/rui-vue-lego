##### 介绍

> rui-ui 是一个基于scss的前端样式库，可以用于快速构建移动端H5页面。

---

##### 安装

> 使用`cnpm`  或 `npm` 进行安装

```bash
cnpm install ruicss --save
```

##### 使用

在项目全局样式中引入`ruicss`
```javascript
import 'ruicss';
```

##### 自定义主题

`ruicss`各个组件的样式变量都存放在`ruicss/sass/lib/core/variables.scss`中，可以根据自己的使用情况，自定义变量的值。
```scss
@charset "utf-8";
$base: (
    font-path: "~ruicss/sass/font/"  // 自定义指定scss字体位置
);
@import "~ruicss/sass/index.scss";
```


##### 更新日志

- None

<!-- 
## API

| option | description       | type   | acceptable values                | default |
| ------ | ----------------- | ------ | -------------------------------- | ------- |
| type   | type of the badge | String | primary, error, success, warning | primary |
| color  | CSS color value   | String |                                  |         |
| size   | size of the badge | String | normal, large, small             | normal  |

## Slot

| name | description  |
| ---- | ------------ |
| -    | test content | -->
