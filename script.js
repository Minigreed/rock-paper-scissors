function getHumanChoice(){
    const humanChoice = prompt("Choose Rock, Paper, or Scissors.");
    return humanChoice;
}

function getComputerChoice(){
    const randomNumber = Math.random();

    if (randomNumber < 1/3){
        return "rock"
    } else if (randomNumber < 2/3){
        return "paper"
    } else
        return "scissors";
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice){
        console.log("Tie");
    }
     else if (
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ){ 
        humanScore++;
        console.log("You Win");
        return "human";
    } 
    else {
        computerScore++;
        console.log("You Lose");
        return "computer";
    }

    
}

let roundOne = playRound(getHumanChoice(), getComputerChoice());
let roundTwo = playRound(getHumanChoice(), getComputerChoice());
let roundThree = playRound(getHumanChoice(), getComputerChoice());
let roundFour = playRound(getHumanChoice(), getComputerChoice());
let roundFive = playRound(getHumanChoice(), getComputerChoice());

console.log(`You: ${humanScore}, Computer: ${computerScore}`);

if (humanScore > computerScore){
    console.log("You Won");
} else if(computerScore > humanScore){
    console.log("You Lost");
} else {
    console.log("It was a tie");
};

}

playGame();






