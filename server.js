// we will use express
const { response } = require('express')
const express = require('express')
const app = express()


app.use(express.json({ extended: true }))
app.set(`views`, __dirname)
app.get(`/`, (request, response) => {
    response.sendFile(__dirname + `/index.html`)
})
app.use(express.static(`public`))
app.listen(3000, () => {
    console.log(`listening on 3000`)
})

let gameRandomNumber = getRandom()

app.get('/play', (req, res) => {
  //get playerChoice arg
  const playerChoice = req.query.guess

  // checkNumbers(playerChoice, gameRandomNumber, counter)
  let guess = hotCold(playerChoice, gameRandomNumber)
  console.log(guess)

  res.json({playerChoice: playerChoice, random: gameRandomNumber, guess: guess})
})

function getRandom(){
  return Math.floor(Math.random() * 100) + 1
}

function hotCold(playerChoice, gameRandomNumber){
  let guess = Math.abs(playerChoice - gameRandomNumber)
  if(guess <= 4) return guess
  else if(guess <= 7) return guess
  else if(guess <= 10) return guess
  else if(guess >= 13 && guess <= 14) return guess
  else if(guess >= 15 && guess <= 19) return guess
  else if(guess >= 20) return guess
}