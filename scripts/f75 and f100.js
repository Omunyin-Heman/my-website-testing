document.addEventListener('DOMContentLoaded', function() {
    const stepsContainer = document.getElementById('steps-container');
    const detailsContainer = document.getElementById('details-container');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    // Steps and their details for F75 and F100 preparation
    const f75Steps = [
        { title: 'Step 1 (F75): Gather Ingredients', details: 'Gather F75 powder, clean boiled water, mixing container, and stirring utensil.' },
        { title: 'Step 2 (F75): Mixing F75', details: 'Mix 75 grams of F75 powder with 1 liter of clean, boiled water. Stir until fully dissolved.' },
        { title: 'Step 3 (F75): Cooling', details: 'Allow the prepared F75 mixture to cool to body temperature (approximately 37°C or 98.6°F) before use.' },
        { title: 'Step 4 (F75): Administration', details: 'Administer F75 to the child in small, frequent feeds as per medical recommendation.' }
    ];

    const f100Steps = [
        { title: 'Step 1 (F100): Gather Ingredients', details: 'Gather F100 powder, clean boiled water, mixing container, and stirring utensil.' },
        { title: 'Step 2 (F100): Mixing F100', details: 'Mix 100 grams of F100 powder with 1 liter of clean, boiled water. Stir until fully dissolved.' },
        { title: 'Step 3 (F100): Cooling', details: 'Allow the prepared F100 mixture to cool to body temperature (approximately 37°C or 98.6°F) before use.' },
        { title: 'Step 4 (F100): Administration', details: 'Administer F100 to the child in small, frequent feeds as per medical recommendation.' }
    ];

    let currentStep = 0;
    let currentSteps = f75Steps; // Start with F75 steps

    // Initialize the UI with the first step
    updateStep(currentStep);

    function updateStep(stepIndex) {
        const step = currentSteps[stepIndex];
        detailsContainer.innerHTML = `<h2>${step.title}</h2><p>${step.details}</p>`;
    }

    // Event listeners for navigation buttons
    nextBtn.addEventListener('click', function() {
        if (currentStep < currentSteps.length - 1) {
            currentStep++;
            updateStep(currentStep);
            prevBtn.disabled = false;
        }
        if (currentStep === currentSteps.length - 1) {
            nextBtn.disabled = true;
        }
    });

    prevBtn.addEventListener('click', function() {
        if (currentStep > 0) {
            currentStep--;
            updateStep(currentStep);
            nextBtn.disabled = false;
        }
        if (currentStep === 0) {
            prevBtn.disabled = true;
        }
    });

    // Function to switch between F75 and F100 steps
    function switchTo(steps) {
        currentSteps = steps;
        currentStep = 0;
        updateStep(currentStep);
        prevBtn.disabled = true;
        nextBtn.disabled = false;
    }

    // Example: Add buttons or tabs to switch between F75 and F100
    const f75Btn = document.createElement('button');
    f75Btn.textContent = 'F75 Steps';
    f75Btn.classList.add('btn');
    f75Btn.addEventListener('click', function() {
        switchTo(f75Steps);
    });
    stepsContainer.appendChild(f75Btn);

    const f100Btn = document.createElement('button');
    f100Btn.textContent = 'F100 Steps';
    f100Btn.classList.add('btn');
    f100Btn.addEventListener('click', function() {
        switchTo(f100Steps);
    });
    stepsContainer.appendChild(f100Btn);
});