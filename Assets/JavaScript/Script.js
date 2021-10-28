/*
	👑Solopreneur 🖥️Full-Stack Developer 💸Freelancer
	Author : Nitin Chakraborty.
	eMail : nitin.chakraborty13@gmail.com
*/

function clock() {
	// Clock Elements
	var hours = document.getElementById("hours");
	var minutes = document.getElementById("minutes");
	var seconds = document.getElementById("seconds");

	// Time Notation
	var timeNotation = document.getElementById("timeNotation");

	// Clock Time
	var hour = new Date().getHours();
	var minute = new Date().getMinutes();
	var second = new Date().getSeconds();

	var AM = "AM";

	if (hour > 12) {
		hour = hour - 12;
		var AM = "PM";
	}

	hour = hour < 10 ? "0" + hour : hour;
	minute = minute < 10 ? "0" + minute : minute;
	second = second < 10 ? "0" + second : second;

	hours.innerHTML = hour;
	minutes.innerHTML = minute;
	seconds.innerHTML = second;

	timeNotation.innerHTML = AM;
}

// Interval
var interval = setInterval(clock, 1000);
