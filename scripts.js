function computerPlay() {
    let results = ['Rock', 'Paper', 'Scissors'];
    return results[Math.floor(Math.random()*results.length)]
}

function playRound(playerSelection, computerSelection) {
    lowercasePlayer = playerSelection.toLowerCase();
    lowercaseComp = computerSelection.toLowerCase();
    if (lowercasePlayer == "rock" && lowercaseComp == "scissors"){
        return("You Win! Rock beats Scissors!");
    }
}