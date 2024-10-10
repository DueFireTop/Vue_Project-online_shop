// 对于axios进行二次封装
import axios from "axios";

// 引入进度条 start: 进度条开始  done：进度条停止
import nProgress from "nprogress";
// 引入进度条样式
import "nprogress/nprogress.css";

// 利用axios对象的方法create，去创建一个axios实例
// requests就是axios，只不过稍微配置一下
const requests = axios.create({
  // 配置对象
  // 基础路径，发请求的时候，路径当中会出现api
  baseURL: "/mock",
  // 请求超时时间
  timeout: 5000,
});

// 请求拦截器：在发请求前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
requests.interceptors.request.use(
  (config) => {
    // config 配置对象，里面有一个属性很重要，headers请求头
    nProgress.start(); // 开始进度条
    return config;
  },
  (err) => {
    // 请求失败
    return err;
  }
);

// 响应拦截器
requests.interceptors.response.use(
  (res) => {
    // 成功的回调函数，服务器响应数据回来以后，响应拦截器可以检测到，可以做一些事情
    nProgress.done(); // 结束进度条
    return res.data;
  },
  (err) => {
    // 失败的回调函数
    return Promise.reject(new Error("fail"));
  } 
);

export default requests;