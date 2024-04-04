let cardsArray = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message;

let messageEl = document.getElementById("message_el")
let sumEl = document.getElementById("sumVal")
//let sumEl = document.querySelector("#sumVal")
let cardEl = document.getElementById("cards")
let playerEl = document.getElementById("player-el")

let player={
    name: "Sibu",
    chips: 150
}

playerEl.textContent = player.name + ":$" + player.chips

function getrandomCard(){
    let  randomNum = Math.floor(Math.random() * 13) + 1
    if(randomNum > 10){
        return 10
    }else if(randomNum === 1){
        return 11
    }else{
        return randomNum
    }
}

function startGame(){
    isAlive = true
    let firstCard = getrandomCard()
    let secondCard = getrandomCard()
    cardsArray = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame();
}

function renderGame(){
        cardEl.textContent = "Cards: " 
        for(let i=0; i<cardsArray.length;i++){
            cardEl.textContent += cardsArray[i] + " " 
        }
        sumEl.textContent ="Sum: " + sum
        if(sum <=20){
            message = "Do you want to draw a new card"
        }else if(sum === 21){
            message = "Congrats!, You've got a BlackJack "
            hasBlackJack = true
        }else{
            message = "You're out of the game"
            isAlive = false
        }
        messageEl.textContent = message
}

function newCard(){
    if(isAlive === true && hasBlackJack === false){
       let card = getrandomCard()
       sum += card
       cardsArray.push(card)
       renderGame();
    }
}

/*                                             &&, or, not Operators
let hasSolvedChallenge = false
let hasHintsLeft = false

if(hasSolvedChallenge === false && hasHintsLeft === false){
    showSolution()
}

function showSolution(){
    console.log("Showing the Solution")
}

let likeDocumentaries = true
let likeStartUps = false

if(likeDocumentaries === true || likeStartUps === false){
    recommendMovie()
}

function recommendMovie(){
    console.log("The great Documentaries")
}
*/

/*                                          Math() Functions
let rannum = Math.random()
console.log(rannum)

let res = Math.floor(rannum)
console.log(res)

let FLooring = Math.floor(Math.random() * 6)
console.log(FLooring)

Flooring = Math.floor(Math.random() * 6) + 1
console.log(Flooring)

function rollDice(){
    let randomNum = Math.floor(Math.random() * 6) + 1
    return randomNum
}

console.log(rollDice())
*/

/*                                    Returning Values in Function()

let TotalRaceTime = 100
function totalracetime(){
    if(TotalRaceTime < 200){
        return 100
    }else if(TotalRaceTime <= 150){
        return 150
    }else{
        return 100
    }
}

let res = totalracetime()
console.log(res)
*/

/*                                           Sample Of for Loop

for(let count=10; count <101 ; count+=10){
    //console.log(count)
}

let cards =[7,3,9]
for(let i=0; i<cards.length;i++){
    console.log(cards[i])
}
*/

/*                                            Sample of Arrays

let education = [
    "I've completed my 10th std from palani " , 
    "Then I completed my 12th std from coimbatore", 
    "Recently I completed my under graduation in CMS college from coimbatore",    
]
//find the length of the array
console.log(education.length)
//push the item into the array
var currentEducation = "Currently I pursuing my Master degree in KGiSL from Coimbatore"
education.push(currentEducation)
console.log(education)
//delete the last itm in the array
education.pop()
console.log(education)



let me = ["Siva", 22, true]

let cards = [2,7]
cards.push(3)
console.log(cards)
cards.pop()
console.log(cards)
*/ 

/*                                        Sample using if conditions
let age = 22
if(age < 22){
    console.log("You're not allow inside the club")
}
else{
    console.log("You're welcome!")
} */