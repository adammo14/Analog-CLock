//grab clock arms
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

//current date
var date = new Date();
console.log(date);

//pretty current date
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);

//circle(360deg) divided into 60 segments (seconds)
let secPosition = sec*360/60;
//circle(360deg) divided into 60 segments (minutes) + move min arm based on sec arm position
let minPosition = (min*360/60)+(sec*(360/60)/60);
//circle(360deg divided into 12 segments (hours) + move hours arm based on min arm position
let hrPosition = (hr*360/12)+(min*(360/60)/12);

function runTheClock() {
    //return to zero fix
    //current val of sec + 6 (deg)
    secPosition = secPosition+6;
    minPosition = minPosition+(6/60);
    hrPosition = hrPosition+(3/360);

    //position clock arms
    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

}
//repeat runTheClock function every second
var interval = setInterval(runTheClock, 1000);
