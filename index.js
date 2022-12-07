// javascript
let Hscore = document.getElementById("homescore") 
let Gscore = document.getElementById("guestscore")
let total_G = document.getElementById("totalS")
let reset_G = document.getElementById("homescore")
let reset_H= document.getElementById("guestscore") 

//var Hscore = document.getElementsByClassName("homescore")
let scoreH = 0
let scoreG = 0
let totalScore = 0
let resetScore = 0
//console.log(Hscore)

function plusone(){
    scoreH +=1
   Hscore.textContent = scoreH
}

function plusoneG(){
       scoreG +=1
    Gscore.textContent = scoreG
}

function plustwo(){
   scoreH +=2
   Hscore.textContent = scoreH  
}

function plustwoG(){
   scoreG +=2
   Gscore.textContent = scoreG
    
}

function plusthree(){
    scoreH +=3
    Hscore.textContent = scoreH
    
}

function plusthreeG(){
    scoreG +=3
    Gscore.textContent = scoreG
}

function total(){
    let totalScore = scoreG + scoreH
    total_G.textContent = totalScore
    
    
}
function reset(){
    //let resetScore = scoreG + scoreH
    //let resetScore =0
    reset_G.textContent = 0
    reset_H.textContent = 0
    total_G.textContent = 0
    scoreH = 0
    scoreG = 0
    //total_G = 0
}