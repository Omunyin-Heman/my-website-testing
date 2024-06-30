3. JavaScript (Optional)
Add JavaScript for interactivity, such as hover effects or modal windows to display more details about each tool.

javascript
Copy code
// script.js

// Example: Toggle tool description on hover
const tools = document.querySelectorAll('.tool');

tools.forEach(tool => {
    tool.addEventListener('mouseenter', () => {
        tool.querySelector('p').style.display = 'block';
    });

    tool.addEventListener('mouseleave', () => {
        tool.querySelector('p').style.display = 'none';
    });
});
