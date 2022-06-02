var setDate = document.querySelector("#currentDay");
var currentDate = moment();
setDate.textContent = currentDate.format("dddd, MMM Do");
var tasks = {};

// set rows with color based on hour for each row
// find date and change to number
$(".time-block").each(function() {
    var timeBlockHour = parseInt($(this).attr("id"))
    
  

   var currentTime = moment().format ("HH")
   $(".time-block").removeClass("past future present")

    if (currentTime > timeBlockHour) {
        
        $(".time-block").addClass("past");
    }
    else if (currentTime < timeBlockHour) {
       // $(".time-block").removeClass("present")
       $(".time-block").addClass("future");
    }
    else if (currentTime === timeBlockHour) {
     //   $(".time-block").removeClass("future")
        $(".time-block").addClass("present");
    }
}); 
//end time block color


//start adding a task to the page
//set up input on click in <textarea> input works, need to save
var createTask = function(taskText, taskHour) {
    var taskAdd = $("<textarea>").addClass("task");
    var taskHour = $("time-block p");
    
taskAdd.append(taskAdd, taskHour);      
}

//create save button with icon
//$(".saveBtn").click(function(saveTasks));

var loadTasks = function() {
    taskLoad = JSON.parse(localStorage.getItem("taskLoad"));
    if (!taskLoad) {
        taskLoad = {
        tasks: []
        };
    }
    //loop
    $.each(taskLoad, function(list, arr) {
        arr.forEach(function(task) {
            createTask(task.text, task.hour);
        });
    });
};

 var saveTasks = function() {
    localStorage.setItem("taskLoad", JSON.stringify(taskLoad));
};    



$("#dayTask").on("click", "textarea", function() {
    var text = $(this)
    .text()
    .trim();
//add task to textarea 
var textInput = $("<textarea>")
    .addClass("task")
    .val(text);
$(this).replaceWith(textInput);
textInput.trigger("focus");
});

//get id info for persist
$(".task").on("blur", "textarea", function() {
    var text = $(this).val();
    
    var status = $(this)
    .closest(".hour")
    .attr("id")
    .replace("list-","");

    var index = $(this)
        .closest(".row")
        .index();

    tasks[status][index].text = text;
    saveTasks();

    
});        
   
  // enable draggable/sortable feature on list-group elements
$(".row .time-block").sortable({
    // enable dragging across lists
    connectWith: $(".row .time-block"),
    scroll: false,
    tolerance: "pointer",
    helper: "clone",
    activate: function(event, textarea) {
      console.log(textarea);
    },
    deactivate: function(event, textare) {
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
  
      // loop over current set of children in sortable list
      $(this)
        .children()
        .each(function() {
          // save values in temp array
          tempArr.push({
            text: $(this)
              .find("textarea")
              .text()
              .trim(),
            date: $(this)
              .find("p")
              .text()
              .trim()
          });
        });
  
      // trim down list's ID to match object property
      var arrName = $(this)
        .attr("id")
        .replace("list-", "");
  
      // update array on tasks object and save
      tasks[arrName] = tempArr;
      saveTasks();
    },
    // stop: function(event) {
    //   $(this).removeClass("dropover");
    // }
  });
    
    



















