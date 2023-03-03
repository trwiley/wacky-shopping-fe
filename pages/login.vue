<template>
    <div>
        <label for="username">Username</label>
        <input type="text" name="username" v-model="username"/>
        <br />
        <label for="password">Password</label>
        <input type="password" name="password" v-model="password"/>
        <button @click="login">Login</button>
    </div>
</template>

<script>
import authToken from '../api_interface/auth.js';

export default{
    name: 'login',
    auth: 'false',
    data(){
        return{
            username: '',
            password: '',
        }
    },
    methods: {
        async login() {
            await authToken(this.username, this.password); 
            await this.$router.push('/')
        }
    }
}
</script>