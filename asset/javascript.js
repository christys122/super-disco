var setDate = document.querySelector("#currentDay");
var currentDate = moment();
setDate.textContent = currentDate.format("dddd, MMM Do");
var taskHour = document.querySelector("timeblock");

    
//var tasks = [];
//start adding a task to the page

$(document).ready(function() {
$(".saveBtn").click(function(){
    var task = $.trim($("textarea").val());
    if (task !="") {
    alert(task);
    }

//var text = $(task).siblings(".daytask").val();
    var time = parseInt($(this).attr("id"))
    
    var taskObj = {task, time}

//save to local 
    localStorage.setItem("task", JSON.stringify(taskObj));
});

var loadTasks = function() {
    taskObj = JSON.parse(localStorage.getItem("task"));
   
    } 

// find date and change to number

$(".time-block").each(function() {
    var timeBlockHour = parseInt($(this).attr("id"))
    
//check time and remove/add classes 

    var currentTime = moment().format ("HH")
    if (currentTime > timeBlockHour) {

   $(this).removeClass("past present future")
   $(this).addClass("past");
    }
    else {
    if (currentTime < timeBlockHour) {
    $(this).removeClass("past present future")    
    $(this).addClass("future");
    
    }
    else if (currentTime === timeBlockHour) {
        $(this).removeClass("past present future") 
        $(this).addClass("present");
    } 
     
  };
});
});


    
// });        
   
//   // enable draggable/sortable feature on list-group elements
// $(".row .time-block").sortable({
//     // enable dragging across lists
//     connectWith: $(".row .time-block"),
//     scroll: false,
//     tolerance: "pointer",
//     helper: "clone",
//     activate: function(event, textarea) {
//       console.log(textarea);
//     },
//     deactivate: function(event, textare) {
//       console.log(textarea);
//     },
//     over: function(event) {
//       console.log(event);
//     },
//     out: function(event) {
//       console.log(event);
//     },
//     update: function() {
//       var tempArr = [];
  
//       // loop over current set of children in sortable list
//       $(this)
//         .children()
//         .each(function() {
//           // save values in temp array
//           tempArr.push({
//             text: $(this)
//               .find("textarea")
//               .text()
//               .trim(),
//             date: $(this)
//               .find("p")
//               .text()
//               .trim()
//           });
//         });
  
//       // trim down list's ID to match object property
//       var arrName = $(this)
//         .attr("id")
//         .replace("list-", "");
  
//       // update array on tasks object and save
//       tasks[arrName] = tempArr;
//       saveTasks();
//     },
//     // stop: function(event) {
//     //   $(this).removeClass("dropover");
//     // }
//   });
    
    



















