import * as firebase from 'firebase'
require('@firebase/firestore')
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAZI7IwFbClF3Muh0LH2Xz5ysQr9zVwvpE",
    authDomain: "book-santa-c77.firebaseapp.com",
    projectId: "book-santa-c77",
    storageBucket: "book-santa-c77.appspot.com",
    messagingSenderId: "637612775086",
    appId: "1:637612775086:web:5da5f1d037958edf277f3f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()