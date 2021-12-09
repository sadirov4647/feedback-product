<template>
    <div class="feedback-page__header">
        <router-link to="/">Go Back</router-link>
        <button class="edit-feedback">Edit Feedback</button>
    </div>

    <div class="container">
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
                <h3 class="feedback-features__headline">{{ feedback.headline  }}</h3>
                <p class="feedback-features__comment">{{ feedback.comment }}</p>
                <span class="feedback-features__category">{{ feedback.category}}</span>
            </div>
            <div class="feedback-comment">
                <span class="feedback-comment__count">2</span>
            </div>
        </li>


        <div class="feedback-comments__section">
            <h3 class="feedback-comments__count">4 Comments</h3>
            <ul  class="feedback-comments" >
                <li class="comments" v-for="(comment, key) in comments" :key="key">
                    <div class="real-comments__wrapper">
                        <img class="commentator-image" src="../../../assets/jack.png" alt="commentator image" width="40" height="40">
                        <div class="except-image__comment">
                            <div class="comment-header">
                                <div class="commentator-info">
                                    <h5 class="commentator-name">Elijah Moss</h5>
                                    <span class="commentator-email">@hexagon.bestagon</span>
                                </div>
                                <button @click="replySwitch" class="reply-btn">Reply</button>
                            </div>
                            <div class="comment-main">
                                <p class="comment-main__text">{{comment.comment}}</p>
                            </div>
                        </div>
                    </div>
                    <form @prevent-default="replyToComment"  v-if="isReply" class="comments-reply">
                        <textarea class="comments-reply__text" name="reply-comment" cols="30" rows="5"></textarea>
                        <button class="adding_btn" type="submit">Post Reply</button>
                    </form>
                </li>
            </ul>
        </div>

        <div class="adding-comment">
            <h3 class="adding-comment__title">Add Comment</h3>
            <!-- <p v-if="commentLength > 250">You are typing so much!!!</p> -->
            <textarea name="adding-comment__text" class="adding-comment__text" cols="30" rows="5" v-model="commentAddWord" maxlength="250"></textarea>
            <form class="adding-comment__form" @submit.prevent="addComment">
                <span v-if="commentLength < 250">{{ 250 - commentLength }} Characters left</span>
                <span v-else>You are typing so much!!!</span>
                <button class="adding_btn" type="submit">Post Comment</button>
            </form>
        </div>
    </div>
</template>

<script>
    import { db } from '../../../main'
    export default {
        name:'FeedbackDetail',
        data(){
            return {
                feedback:[],
                key:this.$route.params.key,
                isReply:false,
                comments:[],
                commentReplies:[],
                commentAddWord:''
            }
        },
        computed:{
            commentLength(){
                let commentLength = this.commentAddWord.length
                return commentLength
            }
        },
        async created(){

            let feedback = db.ref('/feedbacks');
            feedback.once('value', (snapshot) => {
                snapshot.forEach(item => {
                    if(item.key === this.key){
                    this.feedback = item.val()
                    }
                    if(item.key === this.key){
                        let childObject = item.val()

                        Object.keys(childObject).forEach(ok => {
                            if(childObject[ok].comment){
                                this.comments.push(childObject[ok])
                                console.log(childObject[ok])
                            }
                        })
                    }
                })
            });
        },
        methods:{
            replySwitch(){
                this.isReply = !this.isReply
            },
            replyToComment(){

            },
            addComment(){
                let comments = db.ref(`feedbacks/${this.key}`)
                comments.push({
                    comment: this.commentAddWord
                }).then(this.commentAddWord = '')
                .then()
       }
     }
    }
</script>

<style scoped>
    .container{
        max-width: 770px;
        padding-right: 20px;
        padding-left: 20px;
        margin-right: auto;
        margin-left: auto;
    }
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
    .feedback-comments__section{
        padding: 24px 32px;
        background-color: #fff;
        border-radius: 10px;
        margin-bottom: 24px;
    }
    .feedback-comments__count{
        margin: 0;
        margin-bottom: 28px;
        font-size: 18px;
        font-weight: bold;
        line-height: 26px;
    }
    .feedback-comments{
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    .comments{
        display: flex;
        flex-direction: column;
    }
    .commentator-name{
        margin: 0;
        font-weight: bold;
        font-size: 14px;
        line-height: 20px;
    }
    .except-image__comment{
        display: flex;
        flex-direction: column;
    }
    .comment-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .reply-btn{
        color: #4661E6;
        font-weight: 600;
        font-size: 13px;
        line-height: 19px;
        border: none;
        background-color: #fff;
        cursor: pointer;
    }
    .comment-main__text{
        color: #647196;
        font-weight: normal;
        font-size: 15px;
        line-height: 22px;
    }
    .commentator-image{
        margin-right: 32px;
    }
    .comments-reply{
        display: flex;
        padding-left: 65px;
        justify-content: space-between;
    }
    .real-comments__wrapper{
        display: flex;
    }
    .comments-reply__text{
        width: 100%;
        padding: 16px 24px;
        background-color: #F7F8FD;
        color: #3A4374;
        border: none;
        border-radius: 10px;
        margin-right: 16px;
        outline: none;
    }
    .adding_btn{
        padding: 12px 24px;
        background-color: #AD1FEA;
        border-radius: 10px;
        border: none;
        align-self: flex-start;
        color: #fff;
        white-space: nowrap;
        cursor: pointer;
    }
    .adding_btn:hover{
        opacity: 0.8;
    }
    .adding-comment{
        background-color: #fff;
        padding: 24px 34px;
        display: flex;
        flex-direction: column;
    }
    .adding-comment__title{
        margin: 0;
        font-weight: bold;
        font-size: 18px;
        line-height: 26px;
        color: #3A4374;
        margin-bottom: 24px;
    }
    .adding-comment__text{
        border: none;
        border-radius: 5px;
        background-color: #F7F8FD;
        outline: none;
        padding: 16px 24px;
        max-width: 100%;
        margin-bottom: 16px;
        font-weight: normal;
        font-size: 15px;
        line-height: 22px;
    }
    .adding-comment__form{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>