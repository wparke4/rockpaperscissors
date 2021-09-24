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
        //if userChoice is not valid, throw error
        console.log("error");
    }
    return validUserChoice;
}



function battle(userChoice) {
    //call validateUserChoice function
    let validUserChoice = validateUserChoice(userChoice);
    //define compChoice as the result of mentioned function
    let compChoice = compChoiceSelector();
    let result;
    //if the choices are the same, it is a draw
    if(validUserChoice === compChoice) {
        result = "draw";
    } else if((validUserChoice === "rock" && compChoice === "paper") || (validUserChoice === "paper" && compChoice === "scissors") || (validUserChoice === "scissors" && compChoice === "rock")) {
        result = "You Lose! " + compChoice + " beats " + validUserChoice; 
    } else {
        result = "You Win! " + validUserChoice + " beats " + compChoice;
    }
    return result;
    console.log(result);
}