const supplementsData = [
    {
        name: 'Prenatal Vitamins',
        function: 'Provides essential nutrients like folic acid, iron, and calcium crucial for fetal development and maternal health during pregnancy.'
    },
    {
        name: 'Iron',
        function: 'Critical for the production of hemoglobin, which carries oxygen in the blood. Essential for preventing anemia in pregnant women.'
    },
    {
        name: 'Omega-3 Fatty Acids',
        function: 'Supports fetal brain and eye development during pregnancy.'
    },
    {
        name: 'Calcium',
        function: 'Important for developing strong bones and teeth in both the mother and developing baby.'
    },
    {
        name: 'Vitamin D',
        function: 'Supports bone health and immune function for both the mother and baby.'
    },
    {
        name: 'Multivitamin for Children',
        function: 'Provides essential vitamins and minerals to support growth and development in children.'
    },
    {
        name: 'Protein Supplement',
        function: 'Helps in muscle repair and growth, crucial for malnourished children to regain strength.'
    },
    {
        name: 'Zinc',
        function: 'Supports immune function and growth in children.'
    },
    {
        name: 'Vitamin A',
        function: 'Critical for vision, immune function, and cell growth in children under 5 years old.'
    },
    {
        name: 'Nutrient-enriched Ready-to-use Therapeutic Food (RUTF)',
        function: 'High-energy, fortified food used to treat severe acute malnutrition in children under 5 years old.'
    }
];

document.addEventListener('DOMContentLoaded', function() {
    const supplementsList = document.getElementById('supplementsList');

    supplementsData.forEach(supplement => {
        let supplementDiv = document.createElement('div');
        supplementDiv.classList.add('supplement');
        
        let nameHeader = document.createElement('h2');
        nameHeader.textContent = supplement.name;
        
        let functionPara = document.createElement('p');
        functionPara.textContent = supplement.function;

        supplementDiv.appendChild(nameHeader);
        supplementDiv.appendChild(functionPara);

        supplementsList.appendChild(supplementDiv);
    });
});
