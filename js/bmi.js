// BMI Calculator Functionality
document.addEventListener('DOMContentLoaded', function() {
    const bmiForm = document.querySelector('.chart-calculate-form form');

    if (bmiForm) {
        bmiForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission

            // Get input values
            const heightInput = document.querySelector('.chart-calculate-form input[placeholder="Height / cm"]');
            const weightInput = document.querySelector('.chart-calculate-form input[placeholder="Weight / kg"]');

            const height = parseFloat(heightInput.value) / 100; // Convert cm to meters
            const weight = parseFloat(weightInput.value);

            // Validate inputs
            if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
                alert("Please enter valid height and weight values.");
                return;
            }

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

            // Update the placeholder text with the BMI result
            const placeholderText = document.querySelector('.chart-calculate-form p');
            if (placeholderText) {
                placeholderText.innerHTML = `
                    Your BMI is: <strong>${bmi}</strong><br>
                    Category: <strong>${category}</strong>
                `;
            }
        });
    }
});
