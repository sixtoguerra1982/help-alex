
document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth'
    });
    calendar.render();

    
});

// document.addEventListener("turbolinks:load", function(){
//     $('#calendar').fullCalendar({
//         eventSources: [
//     {
//         events: '<%= raw @events.to_json %>',
//         editable: true,
//         color: 'yellow',     
//         textColor: 'black', 
//         borderColor: 'black'
//     }

//     ]

//     });
// });