import Vue from 'vue'
import Router from 'vue-router'

// import App from '@/App'

const GuideList = r => require.ensure([], () => r(require('../components/guide/GuideList')), 'guideList') // 分类指导列表
const DetailsList = r => require.ensure([], () => r(require('../components/guide/DetailsList')), 'detailsList') // 指导详情列表
const Content = r => require.ensure([], () => r(require('../components/guide/Content')), 'content') // 公共分类内容

const VideoList = r => require.ensure([], () => r(require('../components/video/VideoList')), 'videoList') // 视频公共列表组件

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/guideList'
  },
  {
    path: '/guideList',
    component: GuideList
  }, // 分类指导列表
  {
    path: '/detailsList',
    component: DetailsList
  }, // 指导详情列表
  {
    path: '/detailsList/content',
    component: Content
  }, // 公共分类内容
  {
    path: '/videoList',
    component: VideoList
  } // 视频公共列表组件
  ]
})
