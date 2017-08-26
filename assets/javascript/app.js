var $nameField = $("#name_field");
var $roleField = $("#role_field");
var $startDateField = $("#start_date_field");
var $monthlyRateField = $("#monthly_rate_field");
var $buttonSubmit = $("#button_submit");

// Initialize Firebase
function initFirebase() {
  var config = {
    apiKey: "AIzaSyB7HZbW8_Yi2yVyYD7Onc_dvvftSTJsyKc",
    authDomain: "employee-data-99a21.firebaseapp.com",
    databaseURL: "https://employee-data-99a21.firebaseio.com",
    projectId: "employee-data-99a21",
    storageBucket: "employee-data-99a21.appspot.com",
    messagingSenderId: "256210453421"
  };
  firebase.initializeApp(config);
}

$(document).ready(function() {
  initFirebase();

  $buttonSubmit.on("click", function() {
    var name = $nameField.val();
    var role = $roleField.val();
    var startDate = $startDateField.val();
    var monthlyRate = $monthlyRateField.val();
  });
});
