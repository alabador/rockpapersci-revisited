/*Variables*/
const rock = document.querySelector(".rock-button");
const paper = document.querySelector(".paper-button");
const scissors = document.querySelector(".scissors-button");


function computerPlay() {
    let results = ['Rock', 'Paper', 'Scissors'];
    return results[Math.floor(Math.random()*results.length)]
}

function playRound(playerSelection, computerSelection) {
    lowercasePlayer = playerSelection.toLowerCase().toString();
    lowercaseComp = computerSelection.toLowerCase().toString();
    if (lowercasePlayer == "rock" && lowercaseComp == "scissors"){
        return("You Win! Rock beats Scissors!");
    }
    else if (lowercasePlayer == "rock" && lowercaseComp == "paper"){
        return("You Lose! Rock loses to Paper!")
    }
    else if (lowercasePlayer == "rock" && lowercaseComp == "rock"){
        return("It's a tie! Rock ties with Rock.")
    }
    else if (lowercasePlayer == "paper" && lowercaseComp == "rock"){
        return("You Win! Paper beats Rock!")
    }
    else if (lowercasePlayer == "paper" && lowercaseComp == "scissors"){
        return("You Lose! Paper loses to Scissors!")
    }
    else if (lowercasePlayer == "paper" && lowercaseComp == "paper"){
        return("It's a tie! Paper ties with Paper.")
    }
    else if (lowercasePlayer == "scissors" && lowercaseComp == "paper"){
        return("You Win! Scissors beats Paper!")
    }
    else if (lowercasePlayer == "scissors" && lowercaseComp == "rock"){
        return("You Lose! Scissors loses to Rock!")
    }
    else if (lowercasePlayer == "scissors" && lowercaseComp == "scissors"){
        return("It's a tie! Scissors ties with Scissors.")
    }
}


function game() {
    let playerScore = 0;
    let compScore = 0;

     
    playerInput = window.prompt("Rock, Paper, or Scissors?");
    let result = playRound(playerInput, computerPlay());

    if ((result.includes("Win"))) {
        ++playerScore;
        console.log("win");
    }

    else if ((result.includes("Lose"))) {
        ++compScore;
        console.log("loss");
    }

    console.log(result + " Player Score:" + playerScore + "  Computer Score:" + compScore);


    if (playerScore > compScore) {
        console.log("Player wins!");
    }
    else if (playerScore < compScore) {
        console.log("Computer wins!");
    }
    else if (playerScore == compScore) {
        console.log("It's a tie.");
    }
}
