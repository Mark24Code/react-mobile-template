import { lazy } from 'react'

const routes = [
  {
    path: '/demo',
    component: lazy(() => import('./pages/demo'))
  },
  {
    path: '/',
    component: lazy(() => import('./pages/home'))
  },
  {
    path: '/network-error',
    component: lazy(() => import('./comps/network-error'))
  },
  {
    path: '*',
    component: lazy(() => import('./pages/not-found'))
  }
]

if (process.env.NODE_ENV === 'development') {
  routes.unshift({
    path: '/routes-list',

    component: lazy(() => import('./pages/routes-list'))
  })
}

export default routes
