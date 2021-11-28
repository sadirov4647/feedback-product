<template>
  <div class="left-side">
    <UserInfo/>
    <FilterFeatures/>
  </div>
</template>

<script>
import UserInfo from '../../components/left-features/UserInfo.vue'
import FilterFeatures from '../../components/left-features/FilterFeatures.vue'
    export default {
      name:'LeftSide',
      components:{
        UserInfo,
        FilterFeatures
      }
    }
</script>

<style scoped>

</style>
