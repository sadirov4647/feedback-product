<template>
  <div class="container">
    <div class="home" v-if="isLoggedIn">
      <MainPage/>
    </div>
  </div>
  <router-view />
</template>

<script>
  import MainPage from './views/MainPage.vue'
  export default {
    name: "Home",
    components: {
      MainPage
    },
  };
</script>

<style>
  body{
    background: #F2F2F2;
  }
  .container{
    max-width: 1150;
    padding-left: 20px;
    padding-right: 20px;
    margin-left: auto;
    margin-right: auto;
  }
  .home{
    display: flex;
  }
  .left{
    margin-right: 30px;
  }
</style>
