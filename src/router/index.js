import Vue from 'vue'
import VueRouter from 'vue-router'

// const Login = () => import('@/views/login')
const Tabbar = () => import('@/views/tabbar')
const Home = () => import('@/views/home')
const Search = () => import('@/views/search')
const SearchResult = () => import('@/views/search-result')
const Article = () => import('@/views/article')
const My = () => import('@/views/my')
const User = () => import('@/views/user')
const Chat = () => import('@/views/chat')

// import Login from '@/views/login'
// import Tabbar from '@/views/tabbar'
// import Home from '@/views/home'
// import Search from '@/views/search'
// import SearchResult from '@/views/search-result'
// import Article from '@/views/article'
// import My from '@/views/my'
// import User from '@/views/user'
// import Chat from '@/views/chat'

Vue.use(VueRouter)

const router = new VueRouter({
  // 配置路由表
  routes: [
    {
      name: 'login',
      path: '/login',
      component: () => import('@/views/login')
    },
    {
      name: 'search',
      path: '/search',
      component: Search
    },
    {
      name: 'search-result',
      path: '/search/:q',
      component: SearchResult
    },
    {
      name: 'article',
      path: '/article/:articleId',
      component: Article
    },
    {
      name: 'user',
      path: '/user',
      component: User
    },
    {
      name: 'chat',
      path: '/chat',
      component: Chat
    },
    {
      path: '/',
      component: Tabbar,
      children: [
        {
          name: 'home',
          path: '', // 默认子路由
          component: Home
        },
        {
          name: 'my',
          path: '/my', // 默认子路由
          component: My
        }
      ]
    }
  ]
})

export default router
