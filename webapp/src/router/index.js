import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Head from '@/components/head/Head'
import Home from '@/components/home/Home'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta:{
        title: '启动页',
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta:{
        title: '首页',
      }
    }
  ]
})
