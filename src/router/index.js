import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/home'
import About from '@/components/pages/AboutUS'
import gallery from '@/components/pages/GalleryPage'
import Pricing from '@/components/pages/PricingPage'
import Games from '@/components/pages/GamesPage'
import Blog from '@/components/pages/Blog'
import Contact from '@/components/pages/Contact'

// import Test from '@/components/test'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: "active",
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/gallery',
      name: 'galley',
      component: gallery
    },
    {
      path: '/pricing',
      name: 'Pricing',
      component: Pricing
    },
    {
      path: '/games',
      name: 'Games',
      component: Games
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})
