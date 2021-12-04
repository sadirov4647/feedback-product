<template>
    <ul class="all-feedback__list">
        <li
        class="feedback-list__item"
        v-for="(feedback, key) in feedbacks"
        :key="key"
        >
            <div class="like-point">
                <img src="../../../assets/uparrow.png" alt="like symbol" width="12" height="8">
                <span class="like-count">112</span>
            </div>
        <router-link to="/">
            <div class="feedback-features">
                <h3 class="feedback-features__headline">{{ feedback.headline}}</h3>
                <p class="feedback-features__comment">{{ feedback.comment }}</p>
                <span class="feedback-features__category">{{ feedback.category }}</span>
            </div>
        </router-link>
            <div class="feedback-comment">
                <span class="feedback-comment__count">2</span>
            </div>
        </li>
    </ul>
</template>

<script>
import { db } from '../../../main'
    export default {
        name:'Feedbacks',
        data(){
            return{
                feedbacks:[]
            }
        },
       async created(){
           var feddbackRef = db.ref('/users')
           feddbackRef.once('value', function(snapshot){
            var feedbackss = []

            snapshot.forEach(function(childSnapshot){
                var key = childSnapshot.key;
                var data = childSnapshot.val();


                feedbackss.push({ key:key, headline:data.headline, category:data.category, comment:data.comment})
                console.log(feedbackss)
            });
        });
        this.feedbacks = feedbackss
    }
    }
</script>

<style scoped>
    .all-feedback__list{
        list-style-type: none;
        padding: 0;
        margin: 0;
    }
    .feedback-list__item{
        padding: 28px 32px;
        background-color: #fff;
        border-radius: 10px;
        display: flex;
    }
    .feedback-list__item:not(:last-child){
        margin-bottom: 20px;
    }
    .like-point{
        background-color: #F2F4FE;
        border-radius: 10px;
        padding: 8px 9px;
        margin-right: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        align-self: flex-start;
        cursor: pointer;
    }
    .like-count{
        margin-top: 8px;
    }
    .feedback-features__headline{
        margin: 0;
        font-weight: bold;
        font-size: 18px;
        line-height: 26px;
        margin-bottom: 8px;
    }
    .feedback-features__comment{
        color: #647196;
        margin: 0;
        margin-bottom: 16px;
    }
    .feedback-features__category{
        color: #4661E6;
        padding: 6px 16px;
        background-color: #F2F4FF;
        border-radius: 10px;
        font-weight: 600;
        font-size: 13px;
        line-height: 19px;
    }
    .feedback-comment{
        margin-left: auto;
        display: flex;
        align-items: center;
    }
    .feedback-comment__count{
        display: flex;
        align-items: center;
    }
    .feedback-comment__count::before{
        content: "";
        background: url('../../../assets/comment.png');
        width: 18px;
        height: 16px;
        display: flex;
        margin-right: 8px;
    }
    a{
        text-decoration: none;
    }
</style>