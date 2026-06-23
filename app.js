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

/*----------- Event Listeners -----------*/
choices.addEventListener('click', function(event){
    userChoice = event.target.id

    if (userChoice === 'rock'){
        paper.setAttribute('disabled', 'disabled')
        scissors.setAttribute('disabled', 'disabled')
    } else if (userChoice === 'paper') {
        rock.setAttribute('disabled', 'disabled')
        scissors.setAttribute('disabled', 'disabled')
    } else {
        rock.setAttribute('disabled', 'disabled')
        paper.setAttribute('disabled', 'disabled')
    }

    // computer makes a choice
    let randomIndex = Math.floor(Math.random() * 3)
    computerChoice = choicesArr[randomIndex]

    console.log('userChoice: ', userChoice)
    console.log('computerChoice: ', computerChoice)
})

reset.addEventListener('click', function(){
    paper.removeAttribute('disabled')
    scissors.removeAttribute('disabled')
    rock.removeAttribute('disabled')
})

/*-------------- Functions --------------*/
