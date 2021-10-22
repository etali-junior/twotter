import { createRouter, createWebHistory } from 'vue-router'
import store from '../store';
import { users } from "../assets/users"
import Home from '../views/Home.vue';
import UserProfile from '../views/UserProfile';
import Admin from '../views/Admin.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user/:userId',
    name: 'UserProfile',
    component: UserProfile
  }, 
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta:{
      requiresAdmin: true
    },
  }
]

const router = createRouter({
  history: createWebHistory(), // pour enlever dans l'url sur la barre d'adresse
  routes
})

//ce code sera executer avant un changement de route sur l'application
router.beforeEach(async (to, from, next) => {
  const user = store.state.User.user;

  if(!user){
    await store.dispatch('User/setUser', users[0]) //dispatch is use to run actions
   }

  const isAdmin = false;
  const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin);

  if(requiresAdmin && !isAdmin) next({ name: 'Home' });
  else next();
})

export default router
