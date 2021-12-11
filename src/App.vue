<template>
  <div class="container">

  </div>
  <router-view/>
</template>

<script>
  export default {
    name: "Home",
    components:{

    }
  };
</script>

<style>
  body{
    width: 100%;
    height: 100%;
    background: #F2F2F2;
    font-size: 16px;
    line-height: 23px;
    color: #3A4374;
    margin: 0;
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
