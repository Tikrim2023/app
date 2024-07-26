// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const expenseForm = document.getElementById('expenseForm');

    expenseForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Fetch form values
        const date = expenseForm.date.value;
        const category = expenseForm.category.value;
        const description = expenseForm.description.value;
        const amount = parseFloat(expenseForm.amount.value);

        // Simple validation
        if (!date || !category || !description || isNaN(amount) || amount <= 0) {
            alert('Please fill out all fields correctly.');
            return;
        }

        // Create object with form data
        const formData = {
            date: date,
            category: category,
            description: description,
            amount: amount
        };

        // Mock example of what to do with the form data (you can replace this with your own logic)
        console.log('Form data:', formData);

        // Reset form after submission
        expenseForm.reset();

        // Optionally, show a success message
        const successMessage = document.createElement('p');
        successMessage.textContent = 'Expense added successfully!';
        successMessage.classList.add('success');
        expenseForm.insertAdjacentElement('beforebegin', successMessage);

        // Remove success message after 3 seconds
        setTimeout(function() {
            successMessage.remove();
        }, 3000);
    });
});