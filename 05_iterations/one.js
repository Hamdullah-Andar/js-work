// for

for (let i = 0; i <= 10; i++) {
    const element = i;

    if(element == 5){
        // console.log("5 is my favorite number")
    }
    // console.log(element);
}

// console.log(element)

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer Loop value : ${i}`)
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner Loop value : ${j} and Inner Loop ${i}`)
        // console.log(i + ' * ' + j + ' = ' + (i * j))
    }
}

let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length)

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element)
}


// break and continue 

// for (let index = 1; index <= 20; index++) {
//     if(index == 5){
//         console.log(`5 is Detected`)
//         break // breaks the loop and get out of the loop
//     }
//     console.log(`Value of inex is : ${index}`)   
// }

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`5 is Detected`)
        continue // continue skips the current iteration and continues with the next one
    }
    console.log(`Value of inex is : ${index}`)   
}