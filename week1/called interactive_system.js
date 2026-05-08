let name;
let age;

// Prompt for name until valid
while (1) {
    name = prompt("Enter your name: ");
    if (name === null || name.trim() === "") {
        alert("Please enter your name. It cannot be empty.");
    } else {
        break;
    }
}

// The loop will repeat while the age is NOT a valid number or out of range
while (2) {
    let input = prompt("Enter your age: ");

    // Convert the entered text to number
    age = Number(input);

    // Validation 1: Check if the user canceled the prompt or left it empty
    if (input === null || input.trim() === "") {
        alert("Please enter value. It cannot be empty.");
    }
    // Validation 2: Check if the value is not a number (e.g., "twenty")
    else if (isNaN(age)) {
        alert("Error: You must enter a valid number.");
    }
    // Validation 3: Check if the number is logical (between 0 and 120)
    else if (age < 0 || age > 120) {
        alert("Error: Please enter a real age between 0 and 120 years.");
    }
    // If it passes all validations, we break the loop
    else {
        break;
    }
}

// Once the age is validated, the program logic is executed
if (age < 18) {
    alert(`Hello ${name}, you are underage. Keep learning and enjoying the code!`);
} else {
    alert(`Hello ${name}, you are of legal age. Get ready for great opportunities!`);
}
