/*Variables*/
const rock = document.querySelector("#rock-button");
const paper = document.querySelector("#paper-button");
const scissors = document.querySelector("#scissors-button");
const reset = document.querySelector(".reset-button");

let playerResults = document.querySelector('#player-results');
let computerResults = document.querySelector('#computer-results');

let playerScore = 0;
let compScore = 0;


rock.addEventListener('click', () => {
    playRound('rock');
});
paper.addEventListener('click', () => {
    playRound('paper');
});
scissors.addEventListener('click', () => {
    playRound('scissors'); 
});
reset.addEventListener('click', function() {
    resetGame();
});



function computerPlay() {
    let results = ['Rock', 'Paper', 'Scissors'];
    return results[Math.floor(Math.random()*results.length)]
}

function playRound(playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let compSelection = computerPlay().toLowerCase();
    winCons(playerSelection, compSelection);

    //Updates html to mirror score
    playerResults.innerText = playerScore;
    computerResults.innerText = compScore;
    console.log(`Player score: ${playerScore} | Comp Score: ${compScore}`);
}

function resetGame() {
    playerScore = 0;
    compScore = 0;
    playerResults.innerText = playerScore;
    computerResults.innerText = compScore;
    console.log(`Player score: ${playerScore} | Comp Score: ${compScore}`);
}

// function checkSelection(selection) {
//     if (selection === 'rock') {
//         return 
//     }
//     else if (selection === 'paper') {

//     }
//     else if (selection === 'scissors') {

//     }
// }

function win() {
    if (playerScore == 5) {
        console.log('player wins');
        
    }
    else if (compScore == 5) {
        console.log('computer wins');
    }
}

function winCons(playerSelection, compSelection) {
    if (playerSelection == "rock" && compSelection == "scissors"){
        return playerScore++;
    }
    else if (playerSelection == "rock" && compSelection == "paper"){
        return compScore++;
    }
    else if (playerSelection == "rock" && compSelection == "rock"){
        console.log('tie');
        return "It's a tie! Rock ties with Rock.";
    }
    else if (playerSelection == "paper" && compSelection == "rock"){
        return playerScore++;
    }
    else if (playerSelection == "paper" && compSelection == "scissors"){
        return compScore++;
    }
    else if (playerSelection == "paper" && compSelection == "paper"){
        console.log('tie');
        return "It's a tie! Paper ties with Paper.";
    }
    else if (playerSelection == "scissors" && compSelection == "paper"){
        return playerScore++;
    }
    else if (playerSelection == "scissors" && compSelection == "rock"){
        return compScore++;
    }
    else if (playerSelection == "scissors" && compSelection == "scissors"){
        console.log('tie');
        return "It's a tie! Scissors ties with Scissors.";
    }
}