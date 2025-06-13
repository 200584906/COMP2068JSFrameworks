const connect = require('connect');
const url = require('url');

// Math calculation handler function
function handleCalculationRequest(req, res) {
    // Parse the URL and extract query parameters
    const queryParams = url.parse(req.url, true).query;
    const operation = queryParams.method; // operation type (add, subtract, etc.)
    const num1 = parseFloat(queryParams.x); // first number
    const num2 = parseFloat(queryParams.y); // second number

    let result;       // to store the final calculation result
    let operator;     // to store the mathematical symbol

    // Check if input values are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        res.end("Error: x and y must be valid numbers.");
        return;
    }

    // Perform operation based on the "method" parameter
    switch (operation) {
        case 'add':
            result = num1 + num2;
            operator = '+';
            break;
        case 'subtract':
            result = num1 - num2;
            operator = '-';
            break;
        case 'multiply':
            result = num1 * num2;
            operator = '*';
            break;
        case 'divide':
            if (num2 === 0) {
                res.end("Error: Division by zero.");
                return;
            }
            result = num1 / num2;
            operator = '/';
            break;
        default:
            res.end("Error: Invalid method. Use add, subtract, multiply, or divide.");
            return;
    }

    // Return the result as a formatted string
    res.end(`${num1} ${operator} ${num2} = ${result}`);
}

// Create a Connect app instance
const app = connect();

// Register middleware to handle requests at the /LAB03 endpoint
app.use('/LAB03', handleCalculationRequest);

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000/LAB03');
});
