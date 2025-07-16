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