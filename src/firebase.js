import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyB75o9BhiCAqYclNMCl2JxHP6QzZN91Fmo",
    authDomain: "hello-worls-3fd66.firebaseapp.com",
    projectId: "hello-worls-3fd66",
    storageBucket: "hello-worls-3fd66.appspot.com",
    messagingSenderId: "1061192277744",
    appId: "1:1061192277744:web:b196f238b51d338b442c35",
    measurementId: "G-JRGGBM8DW3",
    databaseURL : "https://hello-worls-3fd66-default-rtdb.asia-southeast1.firebasedatabase.app/"
  };
  
  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const analytics = getAnalytics(app);