import firebase from "firebase/app"
import "firebase/database"

const config = {
   API_KEY:'AIzaSyB5ug-SbblvkijpZ0sI8iSL_Wd6dZzuF2c',
}

const db = firebase.initializeApp(config);
export default db;