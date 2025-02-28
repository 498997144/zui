<template>
  <div class="zero-upload">
    <div class="zero-upload-inner"
         @drop.prevent="onDrop"
         @dragenter.prevent="()=>{}"
         @dragover.prevent="(e)=>{ e.dataTransfer.dropEffect = 'move';}">
      <div class="content">
        <span>点击选择文件或者拖动文件夹和文件到该区域</span>
        <div class="buttons">
          <zeroButton buttonType="primary" @click="selectFile(false)">选择文件</zeroButton>
          <zeroButton buttonType="primary" @click="selectFile(true)">选择文件夹</zeroButton>
        </div>
      </div>
      <input class="zero-upload-input"
             ref="inputRef"
             type="file"
             multiple
             @change="onChange"
      >
    </div>
    <div class="zero-upload-file">
      <div class="zero-upload-file-item header">
        <div class="col">文件名</div>
        <div class="col">类型</div>
        <div class="col">大小</div>
        <div class="col">状态</div>
        <div class="col">操作</div>
      </div>
      <div class="zero-upload-file-item"
           v-for="(file,index) in fileListData"
           :key="index"
      >
        <div class="col">{{ file.name }}</div>
        <div class="col">.{{ file.type }}</div>
        <div class="col">{{ parseFloat(file.size / 1024 / 1024).toFixed(2) }}m</div>
        <div class="col">{{ file.status }}</div>
        <div class="col">
          <zeroButton buttonType="primary" size="small" @click="upload(index)">上传</zeroButton>
          <zeroButton buttonType="primary" style="margin:0 5px" size="small" @click="cancelUpload(index)">取消
          </zeroButton>
          <zeroButton buttonType="primary" size="small" @click="delFile(index)">删除</zeroButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import pLimit from 'p-limit';
import {ref, reactive} from 'vue';
import zeroButton from '../button/zeroButton.vue'


const props = defineProps({
  accept: {
    type: String,
    default: '*'
  },
  maxSize: {
    type: Number,
    default: 1024 * 1024 * 2
  },
  requestMethods: {
    type: Function,
  },
  maxConcurrency: {
    type: Number,
    default: 4
  }
})

const inputRef = ref(null);
const fileList = reactive([]);
const fileListData = reactive([]);

// 递归获取文件对象
async function getFileList(entry) {
  const fileList = [];
  if (entry.isFile) {
    // 如果是文件，直接获取文件对象
    const file = await new Promise((resolve, reject) => {
      entry.file(resolve, reject);
    });
    fileList.push(file);
  } else if (entry.isDirectory) {
    // 如果是文件夹，读取其内容
    const dirReader = entry.createReader();
    const entries = await new Promise((resolve, reject) => {
      dirReader.readEntries(resolve, reject);
    });
    // 递归处理每个子条目
    for (const subEntry of entries) {
      const subFiles = await getFileList(subEntry); // 递归调用
      fileList.push(...subFiles); // 将子文件夹中的文件合并到 fileList
    }
  }
  return fileList;
}

// 处理拖放事件
async function onDrop(e) {
  e.preventDefault();
  const items = e.dataTransfer.items;
  const entries = [];
  // 获取所有拖放的条目
  for (let item of items) {
    const entry = item.webkitGetAsEntry();
    if (entry) {
      entries.push(entry);
    }
  }
  // 处理所有条目
  const promises = entries.map(async (entry) => {
    return await getFileList(entry);
  });
  const results = (await Promise.all(promises)).flat();
  fileList.push(...results);
  const temp = results.map(({name, size, type}) => ({name, size, type, status: '待上传'}));
  fileListData.push(...temp)
  // console.log(fileList);
}


// 文件选择
function onChange(e) {
  const {files} = e.target;
  const result = Array.from(files);
  fileList.push(...result)
  const temp = result.map(({name, size, type}) => ({name, size, type, status: '待上传'}));
  fileListData.push(...temp)
}

// 点击触发input的选择文件
function selectFile(flag) {
  inputRef.value[flag ? 'setAttribute' : 'removeAttribute']('webkitdirectory', '');
  inputRef.value.click();
}

// 删除要上传的文件
function delFile(index) {
  fileList.splice(index, 1);
  fileListData.splice(index, 1);
}


const limit = pLimit(props.maxConcurrency);

async function upload(index) {
  const file = fileList.at(index);
  const fileData = fileListData.at(index);
  fileData.status = '上传中';
  const formData = new FormData();
  formData.append('file', file);
  formData.append('name', file.name);
  const controller = new AbortController();
  file.controller = controller;
  const start = async () => {
    const response = await fetch('http://localhost:3000/upload', {
      method: 'POST',
      body: formData,
      headers: {
        'name': encodeURI(file.name),
      },
      signal: controller.signal,
    });
    const result = await response.json();
    fileData.status = '上传成功';
  }
  limit(start);
}

// 取消请求
function cancelUpload(index) {
  const file = fileList[index];
  file.controller?.abort("取消上传");
}


</script>

<style scoped lang="scss">
.zero-upload {
  height: 100px;
  background-color: white;
  min-width: 750px;

  .zero-upload-inner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    border: 1px solid var(--border-color);

    span {
      color: var(--font-color);
    }

    .zero-upload-input {
      width: 0;
      height: 0;
      display: none;
    }

    .content {
      .buttons {
        margin-top: 10px;
        display: flex;
        align-items: center;
        justify-content: space-around;
      }
    }

  }

  .zero-upload-file {
    border: 1px solid var(--border-color);
    border-bottom: none;
    border-top: none;
    font-size: 12px;

    .header {
      background-color: #fbfbfb;
    }

    .zero-upload-file-item {
      display: flex;
      border-bottom: 1px solid var(--border-color);

      .col {
        text-align: center;
        flex: 1;
        height: 40px;
        line-height: 40px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 0 5px;
      }
    }
  }
}
</style>