// Foodhub Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCKJKQ_UXbwtWG6Rfl7zYVicn9q2WSwB3o",
  authDomain: "foodhub-456ba.firebaseapp.com",
  databaseURL: "https://foodhub-456ba.firebaseio.com",
  projectId: "foodhub-456ba",
  storageBucket: "foodhub-456ba.appspot.com",
  messagingSenderId: "227463590048",
  appId: "1:227463590048:web:6566950e196dc6898b19c5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
