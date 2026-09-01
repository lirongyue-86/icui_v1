import { createRouter, createWebHistory } from 'vue-router'
import AnnouncementView from './components/AnnouncementView.vue'

const routes = [
  { path: '/', component: AnnouncementView },
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 }),
})
