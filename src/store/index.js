import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

// Vuex 的状态存储是响应式的

// 创建一个Vuex.Store的实例
/*const store = new Vuex.Store({

  // 存储状态
  state: {
    count: 0
  },

  // mutation中最多有两个参数，第一个参数为state，要传多个参数，可传递一个对象
  mutations: {
    // 类型为 increment 的 mutation
    increment (state) {
      // 变更状态
      state.count++;
    },
    // 类型为 reduce 的 mutation
    reduce (state, n) {
      // 变更状态
      state.count -= n;
    },
    // 类型为 change 的 mutation,第二个参数为一个对象
    change (state, payload) {
      // 变更状态
      state.count = state.count + payload.a + payload.b;
    }
  }
});*/

// 创建一个Vuex.Store的实例
const store = new Vuex.Store({

  state: {
    count: 0
  },

  mutations: {
    increment (state) {
      state.count++;
    }
  },

  // 异步变更状态，Action 提交的也是 mutation
  // Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象
  // Action调用 context.commit 提交一个 mutation
  // Action通过 context.state 和 context.getters 获取 state 和 getters。
  actions: {
    increment (context) {
      context.commit('increment');
    }
  }
});

export default store;
