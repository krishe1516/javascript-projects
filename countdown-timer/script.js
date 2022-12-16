const day1 = document.getElementById("days");
const hour1 = document.getElementById("hours");
const min1 = document.getElementById("min");
const sec1 = document.getElementById("sec");

const newYear = "1 Jan 2023";

function countdown() {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const t = ((newYearDate - currentDate) / 1000);

    const days = Math.floor(t / (60 * 60 * 24));
    const hours = Math.floor((t / (60 * 60)) % 24);
    const mins = Math.floor((t / 60) % 60);
    const sec = Math.floor((t) % 60);

    day1.innerHTML = days;
    hour1.innerHTML = formatTime(hours);
    min1.innerHTML = formatTime(mins);
    sec1.innerHTML = formatTime(sec);
}
function formatTime(time) {
    return time < 10 ? `0${time}` : time;

}
countdown()
setInterval(countdown, 1000)
//math.floor - is used to largest integer less than or equal to a given number.