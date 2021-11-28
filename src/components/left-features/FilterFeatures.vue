<template>
  <div class="filter-wrapper" @click="filterFeedback">
    <button class="filter-btn active">All</button>
    <button class="filter-btn">Ui</button>
    <button class="filter-btn">Bug</button>
    <button class="filter-btn">UX</button>
    <button class="filter-btn">Inhenciment</button>
    <button class="filter-btn">Feature</button>
  </div>
</template>

<script>
export default {
  name: "FilterFeatures",
  methods:{
    filterFeedback(){
      document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function(){
          console.log(btn.innerHTML)
        })
      })
    }
  }
};
</script>

<style scoped>
    .filter-wrapper{
        padding: 24px;
        background-color: #fff;
        max-width: 180px;
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
    }
    .filter-btn:not(:last-child){
      margin-right: 8px;
    }
    .active{
      background-color: #4661E6;
    }
</style>
