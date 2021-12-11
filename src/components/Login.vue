<template>
    <div class="login-wrapper">
        <div class="sign-in">
            <h1>Sign In</h1>
            <p>Sign in and start managing your candidates!</p>
        </div>
        <form class="login-user" @submit.prevent="Login()">
            <label for="email"></label>
            <input type="email" id="email" placeholder="Please enter your email" v-model="email">

            <label for="password"></label>
            <input type="password" id="password" placeholder="Please enter your password" v-model="password">

            <input class="login-btn" type="submit" value="Login">

            <router-link :to="{ name:'signUp'}">Sign Up</router-link>
        </form>
        <img src="../assets/bottomback.png" alt="">
    </div>
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
                        router.replace('/main-page')
                    }
                })
                .catch(err => console.log(err.message));
            }
        }
    }
</script>

<style scoped>
    .sign-in{
        text-align: center;
        margin-bottom: 36px;
    }
    h1{
        margin: 0;
        font-weight: normal;
        font-size: 64px;
        line-height: 80px;
        color: #fff;
        margin-bottom: 40px;
    }
    p{
        margin: 0;
        color: #fff;
    }
    .login-user{
        max-width: 347px;
        align-self: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-grow: 1;
    }
    .login-wrapper{
        background-color: #224957b0;
        display: flex;
        flex-direction: column;
        height: 625px;
    }
    img{
        align-items: flex-end;
    }
    #email{
        padding: 12px 18px;
        border-radius: 10px;
        background-color: #224957;
        color: #fff;
        outline: none;
        border: none;
        margin-bottom: 32px;
    }
    #email::placeholder{
        color: #fff;
    }
    #password::placeholder{
        color: #fff;
    }
    #password{
        background-color: #224957;
        padding: 12px 18px;
        border-radius: 10px;
        color: #fff;
        outline: none;
        border: none;
        margin-bottom: 23px;
    }
    .login-btn{
        background-color: #20DF7F;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        border: none;
        cursor: pointer;
        padding-top: 12px;
        padding-bottom: 12px;
        width: 100%;
    }
</style>