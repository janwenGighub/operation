import Vue from 'vue'
import Router from 'vue-router'

// import App from '@/App'
import GuideList from '../components/guide/GuideList.vue' // 分类指导列表
import DetailsList from '../components/guide/DetailsList.vue' // 指导详情列表

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: GuideList }, // 分类指导列表
    { path: '/detailsList', component: DetailsList } // 指导详情列表
  ]
})
