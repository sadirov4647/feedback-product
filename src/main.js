import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB5ug-SbblvkijpZ0sI8iSL_Wd6dZzuF2c",
    authDomain: "feedback-product-cd430.firebaseapp.com",
    databaseURL: "https://feedback-product-cd430-default-rtdb.firebaseio.com",
    projectId: "feedback-product-cd430",
    storageBucket: "feedback-product-cd430.appspot.com",
    messagingSenderId: "44022670982",
    appId: "1:44022670982:web:6d13ce380548aaddba5307",
    measurementId: "G-32B6NX7WHM"
  };

  firebase.initializeApp(firebaseConfig);

createApp(App).use(store).use(router).mount("#app");
