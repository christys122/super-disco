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
//set up input on click in <textarea>
var createTask = function(taskText) {
    // create tasks in time blocks
var taskAdd = $("<textarea>")
    .addClass("tasks")
    .text(taskText);
    //append task
    taskAdd.append(taskText);

    //     //check time
    //    // CheckTime(taskText)
     $("#list-" + taskAdd).append(taskText);
};




// $("#dayTask").on("click", "textarea", function() {

//     var text = $(this)
//     .text()
//     .trim();
// //get id info (later for persist)
//     var status = $(this)
//     .closest(".task")
//     .att("id")
//     .replace("list-","");

    //module 5.1.6 if needed
// tasks[status][index].text = text;
// saveTasks();
// //recreate element
// var tasks = $("<textarea>")
//     .addClass("task")
//     .text(text);

//     $(this).replaceWith(tasks)


    // var textInput = $("<textarea>")
    // .addClass("task")
    // .val(text);
    // $(this).replaceWith(textInput);
    // textInput.trigger("focus");

    // $(".task").on("blur", "textarea", function() {

    // });
    



















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
// // 