$(document).ready(function () { //nothing will run until page is loaded
  var currentDayEl = $('#currentDay');
  var currentHr = moment().format("H")
  var saveBtn = document.querySelectorAll(".saveBtn");
  var descriptionEl = $(".description");

  //current date in header
  function displayDate() {
      var currentDay = moment().format('dddd, MMM DD, YYYY');
      currentDayEl.text(currentDay);
    }

  displayDate();


  $(".savBtn").on("click", function () {
    //set var for values time and text area
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, value);
  })

  function timeUpdater() {
    var currentTime = moment().hours();

  $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);

      if (blockHour < currentTime) {
        $(this).add("past");
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
  )}

  timeUpdater();

  //load things in from local storage
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10")); //naninani
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
  $("#hour-18 .description").val(localStorage.getItem("hour-18"));
})



/* //flash "Saved!" when saved button pressed
saveBtn.forEach((btn) => {
  btn.addEventListener("click", function() {
    var savedMsgEl = document.getElementById("saved-message");
    savedMsgEl.setAttribute("class", "text-center");
    setTimeout(function() {
      savedMsgEl.setAttribute("class", "hide");
    }, 1000);
  });

  saveInput();
}); */