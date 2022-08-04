// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC0f_DDgmz1vDi0dmg9jtIPLTvya0A2wiI",
    authDomain: "letschatwebapp-2343a.firebaseapp.com",
    projectId: "letschatwebapp-2343a",
    storageBucket: "letschatwebapp-2343a.appspot.com",
    messagingSenderId: "883265982799",
    appId: "1:883265982799:web:e0884c252add31f0f5753a",
    measurementId: "G-QQX93N0NKE"
  };

  



