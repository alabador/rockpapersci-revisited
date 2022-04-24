/*Variables*/
const rock = document.querySelector("#rock-button");
const paper = document.querySelector("#paper-button");
const scissors = document.querySelector("#scissors-button");
const reset = document.querySelector(".reset-button");

let playerResults = document.querySelector('#player-results');
let computerResults = document.querySelector('#computer-results');

let playerScore = 0;
let compScore = 0;

/*Event Listeners for buttons*/
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


/*Function for computer to randomly select 
from rock, paper or scissors*/

function computerPlay() {
    let results = ['Rock', 'Paper', 'Scissors'];
    return results[Math.floor(Math.random()*results.length)]
}

/*Takes in player selection from event listener and 
computer selection from computerPlay(). 
Checks who wins that round in winCons(), 
and checks overall winner when calling checkWin()
*/

function playRound(playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let compSelection = computerPlay().toLowerCase();
    winCons(playerSelection, compSelection);

    //Updates html to mirror score
    playerResults.innerText = playerScore;
    computerResults.innerText = compScore;
    console.log(`Player score: ${playerScore} | Comp Score: ${compScore}`);
    checkWin();
}

/*Resets scores and text on screen*/

function resetGame() {
    playerScore = 0;
    compScore = 0;
    playerResults.innerText = playerScore;
    computerResults.innerText = compScore;
    console.log(`Player score: ${playerScore} | Comp Score: ${compScore}`);
}

/*Checks overall winner based on scores */

function checkWin() {
    if (playerScore > 4) {
        console.log('player wins');
        
    }
    else if (compScore > 4) {
        console.log('computer wins');
    }
};

/*Checks for the winner of a single round of RPS*/

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