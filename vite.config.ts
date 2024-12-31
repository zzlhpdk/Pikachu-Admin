import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path'; //path模块是node.js内置的功能，但是node.js本身并不支持ts,解决方案：安装@types/node
import { viteMockServe } from 'vite-plugin-mock'; //mock数据

export default defineConfig(command => {
  console.log(22222222);
  console.log(command);

  return {
    plugins: [
      react(),
      viteMockServe({
        // ↓解析根目录下的mock文件夹
        mockPath: 'src/mock',
        enable: command.mode === '1' ? true : true
      })
    ],
    resolve: {
      //路径别名
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    base: '/',
    //跨域
    // server: {
    //   proxy: {
    //     // 选项写法
    //     '/api': {
    //       target:
    //         'https://129.204.116.48/mock/36e847df431ec13db84c230a454ae7dc/api', //代理目标地址
    //       changeOrigin: true, //兼容基于名字的虚拟主机，代理服务会把orign修改为目标地址
    //       //路径重写，把api 替换成空
    //       rewrite: path => path.replace(/^\/api/, '')
    //     }
    //   }
    // },
    // 样式
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            'primary-color': '#5C91FB'
          },
          javascriptEnabled: true
        }
      }
    },
    build: {
      outDir: 'dist',
      sourcemap: false,
      chunkSizeWarningLimit: 1500
    }
  };
});
