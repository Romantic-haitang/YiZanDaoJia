//工程化

import  axios from 'axios';

const service = axios.create({ //设置全局配置
    // baseURL:'http://51zhaomen.com',//请求根目录
    timeout:10000 //请求超时时间
})

//配置请求拦截，响应拦截

axios.interceptors.request.use(function (config) {
    config.headers['Token'] = "123456abc"//获取token
    return  config;
},function (error) {
    //Do something with request error
    return Promise.reject(error);
});
axios.interceptors.response.use(function (response) {
    //code = 10010 余额不足
    return  response;
},function (error) {
    //Do something with request error
    return Promise.reject(error);
});

export  default  service