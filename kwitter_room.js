

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCr6D8ueGOLE50Z49qU0W8saKHFKluaPGw",
  authDomain: "aryaan-qopv.firebaseapp.com",
  databaseURL: "https://aryaan-qopv-default-rtdb.firebaseio.com",
  projectId: "aryaan-qopv",
  storageBucket: "aryaan-qopv.appspot.com",
  messagingSenderId: "148450569590",
  appId: "1:148450569590:web:c2e1de8ea6d4a860395e57"
};
const app = initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send(){
msg= document.getElementById("msg").value;
firebase.database().ref(room_name).push({
 name: user_name,
 message: msg,
 like:0     
});
document.getElementById("msg").value="";

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log(firebase_message_id);
console.log (message_data)
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
 like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
  span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
   row = name_with_tag + message_with_tag +like_button + span_with_tag;
    document.getElementById("output").innerHTML += row;    
      });});}
getData();
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location="kwitter_room.html";
}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";

}  
 