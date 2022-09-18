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
      $("#currentDay").append(diaHoje);
      let horasTrabalhar = ["9 a.m.", "10 a.m.", "11 a.m.", "12 p.m.", "1 p.m.", "2 p.m.", "3 p.m.", "4 p.m.",
        "5 p.m."]
  
      //THEN the current day is displayed at the top of the calendar
      function diaHoje() {
        let diaHoje = $("#currentDay").text(momentVar);
        return diaHoje;
      }
  
      diaHoje();
    
  
      for (i = 0; i < horasTrabalhar.length; i++) {
        let row = $("<div>").addClass("row");
        let timeCol = $("<text-area>").text(horasTrabalhar[i]).addClass("hour");
        let inputCol = $("<input>").attr("placeholder", "Enter this time's event").addClass("toDo-input time-block");
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
  
      //for loop to add id's to save buttons
      function addIdToSaveBtn() {
        let saveBtnId = document.getElementsByClassName("saveBtn");
        let length = saveBtnId.length;
        for (i = 0; i < length; i++) {
          saveBtnId[i].id = "saveBtn-Id-" + (i + 1);
        }
      }
      addIdToSaveBtn();
  
      let saveBtnIdUm = $("#saveBtn-Id-1");
      let saveBtnIdDois = $("#saveBtn-Id-2");
      let saveBtnIdTres = $("#saveBtn-Id-3");
      let saveBtnIdQuatro = $("#saveBtn-Id-4");
      let saveBtnIdCinqo = $("#saveBtn-Id-5");
      let saveBtnIdSeis = $("#saveBtn-Id-6");
      let saveBtnIdSepte = $("#saveBtn-Id-7");
      let saveBtnIdOito = $("#saveBtn-Id-8");
      let saveBtnIdNove = $("#saveBtn-Id-9");
  
      let toDoInputUm = $("#input-field-1");
      let toDoInputDois = $("#input-field-2");
      let toDoInputTres = $("#input-field-3");
      let toDoInputQuatro = $("#input-field-4");
      let toDoInputCinqo = $("#input-field-5");
      let toDoInputSeis = $("#input-field-6");
      let toDoInputSepte = $("#input-field-7");
      let toDoInputOito = $("#input-field-8");
      let toDoInputNove = $("#input-field-9");
  
  
      let storedInput;
  
      //click events for each save button 
  
      $(saveBtnIdUm).on("click", function (event) {
        event.preventDefault();
        let toDoInputUm = $("#input-field-1").val().trim();
        localStorage.setItem("toDo1", (toDoInputUm));
      });
      let savedInput1 = (localStorage.getItem("toDo1"));
      toDoInputUm.val(savedInput1);
  
      $(saveBtnIdDois).on("click", function (event) {
        event.preventDefault();
        let toDoInputDois = $("#input-field-2").val().trim();
        localStorage.setItem("toDo2", (toDoInputDois));
      });
      let savedInput2 = (localStorage.getItem("toDo2"));
      toDoInputDois.val(savedInput2);
  
      $(saveBtnIdTres).on("click", function (event) {
        event.preventDefault();
        let toDoInputTres = $("#input-field-3").val().trim();
        localStorage.setItem("toDo3", (toDoInputTres));
      });
      let savedInput3 = (localStorage.getItem("toDo3"));
      toDoInputTres.val(savedInput3);
  
      $(saveBtnIdQuatro).on("click", function (event) {
        event.preventDefault();
        let toDoInputQuatro = $("#input-field-4").val().trim();
        localStorage.setItem("toDo4", (toDoInputQuatro));
      });
      let savedInput4 = (localStorage.getItem("toDo4"));
      toDoInputQuatro.val(savedInput4);
  
      $(saveBtnIdCinqo).on("click", function (event) {
        event.preventDefault();
        let toDoInputCinqo = $("#input-field-5").val().trim();
        localStorage.setItem("toDo5", (toDoInputCinqo));
      });
      let savedInput5 = (localStorage.getItem("toDo5"));
      toDoInputCinqo.val(savedInput5);
  
      $(saveBtnIdSeis).on("click", function (event) {
        event.preventDefault();
        let toDoInputSeis = $("#input-field-6").val().trim();
        localStorage.setItem("toDo6", (toDoInputSeis));
      });
      let savedInput6 = (localStorage.getItem("toDo6"));
      toDoInputSeis.val(savedInput6);
  
      $(saveBtnIdSepte).on("click", function (event) {
        event.preventDefault();
        let toDoInputSepte = $("#input-field-7").val().trim();
        localStorage.setItem("toDo7", (toDoInputSepte));
      });
      let savedInput7 = (localStorage.getItem("toDo7"));
      toDoInputSepte.val(savedInput7);
  
      $(saveBtnIdOito).on("click", function (event) {
        event.preventDefault();
        let toDoInputOito = $("#input-field-8").val().trim();
        localStorage.setItem("toDo8", (toDoInputOito));
      });
      let savedInput8 = (localStorage.getItem("toDo8"));
      toDoInputOito.val(savedInput8);
  
      $(saveBtnIdNove).on("click", function (event) {
        event.preventDefault();
        let toDoInputNove = $("#input-field-8").val().trim();
        localStorage.setItem("toDo9", (toDoInputNove));
      });
      let savedInput9 = (localStorage.getItem("toDo9"));
      toDoInputNove.val(savedInput9);
  
      // show past, present, future events if else statements 
  
      let now = new Date().getHours();
      if (now > 8) {
        $("#input-field-0").addClass("past");
      } else if (now >= 8 && now < 9) {
        $("#input-field-0").addClass("present");
      } else if (now < 8) {
        $("#input-field-0").addClass("future");
      }
  
      if (now > 9) {
        $("#input-field-1").addClass("past");
      } else if (now >= 9 && now < 10) {
        $("#input-field-1").addClass("present");
      } else if (now < 9) {
        $("#input-field-1").addClass("future");
      }
  
      if (now > 10) {
        $("#input-field-2").addClass("past");
      } else if (now >= 10 && now < 11) {
        $("#input-field-2").addClass("present");
      } else if (now < 10) {
        $("#input-field-2").addClass("future");
      }
  
      if (now > 11) {
        $("#input-field-3").addClass("past");
      } else if (now >= 11 && now < 12) {
        $("#input-field-3").addClass("present");
      } else if (now < 11) {
        $("#input-field-3").addClass("future");
      }
  
      if (now > 12) {
        $("#input-field-4").addClass("past");
      } else if (now >= 12 && now < 13) {
        $("#input-field-4").addClass("present");
      } else if (now < 12) {
        $("#input-field-4").addClass("future");
      }
  
      if (now > 13) {
        $("#input-field-5").addClass("past");
      } else if (now >= 13 && now < 14) {
        $("#input-field-5").addClass("present");
      } else if (now < 13) {
        $("#input-field-5").addClass("future");
      }
  
      if (now > 14) {
        $("#input-field-6").addClass("past");
      } else if (now >= 14 && now < 15) {
        $("#input-field-6").addClass("present");
      } else if (now < 14) {
        $("#input-field-6").addClass("future");
      }
  
      if (now > 15) {
        $("#input-field-7").addClass("past");
      } else if (now >= 15 && now < 16) {
        $("#input-field-7").addClass("present");
      } else if (now < 15) {
        $("#input-field-7").addClass("future");
      }
  
      if (now > 16) {
        $("#input-field-8").addClass("past");
      } else if (now >= 16 && now < 17) {
        $("#input-field-8").addClass("present");
      } else if (now < 16) {
        $("#input-field-8").addClass("future");
      }
  
      if (now > 17) {
        $("#input-field-9").addClass("past");
      } else if (now >= 17 && now < 18) {
        $("#input-field-9").addClass("present");
      } else if (now < 17) {
        $("#input-field-9").addClass("future");
      }
  
    });
  
  }
  shedgePledge();
  