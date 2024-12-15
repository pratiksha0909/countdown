
let countdownInterval;

function startCountdown() {
    const minutesInput = document.getElementById('minutesInput').value;
    const secondsInput = document.getElementById('secondsInput').value;
    const alertMessage = document.getElementById('alertMessage');
    const timerDisplay = document.getElementById('timerDisplay');

    // Clear previous countdown
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }

    // Validate input
    if (minutesInput === "" || secondsInput === "" || parseInt(minutesInput) < 0 || parseInt(secondsInput) < 0) {
        alertMessage.textContent = "Please enter valid values for both minutes and seconds.";
        return;
    }

    let totalTimeInSeconds = (parseInt(minutesInput) * 60) + parseInt(secondsInput);

    countdownInterval = setInterval(function () {
        if (totalTimeInSeconds <= 0) {
            clearInterval(countdownInterval);
            alertMessage.textContent = "Time's up!";
            timerDisplay.textContent = "00:00";
        } else {
            const minutes = Math.floor(totalTimeInSeconds / 60);
            const seconds = totalTimeInSeconds % 60;

            timerDisplay.textContent = formatTime(minutes) + ':' + formatTime(seconds);
            totalTimeInSeconds--;
        }
    }, 1000);

    alertMessage.textContent = "";
}
function stopCountdown() {
    const alertMessage = document.getElementById('alertMessage');
    if (countdownInterval) {
        clearInterval(countdownInterval);
        countdownInterval = null; // Reset the interval variable
        alertMessage.textContent = "Countdown stopped!";
    }
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}
