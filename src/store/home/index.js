// home模块的小仓库
import {reqCategoryList} from '@/api'

const state = {
    // state中的数据默认初始值别瞎写，服务器返回的是对象，初始值就是对象，服务器返回的是数组，初始值就是数组
    // 根据接口的返回值进行初始化
    categoryList: []
};
const actions = {
    // 通过api里面的接口调用，向服务器发请求，获取服务器的数组
    async categoryList({commit}){
        let result =  await reqCategoryList();
        console.log('result: ', result);
        if(result.code === 200){
            commit('CATEGORYLIST', result.data)
        }
    }
};
const mutations = {
    CATEGORYLIST(state, data){
        state.categoryList = data
    }
};
const getters = {};

export default { state, actions, mutations, getters };