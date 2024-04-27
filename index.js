function getComputerChoice() {

    var number = Math.floor(Math.random() * 10);

    if (number <= 3) {
        return "rock";
    } else if (number > 3 && number <= 6) {
        return "paper";
    } else {
        return "scissors";
    }
}


function getHumanChoice() {
    return prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        function playRound(humanChoice, computerChoice) {
            humanChoice = humanChoice.toLowerCase();
            console.log("Human choice: " + humanChoice);
            console.log("Computer choice: " + computerChoice);
        
            if (humanChoice === computerChoice) {
                console.log("It's a tie!");
              } else if (
                (humanChoice === "rock" && computerChoice === "scissors") ||
                (humanChoice === "paper" && computerChoice === "rock") ||
                (humanChoice === "scissors" && computerChoice === "paper")
              ) {
                console.log("You win!");
                humanScore++;
              } else {
                console.log("You lose!");
                computerScore++;
              }
            }
        
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        playRound(humanSelection, computerSelection);
    }
  
    console.log("Final Scores:");
    console.log("Human:", humanScore);
    console.log("Computer:", computerScore);
  
    if (humanScore > computerScore) {
      console.log("You win the game!");
    } else if (humanScore < computerScore) {
      console.log("You lose the game!");
    } else {
      console.log("It's a tie game!");
    }
  }
  
  playGame();