# Train-Schedule-App_API-HW
This HW is to create a web application that provides up-to-date train/bus schedules using an API, Firebase, and Moment JS
HW - {HW Name}

Live Link (If relevant)

www.example.com
This app is for the purspose of entering transit line schedule times. An operator will navigate to the page and enter in the information request. Once the submit button is clicked the entered information is sent to firebase and then pulled back into the html.

The goal was to explore working with databases, create an application that would push and pull data from firebase.

Technology Used
Bootstrap
CSS
Javascript/jQuery
firebase
AJAX for API Get through firebase database

 // collect input data from html by submit button

$("#submitButton").on("click", function (event) {
  event.preventDefault();


// sends data from firebase to frontend

database.ref().on("child_added", function(childSnapshot, prevChildKey){ 


