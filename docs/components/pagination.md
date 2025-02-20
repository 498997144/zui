<script setup>
import zeroPagination from "@/pagination/zeroPagination.vue";
function pageChange(value) {
  console.log(value)
}

function pageSizeChange(value) {
  console.log(value)
}
</script>

## 基本使用

<zeroPagination @pageChange="pageChange" @pageSizeChange="pageSizeChange"
:page-size="20" :total-count="2000000"></zeroPagination>

```vue

<template>
  <zeroPagination @pageChange="pageChange" @pageSizeChange="pageSizeChange"
                  :page-size="20" :total-count="2000000"></zeroPagination>
</template>
<script setup>
  import zeroPagination from "@/pagination/zeroPagination.vue";

  function pageChange(value) {
    console.log(value)
  }

  function pageSizeChange(value) {
    console.log(value)
  }
</script>

```

## 属性

|     属性名     |     说明      | 可选值 |  默认值  |   类型    |
|:-----------:|:-----------:|:---:|:-----:|:-------:|
|  pageSize   | 每一页显示多少条数据  |  -  |  10   | Number  |
| totalCount  |   总共的数据个数   |  -  |   0   | Number  |
|   maxShow   | 最多展示多少个页码按钮 |  -  |   6   | Number  |
| currentPage |  当前定位在第几页   |  -  |   1   | Number  |
|  showTotal  |    展示总条数    |  -  | false | Boolean |

## 事件

|      事件名       |       说明       |   参数    | 
|:--------------:|:--------------:|:-------:|
|   pageChange   |   当前页码发生改变时    | 当前处于第几页 |
| pageSizeChange | 每页显示多少条数据发生改变时 |  每页的条数  |
