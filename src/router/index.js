import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/HomeView.vue";
import Dashboard from "@/views/Dashboard.vue";
import Error from "@/views/Error.vue"
import Signup from "@/views/Signup.vue"
import Login from "@/views/Login.vue"
import Forgot from "@/views/Forgot.vue"
import Reset from "@/views/Reset.vue"
import ManagementPanel from "@/views/ManagementPanel.vue"


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
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
  {
    path: "/management",
    name: "Management",
    component: ManagementPanel,
  },
  

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
