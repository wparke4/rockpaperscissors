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

//this function will validate whether userChoice is valid or not
function validateUserChoice(userChoice) {
    //ensure userChoice is valied i.e. rock paper or scissors
    //if valid, defining validUserChoice to use for battle function
    let lowerCaseChoice = userChoice.toLowerCase();
    let validUserChoice;
    if(lowerCaseChoice === "rock" || lowerCaseChoice === "paper" || lowerCaseChoice === "scissors") {
        validUserChoice = lowerCaseChoice;
    } else { 
        validUserChoice = 'Please enter a valid option';
    }
    return validUserChoice;
}



function battle(userChoice) {
    //define compChoice as the result of mentioned function
    let compChoice = compChoiceSelector();
    let result;
    //call validateUserChoice function
    let validUserChoice = validateUserChoice(userChoice);
    if(validUserChoice === 'Please enter a valid option') {
        console.log(validUserChoice);
    } else if(validUserChoice === compChoice) {
        result = "draw";
    } else if((validUserChoice === "rock" && compChoice === "paper") || (validUserChoice === "paper" && compChoice === "scissors") || (validUserChoice === "scissors" && compChoice === "rock")) {
        result = "You Lose! " + compChoice + " beats " + validUserChoice; 
    } else {
        result = "You Win! " + validUserChoice + " beats " + compChoice;
    }
    return result;
    console.log(result);
}