import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase';
import router from './router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      payments: [],
      error: '',
      user: null,
      isAuthenticated: false
  },
    mutations: {
        setPayments(state, payload) {
            state.payments = payload;
        },
        setUser(state, payload) {
            state.user = payload;
        },
        setIsAuth(state, payload) {
            state.isAuthenticated = payload;
        },
        setLoginRegisterStatus(state, payload) {
            state.error = payload;
        }
    },
  actions: {
        login({ commit }, { email, password }) {
            firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then(user => {
                    commit('setUser', user);
                    commit('setIsAuth', true);
                    router.push('/payments');
                })
                .catch((error) => {
                    commit('setLoginRegisterStatus', error.message);
                    commit('setUser', null);
                    commit('setIsAuth', false);
                    router.push('/login');
                });
        },
        register({ commit }, { email, password }) {
            firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then(user => {
                    commit('setUser', user);
                    commit('setIsAuth', true);
                    router.push('/payments');
                })
                .catch((error) => {
                    commit('setLoginRegisterStatus', error.message);
                    commit('setUser', null);
                    commit('setIsAuth', false);
                    router.push('/register');
                });
        },
        logout({ commit }) {
            firebase
                .auth()
                .signOut()
                .then(() => {
                    commit('setUser', null);
                    commit('setIsAuth', false);
                    router.push('/login');
                })
                .catch(() => {
                    commit('setUser', null);
                    commit('setIsAuth', false);
                    router.push('/login');
                });
        },
        getPayments({ commit }) {
          return firebase
              .database()
              .ref()
              .once('value', snapshot => {

                  commit('setPayments', snapshot.val());
              });
        }
    },
    getters: {
        isAuth(state) {
            return state.user !== null && state.user !== undefined;
        }
    }
})
