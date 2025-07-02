const year = 2019;
const month = 2;
const day = 24;

// new Date();
// new Date("datestring"); //October 13, 2014 11:13:00
// new Date(year, month);
// new Date(year, month, day);
// new Date(year, month, day, hours);
// new Date(year, month, day, hours, minutes);
// new Date(year, month, day, hours, minutes, seconds);
// new Date(year, month, day, hours, minutes, seconds, ms);

// new Date(milliseconds);

const date = new Date();
// console.log(date.toUTCString(), "date"); //to display date in the utc format

//3 types of date formats in JS

// Type     	Example

// ISO Date	    "2015-03-25" (The International Standard)
// Short Date	"03/25/2015"
// Long Date	"Mar 25 2015" or "25 Mar 2015"

let msec = Date.parse("March 21, 2012");
//console.log(msec); //to calculate the time b/w two dates in milliseconds

// Date     Get Methods

// Method	              Description

// getFullYear()	      Get year as a four digit number (yyyy)
// getMonth()	          Get month as a number (0-11)
// getDate()	          Get day as a number (1-31)
// getDay()	              Get weekday as a number (0-6)
// getHours()	          Get hour (0-23)
// getMinutes()           Get minute (0-59)
// getSeconds()	          Get second (0-59)
// getMilliseconds()	  Get millisecond (0-999)
// getTime()	          Get time (milliseconds since January 1, 1970)

console.log(date.getFullYear()); //2025
console.log(date.getMonth()); //month no
console.log(date.getDay()); //week no of the dates month
console.log(date.getDate()); //todays date no
console.log(date.getHours()); // time hours
console.log(date.getMinutes()); //time minutes
console.log(date.getSeconds()); //time in seconds
console.log(date.getMilliseconds()); //time in seconds
console.log(date.getTime()); //time in milliseconds since January 1,1970
console.log(Date.now()); //time in milliseconds since January 1,1970

const today = new Date();
today.setDate(today.getDate() - 7);
console.log(today);
