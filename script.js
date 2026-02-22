
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let randomNumber = Math.random();

    if (randomNumber < 1/3){
        return "rock"
    }
    else if (randomNumber < 2/3){
        return "paper"
    }
    else{
        return "scissors"
    };
}

function getHumanChoice(){
    let humanChoice = prompt("Choose rock, paper, or scissors.");
    return humanChoice.toLowerCase();
}

function playGame(){
    function playRound(humanChoice, computerChoice){
    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ){
        console.log("You won the round.");
        humanScore++;
    }
    else if (humanChoice === computerChoice)
        {
        console.log("The round was a tie.");
    }
    else{
        console.log("You lost the round.");
        computerScore++;
    };
}

let roundOne = playRound(getHumanChoice(), getComputerChoice());
let roundTwo = playRound(getHumanChoice(), getComputerChoice());
let roundThree = playRound(getHumanChoice(), getComputerChoice());
let roundFour = playRound(getHumanChoice(), getComputerChoice());
let roundFive = playRound(getHumanChoice(), getComputerChoice());

if(humanScore > computerScore){
    console.log("You won the game.");
}
else if(humanScore < computerScore){
    console.log("You lost the game.");
}
else{
    console.log("The game was a tie.")
};

console.log(`You:${humanScore}, Computer:${computerScore}`);
}

playGame();
