<template>
  <div class="filter-wrapper" @click="filterFeedback">
    <button value="all" class="filter-btn active">All</button>
    <button value="ui" class="filter-btn">Ui</button>
    <button value="bug" class="filter-btn">Bug</button>
    <button value="ux" class="filter-btn">UX</button>
    <button value="enhancement" class="filter-btn">Enhancement</button>
    <button value="feature" class="filter-btn">Feature</button>
  </div>
</template>

<script>
export default {
  name: "FilterFeatures",
  methods:{
    filterFeedback(event){
      let ok = event.target
      if(ok.classList.contains('filter-btn')){
        console.log(ok.value)
      }
    }
  }
};
</script>

<style scoped>
    .filter-wrapper{
        padding: 24px;
        background-color: #fff;
        max-width: 255px;
        margin-top: 24px;
        margin-bottom: 24px;
        border-radius: 10px;
    }
    .filter-btn{
      padding: 6px 16px;
      background-color: #F2F4FF;
      border: none;
      border-radius: 10px;
      margin-bottom: 14px;
      cursor: pointer;
    }
    .filter-btn:hover{
      background-color: #CFD7FF;
    }
    .filter-btn:not(:last-child){
      margin-right: 8px;
    }
    .active{
      background-color: #4661E6;
    }

    @media screen and (max-width:700px) and (min-width:591px) {
      .filter-wrapper{
        margin: 0;
        max-width: 175px;
        margin-right: 10px;
      }
    }

    @media screen and (max-width:590px){
      .filter-wrapper{
        margin: 0;
        margin-right: 10px;
        padding: 18px;
        max-width: 150px;
      }
    }
</style>
