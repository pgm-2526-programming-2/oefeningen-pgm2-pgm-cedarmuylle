// function greetings(name = "stranger") {
//     return `Hello there, ${name}.`
// }

// console.log(greetings("General Kenobi"));
// console.log(greetings());


// function controlAge(age) {
//     if (age < 18) {
//         return "Not an adult"
//     }

//     return "Adult"
// }

// console.log(controlAge(16));
// console.log(controlAge(18));
// console.log(controlAge(25));


// function myCallback() {
//     console.log("This is the callback");
// }

// function mainLogic(callbackFn) {
//     callbackFn();
// }

// mainLogic(myCallback);


// let myNumber = {
//     num: 20,
// }
// increaseByTen(myNumber);
// console.log("Number:", myNumber);

// function increaseByTen(obj) {
//     obj.num += 10;
// }

//oef 9:
const todoList = [
    {
        task: "Complete Project",
        subtasks: [
            {
                task: "Write Code",
                subtasks: [
                    { task: "Implement Feature A" },
                    { task: "Test Feature A" },
                    { task: "Refactor Code" },
                ],
            },
            {
                task: "Document Project",
                subtasks: [{ task: "Write Readme" }, { task: "Create Documentation" }],
            },
        ],
    },
    {
        task: "Prepare Presentation",
        subtasks: [{ task: "Create Slides" }, { task: "Practice Delivery" }],
    },
];

function showTasks(list) {
    for (const item of list) {
        console.log(item.task);

        if (item.subtasks) {
            showTasks(item.subtasks);
        }
    }
}

showTasks(todoList);