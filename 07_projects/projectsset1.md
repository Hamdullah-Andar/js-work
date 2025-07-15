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