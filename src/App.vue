<template>
  <div class="container">
    <div class="home">
      <LeftSide/>
      <Main/>
    </div>
  </div>
  <router-view />
</template>

<script>
  import LeftSide from './views/main/LeftSide.vue'
  import Main from './views/main/Main.vue'
  export default {
    name: "Home",
    components: {
      LeftSide,
      Main
    },
    data(){
      return{
        isLoggedIn:false
      }
    }
  };
</script>

<style>
  body{
    background: #F2F2F2;
    font-size: 16px;
    line-height: 23px;
    color: #3A4374;
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


  @media only screen and (max-width:700px){
    .home{
      flex-direction: column;
    }
  }
</style>
