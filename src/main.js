import Vue from 'vue'
import firebase from 'firebase'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas);

Vue.component('font-awesome-icon', FontAwesomeIcon);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

firebase.initializeApp({
    apiKey: "AIzaSyCZSVpPWSg2OL30CUG2V2VMxCCxkQGPUlA",
    authDomain: "britecore-data-table-component.firebaseapp.com",
    databaseURL: "https://britecore-data-table-component.firebaseio.com",
    projectId: "britecore-data-table-component",
    storageBucket: "britecore-data-table-component.appspot.com",
    messagingSenderId: "972402410819"
});

let app = '';

firebase.auth().onAuthStateChanged(() => {
  if(!app)
  {
      app = new Vue({
          router,
          store,
          render: h => h(App)
      }).$mount('#app');
  }
});