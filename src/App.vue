<template>
  <router-view/>
</template>

<script>
  export default {
    name: "Home",
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
