function addUser() {
  user_name = document.getElementById("user_name").ariaValueMax;
   
  localStorage.setItem("user_name", user_name);
  window.location = "kwitter_room.html";
}
const firebaseConfig = {
  apiKey: "AIzaSyCv3UKXfzZ6J01Se_uMoWZT3k94r7SbAd8",
  authDomain: "kwitter-72a13.firebaseapp.com",
  databaseURL: "https://kwitter-72a13-default-rtdb.firebaseio.com",
  projectId: "kwitter-72a13",
  storageBucket: "kwitter-72a13.appspot.com",
  messagingSenderId: "102467803586",
  appId: "1:102467803586:web:62c5cc5b4a372014331e5b",
  measurementId: "G-BTSTF6ZSYM"
};
