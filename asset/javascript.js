var setDate = document.querySelector("#currentDay");
var currentDate = moment();
setDate.textContent = currentDate.format("dddd, MMM Do");
var taskHour = document.querySelector("timeblock");

    
//var tasks = [];
//start adding a task to the page

$(document).ready(function() {
$(".saveBtn").click(function(){
   // var task = $.trim($("textarea").sibling().val());
   var task = $(this).siblings("#dayTask").children("textarea").val()
    var time = parseInt($(this).parent().attr("id"))
    if (task !="") {
    alert(task + " " + time);
    }

//save to local 
    localStorage.setItem(time, JSON.stringify(task));
});
});

function loadTasks() {
    var task = localStorage.getItem(task)
    var time = localStorage.getItem(time)
    if (time) {
    
    document.getElementById("daytask").value = task;
    document.getElementById("").value = time;
    textareaElement.taskarea = task
    divElement.setAttribute("#" + time);
   // task = JSON.parse(localStorage.getItem("time"));

     loadTasks();
}
else { 
    console.log("no value");
}
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

      
// enable draggable/sortable feature on task list elements

$(".time-block").sortable({
    connectWith: $("#daytask", ),
  scroll: false,
  tolerance: "pointer",
  helper: "clone",
  activate: function(event, textarea) {
    console.log(textarea);
  },
  deactivate: function(event, textarea) {
    console.log(textarea);
  },
  over: function(event) {
    console.log(event);
  },
  out: function(event) {
    console.log(event);
  },
  update: function() {
    var tempArr = [];
}
});
    // enable dragging 

    



















