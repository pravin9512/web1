
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyA5cG00HBBaY5gvjh6eswAgmJSSYnUaEqI",
      authDomain: "kwitter-f56dc.firebaseapp.com",
      databaseURL: "https://kwitter-f56dc-default-rtdb.firebaseio.com",
      projectId: "kwitter-f56dc",
      storageBucket: "kwitter-f56dc.appspot.com",
      messagingSenderId: "897158885690",
      appId: "1:897158885690:web:32d40c048483aedbaf6003"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
