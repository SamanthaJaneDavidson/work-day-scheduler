var task = $(".task");
var saveBtn = $(".saveBtn");
var hourLabel = $(".time");

//Current date display
var $currentDay = $("#currentDay");

var currentDateTime = moment();
$currentDay.text(currentDateTime.format("MMM Do, YYYY"));


//Display hour with color coding 
var currentHour = (currentDateTime.hour());
console.log(currentHour)
console.log(hourLabel[1].id);

for(i = 0; i < hourLabel.length; i++){
console.log(currentHour > hourLabel[i])
console.log(task[i])

if(currentHour == hourLabel[i].id){
    task[i].classList.add("present")
}
else if (currentHour > hourLabel[i].id){
    task[i].classList.add("past")}

    else if (currentHour < hourLabel[i].id){
    task[i].classList.add("future")}
}

//Save tasks to local storage and display tasks upon refresh
function saveTasks (event){
    event.preventDefault()
    var taskInput = $(`#input-${this.value}`).val();
    localStorage.setItem(`task-${this.value}`, taskInput);
}

for(i = 9; i < 18; i++){
$(`#input-${i}`).val(localStorage.getItem(`task-${i}`))
}

$(".saveBtn").click(saveTasks);

