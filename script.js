var task = $(".task");
var button = $("button");
var hourLabel = $("#label");
var button = $("button");
var times = [9, 10, 11, 12, 1, 2, 3, 4, 5];

//Current date
var $currentDay = $("#currentDay");

var currentDateTime = moment();
$currentDay.text(currentDateTime.format("MMM Do, YYYY"));


//Display hour and current time 
var currentHour = parseInt(currentDateTime.format("h"));
console.log(currentHour)

if(currentHour == hourLabel){
    $(task).addClass("present")
}
else {
    if (currentHour < hourLabel)
    $(task).addClass("past")

    else (currentHour > hourLabel)
    $(task).addClass("future")
}


//Save tasks
function saveTasks (){
    event.preventDefault()
var taskInput = $("#task").text();
localStorage.setItem("task", taskInput);
localStorage.getItem("task");
}

$("button").click(saveTasks);

