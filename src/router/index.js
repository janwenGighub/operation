import Vue from 'vue'
import Router from 'vue-router'

// import App from '@/App'
import GuideList from '../components/guide/GuideList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: GuideList }
  ]
})
