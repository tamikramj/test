let stopwatchInterval;
let elapsedTime = 0;
const stopwatch = document.getElementById('stopwatch');
const startButton = document.getElementById('startButton');
const timeRecords = document.getElementById('timeRecords');

function formatTime(timeInMilliseconds) {
    let date = new Date(timeInMilliseconds);
    let hours = String(date.getUTCHours()).padStart(2, '0');
    let minutes = String(date.getUTCMinutes()).padStart(2, '0');
    let seconds = String(date.getUTCSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

function startStopwatch() {
    // Clear previous interval
    if (stopwatchInterval) {
        clearInterval(stopwatchInterval);
    }

    // Record the previous time
    if (elapsedTime > 0) {
        const resetTimeFormatted = new Date().toLocaleTimeString();
        const record = document.createElement('p');
        record.textContent = `Elapse Time: ${formatTime(elapsedTime)} | Reset at: ${resetTimeFormatted} `;
        timeRecords.appendChild(record);
    }

    // Reset stopwatch
    elapsedTime = 0;
    stopwatch.textContent = formatTime(elapsedTime);

    // Start new stopwatch interval
    const startTime = Date.now();
    stopwatchInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        stopwatch.textContent = formatTime(elapsedTime);
    }, 1000);
}

startButton.addEventListener('click', startStopwatch);


document.getElementById('homeButton').addEventListener('click', () => {
    window.location.href = 'index.html'; // Change to your desired URL
});