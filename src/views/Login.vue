<template>
    <div class="login">
        <h3>Sign in</h3>
        <input type="text" v-model="email" placeholder="Email" />
        <input type="password" v-model="password" placeholder="Password" />
        <button type="button" @click="login()">Sign in</button>
        <div class="login__new-account">You don't have an account. Go to <router-link to="/register">Sign up</router-link></div>
        <div class="login__error">{{ message }}</div>
    </div>
</template>

<script>
import store from './../store'

export default {
    name: 'login',
    data() {
      return {
          email: '',
          password: '',
          message: ''
      }
    },
    methods: {
        login: function()
        {
            var self = this;

            store.dispatch('login', {email: this.email, password: this.password})
                .then(function() {
                    self.message = store.state.error;
                });
        }
    }
}
</script>

<style lang="scss" scoped>
.login
{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 20px;
    width: 440px;
    margin: 0 auto;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);

    input
    {
        padding: 10px 15px;
        flex-grow: 2;
        display: block;
        color: #5c7698;
        border-radius: 3px;
        border: 1px solid #e0e5ec;
        margin-bottom: 10px;
    }

    button[type=button]
    {
        padding: 15px;
        cursor: pointer;
        box-shadow: none;
        border: 1px solid #e0e5ec;
    }

    &__new-account
    {
        font-size: 12px;
        margin-top: 5px;
    }

    &__error
    {
        font-size: 12px;
        margin-top: 10px;
        color: crimson;
        font-weight: bold;
    }
}
</style>
