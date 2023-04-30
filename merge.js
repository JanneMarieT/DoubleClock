
//get current time
function clock_2() {
    var today = new Date();

    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

    hours = hours > 24 ? hours % 24 : hours;


    //Add the 0 for the values lower than 10
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }


    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = seconds;

}

var updateClock = setInterval(clock_2, 1000);

//Get the date
var today = new Date();
const dayNumber = today.getDate();
const year = today.getFullYear();
const dayName = today.toLocaleString("default", { weekday: "short" });
const monthName = today.toLocaleString("default", { month: "short" });


document.querySelector(".day-name").innerHTML = dayName;
document.querySelector(".day-number").innerHTML = dayNumber;
document.querySelector(".month-name").innerHTML = monthName;
document.querySelector(".year").innerHTML = year;


var dialLines = document.getElementsByClassName('diallines');
var clockEl = document.getElementsByClassName('clock')[0];

for (var i = 1; i < 60; i++) {
    clockEl.innerHTML += "<div class='diallines'></div>";
    dialLines[i].style.transform = "rotate(" + 6 * i + "deg)";
}

function clock_1() {
    var weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ],
        d = new Date(),
        h = d.getHours(),
        m = d.getMinutes(),
        s = d.getSeconds(),
        date = d.getDate(),
        month = d.getMonth() + 1,
        year = d.getFullYear(),

        hDeg = h * 30 + m * (360 / 720),
        mDeg = m * 6 + s * (360 / 3600),
        sDeg = s * 6,

        hEl = document.querySelector('.hour-hand'),
        mEl = document.querySelector('.minute-hand'),
        sEl = document.querySelector('.second-hand'),
        dateEl = document.querySelector('.date'),
        dayEl = document.querySelector('.day');

    var day = weekday[d.getDay()];

    if (month < 9) {
        month = "0" + month;
    }

    hEl.style.transform = "rotate(" + hDeg + "deg)";
    mEl.style.transform = "rotate(" + mDeg + "deg)";
    sEl.style.transform = "rotate(" + sDeg + "deg)";
    dateEl.innerHTML = date + "/" + month + "/" + year;
    dayEl.innerHTML = day;
}

setInterval("clock_1()", 100);
