

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

  // collect input data from html

$("#submitButton").on("click", function (event) {
  event.preventDefault();

  var line = $("#metroLine").val().trim();
  
  var destination = $("#Destination").val().trim();
  var firstRoute = $("#firstRoute").val().trim();
  var frequency = $("#frequency").val().trim();

  console.log(line + " ", destination + " ", firstRoute + " ", frequency + " ");

  database.ref().push({
    alineName: line,
    destination: destination,
    firstRoute: firstRoute,
    frequency: frequency
  });



});




  // push data to firebase

