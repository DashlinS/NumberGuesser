let counter = 0

document.querySelector('button').addEventListener('click', playGame)
document.querySelector('.reset').addEventListener('click', reset)

let remaining = document.querySelector('.remaining')
let answer = document.querySelector('.messageSection h2')
let changeColor = document.querySelector('.messageSection')
let gameRandomNumber = Math.floor(Math.random() * 100) + 1
let lastNum = document.querySelector('h5')

function playGame(){
  let playerGuess = Number(document.querySelector('input').value)
  counter++
  lastNum.innerText = `Last Guess: ${playerGuess}`
  // console.log(counter)
  checkNumbers(playerGuess, gameRandomNumber)
  if(counter === 10 || playerGuess === gameRandomNumber){

    document.querySelector('button').removeEventListener('click', playGame)
    if(counter === 10){
      document.querySelector('.messageSection h2').innerText = 'Game Over!'
      document.querySelector('.messageSection h3').innerText = `The Number was ${gameRandomNumber}!`
      changeColor.style.backgroundColor = "black"
    }
    else if(playerGuess === gameRandomNumber){
      document.querySelector('.messageSection h2').innerText = 'Good Job!'
    }
  }
  console.log(`guess: ${playerGuess}, computer:${gameRandomNumber}`)
  counterChecker(counter)
}

function checkNumbers(playerGuess, gameRandomNumber){
  hotCold(playerGuess, gameRandomNumber)
  if(playerGuess === gameRandomNumber){
    answer.innerText = ''
    document.querySelector('.messageSection h3').innerText = "Yay, You found it!!"
    changeColor.style.backgroundColor = "black"
  }
  else {

    document.querySelector('.messageSection h3').innerText = 'Non, not yet..'
  }
}

function counterChecker(counter){
  let remainingTries = 10 - counter
  remaining.innerText = `Tries Left: ${remainingTries}`
}

function hotCold(playerGuess, gameRandomNumber){
  let guess = Math.abs(playerGuess - gameRandomNumber)
  if(guess <= 4){
    answer.innerText = 'You Teleported to the Sun.. Keep going!'
    changeColor.style.backgroundColor = 'red'
  }
  else if(guess <= 7){
    answer.innerText = 'Hot...!'
    changeColor.style.backgroundColor = 'rgb(226, 79, 74)'
  }
  else if(guess <= 10){
    answer.innerText = 'Warmer.. Almost'
    changeColor.style.backgroundColor = 'rgb(214, 112, 28)'
  }
  else if(guess >= 13 && guess <= 14){
    answer.innerText = 'Cold!'
    changeColor.style.backgroundColor = 'cyan'
  }
  else if(guess >= 15 && guess <= 19){
    answer.innerText = 'Colder..'
    changeColor.style.backgroundColor = 'lightblue'
  }
  else if(guess >= 20){
    answer.innerText = 'Noo! You have Frost Bite!!'
    changeColor.style.backgroundColor = 'blue'
  }
}

function reset(){
  location.reload()
}


