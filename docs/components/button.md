
<script setup>
import zeroButton from "@/button/zeroButton.vue";
</script>
### 按钮大小
<zero-button size="small">较小</zero-button>
<zero-button size="normal">中等</zero-button>
<zero-button size="large">较大</zero-button>
```vue
<zero-button size="small">较小</zero-button>
<zero-button size="normal">中等</zero-button>
<zero-button size="large">较大</zero-button>
```
### 按钮类型和颜色
<zero-button buttonType="default">默认</zero-button>
<zero-button buttonType="warning">提示</zero-button>
<zero-button buttonType="danger">慎重</zero-button>
```vue
<zero-button buttonType="default">默认</zero-button>
<zero-button buttonType="warning">提示</zero-button>
<zero-button buttonType="danger">慎重</zero-button>
```
### 禁用点击高亮
<zero-button :highlight="false">没有高亮</zero-button>
```vue
<zero-button :highlight="false">没有高亮</zero-button>
```
### 圆角
<zero-button round >圆角</zero-button>
```vue
<zero-button round >圆角</zero-button>
```
### 圆形
<zero-button circle >圆形</zero-button>
```vue
<zero-button circle >圆形</zero-button>
```
### 自定义背景和文字颜色
<zero-button bgColor="pink" color="red">按钮</zero-button>
```vue
<zero-button bgColor="pink" color="red">按钮</zero-button>
```
### 禁用状态
<zero-button disabled bgColor="pink" color="red">按钮</zero-button>
```vue
<zero-button disabled >按钮</zero-button>
```
## 属性
|     属性名      |      说明       |           可选值            |   默认值   |   类型    |
|:------------:|:-------------:|:------------------------:|:-------:|:-------:|
|  buttonType  |  不同类型显示不同颜色   | default, warning, danger | default | String  |
|     size     |     按钮大小      |    small,normal,large    | normal  | String  |
|  highlight   |    点击时是否高亮    |        true,false        |  true   | Boolean |
|   bgColor    |     背景颜色      |      rgb, 十六进制, 颜色名      |    -    | String  |
|    color     |     文字颜色      |      rgb, 十六进制, 颜色名      |    -    | String  |
|  circle      | 圆形按钮,和圆角按钮二选一 |        true,false        |  false  | Boolean |
|    round     |     圆角按钮      |        true,false        |  false  | Boolean |
|   disabled   |      禁用       |        true,false        |  false  | Boolean |
## 插槽
| 名称 |    说明   |
|:-:|:-------:|
| default  | 自定义默认内容 |
## 导出
| 名称 |    说明    |
|:-:|:--------:|
| buttonRef  | 按钮html元素 |
