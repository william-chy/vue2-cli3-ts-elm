import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

import TestRouteComponent from "./views/testRoute.vue";

Vue.use(Router);
const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/user/:id",
      component: TestRouteComponent,
      props: route => ({ query: route.query, id: route.params.id })
    }
  ]
});

router.beforeEach((to, from, next) => {
  // 	获取是否有token
  // const token = localStorage.getItem("myToken");
  if (to.path.includes("user")) {
    next();
  } else if (confirm("已经拦截了路由，是否放行？")) {
    next();
  } else {
    next("/user");
  }
});

export default router;
