const randomColor = () => {
    const hexNumber = '0123456789ABCDEF'
    let color = "#"

    for(let i=0; i<6; i++){
      let randomNumber = Math.floor(Math.random() * 16)
      color += hexNumber[randomNumber]
    }
    return color
  }

  let setIntervalRef = null

  const changeBgColor = function(){
    document.querySelector('body').style.backgroundColor = randomColor()
  }
  const bgColor = function(){
    console.log('Start Clicked')
    if(!setIntervalRef){
      setIntervalRef = setInterval(changeBgColor, 1000)
    }
  }

  document.querySelector('#start').addEventListener('click', bgColor)

  const stopBgColor = function(){
    console.log('Stop Clicked')
    clearInterval(setIntervalRef)
    setIntervalRef = null
  }

  document.querySelector('#stop').addEventListener('click', stopBgColor)