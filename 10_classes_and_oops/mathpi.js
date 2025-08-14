// Math.PI is called as universal constant
console.log(Math.PI)
Math.PI = 5; // trying to change the PI value
console.log(Math.PI) // PI value is still 3.41


// Object itertion can be stopted by disabling some of it's property
// getOwnPropertyDescriptor tells about hidden things about an object, which accept a object and a key of it as parameter
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descriptor) // the result of the console is as below, writable, enumerable and configurable is false
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,       
//   configurable: false      
// }

// we can create a object and make it's key writable, enumerable and configurable as false

const chai = {
    name: 'ginger chai',
    price: 100,
    isAvailable: true,

    orderChai: function(){
        console.log('Order Chai')
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name")) // it give below output
// {
//   value: 'ginger chai',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

// we can change an object properties using defineProperty() which accept three parameters, Object, property/key, and object where you set the properties as below

Object.defineProperty(chai, "name", {
    // writable: false,
    enumerable: false // as we have made enumerable to be false here in name property of chai object, hence it will not be included in the loop which is done by the chai object as below
})

// console.log(Object.getOwnPropertyDescriptor(chai, "name")) // it give below output
// {
//   value: 'ginger chai',
//   writable: false,
//   enumerable: false,
//   configurable: true
// }

for (const [key, value] of Object.entries(chai)) {
    // we are using for of loop to iterate each entry key and values of an object
    // if we have a method inside the object that will also displayed
    // But we should use if condition to avoid printing function as below
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`)
    }
}