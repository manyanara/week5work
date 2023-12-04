// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(document).ready(function(){
// displaying current day
 var today = dayjs().format('dddd, MMMM, D YYYY');
  $('#currentDay').text(today);  

// checking each timebox and comparing to current hour to change textbox color 
// also checking local storage to set textbox values
    var currentHour = dayjs().format('HH A')
    var allTimebox = document.querySelectorAll(".time-block");
    
    currentHourNum = parseInt(currentHour)

    for (i=0; i<allTimebox.length; i++){
        var chosenHour= parseInt(allTimebox[i].textContent)

       if (currentHourNum === chosenHour){
        $(allTimebox[i]).addClass('present')
       }
       if (currentHourNum < chosenHour){
         $(allTimebox[i]).addClass('future')
       }
       if (currentHourNum > chosenHour){
        $(allTimebox[i]).addClass('past')
       }
       // checking local storage to set textbox event

       var hourId = allTimebox[i].id
       savedTask = localStorage.getItem(hourId);
       $(allTimebox[i]).children('textarea').html=savedTask;
    }
    /// check local storage for 
    // var hourId = this.parentNode.id 
    // savedTask = localStorage.getItem(hourId);
    // $(this).siblings('textarea').html = savedTask;
})

// click event
$('button').on('click', function () {
    var hourId = this.parentNode.id 
    var taskName = $(this).siblings('textarea').val()

    localStorage.setItem(hourId, JSON.stringify(taskName))

 });


  

   