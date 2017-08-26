var $nameField = $("#name_field");
var $roleField = $("#role_field");
var $startDateField = $("#start_date_field");
var $monthlyRateField = $("#monthly_rate_field");
var $buttonSubmit = $("#button_submit");

// Initialize Firebase
var config = {
  apiKey: "AIzaSyB7HZbW8_Yi2yVyYD7Onc_dvvftSTJsyKc",
  authDomain: "employee-data-99a21.firebaseapp.com",
  databaseURL: "https://employee-data-99a21.firebaseio.com",
  projectId: "employee-data-99a21",
  storageBucket: "employee-data-99a21.appspot.com",
  messagingSenderId: "256210453421"
};
firebase.initializeApp(config);
var database = firebase.database();

$(document).ready(function() {
  var name = "";
  var role = "";
  var startDate = "";
  var monthlyRate = "";

  firebase.database.ref.once("value").then(function(snapshot) {
    for (var key in snapshot.val()) {
      console.log(key);
    }
  });
});

$buttonSubmit.on("click", function(event) {
  console.log("here");
  event.preventDefault();
  name = $nameField.val().trim();
  role = $roleField.val().trim();
  startDate = $startDateField.val().trim();
  monthlyRate = $monthlyRateField.val().trim();

  database.ref().push({
    name: name,
    role: role,
    startDate: startDate,
    monthlyRate: monthlyRate,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  });
});

database.ref().orderByChild("dateAdded").on(
  "child_added",
  function(snapshot) {
    // storing the snapshot.val() in a variable for convenience
    var sv = snapshot.val();
    // Console.loging the last user's data
    console.log(sv.name);
    console.log(sv.role);
    console.log(sv.startDate);
    console.log(sv.monthlyRate);
    // Change the HTML to reflect
    $(".name").html(sv.name);
    $(".role").html(sv.role);
    $(".start-date").html(sv.startDate);
    $(".monthly-rate").html(sv.monthlyRate);
    // Handle the errors
  },
  function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  }
);
