````javascript
import { ConfigEnv, loadEnv, UserConfigExport } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { minifyHtml, injectHtml } from 'vite-plugin-html';
import externalGlobals from 'rollup-plugin-external-globals';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { visualizer } from 'rollup-plugin-visualizer';
import { projRoot, appOutput, appRoot } from '../build/paths';
import vitePluginCopy from '../build/vite-plugin-copy';
import { SmartUIResolver } from '@smart/unplugin-vue-resolvers';

// const assetsDest = process.env.NODE_ENV === 'production' ? path.resolve(appOutput, 'assets') : path.resolve(appRoot, 'assets')
const baseConfig = ({ mode }: ConfigEnv): UserConfigExport => {
  const env = loadEnv(mode, 'environments');

  return {
    base: './',

    envDir: 'environments',

    resolve: {
      alias: [
        {
          find: '@',
          replacement: path.resolve(appRoot, 'src'),
        },
        {
          find: /^(smart3d-vue)/,
          replacement: path.resolve(projRoot, 'components'),
        },
      ],
    },

    server: {
      host: true,
      port: 8031,
      fs: {
        strict: true,
        allow: [projRoot],
      },
      proxy: {
        '/api': {
          target: env.VITE_API_BASE_URL,
          ws: true,
          changeOrigin: true,
          rewrite: (path: string) => path.replace(/^\/api/, ''),
        },
        '/tmsapi': {
          target: 'http://172.16.11.33:8499/dxresource/yx/DXTMS',
          changeOrigin: true,
          rewrite: (path: string) => path.replace(/^\/tmsapi/, ''),
        },
        '/webSocketApi': {
          target: 'ws://',
          changeOrigin: true,
          rewrite: (path: string) => path.replace(/^\/webSocketApi/, ''),
        },
        '/videoApi': {
          target: 'http://127.0.0.1:5500/demo/videoH5.html',
          changeOrigin: true,
          rewrite: (path: string) => path.replace(/^\/videoApi/, ''),
        },
        '/imageApi': {
          target: 'http://www.southsmart.com/dxnew/iScene',
          changeOrigin: true,
          rewrite: (path: string) => path.replace(/^\/imageApi/, ''),
        },
      },
    },

    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/styles/element-variables" as *;`,
        },
      },
    },

    plugins: [
      vue(),
      Components({
        resolvers: [
          SmartUIResolver({
            importStyle: 'sass',
          }),
          ElementPlusResolver({
            importStyle: 'sass',
          }),
        ],
      }),
      vitePluginCopy([
        {
          src: '../node_modules/@smart/cesium/Build/Cesium/*',
          // target: [path.resolve(appOutput, 'assets/Cesium'), path.resolve(appRoot, 'assets/Cesium')],
          target: path.resolve(appRoot, 'public/assets/Cesium'),
        },
        {
          src: '../node_modules/smart3d/dist/*',
          // target: [path.resolve(appOutput, 'assets'), path.resolve(appRoot, 'assets')],
          target: path.resolve(appRoot, 'public/assets'),
        },
        {
          src: '../node_modules/@turf/turf/turf.min.js',
          target: path.resolve(appRoot, 'public/assets/turf'),
        },
      ]),
      visualizer() as any,
      injectHtml({
        data: {
          injectScript:
            mode !== 'development'
              ? '<script src="./assets/Cesium/Cesium.js"></script>\n<script src="./assets/turf/turf.min.js"></script>\n<script src="./assets/smart3d/smart3d.min.js"></script>\n<script src="./assets/web3d.browser.min.js"></script>'
              : '<script>window.SMART3D_GLOBAL_CONFIG = { SMART3D_BASE_URL:"./assets/smart3d/" };\nwindow.CESIUM_BASE_URL = "./assets/Cesium/";</script>\n<script src="./assets/web3d.browser.js"></script>',
        },
      }),
    ],

    esbuild: {
      banner: '/* copyright 3d.southsmart.com */',
    },

    build: {
      outDir: appOutput,
      emptyOutDir: true,
      minify: 'terser',
      rollupOptions: {
        plugins: [
          externalGlobals({
            '@smart/cesium': 'Cesium',
            smart3d: 'smart3d',
            '@turf/turf': 'turf',
          }),
        ],
        output: {
          manualChunks(id) {
            if (id.includes('element-plus')) return 'element-plus';
            if (id.includes('smart-ui')) return 'smart-ui';
            if (id.includes('echarts')) return 'echarts';
            if (id.includes('evn.config.ts')) return 'app-config';
            if (id.includes('three')) return 'three';
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
        },
      },
      terserOptions: {
        compress: {
          drop_console: false,
          drop_debugger: true,
          pure_funcs: ['console.log'],
        },
        output: {
          comments: true,
        },
      },
    },
  };
};

export default baseConfig;

````
## rollup???manualChunks
````javascript
build: {
    assetsDir: 'assets',
    outDir: 'dist',

    //rollupOptions:????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
    rollupOptions: {
      output: {
        manualChunks(id) { //id?????????????????????
          //????????????
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    }
  }
  ````

  ### rollup
  Rollup ????????? JavaScript ????????????????????????????????????????????????????????????????????????
  
  webpack????????????????????????????????????????????????
  rollup?????????????????????JS??????
  vue??????rollup??????????????????
  