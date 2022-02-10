<template>
  <div class="left-side">
    <UserInfo/>
    <div class="left-wrapper">
      <FilterFeatures/>
      <Roadmap/>
    </div>
  </div>
</template>

<script>
  import UserInfo from '../../components/left-features/UserInfo.vue'
  import FilterFeatures from '../../components/left-features/FilterFeatures.vue'
  import Roadmap from '../../components/left-features/Roadmap.vue'
  export default {
    name:'LeftSide',
    components:{
      UserInfo,
      FilterFeatures,
      Roadmap
    }
  }
</script>

<style scoped>
  .left-side{
    margin-right: 30px;
  }
  .left-wrapper{
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width:700px) and (min-width:591px) {
    .left-side{
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-right: 0;
    }
    .left-wrapper{
      display: flex;
      flex-direction: row;
    }
  }

  @media screen and (max-width:590px) {
    .left-side{
      display: block;
    }
    .left-wrapper{
      display: none;
      background-color: #F7F8FD;
      padding: 24px;
    }
  }
</style>
