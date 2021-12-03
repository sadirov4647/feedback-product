<template>
    <form class="login-user" @submit.prevent="Login()">
        <label for="email"></label>
        <input type="email" id="email" placeholder="Please enter your email" v-model="email">

        <label for="password"></label>
        <input type="password" id="password" placeholder="Please enter your password" v-model="password">

        <input type="submit" value="Login">

        <router-link :to="{ name:'signUp'}">Sign Up</router-link>
    </form>
</template>

<script>
import { auth } from '../main'
import router from '../router'
    export default {
        name:'Login',
        data(){
            return{
                email:'',
                password:''
            }
        },
        methods:{
            Login(){
                auth.signInWithEmailAndPassword(this.email, this.password)
                .then(res => {
                    if(auth.currentUser){
                        console.log(res.user.displayName)
                        router.replace('/')
                    }
                })
                .catch(err => console.log(err.message));
            }
        }
    }
</script>

<style scoped>
    .login-user{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
</style>