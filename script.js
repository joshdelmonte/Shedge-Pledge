// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
function shedgePledge() {
    $(document).ready(function () {
      var momentVar = moment().format('dddd, MMMM Do, YYYY h:mm a');
      $("#currentDay").append(diaHoje);
      var horasTrabalhar = ["9 a.m.", "10 a.m.", "11 a.m.", "12 p.m.", "1 p.m.", "2 p.m.", "3 p.m.", "4 p.m.",
        "5 p.m."]
  
      //THEN the current day is displayed at the top of the calendar
      function diaHoje() {
        var diaHoje = $("#currentDay").text(momentVar);
        return diaHoje;
      }
  
      diaHoje();
    
  
      for (i = 0; i < horasTrabalhar.length; i++) {
        var row = $("<div>").addClass("row");
        var timeCol = $("<text-area>").text(horasTrabalhar[i]).addClass("hour");
        var inputCol = $("<input>").attr("placeholder", "Enter this time's event").addClass("faz-input time-block");
        saveBtn = $("<button>").addClass("btn btn-primary saveBtn").text("save");
        $(row).append(timeCol).append(inputCol).append(saveBtn);
        $("#calendaria").append(row);
      }
  
      //for loop to add id's to input fields
      function addIdToInput() {
        var inputId = document.getElementsByClassName("faz-input");
        var length = inputId.length;
        for (i = 0; i < length; i++) {
          inputId[i].id = "cade-" + (i + 1);
        }
      };
      addIdToInput();
  
      //for loop to add id's to save buttons
      function addIdToSaveBtn() {
        var saveBtnId = document.getElementsByClassName("saveBtn");
        var length = saveBtnId.length;
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
  
      let fazInputUm = $("#cade-1");
      let fazInputDois = $("#cade-2");
      let fazInputTres = $("#cade-3");
      let fazInputQuatro = $("#cade-4");
      let fazInputCinqo = $("#cade-5");
      let fazInputSeis = $("#cade-6");
      let fazInputSepte = $("#cade-7");
      let fazInputOito = $("#cade-8");
      let fazInputNove = $("#cade-9");
  
  
      let storedInput;
  
      //click events for each save button 
  
      $(saveBtnIdUm).on("click", function (event) {
        event.preventDefault();
        let fazInputUm = $("#cade-1").val().trim();
        localStorage.setItem("faz1", (fazInputUm));
      });
      let savedInput1 = (localStorage.getItem("faz1"));
      fazInputUm.val(savedInput1);
  
      $(saveBtnIdDois).on("click", function (event) {
        event.preventDefault();
        let fazInputDois = $("#cade-2").val().trim();
        localStorage.setItem("faz2", (fazInputDois));
      });
      let savedInput2 = (localStorage.getItem("faz2"));
        fazInputDois.val(savedInput2);
  
      $(saveBtnIdTres).on("click", function (event) {
        event.preventDefault();
        let fazInputTres = $("#cade-3").val().trim();
        localStorage.setItem("faz3", (fazInputTres));
      });
      let savedInput3 = (localStorage.getItem("faz3"));
      fazInputTres.val(savedInput3);
  
      $(saveBtnIdQuatro).on("click", function (event) {
        event.preventDefault();
        let fazInputQuatro = $("#cade-4").val().trim();
        localStorage.setItem("faz4", (fazInputQuatro));
      });
      let savedInput4 = (localStorage.getItem("faz4"));
      fazInputQuatro.val(savedInput4);
  
      $(saveBtnIdCinqo).on("click", function (event) {
        event.preventDefault();
        let fazInputCinqo = $("#cade-5").val().trim();
        localStorage.setItem("faz5", (fazInputCinqo));
      });
      let savedInput5 = (localStorage.getItem("faz5"));
      fazInputCinqo.val(savedInput5);
  
      $(saveBtnIdSeis).on("click", function (event) {
        event.preventDefault();
        let fazInputSeis = $("#cade-6").val().trim();
        localStorage.setItem("faz6", (fazInputSeis));
      });
      let savedInput6 = (localStorage.getItem("faz6"));
      fazInputSeis.val(savedInput6);
  
      $(saveBtnIdSepte).on("click", function (event) {
        event.preventDefault();
        let fazInputSepte = $("#cade-7").val().trim();
        localStorage.setItem("faz7", (fazInputSepte));
      });
      let savedInput7 = (localStorage.getItem("faz7"));
      fazInputSepte.val(savedInput7);
  
      $(saveBtnIdOito).on("click", function (event) {
        event.preventDefault();
        let fazInputOito = $("#cade-8").val().trim();
        localStorage.setItem("faz8", (fazInputOito));
      });
      let savedInput8 = (localStorage.getItem("faz8"));
      fazInputOito.val(savedInput8);
  
      $(saveBtnIdNove).on("click", function (event) {
        event.preventDefault();
        let fazInputNove = $("#cade-8").val().trim();
        localStorage.setItem("faz9", (fazInputNove));
      });
      let savedInput9 = (localStorage.getItem("faz9"));
      fazInputNove.val(savedInput9);
  
      // show past, present, future events if else statements 
  
      let now = new Date().getHours();
      if (now > 8) {
        $("#cade-0").addClass("past");
      } else if (now >= 8 && now < 9) {
        $("#cade-0").addClass("present");
      } else if (now < 8) {
        $("#cade-0").addClass("future");
      }
  
      if (now > 9) {
        $("#cade-1").addClass("past");
      } else if (now >= 9 && now < 10) {
        $("#cade-1").addClass("present");
      } else if (now < 9) {
        $("#cade-1").addClass("future");
      }
  
      if (now > 10) {
        $("#cade-2").addClass("past");
      } else if (now >= 10 && now < 11) {
        $("#cade-2").addClass("present");
      } else if (now < 10) {
        $("#cade-2").addClass("future");
      }
  
      if (now > 11) {
        $("#cade-3").addClass("past");
      } else if (now >= 11 && now < 12) {
        $("#cade-3").addClass("present");
      } else if (now < 11) {
        $("#cade-3").addClass("future");
      }
  
      if (now > 12) {
        $("#cade-4").addClass("past");
      } else if (now >= 12 && now < 13) {
        $("#cade-4").addClass("present");
      } else if (now < 12) {
        $("#cade-4").addClass("future");
      }
  
      if (now > 13) {
        $("#cade-5").addClass("past");
      } else if (now >= 13 && now < 14) {
        $("#cade-5").addClass("present");
      } else if (now < 13) {
        $("#cade-5").addClass("future");
      }
  
      if (now > 14) {
        $("#cade-6").addClass("past");
      } else if (now >= 14 && now < 15) {
        $("#cade-6").addClass("present");
      } else if (now < 14) {
        $("#cade-6").addClass("future");
      }
  
      if (now > 15) {
        $("#cade-7").addClass("past");
      } else if (now >= 15 && now < 16) {
        $("#cade-7").addClass("present");
      } else if (now < 15) {
        $("#cade-7").addClass("future");
      }
  
      if (now > 16) {
        $("#cade-8").addClass("past");
      } else if (now >= 16 && now < 17) {
        $("#cade-8").addClass("present");
      } else if (now < 16) {
        $("#cade-8").addClass("future");
      }
  
      if (now > 17) {
        $("#cade-9").addClass("past");
      } else if (now >= 17 && now < 18) {
        $("#cade-9").addClass("present");
      } else if (now < 17) {
        $("#cade-9").addClass("future");
      }
  
    });
  
  }
  shedgePledge();
  