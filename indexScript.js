function loaded() {
    var startbtn = document.getElementById('startbutton');
    var stopbtn = document.getElementById('endbutton');
    var label = document.getElementById('time');
    var starSec = Date.now();
    var interval;
    label.innerText = "00:00:00";

    startbtn.addEventListener("click", event => {
        alert("You can start reading!");
        starSec = Date.now();
        startbtn.value = "RESET"
        interval = setInterval(() => {
            // calculate sec to time : pass sec : milli sec / 1000
            label.innerText = secondsToTime((Date.now() - starSec) / 1000)
        }, 1000);
    });
    stopbtn.addEventListener("click", event => {
        startbtn.value = "START";
        clearInterval(interval);
        alert("You can stop reading!");
    });
}
// convert sec to hr:min:sec
let secondsToTime = sec => {
    // found hous
    let hou = Math.floor(sec / 60 / 60);
    // min = total min - hours in min
    let min = Math.floor(sec / 60) - hou * 60;
    //seconds = total seconds - hours in sec - min in sec
    let secs = Math.floor(sec - (hou * 60 * 60) - (min * 60));
    //return final time
    return numToTimeString(hou) + ":" + numToTimeString(min) + ":" + numToTimeString(secs);
};
// convert sec to round
let numToTimeString = (num, rnd = 2) => (Math.pow(10, rnd - (num + "").length) + "").substring(1) + num;