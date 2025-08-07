// 1.
javascript
let tasks = [];

function addTask(task, callback) {
    tasks.push(task); // Add the task to the array
    if (typeof callback === 'function') {
        callback(task); // Call the callback after adding
    }
}

// Example usage:
addTask("Finish homework", function(task) {
    console.log(`Task "${task}" added successfully.`);
    console.log("Current tasks:", tasks);
});
```

// 2.

javascript
let tasks = [];

function addTask(task, callback) {
    tasks.push(task);
    if (typeof callback === 'function') {
        callback();
    }
}

// Callback function that prints all tasks
function printTasks() {
    console.log("Current tasks:");
    tasks.forEach((task, index) => {
        console.log(`index + 1.{task}`);
    });
}

// Example usage
addTask("Finish homework", printTasks);
addTask("Buy groceries", printTasks);