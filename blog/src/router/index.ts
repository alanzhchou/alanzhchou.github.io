import { createRouter, createWebHashHistory } from "vue-router";

const __homeRoutes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: 
    ([] as any)
    .concat(__homeRoutes)
})


export {
  router
}