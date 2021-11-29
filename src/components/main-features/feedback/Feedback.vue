<template>
    <div class="feedback-page__header">
        <router-link to="/">Go Back</router-link>
        <button class="edit-feedback">Edit Feedback</button>
    </div>

</template>

<script>
    export default {
        name:'Feedback'
    }
</script>

<style scoped>
.feedback-page__header{
    margin-bottom: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.edit-feedback{
    background-color: #4661E6;
    border: none;
    border-radius: 10px;
    color: #fff;
    padding: 12px 25px;
}
    a::before{
        content: "";
        background: url('../../../assets/arrow.png');
    }
</style>