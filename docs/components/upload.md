<script setup>
import zeroUpload from "@/upload/zeroUpload.vue";
</script>

## 基本使用

<div style="height: 400px">
<zeroUpload></zeroUpload>
</div>

```vue

<template>
  <zeroUpload></zeroUpload>
</template>

```

## node后台代码

```js
"dependencies": {
  "cors": "^2.8.5",
    "express": "^4.21.2",
    "multer": "^1.4.5-lts.1"
}
```

```js

const express = require('express');
const multer = require('multer');
const cors = require('cors');
// const path = require('path');
const fs = require('fs');

// 创建Express应用
const app = express();
const port = 3000;

// 使用CORS中间件（如果你的应用需要跨域请求）
app.use(cors());

// 设置存储位置和文件命名规则
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = './uploads';
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const name = decodeURI(req.headers.name);
    console.log(name)
    cb(null, `${Date.now().toString()}-${name}`);
  }
});

// 初始化Multer中间件
const upload = multer({storage: storage});

// 文件上传路由
app.post('/upload', upload.single('file'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send({message: '请上传一个文件'});
    }

    // 返回上传成功的响应
    res.status(200).send({
      message: '文件上传成功',
      file: req.file
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({message: '服务器错误'});
  }
});

// 启动服务器
app.listen(port, () => {
  console.log(`服务器正在监听 http://localhost:${port}`);
});
```

## 属性

|      属性名       |     说明      | 可选值 | 默认值 |    类型    |
|:--------------:|:-----------:|:---:|:---:|:--------:|
| maxConcurrency | 最多同时上传多少个文件 |  -  |  4  |  Number  |
| requestMethods |   发送请求的函数   |  -  |  -  | Function |
|     accept     |   允许的文件类型   |  -  |  *  |  String  |
|    maxSize     | 允许的文件大小(kb) |  -  | 2G  |  Number  |

