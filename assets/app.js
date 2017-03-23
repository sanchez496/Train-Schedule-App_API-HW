

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBdYVgjKokr70AxbMoEyJPa_zvsWXodLRw",
    authDomain: "train-and-bus-tracking.firebaseapp.com",
    databaseURL: "https://train-and-bus-tracking.firebaseio.com",
    storageBucket: "train-and-bus-tracking.appspot.com",
    messagingSenderId: "537068327575"
  };

  firebase.initializeApp(config);

  var database = firebase.database();

  // initial values

  var line = "";
  var destination = "";
  var firstRoute = "";
  var frequency = "";

  // collect input data from html by submit button

$("#submitButton").on("click", function (event) {
  event.preventDefault();

  //caputures user input values

  var line = $("#metroLine").val().trim();
  var destination = $("#destination").val().trim();
  var firstRoute = $("#firstRoute").val().trim();
  var frequency = $("#frequency").val().trim();

  console.log(line + " ", destination + " ", firstRoute + " ", frequency + " ");

  // push data to firebase
  database.ref().push({
    alineName: line,
    destination: destination,
    firstRoute: firstRoute,
    frequency: frequency
  });

  alert("schedule updated");

    //clear text input values
    $("#metroLine").val("");
    $("#destination").val("");
    $("#firstRoute").val("");
    $("#frequency").val("");

  });

// time tracking




// sends data from firebase to frontend

database.ref().on("child_added", function(childSnapshot, prevChildKey){ 

  console.log(childSnapshot.val());

  // Store everything into a variable.
  var line = childSnapshot.val().alineName;
  var destination = childSnapshot.val().destination;
  var firstRoute = childSnapshot.val().firstRoute;
  var frequency = childSnapshot.val().frequency;


// Store everything into a variable.
  // var empName = childSnapshot.val().name;
  // var empRole = childSnapshot.val().role;
  // var empStart = childSnapshot.val().start;
  // var empRate = childSnapshot.val().rate;





// function pushHtml(obj){
//   var pushHtml = firebase.database().ref().child("child");

//   pushHtml.on("child_added", snapshot => {

//       alert(snap.val());
//       console.log("pushHtml");

//     var line = snapshot.child("alineName").val();
//     console.log(Line);
//     var destination = snapshot.child("destination").val();
//     var firstRoute = snapshot.child("firstRoute").val();
//     var frequency = snapshot.child("frequency").val();
//     console.log(line + destination + firstRoute + frequency);

//pull schedule data to html
    $("#Transit-table > tbody").append("<tr><td>" + line + "</td><td>" + destination + "</td><td>" + firstRoute + "</td><td>" + frequency + "</td></tr>");
  });




