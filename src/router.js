import Vue from 'vue'
import Router from 'vue-router'
import managerdata from './views/managerdata.vue'
import login from './components/login'
import admindata from './views/admindata.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
            redirect: {
                name: "login"
    }
  },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/managerdata',
      name: 'managerdata',
      component: managerdata
      
    },
    {
      path: '/admindata',
      name: 'admindata',
      component: admindata
    }
    
  ]
})
