<template>
  <div class="main-side">
    <MainHeader/>
  </div>
</template>

<script>
import MainHeader from '../../components/main-features/MainHeader.vue'
export default {
  name: "Main",
  components: {
    MainHeader
  },
};
</script>

<style>
  .main-side{
    flex-grow: 1;
  }
</style>
