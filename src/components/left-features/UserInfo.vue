<template>
    <div class="about-user">
        <div class="user-info">
            <h2 class="user-name">izzatillo</h2>
            <p class="user-board">user board</p>
        </div>
    </div>
</template>

<script>
    export default {
        name:"UserInfo",
    }
</script>

<style scoped>
    .about-user{
        background: radial-gradient(128.88% 128.88% at 103.9% -10.39%, #E84D70 0%, #A337F6 53.09%, #28A7ED 100%);
        border-radius: 10px;
        padding: 24px;
        padding-top: 100px;
        max-width: 255px;
    }
    .user-name{
        color: #fff;
        margin: 0;
    }
    .user-board{
        color: #fff;
        margin: 0;
    }

    @media screen and (max-width:700px) and (min-width:591px) {
        .about-user{
            width: 130px;
            margin-right: 10px;
        }
    }

    @media screen and (max-width:590px){
      .about-user{
        margin-right: 10px;
        max-width: 150px;
      }
    }
</style>