var task = $(".task");
var button = $("button");
var calendarFormEl = $("calendar");
var hourLabel = $(".label");
var label = $(".time");

//Current date
var $currentDay = $("#currentDay");

var currentDateTime = moment();
$currentDay.text(currentDateTime.format("MMM Do, YYYY"));



//Current time
// function currentHourLog()
var currentHour = parseInt(currentDateTime.format("h"));
console.log(currentHour)

// if(currentHour == hourLabel){
//     $(".task").addClass("present")
// }
// else {
//     if (currentHour < hourLabel)
//     $(".task").addClass("past")
// else (currentHour > hourLabel)
//     $(".task").addClass("future")
// }

var times = [9, 10, 11, 12, 1, 2, 3, 4, 5];
for (var i = 0; i < times.length; i++) {
var timesEl = $("time"); 
timesEl.text(times[i]);
timesEl.addClass(".hour")
calendarFormEl.append(timesEl);

}









// var task = JSON.parse(localStorage.getItem$("task"))

// //Save task 
// function saveTask(){

//     var value = $(".task").val();
//     task.text(value);
//     console.log(task);

//     localStorage.setItem("task", text);

// }

// hourFormEl.on("save", saveTask)

// get the text
// var text = $('#task').text();

// // set the item in localStorage
// localStorage.setItem('task', text);

// // bind text to 'blur' event for div
// $('#task').on('blur', function() {

//     // check the new text
//     var newText = $(this).text();

//     // overwrite the old text
//     localStorage.setItem('task', newText);

//     // test if it works
//     alert(localStorage.getItem('task'));

// });
