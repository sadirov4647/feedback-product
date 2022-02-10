<template>
  <div class="main-header">
    <div class="suggestions">
      <span class="suggestion-count">{{ feedbacks.length }}</span>
      <p>Suggestions</p>
    </div>
    <div class="sort-upvotes">
      <label for="myUpvotes">Sort by:</label>
      <select id="upvotes" v-model="selected">
        <option value="mostupvotes">Most Upvotes</option>
        <option value="leastupvotes">Least Upvotes</option>
        <option value="mostcomments">Most Comments</option>
        <option value="leastcomments">Least Comments</option>
      </select>
    </div>

    <router-link to="/new-feedback"> + Add Feedback</router-link>
  </div>


  <div v-if="noFeedback" class="no-feedback">
    <h1 class="no-feedback_title">There is no feedback yet.</h1>
    <p class="no-feedback_para">Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>
    <router-link class="no-feedback_add" to="/new-feedback">+ Feedback</router-link>
  </div>

  <ul v-else class="feedbacks-wrapper">
    <Feedbacks :feedback="feedback"  v-for="(feedback, key) in feedbacks" :key="key"/>
  </ul>
</template>

<script>
  import Feedbacks from '../main-features/feedback/Feedbacks.vue'
  import { db } from '../../main'
  export default {
    name:'MainHeader',
    components:{
      Feedbacks
    },
    data() {
      return {
        feedbacks: [],
        noFeedback:false,
        selected:""
      };
    },
    mounted() {
      var feedbackRef = db.ref("/feedbacks");
      feedbackRef.once("value", (snapshot) => {
        let feedbackss = [];
        snapshot.forEach((childSnapshot) => {
          var key = childSnapshot.key;
          var data = childSnapshot.val();
          feedbackss.push({
            key: key,
            headline: data.headline,
            category: data.category,
            comment: data.comment,
            likes: Math.floor(Math.random() * 100)
          });
          if(feedbackss.length){
            this.feedbacks = feedbackss
          }else{
            this.noFeedback = true
          }
        });
      });
    },
  };

</script>

<style scoped>
   .feedbacks-wrapper{
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  .no-feedback{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 100px;
  }
  .no-feedback::before{
    content: "";
    background: url(../../assets/noFeedback.png);
    width: 130px;
    height: 140px;
  }
  .no-feedback_title{
    font-size: 24px;
    line-height: 34px;
    margin-top: 0;
  }
  .no-feedback_para{
    margin-top: 0;
  }
  .no-feedback_add{
    padding: 12px 25px;
    background-color: #AD1FEA;
    border: none;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
    white-space: nowrap;
    text-decoration: none;
  }
  .no-feedback_add:hover{
    background-color: #C75AF6;
  }
  .sort-upvotes{
    display: flex;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #fff;
  }
  .sort-upvotes label{
    width: 80px;
  }
  .main-header{
    background-color: #373F68;
    padding: 14px 24px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    margin-bottom: 24px;
  }
  .suggestions{
    display: flex;
    align-items: center;
    color: #fff;
    margin-right: 40px;
  }
  .suggestions::before{
    content: "";
    background: url('../../assets/Vector.png');
    width: 24px;
    height: 24px;
    margin-right: 16px;
  }
  .suggestion-count{
    margin-right: 10px;
  }
  p{
    margin: 0;
  }
  #upvotes{
    border: none;
    background-color: inherit;
    width: 100%;
    outline: none;
  }
  select{
    color: #fff;
  }
  option{
    color: black;
  }
  input{
    color: #fff;
  }
  a{
    padding: 12px 25px;
    background-color: #AD1FEA;
    border: none;
    border-radius: 10px;
    margin-left: auto;
    color: #fff;
    cursor: pointer;
    white-space: nowrap;
    text-decoration: none;
  }
  a:hover{
    background-color: #C75AF6;
  }

  @media only screen and (max-width:700px) {
    .main-header{
      padding: 12px 12px;
    }
  }

  @media only screen and (max-width:590px) {
    .feedbacks-wrapper{
      padding-top: 180px;
    }
    .main-header{
      position: fixed;
      top: 11%;
      margin: 0;
      width: 90%;
      justify-content: space-between;
      border-radius: 0;
    }
    .suggestions{
      display: none;
    }
    .suggestions::before{
      margin-right: 8px;
    }
    input{
      width: 120px;
    }
    a{
      margin-left: 0;
      padding: 4px 8px;
    }
    .sort-upvotes{
      display: flex;
      align-items: center;
    }
  }
</style>