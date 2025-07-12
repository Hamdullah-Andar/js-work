
// let index = 0
// while (index <= 10) {
//     console.log(`Value of index is : ${index}`)
//     index = index + 2;
// }

let myArray = ["flash", "batman", "superman"]
let arr = 0;
while (arr < myArray.length) {
    // console.log(`Value of arr is : ${arr} and element is : ${myArray[arr]}`)
    arr = arr + 1;
}

// let score = 1;
// do {
//     console.log(`Score value is: ${score}`)
//     score++;
// } while (score < 10);


let score = 11;

do {
    console.log(`Score value is: ${score}`) // This will execute at least once, and then check the condition, and it will display 11, as it start from 11
    score++;
} while (score < 10);