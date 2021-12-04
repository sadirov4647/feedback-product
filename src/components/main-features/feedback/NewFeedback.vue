<template>
  <div class="container">
    <div class="back">
      <router-link to="/">Go Back</router-link>
    </div>
    <form class="new-feedback" @submit.prevent="submitted">
      <h2 class="new-feedback__title">Create New Feedback</h2>
      <div class="feedback-headline">
        <h4 class="headline-title">Feedback Title</h4>
        <label for="headline" class="headline-para"
          >Add a short, descriptive headline</label
        >
        <input type="text" id="headline" v-model="headline" />
      </div>
      <div class="feedback-category">
        <h4 class="category-title">Category</h4>
        <p class="category-para">Choose a category for your feedback</p>
        <select
          name="category-select"
          class="category-select"
          v-model="category"
        >
          <option value="feature">Feature</option>
          <option value="ui">UI</option>
          <option value="ux">UX</option>
          <option value="enhancement">Enhancement</option>
          <option value="bug">Bug</option>
        </select>
      </div>
      <div class="feedback-detail">
        <h4 class="detail-title">Feedback Detail</h4>
        <label for="detail" class="detail-para"
          >Include any specific comments on what should be improved, added,
          etc.</label
        >
        <textarea
          name="details"
          id="details"
          rows="10"
          v-model="comment"
        ></textarea>
      </div>

      <div class="new-feedback__control">
        <button class="cancel-feedback" type="button">Cancel</button>
        <button class="add-feedback" type="submit">Add Feedback</button>
      </div>
    </form>
  </div>
</template>

<script>
import { firestore, db } from "../../../main";
import axios from "axios";

export default {
  name: "NewFeedback",
  //     firebase:{
  //      users:userRef,
  //    },
  data() {
    return {
      feedback: {
        headline: "",
        category: "",
        comment: "",
      },
    };
  },
  methods: {
    async submitted() {
      await axios
        .post(
          "https:feedback-product-cd430-default-rtdb.firebaseio.com/feedbacks.json",
          {
            headline: this.headline,
            category: this.category,
            comment: this.comment,
          }
        )
        .then((res) => console.log(res))
        .then(this.$router.push("/"))
        .catch((err) => console.log(err));
    },

    //  async submitFeedback(){
    //         const collectionRef =  firestore.collection("users");
    //         const getPromise = collectionRef.get();
    //         const snapshot = await getPromise;
    //         const docs  = snapshot.docs;
    //         docs.forEach(docSnapshot =>{
    //             console.log(docSnapshot.id, docSnapshot.data())
    //         })
    //     }
  },
};
</script>

<style scoped>
.container {
  max-width: 1150;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
}
.back {
  margin-bottom: 68px;
}
.new-feedback {
  max-width: 540px;
  background-color: #fff;
  padding-top: 52px;
  padding-right: 42px;
  padding-left: 42px;
  padding-bottom: 40px;
  border-radius: 10px;
  margin: 0 auto;
}
.new-feedback__title {
  color: #3a4374;
  margin-bottom: 40px;
}
.feedback-headline {
  display: flex;
  flex-direction: column;
}
.headline-title {
  margin: 0;
}
.headline-para {
  color: #647196;
}
input[type="text"] {
  border: none;
  border-radius: 5px;
  background-color: #f7f8fd;
  outline: none;
  padding: 10px;
  margin-top: 16px;
}
.feedback-category {
  margin-bottom: 24px;
}
.category-select {
  width: 100%;
  background-color: #f7f8fd;
  border-radius: 5px;
  border: none;
  padding: 12px;
  outline: none;
}
#details {
  padding: 0;
  padding: 5px;
  width: 100%;
  color: #ad1fea;
  background-color: #f7f8fd;
  border: none;
  border-radius: 5px;
  margin-top: 16px;
  outline: none;
}
button {
  padding: 12px 24px;
  color: #fff;
  border-radius: 10px;
  border: none;
}
.new-feedback__control {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.add-feedback {
  background-color: #ad1fea;
}
.cancel-feedback {
  margin-right: 16px;
  background-color: #3a4374;
}
</style>
