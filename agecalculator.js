// Age Finding App


// calculating milliseconds from Jan 1, 1970 until user's date of birth
var calcDOB = new Date (prompt("Emter Your Age.", "Jan 20, 2000")); // taking user's input
var dobMS = calcDOB.getTime();

// calculating milliseconds from JAn 1, 1970 to Today
var calToday = new Date();
var todayMS = calToday.getTime();

// calculating diffrence
var diffrence = todayMS - dobMS;

// calculating age 
var age = diffrence/(1000*60*60*30*12*24);

// Accurate Age without decimal value
var accurateAge = Math.floor(age);

// print
document.write(accurateAge);
