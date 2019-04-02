import Vue from 'vue'
import firebase from 'firebase'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Payments from './views/Payments.vue'

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '*',
            redirect: '/payments',
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
        {
            path: '/payments',
            name: 'Payments',
            component: Payments,
            meta: {
                requireAuth: true
            }
        }
    ]
});

router.beforeEach((to, from, next) => {
   const user = firebase.auth().currentUser;
   const requireAuth = to.matched.some(record => record.meta.requireAuth);

   if(requireAuth && !user)
   {
       next('login');
   }
   else if(!requireAuth && user)
   {
       next('payments');
   }
   else
   {
       next();
   }
});

export default router;

