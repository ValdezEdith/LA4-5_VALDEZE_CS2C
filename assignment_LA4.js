// a simple Queueing System

class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(customer) {
        this.items.push(customer);
        return this.items.length; //lets Queue number
    }
    dequeue(num) { //lets remove by number
        if (num >= 1 && num <= this.items.length) {
            return this.items.splice(num - 1, 1)[0]; //Remove and return
        }
        return null; //Its invalid number
    }
    display() {
        console.log(this.items.map((c, i) => `${i + 1}. ${c}`).join('\n'));
    }
}

const q = new Queue();
["Elaine", "Althea", "Angelo", "Lito", "Engelbert"].forEach(c => q.enqueue(c));

while (q.items.length > 0) {
    q.display();
    let num = parseInt(prompt(`Serve customer number (1-${q.items.length}) or type 'done':`));
    if (isNaN(num) || num < 1 || num > q.items.length) {
      if(prompt("Enter valid number to serve or 'done':").toLowerCase() === 'done'){
        break;
      }
      continue;
    }
    let served = q.dequeue(num);
    if(served){
        console.log(`Served: ${served}`);
    }
}
console.log("Queue is empty.");
