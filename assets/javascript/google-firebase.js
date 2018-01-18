// var firebase = new Firebase("https://trailblazer-project.firebaseio.com");
var config = {
  apiKey: "AIzaSyBEwnr_R2pjbyqaKWxKuSyQBtm3LbTdgS4",
  authDomain: "trailblazer-project.firebaseapp.com",
  databaseURL: "https://trailblazer-project.firebaseio.com",
  projectId: "trailblazer-project",
  storageBucket: "trailblazer-project.appspot.com",
  messagingSenderId: "615321105967"
};

//Initialize firebase
firebase.initializeApp(config);

var database = firebase.database();


//This JS will capture the firebase location to implement onto google maps