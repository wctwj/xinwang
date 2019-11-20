import Vue from 'vue'
import Vuex from 'vuex'
import { getItem, setItem } from '@/utils/storage'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 存储用户相关信息（包括 token）
    user: getItem('user')
    // user: null
  },
  mutations: {
    // 参数1：默认参数 state
    // 参数2：自定义参数
    setUser (state, user) {
      state.user = user

      // 把数据备份到本地存储防止页面刷新丢失
      setItem('user', user)
    }
  },
  actions: {

  }
})
