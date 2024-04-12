import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import { createMemoryHistory, createRouter } from 'vue-router'

// const routes = [{ path: '/', component: App }]
const routes = [{ path: '/:pathMatch(.*)*', component: App }]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fas, far)
dom.watch()

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
// createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
