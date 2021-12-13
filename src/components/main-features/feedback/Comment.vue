<template>
    <li class="comments">
        <div class="real-comments__wrapper">
            <img class="commentator-image" src="../../../assets/jack.png" alt="commentator image" width="40" height="40">
            <div class="except-image__comment">
                <div class="comment-header">
                    <div class="commentator-info">
                        <h5 class="commentator-name">{{ comment.keys }}</h5>
                        <span class="commentator-email">{{ comment.userEmail }}</span>
                    </div>
                    <button @click="replySwitch" class="reply-btn">Reply</button>
                </div>
                <div class="comment-main">
                    <p class="comment-main__text">{{ comment.comment }}</p>
                </div>
            </div>
        </div>
        <form @submit.prevent="replyToComment"  v-if="isReply" class="comments-reply">
            <textarea class="comments-reply__text" name="reply-comment" cols="30" rows="5" v-model="commentReply"></textarea>
            <button class="adding_btn" type="submit">Post Reply</button>
        </form>
    </li>

</template>

<script>
import { db,auth } from '../../../main'
    export default {
        name: "Comment",
        data(){
            return{
                isReply:false,
                commentReply:'',
            }
        },
        props:['comment'],
        methods:{
            replySwitch(){
                this.isReply = !this.isReply
            },
            replyToComment(){
                let replies = db.ref(`feedbacks/`)
                // replies.push({
                //     reply:this.commentReply,
                //     userEmail: auth.currentUser.email
                // })
                // .then(this.commentReply = '')
                // .then(console.log(replies))
            }
        }
    };
</script>

<style  scoped>
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
</style>
