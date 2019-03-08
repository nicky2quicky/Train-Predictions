# Train-Predictions
Train  Schedules
Nick Tom

Technologies Used
-HTML
-CSS
-FireBase
-JQuery
-JavaScript
-MomentJS

This application is meant to create a schedule for upcoming trains to help users get to their correct destination in a timely manner. The top of the screen will display the following informaiton for the user

Name of Train
Destination fo the Train
Frequency of the train arrival (displayed in minutes)
Live Up to date next arrival for the Train
How Long Until the Next Train Arrives

To calculate these up to date train time, names, arrival times, and time until next train arrival, the user must first plug in values for the train listed below. Upon manually entering in

Train Name
Destination
First Arrival Time (In Military Time)
Frequency

Leveraging the Difference JavaScript, we will be able to calculate some key times to append to the HTML including (time until next arrival, difference between now and the first train arrival, and then intervals for the train arrivals). Once these values are calculated they will be both updated in the FireSource database and then also appended within the HTML itse;lf.


