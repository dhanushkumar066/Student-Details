var prompt = require("prompt-sync")()
function guess(guessedNumber)
 {
    var randomNumber = Math.floor(Math.random()*10)+1
    if(randomNumber == guessedNumber)
    {
        console.log("You Guessed Right")
    }
    else{
        console.log("Your Guess is Wrong, Generated Random Number is:"+randomNumber)
    }
}

var guessedNumber = prompt()
guess(guessedNumber)