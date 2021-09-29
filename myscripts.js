function compChoiceSelector() {
    //generate number between 0<=X<1
    let num = Math.random();
    //define compChoice or else have to write let in each if else case
    let compChoice;
    if(num < 0.33) {
        compChoice = "rock";
    } else if(num >= 0.66) {
        compChoice = "paper";
    } else {
        compChoice = "scissors";
    }
    return compChoice;
}

let userChoseRock = document.querySelector("#rock");
let userChosePaper = document.querySelector("#paper");
let userChoseScissors = document.querySelector("#scissors");

userChoseRock.onclick = function() {
    let results = battle("rock");
    console.log(results);
}

userChosePaper.onclick = function() {
    let results = battle("paper");
    console.log(results);
}

userChoseScissors.onclick = function() {
    let results = battle("scissors");
    console.log(results);
}

function battle(userChoice) {
    //define compChoice as the result of mentioned function
    let compChoice = compChoiceSelector();
    let result;
    //if the choices are the same, it is a draw
    if(userChoice === compChoice) {
        result = "draw";
    } else if((userChoice === "rock" && compChoice === "paper") || (userChoice === "paper" && compChoice === "scissors") || (userChoice === "scissors" && compChoice === "rock")) {
        result = "You Lose! " + compChoice + " beats " + userChoice; 
    } else {
        result = "You Win! " + userChoice + " beats " + compChoice;
    }
    return result;
}