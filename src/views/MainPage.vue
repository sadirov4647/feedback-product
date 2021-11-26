<template>
    <div v-if="isLoggedIn">
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

</style>