import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { //初期値
    count: 0,
    users: [
      {id: 1, name: 'otani', isVisible: true},
      {id: 2, name: 'darubishu', isVisible: false},
      {id: 3, name: 'nishikori', isVisible: true},
    ]
  },
  getters: {
    // visibleUsers(state) {
    //   return state.users.filter(user => user.isVisible)
    // }
    visibleUsers: state => state.users.filter(user => user.isVisible),

    getUserById: state => id => {
      return state.users.find(user => user.id === id)
    }
  },
  mutations: {
    increment( state ) {
      state.count++
    },
    addCount(state, payload) {  //第２引数はオブジェクト
      state.count += payload.value
    }
  },
  actions: {
    incrementAction({commit}) {
      commit('increment')
    },
    addCountAction({commit}, payload) {
      commit('addCount', payload)
    }
  },
  modules: {
    auth
  }
})
