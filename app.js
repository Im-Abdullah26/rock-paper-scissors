/*-------------- Constants --------------*/
const choicesArr = ['rock', 'paper', 'scissors']

/*-------------- Variables --------------*/
let userChoice = ''
let computerChoice = ''

/*------ Cached Element References ------*/
const choices = document.querySelector('#choices')

const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')

const reset = document.querySelector('#reset')

const resultDisplay = document.querySelector('#result-display')
console.log(resultDisplay)
/*----------- Event Listeners -----------*/
choices.addEventListener('click', function(event){
    userChoice = event.target.id

    if (userChoice === 'rock'){
        paper.disabled = true
        scissors.disabled = true
    } else if (userChoice === 'paper') {
        rock.disabled = true
        scissors.disabled = true
    } else {
        rock.disabled = true
        paper.disabled = true
    }

    // computer makes a choice
    let randomIndex = Math.floor(Math.random() * 3)
    computerChoice = choicesArr[randomIndex]
    resultDisplay.textContent = `Computer chose: ${computerChoice}.`

    console.log('userChoice: ', userChoice)
    console.log('computerChoice: ', computerChoice)
})

reset.addEventListener('click', function(){
    paper.disabled = false
    scissors.disabled = false
    rock.disabled = false
})

/*-------------- Functions --------------*/