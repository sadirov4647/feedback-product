<template>
    <div class="replies">
        <div class="replier">
            <div class="replier-info">
                <h3 class="replier-name">Salim</h3>
                <p class="replier-email">{{ reply.userEmail }}</p>
            </div>
            <button @click="replyToReply" class="reply-btn">Reply</button>
        </div>
        <p class="replier-text">{{ reply.reply }}</p>
    </div>
</template>

<script>
    export default {
        name:'Reply',
        props:['reply']
    }
</script>

<style scoped>
    .reply-btn{
        color: #4661E6;
        font-weight: 600;
        font-size: 13px;
        line-height: 19px;
        border: none;
        background-color: #fff;
        cursor: pointer;
    }
    .replier{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .replier-info{
        margin-bottom: 18px;
    }
    .replier-name{
        margin: 0;
    }
    .replier-email{
        margin: 0;
    }
    .replier-text{
        margin: 0;
        margin-bottom: 32px;
    }
</style>