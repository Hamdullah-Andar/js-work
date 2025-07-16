# Projects of DOM

## project link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## Project 1

```javascript
    const button = document.querySelectorAll(".button")

        // const body = document.querySelector("body")
        const body = document.body

        button.forEach((btn) => {
            btn.addEventListener("click", (e) => {
                if(e.target.id === btn.getAttribute('id')){
                body.style.backgroundColor = e.target.id
            }
        })
    })

```

## Project 2

```javascript

const form = document.querySelector('form')

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const height = Number(document.querySelector('#height').value)
  const weight = Number(document.querySelector('#weight').value)
  const result = document.querySelector('#results')

  console.log("height ", height)
  console.log("weight ",weight)

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


```