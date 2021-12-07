<template>
    <div class="feedback-page__header">
        <router-link to="/">Go Back</router-link>
        <button class="edit-feedback">Edit Feedback</button>
    </div>

    <li class="feedback-list__item">
        <div class="like-point">
            <img
            src="../../../assets/uparrow.png"
            alt="like symbol"
            width="12"
            height="8"
            />
            <span class="like-count">112</span>
        </div>
        <div class="feedback-features">
            <h3 class="feedback-features__headline">{{ key  }}</h3>
            <p class="feedback-features__comment">{{ key }}</p>
            <span class="feedback-features__category">{{key}}</span>
        </div>
        <div class="feedback-comment">
            <span class="feedback-comment__count">2</span>
        </div>
    </li>

</template>

<script>
    export default {
        name:'FeedbackDetail',
        data(){
            return{
                key:this.$route.params.key
            }
        },
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
    .feedback-list__item {
        padding: 28px 32px;
        background-color: #fff;
        border-radius: 10px;
        display: flex;
    }
    .feedback-list__item:not(:last-child) {
        margin-bottom: 20px;
    }
    .like-point {
        background-color: #f2f4fe;
        border-radius: 10px;
        padding: 8px 9px;
        margin-right: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        align-self: flex-start;
        cursor: pointer;
    }
    .like-count {
        margin-top: 8px;
    }
    .feedback-features__headline {
        margin: 0;
        font-weight: bold;
        font-size: 18px;
        line-height: 26px;
        margin-bottom: 8px;
    }
    .feedback-features__comment {
        color: #647196;
        margin: 0;
        margin-bottom: 16px;
    }
    .feedback-features__category {
        color: #4661e6;
        padding: 6px 16px;
        background-color: #f2f4ff;
        border-radius: 10px;
        font-weight: 600;
        font-size: 13px;
        line-height: 19px;
    }
    .feedback-comment {
        margin-left: auto;
        display: flex;
        align-items: center;
    }
    .feedback-comment__count {
        display: flex;
        align-items: center;
    }
    .feedback-comment__count::before {
        content: "";
        background: url("../../../assets/comment.png");
        width: 18px;
        height: 16px;
        display: flex;
        margin-right: 8px;
    }
</style>