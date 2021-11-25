<template>
  <div class="left-side">
    <UserInfo/>
  </div>
</template>

<script>
  import UserInfo from '../components/left-features/UserInfo.vue'
    export default {
      name:'LeftSide',
      components:{
        UserInfo,
      }
    }
</script>
