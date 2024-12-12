// Simple Hash Table-based Queueing System
// Basic hash function  
function hash(name) {
    let sum = 0;
    for (let i = 0; i < name.length; i++) {
        sum += name.charCodeAt(i);
    }
    return sum % 10; // the table size is 10, adjust as needed
}

// Hash table (array)
const hashTable = new Array(10).fill(null);

// Add initial customers
const customers = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];
customers.forEach(customer => {
    const index = hash(customer);
    if (hashTable[index] === null) {
        hashTable[index] = customer;
    } else {
        console.log(`Collision for ${customer}.  Consider better collision handling.`); 
    }
});

// Service customers
function displayTable(){
    console.log("Hash Table:");
    hashTable.forEach((customer, index) => {
        if(customer){
            console.log(`${index+1}. ${customer}`);
        } else {
            console.log(`${index+1}. Empty`); //Show empty slots
        }
    });
}

while (hashTable.some(customer => customer !== null)) {
    displayTable();
    let serviceNum;
    while(true){  //Loop until valid input
      const input = prompt("Enter customer number to serve (or 'done'):");
      if(input.toLowerCase() === 'done'){
        serviceNum = -1; //Signal to exit outer loop
        break;
      }
      serviceNum = parseInt(input);
      if (!isNaN(serviceNum) && serviceNum >= 1 && serviceNum <= hashTable.length) {
          break;
      }
      console.log("Invalid input. Please enter a number between 1 and 10, or 'done'.");
    }
    if(serviceNum === -1) break; // if done was entered exit outer loop

    if (hashTable[serviceNum - 1]) {
        console.log(`Served: ${hashTable[serviceNum - 1]}`);
        hashTable[serviceNum - 1] = null;
    } else {
        console.log("No customer at that index.");
    }
}
console.log("All customers served.");

          
