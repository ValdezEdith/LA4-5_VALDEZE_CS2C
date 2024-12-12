// Define a simple hash function
function simpleHashFunction(name) {
    // This hash function returns the index based on the sum of  values of the characters in the name modulo the size of the table (5)
    let sum = 0;
    for (let i = 0; i < name.length; i++) {
        sum += name.charCodeAt(i);
    }
    return sum % 5;
}

//  Initialize the customers and their corresponding hashed table
const customers = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];
let hashedTable = Array(5).fill(null); // Create an empty hashed table with 5 slots

//  Hash customers into the table
for (let customer of customers) {
    const index = simpleHashFunction(customer);  // Get the index for the customer
    hashedTable[index] = customer;  // Store the customer's name at the hashed index
}

// Function to display the current state of the hashed table
function displayTable() {
    console.log("\nCurrent Hash Table (Queue):");
    for (let i = 0; i < hashedTable.length; i++) {
        console.log(`Index ${i + 1}: ${hashedTable[i] ? hashedTable[i] : 'Empty'}`);
    }
    console.log("\n");
}

//  Simulate the customer service interaction
function serveCustomers() {
    while (true) {
        // Display the current state of the hashed table
        displayTable();

        //  Ask for a number to service
        let number = prompt("Enter the customer number to be serviced (1-5, 0 to exit):");

        // Exit condition
        if (number === '0') {
            alert("Exiting the program.");
            break;
        }

        // Convert input to an integer
        number = parseInt(number, 10);

        if (isNaN(number)) {
            alert("Please enter a valid number.");
            continue;
        }

        // Check if the entered number is valid
        if (number < 1 || number > 5) {
            alert("Invalid number. Please enter a number between 1 and 5.");
            continue;
        }

        // Find the customer corresponding to the entered number
        const index = number - 1;  // Adjust index to be 0-based
        const customer = hashedTable[index];

        if (customer) {
            // Print the name of the customer being serviced
            alert(`Serving customer: ${customer}`);
            // Remove the customer from the queue (hashed table)
            hashedTable[index] = null;  // Set the slot to null, meaning the customer has been served
        } else {
            alert("No customer at this number, please select a valid number.");
        }

        // Display updated table after servicing a customer
        displayTable();
    }
}

// Start the customer service simulation
serveCustomers();
        
