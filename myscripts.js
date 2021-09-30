//need to refactor battle and score functions into 3 separate functions for readability and clarity
//1. determines result 
//2. outputs resulting string declaring the winner based on result
//3. modifies score based on result of function 1

//computer choice is chosen randomly. function is called in battle function
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

//grabbing the three images to add event listeners to them
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

//grabbing body in order to append its child and display the results
let body = document.querySelector('body');
//referencing footerContainer so I can insert div before it
let footerContainer = document.querySelector('.footerContainer');
//grabbing div class result text to display the results
let resultText = document.querySelector('.resultText');
//grabbing user and comp <p>
let userScore = document.querySelector('.userScore');
let compScore = document.querySelector('.compScore');

//1. click event handlers for rock paper scissors below. user makes choice by clicking on image
//2. score() and battle() then both called on passing the user choice as argument
//3. resultText content is then changed to the result string of battle()
rock.addEventListener('click', function() {
    score('rock');
    let result = battle('rock');
    resultText.textContent = result
}
);

paper.addEventListener('click', function() {
    score('paper');
    let result = battle('paper');
    resultText.textContent = result
}
);

scissors.addEventListener('click', function() {
    score('scissors');
    let result = battle('scissors');
    resultText.textContent = result
}
);

//determines the winner, passes result back to even listener in form of string declaring the results
function battle(userChoice) {
    //define compChoice as the result of mentioned function
    let compChoice = compChoiceSelector();
    let result;
    //if the choices are the same, it is a draw
    if(userChoice === compChoice) {
        result = "Pergatory, you both chose " + compChoice;
    } else if((userChoice === "rock" && compChoice === "paper") || (userChoice === "paper" && compChoice === "scissors") || (userChoice === "scissors" && compChoice === "rock")) {
        result = "ETERNAL DAMNATION! " + compChoice + " beats " + userChoice; 
    } else {
        result = "Salvation! " + userChoice + " beats " + compChoice;
    }
    return result;
}

//
function score(userChoice) {
    //define compChoice as the result of mentioned function
    let compChoice = compChoiceSelector();
    let score;
    //if the choices are the same, it is a draw
    if(userChoice === compChoice) {
        score = "draw";
    } else if((userChoice === "rock" && compChoice === "paper") || (userChoice === "paper" && compChoice === "scissors") || (userChoice === "scissors" && compChoice === "rock")) {
        score = "compWon";
    } else {
        score = "userWon";
    }
    console.log(score);
}

function 