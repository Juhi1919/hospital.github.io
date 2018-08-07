
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDlu4kRdbvwsMPJhOJ6YLZdg30CguYgZZs",
    authDomain: "hospital-info-5a762.firebaseapp.com",
    databaseURL: "https://hospital-info-5a762.firebaseio.com",
    projectId: "hospital-info-5a762",
    storageBucket: "hospital-info-5a762.appspot.com",
    messagingSenderId: "41009004440"
  };
  firebase.initializeApp(config);
  
// Create a variable to reference the database
var database = firebase.database();
$('#addBtn').on("click", function(){

	//Grabs user input
	var hospitalname = $('#hospitalname').val().trim();
    var phone = $('#phone').val().trim(); 
	var adress = $('#adress').val().trim();
	var blood = $('#blood').val().trim();
	// Creates local "temporary" object for holding train data
	var newHospital = {
		hospitalname: hospitalname,
		phone:phone,
		adress: adress,
		blood: blood
	}

	//Uploads employee data to the database
	database.ref().push(newHospital);

	console.log(newHospital.hospitalname);
	console.log(newHospital.phone);
	console.log(newHospital.adress);
    console.log(newHospital.blood);
    
    $('#hospitalname').val().trim();
    $('#phone').val().trim(); 
	$('#adress').val().trim();
	$('#blood').val().trim();

	return false;
});

// Creates a Firebase event for adding trains to the database and a row in the html
database.ref().on("child_added", function(childSnapshot){
	console.log(childSnapshot.val());

	// Store everything into a variable
	var hospitalname = childSnapshot.val().hospitalname;
	var phone = childSnapshot.val().phone;
	var adress = childSnapshot.val().adress;
	var blood = childSnapshot.val().blood;

	// Train info
	console.log(hospitalname);
	console.log(phone);
	console.log(adress);
	console.log(blood);


	$("#hospitalinfo > tbody").append("<tr><td>" + hospitalname + "</td><td>" + phone  + "</td><td>" + adress + "</td><td>" + blood + "</td><td>");

});



