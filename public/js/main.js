let counter = 0
document.querySelector('button').addEventListener('click', playGame)
document.querySelector('.reset').addEventListener('click', reset)

let remaining = document.querySelector('.remaining')
let answer = document.querySelector('.messageSection h2')
let changeColor = document.querySelector('.messageSection')
let lastNum = document.querySelector('h5')

function playGame(){
  counter++
  let playerGuess = Number(document.querySelector('input').value)
  lastNum.innerText = `Last Guess: ${playerGuess}`
  // console.log(counter, gameRandomNumber)
  fetch(`/play?guess=${playerGuess}`)
  .then(response => response.json())
  .then(data => {
  playerChoice = Number(data.playerChoice)
  // console.log(counter, playerChoice, data.random)
  counterChecker(counter)

    hotCold(data.guess)
    if(counter === 10 || playerChoice === data.random){
      document.querySelector('button').removeEventListener('click', playGame)
      if(counter === 10){
        document.querySelector('.messageSection h2').innerText = 'Game Over!'
        document.querySelector('.messageSection h3').innerText = `The Number was ${data.random}!`
        changeColor.style.backgroundColor = "black"
      }
      else if(playerChoice === data.random){
        document.querySelector('.messageSection h2').innerText = 'Good Job!'
      }
    }
    })
    .catch(err => {
      console.log(err)
    })
}

//counter checker
function counterChecker(counter){
  let remainingTries = 10 - counter
  remaining.innerText = `Tries Left: ${remainingTries}`
}


function hotCold(guess){
  // let guess = Math.abs(playerGuess - gameRandomNumber)
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


