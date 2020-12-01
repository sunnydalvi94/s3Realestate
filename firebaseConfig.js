import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBwU3FTtv8oD83x4oeRsoQPENX0g1lNrQk",
    authDomain: "s3realesate.firebaseapp.com",
    databaseURL: "https://s3realesate.firebaseio.com",
    projectId: "s3realesate",
    storageBucket: "s3realesate.appspot.com",
    messagingSenderId: "292477837943",
    appId: "1:292477837943:web:22853c057df780b0671c72",
    measurementId: "G-NCJ60Q4NT1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
