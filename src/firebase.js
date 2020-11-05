import firebase from 'firebase';
const firebaseApp = firebase.initializeApp( {
        apiKey: "AIzaSyApz7TvDbIu9RerkD-gP03-6XCEW1QZ3S0",
        authDomain: "messanger-clone-a1685.firebaseapp.com",
        databaseURL: "https://messanger-clone-a1685.firebaseio.com",
        projectId: "messanger-clone-a1685",
        storageBucket: "messanger-clone-a1685.appspot.com",
        messagingSenderId: "717052293464",
        appId: "1:717052293464:web:7a05646b72fec575ed752d"
      }

);

const db = firebaseApp.firestore();

export default db;
