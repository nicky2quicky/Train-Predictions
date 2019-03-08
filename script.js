var config = {
  apiKey: "AIzaSyBmwDC7-sOPgS_QbmdrvKnBBLCqjuyEuyU",
  authDomain: "nicky-t-s-project.firebaseapp.com",
  databaseURL: "https://nicky-t-s-project.firebaseio.com",
  projectId: "nicky-t-s-project",
  storageBucket: "nicky-t-s-project.appspot.com",
  messagingSenderId: "702375291916"
};
firebase.initializeApp(config);
  
  var database = firebase.database();
  
  // 2. Button for adding Employees
  $("#add-train-btn").on("click", function(event) {
    event.preventDefault();
  
    // Grabs user input
    var trainName = $("#train-name-input").val().trim();
    var destination = $("#destination-input").val().trim();
    var firstTime = moment($("#first-train-time-input").val().trim(), "HH:mm").format("LT");
    var frequency = $("#frequency-input").val().trim();
  
    // Creates local "temporary" object for holding employee data
    var newTrain = {
      name: trainName,
      destination: destination,
      start: firstTime,
      rate: frequency,
    };
  
    // Uploads employee data to the database
    database.ref().push(newTrain);
  
    // Logs everything to console
    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.start);
    console.log(newTrain.rate);
  
    alert("Train Successfully Added");
  
    // Clears all of the text-boxes
    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#first-train-time-input").val("");
    $("#frequency-input").val("");
  });
  
  // 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
  database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());
  
    // Store everything into a variable.
    var trainName = childSnapshot.val().name;
    var destination = childSnapshot.val().destination;
    var firstTime = childSnapshot.val().start;
    var frequency = childSnapshot.val().rate;
  
    // Train Info - Check to make sure everything is correct from the Firebase
    console.log(trainName);
    console.log(destination);
    console.log(firstTime);
    console.log(frequency);



  // Creat a variable for current time, to help create the difference with frequency of the upcoming trains
  
  // FIXED CRITCAL ERROR WITH SUBTRACTING TIME!?

  var firstTimeNice = moment(firstTime, "hh:mm").subtract(1, "years");
  console.log(firstTimeNice);

  var firstToNow = moment().diff(moment(firstTimeNice), "minutes");
    console.log(firstToNow);

    // Use the above variable and leverage the % previously used to see which values are divisible by 75 from the first example, or any other number of minutes entered for frequency:

    var remainingTime = firstToNow % frequency;
    // Testing the time since the last train departure
  console.log(remainingTime + " Minutes");

  var minutesAway = frequency - remainingTime;
  // Testing the minutes away variable
  console.log(minutesAway + " Minutes Away");


  // Attempting to convert the time of the first train into minutes 

// Using the now variable, we can now start setting up the time difference between the trains and now

// var timeDifference = moment().diff(moment(firstTime), "minutes");
// console.log(timeDifference);

    // var trainDifference = moment().diff(moment.unix(snapshot.val().time), "minutes");

    // console.log(trainDifference);

  

// Need to add additional variables (Next Train Arrival HH:mm and How Long in minutes) to include and later append within the HTML

    // Failed miserably trying to do a for loop, changing strategy



  //  var firstTimeNice = firstTime.split(':');
  //   console.log(firstTimeNice);
  //  var minutes = (+firstTimeNice[0]) * 60 +(+firstTimeNice[1]);

  //   console.log(minutes);
  
  
  // Clean up the the train schedule
    // console.log(firstTrainTime);
    // Making the max interval 1441 minutes (in the situation you have a train arrive every minut since there are only 1440 minutes in a day

    // for (var i = 0; i < 1441; i++){
    //   var nextTrain = firstTime + frequency[i];
    // }

    // console.log(nextTrain);
  
  //   // Calculate the months worked using hardcore math
  //   // To calculate the months worked
  
      // var nextTrain = parseInt(firstTime) + parseInt(frequency)
      // console.log(parseInt(nextTrain));
    
      // for (i = parseInt)

    // var empMonths = moment().diff(moment(firstTime, "LT"), "minutes");
    // console.log(empMonths);
    
  
  //   // Calculate the total billed rate
  //   var empBilled = empMonths * frequency;
  //   console.log(empBilled);


  var nextArrival = moment().add(minutesAway, "minutes").format("hh:mm");
  console.log(nextArrival + " Next Arrival Time");
  
    // Create the new row
    var newRow = $("<tr>").append(
      $("<td>").text(trainName),
      $("<td>").text(destination),
      $("<td>").text(frequency),
      $("<td>").text(nextArrival),
      $("<td>").text(minutesAway),
  
    );
  
    // Append the new row to the table
    $("#train-table > tbody").append(newRow);
  });
  
  // // Example Time Math
  // // -----------------------------------------------------------------------------
  // // Assume Employee start date of January 1, 2015
  // // Assume current date is March 1, 2016
  
  // // We know that this is 15 months.
  // // Now we will create code in moment.js to confirm that any attempt we use meets this test case
 