// const coding = ["js", "cpp", "py", "java"];

// const value = coding.forEach( (item) => {
//     console.log(item); // This will log each value in the array
// })

// console.log(value); // This will log undefined because forEach does not return anything

const myNums = [1, 2, 3, 4, 5];

// const filterNums = myNums.filter( (num) => num > 4 );
// console.log(filterNums); // This will log [5] because filter returns a new array with elements that pass the test implemented by the provided function

const filterNums = myNums.filter((num) => {
  return num > 4; // This will filter the array and return a new array with elements greater than 4
});
// console.log(filterNums); // This will log [5] because filter returns a new array with elements that pass the test implemented by the provided function

// const newNums = []
// myNums.forEach( (num) => {
//     if(num > 4){
//         newNums.push(num); // This will push the number into the newNums array if it is greater than 4
//     }
// })
// console.log(newNums); // This will log [5] because we pushed the number greater than 4 into the newNums array

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "None-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "NOne-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 }
];

// const userBooks = books.filter( (bk) => bk.genre === "History" )

const userBooks = books.filter((bk) => bk.publish >= 1989 && bk.genre === "History")
console.log(userBooks)