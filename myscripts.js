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

let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let body = document.querySelector("body");

rock.addEventListener('click', function() {
    let result = battle('rock');
    console.log(result);
}
);

paper.addEventListener('click', function() {
    let result = battle('paper');
    console.log(result);
}
);

scissors.addEventListener('click', function() {
    let result = battle('scissors');
    console.log(result);
}
);

rock.mouseover = function() {
    console.log("hovering rock");
}

paper.mouseover = function() {
    console.log("hovering paper");
}

scissors.mouseover = function() {
    console.log("hovering scissors");
}

function battle(userChoice) {
    //define compChoice as the result of mentioned function
    let compChoice = compChoiceSelector();
    let result;
    //if the choices are the same, it is a draw
    if(userChoice === compChoice) {
        result = "draw, you both chose " + compChoice;
    } else if((userChoice === "rock" && compChoice === "paper") || (userChoice === "paper" && compChoice === "scissors") || (userChoice === "scissors" && compChoice === "rock")) {
        result = "You Lose! " + compChoice + " beats " + userChoice; 
    } else {
        result = "You Win! " + userChoice + " beats " + compChoice;
    }
    return result;
}


