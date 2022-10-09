// var time = $(".time")
// var task = $(".task")
// var saveBtn = $(".button")
var rootEl = $("#root");
var rowEl = $("#row")

//Current date
var $currentDay = $("#currentDay");

var currentDateTime = moment();
$currentDay.text(currentDateTime.format("MMM Do, YYYY"));


//Display hour and current time 
var currentHour = parseInt(currentDateTime.format("h"));
console.log(currentHour);

//Add elements to page
var timeBlocks = [
    "9", 
    "10"
];

for (var i = 0; i < timeBlocks.length; i++) {
    var timeBlocksEl = $('<li>'); //create

    timeBlocksEl.text(timeBlocks[i]); //modify

    timeBlocksEl.addClass("#time-block"); //modify

    rowEl.append(timeBlocksEl); //append

}
