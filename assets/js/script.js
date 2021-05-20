var currentDayEl = $('#currentDay');
var saveBtn = document.querySelectorAll(".saveBtn");

$(document).ready(function () { //nothing will run until page is loaded

  //current date in header
  function displayDate() {
      var currentDay = moment().format('dddd, MMM DD, YYYY');
      currentDayEl.text(currentDay);
    }

  displayDate();


  $(".saveBtn").on("click", function () {
    //set var for values time and text area
    var time = $(this).parent().attr("id");
    var text = $(this).siblings(".description").val();

    window.localStorage.setItem(time, text);
  })
  
  saveBtn.forEach((btn) => {
    btn.addEventListener("click", function() {
      var savedMsgEl = document.getElementById("saved-message");
      savedMsgEl.setAttribute("class", "text-center");
      setTimeout(function() {
        savedMsgEl.setAttribute("class", "hide");
      }, 1000);
    });
  })

  function timeUpdate() {
    var currentTime = moment().hour();
    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);

        if (blockHour < currentTime) {
          $(this).addClass("past");
        }
        else if (blockHour === currentTime) {
          $(this).removeClass('past');
          $(this).addClass('present');
        }
        else {
          $(this).removeClass('past');
          $(this).removeClass('present');
          $(this).addClass('future');
        }
    });
  }
  //load things in from local storage
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
  $("#hour-18 .description").val(localStorage.getItem("hour-18"));

  timeUpdate();
})



