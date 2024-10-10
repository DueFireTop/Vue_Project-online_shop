// 引入mockjs模块
import Mock from 'mockjs';

// 把json数据格式引入【JSON数据没有对外暴露，但是可以引入】
// webpack 默认对外暴露的文件类型：图片、JSON数据格式、
import banner from './banners.json';
import floor from './floors.json';

// mock数据：第一个参数是模拟数据地址，第二个参数是模拟数据
Mock.mock('/mock/banners', {code: 200, data: banner}); // 模拟首页轮播数据
Mock.mock('/mock/floors', {code: 200, data: floor}); // 模拟首页楼层数据

