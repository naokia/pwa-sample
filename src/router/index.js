import Vue from 'vue'
import Router from 'vue-router'
import TodoManagement from '@/components/TodoManagement'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Todo List',
      component: TodoManagement
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
