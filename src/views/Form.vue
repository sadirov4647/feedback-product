<template>
    <form class="user-form">
            <router-link class="signIn" :to="{ name:'signIn'}">Sign In</router-link>
            <router-link :to="{ name:'signUp'}">Sign Up</router-link>
    </form>
</template>

<script>
    export default {
        name:'Form',
        components:{},
        methods:{

        }
    }
</script>

<style scoped>
    .user-form{
        display: flex;
        justify-content: center;
    }
    .signIn{
        margin-right: 25px;
    }
    a{
        text-decoration: none;
    }
</style>