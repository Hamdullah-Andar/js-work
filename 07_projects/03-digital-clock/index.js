const clock = document.querySelector('#clock');
// const clock = document.getElementById('clock')

setInterval(() => {
  const date = new Date().toLocaleTimeString();
  clock.innerHTML = date
}, 1000)

// function updateClock(){
//   let date = new Date().toLocaleTimeString();
//   clock.innerHTML = date
//   setTimeout(updateClock, 1000)
// }
// updateClock()

// setTimeout(function, milliseconds)
// Executes a function, after waiting a specified number of milliseconds.

// setInterval(function, milliseconds)
// Same as setTimeout(), but repeats the execution of the function continuously.

// setTimeout() only runs the function once after the given delay.
// To make it run repeatedly, you have to call it again inside the function — i.e., call it recursively.

// But setInterval() automatically calls the function every X milliseconds, so you don’t need to call it again manually.