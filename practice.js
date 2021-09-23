// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBTgFMN8FYr23lQ8ffEGyB7Vv5W5EFqDLk",
    authDomain: "practice-project-4f7cc.firebaseapp.com",
    databaseURL: "https://practice-project-4f7cc-default-rtdb.firebaseio.com",
    projectId: "practice-project-4f7cc",
    storageBucket: "practice-project-4f7cc.appspot.com",
    messagingSenderId: "691734577944",
    appId: "1:691734577944:web:5624e7fb6562c640d0546d"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser(){
      user_name=document.getElementById("user_name").ariaValueMax;
      firebase.database().ref("/").child(user_name).update({
          purpose:"adding"
      })
  }