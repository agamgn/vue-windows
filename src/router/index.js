import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/login',
      name: 'login',
      component: ()=>import("@/views/login/login")
    },
    {
      path:"/windows",
      name:"windows",
      component:()=>import("@/views/windows/windows")
    },
    {
      path:"/chatmain",
      name:"chatmain",
      component:()=>import("@/components/software/aqq/views/main"),
      children:[
        {
          path:"/msglist",
          name:"msglist",
          component:()=>import("@/components/software/aqq/views/components/msglist")
        },
        {
          path:"/roomlist",
          name:"roomlist",
          component:()=>import("@/components/software/aqq/views/components/roomlist")
        },
        {
          path:"/persionlist",
          name:"persionlist",
          component:()=>import("@/components/software/aqq/views/components/persionlist")
        }
      ]
    },
    {
      path: "/chat",
      name: "chat",
      component: () => import("@/components/software/aqq/index")
    },
  ]
})
