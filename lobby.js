// Function to play the notification sound
function playNotificationSound() {
    const sound = document.getElementById('notificationSound');
    sound.play().catch(error => console.log('Sound playback failed:', error));
}

// Function to apply the blink effect
function applyBlinkEffect(element) {
    element.classList.add('blink');
    setTimeout(() => {
        element.classList.remove('blink');
    }, 3000); // Remove the class after 3 seconds to stop blinking
}

// Function to update the display of room numbers
function updateDisplay() {
    const room1Number = localStorage.getItem('room1Number') || '-';
    const room2Number = localStorage.getItem('room2Number') || '-';
    const room3Number = localStorage.getItem('room3Number') || '-';

    const room1Element = document.getElementById('room1');
    const room2Element = document.getElementById('room2');
    const room3Element = document.getElementById('room3');

    // Check if the numbers have changed and update the display
    if (room1Element.textContent !== room1Number) {
        room1Element.textContent = room1Number;
        applyBlinkEffect(room1Element);
        playNotificationSound();
    }
    if (room2Element.textContent !== room2Number) {
        room2Element.textContent = room2Number;
        applyBlinkEffect(room2Element);
        playNotificationSound();
    }
    if (room3Element.textContent !== room3Number) {
        room3Element.textContent = room3Number;
        applyBlinkEffect(room3Element);
        playNotificationSound();
    }
}

// Function to update date and time
function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString(undefined, options);
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    document.getElementById('dateTime').textContent = `${dateString}, ${timeString}`;
}

// Function to clear room numbers
function clearRoomNumbers() {
    localStorage.removeItem('room1Number');
    localStorage.removeItem('room2Number');
    localStorage.removeItem('room3Number');
    updateDisplay();
}

window.onload = () => {
    updateDisplay();
    updateDateTime();
    setInterval(updateDateTime, 1000); // Update time every second
};

// Listen for changes in localStorage and update the display accordingly
window.addEventListener('storage', updateDisplay);
