const day = document.getElementById("day");
const year = document.getElementById("year");
const date = document.getElementById("date");
const month = document.getElementById("month");

const today = new Date();

weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

allMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

console.log(today);

year.innerHTML = today.getFullYear();
day.innerHTML = weekDays[today.getDay()];
month.innerHTML = allMonths[today.getMonth()];
date.innerHTML = (today.getDate() < 10 ? "0" : "") + today.getDate();
