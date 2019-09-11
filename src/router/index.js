import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/pages/login/Login'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      meta: {auth: true},
      component: HelloWorld
    },{
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/blog',
      name: 'Blog',
      meta: {auth: true},
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './../pages/blog/Blog.vue')
    }
  ]
})

// 守卫
router.beforeEach((to,from,next) => {
  console.log(to, from);
  next()
  if (to.meta.auth) { // 查看路由是否需要登录
    // 需要认证，则检查令牌
    next({
      path: '/login',
      query: {redirect: to.path}
    })
    // if (store.state.token) { // 已登录
    //   next();
    // } else {// 去登陆
    //   next({
    //     path: '/login',
    //     query: {redirect: to.path}
    //   })
    // }
  } else {
    next();
  }
})

export default router;
