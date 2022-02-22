import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import PrivacyList from '../views/privacyList.vue'
import PrivacyDetail from '../views/privacyDetail.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'PrivacyList',
    component: PrivacyList,
  },
  {
    path: '/privacyDetail/',
    name: 'PrivacyDetail',
    component: PrivacyDetail,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
