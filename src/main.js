import {
	createApp
} from 'vue'

import App from './App.vue'

import router from './router'
import store from './store'

//引入element ui

import ElementPlus from 'element-plus'

import 'element-plus/dist/index.css'
//全局引入加载动画
import {
	ElLoading,

} from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
//配置element后需要重启项目


// 引入阿里云字体图标css
import './assets/iconfont/iconfont.css'

import axios from './axios/axios.js';
// ajax.baseURL = 'https://www.lznsyh.com.cn/';
// ajax.scriptType = 'php';

const app = createApp(App);


app.config.globalProperties.$Axios = axios;
//公用api（挂载到服务器的静态文件使用，比如图片视频等等）；第三方富文本编辑器的表情图片使用，
// app.config.globalProperties.$api = ajax.baseURL;
//设置公司id

// 

app.use(router).use(store).use(ElementPlus, {
	locale: zhCn
}).mount('#app')
