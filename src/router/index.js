import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/HomeView.vue";
import About from "@/views/AboutView.vue";
import Dashboard from "@/views/Dashboard.vue";
import Error from "@/views/Error.vue"
// import DashboardSelections from "../components/DashboardSelections.vue"
import DataCollection from "@/views/DataCollection.vue"
import Signup from "@/views/Signup.vue"
import Login from "@/views/Login.vue"
import Forgot from "@/views/Forgot.vue"
import Reset from "@/views/Reset.vue"


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/datacollection",
    name: "DataCollection",
    component: DataCollection,

  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/forgot",
    name: "Forgot",
    component: Forgot,
  },
  {
    path: "/reset",
    name: "Reset",
    component: Reset,
  },
  
  // {
  //   path: "/",
  //   // name: "Dashboard",
  //   // component: Dashboard,
  //   component:  () => import('@/Layout.vue'),
  //   children:[
  //     {
  //       path: "/",
  //       name: "Home",
  //       component: Home,
  //     },
  //     {
  //       path: "dashboard",
  //   name: "Dashboard",
  //   component: Dashboard,
  //   children: [
  //     {
  //       path: "selections",
  //       name: "DashboardSelections",
  //       component: DashboardSelections,
  //     },
  //   ]

  //     },
      
      

  //   ]
  //   // component:  () => import('../views/Dashboard.vue'),
  // },
  {
    path: '/:catchAll(.*)',
    name:'Error',
    component: Error
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
});

export default router;
// const routes = [
//   {
//     path: '',
//     component: () => import('@/App.vue'),
//     children: [
//       { path: '/home', component: () => import('../views/HomeView.vue') },
//       { path: '/dashboard', component: () => import('../views/Dashboard.vue') },
//     ]
//   },

//   // Always leave this as last one,
//   // but you can also remove it
//   // {
//   //   path: '*',
//   //   component: () => import('@/views/Error.vue')
//   // }
// ]





// export default routes
