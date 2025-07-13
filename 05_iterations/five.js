const coding = ["js", "cpp", "py", "java"];

// coding.forEach( function (value) {
//     console.log(value); // This will log each value in the array
// })

// coding.forEach( (item) => {
//     console.log(item); // This will log each value in the array
// })

// function logValue(value){
//     console.log(value); // This will log each value in the array
// }

// coding.forEach(logValue); // This will log each value in the array using a separate function

// coding.forEach( (item, index, arr) => {
//     console.log(`Item: ${item}, Index: ${index}, Array: ${arr}`); // This will log each value, its index, and the entire array
// })

const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js",
        type: "Dynamic",
    },
    {
        languageName: "Java",
        languageFileName: "java",
        type: "Static",
    },
    {
        languageName: "Python",
        languageFileName: "py",
        type: "Dynamic",
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})
