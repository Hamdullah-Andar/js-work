const form = document.querySelector('form')

    // this usecase will give you empty
    // const height = Number(document.querySelector('#height').value)


    // Why should input field data be selected inside the form (in the submit handler)?
    // Short version: Because you want the latest value when the form is submitted.
    // Longer answer:If you do this outside the event listener:
    // const height = document.querySelector('#height');
    // ...it grabs the input element once, at the moment the script runs. This is fine if the input exists immediately and you never care about changes.

    // But if:
    // The input might not be there yet (e.g., loaded dynamically)
    // You want the most current value the user typed right before hitting Submit
    // Then selecting the element inside the submit event handler ensures you get it after the user has interacted with it.


form.addEventListener('submit', (event) => {
    event.preventDefault();

    // What if the input doesn’t have a value attribute?
    // Let’s clear a small but important misconception:
    // value="" in HTML is just the initial value.
    // <input type="text" id="height" value="default" />
    // But if you don’t set a value attribute in HTML:
    // <input type="text" id="height" />
    // That’s totally fine. The browser still keeps track of what the user types in, and you can always access it via:
    // document.querySelector('#height').value;
    // Even though there’s no value attribute in the HTML, .value will return whatever the user typed.
    
    const height = Number(document.querySelector('#height').value)
    const weight = Number(document.querySelector('#weight').value)
    const result = document.querySelector('#results')

    // Feature                      parseInt()	                                Number()
    // Parses till invalid char	    Yes (stops at first non-digit)	            No (returns NaN if entire string isn't a valid number)
    // Handles spaces	            Ignores leading spaces	                    Ignores leading/trailing spaces
    // Handles decimals	            Yes, but truncates (only integer part)	    Yes, returns full number (float or int)
    // Radix (base) supported	    Yes (can convert binary, hex, etc.)	        No (base-10 only)
    // Returns	                    Always an integer	                        Can return integer or float

    // parseInt("42")       // 42
    // parseInt("42px")     // 42
    // parseInt("3.14")     // 3
    // parseInt("   123abc")// 123
    // parseInt("abc")      // NaN
    // parseInt("10", 2)    // 2 (binary 10)

    // Number("42")         // 42
    // Number("3.14")       // 3.14
    // Number("42px")       // NaN
    // Number("   123  ")   // 123
    // Number("abc")        // NaN
    // Number("10")         // 10


    if(height === '' || height < 0 || height === 0 || isNaN(height)){
        result.innerHTML = `Please Enter a valid height : ${height}`
    } else if(weight === '' || weight < 0 || weight === 0 || isNaN(weight)){
        result.innerHTML = `Please Enter a valid weight : ${weight}`
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        if(bmi < 18.6){
            result.innerHTML = `Result : <span>${bmi}</span> (Under Weight)`
        } else if(bmi >= 18.6 && bmi <= 24.9) {
            result.innerHTML = `Result : <span>${bmi}</span> (Normal Weight)`
        } else {
            result.innerHTML = `Result : <span>${bmi}</span> (Over Weight)`
        }
    }
})

// Default behavior of <button> inside a <form> is type="submit".
// Button Situation	        What Happens
// <button>	                Acts like type="submit"
// <button type="submit">	    Submits the form
// <button type="button">	    Just a button — JS only
// <button type="reset">	    Resets all form inputs

// if you set type="reset" on a button inside a <form>, it will reset the form inputs to their original/default values by default, even if you don’t write any JavaScript at all.