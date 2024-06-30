/ Add event listeners to each section to toggle details
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const title = section.querySelector('h2');
        title.addEventListener('click', function() {
            section.classList.toggle('expanded');
        });
    });
});