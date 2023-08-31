// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {

  var todaysDate = moment().format("dddd, MMM Do YYYY, h:mm:ss a");
  $("#currentDay").html(todaysDate);

  $(".saveBtn").on("click", function (event) {
    event.preventDefault();
    console.log(this);
    var time = $(this).parent().attr("id");
    var textarea= $(this).siblings(".description").val();
    console.log(time, textarea);
    localStorage.setItem(time, textarea);

  });


  $("#hour9 .time-block").val(localStorage.getItem("09"));
  $("#hour10 .time-block").val(localStorage.getItem("10"));
  $("#hour11 .time-block").val(localStorage.getItem("11"));
  $("#hour12 .time-block").val(localStorage.getItem("12"));
  $("#hour13 .time-block").val(localStorage.getItem("13"));
  $("#hour14 .time-block").val(localStorage.getItem("14"));
  $("#hour15 .time-block").val(localStorage.getItem("15"));
  $("#hour16 .time-block").val(localStorage.getItem("16"));
  $("#hour17 .time-block").val(localStorage.getItem("17"));

  $("#clearFieldsBtn").on("click", function (event) {
    event.preventDefault();
    $("textarea").val("");
    localStorage.clear();

  });


  function timeTracker() {
    var currentTimeBlock = moment().hours();
    $(".time-block").each(function() {
      var timeBlockHour = parseInt($(this).attr("id").split("hour")[1]);
      console.log(timeBlockHour);

      if (timeBlockHour < currentTimeBlock) {
        $(this).addClass("past");
      } 
      else if (timeBlockHour === currentTimeBlock) {
        $(this).removeClass("past");
        $(this).addClass("present");
      }
      else {
        $(this).removeClass("past")
        $(this).removeClass("present")
        $(this).addClass("future")
      }
    });
  }

  timeTracker();
 












  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
 });

