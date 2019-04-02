<template>
    <div class="register">
        <h3>Sign up</h3>
        <input type="text" v-model="email" placeholder="Email" />
        <input type="password" v-model="password" placeholder="Password" />
        <button type="button" @click="register()">Sign up</button>
        <span>Or go to <router-link to="/login">Sign in</router-link></span>
        <div class="register__error">{{ message }}</div>
    </div>
</template>

<script>
    import store from './../store'

    export default {
        name: 'register',
        data() {
            return {
                email: '',
                password: '',
                message: ''
            }
        },
        methods: {
            register: function()
            {
                var self = this;

                store.dispatch('register', {email: this.email, password: this.password})
                    .then(function()
                    {
                        self.message = store.state.error;

                        if(self.message === '')
                        {
                            store.dispatch('login', {email: self.email, password: self.password})
                                .then(function() {
                                    self.message = store.state.error;
                                });
                        }
                    });
            }
        }
    }
</script>

<style lang="scss" scoped>
.register
{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 20px;
    width: 440px;
    border-radius: 5px;
    margin: 0 auto;
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

    span
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
