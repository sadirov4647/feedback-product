<template>
    <div class="about-user">
        <div class="user-info">
            <h2 class="user-name">izzatillo</h2>
            <p class="user-board">user board</p>
        </div>
        <button class="mobile-btn">X</button>
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
        align-items: center;
    }
    .user-name{
        color: #fff;
        margin: 0;
    }
    .user-board{
        color: #fff;
        margin: 0;
    }
    .mobile-btn{
        cursor: pointer;
        border: none;
        padding: 12px;
        border-radius: 5px;
        display: none;
    }

    @media screen and (max-width:700px) and (min-width:591px) {
        .about-user{
            width: 130px;
            margin-right: 10px;
        }
    }

    @media screen and (max-width:590px){
        .about-user{
            width: 100%;
            position: fixed;
            display: flex;
            justify-content: space-around;
            padding-top: 20px;
            border-radius: 0;
        }
        .user-info{
            max-width: 100%;
        }
    }
</style>