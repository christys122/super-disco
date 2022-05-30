var setDate = document.querySelector("#currentDay");
var currentDate = moment();
setDate.textContent = currentDate.format("dddd, MMM Do");

// set rows with color based on hour for each row

// find date first 

//var currentTime = moment().format ("HH:mm");

var setTime = document.querySelector(".hour p")
//works in console log
function FindTime (setTime) {

 //$(setTime).removeClass("present future");   
// should but does not work
if (currentDate.isBefore(setTime)) {
    $(".hour").addClass(".past")
   // $(parent).addClass(".past")
} else
if (currentDate.isAfter(setTime)){
    $(".hour").addClass("future")
} else
if (currentDate()==(setTime)){
    $(".hour").addClass("present")
}

};

//end should but does not work


//start adding a task to the page






















// // setTime.textContent = currentTime.format("HH:mm")

// //var pastTime = moment().

// $("time datetime").p().datetime($("div").data("p").datetime);

// $(doucment).children().filter(function(){
//     return $(this).data("datetime"):

// })

// var checkTime = function(timeEl) {
//     var findTime = $(timeEl)
//     .find("time datetime")
//     .text()
//     .trim();
    
//     //var time = moment(time, "L").set("hour", currentTime)

   // 


// };
// // var createTask = function(taskText) {
// // // create tasks in time blocks
// //     var taskText = $("<textarea>").addClass("textarea").text(taskText);
//     //check time
//    // CheckTime(taskText)
 