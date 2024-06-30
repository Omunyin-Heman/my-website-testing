// Function to display specific services content
function displayServices(categoryTitle, classSelector) {
    // Example content for each category
    const contentMap = {
        'Nutrition Education': `
            <h2>Assess Client Needs and Goals</h2>
            <p>Before starting any education program, assess each client’s nutritional needs, health goals, medical history, and current dietary habits. This helps tailor the education to their specific situation.</p>
            <h2>Create Educational Materials</h2>
            <p>Develop easy-to-understand materials such as pamphlets, fact sheets, or digital resources that cover fundamental topics in nutrition. These could include healthy eating principles, portion control, reading food labels, etc.</p>
            <h2>Offer One-on-One Counseling</h2>
            <p>Schedule individual sessions with clients to discuss their personalized nutrition plans based on their needs and goals. Provide guidance on meal planning, healthy food choices, and strategies for overcoming barriers to healthy eating.</p>
            <h2>Host Group Workshops</h2>
            <p>Conduct group workshops on various nutrition topics to educate multiple clients simultaneously. Topics could range from managing weight to understanding nutrient needs for different life stages or conditions (e.g., pregnancy, diabetes).</p>
        `,
        'Cancer Management': `
            <h2>Assessment and Individualized Planning</h2>
            <p>Conduct thorough assessments of each cancer patient’s nutritional status, medical history, treatment plan (e.g., chemotherapy, radiation), symptoms (e.g., nausea, loss of appetite), and dietary preferences.</p>
            <h2>Develop Personalized Nutrition Plans</h2>
            <p>Develop personalized nutrition plans that align with the patient’s treatment goals, focusing on maintaining optimal nutrition, managing side effects, and supporting overall well-being.</p>
            <h2>Educational Support</h2>
            <p>Provide comprehensive education on nutrition during cancer treatment, emphasizing the importance of adequate protein, calories, and hydration.</p>
            <h2>Nutritional Supplementation</h2>
            <p>Recommend appropriate nutritional supplements (e.g., protein shakes, vitamins) based on individual needs and deficiencies identified through assessments.</p>
        `,
        'Diabetes Management': `
            <h2>Content for Diabetes Management</h2>
            <p>Insert content specific to Diabetes Management here.</p>
            <!-- Add relevant information -->
        `,
        'Food Allergies': `
            <h2>Content for Food Allergies</h2>
            <p>Insert content specific to Food Allergies here.</p>
            <!-- Add relevant information -->
        `,
        'Medical Nutrition Therapy': `
            <h2>Content for Medical Nutrition Therapy</h2>
            <p>Insert content specific to Medical Nutrition Therapy here.</p>
            <!-- Add relevant information -->
        `
    };

    // Get the main body element
    const mainBody = document.querySelector('.main-body');

    // Check if the categoryTitle exists in contentMap
    if (contentMap.hasOwnProperty(categoryTitle)) {
        mainBody.innerHTML = contentMap[categoryTitle];
        // Add class to main body for styling purposes if provided
        if (classSelector) {
            mainBody.classList.add(classSelector);
        }
    } else {
        mainBody.innerHTML = `<p>Content for ${categoryTitle} is not available.</p>`;
    }
}

// Function to clear previous content in main body
function clearContent() {
    const mainBody = document.querySelector('.main-body');
    mainBody.innerHTML = '';
    // Remove any added class for specific styling
    mainBody.classList.remove('.js-nutrition-education', '.js-cancer-management', '.js-diabetes-management', '.js-food-allergies', '.js-medical-nutrition-therapy');
}
Explanation
JavaScript Updates:

The showContent(category) function now calls displayServices(categoryTitle, classSelector) with specific parameters for each dropdown menu item.
displayServices(categoryTitle, classSelector) checks the categoryTitle and displays corresponding content from contentMap.
It also adds a class (classSelector) to the .main-body element if provided, which can be used for specific styling.
HTML and CSS:

Ensure your HTML structure remains as previously defined.
Update or add CSS rules (styles.css) to style the .main-body content based on the added classes (js-nutrition-education, js-cancer-management, etc.).
Integration:

Replace the placeholders (<!-- Add relevant information -->) with actual content specific to each category.
Customize contentMap as needed to include detailed information for each service category.
By organizing the content and functionality in this manner, your webpage will dynamically display detailed information based on the selected dropdown menu item, ensuring a user-friendly and informative experience. Adjust CSS styles and content within contentMap to match your design and service offerings accurately.




