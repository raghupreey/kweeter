const firebaseConfig = {
      apiKey: "AIzaSyAZrf8OKSyL0cmza4v63Xn4u5dXoCOS_7c",
      authDomain: "kwitter-37a91.firebaseapp.com",
      databaseURL: "https://kwitter-37a91-default-rtdb.firebaseio.com",
      projectId: "kwitter-37a91",
      storageBucket: "kwitter-37a91.appspot.com",
      messagingSenderId: "252560548406",
      appId: "1:252560548406:web:b4235f33db330672f82e97",
      measurementId: "G-7EXZ490NF2"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome"+ user_name +("!");

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name-"+Room_names);
      row= "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(thid.id)'>#"+ Room_names +"</div><hr>";
      document.getElementById("Output").innerHTML +=row;
      //End code
      });});}
getData();

function addRoom()
{
      Room_names= document.getElementById("room_name").value;

      firebase.database().ref("/").child(Room_names).update ({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", Room_names);
      window.location = "kwitter_room.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.loacation = "kwitter_room.html";
}