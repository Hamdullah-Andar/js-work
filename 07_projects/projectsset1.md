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

## Project 3

```javascript

  const clock = document.querySelector('#clock');

  setInterval(() => {
    const date = new Date().toLocaleTimeString();
    clock.innerHTML = date
  }, 1000)

```

## Project 4

```javascript

  let randomNumber = parseInt(Math.random() * 100 + 1);

  const submit = document.querySelector("#subt");
  const userInput = document.querySelector("#guessField");
  const guessSlot = document.querySelector(".guesses");
  const remaining = document.querySelector(".lastResult");
  const lowOrHi = document.querySelector(".lowOrHi");
  const startOver = document.querySelector(".resultParas");

  const p = document.createElement("p");

  let prevGuess = [];
  let numGuess = 0;

  let playGame = true;

  if (playGame) {
    submit.addEventListener("click", (e) => {
      e.preventDefault();
      const guess = parseInt(userInput.value);
      validateGuess(guess);
    });
  }

  function validateGuess(guess) {
    if (isNaN(guess) || guess < 1 || guess > 100) {
      alert("Please Enter a valid Number between 1 to 100");
    } else {
      prevGuess.push(guess);
      displayGuess(guess);
      checkGuess(guess);
    }
  }

  function checkGuess(guess) {
    if (guess === randomNumber) {
      displayMessage("You won");
      endGame();
    } else if (numGuess === 10) {
      displayMessage(`Game Over. random number was ${randomNumber}`);
      endGame();
    } else if (guess < randomNumber) {
      displayMessage("Enter value is Lover");
    } else if (guess > randomNumber) {
      displayMessage("Enter number is Higher");
    }
  }

  function displayGuess(guess) {
    userInput.value = "";
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${10 - numGuess}`;
  }

  function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
  }

  function endGame() {
    (userInput.value = ""), userInput.setAttribute("disabled", true);
    p.classList.add("button");
    p.innerHTML = `<h2 id='newGame'>Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
  }

  function newGame() {
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener("click", () => {
      randomNumber = parseInt(Math.random() * 100 + 1);
      prevGuess = [];
      numGuess = 0;
      guessSlot.innerHTML = "";
      remaining.innerHTML = `${10}`;
      userInput.removeAttribute("disabled");
      startOver.removeChild(p);
      playGame = true;
    });
  }


```