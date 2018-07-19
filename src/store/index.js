import Vue from 'vue'
import Vuex from 'vuex'
// import * as firebase from 'firebase'
import authentication from './modules/authentication'
import manageMenuItems from './modules/manage-menu-items'
import manageHome from './modules/manage-home'

Vue.use(Vuex)
export const store = new Vuex.Store({
  state: {
    loading: false,
    error: null
  },
  getters: {
    loading (state) {
      return state.loading
    },
    error (state) {
      return state.error
    }
  },
  mutations: {
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
    }
  },
  actions: {},
  modules: {
    authentication,
    manageMenuItems,
    manageHome
  }
})
