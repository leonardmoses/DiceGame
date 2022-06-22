
let randomNumber1 = Math.ceil(Math.random()*6)
let randomNumber2 = Math.ceil(Math.random()*6)

let dice1 = document.querySelector('.img1')
let dice2 = document.querySelector('.img2')

dice1.setAttribute('src', `images/dice${randomNumber1}.png`)
dice2.setAttribute('src', `images/dice${randomNumber2}.png`)


console.log(dice1)
console.log(dice1.getAttribute("src"))
console.log(randomNumber1)

