// Add event listeners to each section to toggle details
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const title = section.querySelector('h2');
        title.addEventListener('click', function() {
            section.classList.toggle('expanded');
        });
    });

    const subTitles = document.querySelectorAll('section h3');

    subTitles.forEach(subTitle => {
        subTitle.addEventListener('click', function() {
            subTitle.parentNode.classList.toggle('expanded');
        });
    });
});