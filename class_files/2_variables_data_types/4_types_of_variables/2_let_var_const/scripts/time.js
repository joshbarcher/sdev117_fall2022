/*
    This script calculates time values from
    the unix epoch.

    Author: Josh Archer
    Date: 9/27/22
    File: time.js
 */

//constants to convert our time values
const MILLIS_IN_SECOND = 1000;
const SECS_IN_MIN = 60;
const MINS_IN_HR = 60;
const HRS_IN_DAY = 24;
const APPROX_DAYS_IN_YR = 365;

//create six variables for our time values
let millis = new Date().getTime();
let seconds = millis / MILLIS_IN_SECOND;
let minutes = seconds / SECS_IN_MIN;
let hours = minutes / MINS_IN_HR;
let days = hours / HRS_IN_DAY;
let years = days / APPROX_DAYS_IN_YR;

//round our numbers
millis = Math.round(millis);
seconds = Math.round(seconds);
minutes = Math.round(minutes);
hours = Math.round(hours);
days = Math.round(days);
years = Math.round(years);

//displaying my time values in the <span> elements in our html
let millisElement = document.querySelector("div#millis span");
millisElement.innerHTML = millis;
let secondsElement = document.querySelector("div#seconds span");
secondsElement.innerHTML = seconds;
let minutesElement = document.querySelector("div#minutes span");
minutesElement.innerHTML = minutes;
let hoursElement = document.querySelector("div#hours span");
hoursElement.innerHTML = hours;
let daysElement = document.querySelector("div#days span");
daysElement.innerHTML = days;
let yearsElement = document.querySelector("div#years span");
yearsElement.innerHTML = years;

