<template>
    <div class="sign-up-user">
        <label for="user-name"></label>
        <input type="text" id="user-name" placeholder="Please enter your name...">

        <label for="age"></label>
        <input type="text" id="age" placeholder="Please enter your age...">

        <label for="email"></label>
        <input type="email" id="email" placeholder="Please enter your email...">

        <label for="password"></label>
        <input type="password" id="password" placeholder="Please enter your password...">
    </div>
</template>

<script>
    export default {
        name:'SignUp'
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