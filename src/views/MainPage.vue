<template>
    <div class="container">
        <div class="main-page__wrapper">
            <LeftSide />
            <Main />
        </div>
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
    .container{
        max-width: 1150;
        padding-left: 20px;
        padding-right: 20px;
        margin-left: auto;
        margin-right: auto;
    }

    @media only screen and (max-width:700px){
        .main-page__wrapper{
            flex-direction: column;
        }
    }
</style>