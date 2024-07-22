"use strict";
// Originsl JS code
// const year = document.getElementById("year");
// const thisYear = new Date().getFullYear();
// year.setAttribute("datetime", thisYear);
// year.textContent = thisYear;
let year = document.getElementById("year");
let thisYear = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
