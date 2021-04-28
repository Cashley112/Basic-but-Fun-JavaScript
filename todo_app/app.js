console.log('hello');

let userInput = prompt('Welcome to the Todo App, what action would you like to perform?').toLowerCase();
console.log(userInput);

const todoList = [];

while (userInput !== 'quit') {
    if (userInput === 'new') {
        userInput = prompt('Please enter your new task: ');
        todoList.push(userInput);
        console.log(`${userInput} added to list.`);
    } else if (userInput === "list") {
        console.log('----------');
        for (let i = 0; i < todoList.length; i++) {
            console.log(`${i}: ${todoList[i]}`);
        }
        console.log('----------');
    } else if (userInput === 'delete') {
        userInput = parseInt(prompt('Please enter the index of the task to be deleted: '));
        if (!Number.isNaN(userInput)) {
            let deleted = todoList.splice(userInput, 1);
            console.log(`${deleted} has been removed from the list.`);
        } else {
            console.log('Unknown Index...');
        }
        
    } else {
        userInput = prompt('Please enter a valid command: ');
    }
    userInput = prompt('What next?').toLowerCase();
}












