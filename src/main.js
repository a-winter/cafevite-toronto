// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'
import { store } from './store'
import * as firebase from 'firebase'

Vue.use(Vuetify, {
  theme: {
    primary: colors.indigo.darken2,
    secondary: colors.green.lighten1,
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
    alternative: '#202124'
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    firebase.initializeApp({
      //sensitive data
    })
    firebase.auth().onAuthStateChanged(
      user => {
        if (user) {
          this.$store.dispatch('autoSignIn', user)
        }
      }
    )
    this.$store.dispatch('loadMenuItems')
    this.$store.dispatch('loadSectionMenu')
    this.$store.dispatch('loadSectionOurPlace')
    this.$store.dispatch('loadSectionTagItems')
  }
})
