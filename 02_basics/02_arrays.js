const marval_heroes = ["thor", "hulk", "ironman", "spiderman", "captain america"];
const dc_heroes = ["batman", "superman", "flash", "aquaman", "wonder woman"];

// marval_heroes.push(dc_heroes); // adds the entire dc_heroes array as a single element to the end of marval_heroes

// console.log(marval_heroes); // ["thor", "hulk", "ironman", "spiderman", "captain america", ["batman", "superman", "flash", "aquaman", "wondar woman"]]
// console.log(dc_heroes); // ["batman", "superman", "flash", "aquaman", "wonder woman"]

// console.log(marval_heroes[5][3]); // "aquaman", accessing the 4th element of the nested dc_heroes array within marval_heroes

const all_heroes = marval_heroes.concat(dc_heroes); // combines both arrays into a new array
// console.log(all_heroes); // ["thor", "hulk", "ironman", "spiderman", "captain america", "batman", "superman", "flash", "aquaman", "wonder woman"]

// concat is a method that creates a new array by combining two or more arrays. It does not modify the original arrays.
// push is a method that adds one or more elements to the end of an array and modifies the original array.

const all_heroes2 = [...marval_heroes, ...dc_heroes]; // using spread operator to combine both arrays
// console.log(all_heroes2); // ["thor", "hulk", "ironman", "spiderman", "captain america", "batman", "superman", "flash", "aquaman", "wonder woman"]


const frontend = ["HTML", "CSS"];
const backend = ["Node.js", "Express"];
const database = ["MongoDB", "PostgreSQL"];

const fullStack = [...frontend, ...backend, ...database];

// console.log(fullStack);
// ["HTML", "CSS", "Node.js", "Express", "MongoDB", "PostgreSQL"]

const multilayerArray = [1, 2, 3, [4, 5, 6], 7, 8, [6, 9, [2, 3]]];
// console.log(multilayerArray);
const flatedArray = multilayerArray.flat();
// console.log(flatedArray)
const fullyFlatArray = multilayerArray.flat(Infinity);
// console.log(fullyFlatArray)


console.log(Array.isArray("Ahmad")); 
console.log(Array.from("Ahmad"))

console.log(Array.from({name: "Ahmad"})) // it is very intersting, as can create an array for the value of object and also for the key of objects

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3))