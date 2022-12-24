import {
	defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	base: "./",
	plugins: [vue()],
	server: {
		host: '0.0.0.0',
		proxy: { // 本地开发环境通过代理实现跨域，生产环境使用 nginx 转发
			// 正则表达式写法
			'/api': {
				target: 'http://8.141.53.169:83/', //请求对象
				ws: true, //代理websocked
				changeOrigin: true,
				secure: false, //target是否为https接口
				rewrite: (path) => path.replace(/^\/api/, ""),
			}
		},
	},
	css: {
		postcss: {
			plugins: [{
				postcssPlugin: 'internal:charset-removal',
				AtRule: {
					charset: (atRule) => {
						if (atRule.name === 'charset') {
							atRule.remove();
						}
					}
				}
			}],
		}
	},
})
