//your JS code here. If required.
function updateTime() {
	const now = new Date();

	const date = now.toLocaleDateString();
	const time = now.toLocaleTimeString();

	const updateDisplay = document.getElementById("time");
	updateDisplay.textContent = date + ", " + time;
}

setInterval(updateTime, 1000);

updateTime();