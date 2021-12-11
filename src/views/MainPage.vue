<template>
    <div class="main-page__wrapper">
        <LeftSide/>
        <Main/>
    </div>
</template>

<script>
import LeftSide from '../components/main/LeftSide.vue'
import Main from '../components/main/Main.vue'
    export default {
        name:'MainPage',
        components:{
            LeftSide,
            Main
        }
    }
</script>

<style scoped>
    .main-page__wrapper{
        display: flex;
    }
</style>