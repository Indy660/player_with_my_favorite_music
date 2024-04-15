import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
// import { createMemoryHistory, createWebHistory, createRouter } from 'vue-router'

// const routes = [
//   { path: '/', component: App },
//   { path: '/tab=*&track=*', component: App }
// ]
// const routes = [{ path: '/:pathMatch(.*)*', component: App }]
// const routes = [{ path: '/:pathMatch(.*)*', redirect: '/2' }]
// const routes = [{ path: '/:pathMatch(.*)*', redirect: import.meta.env.BASE_URL }]

// const router = createRouter({
//   history: createMemoryHistory(),
//   // history: createWebHistory(import.meta.env.BASE_URL),
//   routes
//   // mode: 'history'
// })

import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fas, far)
dom.watch()

// createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
