//DOM Assignments
let dice1 = document.querySelector('.img1')
let dice2 = document.querySelector('.img2')
let winH1 = document.querySelector('#h1')
let btnRoll = document.querySelector('button')

btnRoll.addEventListener('click' , rollDice)

//function to roll the dice
function rollDice() {
    //Random Generator
    let randomNumber1 = Math.ceil(Math.random()*6)
    let randomNumber2 = Math.ceil(Math.random()*6)

    //Set Random Num to DOM Image
    dice1.setAttribute('src', `images/dice${randomNumber1}.png`)
    dice2.setAttribute('src', `images/dice${randomNumber2}.png`)

    if (randomNumber1 > randomNumber2) {
        winH1.innerHTML = 'Player 1 Wins!'
    } else if (randomNumber2 > randomNumber1) {
        winH1.innerHTML = 'Player 2 Wins!'
    } else {
        winH1.innerHTML = 'Draw!'
    }
}

//console logs
console.log(dice1)
console.log(dice1.getAttribute("src"))
console.log(btnRoll)