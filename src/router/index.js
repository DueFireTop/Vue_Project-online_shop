// 配置路由


// 引入路由
import Vue from 'vue';
import VueRouter from 'vue-router';

// 使用插件
Vue.use(VueRouter);

// 引入路由组件
import HomeIndex from '@/pages/Home'
import SearchIndex from '@/pages/Search'
import LoginIndex from '@/pages/Login'
import RegisterIndex from '@/pages/Register'

let orginPush = VueRouter.prototype.push; // 备份push方法
let orignReplace = VueRouter.prototype.replace; // 备份replace方法

// 重写 push | replace 方法
/**
 * 重写VueRouter的push方法，以确保每次路由跳转都能有成功的回调和失败的处理
 * 这对于优化用户体验和处理路由跳转中的异常非常有用
 * @param {*} location 要跳转的目标位置，可以是路径字符串或包含路径信息的对象
 * @param {*} resolve 成功跳转的回调函数，可选如果提供，则按原生push方法的方式处理
 * @param {*} reject 跳转失败的回调函数，可选如果提供，也是按原生push方法的方式处理
 */
VueRouter.prototype.push = function(location, resolve, reject) {
	// 判断是否有自定义的回调函数，如果有，则调用原生的push方法，并传入这些回调函数
	if (resolve && reject){
		orginPush.call(this, location, resolve, reject);
	} else {
		// 如果没有自定义的回调函数，仍然调用原生的push方法，但不传入任何回调函数
        // 这里使用空的箭头函数作为回调，以保持函数签名的一致性
		orginPush.call(this, location, () => {}, () => {});
	}
}
VueRouter.prototype.replace = function(location, resolve, reject) {
	if (resolve && reject){
		orignReplace.call(this, location, resolve, reject);
	} else {
		orignReplace.call(this, location, () => {}, () => {});
	}
}

// 配置路由
export default new VueRouter({
    // 配置路由
	routes: [
		{
			path: '/home',
			component: HomeIndex,
			meta: {
				isShowFooter: true
			}
		},
        {
			name: 'search',
			path: '/search:keyword?', // 使用字符串传递params参数，需要占位 :keyword
			// path: '/search', 
			component: SearchIndex,
			meta: {
				isShowFooter: true
			}
		},
        {
			path: '/login',
			component: LoginIndex,
			meta: {
				isShowFooter: false
			}
		},
        {
			path: '/register',
			component: RegisterIndex,
			meta: {
				isShowFooter: false
			}
		},
        // 重定向，当项目跑起来的时候，访问 / 时，直接定向到首页
        {
			path: '/',
			redirect: '/home',
		}
	],
}); 