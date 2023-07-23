import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/projecttracker',
    name: 'ProjectTracker',
    component: function () {
      return import('../views/ProjectTracker.vue')
    }
  },
  {
    path: '/about',
    name: 'About',
    component: function () {
      return import('../views/AboutView.vue')
    }
  },
  {
    path: '/blog/',
    name: 'Blog',
    component: function () {
      return import('../views/BlogsView.vue')
    }
  },
  {
    path: '/blog/:id',
    name: 'BlogPost',
    component: function () {
      return import('../components/SingleBlog.vue')
    }
  },
  {
    path: '/clients',
    name: 'Clients',
    component: function () {
      return import('../views/Clients.vue')
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: function () {
      return import('../views/Contact.vue')
    }
  },
  {
    path: '/service',
    name: 'Service',
    component: function () {
      return import('../views/Service.vue')
    }
  },
  {
    path: '/team',
    name: 'Team',
    component: function () {
      return import('../views/Team.vue')
    }
  },
  //Add Single Work Router
  {
    path: '/work/:id',
    name: 'SingleWork',
    component: function () {
      return import('../components/SingleWork.vue')
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,

  //I click link and goes single page, then back and navigate sme location
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
