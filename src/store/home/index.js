// home模块的小仓库
import {reqCategoryList, reqGetBannerList, reqGetFloorList} from '@/api'

const state = {
    // state中的数据默认初始值别瞎写，服务器返回的是对象，初始值就是对象，服务器返回的是数组，初始值就是数组
    // 根据接口的返回值进行初始化
    categoryList: [],
    bannerList: [],
    floorList: []
};
const actions = {
    // 通过api里面的接口调用，向服务器发请求，获取服务器的数组
    async categoryList({commit}){
        let result =  await reqCategoryList();
        if(result.code === 200){
            commit('CATEGORY_LIST', result.data)
        }
    },
    // 获取首页轮播图的数据
    async getBannerList ({commit}) {
        console.log('getBannerList 获取服务器数据')
        let result = await reqGetBannerList();
        if (result.code == 200) {
            commit('GET_BANNER_LIST', result.data)
        }
    },
    // 获取首页floor的数据
    async getFloorList ({commit}) {
        let result = await reqGetFloorList();
        console.log('getFloorList 获取服务器数据', result)
        if (result.code == 200) {
            commit('GET_FLOOR_LIST', result.data)
        }
    }
};
const mutations = {
    /**
     * 
     * @param {*} state 状态对象，用于存储分类列表
     * @param {*} data 要更新的分类数据数组
     */
    CATEGORY_LIST(state, data){
        state.categoryList = data
    },

    /**
     * 
     * @param {*} state 状态对象，用于存储轮播图列表
     * @param {*} data 要更新的轮播图数据数组
     */
    GET_BANNER_LIST(state, data){
        console.log('GET_BANNER_LIST 修改仓库中数据');
        state.bannerList = data
    },
    /**
     * 
     * @param {*} state 状态对象，用于存储floor数据列表
     * @param {*} data 要更新的floor数据数组
     */
    GET_FLOOR_LIST(state, data){
        state.floorList = data
    }
};
const getters = {};

export default { state, actions, mutations, getters };