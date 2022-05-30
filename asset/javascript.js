var setDate = document.querySelector("#currentDay");
var currentDate = moment();
setDate.textContent = currentDate.format("dddd, MMM Do");

// set rows with 1 hour for each row