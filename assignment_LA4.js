// Initialize the queue as an empty array
let queue = [];

// Function to add a customer to the queue
function addCustomer(name) {
    queue.push(name);  // Add the customer's name to the queue
    console.log(`Customer ${name} added to the queue.`);  // Log the addition
    console.log("Updated Queue: ", queue);  // Display the updated queue
}

// Function to service a customer
function serviceCustomer() {
    let number = prompt("Enter the customer number to be serviced (1-5):");  // Ask for customer number
    let index = number - 1;  // Convert to 0-based index

    // Check if the entered number is valid
    if (index >= 0 && index < queue.length) {
        // Service the customer and remove them from the queue
        let customerName = queue.splice(index, 1)[0];  // Remove and get the customer name
        alert(`Serving customer: ${customerName}`);  // Alert the customer being serviced
        console.log("Updated Queue: ", queue);  // Display the updated queue after service
    } else {
        alert("Invalid customer number! Please enter a number between 1 and 5.");  // If number is invalid
    }
}

// Main program execution
function runQueueSystem() {
    // Ask for customers' names and add them to the queue
    let customers = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];
    for (let i = 0; i < customers.length; i++) {
        let name = prompt(`Enter the name for customer ${i + 1}:`);  // Ask for customer's name
        addCustomer(name);  // Add the customer's name to the queue
    }

    // Service customers one by one
    for (let i = 0; i < customers.length; i++) {
        serviceCustomer();  // Service the next customer
    }

    // Final state of the queue (should be empty if all customers are serviced)
    console.log("Final Queue: ", queue);
}

// Start the Queueing System
runQueueSystem();
