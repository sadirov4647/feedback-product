<template>
  <div class="left-side">
    <UserInfo/>
    <FilterFeatures/>
    <Roadmap/>
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
  @media screen and (max-width:700px) {
    .left-side{
      display: flex;
      justify-content: center;
      margin-right: 0;
    }
  }

  @media screen and (max-width:590px) {
    .left-side{
      display: block;
    }
  }
</style>
