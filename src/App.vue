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
    font-family: 'Jost', 'PT Sans Caption', 'Roboto', sans-serif;
    background: #F2F2F2;
    font-size: 16px;
    line-height: 23px;
    color: #3A4374;
    margin: 0;
  }
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px #373F68;
    -webkit-border-radius: 6px;
    border-radius: 6px;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    -webkit-border-radius: 6px;
    border-radius: 6px;
    background: #373F68;
    -webkit-box-shadow: inset 0 0 6px #373F68;
  }
  ::-webkit-scrollbar-thumb:window-inactive {
    background: #373F68;
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
