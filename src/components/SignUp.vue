<template>
    <form class="sign-up-user" @submit.prevent="Login()">
        <label for="user-name"></label>
        <input type="text" id="user-name" placeholder="Please enter your name..." v-model="userName"  required>

        <label for="age"></label>
        <input type="text" id="age" placeholder="Please enter your age..." v-model="age" required>

        <label for="email"></label>
        <input type="email" id="email" placeholder="Please enter your email..." v-model="email" required>

        <label for="password"></label>
        <input type="password" id="password" placeholder="Please enter your password..." v-model="password"  required>

        <input type="submit" value="Login">

        <router-link class="signIn" :to="{ name:'signIn' }">Sign In</router-link>
    </form>
</template>

<script>
    import { auth } from '../main'
    export default {
        name:'SignUp',
        data(){
            return{
                email:"",
                password:"",
                age:"",
                userName:""
            }
        },
        methods:{
            Login(){
                auth.createUserWithEmailAndPassword(this.email, this.password, this.age, this.userName)
                .then(res => {
                    res.displayName = this.userName
                })
                .then(res => console.log(res))
                .catch(err => alert(err.message))
            }
        }
    }
</script>

<style scoped>
    .sign-up-user{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>