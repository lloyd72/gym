document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
    const weight = parseFloat(document.getElementById('weight').value);

    // Calculate BMI
    const bmi = (weight / (height * height)).toFixed(2);

    // Determine BMI category
    let category = '';
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = 'Healthy';
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        category = 'Overweight';
    } else if (bmi >= 30.0) {
        category = 'Obese';
    }

    // Display result
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        Your BMI is: <strong>${bmi}</strong><br>
        Category: <strong>${category}</strong>
    `;
});
