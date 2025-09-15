// Global score variables
let humanScore = 0;
let computerScore = 0;

// Existing functions
function getComputerChoice() {
    return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    const validChoices = ["rock", "paper", "scissors"];
    let input;
    
    while (true) {
        input = prompt("Please choose: rock, paper, or scissors").toLowerCase().trim();
        
        if (validChoices.includes(input)) {
            return input;
        } else {
            alert("Invalid choice! Please enter only: rock, paper, or scissors");
        }
    }
}

// Example of how you might use them in a game function
function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    
    // Game logic would go here to determine winner and update scores
    // hum
    // anScore++ or computerScore++ would be used to update the scores
}

function playGame() {
    // Score variables moved inside playGame
    let humanScore = 0;
    let computerScore = 0;

    function getComputerChoice() {
        return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
    }

    function getHumanChoice() {
        const validChoices = ["rock", "paper", "scissors"];
        let input;
        
        while (true) {
            input = prompt("Please choose: rock, paper, or scissors").toLowerCase().trim();
            
            if (validChoices.includes(input)) {
                return input;
            } else {
                alert("Invalid choice! Please enter only: rock, paper, or scissors");
            }
        }
    }

    function playRound(humanChoice, computerChoice) {
        // Make humanChoice case-insensitive
        humanChoice = humanChoice.toLowerCase();
        
        console.log(`You chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);
        
        // Check for tie first
        if (humanChoice === computerChoice) {
            console.log("It's a tie! Both chose " + humanChoice);
            return; // No score increment for ties
        }
        
        // Determine winner
        if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            // Human wins
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        } else {
            // Computer wins
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        }
        
        // Show current scores
        console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
    }

    // Play 5 rounds
    console.log("Starting Rock Paper Scissors Game! Best of 5 rounds.\n");
    
    for (let round = 1; round <= 5; round++) {
        console.log(`--- Round ${round} ---`);
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log(""); // Empty line for readability
    }

    // Final results
    console.log("=== GAME OVER ===");
    console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
    
    if (humanScore > computerScore) {
        console.log("🎉 You win the game!");
    } else if (computerScore > humanScore) {
        console.log("💻 Computer wins the game!");
    } else {
        console.log("🤝 It's a tie game!");
    }
}

// Start the game
playGame();