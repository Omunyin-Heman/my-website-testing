function submitForm(event) {
    event.preventDefault();

    let fullName = document.getElementById('fullName').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    // Simulate form submission (in a real scenario, this would be sent to a server)
    setTimeout(() => {
        document.getElementById('contactForm').reset();
        document.getElementById('submitMessage').textContent = `Thank you, ${fullName}! We have received your message. Our team will contact you at ${email} shortly.`;
    }, 1000); // Simulating a delay for effect
}