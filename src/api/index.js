// 当前这个模块，是对所有的api进行统一管理

import requests from './request'
import mockRequests from './mockRequest'

// 三级联动的接口
// 请求地址：/api/product/getBaseCategoryList
// 请求方式：GET
// 参数：无参数
// axios发请求返回结果Promise对象
export const reqCategoryList = () => requests.get('/product/getBaseCategoryList')

// 获取banner（首页轮播图接口）
export const reqGetBannerList = () => mockRequests.get('/banners') // 要注意路径写对
// 获取floor数据
export const reqGetFloorList = () => mockRequests.get('/floors')