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

        <Reply :reply="reply" v-for="(reply, key) in allReplies" :key="key"/>

        <form @submit.prevent="replyToComment" v-if="isReply" >
            <p class="warn" v-if="fillArea">Please fill the given area before you write to {{ this.comment.userEmail }}</p>
            <div class="comments-reply">
                <textarea class="comments-reply__text" name="reply-comment" cols="30" rows="5" v-model="commentReply"></textarea>
                <button class="adding_btn" type="submit">Post Reply</button>
            </div>
        </form>
    </li>

</template>

<script>
    import { db, auth } from '../../../main'
    import Reply from './Reply.vue'
    export default {
        name: "Comment",
        components:{
            Reply
        },
        data(){
            return{
                isReply:false,
                commentReply:'',
                fillArea:false,
                allReplies:[]
            }
        },
        props:['comment', 'feedbackKey'],

        created(){
            let replies =  db.ref(`feedbacks/${this.feedbackKey}/${this.comment.keys}`);
            replies.once('value', snapshot =>{
                snapshot.forEach(item => {
                    if(item.val().reply){
                        // console.log(Object.values(item.val()))
                        let replies = item.val()
                        this.allReplies.push(replies)
                    }
                })
            })


        },
        methods:{
            replySwitch(){
                this.isReply = !this.isReply;
            },
            replyToComment(){
                let repliesSend = db.ref(`feedbacks/${this.feedbackKey}/${this.comment.keys}`)
                if(this.commentReply === ''){
                    this.fillArea = true
                }else{
                    this.fillArea = false
                    repliesSend.push({
                        reply:this.commentReply,
                        userEmail: auth.currentUser.email
                    })
                    .then(this.commentReply = '')
                    .then(window.location.reload())
                }
            }
        }
    }
</script>

<style  scoped>
    .replies{
        padding-left: 65px;
    }
    .warn{
        text-align: center;
    }
    .comments{
        display: flex;
        flex-direction: column;
    }
    .comments::after{
        content: "";
        width: 100%;
        height: 1px;
        background-color: #8C92B3;
        margin-bottom: 32px;
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
        width: 100%;
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
    .commentator-info{
        display: flex;
        flex-direction: column;
    }
    .comments-reply{
        display: flex;
        padding-left: 65px;
        justify-content: space-between;
        margin-bottom: 24px;
    }
    .real-comments__wrapper{
        display: flex;
        margin-bottom: 32px;
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
