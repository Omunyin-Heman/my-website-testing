function handleRegistration(event) {
    event.preventDefault();
    
    // Get form values
    let fullName = document.getElementById('fullName').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let course = document.getElementById('course').value;
    let comments = document.getElementById('comments').value;
    
    // Simulate registration process (in a real scenario, this would be sent to a server)
    setTimeout(() => {
        document.getElementById('registrationForm').reset();
        document.getElementById('message').textContent = `Thank you, ${fullName}, for registering for "${course}". We will contact you at ${email} or ${phone}.`;
    }, 1000); // Simulating a delay for effect
}

