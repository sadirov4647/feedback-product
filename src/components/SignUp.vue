<template>
    <div class="sign-up">
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

            <router-link class="signIn" to="/signIn">Sign In</router-link>
        </form>
        <img src="../assets/bottomback.png" alt="background image">
    </div>

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
    .sign-up{
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #224957b0;
        height: 625px;
    }
    .sign-up-user{
        max-width: 347px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-top: 75px;
    }
    input{
        padding: 12px 18px;
        border: none;
        outline: none;
    }
    input{
        background-color: #224957;
        margin-bottom: 32px;
        border-radius: 10px;
    }
    input[type="submit"]{
        background-color: #20DF7F;
        cursor: pointer;
        color: #fff;
        width: 100%;
    }
    input[type="submit"]:hover{
        opacity: 0.8;
    }
    input::placeholder{
        color: #fff;
    }
    img{
        position: absolute;
        bottom: 0;
        width: 100%;
    }
</style>