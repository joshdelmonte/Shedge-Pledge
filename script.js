// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
function shedgePledge() {
    $(document).ready(function () {
      let momentVar = moment().format('dddd, MMMM Do, YYYY h:mm a');
      $("#currentDay").append(currentDay);
      let workHours = ["9 a.m.", "10 a.m.", "11 a.m.", "12 p.m.", "1 p.m.", "2 p.m.", "3 p.m.", "4 p.m.",
        "5 p.m."]
  
      //THEN the current day is displayed at the top of the calendar
      function currentDay() {
        let currentDay = $("#currentDay").text(momentVar);
        return currentDay;
      }
  
      currentDay();
      let row;
      let timeCol;
  
      for (i = 0; i < workHours.length; i++) {
        let row = $("<div>").addClass("row");
        let timeCol = $("<text-area>").text(workHours[i]).addClass("hour");
        let inputCol = $("<input>").attr("placeholder", "Enter note here").addClass("toDo-input time-block");
        saveBtn = $("<button>").addClass("btn btn-primary saveBtn").text("save");
        $(row).append(timeCol).append(inputCol).append(saveBtn);
        $("#calendaria").append(row);
      }
  
      //for loop to add id's to input fields
      function addIdToInput() {
        let inputId = document.getElementsByClassName("toDo-input");
        let length = inputId.length;
        for (i = 0; i < length; i++) {
          inputId[i].id = "input-field-" + (i + 1);
        }
      };
      addIdToInput();
  
  shedgePledge();
  