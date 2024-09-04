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
    const resultDisplay = document.querySelector("#results")

    if (humanChoice === "rock") {
        switch (compChoice) {
            case "paper":
                resultDisplay.textContent = 'Computer chose Paper! You lose!';
                ++computerScore;
                break;
            case "scissors":
                resultDisplay.textContent = 'Computer chose Scissors! You win!';
                ++humanScore;
                break;
            default:
                resultDisplay.textContent = "Computer chose Rock! It's a tie";
        }
    } else if (humanChoice === "paper") {
        switch (compChoice) {
            case "paper":
                resultDisplay.textContent = "Computer chose Paper! It's a tie";
                break;
            case "scissors":
                resultDisplay.textContent = 'Computer chose Scissors! You lose!';
                ++computerScore;
                break;
            default:
                resultDisplay.textContent = "Computer chose Rock! You Win!";
                ++humanScore;
        }
    } else {
        switch (compChoice) {
            case "paper":
                resultDisplay.textContent = "Computer chose Paper! You Win!";
                ++humanScore;
                break;
            case "scissors":
                resultDisplay.textContent = "Computer chose Scissors! It's a tie!"

                break;
            default:
                resultDisplay.textContent = "Computer chose Rock! You lose!";
                ++computerScore;
        }
    }

    const scoreboard = document.querySelector("#scoreboard") 
    scoreboard.textContent = "Player Score: " + humanScore + " " + "Computer Score: " + computerScore; 

    if (humanScore === 5) {
        resultDisplay.textContent = "Player is the Champion!"
        humanScore = 0;
        computerScore = 0;
        scoreboard.textContent = "Player Score: " + humanScore + " " + "Computer Score: " + computerScore; 
    } else if (computerScore === 5) {
        resultDisplay.textContent = "Computer is the Champion!"
        humanScore = 0;
        computerScore = 0;
        scoreboard.textContent = "Player Score: " + humanScore + " " + "Computer Score: " + computerScore; 
    }
}


const rockBtn = document.querySelector("#rock-btn");
rockBtn.addEventListener("click", () => {
    playRound(getComputerChoice(), "rock");
})

const paperBtn = document.querySelector("#paper-btn");
paperBtn.addEventListener("click", () => {
    playRound(getComputerChoice(), "paper");
})

const scissorsBtn = document.querySelector("#scissors-btn");
scissorsBtn.addEventListener("click", () => {
    playRound(getComputerChoice(), "scissors");
})


/* for (let i = 0; i < 5; i++) {
    playRound(getComputerChoice(), getHumanChoice());
    console.log("Your Score: " + humanScore + "\n" +  "Computer Score: " + computerScore);
} 

let results = (computerScore > humanScore) ? "Computer Wins!" : 
    (humanScore > computerScore) ? "Player Wins!" : 
    "It's A Tie!";
   
console.log(results);     */




