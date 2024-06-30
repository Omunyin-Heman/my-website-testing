function submitForm(event) {
    event.preventDefault();

    let fullName = document.getElementById('fullName').value;
    let email = document.getElementById('email').value;
    let interest = document.getElementById('interest').value;

    // Simulate form submission (in a real scenario, this would be sent to a server)
    setTimeout(() => {
        document.getElementById('participationForm').reset();
        document.getElementById('submitMessage').textContent = `Thank you, ${fullName}! We have received your interest in our research opportunities. Our team will contact you at ${email} with more information.`;
    }, 1000); // Simulating a delay for effect
}
