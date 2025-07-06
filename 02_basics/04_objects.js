const user = new Object()
// const user = {}

user.id = "123abc"
user.name = "Ahmad"
user.isLoggedIn = false

// console.log(user)

const anothorUser = {
    email: "user@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Ahmad",
            lastname: "Ahmadi"
        }
    }
}

// console.log(anothorUser?.fullname?.userfullname?.firstname) // Optional Chaining protect us from encountring an error when the value is not available which can be done using ?

// the nullish coalescing operator (??) — it’s like the chill cousin of the || operator, but with more precise vibes.
// ?? returns the right-hand value only if the left-hand value is null or undefined.

const name = null ?? "Guest";       // 👉 "Guest"
const age = undefined ?? 25;        // 👉 25
const title = "" ?? "Untitled";     // 👉 "" (NOT "Untitled")
const isActive = false ?? true;     // 👉 false (NOT true)
const count = 0 ?? 10;              // 👉 0 (NOT 10)

// Why not just use ||?
// Because || treats falsy values (false, 0, "", NaN, null, undefined) the same:

const title1 = "" || "Untitled";      // 👉 "Untitled" (overrides empty string)
const title2 = "" ?? "Untitled";      // 👉 "" (keeps empty string)

function greet(user) {
  const username = user?.name ?? "Guest";
  console.log(`Hello, ${username}`);
}

greet({ name: "Ahmad" }); // Hello, Ahmad
greet({});                // Hello, Guest
greet(null);              // Hello, Guest




// 🧱 1. Own Properties:
// 💡 "Own" means the property exists directly on the object, not on its prototype chain.

const OwnUser = {
  name: "Ahmad"
};

console.log(OwnUser.hasOwnProperty("name")); // ✅ true
console.log(OwnUser.hasOwnProperty("toString")); // ❌ false — inherited from Object.prototype

// So:
// name is an own property.
// toString is inherited — not an own property.

// 📋 2. Enumerable Properties:
// 💡 "Enumerable" means the property shows up in loops like for...in, and in Object.keys().


const EnumerableUser = {
  name: "Ahmad"
};

Object.defineProperty(EnumerableUser, "secret", {
  value: "hidden info",
  enumerable: false // explicitly make it non-enumerable
});

console.log(Object.keys(EnumerableUser)); // ["name"]
for (let key in EnumerableUser) {
  console.log(key); // logs only "name", not "secret"
}

// secret is an own property, but not enumerable.
// It's still on the object, just hidden from loops.

const everythingUser = {
  name: "Ahmad"
};

Object.defineProperty(everythingUser, "secret", {
  value: "hidden",
  enumerable: false
});

console.log("Own keys:", Object.keys(everythingUser)); // enumerable own keys only
console.log("All own property names:", Object.getOwnPropertyNames(everythingUser)); // includes non-enumerables
console.log("Own symbol keys:", Object.getOwnPropertySymbols(everythingUser)); // only symbol keys



// Final Version:
// 🔹 enumerable is a property attribute (a flag) that exists for every property (key-value pair) in a JavaScript object.

// 🔹 It can be set to true or false:

// If enumerable: true → the property will be included in:

// for...in loops

// Object.keys()

// Object.entries()

// JSON.stringify()

// If enumerable: false → the property will be hidden from those tools, but still accessible directly using obj.key.


const object1 = {1: "a", 2: "b"}
const object2 = {3: "c", 4: "d"}

// const object3 = { object1, object2 }
const object3 = Object.assign(object1, object2);
console.log(object3)

// The Object.assign() static method copies all "enumerable", "own properties" from one or more source objects to a target object. It returns the modified target object.
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true


// {} is an empty object that becomes the target.
// It ensures you're creating a new object, rather than mutating the existing ones.
const source1 = { a: 1, b: 2 };
const source2 = { c: 3, d: 4 };
const source3 = { e: 5, f: 6 };


const returnedTarget2 = Object.assign({}, source1, source2, source3); // {} is the target array, where the combinition of source1, source2, source3
console.log(returnedTarget2); // { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }


const spreadObject = { ...source1, ...source2}
console.log("Spread Operator result: ", spreadObject)

const responseUser = [
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 2,
        email: "def@gmail.com"
    },
    {
        id: 3,
        email: "jhi@gmail.com"
    },
]

console.log(responseUser[1].email);

console.log(Object.keys(user))
console.log(Object.values(user));
console.log(Object.entries(user))
console.log(user.hasOwnProperty("isLoggedIn"));
console.log(user.hasOwnProperty("isLoggedInUser"));
