## Vue.config.js
Vue 项目中 vue.config.js 文件就等同于 webpack 的 webpack.config.js
vue-cli3 之后创建的时候并不会自动创建 vue.config.js，因为这个是个可选项，所以一般都是需要修改 webpack 的时候才会自己创建一个 vue.config.js
vue.config.js 是一个可选的配置文件，如果项目的 (和 package.json 同级的) 根目录中存在这个文件，那么它会被 @vue/cli-service 自动加载。你也可以使用 package.json 中的 vue 字段，但是注意这种写法需要你严格遵照 JSON 的格式来写。

Vue CLI默认入口为src/main.js，而Vite的默认入口则是index.html


vue3+vite+ts配置，参考
// https://vitejs.dev/config/

````javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path, { resolve } from 'path'
import viteSvgIcons from 'vite-plugin-svg-icons'
export default defineConfig({
  base: '/scw_smart3d_net/',
  plugins: [
    vue(),
    viteSvgIcons({
      iconDirs: [path.resolve(process.cwd(), 'src/icons/svg/')]
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
      // '@/components': resolve(__dirname, 'src/components')
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.scss']
  },
  server: {
    host: '0.0.0.0',
    // 服务器端口号
    port: 8081,
    proxy: {
      '/proxy': {
        target: 'http://61.183.76.122:9017/',
        ws: true,
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/proxy/, ''),
      },
      '/test': {
        target: 'http://terrain.gbim360.com/',
        ws: true,
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/test/, ''),
      },
    },
  },
  build: {
    assetsDir: 'assets',
    outDir: 'dist/scw_smart3d_net',
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output:{
          manualChunks(id) {
            if (id.includes('node_modules')) {
                return id.toString().split('node_modules/')[1].split('/')[0].toString();
            }
        }
      }
  }

  },
  css: {
    preprocessorOptions: {
      javascriptEnabled: true,
      //引入scss全局预定义变量
      scss: {
        // additionalData:';@import "./src/styles/variables-chart.scss";@import "./src/styles/index.scss";'
      }
    }
  }
})
````
### 配置代码规范eslint

这里注意eslint配置的规则要和prettierrc一致。否者可能会出现诸如，一个字符串味单引号一个为双引号一下报错来回提示，运行不正常的问题。


参考：
<https://blog.csdn.net/qq_40323256/article/details/101867706> 
<https://blog.csdn.net/zz00008888/article/details/109536466> 
<https://cloud.tencent.com/developer/article/1819625>
<https://cli.vuejs.org/zh/config/#vue-config-js> 
