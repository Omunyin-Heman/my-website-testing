function submitOrder(event) {
    event.preventDefault();

    let fullName = document.getElementById('fullName').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let mealType = document.getElementById('mealType').value;
    let deliveryAddress = document.getElementById('deliveryAddress').value;

    // Simulate order submission (in a real scenario, this would be sent to a server)
    setTimeout(() => {
        document.getElementById('mealOrderForm').reset();
        document.getElementById('orderStatus').textContent = `Thank you, ${fullName}! Your ${mealType.toLowerCase()} will be delivered to ${deliveryAddress}. We will contact you at ${email} or ${phone}.`;
    }, 1000); // Simulating a delay for effect
}
