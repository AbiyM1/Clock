
var hour = document.getElementById('hour');

var second = document.getElementById('second');

var minute = document.getElementById('minute');

setInterval(updateClock, 1000);

function updateClock(){
	let currentDate = new Date();
	let sec = currentDate.getSeconds() / 60;
	let min = (currentDate.getMinutes() + sec) / 60;
	let hour = (currentDate.getHours() + min) / 12;

	second.style.transform = "rotate(" + (sec * 360) + "deg)";
	minute.style.transform = "rotate(" + (min * 360) + "deg)";
	hour.style.transform = "rotate(" + (hour * 360) + "deg)";
}

updateClock();