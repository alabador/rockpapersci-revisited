/*Variables*/
const rock = document.querySelector("#rock-button");
const paper = document.querySelector("#paper-button");
const scissors = document.querySelector("#scissors-button");
const reset = document.querySelector(".reset-button");
const winner = document.querySelector("#winner");

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
    checkWin();
}

/*Resets scores and text on screen*/

function resetGame() {
    playerScore = 0;
    compScore = 0;
    playerResults.innerText = playerScore;
    computerResults.innerText = compScore;
    winner.innerText = '';
    enableOnReset();
}

/*Checks overall winner based on scores */

function checkWin() {
    if (playerScore > 4) {
        console.log('player wins');
        winner.innerText = 'Player wins!';
        disableOnWin();
        
    }
    else if (compScore > 4) {
        console.log('computer wins');
        winner.innerText = 'Computer wins!';
        disableOnWin();
    }
};

function disableOnWin() {
    rock.setAttribute('disabled', "");
    paper.setAttribute('disabled', "");
    scissors.setAttribute('disabled', "");
}

function enableOnReset() {
    rock.removeAttribute('disabled');
    paper.removeAttribute('disabled');
    scissors.removeAttribute('disabled');
}

/*Checks for the winner of a single round of RPS*/

function winCons(playerSelection, compSelection) {
    if (playerSelection == "rock" && compSelection == "scissors"){
        winner.innerText = `${playerSelection} beats ${compSelection}`;
        return playerScore++;
    }
    else if (playerSelection == "rock" && compSelection == "paper"){
        winner.innerText = `${playerSelection} loses to ${compSelection}`;
        return compScore++;
    }
    else if (playerSelection == "rock" && compSelection == "rock"){
        winner.innerText = `It's a tie. Both players selected ${playerSelection}`;
        return "It's a tie! Rock ties with Rock.";
    }
    else if (playerSelection == "paper" && compSelection == "rock"){
        winner.innerText = `${playerSelection} beats ${compSelection}`;
        return playerScore++;
    }
    else if (playerSelection == "paper" && compSelection == "scissors"){
        winner.innerText = `${playerSelection} loses to ${compSelection}`;
        return compScore++;
    }
    else if (playerSelection == "paper" && compSelection == "paper"){
        winner.innerText = `It's a tie. Both players selected ${playerSelection}`;
        return "It's a tie! Paper ties with Paper.";
    }
    else if (playerSelection == "scissors" && compSelection == "paper"){
        winner.innerText = `${playerSelection} beats ${compSelection}`;
        return playerScore++;
    }
    else if (playerSelection == "scissors" && compSelection == "rock"){
        winner.innerText = `${playerSelection} loses to ${compSelection}`;
        return compScore++;
    }
    else if (playerSelection == "scissors" && compSelection == "scissors"){
        winner.innerText = `It's a tie. Both players selected ${playerSelection}`;
        return "It's a tie! Scissors ties with Scissors.";
    }
}