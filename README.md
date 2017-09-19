# vue-ckq-layer

> 一个基于vue2.0的弹窗组件(PC)
> 不存在外部字体以及图片等文件，动画使用css3实现，空间很小



## Installation
### You can install it via NPM.

```
  npm i vue-ckq-layer --save-dev

  import ckq from 'vue-ckq-layer'

  Vue.use(ckq)
```


### 如果你使用的是 vue cli, 可以在main.js 中添加以下代码

```
  import ckq from 'vue-ckq-layer';
  Vue.use(ckq);
  
```


## Usage

### layer

layer为一个消息提示框，默认3秒钟消失

| Parameter | Type | Description |
| -------- | ------- | ------ |
| message | string | 提示内容 |
| time | number | 消失时间 |

eg:

```
    this.$ckq.layer('这是一个message')
    若想改变消失时间
    this.$ckq.layer({
      message: '这是一个message',
      time: 3000
    })
```

### confirm

confirm在保留页面的情况下会弹出一个对话框。可以用来进行一些复杂带校验的弹窗信息展示，也可以只用于简单信息的展示。可以通过title属性来显示任意标题，通过width属性来修改显示区域的宽度。

| Parameter | Type | Description |
| --------| ------- | -------- |
| visible | Boolean | 是否显示弹窗,支持 .sync 修饰符 |
| width | String | 弹窗的宽度 |
| ok | obj | 确认按钮事件 |
| cancel | obj | 取消按钮事件 |

eg:

```
  <ckq-confirm title="信息" :visible.sync="confirmVisible" v-on:ok="ok" v-on:cancel="cancel">
                  这里是内容
              </ckq-confirm>
```

### Loading

局部式加载loading

| Parameter | Type | Description |
| --------| ------ | ----- |
| visible | Boolean | 是否显示 |

eg:

```
    <ckq-loading :visible="loadingVisible"></ckq-loading>
```
