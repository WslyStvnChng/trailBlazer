// Initialize Firebase
var config = {
    apiKey: "AIzaSyBEwnr_R2pjbyqaKWxKuSyQBtm3LbTdgS4",
    authDomain: "trailblazer-project.firebaseapp.com",
    databaseURL: "https://trailblazer-project.firebaseio.com",
    projectId: "trailblazer-project",
    storageBucket: "trailblazer-project.appspot.com",
    messagingSenderId: "615321105967"
};

firebase.initializeApp(config);

// Create a variable to reference the database.
var database = firebase.database();