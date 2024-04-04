
/* let bonusPoints = 50
bonusPoints = bonusPoints + 50
console.log(bonusPoints)

bonusPoints = bonusPoints - 75
console.log(bonusPoints)

bonusPoints = bonusPoints + 45
console.log(bonusPoints) 
*/

let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save_el");
let count = 0

function increment(){
     //console.log("The Increment Button is Clicked")
     count += 1
     countEl.textContent = count
}

function saveCount(){
    let countStr =" " + count + "-"
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    //console.log("count")
}



//increment()
//saveCount()
/*
let name = "sibu"
let greeting = "Hi, my name is "
let myGreeting = greeting + name

console.log(myGreeting) */