const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const mappedNumbers = myNumbers.map( (num) => num + 10 ); // This will add 10 to each number in the array and return a new array
// console.log(mappedNumbers); // This will log [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

const mappedNumbers = [];

// myNumbers.forEach((num)=> {
//     if(num <= 10){
//         mappedNumbers.push(num + 10);
//     }
// })
// console.log(mappedNumbers); 

const mappedNumbers2 = myNumbers
                        .map((num) => num * 10)
                        .map((num) => num + 1)
                        .filter((num) => num > 50); // This will multiply each number by 10, add 1, 
                        // and then filter out numbers greater than 50, the result of first map will be saved and the second map will be applied to it, 
                        // hence the prcess is chained
console.log(mappedNumbers2); // This will log [61, 71, 81, 91, 101, 111, 121, 131, 141, 151] because it multiplies each number by 10, adds 1, and filters out numbers greater than 50