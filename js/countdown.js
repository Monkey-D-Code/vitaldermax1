// selecting elements
const Days = document.querySelectorAll(".timer .days h4");
const Hours = document.querySelectorAll(".timer .hours h4");
const Minutes = document.querySelectorAll(".timer .mins h4");
const Seconds = document.querySelectorAll(".timer .secs h4");



// get initial count value
const event_date = document.getElementsByClassName("timer")[0].getAttribute("data-date");

function countDown (){
    const today = new Date();
    const eventDay = new Date(event_date);
    const remainingTimeMs = eventDay.getTime() - today.getTime();
    let remainingTimeSecs = Math.floor(remainingTimeMs/1000);
    let minutes = Math.floor(remainingTimeSecs/60);
    let hours = Math.floor(minutes/60);
    let days = Math.floor(hours/24);

    hours = hours%24;
    minutes%=60;
    remainingTimeSecs%=60;

    Days.forEach(function(dayDiv){
        dayDiv.innerHTML = days;
    });
    Hours.forEach(function(hourDiv){
        hourDiv.innerHTML = hours;
    });
    Minutes.forEach(function(minsDiv){
        minsDiv.innerHTML = minutes;
    });
    Seconds.forEach(function(secsDiv){
        secsDiv.innerHTML = remainingTimeSecs;
    });

    setTimeout(countDown,1000);
}

countDown();





