import { createRouter, createWebHistory } from 'vue-router'
import Impressum from '@/views/Impressum.vue'
import RamenReviews from '@/views/RamenReviews.vue'
import EventLayout from '@/views/ramen/Layout.vue'
import RamenDetails from '@/views/ramen/Details.vue'
import EventRegister from '@/views/ramen/Register.vue'
import EventEdit from '@/views/ramen/Edit.vue'
import NotFound from '@/views/NotFound.vue'
import NetworkError from '@/views/NetworkError.vue'

const routes = [
  {
    path: '/',
    name: 'RamenReviews',
    component: RamenReviews,
  },
  {
    path: '/redirectroutes/:id',
    name: 'EventLayout',
    props: true,
    component: EventLayout,
    children: [
      {
        path: '',
        name: 'RamenDetails',
        component: RamenDetails,
      },
      {
        path: 'register',
        name: 'EventRegister',
        component: EventRegister,
      },
      {
        path: 'edit',
        name: 'EventEdit',
        component: EventEdit,
      },
    ],
  },
  {
    path: '/event/:afterEvent(.*)',
    redirect: (to) => {
      return { path: '/ramen/' + to.params.afterEvent }
    },
  },
  {
    path: '/impressum-staff',
    name: 'Impressum',
    component: Impressum,
  },
  {
    path: '/impressum',
    redirect: { name: 'Impressum' },
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
  },
  {
    path: '/404/:resource',
    name: '404Resource',
    component: NotFound,
    props: true,
  },
  {
    path: '/network-error',
    name: 'NetworkError',
    component: NetworkError,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router
