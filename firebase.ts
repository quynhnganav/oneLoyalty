
  import * as firebase from 'firebase/app'
  const firebaseConfig = {
  apiKey: "AIzaSyAn6_otDJ1PRZNHw8knedIZssmAar4N1-A",
  authDomain: "oneloyalty-ea34d.firebaseapp.com",
  databaseURL: "https://oneloyalty-ea34d-default-rtdb.firebaseio.com",
  projectId: "oneloyalty-ea34d",
  storageBucket: "oneloyalty-ea34d.appspot.com",
  messagingSenderId: "845283165218",
  appId: "1:845283165218:web:8f9ed8dbac1a38303a767b"
  };
  export const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
  
 