// 当前这个模块，是对所有的api进行统一管理

import requests from './request'

// 三级联动的接口
// 请求地址：/api/product/getBaseCategoryList
// 请求方式：GET
// 参数：无参数
// axios发请求返回结果Promise对象
export const reqCategoryList = () => requests.get('/product/getBaseCategoryList')
