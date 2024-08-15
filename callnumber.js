// Call number functionality
function callNumber() {
    const number = document.getElementById('numberInput').value;
    if (number) {
        localStorage.setItem('room1Number', number);
        servingNumber.textContent = `Now Serving: ${number}`;
    } else {
        alert('Please enter a number');
    }
}