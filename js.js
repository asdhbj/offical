
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js"
// import { getAnalytics } from "firebase/analytics";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-analytics.js"
// import { firebase } from "https://www.gstatic.com/firebasejs/10.9.0/firebase.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Add Firebase products that you want to use
// import { getAuth } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js'
// import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBpM3jt7iqs8EQmMqtIEnL7RyMxuy22gIc",
  authDomain: "houkoku-ef667.firebaseapp.com",
    databaseURL: "https://houkoku-ef667-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "houkoku-ef667",
  storageBucket: "houkoku-ef667.firebasestorage.app",
  messagingSenderId: "753966793472",
  appId: "1:753966793472:web:e7b9157e30b448fcc369e5",
  measurementId: "G-R4Q0P418E6"
};

firebase.database().goOnline()
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig)

var database = firebase.database()
// var database = getFirestore(app)

var btnSubmit = document.getElementById("submit")

if (btnSubmit) {
    btnSubmit.onclick = () => {
        database.ref("/").update({
            "t": 1
        })
        var b11 = document.getElementById("b11")
        database.ref("/").update({
            "b11": Number(b11.value)
        })
        var b12 = document.getElementById("b12")
        database.ref("/").update({
            "b12": Number(b12.value)
        })
        var b13 = document.getElementById("b13")
        database.ref("/").update({
            "b13": Number(b13.value)
        })
        var b14 = document.getElementById("b14")
        database.ref("/").update({
            "b14": Number(b14.value)
        })
        var b15 = document.getElementById("b15")
        database.ref("/").update({
            "b15": Number(b15.value)
        })
        var b21 = document.getElementById("b21")
        database.ref("/").update({
            "b21": Number(b21.value)
        })
        var b22 = document.getElementById("b22")
        database.ref("/").update({
            "b22": Number(b22.value)
        })
        var b23 = document.getElementById("b23")
        database.ref("/").update({
            "b23": Number(b23.value)
        })
        var b24 = document.getElementById("b24")
        database.ref("/").update({
            "b24": Number(b24.value)
        })
        var b25 = document.getElementById("b25")
        database.ref("/").update({
            "b25": Number(b25.value)
        })
        var b31 = document.getElementById("b31")
        database.ref("/").update({
            "b31": Number(b31.value)
        })
        var b32 = document.getElementById("b32")
        database.ref("/").update({
            "b32": Number(b32.value)
        })
        var b33 = document.getElementById("b33")
        database.ref("/").update({
            "b33": Number(b33.value)
        })
        var b34 = document.getElementById("b34")
        database.ref("/").update({
            "b34": Number(b34.value)
        })
        var b35 = document.getElementById("b35")
        database.ref("/").update({
            "b35": Number(b35.value)
        })
        var b41 = document.getElementById("b41")
        database.ref("/").update({
            "b41": Number(b41.value)
        })
        var b42 = document.getElementById("b42")
        database.ref("/").update({
            "b42": Number(b42.value)
        })
        var b43 = document.getElementById("b43")
        database.ref("/").update({
            "b43": Number(b43.value)
        })
        var b44 = document.getElementById("b44")
        database.ref("/").update({
            "b44": Number(b44.value)
        })
        var b45 = document.getElementById("b45")
        database.ref("/").update({
            "b45": Number(b45.value)
        })
        var b51 = document.getElementById("b51")
        database.ref("/").update({
            "b51": Number(b51.value)
        })
        var b52 = document.getElementById("b52")
        database.ref("/").update({
            "b52": Number(b52.value)
        })
        var b53 = document.getElementById("b53")
        database.ref("/").update({
            "b53": Number(b53.value)
        })
        var b54 = document.getElementById("b54")
        database.ref("/").update({
            "b54": Number(b54.value)
        })
        var b55 = document.getElementById("b55")
        database.ref("/").update({
            "b55": Number(b55.value)
        })
        var b61 = document.getElementById("b61")
        database.ref("/").update({
            "b61": Number(b61.value)
        })
        var b62 = document.getElementById("b62")
        database.ref("/").update({
            "b62": Number(b62.value)
        })
        var b63 = document.getElementById("b63")
        database.ref("/").update({
            "b63": Number(b63.value)
        })
        var b64 = document.getElementById("b64")
        database.ref("/").update({
            "b64": Number(b64.value)
        })
        var b65 = document.getElementById("b65")
        database.ref("/").update({
            "b65": Number(b65.value)
        })
    }
}

/* var btnGuestSubmit = document.getElementById("guestSubmit")

if (btnGuestSubmit) {
    btnGuestSubmit.onclick = () => {
        var c1 = document.getElementById("c1").value;
        var c2 = document.getElementById("c2").value;
        var c3 = document.getElementById("c3").value;
        var c4 = document.getElementById("c4").value;
        var c5 = document.getElementById("c5").value;
        var c6 = document.getElementById("c6").value;

        // Update data in Firebase Realtime Database
        database.ref("/").update({
            "c1": Number(c1),
            "c2": Number(c2),
            "c3": Number(c3),
            "c4": Number(c4),
            "c5": Number(c5),
            "c6": Number(c6),
        })
        database.ref("/receipt/").update({
            "c1": Number(c1),
            "c2": Number(c2),
            "c3": Number(c3),
            "c4": Number(c4),
            "c5": Number(c5),
            "c6": Number(c6),
            "total": Number(c6)+Number(c5)+Number(c4)+Number(c3)+Number(c2)+Number(c1),
        })
        .then(() => {
            // Redirect to another UI after database update
            window.location.href = "receipt.html"; // Replace with the URL of your other UI
        })
        .catch((error) => {
            console.error("Error updating database: ", error);
        });
        
        console.log("jjjj");
    }
} */
var submi = document.getElementById("submi")
if (submi) {
    submi.onclick = () => {
       
        // Update data in Firebase Realtime Database
        //database.ref("/").update({
        //    "c": 1
        //})
       // .then(() => {
            // Redirect to another UI after database update
            window.location.href = "payment.html"; // Replace with the URL of your other UI
        //})
        //.catch((error) => {
         //   console.error("Error updating database: ", error);
        //});
        
        
        console.log("jjjk");
    }
}
if (setIn) {
    setIn.onclick = () => {
      var hasEmptySelection = false;
  
      // Check if any dropdown is empty
      for (let i = 1; i <= 6; i++) {
        const selection = document.getElementById(`B${i}`).value;
        if (!selection) {
          hasEmptySelection = true;
          break; // Exit loop if an empty selection is found
        }
      }
  
      if (hasEmptySelection) {
        alert("Please select an ingredient for all fields!");
        return; // Prevent further execution if there's an empty selection
      }
  
      // Assign dropdown values to variables
      const ingredient1 = document.getElementById("B1").value;
      const ingredient2 = document.getElementById("B2").value;
      const ingredient3 = document.getElementById("B3").value;
      const ingredient4 = document.getElementById("B4").value;
      const ingredient5 = document.getElementById("B5").value;
      const ingredient6 = document.getElementById("B6").value;
      const l1 = document.getElementById("l1").value;
      const l2 = document.getElementById("l2").value;
      const l3 = document.getElementById("l3").value;
      const l4 = document.getElementById("l4").value;
      const l5 = document.getElementById("l5").value;
      const l6 = document.getElementById("l6").value;
  
      // Update database with assigned variables
      database.ref("/Ing/").update({
        "B1": ingredient1,
        "B2": ingredient2,
        "B3": ingredient3,
        "B4": ingredient4,
        "B5": ingredient5,
        "B6": ingredient6,
        "l1": Number(l1),
        "l2": Number(l2),
        "l3": Number(l3),
        "l4": Number(l4),
        "l5": Number(l5),
        "l6": Number(l6),
      })
        .then(() => {
          window.alert("Setup done!");
        })
        .catch((error) => {
          console.error("Error updating database:", error);
          // Handle the error appropriately
        });
    }
  }
  
  
// console.log(firebase)
/* database.ref("/Ing/").update({
    "B1": String(B1),
    "B2": String(B2),
    "B3": String(B3),
    "B4": String(B4),
    "B5": String(B5),
    "B6": String(B6),
}) */
