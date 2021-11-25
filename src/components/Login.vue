<template>
    <div class="login-user">
        <label for="email"></label>
        <input type="email" id="email" placeholder="Please enter your email" v-model="email">

        <label for="password"></label>
        <input type="password" id="password" placeholder="Please enter your password" v-model="password">

        <input type="submit" value="Login">
    </div>
</template>

<script>
    import firebase from 'firebase'
    export default {
        name:'Login',
        data(){
            return{
                email:'',
                password:''
            }
        },
        method:{
            Login(){
                firebase
                .auth().createUserWithEmailAndPassword(this.email, this.password)
                .then(this.$router.replace('/main'))
                .then(data => console.log(data))
                .catch(err => alert(err.message))
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