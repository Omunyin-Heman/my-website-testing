// Example of available appointment slots (could be fetched from a server in a real application)
const availableAppointments = [
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM'
];

document.addEventListener('DOMContentLoaded', function() {
    const appointmentTimeSelect = document.getElementById('appointmentTime');

    // Populate appointment time options
    availableAppointments.forEach(time => {
        let option = document.createElement('option');
        option.value = time;
        option.textContent = time;
        appointmentTimeSelect.appendChild(option);
    });
});

function handleBooking(event) {
    event.preventDefault();
    
    // Get form values
    let fullName = document.getElementById('fullName').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let appointmentTime = document.getElementById('appointmentTime').value;
    
    // Simulate booking process (in a real scenario, this would be sent to a server)
    setTimeout(() => {
        document.getElementById('bookingForm').reset();
        document.getElementById('message').textContent = `Thank you, ${fullName}, for booking an appointment at ${appointmentTime}. We will contact you at ${email} or ${phone}.`;
    }, 1000); // Simulating a delay for effect
}
