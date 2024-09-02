let humanScore = 0;
let computerScore = 0;

//function that generates computer choice betweet rock paper and scissors
function getComputerChoice() {
    let compChoice;
    let randomNumber = Math.random();
    compChoice = (randomNumber <= 0.34) ? "rock" :
        (randomNumber <= 0.67) ? "paper" :
            "scissors";
    return compChoice;
}

//function that that takes human input between rock paper and scissors
function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
    console.log(humanChoice);
    return humanChoice;
}

function playRound(compChoice, humanChoice) {
    if (humanChoice === "rock") {
        switch (compChoice) {
            case "paper":
                console.log("Computer chose Paper! You lose!");
                ++computerScore;
                break;
            case "scissors":
                console.log("Computer chose Scissors! You win!");
                ++humanScore;
                break;
            default:
                console.log("Computer chose Rock! It's a tie");
        }
    } else if (humanChoice === "paper") {
        switch (compChoice) {
            case "paper":
                console.log("Computer chose Paper! Tie!");
                break;
            case "scissors":
                console.log("Computer chose Scissors! You lose!");
                ++computerScore;
                break;
            default:
                console.log("Computer chose Rock! You win!");
                ++humanScore;
        }
    } else {
        switch (compChoice) {
            case "paper":
                console.log("Computer chose Paper! You win!");
                ++humanScore;
                break;
            case "scissors":
                console.log("Computer chose Scissors! It's a Tie!");
                
                break;
            default:
                console.log("Computer chose Rock! You win!");
                ++computerScore;
        }
    }
}

for (let i = 0; i < 5; i++) {
    playRound(getComputerChoice(), getHumanChoice());
    console.log("Your Score: " + humanScore + "\n" +  "Computer Score: " + computerScore);
}

let results = (computerScore > humanScore) ? "Computer Wins!" : 
    (humanScore > computerScore) ? "Player Wins!" : 
    "It's A Tie!";
   
console.log(results);    



//scoring system

