//axiosInstance.js
//导入axios
import axios from 'axios'

//使用axios下面的create([config])方法创建axios实例，其中config参数为axios最基本的配置信息。

// axios.defaults.baseURL = ''  //正式
axios.defaults.baseURL = '/api' //测试

//post请求头
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=UTF-8";
//允许跨域携带cookie信息
axios.defaults.withCredentials = true;
//设置超时
axios.defaults.timeout = 15000;



//导出我们建立的axios实例模块，ES6 export用法
export default axios
