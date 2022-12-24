import {
	createStore
} from "vuex"

export default createStore({
	// 需要存储的值都放在这里面
	state() {
		return {
			// 在视图中通过$store.state.count来获取
			navBarWidth: 200,
			// 屏幕是pc还是mb
			screen: 'pc',

		};
	},
	// 在其他视图中通过 $store.commit('setState', 10) 使用，用于修改stor存的值
	mutations: {
		// setState(state, count) { // 只能接受两个参数，用于修改store存的值
		// 	state.count = count;
		// },
		modifyNavBarWidth(state, width) {
			if (width > -1) {
				// console.log("store入参宽度：" + width)
				state.navBarWidth = width
			} else {
				console.log("请入参宽度")
			}
		},

		changeScreen(state, device) {

			if (device == 'pc' || device == 'mb') {
				state.screen = device
			}
		}


	},
	// 相当于组件的计算属性 通过 $store.getters.doubleCount 获取计算后的值
	getters: {
		doubleCount(state) {
			return state.count * 2;
		},
	},
	// 异步任务 不会改变state 通过 $store.dispath('doubleCount') 使用
	actions: {
		doubleCount(context) {
			context.commit("doubleCount");
		},
	},
	// store的下级store 方便大型项目复杂数据管理，这里面相当于可以在放置一个和外面这些一样的模块
	modules: {},

})
