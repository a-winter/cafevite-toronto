import * as firebase from 'firebase'

const state = {
  user: null
}

const getters = {
  user (state) {
    return state.user
  }
}

const mutations = {
  setUser (state, payload) {
    state.user = payload
  }
}

const actions = {
  signUserUp ({commit}, payload) {
    commit('setLoading', true)
    commit('clearError')
    firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(
        user => {
          commit('setLoading', false)
          const newUser = {
            id: user.uid
          }
          commit('setUser', newUser)
        }
      )
      .catch(
        error => {
          commit('setLoading', false)
          commit('setError', error)
          console.log(error)
        }
      )
  },
  signUserIn ({commit}, payload) {
    commit('setLoading', true)
    commit('clearError')
    firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(
        user => {
          commit('setLoading', false)
          const newUser = {
            id: user.uid
          }
          commit('setUser', newUser)
        }
      )
      .catch(
        error => {
          commit('setLoading', false)
          commit('setError', error)
          console.log(error)
        }
      )
  },
  signUserOut ({commit}) {
    firebase.auth().signOut()
    commit('setUser', null)
  },
  autoSignIn ({commit}, payload) {
    commit('setUser', {id: payload.uid})
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
