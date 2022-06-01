var setDate = document.querySelector("#currentDay");
var currentDate = moment();
setDate.textContent = currentDate.format("dddd, MMM Do");
//var tasks = [];

// set rows with color based on hour for each row
// find date and change to number
$(".time-block").each(function() {
    var timeBlockHour = parseInt($(this).attr("id"))
    
   // $(".time-block").removeClass(".past")
   var currentTime = moment().format ("HH")

    if (currentTime > timeBlockHour) {
        $(".time-block").addClass("past");
    }
    else if (currentTime < timeBlockHour) {
        $("time-block").addClass(".future");
    }
    else if (currentTime === timeBlockHour) {
        $(".time-block").addClass(".present");
    }
}); 
//end time block color


//start adding a task to the page
//set up input on click in <textarea> input works, need to save




//create save button with icon
$(".saveBtn").click(function(saveTasks){


var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};    
///problems
var createTask = function(taskText, taskHour) {
    // create tasks in time blocks
var taskAdd = $("<textarea>")
    .addClass("task");
var taskH = $("p")
    .text(taskHour);
}   
    //append task
    taskAdd.append(taskAdd, taskH);
});   

var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));
}
//     //     //check time
//     //    // CheckTime(taskText)
//      $("#list-" + taskAdd).append();
// };

// var taskDataObj = {
// id: 1,
// name: taskText

// }
// var taskText = $("task").val();


$("#dayTask").on("click", "textarea", function() {
    var status = $(this)
    .text()
    .trim();
//get id info (later for persist)
    var status = $(this)
    .closest(".hour")
    .att("id")
    .replace("list-","");

    var index = $(this)
        .closest(".row")
        .index();

    var textInput = $("textarea>")
    .addClass("tasks")
    .val(text);
    $(this).replaceWith(textInput)
    tasks[status][index].text = text;
    saveTasks();
});
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
    // .val("hour");
    // $(this).replaceWith(textInput);
    // textInput.trigger("focus");

    // $(".task").on("blur", "textarea", function() {

    // });
    



















