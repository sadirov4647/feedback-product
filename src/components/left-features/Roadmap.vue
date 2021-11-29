<template>
    <div class="roadmap">
        <div class="roadmap-header">
            <h3>Roadmap</h3>
            <router-link to="view">View</router-link>
        </div>
        <ul class="roadmap-list">
            <li class="roadmap-list__item">
                <p class="roadmap-para">Planned</p>
                <span>2</span>
            </li>
            <li class="roadmap-list__item">
                <p class="roadmap-para">In-Progress</p>
                <span>3</span>
            </li>
            <li class="roadmap-list__item">
                <p class="roadmap-para">Live</p>
                <span>1</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:'Roadmap'
    }
</script>

<style  scoped>
    .roadmap{
        padding: 24px;
        background-color: #fff;
        border-radius: 10px;
        max-width: 255px;
    }
    h3{
        color: #3A4374;
        margin: 0;
    }
    .roadmap-header{
        margin-bottom: 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .roadmap-list{
        list-style-type: none;
        color: #647196;
        padding: 0;
        margin: 0;
    }
    .roadmap-list__item{
        display: flex;
        align-items: center;
    }
    .roadmap-list__item span{
        margin-left: auto;
    }
    .roadmap-para{
        margin: 0;
    }
    .roadmap-list__item::before{
        content: "";
        background: #F49F85;
        width: 8px;
        height: 8px;
        margin-right: 16px;
    }

    @media screen and (max-width:700px) and (min-width:591px) {
        .roadmap{
            width: 175px;
        }
    }
    @media screen and (max-width:590px){
      .roadmap{
        padding: 18px;
        widows: 150px;
        flex-grow: 1;
      }
    }
</style>