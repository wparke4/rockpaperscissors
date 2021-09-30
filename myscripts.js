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

<<<<<<< HEAD
//this function will validate whether userChoice is valid or not
function validateUserChoice(userChoice) {
    //ensure userChoice is valied i.e. rock paper or scissors
    //if valid, defining validUserChoice to use for battle function
    let lowerCaseChoice = userChoice.toLowerCase();
    let validUserChoice;
    if(lowerCaseChoice === "rock" || lowerCaseChoice === "paper" || lowerCaseChoice === "scissors") {
        validUserChoice = lowerCaseChoice;
    } else { 
        //if userChoice is not valid, throw error
        console.log("Please choose rock, paper, or scissors");
    }
    return validUserChoice;
=======
//grabbing the three images to add event listeners to them
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

//hover event handlers below. adds the hovering class to element
rock.addEventListener('mouseover', function() {
    rock.classList.add("hovering");
});

paper.addEventListener('mouseover', function() {
    paper.classList.add("hovering")
});

scissors.addEventListener('mouseover', function() {
    scissors.classList.add("hovering")
});

//grabbing body in order to append its child and display the results
let body = document.querySelector('body');
//referencing footerContainer so I can insert div before it
let footerContainer = document.querySelector('.footerContainer');


//creates element, appends it to the body inserting before the footer, creates text using parameter of results of battle
function createDiv(str) {
    const div = document.createElement('div');
    body.insertBefore(div, footerContainer);
    div.classList.add('resultStyle');
    div.textContent = str;
>>>>>>> e45aaaa83e43e5bf72625340b6d21f997b0bb258
}

//click event handlers for rock paper scissors below. user makes choice by clicking on image
rock.addEventListener('click', function() {
    let result = battle('rock');
    createDiv(result);
}
);

paper.addEventListener('click', function() {
    let result = battle('paper');
    createDiv(result);
}
);

scissors.addEventListener('click', function() {
    let result = battle('scissors');
    createDiv(result);
}
);

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


