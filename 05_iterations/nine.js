const myNums = [1, 2, 3, 4, 5];

// const myTotal = myNums.reduce(function (acc, currVal) {
//     console.log(`Acc : ${acc}, CurrVal : ${currVal}`);
//     return acc + currVal;
// }, 0)

// const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0 );

const myTotal = myNums.reduce( (acc, curr) => {
    console.log(`Acc : ${acc}, Curr : ${curr}`);
    return acc + curr
}, 0 );

console.log(myTotal); // Output: 15

const shoppingCart = [
    { itemName: 'JS Course', price: 100},
    { itemName: 'Python Course', price: 200},
    { itemName: 'Java Course', price: 400},
    { itemName: 'Data Science Course', price: 600},
]

const totalCartValue = shoppingCart.reduce((acc, item) => (acc + item.price), 0);
console.log(totalCartValue); // Output: 1300