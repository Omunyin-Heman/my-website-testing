function registerForEvent(eventName) {
    alert(`You have successfully registered for the ${eventName}. We look forward to seeing you there!`);
}

function submitRegistration(event) {
    event.preventDefault();

    let fullName = document.getElementById('fullName').value;
    let email = document.getElementById('email').value;
    let selectedEvent = document.getElementById('event').value;

    // Simulate form submission (in a real scenario, this would be sent to a server)
    setTimeout(() => {
        document.getElementById('registrationForm').reset();
        document.getElementById('registrationStatus').textContent = `Thank you, ${fullName}! You are registered for the ${selectedEvent}. We will contact you at ${email} with further details.`;
    }, 1000); // Simulating a delay for effect
}
