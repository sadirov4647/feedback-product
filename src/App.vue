<template>
  <div class="container">
    <Form/>
    <div class="home" v-if="isLoggedIn">
      <LeftSide class="left"/>
      <Main class="main"/>
    </div>
  </div>
  <router-view />
</template>

<script>
  import Main from './views/Main.vue'
  import LeftSide from './views/LeftSide.vue'
  import Form from './views/Form.vue'

  export default {
    name: "Home",
    components: {
      LeftSide,
      Main,
      Form
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
