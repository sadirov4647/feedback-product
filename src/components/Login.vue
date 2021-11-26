<template>
    <div class="login-user">
        <label for="email"></label>
        <input type="email" id="email" placeholder="Please enter your email" v-model="email">

        <label for="password"></label>
        <input type="password" id="password" placeholder="Please enter your password" v-model="password">

        <input type="submit" value="Login">

        <router-link :to="{ name:'signUp'}">Sign Up</router-link>
    </div>
</template>

<script>
    export default {
        name:'Login',
        data(){
            return{

            }
        },
        method:{}
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