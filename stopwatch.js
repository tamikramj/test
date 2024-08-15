// Stopwatch functionality
let stopwatchInterval;
let elapsedTime = 0;
let personCount = 1; // Counter for person
const stopwatch = document.getElementById('stopwatch');
const startButton = document.getElementById('startButton');
const clearButton = document.getElementById('clearButton');
const timeRecords = document.getElementById('timeRecords');
const servingNumber = document.getElementById('servingNumber');

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

    // Record the previous time with person count
    if (elapsedTime > 0) {
        const record = document.createElement('p');
        record.textContent = `Person ${personCount} : ${formatTime(elapsedTime)}`;
        timeRecords.appendChild(record);
        personCount++;
    }

    // Reset stopwatch
    elapsedTime = 0;
    stopwatch.textContent = formatTime(elapsedTime);
    stopwatch.style.color = '#042c57'; // Reset color to default

    // Start new stopwatch interval
    const startTime = Date.now();
    stopwatchInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        stopwatch.textContent = formatTime(elapsedTime);

        // Change color to red if elapsed time exceeds 15 minutes
        if (elapsedTime > 15 * 60 * 1000) { // 15 minutes in milliseconds
            stopwatch.style.color = '#c9302c'; // Red color for warning
        }
    }, 1000);
}

function clearRecords() {
    timeRecords.innerHTML = '';
    personCount = 1; // Reset person count
}

startButton.addEventListener('click', startStopwatch);
clearButton.addEventListener('click', clearRecords);