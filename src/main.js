// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'

import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'

Notification.requestPermission(function (status) {
  console.log('Notification permission status:', status)
})

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    add (state, todo) {
      state.todos.push(todo)
    },
    done (state, index) {
      state.todos[index].done = true
    }
  },
  getters: {
    notDones: state => {
      return state.todos
    },
    lastIndex: state => {
      return state.todos.length
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store
})

Vue.use(BootstrapVue)
