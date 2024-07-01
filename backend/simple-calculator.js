// Basic arithmetic operations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return 'Error: Division by zero is not allowed.';
    }
    return a / b;
}
// BMI Calculator
function calculateBMI(weight, height) {
    let bmi = weight / (height * height);
    return bmi.toFixed(2); // Returning BMI rounded to two decimal places
}

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        return 'Overweight';
    } else {
        return 'Obese';
    }
}
// Main function to interact with the user
function mainMenu() {
    console.log('Welcome to the Unique Calculator!');
    console.log('Please choose an option:');
    console.log('1: Addition');
    console.log('2: Subtraction');
    console.log('3: Multiplication');
    console.log('4: Division');
    console.log('5: Calculate BMI');
    console.log('6: Exit');
}

// Function to handle user input
function getUserChoice() {
    const prompt = require('prompt-sync')();
    return prompt('Enter your choice (1-6): ');
}
function getNumbers(){
    const prompt = require('prompt-sync')();
    const num1 = parseFloat(prompt('Enter the first number: '));
    const num2 = parseFloat(prompt('Enter the second number: '));

    return [num1, num2];
}

// Function to handle arithmetic operations
function performOperation(choice) {
    const prompt = require('prompt-sync')();
    const [num1, num2] = getNumbers();
    let result;

    switch(choice) {
        case '1':
            result = add(num1, num2);
            console.log(`Result: ${num1} + ${num2} = ${result}`);
            break;
        case '2':
            result = subtract(num1, num2);
            console.log(`Result: ${num1} - ${num2} = ${result}`);
            break;
        case '3':
            result = multiply(num1, num2);
            console.log(`Result: ${num1} * ${num2} = ${result}`);
            break;
        case '4':
            result = divide(num1, num2);
            console.log(`Result: ${num1} / ${num2} = ${result}`);
            break;
        case '5':
            let weight = parseFloat(prompt('Enter your weight in kg: '));
            let height = parseFloat(prompt('Enter your height in meters: '));
            let bmi = calculateBMI(weight, height);
            let category = getBMICategory(bmi);
            console.log(`Your BMI is ${bmi}. You are ${category}.`);
            break;
        case '6':
            console.log('Exiting the application. Goodbye!');
            return false;
        default:
            console.log('Invalid choice. Please enter a number between 1 and 6.');
    }

    return true;
}
// Main function to run the application
function main() {
    const prompt = require('prompt-sync')();
    let running = true;

    while (running) {
        mainMenu();
        let choice = getUserChoice();
        running = performOperation(choice);
    }
}

// Start the application
main();
