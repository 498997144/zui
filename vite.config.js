import {defineConfig, loadEnv} from 'vite';
import vue from '@vitejs/plugin-vue';
import {visualizer} from 'rollup-plugin-visualizer';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    visualizer({
      open: true, // 构建完成后自动打开浏览器显示分析结果
      gzipSize: true, // 显示 Gzip 压缩后的文件大小
      brotliSize: true, // 显示 Brotli 压缩后的文件大小
      filename: 'dist/stats.html', // 输出的分析文件路径
      template: 'sunburst', // 可视化模板：'sunburst', 'treemap', 'network'
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    lib: {
      // 入口文件
      entry: path.resolve(__dirname, 'src/index.js'),
      // 指定库的全局变量名（适用于 UMD 格式）
      name: 'zui',
      // 输出格式
      formats: ['es', 'umd', 'cjs'],
      // 指定输出文件的名称，可以根据格式动态生成不同的文件名。
      fileName: (format) => `zui.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],  // 不要打包外部依赖vue
      output: {
        globals: {
          vue: 'Vue'  // 将外部依赖 vue 映射到全局变量 Vue
        }
      }
    }
  },
});
